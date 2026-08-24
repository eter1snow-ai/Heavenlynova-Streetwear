import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <p
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.55em',
            color: '#555555',
            lineHeight: 1.6,
          }}
          className="uppercase mb-6"
        >
          404 — Not Found
        </p>
        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 400,
            letterSpacing: '0.08em',
            lineHeight: 1.1,
            color: '#E6E6E6',
          }}
          className="uppercase mb-8"
        >
          Lost in the void.
        </h1>
        <p
          style={{
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            lineHeight: 1.8,
            color: '#555555',
            maxWidth: '380px',
            margin: '0 auto 40px',
          }}
        >
          This page doesn't exist — or has been moved.
          <br />
          Return to the drops.
        </p>
        <Link
          to="/drops"
          className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          style={{ borderRadius: 0 }}
        >
          Back to Drops
        </Link>
      </motion.div>
    </main>
  )
}
