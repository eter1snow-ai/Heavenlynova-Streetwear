/**
 * src/hooks/useSEO.ts
 *
 * Hook centralizat pentru SEO tehnic:
 *  - <link rel="canonical">  → URL curat, fără query params
 *  - <title>                 → title specific per pagină
 *  - <meta name="description"> → descriere specifică
 *  - <meta name="robots">   → noindex opțional (ex: /seraphim)
 *  - <script type="application/ld+json"> → JSON-LD schema.org Product
 *
 * Folosit în AnimatedRoutes din App.tsx pe baza pathname-ului curent.
 */

const BASE_URL = 'https://heavenlynova.com'

export interface SEOProduct {
  name: string
  description: string
  price: string      // ex: "59.99€"
  available: boolean
  image?: string
}

export interface SEOOptions {
  /** URL path curat (fără query params), ex: '/product/the-origin' */
  path: string
  title?: string
  description?: string
  /** Dacă true, injectează <meta name="robots" content="noindex, follow"> */
  noindex?: boolean
  /** Dacă furnizat, injectează JSON-LD schema.org Product */
  product?: SEOProduct
}

// ─── Helper: upsert <meta> ──────────────────────────────────────────────────

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMeta(name: string) {
  document.querySelector(`meta[name="${name}"]`)?.remove()
}

// ─── Helper: upsert <link rel="canonical"> ──────────────────────────────────

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// ─── Helper: upsert JSON-LD <script> ────────────────────────────────────────

const JSON_LD_ID = 'hn-jsonld-product'

function setJsonLd(data: object) {
  let el = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.id = JSON_LD_ID
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeJsonLd() {
  document.getElementById(JSON_LD_ID)?.remove()
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function applySEO({
  path,
  title,
  description,
  noindex = false,
  product,
}: SEOOptions): void {
  // 1. Canonical — URL absolut curat, fără query params
  const canonicalUrl = `${BASE_URL}${path}`
  setCanonical(canonicalUrl)

  // 2. Title
  if (title) {
    document.title = title
  }

  // 3. Meta description
  if (description) {
    setMeta('description', description)
  }

  // 4. Robots noindex
  if (noindex) {
    setMeta('robots', 'noindex, follow')
  } else {
    removeMeta('robots')
  }

  // 5. JSON-LD Product (doar pe paginile de produs)
  if (product) {
    // Normalizăm prețul: "59.99€" → "59.99"
    const priceValue = product.price.replace(/[^\d.,]/g, '').replace(',', '.')
    const currency = product.price.includes('€') ? 'EUR' : 'USD'

    setJsonLd({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      brand: {
        '@type': 'Brand',
        name: 'HeavenlyNova',
      },
      ...(product.image ? { image: [product.image] } : {}),
      offers: {
        '@type': 'Offer',
        priceCurrency: currency,
        price: priceValue,
        availability: product.available
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
        url: canonicalUrl,
        seller: {
          '@type': 'Organization',
          name: 'HeavenlyNova',
        },
      },
    })
  } else {
    removeJsonLd()
  }
}
