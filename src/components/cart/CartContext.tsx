/**
 * src/components/cart/CartContext.tsx
 *
 * Context global pentru starea coșului de cumpărături.
 *
 * MOCK MODE (VITE_USE_MOCK_DATA=true):
 *   - CartDrawer se deschide și arată UI-ul vizual complet
 *   - Articolele adăugate sunt stocate LOCAL în state (fără Shopify)
 *   - "Proceed to Checkout" nu face redirect (no checkoutUrl real)
 *   - Ideal pentru testarea UX înainte de tokenul real
 *
 * LIVE MODE (VITE_USE_MOCK_DATA=false):
 *   - addItem() apelează addToCart() din lib/cart.ts → Shopify Cart API
 *   - Cart-ul e hidratat din localStorage la mount (hydrateCart)
 *   - "Proceed to Checkout" → redirect la cart.checkoutUrl Shopify
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  addToCart as shopifyAddToCart,
  updateCartLine as shopifyUpdateCartLine,
  removeCartLine as shopifyRemoveCartLine,
  hydrateCart,
  goToCheckout,
  EMPTY_CART,
} from '../../lib/cart'
import type { CartState, CartLineItem } from '../../lib/cart'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'

// ─── Tipuri pentru Context ────────────────────────────────────────────────────

type CartContextType = {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  // Cart state
  cartState: CartState
  // Acțiuni
  addItem: (variantId: string, quantity?: number) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  checkout: () => void
  // UI helpers
  itemCount: number
  isLoading: boolean
}

const CartContext = createContext<CartContextType>({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  cartState: EMPTY_CART,
  addItem: async () => {},
  updateItem: async () => {},
  removeItem: async () => {},
  checkout: () => {},
  itemCount: 0,
  isLoading: false,
})

// ─── Mock cart helpers ────────────────────────────────────────────────────────
// În mock mode, gestionăm un coș local în memorie (fără Shopify)

type MockLine = CartLineItem

function mockAddLine(lines: MockLine[], variantId: string, quantity: number): MockLine[] {
  const existing = lines.find((l) => l.variantId === variantId)
  if (existing) {
    return lines.map((l) =>
      l.variantId === variantId ? { ...l, quantity: l.quantity + quantity } : l
    )
  }
  // Construim un line item mock minimal pentru afișare în CartDrawer
  const newLine: MockLine = {
    lineId: `mock-line-${Date.now()}`,
    variantId,
    productTitle: 'HeavenlyNova Piece',
    variantTitle: variantId.split('-').pop() ?? '',
    price: '—',
    quantity,
    imageUrl: null,
    productHandle: '',
  }
  return [...lines, newLine]
}

function mockUpdateLine(lines: MockLine[], lineId: string, quantity: number): MockLine[] {
  if (quantity === 0) return lines.filter((l) => l.lineId !== lineId)
  return lines.map((l) => (l.lineId === lineId ? { ...l, quantity } : l))
}

function mockRemoveLine(lines: MockLine[], lineId: string): MockLine[] {
  return lines.filter((l) => l.lineId !== lineId)
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartState, setCartState] = useState<CartState>(EMPTY_CART)
  const [mockLines, setMockLines] = useState<MockLine[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Hidratare cart din localStorage la mount (doar în live mode)
  useEffect(() => {
    if (USE_MOCK) return
    hydrateCart().then((state) => {
      if (state.lines.length > 0) setCartState(state)
    })
  }, [])

  // Stare cart efectivă: mock lines sau Shopify cart
  const effectiveCartState: CartState = USE_MOCK
    ? { ...EMPTY_CART, lines: mockLines }
    : cartState

  const itemCount = effectiveCartState.lines.reduce((acc, l) => acc + l.quantity, 0)

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    setIsLoading(true)
    try {
      if (USE_MOCK) {
        setMockLines((prev) => mockAddLine(prev, variantId, quantity))
      } else {
        const updated = await shopifyAddToCart(variantId, quantity)
        setCartState(updated)
      }
      setIsOpen(true) // Deschide CartDrawer după add (comportament păstrat)
    } catch (err) {
      console.error('[CartContext] addItem failed', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    setIsLoading(true)
    try {
      if (USE_MOCK) {
        setMockLines((prev) => mockUpdateLine(prev, lineId, quantity))
      } else {
        const updated = await shopifyUpdateCartLine(lineId, quantity)
        setCartState(updated)
      }
    } catch (err) {
      console.error('[CartContext] updateItem failed', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const removeItem = useCallback(async (lineId: string) => {
    setIsLoading(true)
    try {
      if (USE_MOCK) {
        setMockLines((prev) => mockRemoveLine(prev, lineId))
      } else {
        const updated = await shopifyRemoveCartLine(lineId)
        setCartState(updated)
      }
    } catch (err) {
      console.error('[CartContext] removeItem failed', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const checkout = useCallback(() => {
    goToCheckout(cartState.checkoutUrl)
  }, [cartState.checkoutUrl])

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        cartState: effectiveCartState,
        addItem,
        updateItem,
        removeItem,
        checkout,
        itemCount,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
