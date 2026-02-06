import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center bg-black text-white pt-24 sm:pt-28"
    >
      <img
        src="/Assets/Images/Hero 1.png"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Luxury Streetwear
        </p>
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase">
          HEAVENLYNOVA
        </h1>
        <p className="mx-auto mt-8 max-w-[85%] sm:max-w-[70%] text-sm leading-relaxed text-neutral-300 md:text-base">
          Luxury streetwear. Minimal silhouettes. Heavyweight feel.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            to="/drops"
            className="font-display bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black shadow-glowPurple transition-soft hover:bg-neutral-200 hover:shadow-glowCyan"
          >
            View Drops
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
