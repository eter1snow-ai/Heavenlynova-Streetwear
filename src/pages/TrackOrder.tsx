import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TrackOrder() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-5 py-32 md:py-40 lg:px-12 max-w-6xl">
        <h1 style={{ textTransform: 'uppercase', marginBottom: '10px', fontSize: '2.5rem', fontWeight: '300', letterSpacing: '0.1em' }}>
          TRACK YOUR ORDER
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>
          Every piece follows a path. Tracking details will be sent to your email once your order is dispatched.
        </p>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

<div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 items-center mb-20">
          <div className="text-center md:text-left md:w-1/3 mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-medium text-[#C8A84A]/60 mb-2">•</div>
            <h3 style={{ textTransform: 'uppercase', fontWeight: '400', fontSize: '1.1rem', marginBottom: '4px' }}>Order Placed</h3>
          </div>
          <div className="text-center md:text-left md:w-1/3 mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-medium text-[#C8A84A]/60 mb-2">•</div>
            <h3 style={{ textTransform: 'uppercase', fontWeight: '400', fontSize: '1.1rem', marginBottom: '4px' }}>Crafted With Intention</h3>
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <div className="text-3xl md:text-4xl font-medium text-white/30 mb-2">•</div>
            <h3 style={{ textTransform: 'uppercase', fontWeight: '400', fontSize: '1.1rem' }}>Shipped To You</h3>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <div style={{ border: '1px solid #C8A84A20', borderRadius: '8px', padding: '32px', margin: '40px 0', backgroundColor: 'rgba(15,15,15,0.5)', backdropFilter: 'blur(10px)' }}>
          <p style={{ lineHeight: '1.7', marginBottom: '16px', fontSize: '1.05rem' }}>
            Your items are crafted with intention. As soon as your package is dispatched, you will receive an automated email with your personal tracking link.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '1rem', opacity: '0.9' }}>
            If you cannot find your tracking email, please contact <a href="mailto:support@heavenlynova.com" style={{ color: '#C8A84A', textDecoration: 'underline' }}>support@heavenlynova.com</a>.
          </p>
        </div>

        <div style={{ height: '1px', backgroundColor: '#333333', margin: '40px 0' }} />

        <div className="text-center mt-16">
          <Link 
            to="/" 
            className="inline-block px-12 py-4 border-2 border-[#C8A84A]/30 text-[#C8A84A] uppercase tracking-wider font-medium text-sm hover:border-[#C8A84A] hover:bg-[#C8A84A]/10 hover:text-white transition-all duration-300 rounded-md"
            style={{ textDecoration: 'none' }}
          >
RETURN TO STORE →
          </Link>
        </div>

        <p style={{ marginTop: '60px', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
          HeavenlyNova<br />
          Built from Light &amp; Shadow
        </p>
      </div>
    </main>
  )
}
    
