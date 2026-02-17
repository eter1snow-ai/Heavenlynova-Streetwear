import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/drops'
import { useEffect, useState, useMemo } from 'react'
import ZoomImage from '../components/shared/ZoomImage'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId || '')
  const [size, setSize] = useState<string>(() => {
    try {
      const raw = localStorage.getItem('draftFormData')
      const data = raw ? JSON.parse(raw) : null
      return data && data.productId === product?.id && typeof data.size === 'string' ? data.size : ''
    } catch {
      return ''
    }
  })
  const [variantIndex, setVariantIndex] = useState<number>(() => 0)
  
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
      if (/black/.test(file)) return { label: 'black', hex: '#0b0b0b', text: '#ffffff' }
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
    if (!selectedColor || selectedColor === 'var') {
      return images.filter((s) => !isNeck(s))
    }
    return images.filter((s) => !isNeck(s) && matchesColor(selectedColor, s))
  }, [images, selectedColor])
  const neckSelected =
    neckImages.find((n) => matchesColor(selectedColor, n)) || neckImages[0]

  // Load draft from localStorage on mount
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
          // defer setState via microtask to avoid cascading renders warning
          queueMicrotask(() => setVariantIndex(idx))
        }
      }
    } catch {
      /* noop */
    }
    // run only once after swatches computed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id, swatches.length])

  // Helper function to save draft data
  const saveDraft = (productId: string, color: string | undefined, size: string) => {
    try {
      const raw = localStorage.getItem('draftFormData')
      const data = raw ? JSON.parse(raw) : {}
      const next = { ...data, productId, color, size }
      localStorage.setItem('draftFormData', JSON.stringify(next))
      console.log('✅ Draft saved', next)
    } catch (err) {
      console.warn('Draft save failed', err)
    }
  }

  // Simplified: rely on original image paths; WebP fallback handled by server/CDN if present

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
              <div className="grid gap-4 md:grid-cols-2">
                {filteredVariantImages.slice(0, 2).map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={product.name}
                    className={`aspect-[3/4] w-full object-contain ${i === 1 ? 'object-top' : 'object-center'}`}
                    style={{ borderRadius: 0, backgroundColor: 'transparent', mixBlendMode: 'normal' }}
                    loading="lazy"
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
                {neckSelected && (
                  <div>
                    <ZoomImage
                      src={neckSelected}
                      alt={`${product.name} neck`}
                      className=""
                      zoomFactor={2.2}
                    />
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
              <h1
                className={
                  isSeraphim
                    ? 'font-serif text-2xl sm:text-3xl font-semibold leading-tight tracking-tight'
                    : 'font-display text-2xl sm:text-3xl font-semibold leading-tight tracking-tight'
                }
              >
                {isSeraphim ? 'Seraphim' : product.name}
              </h1>
              {isSeraphim && (
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
                  The ones who burn
                </p>
              )}
              <p className="mt-4 text-neutral-300 leading-relaxed">{product.tagline}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-neutral-400">Price</p>
              <p className="text-sm">{product.price}</p>
            </div>

            {swatches.length > 1 ? (
              <div className="space-y-2">
                <p className="text-xs text-neutral-400">Color</p>
                <div className="flex items-center gap-2">
                  {swatches.map((v) => (
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
              <p className="text-xs text-neutral-400">Size</p>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSize(s)
                      saveDraft(product.id, swatches[variantIndex]?.label, s)
                    }}
                    className={
                      'h-6 border text-[10px] font-medium uppercase tracking-[0.2em] transition-soft ' +
                      (size === s
                        ? 'bg-white text-black border-white'
                        : 'bg-neutral-950 text-white hover:bg-neutral-900 hover:border-white/70 hover:text-white/80 border-neutral-800')
                    }
                    style={{ borderRadius: 0 }}
                    aria-pressed={size === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="w-full border border-white bg-transparent py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-soft hover:bg-white hover:text-black"
              style={{ borderRadius: 0 }}
            >
              Add to Cart
            </button>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[90%] md:max-w-none">{product.description}</p>

            <div className="pt-2 text-xs text-neutral-500">
              240 GSM — heavyweight comfort, minimal silhouette.
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
