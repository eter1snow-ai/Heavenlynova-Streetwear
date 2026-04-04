import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const collectionsRef = useRef<HTMLLIElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isJoinPage = location.pathname === '/join'

  const handleAnchorClick = (anchor: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: anchor } })
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDropsFilter = (type?: string, collection?: string) => {
    setOpen(false)
    setCollectionsOpen(false)
    const params = new URLSearchParams()
    if (type) params.set('type', type)
    if (collection) params.set('collection', collection)
    navigate(`/drops?${params.toString()}`)
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
    const handler = (e: MediaQueryListEvent) => { setIsDesktop(e.matches); if (e.matches) setOpen(false) }
    init()
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (collectionsRef.current && !collectionsRef.current.contains(e.target as Node)) {
        setCollectionsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkClass = `text-sm font-medium uppercase tracking-widest transition-soft cursor-pointer ${
    isJoinPage ? 'text-white/20 hover:text-white/40' : 'text-white hover:text-white/70'
  }`

  return (
    <>


      <header className={`fixed top-0 left-0 right-0 z-50 ${isJoinPage ? 'bg-transparent border-transparent' : `border-b border-neutral-800 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black/70 backdrop-blur-sm'}`}`}>
        <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4 lg:px-12">
          <Link to="/" className="font-display text-xs font-medium uppercase tracking-widest text-white transition-soft hover:text-white/70">
            HEAVENLYNOVA
          </Link>

          {!isDesktop && (
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className={`inline-flex items-center justify-center border px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-soft ${isJoinPage ? 'border-white/20 hover:bg-white/10' : 'border-neutral-700 hover:bg-neutral-900'}`}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          )}

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none items-center">
              <li>
                <span className={linkClass} onClick={() => handleDropsFilter()}>Drops</span>
              </li>
              <li>
                <span className={linkClass} onClick={() => navigate('/heritage')}>Heritage</span>
              </li>
              <li>
                <span className={linkClass} onClick={() => handleAnchorClick('essentials')}>Essentials</span>
              </li>

              {/* Collections Dropdown */}
              <li ref={collectionsRef} className="relative">
                <span
                  className={`${linkClass} flex items-center gap-1`}
                  onClick={() => setCollectionsOpen(!collectionsOpen)}
                >
                  Collections
                  <svg className={`w-3 h-3 transition-transform ${collectionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {collectionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-black border border-white/10 py-2 z-50">
                    {[
                      { label: 'Heritage', action: () => navigate('/heritage') },
                      { label: 'Essentials', action: () => handleDropsFilter(undefined, 'essentials') },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={item.action}
                        className="block w-full text-left px-4 py-2 text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && !isDesktop && (
          <div className="md:hidden border-t border-neutral-800">
            <ul className="space-y-2 px-6 py-4 list-none">
              {[
                { label: 'Drops', action: () => handleDropsFilter() },
                { label: 'Heritage', action: () => navigate('/heritage') },
                { label: 'Essentials', action: () => handleAnchorClick('essentials') },
                // { label: 'Seraphim', action: () => navigate('/seraphim') }, // hidden - coming soon
              ].map((item) => (
                <li key={item.label}>
                  <span
                    className="block text-sm font-medium uppercase tracking-widest text-white cursor-pointer hover:text-white/70 transition-colors"
                    onClick={item.action}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
