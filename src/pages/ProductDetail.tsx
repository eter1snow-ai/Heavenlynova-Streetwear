import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import ZoomImage from '../components/shared/ZoomImage'
import SizeGuideModal from '../components/shared/SizeGuideModal'
import { useCart } from '../components/cart/CartContext'
import { useCurrency } from '../context/CurrencyContext'
import { useLanguage } from '../context/LanguageContext'
// [CHANGED] Importăm din lib/products în loc de data/drops direct
import { getProduct } from '../lib/products'
import type { NormalizedProduct } from '../lib/products'
import { getOptimizedImageUrl } from '../lib/utils'
import { applySEO } from '../hooks/useSEO'
import { products as localDrops } from '../data/drops'
import { getLocalizedProduct } from '../data/productTranslations'
import { trackPinterestPageVisit, trackPinterestAddToCart } from '../lib/pinterest'

// ─── SEO overrides per produs ─────────────────────────────────────────────────
// Produsele cu conținut editorial distinct primesc title/desc specifice.
// Restul folosesc fallback generic din datele produsului.

const PRODUCT_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  'the-origin': {
    title: 'The Origin Piece — Chapter 000 Tee | HeavenlyNova',
    description: 'Shop The Origin Piece, Chapter 000 — The First Signal. Heavyweight cotton tee from HeavenlyNova.',
  },
  'broken-001': {
    title: 'BROKEN // 001 — Seraphim Tee | HeavenlyNova',
    description: 'BROKEN // 001. Not everything that breaks is meant to stay broken. 255 GSM heavyweight cotton tee from HeavenlyNova.',
  },
  'broken-hoodie': {
    title: 'BROKEN HOODIE — Seraphim Fleece (10 oz) | HeavenlyNova',
    description: 'The architectural heavy fleece of the Seraphim collection. Fractured wings reverse, subtle left-chest insignia. 340 GSM heavyweight 3-end fleece.',
  },
  'soulfull-black': {
    title: 'SOULFULL — Black Heavyweight Tee (7.5oz) | HeavenlyNova',
    description: 'Not everything needs to be loud to be felt. Soulfull is a quiet statement forged from heavyweight 255 GSM cotton. Part of the Heritage Collection.',
  },
  'soulfull-white': {
    title: 'SOULFULL White — Heavyweight Tee (7.5oz) | HeavenlyNova',
    description: 'Archival black seraphim ink across pristine chalk-white 255 GSM heavyweight cotton. Part of the Heritage Collection.',
  },
  'soulfull-skye-blue': {
    title: 'SOULFULL Skye Blue — Heavyweight Tee (7.5oz) | HeavenlyNova',
    description: 'Ethereal Skye Blue wash with contrast black seraphim ink on 255 GSM heavyweight cotton. Part of the Heritage Collection.',
  },
  'essentials-skye-blue': {
    title: 'ESSENTIALS Skye Blue — Minimal Heavyweight Tee (7.5oz) | HeavenlyNova',
    description: 'Subtle Nova insignia embroidered chest detail on washed Skye Blue heavyweight cotton. Part of the Essentials Line.',
  },
  'soulfull-hoodie': {
    title: 'SOULFULL Hoodie | Heritage Line | HeavenlyNova',
    description: 'SOULFULL Hoodie. Part of the Heritage Line. 350 GSM heavyweight organic cotton. Structured silhouette.',
  },
  'embrace-your-shadow': {
    title: 'Embrace Your Shadow — Heritage Artifact 002 | HeavenlyNova',
    description: 'Embrace Your Shadow Tee — Artifact 002. Exploring psychological duality and the unseen self. 255 GSM heavyweight combed cotton by HeavenlyNova.',
  },
}


