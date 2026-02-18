import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('hvn_cookies_accepted')
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('hvn_cookies_accepted', 'true')
    setIsVisible(false)
    console.log('✅ Cookies accepted')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9997] bg-black border-t border-white/20 px-6 py-4"
        >
          <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/80 leading-relaxed text-center sm:text-left">
              We use cookies to enhance your ritual.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsVisible(false)}
                className="border border-white/20 bg-transparent px-6 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-soft hover:text-white hover:border-white/40 whitespace-nowrap"
                style={{ borderRadius: 0 }}
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="border border-white/40 bg-transparent px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-soft hover:bg-white hover:text-black whitespace-nowrap"
                style={{ borderRadius: 0 }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
