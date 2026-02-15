import { products } from '../data/drops'
import { motion } from 'framer-motion'
import ProductCard from '../components/shared/ProductCard'

const sections = [
  { key: 'flagship' as const, title: 'Seraphim', description: 'Piesa centrală. Editorial presence. 240 GSM heavyweight.' },
  { key: 'individuals' as const, title: 'Individuals', description: 'Archive tees. Minimal graphics. 240 GSM jersey.' },
  { key: 'essentials' as const, title: 'Essentials', description: 'Core essentials. Clean lines. 240 GSM comfort.' }
]

export default function Drops() {
  return (
    <main className="bg-black text-white">
      <section className="bg-neutral-950 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
          >
            Drops
          </motion.h1>
          <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
            Core capsules in rotation. Simple, heavyweight, built to last.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 space-y-20 py-12 sm:py-16 lg:py-24">
          {sections.map((s) => {
            const items = products.filter((p) => p.category === s.key)
            return (
              <div key={s.key} className="space-y-6">
                <div>
                  <h2 className={s.key === 'flagship' ? 'font-serif text-xl sm:text-2xl font-semibold leading-tight tracking-tight' : 'text-xl sm:text-2xl font-semibold leading-tight tracking-tight'}>{s.title}</h2>
                  <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">{s.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
