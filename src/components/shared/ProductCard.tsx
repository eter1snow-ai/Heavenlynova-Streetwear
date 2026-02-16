import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../data/drops'
import { useState, useMemo } from 'react'

type Props = {
  product: Product
  showPrice?: boolean
  className?: string
}

export default function ProductCard({ product, showPrice = false, className }: Props) {
  const front = product.images?.[0]
  const alt = product.images?.[1]
  const neck = useMemo(() => product.images.find((s) => /neck/i.test(s)), [product.images])
  const [variantIndex, setVariantIndex] = useState<number>(0)
  const variants = useMemo(() => {
    const mapColor = (p: string) => {
      const file = (p.split('/').pop() || '').toLowerCase()
      if (/green/.test(file)) return { label: 'green', hex: '#1f3a28', text: '#ffffff' }
      if (/white/.test(file)) return { label: 'white', hex: '#ffffff', text: '#000000', border: '#e5e5e5' }
      if (/creme|cream/.test(file)) return { label: 'creme', hex: '#e8dfcf', text: '#000000', border: '#cfc7b4' }
      if (/black/.test(file)) return { label: 'black', hex: '#0b0b0b', text: '#ffffff' }
      return { label: 'var', hex: '#888888', text: '#ffffff' }
    }
    return product.images.slice(0, 2).map((p, i) => ({ index: i, src: p, ...mapColor(p) }))
  }, [product.images])
  return (
    <Link to={`/product/${product.id}`} className={className ? className : 'w-full max-w-[400px]'}>
      <motion.article
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="border border-neutral-800 bg-transparent group"
      >
        <div className="relative aspect-[3/4] border-b border-neutral-800 overflow-hidden bg-transparent">
          {(front || alt) ? (
            <>
              <motion.img
                src={(variants[variantIndex]?.src) || front || alt!}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal',
                  filter: product.id === 'core-hoodie' ? 'contrast(1.08) brightness(1.02)' : undefined
                }}
                loading="lazy"
                onLoad={() => {}}
                onError={(e) => {
                  const src = e.currentTarget.src
                  if (/\.webp($|\?)/i.test(src)) {
                    e.currentTarget.src = src.replace(/\.webp($|\?)/i, '.png$1')
                  } else {
                    e.currentTarget.src = '/Assets/Images/placeholder.svg'
                  }
                }}
              />
              {neck && (
                <motion.img
                  src={neck}
                  alt={`${product.name} neck`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                  }}
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.52, y: -32 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  loading="lazy"
                  onLoad={() => {}}
                onError={(e) => {
                  const src = e.currentTarget.src
                  if (/\.webp($|\?)/i.test(src)) {
                    e.currentTarget.src = src.replace(/\.webp($|\?)/i, '.png$1')
                  } else {
                    e.currentTarget.src = '/Assets/Images/placeholder.svg'
                  }
                }}
                />
              )}
            </>
          ) : (
            <div className="absolute inset-0 w-full h-full bg-transparent" />
          )}
        </div>
        <div className="p-5">
          <h3 className="text-sm font-medium leading-snug truncate">{product.name}</h3>
          {showPrice ? (
            <>
              <p className="text-sm font-semibold tracking-wide text-white mt-2">{product.price}</p>
              <p className="text-xs opacity-70 mt-1">Worldwide shipping included</p>
              <div className="mt-3 flex items-center gap-2">
                {variants.map((v) => (
                  <button
                    key={v.index}
                    aria-label={v.label}
                    aria-pressed={variantIndex === v.index}
                    onClick={(e) => {
                      e.preventDefault()
                      setVariantIndex(v.index)
                      console.log('✅ Variant selected', v.label)
                    }}
                    className="border transition-transform"
                    style={{
                      borderRadius: '9999px',
                      backgroundColor: v.hex,
                      color: v.text,
                      borderColor:
                        (variantIndex === v.index ? '#ffffff' : (v.border || 'rgba(255,255,255,0.6)')),
                      transform: variantIndex === v.index ? 'scale(1.02)' : 'scale(1)',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      minWidth: '84px',
                      height: '28px',
                      padding: '0 12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{product.tagline}</p>
          )}
        </div>
      </motion.article>
    </Link>
  )
}
