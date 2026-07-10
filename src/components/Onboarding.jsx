import { useState } from 'react'
import { useLang, LangSwitcher } from '../i18n/LangContext'

export default function Onboarding({ onDone }) {
  const [slide, setSlide] = useState(0)
  const { t } = useLang()

  const SLIDES = [
    { icon: '🚨', title: t('ob0Title'), subtitle: t('ob0Sub'), body: t('ob0Body'), accent: '#ef4444' },
    { icon: '🩺', title: t('ob1Title'), subtitle: t('ob1Sub'), body: t('ob1Body'), accent: '#ef4444', tags: [t('tag30cases'), t('tag6steps'), t('tag5pts')] },
    { icon: '👩‍⚕️', title: t('ob2Title'), subtitle: t('ob2Sub'), body: t('ob2Body'), accent: '#3B82F6', tags: [t('tag30cases'), t('tag4steps'), t('tag4pts')] },
    { icon: '📊', title: t('ob3Title'), subtitle: t('ob3Sub'), body: t('ob3Body'), accent: '#10b981', tags: [t('tagStorage'), t('tagDouble'), t('tagDash')] },
  ]

  const s = SLIDES[slide]
  const isLast = slide === SLIDES.length - 1

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 28px', textAlign: 'center',
      animation: 'fadeIn 0.4s ease'
    }}>
      {/* Lang + dots */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 32 }}>
        <LangSwitcher />
        <div style={{ display: 'flex', gap: 6 }}>
          {SLIDES.map((_, i) => (
            <div key={i} style={{
              width: i === slide ? 20 : 6, height: 6,
              borderRadius: 3, transition: 'all 0.3s',
              background: i === slide ? s.accent : '#1f2937'
            }} />
          ))}
        </div>
        <div style={{ width: 80 }} />
      </div>

      {/* Icon */}
      <div style={{ fontSize: 72, marginBottom: 24, lineHeight: 1 }}>{s.icon}</div>

      {/* Title */}
      <h2 style={{
        fontSize: 26, fontWeight: 800, margin: 0, marginBottom: 8,
        background: `linear-gradient(135deg, ${s.accent}, ${s.accent}aa)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>{s.title}</h2>
      <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>{s.subtitle}</div>

      <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7, marginBottom: 24, maxWidth: 320 }}>
        {s.body}
      </p>

      {s.tags && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          {s.tags.filter(Boolean).map(tag => (
            <span key={tag} style={{
              fontSize: 11, padding: '4px 12px',
              background: s.accent + '18', color: s.accent,
              border: `1px solid ${s.accent}33`, borderRadius: 20
            }}>{tag}</span>
          ))}
        </div>
      )}

      <div style={{ flex: 1 }} />

      <div style={{ width: '100%', display: 'flex', gap: 10 }}>
        {slide > 0 && (
          <button onClick={() => setSlide(s => s - 1)} style={{
            flex: 1, padding: '14px', background: '#1f2937',
            color: '#9ca3af', border: '1px solid #374151',
            borderRadius: 12, fontWeight: 600, fontSize: 14, cursor: 'pointer'
          }}>{t('back')}</button>
        )}
        <button onClick={() => isLast ? onDone() : setSlide(s => s + 1)} style={{
          flex: 2, padding: '14px',
          background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
          color: '#fff', border: 'none',
          borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer'
        }}>
          {isLast ? t('start') : t('next')}
        </button>
      </div>

      {isLast && (
        <button onClick={onDone} style={{
          marginTop: 12, background: 'none', border: 'none',
          color: '#374151', fontSize: 12, cursor: 'pointer'
        }}>{t('skip')}</button>
      )}
    </div>
  )
}
