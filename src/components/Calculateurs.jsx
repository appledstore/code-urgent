import { useState } from 'react'

const ACCENT = '#ef4444'

function ScoreBadge({ score, levels }) {
  const level = levels.find(l => score >= l.min && score <= l.max) || levels[levels.length - 1]
  return (
    <div style={{
      marginTop: 16, padding: '12px 16px', borderRadius: 12,
      background: level.color + '18', border: `1px solid ${level.color}44`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <div>
        <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 2 }}>Score</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: level.color }}>{score}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: level.color }}>{level.label}</div>
        {level.note && <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{level.note}</div>}
      </div>
    </div>
  )
}

function Toggle({ label, value, onChange, pts }) {
  return (
    <div
      onClick={() => onChange(!value)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 14px', borderRadius: 10, cursor: 'pointer',
        background: value ? ACCENT + '18' : 'var(--bg3)',
        border: `1px solid ${value ? ACCENT + '44' : 'var(--border)'}`,
        marginBottom: 8, transition: 'all 0.15s'
      }}
    >
      <span style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.4 }}>{label}</span>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0, marginLeft: 8 }}>
        {pts && <span style={{ fontSize: 11, color: 'var(--text3)' }}>{pts > 0 ? `+${pts}` : pts}</span>}
        <div style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          background: value ? ACCENT : 'var(--bg2)',
          border: `2px solid ${value ? ACCENT : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 13, transition: 'all 0.15s'
        }}>{value ? '✓' : ''}</div>
      </div>
    </div>
  )
}

function Select({ label, options, value, onChange }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
              border: `1px solid ${value === opt.value ? ACCENT + '88' : 'var(--border)'}`,
              background: value === opt.value ? ACCENT + '18' : 'var(--bg3)',
              color: value === opt.value ? ACCENT : 'var(--text2)',
              fontWeight: value === opt.value ? 700 : 400
            }}
          >{opt.label}</button>
        ))}
      </div>
    </div>
  )
}

// ---- Wells EP ----
function WellsEP() {
  const [s, setS] = useState({ tvp: false, diag: false, fc: false, immob: false, atcd: false, hemo: false, cancer: false })
  const score = (s.tvp ? 3 : 0) + (s.diag ? 3 : 0) + (s.fc ? 1.5 : 0) + (s.immob ? 1.5 : 0) + (s.atcd ? 1.5 : 0) + (s.hemo ? 1 : 0) + (s.cancer ? 1 : 0)
  const set = k => v => setS(prev => ({ ...prev, [k]: v }))
  return (
    <div>
      <Toggle label="Signes cliniques de TVP" value={s.tvp} onChange={set('tvp')} pts={3} />
      <Toggle label="Autre diagnostic moins probable que l'EP" value={s.diag} onChange={set('diag')} pts={3} />
      <Toggle label="FC > 100 bpm" value={s.fc} onChange={set('fc')} pts={1.5} />
      <Toggle label="Immobilisation ≥ 3j ou chirurgie < 4 sem" value={s.immob} onChange={set('immob')} pts={1.5} />
      <Toggle label="ATCD TVP ou EP" value={s.atcd} onChange={set('atcd')} pts={1.5} />
      <Toggle label="Hémoptysie" value={s.hemo} onChange={set('hemo')} pts={1} />
      <Toggle label="Cancer actif (traitement ou rémission < 6 mois)" value={s.cancer} onChange={set('cancer')} pts={1} />
      <ScoreBadge score={score} levels={[
        { min: 0, max: 1, label: 'Probabilité faible', note: 'D-dimères si < 50 ans', color: '#10b981' },
        { min: 2, max: 6, label: 'Probabilité modérée', note: 'D-dimères ou angio-TDM', color: '#f59e0b' },
        { min: 7, max: 99, label: 'Probabilité élevée', note: 'Angio-TDM d\'emblée', color: '#ef4444' },
      ]} />
    </div>
  )
}

// ---- Wells TVP ----
function WellsTVP() {
  const [s, setS] = useState({ cancer: false, paralysie: false, alitement: false, sensib: false, gonflement: false, godet: false, asymetrie: false, varices: false, diag: false })
  const score = (s.cancer ? 1 : 0) + (s.paralysie ? 1 : 0) + (s.alitement ? 1 : 0) + (s.sensib ? 1 : 0) + (s.gonflement ? 1 : 0) + (s.godet ? 1 : 0) + (s.asymetrie ? 1 : 0) + (s.varices ? 1 : 0) + (s.diag ? -2 : 0)
  const set = k => v => setS(prev => ({ ...prev, [k]: v }))
  return (
    <div>
      <Toggle label="Cancer actif" value={s.cancer} onChange={set('cancer')} pts={1} />
      <Toggle label="Paralysie, parésie ou immobilisation plâtrée" value={s.paralysie} onChange={set('paralysie')} pts={1} />
      <Toggle label="Alitement > 3j ou chirurgie < 12 sem" value={s.alitement} onChange={set('alitement')} pts={1} />
      <Toggle label="Sensibilité sur le trajet veineux profond" value={s.sensib} onChange={set('sensib')} pts={1} />
      <Toggle label="Gonflement de la jambe entière" value={s.gonflement} onChange={set('gonflement')} pts={1} />
      <Toggle label="Œdème prenant le godet" value={s.godet} onChange={set('godet')} pts={1} />
      <Toggle label="Asymétrie mollet > 3 cm" value={s.asymetrie} onChange={set('asymetrie')} pts={1} />
      <Toggle label="Varices superficielles non variqueuses" value={s.varices} onChange={set('varices')} pts={1} />
      <Toggle label="Autre diagnostic aussi ou plus probable" value={s.diag} onChange={set('diag')} pts={-2} />
      <ScoreBadge score={score} levels={[
        { min: -10, max: 0, label: 'Probabilité faible', note: 'D-dimères', color: '#10b981' },
        { min: 1, max: 2, label: 'Probabilité modérée', note: 'Écho-doppler', color: '#f59e0b' },
        { min: 3, max: 99, label: 'Probabilité élevée', note: 'Écho-doppler d\'emblée', color: '#ef4444' },
      ]} />
    </div>
  )
}

// ---- Glasgow ----
function Glasgow() {
  const [eyes, setEyes] = useState(4)
  const [verbal, setVerbal] = useState(5)
  const [motor, setMotor] = useState(6)
  const score = eyes + verbal + motor
  const eyeOpts = [{ value: 4, label: 'Spontanée (4)' }, { value: 3, label: 'À la voix (3)' }, { value: 2, label: 'À la douleur (2)' }, { value: 1, label: 'Aucune (1)' }]
  const verbalOpts = [{ value: 5, label: 'Orienté (5)' }, { value: 4, label: 'Confus (4)' }, { value: 3, label: 'Mots (3)' }, { value: 2, label: 'Sons (2)' }, { value: 1, label: 'Aucune (1)' }]
  const motorOpts = [{ value: 6, label: 'Obéit (6)' }, { value: 5, label: 'Localise (5)' }, { value: 4, label: 'Retrait (4)' }, { value: 3, label: 'Flexion (3)' }, { value: 2, label: 'Extension (2)' }, { value: 1, label: 'Aucune (1)' }]
  return (
    <div>
      <Select label="Ouverture des yeux (Y)" options={eyeOpts} value={eyes} onChange={setEyes} />
      <div style={{ height: 8 }} />
      <Select label="Réponse verbale (V)" options={verbalOpts} value={verbal} onChange={setVerbal} />
      <div style={{ height: 8 }} />
      <Select label="Réponse motrice (M)" options={motorOpts} value={motor} onChange={setMotor} />
      <ScoreBadge score={score} levels={[
        { min: 3, max: 8, label: 'Coma grave', note: 'Intubation à discuter', color: '#ef4444' },
        { min: 9, max: 12, label: 'Coma modéré', note: 'Surveillance rapprochée', color: '#f59e0b' },
        { min: 13, max: 15, label: 'Conscience normale', note: score === 15 ? 'Normal' : 'Légèrement altérée', color: '#10b981' },
      ]} />
    </div>
  )
}

// ---- SOFA ----
function SOFA() {
  const [resp, setResp] = useState(0)
  const [coag, setCoag] = useState(0)
  const [foie, setFoie] = useState(0)
  const [cv, setCv] = useState(0)
  const [snc, setSnc] = useState(0)
  const [reins, setReins] = useState(0)
  const score = resp + coag + foie + cv + snc + reins
  const opts04 = (labels) => labels.map((l, i) => ({ value: i, label: `${i} — ${l}` }))
  return (
    <div>
      <Select label="🫁 Respiration (PaO₂/FiO₂)" options={opts04(['≥ 400', '< 400', '< 300', '< 200 + VM', '< 100 + VM'])} value={resp} onChange={setResp} />
      <div style={{ height: 8 }} />
      <Select label="🩸 Coagulation (plaquettes ×10³)" options={opts04(['≥ 150', '< 150', '< 100', '< 50', '< 20'])} value={coag} onChange={setCoag} />
      <div style={{ height: 8 }} />
      <Select label="🟡 Foie (bilirubine µmol/L)" options={opts04(['< 20', '20–32', '33–101', '102–204', '> 204'])} value={foie} onChange={setFoie} />
      <div style={{ height: 8 }} />
      <Select label="❤️ Cardiovasculaire" options={opts04(['PAM ≥ 70', 'PAM < 70', 'Dopamine ≤ 5 ou Dobu', 'Dopa > 5 ou Noradr ≤ 0.1', 'Dopa > 15 ou Noradr > 0.1'])} value={cv} onChange={setCv} />
      <div style={{ height: 8 }} />
      <Select label="🧠 SNC (Glasgow)" options={opts04(['15', '13–14', '10–12', '6–9', '< 6'])} value={snc} onChange={setSnc} />
      <div style={{ height: 8 }} />
      <Select label="🫘 Reins (créatinine µmol/L)" options={opts04(['< 110', '110–170', '171–299', '300–440 ou diurèse < 0.5', '> 440 ou diurèse < 0.2'])} value={reins} onChange={setReins} />
      <ScoreBadge score={score} levels={[
        { min: 0, max: 6, label: 'Défaillance légère', note: 'Mortalité < 10%', color: '#10b981' },
        { min: 7, max: 9, label: 'Défaillance modérée', note: 'Mortalité ~15–20%', color: '#f59e0b' },
        { min: 10, max: 12, label: 'Défaillance sévère', note: 'Mortalité ~40–50%', color: '#f97316' },
        { min: 13, max: 24, label: 'Défaillance critique', note: 'Mortalité > 50%', color: '#ef4444' },
      ]} />
    </div>
  )
}

// ---- GRACE ----
function GRACE() {
  const [age, setAge] = useState(0)
  const [fc, setFc] = useState(0)
  const [pas, setPas] = useState(0)
  const [creat, setCreat] = useState(0)
  const [killip, setKillip] = useState(0)
  const [arrest, setArrest] = useState(false)
  const [st, setSt] = useState(false)
  const [enzymes, setEnzymes] = useState(false)
  const score = age + fc + pas + creat + killip + (arrest ? 43 : 0) + (st ? 30 : 0) + (enzymes ? 14 : 0)
  const ageOpts = [{ value: 0, label: '< 40 ans (0)' }, { value: 18, label: '40–49 ans (18)' }, { value: 36, label: '50–59 ans (36)' }, { value: 55, label: '60–69 ans (55)' }, { value: 73, label: '70–79 ans (73)' }, { value: 91, label: '≥ 80 ans (91)' }]
  const fcOpts = [{ value: 0, label: '< 70 (0)' }, { value: 3, label: '70–89 (3)' }, { value: 9, label: '90–109 (9)' }, { value: 15, label: '110–149 (15)' }, { value: 24, label: '150–199 (24)' }, { value: 38, label: '≥ 200 (38)' }]
  const pasOpts = [{ value: 58, label: '< 80 mmHg (58)' }, { value: 53, label: '80–99 (53)' }, { value: 43, label: '100–119 (43)' }, { value: 34, label: '120–139 (34)' }, { value: 24, label: '140–159 (24)' }, { value: 10, label: '160–199 (10)' }, { value: 0, label: '≥ 200 (0)' }]
  const creatOpts = [{ value: 1, label: '0–35 µmol/L (1)' }, { value: 4, label: '36–70 (4)' }, { value: 7, label: '71–105 (7)' }, { value: 10, label: '106–140 (10)' }, { value: 13, label: '141–176 (13)' }, { value: 21, label: '177–353 (21)' }, { value: 28, label: '> 353 (28)' }]
  const killipOpts = [{ value: 0, label: 'I — Pas d\'IC (0)' }, { value: 21, label: 'II — Crépitants (21)' }, { value: 43, label: 'III — OAP (43)' }, { value: 64, label: 'IV — Choc (64)' }]
  return (
    <div>
      <Select label="Âge" options={ageOpts} value={age} onChange={setAge} />
      <div style={{ height: 8 }} />
      <Select label="Fréquence cardiaque" options={fcOpts} value={fc} onChange={setFc} />
      <div style={{ height: 8 }} />
      <Select label="Pression artérielle systolique" options={pasOpts} value={pas} onChange={setPas} />
      <div style={{ height: 8 }} />
      <Select label="Créatinine à l'admission" options={creatOpts} value={creat} onChange={setCreat} />
      <div style={{ height: 8 }} />
      <Select label="Classe Killip" options={killipOpts} value={killip} onChange={setKillip} />
      <div style={{ height: 8 }} />
      <Toggle label="Arrêt cardiaque à l'admission" value={arrest} onChange={setArrest} pts={43} />
      <Toggle label="Sous-décalage ST" value={st} onChange={setSt} pts={30} />
      <Toggle label="Élévation des enzymes cardiaques" value={enzymes} onChange={setEnzymes} pts={14} />
      <ScoreBadge score={score} levels={[
        { min: 0, max: 108, label: 'Risque faible', note: 'Mortalité hospit. < 1%', color: '#10b981' },
        { min: 109, max: 140, label: 'Risque intermédiaire', note: 'Mortalité ~1–3%', color: '#f59e0b' },
        { min: 141, max: 999, label: 'Risque élevé', note: 'Mortalité > 3%', color: '#ef4444' },
      ]} />
    </div>
  )
}

// ---- Revised Trauma Score ----
function RTS() {
  const [gcs, setGcs] = useState(4)
  const [pas, setPas] = useState(4)
  const [fr, setFr] = useState(4)
  const score = (gcs + pas + fr) // coded score 0-12
  const gcsOpts = [{ value: 4, label: '13–15 (4)' }, { value: 3, label: '9–12 (3)' }, { value: 2, label: '6–8 (2)' }, { value: 1, label: '4–5 (1)' }, { value: 0, label: '3 (0)' }]
  const pasOpts = [{ value: 4, label: '> 89 mmHg (4)' }, { value: 3, label: '76–89 (3)' }, { value: 2, label: '50–75 (2)' }, { value: 1, label: '1–49 (1)' }, { value: 0, label: '0 (0)' }]
  const frOpts = [{ value: 4, label: '10–29/min (4)' }, { value: 3, label: '> 29/min (3)' }, { value: 2, label: '6–9/min (2)' }, { value: 1, label: '1–5/min (1)' }, { value: 0, label: 'Apnée (0)' }]
  return (
    <div>
      <Select label="Glasgow Coma Scale" options={gcsOpts} value={gcs} onChange={setGcs} />
      <div style={{ height: 8 }} />
      <Select label="Pression artérielle systolique" options={pasOpts} value={pas} onChange={setPas} />
      <div style={{ height: 8 }} />
      <Select label="Fréquence respiratoire" options={frOpts} value={fr} onChange={setFr} />
      <ScoreBadge score={score} levels={[
        { min: 0, max: 3, label: 'Critique', note: 'Survie ~33%', color: '#ef4444' },
        { min: 4, max: 7, label: 'Grave', note: 'Survie ~60%', color: '#f97316' },
        { min: 8, max: 10, label: 'Modéré', note: 'Survie ~91%', color: '#f59e0b' },
        { min: 11, max: 12, label: 'Léger', note: 'Survie > 98%', color: '#10b981' },
      ]} />
    </div>
  )
}

const CALCS = [
  { id: 'wells_ep', label: 'Wells EP', icon: '🫁', desc: 'Probabilité d\'embolie pulmonaire', component: WellsEP },
  { id: 'wells_tvp', label: 'Wells TVP', icon: '🦵', desc: 'Probabilité de thrombose veineuse profonde', component: WellsTVP },
  { id: 'glasgow', label: 'Glasgow', icon: '🧠', desc: 'Score de coma', component: Glasgow },
  { id: 'sofa', label: 'SOFA', icon: '💔', desc: 'Défaillance d\'organe — sepsis sévère', component: SOFA },
  { id: 'grace', label: 'GRACE 2.0', icon: '❤️', desc: 'Risque SCA — mortalité hospitalière', component: GRACE },
  { id: 'rts', label: 'Trauma Score', icon: '🚑', desc: 'Revised Trauma Score (RTS)', component: RTS },
]

export default function Calculateurs({ onBack }) {
  const [active, setActive] = useState(null)
  const ActiveComp = active ? CALCS.find(c => c.id === active)?.component : null

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px', borderBottom: '1px solid var(--border2)',
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10
      }}>
        <button onClick={active ? () => setActive(null) : onBack} style={{
          background: 'var(--bg3)', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 12px', cursor: 'pointer',
          fontSize: 13, color: 'var(--text2)'
        }}>←</button>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>
            🧮 {active ? CALCS.find(c => c.id === active)?.label : 'Calculateurs cliniques'}
          </div>
          {!active && <div style={{ fontSize: 11, color: 'var(--text3)' }}>Scores validés SFMU · ESC · HAS</div>}
          {active && <div style={{ fontSize: 11, color: 'var(--text3)' }}>{CALCS.find(c => c.id === active)?.desc}</div>}
        </div>
      </div>

      <div style={{ padding: 16 }}>
        {!active ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CALCS.map(c => (
              <button key={c.id} onClick={() => setActive(c.id)} style={{
                width: '100%', textAlign: 'left', background: 'var(--bg2)',
                border: '1px solid var(--border)', borderRadius: 12,
                padding: '16px', cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ fontSize: 28 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--text3)' }}>{c.desc}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--text4)', fontSize: 18 }}>›</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <ActiveComp />
        )}
      </div>
    </div>
  )
}
