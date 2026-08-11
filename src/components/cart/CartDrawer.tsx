import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const { isOpen, closeCart, cartState, updateItem, removeItem, isLoading } = useCart()

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
              {cartState.lines.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center" style={{ gap: '16px' }}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: '#333', lineHeight: 1.6 }} className="uppercase">
                    Your selection is empty.
                  </p>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#2a2a2a', lineHeight: 1.6 }} className="uppercase">
                    Add a piece to begin.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cartState.lines.map((item) => (
                    <div key={item.lineId} className="flex gap-4">
                      <div className="w-20 h-24 bg-neutral-900 overflow-hidden shrink-0">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.productTitle} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-neutral-800" />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em' }} className="uppercase text-white">
                              {item.productTitle}
                            </h3>
                            <button
                              onClick={() => removeItem(item.lineId)}
                              disabled={isLoading}
                              className="text-neutral-500 hover:text-white transition-colors text-xs ml-2"
                              aria-label="Remove item"
                            >
                              ✕
                            </button>
                          </div>
                          <p style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: '#888', marginTop: '4px' }} className="uppercase">
                            Size: {item.variantTitle}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-neutral-800">
                            <button
                              onClick={() => updateItem(item.lineId, item.quantity - 1)}
                              disabled={isLoading || item.quantity <= 1}
                              className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-50"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-xs text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateItem(item.lineId, item.quantity + 1)}
                              disabled={isLoading}
                              className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-50"
                            >
                              +
                            </button>
                          </div>
                          <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }} className="text-white">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartState.lines.length > 0 && (
              <div className="px-6 py-6" style={{ borderTop: '1px solid #1a1a1a' }}>
                <div className="flex justify-between items-center mb-5">
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: '#555' }} className="uppercase">
                    Subtotal
                  </p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em', color: '#E6E6E6' }}>
                    {cartState.subtotal}
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (!cartState.checkoutUrl) {
                      console.error("Checkout URL missing");
                      return;
                    }
                    // Forțăm checkout-ul pe domeniul nativ Shopify
                    // (heavenlynova.com e prins de Vercel SPA rewrite → re-randează index.html)
                    const shopifyCheckoutUrl = cartState.checkoutUrl.replace(
                      'heavenlynova.com',
                      'carpatia.myshopify.com'
                    );
                    window.location.href = shopifyCheckoutUrl;
                  }}
                  disabled={isLoading}
                  className={`w-full bg-white text-black uppercase transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-200'}`}
                  style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', padding: '14px', borderRadius: 0 }}
                >
                  {isLoading ? 'PROCESSING...' : 'Proceed to Checkout'}
                </button>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#333', marginTop: '12px', textAlign: 'center' }} className="uppercase">
                  Shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
