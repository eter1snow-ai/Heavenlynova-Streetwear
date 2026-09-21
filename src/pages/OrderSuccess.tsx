/**
 * src/pages/OrderSuccess.tsx
 *
 * Pagina de confirmare afișată după finalizarea plății pe Stripe.
 * Stripe redirecționează clientul la /order-success?session_id=cs_live_xxx
 *
 * Resetează coșul local și afișează mesajul de confirmare.
 */

import { useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../components/cart/CartContext'

export default function OrderSuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const { resetCart } = useCart()

  // Resetează coșul local după checkout finalizat
  useEffect(() => {
    resetCart()
  }, [resetCart])

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-lg mx-auto"
      >
        {/* Icon confirmare */}
        <div className="mb-8">
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid #333',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <span style={{ fontSize: '1.2rem', color: '#888' }}>✓</span>
          </div>
        </div>

        {/* Brand */}
        <p
          style={{ fontSize: '0.55rem', letterSpacing: '0.5em', color: '#333', lineHeight: 1.6 }}
          className="uppercase mb-2"
        >
          HeavenlyNova
        </p>

        {/* Titlu */}
        <h1
          style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '0.15em', color: '#E6E6E6' }}
          className="uppercase mb-4"
        >
          Order Confirmed
        </h1>

        {/* Mesaj */}
        <p
          style={{ fontSize: '0.8rem', letterSpacing: '0.06em', color: '#666', lineHeight: 2 }}
          className="mb-8"
        >
          Your piece is in production.
          <br />
          A confirmation email will arrive shortly.
          <br />
          Estimated delivery: 3–7 business days.
        </p>

        {/* Session ID pentru referință */}
        {sessionId && (
          <p
            style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: '#2a2a2a', lineHeight: 1.6 }}
            className="uppercase mb-8"
          >
            Order ref: {sessionId.slice(-12).toUpperCase()}
          </p>
        )}

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', backgroundColor: '#222', margin: '0 auto 32px' }} />

        {/* CTA */}
        <Link
          to="/drops"
          style={{
            display: 'inline-block',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            color: '#555',
            textDecoration: 'none',
            borderBottom: '1px solid #222',
            paddingBottom: '2px',
            transition: 'color 0.2s',
          }}
          className="uppercase hover:text-white"
        >
          Continue Exploring
        </Link>
      </motion.div>
    </main>
  )
}
