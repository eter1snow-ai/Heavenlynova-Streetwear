import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/drops'
import ProductCard from '../components/shared/ProductCard'
import { useLanguage } from '../context/LanguageContext'
import { COLLECTION_TRANSLATIONS } from '../data/collectionTranslations'

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 1 } }

export default function Seraphim() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { language } = useLanguage()
  const s = (COLLECTION_TRANSLATIONS[language] || COLLECTION_TRANSLATIONS.en).seraphim

  const seraphimProducts = products.filter((p) => p.category === 'flagship')

  return (
    <main className="bg-black text-white">

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Background Gothic Angel Banner */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.38 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/Assets/Images/The Ascent/seraphim-banner.webp"
            alt="Seraphim - The Ascent"
            className="h-full w-full object-cover object-[center_28%] pointer-events-none select-none"
          />
        </div>

        {/* Ambient Dark Gradient Overlays for High Contrast & Mystique */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.75)_80%)] pointer-events-none" />

        <motion.div {...fade} className="relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.55em', color: '#888888', lineHeight: 1.6 }} className="uppercase drop-shadow-sm">
            {s.chapter}
          </p>
          <h1 style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', fontWeight: 400, letterSpacing: '0.12em', lineHeight: 1.1, color: '#FFFFFF' }} className="uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            {s.title}
          </h1>
          <h2 style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', fontWeight: 300, letterSpacing: '0.45em', color: '#D4D4D4', lineHeight: 1.6 }} className="uppercase drop-shadow-md">
            {s.subtitle}
          </h2>
          <p style={{ fontSize: '0.82rem', letterSpacing: '0.18em', lineHeight: 1.8, color: '#A0A0A0', maxWidth: '440px', marginTop: '16px' }} className="drop-shadow-sm">
            {s.tagline}
          </p>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 2. LORE */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <motion.div {...fade} className="mx-auto px-6 text-center" style={{ maxWidth: '680px' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#555555', lineHeight: 1.6, marginBottom: '48px' }} className="uppercase">
            {s.loreLabel}
          </p>
          <div style={{ fontSize: '0.95rem', letterSpacing: '0.08em', lineHeight: 2, color: '#A8A8A8', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {s.stanzas.map((stanza, idx) => (
              <p
                key={idx}
                className="whitespace-pre-line"
                style={{
                  color: idx === 6 ? '#666666' : idx === 9 ? '#666666' : undefined,
                  fontStyle: idx === 9 ? 'italic' : undefined,
                }}
              >
                {stanza}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 3. TAGLINE */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <motion.div {...fade} className="text-center px-6">
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.6rem)', fontWeight: 300, letterSpacing: '0.6em', color: '#E6E6E6', lineHeight: 1.4 }} className="uppercase">
            {s.taglineRise}
          </p>
        </motion.div>
      </section>

      <div style={{ borderTop: '1px solid #111111' }} />

      {/* 4. PRODUCT SHOWCASE */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: '1300px' }}>
          <motion.div {...fade} className="text-center mb-16">
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.5em', color: '#555555', lineHeight: 1.6 }} className="uppercase">
              {s.piecesLabel}
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
            {s.originCtaSubtitle}
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', fontWeight: 400, letterSpacing: '0.15em', color: '#E6E6E6', lineHeight: 1.2 }} className="uppercase">
            {s.originCtaTitle}
          </h2>
          <Link
            to="/story"
            style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: '#A8A8A8', marginTop: '16px', borderBottom: '1px solid #333333', paddingBottom: '4px' }}
            className="uppercase hover:text-white hover:border-white transition-colors"
          >
            {s.originCtaLink}
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
