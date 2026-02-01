import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Luxury Streetwear
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
          HEAVENLYNOVA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-neutral-300 md:text-base">
          Luxury streetwear. Minimal silhouettes. Heavyweight feel.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#/drops"
            className="font-display bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black shadow-glowPurple transition-soft hover:bg-neutral-200 hover:shadow-glowCyan"
          >
            View Drops
          </a>
        </div>
      </motion.div>
    </section>
  )
}
