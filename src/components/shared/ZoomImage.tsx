import { useRef, useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  zoomFactor?: number
}

export default function ZoomImage({ src, alt, className, zoomFactor = 1.6 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [origin, setOrigin] = useState<string>('50% 50%')
  const [scale, setScale] = useState<number>(1)
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

  const onEnter = () => {
    if (!isDesktop) return
    setScale(zoomFactor)
  }
  const onLeave = () => {
    if (!isDesktop) return
    setScale(1)
  }
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setOrigin(`${x}px ${y}px`)
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      className={`aspect-[3/4] w-full ${className ? className : ''}`}
      style={{ overflow: 'visible' }}
    >
      <img
        src={getHiResSrc(src)}
        alt={alt}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          transformOrigin: origin,
          transform: `scale(${scale})`,
          transition: 'transform 120ms ease',
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
        }}
      />
    </div>
  )
}
