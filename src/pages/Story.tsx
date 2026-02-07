import { motion } from 'framer-motion'

export default function Story() {
  return (
    <main className="bg-black text-white">
      {/* Cinematic Header */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 h-full w-full bg-black"
        >
          <img
            src="/Assets/Images/Story1.jpg"
            alt="HeavenlyNova Origin"
            className="h-full w-full object-cover object-center opacity-90"
            style={{ 
              borderRadius: 0,
              filter: 'contrast(1.2) saturate(0.8) brightness(0.9)',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
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
              Born from <br /> Light & Shadow
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="mx-auto max-w-[1300px] px-6 lg:px-12 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="hidden lg:block">
            <div className="sticky top-24">
               <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                The Origin Story
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[700px] space-y-8"
          >
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white">
              Our story began in the stars, with a love so immense it brought a wounded dragon and a luminous angel together.
            </p>

            <div className="space-y-6 text-neutral-400 leading-relaxed text-base sm:text-lg">
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
                src="/Assets/Images/HeroNew.png" 
                alt="Studio Atmosphere" 
                className="w-full grayscale opacity-60 aspect-[16/9] object-cover"
                style={{ 
                  borderRadius: 0,
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.8)'
                }}
              />
              <p className="mt-4 text-xs uppercase tracking-widest text-neutral-600">
                Designed in the Void
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
