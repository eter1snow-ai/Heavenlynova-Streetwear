export default function VibeSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full">
        <div className="relative h-[60vh] md:h-[70vh]">
          <video
            src="/Assets/Images/Video1.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.5em] opacity-90">
              HEAVENLY NOVA
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
