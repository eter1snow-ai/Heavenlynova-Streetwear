/**
 * src/lib/shopify/types.ts
 *
 * TypeScript types pentru toate răspunsurile Shopify Storefront API.
 * Acestea descriu structura datelor raw din API, înainte de normalizare.
 */

// ─── Image ──────────────────────────────────────────────────────────────────

export type ShopifyImage = {
  url: string
  altText: string | null
  width: number | null
  height: number | null
}

// ─── Money ──────────────────────────────────────────────────────────────────

export type ShopifyMoneyV2 = {
  amount: string
  currencyCode: string
}

// ─── Product Variant ────────────────────────────────────────────────────────

export type ShopifySelectedOption = {
  name: string
  value: string
}

export type ShopifyVariant = {
  id: string                          // GID: gid://shopify/ProductVariant/123
  title: string                       // ex: "S", "M / Black"
  availableForSale: boolean           // false dacă stocul e 0
  quantityAvailable: number | null    // null dacă tracking dezactivat în Shopify
  priceV2: ShopifyMoneyV2
  selectedOptions: ShopifySelectedOption[]
  image: ShopifyImage | null
}

// ─── Product ─────────────────────────────────────────────────────────────────

export type ShopifyProduct = {
  id: string                          // GID: gid://shopify/Product/456
  handle: string                      // slug URL-friendly, ex: "soulfull-black"
  title: string
  description: string
  descriptionHtml: string
  tags: string[]
  priceRange: {
    minVariantPrice: ShopifyMoneyV2
    maxVariantPrice: ShopifyMoneyV2
  }
  images: {
    edges: { node: ShopifyImage }[]
  }
  variants: {
    edges: { node: ShopifyVariant }[]
  }
}

// ─── GraphQL Edge/Connection helpers ────────────────────────────────────────

export type ShopifyProductEdge = {
  node: ShopifyProduct
  cursor: string
}

export type ShopifyProductsConnection = {
  edges: ShopifyProductEdge[]
  pageInfo: {
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

// ─── Response wrappers ──────────────────────────────────────────────────────

export type ShopifyProductsResponse = {
  products: ShopifyProductsConnection
}

export type ShopifyProductResponse = {
  productByHandle: ShopifyProduct | null
}

// ─── Cart ────────────────────────────────────────────────────────────────────

export type ShopifyCartLine = {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    priceV2: ShopifyMoneyV2
    product: {
      title: string
      handle: string
      images: { edges: { node: ShopifyImage }[] }
    }
    selectedOptions: ShopifySelectedOption[]
  }
  estimatedCost: {
    totalAmount: ShopifyMoneyV2
  }
}

export type ShopifyCart = {
  id: string
  checkoutUrl: string
  lines: {
    edges: { node: ShopifyCartLine }[]
  }
  estimatedCost: {
    totalAmount: ShopifyMoneyV2
    subtotalAmount: ShopifyMoneyV2
  }
}

// ─── Cart Mutation Responses ─────────────────────────────────────────────────

export type ShopifyCartUserError = {
  code: string
  field: string[] | null
  message: string
}

export type ShopifyCartCreateResponse = {
  cartCreate: {
    cart: ShopifyCart
    userErrors: ShopifyCartUserError[]
  }
}

export type ShopifyCartLinesAddResponse = {
  cartLinesAdd: {
    cart: ShopifyCart
    userErrors: ShopifyCartUserError[]
  }
}

export type ShopifyCartLinesUpdateResponse = {
  cartLinesUpdate: {
    cart: ShopifyCart
    userErrors: ShopifyCartUserError[]
  }
}

export type ShopifyCartLinesRemoveResponse = {
  cartLinesRemove: {
    cart: ShopifyCart
    userErrors: ShopifyCartUserError[]
  }
}

export type ShopifyCartQueryResponse = {
  cart: ShopifyCart | null
}

// ─── Normalized Product (tip comun mock + live) ───────────────────────────────
//
// Acesta este tipul pe care îl consumă TOATE componentele UI.
// Nu știu și nu trebuie să știe dacă datele vin din drops.ts sau din Shopify.

export type NormalizedVariant = {
  id: string                 // variantId Shopify (live) sau `${productId}-${size}` (mock)
  title: string              // ex: "M"
  availableForSale: boolean
  quantityAvailable: number | null
  price: string              // ex: "59.99€" (mock) sau "59.99 EUR" (live)
}

export type NormalizedProduct = {
  id: string                 // handle Shopify (live) sau id din drops.ts (mock)
  handle: string
  name: string
  tagline: string
  description: string
  price: string              // prețul de afișat (primul/cel mai mic)
  images: string[]
  category: string           // 'individuals' | 'essentials' | 'flagship' | 'origin'
  productType: string        // 'tee' | 'hoodie'
  variants: NormalizedVariant[]
}
