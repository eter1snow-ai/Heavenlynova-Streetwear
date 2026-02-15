import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/drops'
import { useEffect, useState } from 'react'
import ZoomImage from '../components/shared/ZoomImage'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId || '')
  const [size, setSize] = useState<string>('')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
  const heroImages = product.images.filter(Boolean)
  const isNeck = (src: string) => /neck/i.test(src)

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
            {heroImages.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {heroImages.map((src, idx) => {
                  if (isNeck(src)) {
                    return (
                      <ZoomImage
                        key={idx}
                        src={src}
                        alt={product.name}
                        className="border border-neutral-800"
                        zoomFactor={2.5}
                      />
                    )
                  }
                  return (
                    <img
                      key={idx}
                      src={src}
                      alt={product.name}
                      className="aspect-[3/4] w-full object-cover object-top border border-neutral-800"
                      style={{ borderRadius: 0, backgroundColor: 'transparent', mixBlendMode: 'normal' }}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
                    />
                  )
                })}
              </div>
            ) : (
              <div
                className="aspect-[3/4] w-full border border-neutral-800 bg-neutral-900"
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
