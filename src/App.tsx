import Home from './pages/Home'
import Drops from './pages/Drops'
import ProductDetail from './pages/ProductDetail'
import Story from './pages/Story'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function MotionPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const navType = useNavigationType()
  // Scroll to top on route changes
  // Use a layout-level effect to avoid landing at footer when navigating back
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (navType === 'POP') {
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, navType])
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionPage><Home /></MotionPage>} />
        <Route path="/drops" element={<MotionPage><Drops /></MotionPage>} />
        <Route path="/story" element={<MotionPage><Story /></MotionPage>} />
        <Route path="/product/:productId" element={<MotionPage><ProductDetail /></MotionPage>} />
        <Route path="*" element={<MotionPage><Home /></MotionPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white hn-radius-0">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
