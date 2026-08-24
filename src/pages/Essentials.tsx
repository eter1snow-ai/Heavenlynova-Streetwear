import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { products } from '../data/drops'
import ProductCard from '../components/shared/ProductCard'

export default function Essentials() {
  const essentials = products.filter((p) => p.id === 'essentials-black' || p.id === 'essentials-white')

  useEffect(() => {
    window.scrollTo(0, 0)
    // Update SEO tags dynamically
    document.title = "Essentials | Core Collection | HeavenlyNova"
    
    // Update canonical link
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = "https://heavenlynova.com/essentials"
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
        
        <div className="relative mx-auto w-full max-w-[1300px] px-6 lg:px-12 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-[#888888] leading-[1.6] mb-3">
              Core Collection
            </p>
            <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium uppercase tracking-[0.08em] leading-[1.2] text-[#E6E6E6] mb-4">
              Essentials
            </h1>
            <p className="mx-auto text-[0.8rem] uppercase tracking-[0.2em] leading-[1.8] text-[#888888] max-w-[480px]">
              Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and a calm intensity built for everyday rituals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hairline Separator */}
      <div className="border-t border-white/5"></div>

      {/* Main Content - Products Grid */}
      <section className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 py-16 sm:py-24">
        <div className="flex flex-wrap justify-center gap-8">
          {essentials.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
