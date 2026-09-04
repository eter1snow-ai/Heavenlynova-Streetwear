import Hero from '../components/home/Hero'
import { products } from '../data/drops'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../components/shared/ProductCard'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const location = useLocation()

  const heritage = products.filter((p) => p.category === 'individuals')
  const essentials = products.filter((p) => p.category === 'essentials')
  const [nlEmail, setNlEmail] = useState('')
  const [nlSent, setNlSent] = useState(false)
  const [nlLoading, setNlLoading] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nlEmail) return
    setNlLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail, type: 'newsletter' }),
      })
      setNlSent(true)
    } finally {
      setNlLoading(false)
    }
  }

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <main className="bg-black">
      <Hero />

      {/* 1. SOULFULL HERO */}
      <section id="soulfull" className="bg-black text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#888888', lineHeight: 1.6 }} className="uppercase mb-3">
              Heritage Collection
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 500, letterSpacing: '0.08em', lineHeight: 1.2, color: '#E6E6E6' }} className="uppercase mb-3">
              Soulfull
            </h2>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.2em', lineHeight: 1.7, color: '#888888' }} className="mb-10">
              Some things are meant to be worn.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {heritage.map((p) => (
              <div key={p.id} className="flex flex-col items-center w-full max-w-[400px]">
                <ProductCard product={p} />
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: '#666666', marginTop: '10px' }} className="uppercase text-center">
                  Wear what you feel.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* 2. ESSENTIALS */}
      <section id="essentials" className="bg-neutral-950 text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#888888', lineHeight: 1.6 }} className="uppercase mb-3">
              Core Collection
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 500, letterSpacing: '0.08em', lineHeight: 1.2, color: '#E6E6E6' }} className="uppercase mb-4">
              Essentials
            </h2>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', lineHeight: 1.8, color: '#888888', maxWidth: '480px' }} className="uppercase mb-10">
              Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and a calm intensity built for everyday rituals.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {essentials.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/essentials"
              className="inline-flex border-b border-white/40 pb-1 text-xs font-medium uppercase tracking-[0.24em] text-neutral-400 transition-colors hover:text-white hover:border-white"
            >
              ? Explore Core Collection
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* 3. HERITAGE COLLECTION */}
      <section id="heritage" className="bg-black text-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#888888', lineHeight: 1.6 }} className="uppercase mb-3">
              Active Collection
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 500, letterSpacing: '0.08em', lineHeight: 1.2, color: '#E6E6E6' }} className="uppercase mb-3">
              Heritage Collection
            </h2>
            <p style={{ fontSize: '0.82rem', letterSpacing: '0.15em', lineHeight: 1.8, color: '#A8A8A8', maxWidth: '600px', fontStyle: 'italic' }} className="mb-10">
              HeavenlyNova began long before the first product. Born from instinctive designs that appeared like sparks in chaos, these early creations carried meaning before the brand had a name. Heritage preserves those first constellations.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {heritage.map((p) => (
              <ProductCard key={p.id} product={p} className="w-full max-w-[400px]" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/heritage"
              className="inline-flex border-b border-white/40 pb-1 text-xs font-medium uppercase tracking-[0.24em] text-neutral-400 transition-colors hover:text-white hover:border-white"
            >
              → Read the Full Heritage Story
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section className="bg-neutral-950 border-t border-white/5" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="mx-auto w-full px-6 flex flex-col items-center justify-center text-center" style={{ maxWidth: '580px' }}>
          <p className="uppercase mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}>The Universe Has Begun</p>
          <h2
            className="uppercase mb-5"
            style={{ fontFamily: '\'Glasgow Serial\', sans-serif', fontWeight: 500, fontSize: '2rem', letterSpacing: '0.12em', lineHeight: 1.5, color: '#E6E6E6' }}
          >
            Chapter /000<br />is Live.
          </h2>
          <p className="uppercase mb-12" style={{ fontSize: '0.75rem', letterSpacing: '0.35em', lineHeight: 1.8, color: '#888888' }}>
            Join the ascent for exclusive drops<br />and lore fragments.
          </p>
          {!nlSent ? (
            <form onSubmit={handleNewsletter} className="w-full flex flex-col items-center gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-white/20 text-white text-xs tracking-widest px-0 py-3 placeholder:text-white/20 focus:border-white/60 focus:outline-none transition-colors text-center"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                disabled={nlLoading}
                className="mt-2 bg-transparent border border-white/30 text-white text-[10px] tracking-[0.3em] px-10 py-3 uppercase hover:bg-white hover:text-black transition-colors"
                style={{ borderRadius: 0, opacity: nlLoading ? 0.5 : 1 }}
              >
                {nlLoading ? '...' : 'Initiate'}
              </button>
            </form>
          ) : (
            <p className="uppercase tracking-[0.3em]" style={{ fontSize: '0.75rem', color: '#E6E6E6', lineHeight: 1.8 }}>
              You are now part of the universe.
            </p>
          )}
          <p className="text-[9px] text-white/15 mt-6 uppercase tracking-[0.3em]">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* 5. READ THE ORIGIN - same style as Heritage easter egg */}
      <section className="bg-black py-24 sm:py-32 border-t border-white/10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-600 hover:text-neutral-300 transition-colors">
            <Link to="/story" className="hover:text-white">
              — THE ORIGIN —
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  )
}
