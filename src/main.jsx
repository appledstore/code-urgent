import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './i18n/LangContext.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import { AuthProvider } from './lib/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
