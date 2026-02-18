import { motion, AnimatePresence } from 'framer-motion'

type SizeGuideProps = {
  isOpen: boolean
  onClose: () => void
  productType: 'hoodie' | 'tshirt'
}

const hoodieData = [
  { size: 'S', chest: '55cm', length: '63cm', sleeve: '69cm' },
  { size: 'M', chest: '59cm', length: '66cm', sleeve: '73cm' },
  { size: 'L', chest: '62cm', length: '67cm', sleeve: '75cm' },
  { size: 'XL', chest: '65cm', length: '68cm', sleeve: '77cm' },
  { size: '2XL', chest: '69cm', length: '69cm', sleeve: '79cm' },
  { size: '3XL', chest: '73cm', length: '69cm', sleeve: '81cm' }
]

const tshirtData = [
  { size: 'S', chest: '46cm', length: '72cm', sleeve: '20cm' },
  { size: 'M', chest: '48cm', length: '76cm', sleeve: '21cm' },
  { size: 'L', chest: '55cm', length: '78cm', sleeve: '23cm' },
  { size: 'XL', chest: '60cm', length: '79cm', sleeve: '27cm' },
  { size: '2XL', chest: '65cm', length: '83cm', sleeve: '30cm' }
]

export default function SizeGuideModal({ isOpen, onClose, productType }: SizeGuideProps) {
  const data = productType === 'hoodie' ? hoodieData : tshirtData

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-neutral-950 border border-neutral-800 z-[9999] max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h2 className="text-lg font-semibold uppercase tracking-wider">Size Guide</h2>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-neutral-400 uppercase tracking-wider mb-6">
                {productType === 'hoodie' ? 'Heavyweight Hoodie — 350 GSM' : 'Oversized T-Shirt — 240 GSM'}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">Size</th>
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">Chest (A)</th>
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">Length (B)</th>
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">Sleeve (C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, i) => (
                      <tr key={row.size} className={i !== data.length - 1 ? 'border-b border-neutral-800/50' : ''}>
                        <td className="py-3 px-4 text-sm font-medium">{row.size}</td>
                        <td className="py-3 px-4 text-sm text-neutral-300">{row.chest}</td>
                        <td className="py-3 px-4 text-sm text-neutral-300">{row.length}</td>
                        <td className="py-3 px-4 text-sm text-neutral-300">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
                All measurements are approximate and may vary slightly. Measured flat across the garment.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
