import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { shopifyFetch } from '../../lib/shopify/client'

export default function EmailCapture() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const hasSubscribed =
      localStorage.getItem('hvn_newsletter_sub') ||
      localStorage.getItem('hvn_email_captured')
    if (hasSubscribed) return

    // Show popup when user scrolls to 50% of page
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent >= 50) {
        setIsOpen(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Save flags and captured email to localStorage
    localStorage.setItem('hvn_newsletter_sub', 'true')
    localStorage.setItem('hvn_email_captured', 'true')
    localStorage.setItem('hvn_email', email)

    // Send request to Shopify Storefront API to create/register customer record with marketing consent
    try {
      await shopifyFetch({
        query: `
          mutation customerCreate($input: CustomerCreateInput!) {
            customerCreate(input: $input) {
              customer {
                id
                email
                acceptsMarketing
              }
              customerUserErrors {
                code
                field
                message
              }
            }
          }
        `,
        variables: {
          input: {
            email: email.trim(),
            password: `HVN_${Date.now()}_${Math.random().toString(36).slice(2, 10)}!`,
            acceptsMarketing: true,
          },
        },
      })
      console.log('✅ Shopify customer registered with acceptsMarketing: true')
    } catch (err) {
      // Graceful error handling: still transition to success view with code even if API fails or email exists
      console.warn('⚠️ Shopify customer creation notice (handled gracefully):', err)
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText('ASCENT10')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
                  <p className="uppercase mb-5" style={{ fontSize: '0.65rem', letterSpacing: '0.5em', lineHeight: 1.6, color: '#aaaaaa' }}>ENTER THE ASCENT</p>
                  <h2 className="uppercase mb-5" style={{ fontSize: '1.9rem', fontWeight: 500, letterSpacing: '0.12em', lineHeight: 1.5, color: '#E6E6E6' }}>
                    THE FIRST LIGHT HAS ARRIVED.
                  </h2>
                  <p className="uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.35em', lineHeight: 1.8, color: '#888888' }}>
                    JOIN THE INITIATION. RECEIVE AN EXCLUSIVE 10% ACCESS CODE FOR YOUR FIRST PIECE, LORE FRAGMENTS, AND EARLY DROP ACCESS.
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
                  WE RESPECT YOUR PRIVACY. UNSUBSCRIBE ANYTIME.
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

                {/* Code Display with Copy Interaction */}
                <div className="border border-white/20 bg-white/[0.03] p-4 mb-6 flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-1">Access Code</p>
                    <span className="font-mono text-xl sm:text-2xl font-bold tracking-[0.25em] text-white">
                      ASCENT10
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="text-xs uppercase tracking-[0.15em] border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-all"
                    style={{ borderRadius: 0 }}
                  >
                    {copied ? 'COPIED ✓' : 'COPY CODE'}
                  </button>
                </div>

                {/* Subtext */}
                <p
                  className="uppercase mb-8"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.25em', lineHeight: 1.8, color: '#888888' }}
                >
                  Use code <span className="text-white font-semibold">ASCENT10</span> at checkout for 10% off your first piece.
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
