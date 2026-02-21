import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Heritage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 z-10">
          <div className="mx-auto max-w-[1300px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
            >
              Heritage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-sm sm:text-base uppercase tracking-[0.3em] text-neutral-400"
            >
              The First Constellations
            </motion.p>
          </div>
        </div>
      </section>

      {/* Hairline Separator */}
      <div className="border-t border-white/10"></div>

      {/* Main Content */}
      <section className="mx-auto max-w-[1300px] px-6 lg:px-12 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Origin
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
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white italic">
              HeavenlyNova began long before the first product ever existed.
            </p>

            <div className="space-y-6 text-white/90 leading-relaxed text-base sm:text-lg">
              <p>
                It emerged from raw, instinctive designs — sparks of light rising through a chaotic world. 
                Playful, introspective, imperfect, yet deeply authentic, these early creations appeared when 
                nothing else did, carrying meaning before the brand had a name.
              </p>
              <p>
                They were not artworks. They were <span className="text-white italic">signals</span> — fragments of consciousness 
                shaped by shadow and clarity, by struggle and awakening. These first symbols formed a language of 
                their own, arriving naturally, without force or intention, guiding the identity that would follow.
              </p>
              <p>
                This is the essence of Heritage: the original expressions that set the foundation, the constellations 
                that marked the beginning. Designs born from truth, not trend; from evolution, not urgency.
              </p>
              <p>
                HeavenlyNova continues to grow from that same source — a blend of darkness and starlight, 
                always becoming, always rising.
              </p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                The collection preserves these first constellations
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
