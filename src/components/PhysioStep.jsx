import { useState } from 'react'

export default function PhysioStep({ physiopathology, color }) {
  const [revealed, setRevealed] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color, marginBottom: 4 }}>
        {physiopathology.title}
      </div>
      {physiopathology.steps.map((step, i) => (
        <div
          key={i}
          onClick={() => setRevealed(Math.max(revealed, i + 1))}
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            padding: '10px 14px',
            borderRadius: 8,
            border: `1px solid ${i < revealed ? color + '66' : '#374151'}`,
            background: i < revealed ? color + '11' : '#111827',
            cursor: i >= revealed ? 'pointer' : 'default',
            opacity: i > revealed ? 0.4 : 1,
            transition: 'all 0.3s ease',
            animation: i === revealed - 1 ? 'fadeIn 0.4s ease' : 'none'
          }}
        >
          <span style={{ fontSize: 20, flexShrink: 0 }}>{step.icon}</span>
          <span style={{ fontSize: 13, color: i < revealed ? '#f9fafb' : '#9ca3af', lineHeight: 1.5 }}>
            {i < revealed ? step.text : i === revealed ? '← Cliquer pour révéler' : '···'}
          </span>
        </div>
      ))}
      {revealed < physiopathology.steps.length && (
        <button
          onClick={() => setRevealed(revealed + 1)}
          style={{
            background: color + '22',
            color,
            border: `1px solid ${color}44`,
            borderRadius: 8,
            padding: '8px 16px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.5,
            transition: 'all 0.2s'
          }}
        >
          Étape suivante →
        </button>
      )}
      {revealed === physiopathology.steps.length && (
        <div style={{ fontSize: 10, color: '#6b7280', padding: '6px 2px', borderTop: '1px solid #1f2937', marginTop: 4 }}>
          📚 {physiopathology.source}
        </div>
      )}
    </div>
  )
}
