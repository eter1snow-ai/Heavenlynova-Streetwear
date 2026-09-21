/**
 * src/components/cart/CartContext.tsx
 *
 * Context global pentru starea coșului de cumpărături.
 *
 * POST-MIGRARE (v2 — fără Shopify):
 *   Coșul este 100% client-side, stocat în localStorage.
 *   Nu există mock mode / live mode — există un singur mod.
 *   Checkout inițiază o sesiune Stripe via /api/create-checkout-session.
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  hydrateCart,
  addToCart,
  updateCartLine,
  removeCartLine,
  goToCheckout,
  clearCart,
  EMPTY_CART,
} from '../../lib/cart'
import type { CartState } from '../../lib/cart'

// ─── Tipuri pentru Context ────────────────────────────────────────────────────

type CartContextType = {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  // Cart state
  cartState: CartState
  // Acțiuni
  addItem: (params: {
    variantId: string
    productTitle: string
    priceUsd: number
    price: string
    quantity?: number
    imageUrl?: string | null
  }) => void
  updateItem: (lineId: string, quantity: number) => void
  removeItem: (lineId: string) => void
  checkout: () => Promise<void>
  resetCart: () => void
  // UI helpers
  itemCount: number
  isLoading: boolean
  checkoutError: string | null
}

const CartContext = createContext<CartContextType>({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  cartState: EMPTY_CART,
  addItem: () => {},
  updateItem: () => {},
  removeItem: () => {},
  checkout: async () => {},
  resetCart: () => {},
  itemCount: 0,
  isLoading: false,
  checkoutError: null,
})

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartState, setCartState] = useState<CartState>(EMPTY_CART)
  const [isLoading, setIsLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  // Hidratare coș din localStorage la mount
  useEffect(() => {
    const stored = hydrateCart()
    if (stored.lines.length > 0) {
      setCartState(stored)
    }
  }, [])

  const itemCount = cartState.lines.reduce((acc, l) => acc + l.quantity, 0)

  const addItem = useCallback((params: {
    variantId: string
    productTitle: string
    priceUsd: number
    price: string
    quantity?: number
    imageUrl?: string | null
  }) => {
    const updated = addToCart(params)
    setCartState(updated)
    setIsOpen(true) // Deschide CartDrawer după add
  }, [])

  const updateItem = useCallback((lineId: string, quantity: number) => {
    const updated = updateCartLine(lineId, quantity)
    setCartState(updated)
  }, [])

  const removeItem = useCallback((lineId: string) => {
    const updated = removeCartLine(lineId)
    setCartState(updated)
  }, [])

  const checkout = useCallback(async () => {
    setIsLoading(true)
    setCheckoutError(null)

    await goToCheckout(cartState.lines, (errMsg) => {
      setCheckoutError(errMsg)
      setIsLoading(false)
    })

    // Dacă ajungem aici fără eroare → redirect-ul e în curs → nu mai facem nimic
    // setIsLoading(false) nu e necesar (pagina se schimbă)
  }, [cartState.lines])

  const resetCart = useCallback(() => {
    clearCart()
    setCartState(EMPTY_CART)
  }, [])

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        cartState,
        addItem,
        updateItem,
        removeItem,
        checkout,
        resetCart,
        itemCount,
        isLoading,
        checkoutError,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
