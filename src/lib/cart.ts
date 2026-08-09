/**
 * src/lib/cart.ts
 *
 * Abstracție completă pentru gestionarea coșului de cumpărături.
 *
 * MOCK MODE (VITE_USE_MOCK_DATA=true):
 *   - CartDrawer se deschide și arată UI-ul complet (testare vizuală)
 *   - Nicio mutație nu se trimite la Shopify
 *   - Checkout redirect NU funcționează (nu există checkoutUrl real)
 *   - variantId-urile mock (mock-...) sunt IGNORATE — nu ajung la nicio API
 *
 * LIVE MODE (VITE_USE_MOCK_DATA=false):
 *   - cartCreate la primul add — cart.id salvat în localStorage
 *   - cartLinesAdd refolosește cart.id existent
 *   - variantId trebuie să fie GID real din Shopify
 *   - Checkout = redirect la cart.checkoutUrl
 *
 * cart.id e stocat în localStorage sub cheia 'hn_cart_id'
 */

import { shopifyFetch } from './shopify/client'
import {
  CART_CREATE,
  CART_LINES_ADD,
  CART_LINES_UPDATE,
  CART_LINES_REMOVE,
} from './shopify/mutations'
import { GET_CART } from './shopify/queries'
import type {
  ShopifyCart,
  ShopifyCartLine,
  ShopifyCartCreateResponse,
  ShopifyCartLinesAddResponse,
  ShopifyCartLinesUpdateResponse,
  ShopifyCartLinesRemoveResponse,
  ShopifyCartQueryResponse,
} from './shopify/types'

// Mock mode e ACTIV implicit (dacă var nu e setată explicit la 'false')
// Live mode: setează VITE_USE_MOCK_DATA=false în Vercel env vars + adaugă tokenul Shopify
const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA !== 'false'
const CART_ID_KEY = 'hn_cart_id'

// ─── Tipuri normalizate pentru CartContext ────────────────────────────────────

export type CartLineItem = {
  lineId: string
  variantId: string
  productTitle: string
  variantTitle: string
  price: string
  quantity: number
  imageUrl: string | null
  productHandle: string
}

export type CartState = {
  id: string | null
  checkoutUrl: string | null
  lines: CartLineItem[]
  subtotal: string
  total: string
}

export const EMPTY_CART: CartState = {
  id: null,
  checkoutUrl: null,
  lines: [],
  subtotal: '0.00€',
  total: '0.00€',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normalizeCart(cart: ShopifyCart): CartState {
  const lines: CartLineItem[] = cart.lines.edges.map(({ node }: { node: ShopifyCartLine }) => ({
    lineId: node.id,
    variantId: node.merchandise.id,
    productTitle: node.merchandise.product.title,
    variantTitle: node.merchandise.title,
    price: `${parseFloat(node.estimatedCost.totalAmount.amount).toFixed(2)}€`,
    quantity: node.quantity,
    imageUrl: node.merchandise.product.images.edges[0]?.node.url ?? null,
    productHandle: node.merchandise.product.handle,
  }))

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    lines,
    subtotal: `${parseFloat(cart.estimatedCost.subtotalAmount.amount).toFixed(2)}€`,
    total: `${parseFloat(cart.estimatedCost.totalAmount.amount).toFixed(2)}€`,
  }
}

function getStoredCartId(): string | null {
  try {
    return localStorage.getItem(CART_ID_KEY)
  } catch {
    return null
  }
}

function storeCartId(id: string) {
  try {
    localStorage.setItem(CART_ID_KEY, id)
  } catch {
    /* noop — storage unavailable */
  }
}

function clearCartId() {
  try {
    localStorage.removeItem(CART_ID_KEY)
  } catch {
    /* noop */
  }
}

// ─── API publică ──────────────────────────────────────────────────────────────

/**
 * Adaugă un produs la coș.
 * - Dacă nu există un cart → cartCreate
 * - Dacă există → cartLinesAdd
 *
 * @param variantId - GID real din Shopify în live mode (ex: gid://shopify/ProductVariant/123)
 *                    În mock mode acest parametru este ignorat la nivel de API.
 * @param quantity  - câte bucăți (default 1)
 * @returns CartState actualizat, sau EMPTY_CART în mock mode
 */
