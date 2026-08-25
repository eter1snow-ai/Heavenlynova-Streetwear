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

// Mock mode e ACTIV implicit (dacă var nu e setată explicit la 'false')
// Live mode: setează VITE_USE_MOCK_DATA=false în Vercel env vars + adaugă tokenul Shopify
const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA !== 'false'

// ─── Handle Map ───────────────────────────────────────────────────────────────
// Traduce mock ID-urile (din URL și drops.ts) → handle-urile reale din Shopify.
// Dacă un mock ID nu apare aici → produsul nu e pe Shopify → fallback automat pe mock.
// ATENȚIE: handle-urile Shopify sunt exact ce e în Admin → Products → handle (URL slug).

const HANDLE_MAP: Record<string, string> = {
  // ─── Produse active pe Shopify ────────────────────────────────────────────
  'essentials-black':  'hevaenlynova-original-black',  // typo în Shopify ("hevaenlynova") — nu schimba
  'essentials-white':  'heavenlynova-original-white',
  'core-hoodie-white': 'heavenlynova-original-hoodie',
  'soulfull-black':    'soulfull-original-black',

  // ─── TODO: adaugă pe Shopify și decomentează ──────────────────────────────
  'the-origin':     'the-origin-piece-chapter-000',   // The Origin Piece - Chapter /000
  'soulfull-hoodie':'heavenlynova-soulfull-hoodie',    // Heavenlynova Soulfull Hoodie
  // 'broken-001':     'broken-001',               // TODO: alt drop viitor — nu acum
}

// ─── Tag → Category Map ───────────────────────────────────────────────────────
// Traduce tag-urile Shopify → categoriile interne HVN.
// Prioritate: primul tag care se potrivește câștigă.
// Adaugă tag-uri noi când încarci produse Heritage/Flagship pe Shopify.

const TAG_CATEGORY_MAP: Record<string, string> = {
  'category:individuals': 'individuals',
  'category:essentials':  'essentials',
  'category:flagship':    'flagship',
  'category:origin':      'origin',
  // Fallback pe tag-urile generice Spreadconnect (dacă nu ai tag-uri category:X)
  'Esentials':             'essentials',
  'T-Shirts':              'essentials',
  'Hoodies & Sweatshirts': 'essentials',
  // Când adaugi Soulfull Hoodie, The Origin pe Shopify → adaugă tag-urile lor aici
}

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
    title: v.title,                                // ex: "black / S", "black / M"
    availableForSale: v.availableForSale,
    quantityAvailable: v.quantityAvailable,
    price: `${parseFloat(v.priceV2.amount).toFixed(2)}€`,
  }
}

function normalizeShopifyProduct(p: ShopifyProduct, mockId?: string): NormalizedProduct {
  // Determină categoria: caută mai întâi tag-uri explicite (category:X),
  // apoi tag-urile generice Spreadconnect, fallback 'essentials'
  const categoryEntry = p.tags
    .map((t) => TAG_CATEGORY_MAP[t])
    .find(Boolean)

  const typeTag = p.tags.find((t) => t.startsWith('type:'))
  const isHoodie = p.tags.some((t) =>
    t.toLowerCase().includes('hoodie') || t.toLowerCase().includes('sweatshirt')
  )

  const localMock = mockId ? mockProducts.find(m => m.id === mockId) : undefined;

  return {
    id: mockId ?? p.handle,     // păstrăm mock ID pentru navigare URL (ex: 'soulfull-black')
    handle: p.handle,           // handle-ul real Shopify
    name: p.title,
    tagline: p.tags.find((t) => t.startsWith('tagline:'))?.replace('tagline:', '') ?? '',
    description: localMock?.description ?? p.description,
    price: `${parseFloat(p.priceRange.minVariantPrice.amount).toFixed(2)}€`,
    images: p.images.edges.map((e) => e.node.url),
    category: categoryEntry ?? 'essentials',
    productType: typeTag
      ? (typeTag.replace('type:', '') as 'tee' | 'hoodie')
      : isHoodie ? 'hoodie' : 'tee',
    variants: p.variants.edges.map((e) => normalizeShopifyVariant(e.node)),
  }
}

