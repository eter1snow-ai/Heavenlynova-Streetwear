import Home from './pages/Home'
import Drops from './pages/Drops'
import ProductDetail from './pages/ProductDetail'
import Story from './pages/Story'
import Heritage from './pages/Heritage'
import Join from './pages/Join'
import Contact from './pages/Contact'
import Seraphim from './pages/Seraphim'
import NotFound from './pages/NotFound'
import { CartProvider } from './components/cart/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ShippingPolicy from './pages/ShippingPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TrackOrder from './pages/TrackOrder'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import EmailCapture from './components/shared/EmailCapture'
import CookieBanner from './components/shared/CookieBanner'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { applySEO } from './hooks/useSEO'

// ─── SEO config per-rută ────────────────────────────────────────────────────
// Paginile de produs (/product/:id) își setează SEO-ul intern în ProductDetail.
// Aici configurăm toate rutele statice.

const ROUTE_SEO: Record<string, Parameters<typeof applySEO>[0]> = {
  '/': {
    path: '/',
    title: 'HeavenlyNova — Heavyweight Streetwear',
    description: 'HeavenlyNova streetwear. Heavyweight cotton pieces built from light and shadow. Shop drops, Heritage and Essentials collections.',
  },
  '/drops': {
    path: '/drops',
    title: 'Drops — HeavenlyNova Streetwear',
    description: 'Shop all HeavenlyNova drops. Heavyweight tees and hoodies. Heritage line, Essentials and exclusive pieces.',
  },
  '/heritage': {
    path: '/heritage',
    title: 'Heritage — The First Constellations | HeavenlyNova',
    description: 'The Heritage collection: original designs born from truth, not trend. The first constellations of the HeavenlyNova universe.',
  },
  '/story': {
    path: '/story',
    title: 'The Origin Story — Chapter 000 | HeavenlyNova',
    description: 'Those who reach the end carry the first symbol. Discover the origin of HeavenlyNova — Chapter 000, The First Signal.',
  },
  '/seraphim': {
    path: '/seraphim',
    title: 'Seraphim — Chapter /001 | HeavenlyNova',
    description: 'Seraphim — The First Ascension. Chapter /001 of the HeavenlyNova universe.',
    noindex: true,
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | HeavenlyNova',
    description: 'HeavenlyNova privacy policy — how we collect and use your data.',
  },
  '/terms-of-service': {
    path: '/terms-of-service',
    title: 'Terms of Service | HeavenlyNova',
    description: 'HeavenlyNova terms of service.',
  },
  '/shipping-policy': {
    path: '/shipping-policy',
    title: 'Shipping Policy | HeavenlyNova',
    description: 'HeavenlyNova shipping policy — delivery times, regions and rates.',
  },
  '/refund-policy': {
    path: '/refund-policy',
    title: 'Refund Policy | HeavenlyNova',
    description: 'HeavenlyNova refund and returns policy.',
  },
}

// ─── Components ──────────────────────────────────────────────────────────────

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

  useEffect(() => {
    // Delay scroll to allow page render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 50)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Inject canonical + title + meta per-rută (rute statice)
  // Paginile de produs (/product/:id) gestionează SEO intern via useSEO.ts
  useEffect(() => {
    const isProductRoute = location.pathname.startsWith('/product/')
    if (!isProductRoute) {
      const seoConfig = ROUTE_SEO[location.pathname]
      if (seoConfig) {
        applySEO(seoConfig)
      } else {
        // Rută necunoscută (ex: 404) — canonical pe path-ul curent, fără indexare
        applySEO({
          path: location.pathname,
          title: 'Page Not Found | HeavenlyNova',
          noindex: true,
        })
      }
    }
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionPage><Home /></MotionPage>} />
        <Route path="/drops" element={<MotionPage><Drops /></MotionPage>} />
        <Route path="/story" element={<MotionPage><Story /></MotionPage>} />
        <Route path="/heritage" element={<MotionPage><Heritage /></MotionPage>} />
        <Route path="/join" element={<MotionPage><Join /></MotionPage>} />
        <Route path="/contact" element={<MotionPage><Contact /></MotionPage>} />
        <Route path="/seraphim" element={<MotionPage><Seraphim /></MotionPage>} />
        <Route path="/privacy-policy" element={<MotionPage><PrivacyPolicy /></MotionPage>} />
        <Route path="/terms-of-service" element={<MotionPage><TermsOfService /></MotionPage>} />
        <Route path="/shipping-policy" element={<MotionPage><ShippingPolicy /></MotionPage>} />
        <Route path="/refund-policy" element={<MotionPage><RefundPolicy /></MotionPage>} />
        <Route path="/track-order" element={<MotionPage><TrackOrder /></MotionPage>} />
        <Route path="/product/:productId" element={<MotionPage><ProductDetail /></MotionPage>} />
        <Route path="*" element={<MotionPage><NotFound /></MotionPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <EmailCapture />
        <CookieBanner />
        <CartDrawer />
        <div className="min-h-screen bg-black text-white hn-radius-0">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
