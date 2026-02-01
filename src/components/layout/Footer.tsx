export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10 text-neutral-400">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} HEAVENLYNOVA</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-sm hover:text-white">
              TikTok
            </a>
            <a href="#" className="text-sm hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
