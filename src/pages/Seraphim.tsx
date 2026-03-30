import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/drops'
import ProductCard from '../components/shared/ProductCard'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 1, ease: 'easeOut' } }

export default function Seraphim() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const seraphimProducts = products.filter((p) => p.category === 'flagship')

  return (
    <main className="bg-black text-white">

      {/* 1. HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <motion.div {...fade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.55em', color: '#555555', lineHeight: 1.6 }} className="uppercase">
            Chapter /001
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 400, letterSpacing: '0.12em', lineHeight: 1.1, color: '#E6E6E6' }} className="uppercase">
            Seraphim
          </h1>
          <h2 style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', fontWeight: 300, letterSpacing: '0.45em', color: '#A8A8A8', lineHeight: 1.6 }} className="uppercase">
            The First Ascension
          </h2>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.15em', lineHeight: 1.8, color: '#555555', maxWidth: '420px', marginTop: '16px' }}>
            Where light fractures and something higher begins.
          </p>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 2. LORE */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <motion.div {...fade} className="mx-auto px-6 text-center" style={{ maxWidth: '680px' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#555555', lineHeight: 1.6, marginBottom: '48px' }} className="uppercase">
            Lore
          </p>
          <div style={{ fontSize: '0.95rem', letterSpacing: '0.08em', lineHeight: 2, color: '#A8A8A8', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p>
              Before form, there was silence.<br />
              Before silence, there was light.
            </p>
            <p>
              And when something in you breaks,<br />
              that light doesn't disappear.<br />
              It shifts.
            </p>
            <p>
              The Seraphim are not above you.<br />
              They are not beyond you.
            </p>
            <p>
              They are what appears<br />
              when the fracture stops being resistance<br />
              and becomes awareness.
            </p>
            <p>
              They burn —<br />
              not to destroy,<br />
              but to refine.
            </p>
            <p>
              They do not arrive.<br />
              They were always there.
            </p>
            <p style={{ color: '#666666' }}>
              Quiet.<br />
              Patient.<br />
              Waiting for you to see.
            </p>
            <p>
              They rise with you<br />
              through what breaks,<br />
              carrying nothing but clarity<br />
              and what you're ready to release.
            </p>
            <p>
              SERAPHIM // 001 marks the first ascension —<br />
              the moment you stop fighting the fracture<br />
              and begin to move through it.
            </p>
            <p style={{ color: '#666666', fontStyle: 'italic' }}>
              This is not a story of becoming something else.<br /><br />
              It is a story of remembering<br />
              what was always there.
            </p>
          </div>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 3. TAGLINE */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <motion.div {...fade} className="text-center px-6">
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.6rem)', fontWeight: 300, letterSpacing: '0.6em', color: '#E6E6E6', lineHeight: 1.4 }} className="uppercase">
            The Ones Who Rise
          </p>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 4. PRODUCT SHOWCASE */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: '1300px' }}>
          <motion.div {...fade} className="text-center mb-16">
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.5em', color: '#555555', lineHeight: 1.6 }} className="uppercase">
              The Collection
            </p>
          </motion.div>
          <motion.div {...fade} className="flex flex-wrap justify-center gap-12">
            {seraphimProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 5. THE ORIGIN CTA */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <motion.div {...fade} className="text-center px-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.5em', color: '#555555', lineHeight: 1.6 }} className="uppercase">
            Every ascension begins with a fracture.
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', fontWeight: 400, letterSpacing: '0.15em', color: '#E6E6E6', lineHeight: 1.2 }} className="uppercase">
            Read the Origin
          </h2>
          <Link
            to="/story"
            style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#A8A8A8', marginTop: '16px', borderBottom: '1px solid #333333', paddingBottom: '4px' }}
            className="uppercase hover:text-white hover:border-white transition-colors"
          >
            Enter the Origin →
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
