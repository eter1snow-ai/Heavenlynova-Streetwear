import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { useCurrency } from '../../context/CurrencyContext'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { currency, setCurrency } = useCurrency()
  const { t } = useLanguage()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {/* silently ignored — autoplay blocked by browser */})
  }, [])

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      {/* Video background — programmatic play pentru iOS (evită butonul nativ ▶) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
        aria-hidden="true"
      >
        <source src="/Assets/Images/Video1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto px-10" style={{ maxWidth: '1400px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '64px' }}>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.2em', lineHeight: 1.4 }} className="uppercase">
              HEAVENLYNOVA
            </h2>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', lineHeight: 1.7, color: '#888888' }} className="uppercase">
              {t('footer.tagline', 'Between Light & Shadow')}
            </p>
          </div>

          {/* Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              {t('footer.support', 'Support')}
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/contact" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('footer.contact')}</Link>
              <Link to="/track-order" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('footer.track')}</Link>
              <Link to="/refund-policy" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('footer.refunds')}</Link>
              <Link to="/shipping-policy" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('footer.shipping')}</Link>
            </nav>
          </div>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              {t('footer.brand', 'Brand')}
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/drops" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('nav.drops')}</Link>
              <Link to="/heritage" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('nav.heritage')}</Link>
              <Link to="/seraphim" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('nav.seraphim')}</Link>
              <Link to="/join" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">{t('nav.join')}</Link>
            </nav>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              {t('footer.social', 'Social')}
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="https://www.instagram.com/heavenlynovastreetwear" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Instagram →</a>
              <a href="https://www.tiktok.com/@heavenlynova.studio" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">TikTok →</a>
              <a href="https://www.facebook.com/HeavenlyNovaOfficial" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Facebook →</a>
              <a href="https://ro.pinterest.com/HeavenlynovaStreetwear/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Pinterest →</a>
              <Link to="/story" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6 }} className="uppercase text-white hover:text-white transition-colors">{t('footer.origin', '— THE ORIGIN —')}</Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid #2A2A2A', marginTop: '80px', paddingTop: '40px', paddingBottom: '20px' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', lineHeight: 1.6, color: '#888888' }} className="uppercase text-center md:text-left">
            2026 HEAVENLYNOVA - {t('footer.rights').toUpperCase()} | 
            <Link to="/privacy-policy" style={{ color: '#888888', textDecoration: 'none', margin: '0 0.5rem', fontSize: '0.72rem', letterSpacing: '0.2em', lineHeight: 1.6 }} className="uppercase hover:text-white transition-colors">{t('footer.privacy')}</Link> |
            <Link to="/terms-of-service" style={{ color: '#888888', textDecoration: 'none', margin: '0 0.5rem', fontSize: '0.72rem', letterSpacing: '0.2em', lineHeight: 1.6 }} className="uppercase hover:text-white transition-colors">{t('footer.terms')}</Link>
          </span>
          <div className="flex items-center gap-6">
            {/* Footer Currency Switcher */}
            <div className="flex items-center text-[10px] tracking-[0.15em] uppercase font-mono border border-neutral-800 bg-neutral-950 px-2 py-1">
              <button
                onClick={() => setCurrency('USD')}
                className={`transition-colors ${currency === 'USD' ? 'text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                USD $
              </button>
              <span className="mx-1.5 text-neutral-700">|</span>
              <button
                onClick={() => setCurrency('EUR')}
                className={`transition-colors ${currency === 'EUR' ? 'text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                EUR €
              </button>
            </div>
            <a href="mailto:support@heavenlynova.com" className="uppercase hover:text-white transition-colors" style={{ fontSize: '0.82rem', letterSpacing: '0.15em', lineHeight: 1.6, color: '#D6D6D6', textDecoration: 'none' }}>support@heavenlynova.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

