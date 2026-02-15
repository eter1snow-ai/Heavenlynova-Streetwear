import Hero from '../components/home/Hero'
import { products } from '../data/drops'
import { Link } from 'react-router-dom'
import ProductCard from '../components/shared/ProductCard'

export default function Home() {
  const essentials = products.filter((p) => p.category === 'essentials').slice(0, 2)
  const heritage = products.find((p) => p.category === 'individuals')
  const featured = [...essentials, heritage].filter(Boolean)

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
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Daily wear. Minimal. Heavyweight comfort.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {products.filter((p) => p.category === 'essentials').map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="heritage" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Heritage Collection</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Archive tees. Editorial minimalism. 240 GSM.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {products.filter((p) => p.category === 'individuals').map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-neutral-950 py-16 sm:py-24 border-t border-neutral-900">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 text-center">
          <p className="text-lg font-light tracking-widest text-neutral-400 uppercase">
            Born from Light & Shadow
          </p>
          <Link
            to="/story"
            className="mt-6 inline-flex border-b border-white pb-1 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:text-neutral-400 hover:border-neutral-400"
          >
            Read the Origin
          </Link>
        </div>
      </section>

      <section id="limited-drops" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Limited Drops</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Exclusive pieces. Controlled release.</p>
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
