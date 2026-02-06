import { products } from '../data/drops'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sections = [
  { key: 'flagship' as const, title: 'Seraphim', description: 'Piesa centrală. Editorial presence. 240 GSM heavyweight.' },
  { key: 'individuals' as const, title: 'Individuals', description: 'Archive tees. Minimal graphics. 240 GSM jersey.' },
  { key: 'essentials' as const, title: 'Essentials', description: 'Core essentials. Clean lines. 240 GSM comfort.' }
]

export default function Drops() {
  return (
    <main className="bg-black text-white">
      <section className="bg-neutral-950 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
        <div className="mx-auto max-w-7xl space-y-20 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
          {sections.map((s) => {
            const items = products.filter((p) => p.category === s.key)
            return (
              <div key={s.key} className="space-y-6">
                <div>
                  <h2 className={s.key === 'flagship' ? 'font-serif text-xl sm:text-2xl font-semibold leading-tight tracking-tight' : 'text-xl sm:text-2xl font-semibold leading-tight tracking-tight'}>{s.title}</h2>
                  <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">{s.description}</p>
                </div>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-6">
                  {items.map((p) => {
                    const img = p.images?.[0]
                    return (
                      <Link to={`/product/${p.id}`} key={p.id}>
                        <motion.article
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.3 }}
                          className="border border-neutral-800 bg-neutral-900"
                        >
                          {img ? (
                            <img src={img} alt={p.name} className="aspect-[4/4.5] w-full border-b border-neutral-800 object-cover" style={{ borderRadius: 0 }} />
                          ) : (
                            <div className="aspect-[4/4.5] border-b border-neutral-800 bg-neutral-900" />
                          )}
                          <div className="p-5">
                            <h3 className="text-sm font-medium leading-snug truncate">{p.name}</h3>
                            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{p.tagline}</p>
                          </div>
                        </motion.article>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
