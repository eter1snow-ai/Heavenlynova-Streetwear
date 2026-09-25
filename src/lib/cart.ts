/**
 * src/lib/cart.ts
 *
 * Gestionarea coșului de cumpărături — 100% client-side (localStorage).
 *
 * POST-MIGRARE (v2 — fără Shopify):
 *   Coșul este stocat exclusiv în localStorage sub cheia 'hn_cart_v2'.
 *   Nu există niciun apel GraphQL sau Shopify API.
 *
 * Checkout:
 *   Butonul "Checkout" apelează goToCheckout() care:
 *   1. Trimite cartLines la /api/create-checkout-session (Vercel serverless)
 *   2. Primește un sessionUrl de la Stripe
 *   3. Redirecționează utilizatorul la pagina securizată Stripe
 *
 * Structura variantId:
 *   Format local: `${productId}-${size}` — ex: "essentials-black-M"
 *   Parsing: split('-') → ultimul element = size, restul = productId
 */

import { formatMoney } from './utils'
import { trackPinterestInitiateCheckout } from './pinterest'

// ─── Tipuri ───────────────────────────────────────────────────────────────────

export type CartLineItem = {
  lineId: string          // UUID local generat la add
  variantId: string       // format: `${productId}-${size}`
  productId: string       // ex: "essentials-black"
  size: string            // ex: "M"
  productTitle: string    // ex: "Essential T-Shirt — Black"
  variantTitle: string    // ex: "M"
  price: string           // afișat în UI: "$44.99"
  priceUsd: number        // numeric pentru calcul total și Stripe
  quantity: number
  imageUrl: string | null
  productHandle: string   // același cu productId — pentru link /product/:handle
}

export type CartState = {
  lines: CartLineItem[]
  subtotal: string
  total: string
}

export const EMPTY_CART: CartState = {
  lines: [],
  subtotal: '$0.00',
  total: '$0.00',
}

// ─── Constante ────────────────────────────────────────────────────────────────

