/**
 * src/data/drops.ts
 *
 * SURSA UNICĂ DE ADEVĂR pentru catalogul de produse HeavenlyNova.
 *
 * Nu mai există dependență de Shopify Storefront API.
 * Toate datele despre produse, variante și prețuri sunt definite aici.
 *
 * SPREADCONNECT_VARIANTS: mapează productId + size → article ID din Spreadconnect.
 * Completează aceste ID-uri după ce accesezi dashboard-ul Spreadconnect.
 */

// ─── Tipuri ───────────────────────────────────────────────────────────────────

export type Category = 'flagship' | 'individuals' | 'essentials' | 'origin'

export type ProductType = 'tee' | 'hoodie'

export type Product = {
  id: string
  category: Category
  productType: ProductType
  name: string
  tagline: string
  description: string
  price: string
  priceUsd: number           // preț numeric în USD, folosit la Stripe (în cenți = priceUsd * 100)
  images: string[]
}

// ─── Catalog produse ──────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: 'broken-001',
    category: 'flagship' as Category,
    productType: 'tee' as ProductType,
    name: 'BROKEN // 001',
    tagline: 'THE ONES WHO ASCEND',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture. Engineered for those who seek the light within the void.',
    price: '$59.99',
    priceUsd: 59.99,
    images: [
      '/Assets/Images/Preview/Seraphim_Broken 001/Broken Original Black Back.webp',
      '/Assets/Images/Preview/Seraphim_Broken 001/V3B Original Black Front.webp',
      '/Assets/Images/Preview/Seraphim_Broken 001/Neck Label Black.webp',
    ],
  },
  {
    id: 'soulfull-black',
    category: 'individuals' as Category,
    productType: 'tee' as ProductType,
    name: 'SOULFULL — BLACK',
    tagline: 'Not everything needs to be loud to be felt. Soulfull is a quiet statement — for those who carry more than they show.',
    description: '· EMOTIONAL IDENTITY PIECE\n· PART OF THE HERITAGE LINE\n· DESIGNED FOR INTROSPECTION, NOT ATTENTION\n\nBuilt for those who don\'t need to explain what they feel.\nPart of the HeavenlyNova universe.\n\nSoulfull is the original piece that started it all — the foundation of the HVN universe, calm in presence, strong in identity.\n\nIt exists between what is seen and what is felt, holding attention rather than seeking it.\n\nHeavyweight oversized boxy fit at 7.5oz cotton, drop shoulder construction, premium long-lasting print.\n\nPart of the Heritage Collection — the origin layer of HeavenlyNova, where everything begins.',
    price: '$59.99',
    priceUsd: 59.99,
    images: [
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Back.webp',
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Front.jpg',
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Neck.webp',
    ],
  },
  {
    id: 'core-hoodie-white',
    category: 'essentials' as Category,
    productType: 'hoodie' as ProductType,
    name: 'Core Hoodie',
    tagline: '10 oz / 340 GSM Heavyweight 3-End Fleece',
    description: `A relaxed, structural staple forged for permanence. Built with a 100% combed cotton face for unmatched texture, a structured three-panel hood, and custom dyed-to-match hardware.

· 10 oz / 340 GSM Heavyweight 3-End Fleece
· Solids: 70% Combed Cotton / 30% Recycled Polyester
· 100% Combed Cotton exterior face for a clean, archival finish
· Three-panel structured hood with fleece lining
· Double-needle topstitching & heavy-gauge matching drawcords with metal eyelets
· Kangaroo pocket and ribbed 1x1 cuffs and waistband
· Pre-shrunk under 5% for an enduring boxy drape`,
    price: '$79.99',
    priceUsd: 79.99,
    images: [
      '/Assets/Images/Preview/Esential Hoodie/Hoodie On black Original Front.webp',
      '/Assets/Images/Preview/Esential Hoodie/Hoodie Black Original Back Black.webp',
      '/Assets/Images/Preview/Esential Hoodie/Detailed black hoodie close-up.webp',
    ],
  },
  {
    id: 'essentials-black',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essential T-Shirt — Black',
    tagline: 'The Foundation of Shadow. A pure, structural staple forged in stillness and depth.',
    description: 'Boxy oversized fit with dropped shoulders and relaxed sleeves.\n\nCut from 100% heavyweight cotton at 7.5 oz — garment-washed for a soft touch and a natural, deep black fall.\n\nMinimal HeavenlyNova insignia on the left chest, heavy ribbed collar with double-needle stitching throughout.\n\nTrue to size for the oversized drape — size down for a closer fit.\n\nMachine wash cold, inside out. Do not tumble dry. Hang dry in shade.',
    price: '$44.99',
    priceUsd: 44.99,
    images: [
      '/Assets/Images/Preview/Esentials_Black/Original Esentials Black Front.webp',
      '/Assets/Images/Preview/Esentials_Black/Black closeup on Black.webp',
      '/Assets/Images/Preview/Esentials_Black/Neck Label Black.webp',
    ],
  },
  {
    id: 'essentials-white',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essential T-Shirt — White',
    tagline: 'The Foundation of Light. A pure, structural staple built for form, drape, and enduring presence.',
    description: 'Boxy oversized fit with dropped shoulders and relaxed sleeves, cut from 100% heavyweight cotton at 7.5oz — garment-washed for a soft touch and a natural fall.\n\nMinimal HeavenlyNova insignia on the left chest, heavy ribbed collar with double-needle stitching throughout.\n\nTrue to size for the oversized drape — size down for a closer fit. Machine wash cold, inside out. Do not tumble dry. Hang dry in shade.',
    price: '$44.99',
    priceUsd: 44.99,
    images: [
      '/Assets/Images/Preview/Esential_White/White ES Front.webp',
      '/Assets/Images/Preview/Esential_White/White closeup on black.webp',
      '/Assets/Images/Preview/Esential_White/Neck Label White.webp',
    ],
  },
  {
    id: 'the-origin',
    category: 'origin' as Category,
    productType: 'tee' as ProductType,
    name: 'THE ORIGIN PIECE',
    tagline: 'Chapter 000 — The First Signal',
    description: 'Chapter /000 is reserved for those who reach the end. A quiet signal that you were here first.\n\nHeavyweight 7.5oz cotton, custom boxy fit — the origin point of the HeavenlyNova universe.',
    price: '$59.99',
    priceUsd: 59.99,
    images: [
      '/Assets/Images/Preview/The Origin Piece/The Origin Piece Back.webp',
      '/Assets/Images/Preview/The Origin Piece/Original Esentials Black Front.webp',
      '/Assets/Images/Preview/The Origin Piece/Neck Label Black.webp',
    ],
  },
  {
    id: 'soulfull-hoodie',
    category: 'individuals' as Category,
    productType: 'hoodie' as ProductType,
    name: 'SOULFULL HOODIE',
    tagline: '10 oz / 340 GSM Heavyweight 3-End Fleece // Signature Piece',
    description: `From the first constellations. Heavyweight architectural fleece carrying our signature archival motif on the reverse, balanced by minimal chest branding.

· 10 oz / 340 GSM Heavyweight 3-End Fleece
· Solids: 70% Combed Cotton / 30% Recycled Polyester
· 100% Combed Cotton exterior face engineered for high-density DTG print
· Full-scale reverse artwork & subtle chest insignia
· Three-panel structured hood with fleece lining
· Reinforced double-needle construction and metal hardware
· Relaxed streetwear silhouette with drop-shoulder fit`,
    price: '$89.99',
    priceUsd: 89.99,
    images: [
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Soulfull Hoodie Back.webp',
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Hoodie On black Original Front.webp',
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Detailed black hoodie close-up.webp',
    ],
  },
]