// ─── API publică ──────────────────────────────────────────────────────────────

let productsCache: NormalizedProduct[] | null = null;
let productDetailCache: Record<string, NormalizedProduct> = {};

/**
 * Returnează lista completă de produse.
 * Mock: din drops.ts (filtrat fără 'flagship')
 * Live: din Shopify + produsele fără HANDLE_MAP vin din mock ca fallback
 */
export async function getProducts(): Promise<NormalizedProduct[]> {
  if (USE_MOCK) {
    return mockProducts
      .filter((p) => p.category !== 'flagship')
      .map(normalizeMockProduct)
  }

  if (productsCache) return productsCache;

  const data = await shopifyFetch<ShopifyProductsResponse>({
    query: GET_PRODUCTS,
    variables: { first: 50 },
  })

  // Produsele din Shopify, cu mock ID reconstituit pentru navigare URL
  const shopifyProducts = data.products.edges.map((e) => {
    const mockId = Object.entries(HANDLE_MAP).find(([, sh]) => sh === e.node.handle)?.[0]
    return normalizeShopifyProduct(e.node, mockId)
  })

  // Produsele mock care NU sunt încă pe Shopify (lipsă din HANDLE_MAP sau neîncărcate)
  const shopifyHandles = new Set(data.products.edges.map((e) => e.node.handle))
  const unmappedMockProducts = mockProducts
    .filter((p) => p.category !== 'flagship')
    .filter((p) => {
      const shopifyHandle = HANDLE_MAP[p.id]
      return !shopifyHandle || !shopifyHandles.has(shopifyHandle)
    })
    .map(normalizeMockProduct)

  productsCache = [...shopifyProducts, ...unmappedMockProducts]
  return productsCache
}

/**
 * Returnează un produs după mock ID (folosit în URL: /product/:mockId).
 *
 * Logica de fallback în live mode:
 *   1. Caută mock ID în HANDLE_MAP → traduce la handle Shopify
 *   2. Dacă există → fetch din Shopify cu handle-ul real
 *   3. Dacă nu există în map sau Shopify returnează null → fallback pe mock din drops.ts
 *   4. Site-ul nu se blochează niciodată pentru produse lipsă din Shopify
 */
export async function getProduct(mockId: string): Promise<NormalizedProduct | null> {
  if (USE_MOCK) {
    const found = mockProducts.find((p) => p.id === mockId)
    return found ? normalizeMockProduct(found) : null
  }

  if (productDetailCache[mockId]) return productDetailCache[mockId];

  const shopifyHandle = HANDLE_MAP[mockId]

  if (shopifyHandle) {
    try {
      const data = await shopifyFetch<ShopifyProductResponse>({
        query: GET_PRODUCT_BY_HANDLE,
        variables: { handle: shopifyHandle },
      })
      if (data.productByHandle) {
        const prod = normalizeShopifyProduct(data.productByHandle, mockId)
        productDetailCache[mockId] = prod
        return prod
      }
    } catch (err) {
      console.warn(
        `[getProduct] Shopify fetch failed for "${shopifyHandle}", falling back to mock`,
        err
      )
    }
  }

  // Fallback mock — produs fără HANDLE_MAP sau Shopify fetch eșuat
  const mockFallback = mockProducts.find((p) => p.id === mockId)
  if (mockFallback) {
    console.info(`[getProduct] "${mockId}" → mock fallback (not in Shopify yet)`)
    const prod = normalizeMockProduct(mockFallback)
    productDetailCache[mockId] = prod
    return prod
  }

  return null
}

/**
 * Returnează produsele filtrate după categorie.
 * Folosit în Home.tsx pentru secțiunile Heritage, Essentials etc.
 */
export async function getProductsByCategory(category: string): Promise<NormalizedProduct[]> {
  const all = await getProducts()
  return all.filter((p) => p.category === category)
}

// Re-exportăm tipurile ca să componentele să nu importe din shopify/types direct
export type { NormalizedProduct, NormalizedVariant }
