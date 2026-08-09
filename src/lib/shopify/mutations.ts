/**
 * src/lib/shopify/mutations.ts
 *
 * Cart API mutations — Shopify 2022+ (Cart API modern).
 * ❌ checkoutCreate este deprecated — NU este folosit nicăieri.
 * ✅ cartCreate + cartLinesAdd + cartLinesUpdate + cartLinesRemove
 *
 * Toate mutațiile returnează cart-ul complet actualizat + userErrors.
 */

// ─── Fragment cart lines (refolosit în toate mutațiile) ───────────────────────

const CART_LINES_FRAGMENT = `
  fragment CartLinesFragment on Cart {
    id
    checkoutUrl
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              product {
                title
                handle
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
    }
  }
`

// ─── cartCreate ───────────────────────────────────────────────────────────────
//
// Creează un cart nou cu o primă linie.
// Returnează cart.id (salvat în localStorage) și cart.checkoutUrl.

export const CART_CREATE = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ...CartLinesFragment
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ${CART_LINES_FRAGMENT}
`

// ─── cartLinesAdd ─────────────────────────────────────────────────────────────
//
// Adaugă una sau mai multe linii la un cart existent.
// variantId TREBUIE să fie ID-ul real din Shopify (GID format).

export const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ${CART_LINES_FRAGMENT}
`

// ─── cartLinesUpdate ──────────────────────────────────────────────────────────
//
// Modifică cantitatea uneia sau mai multor linii existente.
// lineId = id-ul liniei din cart (nu variantId).

export const CART_LINES_UPDATE = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ${CART_LINES_FRAGMENT}
`

// ─── cartLinesRemove ──────────────────────────────────────────────────────────
//
// Elimină una sau mai multe linii din cart după lineId.

export const CART_LINES_REMOVE = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartLinesFragment
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ${CART_LINES_FRAGMENT}
`
