import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById } from '../data/drops'
import { useState } from 'react'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId || '')
  const [size, setSize] = useState<string>('')

  if (!product) {
    return (
      <main className="bg-black text-white">
        <section className="mx-auto w-full max-w-[1440px] py-24">
          <h1 className="text-2xl font-semibold">Produsul nu a fost găsit</h1>
          <p className="mt-2 text-neutral-400">Verifică linkul sau revino la Drops.</p>
        </section>
      </main>
    )
  }

  const isSeraphim = product.category === 'flagship'
  const heroImage = product.images[0]

  return (
    <main className="bg-black text-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto w-full max-w-[1440px] py-10 sm:py-16 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:sticky lg:top-24 self-start">
            {heroImage ? (
              <img
                src={heroImage}
                alt={product.name}
                className="aspect-[4/5] w-full max-h-[80vh] object-contain border border-neutral-800"
                style={{ borderRadius: 0 }}
              />
            ) : (
              <div
                className="aspect-[4/5] w-full max-h-[80vh] border border-neutral-800 bg-neutral-900"
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

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-[90%] md:max-w-none">{product.description}</p>

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

            <div className="pt-2 text-xs text-neutral-500">
              240 GSM — heavyweight comfort, minimal silhouette.
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
