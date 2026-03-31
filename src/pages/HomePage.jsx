import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

export default function HomePage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const scrollToAbout = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ScrollToTop />

      {/* Fullscreen Hero */}
      <header className="hero-full">
        <div className="hero-img">
          <img src="/images/hero.jpg" alt="Camp Pod maslinom" />
        </div>
        <div className="hero-content">
          <p className="caps-small" style={{ marginBottom: '2rem' }}>
            {t.home.heroTagline}
          </p>
          <h1>{t.home.heroTitle}</h1>
          <p style={{ marginBottom: '2rem' }}>{t.home.heroDesc}</p>
          <a href="#about" className="btn-premium" onClick={scrollToAbout}>
            {t.home.heroCta}
          </a>
        </div>
      </header>

      {/* Summary Section */}
      <section id="about" className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="meta-info">{t.home.aboutMeta}</p>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '2rem',
            }}
          >
            {t.home.aboutTitle}
          </h2>
          <p
            className="reveal-text"
            dangerouslySetInnerHTML={{ __html: t.home.aboutDesc }}
          />
        </div>
      </section>

      {/* Grid Content */}
      <section
        className="section"
        style={{
          background: 'var(--brand-stone)',
          paddingTop: '15vh',
          paddingBottom: '15vh',
        }}
      >
        <div className="container-wide">
          <div className="grid-2">
            <div className="img-reveal" style={{ height: '600px' }}>
              <img src="/images/k4.jpg" alt="Kamp" />
            </div>
            <div>
              <p className="meta-info">{t.home.gridMeta}</p>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                {t.home.gridTitle}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.home.gridP1 }} />
              <p>{t.home.gridP2}</p>
              <p
                style={{
                  marginTop: '2rem',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.8rem',
                }}
              >
                <img
                  src="/favicon.ico"
                  width="16"
                  style={{ verticalAlign: 'middle' }}
                  alt=""
                />{' '}
                <b>{t.home.gridBeach}</b>{' '}
                <img
                  src="/favicon.ico"
                  width="16"
                  style={{ verticalAlign: 'middle' }}
                  alt=""
                />{' '}
                <b>{t.home.gridCity}</b>
              </p>
              <Link
                to="/galerija"
                className="btn-premium btn-outline"
                style={{ marginTop: '2rem' }}
              >
                {t.home.gridCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
