import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Drops from './pages/Drops'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash || '#/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = (() => {
    switch (route) {
      case '#/drops':
        return Drops
      default:
        return Home
    }
  })()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Page />
      <Footer />
    </div>
  )
}
