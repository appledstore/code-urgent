import { useState } from 'react'
import { CALCULATORS } from '../data/calculators'

function GlasgowCalculator({ calc, color }) {
  const [yeux, setYeux] = useState(4)
  const [verbale, setVerbale] = useState(5)
  const [motrice, setMotrice] = useState(6)
  const total = yeux + verbale + motrice
  const interp = calc.interpret(total)

  const SubScore = ({ label, options, value, onChange }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1, marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {options.map(opt => (
          <button key={opt.val} onClick={() => onChange(opt.val)} style={{
            padding: '8px 12px', textAlign: 'left', border: 'none', cursor: 'pointer',
            borderRadius: 6, fontSize: 12, transition: 'all 0.15s',
            background: value === opt.val ? color + '22' : 'var(--bg)',
            color: value === opt.val ? 'var(--text)' : 'var(--text3)',
            borderLeft: `3px solid ${value === opt.val ? color : 'transparent'}`,
          }}>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
        {[
          { label: 'Yeux (Y)', val: yeux, max: 4 },
          { label: 'Verbale (V)', val: verbale, max: 5 },
          { label: 'Motrice (M)', val: motrice, max: 6 },
        ].map(({ label, val, max }) => (
          <div key={label} style={{ background: 'var(--bg)', borderRadius: 8, padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color, fontFamily: 'monospace' }}>{val}</div>
            <div style={{ fontSize: 10, color: '#4b5563' }}>/{max}</div>
          </div>
        ))}
      </div>

      <SubScore label="OUVERTURE DES YEUX" options={calc.yeux} value={yeux} onChange={setYeux} />
      <SubScore label="RÉPONSE VERBALE" options={calc.verbale} value={verbale} onChange={setVerbale} />
      <SubScore label="RÉPONSE MOTRICE" options={calc.motrice} value={motrice} onChange={setMotrice} />

      <div style={{
        background: interp.color + '15', border: `1px solid ${interp.color}44`,
        borderRadius: 10, padding: 14, marginTop: 8
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{
            fontSize: 26, fontWeight: 800, color: interp.color, fontFamily: 'monospace',
            minWidth: 48, textAlign: 'center'
          }}>{total}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: interp.color }}>{interp.label}</div>
            <div style={{ fontSize: 10, color: 'var(--text3)' }}>Y{yeux}+V{verbale}+M{motrice} = {total}/15</div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5 }}>{interp.reco}</div>
      </div>
    </div>
  )
}

function ChecklistCalculator({ calc, color }) {
  const [checked, setChecked] = useState(() => {
    const init = {}
    calc.criteria.forEach(c => { init[c.key] = calc.prefill?.[c.key] || false })
    return init
  })

  const toggle = (key) => setChecked(p => ({ ...p, [key]: !p[key] }))
  const score = calc.criteria.reduce((sum, c) => sum + (checked[c.key] ? c.points : 0), 0)
  const interp = calc.interpret(score)

  return (
    <div>
      {/* Score display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14, padding: '12px 14px', background: 'var(--bg)', borderRadius: 10 }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: interp.color, fontFamily: 'monospace', minWidth: 50, textAlign: 'center', lineHeight: 1 }}>
          {score}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: interp.color }}>{interp.label}</div>
          <div style={{ fontSize: 11, color: 'var(--text3)' }}>/ {calc.maxScore} pts</div>
        </div>
        <div style={{ width: 60, height: 60, position: 'relative' }}>
          <svg width="60" height="60" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="30" cy="30" r="24" fill="none" stroke="#1f2937" strokeWidth="5" />
            <circle cx="30" cy="30" r="24" fill="none" stroke={interp.color} strokeWidth="5"
              strokeDasharray={`${(score / calc.maxScore) * 150.8} 150.8`}
              style={{ transition: 'stroke-dasharray 0.4s ease' }}
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: interp.color, fontWeight: 700 }}>
            {Math.round((score / calc.maxScore) * 100)}%
          </div>
        </div>
      </div>

      {/* Criteria */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
        {calc.criteria.map(c => (
          <button key={c.key} onClick={() => toggle(c.key)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 12px', border: 'none', cursor: 'pointer',
            borderRadius: 8, textAlign: 'left', transition: 'all 0.15s',
            background: checked[c.key] ? color + '18' : 'var(--bg)',
            borderLeft: `3px solid ${checked[c.key] ? color : 'var(--border)'}`,
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: 4, flexShrink: 0,
              background: checked[c.key] ? color : 'var(--bg3)',
              border: `2px solid ${checked[c.key] ? color : 'var(--border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, color: '#fff', transition: 'all 0.15s'
            }}>
              {checked[c.key] ? '✓' : ''}
            </div>
            <div style={{ flex: 1, fontSize: 12, color: checked[c.key] ? 'var(--text)' : 'var(--text2)', lineHeight: 1.4 }}>
              {c.label}
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: checked[c.key] ? color : 'var(--border)', fontFamily: 'monospace', minWidth: 24, textAlign: 'right' }}>
              +{c.points}
            </div>
          </button>
        ))}
      </div>

      {/* Interpretation */}
      <div style={{
        background: interp.color + '15', border: `1px solid ${interp.color}44`,
        borderRadius: 10, padding: 14
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: interp.color, marginBottom: 6 }}>
          → Conduite à tenir
        </div>
        <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>{interp.reco}</div>
      </div>
    </div>
  )
}

export default function ScoreCalculator({ calcId, color }) {
  const [open, setOpen] = useState(false)
  const calc = CALCULATORS[calcId]
  if (!calc) return null

  return (
    <div style={{ background: 'var(--bg2)', borderRadius: 12, overflow: 'hidden', border: `1px solid ${color}22` }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', padding: '14px 16px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', background: 'none', border: 'none', cursor: 'pointer',
        textAlign: 'left'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 14 }}>🧮</span>
            <span style={{ fontSize: 13, fontWeight: 700, color }}>Score {calc.name}</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{calc.subtitle}</div>
        </div>
        <div style={{ fontSize: 16, color: 'var(--text3)', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>▾</div>
      </button>

      {open && (
        <div style={{ padding: '0 16px 16px', borderTop: `1px solid ${color}22` }} className="fadeIn">
          <div style={{ height: 12 }} />
          {calc.type === 'glasgow'
            ? <GlasgowCalculator calc={calc} color={color} />
            : <ChecklistCalculator calc={calc} color={color} />
          }
          <div style={{ marginTop: 12, fontSize: 10, color: '#4b5563', lineHeight: 1.5 }}>
            📚 {calc.source}
          </div>
        </div>
      )}
    </div>
  )
}
