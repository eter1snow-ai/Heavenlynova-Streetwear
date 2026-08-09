/**
 * src/lib/products.ts
 *
 * Layer de abstracție MOCK/LIVE pentru date despre produse.
 *
 * REGULĂ: Toate componentele și paginile apelează EXCLUSIV aceste funcții.
 *         Nicio componentă nu importă direct din drops.ts sau shopifyFetch.
 *
 * Comutare:
 *   VITE_USE_MOCK_DATA=true  → date din src/data/drops.ts (instant, fără API)
 *   VITE_USE_MOCK_DATA=false → date din Shopify Storefront API
 */

import type { Product } from '../data/drops'
import { products as mockProducts } from '../data/drops'
import { shopifyFetch } from './shopify/client'
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE } from './shopify/queries'
import type {
  NormalizedProduct,
  NormalizedVariant,
  ShopifyProductsResponse,
  ShopifyProductResponse,
  ShopifyProduct,
  ShopifyVariant,
} from './shopify/types'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'

// ─── Sizes folosite în mock mode ──────────────────────────────────────────────
// Când datele vin din drops.ts (care nu are variante), le generăm artificial
// ca să UI-ul de ProductDetail să aibă aceleași butoane de mărime.

const MOCK_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

// ─── Normalizare MOCK → NormalizedProduct ────────────────────────────────────

function normalizeMockProduct(p: Product): NormalizedProduct {
  const variants: NormalizedVariant[] = MOCK_SIZES.map((size) => ({
    id: `mock-${p.id}-${size}`,   // ID fictiv — NICIODATĂ trimis la checkout
    title: size,
    availableForSale: true,        // în mock mode, toate mărimile sunt "disponibile"
    quantityAvailable: null,       // nu avem info de stoc în mock
    price: p.price,
  }))

  return {
    id: p.id,
    handle: p.id,                  // în mock, id-ul servește drept handle
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    price: p.price,
    images: p.images,
    category: p.category,
    productType: p.productType,
    variants,
  }
}

// ─── Normalizare LIVE (Shopify) → NormalizedProduct ──────────────────────────

function normalizeShopifyVariant(v: ShopifyVariant): NormalizedVariant {
  return {
    id: v.id,                                      // GID real din Shopify — se trimite la cartLinesAdd
    title: v.title,                                // ex: "S", "M", "XL"
    availableForSale: v.availableForSale,
    quantityAvailable: v.quantityAvailable,
    price: `${parseFloat(v.priceV2.amount).toFixed(2)}€`,
  }
}

function normalizeShopifyProduct(p: ShopifyProduct): NormalizedProduct {
  // Extrage tag-urile pentru a reconstrui category și productType
  // Convenție: produsele Shopify trebuie să aibă tag-uri ca "category:individuals", "type:tee"
  const categoryTag = p.tags.find((t) => t.startsWith('category:'))
  const typeTag = p.tags.find((t) => t.startsWith('type:'))

  return {
    id: p.handle,
    handle: p.handle,
    name: p.title,
    tagline: p.tags.find((t) => t.startsWith('tagline:'))?.replace('tagline:', '') ?? '',
    description: p.description,
    price: `${parseFloat(p.priceRange.minVariantPrice.amount).toFixed(2)}€`,
    images: p.images.edges.map((e) => e.node.url),
    category: categoryTag?.replace('category:', '') ?? 'individuals',
    productType: (typeTag?.replace('type:', '') ?? 'tee') as 'tee' | 'hoodie',
    variants: p.variants.edges.map((e) => normalizeShopifyVariant(e.node)),
  }
}

// ─── API publică ──────────────────────────────────────────────────────────────

/**
 * Returnează lista completă de produse.
 * Mock: din drops.ts (filtrat fără 'flagship' — la fel ca în Drops.tsx)
 * Live: din Shopify Storefront API
 */
export async function getProducts(): Promise<NormalizedProduct[]> {
  if (USE_MOCK) {
    return mockProducts
      .filter((p) => p.category !== 'flagship')
      .map(normalizeMockProduct)
  }

  const data = await shopifyFetch<ShopifyProductsResponse>({
    query: GET_PRODUCTS,
    variables: { first: 50 },
  })

  return data.products.edges.map((e) => normalizeShopifyProduct(e.node))
}

/**
 * Returnează un produs după handle/id.
 * Mock: caută în drops.ts după id
 * Live: apelează productByHandle din Shopify API
 *
 * @param handle - în mock mode: id-ul produsului din drops.ts
 *                 în live mode: handle-ul din Shopify (ex: "soulfull-black")
 */
export async function getProduct(handle: string): Promise<NormalizedProduct | null> {
  if (USE_MOCK) {
    const found = mockProducts.find((p) => p.id === handle)
    return found ? normalizeMockProduct(found) : null
  }

  const data = await shopifyFetch<ShopifyProductResponse>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
  })

  if (!data.productByHandle) return null
  return normalizeShopifyProduct(data.productByHandle)
}

/**
 * Returnează produsele filtrate după categorie.
 * Folosit în Home.tsx pentru secțiunile Heritage, Essentials etc.
 */
export async function getProductsByCategory(category: string): Promise<NormalizedProduct[]> {
  const all = await getProducts()
  return all.filter((p) => p.category === category)
}

// Re-exportăm NormalizedProduct ca să componentele să nu importe din shopify/types direct
export type { NormalizedProduct, NormalizedVariant }
