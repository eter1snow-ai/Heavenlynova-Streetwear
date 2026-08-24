import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Story() {
  const navigate = useNavigate()
  const [hoverImage, setHoverImage] = useState(false)

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
              className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
            >
              Born from <br /> Light &amp; Shadow
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
                The Origin Story
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
              Our story began in the stars, with a love so immense it brought a wounded dragon and a luminous angel together.
            </p>

            <div className="space-y-6 text-white leading-relaxed text-base sm:text-lg">
              <p>
                This wasn't a fight, but a beautiful, volatile dance of healing—a collision of light and shadow that birthed a new star: the <span className="text-white">HeavenlyNova</span>.
              </p>
              <p>
                This is our inspiration. We take the threads of this cosmic union and weave them into designs that are both powerful and delicate. 
                We believe that true strength lies in the balance between the rough and the refined, the darkness and the light.
              </p>
              <p>
                Each piece we create is an artifact of this union-forged for those who embrace their own shadows as much as their light.
              </p>
            </div>

            <div className="pt-12">
              <img 
                src="/Assets/Images/HeroNew.webp" 
                alt="Studio Atmosphere" 
                className="w-full grayscale opacity-60 aspect-[16/9] object-cover"
                style={{ 
                  borderRadius: 0,
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.8)'
                }}
              />
              <p className="mt-4 text-xs uppercase tracking-widest text-neutral-600">
                FORGED IN THE COLLISION OF LIGHT &amp; SHADOW
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
            Chapter /000 — Origin Protocol
          </p>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div className="space-y-8 text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>
                Before the first drop, before the first stitch, there was a signal. Chapter /000 is not a product — it is a protocol.
                The moment that precedes everything: the instant before the collision, when light and shadow recognized each other
                for the first time and understood they were not opposites, but complements.
              </p>
              <p>
                The Origin Protocol marks the beginning of a language that HeavenlyNova speaks through fabric, weight, and design.
                It is not about what you wear. It is about what you carry — the fractures, the clarity, the quiet knowing
                that something in you has always been reaching toward the light.
              </p>
              <p>
                Those who find Chapter /000 are not looking for streetwear. They are looking for a signal that they are not alone
                in the void. This is that signal. The First Light. The original frequency from which everything else radiates.
              </p>
              <p>
                HeavenlyNova was built from this origin — raw, instinctive, and unapologetically present.
                Every piece that follows carries a fragment of this first moment, encoded in heavyweight cotton and quiet design.
              </p>
            </div>
            <div className="space-y-4 text-neutral-500 text-sm leading-relaxed">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-700 mb-6">
                The First Signal
              </p>
              <p>
                Chapter /000 exists at the intersection of personal mythology and physical craft.
                It is the story of becoming something through the act of creating —
                of finding that the universe responds not to force, but to presence.
              </p>
              <p>
                The wounded dragon and the luminous angel: two forces that, in their collision,
                produced not destruction but a new kind of light. A HeavenlyNova — a star born
                from the energy of two worlds merging.
              </p>
              <p>
                This is why every piece we make is built to last. Not as a trend, but as an artifact.
                A quiet marker of a moment when something shifted — when you decided to carry the light
                instead of waiting for it to arrive.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-700 pt-6 border-t border-white/5">
                Chapter /000 — The First Signal — Origin Protocol
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
              Those who reach the end carry the first symbol.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div 
              className="relative overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer"
              onMouseEnter={() => setHoverImage(true)}
              onMouseLeave={() => setHoverImage(false)}
              onClick={() => navigate('/product/the-origin')}
            >
              <div className="w-full bg-neutral-900 relative flex items-center justify-center" style={{ aspectRatio: '2044/2000' }}>
                <motion.img 
                  src={backImage}
                  alt="The Origin Piece - Back"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 grayscale"
                  style={{ borderRadius: 0 }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: hoverImage ? 0 : 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  loading="lazy"
                />
                <motion.img 
                  src={frontImage}
                  alt="The Origin Piece - Front"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  style={{ borderRadius: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoverImage ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Exclusive Item
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight uppercase text-white">
                  THE ORIGIN PIECE
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Available only to those who seek.
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 max-w-md">
                  Origin Tee - Chapter 000 is reserved for those who reach the end. A quiet signal that you were here first.
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate('/product/the-origin')}
                  className="inline-flex items-center border border-white/40 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-soft hover:border-white hover:bg-white hover:text-black"
                  style={{ borderRadius: 0 }}
                >
                  Claim Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
