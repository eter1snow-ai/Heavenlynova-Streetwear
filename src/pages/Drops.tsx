import { collections } from '../data/drops'
import { motion } from 'framer-motion'

export default function Drops() {
  return (
    <main className="bg-black text-white">
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Drops
          </motion.h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Core capsules in rotation. Simple, heavyweight, built to last.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-16">
          {collections.map((c) => (
            <div key={c.key} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 max-w-xl text-neutral-300">{c.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {c.products.map((p) => (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3 }}
                    className="border border-neutral-800 bg-neutral-900"
                  >
                    <div className="aspect-[4/5] border-b border-neutral-800 bg-neutral-900" />
                    <div className="p-5">
                      <h3 className="text-sm font-medium">{p.name}</h3>
                      <p className="mt-2 text-xs text-neutral-400">{p.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
