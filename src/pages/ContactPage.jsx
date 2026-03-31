import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'
import ScrollToTop from '../components/ScrollToTop'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <div style={{ background: 'var(--brand-beige)' }}>
      <ScrollToTop />

      {/* Header */}
      <header className="hero-sub" style={{ height: '40vh' }}>
        <div className="hero-img">
          <img
            src="/images/plaza_header.jpg"
            alt="Plaza Header"
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
          <h1>{t.contact.heroTitle}</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="section">
        <div className="container-narrow">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>
            {t.contact.title}
          </h2>

          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <p className="meta-info">{t.contact.infoMeta}</p>
              <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                Auto Kamp <br />
                POD MASLINOM
              </p>
              <p style={{ marginBottom: 0 }}>
                Donja banda 7C <br />
                20234 Orašac - CROATIA
              </p>
              <p style={{ marginTop: '2rem', fontWeight: 600 }}>
                tel: +385 20 891 169
              </p>
              <p style={{ fontWeight: 600 }}>mob: +385 98 344 226</p>
              <p style={{ marginTop: '10px' }}>
                <a
                  href="mailto:bozo@orasac.com"
                  style={{ color: 'var(--brand-olive)' }}
                >
                  bozo@orasac.com
                </a>
              </p>
            </div>

            <div className="form-luxury">
              <p className="meta-info">{t.contact.formMeta}</p>
              <form
                action="mailto:bozo@orasac.com"
                method="POST"
                encType="text/plain"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
                <input
                  type="text"
                  name="tel"
                  placeholder={t.contact.phonePlaceholder}
                />
                <textarea
                  name="comments"
                  placeholder={t.contact.messagePlaceholder}
                  rows="4"
                  required
                />
                <button
                  type="submit"
                  className="btn-premium"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  {t.contact.sendBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
