import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import ZoomImage from '../components/shared/ZoomImage'
import SizeGuideModal from '../components/shared/SizeGuideModal'
import { useCart } from '../components/cart/CartContext'
// [CHANGED] Importăm din lib/products în loc de data/drops direct
import { getProduct } from '../lib/products'
import type { NormalizedProduct } from '../lib/products'
import { getOptimizedImageUrl } from '../lib/utils'
import { applySEO } from '../hooks/useSEO'
import { products as localDrops } from '../data/drops'

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
  'soulfull-black': {
    title: 'SOULFULL — Black Tee | Heritage Line | HeavenlyNova',
    description: 'SOULFULL Black. Part of the Heritage Line. 255 GSM heavyweight cotton tee, built for presence.',
  },
  'soulfull-hoodie': {
    title: 'SOULFULL Hoodie | Heritage Line | HeavenlyNova',
    description: 'SOULFULL Hoodie. Part of the Heritage Line. 350 GSM heavyweight organic cotton. Structured silhouette.',
  },
}


export default function ProductDetail() {
  const { productId } = useParams()
  const { addItem, isLoading } = useCart()

  const [showSizeError, setShowSizeError] = useState(false)

  // [CHANGED] Produs async prin getProduct() — înlocuiește getProductById() sincron
  const [product, setProduct] = useState<NormalizedProduct | null>(null)
  const [loading, setLoading] = useState(true)

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
        price: product.price,
        available: product.variants.some((v) => v.availableForSale),
        image: product.images[0] ?? undefined,
      },
    })
  }, [product, productId])

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

  const isNeck = (src: string) => /neck/i.test(src)
  const images = useMemo(() => (product?.images || []).filter(Boolean), [product])
  const variantImages = useMemo(() => images.filter((s) => !isNeck(s)).slice(0, 2), [images])
  const neckImages = useMemo(() => images.filter((s) => isNeck(s)), [images])
  const swatches = useMemo(() => {
    const mapColor = (p: string) => {
      const file = (p.split('/').pop() || '').toLowerCase()
      if (/green/.test(file)) return { label: 'green', hex: '#1f3a28', text: '#ffffff' }
      if (/white/.test(file)) return { label: 'white', hex: '#ffffff', text: '#000000', border: '#e5e5e5' }
      if (/creme|cream/.test(file)) return { label: 'creme', hex: '#e8dfcf', text: '#000000', border: '#cfc7b4' }
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
    if (product?.id === 'the-origin' || product?.id === 'soulfull-hoodie') {
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
                      className={`w-full ${(product.id.startsWith('soulfull') || product.id === 'the-origin') ? 'object-cover' : 'object-contain'} ${(product.id.startsWith('soulfull') || product.id === 'the-origin') ? '' : 'aspect-[3/4]'} ${i === 1 ? 'object-top' : 'object-center'}`}
                      style={{ borderRadius: 0, backgroundColor: 'transparent', mixBlendMode: 'normal', aspectRatio: (product.id.startsWith('soulfull') || product.id === 'the-origin') ? '2044/2000' : undefined }}
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
                        alt={`${product.name} neck label detail`}
                        className="aspect-square object-cover"
                        zoomFactor={2.8}
                      />
                    </div>
                    <p className="mt-3 text-[10px] uppercase tracking-widest text-neutral-500 text-center">
                      Hover to zoom • Neck label detail
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
                const displayTitle = isSeraphim ? 'Seraphim' : (localMock?.name || product.name)
                const displayTagline = localMock?.tagline || product.tagline

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
              <p className="text-xs text-neutral-400">Price</p>
              <p className="text-sm">{product.price}</p>
            </div>

            {swatches.length > 1 && swatches.filter(s => s.label !== 'var').length > 1 ? (
              <div className="space-y-2">
                <p className="text-xs text-neutral-400">Color</p>
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
                <p className="text-xs text-neutral-400">Size</p>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-xs text-neutral-400 hover:text-white transition-colors underline"
                >
                  Size Guide
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
                  addItem(variantId, 1)
                }
              }}
              disabled={isLoading}
              className={`w-full border ${showSizeError ? 'border-red-500 text-red-500' : 'border-white text-white hover:bg-white hover:text-black'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-transparent py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-soft`}
              style={{ borderRadius: 0 }}
            >
              {isLoading ? 'ADDING...' : showSizeError ? 'SELECT A SIZE' : 'Claim Your Piece'}
            </button>

            {!product.description.includes('Part of the HeavenlyNova universe') && (
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: '#333333', lineHeight: 1.6 }} className="uppercase">
                Part of the HeavenlyNova universe.
              </p>
            )}

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[90%] md:max-w-none whitespace-pre-wrap">{product.description}</p>
          </div>
        </div>
      </motion.section>

      {/* DESIGN FOCUS SECTION */}
      {/* Detectăm imagini de tip back/design din filename — funcționează cu mock (back) și Shopify (mid/design/back) */}
      {images.some((s) => /back|mid|design/i.test(s.split('/').pop() || '')) && (
        <section className="w-full bg-black" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-[900px] px-6">
            <img
              src={getOptimizedImageUrl(images.find((s) => /back|mid|design/i.test(s.split('/').pop() || ''))!, 1200)}
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
                {product.tagline}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
