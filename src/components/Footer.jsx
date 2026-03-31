import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <footer>
      <div className="footer-bottom">
        <p className="caps-small">{t.footer.copy}</p>
      </div>
    </footer>
  )
}
