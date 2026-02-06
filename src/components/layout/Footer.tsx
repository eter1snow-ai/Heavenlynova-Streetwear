export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800" style={{ borderRadius: 0 }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="footer-columns">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-white">HEAVENLYNOVA</p>
          <p className="text-xs uppercase tracking-wide text-white/60">Born from Light & Shadow</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-white/70">Navigation</p>
          <ul className="space-y-2 list-none">
            <li><a href="/drops" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Drops</a></li>
            <li><a href="#gift-card" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Gift Card</a></li>
            <li><a href="mailto:support@heavenlynova.com" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Contact</a></li>
            <li><a href="#heritage" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">T-Shirts</a></li>
            <li><a href="#essentials" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Hoodies</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-white/70">Social</p>
            <ul className="mt-2 space-y-2 list-none">
              <li><a href="#" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">TikTok</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-white/70">Legal</p>
            <ul className="mt-2 space-y-2 list-none">
              <li><a href="#" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="text-xs uppercase tracking-wide text-white/80 visited:text-white/80 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

        <div className="mt-10 text-center text-white/70">
          <a href="mailto:support@heavenlynova.com" className="text-sm uppercase tracking-wide text-white/70 visited:text-white/70 hover:text-white">
            For support or inquiries: support@heavenlynova.com
          </a>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-white/40">© 2026 HEAVENLYNOVA — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
