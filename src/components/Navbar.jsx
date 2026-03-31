import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTranslation } from '../i18n/translations'

export default function Navbar() {
  const { language, changeLanguage, SUPPORTED_LANGS } = useLanguage()
  const t = useTranslation(language)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/karta', label: t.nav.map },
    { path: '/cjenik', label: t.nav.pricing },
    { path: '/galerija', label: t.nav.gallery },
    { path: '/dojmovi', label: t.nav.reviews },
    { path: '/kontakt', label: t.nav.contact },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-brand">
        <img src="/favicon.ico" alt="Logo" />
        POD MASLINOM
      </Link>

      <div
        className="menu-toggle"
        id="mobileMenu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} id="navLinks">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={isActive(item.path) ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`lang-switch${mobileOpen ? ' lang-switch-mobile' : ''}`}>
        {SUPPORTED_LANGS.map((lang) => (
          <button
            key={lang}
            className={language === lang ? 'active' : ''}
            onClick={() => changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
