export default function LoreSection() {
  return (
    <section id="lore" className="bg-black text-white py-0 pb-16">
      <div className="w-full relative">
        <div className="mx-auto w-full max-w-[1440px] relative">
          <img
            src="/Assets/Images/Story1.jpg"
            alt="HeavenlyNova Lore"
            className="w-full h-auto block"
            style={{ borderRadius: 0, filter: 'grayscale(0%) contrast(100%)' }}
          />
          <div className="absolute bottom-0 left-0 w-full px-4 lg:px-12 pb-8 pt-24 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="max-w-[900px]">
              <p
                className="text-3xl lg:text-6xl font-bold tracking-widest text-white mb-4 lg:mb-8"
                style={{ fontVariant: 'small-caps', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
              >
                THE COSMIC ORIGIN
              </p>
              <div className="backdrop-blur-md p-6 lg:p-10 border-l-4 border-white/50 bg-black/30">
                <p className="text-base lg:text-xl leading-relaxed text-white font-medium text-justify lg:text-left drop-shadow-lg">
                  Our story began in the stars, with a love so immense it brought a wounded dragon and a
                  luminous angel together. This wasn&apos;t a fight, but a beautiful, volatile dance of
                  healing—a collision of light and shadow that birthed a new star: the HeavenlyNova. This
                  is our inspiration. We take the threads of this cosmic union and weave them into designs
                  that are both powerful and delicate. HeavenlyNova Streetwear is for the journey of
                  self-discovery, for embracing the full spectrum of who you are and transcending your
                  limits. Our art is for the street, for the profound and powerful souls who walk a path of
                  duality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
