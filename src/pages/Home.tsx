import Hero from '../components/home/Hero'
import { products } from '../data/drops'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../components/shared/ProductCard'
import { useEffect } from 'react'

export default function Home() {
  const location = useLocation()
  const heritage = products.find((p) => p.category === 'individuals')
  const coreHoodie = products.find((p) => p.id === 'core-hoodie')
  const featured = [heritage, coreHoodie].filter(Boolean)

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
      <section className="bg-black text-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-6">
            {featured.map((p) => (
              <ProductCard key={p!.id} product={p!} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-6 sm:py-10">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and
              a calm intensity built for everyday rituals.
            </p>
            <Link
              to="/story"
              className="mt-4 inline-flex border-b border-white pb-1 text-xs font-semibold uppercase tracking-[0.24em] text-white"
            >
              Read the Origin
            </Link>
          </div>
        </div>
      </section>
      <section id="essentials" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">The Essentials</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and a calm intensity built for everyday rituals.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {products.filter((p) => p.category === 'essentials' && p.id !== 'core-hoodie').map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="heritage" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Heritage Collection</h2>
          <p className="mt-4 max-w-2xl text-neutral-200 leading-relaxed italic">
            Born from instinctive designs that appeared like sparks in chaos. Heritage preserves those first constellations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {products.filter((p) => p.category === 'individuals').map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/heritage"
              className="inline-flex border-b border-white/40 pb-1 text-xs font-medium uppercase tracking-[0.24em] text-neutral-400 transition-colors hover:text-white hover:border-white"
            >
              → Read the full Heritage story
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-neutral-950 py-20 sm:py-32 border-t border-white/5">
        <div className="mx-auto w-full max-w-[480px] px-6 flex flex-col items-center justify-center text-center">
          <h2
            className="text-3xl sm:text-4xl uppercase text-white mb-3"
            style={{ fontFamily: '\'Glasgow Serial\', sans-serif', fontWeight: 700, letterSpacing: '0.15em' }}
          >
            Join the Ascent
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-10">
            Chapter /001: Seraphim — Exclusive drops. Limited releases.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-white/20 text-white text-xs tracking-widest px-0 py-3 placeholder:text-white/20 focus:border-white/60 focus:outline-none transition-colors text-center"
              style={{ borderRadius: 0 }}
            />
            <button
              type="submit"
              className="mt-2 bg-transparent border border-white/30 text-white text-[10px] tracking-[0.3em] px-10 py-3 uppercase hover:bg-white hover:text-black transition-colors"
              style={{ borderRadius: 0 }}
            >
              Initiate
            </button>
          </form>
          <p className="text-[9px] text-white/15 mt-6 uppercase tracking-[0.3em]">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <section id="limited-drops" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Seraphim</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">SERAPHIM // 001. THE ONES WHO BURN. Exclusive pieces. Controlled release.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {products.filter((p) => p.category === 'flagship').map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