export default function ProductDetail() {
  const { productId } = useParams()
  const { addItem, isLoading } = useCart()
  const { formatPrice, currency } = useCurrency()
  const { language, t } = useLanguage()

  const [showSizeError, setShowSizeError] = useState(false)

  // [CHANGED] Produs async prin getProduct() — înlocuiește getProductById() sincron
  const [product, setProduct] = useState<NormalizedProduct | null>(null)
  const [loading, setLoading] = useState(true)

  const localized = useMemo(() => {
    if (!product) return null
    return getLocalizedProduct(product.id, language, product.tagline, product.description)
  }, [product, language])

  useEffect(() => {
    setLoading(true)
    getProduct(productId || '')
      .then((p) => {
        setProduct(p)
      })
      .catch((err) => {
        console.error('[ProductDetail] getProduct failed', err)
        setProduct(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  // ─── SEO injection per produs ───────────────────────────────────────────────
  useEffect(() => {
    if (!product || !productId) return

    const override = PRODUCT_SEO_OVERRIDES[productId]
    const title = override?.title ?? `${product.name} | HeavenlyNova`
    const description = override?.description ?? product.description

    // Canonical self-ref curat, fără query params
    const path = `/product/${productId}`

    applySEO({
      path,
      title,
      description,
      product: {
        name: product.name,
        description: product.description,
        price: formatPrice(product.priceUsd),
        available: product.variants.some((v) => v.availableForSale),
        image: product.images[0] ?? undefined,
      },
    })

    // Meta Pixel: ViewContent
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'ViewContent', {
        content_name: product.name,
        content_ids: [product.id],
        content_type: 'product',
        value: product.priceUsd,
        currency: currency,
      })
    }

    // Pinterest Tag: PageVisit
    trackPinterestPageVisit({
      productId: product.id,
      productName: product.name,
      productPrice: product.priceUsd,
      productCategory: product.category,
      currency: currency,
    })
  }, [product, productId, currency, formatPrice])

  const [size, setSize] = useState<string>(() => {
    try {
      const raw = localStorage.getItem('draftFormData')
      const data = raw ? JSON.parse(raw) : null
      return data && data.productId === productId && typeof data.size === 'string' ? data.size : ''
    } catch {
      return ''
    }
  })
  const [variantIndex, setVariantIndex] = useState<number>(() => 0)
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  const isNeck = (src: string) => /neck|close-up|detailed/i.test(src)
  const images = useMemo(() => (product?.images || []).filter(Boolean), [product])
  const variantImages = useMemo(() => images.filter((s) => !isNeck(s)).slice(0, 2), [images])
  const neckImages = useMemo(() => images.filter((s) => isNeck(s)), [images])
  const swatches = useMemo(() => {
    const mapColor = (p: string) => {
      const file = (p.split('/').pop() || '').toLowerCase()
      if (/green/.test(file)) return { label: 'green', hex: '#1f3a28', text: '#ffffff' }
      if (/white/.test(file)) return { label: 'white', hex: '#ffffff', text: '#000000', border: '#e5e5e5' }
      if (/creme|cream/.test(file)) return { label: 'creme', hex: '#e8dfcf', text: '#000000', border: '#cfc7b4' }
      if (/skye|blue/i.test(file)) return { label: 'skye blue', hex: '#93b5d8', text: '#000000', border: '#7fa3c8' }
      if (/black|hoodie|save/i.test(file)) return { label: 'black', hex: '#0b0b0b', text: '#ffffff' }
      return { label: 'var', hex: '#888888', text: '#ffffff' }
    }
    const byLabel: Record<string, { index: number; src: string; label: string; hex: string; text: string; border?: string }> = {}
    variantImages.forEach((p, i) => {
      const c = mapColor(p)
      if (!byLabel[c.label]) byLabel[c.label] = { index: i, src: p, ...c }
    })
    return Object.values(byLabel)
  }, [variantImages])
  const selectedColor = swatches[variantIndex]?.label
  const matchesColor = (color: string | undefined, src: string) => {
    if (!color || color === 'var') return true
    const file = (src.split('/').pop() || '').toLowerCase()
    return file.includes(color)
  }
  const filteredVariantImages = useMemo(() => {
    if (product?.id === 'the-origin' || product?.id === 'soulfull-hoodie' || product?.id?.startsWith('broken') || product?.id === 'embrace-your-shadow') {
      return images.filter((s) => !isNeck(s))
    }
    if (!selectedColor || selectedColor === 'var') {
      return images.filter((s) => !isNeck(s))
    }
    return images.filter((s) => !isNeck(s) && matchesColor(selectedColor, s))
  }, [images, selectedColor, product?.id])
  const neckSelected =
    neckImages.find((n) => matchesColor(selectedColor, n)) || neckImages[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Initialize variantIndex from localStorage color (without setState in effect)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('draftFormData')
      const data = raw ? JSON.parse(raw) : null
      if (data && data.productId === product?.id && data.color) {
        const idx = swatches.findIndex((s) => s.label === data.color)
        if (idx >= 0 && idx !== variantIndex) {
          queueMicrotask(() => setVariantIndex(idx))
        }
      }
    } catch {
      /* noop */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id, swatches.length])

  // Helper function to save draft data
  const saveDraft = (productId: string, color: string | undefined, size: string) => {
    try {
      const raw = localStorage.getItem('draftFormData')
      const data = raw ? JSON.parse(raw) : {}
      const next = { ...data, productId, color, size }
      localStorage.setItem('draftFormData', JSON.stringify(next))
    } catch (err) {
      console.warn('Draft save failed', err)
    }
  }

  // [NOTE] variantsBySize indexează după title (ex: "S", "M", "L").
  // Funcționează corect pentru produse cu o singură culoare per SKU (cazul actual).
  // TODO: dacă în viitor un produs are "S / Black" + "S / White", va trebui să
  // indexezi după selectedOptions (size + color) pentru a nu pierde stocul per culoare.
  // IMPORTANT: useMemo trebuie să fie ÎNAINTE de orice return condiționat (Rules of Hooks)
  const variantsBySize = useMemo(() => {
    const map: Record<string, { availableForSale: boolean; variantId: string }> = {}
    ;(product?.variants ?? []).forEach((v) => {
      map[v.title] = { availableForSale: v.availableForSale, variantId: v.id }
    })
    return map
  }, [product?.variants])

  const displaySizes = (product?.variants ?? []).map((v) => v.title)

  // [CHANGED] Loading state — skeleton minimal, fără a afecta layout-ul vizual
  if (loading) {
    return (
      <main className="bg-black text-white">
        <section className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 py-24">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] animate-pulse">
            <div className="aspect-[3/4] w-full bg-neutral-900" style={{ borderRadius: 0 }} />
            <div className="space-y-6">
              <div className="h-8 bg-neutral-900 w-3/4" style={{ borderRadius: 0 }} />
              <div className="h-4 bg-neutral-900 w-1/4" style={{ borderRadius: 0 }} />
              <div className="h-4 bg-neutral-900 w-1/2" style={{ borderRadius: 0 }} />
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="bg-black text-white">
        <section className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 py-24">
          <h1 className="text-2xl font-semibold">Produsul nu a fost găsit</h1>
          <p className="mt-2 text-neutral-400">Verifică linkul sau revino la Drops.</p>
        </section>
      </main>
    )
  }

  const isSeraphim = product.category === 'flagship'

  return (
    <main className="bg-black text-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 py-10 sm:py-16 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="lg:sticky lg:top-24 self-start">
            {images.length ? (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredVariantImages.map((img, i) => (
                    <motion.img
                      key={i}
                      src={getOptimizedImageUrl(img, 1200)}
                      alt={product.name}
                      className={`w-full ${(product.id.startsWith('soulfull') || product.id === 'the-origin' || product.id.startsWith('broken') || product.id === 'embrace-your-shadow') ? 'object-cover' : 'object-contain'} ${(product.id.startsWith('soulfull') || product.id === 'the-origin' || product.id.startsWith('broken') || product.id === 'embrace-your-shadow') ? '' : 'aspect-[3/4]'} ${i === 1 ? 'object-top' : 'object-center'}`}
                      style={{ borderRadius: 0, backgroundColor: 'transparent', mixBlendMode: 'normal', aspectRatio: (product.id.startsWith('soulfull') || product.id === 'the-origin' || product.id.startsWith('broken') || product.id === 'embrace-your-shadow') ? '2044/2000' : undefined }}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "low"}
                      decoding="async"
                      onLoad={() => console.log('✅ Variant loaded', img)}
                      onError={(e) => {
                        console.log('❌ Variant fallback', img)
                        e.currentTarget.src = '/Assets/Images/placeholder.svg'
                      }}
                      initial={{ scale: i === 1 ? 1.18 : 1 }}
                      whileHover={{ scale: i === 1 ? 1.24 : 1 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                {neckSelected && (
                  <div className="relative max-w-md mx-auto mt-8">
                    <div className="transform -rotate-2">
                      <ZoomImage
                        src={neckSelected}
                        alt={`${product.name} detail`}
                        className="aspect-square object-cover"
                        zoomFactor={2.8}
                      />
                    </div>
                    <p className="mt-3 text-[10px] uppercase tracking-widest text-neutral-500 text-center">
                      Hover to zoom • {/neck/i.test(neckSelected) ? 'Neck label detail' : 'Fabric & construction detail'}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="aspect-[3/4] w-full bg-neutral-900"
                style={{ borderRadius: 0 }}
              />
            )}
          </div>

          <div className="space-y-6">
            <div>
              {(() => {
                const localMock = localDrops.find((m) => m.id === product.id || m.id === productId)
                const displayTitle = product.id === 'broken-hoodie' ? 'BROKEN HOODIE' : isSeraphim ? 'Seraphim' : (localMock?.name || product.name)
                const displayTagline = localized?.tagline || localMock?.tagline || product.tagline

                return (
                  <>
                    <h1
                      className={
                        isSeraphim
                          ? 'font-serif text-2xl sm:text-3xl font-semibold leading-tight tracking-tight'
                          : 'font-display text-2xl sm:text-3xl font-semibold leading-tight tracking-tight'
                      }
                    >
                      {displayTitle}
                    </h1>
                    {displayTagline && (
                      <p style={{ fontSize: '0.82rem', letterSpacing: '0.08em', lineHeight: 1.8, color: '#A8A8A8', fontStyle: 'italic' }} className="mt-4">
                        {displayTagline}
                      </p>
                    )}
                  </>
                )
              })()}
            </div>

            <div className="space-y-3">
              <p className="text-xs text-neutral-400">{t('product.price')}</p>
              <p className="text-sm font-medium">{formatPrice(product.priceUsd)}</p>
            </div>

            {swatches.length > 1 && swatches.filter(s => s.label !== 'var').length > 1 ? (
              <div className="space-y-2">
                <p className="text-xs text-neutral-400">{t('product.color')}</p>
                <div className="flex items-center gap-2">
                  {swatches.filter(s => s.label !== 'var').map((v) => (
                    <button
                      key={v.index}
                      aria-label={v.label}
                      aria-pressed={variantIndex === v.index}
                      onClick={() => {
                        setVariantIndex(v.index)
                        saveDraft(product.id, v.label, size)
                      }}
                      className={
                        'border transition-transform font-medium tracking-[0.02em] ' +
                        'min-w-[84px] h-7 px-3 inline-flex items-center justify-center ' +
                        'leading-none text-[10px] uppercase rounded-full ' +
                        (variantIndex === v.index ? 'scale-[1.02] border-white' : 'scale-100 border-white/60')
                      }
                      style={{
                        backgroundColor: v.hex,
                        color: v.text,
                        borderColor: variantIndex === v.index ? '#ffffff' : (v.border || 'rgba(255,255,255,0.6)'),
                      }}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-400">{t('product.size')}</p>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                >
                  {t('product.size_guide')}
                </button>
              </div>
              {/* Butoane de mărime din variante normalizate cu disabled state */}
              <div className="grid grid-cols-6 gap-2">
                {displaySizes.map((s) => {
                  const variantInfo = variantsBySize[s]
                  const available = variantInfo?.availableForSale ?? true
                  const cleanLabel = s.includes('/') ? s.split('/').pop()?.trim() || s : s
                  return (
                    <button
                      key={s}
                      onClick={() => {
                        if (!available) return
                        setSize(s)
                        setShowSizeError(false)
                        saveDraft(product.id, swatches[variantIndex]?.label, s)
                      }}
                      disabled={!available}
                      className={
                        'h-8 sm:h-9 border text-xs font-medium uppercase tracking-[0.15em] transition-soft flex items-center justify-center ' +
                        (size === s && available
                          ? 'bg-white text-black border-white'
                          : showSizeError
                            ? 'border-red-500/50 text-red-500/70'
                            : !available
                            // [CHANGED] disabled: visibile ma sbiadite, cursor not-allowed
                            ? 'bg-transparent text-neutral-700 border-neutral-800 cursor-not-allowed line-through'
                            : 'bg-neutral-950 text-white hover:bg-neutral-900 hover:border-white/70 hover:text-white/80 border-neutral-800')
                      }
                      style={{ borderRadius: 0 }}
                      aria-pressed={size === s}
                      aria-disabled={!available}
                      title={!available ? 'Out of stock' : undefined}
                    >
                      {cleanLabel}
                    </button>
                  )
                })}
              </div>
            </div>

            <SizeGuideModal
              isOpen={showSizeGuide}
              onClose={() => setShowSizeGuide(false)}
              productType={product.id.includes('hoodie') ? 'hoodie' : 'tshirt'}
            />

            <button
              onClick={() => {
                if (!size) {
                  setShowSizeError(true)
                  setTimeout(() => setShowSizeError(false), 2000)
                  return
                }
                const variantId = variantsBySize[size]?.variantId
                if (variantId) {
                  addItem({
                    variantId,
                    productTitle: product.name,
                    priceUsd: product.priceUsd,
                    price: formatPrice(product.priceUsd),
                    quantity: 1,
                    imageUrl: product.images[0] ?? null,
                  })

                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'AddToCart', {
                      content_name: product.name,
                      currency: currency,
                      value: product.priceUsd,
                      content_ids: [variantId],
                      content_type: 'product',
                    })
                  }

                  // Pinterest Tag: AddToCart
                  trackPinterestAddToCart({
                    productId: product.id,
                    productName: product.name,
                    productPrice: product.priceUsd,
                    productCategory: product.category,
                    quantity: 1,
                    currency: currency,
                  })
                }
              }}
              disabled={isLoading}
              className={`w-full border ${showSizeError ? 'border-red-500 text-red-500' : 'border-white text-white hover:bg-white hover:text-black'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-transparent py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-soft`}
              style={{ borderRadius: 0 }}
            >
              {isLoading ? t('product.adding') : showSizeError ? t('product.select_size') : t('product.claim')}
            </button>

            {!((localized?.description || product.description).includes('Part of the HeavenlyNova universe')) && (
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: '#333333', lineHeight: 1.6 }} className="uppercase">
                {t('product.universe')}
              </p>
            )}

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[90%] md:max-w-none whitespace-pre-wrap">{localized?.description || product.description}</p>
          </div>
        </div>
      </motion.section>

      {/* DESIGN FOCUS SECTION */}
      {/* Detectăm imagini de tip back/design din filename — funcționează cu mock (back) și Shopify (mid/design/back) */}
      {images.some((s) => /back|mid|design|shadow/i.test(s.split('/').pop() || '')) && (
        <section className="w-full bg-black" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-[900px] px-6">
            <img
              src={getOptimizedImageUrl(images.find((s) => /back|mid|design|shadow/i.test(s.split('/').pop() || ''))!, 1200)}
              alt={`${product.name} design`}
              className="w-full object-contain"
              style={{ maxHeight: '90vh' }}
              loading="lazy"
              decoding="async"
            />
            <div className="mt-8 text-center">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', color: '#555555', lineHeight: 1.6 }} className="uppercase">
                {product.name}
              </p>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: '#333333', lineHeight: 1.6, marginTop: '8px' }} className="uppercase">
                {localized?.tagline || product.tagline}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
