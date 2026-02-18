export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white py-20 md:py-24 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/Assets/Images/Video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        
        {/* Zona 1 - Brand Statement */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-12">
          Made for the ones who burn
        </p>
        
        {/* Zona 2 - Grid-ul */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
          
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">
              HEAVENLYNOVA
            </h2>
            <p className="text-xs uppercase tracking-widest text-white/50 leading-relaxed">
              Born from Light & Shadow
            </p>
          </div>

          {/* Column 2 - Shop */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white/80">
              Shop
            </h3>
            <nav className="space-y-3">
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Drops
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Heritage
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Seraphim
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Essentials
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Gift Card
              </div>
            </nav>
          </div>

          {/* Column 3 - Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white/80">
              Info
            </h3>
            <nav className="space-y-3">
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Contact Us
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Refund Policy
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Shipping Policy
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </div>
            </nav>
          </div>

          {/* Column 4 - Social */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white/80">
              Social
            </h3>
            <nav className="space-y-3">
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Instagram
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                TikTok
              </div>
              <div className="text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors cursor-pointer">
                Facebook
              </div>
            </nav>
          </div>

        </div>

        {/* Hairline Divider */}
        <div className="border-t border-white/10 mt-16 mb-12"></div>

        {/* Zona 3 - Subscription */}
        <div className="max-w-md mx-auto mb-16">
          <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white text-center mb-3">
            JOIN THE ASCENT
          </h3>
          <p className="text-xs uppercase tracking-wide text-white text-center mb-6">
            Enter your coordinates for early access to Chapter 01: Seraphim.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full bg-black/80 border border-white/40 text-white text-xs tracking-wide px-4 py-3"
              style={{ borderRadius: 0 }}
            />
            <button
              className="w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-3 uppercase font-semibold"
              style={{ borderRadius: 0 }}
            >
              INITIATE
            </button>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white mt-4 text-center">
            The store is currently closed while we prepare the Seraphim Collection.
          </p>
        </div>

        {/* Zona 4 - Legal */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white">
            <div className="mb-4 md:mb-0">
              2026 HEAVENLYNOVA — All Rights Reserved
            </div>
            <div>
              For support or inquiries: support@heavenlynova.com
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}