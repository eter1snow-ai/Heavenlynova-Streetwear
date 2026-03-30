import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailCapture() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user already subscribed
    const hasSubscribed = localStorage.getItem('hvn_email_captured')
    if (hasSubscribed) return

    // Show popup when user scrolls to 50% of page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent >= 50) {
        setIsOpen(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Save to localStorage (in production, send to API)
    localStorage.setItem('hvn_email_captured', 'true')
    localStorage.setItem('hvn_email', email)
    
    setIsSubmitted(true)
    
    // Close after 2 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)

    console.log('✅ Email captured:', email)
  }

  const handleClose = () => {
    localStorage.setItem('hvn_email_captured', 'true')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black border border-white/20 z-[9999] p-8 md:p-10"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {!isSubmitted ? (
              <>
                {/* Content */}
        <div className="text-center mb-10">
                  <p className="uppercase mb-5" style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}>Enter the Ascent</p>
                  <h2 className="uppercase mb-5" style={{ fontSize: '1.9rem', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.5, color: '#E6E6E6' }}>
                    Chapter /001:<br />Seraphim is Now Live.
                  </h2>
                  <p className="uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.35em', lineHeight: 1.8, color: '#888888' }}>
                    Receive exclusive drops, lore fragments,<br />and early access to future chapters.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    required
                    className="w-full bg-transparent border border-white/40 text-white text-xs tracking-wide px-4 py-3 placeholder:text-neutral-600 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0 }}
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-3 uppercase font-semibold hover:bg-neutral-200 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    Initiate
                  </button>
                </form>

                <p className="text-[10px] text-neutral-600 text-center mt-6 uppercase tracking-widest">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold uppercase tracking-tight mb-2">
                  Welcome to the Ascent
                </h3>
                <p className="text-sm text-neutral-400">
                  You'll be the first to know.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
