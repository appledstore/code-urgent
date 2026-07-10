import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useTheme, ThemeToggle } from '../ThemeContext'

const DIFF = ['', '⭐', '⭐⭐', '⭐⭐⭐']

const SPECIALTY_COLORS = {
  "Cardio": "#EF4444", "Cardio-Pneumo": "#7C3AED", "Cardio-Chir": "#B91C1C",
  "Cardio-Réanimation": "#1D4ED8", "Cardio-Urgences": "#7E22CE",
  "Pneumo": "#0891B2", "Pneumo-Infectio": "#0369A1",
  "Neuro": "#0EA5E9", "Neuro-Urgences": "#7C3AED", "Neuro-Infectio": "#6366F1",
  "Urgences générales": "#F59E0B", "Réanimation": "#DC2626",
  "Gastro-Urgences": "#991B1B", "Chirurgie digestive": "#F97316",
  "Endocrinologie-Urgences": "#B45309", "Endocrino-Urgences": "#B45309",
  "Traumatologie": "#78716C", "Traumatologie-Neuro": "#1E40AF",
  "Urologie": "#0F766E", "Urologie-Urgences": "#059669",
  "Toxicologie": "#374151", "Infectio": "#6366F1",
}

const CIMU_COLORS = { 1: '#DC2626', 2: '#EA580C', 3: '#D97706', 4: '#16A34A', 5: '#6B7280' }
const CIMU_LABELS = { 1: 'CIMU 1', 2: 'CIMU 2', 3: 'CIMU 3', 4: 'CIMU 4', 5: 'CIMU 5' }

