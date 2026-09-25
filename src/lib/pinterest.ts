/**
 * src/lib/pinterest.ts
 *
 * Pinterest Tag Tracking Utility (Tag ID: 2612782177064)
 * Official events:
 * - PageVisit (Product Details)
 * - AddToCart (Cart Additions)
 * - InitiateCheckout (Checkout Redirection)
 * - Checkout (Payment Confirmation)
 */

export const PINTEREST_TAG_ID = '2612782177064'

declare global {
  interface Window {
    pintrk?: (...args: any[]) => void
  }
}

/**
 * Safe low-level call to window.pintrk
 */
export function pintrkSafe(action: string, ...args: any[]): void {
  if (typeof window !== 'undefined' && typeof window.pintrk === 'function') {
    try {
      window.pintrk(action, ...args)
    } catch (err) {
      console.warn('[Pinterest Tag] Error calling pintrk:', err)
    }
  }
}

/**
 * Tracks an SPA Page view (called on route change)
 */
export function trackPinterestPageView(): void {
  pintrkSafe('page')
}

/**
 * 1. PageVisit: On product detail page (ProductDetail.tsx)
 * Sends product_id, product_name, product_price, and product_category
 */
export function trackPinterestPageVisit(params: {
  productId: string
  productName: string
  productPrice: number
  productCategory?: string
  currency?: string
}): void {
  const currency = params.currency || 'USD'
  const category = params.productCategory || 'Apparel & Accessories > Clothing'

  pintrkSafe('track', 'PageVisit', {
    product_id: params.productId,
    product_name: params.productName,
    product_price: params.productPrice,
    product_category: category,
    value: params.productPrice,
    currency,
    line_items: [
      {
        product_name: params.productName,
        product_id: params.productId,
        product_price: params.productPrice,
        product_category: category,
      },
    ],
  })
}

/**
 * 2. AddToCart: When product is added to cart / click on order
 */
export function trackPinterestAddToCart(params: {
  productId: string
  productName: string
  productPrice: number
  productCategory?: string
  quantity?: number
  currency?: string
}): void {
  const qty = params.quantity || 1
  const currency = params.currency || 'USD'
  const category = params.productCategory || 'Apparel & Accessories > Clothing'
  const totalValue = params.productPrice * qty

  pintrkSafe('track', 'AddToCart', {
    product_id: params.productId,
    product_name: params.productName,
    product_price: params.productPrice,
    product_category: category,
    value: totalValue,
    currency,
    order_quantity: qty,
    line_items: [
      {
        product_name: params.productName,
        product_id: params.productId,
        product_price: params.productPrice,
        product_quantity: qty,
        product_category: category,
      },
    ],
  })
}

/**
 * 3. InitiateCheckout: When customer is redirected to Stripe Checkout
 */
export function trackPinterestInitiateCheckout(params: {
  value: number
  currency: string
  orderQuantity: number
  lineItems?: Array<{
    product_id: string
    product_name: string
    product_price: number
    product_quantity: number
    product_category?: string
  }>
}): void {
  pintrkSafe('track', 'InitiateCheckout', {
    value: params.value,
    currency: params.currency,
    order_quantity: params.orderQuantity,
    line_items: params.lineItems,
  })
}

/**
 * 4. Checkout: On payment confirmation page (/order-success & /success)
 */
export function trackPinterestCheckout(params: {
  value: number
  currency: string
  orderId?: string
  orderQuantity?: number
  lineItems?: Array<{
    product_id: string
    product_name: string
    product_price: number
    product_quantity: number
    product_category?: string
  }>
}): void {
  pintrkSafe('track', 'Checkout', {
    value: params.value,
    currency: params.currency,
    order_id: params.orderId,
    order_quantity: params.orderQuantity || 1,
    line_items: params.lineItems,
  })
}
