import { useState } from 'react'

export default function DiagStep({ dd, color, onComplete }) {
  const [selected, setSelected] = useState(null)
  const [attempts, setAttempts] = useState(0)

  const handleSelect = (item) => {
    if (selected) return
    const attempt = attempts + 1
    setAttempts(attempt)
    setSelected(item)
    if (item.correct) {
      // firstTry = attempt === 1 → 3 pts, else 1 pt
      setTimeout(() => onComplete?.(attempt === 1 ? 3 : 1), 1500)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 4 }}>
        Quel est votre diagnostic principal ?
      </div>
      {dd.map((item, i) => {
        const isSelected = selected?.diagnosis === item.diagnosis
        const isCorrect = item.correct
        let bg = 'var(--bg2)', border = 'var(--border)', textColor = 'var(--text)'

        if (isSelected) {
          bg = isCorrect ? '#10b98122' : '#ef444422'
          border = isCorrect ? '#10b981' : '#ef4444'
          textColor = isCorrect ? '#10b981' : '#ef4444'
        } else if (selected) {
          bg = 'var(--bg)'
          border = 'var(--bg3)'
          textColor = 'var(--text3)'
        }

        return (
          <div key={i}>
            <button
              onClick={() => handleSelect(item)}
              disabled={!!selected}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 16px',
                background: bg, border: `1px solid ${border}`,
                borderRadius: 8, color: textColor, fontSize: 13,
                fontWeight: isSelected ? 600 : 400,
                cursor: selected ? 'default' : 'pointer',
                transition: 'all 0.25s',
                display: 'flex', alignItems: 'center', gap: 10
              }}
            >
              <span style={{
                width: 24, height: 24, borderRadius: '50%',
                background: isSelected ? border : 'var(--bg3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, flexShrink: 0, color: isSelected ? '#fff' : 'var(--text2)'
              }}>
                {isSelected ? (isCorrect ? '✓' : '✗') : String.fromCharCode(65 + i)}
              </span>
              {item.diagnosis}
            </button>
            {isSelected && (
              <div style={{
                padding: '8px 14px', fontSize: 12, color: 'var(--text2)',
                background: isCorrect ? '#10b98111' : '#ef444411',
                border: `1px solid ${border}33`,
                borderTop: 'none', borderRadius: '0 0 8px 8px',
                animation: 'fadeIn 0.3s ease'
              }}>
                {item.explanation}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
