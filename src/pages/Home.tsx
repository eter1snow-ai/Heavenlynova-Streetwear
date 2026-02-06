import Hero from '../components/home/Hero'
import LoreSection from '../components/home/LoreSection'
import VibeSection from '../components/layout/VibeSection'
import { products } from '../data/drops'
import { Link } from 'react-router-dom'

export default function Home() {
  const essentials = products.filter((p) => p.category === 'essentials').slice(0, 2)
  const heritage = products.find((p) => p.category === 'individuals')
  const featured = [...essentials, heritage].filter(Boolean)

  return (
    <main className="bg-black">
      <Hero />
      <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link to={`/product/${p!.id}`} key={p!.id}>
                <article className="border border-neutral-800 bg-neutral-950">
                  {p!.images?.[0] ? (
                    <img
                      src={p!.images[0]}
                      alt={p!.name}
                      loading="lazy"
                      className="aspect-[3/4] w-full border-b border-neutral-800 object-contain bg-neutral-900"
                      style={{ borderRadius: 0 }}
                    />
                  ) : (
                    <div className="aspect-[3/4] border-b border-neutral-800 bg-neutral-900" />
                  )}
                  <div className="p-5">
                    <h3 className="text-sm font-medium uppercase tracking-widest">{p!.name}</h3>
                    <p className="mt-2 text-xs text-neutral-400">{p!.price}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="essentials" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">The Essentials</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Daily wear. Minimal. Heavyweight comfort.</p>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {products.filter((p) => p.category === 'essentials').map((p) => {
              const img = p.images?.[0]
              return (
                <Link to={`/product/${p.id}`} key={p.id}>
                  <article className="border border-neutral-800 bg-neutral-900">
                    {img ? (
                      <img
                        src={img}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[3/4] w-full border-b border-neutral-800 object-contain bg-neutral-900"
                        style={{ borderRadius: 0 }}
                      />
                    ) : (
                      <div className="aspect-[3/4] border-b border-neutral-800 bg-neutral-900" />
                    )}
                    <div className="p-5">
                      <h3 className="text-sm font-medium leading-snug truncate">{p.name}</h3>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{p.tagline}</p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="heritage" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Heritage Collection</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Archive tees. Editorial minimalism. 240 GSM.</p>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {products.filter((p) => p.category === 'individuals').map((p) => {
              const img = p.images?.[0]
              return (
                <Link to={`/product/${p.id}`} key={p.id}>
                  <article className="border border-neutral-800 bg-neutral-900">
                    {img ? (
                      <img
                        src={img}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[3/4] w-full border-b border-neutral-800 object-contain bg-neutral-900"
                        style={{ borderRadius: 0 }}
                      />
                    ) : (
                      <div className="aspect-[3/4] border-b border-neutral-800 bg-neutral-900" />
                    )}
                    <div className="p-5">
                      <h3 className="text-sm font-medium leading-snug truncate">{p.name}</h3>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{p.tagline}</p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      
      <LoreSection />

      <section id="limited-drops" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Limited Drops</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Exclusive pieces. Controlled release.</p>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {products.filter((p) => p.category === 'flagship').map((p) => {
              const img = p.images?.[0]
              return (
                <Link to={`/product/${p.id}`} key={p.id}>
                  <article className="border border-neutral-800 bg-neutral-900">
                    {img ? (
                      <img
                        src={img}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[3/4] w-full border-b border-neutral-800 object-contain bg-neutral-900"
                        style={{ borderRadius: 0 }}
                      />
                    ) : (
                      <div className="aspect-[3/4] border-b border-neutral-800 bg-neutral-900" />
                    )}
                    <div className="p-5">
                      <h3 className="text-sm font-medium leading-snug truncate">{p.name}</h3>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{p.tagline}</p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <VibeSection />

      <section id="gift-card" className="bg-black text-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto w-full">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight uppercase">Gift Card</h2>
          <p className="mt-2 max-w-xl text-neutral-300 leading-relaxed">Coming soon. Digital delivery, clean design.</p>
        </div>
      </section>
    </main>
  )
}