export async function addToCart(variantId: string, quantity = 1): Promise<CartState> {
  if (USE_MOCK) {
    // Mock mode: nu facem niciun request — CartContext va gestiona starea local
    return EMPTY_CART
  }

  const existingCartId = getStoredCartId()

  if (!existingCartId) {
    // Primul add — creăm un cart nou
    const data = await shopifyFetch<ShopifyCartCreateResponse>({
      query: CART_CREATE,
      variables: {
        input: {
          lines: [{ merchandiseId: variantId, quantity }],
        },
      },
    })

    const { cart, userErrors } = data.cartCreate
    if (userErrors.length > 0) {
      throw new Error(`[cartCreate] ${userErrors.map((e) => e.message).join(', ')}`)
    }

    storeCartId(cart.id)
    return normalizeCart(cart)
  }

  // Cart existent — adăugăm la el
  const data = await shopifyFetch<ShopifyCartLinesAddResponse>({
    query: CART_LINES_ADD,
    variables: {
      cartId: existingCartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
  })

  const { cart, userErrors } = data.cartLinesAdd
  if (userErrors.length > 0) {
    // Cart-ul poate fi expirat (Shopify carts expiră după 10 zile)
    // → ștergem ID-ul vechi și reîncercăm cu un cart nou
    if (userErrors.some((e) => e.code === 'INVALID')) {
      clearCartId()
      return addToCart(variantId, quantity)
    }
    throw new Error(`[cartLinesAdd] ${userErrors.map((e) => e.message).join(', ')}`)
  }

  return normalizeCart(cart)
}

/**
 * Modifică cantitatea unei linii existente din cart.
 * @param lineId  - id-ul liniei din cart (NU variantId)
 * @param quantity - noua cantitate (0 = remove)
 */
export async function updateCartLine(lineId: string, quantity: number): Promise<CartState> {
  if (USE_MOCK) return EMPTY_CART

  const cartId = getStoredCartId()
  if (!cartId) return EMPTY_CART

  if (quantity === 0) {
    return removeCartLine(lineId)
  }

  const data = await shopifyFetch<ShopifyCartLinesUpdateResponse>({
    query: CART_LINES_UPDATE,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
  })

  const { cart, userErrors } = data.cartLinesUpdate
  if (userErrors.length > 0) {
    throw new Error(`[cartLinesUpdate] ${userErrors.map((e) => e.message).join(', ')}`)
  }

  return normalizeCart(cart)
}

/**
 * Elimină o linie din cart.
 * @param lineId - id-ul liniei de șters
 */
export async function removeCartLine(lineId: string): Promise<CartState> {
  if (USE_MOCK) return EMPTY_CART

  const cartId = getStoredCartId()
  if (!cartId) return EMPTY_CART

  const data = await shopifyFetch<ShopifyCartLinesRemoveResponse>({
    query: CART_LINES_REMOVE,
    variables: {
      cartId,
      lineIds: [lineId],
    },
  })

  const { cart, userErrors } = data.cartLinesRemove
  if (userErrors.length > 0) {
    throw new Error(`[cartLinesRemove] ${userErrors.map((e) => e.message).join(', ')}`)
  }

  return normalizeCart(cart)
}

/**
 * Re-hidratează cart-ul din localStorage la reload pagină.
 * Verifică dacă cart-ul mai există pe Shopify (poate fi expirat).
 * @returns CartState sau EMPTY_CART dacă nu există / a expirat
 */
export async function hydrateCart(): Promise<CartState> {
  if (USE_MOCK) return EMPTY_CART

  const cartId = getStoredCartId()
  if (!cartId) return EMPTY_CART

  try {
    const data = await shopifyFetch<ShopifyCartQueryResponse>({
      query: GET_CART,
      variables: { cartId },
    })

    if (!data.cart) {
      clearCartId()
      return EMPTY_CART
    }

    return normalizeCart(data.cart)
  } catch {
    // Cart invalid / expirat
    clearCartId()
    return EMPTY_CART
  }
}

/**
 * Redirect la checkout.
 * În mock mode: nu face nimic (nu există checkoutUrl real).
 * În live mode: redirect la cart.checkoutUrl primit din Shopify.
 */
export function goToCheckout(checkoutUrl: string | null) {
  if (USE_MOCK || !checkoutUrl) {
    console.warn('[cart] Checkout not available in mock mode or missing checkoutUrl')
    return
  }
  window.location.href = checkoutUrl
}

/**
 * Resetează complet cart-ul local (după checkout finalizat).
 */
export function clearCart() {
  clearCartId()
}
