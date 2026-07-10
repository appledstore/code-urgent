import { useState } from 'react'
import { useTheme, ThemeToggle } from '../ThemeContext'
import LegalModal from './LegalModal'

const FEATURES = [
  { icon: '🫀', title: 'ECG interactif', desc: '12 dérivations simulées avec lecture guidée et anomalies annotées.' },
  { icon: '🧠', title: 'Physiopathologie', desc: 'Cascade mécanistique illustrée pour comprendre, pas juste mémoriser.' },
  { icon: '🎯', title: 'Diagnostic différentiel', desc: 'Entraînement au raisonnement clinique avec scoring immédiat.' },
  { icon: '💊', title: 'Gestes thérapeutiques', desc: 'Protocoles étape par étape validés par les recommandations SFMU/ESC/HAS.' },
  { icon: '👩‍⚕️', title: 'Mode IOA', desc: 'Triage CIMU, orientation et gestes infirmiers — dédié aux infirmiers organisateurs.' },
  { icon: '📊', title: 'Suivi de progression', desc: 'Scores, statistiques et synthèse double équipe médecin + IOA.' },
]

const CASES_PREVIEW = [
  { title: 'Infarctus ST+', specialty: 'Cardio', color: '#ef4444', diff: '⭐⭐⭐' },
  { title: 'Embolie pulmonaire', specialty: 'Pneumo', color: '#0891B2', diff: '⭐⭐⭐' },
  { title: 'Choc septique', specialty: 'Réanimation', color: '#DC2626', diff: '⭐⭐⭐' },
  { title: 'AVC ischémique', specialty: 'Neuro', color: '#7C3AED', diff: '⭐⭐' },
  { title: 'GEU rompue', specialty: 'Gynéco', color: '#ec4899', diff: '⭐⭐⭐' },
  { title: 'Tamponnade', specialty: 'Cardio', color: '#1D4ED8', diff: '⭐⭐⭐' },
  { title: 'Méningite bactérienne', specialty: 'Neuro-Infectio', color: '#6366F1', diff: '⭐⭐⭐' },
  { title: 'BPCO exacerbation', specialty: 'Pneumo', color: '#0891B2', diff: '⭐⭐' },
  { title: '+ 42 cas cliniques', specialty: '', color: '#374151', diff: '' },
]

