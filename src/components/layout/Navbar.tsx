import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()
    setOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: anchor } })
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDropsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    
    if (location.pathname !== '/drops') {
      navigate('/drops')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const init = () => setIsDesktop(mql.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
      if (e.matches) setOpen(false)
    }
    init()
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="text-xs tracking-widest text-center py-2 bg-black text-white">
        🌍 FREE WORLDWIDE SHIPPING
      </div>
      
      <header className={`fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/70 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4 lg:px-12">
        <Link
          to="/"
          className="font-display text-xs font-medium uppercase tracking-widest text-white transition-soft hover:text-white/70"
        >
          HEAVENLYNOVA
        </Link>
        {!isDesktop && (
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center border border-neutral-700 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-soft hover:bg-neutral-900"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        )}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            <li>
              <a
                className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={handleDropsClick}
              >
                Drops
              </a>
            </li>
            <li>
              <a
                className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'heritage')}
              >
                Heritage
              </a>
            </li>
            <li>
              <a
                className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'limited-drops')}
              >
                Seraphim
              </a>
            </li>
            <li>
              <a
                className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'essentials')}
              >
                Essentials
              </a>
            </li>
          </ul>
          <span className="text-white/30">|</span>
          <a className="text-xs font-medium uppercase tracking-widest text-white/60 visited:text-white/60 no-underline transition-soft hover:text-white cursor-pointer">
            Gift Card
          </a>
        </div>
      </nav>
      {open && !isDesktop && (
        <div className="md:hidden">
          <ul className="space-y-2 border-t border-neutral-800 px-6 py-4 list-none">
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={handleDropsClick}
              >
                Drops
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'heritage')}
              >
                Heritage
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'limited-drops')}
              >
                Seraphim
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white cursor-pointer"
                onClick={(e) => handleAnchorClick(e, 'essentials')}
              >
                Essentials
              </a>
            </li>
            <li className="pt-2 border-t border-neutral-800/50">
              <a className="block text-xs font-medium uppercase tracking-widest text-white/60 visited:text-white/60 no-underline transition-soft hover:text-white cursor-pointer">
                Gift Card
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
    </>
  )
}
