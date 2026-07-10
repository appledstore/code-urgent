import { IOA_DATA } from '../data/ioaData'

const CIMU_COLORS = { 1: '#DC2626', 2: '#EA580C', 3: '#D97706', 4: '#16A34A', 5: '#6B7280' }

export default function SynthesisView({ caseData, onBack }) {
  const ioa = IOA_DATA[caseData.id]
  const { color } = caseData

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px', background: '#0d1b2e',
        borderBottom: '1px solid #1e3a5f',
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0
      }}>
        <button onClick={onBack} style={{ background: '#1f2937', color: '#9ca3af', borderRadius: 6, padding: '6px 10px', fontSize: 12, border: '1px solid #374151', cursor: 'pointer' }}>←</button>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#10b981' }}>Double équipe ✓</div>
          <div style={{ fontSize: 11, color: '#6b7280' }}>{caseData.title}</div>
        </div>
        <div style={{ marginLeft: 'auto', padding: '4px 10px', background: '#10b98118', border: '1px solid #10b98133', borderRadius: 20, fontSize: 10, color: '#10b981' }}>
          SYNTHÈSE
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Timeline */}
        <div style={{ background: '#111827', borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 16 }}>CHRONOLOGIE DU CAS</div>
          {[
            { icon: '🚪', role: 'IOA', label: 'Accueil', desc: ioa?.motif?.slice(0, 80) + '…', color: '#3B82F6' },
            { icon: '📊', role: 'IOA', label: `Classification CIMU ${ioa?.cimu}`, desc: `Orientation → ${ioa?.orientation}`, color: CIMU_COLORS[ioa?.cimu] || '#6b7280' },
            { icon: '⚡', role: 'IOA', label: 'Gestes immédiats', desc: ioa?.gesturesIOA?.[0] + '…', color: '#3B82F6' },
            { icon: '🩺', role: 'Médecin', label: 'Évaluation clinique + ECG', desc: caseData.patient?.arriving, color },
            { icon: '🔬', role: 'Médecin', label: 'Diagnostic établi', desc: caseData.title, color },
            { icon: '💊', role: 'Médecin', label: 'Protocole thérapeutique', desc: caseData.gestures?.[0]?.name, color },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < 5 ? 0 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: step.color + '22', border: `2px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
                  {step.icon}
                </div>
                {i < 5 && <div style={{ width: 2, flex: 1, background: '#1f2937', margin: '4px 0', minHeight: 20 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < 5 ? 16 : 0 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 8, background: step.color + '22', color: step.color }}>{step.role}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#f9fafb' }}>{step.label}</span>
                </div>
                {step.desc && <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5 }}>{step.desc}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <div style={{ background: '#111827', borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, marginBottom: 12 }}>REGARDS CROISÉS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {/* IOA column */}
            <div>
              <div style={{ fontSize: 11, color: '#60a5fa', fontWeight: 700, marginBottom: 10, textAlign: 'center' }}>👩‍⚕️ IOA</div>
              <div style={{ background: '#0d1b2e', borderRadius: 8, padding: 10, marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 4 }}>CIMU attribué</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: CIMU_COLORS[ioa?.cimu], fontFamily: 'monospace' }}>
                  {ioa?.cimu}
                </div>
              </div>
              <div style={{ background: '#0d1b2e', borderRadius: 8, padding: 10, marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 4 }}>Orientation</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#60a5fa' }}>{ioa?.orientation}</div>
              </div>
              <div style={{ background: '#0d1b2e', borderRadius: 8, padding: 10 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 6 }}>Gestes clés</div>
                {ioa?.gesturesIOA?.slice(0, 3).map((g, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4, display: 'flex', gap: 6 }}>
                    <span style={{ color: '#60a5fa' }}>{i+1}</span>{g}
                  </div>
                ))}
              </div>
            </div>

            {/* Médecin column */}
            <div>
              <div style={{ fontSize: 11, color, fontWeight: 700, marginBottom: 10, textAlign: 'center' }}>🩺 Médecin</div>
              <div style={{ background: '#0a0f1e', borderRadius: 8, padding: 10, marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 4 }}>Diagnostic</div>
                <div style={{ fontSize: 12, fontWeight: 700, color, lineHeight: 1.3 }}>{caseData.title}</div>
              </div>
              <div style={{ background: '#0a0f1e', borderRadius: 8, padding: 10, marginBottom: 8 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 4 }}>ECG</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>{caseData.ecg?.rythme} — {caseData.ecg?.fc} bpm</div>
              </div>
              <div style={{ background: '#0a0f1e', borderRadius: 8, padding: 10 }}>
                <div style={{ fontSize: 10, color: '#4b5563', marginBottom: 6 }}>Points-clés</div>
                {caseData.keyPoints?.slice(0, 3).map((p, i) => (
                  <div key={i} style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4, display: 'flex', gap: 6 }}>
                    <span style={{ color }}>•</span>{p.slice(0, 55)}{p.length > 55 ? '…' : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lien IOA → Médecin */}
        {ioa?.lienMedecin && (
          <div style={{ background: '#10b98111', border: '1px solid #10b98133', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#10b981', letterSpacing: 1, marginBottom: 8 }}>🔗 CONTINUITÉ DES SOINS</div>
            <div style={{ fontSize: 13, color: '#d1d5db', lineHeight: 1.6, fontStyle: 'italic' }}>{ioa.lienMedecin}</div>
          </div>
        )}

        {/* Badge */}
        <div style={{
          background: 'linear-gradient(135deg, #10b98122, #111827)',
          border: '1px solid #10b981',
          borderRadius: 12, padding: 20, textAlign: 'center'
        }}>
          <div style={{ fontSize: 36 }}>🏆</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#10b981', marginTop: 8 }}>Double équipe accomplie !</div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>
            IOA + Médecin — vision interprofessionnelle complète
          </div>
        </div>

        <button onClick={onBack} style={{
          padding: '14px', background: '#1f2937', color: '#f9fafb', borderRadius: 10,
          fontWeight: 600, fontSize: 14, border: '1px solid #374151', cursor: 'pointer'
        }}>
          ← Retour aux cas
        </button>
      </div>
    </div>
  )
}
