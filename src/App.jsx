import { useState, useEffect } from 'react'
import { CASES } from './data/cases'
import HomeScreen from './components/HomeScreen'
import CaseView from './components/CaseView'
import IOACaseView from './components/IOACaseView'
import Dashboard from './components/Dashboard'
import SynthesisView from './components/SynthesisView'
import Onboarding from './components/Onboarding'
import AuthScreen from './components/AuthScreen'
import LandingPage from './components/LandingPage'
import UpgradeModal from './components/UpgradeModal'
import Calculateurs from './components/Calculateurs'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useLang, LangSwitcher } from './i18n/LangContext'
import { ThemeToggle } from './ThemeContext'
import { useAuth } from './lib/AuthContext'
import { signOut } from './lib/auth'
import { usePushNotifications } from './hooks/usePushNotifications'
import './index.css'

export default function App() {
  const { user, loading, isPremium, syncProgress, fetchRemoteProgress } = useAuth()
  const FREE_CASES = ['vagal', 'stemi', 'meningite']
  const [activeCase, setActiveCase] = useState(null)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [showCalcs, setShowCalcs] = useState(false)
  const [role, setRole] = useState(null) // null | 'medecin' | 'ioa'
  const [completed, setCompleted] = useLocalStorage('cu_completed', [])
  const [ioaCompleted, setIoaCompleted] = useLocalStorage('cu_ioa_completed', [])
  const [scores, setScores] = useLocalStorage('cu_scores', {}) // { caseId: { medecin: pts, ioa: pts } }
  const [showDashboard, setShowDashboard] = useState(false)
  const [synthCase, setSynthCase] = useState(null)
  const [onboardingDone, setOnboardingDone] = useLocalStorage('cu_onboarding', false)
  const { t } = useLang()
  const { notify, requestPermission, permission } = usePushNotifications()

  // Demander permission notifications après connexion
  useEffect(() => {
    if (user && permission === 'default') {
      const t = setTimeout(() => requestPermission(), 3000)
      return () => clearTimeout(t)
    }
  }, [user, permission])

  // Sync depuis Supabase à la connexion
  useEffect(() => {
    if (!user) return
    fetchRemoteProgress().then(remote => {
      if (!remote) return
      if (remote.completed.length > completed.length) setCompleted(remote.completed)
      if (remote.ioaCompleted.length > ioaCompleted.length) setIoaCompleted(remote.ioaCompleted)
      if (Object.keys(remote.scores).length > 0) setScores(s => ({ ...remote.scores, ...s }))
    })
  }, [user])

  const handleComplete = (caseId, pts) => {
    const newCompleted = completed.includes(caseId) ? completed : [...completed, caseId]
    const newScores = { ...scores, [caseId]: { ...scores[caseId], medecin: pts } }
    setCompleted(newCompleted)
    setScores(newScores)
    syncProgress(newCompleted, ioaCompleted, newScores)
    if (!completed.includes(caseId)) notify('Cas complété ! 🎉', `${pts}/5 pts — Continuez sur votre lancée`)
  }

  const handleIoaComplete = (caseId, pts) => {
    const newIoa = ioaCompleted.includes(caseId) ? ioaCompleted : [...ioaCompleted, caseId]
    const newScores = { ...scores, [caseId]: { ...scores[caseId], ioa: pts } }
    setIoaCompleted(newIoa)
    setScores(newScores)
    syncProgress(completed, newIoa, newScores)
  }

  // Loading Supabase session
  if (loading) return (
    <div style={{ height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
      <div style={{ fontSize: 13, color: 'var(--text3)' }}>Chargement…</div>
    </div>
  )

  // Auth screen si non connecté
  if (!user) return (
    <div style={{ height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto', background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <LandingPage onStart={() => {
        document.getElementById('auth-modal').style.display = 'flex'
      }} />
      <div id="auth-modal" style={{
        display: 'none', position: 'fixed', inset: 0, zIndex: 200,
        background: '#000000aa', alignItems: 'flex-end', justifyContent: 'center'
      }} onClick={e => { if (e.target.id === 'auth-modal') e.target.style.display = 'none' }}>
        <div style={{
          width: '100%', maxWidth: 480, background: 'var(--bg)',
          borderRadius: '20px 20px 0 0', padding: '8px 0 32px',
          maxHeight: '90dvh', overflowY: 'auto'
        }}>
          <div style={{ width: 40, height: 4, background: 'var(--border)', borderRadius: 2, margin: '12px auto 8px' }} />
          <AuthScreen onSuccess={() => {}} />
        </div>
      </div>
    </div>
  )

  // Calculateurs
  if (showCalcs) return (
    <div style={{ height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto', background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Calculateurs onBack={() => setShowCalcs(false)} />
    </div>
  )

  // Synthesis view
  if (synthCase) return (
    <div style={{ height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto', background: 'var(--bg-ioa)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <SynthesisView caseData={synthCase} onBack={() => setSynthCase(null)} />
    </div>
  )

  // Dashboard
  if (showDashboard) return (
    <div style={{ height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto', background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Dashboard
        completed={completed}
        ioaCompleted={ioaCompleted}
        scores={scores}
        onBack={() => setShowDashboard(false)}
      />
    </div>
  )

  // Onboarding first launch
  if (!onboardingDone) return (
    <div style={{ height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto', background: 'var(--bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Onboarding onDone={() => setOnboardingDone(true)} />
    </div>
  )

  // Role selector
  if (!role) return (
    <div style={{
      height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto',
      background: 'var(--bg)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: 32, overflow: 'hidden'
    }}>
      <div style={{ alignSelf: 'stretch', marginBottom: 8, display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 180 }}>
          {user.email}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeToggle />
          <LangSwitcher />
          <button onClick={() => signOut()} style={{
            fontSize: 11, padding: '4px 10px', background: 'var(--bg3)',
            border: '1px solid var(--border)', borderRadius: 8,
            color: 'var(--text3)', cursor: 'pointer'
          }}>Déco</button>
        </div>
      </div>
      <div style={{ fontSize: 56, marginBottom: 16 }}>🚨</div>
      <h1 style={{
        fontSize: 30, fontWeight: 800, letterSpacing: -0.5, margin: 0, marginBottom: 8,
        background: 'linear-gradient(135deg, #ef4444, #f97316)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center'
      }}>Code Urgent</h1>
      <p style={{ fontSize: 13, color: 'var(--text3)', textAlign: 'center', marginBottom: 32, lineHeight: 1.6 }}>
        {t('chooseRole')}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
        <button onClick={() => setRole('medecin')} style={{
          padding: '20px 24px', background: 'var(--bg2)', border: '2px solid #ef444466',
          borderRadius: 14, cursor: 'pointer', textAlign: 'left'
        }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ fontSize: 36 }}>🩺</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{t('doctorTitle')}</div>
              <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5 }}>{t('doctorDesc')}</div>
            </div>
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
            {[t('tag30cases'), t('tag6steps'), t('tagCardioEtc')].map(tag => (
              <span key={tag} style={{ fontSize: 10, padding: '3px 8px', background: '#ef444418', color: '#ef4444', border: '1px solid #ef444433', borderRadius: 10 }}>{tag}</span>
            ))}
          </div>
        </button>

        <button onClick={() => setRole('ioa')} style={{
          padding: '20px 24px', background: 'var(--bg4)', border: '2px solid #3B82F666',
          borderRadius: 14, cursor: 'pointer', textAlign: 'left'
        }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ fontSize: 36 }}>👩‍⚕️</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{t('nurseTitle')}</div>
              <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5 }}>{t('nurseDesc')}</div>
            </div>
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
            {[t('tag30cases'), t('tag4steps'), t('tagCimu')].map(tag => (
              <span key={tag} style={{ fontSize: 10, padding: '3px 8px', background: '#3B82F618', color: 'var(--blue2)', border: '1px solid #3B82F633', borderRadius: 10 }}>{tag}</span>
            ))}
          </div>
        </button>
      </div>

      {/* Quick stats if any progress */}
      {(completed.length > 0 || ioaCompleted.length > 0) && (
        <button onClick={() => setShowDashboard(true)} style={{
          marginTop: 20, padding: '10px 20px', background: 'var(--bg3)',
          border: '1px solid var(--border)', borderRadius: 10, cursor: 'pointer',
          fontSize: 12, color: 'var(--text2)', display: 'flex', gap: 12, alignItems: 'center'
        }}>
          <span>📊</span>
          <span>🩺 {completed.length}/{CASES.length}</span>
          <span>·</span>
          <span>👩‍⚕️ {ioaCompleted.length}/{CASES.length}</span>
          <span style={{ color: '#60a5fa' }}>{t('toDashboard')}</span>
        </button>
      )}

      <div style={{ marginTop: 24, fontSize: 11, color: '#374151' }}>Sources : SFMU · ESC · HAS · Cochrane</div>
    </div>
  )

  return (
    <div style={{
      height: '100dvh', width: '100%', maxWidth: 480, margin: '0 auto',
      background: role === 'ioa' ? 'var(--bg-ioa)' : 'var(--bg)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'
    }}>
      {activeCase ? (
        role === 'ioa' ? (
          <IOACaseView
            key={activeCase.id + '-ioa'}
            caseData={activeCase}
            onBack={() => setActiveCase(null)}
            onComplete={(pts) => handleIoaComplete(activeCase.id, pts)}
          />
        ) : (
          <CaseView
            key={activeCase.id}
            caseData={activeCase}
            onBack={() => setActiveCase(null)}
            onComplete={(pts) => handleComplete(activeCase.id, pts)}
          />
        )
      ) : (
        <>
        <HomeScreen
          cases={CASES}
          completed={role === 'ioa' ? ioaCompleted : completed}
          onSelect={(c) => {
            if (!isPremium && !FREE_CASES.includes(c.id)) {
              setShowUpgrade(true)
            } else {
              setActiveCase(c)
            }
          }}
          role={role}
          onChangeRole={() => setRole(null)}
          onDashboard={() => setShowDashboard(true)}
          onCalculateurs={() => setShowCalcs(true)}
          onSynthesis={(c) => setSynthCase(c)}
          bothCompleted={CASES.filter(c => completed.includes(c.id) && ioaCompleted.includes(c.id)).map(c => c.id)}
          isPremium={isPremium}
          freeCases={FREE_CASES}
        />
        {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
        </>
      )}
    </div>
  )
}
