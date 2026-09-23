/**
 * src/lib/products.ts
 *
 * Layer de abstracție pentru date despre produse.
 *
 * POST-MIGRARE (v2 — fără Shopify):
 *   Sursa unică de adevăr este src/data/drops.ts.
 *   Nu există niciun apel de rețea pentru produse — totul e local.
 *   Datele se normalizează în NormalizedProduct pentru UI.
 *
 * Mărimi disponibile per tip de produs:
 *   tee:    XS / S / M / L / XL / XXL
 *   hoodie: XS / S / M / L / XL / XXL
 */

import type { Product } from '../data/drops'
import { products as catalogProducts } from '../data/drops'
import { formatMoney } from './utils'

// ─── Tipuri normalizate (compatibile cu toate componentele UI existente) ───────

export type NormalizedVariant = {
  id: string              // format: `${productId}-${size}` ex: "essentials-black-M"
  title: string           // ex: "M"
  availableForSale: boolean
  quantityAvailable: number | null
  price: string           // ex: "$44.99"
}

export type NormalizedProduct = {
  id: string              // productId din drops.ts (ex: 'essentials-black')
  handle: string          // același cu id — folosit în URL /product/:handle
  name: string
  tagline: string
  description: string
  price: string           // prețul de afișat (formatat)
  priceUsd: number        // valoarea numerică USD — folosit la Stripe
  images: string[]
  category: string        // 'individuals' | 'essentials' | 'flagship' | 'origin'
  productType: string     // 'tee' | 'hoodie'
  variants: NormalizedVariant[]
}

// ─── Dimensiuni disponibile ────────────────────────────────────────────────────

const SIZES_TEE    = ['S', 'M', 'L', 'XL', 'XXL']
const SIZES_HOODIE = ['S', 'M', 'L', 'XL', 'XXL', '3XL']

function getSizesForProduct(p: Product): string[] {
  return p.productType === 'hoodie' ? SIZES_HOODIE : SIZES_TEE
}

// ─── Normalizare Product → NormalizedProduct ─────────────────────────────────

function normalizeProduct(p: Product): NormalizedProduct {
  const sizes = getSizesForProduct(p)

  const variants: NormalizedVariant[] = sizes.map((size) => ({
    id: `${p.id}-${size}`,          // ex: "essentials-black-M"
    title: size,
    availableForSale: true,
    quantityAvailable: null,         // print-on-demand = mereu disponibil
    price: p.price,
  }))

  return {
    id: p.id,
    handle: p.id,
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    price: p.price,
    priceUsd: p.priceUsd,
    images: p.images,
    category: p.category,
    productType: p.productType,
    variants,
  }
}

// ─── Cache ────────────────────────────────────────────────────────────────────
// Normalizarea se face o singură dată la import, nu la fiecare apel.

const normalizedCache: NormalizedProduct[] = catalogProducts.map(normalizeProduct)

// ─── API publică ──────────────────────────────────────────────────────────────

/**
 * Returnează lista completă de produse normalizate.
 */
export async function getProducts(): Promise<NormalizedProduct[]> {
  return normalizedCache
}

/**
 * Returnează un produs după ID (folosit în URL: /product/:productId).
 * Returnează null dacă produsul nu există.
 */
export async function getProduct(productId: string): Promise<NormalizedProduct | null> {
  return normalizedCache.find((p) => p.id === productId) ?? null
}

/**
 * Returnează produsele filtrate după categorie.
 * Folosit în Home.tsx, Heritage.tsx, Essentials.tsx.
 */
export async function getProductsByCategory(category: string): Promise<NormalizedProduct[]> {
  return normalizedCache.filter((p) => p.category === category)
}

/**
 * Returnează un produs după ID — versiune sincronă (fără Promise).
 * Util în contexte unde nu putem folosi async/await.
 */
export function getProductSync(productId: string): NormalizedProduct | null {
  return normalizedCache.find((p) => p.id === productId) ?? null
}

// Re-exportăm tipurile pentru compatibilitate cu componentele existente
export type { NormalizedProduct as default }

// Helper pentru formatare preț (re-exportat din utils pentru backward compat)
export { formatMoney }
