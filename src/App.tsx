import Home from './pages/Home'
import Drops from './pages/Drops'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionPage><Home /></MotionPage>} />
        <Route path="/drops" element={<MotionPage><Drops /></MotionPage>} />
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
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
