import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext()

const SUPPORTED_LANGS = ['hr', 'en', 'de', 'fr', 'pl', 'it']
const DEFAULT_LANG = 'hr'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('autokamp-lang')
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved
    const browserLang = navigator.language?.slice(0, 2)
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang
    return DEFAULT_LANG
  })

  const changeLanguage = useCallback((lang) => {
    if (SUPPORTED_LANGS.includes(lang)) {
      setLanguage(lang)
      localStorage.setItem('autokamp-lang', lang)
      document.documentElement.lang = lang
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, SUPPORTED_LANGS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
