import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../data/drops'
import ProductCard from '../shared/ProductCard'

type Props = {
  products: Product[]
}

export default function ShowcaseRail({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const isInteractingRef = useRef(false)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Duplicăm lista pentru loop infinit fără întrerupere vizuală
  const displayItems = [...products, ...products]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrameId: number

    const step = () => {
      if (!isPaused && !isInteractingRef.current && container) {
        container.scrollLeft += 0.75

        // Când am parcurs prima jumătate a listei duplicate, resetăm insesizabil la început
        const halfWidth = container.scrollWidth / 2
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    isInteractingRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)

    const scrollAmount = 340
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })

    // Reluăm auto-scroll după 3 secunde de la click
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 3000)
  }

  const handleTouchStart = () => {
    isInteractingRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
  }

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 2500)
  }

  return (
    <section id="heritage" className="bg-black text-white py-16 sm:py-24 overflow-hidden relative border-b border-white/5">
      {/* Header Secțiune */}
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{ fontSize: '0.65rem', letterSpacing: '0.45em', color: '#888888', lineHeight: 1.6 }}
              className="uppercase mb-2"
            >
              STATEMENT SERIES
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 500,
                letterSpacing: '0.08em',
                lineHeight: 1.2,
                color: '#E6E6E6',
              }}
              className="uppercase mb-3"
            >
              Curated Editions
            </h2>
            <p
              style={{ fontSize: '0.82rem', letterSpacing: '0.15em', lineHeight: 1.8, color: '#A8A8A8' }}
              className="max-w-[540px]"
            >
              Heavyweight architectural silhouettes. Forged in silence, worn with presence.
            </p>
          </motion.div>

          {/* Controale manuale + Link Arhivă */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleManualScroll('left')}
                aria-label="Previous items"
                className="w-9 h-9 border border-neutral-800 bg-neutral-950/80 hover:bg-white hover:text-black hover:border-white transition-colors flex items-center justify-center text-xs tracking-widest text-neutral-400"
                style={{ borderRadius: 0 }}
              >
                ←
              </button>
              <button
                onClick={() => handleManualScroll('right')}
                aria-label="Next items"
                className="w-9 h-9 border border-neutral-800 bg-neutral-950/80 hover:bg-white hover:text-black hover:border-white transition-colors flex items-center justify-center text-xs tracking-widest text-neutral-400"
                style={{ borderRadius: 0 }}
              >
                →
              </button>
            </div>
            <Link
              to="/heritage"
              className="inline-flex items-center border border-white/20 bg-transparent px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:border-white hover:text-white"
              style={{ borderRadius: 0 }}
            >
              All Pieces [{products.length}]
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Rail Container cu Gradient Fades */}
      <div className="relative w-full">
        {/* Fades stânga & dreapta pentru tranziție cosmică curată */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto select-none px-6 sm:px-12 py-4 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {displayItems.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px]"
            >
              <ProductCard product={product} showPrice={true} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
