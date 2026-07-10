import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { TRANSLATIONS } from './translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useLocalStorage('cu_lang', 'fr')
  const t = (key) => TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS['fr'][key] ?? key
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

export function LangSwitcher() {
  const { lang, setLang } = useLang()
  const langs = [
    { code: 'fr', flag: '🇫🇷' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'es', flag: '🇪🇸' },
  ]
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {langs.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            width: 32, height: 32, borderRadius: '50%',
            background: lang === code ? '#1f2937' : 'transparent',
            border: `1px solid ${lang === code ? '#374151' : 'transparent'}`,
            fontSize: 17, cursor: 'pointer', lineHeight: 1,
            opacity: lang === code ? 1 : 0.45,
            transition: 'all 0.15s',
          }}
        >{flag}</button>
      ))}
    </div>
  )
}
