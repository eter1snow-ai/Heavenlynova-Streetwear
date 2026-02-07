import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[50vh] lg:h-[60vh] w-full items-end bg-black text-white pb-40"
    >
      <img
        src="/Assets/Images/HeroNew.png"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Luxury Streetwear
        </p>
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase">
          HEAVENLYNOVA
        </h1>
        <div className="mt-6">
          <Link
            to="/drops"
            className="inline-flex border border-white bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-soft hover:bg-white hover:text-black"
            style={{ borderRadius: 0 }}
          >
            EXPLORE COLLECTION
          </Link>
        </div>
        <p className="mt-8 max-w-[520px] text-sm leading-relaxed text-neutral-300 md:text-base">
          Luxury streetwear. Minimal silhouettes. Heavyweight feel.
        </p>
      </div>
    </section>
  )
}
