import { featuredProducts } from '../../data/drops'

export default function FeaturedDrop() {
  return (
    <section id="drops" className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-xl font-semibold tracking-[0.18em] text-neutral-200">
            Featured Products
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <article
              key={p.id}
              className="border border-neutral-800 bg-neutral-900 shadow-none transition-soft hover:shadow-glowPurple"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-[4/5] w-full border-b border-neutral-800 object-cover"
                />
              ) : (
                <div className="aspect-[4/5] border-b border-neutral-800 bg-neutral-900" />
              )}
              <div className="p-6">
                <h3 className="font-display text-sm font-medium uppercase tracking-[0.12em] text-neutral-200">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-400">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
