import { featuredProducts } from '../../data/drops'
import ProductCard from '../shared/ProductCard'

export default function FeaturedDrop() {
  return (
    <section id="drops" className="bg-neutral-950 text-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-lg sm:text-xl font-semibold leading-tight tracking-tight text-neutral-200">
            Featured Products
          </h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} showPrice className="w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