const CART_KEY = 'hn_cart_v2'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateLineId(): string {
  return `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function computeCartState(lines: CartLineItem[]): CartState {
  const totalUsd = lines.reduce((acc, l) => acc + l.priceUsd * l.quantity, 0)
  const formatted = formatMoney(totalUsd.toFixed(2), 'USD')
  return {
    lines,
    subtotal: formatted,
    total: formatted,
  }
}

// ─── Persistență localStorage ─────────────────────────────────────────────────

function loadLines(): CartLineItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CartLineItem[]
  } catch {
    return []
  }
}

function saveLines(lines: CartLineItem[]): void {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(lines))
  } catch {
    /* noop — storage unavailable (ex: Safari private mode) */
  }
}

function clearLines(): void {
  try {
    localStorage.removeItem(CART_KEY)
  } catch {
    /* noop */
  }
}

// ─── API publică ──────────────────────────────────────────────────────────────

/**
 * Hidratează coșul din localStorage.
 * Apelat la mount în CartProvider.
 */
export function hydrateCart(): CartState {
  const lines = loadLines()
  return computeCartState(lines)
}

/**
 * Adaugă un produs la coș.
 * Dacă varianta există deja → incrementează cantitatea.
 *
 * @param variantId   - format: `${productId}-${size}` (ex: "essentials-black-M")
 * @param productTitle - numele afișat în coș
 * @param priceUsd    - prețul numeric în USD
 * @param quantity    - cantitate (default 1)
 * @param imageUrl    - prima imagine a produsului
 */
export function addToCart(params: {
  variantId: string
  productTitle: string
  priceUsd: number
  price: string
  quantity?: number
  imageUrl?: string | null
}): CartState {
  const { variantId, productTitle, priceUsd, price, quantity = 1, imageUrl = null } = params

  // Parseaza productId și size din variantId: "essentials-black-M" → productId="essentials-black", size="M"
  const parts = variantId.split('-')
  const size = parts[parts.length - 1]
  const productId = parts.slice(0, parts.length - 1).join('-')

  const lines = loadLines()
  const existingIdx = lines.findIndex((l) => l.variantId === variantId)

  let updatedLines: CartLineItem[]

  if (existingIdx >= 0) {
    updatedLines = lines.map((l, i) =>
      i === existingIdx ? { ...l, quantity: l.quantity + quantity } : l
    )
  } else {
    const newLine: CartLineItem = {
      lineId: generateLineId(),
      variantId,
      productId,
      size,
      productTitle,
      variantTitle: size,
      price,
      priceUsd,
      quantity,
      imageUrl,
      productHandle: productId,
    }
    updatedLines = [...lines, newLine]
  }

  saveLines(updatedLines)
  return computeCartState(updatedLines)
}

/**
 * Actualizează cantitatea unei linii.
 * Dacă quantity === 0 → elimină linia.
 */
export function updateCartLine(lineId: string, quantity: number): CartState {
  if (quantity === 0) return removeCartLine(lineId)

  const lines = loadLines()
  const updatedLines = lines.map((l) =>
    l.lineId === lineId ? { ...l, quantity } : l
  )
  saveLines(updatedLines)
  return computeCartState(updatedLines)
}

/**
 * Elimină o linie din coș după lineId.
 */
export function removeCartLine(lineId: string): CartState {
  const lines = loadLines()
  const updatedLines = lines.filter((l) => l.lineId !== lineId)
  saveLines(updatedLines)
  return computeCartState(updatedLines)
}

/**
 * Resetează complet coșul (apelat după checkout finalizat cu succes).
 */
export function clearCart(): void {
  clearLines()
}

/**
 * Inițiază checkout via Stripe.
 * Trimite datele coșului la /api/create-checkout-session și redirecționează.
 *
 * @param lines - liniile curente din coș
 * @param onError - callback opțional pentru gestionarea erorilor în UI
 */
export async function goToCheckout(
  lines: CartLineItem[],
  onError?: (msg: string) => void,
  currency: 'USD' | 'EUR' = 'USD'
): Promise<void> {
  if (lines.length === 0) {
    onError?.('Coșul este gol.')
    return
  }

  // Construim payload-ul pentru serverless function
  const cartPayload = lines.map((l) => ({
    variantId: l.variantId,
    productId: l.productId,
    size: l.size,
    productTitle: l.productTitle,
    priceUsd: l.priceUsd,
    quantity: l.quantity,
    imageUrl: l.imageUrl,
  }))

  try {
    const subtotalUsd = lines.reduce((acc, l) => acc + l.priceUsd * l.quantity, 0)
    const totalQuantity = lines.reduce((acc, l) => acc + l.quantity, 0)
    const lineItemsData = lines.map((l) => ({
      product_id: l.productId,
      product_name: l.productTitle,
      product_price: l.priceUsd,
      product_quantity: l.quantity,
    }))

    // Meta Pixel: InitiateCheckout
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'InitiateCheckout', {
        value: subtotalUsd,
        currency: currency,
        num_items: totalQuantity,
        content_ids: lines.map((l) => l.variantId),
      })
    }

    // Pinterest Tag: InitiateCheckout
    trackPinterestInitiateCheckout({
      value: subtotalUsd,
      currency: currency,
      orderQuantity: totalQuantity,
      lineItems: lineItemsData,
    })

    // Salvăm datele comenzii în localStorage pentru tracking Checkout pe /order-success sau /success
    try {
      localStorage.setItem(
        'hn_pending_checkout',
        JSON.stringify({
          value: subtotalUsd,
          currency: currency,
          orderQuantity: totalQuantity,
          lineItems: lineItemsData,
          timestamp: Date.now(),
        })
      )
    } catch {
      /* noop */
    }

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartLines: cartPayload, currency: currency.toLowerCase() }),
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: 'Eroare necunoscută' }))
      throw new Error(err.error ?? `HTTP ${response.status}`)
    }

    const { sessionUrl } = await response.json()

    if (!sessionUrl) {
      throw new Error('Nu s-a primit URL-ul de checkout de la server.')
    }

    window.location.href = sessionUrl

  } catch (err: any) {
    console.error('[cart] goToCheckout failed:', err)
    onError?.(err.message ?? 'Eroare la inițierea checkout-ului. Încearcă din nou.')
  }
}
