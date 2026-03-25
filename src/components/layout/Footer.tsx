import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white py-14 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/Assets/Images/Video1.mp4"
        autoPlay loop muted playsInline
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h2 className="text-sm font-black uppercase tracking-[0.2em]">HEAVENLYNOVA</h2>
            <p className="text-xs uppercase tracking-widest text-white/40 leading-relaxed">
              Born from Light & Shadow
            </p>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Support</h3>
            <nav className="space-y-2">
              {['Contact Us', 'Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item) => (
                <div key={item} className="text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Brand Links */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Brand</h3>
            <nav className="space-y-2">
              <Link to="/drops" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Drops</Link>
              <Link to="/story" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Story</Link>
              <Link to="/heritage" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Heritage</Link>
              <Link to="/join" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Join</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Social</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Instagram →</a>
              <a href="#" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">TikTok →</a>
              <a href="#" className="block text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors">Facebook →</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-10 pb-6 text-center">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-4">JOIN THE ASCENT</h3>
          <Link
            to="/join"
            className="inline-block border border-white/30 px-8 py-3 text-[10px] uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition-colors"
            style={{ borderRadius: 0 }}
          >
            CLAIM YOUR ACCESS →
          </Link>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
          <span>2026 HEAVENLYNOVA - All Rights Reserved</span>
          <span>support@heavenlynova.com</span>
        </div>
      </div>
    </footer>
  )
}
