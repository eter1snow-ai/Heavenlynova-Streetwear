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

  return (
    <div
      ref={containerRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      className={`aspect-[3/4] w-full ${className ? className : ''}`}
      style={{ overflow: 'hidden' }}
    >
      <img
        src={getHiResSrc(src)}
        alt={alt}
        loading="lazy"
        onLoad={() => console.log('✅ Neck loaded', src)}
        onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
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
          imageRendering: 'high-quality',
        }}
      />
    </div>
  )
}
