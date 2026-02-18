import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[50vh] lg:h-[60vh] w-full items-end bg-black text-white pb-40 overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ 
          opacity: 0.35,
          objectPosition: 'center 43%',
          filter: 'contrast(1.05) saturate(0.9) brightness(0.9)'
        }}
      >
        <source src="/Assets/Images/5818973-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>
      
      {/* Vignette + Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      <div className="pointer-events-none absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)'
        }}
      />
      
      {/* Chromatic Aberration Effect */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 70%, rgba(0,150,255,0.12) 85%, rgba(255,50,100,0.08) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Luxury Streetwear
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
            EXPLORE COLLECTION
          </Link>
        </div>
        <p className="mt-8 max-w-[520px] text-sm leading-relaxed text-neutral-300 md:text-base">
          Luxury streetwear. Minimal silhouettes. Heavyweight feel.
        </p>
      </div>
    </section>
  )
}
