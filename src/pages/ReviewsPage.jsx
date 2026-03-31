import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

const reviewLinks = [
  {
    name: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/Hotel_Review-g1943776-d3545334-Reviews-Camping_Pod_Maslinom-Orasac_Dubrovnik_Neretva_County_Dalmatia.html',
    label: 'Vidi recenzije →',
  },
  {
    name: 'Facebook Group',
    url: 'https://www.facebook.com/groups/712347102146197/',
    label: 'Pridruži se →',
  },
  {
    name: 'Facebook Site',
    url: 'https://www.facebook.com/podmaslinom',
    label: 'Prati nas →',
  },
  {
    name: 'Google Reviews',
    url: 'https://www.google.com/maps/place/Auto+Camp+Pod+Maslinom/@42.6988877,18.0052899',
    label: 'Ostavi ocjenu →',
  },
  {
    name: 'ACSI',
    url: 'https://www.eurocampings.co.uk/croatia/dubrovnik-neretva/orasac/camp-pod-maslinom-105151/',
    label: 'Eurocampings →',
  },
  {
    name: 'ADAC',
    url: 'https://www.pincamp.com/campings/camping-pod-maslinom',
    label: 'PiNCAMP →',
  },
  {
    name: 'Camping.info',
    url: 'https://www.camping.info/en/campsite/camping-pod-maslinom',
    label: 'Ocijeni nas →',
  },
  {
    name: 'Cro.pl',
    url: 'https://www.cro.pl/kemping-pod-maslinom-orasac-dubrownik-t17882.html',
    label: 'Forum thread →',
  },
  {
    name: 'Avtokampi.si',
    url: 'https://www.avtokampi.si/campsites/camp-pod-maslinom',
    label: 'Slovenia →',
  },
  {
    name: 'Zoover',
    url: 'https://www.zoover.nl/kroatie/dalmatie/orasac-dubrovnik/pod-maslinom/camping',
    label: 'Holiday reviews →',
  },
  {
    name: 'Campercontact',
    url: 'https://www.campercontact.com/en/croatia/dubrovnik-neretva/orasac/7382/auto-camp-pod-maslinom',
    label: 'Motorhome stop →',
  },
  {
    name: 'Coolcamping',
    url: 'https://coolcamping.com/',
    label: 'Web site →',
  },
]

const partnerLogos = [
  { src: '/images/acsi.gif', alt: 'ACSI' },
  { src: '/images/adac.gif', alt: 'ADAC' },
  { src: '/images/anwb.jpg', alt: 'ANWB' },
  { src: '/images/pasar.jpg', alt: 'Pasar' },
  { src: '/images/dcc.jpg', alt: 'DCC' },
  { src: '/images/zoover.jpg', alt: 'Zoover' },
  { src: '/images/cro_pl.jpg', alt: 'Cro.pl' },
  { src: '/images/camping_select.jpg', alt: 'Camping Select' },
  { src: '/images/eurocamps.jpg', alt: 'Eurocamps' },
  { src: '/images/routard.jpg', alt: 'Routard' },
  { src: '/images/coolcamping.jpg', alt: 'Coolcamping' },
]

export default function ReviewsPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

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
            src="/images/duo.jpg"
            alt="Duo Header"
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
          <h1>{t.reviews.heroTitle}</h1>
        </div>
      </header>

      {/* Review Platforms */}
      <section className="section">
        <div className="container-wide">
          <p className="meta-info">{t.reviews.meta}</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            {t.reviews.title}
          </h2>
          <p style={{ marginBottom: '4rem' }}>{t.reviews.desc}</p>

          <div
            style={{
              marginBottom: '60px',
              padding: '40px',
              background: 'var(--brand-stone)',
              borderRadius: '2px',
            }}
          >
            <p
              style={{
                color: '#6B6B6B',
                fontStyle: 'italic',
                marginBottom: '2rem',
              }}
            >
              {t.reviews.emailPrompt}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                flexWrap: 'wrap',
              }}
            >
              <img src="/images/sun.gif" alt="Sun" width="60" />
              <a href="mailto:bozo@orasac.com" className="btn-premium">
                {t.reviews.emailCta}
              </a>
              <img src="/images/pismo.gif" alt="Pismo" width="40" />
            </div>
          </div>

          <div className="links-grid">
            {reviewLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <b>{link.name}</b>
                <p
                  className="caps-small"
                  style={{ marginTop: '10px', opacity: 0.6 }}
                >
                  {link.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section" style={{ background: 'var(--brand-stone)' }}>
        <div className="container-wide">
          <p className="meta-info">{t.reviews.partnersMeta}</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            {t.reviews.partnersTitle}
          </h2>

          <div className="partner-grid">
            {partnerLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
