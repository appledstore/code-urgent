export default function UpgradeModal({ onClose, onConnect }) {
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: '#000000bb', display: 'flex',
        alignItems: 'flex-end', justifyContent: 'center'
      }}
    >
      <div style={{
        width: '100%', maxWidth: 480, background: 'var(--bg)',
        borderRadius: '20px 20px 0 0', padding: '8px 0 40px'
      }}>
        <div style={{ width: 40, height: 4, background: 'var(--border)', borderRadius: 2, margin: '12px auto 24px' }} />

        <div style={{ padding: '0 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px', color: 'var(--text)' }}>
            Cas premium
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 28 }}>
            Ce cas fait partie de l'accès complet.<br />
            3 cas sont disponibles gratuitement.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #ef444411, #f9731611)',
            border: '1px solid #ef444433', borderRadius: 14, padding: 20, marginBottom: 20
          }}>
            <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 4 }}>Accès complet</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#ef4444', marginBottom: 16 }}>
              39€ <span style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 400 }}>une fois</span>
            </div>
            {['50 cas cliniques', 'Modes Médecin + IOA', 'Mises à jour incluses', 'Multi-appareils'].map(f => (
              <div key={f} style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6, display: 'flex', gap: 8, textAlign: 'left' }}>
                <span style={{ color: '#ef4444' }}>✓</span> {f}
              </div>
            ))}
            <button style={{
              marginTop: 16, width: '100%', padding: '14px',
              background: 'linear-gradient(135deg, #ef4444, #f97316)',
              color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 15,
              border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px #ef444433'
            }}>
              Bientôt disponible
            </button>
          </div>

          <button onClick={onClose} style={{
            width: '100%', padding: '12px', background: 'var(--bg3)',
            color: 'var(--text2)', border: '1px solid var(--border)',
            borderRadius: 10, fontSize: 14, cursor: 'pointer'
          }}>
            Continuer avec les cas gratuits
          </button>
        </div>
      </div>
    </div>
  )
}
