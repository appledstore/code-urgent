// Scores cliniques calculables — intégrés dans le Bilan de chaque cas concerné

export const CALCULATORS = {

  cha2ds2: {
    id: 'cha2ds2',
    name: 'CHA₂DS₂-VASc',
    subtitle: 'Risque thromboembolique dans la FA non valvulaire',
    cases: ['fa'],
    type: 'checklist',
    criteria: [
      { key: 'ic',    label: 'Insuffisance cardiaque congestive / dysfonction VG', points: 1 },
      { key: 'hta',   label: 'Hypertension artérielle', points: 1 },
      { key: 'age75', label: 'Âge ≥ 75 ans', points: 2 },
      { key: 'diab',  label: 'Diabète', points: 1 },
      { key: 'avc',   label: 'AVC / AIT / embolie systémique antérieure', points: 2 },
      { key: 'vasc',  label: 'Maladie vasculaire (IDM, AOMI, plaque aortique)', points: 1 },
      { key: 'age65', label: 'Âge 65-74 ans', points: 1 },
      { key: 'sexe',  label: 'Sexe féminin', points: 1 },
    ],
    maxScore: 9,
    prefill: { hta: true, age65: true },
    interpret: (score, isFemale) => {
      const effectiveScore = isFemale ? score : score
      if (score === 0 && !isFemale) return { label: 'Risque faible', color: '#16a34a', reco: 'Pas d\'anticoagulation recommandée (ESC 2020)' }
      if (score <= 1) return { label: 'Risque modéré', color: '#d97706', reco: 'AOD à considérer si facteur de risque clinique' }
      return { label: 'Risque élevé', color: '#ef4444', reco: 'Anticoagulation orale recommandée — AOD en 1ère intention (HAS 2019)' }
    },
    source: 'Hindricks G et al. 2020 ESC AF Guidelines. DOI: 10.1093/eurheartj/ehaa612',
  },

  grace: {
    id: 'grace',
    name: 'Score GRACE simplifié',
    subtitle: 'Risque cardiovasculaire post-SCA',
    cases: ['stemi'],
    type: 'checklist',
    criteria: [
      { key: 'age65',   label: 'Âge ≥ 65 ans', points: 1 },
      { key: 'fc100',   label: 'FC ≥ 100 bpm', points: 1 },
      { key: 'pas100',  label: 'PAS ≤ 100 mmHg', points: 2 },
      { key: 'killip',  label: 'Killip ≥ II (signes IC : crépitants, OAP, choc)', points: 2 },
      { key: 'creat',   label: 'Créatinine > 200 µmol/L', points: 1 },
      { key: 'arrest',  label: 'Arrêt cardiaque à l\'admission', points: 3 },
      { key: 'stdev',   label: 'Déviation du segment ST à l\'ECG', points: 2 },
      { key: 'enzymes', label: 'Élévation des enzymes cardiaques (troponine)', points: 1 },
    ],
    maxScore: 13,
    prefill: { pas100: true, stdev: true, enzymes: true },
    interpret: (score) => {
      if (score <= 3)  return { label: 'Risque faible',         color: '#16a34a', reco: 'Mortalité intrahospitalière < 1% — stratégie invasive < 72h' }
      if (score <= 7)  return { label: 'Risque intermédiaire',  color: '#d97706', reco: 'Coronarographie dans les 24-72h' }
      return           { label: 'Risque élevé',                 color: '#ef4444', reco: 'STEMI = coronarographie < 90 min (délai porte-ballon)' }
    },
    source: 'Granger CB et al. JAMA 2003;290:636-644. DOI: 10.1001/jama.290.5.636',
  },

  wells_ep: {
    id: 'wells_ep',
    name: 'Score de Wells EP',
    subtitle: 'Probabilité pré-test d\'embolie pulmonaire',
    cases: ['ep'],
    type: 'checklist',
    criteria: [
      { key: 'signes_tvp',  label: 'Signes cliniques de TVP (douleur + œdème membre inf.)', points: 3 },
      { key: 'diag_alt',   label: 'Autre diagnostic moins probable que l\'EP', points: 3 },
      { key: 'fc100',      label: 'FC > 100 bpm', points: 1.5 },
      { key: 'immob',      label: 'Immobilisation ≥ 3 jours ou chirurgie < 4 semaines', points: 1.5 },
      { key: 'tvp_ep_atcd',label: 'TVP ou EP antérieure documentée', points: 1.5 },
      { key: 'hemoptysie', label: 'Hémoptysie', points: 1 },
      { key: 'cancer',     label: 'Cancer actif ou traité < 6 mois', points: 1 },
    ],
    maxScore: 12.5,
    prefill: { diag_alt: true, fc100: true, immob: true },
    interpret: (score) => {
      if (score <= 2) return { label: 'Probabilité faible',         color: '#16a34a', reco: 'D-dimères → si < 500 µg/L, EP exclue. Angio-CT si positifs.' }
      if (score <= 6) return { label: 'Probabilité intermédiaire',  color: '#d97706', reco: 'D-dimères ou angio-CT selon disponibilité et préférence clinique' }
      return          { label: 'Probabilité élevée',                color: '#ef4444', reco: 'Angio-CT d\'emblée — D-dimères inutiles à ce score' }
    },
    source: 'Wells PS et al. Thromb Haemost 2000;83:416-420. ESC EP Guidelines 2019. DOI: 10.1093/eurheartj/ehz405',
  },

  curb65: {
    id: 'curb65',
    name: 'CURB-65',
    subtitle: 'Sévérité de la pneumonie communautaire',
    cases: ['pneumonie'],
    type: 'checklist',
    criteria: [
      { key: 'confusion', label: 'Confusion (désorientation tps/espace/personne, nouveau)', points: 1 },
      { key: 'uree',      label: 'Urée > 7 mmol/L (19,6 mg/dL)', points: 1 },
      { key: 'fr30',      label: 'Fréquence respiratoire ≥ 30/min', points: 1 },
      { key: 'pa',        label: 'PAS < 90 mmHg ou PAD ≤ 60 mmHg', points: 1 },
      { key: 'age65',     label: 'Âge ≥ 65 ans', points: 1 },
    ],
    maxScore: 5,
    prefill: { age65: true },
    interpret: (score) => {
      if (score <= 1) return { label: 'Faible sévérité',    color: '#16a34a', reco: 'Traitement ambulatoire envisageable (si conditions sociales satisfaisantes)' }
      if (score <= 2) return { label: 'Sévérité modérée',   color: '#d97706', reco: 'Hospitalisation à envisager — surveillance clinique rapprochée' }
      return          { label: 'Sévérité élevée',           color: '#ef4444', reco: 'Hospitalisation obligatoire. Score 4-5 : envisager soins intensifs (SRLF 2020)' }
    },
    source: 'Lim WS et al. Thorax 2003;58:377-382. DOI: 10.1136/thorax.58.5.377',
  },

  glasgow: {
    id: 'glasgow',
    name: 'Score de Glasgow (GCS)',
    subtitle: 'Évaluation de l\'état de conscience',
    cases: ['tc', 'sepsis', 'intox_co', 'hypoglycemie', 'meningite'],
    type: 'glasgow',
    yeux: [
      { val: 4, label: 'Y4 — Ouverture spontanée' },
      { val: 3, label: 'Y3 — À la parole' },
      { val: 2, label: 'Y2 — À la douleur' },
      { val: 1, label: 'Y1 — Absente' },
    ],
    verbale: [
      { val: 5, label: 'V5 — Orientée, cohérente' },
      { val: 4, label: 'V4 — Confuse' },
      { val: 3, label: 'V3 — Mots inappropriés' },
      { val: 2, label: 'V2 — Sons incompréhensibles' },
      { val: 1, label: 'V1 — Absente' },
    ],
    motrice: [
      { val: 6, label: 'M6 — Obéit aux ordres' },
      { val: 5, label: 'M5 — Localise la douleur' },
      { val: 4, label: 'M4 — Retrait à la douleur' },
      { val: 3, label: 'M3 — Flexion anormale (décortication)' },
      { val: 2, label: 'M2 — Extension (décérébration)' },
      { val: 1, label: 'M1 — Aucune réponse' },
    ],
    interpret: (score) => {
      if (score >= 13) return { label: 'TC léger (GCS 13-15)',  color: '#16a34a', reco: 'Scanner si critères SFMU. Surveillance 4-6h. Éducation sortie.' }
      if (score >= 9)  return { label: 'TC modéré (GCS 9-12)',  color: '#d97706', reco: 'Scanner cérébral systématique. Hospitalisation. Avis neurochirurgie.' }
      return           { label: 'TC grave (GCS ≤ 8)',           color: '#ef4444', reco: 'Intubation oro-trachéale. Scanner urgent. Neurochirurgie de garde.' }
    },
    source: 'Teasdale G, Jennett B. Lancet 1974;2:81-84. DOI: 10.1016/S0140-6736(74)91639-0',
  },

  blatchford: {
    id: 'blatchford',
    name: 'Glasgow-Blatchford',
    subtitle: 'Risque d\'intervention en hémorragie digestive haute',
    cases: ['hdh'],
    type: 'checklist',
    criteria: [
      { key: 'uree8',    label: 'Urée ≥ 8 mmol/L', points: 2 },
      { key: 'uree10',   label: 'Urée ≥ 10 mmol/L (score additionnel)', points: 1 },
      { key: 'hb12',     label: 'Hb 12-12,9 g/dL (H) ou 10-11,9 g/dL (F)', points: 1 },
      { key: 'hb10',     label: 'Hb < 10 g/dL', points: 2 },
      { key: 'pas100',   label: 'PAS 100-109 mmHg', points: 1 },
      { key: 'pas90',    label: 'PAS < 90 mmHg', points: 2 },
      { key: 'fc100',    label: 'FC ≥ 100 bpm', points: 1 },
      { key: 'melanena', label: 'Méléna', points: 1 },
      { key: 'syncope',  label: 'Syncope à l\'admission', points: 2 },
      { key: 'liver',    label: 'Maladie hépatique chronique', points: 2 },
      { key: 'cardiac',  label: 'Insuffisance cardiaque', points: 2 },
    ],
    maxScore: 17,
    prefill: { pas90: true, fc100: true, syncope: true },
    interpret: (score) => {
      if (score === 0) return { label: 'Risque très faible', color: '#16a34a', reco: 'Sortie possible — fibroscopie en ambulatoire dans les 72h' }
      if (score <= 5)  return { label: 'Risque faible',      color: '#d97706', reco: 'Fibroscopie dans les 24h — hospitalisation pour surveillance' }
      return           { label: 'Risque élevé',              color: '#ef4444', reco: 'Fibroscopie urgente < 12h. Transfusion probable. Soins continus.' }
    },
    source: 'Blatchford O et al. Lancet 2000;356:1318-21. DOI: 10.1016/S0140-6736(00)02816-6',
  },

}

// Map case ID → calculator ID
export const CASE_CALCULATOR_MAP = {}
Object.values(CALCULATORS).forEach(calc => {
  calc.cases.forEach(caseId => {
    if (!CASE_CALCULATOR_MAP[caseId]) CASE_CALCULATOR_MAP[caseId] = []
    CASE_CALCULATOR_MAP[caseId].push(calc.id)
  })
})
