import { motion } from 'framer-motion'
import { useEffect } from 'react'
import './Join.css'

export default function Join() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 join-bg-image"
        src="/Assets/Images/The Ascent/pexels-zak-mogel-2158251013-35758424.webp"
        alt="The Ascent"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full px-6"
      >
        <div className="text-center mb-10">
          <p className="uppercase mb-5" style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}>Enter the Ascent</p>
          <h1 className="uppercase mb-5" style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.5, color: '#E6E6E6' }}>
            Chapter /001:<br />Seraphim is Now Live.
          </h1>
          <p className="uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.35em', lineHeight: 1.8, color: '#888888' }}>
            Receive exclusive drops, lore fragments,<br />and early access to future chapters.
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

        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-6 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </main>
  )
}
