import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/Assets/Images/Video1.mp4"
        autoPlay loop muted playsInline
      />

      <div className="relative z-10 mx-auto px-10" style={{ maxWidth: '1400px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '64px' }}>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.2em', lineHeight: 1.4 }} className="uppercase">
              HEAVENLYNOVA
            </h2>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', lineHeight: 1.7, color: '#888888' }} className="uppercase">
              Born from Light & Shadow
            </p>
          </div>

          {/* Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              Support
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Contact Us', 'Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item) => (
                <div key={item} style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }}
                  className="uppercase hover:text-white transition-colors cursor-pointer">
                  {item === 'Contact Us' ? <Link to="/contact" style={{ color: 'inherit' }}>{item}</Link> : item}
                </div>
              ))}
            </nav>
          </div>

          {/* Brand Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              Brand
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/drops" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Drops</Link>
              <Link to="/story" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Story</Link>
              {/* Heritage hidden until launch */}
              <Link to="/join" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Join</Link>
            </nav>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.28em', lineHeight: 1.4, color: '#D6D6D6' }} className="uppercase">
              Social
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Instagram →</a>
              <a href="#" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">TikTok →</a>
              <a href="#" style={{ fontSize: '0.82rem', fontWeight: 300, letterSpacing: '0.1em', lineHeight: 1.6, color: '#C2C2C2' }} className="uppercase hover:text-white transition-colors">Facebook →</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid #2A2A2A', marginTop: '80px', paddingTop: '40px', paddingBottom: '20px' }}>
          <span className="uppercase" style={{ fontSize: '0.72rem', letterSpacing: '0.2em', lineHeight: 1.6, color: '#888888' }}>2026 HEAVENLYNOVA - All Rights Reserved</span>
          <span className="uppercase mt-2 md:mt-0" style={{ fontSize: '0.82rem', letterSpacing: '0.15em', lineHeight: 1.6, color: '#D6D6D6' }}>support@heavenlynova.com</span>
        </div>
      </div>
    </footer>
  )
}