export default function HomeScreen({ cases, completed, onSelect, role, onChangeRole, onDashboard, onCalculateurs, onSynthesis, bothCompleted = [], isPremium = false, freeCases = [] }) {
  const { t } = useLang()
  const { isDark } = useTheme()
  const [filter, setFilter] = useState('Tous')
  const isIOA = role === 'ioa'
  const accentMain = isIOA ? '#3B82F6' : '#ef4444'
  const accentSecond = isIOA ? '#60a5fa' : '#f97316'

  // Build specialty list (médecin only — IOA shows all)
  const allLabel = t('all')
  const specialties = isIOA ? [] : [allLabel, ...Array.from(new Set(cases.map(c => c.specialty))).sort()]
  const visibleCases = isIOA || filter === allLabel ? cases : cases.filter(c => c.specialty === filter)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto', background: 'var(--bg)' }}>
      {/* Hero */}
      <div style={{
        padding: '20px 20px 18px',
        textAlign: 'center',
        background: 'var(--bg)',
        borderBottom: `1px solid ${isIOA ? 'var(--border-ioa)' : 'var(--border2)'}`
      }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <button onClick={onChangeRole} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', cursor: 'pointer', fontSize: 11,
            background: 'var(--bg3)',
            border: `1px solid ${isIOA ? 'var(--border-ioa)' : 'var(--border)'}`,
            borderRadius: 20, color: isIOA ? 'var(--blue2)' : 'var(--text2)'
          }}>
            {isIOA ? t('modeNurse') : t('modeDoctor')}
            <span style={{ color: 'var(--text4)' }}>{t('change')}</span>
          </button>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <ThemeToggle />
            <button onClick={onCalculateurs} style={{
              display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px',
              cursor: 'pointer', fontSize: 11, background: 'var(--bg3)',
              border: '1px solid var(--border)', borderRadius: 20, color: 'var(--text2)'
            }}>🧮</button>
            <button onClick={onDashboard} style={{
              display: 'flex', alignItems: 'center', gap: 4, padding: '5px 12px',
              cursor: 'pointer', fontSize: 11, background: 'var(--bg3)',
              border: '1px solid var(--border)', borderRadius: 20, color: 'var(--text2)'
            }}>{t('stats')}</button>
          </div>
        </div>

        <div style={{ fontSize: 40, marginBottom: 6 }}>🚨</div>
        <h1 style={{
          fontSize: 26, fontWeight: 800, letterSpacing: -0.5,
          background: `linear-gradient(135deg, ${accentMain}, ${accentSecond})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: 0, marginBottom: 6
        }}>Code Urgent</h1>
        <p style={{ fontSize: 13, color: '#9ca3af', maxWidth: 280, margin: '0 auto', lineHeight: 1.6 }}>
          {isIOA
            ? `${cases.length} ${t('patientsNurseDesc')}`
            : `${cases.length} ${t('patientsDoctorDesc')}`
          }
        </p>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 14, flexWrap: 'wrap' }}>
          {isIOA
            ? [['CIMU', t('cimuTag')], ['Orientation', t('orientTag')], ['Gestes', t('gestesTag')]].map(([v, l]) => (
              <div key={v} style={{ padding: '5px 10px', background: '#0d1b2e', borderRadius: 20, fontSize: 11, color: '#9ca3af', border: '1px solid #1e3a5f' }}>
                <span style={{ color: '#60a5fa', fontWeight: 700 }}>{v}</span> {l}
              </div>
            ))
            : [['ECG', t('ecgTag')], ['Physiopatho', t('physioTag')], ['DOI', t('doiTag')]].map(([v, l]) => (
              <div key={v} style={{ padding: '5px 10px', background: '#1f2937', borderRadius: 20, fontSize: 11, color: '#9ca3af' }}>
                <span style={{ color: '#f9fafb', fontWeight: 700 }}>{v}</span> {l}
              </div>
            ))
          }
        </div>
      </div>

      {/* Specialty filter — médecin only */}
      {!isIOA && specialties.length > 1 && (
        <div style={{ overflowX: 'auto', display: 'flex', gap: 6, padding: '10px 16px 0', flexShrink: 0 }}>
          {specialties.map(sp => (
            <button
              key={sp}
              onClick={() => setFilter(sp)}
              style={{
                whiteSpace: 'nowrap', padding: '5px 12px', borderRadius: 20, fontSize: 11,
                cursor: 'pointer', border: '1px solid',
                borderColor: filter === sp ? accentMain + '88' : '#374151',
                background: filter === sp ? accentMain + '18' : '#111827',
                color: filter === sp ? accentMain : '#6b7280',
                fontWeight: filter === sp ? 700 : 400, transition: 'all 0.15s'
              }}
            >{sp}</button>
          ))}
        </div>
      )}

      {/* Cases */}
      <div style={{ padding: '12px 16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 4 }}>
          {isIOA ? t('triagePost') : t('triageRoom')} — {visibleCases.length} {t('patients')}
          {!isIOA && filter !== allLabel && <span style={{ color: accentMain, marginLeft: 6 }}>· {filter}</span>}
        </div>
        {visibleCases.map((c, i) => {
          const done = completed.includes(c.id)
          const v = c.vignette || { headline: c.patient?.name, context: c.patient?.arriving, tags: [] }
          const accentColor = c.color || SPECIALTY_COLORS[c.specialty] || '#6b7280'
          const locked = !isPremium && !freeCases.includes(c.id)

          return (
            <button
              key={c.id}
              onClick={() => onSelect(c)}
              style={{
                width: '100%', textAlign: 'left', padding: 0,
                background: 'none', border: 'none', cursor: 'pointer',
                animation: `slideUp ${Math.min(0.1 + i * 0.05, 1)}s ease both`,
                opacity: locked ? 0.6 : 1
              }}
            >
              <div style={{
                background: 'var(--bg2)',
                border: `1px solid ${done ? (isIOA ? '#3B82F666' : accentColor + '66') : (isIOA ? 'var(--border-ioa)' : 'var(--border)')}`,
                borderRadius: 12, padding: '16px',
                transition: 'all 0.2s',
                position: 'relative', overflow: 'hidden',
                boxShadow: `0 1px 4px var(--shadow)`
              }}>
                {/* Color accent */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
                  background: isIOA ? '#3B82F6' : accentColor,
                  borderRadius: '12px 0 0 12px'
                }} />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, paddingLeft: 8 }}>
                  <div>
                    <div style={{ fontSize: 10, color: isIOA ? '#60a5fa' : accentColor, letterSpacing: 1, marginBottom: 2 }}>
                      {isIOA ? t('triageIoa') : c.specialty}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginRight: 10 }}>
                      {v.headline}
                    </div>
                  </div>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: done ? (isIOA ? '#3B82F6' : accentColor) : locked ? '#374151' : 'var(--bg3)',
                    border: `2px solid ${done ? (isIOA ? '#3B82F6' : accentColor) : locked ? '#4b5563' : (isIOA ? 'var(--border-ioa)' : 'var(--border)')}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: done ? 13 : locked ? 11 : 13
                  }}>
                    {done ? '✓' : locked ? '🔒' : i + 1}
                  </div>
                </div>

                {/* Context */}
                <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5, marginBottom: 10, paddingLeft: 8 }}>
                  {isIOA ? `${v.context}` : v.context}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingLeft: 8 }}>
                  {(v.tags || []).map(t => (
                    <span key={t} style={{
                      fontSize: 10, padding: '3px 8px',
                      background: (isIOA ? '#3B82F6' : accentColor) + '18',
                      color: isIOA ? '#60a5fa' : accentColor,
                      border: `1px solid ${(isIOA ? '#3B82F6' : accentColor)}33`,
                      borderRadius: 10
                    }}>{t}</span>
                  ))}
                  {!isIOA && (
                    <span style={{ fontSize: 10, padding: '3px 8px', background: '#1f2937', color: '#6b7280', borderRadius: 10 }}>
                      {DIFF[c.difficulty]}
                    </span>
                  )}
                </div>

                {/* Résolu */}
                {done && (
                  <div style={{ marginTop: 10, paddingLeft: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 11, color: isIOA ? '#60a5fa' : accentColor, fontWeight: 600 }}>
                      {isIOA ? t('triageCompleted') : `✓ ${c.title} — ${t('resolved')}`}
                    </div>
                    {bothCompleted.includes(c.id) && (
                      <button
                        onClick={(e) => { e.stopPropagation(); onSynthesis?.(c) }}
                        style={{
                          fontSize: 10, padding: '3px 8px', background: '#10b98118',
                          color: '#10b981', border: '1px solid #10b98133', borderRadius: 10,
                          cursor: 'pointer'
                        }}
                      >{t('synthesis')}</button>
                    )}
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer */}
      <div style={{ padding: '16px 20px', textAlign: 'center', borderTop: `1px solid ${isIOA ? '#1e3a5f' : '#1f2937'}`, marginTop: 'auto' }}>
        <div style={{ fontSize: 11, color: '#374151' }}>
          {t('sources')}
        </div>
      </div>
    </div>
  )
}
