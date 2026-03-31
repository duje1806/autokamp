import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

export default function MapPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <div style={{ background: 'var(--brand-beige)' }}>
      <ScrollToTop />

      {/* Header */}
      <header className="hero-sub">
        <div className="hero-img">
          <img
            src="/images/put.jpg"
            alt="Put do kampa"
            style={{ filter: 'brightness(0.6)' }}
          />
        </div>
        <div
          className="container-wide"
          style={{
            position: 'relative',
            zIndex: 10,
            paddingBottom: '5vh',
            color: 'white',
            paddingLeft: '5%',
          }}
        >
          <p className="caps-small" style={{ marginBottom: '1rem' }}>
            {t.map.heroSub}
          </p>
          <h1>{t.map.heroTitle}</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                {t.map.title}
              </h2>
              <p style={{ marginBottom: '2rem' }}>{t.map.desc}</p>

              <div
                style={{
                  background: 'var(--brand-stone)',
                  padding: '40px',
                  borderRadius: '2px',
                  marginTop: '40px',
                }}
              >
                <p className="caps-small" style={{ marginBottom: '1rem' }}>
                  {t.map.gpsLabel}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  N 42 41.944' <br />E 018 00.355'
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                  }}
                >
                  <img src="/images/croatia.gif" alt="CRO" width="50" />
                  <p
                    className="reveal-text"
                    style={{ marginBottom: 0, fontSize: '1rem' }}
                  >
                    {t.map.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: '500px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.5746356715697!2d18.0031012!3d42.6988916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8a55ec965f9d%3A0x18f528cf4806710!2sCamp%20Pod%20Maslinom!5e0!3m2!1shr!2shr!4v1620000000000!5m2!1shr!2shr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Camp Pod Maslinom Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