export default function LandingPage({ onStart }) {
  const { isDark } = useTheme()
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const [legalPage, setLegalPage] = useState(null)

  return (
    <div style={{ overflowY: 'auto', height: '100%', background: 'var(--bg)', color: 'var(--text)' }}>
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--bg)', borderBottom: '1px solid var(--border2)',
        backdropFilter: 'blur(12px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🚨</span>
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.5 }}>Code Urgent</span>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeToggle />
          <button onClick={onStart} style={{
            padding: '8px 18px', background: '#ef4444', color: '#fff',
            borderRadius: 20, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer'
          }}>Se connecter</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '60px 24px 48px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', padding: '4px 14px', borderRadius: 20,
          background: '#ef444418', border: '1px solid #ef444433',
          fontSize: 12, color: '#ef4444', fontWeight: 600, marginBottom: 20
        }}>
          🏥 Formation médicale aux urgences
        </div>

        <h1 style={{
          fontSize: 36, fontWeight: 900, letterSpacing: -1, lineHeight: 1.15,
          margin: '0 0 16px',
          background: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Entraînez-vous aux<br />urgences vitales
        </h1>

        <p style={{ fontSize: 15, color: 'var(--text2)', maxWidth: 340, margin: '0 auto 32px', lineHeight: 1.7 }}>
          50 cas cliniques immersifs — ECG, physiopathologie, diagnostic différentiel et gestes thérapeutiques. Pour médecins et infirmiers IOA.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <button onClick={onStart} style={{
            padding: '16px 40px', background: 'linear-gradient(135deg, #ef4444, #f97316)',
            color: '#fff', borderRadius: 14, fontWeight: 800, fontSize: 16,
            border: 'none', cursor: 'pointer', width: '100%', maxWidth: 320,
            boxShadow: '0 4px 24px #ef444444'
          }}>
            Commencer gratuitement →
          </button>
          <div style={{ fontSize: 12, color: 'var(--text3)' }}>3 cas gratuits · Sans carte bancaire</div>
        </div>

        {/* Social proof */}
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[['50', 'cas cliniques'], ['2', 'modes (Médecin + IOA)'], ['3', 'langues']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#ef4444' }}>{n}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cas preview */}
      <section style={{ padding: '0 16px 48px' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, textAlign: 'center', marginBottom: 16 }}>
          SPÉCIALITÉS COUVERTES
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {CASES_PREVIEW.map((c, i) => (
            <div key={i} style={{
              background: 'var(--bg2)', borderRadius: 10, padding: '12px 14px',
              border: `1px solid ${c.color}33`, position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: c.color, borderRadius: '10px 0 0 10px' }} />
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 2, paddingLeft: 6 }}>{c.title}</div>
              <div style={{ fontSize: 10, color: c.color || 'var(--text3)', paddingLeft: 6 }}>{c.specialty} {c.diff}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '0 16px 48px' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, textAlign: 'center', marginBottom: 20 }}>
          POURQUOI CODE URGENT ?
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: 'var(--bg2)', borderRadius: 12, padding: '16px',
              border: '1px solid var(--border)', display: 'flex', gap: 14, alignItems: 'flex-start'
            }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '0 16px 48px' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, textAlign: 'center', marginBottom: 20 }}>
          TARIFS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Free */}
          <div style={{
            background: 'var(--bg2)', borderRadius: 14, padding: 20,
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 4 }}>Freemium</div>
            <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Gratuit</div>
            {['3 cas cliniques', 'Mode Médecin + IOA', 'Accès illimité aux 3 cas'].map(f => (
              <div key={f} style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6, display: 'flex', gap: 8 }}>
                <span style={{ color: '#10b981' }}>✓</span> {f}
              </div>
            ))}
            <button onClick={onStart} style={{
              marginTop: 16, width: '100%', padding: '12px', background: 'var(--bg3)',
              color: 'var(--text)', borderRadius: 10, fontWeight: 600, fontSize: 14,
              border: '1px solid var(--border)', cursor: 'pointer'
            }}>Commencer gratuitement</button>
          </div>

          {/* Premium à vie */}
          <div style={{
            background: 'linear-gradient(135deg, #ef444411, #f9731611)',
            borderRadius: 14, padding: 20,
            border: '2px solid #ef444466', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: -10, right: 16,
              background: '#ef4444', color: '#fff', fontSize: 10, fontWeight: 700,
              padding: '3px 10px', borderRadius: 10
            }}>RECOMMANDÉ</div>
            <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 4 }}>Accès à vie</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#ef4444', marginBottom: 12 }}>39€ <span style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 400 }}>une fois</span></div>
            {['50 cas cliniques complets', 'Mises à jour incluses', 'Mode Médecin + IOA', 'Calculateurs cliniques', 'Progression synchronisée', 'Multi-appareils'].map(f => (
              <div key={f} style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6, display: 'flex', gap: 8 }}>
                <span style={{ color: '#ef4444' }}>✓</span> {f}
              </div>
            ))}
            <button onClick={onStart} style={{
              marginTop: 16, width: '100%', padding: '12px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14,
              border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px #ef444433'
            }}>Obtenir l'accès à vie</button>
          </div>

          {/* Annuel */}
          <div style={{
            background: 'var(--bg2)', borderRadius: 14, padding: 20,
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 4 }}>Abonnement annuel</div>
            <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 2 }}>29€ <span style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 400 }}>/an</span></div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 12 }}>Résiliable à tout moment</div>
            {['50 cas cliniques', 'Nouveaux cas en priorité', 'Mode Médecin + IOA'].map(f => (
              <div key={f} style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6, display: 'flex', gap: 8 }}>
                <span style={{ color: '#10b981' }}>✓</span> {f}
              </div>
            ))}
            <button onClick={onStart} style={{
              marginTop: 16, width: '100%', padding: '12px', background: 'var(--bg3)',
              color: 'var(--text)', borderRadius: 10, fontWeight: 600, fontSize: 14,
              border: '1px solid var(--border)', cursor: 'pointer'
            }}>S'abonner</button>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section style={{ padding: '0 16px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8 }}>Sources validées</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {['SFMU', 'ESC', 'HAS', 'Cochrane', 'SRLF', 'SPLF', 'SPILF'].map(s => (
            <span key={s} style={{
              fontSize: 11, padding: '3px 10px', background: 'var(--bg2)',
              border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text3)'
            }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '20px 24px', borderTop: '1px solid var(--border2)',
        textAlign: 'center', fontSize: 11, color: 'var(--text4)'
      }}>
        <div style={{ marginBottom: 8 }}>© 2026 Code Urgent — Dr [Nom] · Tous droits réservés</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          {['Mentions légales', 'CGU', 'CGV', 'Confidentialité'].map(l => (
            <span key={l} onClick={() => setLegalPage(l)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>{l}</span>
          ))}
        </div>
      </footer>

    </div>
  )
}
