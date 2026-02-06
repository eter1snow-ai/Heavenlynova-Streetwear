import { featuredProducts } from '../../data/drops'

export default function FeaturedDrop() {
  return (
    <section id="drops" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-lg sm:text-xl font-semibold leading-tight tracking-tight text-neutral-200">
            Featured Products
          </h2>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {featuredProducts.map((p) => {
            const img = p.images?.[0]
            return (
              <article
                key={p.id}
                className="border border-neutral-800 bg-neutral-900 shadow-none transition-soft hover:shadow-glowPurple"
              >
                {img ? (
                  <img
                    src={img}
                    alt={p.name}
                    className="aspect-[4/4.5] w-full border-b border-neutral-800 object-cover"
                    style={{ borderRadius: 0 }}
                  />
                ) : (
                  <div className="aspect-[4/4.5] border-b border-neutral-800 bg-neutral-900" />
                )}
                <div className="p-6">
                  <h3 className="font-display text-sm font-medium uppercase tracking-[0.12em] text-neutral-200 truncate">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">{p.tagline}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
