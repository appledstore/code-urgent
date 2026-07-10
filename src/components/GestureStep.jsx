import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function GestureStep({ gestures, color, onComplete }) {
  const { t } = useLang()
  const [selected, setSelected] = useState(null)
  const [expanded, setExpanded] = useState(null)
  const [attempts, setAttempts] = useState(0)

  const handleSelect = (g) => {
    if (selected) return
    const attempt = attempts + 1
    setAttempts(attempt)
    setSelected(g)
    if (g.correct) setExpanded(g.id)
  }

  const correctGestures = gestures.filter(g => g.correct)
  const wrongGestures = gestures.filter(g => !g.correct)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 13, color: 'var(--text2)' }}>
        {t('gestureQuestion')}
      </div>

      {/* Bonnes réponses */}
      {gestures.map((g, i) => {
        const isSelected = selected?.id === g.id
        const showResult = !!selected

        let bg = 'var(--bg2)', border = 'var(--border)'
        if (showResult && g.correct) { bg = '#10b98111'; border = '#10b981' }
        if (showResult && !g.correct && isSelected) { bg = '#ef444411'; border = '#ef4444' }
        if (showResult && !g.correct && !isSelected) { bg = 'var(--bg)'; border = 'var(--bg3)' }

        return (
          <div key={g.id}>
            <button
              onClick={() => handleSelect(g)}
              disabled={!!selected}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 16px',
                background: bg, border: `1px solid ${border}`, borderRadius: 8,
                color: showResult && !g.correct ? 'var(--text3)' : 'var(--text)',
                fontSize: 13, cursor: selected ? 'default' : 'pointer',
                transition: 'all 0.3s', display: 'flex', gap: 10, alignItems: 'flex-start'
              }}
            >
              <span style={{ fontSize: 18, flexShrink: 0 }}>
                {showResult ? (g.correct ? '✅' : '❌') : '⬜'}
              </span>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 2 }}>{g.name}</div>
                {showResult && (
                  <div style={{ fontSize: 12, color: 'var(--text2)', animation: 'fadeIn 0.3s ease' }}>
                    {g.description}
                  </div>
                )}
              </div>
            </button>

            {/* Steps détaillés si correct + sélectionné */}
            {selected?.id === g.id && g.correct && g.steps && (
              <div style={{
                background: '#10b98111', border: '1px solid #10b98133',
                borderTop: 'none', borderRadius: '0 0 8px 8px',
                padding: '12px 16px', animation: 'slideUp 0.4s ease'
              }}>
                <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600, marginBottom: 8 }}>
                  {t('protocolSteps')}
                </div>
                {g.steps.map((step, si) => (
                  <div key={si} style={{
                    display: 'flex', gap: 8, marginBottom: 6, fontSize: 12, color: '#d1fae5',
                    animation: `fadeIn ${0.2 + si * 0.1}s ease both`
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%', background: '#10b98133',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, color: '#10b981', fontWeight: 700, flexShrink: 0
                    }}>{si + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}

      {selected && selected.correct && (
        <button
          onClick={() => onComplete?.(attempts === 1 ? 2 : 1)}
          style={{
            marginTop: 4, padding: '12px 20px', background: color,
            color: '#fff', borderRadius: 8, fontWeight: 600, fontSize: 13,
            animation: 'fadeIn 0.5s ease', border: 'none', cursor: 'pointer'
          }}
        >
          {t('gestureCta')}
        </button>
      )}
    </div>
  )
}
