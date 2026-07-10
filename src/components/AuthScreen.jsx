import { useState } from 'react'
import { signIn, signUp } from '../lib/auth'

export default function AuthScreen({ onSuccess }) {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [msg, setMsg] = useState(null)

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMsg(null)

    if (mode === 'login') {
      const { error } = await signIn(email, password)
      if (error) setError(error.message)
      else onSuccess?.()
    } else {
      const { error } = await signUp(email, password, name)
      if (error) setError(error.message)
      else setMsg('Vérifiez votre email pour confirmer votre compte.')
    }
    setLoading(false)
  }

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: 32,
      background: 'var(--bg)'
    }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>🚨</div>
      <h1 style={{
        fontSize: 26, fontWeight: 800, margin: 0, marginBottom: 4,
        background: 'linear-gradient(135deg, #ef4444, #f97316)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>Code Urgent</h1>
      <p style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 32, textAlign: 'center' }}>
        {mode === 'login' ? 'Connectez-vous pour accéder à vos cas' : 'Créez votre compte'}
      </p>

      <form onSubmit={handle} style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {mode === 'signup' && (
          <input
            type="text" placeholder="Prénom et nom" value={name}
            onChange={e => setName(e.target.value)} required
            style={inputStyle}
          />
        )}
        <input
          type="email" placeholder="Email professionnel" value={email}
          onChange={e => setEmail(e.target.value)} required
          style={inputStyle}
        />
        <input
          type="password" placeholder="Mot de passe (8 caractères min.)" value={password}
          onChange={e => setPassword(e.target.value)} required minLength={8}
          style={inputStyle}
        />

        {error && (
          <div style={{ fontSize: 12, color: '#ef4444', padding: '8px 12px', background: '#ef444411', borderRadius: 8 }}>
            {error}
          </div>
        )}
        {msg && (
          <div style={{ fontSize: 12, color: '#10b981', padding: '8px 12px', background: '#10b98111', borderRadius: 8 }}>
            {msg}
          </div>
        )}

        <button type="submit" disabled={loading} style={{
          padding: '14px', background: loading ? 'var(--bg3)' : '#ef4444',
          color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14,
          border: 'none', cursor: loading ? 'default' : 'pointer', marginTop: 4
        }}>
          {loading ? '...' : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
        </button>
      </form>

      <button onClick={() => { setMode(m => m === 'login' ? 'signup' : 'login'); setError(null); setMsg(null) }}
        style={{ marginTop: 20, fontSize: 13, color: 'var(--text3)', background: 'none', border: 'none', cursor: 'pointer' }}>
        {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
      </button>
    </div>
  )
}

const inputStyle = {
  padding: '13px 16px', background: 'var(--bg2)', border: '1px solid var(--border)',
  borderRadius: 10, color: 'var(--text)', fontSize: 14, outline: 'none', width: '100%',
  boxSizing: 'border-box'
}
