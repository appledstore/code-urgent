import { CASES } from '../data/cases'

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

function RingChart({ pct, color, size = 64, label }) {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1f2937" strokeWidth={5} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={5}
            strokeDasharray={`${pct / 100 * circ} ${circ}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color }}>
          {pct}%
        </div>
      </div>
      {label && <div style={{ fontSize: 10, color: 'var(--text3)', textAlign: 'center' }}>{label}</div>}
    </div>
  )
}

function StatCard({ label, value, sub, color = 'var(--text)' }) {
  return (
    <div style={{ background: 'var(--bg)', borderRadius: 10, padding: '14px 12px', textAlign: 'center' }}>
      <div style={{ fontSize: 26, fontWeight: 800, color, fontFamily: 'monospace', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 4 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#4b5563', marginTop: 2 }}>{sub}</div>}
    </div>
  )
}

export default function Dashboard({ completed, ioaCompleted, scores, onBack }) {
  const total = CASES.length
  const medPct = Math.round((completed.length / total) * 100)
  const ioaPct = Math.round((ioaCompleted.length / total) * 100)
  const bothPct = Math.round((CASES.filter(c => completed.includes(c.id) && ioaCompleted.includes(c.id)).length / total) * 100)

  // Total score
  const maxMedScore = completed.length * 5
  const maxIoaScore = ioaCompleted.length * 4
  const earnedMed = Object.values(scores).reduce((s, v) => s + (v.medecin || 0), 0)
  const earnedIoa = Object.values(scores).reduce((s, v) => s + (v.ioa || 0), 0)

  // By specialty
  const bySpecialty = {}
  CASES.forEach(c => {
    if (!bySpecialty[c.specialty]) bySpecialty[c.specialty] = { total: 0, med: 0, ioa: 0 }
    bySpecialty[c.specialty].total++
    if (completed.includes(c.id)) bySpecialty[c.specialty].med++
    if (ioaCompleted.includes(c.id)) bySpecialty[c.specialty].ioa++
  })

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto', background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{ padding: '14px 16px', background: 'var(--bg2)', borderBottom: '1px solid #1f2937', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: 'var(--bg3)', color: 'var(--text2)', borderRadius: 6, padding: '6px 10px', fontSize: 12, border: '1px solid #374151', cursor: 'pointer' }}>←</button>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Tableau de bord</div>
          <div style={{ fontSize: 11, color: 'var(--text3)' }}>Progression & scores</div>
        </div>
      </div>

      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Rings */}
        <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 20 }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 16 }}>PROGRESSION GLOBALE</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <RingChart pct={medPct} color="#ef4444" size={80} label="Médecin" />
            <RingChart pct={ioaPct} color="#3B82F6" size={80} label="IOA" />
            <RingChart pct={bothPct} color="#10b981" size={80} label="Double\néquipe" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#ef4444' }}>{completed.length}<span style={{ fontSize: 11, color: 'var(--text3)' }}>/{total}</span></div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>cas médecin</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#3B82F6' }}>{ioaCompleted.length}<span style={{ fontSize: 11, color: 'var(--text3)' }}>/{total}</span></div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>cas IOA</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#10b981' }}>{CASES.filter(c => completed.includes(c.id) && ioaCompleted.includes(c.id)).length}<span style={{ fontSize: 11, color: 'var(--text3)' }}>/{total}</span></div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>double équipe</div>
            </div>
          </div>
        </div>

        {/* Scores */}
        <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 12 }}>PERFORMANCE (1er ESSAI)</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <StatCard label="Points médecin" value={earnedMed} sub={`/ ${maxMedScore} max`} color="#ef4444" />
            <StatCard label="Points IOA" value={earnedIoa} sub={`/ ${maxIoaScore} max`} color="#3B82F6" />
            <StatCard
              label="Taux 1er essai médecin"
              value={completed.length > 0 ? Math.round((earnedMed / Math.max(maxMedScore, 1)) * 100) + '%' : '—'}
              color="#f9fafb"
            />
            <StatCard
              label="Taux 1er essai IOA"
              value={ioaCompleted.length > 0 ? Math.round((earnedIoa / Math.max(maxIoaScore, 1)) * 100) + '%' : '—'}
              color="#f9fafb"
            />
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: '#4b5563', textAlign: 'center', lineHeight: 1.5 }}>
            Médecin : diag 1er essai = 3 pts · geste = 2 pts · max 5 pts/cas{'\n'}
            IOA : CIMU 1er essai = 2 pts · orientation = 2 pts · max 4 pts/cas
          </div>
        </div>

        {/* By specialty */}
        <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 12 }}>PAR SPÉCIALITÉ</div>
          {Object.entries(bySpecialty).map(([spec, data]) => {
            const c = SPECIALTY_COLORS[spec] || 'var(--text3)'
            const medDone = data.med
            const ioaDone = data.ioa
            const t = data.total
            return (
              <div key={spec} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontSize: 11, color: c }}>{spec}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>
                    <span style={{ color: '#ef4444' }}>{medDone}</span>
                    <span style={{ color: '#4b5563' }}>/</span>
                    <span style={{ color: '#3B82F6' }}>{ioaDone}</span>
                    <span style={{ color: '#4b5563' }}>/{t}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 3, height: 6 }}>
                  {Array.from({ length: t }).map((_, i) => {
                    const bothDone = i < Math.min(medDone, ioaDone)
                    const anyDone = i < Math.max(medDone, ioaDone)
                    return (
                      <div key={i} style={{
                        flex: 1, borderRadius: 3,
                        background: bothDone ? c : anyDone ? c + '66' : 'var(--bg3)'
                      }} />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Case list */}
        {(completed.length > 0 || ioaCompleted.length > 0) && (
          <div style={{ background: 'var(--bg2)', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 12 }}>DÉTAIL PAR CAS</div>
            {CASES.filter(c => completed.includes(c.id) || ioaCompleted.includes(c.id)).map((c, i) => {
              const s = scores[c.id] || {}
              const medDone = completed.includes(c.id)
              const ioaDone = ioaCompleted.includes(c.id)
              return (
                <div key={c.id} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 0', borderBottom: '1px solid #1f2937'
                }}>
                  <div style={{ width: 4, height: 28, borderRadius: 2, background: c.color || 'var(--text3)', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{c.title}</div>
                    <div style={{ fontSize: 10, color: 'var(--text3)' }}>{c.specialty}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {medDone && (
                      <div style={{ padding: '2px 8px', background: '#ef444418', color: '#ef4444', borderRadius: 10, fontSize: 10 }}>
                        🩺 {s.medecin ?? '?'}/5
                      </div>
                    )}
                    {ioaDone && (
                      <div style={{ padding: '2px 8px', background: '#3B82F618', color: '#60a5fa', borderRadius: 10, fontSize: 10 }}>
                        👩‍⚕️ {s.ioa ?? '?'}/4
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {completed.length === 0 && ioaCompleted.length === 0 && (
          <div style={{ textAlign: 'center', padding: 32, color: '#4b5563' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📊</div>
            <div style={{ fontSize: 13 }}>Aucun cas complété pour l'instant.</div>
            <div style={{ fontSize: 11, marginTop: 6 }}>Commencez un cas pour voir vos statistiques.</div>
          </div>
        )}

      </div>
    </div>
  )
}
