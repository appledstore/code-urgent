import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { useTheme } from '../ThemeContext'
import { CASES } from '../data/cases'
import { CASE_CALCULATOR_MAP } from '../data/calculators'
import ECGDisplay from './ECGDisplay'
import VitalsMonitor from './VitalsMonitor'
import PhysioStep from './PhysioStep'
import DiagStep from './DiagStep'
import GestureStep from './GestureStep'
import ScoreCalculator from './ScoreCalculator'

export default function CaseView({ caseData, onBack, onComplete }) {
  const { t } = useLang()
  const { isDark } = useTheme()
  const STEPS = t('steps')
  const [step, setStep] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [diagRevealed, setDiagRevealed] = useState(false)
  const [scorePoints, setScorePoints] = useState(0)
  const { color, patient, vitals, symptoms, ecg, physiopathology, dd, gestures, keyPoints, sourcesFull } = caseData
  const calcIds = CASE_CALCULATOR_MAP[caseData.id] || []

  const canAdvance = () => {
    if (step === 0) return true
    if (step === 1) return true
    if (step === 2) return true
    return false
  }

  const advance = () => { if (step < STEPS.length - 1) setStep(s => s + 1) }

  const renderStep = () => {
    switch (step) {
      case 0: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          {/* Patient card */}
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16, border: `1px solid ${color}44` }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: color + '22', border: `2px solid ${color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22
              }}>
                {patient.sex === 'F' ? '👩' : '👨'}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{patient.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text2)' }}>{patient.age} ans — {patient.sex === 'F' ? 'Femme' : 'Homme'}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 8 }}>
              <span style={{ color: 'var(--text3)', fontSize: 11 }}>{t('context')}</span><br />
              {patient.context}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6, padding: '10px 14px', background: color + '11', borderRadius: 8, borderLeft: `3px solid ${color}` }}>
              {patient.arriving}
            </div>
          </div>

          {/* Vitals */}
          <VitalsMonitor vitals={vitals} color={color} />

          {/* Symptoms */}
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 10 }}>{t('clinicalPicture')}</div>
            {symptoms.map((s, i) => (
              <div key={i} style={{
                display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: '#d1d5db',
                animation: `fadeIn ${0.2 + i * 0.08}s ease both`
              }}>
                <span style={{ color, flexShrink: 0 }}>•</span>
                {s}
              </div>
            ))}
          </div>

          <button onClick={advance} style={{
            padding: '14px', background: color, color: '#fff', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
          }}>
            {t('seeECG')}
          </button>
        </div>
      )

      case 1: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          <ECGDisplay caseId={caseData.id} color={color} />
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 10 }}>{t('ecgReading')}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
              {[
                { l: 'Rythme', v: ecg.rythme },
                { l: 'FC', v: `${ecg.fc} bpm` },
                { l: 'PR', v: ecg.pr ? `${ecg.pr} ms` : 'N/A' },
                { l: 'QRS', v: `${ecg.qrs} ms` },
                { l: 'QT', v: `${ecg.qt} ms` },
              ].map(({ l, v }) => (
                <div key={l} style={{ background: 'var(--bg)', borderRadius: 6, padding: '8px 10px' }}>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 2 }}>{l}</div>
                  <div style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'monospace' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 8 }}>
              {ecg.description}
            </div>
            {ecg.anomalies.length > 0 && (
              <div style={{ background: color + '11', borderRadius: 8, padding: '10px 14px' }}>
                <div style={{ fontSize: 11, color, marginBottom: 6 }}>{t('anomalies')}</div>
                {ecg.anomalies.map((a, i) => (
                  <div key={i} style={{ fontSize: 12, color: '#fbbf24', marginBottom: 3 }}>• {a}</div>
                ))}
              </div>
            )}
          </div>
          <button onClick={advance} style={{
            padding: '14px', background: color, color: '#fff', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
          }}>
            {t('seePhysio')}
          </button>
        </div>
      )

      case 2: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <PhysioStep physiopathology={physiopathology} color={color} />
          </div>
          <button onClick={advance} style={{
            padding: '14px', background: color, color: '#fff', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
          }}>
            {t('makeDiag')}
          </button>
        </div>
      )

      case 3: return (
        <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }} className="fadeIn">
          <DiagStep dd={dd} color={color} onComplete={(pts) => { setDiagRevealed(true); setScorePoints(p => p + pts); advance() }} />
        </div>
      )

      case 4: return (
        <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }} className="fadeIn">
          <GestureStep gestures={gestures} color={color} onComplete={(pts) => { setScorePoints(p => p + pts); advance() }} />
        </div>
      )

      case 5: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          {/* Key points */}
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 12 }}>{t('keyPoints')}</div>
            {keyPoints.map((p, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, marginBottom: 10, fontSize: 13, color: '#d1d5db',
                padding: '10px 14px', background: color + '0d', borderRadius: 8,
                borderLeft: `3px solid ${color}`
              }}>
                <span style={{ color, flexShrink: 0, fontWeight: 700 }}>{i + 1}</span>
                {p}
              </div>
            ))}
          </div>

          {/* Clinical calculators */}
          {calcIds.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, paddingLeft: 4 }}>{t('clinicalScores')}</div>
              {calcIds.map(id => <ScoreCalculator key={id} calcId={id} color={color} />)}
            </div>
          )}

          {/* Sources */}
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 10 }}>{t('validatedSources')}</div>
            {sourcesFull.map((s, i) => (
              <div key={i} style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6, lineHeight: 1.5, padding: '6px 0', borderBottom: '1px solid #1f2937' }}>
                {s}
              </div>
            ))}
          </div>

          {/* Score */}
          <div style={{
            background: `linear-gradient(135deg, ${color}22, #111827)`,
            border: `1px solid ${color}`,
            borderRadius: 12, padding: 20, textAlign: 'center'
          }}>
            <div style={{ fontSize: 40 }}>🎉</div>
            <div style={{ fontSize: 18, fontWeight: 700, color, marginTop: 8 }}>{t('caseCompleted')}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color, fontFamily: 'monospace' }}>{scorePoints}</div>
              <div style={{ fontSize: 13, color: 'var(--text2)' }}>{t('pts5')}</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
              {scorePoints === 5 ? t('perfectFirst') : scorePoints >= 3 ? t('goodDiag') : t('keepTraining')}
            </div>
          </div>

          <button onClick={() => { onComplete?.(scorePoints); onBack() }} style={{
            padding: '14px', background: 'var(--bg3)', color: 'var(--text)', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: '1px solid #374151', cursor: 'pointer'
          }}>
            {t('backToCases')}
          </button>
        </div>
      )
    }
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: 'var(--bg2)',
        borderBottom: '1px solid #1f2937',
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0
      }}>
        <button onClick={onBack} style={{
          background: 'var(--bg3)', color: 'var(--text2)', borderRadius: 6,
          padding: '6px 10px', fontSize: 12, border: '1px solid #374151'
        }}>←</button>
        <div>
          {diagRevealed ? (
            <>
              <div style={{ fontSize: 14, fontWeight: 700, color, animation: 'fadeIn 0.4s ease' }}>{caseData.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>{caseData.subtitle}</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{t('caseN')}{CASES.findIndex(c => c.id === caseData.id) + 1}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>{t('diagPending')}</div>
            </>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: 'var(--bg3)', flexShrink: 0 }}>
        <div style={{
          height: '100%', background: color,
          width: `${((step) / (STEPS.length - 1)) * 100}%`,
          transition: 'width 0.5s ease'
        }} />
      </div>

      {/* Steps nav */}
      <div style={{
        display: 'flex', gap: 0, overflowX: 'auto',
        borderBottom: '1px solid #1f2937', flexShrink: 0
      }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{
            padding: '8px 12px', fontSize: 11, whiteSpace: 'nowrap',
            color: i === step ? color : i < step ? 'var(--text3)' : 'var(--border)',
            borderBottom: i === step ? `2px solid ${color}` : '2px solid transparent',
            fontWeight: i === step ? 600 : 400,
            transition: 'all 0.2s'
          }}>
            {(i < step || (i === step && step === STEPS.length - 1)) ? '✓ ' : ''}{s}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {renderStep()}
      </div>
    </div>
  )
}
