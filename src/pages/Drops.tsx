import { products } from '../data/drops'
import { motion } from 'framer-motion'
import ProductCard from '../components/shared/ProductCard'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type TypeFilter = 'all' | 'tee' | 'hoodie'
type CollectionFilter = 'all' | 'flagship' | 'individuals' | 'essentials'

const collectionLabels: Record<string, string> = {
  all: 'All',
  flagship: 'Seraphim',
  individuals: 'Heritage',
  essentials: 'Essentials',
}

export default function Drops() {
  const location = useLocation()
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [collectionFilter, setCollectionFilter] = useState<CollectionFilter>('all')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const type = params.get('type') as TypeFilter
    const collection = params.get('collection') as CollectionFilter
    if (type) setTypeFilter(type)
    if (collection) setCollectionFilter(collection)
  }, [location.search])

  const filtered = products.filter((p) => {
    const matchType = typeFilter === 'all' || p.productType === typeFilter
    const matchCollection = collectionFilter === 'all' || p.category === collectionFilter
    return matchType && matchCollection
  })

  const filterBtn = (active: boolean) =>
    `px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] border transition-colors ${
      active ? 'bg-white text-black border-white' : 'bg-transparent text-white/60 border-white/20 hover:border-white/60 hover:text-white'
    }`

  return (
    <main className="bg-black text-white">
      <section className="bg-neutral-950 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight"
          >
            Drops
          </motion.h1>
          <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
            Core capsules in rotation. Simple, heavyweight, built to last.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mr-1">Type</span>
              {(['all', 'tee', 'hoodie'] as TypeFilter[]).map((t) => (
                <button key={t} onClick={() => setTypeFilter(t)} className={filterBtn(typeFilter === t)} style={{ borderRadius: 0 }}>
                  {t === 'all' ? 'All' : t === 'tee' ? 'Tees' : 'Hoodies'}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mr-1">Collection</span>
              {(['all', 'flagship', 'individuals', 'essentials'] as CollectionFilter[]).map((c) => (
                <button key={c} onClick={() => setCollectionFilter(c)} className={filterBtn(collectionFilter === c)} style={{ borderRadius: 0 }}>
                  {collectionLabels[c]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
          {filtered.length === 0 ? (
            <p className="text-neutral-500 text-sm uppercase tracking-widest">No products found.</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-8">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
