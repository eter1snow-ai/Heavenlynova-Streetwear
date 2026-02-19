import { Link } from 'react-router-dom'

export default function Footer() {
  const handleAnchorClick = (anchor: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + anchor
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative w-full bg-black text-white py-20 md:py-24 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/Assets/Images/Video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark overlay pentru contrast mai bun */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        
        {/* Brand Statement */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-12">
          Made for the ones who burn
        </p>
        
        {/* Grid */}
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
              <Link to="/drops" className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors">
                Drops
              </Link>
              <button onClick={() => handleAnchorClick('heritage')} className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors text-left">
                Heritage
              </button>
              <button onClick={() => handleAnchorClick('limited-drops')} className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors text-left">
                Seraphim
              </button>
              <button onClick={() => handleAnchorClick('essentials')} className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors text-left">
                Essentials
              </button>
              <a href="#" className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors">
                Gift Card
              </a>
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

          {/* Column 4 - Follow The Ascent */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white/80">
              Follow The Ascent
            </h3>
            <nav className="space-y-3">
              <a href="#" className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors">
                Instagram →
              </a>
              <a href="#" className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors">
                TikTok →
              </a>
              <a href="#" className="block text-xs uppercase tracking-wide text-white/60 hover:text-white transition-colors">
                Facebook →
              </a>
            </nav>
            <div className="pt-4">
              <a href="/join" className="block text-xs uppercase tracking-wide text-white hover:text-white/60 transition-colors font-semibold">
                Join The Ascent →
              </a>
            </div>
          </div>

        </div>

        {/* Hairline Divider */}
        <div className="border-t border-white/10 mt-16 mb-8"></div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/60">
          <div className="mb-4 md:mb-0">
            2026 HEAVENLYNOVA — All Rights Reserved
          </div>
          <div>
            For support or inquiries: support@heavenlynova.com
          </div>
        </div>

      </div>
    </footer>
  );
}