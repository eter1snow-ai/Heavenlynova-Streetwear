import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/drops'
import { useEffect, useState, useMemo } from 'react'
import ZoomImage from '../components/shared/ZoomImage'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId || '')
  const [size, setSize] = useState<string>('')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isNeck = (src: string) => /neck/i.test(src)
  const images = useMemo(() => (product?.images || []).filter(Boolean), [product])
  const variantImages = useMemo(() => images.filter((s) => !isNeck(s)).slice(0, 2), [images])
  const neckImages = useMemo(() => images.filter((s) => isNeck(s)), [images])
  const [variantIndex, setVariantIndex] = useState<number>(0)
  const mainFront = variantImages[variantIndex] || variantImages[0]
  const swatches = useMemo(() => {
    const mapColor = (p: string) => {
      const file = (p.split('/').pop() || '').toLowerCase()
      if (/green/.test(file)) return { label: 'green', hex: '#1f3a28', text: '#ffffff' }
      if (/white/.test(file)) return { label: 'white', hex: '#ffffff', text: '#000000', border: '#e5e5e5' }
      if (/creme|cream/.test(file)) return { label: 'creme', hex: '#e8dfcf', text: '#000000', border: '#cfc7b4' }
      if (/black/.test(file)) return { label: 'black', hex: '#0b0b0b', text: '#ffffff' }
      return { label: 'var', hex: '#888888', text: '#ffffff' }
    }
    return variantImages.map((p, i) => ({ index: i, src: p, ...mapColor(p) }))
  }, [variantImages])

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
                {mainFront && (
                  <div className="md:col-span-2">
                    <motion.img
                      src={mainFront}
                      alt={product.name}
                      className="aspect-[3/4] w-full object-contain object-center"
                      style={{ borderRadius: 0, backgroundColor: 'transparent', mixBlendMode: 'normal' }}
                      loading="lazy"
                      onLoad={() => console.log('✅ Front loaded', mainFront)}
                      onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  </div>
                )}
                {neckImages[0] && (
                  <div>
                    <ZoomImage
                      src={neckImages[0]}
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

            {swatches.length ? (
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
                        console.log('✅ Variant selected', v.label)
                        try {
                          const raw = localStorage.getItem('draftFormData')
                          const data = raw ? JSON.parse(raw) : {}
                          const next = { ...data, productId: product.id, color: v.label }
                          localStorage.setItem('draftFormData', JSON.stringify(next))
                          console.log('✅ Draft saved', next)
                        } catch (err) {
                          console.warn('Draft save failed', err)
                        }
                      }}
                      className="border transition-transform"
                      style={{
                        borderRadius: '9999px',
                        backgroundColor: v.hex,
                        color: v.text,
                        borderColor:
                          (variantIndex === v.index ? '#ffffff' : (v.border || 'rgba(255,255,255,0.6)')),
                        transform: variantIndex === v.index ? 'scale(1.02)' : 'scale(1)',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                        minWidth: '84px',
                        height: '28px',
                        padding: '0 12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textTransform: 'none',
                        lineHeight: 1,
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
                    onClick={() => setSize(s)}
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