// ─── Spreadconnect Variant IDs ────────────────────────────────────────────────
//
// Mapare: productId → size → Spreadconnect Article ID (numeric)
//
// TODO: Completează aceste ID-uri după ce accesezi Spreadconnect Dashboard
//       → Products → (selectează produsul) → obții article ID per variantă
//
// Dacă un ID lipsește (0 = placeholder), webhook-ul va loga un warning
// și va omite acel item din comanda Spreadconnect.
//
// Format: https://api.spreadconnect.app/v1/articles/{id}

export const SPREADCONNECT_VARIANTS: Record<string, Record<string, number>> = {
  'essentials-black': {
    XS: 0,   // TODO: completează cu ID-ul real din Spreadconnect
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'essentials-white': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'core-hoodie-white': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'soulfull-black': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'soulfull-hoodie': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'the-origin': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
  'broken-001': {
    XS: 0,
    S:  0,
    M:  0,
    L:  0,
    XL: 0,
    XXL: 0,
  },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const featuredProducts: Product[] = products.filter((p) =>
  p.id === 'broken-001' || p.id === 'core-hoodie-white'
)

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id)

/**
 * Returnează Spreadconnect article ID pentru un produs + mărime.
 * Returnează null dacă ID-ul nu e completat (placeholder 0).
 */
export function getSpreadconnectArticleId(productId: string, size: string): number | null {
  const articleId = SPREADCONNECT_VARIANTS[productId]?.[size]
  if (!articleId || articleId === 0) return null
  return articleId
}
