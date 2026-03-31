import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

const priceData = [
  { key: 'person', a: '8,05 €', b: '11,05 €' },
  { key: 'kid', a: '4,00 €', b: '6,00 €' },
  { key: 'youth', a: '5,02 €', b: '7,02 €' },
  { key: 'tax', a: '1,95 €', b: '1,95 €' },
  { key: 'tentS', a: '5,00 €', b: '6,00 €' },
  { key: 'tentL', a: '6,00 €', b: '8,00 €' },
  { key: 'car', a: '4,00 €', b: '5,00 €' },
  { key: 'van', a: '9,00 €', b: '10,00 €' },
  { key: 'camper', a: '10,00 €', b: '12,00 €' },
  { key: 'electricity', a: '4,00 €', b: '4,00 €' },
  { key: 'dog', a: '1,00 €', b: '1,00 €' },
  { key: 'washingMachine', a: '4,00 €', b: '4,00 €' },
]

export default function PricingPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <div style={{ background: 'var(--white)' }}>
      <ScrollToTop />

      {/* Header */}
      <header className="hero-sub" style={{ height: '50vh' }}>
        <div className="hero-img">
          <img
            src="/images/maslina.jpg"
            alt="Maslina"
            style={{ filter: 'brightness(0.6)' }}
          />
        </div>
        <div
          className="container-wide"
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '0 5%',
            color: 'white',
          }}
        >
          <p className="caps-small" style={{ marginBottom: '1rem' }}>
            {t.pricing.heroSub}
          </p>
          <h1>{t.pricing.heroTitle}</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="section">
        <div className="container-narrow">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            {t.pricing.title}
          </h2>
          <p style={{ marginBottom: '4rem' }}>{t.pricing.desc}</p>

          <p className="meta-info">{t.pricing.tableMeta}</p>
          <table className="table-luxury">
            <thead>
              <tr>
                <th>{t.pricing.thService}</th>
                <th style={{ color: '#6AC335' }}>{t.pricing.thSeasonA}</th>
                <th style={{ color: '#FF9834' }}>{t.pricing.thSeasonB}</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item) => (
                <tr key={item.key}>
                  <td>
                    <b>{t.pricing[item.key]}</b>
                  </td>
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              marginTop: '4rem',
              padding: '40px',
              border: '1px solid var(--brand-stone)',
              background: 'var(--brand-beige)',
            }}
          >
            <p
              className="caps-small"
              style={{ color: '#CC0000', marginBottom: '1rem' }}
            >
              {t.pricing.noticeLabel}
            </p>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.25rem',
              }}
            >
              {t.pricing.noticeText}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
