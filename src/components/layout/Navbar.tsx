import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center border border-neutral-700 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-soft hover:bg-neutral-900"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <ul className="hidden gap-8 md:flex list-none">
          <li>
            <Link
              className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
              to="/drops"
            >
              Drops
            </Link>
          </li>
          <li>
            <a
              className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
              href="#heritage"
            >
              T-Shirts
            </a>
          </li>
          <li>
            <a
              className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
              href="#essentials"
            >
              Hoodies
            </a>
          </li>
          <li>
            <a
              className="text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
              href="#drops"
            >
              Shirts
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 border-t border-neutral-800 px-6 py-4 list-none">
            <li>
              <Link
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
                to="/drops"
              >
                Drops
              </Link>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
                href="#heritage"
              >
                T-Shirts
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
                href="#essentials"
              >
                Hoodies
              </a>
            </li>
            <li>
              <a
                className="block text-sm font-medium uppercase tracking-widest text-white visited:text-white no-underline transition-soft hover:text-white"
                href="#drops"
              >
                Shirts
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
    </>
  )
}
