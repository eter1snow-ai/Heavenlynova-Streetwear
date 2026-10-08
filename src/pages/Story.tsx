import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { STORY_TRANSLATIONS } from '../data/storyTranslations'

export default function Story() {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const s = STORY_TRANSLATIONS[language] || STORY_TRANSLATIONS.en

  const backImage = '/Assets/Images/Preview/The Origin Piece/The Origin Piece Back.webp'
  const frontImage = '/Assets/Images/Preview/The Origin Piece/Original Esentials Black Front.webp'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Cinematic Header */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 h-full w-full bg-black"
        >
          <img
            src="/Assets/Images/Heavenly story of Nova.webp"
            alt="HeavenlyNova Origin"
            className="h-full w-full object-cover opacity-90"
            style={{ 
              borderRadius: 0,
              objectPosition: 'center 43%',                                                                
              filter: 'contrast(1.2) saturate(0.8) brightness(0.9)',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
            }}
          />
          {/* Mysterious overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 opacity-50"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 z-10">
          <div className="mx-auto max-w-[1300px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 whitespace-pre-line"
            >
              {s.headerTitle}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Hairline Separator */}
      <div className="border-t border-white/10"></div>

      {/* The Origin Narrative */}
      <section className="mx-auto max-w-[1300px] px-6 lg:px-12 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {s.originLabel}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[700px] space-y-8"
          >
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white">
              {s.introQuote}
            </p>

            <div className="space-y-6 text-neutral-200 leading-relaxed text-base sm:text-lg">
              {s.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-400 font-medium pt-4">
              {s.closingMantra}
            </p>

            <div className="pt-12">
              <div className="relative overflow-hidden border border-neutral-800/80 bg-neutral-950">
                <img 
                  src="/Assets/Images/Noir 1.webp" 
                  alt="HeavenlyNova Architectural Silhouette" 
                  className="w-full aspect-square object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  style={{ 
                    borderRadius: 0,
                    filter: 'contrast(1.04) brightness(0.98)'
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500">
                FORGED IN LIGHT &amp; SHADOW // ARCHITECTURAL PRESENCE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Chapter /000 — The Origin Piece ─────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="border-t border-white/10 bg-black"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 py-20 sm:py-32">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500 mb-4">
              {s.chapterTitle}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white">
              {s.signalLabel}
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-400">
              {s.exclusiveSeek}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div 
              className="relative overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer group"
              onClick={() => navigate('/product/the-origin')}
            >
              <div className="w-full bg-neutral-900 relative flex items-center justify-center" style={{ aspectRatio: '2044/2000' }}>
                <img 
                  src={backImage}
                  alt="The Origin Piece - Back"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-out grayscale group-hover:opacity-0 pointer-events-none"
                  style={{ borderRadius: 0 }}
                  decoding="async"
                />
                <img 
                  src={frontImage}
                  alt="The Origin Piece - Front"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-out grayscale group-hover:opacity-100 pointer-events-none"
                  style={{ borderRadius: 0 }}
                  decoding="async"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {s.exclusiveLabel}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight uppercase text-white">
                  {s.exclusivePieceTitle}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 max-w-md">
                  {s.exclusiveDesc}
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/product/the-origin')}
                  className="inline-flex items-center border border-white/40 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-soft hover:border-white hover:bg-white hover:text-black"
                  style={{ borderRadius: 0 }}
                >
                  {s.claimBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
