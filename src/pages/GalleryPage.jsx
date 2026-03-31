import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

const galleryImages = [
  { src: '/images/1m.jpg', alt: 'Kamp 1' },
  { src: '/images/2m.jpg', alt: 'Kamp 2' },
  { src: '/images/3m.jpg', alt: 'Kamp 3' },
  { src: '/images/4m.jpg', alt: 'Kamp 4' },
  { src: '/images/5m.jpg', alt: 'Kamp 5' },
  { src: '/images/k4.jpg', alt: 'Kamp pogled' },
  { src: '/images/plaza1.jpg', alt: 'Plaža' },
  { src: '/images/dbk6.jpg', alt: 'Dubrovnik' },
  { src: '/images/more.jpg', alt: 'More' },
  { src: '/images/crkva.jpg', alt: 'Crkva' },
  { src: '/images/panorama.jpg', alt: 'Panorama' },
  { src: '/images/hero.jpg', alt: 'Hero' },
]

export default function GalleryPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () => setLightbox((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () => setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <div style={{ background: 'var(--brand-beige)' }}>
      <ScrollToTop />

      {/* Header */}
      <header
        className="hero-sub"
        style={{ alignItems: 'center', paddingBottom: 0, height: '40vh' }}
      >
        <div className="hero-img">
          <img
            src="/images/photo_g.jpg"
            alt="Photo Gallery"
            style={{ filter: 'brightness(0.6)' }}
          />
        </div>
        <div
          className="container-wide"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1>{t.gallery.heroTitle}</h1>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container-wide">
          <p className="meta-info">{t.gallery.meta}</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>
            {t.gallery.title}
          </h2>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div
                className="img-reveal gallery-item"
                key={index}
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>⊕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            ‹
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
