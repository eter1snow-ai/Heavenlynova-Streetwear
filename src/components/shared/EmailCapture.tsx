import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailCapture() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const hasSubscribed =
      localStorage.getItem('hvn_newsletter_sub') ||
      localStorage.getItem('hvn_email_captured')
    if (hasSubscribed) return

    // Strictly enforce minimum 9-10 seconds on page before showing popup
    const timer = setTimeout(() => {
      const alreadyHandled =
        localStorage.getItem('hvn_newsletter_sub') ||
        localStorage.getItem('hvn_email_captured')
      if (!alreadyHandled) {
        setIsOpen(true)
      }
    }, 9500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Save flags and captured email to localStorage
    localStorage.setItem('hvn_newsletter_sub', 'true')
    localStorage.setItem('hvn_email_captured', 'true')
    localStorage.setItem('hvn_email', email)

    // Trimitem email la /api/subscribe (Vercel serverless function)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      console.log('✅ Email captured and sent to /api/subscribe')
    } catch (err) {
      // Graceful error handling: still transition to success view even if API fails
      console.warn('⚠️ Subscribe API notice (handled gracefully):', err)
    } finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  const handleClose = () => {
    localStorage.setItem('hvn_newsletter_sub', 'true')
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
                <div className="text-center mb-8">
                  <p
                    className="uppercase mb-3 font-mono text-neutral-400"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.35em', lineHeight: 1.5 }}
                  >
                    MEMBERS ONLY
                  </p>
                  <h2
                    className="uppercase mb-4 font-display font-semibold"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.85rem)', letterSpacing: '0.08em', lineHeight: 1.25, color: '#FFFFFF' }}
                  >
                    JOIN THE<br />INNER CIRCLE
                  </h2>
                  <p
                    className="text-xs sm:text-sm leading-relaxed max-w-[92%] mx-auto"
                    style={{ color: '#A3A3A3' }}
                  >
                    Receive private transmissions, archival drop notifications, and priority access prior to every public release.
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
                    className="w-full bg-transparent border border-white/40 text-white text-xs tracking-wide px-4 py-3.5 placeholder:text-neutral-600 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0 }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-3.5 uppercase font-semibold hover:bg-neutral-200 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ borderRadius: 0 }}
                  >
                    {isSubmitting ? 'INITIATING...' : 'REQUEST ACCESS'}
                  </button>
                </form>

                <p className="text-[10px] text-neutral-600 text-center mt-6 uppercase tracking-widest">
                  STRICT PRIVACY. ZERO SPAM. DIRECT TRANSMISSIONS ONLY.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <p
                  className="uppercase mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}
                >
                  Initiation Complete
                </p>
                <h2
                  className="uppercase mb-6 font-display"
                  style={{ fontSize: '1.9rem', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.3, color: '#E6E6E6' }}
                >
                  ACCESS GRANTED
                </h2>

                <div className="border border-white/20 bg-white/[0.03] p-5 mb-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-2">Priority Allocation</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white font-mono">
                    CONFIRMED // MEMBER REGISTERED
                  </p>
                </div>

                {/* Subtext */}
                <p
                  className="uppercase mb-8"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.2em', lineHeight: 1.8, color: '#888888' }}
                >
                  You are now on the private allocation list. You will receive direct transmissions prior to every public release.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full bg-white text-black text-xs tracking-[0.2em] px-6 py-3 uppercase font-semibold hover:bg-neutral-200 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  Enter Collection
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
