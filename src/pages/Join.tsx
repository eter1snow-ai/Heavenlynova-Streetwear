import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Join.css'

export default function Join() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'join' }),
      })
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

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
          <p className="uppercase mb-5" style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}>Born from Light & Shadow.</p>
          <h1 className="uppercase mb-5" style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.5, color: '#E6E6E6' }}>
            The Heritage Line<br />is Live.
          </h1>
          <p className="uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.35em', lineHeight: 1.8, color: '#888888' }}>
            Be among the first to receive exclusive drops,<br />lore fragments, and early access to what comes next.
          </p>
        </div>

        {!sent ? (
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/80 border border-white/40 text-white text-xs tracking-wide px-4 py-4 focus:border-white focus:outline-none transition-colors"
                style={{ borderRadius: 0 }}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-4 uppercase font-semibold hover:bg-white/90 transition-colors"
                style={{ borderRadius: 0, opacity: loading ? 0.7 : 1 }}
              >
                {loading ? '...' : 'INITIATE'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="uppercase tracking-[0.3em] text-white/80" style={{ fontSize: '0.8rem', lineHeight: 1.8 }}>
              Your request is under review<br />by the Keepers.
            </p>
          </div>
        )}

        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-6 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </main>
  )
}
