import { useState, useEffect } from 'react'

function Vital({ label, value, unit, color, warning }) {
  return (
    <div style={{
      background: '#030712',
      border: `1px solid ${warning ? '#ef4444' : '#1f2937'}`,
      borderRadius: 8,
      padding: '8px 12px',
      textAlign: 'center',
      animation: warning ? 'blink 1s infinite' : 'none'
    }}>
      <div style={{ fontSize: 10, color: '#6b7280', letterSpacing: 1, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: color || '#f9fafb', fontFamily: 'monospace', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{unit}</div>
    </div>
  )
}

export default function VitalsMonitor({ vitals, color }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const fcColor = vitals.fc < 50 || vitals.fc > 150 ? '#ef4444' : vitals.fc > 100 ? '#f59e0b' : '#10b981'
  const paColor = parseInt(vitals.pa) < 90 ? '#ef4444' : '#10b981'
  const spo2Color = vitals.spo2 < 94 ? '#ef4444' : vitals.spo2 < 96 ? '#f59e0b' : '#10b981'

  return (
    <div style={{
      background: '#0a0f1e',
      border: `1px solid ${color}33`,
      borderRadius: 12,
      padding: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1 }}>MONITORING</span>
        <span style={{ fontSize: 11, color: '#10b981', fontFamily: 'monospace' }}>
          {String(Math.floor(tick / 60)).padStart(2, '0')}:{String(tick % 60).padStart(2, '0')}
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        <Vital label="FC" value={vitals.fc} unit="bpm" color={fcColor} warning={vitals.fc < 50 || vitals.fc > 150} />

        <Vital label="PA" value={vitals.pa} unit="mmHg" color={paColor} warning={parseInt(vitals.pa) < 90} />
        <Vital label="SpO₂" value={vitals.spo2} unit="%" color={spo2Color} warning={vitals.spo2 < 94} />
        <Vital label="FR" value={vitals.fr} unit="/min" color="#f9fafb" />
        <Vital label="TEMP" value={vitals.temp} unit="°C" color="#f9fafb" />
        <Vital label="GCS" value={vitals.glasgow} unit="/15" color={vitals.glasgow === 15 ? '#10b981' : '#f59e0b'} />
      </div>
    </div>
  )
}
