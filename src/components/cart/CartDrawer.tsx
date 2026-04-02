import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { isOpen, closeCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-[9998]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full z-[9999] flex flex-col"
            style={{ width: '400px', maxWidth: '100vw', backgroundColor: '#0a0a0a', borderLeft: '1px solid #222' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid #1a1a1a' }}>
              <div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.45em', color: '#555', lineHeight: 1.6 }} className="uppercase mb-1">
                  HeavenlyNova
                </p>
                <h2 style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.2em', color: '#E6E6E6' }} className="uppercase">
                  Your Selection
                </h2>
              </div>
              <button
                onClick={closeCart}
                style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1 }}
                className="hover:text-white transition-colors"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Items Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              {/* Placeholder - Shopify items will go here */}
              <div className="flex flex-col items-center justify-center h-full text-center" style={{ gap: '16px' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#333', lineHeight: 1.6 }} className="uppercase">
                  Your selection is empty.
                </p>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#2a2a2a', lineHeight: 1.6 }} className="uppercase">
                  Add a piece to begin.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-6" style={{ borderTop: '1px solid #1a1a1a' }}>
              <div className="flex justify-between items-center mb-5">
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: '#555' }} className="uppercase">
                  Subtotal
                </p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em', color: '#E6E6E6' }}>
                  —
                </p>
              </div>
              <button
                className="w-full bg-white text-black uppercase hover:bg-neutral-200 transition-colors"
                style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', padding: '14px', borderRadius: 0 }}
              >
                Proceed to Checkout
              </button>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#333', marginTop: '12px', textAlign: 'center' }} className="uppercase">
                Shipping calculated at checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
