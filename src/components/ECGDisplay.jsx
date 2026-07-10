import { useEffect, useRef } from 'react'

// ECG paths scientifiquement cohérents pour chaque rythme
const ECG_PATHS = {
  vagal: {
    // Bradycardie sinusale 48bpm — complexes larges, espacés
    color: '#3B82F6',
    label: 'Bradycardie sinusale — 48 bpm',
    segments: [
      // Baseline → P → baseline → QRS → T → longue baseline (bradycardie)
      'M 0,60 L 30,60 Q 40,50 50,60 L 90,60 L 92,60 L 94,40 L 96,80 L 98,55 L 105,60 Q 125,30 145,60 L 280,60 Q 290,50 300,60 L 340,60 L 342,60 L 344,40 L 346,80 L 348,55 L 355,60 Q 375,30 395,60 L 540,60'
    ]
  },
  fa: {
    // FA : ligne isoélectrique irrégulière, pas d'ondes P, RR irréguliers
    color: '#EF4444',
    label: 'Fibrillation auriculaire — 128 bpm irrégulier',
    segments: [
      'M 0,60 Q 5,58 8,62 Q 12,56 15,63 Q 18,59 22,61 L 25,60 L 26,55 L 27,20 L 28,80 L 29,57 L 35,60 Q 38,30 48,60 Q 52,58 55,62 Q 58,57 62,63 Q 65,60 70,61 L 72,55 L 73,20 L 74,80 L 75,57 L 81,60 Q 84,30 94,60 Q 97,59 100,62 Q 103,57 106,63 Q 112,61 118,60 L 120,55 L 121,20 L 122,80 L 123,57 L 130,60 Q 133,30 143,60 Q 148,58 151,63 Q 155,57 161,60 L 162,55 L 163,20 L 164,80 L 165,57 L 171,60 Q 174,30 184,60 Q 187,59 191,62 Q 197,61 204,60 L 206,55 L 207,20 L 208,80 L 209,57 L 215,60 Q 218,30 228,60 Q 232,58 237,63 Q 241,59 246,60 L 248,55 L 249,20 L 250,80 L 251,57 L 257,60 Q 260,30 270,60 Q 275,59 279,62 Q 284,57 290,63 Q 296,60 303,61 L 305,55 L 306,20 L 307,80 L 308,57 L 314,60 Q 317,30 327,60 Q 330,59 334,62 Q 338,58 343,63 Q 349,60 356,61 L 358,55 L 359,20 L 360,80 L 361,57 L 368,60 Q 371,30 381,60 Q 386,58 392,62 Q 397,57 402,63 Q 409,61 415,60 L 417,55 L 418,20 L 419,80 L 420,57 L 427,60 Q 430,30 440,60 Q 445,59 449,62 Q 455,58 461,60 L 463,55 L 464,20 L 465,80 L 466,57 L 472,60 Q 475,30 485,60 Q 490,59 496,62 Q 501,58 508,60 L 540,60'
    ]
  },
  tsv: {
    // TSV 178bpm : QRS fins rapides réguliers, P rétrogrades dans QRS
    color: '#8B5CF6',
    label: 'TSV régulière — 178 bpm',
    segments: [
      'M 0,60 L 12,60 L 13,55 L 14,20 L 15,80 L 16,57 L 22,60 Q 28,38 36,60 L 48,60 L 49,55 L 50,20 L 51,80 L 52,57 L 58,60 Q 64,38 72,60 L 84,60 L 85,55 L 86,20 L 87,80 L 88,57 L 94,60 Q 100,38 108,60 L 120,60 L 121,55 L 122,20 L 123,80 L 124,57 L 130,60 Q 136,38 144,60 L 156,60 L 157,55 L 158,20 L 159,80 L 160,57 L 166,60 Q 172,38 180,60 L 192,60 L 193,55 L 194,20 L 195,80 L 196,57 L 202,60 Q 208,38 216,60 L 228,60 L 229,55 L 230,20 L 231,80 L 232,57 L 238,60 Q 244,38 252,60 L 264,60 L 265,55 L 266,20 L 267,80 L 268,57 L 274,60 Q 280,38 288,60 L 300,60 L 301,55 L 302,20 L 303,80 L 304,57 L 310,60 Q 316,38 324,60 L 336,60 L 337,55 L 338,20 L 339,80 L 340,57 L 346,60 Q 352,38 360,60 L 372,60 L 373,55 L 374,20 L 375,80 L 376,57 L 382,60 Q 388,38 396,60 L 408,60 L 409,55 L 410,20 L 411,80 L 412,57 L 418,60 Q 424,38 432,60 L 444,60 L 445,55 L 446,20 L 447,80 L 448,57 L 454,60 Q 460,38 468,60 L 480,60 L 481,55 L 482,20 L 483,80 L 484,57 L 490,60 Q 496,38 504,60 L 516,60 L 517,55 L 518,20 L 519,80 L 520,57 L 526,60 Q 532,38 540,60'
    ]
  }
}

export default function ECGDisplay({ caseId, color }) {
  const pathRef = useRef(null)
  const ecg = ECG_PATHS[caseId] || ECG_PATHS.vagal

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength?.() || 2000
      pathRef.current.style.strokeDasharray = len
      pathRef.current.style.strokeDashoffset = len
      pathRef.current.style.animation = 'none'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          pathRef.current.style.animation = 'ecgDraw 2.5s ease forwards'
        })
      })
    }
  }, [caseId])

  return (
    <div style={{
      background: '#030712',
      borderRadius: 12,
      border: `1px solid ${color}33`,
      padding: '12px 16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header monitor */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'block', animation: 'blink 1s infinite' }} />
          <span style={{ fontSize: 11, color: '#10b981', fontFamily: 'monospace', letterSpacing: 1 }}>ECG — DII</span>
        </div>
        <span style={{ fontSize: 11, color: color, fontFamily: 'monospace', letterSpacing: 1 }}>25mm/s · 10mm/mV</span>
      </div>

      {/* Grille ECG */}
      <div style={{ position: 'relative' }}>
        <svg width="100%" viewBox="0 0 540 120" preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <pattern id={`grid-${caseId}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0d2a0d" strokeWidth="0.5"/>
            </pattern>
            <pattern id={`grid5-${caseId}`} width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill={`url(#grid-${caseId})`}/>
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0f3a0f" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="540" height="120" fill="#030712"/>
          <rect width="540" height="120" fill={`url(#grid5-${caseId})`}/>
          {/* Ligne isoélectrique */}
          <line x1="0" y1="60" x2="540" y2="60" stroke="#1a3a1a" strokeWidth="0.5" strokeDasharray="2,2"/>
          {/* Tracé ECG */}
          {ecg.segments.map((d, i) => (
            <path
              key={i}
              ref={i === 0 ? pathRef : null}
              d={d}
              fill="none"
              stroke={ecg.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animation: 'ecgDraw 2.5s ease forwards' }}
            />
          ))}
        </svg>
      </div>

      {/* Label */}
      <div style={{ marginTop: 8, fontSize: 11, color: ecg.color, fontFamily: 'monospace', letterSpacing: 0.5, textAlign: 'center' }}>
        {ecg.label}
      </div>
    </div>
  )
}
