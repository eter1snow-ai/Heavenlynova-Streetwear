import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../data/drops'
import { useState, useMemo } from 'react'
import { getOptimizedImageUrl } from '../../lib/utils'
import { useCurrency } from '../../context/CurrencyContext'

type Props = {
  product: Product
  showPrice?: boolean
  className?: string
}

export default function ProductCard({ product, showPrice = false, className }: Props) {
  const { formatPrice } = useCurrency()
  const front = product.images?.[0]
  const hover = product.images?.[1]
  const [variantIndex, setVariantIndex] = useState<number>(0)
  const variants = useMemo(() => {
    const mapColor = (p: string) => {
      const file = (p.split('/').pop() || '').toLowerCase()
      if (/green/.test(file)) return { label: 'green', hex: '#1f3a28', text: '#ffffff' }
      if (/white/.test(file)) return { label: 'white', hex: '#ffffff', text: '#000000', border: '#e5e5e5' }
      if (/creme|cream/.test(file)) return { label: 'creme', hex: '#e8dfcf', text: '#000000', border: '#cfc7b4' }
      if (/skye|blue/i.test(file)) return { label: 'skye blue', hex: '#93b5d8', text: '#000000', border: '#7fa3c8' }
      if (/black/.test(file)) return { label: 'black', hex: '#0b0b0b', text: '#ffffff' }
      return { label: 'var', hex: '#888888', text: '#ffffff' }
    }
    return product.images.slice(0, 2).map((p, i) => ({ index: i, src: p, ...mapColor(p) }))
  }, [product.images])
  return (
    <Link to={`/product/${product.id}`} className={className ? className : 'w-full max-w-[400px]'}>
      <motion.article
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.4)'
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="border border-neutral-800 bg-transparent group"
        style={{
          boxShadow: '0 0 0 rgba(255, 255, 255, 0)'
        }}
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-square border-b border-neutral-800 bg-transparent overflow-hidden">
          {(front || hover) ? (
            <>
              <img
                src={getOptimizedImageUrl((variants[variantIndex]?.src) || front || hover!, 600)}
                alt={product.name}
                className={`absolute inset-0 w-full h-full object-contain object-center p-4 transition-opacity duration-200 ease-out pointer-events-none ${
                  hover ? 'group-hover:opacity-0' : ''
                }`}
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal',
                  imageRendering: 'auto',
                  filter: product.id === 'core-hoodie-white' ? 'contrast(1.08) brightness(1.02)' : undefined
                }}
                decoding="async"
                onError={(e) => {
                  const src = e.currentTarget.src
                  if (/\.webp($|\?)/i.test(src)) {
                    e.currentTarget.src = src.replace(/\.webp($|\?)/i, '.png$1')
                  } else {
                    e.currentTarget.src = '/Assets/Images/placeholder.svg'
                  }
                }}
              />
              {hover && (
                <img
                  src={getOptimizedImageUrl(hover, 600)}
                  alt={`${product.name} hover`}
                  className="absolute inset-0 w-full h-full object-contain object-center p-4 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 pointer-events-none"
                  style={{
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                    imageRendering: 'auto',
                  }}
                  decoding="async"
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
              <p className="text-sm font-semibold tracking-wide text-white mt-2">{formatPrice(product.priceUsd)}</p>
              <p className="text-xs opacity-70 mt-1">Worldwide shipping included</p>
              <div className="mt-3 flex items-center gap-2">
                {variants.filter(v => v.label !== 'var').map((v) => (
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
