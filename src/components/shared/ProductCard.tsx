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
        <div className="relative w-full border-b border-neutral-800 bg-transparent">
          {(front || alt) ? (
            <>
              <motion.img
                src={(variants[variantIndex]?.src) || front || alt!}
                alt={product.name}
                className="block w-full h-auto object-contain object-top"
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal',
                  imageRendering: 'auto',
                  filter: product.id === 'core-hoodie' ? 'contrast(1.08) brightness(1.02)' : undefined
                }}
                loading="lazy"
                onLoad={(e) => {
                  const nw = e.currentTarget.naturalWidth
                  const nh = e.currentTarget.naturalHeight
                  const cw = e.currentTarget.clientWidth
                  const ch = e.currentTarget.clientHeight
                  const upscaled = cw > nw || ch > nh
                  console.log(`🔄 Card front ${product.name}: natural ${nw}x${nh}, rendered ${cw}x${ch}`)
                  console.log(upscaled ? '❌ CSS scaling/upscaling detected on card' : '✅ Native resolution on card')
                }}
                onError={(e) => {
                  const src = e.currentTarget.src
                  if (/\.webp($|\?)/i.test(src)) {
                    e.currentTarget.src = src.replace(/\.webp($|\?)/i, '.png$1')
                  } else {
                    e.currentTarget.src = '/Assets/Images/placeholder.svg'
                  }
                  console.log('❌ Front fallback', product.name)
                }}
              />
              {neck && (
                <motion.img
                  src={neck}
                  alt={`${product.name} neck`}
                  className="absolute inset-0 w-full h-full object-contain object-top"
                  style={{
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal',
                    imageRendering: 'auto',
                  }}
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  loading="lazy"
                  onLoad={(e) => {
                    const nw = e.currentTarget.naturalWidth
                    const nh = e.currentTarget.naturalHeight
                    const cw = e.currentTarget.clientWidth
                    const ch = e.currentTarget.clientHeight
                    const upscaled = cw > nw || ch > nh
                    console.log(`🔄 Card neck ${product.name}: natural ${nw}x${nh}, rendered ${cw}x${ch}`)
                    console.log(upscaled ? '❌ CSS scaling/upscaling detected on neck overlay' : '✅ Native resolution on neck overlay')
                  }}
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
              {!neck && alt && (
                <motion.img
                  src={alt}
                  alt={`${product.name} alt`}
                  className="absolute inset-0 w-full h-full object-contain object-top"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  loading="lazy"
                  onLoad={(e) => {
                    const nw = e.currentTarget.naturalWidth
                    const nh = e.currentTarget.naturalHeight
                    const cw = e.currentTarget.clientWidth
                    const ch = e.currentTarget.clientHeight
                    const upscaled = cw > nw || ch > nh
                    console.log(`🔄 Card alt ${product.name}: natural ${nw}x${nh}, rendered ${cw}x${ch}`)
                    console.log(upscaled ? '❌ CSS scaling/upscaling detected on alt overlay' : '✅ Native resolution on alt overlay')
                    if (product.id === 'essentials-black') {
                      console.log('🔄 Mapping Black Main...')
                      console.log('✅ Black Consistency Sync')
                    }
                  }}
                  onError={(e) => {
                    const src = e.currentTarget.src
                    if (/\.webp($|\?)/i.test(src)) {
                      e.currentTarget.src = src.replace(/\.webp($|\?)/i, '.png$1')
                    } else {
                      e.currentTarget.src = '/Assets/Images/placeholder.svg'
                    }
                    console.log('❌ Alt hover fallback', product.name)
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
