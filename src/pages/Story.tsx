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
    console.log('✅ THE ORIGIN PIECE section ready');
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

            <div className="space-y-6 text-white leading-relaxed text-base sm:text-lg">
              <p>{s.para1}</p>
              <p>{s.para2}</p>
              <p>{s.para3}</p>
            </div>

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

      {/* ─── Chapter /000 — Origin Protocol ──────────────────────────────────── */}
      {/*
        This section is distinct from /product/the-origin.
        /story is the editorial origin narrative of HeavenlyNova as a brand.
        /product/the-origin is the product page for the physical tee.
        Google indexes them separately with different canonical URLs.
      */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="border-t border-white/10 bg-black"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 py-24 sm:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-600 mb-12">
            {s.chapterTitle}
          </p>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div className="space-y-8 text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>{s.chapterPara1}</p>
              <p>{s.chapterPara2}</p>
              <p>{s.chapterPara3}</p>
              <p>{s.chapterPara4}</p>
            </div>
            <div className="space-y-4 text-neutral-500 text-sm leading-relaxed">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-700 mb-6">
                {s.signalLabel}
              </p>
              <p>{s.signalPara1}</p>
              <p>{s.signalPara2}</p>
              <p>{s.signalPara3}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-700 pt-6 border-t border-white/5">
                {s.signalFooter}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="border-t border-white/10 bg-black"
      >
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12 py-16 sm:py-24">
          <div className="mb-10">
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 opacity-50 tracking-widest">
              {s.exclusiveSymbol}
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight uppercase text-white">
                  {s.exclusivePieceTitle}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  {s.exclusiveSeek}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 max-w-md">
                  {s.exclusiveDesc}
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/product/the-origin')}
                  className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-soft hover:border-white hover:bg-white hover:text-black"
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
