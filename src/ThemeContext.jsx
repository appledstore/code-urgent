import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage('cu_theme', true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      style={{
        width: 36, height: 36, borderRadius: '50%',
        background: 'var(--bg3)', border: '1px solid var(--border)',
        fontSize: 17, cursor: 'pointer', lineHeight: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }}
    >{isDark ? '☀️' : '🌙'}</button>
  )
}
