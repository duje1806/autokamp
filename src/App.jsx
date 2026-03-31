import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import PricingPage from './pages/PricingPage'
import GalleryPage from './pages/GalleryPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/karta" element={<MapPage />} />
        <Route path="/cjenik" element={<PricingPage />} />
        <Route path="/galerija" element={<GalleryPage />} />
        <Route path="/dojmovi" element={<ReviewsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}
