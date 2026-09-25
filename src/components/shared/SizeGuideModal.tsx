import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

type SizeGuideProps = {
  isOpen: boolean
  onClose: () => void
  productType: 'hoodie' | 'tshirt'
}

type HoodieMeasurement = {
  size: string
  chestCm: string
  lengthCm: string
  chestIn: string
  lengthIn: string
}

type TshirtMeasurement = {
  size: string
  chestCm: string
  lengthCm: string
  sleeveCm: string
  chestIn: string
  lengthIn: string
  sleeveIn: string
}

const hoodieData: HoodieMeasurement[] = [
  { size: 'S',   chestCm: '53.3 cm', lengthCm: '72.4 cm', chestIn: '21.0 in', lengthIn: '28.5 in' },
  { size: 'M',   chestCm: '58.4 cm', lengthCm: '74.9 cm', chestIn: '23.0 in', lengthIn: '29.5 in' },
  { size: 'L',   chestCm: '62.2 cm', lengthCm: '77.5 cm', chestIn: '24.5 in', lengthIn: '30.5 in' },
  { size: 'XL',  chestCm: '67.3 cm', lengthCm: '80.0 cm', chestIn: '26.5 in', lengthIn: '31.5 in' },
  { size: '2XL', chestCm: '69.9 cm', lengthCm: '82.6 cm', chestIn: '27.5 in', lengthIn: '32.5 in' },
  { size: '3XL', chestCm: '72.4 cm', lengthCm: '85.1 cm', chestIn: '28.5 in', lengthIn: '33.5 in' },
]

const tshirtData: TshirtMeasurement[] = [
  { size: 'S',   chestCm: '46.0 cm', lengthCm: '72.0 cm', sleeveCm: '20.0 cm', chestIn: '18.1 in', lengthIn: '28.3 in', sleeveIn: '7.9 in' },
  { size: 'M',   chestCm: '48.0 cm', lengthCm: '76.0 cm', sleeveCm: '21.0 cm', chestIn: '18.9 in', lengthIn: '29.9 in', sleeveIn: '8.3 in' },
  { size: 'L',   chestCm: '55.0 cm', lengthCm: '78.0 cm', sleeveCm: '23.0 cm', chestIn: '21.7 in', lengthIn: '30.7 in', sleeveIn: '9.1 in' },
  { size: 'XL',  chestCm: '60.0 cm', lengthCm: '79.0 cm', sleeveCm: '27.0 cm', chestIn: '23.6 in', lengthIn: '31.1 in', sleeveIn: '10.6 in' },
  { size: '2XL', chestCm: '65.0 cm', lengthCm: '83.0 cm', sleeveCm: '30.0 cm', chestIn: '25.6 in', lengthIn: '32.7 in', sleeveIn: '11.8 in' },
  { size: '3XL', chestCm: '70.0 cm', lengthCm: '86.0 cm', sleeveCm: '32.0 cm', chestIn: '27.6 in', lengthIn: '33.9 in', sleeveIn: '12.6 in' },
]

export default function SizeGuideModal({ isOpen, onClose, productType }: SizeGuideProps) {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm')
  const { t } = useLanguage()

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
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold uppercase tracking-wider">{t('product.size_guide', 'Size Guide')}</h2>
                <div className="inline-flex border border-neutral-800 rounded-none p-0.5 text-[11px] uppercase tracking-wider">
                  <button
                    type="button"
                    onClick={() => setUnit('cm')}
                    className={`px-2.5 py-1 font-medium transition-colors ${
                      unit === 'cm' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    CM
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('in')}
                    className={`px-2.5 py-1 font-medium transition-colors ${
                      unit === 'in' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    INCH
                  </button>
                </div>
              </div>
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
                {productType === 'hoodie'
                  ? 'Heavyweight Pullover Hoodie — 10 oz / 340 GSM (Lane Seven LS19001)'
                  : 'Heavyweight Oversized T-Shirt — 7.5 oz / 255 GSM (Shaka Wear)'}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">{t('product.size', 'Size')}</th>
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {t('size_guide.chest', 'Chest Width')} ({unit.toUpperCase()})
                      </th>
                      <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {t('size_guide.length', 'Length')} ({unit.toUpperCase()})
                      </th>
                      {productType === 'tshirt' && (
                        <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          {t('size_guide.sleeve', 'Sleeve')} ({unit.toUpperCase()})
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {productType === 'hoodie'
                      ? hoodieData.map((row, i) => (
                          <tr key={row.size} className={i !== hoodieData.length - 1 ? 'border-b border-neutral-800/50' : ''}>
                            <td className="py-3 px-4 text-sm font-medium">{row.size}</td>
                            <td className="py-3 px-4 text-sm text-neutral-300">
                              {unit === 'cm' ? row.chestCm : row.chestIn}
                            </td>
                            <td className="py-3 px-4 text-sm text-neutral-300">
                              {unit === 'cm' ? row.lengthCm : row.lengthIn}
                            </td>
                          </tr>
                        ))
                      : tshirtData.map((row, i) => (
                          <tr key={row.size} className={i !== tshirtData.length - 1 ? 'border-b border-neutral-800/50' : ''}>
                            <td className="py-3 px-4 text-sm font-medium">{row.size}</td>
                            <td className="py-3 px-4 text-sm text-neutral-300">
                              {unit === 'cm' ? row.chestCm : row.chestIn}
                            </td>
                            <td className="py-3 px-4 text-sm text-neutral-300">
                              {unit === 'cm' ? row.lengthCm : row.lengthIn}
                            </td>
                            <td className="py-3 px-4 text-sm text-neutral-300">
                              {unit === 'cm' ? row.sleeveCm : row.sleeveIn}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
                {t('size_guide.note', 'All measurements are approximate and may vary slightly. Measured flat across the garment.')}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
