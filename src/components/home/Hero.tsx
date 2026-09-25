import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { COLLECTION_TRANSLATIONS } from '../../data/collectionTranslations'

export default function Hero() {
  const { language } = useLanguage()
  const h = (COLLECTION_TRANSLATIONS[language] || COLLECTION_TRANSLATIONS.en).home.hero

  return (
    <section
      id="hero"
      className="relative flex h-[70vh] sm:h-[60vh] w-full items-end bg-black text-white overflow-hidden pt-20 pb-12"
    >
      {/* Static Image Background — compressed 245KB (was 5.4MB) */}
      <img
        src="/Assets/Images/hero-bg.webp"
        alt="HeavenlyNova Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ objectPosition: 'center 60%', opacity: 0.5 }}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
          {h.luxuryStreetwear}
        </p>
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase">
          HEAVENLYNOVA
        </h1>
        <div className="mt-6">
          <Link
            to="/drops"
            className="inline-flex border border-white bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-soft hover:bg-white hover:text-black"
            style={{ borderRadius: 0 }}
          >
            {h.exploreBtn}
          </Link>
        </div>
        <p className="mt-8 max-w-[520px] text-sm leading-relaxed text-neutral-300 md:text-base">
          {h.tagline}
        </p>
      </div>
    </section>
  )
}
