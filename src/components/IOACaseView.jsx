import { useState, useEffect } from 'react'
import { CASES } from '../data/cases'
import { IOA_DATA } from '../data/ioaData'
import VitalsMonitor from './VitalsMonitor'

const STEPS = ['Accueil', 'Bilan IOA', 'Classification', 'Orientation']

const CIMU_COLORS = {
  1: '#DC2626',
  2: '#EA580C',
  3: '#D97706',
  4: '#16A34A',
  5: '#6B7280',
}

const CIMU_LABELS = {
  1: 'DÉTRESSE VITALE',
  2: 'POTENTIEL GRAVE',
  3: 'URGENCE RELATIVE',
  4: 'URGENCE DIFFÉRABLE',
  5: 'NON URGENT',
}

export default function IOACaseView({ caseData, onBack, onComplete }) {
  const [step, setStep] = useState(0)
  const [cimuSelected, setCimuSelected] = useState(null)
  const [cimuValidated, setCimuValidated] = useState(false)
  const [orientSelected, setOrientSelected] = useState(null)
  const [orientValidated, setOrientValidated] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [scorePoints, setScorePoints] = useState(0)
  const [elapsed, setElapsed] = useState(0)

  const ioa = IOA_DATA[caseData.id]
  const { color, patient, vitals } = caseData
  const caseNum = CASES.findIndex(c => c.id === caseData.id) + 1
  const isCimu1 = ioa?.cimu === 1

  // Timer — urgent for CIMU 1 cases
  useEffect(() => {
    const id = setInterval(() => setElapsed(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const timerStr = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`
  const timerColor = isCimu1
    ? elapsed > 180 ? '#ef4444' : elapsed > 90 ? '#f59e0b' : '#10b981'
    : '#10b981'

  const advance = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1)
  }

  const handleCimuSelect = (opt) => {
    if (cimuValidated) return
    setCimuSelected(opt)
    setCimuValidated(true)
    if (opt.correct) {
      setScorePoints(p => p + 2)
      setTimeout(() => advance(), 1400)
    }
  }

  const handleOrientSelect = (opt) => {
    if (orientValidated) return
    setOrientSelected(opt)
    setOrientValidated(true)
    if (opt.correct) {
      setScorePoints(p => p + 2)
      setTimeout(() => setCompleted(true), 1400)
    }
  }

  if (!ioa) return (
    <div style={{ padding: 32, color: '#9ca3af', textAlign: 'center' }}>
      Données IOA non disponibles pour ce cas.
      <button onClick={onBack} style={{ display: 'block', margin: '16px auto', padding: '10px 20px', background: '#1f2937', color: '#f9fafb', border: 'none', borderRadius: 8, cursor: 'pointer' }}>← Retour</button>
    </div>
  )

  const renderStep = () => {
    switch (step) {
      case 0: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          {/* Badge IOA */}
          <div style={{ background: '#0d1b2e', border: '1px solid #1e3a5f', borderRadius: 12, padding: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: 2, marginBottom: 6 }}>POSTE IOA — ACCUEIL DES URGENCES</div>
            <div style={{ fontSize: 13, color: '#93c5fd' }}>Infirmier Organisateur de l'Accueil</div>
          </div>

          {/* Ce que dit le patient */}
          <div style={{ background: '#111827', borderRadius: 12, padding: 16, border: `1px solid ${color}33` }}>
            <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 10 }}>MOTIF DE VENUE — PAROLES DU PATIENT</div>
            <div style={{
              fontSize: 15, color: '#f9fafb', lineHeight: 1.7, fontStyle: 'italic',
              padding: '12px 16px', background: color + '0d', borderRadius: 8,
              borderLeft: `3px solid ${color}`
            }}>
              {ioa.motif}
            </div>
          </div>

          {/* Premier coup d'œil */}
          <div style={{ background: '#111827', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 10 }}>PREMIER COUP D'ŒIL — ÉVALUATION VISUELLE</div>
            <div style={{ fontSize: 13, color: '#d1d5db', lineHeight: 1.7 }}>
              👁 {ioa.apparence}
            </div>
          </div>

          {/* Info patient */}
          <div style={{ background: '#111827', borderRadius: 12, padding: 16 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: color + '22', border: `2px solid ${color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0
              }}>
                {patient.sex === 'F' ? '👩' : '👨'}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f9fafb' }}>{patient.name}</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>{patient.age} ans — {patient.sex === 'F' ? 'Femme' : 'Homme'}</div>
                <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{patient.context}</div>
              </div>
            </div>
          </div>

          <button onClick={advance} style={{
            padding: '14px', background: '#3B82F6', color: '#fff', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
          }}>
            Prendre les constantes →
          </button>
        </div>
      )

      case 1: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          <div style={{ background: '#0d1b2e', border: '1px solid #1e3a5f', borderRadius: 12, padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: 2 }}>BILAN IOA — CONSTANTES VITALES</div>
          </div>

          <VitalsMonitor vitals={vitals} color={color} />

          {/* Rappel motif */}
          <div style={{ background: '#111827', borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>RAPPEL MOTIF</div>
            <div style={{ fontSize: 12, color: '#d1d5db', fontStyle: 'italic', lineHeight: 1.6 }}>{ioa.motif}</div>
          </div>

          {/* Grille CIMU rappel */}
          <div style={{ background: '#111827', borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 10 }}>ÉCHELLE CIMU — RAPPEL</div>
            {[1,2,3,4,5].map(n => (
              <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%', background: CIMU_COLORS[n],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0
                }}>{n}</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>{CIMU_LABELS[n]}</div>
              </div>
            ))}
          </div>

          <button onClick={advance} style={{
            padding: '14px', background: '#3B82F6', color: '#fff', borderRadius: 10,
            fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
          }}>
            Classer ce patient →
          </button>
        </div>
      )

      case 2: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          <div style={{ background: '#0d1b2e', border: '1px solid #1e3a5f', borderRadius: 12, padding: 12, textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: 2, marginBottom: 4 }}>CLASSIFICATION CIMU</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>Quel niveau de priorité attribuez-vous à ce patient ?</div>
          </div>

          {ioa.cimuOptions.map((opt, i) => {
            const isSelected = cimuSelected === opt
            const isCorrect = opt.correct
            let borderColor = '#374151'
            let bg = '#111827'
            if (cimuValidated && isSelected && isCorrect) { borderColor = '#16a34a'; bg = '#16a34a11' }
            if (cimuValidated && isSelected && !isCorrect) { borderColor = '#dc2626'; bg = '#dc262611' }
            if (cimuValidated && !isSelected && isCorrect) { borderColor = '#16a34a55'; bg = '#16a34a08' }

            return (
              <button key={i} onClick={() => handleCimuSelect(opt)} disabled={cimuValidated} style={{
                width: '100%', textAlign: 'left', padding: 0, background: 'none', border: 'none', cursor: cimuValidated ? 'default' : 'pointer'
              }}>
                <div style={{
                  background: bg, border: `2px solid ${borderColor}`, borderRadius: 12, padding: '14px 16px',
                  transition: 'all 0.2s', display: 'flex', gap: 12, alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: CIMU_COLORS[opt.level],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0, marginTop: 1
                  }}>{opt.level}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#f9fafb', marginBottom: 2 }}>{opt.label}</div>
                    {cimuValidated && isSelected && (
                      <div style={{ fontSize: 12, color: isCorrect ? '#86efac' : '#fca5a5', marginTop: 4, lineHeight: 1.5 }}>
                        {isCorrect ? '✓ ' : '✗ '}{opt.explanation}
                      </div>
                    )}
                    {cimuValidated && !isSelected && isCorrect && (
                      <div style={{ fontSize: 12, color: '#86efac', marginTop: 4, lineHeight: 1.5 }}>
                        ✓ Bonne réponse : {opt.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            )
          })}

          {cimuValidated && !cimuSelected?.correct && (
            <button onClick={advance} style={{
              padding: '14px', background: '#3B82F6', color: '#fff', borderRadius: 10,
              fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
            }}>
              Continuer →
            </button>
          )}
        </div>
      )

      case 3: return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
          {!completed ? (
            <>
              <div style={{ background: '#0d1b2e', border: '1px solid #1e3a5f', borderRadius: 12, padding: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: 2, marginBottom: 4 }}>ORIENTATION DU PATIENT</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>Où orientez-vous ce patient ?</div>
              </div>

              {ioa.orientationOptions.map((opt, i) => {
                const isSelected = orientSelected === opt
                const isCorrect = opt.correct
                let borderColor = '#374151'
                let bg = '#111827'
                if (orientValidated && isSelected && isCorrect) { borderColor = '#16a34a'; bg = '#16a34a11' }
                if (orientValidated && isSelected && !isCorrect) { borderColor = '#dc2626'; bg = '#dc262611' }
                if (orientValidated && !isSelected && isCorrect) { borderColor = '#16a34a55'; bg = '#16a34a08' }

                const icons = { 'SAUV': '🚨', 'Déchocage': '⚡', 'Box soins urgents': '🏥', 'Salle d\'attente': '⏳' }

                return (
                  <button key={i} onClick={() => handleOrientSelect(opt)} disabled={orientValidated} style={{
                    width: '100%', textAlign: 'left', padding: 0, background: 'none', border: 'none', cursor: orientValidated ? 'default' : 'pointer'
                  }}>
                    <div style={{
                      background: bg, border: `2px solid ${borderColor}`, borderRadius: 12, padding: '14px 16px',
                      transition: 'all 0.2s', display: 'flex', gap: 12, alignItems: 'flex-start'
                    }}>
                      <div style={{ fontSize: 20, flexShrink: 0 }}>{icons[opt.label] || '📍'}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#f9fafb', marginBottom: 2 }}>{opt.label}</div>
                        {orientValidated && (isSelected || isCorrect) && (
                          <div style={{ fontSize: 12, color: (isSelected && isCorrect) || (!isSelected && isCorrect) ? '#86efac' : '#fca5a5', marginTop: 4, lineHeight: 1.5 }}>
                            {isCorrect ? '✓ ' : '✗ '}{opt.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}

              {orientValidated && !orientSelected?.correct && (
                <button onClick={() => setCompleted(true)} style={{
                  padding: '14px', background: '#3B82F6', color: '#fff', borderRadius: 10,
                  fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer'
                }}>
                  Voir les gestes IOA →
                </button>
              )}
            </>
          ) : (
            // Résumé final IOA
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="fadeIn">
              {/* Gestes IOA */}
              <div style={{ background: '#111827', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: 1, marginBottom: 12 }}>⚡ GESTES IOA IMMÉDIATS</div>
                {ioa.gesturesIOA.map((g, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#d1d5db',
                    padding: '8px 12px', background: '#0a0f1e', borderRadius: 8
                  }}>
                    <span style={{ color: '#60a5fa', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    {g}
                  </div>
                ))}
              </div>

              {/* Lien médecin */}
              <div style={{ background: '#111827', borderRadius: 12, padding: 16, border: '1px solid #1e3a5f' }}>
                <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>🩺 CE QU'A TROUVÉ LE MÉDECIN</div>
                <div style={{ fontSize: 13, color: '#93c5fd', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {ioa.lienMedecin}
                </div>
              </div>

              {/* Score */}
              <div style={{
                background: 'linear-gradient(135deg, #1e3a5f22, #111827)',
                border: '1px solid #3B82F6',
                borderRadius: 12, padding: 20, textAlign: 'center'
              }}>
                <div style={{ fontSize: 40 }}>👩‍⚕️</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#60a5fa', marginTop: 8 }}>Triage IOA complété !</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: '#60a5fa', fontFamily: 'monospace' }}>{scorePoints}</div>
                  <div style={{ fontSize: 13, color: '#9ca3af' }}>/ 4 pts</div>
                </div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
                  CIMU {ioa.cimu} — {ioa.orientation} — ⏱ {timerStr}
                </div>
                {scorePoints === 4 && <div style={{ fontSize: 11, color: '#10b981', marginTop: 4 }}>⭐ Triage parfait au 1er essai !</div>}
              </div>

              <button onClick={() => { onComplete?.(scorePoints); onBack() }} style={{
                padding: '14px', background: '#1f2937', color: '#f9fafb', borderRadius: 10,
                fontWeight: 600, fontSize: 14, border: '1px solid #374151', cursor: 'pointer'
              }}>
                ← Retour au triage
              </button>
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        background: '#0d1b2e',
        borderBottom: '1px solid #1e3a5f',
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0
      }}>
        <button onClick={onBack} style={{
          background: '#1f2937', color: '#9ca3af', borderRadius: 6,
          padding: '6px 10px', fontSize: 12, border: '1px solid #374151', cursor: 'pointer'
        }}>←</button>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#60a5fa' }}>
            Cas n°{caseNum} — Triage IOA
          </div>
          <div style={{ fontSize: 11, color: '#6b7280' }}>Classification CIMU en cours…</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          {isCimu1 && (
            <div style={{
              padding: '4px 10px', borderRadius: 20, fontSize: 11,
              fontFamily: 'monospace', fontWeight: 700,
              background: timerColor + '22', color: timerColor,
              border: `1px solid ${timerColor}44`,
              animation: elapsed > 180 ? 'blink 1s infinite' : 'none'
            }}>⏱ {timerStr}</div>
          )}
          <div style={{
            padding: '4px 10px', background: '#1e3a5f', borderRadius: 20,
            fontSize: 10, color: '#93c5fd', letterSpacing: 1
          }}>MODE IOA</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: '#1e3a5f', flexShrink: 0 }}>
        <div style={{
          height: '100%', background: '#3B82F6',
          width: `${(step / (STEPS.length - 1)) * 100}%`,
          transition: 'width 0.5s ease'
        }} />
      </div>

      {/* Steps nav */}
      <div style={{
        display: 'flex', gap: 0, overflowX: 'auto',
        borderBottom: '1px solid #1e3a5f', flexShrink: 0,
        background: '#0a0f1e'
      }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{
            padding: '8px 12px', fontSize: 11, whiteSpace: 'nowrap',
            color: i === step ? '#60a5fa' : i < step ? '#6b7280' : '#1e3a5f',
            borderBottom: i === step ? '2px solid #3B82F6' : '2px solid transparent',
            fontWeight: i === step ? 600 : 400,
            transition: 'all 0.2s'
          }}>
            {i < step ? '✓ ' : ''}{s}
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
