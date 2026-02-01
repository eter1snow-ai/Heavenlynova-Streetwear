import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#/"
          className="font-display text-xs font-medium uppercase tracking-[0.28em] text-neutral-300 transition-soft hover:text-white"
        >
          HEAVENLYNOVA
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center border border-neutral-700 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-soft hover:bg-neutral-900"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <ul className="hidden gap-8 md:flex">
          <li>
            <a
              className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 transition-soft hover:text-white"
              href="#/drops"
            >
              Drops
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 border-t border-neutral-800 px-6 py-4">
            <li>
              <a
                className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-300 transition-soft hover:text-white"
                href="#/drops"
              >
                Drops
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
