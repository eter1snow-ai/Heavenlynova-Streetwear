/**
 * src/lib/shopify/queries.ts
 *
 * GraphQL queries pentru Shopify Storefront API.
 * Fiecare query cere EXACT câmpurile necesare — nimic în plus.
 *
 * IMPORTANT: availableForSale și quantityAvailable sunt cerute EXPLICIT
 * pe fiecare variantă — alimentează logica de disabled pe butoanele de mărime.
 */

// ─── Fragment shared ──────────────────────────────────────────────────────────

const IMAGE_FRAGMENT = `
  fragment ImageFragment on Image {
    url
    altText
    width
    height
  }
`

const VARIANT_FRAGMENT = `
  fragment VariantFragment on ProductVariant {
    id
    title
    availableForSale
    quantityAvailable
    priceV2 {
      amount
      currencyCode
    }
    selectedOptions {
      name
      value
    }
    image {
      ...ImageFragment
    }
  }
  ${IMAGE_FRAGMENT}
`

// ─── Products list ────────────────────────────────────────────────────────────
//
// Folosit de getProducts() — returnează lista completă pentru grile/filtre.
// Fără variante complete (prea multă data) — doar prețul minim și prima imagine.

export const GET_PRODUCTS = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          handle
          title
          description
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 3) {
            edges {
              node {
                ...ImageFragment
              }
            }
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`

// ─── Single product by handle ─────────────────────────────────────────────────
//
// Folosit de getProduct(handle) — returnează produsul complet cu TOATE variantele.
// Acesta este query-ul critic pentru ProductDetail — include stocul per variantă.

export const GET_PRODUCT_BY_HANDLE = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            ...ImageFragment
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            ...VariantFragment
          }
        }
      }
    }
  }
  ${VARIANT_FRAGMENT}
`

// ─── Cart by ID ───────────────────────────────────────────────────────────────
//
// Folosit pentru a re-hidrata cart-ul din localStorage la reload pagină.

export const GET_CART = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
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
  }
`
