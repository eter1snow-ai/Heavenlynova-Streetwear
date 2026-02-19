import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Join() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/Assets/Images/The Ascent/pexels-zak-mogel-2158251013-35758424.webp"
        alt="The Ascent"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full px-6"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            JOIN THE ASCENT
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Enter your coordinates for early access to Chapter 01: Seraphim.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-black/80 border border-white/40 text-white text-xs tracking-wide px-4 py-4 focus:border-white focus:outline-none transition-colors"
            style={{ borderRadius: 0 }}
          />
          <button
            className="w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-4 uppercase font-semibold hover:bg-white/90 transition-colors"
            style={{ borderRadius: 0 }}
          >
            INITIATE
          </button>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-white/40 mt-6 text-center">
          The store is currently closed while we prepare the Seraphim Collection.
        </p>
      </motion.div>
    </main>
  )
}
