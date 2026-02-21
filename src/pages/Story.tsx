import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Story() {
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
          {/* Mysterious overlay effect */}fdf
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
              Born from <br /> Light & Shadow
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
                Each piece we create is an artifact of this union—forged for those who embrace their own shadows as much as their light.
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
                FORGED IN THE COLLISION OF LIGHT & SHADOW
              </p>
            </div>
          </motion.div>
        </div>
      </section>
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
            <div className="relative overflow-hidden border border-neutral-800 bg-neutral-950">
              <div className="h-64 sm:h-80 md:h-96 w-full bg-neutral-900" />
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
                  Origin Tee - Chapter 00 is reserved for those who reach the end of the story. A quiet signal that you were here first.
                </p>
              </div>
              <div>
                <button
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
