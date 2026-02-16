import { useRef, useState, useEffect } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  zoomFactor?: number
}

export default function ZoomImage({ src, alt, className, zoomFactor = 1.6 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState<number>(1)
  const [tx, setTx] = useState<number>(0)
  const [ty, setTy] = useState<number>(0)
  const [hoverActive, setHoverActive] = useState<boolean>(false)
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const isDesktop =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer:fine)').matches
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer:coarse)').matches
  const getHiResSrc = (s: string) => {
    let r = s
    r = r.replace(/_(small|compact|thumb|medium|large|grande)/gi, '')
    r = r.replace(/_\d+x\d+(_crop_center)?/gi, '')
    r = r.replace(/(\?|&)width=\d+/gi, '')
    r = r.replace(/(\?|&)height=\d+/gi, '')
    return r
  }

  useEffect(() => {
    const animate = () => {
      const t = targetRef.current
      setTx((prev) => prev + (t.x - prev) * 0.15)
      setTy((prev) => prev + (t.y - prev) * 0.15)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const onEnter = () => {
    if (!isDesktop) return
    targetRef.current = { x: 0, y: 0 }
    setHoverActive(true)
    setScale(zoomFactor)
  }
  const onLeave = () => {
    if (!isDesktop) return
    setScale(1)
    setHoverActive(false)
    targetRef.current = { x: 0, y: 0 }
    setTx(0)
    setTy(0)
  }
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = x - rect.width / 2
    const cy = y - rect.height / 2
    const k = zoomFactor - 1
    targetRef.current = { x: -(cx * k), y: -(cy * k) }
  }

  const onTouchStart = () => {
    if (!isTouch) return
    console.log('✅ Mobile Zoom Events Fixed')
    setHoverActive(true)
    setScale(zoomFactor)
    targetRef.current = { x: 0, y: 0 }
  }
  // removed inline onTouchMove; handled via native listener with passive:false
  const onTouchEnd = () => {
    if (!isTouch) return
    setScale(1)
    setHoverActive(false)
    targetRef.current = { x: 0, y: 0 }
    setTx(0)
    setTy(0)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el || !isTouch) return
    const handle = (e: TouchEvent) => {
      if (!hoverActive) return
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const t = e.touches[0]
      if (!t) return
      const x = t.clientX - rect.left
      const y = t.clientY - rect.top
      const cx = x - rect.width / 2
      const cy = y - rect.height / 2
      const k = zoomFactor - 1
      targetRef.current = { x: -(cx * k), y: -(cy * k) }
    }
    el.addEventListener('touchmove', handle, { passive: false })
    return () => {
      el.removeEventListener('touchmove', handle)
    }
  }, [hoverActive, isTouch, zoomFactor])

  return (
    <div
      ref={containerRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`aspect-[3/4] w-full ${className ? className : ''}`}
      style={{ overflow: 'hidden', touchAction: hoverActive ? 'none' : 'auto' }}
    >
      <img
        src={getHiResSrc(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onLoad={() => {}}
        onError={(e) => {
          const current = e.currentTarget.src
          if (/\.webp($|\?)/i.test(current)) {
            e.currentTarget.src = current.replace(/\.webp($|\?)/i, '.png$1')
          } else {
            e.currentTarget.src = '/Assets/Images/placeholder.svg'
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transformOrigin: 'center center',
          transform: hoverActive && scale > 1 ? `translate3d(${tx}px, ${ty}px, 0) scale(${scale})` : 'none',
          transition: 'transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
          imageRendering: 'auto',
          zIndex: 20,
          willChange: 'transform',
        }}
      />
    </div>
  )
}
