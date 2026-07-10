// Sources : SFMU, ESC, HAS, Cochrane, SAMU-Urgences de France
// Lot 1 : cas 1-10

export const CASES = [

  // ── CAS 1 ── MALAISE VAGAL
  {
    id: "vagal", title: "Malaise vagal", subtitle: "Syncope réflexe neuromédiée",
    color: "#3B82F6", difficulty: 1, specialty: "Cardio",
    vignette: { headline: "Femme de 22 ans, perte de connaissance", context: "Amenée par ses camarades depuis l'amphi. Pâle, couverte de sueur froide.", tags: ["Urgence ≥ 1h", "GCS 15", "FC basse"] },
    patient: { name: "Sophie M.", age: 22, sex: "F", context: "Étudiante, debout depuis 3h en amphi, n'a pas mangé ce matin", arriving: "Amenée aux urgences par ses camarades après perte de connaissance brève" },
    vitals: { pa: "90/55", fc: 48, spo2: 98, temp: 36.8, fr: 14, glasgow: 15 },
    symptoms: ["Prodromes : chaleur, nausées, vue floue, bourdonnements d'oreilles","Perte de connaissance brève < 1 min","Réveil rapide, sans confusion","Pâleur, sudation froide","Résolution spontanée en décubitus"],
    ecg: { rythme: "Sinusal", fc: 48, pr: 200, qrs: 80, qt: 420, anomalies: [], image: "vagal", description: "Bradycardie sinusale modérée. Aucun trouble de conduction. QT normal." },
    physiopathology: {
      title: "Réflexe neuromédiée vasovasale",
      steps: [
        { icon: "🧠", text: "Stimulus déclencheur : orthostatisme prolongé, stress, douleur, chaleur" },
        { icon: "❤️", text: "Activation du réflexe de Bezold-Jarisch : mécanorécepteurs cardiaques stimulés par hypovolémie relative" },
        { icon: "⬇️", text: "Activation parasympathique massive → bradycardie (composante cardioinhibitrice)" },
        { icon: "🩸", text: "Vasodilatation périphérique → chute de la PA (composante vasodépressive)" },
        { icon: "💡", text: "Hypoperfusion cérébrale transitoire → perte de conscience < 20 sec" }
      ],
      source: "Brignole M et al. 2018 ESC Guidelines syncope. Eur Heart J. 2018;39:1883-1948. DOI: 10.1093/eurheartj/ehy037"
    },
    dd: [
      { diagnosis: "Malaise vagal", correct: true, explanation: "Contexte classique : jeune femme, orthostatisme, prodromes, résolution rapide en décubitus" },
      { diagnosis: "Trouble du rythme", correct: false, explanation: "ECG normal, bradycardie sinusale réactionnelle, pas de QT long ni de pause" },
      { diagnosis: "Hypoglycémie", correct: false, explanation: "Dextro à faire systématiquement, mais réveil immédiat sans confusion oriente contre" },
      { diagnosis: "Épilepsie", correct: false, explanation: "Pas de convulsions, pas de confusion post-critique, réveil immédiat" }
    ],
    gestures: [
      { id: "decubitus", name: "Décubitus dorsal, jambes surélevées", correct: true, description: "Améliore le retour veineux et la perfusion cérébrale immédiatement", steps: ["Allonger le patient sur le dos", "Surélever les jambes à 45°", "Ne pas mobiliser si trauma cervical suspecté"] },
      { id: "valsalva", name: "Manœuvre de Valsalva", correct: false, description: "Indiquée dans la TSV, pas dans le vagal — aggraverait la bradycardie" },
      { id: "atropine", name: "Atropine IV", correct: false, description: "Réservée aux bradycardies symptomatiques persistantes — pas en première intention ici" }
    ],
    keyPoints: ["Le tilt-test confirme le diagnostic en cas de doute","Aucun bilan complémentaire obligatoire si tableau typique (SFMU 2022)","Éducation : manœuvres de contre-pression (serrer les poings, croiser les jambes) dès les prodromes","Pas de traitement médicamenteux systématique"],
    sourcesFull: ["Brignole M et al. ESC Guidelines syncope 2018. DOI: 10.1093/eurheartj/ehy037","SFMU. Recommandations Syncope 2022. sfmu.org","Sheldon RS et al. 2015 Heart Rhythm Society Expert Consensus Statement. DOI: 10.1016/j.hrthm.2015.05.025"]
  },

  // ── CAS 2 ── FIBRILLATION AURICULAIRE
  {
    id: "fa", title: "Fibrillation auriculaire", subtitle: "Trouble du rythme supra-ventriculaire",
    color: "#EF4444", difficulty: 2, specialty: "Cardio",
    vignette: { headline: "Homme de 68 ans, palpitations depuis 3h", context: "Sa femme l'amène pour battements irréguliers et souffle court à l'effort.", tags: ["Urgence < 2h", "Rythmique ?", "ATCD HTA"] },
    patient: { name: "Bernard L.", age: 68, sex: "M", context: "HTA connue, sous ramipril. Pas d'ATCD de FA.", arriving: "Amené par sa femme pour palpitations, légère dyspnée d'effort" },
    vitals: { pa: "145/90", fc: 128, spo2: 96, temp: 37.1, fr: 18, glasgow: 15 },
    symptoms: ["Palpitations irrégulières depuis 3h","Légère dyspnée à l'effort","Légère asthénie","Pas de douleur thoracique","Pas de syncope"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 128, pr: null, qrs: 80, qt: 380, anomalies: ["Absence d'ondes P","Ligne de base irrégulière (ondulations f)","Intervalles RR totalement irréguliers"], image: "fa", description: "FA à réponse ventriculaire rapide ~128 bpm. Activité atriale chaotique. QRS fins." },
    physiopathology: {
      title: "Désorganisation électrique atriale",
      steps: [
        { icon: "⚡", text: "Multiples foyers ectopiques (veines pulmonaires +++) + circuits de réentrée dans l'oreillette" },
        { icon: "🌀", text: "400 à 600 dépolarisations atriales/min anarchiques → pas de contraction atriale efficace" },
        { icon: "🚪", text: "Le nœud AV filtre et laisse passer de façon irrégulière → rythme ventriculaire irrégulier" },
        { icon: "🩸", text: "Perte de la systole atriale = perte de 20-30% du débit cardiaque" },
        { icon: "🔴", text: "Stase atriale gauche → thrombus (auricule) → risque embolique cérébral" }
      ],
      source: "Hindricks G et al. 2020 ESC Guidelines AF. Eur Heart J. 2021;42:373-498. DOI: 10.1093/eurheartj/ehaa612"
    },
    dd: [
      { diagnosis: "Fibrillation auriculaire", correct: true, explanation: "ECG : absence d'ondes P, activité f, RR totalement irréguliers — pathognomonique" },
      { diagnosis: "Flutter auriculaire", correct: false, explanation: "Flutter : ondes F en dents de scie 300/min, conduction AV régulière 2:1 → RR réguliers" },
      { diagnosis: "TSV", correct: false, explanation: "TSV : ondes P rétrogrades mais RR RÉGULIERS — ici irréguliers" },
      { diagnosis: "Extrasystoles fréquentes", correct: false, explanation: "Extrasystoles : irrégularités périodiques, pas le chaos continu de la FA" }
    ],
    gestures: [
      { id: "cha2ds2", name: "Calculer le score CHA₂DS₂-VASc", correct: true, description: "Évalue le risque thrombo-embolique → décision d'anticoagulation", steps: ["H : HTA (+1) → Bernard = +1","A : Âge 65-74 ans (+1) → +1","Score Bernard = 2 → anticoagulation recommandée (AOD)"] },
      { id: "cardioversion", name: "Cardioversion électrique (CEE)", correct: true, description: "Si FA < 48h et instabilité : CEE synchronisé 200J biphasique après sédation", steps: ["Vérifier durée < 48h ou anticoagulation ≥ 3 semaines","Sédation : propofol","CEE synchronisé onde R : 200J biphasique","Monitoring continu post-CEE"] },
      { id: "amiodarone", name: "Amiodarone IV en charge", correct: false, description: "Option 2e ligne pour contrôle de fréquence ou cardioversion pharmacologique — attention dysthyroïdie" }
    ],
    keyPoints: ["FA < 48h : cardioversion possible sans ETO préalable","FA > 48h ou durée inconnue : anticoagulation ≥ 3 semaines AVANT cardioversion","Score CHA₂DS₂-VASc guide l'anticoagulation au long cours (AOD)","Contrôle de fréquence cible : < 110 bpm en 1ère intention (ESC 2020)","Rechercher et traiter la cause : infection, hyperthyroïdie, HTA non contrôlée"],
    sourcesFull: ["Hindricks G et al. 2020 ESC AF Guidelines. DOI: 10.1093/eurheartj/ehaa612","HAS. Fibrillation auriculaire non valvulaire 2019.","Van Gelder IC et al. RACE II. NEJM 2010. DOI: 10.1056/NEJMoa1001337"]
  },

  // ── CAS 3 ── TSV
  {
    id: "tsv", title: "Tachycardie Supra-Ventriculaire", subtitle: "Réentrée nodale (AVNRT)",
    color: "#8B5CF6", difficulty: 2, specialty: "Cardio",
    vignette: { headline: "Homme de 34 ans, cœur qui s'emballe", context: "Début brutal, 'comme un interrupteur'. Déjà eu ça adolescent.", tags: ["Urgence < 1h", "Régulier", "Récidivant"] },
    patient: { name: "Karim A.", age: 34, sex: "M", context: "Pas d'ATCD cardiaque. Épisodes similaires depuis adolescence.", arriving: "Consulte pour palpitations régulières à début brutal depuis 45 min" },
    vitals: { pa: "110/70", fc: 178, spo2: 98, temp: 36.9, fr: 16, glasgow: 15 },
    symptoms: ["Palpitations régulières, début brutal ('coup de fouet')","Légère sensation vertigineuse","Pas de syncope","Antécédents d'épisodes similaires depuis adolescence"],
    ecg: { rythme: "Tachycardie régulière", fc: 178, pr: null, qrs: 80, qt: 290, anomalies: ["Tachycardie régulière 178 bpm","QRS fins","Ondes P rétrogrades pseudo-S en D2/D3/aVF","RP court < 70ms"], image: "tsv", description: "Tachycardie régulière à QRS fins 178 bpm. Ondes P rétrogrades en pseudo-S en D2/D3/aVF — AVNRT typique." },
    physiopathology: {
      title: "Circuit de réentrée dans le nœud AV",
      steps: [
        { icon: "🔄", text: "Le nœud AV possède 2 voies : voie rapide (α) et voie lente (β)" },
        { icon: "⚡", text: "Une extrasystole bloque la voie rapide et descend par la voie lente" },
        { icon: "🔁", text: "Remonte par la voie rapide rétablie → circuit fermé = réentrée" },
        { icon: "📡", text: "Activation atriale et ventriculaire quasi simultanée → P rétrograde dans/après le QRS" },
        { icon: "🚨", text: "FC régulière 150-250 bpm, début et fin brusques" }
      ],
      source: "Page RL et al. 2015 ACC/AHA/HRS SVT Guideline. JACC. 2016;67:e27-e115. DOI: 10.1016/j.jacc.2015.08.856"
    },
    dd: [
      { diagnosis: "TSV / AVNRT", correct: true, explanation: "QRS fins réguliers, P rétrogrades pseudo-S, ATCD similaires, début brutal — typique" },
      { diagnosis: "Flutter auriculaire 2:1", correct: false, explanation: "Flutter 2:1 : ondes F à 300/min → FC ~150 bpm, RR réguliers mais ondes F visibles en V1" },
      { diagnosis: "Tachycardie sinusale", correct: false, explanation: "Tachycardie sinusale : P avant QRS, fc rarement > 150, cause identifiable" },
      { diagnosis: "Fibrillation auriculaire", correct: false, explanation: "FA : rythme IRRÉGULIER — ici FC parfaitement régulière à 178 bpm" }
    ],
    gestures: [
      { id: "revert", name: "Manœuvre de Valsalva modifiée (REVERT)", correct: true, description: "1ère intention. Efficacité ~43%. Stimule le nerf vague → bloque le circuit.", steps: ["Expiration forcée dans seringue 10mL pendant 15 sec (40mmHg)","Allonger immédiatement en décubitus","Surélever les jambes à 45° pendant 15 sec","Revenir en position assise","Contrôle ECG"] },
      { id: "adeno", name: "Adénosine IV 6mg (Krenosin®)", correct: true, description: "Si Valsalva échoue. Bloc AV transitoire interrompt le circuit. Efficacité > 90%.", steps: ["VVP large au pli du coude","6mg IV bolus très rapide + 20mL sérum salé flush","Si échec : 12mg IV (max 2x)","Prévenir : flush, dyspnée, malaise < 30 sec","Monitoring ECG continu"] },
      { id: "flecainide", name: "Flécaïnide IV", correct: false, description: "2e ligne si adénosine inefficace et pas de cardiopathie — jamais en 1ère intention" }
    ],
    keyPoints: ["Valsalva MODIFIÉE (REVERT) : jambes surélevées immédiatement → efficacité x2.5 vs classique","Adénosine CI si asthme sévère, bloc AV 2°/3°, WPW","Si instabilité hémodynamique : CEE synchronisé d'emblée","Bilan : ECG de base (rechercher WPW), Holter, avis cardio","Prévention : bêta-bloquants ou ablation par RF (curatif)"],
    sourcesFull: ["Page RL et al. 2015 ACC/AHA/HRS SVT Guidelines. DOI: 10.1016/j.jacc.2015.08.856","Appelboam A et al. REVERT trial. Lancet 2015;386:1747-53. DOI: 10.1016/S0140-6736(15)61485-4","Brugada J et al. 2019 ESC SVT Guidelines. DOI: 10.1093/eurheartj/ehz467"]
  },

  // ── CAS 4 ── STEMI
  {
    id: "stemi", title: "Infarctus du myocarde ST+", subtitle: "STEMI antérieur — urgence absolue",
    color: "#DC2626", difficulty: 3, specialty: "Cardio",
    vignette: { headline: "Homme de 55 ans, douleur thoracique oppressante", context: "Douleur en étau depuis 45 min, irradiant dans le bras gauche. Sueurs profuses.", tags: ["URGENCE VITALE", "Douleur > 30 min", "Irradiation bras G"] },
    patient: { name: "Michel D.", age: 55, sex: "M", context: "Tabagique 30 PA, dyslipidémie, sédentaire. Pas de cardiopathie connue.", arriving: "SMUR : douleur thoracique écrasante depuis 45 min, sueurs, nausées" },
    vitals: { pa: "100/70", fc: 95, spo2: 94, temp: 37.0, fr: 22, glasgow: 15 },
    symptoms: ["Douleur thoracique en étau, écrasante (8/10)","Irradiation bras gauche et mâchoire","Sueurs profuses, nausées","Dyspnée modérée","Début au repos, il y a 45 min"],
    ecg: { rythme: "Sinusal", fc: 95, pr: 160, qrs: 100, qt: 400, anomalies: ["Sus-décalage ST convexe ≥ 2mm en V1-V5", "Miroir en D2/D3/aVF (sous-décalage)", "Onde Q en formation en V2-V3", "Image de Pardee (QRS-ST-T fusion)"], image: "stemi", description: "STEMI antérieur étendu. Sus-décalage convexe V1-V5. Image miroir inférieure. Occlusion IVA proximale probable." },
    physiopathology: {
      title: "Rupture de plaque et thrombose coronaire",
      steps: [
        { icon: "🫀", text: "Plaque d'athérome vulnérable dans l'IVA : cap fibreux mince, cœur lipidique large" },
        { icon: "💥", text: "Rupture ou érosion de la plaque → exposition du collagène sous-endothélial" },
        { icon: "🔴", text: "Activation plaquettaire + cascade de coagulation → thrombus occlusif" },
        { icon: "⏱️", text: "Ischémie totale → nécrose progressive en onde de front : 20 min subendocarde → 6h transmural" },
        { icon: "🚨", text: "Chaque minute compte : 'Time is muscle' — 1,9 million de cardiomyocytes meurent/minute" }
      ],
      source: "Ibanez B et al. 2017 ESC STEMI Guidelines. Eur Heart J. 2018;39:119-177. DOI: 10.1093/eurheartj/ehx393"
    },
    dd: [
      { diagnosis: "STEMI antérieur", correct: true, explanation: "Sus-décalage convexe V1-V5, miroir inférieur, douleur typique > 30 min — diagnostic clinico-ECG immédiat" },
      { diagnosis: "Péricardite aiguë", correct: false, explanation: "Péricardite : sus-décalage concave 'en selle', diffus, pas de miroir, frottement péricardique" },
      { diagnosis: "Embolie pulmonaire", correct: false, explanation: "EP : S1Q3T3, tachycardie, BBD, pas de sus-décalage localisé" },
      { diagnosis: "Dissection aortique", correct: false, explanation: "Dissection : douleur migratrice, asymétrie PA membres, pas de sus-décalage typique" }
    ],
    gestures: [
      { id: "mona", name: "MONA + transfert immédiat salle de cath", correct: true, description: "Morphine, Oxygène si SpO2<90%, Nitrates si PAS>90, Aspirine 250mg + Ticagrelor 180mg", steps: ["ECG 12D immédiat + transmission au cardiologue", "Aspirine 250mg IV (ou PO si pas de VVP)", "Ticagrelor 180mg PO (ou Prasugrel si pas d'ATCD AVC)", "Héparine non fractionnée 60 UI/kg IV", "Oxygène si SpO2 < 90% seulement", "Transport immédiat salle de cathétérisme (objectif door-to-balloon < 90 min)"] },
      { id: "thrombolyse", name: "Thrombolyse (si délai ICP > 120 min)", correct: true, description: "Ténectéplase IV si pas d'accès ICP dans les 120 min. Transfert immédiat après.", steps: ["Vérifier CI absolues (ATCD AVC, chirurgie < 3 sem, saignement actif)","Ténectéplase IV bolus selon poids","Anticoagulation concomitante","Transfert immédiat centre ICP"] },
      { id: "attendre", name: "Surveillance simple en UHCD", correct: false, description: "JAMAIS : chaque minute perdue = cardiomyocytes nécrosés définitivement" }
    ],
    keyPoints: ["Objectif door-to-balloon < 90 min (ICP primaire)", "Thrombolyse si délai ICP > 120 min et pas de CI", "Double antiagrégation systématique (aspirine + P2Y12)", "Ne PAS donner O2 si SpO2 ≥ 90% (aggrave le pronostic)", "ECG répété toutes les 30 min si doute"],
    sourcesFull: ["Ibanez B et al. 2017 ESC STEMI Guidelines. DOI: 10.1093/eurheartj/ehx393", "HAS. Prise en charge de l'infarctus ST+ 2019.", "Stub D et al. AVOID trial O2 in STEMI. Circulation 2015. DOI: 10.1161/CIRCULATIONAHA.114.014494"]
  },

  // ── CAS 5 ── EMBOLIE PULMONAIRE
  {
    id: "ep", title: "Embolie pulmonaire massive", subtitle: "EP à haut risque — instabilité hémodynamique",
    color: "#7C3AED", difficulty: 3, specialty: "Cardio-Pneumo",
    vignette: { headline: "Femme de 45 ans, dyspnée brutale et malaise", context: "Retour d'un long courrier il y a 48h. Douleur basithoracique droite, crachats rosés.", tags: ["URGENCE VITALE", "Retour vol long", "SpO2 chutée"] },
    patient: { name: "Isabelle C.", age: 45, sex: "F", context: "Contraception oestroprogestative, retour New York 48h. Jambe droite légèrement gonflée.", arriving: "15 : douleur thoracique droite brutale + dyspnée, SpO2 84% à l'arrivée" },
    vitals: { pa: "85/50", fc: 122, spo2: 84, temp: 37.4, fr: 28, glasgow: 14 },
    symptoms: ["Dyspnée brutale au repos (repos en avion)","Douleur basithoracique droite pleurétique","Hémoptysie (crachats rosés)","Jambe droite gonflée, douloureuse (TVP ?)","Pré-syncope, sensation de mort imminente"],
    ecg: { rythme: "Sinusal tachycarde", fc: 122, pr: 160, qrs: 110, qt: 380, anomalies: ["Tachycardie sinusale", "S1Q3T3 (S en D1, Q et T inversée en D3)", "Bloc de branche droit incomplet", "Inversion T V1-V4"], image: "ep", description: "Tachycardie sinusale. Aspect S1Q3T3. BBD incomplet. Inversion T V1-V4. Surcharge VD aiguë." },
    physiopathology: {
      title: "Obstruction artérielle pulmonaire et choc obstructif",
      steps: [
        { icon: "🦵", text: "TVP (souvent membres inférieurs) → thrombus fragmenté migrant vers les artères pulmonaires" },
        { icon: "🫁", text: "Obstruction vasculaire pulmonaire → augmentation brutale de la post-charge du VD" },
        { icon: "💔", text: "VD se dilate, septum paradoxal → compression du VG → chute du débit cardiaque" },
        { icon: "🩸", text: "Zones non perfusées mais ventilées → effet espace mort → hypoxémie réfractaire" },
        { icon: "💀", text: "EP massive (instabilité hémodynamique) : mortalité 30% sans traitement immédiat" }
      ],
      source: "Konstantinides SV et al. 2019 ESC EP Guidelines. Eur Heart J. 2020;41:543-603. DOI: 10.1093/eurheartj/ehz405"
    },
    dd: [
      { diagnosis: "Embolie pulmonaire massive", correct: true, explanation: "Triade : dyspnée brutale + douleur pleurétique + hémoptysie. Contexte TVP + contraception + long courrier. S1Q3T3 ECG." },
      { diagnosis: "Pneumothorax spontané", correct: false, explanation: "Pneumothorax : pas d'hémoptysie, pas de contexte TVP, absence de murmure vésiculaire unilatéral" },
      { diagnosis: "SCA / STEMI", correct: false, explanation: "STEMI : sus-décalage localisé, pas de S1Q3T3, douleur en étau irradiant bras gauche" },
      { diagnosis: "Crise d'asthme sévère", correct: false, explanation: "Asthme : sibilants diffus, pas d'hémoptysie, pas de contexte thrombo-embolique" }
    ],
    gestures: [
      { id: "thrombolyse_ep", name: "Thrombolyse systémique en urgence", correct: true, description: "EP massive avec instabilité hémodynamique : rtPA 100mg/2h IV (ou 0.6mg/kg en 15 min si arrêt cardiaque)", steps: ["Vérifier CI absolues (ATCD AVC hémorragique, chirurgie < 3 sem)","rtPA (Actilyse®) 100mg IV sur 2h","Arrêt héparine pendant la thrombolyse","Reprise héparine quand TCA < 80 sec","Surveillance toutes les 15 min (saignement, neurologie)"] },
      { id: "heparine_ep", name: "Héparine non fractionnée IV", correct: true, description: "Anticoagulation immédiate si EP confirmée et pas d'instabilité → HBPM ou HNF", steps: ["Bolus HNF 80 UI/kg IV","Puis 18 UI/kg/h IVSE","Objectif TCA 60-80 sec","Relais AOD après stabilisation"] },
      { id: "attente_ep", name: "Anticoagulation seule et attendre", correct: false, description: "Insuffisant si EP massive avec instabilité : thrombolyse ou embolectomie chirurgicale nécessaire" }
    ],
    keyPoints: ["EP massive = instabilité hémodynamique → thrombolyse systémique en urgence", "Score PESI ou sPESI pour stratifier le risque", "AngioTDM pulmonaire : gold standard diagnostique (si stable)", "Écho cœur : VD dilaté, septum paradoxal = EP grave", "Prophylaxie TVP en post-opératoire et lors de voyages longs"],
    sourcesFull: ["Konstantinides SV et al. 2019 ESC EP Guidelines. DOI: 10.1093/eurheartj/ehz405", "Meyer G et al. PEITHO trial. NEJM 2014. DOI: 10.1056/NEJMoa1302662", "HAS. Embolie pulmonaire 2021."]
  },

  // ── CAS 6 ── DISSECTION AORTIQUE
  {
    id: "dissection", title: "Dissection aortique type A", subtitle: "Urgence chirurgicale absolue",
    color: "#B91C1C", difficulty: 3, specialty: "Cardio-Chir",
    vignette: { headline: "Homme de 62 ans, douleur déchirante dans le dos", context: "Douleur brutale 'comme une déchirure' irradiant du thorax vers le dos et l'abdomen. HTA non contrôlée.", tags: ["URGENCE VITALE", "Douleur migratrice", "HTA mal contrôlée"] },
    patient: { name: "Robert T.", age: 62, sex: "M", context: "HTA sévère non traitée, Marfan probable (grand, long, arachnodactylie)", arriving: "SMUR : douleur déchirante thoracique + dorsale brutale depuis 20 min, asymétrie TA" },
    vitals: { pa: "180/100 bras D / 120/80 bras G", fc: 105, spo2: 96, temp: 37.0, fr: 20, glasgow: 15 },
    symptoms: ["Douleur thoracique brutale 'déchirante' maximale d'emblée (10/10)","Migration : thorax → dos → abdomen","Asymétrie de PA entre les deux bras > 20 mmHg","Pas d'irradiation bras gauche","Angoisse intense, sentiment de mort imminente"],
    ecg: { rythme: "Sinusal tachycarde", fc: 105, pr: 160, qrs: 90, qt: 390, anomalies: ["Hypertrophie VG (critères de Sokolow)","Tachycardie sinusale modérée","Pas de sus-décalage ST (important pour DD avec STEMI)"], image: "stemi", description: "Tachycardie sinusale. HVG. Pas de sus-décalage. ECG ne confirme pas le diagnostic mais élimine un STEMI." },
    physiopathology: {
      title: "Déchirure de l'intima aortique",
      steps: [
        { icon: "🫀", text: "HTA chronique → dégénérescence kystique de la media aortique (medionécrose)" },
        { icon: "💥", text: "Déchirure de l'intima (souvent aorte ascendante ou isthme) → faux chenal entre intima et adventice" },
        { icon: "🩸", text: "Sang sous pression dans le faux chenal → progression antérograde ET rétrograde" },
        { icon: "🔌", text: "Dissection peut occlure les ostia coronaires, carotides, artères rénales, mésentériques" },
        { icon: "💀", text: "Type A (aorte ascendante) : risque tamponnade, IM aiguë, AVC — mortalité 1-2%/heure sans chirurgie" }
      ],
      source: "Erbel R et al. 2014 ESC Aortic Disease Guidelines. Eur Heart J. 2014;35:2873-2926. DOI: 10.1093/eurheartj/ehu281"
    },
    dd: [
      { diagnosis: "Dissection aortique type A", correct: true, explanation: "Douleur maximale d'emblée, déchirante, migratrice, asymétrie TA, HTA sévère — ne JAMAIS anticoaguler avant élimination" },
      { diagnosis: "STEMI", correct: false, explanation: "STEMI : douleur progressive en étau, sus-décalage ECG, irradiation bras G, pas d'asymétrie TA" },
      { diagnosis: "Embolie pulmonaire", correct: false, explanation: "EP : douleur pleurétique, dyspnée, S1Q3T3, pas d'asymétrie TA, pas de migration" },
      { diagnosis: "Colique néphrétique", correct: false, explanation: "Colique rénale : douleur lombaire irradiant en bas, agitation, mais pas de composante thoracique ni TA asymétrique" }
    ],
    gestures: [
      { id: "tdo", name: "Angio-TDM thoraco-abdomino-pelvien en urgence", correct: true, description: "Gold standard diagnostique. Avant tout traitement si patient stable.", steps: ["VVP large calibre + bilan sanguin (NFS, TP/TCA, groupe, troponine)", "Angio-TDM TAP avec injection (sans délai)", "Chirurgien cardiovasculaire prévenu IMMÉDIATEMENT", "Objectif PA : 100-120 mmHg systolique (bêtabloquant IV labetalol ou esmolol)"] },
      { id: "controle_pa", name: "Contrôle tensionnel strict IV", correct: true, description: "Objectif PA systolique 100-120 mmHg — ralentit la progression du faux chenal", steps: ["Labetalol IV (si pas de CI bêtabloquant)", "Ou nicardipine IV IVSE", "Antalgiques IV (morphine)", "Éviter toute anticoagulation avant confirmation du diagnostic"] },
      { id: "anticoag", name: "Héparine IV immédiate", correct: false, description: "CONTRE-INDIQUÉE si dissection type A — risque d'hémopéricarde et de tamponnade fatale" }
    ],
    keyPoints: ["Ne JAMAIS anticoaguler avant élimination d'une dissection aortique", "Type A (aorte ascendante) → chirurgie d'urgence dans les 6h", "Type B (aorte descendante) → traitement médical en 1ère intention", "Mortalité type A non opéré : 50% à 48h", "Signe clé : asymétrie TA > 20 mmHg entre les deux bras"],
    sourcesFull: ["Erbel R et al. 2014 ESC Aortic Disease Guidelines. DOI: 10.1093/eurheartj/ehu281", "Hagan PG et al. IRAD Registry. JAMA 2000. DOI: 10.1001/jama.283.7.897"]
  },

  // ── CAS 7 ── ANAPHYLAXIE
  {
    id: "anaphylaxie", title: "Choc anaphylactique", subtitle: "Réaction allergique sévère IgE-médiée",
    color: "#F59E0B", difficulty: 2, specialty: "Urgences générales",
    vignette: { headline: "Femme de 28 ans, urticaire géant et chute de PA", context: "A mangé des crevettes il y a 20 min. Gorge qui gonfle, difficultés à avaler.", tags: ["URGENCE VITALE", "Allergie alimentaire", "Stridor laryngé"] },
    patient: { name: "Leïla B.", age: 28, sex: "F", context: "Allergie aux crustacés connue, pas d'auto-injecteur prescrit", arriving: "SOS Médecins : urticaire géant, œdème laryngé, PA imprenable" },
    vitals: { pa: "70/40", fc: 135, spo2: 90, temp: 37.0, fr: 28, glasgow: 13 },
    symptoms: ["Urticaire généralisé prurigineux apparu rapidement","Œdème des lèvres, de la langue, luette","Stridor laryngé (obstruction haute)","PA imprenable, tachycardie extrême","Bronchospasme (sibilants)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 135, pr: 140, qrs: 80, qt: 360, anomalies: ["Tachycardie sinusale réactionnelle"], image: "vagal", description: "Tachycardie sinusale réactionnelle. Pas d'anomalie spécifique. ECG secondaire dans ce contexte." },
    physiopathology: {
      title: "Dégranulation mastocytaire IgE-médiée",
      steps: [
        { icon: "🦐", text: "Allergène (crevette) reconnu par IgE spécifiques fixées sur les mastocytes" },
        { icon: "💥", text: "Cross-linking des IgE → dégranulation massive des mastocytes et basophiles" },
        { icon: "🧪", text: "Libération d'histamine, tryptase, leucotriènes, prostaglandines, PAF" },
        { icon: "🩸", text: "Vasodilatation massive + augmentation perméabilité vasculaire → choc distributif" },
        { icon: "🫁", text: "Bronchospasme + œdème laryngé → obstruction des voies aériennes" }
      ],
      source: "Simons FE et al. World Allergy Organization anaphylaxis guidelines 2015. Curr Opin Allergy Clin Immunol. DOI: 10.1097/ACI.0000000000000205"
    },
    dd: [
      { diagnosis: "Choc anaphylactique", correct: true, explanation: "Contexte allergénique immédiat, urticaire + œdème laryngé + choc distributif + bronchospasme — critères WAO" },
      { diagnosis: "Malaise vagal", correct: false, explanation: "Malaise vagal : bradycardie, pas d'urticaire, pas d'œdème, résolution en décubitus rapide" },
      { diagnosis: "Crise d'asthme sévère", correct: false, explanation: "Asthme seul : pas de choc, pas d'urticaire, pas d'œdème laryngé" },
      { diagnosis: "Choc septique", correct: false, explanation: "Choc septique : début progressif, fièvre, foyer infectieux, pas de contexte allergique immédiat" }
    ],
    gestures: [
      { id: "adre", name: "Adrénaline IM cuisse 0,5mg (IMMÉDIAT)", correct: true, description: "1er geste ABSOLU. Toute autre action est secondaire. IM face antéro-latérale cuisse.", steps: ["Adrénaline 0,5mg IM (1mg/mL = 0,5mL) face antéro-latérale cuisse IMMÉDIATEMENT","Position allongée jambes surélevées (si pas de détresse resp)","O2 haut débit","VVP + remplissage SSI 500mL rapide","Si œdème laryngé : intubation ou cricothyroïdotomie en urgence","2e injection adrénaline 5-15 min si pas d'amélioration","Corticoïdes (hydrocortisone) + anti-H1 en 2e ligne uniquement"] },
      { id: "antiH1", name: "Anti-H1 IV en premier", correct: false, description: "ERREUR : les anti-H1 n'ont aucun effet sur le choc ni l'œdème laryngé. L'adrénaline est le seul traitement vital." },
      { id: "cortico", name: "Corticoïdes IV seuls", correct: false, description: "Corticoïdes : délai d'action 4-6h, inutiles dans l'urgence immédiate. Jamais en première intention." }
    ],
    keyPoints: ["Adrénaline IM : SEUL médicament qui sauve la vie en première intention", "Ne jamais donner adrénaline IV d'emblée (risque arythmie) sauf ACR", "Prescrire auto-injecteur (Emerade®, Epipen®) à la sortie + éducation", "Hospitalisation 24h pour observer la réaction biphasique (6-12h après)", "Bilan allergologique en externe : dosage tryptase, prick-tests à distance"],
    sourcesFull: ["Simons FE et al. WAO Anaphylaxis Guidelines 2015. DOI: 10.1097/ACI.0000000000000205", "SFMU/SFAR. Anaphylaxie 2021.", "Campbell RL et al. Anaphylaxis in Emergency Medicine. J Emerg Med 2019."]
  },

  // ── CAS 8 ── AVC ISCHÉMIQUE
  {
    id: "avc", title: "AVC ischémique (FAST+)", subtitle: "Ischémie sylvienne gauche — fenêtre thérapeutique",
    color: "#0EA5E9", difficulty: 3, specialty: "Neuro",
    vignette: { headline: "Homme de 72 ans, hémiplégie droite brutale", context: "Retrouvé par sa femme avec une déviation de la bouche et ne pouvant plus parler. Il y a 1h.", tags: ["URGENCE VITALE", "Déficit < 4h30", "Aphasie + hémiplégie D"] },
    patient: { name: "Pierre G.", age: 72, sex: "M", context: "FA connue, anticoagulation interrompue par le patient depuis 3 semaines. HTA, diabète.", arriving: "SMUR : hémiplégie droite + aphasie brutale depuis 1h. Dernière fois vu normal il y a 1h10." },
    vitals: { pa: "185/100", fc: 88, spo2: 96, temp: 37.2, fr: 16, glasgow: 11 },
    symptoms: ["Hémiplégie droite complète (bras > jambe)","Aphasie de Broca (mot à mot, comprend)","Déviation de la commissure labiale à gauche","Regard dévié à gauche (vers la lésion)","Début brutal, il y a 1h10"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 88, pr: null, qrs: 80, qt: 370, anomalies: ["FA lente sous anticoagulant", "Pas d'anomalie ST"], image: "fa", description: "FA lente. Pas de sus-décalage. FA non anticoagulée → source embolique probable de l'AVC." },
    physiopathology: {
      title: "Occlusion artérielle cérébrale embolique",
      steps: [
        { icon: "💊", text: "FA non anticoagulée → thrombus dans l'auricule gauche (stase atriale)" },
        { icon: "🧠", text: "Embolie de l'artère sylvienne gauche (ACM) → ischémie hémisphère gauche" },
        { icon: "⏱️", text: "Zone d'ombre (core) entourée d'une zone de pénombre ischémique sauvable" },
        { icon: "🔬", text: "Cascade ischémique : excitotoxicité, radicaux libres, mort cellulaire" },
        { icon: "🎯", text: "'Time is brain' : 1,9 million de neurones meurent chaque minute d'ischémie" }
      ],
      source: "Emberson J et al. Lancet 2014 thrombolysis meta-analysis. DOI: 10.1016/S0140-6736(14)60584-5"
    },
    dd: [
      { diagnosis: "AVC ischémique sylvien gauche", correct: true, explanation: "Déficit brutal hémisphérique gauche (hémiplégie D + aphasie Broca), FA source embolique, délai < 4h30" },
      { diagnosis: "AVC hémorragique", correct: false, explanation: "Hémorragique : souvent céphalée brutale explosive, vomissements, coma plus rapide — TDM différencie" },
      { diagnosis: "Hypoglycémie", correct: false, explanation: "Hypoglycémie peut mimer un AVC : TOUJOURS vérifier dextro avant tout — se corrige avec G30%" },
      { diagnosis: "Crise épileptique Todd", correct: false, explanation: "Paralysie de Todd post-critique : ATCD épilepsie, crise précédant le déficit, récupération plus rapide" }
    ],
    gestures: [
      { id: "thrombo_avc", name: "Thrombolyse IV rtPA (Actilyse®) + thrombectomie", correct: true, description: "Fenêtre 4h30 pour rtPA IV. Thrombectomie mécanique si occlusion proximale (< 6-24h).", steps: ["TDM cérébral sans injection IMMÉDIAT (éliminer hémorragie)", "Dextro (éliminer hypoglycémie)", "Bilan biologique + ECG", "Si délai < 4h30 et pas de CI : rtPA 0,9mg/kg IV (max 90mg) sur 60 min", "Appel immédiat équipe de neuroradiologie interventionnelle si grand vaisseau", "Ne PAS traiter HTA si < 220/120 avant rtPA"] },
      { id: "aspirine_avc", name: "Aspirine 250mg IV immédiatement", correct: false, description: "ERREUR : aspirine contre-indiquée les 24h suivant le rtPA. Anticoagulation : différée 24-48h. Confirmer l'hémorragie d'abord par TDM." },
      { id: "attendre_avc", name: "Hospitalisation UHCD et surveillance", correct: false, description: "Inacceptable : chaque minute perdue = neurones perdus. Filière AVC activée immédiatement." }
    ],
    keyPoints: ["FAST : Face-Arm-Speech-Time = appel 15 immédiat", "rtPA IV si délai < 4h30 et pas de CI (hémorragie, TCA > 1.5N si anticoagulé)", "Thrombectomie mécanique : jusqu'à 24h si pénombre sur imagerie", "NE PAS abaisser la TA sauf si > 220/120 (avant rtPA) ou > 180/105 (après rtPA)", "FA : reprise anticoagulation à 48h-14j selon infarctus (HAS-BLED)"],
    sourcesFull: ["Emberson J et al. Lancet 2014. DOI: 10.1016/S0140-6736(14)60584-5", "Powers WJ et al. 2019 AHA/ASA Stroke Guidelines. Stroke 2019. DOI: 10.1161/STR.0000000000000211", "HAS. Prise en charge de l'AVC 2022."]
  },

  // ── CAS 9 ── HYPOGLYCÉMIE SÉVÈRE
  {
    id: "hypogly", title: "Hypoglycémie sévère", subtitle: "Neuroglucopénie avec troubles de conscience",
    color: "#10B981", difficulty: 1, specialty: "Endocrino-Urgences",
    vignette: { headline: "Homme de 66 ans, trouvé inconscient par sa femme", context: "Diabétique sous insuline. Sueurs, tremblement, avant de perdre conscience. A raté son repas du midi.", tags: ["Urgence < 30 min", "DT1/DT2 insuline", "GCS abaissé"] },
    patient: { name: "Marcel F.", age: 66, sex: "M", context: "Diabète type 2 depuis 15 ans, insuline basale-bolus, insuffisance rénale modérée (IR aggrave risque hypoglycémie)", arriving: "SMUR : trouvé inconscient, sueurs profuses, mouvements anormaux" },
    vitals: { pa: "140/85", fc: 110, spo2: 97, temp: 36.5, fr: 14, glasgow: 8 },
    symptoms: ["Perte de conscience partielle (GCS 8)","Sueurs profuses, pâleur","Tremblement, agitation avant la perte de connaissance (rapporté)","Tachycardie sinusale","Dextro : 0,32 g/L (1,8 mmol/L)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 110, pr: 150, qrs: 80, qt: 370, anomalies: ["Tachycardie sinusale réactionnelle (catécholamines endogènes)"], image: "vagal", description: "Tachycardie sinusale. Pas d'anomalie ischémique. ECG secondaire." },
    physiopathology: {
      title: "Neuroglucopénie cérébrale",
      steps: [
        { icon: "💉", text: "Excès relatif d'insuline (dose, repas sauté, effort, IR) → hypoglycémie" },
        { icon: "🧠", text: "Cerveau dépend exclusivement du glucose → neuroglucopénie dès 0,50 g/L" },
        { icon: "⚡", text: "En dessous de 0,50 g/L : symptômes adrénergiques (tremblements, sueurs, tachycardie)" },
        { icon: "😵", text: "En dessous de 0,30 g/L : symptômes neuroglycopéniques (confusion, convulsions, coma)" },
        { icon: "⚠️", text: "Hypoglycémie prolongée → mort neuronale irréversible (> 30-60 min)" }
      ],
      source: "Service Endocrinologie — Cryer PE et al. Hypoglycemia in Diabetes. Diabetes Care 2009. DOI: 10.2337/dc08-1833"
    },
    dd: [
      { diagnosis: "Hypoglycémie sévère", correct: true, explanation: "Dextro 0,32 g/L + diabétique sous insuline + repas sauté + sueurs — diagnostic immédiat au dextro" },
      { diagnosis: "AVC ischémique", correct: false, explanation: "AVC peut mimer une hypoglycémie — c'est pourquoi le dextro SYSTÉMATIQUE avant tout bilan neuro" },
      { diagnosis: "Crise épileptique", correct: false, explanation: "Épilepsie possible sur fond hypoglycémique — traiter d'abord la cause (resucrage) avant antiépileptique" },
      { diagnosis: "Intoxication éthylique", correct: false, explanation: "L'alcool peut aussi provoquer une hypoglycémie — dextro systématique chez tout patient inconscient" }
    ],
    gestures: [
      { id: "g30", name: "G30% IV 30mL en bolus (patient inconscient)", correct: true, description: "Resucrage IV immédiat si voie veineuse disponible. Effet en 2-3 minutes.", steps: ["Dextro immédiat si patient trouvé inconscient", "VVP + G30% 30mL IV bolus (= 9g glucose)", "Recontrôler dextro 15 min après", "Perfusion G10% 100mL/h si risque de récidive (insuline longue durée)", "Surveiller retour à la conscience : si pas de réveil en 15 min → autre cause"] },
      { id: "glucagon", name: "Glucagon IM 1mg (si pas de VVP)", correct: true, description: "Alternative si pas d'abord veineux possible. Délai 10-15 min. CI si dénutrition.", steps: ["Glucagon 1mg IM ou SC", "Retourner patient en position latérale de sécurité", "Dès reprise de conscience : sucre rapide par voie orale", "Ne pas laisser seul : risque de rechute"] },
      { id: "resucrage_oral", name: "Donner du sucre par voie orale", correct: false, description: "DANGEREUX si patient inconscient ou demi-conscient : risque de fausse route" }
    ],
    keyPoints: ["Dextro capillaire SYSTÉMATIQUE chez tout patient inconscient ou confus", "G30% IV : action en 2-3 min — ne jamais attendre", "Risque de récidive si insuline longue durée ou sulfamides → perfusion G10% + surveillance 24h", "En cas de coma prolongé post-hypoglycémie : bilan AVC même après resucrage", "Éducation patient : ne jamais sauter un repas avec insuline"],
    sourcesFull: ["Cryer PE et al. Hypoglycemia in Diabetes. Diabetes Care 2009. DOI: 10.2337/dc08-1833", "HAS. Hypoglycémie du diabétique 2021.", "Seaquist ER et al. ADA Workgroup on Hypoglycemia. Diabetes Care 2013."]
  },

  // ── CAS 10 ── MÉNINGITE BACTÉRIENNE
  {
    id: "meningite", title: "Méningite bactérienne purulente", subtitle: "Urgence infectieuse — pronostic vital immédiat",
    color: "#6366F1", difficulty: 3, specialty: "Neuro-Infectio",
    vignette: { headline: "Femme de 19 ans, céphalée brutale et raideur de nuque", context: "Étudiante en cité universitaire. Fièvre à 40°C depuis 6h, photophobie, purpura naissant.", tags: ["URGENCE VITALE", "Purpura fébrile", "Méningé"] },
    patient: { name: "Amandine P.", age: 19, sex: "F", context: "Étudiante en cité U, pas de vaccin méningocoque C récent", arriving: "SOS : céphalées explosives + fièvre 40° + raideur de nuque + purpura pétéchial sur le tronc" },
    vitals: { pa: "90/60", fc: 118, spo2: 97, temp: 40.2, fr: 22, glasgow: 13 },
    symptoms: ["Céphalées brutales 'les pires de ma vie' (10/10)","Raideur de nuque (signe de Brudzinski +)","Photophobie et phonophobie","Fièvre 40.2°C","Purpura pétéchial sur tronc et membres (signe de gravité)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 118, pr: 150, qrs: 80, qt: 360, anomalies: ["Tachycardie sinusale fébrile"], image: "vagal", description: "Tachycardie sinusale sur contexte fébrile. Pas d'anomalie spécifique." },
    physiopathology: {
      title: "Envahissement méningé bactérien et inflammation",
      steps: [
        { icon: "🦠", text: "Neisseria meningitidis (ou Streptococcus pneumoniae) passe la barrière hémato-méningée" },
        { icon: "💥", text: "Réponse inflammatoire intense dans l'espace sous-arachnoïdien → œdème méningé" },
        { icon: "🔴", text: "Septicémie à méningocoque → CIVD → purpura fulminans (nécrose vasculaire cutanée)" },
        { icon: "🧠", text: "Hypertension intracrânienne → engagement si TDM non réalisé avant PL" },
        { icon: "⚠️", text: "Mortalité : 20-25% sans traitement dans l'heure — séquelles auditives, neurologiques" }
      ],
      source: "van de Beek D et al. Community-acquired bacterial meningitis. NEJM 2006. DOI: 10.1056/NEJMra052116"
    },
    dd: [
      { diagnosis: "Méningite bactérienne à méningocoque", correct: true, explanation: "Triade méningée + purpura + fièvre brutale + contexte épidémique (cité U) = méningococcémie jusqu'à preuve du contraire" },
      { diagnosis: "Méningite virale", correct: false, explanation: "Méningite virale : syndrome méningé mais PAS de purpura, fièvre moins élevée, évolution spontanément favorable" },
      { diagnosis: "Hémorragie sous-arachnoïdienne", correct: false, explanation: "HSA : céphalée en 'coup de tonnerre', pas de fièvre, pas de purpura, TDM cérébral + PL diagnostiques" },
      { diagnosis: "Encéphalite herpétique", correct: false, explanation: "Encéphalite HSV : troubles comportementaux, épilepsie, fièvre modérée, pas de purpura" }
    ],
    gestures: [
      { id: "ceftriaxone", name: "Céftriaxone 2g IV IMMÉDIAT (sans attendre la PL)", correct: true, description: "NE PAS ATTENDRE la ponction lombaire pour débuter l'antibiothérapie si purpura ou GCS < 13.", steps: ["Céftriaxone 2g IV en 30 min IMMÉDIATEMENT","Dexaméthasone 0,15 mg/kg IV 15 min AVANT ou avec la 1ère dose ATB (réduit les séquelles)","TDM cérébral avant PL si : GCS < 13, déficit focal, immunodéprimé","PL dès que possible si pas de contre-indication","Déclaration obligatoire + prophylaxie entourage (rifampicine ou ciprofloxacine)"] },
      { id: "pl_avant", name: "Ponction lombaire avant tout traitement", correct: false, description: "ERREUR si purpura ou signe de gravité : l'antibiotique doit précéder la PL. Chaque heure perdue aggrave le pronostic." },
      { id: "attendre_tcd", name: "Attendre TDM + PL avant ATB", correct: false, description: "INTERDIT si signes de gravité (purpura, GCS < 13) : céftriaxone IMMÉDIATEMENT, TDM et PL ensuite" }
    ],
    keyPoints: ["Purpura fébrile = urgence absolue → céftriaxone IV dans les 20 minutes", "Dexaméthasone avant ou avec la 1ère dose ATB : réduit séquelles auditives de 50%", "PL contre-indiquée si : HTIC, déficit focal, GCS < 13, troubles coagulation", "Déclaration obligatoire ARS dans les 24h", "Chimioprophylaxie entourage : rifampicine 600mg x2/j x2j (ou cipro 500mg dose unique)"],
    sourcesFull: ["van de Beek D et al. NEJM 2006. DOI: 10.1056/NEJMra052116", "de Gans J et al. Dexamethasone in Adults with Meningitis. NEJM 2002. DOI: 10.1056/NEJMoa021334", "HAS. Méningites bactériennes 2017."]
  },

,
  // ── CAS 11 ── PNEUMOTHORAX SPONTANÉ
  {
    id: "pneumothorax", title: "Pneumothorax spontané", subtitle: "Décollement pleural — jeune homme longiligne",
    color: "#06B6D4", difficulty: 2, specialty: "Pneumo",
    vignette: { headline: "Homme de 24 ans, douleur thoracique latérale brutale", context: "Grand et mince, douleur en pointe du côté droit à l'inspiration, sans contexte traumatique.", tags: ["Urgence < 2h", "Longiligne", "Douleur pleurétique"] },
    patient: { name: "Thomas L.", age: 24, sex: "M", context: "Étudiant, 1m90 60kg, fumeur léger. Pas d'ATCD respiratoire.", arriving: "Douleur thoracique droite brutale + dyspnée modérée depuis 1h, pas de traumatisme" },
    vitals: { pa: "125/75", fc: 98, spo2: 94, temp: 37.0, fr: 20, glasgow: 15 },
    symptoms: ["Douleur thoracique droite en pointe, majorée à l'inspiration", "Dyspnée modérée d'effort", "Toux sèche", "Murmure vésiculaire diminué à droite", "Pas de fièvre, pas de traumatisme"],
    ecg: { rythme: "Sinusal", fc: 98, pr: 150, qrs: 80, qt: 380, anomalies: ["Tachycardie sinusale modérée"], image: "vagal", description: "ECG normal. Tachycardie modérée. ECG non diagnostique — radio thorax indispensable." },
    physiopathology: {
      title: "Rupture de blebs et décollement pleural",
      steps: [
        { icon: "🫁", text: "Blebs (petites bulles sous-pleurales) sur apex pulmonaire — fréquent chez sujets longilignes" },
        { icon: "💥", text: "Rupture spontanée d'un bleb → passage d'air dans l'espace pleural" },
        { icon: "📉", text: "Pression pleurale devient positive → rétraction pulmonaire" },
        { icon: "😮‍💨", text: "Selon volume : dyspnée minime à sévère, SpO2 diminuée" },
        { icon: "⚠️", text: "Pneumothorax compressif : déviation médiastin, effondrement hémodynamique (urgence absolue)" }
      ],
      source: "MacDuff A et al. BTS Pleural Disease Guidelines 2010. Thorax. 2010;65(Suppl 2):ii18-31. DOI: 10.1136/thx.2010.136259"
    },
    dd: [
      { diagnosis: "Pneumothorax spontané", correct: true, explanation: "Jeune homme longiligne, douleur pleurétique brutale, MV diminué, SpO2 94% — radio thorax confirme" },
      { diagnosis: "Embolie pulmonaire", correct: false, explanation: "EP : dyspnée + douleur pleurétique possible mais contexte TVP, pas de diminution MV localisée" },
      { diagnosis: "Péricardite aiguë", correct: false, explanation: "Péricardite : douleur rétrosternale, frottement péricardique, sus-décalage ECG concave" },
      { diagnosis: "Pneumonie", correct: false, explanation: "Pneumonie : fièvre, toux productive, crépitants, pas de début aussi brutal" }
    ],
    gestures: [
      { id: "exsufflation", name: "Exsufflation à l'aiguille (si mal toléré)", correct: true, description: "PNO mal toléré ou > 50% : exsufflation 2e espace intercostal ligne médio-claviculaire", steps: ["Radio thorax confirmation (si stable)", "Exsufflation : aiguille 14G 2e EIC ligne médio-claviculaire", "Si PNO récidivant ou > 50% : drainage thoracique", "O2 haut débit accélère résorption (x4)", "Surveillance 4h si petit PNO bien toléré : radio contrôle"] },
      { id: "surveillance_pno", name: "Surveillance simple si petit PNO", correct: true, description: "PNO < 2cm (BTS) ou < 3cm apex (ATS) bien toléré : O2 + surveillance + radio contrôle à 4h", steps: ["O2 à haut débit", "Antalgie", "Repos", "Radio contrôle à 4h puis 24h", "Arrêt tabac impératif"] },
      { id: "drainage_immediat", name: "Drainage chirurgical d'emblée", correct: false, description: "Réservé aux PNO récidivants, bilatéraux, ou professionnel exposé (plongeur, pilote) — pas en 1ère intention pour un premier épisode" }
    ],
    keyPoints: ["PNO compressif : exsufflation d'URGENCE avant confirmation radiologique (déviation trachée, choc)", "O2 haut débit : accélère résorption d'un facteur 4", "BTS : PNO > 2cm bord interne → exsufflation ou drainage", "Arrêt tabac impératif (réduit récidive de 40%)", "Récidive > 50% → chirurgie (pleurodèse ou résection bullectomie)"],
    sourcesFull: ["MacDuff A et al. BTS Guidelines 2010. DOI: 10.1136/thx.2010.136259", "Tschopp JM et al. ERS task force 2015. Eur Respir J. 2015."]
  },

  // ── CAS 12 ── CRISE D'ASTHME SÉVÈRE
  {
    id: "asthme", title: "Crise d'asthme sévère", subtitle: "Obstruction bronchique aiguë — asthme aigu grave",
    color: "#0891B2", difficulty: 2, specialty: "Pneumo",
    vignette: { headline: "Femme de 32 ans, sifflements et incapacité à parler", context: "Asthmatique connue, expose à des chats chez des amis. SpO2 88%, phrases hachées.", tags: ["Urgence immédiate", "Asthme connu", "SpO2 < 90%"] },
    patient: { name: "Nadia R.", age: 32, sex: "F", context: "Asthme allergique depuis l'enfance, corticoïdes inhalés irréguliers, exposition chats", arriving: "Amenée par SAMU : sibilants diffus, impossibilité de parler en phrases complètes, cyanose des lèvres" },
    vitals: { pa: "130/85", fc: 128, spo2: 88, temp: 37.3, fr: 30, glasgow: 15 },
    symptoms: ["Dyspnée sévère, orthopnée", "Sibilants audibles à distance", "Impossibilité de parler en phrases complètes (signe de gravité)", "DEP < 30% théorique (asthme aigu grave)", "Tirage intercostal, battements des ailes du nez"],
    ecg: { rythme: "Sinusal tachycarde", fc: 128, pr: 150, qrs: 80, qt: 360, anomalies: ["Tachycardie sinusale", "P pulmonaire (surcharge OD)"], image: "vagal", description: "Tachycardie sinusale. P pulmonaire transitoire. ECG secondaire dans ce contexte." },
    physiopathology: {
      title: "Bronchospasme, inflammation et mucus",
      steps: [
        { icon: "🌿", text: "Allergène (chat) → activation mastocytes et éosinophiles → libération médiateurs" },
        { icon: "💨", text: "Bronchospasme (contraction muscle lisse), œdème muqueux, hypersécrétion mucus" },
        { icon: "🔒", text: "Obstruction bronchique distale → air trappé (hyperinflation), augmentation du travail respiratoire" },
        { icon: "📉", text: "Rapport V/Q perturbé → hypoxémie → compensation par hyperventilation" },
        { icon: "⚠️", text: "Asthme aigu grave : épuisement respiratoire → hypercapnie = signe d'alarme imminent (ACR)" }
      ],
      source: "GINA Report 2023. Global Strategy for Asthma Management. ginasthma.org"
    },
    dd: [
      { diagnosis: "Crise d'asthme sévère (AAG)", correct: true, explanation: "Asthme connu, allergène identifié, sibilants diffus, SpO2 88%, incapacité à parler — critères AAG" },
      { diagnosis: "Œdème pulmonaire aigu", correct: false, explanation: "OAP : crépitants aux bases, galop cardiaque, contexte cardiaque, pas d'ATCD asthme" },
      { diagnosis: "Pneumothorax compressif", correct: false, explanation: "PNO : MV absent unilatéral, déviation trachée, pas de sibilants" },
      { diagnosis: "Embolie pulmonaire", correct: false, explanation: "EP : douleur pleurétique, pas de sibilants, S1Q3T3, contexte TVP" }
    ],
    gestures: [
      { id: "b2_neb", name: "Salbutamol nébulisé + ipratropium + corticoïdes IV", correct: true, description: "Traitement de 1ère ligne : bronchodilatateurs + anti-inflammatoires", steps: ["Salbutamol 5mg nébulisé O2 (débit 6-8L/min) — répétable toutes 20 min", "Ipratropium 0,5mg nébulisé (synergie avec B2)", "Méthylprednisolone 1mg/kg IV (ou prednisolone PO si déglutition possible)", "O2 pour SpO2 cible 93-95%", "Si échec : salbutamol IVSE, sulfate de magnésium 2g IV/20min", "Si épuisement/hypercapnie : VNI ou intubation (dernier recours)"] },
      { id: "adre_asthme", name: "Adrénaline IM", correct: false, description: "Adrénaline réservée à l'anaphylaxie avec bronchospasme — pas en 1ère intention pour asthme allergique pur" },
      { id: "attendre", name: "B2 inhalé classique et surveillance", correct: false, description: "Insuffisant en AAG : nébulisation obligatoire, voie IV si nécessaire" }
    ],
    keyPoints: ["Critères AAG : impossibilité parler, DEP < 30%, SpO2 < 90%, FC > 120, FR > 25", "Salbutamol nébulisé toutes 20 min les 3 premières heures", "Sulfate de magnésium 2g IV : bénéfice si SpO2 < 92% à 1h (MAGN trial)", "Ne PAS utiliser d'adrénaline sauf si anaphylaxie associée", "Hypercapnie en AAG = épuisement imminent → intubation"],
    sourcesFull: ["GINA Report 2023. ginasthma.org", "Mohammed S et al. Magnesium MAGN trial 2016.", "Rowe BH et al. Cochrane Systematic Review — corticosteroids in acute asthma 2016."]
  },

  // ── CAS 13 ── APPENDICITE AIGUË
  {
    id: "appendicite", title: "Appendicite aiguë", subtitle: "Abdomen chirurgical — perforation imminente",
    color: "#F97316", difficulty: 2, specialty: "Chirurgie digestive",
    vignette: { headline: "Homme de 17 ans, douleur abdominale droite depuis 24h", context: "Douleur périombilicale migrée en FID, fièvre à 38.5°C, anorexie, nausées.", tags: ["Urgence < 6h", "Score d'Alvarado", "FID + fièvre"] },
    patient: { name: "Enzo M.", age: 17, sex: "M", context: "Pas d'ATCD notable. Douleur depuis 24h, aggravation progressive.", arriving: "Urgences : douleur FID avec défense, fièvre 38.5, anorexie depuis hier" },
    vitals: { pa: "120/75", fc: 98, spo2: 99, temp: 38.5, fr: 16, glasgow: 15 },
    symptoms: ["Douleur FID spontanée et à la palpation, défense", "Point de McBurney positif", "Signe de Blumberg + (douleur à la décompression)", "Anorexie totale depuis 24h", "Nausées sans vomissements"],
    ecg: { rythme: "Sinusal", fc: 98, pr: 150, qrs: 80, qt: 380, anomalies: [], image: "vagal", description: "ECG normal. Non pertinent dans ce contexte digestif." },
    physiopathology: {
      title: "Obstruction et infection de l'appendice",
      steps: [
        { icon: "🦠", text: "Obstruction du lumen appendiculaire (stercolithe, lymphome, corps étranger)" },
        { icon: "🔴", text: "Prolifération bactérienne en aval → distension, ischémie pariétale" },
        { icon: "💥", text: "Inflammation transmurale → douleur péri-ombilicale migrée en FID (12-24h)" },
        { icon: "⚠️", text: "Sans traitement : gangrène puis perforation → péritonite généralisée" },
        { icon: "⏱️", text: "Risque de perforation majoré après 36-48h d'évolution" }
      ],
      source: "Di Saverio S et al. WSES Jerusalem guidelines appendicitis 2020. World J Emerg Surg. DOI: 10.1186/s13017-020-00306-3"
    },
    dd: [
      { diagnosis: "Appendicite aiguë", correct: true, explanation: "Score d'Alvarado ≥ 7 (douleur FID + défense + fièvre + hyperleucocytose + anorexie) → probabilité très élevée" },
      { diagnosis: "Torsion de kyste ovarien (fille)", correct: false, explanation: "Patient masculin — mais chez une fille en âge de procréer : toujours éliminer (bêta-HCG + écho pelv)" },
      { diagnosis: "Lymphadénite mésentérique", correct: false, explanation: "Adénite mésentérique : contexte viral, douleur moins précise, leucocytose modérée, écho pas d'appendice épaissi" },
      { diagnosis: "Hernie inguinale étranglée", correct: false, explanation: "Hernie : tuméfaction inguinale douloureuse, vomissements, mais pas de fièvre précoce ni signe de McBurney" }
    ],
    gestures: [
      { id: "chir_app", name: "Appendicectomie laparoscopique en urgence", correct: true, description: "Traitement de référence. Délai : idéalement dans les 12h après diagnostic.", steps: ["Bilan pré-opératoire : NFS, CRP, coag, groupe, β-HCG chez femme", "Écho abdominale (appendice, éliminer DD)", "Scanner si doute ou obésité", "Antibioprophylaxie péri-opératoire (augmentin)", "Appendicectomie cœlioscopique sous AG", "Si péritonite : lavage-drainage + antibiothérapie curative"] },
      { id: "antibio_app", name: "Antibiothérapie seule (sans chirurgie)", correct: false, description: "Option possible dans certains cas non compliqués (études APPAC), mais chirurgie reste standard — risque perforation si ATB seul échoue" },
      { id: "attendre_scanner", name: "Mettre en observation 24h avant décision", correct: false, description: "Dangereux : chaque heure augmente le risque de perforation. Décision dans les 6h après diagnostic." }
    ],
    keyPoints: ["Score d'Alvarado > 7 : probabilité appendicite 85%", "Scanner abdo-pelvien si doute diagnostique (sensibilité 94%)", "Antibiothérapie pré-opératoire systématique", "Appendicectomie cœlioscopique : standard actuel (J1-J2 possible)", "Perforation : péritonite → pronostic plus sévère, durée hospitalisation x3"],
    sourcesFull: ["Di Saverio S et al. WSES Jerusalem 2020. DOI: 10.1186/s13017-020-00306-3", "Salminen P et al. APPAC trial. JAMA 2015. DOI: 10.1001/jama.2015.6154"]
  },

  // ── CAS 14 ── CHOLÉCYSTITE AIGUË
  {
    id: "cholecystite", title: "Cholécystite aiguë lithiasique", subtitle: "Abdomen chirurgical urgent",
    color: "#D97706", difficulty: 2, specialty: "Chirurgie digestive",
    vignette: { headline: "Femme de 48 ans, douleur sous-costale droite avec fièvre", context: "Obèse, 3 enfants. Coliques hépatiques à répétition. Fièvre 38.8°C, Murphy positif.", tags: ["Urgence < 6h", "ATCD coliques hép.", "Murphy +"] },
    patient: { name: "Christine V.", age: 48, sex: "F", context: "IMC 32, multipare, plusieurs épisodes de coliques hépatiques non opérés", arriving: "Douleur hypochondre droit depuis 12h avec fièvre, défense sous-costale droite" },
    vitals: { pa: "130/80", fc: 95, spo2: 98, temp: 38.8, fr: 18, glasgow: 15 },
    symptoms: ["Douleur hypochondre droit irradiant en épaule droite", "Signe de Murphy positif (arrêt inspiration à la palpation vésiculaire)", "Fièvre 38.8°C", "Nausées, vomissements", "ATCD de coliques hépatiques"],
    ecg: { rythme: "Sinusal", fc: 95, pr: 150, qrs: 80, qt: 380, anomalies: [], image: "vagal", description: "ECG normal. Non pertinent." },
    physiopathology: {
      title: "Obstruction du canal cystique et inflammation vésiculaire",
      steps: [
        { icon: "🪨", text: "Calcul enclavé dans le canal cystique → obstruction de la vidange vésiculaire" },
        { icon: "🔴", text: "Distension vésiculaire + bile stagnante → prolifération bactérienne (E. coli, Klebsiella)" },
        { icon: "🔥", text: "Inflammation de la paroi vésiculaire → cholécystite aiguë" },
        { icon: "⚠️", text: "Sans traitement : empyème, gangrène, perforation → péritonite biliaire" },
        { icon: "🌡️", text: "Triade de Charcot : douleur + fièvre + ictère → angiocholite (urgence sepsis)" }
      ],
      source: "Yokoe M et al. Tokyo Guidelines 2018 TG18. J Hepatobiliary Pancreat Sci. 2018. DOI: 10.1002/jhbp.516"
    },
    dd: [
      { diagnosis: "Cholécystite aiguë lithiasique", correct: true, explanation: "Douleur HCD + fièvre + Murphy + ATCD coliques hép. + 4F (Forty, Fat, Female, Fertile) → diagnostic clinique confirmé par écho" },
      { diagnosis: "Angiocholite", correct: false, explanation: "Angiocholite : triade de Charcot (douleur + fièvre + ictère) — ictère absent ici, biliaires normales" },
      { diagnosis: "Appendicite (appendice rétrocæcal)", correct: false, explanation: "Appendice rétrocæcal peut mimer une cholécystite — scanner souvent nécessaire si doute" },
      { diagnosis: "Hépatite aiguë", correct: false, explanation: "Hépatite : hépatomégalie douloureuse, transaminases très élevées, pas de Murphy typique" }
    ],
    gestures: [
      { id: "chir_chol", name: "Cholécystectomie laparoscopique dans les 72h", correct: true, description: "Tokyo Guidelines : chirurgie précoce (< 72h) = meilleure option pour grade I-II", steps: ["Écho abdominale urgente (vésicule distendue, calculs, épanchement)", "Bilan biologique : NFS, CRP, BHC, lipase, coag", "Antalgiques IV (kétoprofène ou paracétamol)", "Antibiothérapie : augmentin 1g x3/j IV", "Cholécystectomie cœlioscopique dans les 72h (idéalement J1-J2)"] },
      { id: "drainage", name: "Drainage percutané (si opérable sous AG)", correct: false, description: "Drainage percutané réservé aux patients à haut risque chirurgical (ASA 3-4) ou comme bridge" },
      { id: "antibio_seuls_chol", name: "Antibiothérapie seule et sortie", correct: false, description: "Insuffisant : risque de récidive 30% à 3 mois et complications (empyème, perforation)" }
    ],
    keyPoints: ["Écho abdominale : examen clé (sensibilité 88%, spécificité 80%)", "Tokyo Guidelines TG18 : grade I → chirurgie < 72h, grade II → chirurgie < 72h ou drainage, grade III → soins intensifs", "Angiocholite (triade Charcot) : urgence drainage biliaire endoscopique (CPRE)", "ATCD 4F : quarante ans, grasse, femme, fertile", "Cholécystectomie cœlioscopique : J1-J3 optimal vs J30 (moins de complications)"],
    sourcesFull: ["Yokoe M et al. TG18. DOI: 10.1002/jhbp.516", "Gutt CN et al. ACDC trial chole précoce vs tardive. Ann Surg 2013. DOI: 10.1097/SLA.0b013e3182895977"]
  },

  // ── CAS 15 ── OCCLUSION INTESTINALE
  {
    id: "occlusion", title: "Occlusion intestinale sur bride", subtitle: "Arrêt du transit — urgence chirurgicale",
    color: "#92400E", difficulty: 2, specialty: "Chirurgie digestive",
    vignette: { headline: "Homme de 58 ans, vomissements et ventre ballonné", context: "ATCD appendicectomie. Arrêt du transit depuis 48h, vomissements fécaloïdes, météorisme.", tags: ["Urgence < 6h", "ATCD chir. abdo", "Arrêt transit"] },
    patient: { name: "Jacques M.", age: 58, sex: "M", context: "Appendicectomie 20 ans, pas d'autre ATCD. Arrêt gaz et selles depuis 2 jours.", arriving: "Urgences : vomissements fécaloïdes, ventre très ballonné, pas de transit depuis 48h" },
    vitals: { pa: "110/70", fc: 108, spo2: 97, temp: 37.8, fr: 18, glasgow: 15 },
    symptoms: ["Arrêt complet des gaz et des selles depuis 48h", "Vomissements progressivement fécaloïdes (signe tardif)", "Météorisme abdominal diffus", "Douleur abdominale à prédominance péri-ombilicale", "Bruits hydro-aériques en 'tingling' (lutte contre l'occlusion)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 108, pr: 150, qrs: 80, qt: 380, anomalies: [], image: "vagal", description: "Tachycardie sinusale. Non spécifique." },
    physiopathology: {
      title: "Obstruction mécanique et souffrance intestinale",
      steps: [
        { icon: "🔗", text: "Bride (adhérence fibreuse post-op) → obstruction mécanique du grêle" },
        { icon: "💧", text: "Accumulation de liquide et gaz en amont → distension → bruits de lutte" },
        { icon: "🔴", text: "Distension → augmentation pression intraluminale → ischémie pariétale" },
        { icon: "⚠️", text: "Strangulation : souffrance vasculaire → gangrène → perforation et péritonite" },
        { icon: "💊", text: "Troubles hydroélectrolytiques sévères (vomissements → hypokaliémie, déshydratation)" }
      ],
      source: "SFCD/ACHBT. Recommandations occlusion du grêle 2021. snfge.org"
    },
    dd: [
      { diagnosis: "Occlusion sur bride", correct: true, explanation: "ATCD chirurgie abdominale + arrêt transit + vomissements fécaloïdes + distension = bride jusqu'à preuve du contraire" },
      { diagnosis: "Volvulus du sigmoïde", correct: false, explanation: "Volvulus sigmoïde : sujet âgé, constipation chronique, aspect 'grain de café' sur ASP, pas de chirurgie antérieure" },
      { diagnosis: "Iléus paralytique", correct: false, explanation: "Iléus : post-opératoire, inflammation, médicaments — bruits hydroaériques absents, pas de cause mécanique" },
      { diagnosis: "Hernie étranglée", correct: false, explanation: "Hernie : tuméfaction inguinale irréductible douloureuse — toujours examiner les orifices herniaires" }
    ],
    gestures: [
      { id: "sng", name: "Sonde nasogastrique en aspiration + chirurgie", correct: true, description: "Décompression gastrique + rééquilibration hydroélectrolytique, puis décision chirurgicale", steps: ["Sonde nasogastrique en aspiration douce (décompression)", "VVP large + bilan (NFS, ionogramme, lactates, groupe)", "Scanner abdomino-pelvien avec injection (localise obstacle, évalue viabilité)", "Rééquilibration hydroélectrolytique (NaCl 0.9% + KCl)", "Chirurgie urgente si : strangulation, ischémie, péritonite", "Traitement conservateur 24-48h possible si occlusion fonctionnelle sans signe d'alarme"] },
      { id: "lavement", name: "Lavement évacuateur", correct: false, description: "Contre-indiqué si occlusion mécanique du grêle — risque de perforation" },
      { id: "attendre", name: "Antispasmodiques et surveillance", correct: false, description: "Insuffisant si occlusion mécanique — risque de strangulation et gangrène" }
    ],
    keyPoints: ["ASP/Scanner : niveaux hydro-aériques en échelle, identifier le site d'obstruction", "Lactates > 2 mmol/L + fièvre = strangulation probable → chirurgie immédiate", "Signe de souffrance intestinale : douleur continue (vs colique), défense, fièvre, choc", "Rééquilibration HE avant chirurgie (sauf urgence absolue)", "SNG : soulage les vomissements et diminue la distension"],
    sourcesFull: ["SFCD/ACHBT. Recommandations 2021. snfge.org", "Catena F et al. Bologna Guidelines for ASBO 2013. World J Emerg Surg."]
  },

  // ── CAS 16 ── SEPSIS SÉVÈRE
  {
    id: "sepsis", title: "Choc septique", subtitle: "Défaillance multiviscérale — Sepsis-3",
    color: "#DC2626", difficulty: 3, specialty: "Réanimation",
    vignette: { headline: "Homme de 74 ans, confusion et hypotension avec fièvre", context: "ATCD de prostate. Brûlures mictionnelles depuis 5 jours, traitement non débuté. Frissons intenses hier.", tags: ["URGENCE VITALE", "SOFA ≥ 2", "Hypotension réfractaire"] },
    patient: { name: "Gérard H.", age: 74, sex: "M", context: "Adenome prostate, BPCO. Brûlures mictionnelles depuis 5j sans consultation.", arriving: "SMUR : confusion, T° 39.8°C, PA 75/40 non répondant à 500mL SSI, oligurie" },
    vitals: { pa: "75/40", fc: 125, spo2: 92, temp: 39.8, fr: 28, glasgow: 11 },
    symptoms: ["Confusion (GCS 11)", "Hypotension réfractaire (PA 75/40 après 500mL remplissage)", "Fièvre 39.8°C + frissons", "Oligurie (< 0.5mL/kg/h)", "Brûlures mictionnelles depuis 5 jours (porte d'entrée urinaire)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 125, pr: 160, qrs: 90, qt: 380, anomalies: ["Tachycardie sinusale", "Modification T diffuse (myocardite septique possible)"], image: "vagal", description: "Tachycardie sinusale. Modifications aspécifiques du segment ST-T." },
    physiopathology: {
      title: "Dysrégulation de la réponse inflammatoire (Sepsis-3)",
      steps: [
        { icon: "🦠", text: "Bactérie (E. coli urinaire) → endotoxines → activation PAMP sur TLR macrophages" },
        { icon: "💥", text: "Tempête cytokinique : TNF-α, IL-1, IL-6 → vasodilatation massive + fuite capillaire" },
        { icon: "🩸", text: "Choc distributif : vasoplégie périphérique → hypotension résistante au remplissage" },
        { icon: "🔌", text: "Hypoperfusion organes vitaux → dysfonction rénale, hépatique, cardiaque, cérébrale" },
        { icon: "💀", text: "Mortalité choc septique : 30-50% — chaque heure de retard ATB augmente mortalité de 7%" }
      ],
      source: "Singer M et al. Sepsis-3 definitions. JAMA 2016. DOI: 10.1001/jama.2016.0287"
    },
    dd: [
      { diagnosis: "Choc septique d'origine urinaire", correct: true, explanation: "Sepsis-3 : infection (urinaire prouvée) + défaillance organique (SOFA ≥ 2) + hypotension réfractaire = choc septique" },
      { diagnosis: "Choc cardiogénique", correct: false, explanation: "Choc cardiogénique : peau marbrée froide, congestion pulmonaire, FC moins élevée, ATCD cardiaque" },
      { diagnosis: "Déshydratation sévère", correct: false, explanation: "Déshydratation : hypotension corrigée par remplissage, pas de fièvre infectieuse, pas de signes sepsis" },
      { diagnosis: "Choc hémorragique", correct: false, explanation: "Hémorragique : contexte traumatique ou saignement évident, pas de fièvre" }
    ],
    gestures: [
      { id: "bundle_sepsis", name: "Bundle Sepsis Hour-1 (Surviving Sepsis Campaign)", correct: true, description: "Prendre en charge dans la première heure : lactates, hémocultures, ATB, remplissage, noradrénaline", steps: ["Lactates artériels (> 2 mmol/L = sévère)", "2 hémocultures périphériques AVANT ATB (si possible en < 45 min)", "ECBU + bilan complet (NFS, BHC, coag, troponine)", "Antibiothérapie probabiliste : ceftriaxone 2g IV + métronidazole si sepsis abdominal", "Remplissage vasculaire cristalloïdes 30mL/kg en 3h", "Noradrénaline si PA cible non atteinte (MAP ≥ 65 mmHg)", "Oxygénothérapie SpO2 ≥ 94%", "Bilan urinaire horaire"] },
      { id: "cortico_sepsis", name: "Hydrocortisone IV d'emblée", correct: false, description: "Hydrocortisone (200mg/j) réservée au choc réfractaire malgré noradrénaline — pas en 1ère ligne" },
      { id: "remplissage_seul", name: "Remplissage seul et attente ATB", correct: false, description: "ERREUR : l'ATB doit être donné dans la première heure. Chaque heure de retard = +7% mortalité" }
    ],
    keyPoints: ["Critères choc septique (Sepsis-3) : infection + SOFA ≥ 2 + vasopresseurs + lactates > 2 mmol/L", "ATB dans la première heure = geste vital (réduction mortalité 15-30%)", "Hémocultures avant ATB si possible (ne retarder ATB que < 45 min pour prélèvements)", "Objectifs thérapeutiques : MAP ≥ 65 mmHg, diurèse ≥ 0.5 mL/kg/h, lactates < 2", "Noradrénaline : vasopresseur de référence (pas dopamine)"],
    sourcesFull: ["Singer M et al. Sepsis-3. JAMA 2016. DOI: 10.1001/jama.2016.0287", "Evans L et al. Surviving Sepsis Campaign 2021. Intensive Care Med. DOI: 10.1007/s00134-021-06506-y"]
  },

  // ── CAS 17 ── HÉMORRAGIE DIGESTIVE HAUTE
  {
    id: "hdh", title: "Hémorragie digestive haute", subtitle: "Ulcère gastro-duodénal hémorragique",
    color: "#991B1B", difficulty: 2, specialty: "Gastro-Urgences",
    vignette: { headline: "Homme de 55 ans, hématémèse abondante", context: "Vomit du sang rouge vif depuis ce matin. Prend de l'ibuprofène pour arthrose depuis 3 semaines. Vertige en se levant.", tags: ["URGENCE VITALE", "AINS chronique", "Hémodynamique ?"] },
    patient: { name: "François B.", age: 55, sex: "M", context: "Arthrose, ibuprofène 400mg x3/j depuis 3 sem, tabagique, alcool modéré", arriving: "SMUR : hématémèse 500mL, lipothymie orthostatique, PA 95/60" },
    vitals: { pa: "95/60", fc: 118, spo2: 97, temp: 36.8, fr: 20, glasgow: 14 },
    symptoms: ["Hématémèse abondante (sang rouge vif, ~500mL)", "Lipothymie orthostatique (chute PA à l'orthostatisme)", "Méléna depuis hier (sang digéré = noir, fétide)", "Prise d'AINS depuis 3 semaines", "Épigastralgie chronique depuis le début du traitement"],
    ecg: { rythme: "Sinusal tachycarde", fc: 118, pr: 150, qrs: 80, qt: 380, anomalies: ["Tachycardie sinusale sur déplétion volémique"], image: "vagal", description: "Tachycardie sinusale réactionnelle. Pas d'anomalie ischémique." },
    physiopathology: {
      title: "Ulcération gastroduodénale par AINS",
      steps: [
        { icon: "💊", text: "AINS → inhibition COX-1 → diminution prostaglandines protectrices de la muqueuse gastrique" },
        { icon: "🔴", text: "Muqueuse fragilisée → ulcération (souvent antre gastrique ou bulbe duodénal)" },
        { icon: "🩸", text: "Érosion vasculaire (artère gastroduodénale) → hémorragie artérielle active" },
        { icon: "📉", text: "Pertes sanguines → hypovolémie → tachycardie, hypotension, choc si > 30% volémie" },
        { icon: "🔬", text: "Score de Rockall (avant fibro) et Glasgow-Blatchford guident l'urgence de l'endoscopie" }
      ],
      source: "Laine L et al. ACG Guidelines Upper Gastrointestinal Bleeding 2021. Am J Gastroenterol. DOI: 10.14309/ajg.0000000000001245"
    },
    dd: [
      { diagnosis: "Ulcère gastro-duodénal hémorragique (AINS)", correct: true, explanation: "AINS + épigastralgie + hématémèse + méléna = ulcère hémorragique AINS très probable" },
      { diagnosis: "Rupture de varices œsophagiennes", correct: false, explanation: "Varices : contexte d'hépatopathie (alcool fort, cirrhose), splénomégalie, caput medusae, hématémèse massive" },
      { diagnosis: "Œsophagite de Mallory-Weiss", correct: false, explanation: "Mallory-Weiss : vomissements répétés puis hématémèse, déchirure jonction œsogastrique — pas de méléna" },
      { diagnosis: "Hémoptysie (sang des poumons)", correct: false, explanation: "Hémoptysie : sang rouge aéré lors de la toux, pas de méléna, ATCD pulmonaire" }
    ],
    gestures: [
      { id: "remplissage_hdh", name: "Remplissage + IPP + fibroscopie dans les 24h", correct: true, description: "Stabilisation hémodynamique, IPP IV haute dose, fibroscopie diagnostique et thérapeutique", steps: ["2 VVP grosses calibres + remplissage cristalloïdes 500mL rapide", "NFS, coag, groupe/RAI, ionogramme, créatinine", "IPP : oméprazole 80mg bolus IV puis 8mg/h IVSE (score Forrest)", "Transfusion si Hb < 7g/dL (< 9g/dL si cardiopathie)", "FIBROSCOPIE haute dans les 24h (< 12h si instabilité)", "Arrêt définitif AINS, Helicobacter pylori à tester"] },
      { id: "chirurgie_hdh", name: "Chirurgie d'emblée", correct: false, description: "Chirurgie réservée à l'échec de 2 endoscopies ou hémorragie non contrôlable (< 5% des cas)" },
      { id: "attente_hdh", name: "Surveillance simple et fibroscopie en externe", correct: false, description: "Instabilité hémodynamique = urgence endoscopique dans les 12h, pas en externe" }
    ],
    keyPoints: ["Score de Glasgow-Blatchford ≥ 1 : nécessite fibroscopie urgente", "IPP haute dose IV réduit le risque de récidive hémorragique", "Fibroscopie < 24h si stable, < 12h si instable (choc, Hb < 8)", "Arrêt définitif des AINS, substituer par paracétamol", "Eradication H. pylori si présent : prévient 80% des récidives"],
    sourcesFull: ["Laine L et al. ACG Guidelines 2021. DOI: 10.14309/ajg.0000000000001245", "Villanueva C et al. Transfusion Strategies in UGIB. NEJM 2013. DOI: 10.1056/NEJMoa1211801"]
  },

  // ── CAS 18 ── CRISE ÉPILEPTIQUE GÉNÉRALISÉE
  {
    id: "epilepsie", title: "État de mal épileptique", subtitle: "Crise généralisée tonico-clonique > 5 min",
    color: "#7C3AED", difficulty: 2, specialty: "Neuro-Urgences",
    vignette: { headline: "Femme de 26 ans, convulsions depuis 8 minutes", context: "Épileptique sous lévétiracétam. A oublié son traitement depuis 3 jours. Convulsions continues.", tags: ["URGENCE NEUROLOGIQUE", "Épileptique connue", "Crise > 5 min"] },
    patient: { name: "Camille R.", age: 26, sex: "F", context: "Épilepsie idiopathique sous lévétiracétam 1000mg x2/j. Arrêt traitement depuis 3j (voyage).", arriving: "SMUR : convulsions tonico-cloniques généralisées continues depuis 8 min, SpO2 89%" },
    vitals: { pa: "145/90", fc: 130, spo2: 89, temp: 37.5, fr: 24, glasgow: 6 },
    symptoms: ["Convulsions tonico-cloniques généralisées > 8 min", "Perte de conscience", "Cyanose péribuccale", "Morsure latérale de langue", "Arrêt traitement depuis 3 jours (facteur déclenchant)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 130, pr: 150, qrs: 80, qt: 370, anomalies: ["Tachycardie sinusale ictale"], image: "vagal", description: "Tachycardie sinusale pendant la crise. ECG secondaire." },
    physiopathology: {
      title: "Décharge neuronale synchrone incontrôlée",
      steps: [
        { icon: "⚡", text: "Déséquilibre excitation/inhibition neuronale → décharge synchrone des neurones corticaux" },
        { icon: "🔁", text: "Généralisée : propagation rapide aux deux hémisphères via le corps calleux → perte conscience" },
        { icon: "💪", text: "Phase tonique (10-20s) puis phase clonique (20-60s) → épuisement musculaire" },
        { icon: "⏱️", text: "État de mal > 5 min : mécanismes inhibiteurs épuisés, risque de mort neuronale (> 30 min)" },
        { icon: "🌡️", text: "Hyperthermie, hypoxie, acidose lactique, rhabdomyolyse si prolongé" }
      ],
      source: "Trinka E et al. ILAE Definition Status Epilepticus 2015. Epilepsia. DOI: 10.1111/epi.13121"
    },
    dd: [
      { diagnosis: "État de mal épileptique (EME)", correct: true, explanation: "Crise > 5 min chez épileptique connue après arrêt traitement = EME jusqu'à preuve du contraire" },
      { diagnosis: "Hypoglycémie", correct: false, explanation: "TOUJOURS vérifier le dextro : hypoglycémie peut déclencher ou mimer des convulsions" },
      { diagnosis: "Éclampsie", correct: false, explanation: "Éclampsie si grossesse : chercher HTA, protéinurie, œdème — non pertinent ici mais à éliminer" },
      { diagnosis: "Crise psychogène non épileptique (CPNE)", correct: false, explanation: "CPNE : durée longue, mouvements asynchrones, suggestibilité, SpO2 conservée, lactates normaux" }
    ],
    gestures: [
      { id: "benzo", name: "Benzodiazépine IV + position sécurité", correct: true, description: "1ère ligne : clonazépam 1mg IV ou diazépam 10mg IV ou midazolam 10mg IM si pas VVP", steps: ["Position latérale de sécurité", "Oxygène masque haute concentration", "Dextro capillaire IMMÉDIAT", "VVP + clonazépam (Rivotril®) 1mg IV lent sur 2 min", "Si pas VVP : midazolam 10mg IM cuisse", "Si crise persiste à 5 min : 2e dose benzo", "Si crise > 20 min : phénytoïne IV ou valproate IV (2e ligne)", "Si crise > 40 min : EME réfractaire → anesthésie générale"] },
      { id: "phenyto_d", name: "Phénytoïne IV d'emblée", correct: false, description: "Phénytoïne = 2e ligne après échec benzodiazépine. Les BZD sont plus rapides et efficaces en 1ère intention." },
      { id: "attente_benzo", name: "Attendre la fin spontanée de la crise", correct: false, description: "Dangereux si crise > 5 min : mort neuronale à partir de 30 min, hypoxie, rhabdomyolyse. Traiter immédiatement." }
    ],
    keyPoints: ["EME = crise > 5 min ou 2 crises sans reprise conscience → traitement IMMÉDIAT", "1ère ligne : benzodiazépine (clonazépam IV ou midazolam IM)", "Dextro TOUJOURS avant antiépileptique", "2e ligne (> 20 min) : phénytoïne IV 20mg/kg ou acide valproïque IV 40mg/kg", "Chercher la cause : arrêt traitement, hypoglycémie, hyponatrémie, AVC, méningite"],
    sourcesFull: ["Trinka E et al. ILAE 2015. DOI: 10.1111/epi.13121", "Leitinger M et al. Epidemiology of status epilepticus. Epilepsy Res 2019.", "HAS. État de mal épileptique 2020."]
  },

  // ── CAS 19 ── FRACTURE COL FÉMUR
  {
    id: "fracture_col", title: "Fracture du col du fémur", subtitle: "Trauma de fragilité — sujet âgé",
    color: "#78716C", difficulty: 1, specialty: "Traumatologie",
    vignette: { headline: "Femme de 84 ans, trouvée à terre, jambe en rotation externe", context: "Chute de sa hauteur en allant aux toilettes. Douleur hanche droite intense, ne peut se lever. Isolée.", tags: ["Urgence < 4h", "Chute sujet âgé", "Impossibilité appui"] },
    patient: { name: "Odette B.", age: 84, sex: "F", context: "HTA, ostéoporose connue, ATCD AVC léger, vit seule. Retrouvée par voisine après 2h à terre.", arriving: "Pompiers : impossible de se lever, jambe droite en rotation externe, douleur inguinale droite intense" },
    vitals: { pa: "145/85", fc: 88, spo2: 95, temp: 36.5, fr: 16, glasgow: 15 },
    symptoms: ["Douleur inguinale droite intense (8/10)", "Impotence fonctionnelle totale du membre droit", "Jambe droite en rotation externe et adduction", "Membre droit raccourci vs gauche", "Hématome inguinal en formation"],
    ecg: { rythme: "Sinusal", fc: 88, pr: 180, qrs: 90, qt: 400, anomalies: ["BAV 1° (PR 180ms)", "Hypertrophie VG"], image: "vagal", description: "BAV 1°, HVG. ECG bilan préopératoire — pas d'anomalie aiguë." },
    physiopathology: {
      title: "Fracture ostéoporotique par insuffisance osseuse",
      steps: [
        { icon: "🦴", text: "Ostéoporose : diminution densité osseuse → fragilité trabéculaire, surtout col fémoral" },
        { icon: "💥", text: "Chute de faible hauteur suffit → fracture par tassement ou cisaillement du col" },
        { icon: "🩸", text: "Hématome local + douleur intense → impotence fonctionnelle immédiate" },
        { icon: "⏱️", text: "Sujet âgé au sol > 1h : risque d'hypothermie, rhabdomyolyse, escarres, déshydratation" },
        { icon: "⚠️", text: "Mortalité à 1 an : 15-25% (complications de décubitus, décompensation comorbidités)" }
      ],
      source: "HAS. Prévention et prise en charge de la fracture du col du fémur 2020. has-sante.fr"
    },
    dd: [
      { diagnosis: "Fracture du col du fémur", correct: true, explanation: "Triade : chute + rotation externe + raccourcissement + impotence fonctionnelle = fracture col jusqu'à preuve du contraire (radio)" },
      { diagnosis: "Fracture du trochanter", correct: false, explanation: "Fracture trochantérienne : similaire mais plus périphérique, stable, possible marche avec aide" },
      { diagnosis: "Luxation prothèse de hanche", correct: false, explanation: "Luxation prothèse : ATCD arthroplastie récente, position caractéristique, radio confirme" },
      { diagnosis: "Coxarthrose décompensée", correct: false, explanation: "Coxarthrose : douleur chronique, pas d'impotence totale aiguë, pas de raccourcissement" }
    ],
    gestures: [
      { id: "immob_chir", name: "Antalgiques + bilan + chirurgie dans les 48h", correct: true, description: "Chirurgie dans les 24-48h : réduit mortalité et complications de décubitus", steps: ["Antalgiques : paracétamol 1g IV + kétoprofen 50mg IV (si pas CI)", "Bloc fémoral écho-guidé : analgésie régionale excellente", "Radio bassin face + hanche (profil chirurgical)", "Bilan préopératoire complet (dont ECG, Hb, coag)", "Chirurgie dans les 24-48h : ostéosynthèse (Garden 1-2) ou prothèse (Garden 3-4)", "Prévention escarres, kiné précoce post-op"] },
      { id: "traction", name: "Traction au lit jusqu'à stabilisation", correct: false, description: "La traction est obsolète : augmente les complications de décubitus sans bénéfice prouvé" },
      { id: "traitement_ortho", name: "Traitement orthopédique non chirurgical", correct: false, description: "Réservé aux patients non marchants ou contre-indication chirurgicale absolue — mortalité plus élevée" }
    ],
    keyPoints: ["Objectif : chirurgie < 48h (réduit mortalité de 25%)", "Bloc fémoral : meilleure analgésie préopératoire, réduction morphiniques", "Garden 1-2 (non déplacée) : ostéosynthèse par vis cannelées", "Garden 3-4 (déplacée) : prothèse totale ou céphalique", "Prévention systématique : HBPM anti-thrombotique, kiné J1 post-op"],
    sourcesFull: ["HAS. Fracture du col du fémur 2020. has-sante.fr", "Moja L et al. Timing matters in hip fracture surgery. Cochrane 2012.", "Simunovic N et al. Early vs delayed surgery for hip fracture. CMAJ 2010."]
  },

  // ── CAS 20 ── TRAUMATISME CRÂNIEN
  {
    id: "trauma_crane", title: "Traumatisme crânien grave", subtitle: "GCS ≤ 8 — hématome extradural",
    color: "#1E40AF", difficulty: 3, specialty: "Traumatologie-Neuro",
    vignette: { headline: "Homme de 19 ans, inconscient après accident moto", context: "Chute de moto à 50 km/h, casque arraché. Inconscient 5 min, bref réveil lucide, puis recoma.", tags: ["URGENCE VITALE", "Intervalle libre", "GCS abaissé"] },
    patient: { name: "Théo P.", age: 19, sex: "M", context: "Sans ATCD. Accident moto 50km/h, casque mal attaché. Témoin : perte de conscience immédiate, réveil 10 min, puis recoma progressif.", arriving: "SMUR : GCS 9 et chutant, anisocorie droite (mydriase), hématome temporal droit" },
    vitals: { pa: "155/90", fc: 58, spo2: 95, temp: 37.0, fr: 14, glasgow: 8 },
    symptoms: ["Perte de conscience immédiate (coma initial)", "Intervalle libre ('lucide interval') de 10 minutes", "Recoma progressif (GCS 8 et chutant)", "Anisocorie droite (mydriase ipsilatérale = engagement temporal)", "Hématome temporal droit, hémiplégie gauche naissante"],
    ecg: { rythme: "Sinusal bradycarde", fc: 58, pr: 180, qrs: 90, qt: 420, anomalies: ["Bradycardie + HTA (triade de Cushing — HTIC)", "Bradycardie sinusale"], image: "vagal", description: "Bradycardie sinusale. Associée à HTA = triade de Cushing — signe d'engagement imminente." },
    physiopathology: {
      title: "Hématome extradural artériel et compression cérébrale",
      steps: [
        { icon: "💥", text: "Fracture temporale → rupture de l'artère méningée moyenne → saignement artériel extradural" },
        { icon: "🩸", text: "Hématome en lentille biconvexe comprime progressivement le cerveau" },
        { icon: "⏱️", text: "Intervalle libre : conscience transitoire car saignement artériel progressif (20-60 min)" },
        { icon: "🧠", text: "Hypertension intracrânienne → compression uncus temporal → mydriase homolatérale (3e paire)" },
        { icon: "⚠️", text: "Engagement temporal → décérébration → mort cérébrale si pas évacuation dans les 30-60 min" }
      ],
      source: "Brain Trauma Foundation. Guidelines for TBI Management 4th edition 2016. DOI: 10.1089/neu.2016.4667"
    },
    dd: [
      { diagnosis: "Hématome extradural (HED)", correct: true, explanation: "Intervalle libre + mydriase ipsilatérale + recoma + contexte traumatique temporal = HED artériel jusqu'à preuve du contraire" },
      { diagnosis: "Hématome sous-dural aigu (HSD)", correct: false, explanation: "HSD : souvent sans intervalle libre, lésion en croissant, sujet âgé sous anticoagulants ou décélération violente" },
      { diagnosis: "Contusion cérébrale", correct: false, explanation: "Contusion : coma d'emblée sans intervalle libre, lésions hétérogènes sur TDM" },
      { diagnosis: "Convulsions post-traumatiques", correct: false, explanation: "Convulsions post-traumatiques sans mydriase ni triade de Cushing — pas d'hypertension intracrânienne ici" }
    ],
    gestures: [
      { id: "trephination", name: "TDM cérébral + évacuation neurochirurgicale URGENTE", correct: true, description: "TDM confirme le diagnostic. Trépanation/craniotomie en urgence dans les 30 min si engagement.", steps: ["Intubation si GCS ≤ 8 (protection voie aérienne)", "TDM cérébral sans injection IMMÉDIAT (si stable hémodynamique)", "Neurochirurgien prévenu DÈS l'accueil", "Mannitol 20% 1g/kg IV si engagement (mydriase) en attente bloc", "Éviter hypotension (PA cible > 110 mmHg systolique)", "Craniotomie d'urgence : évacuation hématome dans les 30-60 min"] },
      { id: "med_seul", name: "Traitement médical conservateur + réévaluation", correct: false, description: "ERREUR si engagement (mydriase) : le seul traitement est chirurgical. Chaque minute = neurones perdus." },
      { id: "cortico_cranio", name: "Corticoïdes IV pour réduire l'œdème", correct: false, description: "CONTRE-INDIQUÉS dans le traumatisme crânien grave (étude CRASH : augmentent la mortalité de 20%)" }
    ],
    keyPoints: ["Intervalle libre = pathognomonique HED artériel (artère méningée moyenne)", "Mydriase ipsilatérale = engagement temporal → urgence chirurgicale < 30 min", "JAMAIS de corticoïdes dans le TCG (CRASH trial, 2004)", "Objectifs TCG : SpO2 > 95%, PaCO2 35-45, PAS > 110 mmHg", "GCS ≤ 8 = intubation pour protection des voies aériennes"],
    sourcesFull: ["Brain Trauma Foundation 4th edition 2016. DOI: 10.1089/neu.2016.4667", "Roberts I et al. CRASH trial corticosteroids in TBI. Lancet 2004. DOI: 10.1016/S0140-6736(04)17188-2"]
  },

,
  // ── CAS 21 ── INTOXICATION CO
  {
    id: "intox_co", title: "Intoxication au monoxyde de carbone", subtitle: "Intoxication collective — urgence hyperbare",
    color: "#374151", difficulty: 2, specialty: "Toxicologie",
    vignette: { headline: "Famille de 4 personnes, céphalées et vomissements le matin", context: "Chaudière au gaz vieille, mal entretenue. 3 personnes dont 1 enfant inconscients. CO-Hb 28%.", tags: ["URGENCE VITALE", "Intoxication collective", "Chaudière suspect"] },
    patient: { name: "Famille Durand (père, 42 ans)", age: 42, sex: "M", context: "Chaudière révisée last year. Hiver, fenêtres fermées. Femme et 2 enfants également symptomatiques.", arriving: "Pompiers : 4 victimes, père GCS 11, femme GCS 13, enfant 8 ans GCS 14, bébé 18 mois GCS 15 avec vomissements" },
    vitals: { pa: "130/80", fc: 105, spo2: 98, temp: 36.8, fr: 18, glasgow: 11 },
    symptoms: ["Céphalées intenses", "Nausées, vomissements", "Vertiges, ataxie", "Confusion (GCS 11)", "SpO2 oxymétrie = 98% (FAUSSE — ne détecte pas la COHb)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 105, pr: 150, qrs: 90, qt: 380, anomalies: ["Tachycardie sinusale", "Possible sus-décalage ST si ischémie cardiaque au CO"], image: "vagal", description: "Tachycardie sinusale. Surveiller ischémie myocardique (CO cardiotoxique)." },
    physiopathology: {
      title: "Blocage de l'oxygénation cellulaire par le CO",
      steps: [
        { icon: "🔥", text: "Combustion incomplète → CO inodore, incolore, non irritant (traître)" },
        { icon: "🩸", text: "CO affinité 250x > O2 pour l'hémoglobine → COHb non fonctionnelle → anémie fonctionnelle" },
        { icon: "🔌", text: "CO inhibe aussi la cytochrome oxydase mitochondriale → toxicité cellulaire directe" },
        { icon: "🧠", text: "Organes les plus sensibles : cerveau et cœur (haute consommation O2)" },
        { icon: "⚠️", text: "SpO2 pulsée = FAUSSE (ne distingue pas COHb de OHb) — seule gazométrie avec CO-oxymétrie est fiable" }
      ],
      source: "Weaver LK. Clinical practice: Carbon Monoxide Poisoning. NEJM 2009. DOI: 10.1056/NEJMcp0903723"
    },
    dd: [
      { diagnosis: "Intoxication au CO (collective)", correct: true, explanation: "Intoxication collective + contexte chauffage + COHb 28% + SpO2 normale (piège) + céphalées/nausées = CO jusqu'à preuve du contraire" },
      { diagnosis: "Gastro-entérite virale collective", correct: false, explanation: "Gastro-entérite : vomissements/diarrhées sans troubles neuro, pas de contexte chauffage, PAS d'atteinte neurologique" },
      { diagnosis: "Méningite", correct: false, explanation: "Méningite : pas collective, pas de contexte CO, syndrome méningé (raideur nuque), fièvre" },
      { diagnosis: "Migraine collective", correct: false, explanation: "Impossible : une migraine ne touche pas plusieurs personnes simultanément dans le même lieu" }
    ],
    gestures: [
      { id: "o2_haut_debit", name: "O2 haut débit 15L/min + évacuation + oxygénothérapie hyperbare", correct: true, description: "O2 masque haute concentration réduit la demi-vie de COHb de 5h à 60-90 min", steps: ["Évacuation IMMÉDIATE du local (sécurité secouristes — détecteur CO)", "O2 masque haute concentration 15L/min (demi-vie COHb : 5h air, 60 min O2 pur)", "Gazométrie avec CO-oxymétrie (COHb%)", "ECG et troponine (cardiotoxicité CO)", "Oxygénothérapie hyperbare si : COHb > 25%, grossesse, trouble neuro, enfant — réduit séquelles tardives", "Décontamination du local (SDIS)"] },
      { id: "ventoline_co", name: "Bronchodilatateurs et surveillance", correct: false, description: "Le CO n'est pas un irritant bronchique — les bronchodilatateurs sont inutiles" },
      { id: "antidote", name: "Antidote spécifique IV", correct: false, description: "Pas d'antidote spécifique au CO. L'O2 est l'antidote fonctionnel." }
    ],
    keyPoints: ["SpO2 pulsée = FAUSSE en intoxication CO — seule la gazométrie avec CO-oxymétrie compte", "O2 masque 15L/min : réduit demi-vie COHb de 5h à 60-90 min", "Oxygénothérapie hyperbare (OHB) : indications = COHb > 25%, grossesse, enfant, trouble neuro", "Séquelles tardives (SDT) : troubles cognitifs à 3-4 semaines dans 30% des cas graves", "Déclaration obligatoire à l'ARS + signalement à la DDPP (chaudière)"],
    sourcesFull: ["Weaver LK. NEJM 2009. DOI: 10.1056/NEJMcp0903723", "Hampson NB et al. Hyperbaric oxygen for CO poisoning. DOI: 10.1097/ACM.0b013e318245d9d1"]
  },

  // ── CAS 22 ── ACIDOCÉTOSE DIABÉTIQUE
  {
    id: "acd", title: "Acidocétose diabétique", subtitle: "Décompensation métabolique sévère",
    color: "#B45309", difficulty: 2, specialty: "Endocrinologie-Urgences",
    vignette: { headline: "Femme de 22 ans, DT1, vomissements et respiration rapide", context: "Diabétique type 1 depuis l'enfance. Gastro depuis 3 jours, a arrêté son insuline car ne mangeait pas. Odeur fruitée.", tags: ["Urgence < 2h", "DT1 + infection", "Kussmaul"] },
    patient: { name: "Julia T.", age: 22, sex: "F", context: "DT1 depuis 8 ans, pompe à insuline. Gastro depuis 3j, a arrêté son insuline. Odeur acétonique.", arriving: "Urgences : vomissements, polypnée ample 28/min (Kussmaul), odeur acétonique, dextro 4,2 g/L" },
    vitals: { pa: "100/65", fc: 112, spo2: 98, temp: 37.5, fr: 28, glasgow: 14 },
    symptoms: ["Polypnée ample et profonde (respiration de Kussmaul)", "Vomissements depuis 3 jours", "Dextro capillaire : 4,2 g/L (23,3 mmol/L)", "Odeur acétonique de l'haleine ('pomme reinette')", "Déshydratation clinique (pli cutané, bouche sèche)"],
    ecg: { rythme: "Sinusal tachycarde", fc: 112, pr: 150, qrs: 90, qt: 380, anomalies: ["Tachycardie sinusale", "Ondes T plates (hypokaliémie à venir sous insuline)"], image: "vagal", description: "Tachycardie sinusale. Surveiller hypokaliémie sous traitement (ECG répétés)." },
    physiopathology: {
      title: "Carence insulinique absolue et cétogenèse",
      steps: [
        { icon: "💉", text: "Arrêt insuline → hyperglycémie sévère (glycolyse impossible, néoglucogenèse)" },
        { icon: "🔥", text: "Lipolyse massive → AGL → foie : production de corps cétoniques (acétoacétate, β-OH-butyrate)" },
        { icon: "⚗️", text: "Accumulation de corps cétoniques → acidose métabolique à trou anionique élevé" },
        { icon: "💨", text: "Compensation respiratoire : hyperventilation de Kussmaul pour éliminer CO2 (alcalose resp)" },
        { icon: "🧂", text: "Hyperglycémie → diurèse osmotique → déshydratation + pertes ioniques (K, Na, P)" }
      ],
      source: "Kitabchi AE et al. Hyperglycemic crises in diabetes. Diabetes Care 2009. DOI: 10.2337/dc09-9032"
    },
    dd: [
      { diagnosis: "Acidocétose diabétique (ACD)", correct: true, explanation: "DT1 + arrêt insuline + hyperglycémie + pH < 7.3 + cétonémie + Kussmaul = ACD" },
      { diagnosis: "Coma hyperosmolaire", correct: false, explanation: "Coma hyperosmolaire : surtout DT2 + âgé, glycémie > 6g/L, PAS d'acidose ni cétose" },
      { diagnosis: "Gastro-entérite seule", correct: false, explanation: "Gastro-entérite ne donne pas de Kussmaul ni d'odeur acétonique ni de glycémie à 4,2 g/L" },
      { diagnosis: "Acidose lactique (metformine)", correct: false, explanation: "Acidose lactique : DT2 sous metformine + IR, lactates > 5 mmol/L, pas de cétose, glycémie moins élevée" }
    ],
    gestures: [
      { id: "rehydrat_insuline", name: "Réhydratation + insulinothérapie IVSE + surveillance K+", correct: true, description: "Remplissage en premier, puis insuline UNIQUEMENT si K+ ≥ 3,5 mmol/L", steps: ["NaCl 0,9% : 1L/h x2h puis 500mL/h (total 3-4L/6h)", "Insuline ordinaire IVSE 0,1 UI/kg/h (pas avant K > 3.5)", "Potassium : 20-40 mmol/L dès que diurèse rétablie", "Contrôle glycémie + ionogramme + pH toutes les heures", "Stopper l'insuline si glycémie < 2,5 g/L → passer à G5%", "Recherche déclenchant : hémocultures, ECBU, bilan infectieux"] },
      { id: "insuline_bolus", name: "Insuline rapide SC en bolus", correct: false, description: "SC insuffisant en ACD : absorption erratique si déshydraté. Voie IV obligatoire." },
      { id: "bicarb", name: "Bicarbonates IV d'emblée", correct: false, description: "Bicarbonates déconseillés sauf pH < 6.9 : risque hypokaliémie aggravée, œdème cérébral" }
    ],
    keyPoints: ["Ne jamais débuter insuline avant correction hypokaliémie (K < 3.5) : risque ACR", "Réhydratation : priorité absolue avant insuline", "Objectif glycémique : diminuer de 0.5 g/L/h (pas trop vite — œdème cérébral)", "Bicarbonates uniquement si pH < 6.9 (rarissime)", "Facteur déclenchant dans 50% des cas : infection, oubli insuline, pompe défaillante"],
    sourcesFull: ["Kitabchi AE et al. Diabetes Care 2009. DOI: 10.2337/dc09-9032", "HAS. Prise en charge ACD 2021.", "ISPAD Guidelines DKA 2022."]
  },

  // ── CAS 23 ── PÉRICARDITE AIGUË
  {
    id: "pericardite", title: "Péricardite aiguë", subtitle: "Inflammation péricardique — origine virale",
    color: "#EC4899", difficulty: 2, specialty: "Cardio",
    vignette: { headline: "Homme de 28 ans, douleur thoracique aggravée en inspiration", context: "Syndrome grippal il y a 10 jours. Douleur améliorée penché en avant, frottement audible.", tags: ["Urgence < 4h", "Post-viral", "Frottement péricardique"] },
    patient: { name: "Antoine M.", age: 28, sex: "M", context: "Sportif, grippe 10 jours. Douleur thoracique depuis 2 jours, majorée inspiration et décubitus.", arriving: "Urgences : douleur thoracique + frottement péricardique à l'auscultation, fièvre 38.2°C" },
    vitals: { pa: "120/75", fc: 92, spo2: 98, temp: 38.2, fr: 16, glasgow: 15 },
    symptoms: ["Douleur thoracique rétrosternale ou précordiale", "Majorée à l'inspiration, en décubitus dorsal", "Améliorée en position penchée en avant ('prière mahométane')", "Frottement péricardique (pathognomonique)", "Contexte viral récent (grippe)"],
    ecg: { rythme: "Sinusal", fc: 92, pr: 155, qrs: 80, qt: 380, anomalies: ["Sus-décalage ST CONCAVE (en selle) dans toutes les dérivations", "Pas d'image miroir", "Sous-décalage PR (spécifique de péricardite)", "Pas d'onde Q"], image: "stemi", description: "Sus-décalage ST concave diffus (sans miroir), sous-décalage PR en D2 — péricardite aiguë. Différent du STEMI (convexe + localisé + miroir)." },
    physiopathology: {
      title: "Inflammation du péricarde et épanchement",
      steps: [
        { icon: "🦠", text: "Virus (Coxsackie, échovirus, grippe) → inflammation du péricarde pariétal et viscéral" },
        { icon: "🔥", text: "Réaction inflammatoire → dépôts de fibrine → frottement des feuillets (frottement auscultatoire)" },
        { icon: "💧", text: "Épanchement péricardique possible → surdité des bruits cardiaques" },
        { icon: "⚡", text: "Inflammation épicardique → sus-décalage ST diffus (concave, 'en selle'), sous-décalage PR" },
        { icon: "⚠️", text: "Complications : tamponnade si épanchement abondant, péricardite constrictive (rare, chronique)" }
      ],
      source: "Adler Y et al. 2015 ESC Guidelines for Pericardial Diseases. Eur Heart J. 2015;36:2921-64. DOI: 10.1093/eurheartj/ehv318"
    },
    dd: [
      { diagnosis: "Péricardite aiguë", correct: true, explanation: "Critères : ≥ 2 sur 4 = douleur typique + frottement + sus-décalage concave + épanchement (écho)" },
      { diagnosis: "STEMI", correct: false, explanation: "STEMI : sus-décalage CONVEXE + localisé + image miroir + douleur en étau — piège ECG critique" },
      { diagnosis: "Embolie pulmonaire", correct: false, explanation: "EP : S1Q3T3, dyspnée, pas de frottement péricardique, contexte TVP" },
      { diagnosis: "Pneumothorax", correct: false, explanation: "PNO : douleur latérale, murmure vésiculaire diminué unilatéral, pas de frottement péricardique" }
    ],
    gestures: [
      { id: "ains_perico", name: "AINS + Colchicine (traitement de référence)", correct: true, description: "Ibuprofène 600mg x3/j + colchicine 0.5mg x2/j pendant 3 mois", steps: ["Ibuprofène 600mg x3/j pendant 2 semaines (ou aspirine 3g/j)", "Colchicine 0.5mg x2/j x3 mois (réduit récidive de 50%)", "Pas de sport pendant 3 mois (sportif de compétition)", "Écho cardiaque : évaluer épanchement", "Si épanchement abondant : hospitalisation, surveillance tamponnade"] },
      { id: "cortico_perico", name: "Corticoïdes d'emblée", correct: false, description: "Corticoïdes : seulement si CI aux AINS, maladie auto-immune — augmentent le risque de récidive en 1ère intention" },
      { id: "anticoag_perico", name: "Anticoagulation", correct: false, description: "CI si épanchement péricardique (risque hémopéricarde). Contre-indiqués en péricardite aiguë." }
    ],
    keyPoints: ["Critères diagnostiques ESC (≥ 2) : douleur typique + frottement + ECG + épanchement", "Écho : toujours réaliser pour évaluer épanchement et FE", "Colchicine : réduit récidive de 50% (COPE et ICAP trials)", "Arrêt sport OBLIGATOIRE 3 mois (sportif amateur) ou 6 mois (compétition)", "Tamponnade : urgence (écho + péricardocentèse si compromis hémodynamique)"],
    sourcesFull: ["Adler Y et al. 2015 ESC Pericardial Diseases. DOI: 10.1093/eurheartj/ehv318", "Imazio M et al. COPE trial colchicine. Circulation 2005.", "Imazio M et al. ICAP trial. NEJM 2013. DOI: 10.1056/NEJMoa1208542"]
  },

  // ── CAS 24 ── OAP CARDIOGÉNIQUE
  {
    id: "oap", title: "Œdème aigu pulmonaire cardiogénique", subtitle: "Insuffisance ventriculaire gauche aiguë",
    color: "#1D4ED8", difficulty: 3, specialty: "Cardio-Réanimation",
    vignette: { headline: "Homme de 76 ans, asphyxie nocturne brutale", context: "Réveillé en pleine nuit incapable de respirer, assis au bord du lit. HTA mal contrôlée. SpO2 76%.", tags: ["URGENCE VITALE", "Orthopnée", "SpO2 critique"] },
    patient: { name: "Claude V.", age: 76, sex: "M", context: "HTA, FA chronique, FEVG 35% connue (cardiopathie ischémique). Arrêt diurétiques il y a 1 semaine.", arriving: "SMUR : assis, polypnéique, SpO2 76%, crépitants bilatéraux, galop cardiaque" },
    vitals: { pa: "185/110", fc: 118, spo2: 76, temp: 37.2, fr: 34, glasgow: 14 },
    symptoms: ["Orthopnée absolue (incapable de s'allonger)", "Dyspnée massive, toux avec expectorations rosées", "Crépitants bilatéraux des bases aux sommets", "Galop de B3 (bruit de remplissage ventriculaire)", "Marbrures des extrémités"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 118, pr: null, qrs: 110, qt: 380, anomalies: ["FA sur cardiopathie connue", "BBG préexistant (QRS > 120ms)", "Sous-décalage ST diffus (surcharge VG)"], image: "fa", description: "FA chronique. BBG préexistant. Sous-décalage ST non spécifique. OAP sur cardiopathie ischémique." },
    physiopathology: {
      title: "Défaillance ventriculaire gauche aiguë",
      steps: [
        { icon: "💔", text: "FEVG 35% + arrêt diurétiques → surcharge volémique progressive non compensée" },
        { icon: "📈", text: "Pression dans oreillette gauche + veines pulmonaires → hypertension capillaire pulmonaire" },
        { icon: "💧", text: "Pression capillaire > pression oncotique (> 25 mmHg) → transsudation dans alvéoles" },
        { icon: "🫁", text: "Alvéoles remplies de liquide → trouble des échanges gazeux → hypoxémie sévère" },
        { icon: "⚠️", text: "Cercle vicieux : hypoxie → vasospasme coronaire → aggravation ischémie → aggravation OAP" }
      ],
      source: "McDonagh TA et al. 2021 ESC Heart Failure Guidelines. Eur Heart J. 2021;42:3599-726. DOI: 10.1093/eurheartj/ehab368"
    },
    dd: [
      { diagnosis: "OAP cardiogénique", correct: true, explanation: "ATCD cardiopathie + arrêt diurétiques + orthopnée + crépitants bilatéraux + galop B3 + SpO2 critique = OAP cardiogénique" },
      { diagnosis: "Pneumonie bilatérale", correct: false, explanation: "Pneumonie : fièvre, expectorations purulentes, pas de galop, pas d'ATCD cardio, crépitants localisés" },
      { diagnosis: "Asthme aigu grave", correct: false, explanation: "Asthme : sibilants diffus (pas crépitants), jeune, contexte allergique, pas de galop" },
      { diagnosis: "Embolie pulmonaire bilatérale", correct: false, explanation: "EP : douleur pleurétique, S1Q3T3, pas de galop, crépitants absents" }
    ],
    gestures: [
      { id: "vni_oap", name: "VNI (CPAP/BiPAP) + dénitration + furosémide", correct: true, description: "Trépied thérapeutique : oxygénation, réduction précharge (dénitration), réduction volémie (diurétique)", steps: ["VNI CPAP ou BiPAP en urgence (masque facial étanche)", "Dénitrés : isosorbide dinitrate sublingual puis IVSE", "Furosémide 40-80mg IV (si PAS > 90 mmHg)", "Position semi-assise (45°)", "Morphine 2-4mg IV (anxiété, vasodilatatation)", "Monitoring continu : SpO2, ECG, PA toutes les 5 min", "Si échec VNI : intubation"] },
      { id: "remplissage_oap", name: "Remplissage vasculaire", correct: false, description: "CONTRE-INDIQUÉ en OAP cardiogénique : aggrave la surcharge volémique et empire l'état" },
      { id: "o2_lunette", name: "Oxygène aux lunettes 2L/min", correct: false, description: "Insuffisant si SpO2 76% : VNI ou masque haute concentration au minimum. La VNI est le gold standard." }
    ],
    keyPoints: ["VNI (CPAP) : réduit intubation et mortalité de 40% (3CPO trial)", "Dénitrés IV : réduction rapide précharge (CI si PAS < 90 mmHg)", "Furosémide IV : diurèse forcée — efficace en 30 min", "Morphine IV : discussé (JAMA 2020 — bénéfice incertain)", "CPAP 5-10 cmH2O en première intention, BiPAP si hypercapnie"],
    sourcesFull: ["McDonagh TA et al. 2021 ESC HF Guidelines. DOI: 10.1093/eurheartj/ehab368", "Gray A et al. 3CPO trial VNI in AHF. NEJM 2008. DOI: 10.1056/NEJMoa0707992"]
  },

  // ── CAS 25 ── COLIQUE NÉPHRÉTIQUE
  {
    id: "colique_nephretique", title: "Colique néphrétique hyperalgique", subtitle: "Obstruction urétérale lithiasique",
    color: "#059669", difficulty: 1, specialty: "Urologie-Urgences",
    vignette: { headline: "Homme de 38 ans, douleur lombaire droite atroce", context: "Douleur en coup de poignard lombaire droite irradiant vers la bourse. Agité, incapable de trouver position antalgique.", tags: ["Urgence < 1h", "Douleur maximale", "Irradiation génitale"] },
    patient: { name: "Kevin M.", age: 38, sex: "M", context: "ATCD de lithiase il y a 3 ans. Pas de traitement préventif. Douleur depuis 2h, hématurie macroscopique.", arriving: "Urgences : douleur lombaire droite 10/10, agitation extrême, hématurie macroscopique, pas de fièvre" },
    vitals: { pa: "155/95", fc: 108, spo2: 99, temp: 37.0, fr: 18, glasgow: 15 },
    symptoms: ["Douleur lombaire brutale en coup de poignard (10/10)", "Irradiation vers la fosse iliaque, la bourse droite", "Agitation extrême, incapacité à trouver position antalgique (signe majeur)", "Hématurie macroscopique", "Nausées sans fièvre"],
    ecg: { rythme: "Sinusal", fc: 108, pr: 150, qrs: 80, qt: 380, anomalies: [], image: "vagal", description: "ECG normal. Non pertinent dans ce contexte." },
    physiopathology: {
      title: "Obstruction urétérale et hyperpression pyélique",
      steps: [
        { icon: "🪨", text: "Calcul formé dans le bassinet (oxalate Ca 80%) → migration dans l'uretère" },
        { icon: "🔴", text: "Blocage du calcul → obstruction complète → hyperpression dans le bassinet" },
        { icon: "⚡", text: "Distension rapide du système excréteur → activation nocicepteurs urétéraux (C et Aδ)" },
        { icon: "🌊", text: "Contractions péristaltiques urétérales pour chasser le calcul → douleur spasmodique intense" },
        { icon: "🦠", text: "Si infection surajoutée (fièvre) → pyélonéphrite obstructive = URGENCE UROLOGIQUE absolue" }
      ],
      source: "Türk C et al. EAU Guidelines Urolithiasis 2022. eau.org"
    },
    dd: [
      { diagnosis: "Colique néphrétique lithiasique", correct: true, explanation: "ATCD lithiase + douleur lombaire irradiant bourse + agitation + hématurie + pas de fièvre = CN typique" },
      { diagnosis: "Pyélonéphrite aiguë", correct: false, explanation: "PNA : fièvre élevée, douleur lombaire sourde permanente, pas de migration génitale, pas d'agitation aussi intense" },
      { diagnosis: "Appendicite rétrocæcale", correct: false, explanation: "Appendicite : douleur FID, défense, fièvre, pas d'irradiation génitale, pas d'hématurie" },
      { diagnosis: "Dissection aortique", correct: false, explanation: "Dissection : douleur migratrice thoraco-lombaire, asymétrie TA, pas d'hématurie, pas d'irradiation génitale" }
    ],
    gestures: [
      { id: "antalgiques_cn", name: "AINS IV + antispasmodiques + alpha-bloquant", correct: true, description: "AINS = traitement antalgique de référence de la CN (plus efficace que morphine)", steps: ["Kétoprofène 100mg IV (AINS de référence) ou diclofénac 75mg IM", "Phloroglucinol (Spasfon®) 4amp IV (antispasmodique)", "Paracétamol 1g IV si CI aux AINS (IR, ulcère)", "Alpha-bloquant (tamsulosine 0.4mg/j) : facilite expulsion calcul urétéral distal", "Scanner urinaire sans injection (gold standard diagnostique)", "Hydratation abondante orale dès que douleur calmée"] },
      { id: "morphine_cn", name: "Morphine IV d'emblée", correct: false, description: "Morphine moins efficace que AINS dans la CN. AINS = 1ère intention sauf CI." },
      { id: "ablation_immédiate", name: "Urétéroscopie en urgence immédiate", correct: false, description: "Urétéroscopie urgente uniquement si : fièvre (pyélonéphrite obstructive) ou rein unique. Sinon attente et traitement médical 4 semaines." }
    ],
    keyPoints: ["AINS = antalgique de référence CN (supérieur à morphine — Cochrane 2016)", "Scanner sans injection : gold standard (calcul visible, anatomie, complications)", "Hospitalisation si : fièvre (urgence drainante), douleur résistante, rein unique, grossesse", "Pyélonéphrite obstructive : drainage URGENT (JJ ou néphrostomie) + ATB IV", "Calcul > 10mm : peu de chances d'expulsion spontanée → urologie"],
    sourcesFull: ["Türk C et al. EAU Guidelines Urolithiasis 2022. eau.org", "Holdgate A et al. Cochrane AINS vs opioides CN 2016.", "HAS. Lithiase urinaire 2019."]
  },

  // ── CAS 26 ── PNEUMONIE SÉVÈRE
  {
    id: "pneumonie", title: "Pneumonie aiguë communautaire sévère", subtitle: "Pneumocoque — score PSI/FINE V",
    color: "#0369A1", difficulty: 2, specialty: "Pneumo-Infectio",
    vignette: { headline: "Homme de 70 ans, fièvre 40°C et douleur basithoracique gauche", context: "Diabétique, BPCO. Fièvre brutale, toux productive rouillée depuis 3 jours. Confusion légère.", tags: ["Urgence < 4h", "PSI IV-V", "Confusion + hypoxie"] },
    patient: { name: "Raymond D.", age: 70, sex: "M", context: "Diabète, BPCO, immunodéprimé (corticoïdes chroniques). Syndrome infectieux depuis 3 jours.", arriving: "Urgences : fièvre 40°C, toux rouillée, SpO2 87% sous air, confusion, crépitants base G" },
    vitals: { pa: "100/60", fc: 112, spo2: 87, temp: 40.1, fr: 28, glasgow: 13 },
    symptoms: ["Fièvre brutale 40°C + frissons ('poignard thoracique')", "Toux productive avec expectorations rouillées (Pneumocoque)", "Douleur basithoracique gauche pleurétique", "Confusion (critère CURB-65 : +1)", "Crépitants base gauche à l'auscultation"],
    ecg: { rythme: "Sinusal tachycarde", fc: 112, pr: 155, qrs: 85, qt: 370, anomalies: ["Tachycardie sinusale fébrile"], image: "vagal", description: "Tachycardie sinusale sur contexte fébrile. Pas d'anomalie aiguë." },
    physiopathology: {
      title: "Infection bactérienne alvéolaire et consolidation",
      steps: [
        { icon: "🦠", text: "Streptococcus pneumoniae : bactérie encapsulée, contamination gouttelettes de Pflügge" },
        { icon: "🔴", text: "Colonisation des alvéoles : inflammation, exsudat protéique = condensation pulmonaire" },
        { icon: "📉", text: "Zones ventilées non perfusées + zones perfusées non ventilées → effet shunt → hypoxémie" },
        { icon: "🌡️", text: "Sepsis pneumococcique → libération cytokines → fièvre brutale, frissons, tachycardie" },
        { icon: "⚠️", text: "Formes graves : SDRA (syndrome de détresse respiratoire aiguë), bactériémie (30%), méningite" }
      ],
      source: "Mandell LA et al. IDSA/ATS CAP Guidelines 2007. Clin Infect Dis. DOI: 10.1086/511159"
    },
    dd: [
      { diagnosis: "Pneumonie aiguë communautaire à Pneumocoque (sévère)", correct: true, explanation: "CURB-65 = 3 (confusion + urée élevée + FR28 + âge>65) → admission USC/réa, ATB bispectrale" },
      { diagnosis: "Tuberculose pulmonaire", correct: false, explanation: "TB : début insidieux, toux chronique, amaigrissement, sueurs nocturnes, contage — pas de début aigu brutal" },
      { diagnosis: "Embolie pulmonaire avec infarctus", correct: false, explanation: "EP avec infarctus peut ressembler : contexte TVP, S1Q3T3, hémoptysie — mais pas de fièvre aussi élevée d'emblée" },
      { diagnosis: "OAP cardiogénique", correct: false, explanation: "OAP : contexte cardio, crépitants bilatéraux, galop, orthopnée, pas de fièvre" }
    ],
    gestures: [
      { id: "atb_pneumonie", name: "ATB bispectrale + O2 + hospitalisation USC", correct: true, description: "PSI V / CURB-65 ≥ 3 : hospitalisation urgente, C3G + macrolide ou C3G + amoxicilline-acide clav.", steps: ["O2 masque haute concentration (cible SpO2 ≥ 94%)", "Amoxicilline-clavulanate 1g x3/j IV + spiramycine 3MUI x3/j IV (couverture atypiques)", "Ou ceftriaxone 2g/j IV + azithromycine 500mg/j", "Hémocultures x2 avant ATB + ECBC + antigénurie pneumocoque et légionelle", "Radio thorax face + scanner si doute", "Réanimation si : choc, SDRA, ventilation mécanique nécessaire"] },
      { id: "amoxicilline_cn", name: "Amoxicilline orale en ambulatoire", correct: false, description: "Insuffisant pour PSI IV-V : hospitalisation impérative, voie IV, surveillance rapprochée" },
      { id: "antifungiques", name: "Antifongiques empiriques", correct: false, description: "Réservés à l'immunodéprimé profond (hémato, VIH stade C) avec tableau atypique — pas en 1ère intention PAC" }
    ],
    keyPoints: ["CURB-65 ≥ 3 ou PSI IV-V : hospitalisation USC/réanimation", "Antigénurie pneumocoque : spécificité 97%, résultat 15 min", "ATB dans les 4h après diagnostic : réduit mortalité", "C3G + macrolide : couverture bispectrale (pneumocoque + atypiques)", "Vaccination antipneumococcique : indication chez > 65 ans et immunodéprimés"],
    sourcesFull: ["Mandell LA et al. IDSA/ATS 2007. DOI: 10.1086/511159", "Lim WS et al. CURB-65 score. Thorax 2003.", "HAS. Pneumonie communautaire 2021."]
  },

  // ── CAS 27 ── HERNIE ÉTRANGLÉE
  {
    id: "hernie", title: "Hernie inguinale étranglée", subtitle: "Étranglement herniaire — urgence chirurgicale",
    color: "#7C2D12", difficulty: 2, specialty: "Chirurgie viscérale",
    vignette: { headline: "Homme de 67 ans, masse inguinale douloureuse et irréductible", context: "Hernie connue depuis 10 ans. Ce matin blocage brutal, vomissements, pas de gaz depuis 6h.", tags: ["Urgence < 3h", "Hernie irréductible", "Occlusion associée"] },
    patient: { name: "Maurice P.", age: 67, sex: "M", context: "Hernie inguinale droite connue, souvent réduite seul. Ce matin: irréductible + douleur + vomissements.", arriving: "Urgences : tuméfaction inguinale droite irréductible, tendue, douloureuse, vomissements, arrêt gaz 6h" },
    vitals: { pa: "140/85", fc: 102, spo2: 98, temp: 37.8, fr: 18, glasgow: 15 },
    symptoms: ["Tuméfaction inguinale droite irréductible", "Douleur intense localisée", "Vomissements", "Arrêt des gaz depuis 6h", "Légère fièvre (souffrance intestinale)"],
    ecg: { rythme: "Sinusal", fc: 102, pr: 160, qrs: 90, qt: 390, anomalies: [], image: "vagal", description: "ECG non pertinent dans ce contexte." },
    physiopathology: {
      title: "Étranglement herniaire et ischémie intestinale",
      steps: [
        { icon: "🔗", text: "Contenu herniaire (anse grêle) passe à travers l'anneau inguinal et ne peut retourner" },
        { icon: "🔴", text: "Anneau serré → compression veineuse → congestion œdémateuse → anneau encore plus serré" },
        { icon: "🩸", text: "Compression artérielle secondaire → ischémie intestinale → nécrose (si > 6h sans traitement)" },
        { icon: "🦠", text: "Translocation bactérienne depuis anse ischémique → péritonite → sepsis" },
        { icon: "⏱️", text: "Risque de nécrose intestinale majeur après 6h d'étranglement — urgence opératoire absolue" }
      ],
      source: "HerniaSurge Group. International guidelines inguinal hernia 2018. Hernia. DOI: 10.1007/s10029-017-1668-x"
    },
    dd: [
      { diagnosis: "Hernie inguinale étranglée", correct: true, explanation: "Hernie connue + tuméfaction inguinale irréductible + douleur + occlusion = étranglement herniaire" },
      { diagnosis: "Lymphadénopathie inguinale", correct: false, explanation: "Adénopathie : pas de trajet hernial, pas de péristaltisme audible, contexte infectieux ou néoplasique" },
      { diagnosis: "Torsion testiculaire", correct: false, explanation: "Torsion testiculaire : douleur scrotale, testicule remonté et horizontal, pas de tuméfaction inguinale" },
      { diagnosis: "Abcès inguinal", correct: false, explanation: "Abcès : fluctuance, rougeur, chaleur, fièvre > 38.5°C, pas de composante digestive" }
    ],
    gestures: [
      { id: "chir_hernie", name: "Chirurgie en urgence (< 6h)", correct: true, description: "Hernioplastie d'urgence avec évaluation de la viabilité intestinale", steps: ["Bilan pré-opératoire urgent", "Sonde nasogastrique si vomissements", "Antibiothérapie prophylactique (augmentin)", "Chirurgie : réduction manuelle sous AG puis hernioplastie", "Si anse non viable : résection + anastomose intestinale", "Drainage + antibiotiques si péritonite"] },
      { id: "taxis", name: "Taxis (réduction manuelle forcée) aux urgences", correct: false, description: "Taxis INTERDIT si : fièvre, signes d'étranglement, durée > 6h → risque réintégration anse nécrotique" },
      { id: "attente_obs", name: "Observation 24h avant décision", correct: false, description: "Dangereux : nécrose intestinale progressive, risque perforation et péritonite. Chirurgie dans les 6h." }
    ],
    keyPoints: ["Étranglement herniaire = urgence chirurgicale (< 6h pour éviter nécrose intestinale)", "Ne jamais tenter de taxis si : fièvre, durée > 6h, signes péritonéaux", "Différence hernie réductible (élective) vs irréductible (urgente) vs étranglée (vitale)", "Post-op : SNG, antibiothérapie, antalgie, kiné précoce", "Prévention : cure chirurgicale élective des hernies connues"],
    sourcesFull: ["HerniaSurge Group 2018. DOI: 10.1007/s10029-017-1668-x", "HAS. Chirurgie des hernies inguinales de l'adulte 2021."]
  },

  // ── CAS 28 ── BRÛLURE GRAVE
  {
    id: "brulure", title: "Brûlure grave étendue", subtitle: "> 20% SCB — urgence réanimatoire",
    color: "#C2410C", difficulty: 3, specialty: "Urgences-Réanimation",
    vignette: { headline: "Homme de 35 ans, brûlé dans un incendie domestique", context: "Incendie cuisine, brûlures face et torse par flamme, tentative d'extinction. Raucité de la voix.", tags: ["URGENCE VITALE", "Brûlure face + voies aériennes", "Surface > 20%"] },
    patient: { name: "Fabien C.", age: 35, sex: "M", context: "Incendie cuisine accidentel. Brûlures face, cou, torse antérieur, bras. Raucité + stridor laryngé.", arriving: "SMUR : brûlures face + torse + bras, SCB estimée 35%, stridor laryngé, voix rauque, SpO2 91%" },
    vitals: { pa: "110/70", fc: 120, spo2: 91, temp: 36.5, fr: 22, glasgow: 14 },
    symptoms: ["Brûlures face, cou, torse antérieur, bras (35% SCB)", "Voix rauque, stridor laryngé (brûlure des voies aériennes supérieures)", "Sourcils et poils des narines brûlés", "Douleur modérée sur zones profondes (paradoxe = fibres détruites)", "SpO2 91% sous air"],
    ecg: { rythme: "Sinusal tachycarde", fc: 120, pr: 150, qrs: 80, qt: 370, anomalies: [], image: "vagal", description: "Tachycardie sinusale de stress. ECG bilan systématique (CO possible)." },
    physiopathology: {
      title: "Destruction cutanée et syndrome de fuite capillaire",
      steps: [
        { icon: "🔥", text: "Chaleur excessive → coagulation protéines cutanées selon profondeur (1°, 2°, 3°)" },
        { icon: "💧", text: "Inflammation massive locale + systémique → augmentation perméabilité vasculaire (J0-J48)" },
        { icon: "🩸", text: "Fuite capillaire → hypovolémie → choc si pas de remplissage adéquat (formule de Parkland)" },
        { icon: "🫁", text: "Brûlure inhalation : œdème sous-glottique progressif → obstruction VA dans les 24h" },
        { icon: "🦠", text: "Peau = barrière : immunodépression + infection par Pseudomonas/Staphylocoque — cause de décès J7-J21" }
      ],
      source: "Rousseau AF et al. ESPEN guidelines burns. Clin Nutr 2013. DOI: 10.1016/j.clnu.2013.02.012"
    },
    dd: [
      { diagnosis: "Brûlure grave avec atteinte des voies aériennes", correct: true, explanation: "SCB > 20% + stridor + brûlures face/cou = intubation prophylactique avant œdème complet des VA" },
      { diagnosis: "Brûlure superficielle simple", correct: false, explanation: "Brûlure superficielle : < 10% SCB, 1er-2e degré superficiel, pas de compromis respi, traitement ambulatoire" },
      { diagnosis: "Intoxication CO associée", correct: false, explanation: "Toujours rechercher le CO : dosage COHb, SpO2 pulsée fausse, traitement O2 haut débit (ou OHB)" },
      { diagnosis: "Électrisation", correct: false, explanation: "Électrisation : lésions en regard des points d'entrée et sortie, troubles du rythme, myoglobinurie" }
    ],
    gestures: [
      { id: "intubation_brulure", name: "Intubation oro-trachéale prophylactique + Parkland", correct: true, description: "Intubation AVANT œdème complet des VA. Remplissage selon formule de Parkland.", steps: ["Intubation orotrachéale si stridor, voix rauque, brûlures face/cou (ne pas attendre l'obstruction)", "O2 haut débit 15L/min (COHb possible)", "2 VVP gros calibre — formule de Parkland : 4mL/kg/% SCB de Ringer lactate en 24h (moitié en 8h)", "Morphine IV IVSE pour antalgie", "Pansements gras (tulle gras) provisoires + couverture de survie", "Transfert centre de brûlés (SCB > 20% ou brûlures face/mains/périnée)"] },
      { id: "attendre_oap", name: "Surveiller et intubation uniquement si détresse", correct: false, description: "TROP TARD : l'œdème laryngé se développe en 2-6h → intubation difficile voire impossible. Intubation PROPHYLACTIQUE si signes de brûlure inhalation." },
      { id: "eau_brulure", name: "Refroidir à l'eau froide longuement", correct: false, description: "Eau froide 15°C : 15-20 minutes uniquement en phase pré-hospitalière et si brûlure récente. Au-delà : risque d'hypothermie sévère." }
    ],
    keyPoints: ["Intubation prophylactique si : stridor, brûlures face/cou, voix rauque — ne pas attendre l'obstruction", "Formule de Parkland : 4mL/kg/% SCB de Ringer lactate en 24h (moitié dans les 8 premières heures)", "Transfert centre brûlés : SCB > 20%, brûlures profondes face/mains/périnée/circulaires", "CO : toujours doser COHb en milieu fermé (gazométrie, pas SpO2 pulsée)", "Escarrotomie : si brûlures circulaires comprimant membres ou thorax"],
    sourcesFull: ["Rousseau AF et al. ESPEN burns guidelines 2013. DOI: 10.1016/j.clnu.2013.02.012", "HAS. Prise en charge des brûlures graves 2020.", "Baxter CR. Parkland formula. Surg Clin North Am 1978."]
  },

  // ── CAS 29 ── CRISE HYPERTENSIVE
  {
    id: "hta_urgence", title: "Urgence hypertensive", subtitle: "HTA maligne avec atteinte organe cible",
    color: "#7E22CE", difficulty: 2, specialty: "Cardio-Urgences",
    vignette: { headline: "Femme de 52 ans, céphalées intenses et vision trouble", context: "HTA connue, mauvaise observance. PA 220/130 mmHg. Épistaxis, vue brouillée, acouphènes.", tags: ["Urgence < 1h", "PA ≥ 220/130", "Signes neuro"] },
    patient: { name: "Dominique L.", age: 52, sex: "F", context: "HTA depuis 10 ans, souvent non traitée. Pas pris traitement depuis 3 semaines.", arriving: "Urgences : PA 225/135, céphalées explosives, phosphènes, épistaxis, pas de déficit focal" },
    vitals: { pa: "225/135", fc: 95, spo2: 97, temp: 37.0, fr: 16, glasgow: 15 },
    symptoms: ["PA 225/135 mmHg", "Céphalées pulsatiles sévères (8/10)", "Phosphènes, flou visuel (atteinte rétinienne)", "Épistaxis", "Acouphènes", "Pas de déficit neurologique focal"],
    ecg: { rythme: "Sinusal", fc: 95, pr: 175, qrs: 100, qt: 410, anomalies: ["Hypertrophie VG (Sokolow)", "Troubles repolarisation (surcharge VG)"], image: "stemi", description: "HVG critères Sokolow. Troubles repolarisation. Pas d'ischémie aiguë." },
    physiopathology: {
      title: "Dysrégulation vasculaire et atteinte des organes cibles",
      steps: [
        { icon: "💪", text: "HTA chronique mal contrôlée → remodelage vasculaire (hypertrophie, rigidité artérielle)" },
        { icon: "⚡", text: "Poussée hypertensive aiguë → dépassement des mécanismes d'autorégulation" },
        { icon: "🧠", text: "Cerveau : perte autorégulation → œdème vasogénique → encéphalopathie (rare mais grave)" },
        { icon: "👁️", text: "Rétine : artériolosclérose + papillœdème, exsudats = rétinopathie hypertensive" },
        { icon: "🫀", text: "Cœur : post-charge excessive → insuffisance VG (OAP), risque dissection aortique" }
      ],
      source: "ESC/ESH 2018 Arterial Hypertension Guidelines. Eur Heart J. 2018;39:3021-104. DOI: 10.1093/eurheartj/ehy339"
    },
    dd: [
      { diagnosis: "Urgence hypertensive avec atteinte organe cible (rétine)", correct: true, explanation: "PA > 220/130 + céphalées + signes oculaires + épistaxis = urgence hypertensive (organe cible = rétine)" },
      { diagnosis: "Hémorragie sous-arachnoïdienne", correct: false, explanation: "HSA : céphalée 'en coup de tonnerre', maximale d'emblée, méningisme — TDM + PL si suspicion" },
      { diagnosis: "Dissection aortique", correct: false, explanation: "Dissection : douleur déchirante migratrice, asymétrie TA — toujours éliminer si HTA sévère" },
      { diagnosis: "Encéphalopathie hypertensive", correct: false, explanation: "Encéphalopathie HTA : confusion, convulsions, cécité corticale — stade plus grave, PRES sur IRM" }
    ],
    gestures: [
      { id: "nicardipine", name: "Nicardipine IVSE + bilan urgence organe cible", correct: true, description: "Réduction progressive PA (20-25% en 1-2h) — jamais trop rapide (ischémie cérébrale)", steps: ["Nicardipine 5mg/h IVSE, titration par paliers 2.5mg toutes 15 min (cible -20-25% PA)", "Ou labétalol 20mg IV bolus si CI ICa", "Bilan organe cible : ECG, troponine, créatinine, BU, fond d'œil, scanner cérébral si neuro", "Pas de baisse trop rapide : hypoperfusion cérébrale si TA baisse > 25% en < 1h", "Relais antihypertenseur oral dès stabilisation", "Éducation : adhérence traitement++"] },
      { id: "nifedipine_sl", name: "Nifédipine sublinguale", correct: false, description: "CONTRE-INDIQUÉE : baisse trop rapide et imprévisible → hypotension et AVC ischémique. Retirée du marché pour cet usage." },
      { id: "pas_traitement", name: "Traitement oral simple et sortie", correct: false, description: "Insuffisant : atteinte organe cible documentée = hospitalisation et traitement IV requis" }
    ],
    keyPoints: ["Urgence HTA = HTA sévère + atteinte organe cible (cerveau, rétine, cœur, rein, aorte)", "Réduction PA progressive : -20-25% en 1-2h (jamais brusque → ischémie)", "Nifédipine sublinguale : CONTRE-INDIQUÉE (baisse imprévisible)", "Fond d'œil : examen clé pour stader la rétinopathie (Keith-Wagener)", "Après stabilisation : bilan exhaustif HTA secondaire (aldostéronisme, phéochromocytome)"],
    sourcesFull: ["ESC/ESH 2018 HTA Guidelines. DOI: 10.1093/eurheartj/ehy339", "Peacock WF et al. Management of Hypertensive Urgencies and Emergencies. Prog Cardiovasc Dis 2017."]
  },

  // ── CAS 30 ── TORSION TESTICULAIRE
  {
    id: "torsion_test", title: "Torsion testiculaire", subtitle: "Urgence urologique — viabilité 6 heures",
    color: "#0F766E", difficulty: 2, specialty: "Urologie",
    vignette: { headline: "Adolescent de 15 ans, douleur testiculaire gauche brutale", context: "Douleur brutale en pleine nuit, réveil de son sommeil. Testicule gauche remonté et horizontal. Nausées.", tags: ["URGENCE VITALE", "Douleur brutale", "< 6h pour viabilité"] },
    patient: { name: "Nathan B.", age: 15, sex: "M", context: "Aucun ATCD. Réveillé en pleine nuit par douleur testiculaire gauche brutale.", arriving: "Urgences avec sa mère : douleur testiculaire 10/10, nausées, testicule gauche remonté et horizontal" },
    vitals: { pa: "125/75", fc: 102, spo2: 99, temp: 37.2, fr: 18, glasgow: 15 },
    symptoms: ["Douleur testiculaire gauche brutale et intense (10/10)", "Début nocturne brutal (réveil du sommeil)", "Nausées, vomissements réflexes", "Testicule gauche remonté, en position horizontale (signe de Gouverneur)", "Pas de fièvre, pas de signes urinaires"],
    ecg: { rythme: "Sinusal", fc: 102, pr: 150, qrs: 80, qt: 380, anomalies: [], image: "vagal", description: "ECG non pertinent dans ce contexte." },
    physiopathology: {
      title: "Torsion du cordon spermatique et ischémie testiculaire",
      steps: [
        { icon: "🔄", text: "Anomalie congénitale : 'clapper bell deformity' → mobilité excessive du testicule" },
        { icon: "🌀", text: "Rotation spontanée du cordon spermatique → obstruction veineuse puis artérielle" },
        { icon: "🩸", text: "Ischémie testiculaire progressive : nécrose irréversible dès 4-6h" },
        { icon: "😖", text: "Douleur intense + nausées réflexes + testicule remonté et horizontalisé (signe de Gouverneur)" },
        { icon: "⏱️", text: "Viabilité : 100% si < 6h, 50% à 12h, < 10% à 24h — chaque minute compte" }
      ],
      source: "Sharp VJ et al. Testicular torsion: diagnosis, evaluation, and management. Am Fam Physician 2013."
    },
    dd: [
      { diagnosis: "Torsion testiculaire", correct: true, explanation: "Adolescent + douleur brutale nocturne + testicule horizontal + nausées + pas de fièvre = torsion jusqu'à preuve du contraire" },
      { diagnosis: "Epididymite aiguë", correct: false, explanation: "Épididymite : douleur progressive, fièvre, brûlures mictionnelles, soulagement à l'élévation du testicule (signe de Prehn + ), examen ECBU" },
      { diagnosis: "Hernie inguinale étranglée", correct: false, explanation: "Hernie : tuméfaction inguinale, antécédent de hernie, pas de testicule remonté" },
      { diagnosis: "Orchite ourlienne", correct: false, explanation: "Orchite ourlienne : adulte non vacciné, ATCD parotidite, bilatérale possible, pas de début aussi brutal" }
    ],
    gestures: [
      { id: "chirurgie_torsion", name: "Chirurgie d'urgence immédiate (sans écho si > 6h)", correct: true, description: "Ne JAMAIS attendre une échographie si tableau clinique typique. Exploration chirurgicale < 6h.", steps: ["Chirurgie immédiate sans délai si tableau clinique typique", "Écho-Doppler testiculaire uniquement si doute ET délai < 2h", "Détorsion manuelle tentée en attendant le bloc (parfois impossible)", "Au bloc : détorsion + évaluation viabilité + orchidopexie bilatérale", "Si nécrose : orchidectomie + orchidopexie controlatérale"] },
      { id: "echo_attente", name: "Écho-Doppler testiculaire avant toute décision", correct: false, description: "L'écho peut être normale même en cas de torsion intermittente. Et chaque minute perdue = nécrose. Ne jamais retarder la chirurgie pour l'écho si tableau typique." },
      { id: "antibiotiques", name: "Antibiotiques pour épididymite et surveillance", correct: false, description: "ERREUR MORTELLE pour le testicule : traiter une torsion comme une épididymite = nécrose certaine. Exploration chirurgicale TOUJOURS si doute." }
    ],
    keyPoints: ["Règle d'or : douleur testiculaire brutale = torsion jusqu'à preuve contraire", "Viabilité : 100% si < 6h, 50% à 12h, < 10% à 24h", "Ne PAS attendre l'écho si tableau clinique typique et > 6h", "Orchidopexie BILATÉRALE : anomalie de fixation souvent controlatérale (25-40%)", "Signe de Prehn négatif (élévation n'améliore pas) = orienteur torsion (vs épididymite)"],
    sourcesFull: ["Sharp VJ et al. Testicular torsion. Am Fam Physician 2013.", "HAS. Torsion du testicule 2019.", "Mellick LB et al. Torsion of the testicle. Pediatr Emerg Care 2012."]
  },

  // ── BATCH 2 : 20 nouveaux cas ──────────────────────────────────────────────

  {
    id: "geu", title: "Grossesse extra-utérine rompue", subtitle: "Abdomen chirurgical gynécologique — choc hémorragique",
    specialty: "Gynéco-Urgences", difficulty: 3, color: "#ec4899",
    vignette: { headline: "Femme de 28 ans, douleur pelvienne brutale", context: "Patiente amenée par le SAMU depuis son domicile. Malaise avec perte de connaissance brève.", tags: ["Douleur pelvienne", "Choc", "DDR inconnue"] },
    patient: { name: "Sarah M., 28 ans", age: 28, sex: "F", context: "Pas d'ATCD notable. Pas de contraception. Cycles irréguliers. DDR il y a ~7 semaines.", arriving: "Amenée par SAMU : douleur pelvienne droite brutale il y a 1h, malaise, perte de connaissance brève. Pâle, agitée, PAS 70/40." },
    vitals: { pa: "70/40", fc: 128, spo2: 98, fr: 24, temp: 36.8, glasgow: 14 },
    symptoms: ["Douleur pelvienne droite irradiant à l'épaule (signe du Douglas)", "Métrorragies minimes", "Malaise avec PC brève", "Ventre de bois à la palpation", "Défense abdominale diffuse"],
    ecg: { rythme: "Sinusal rapide", fc: 128, pr: 140, qrs: 80, qt: 360, description: "Tachycardie sinusale réactionnelle. Pas d'anomalie ST.", anomalies: [] },
    physiopathology: { mechanism: "Nidation ectopique dans la trompe droite → distension → rupture tubaire → hémopéritoine massif", cascade: ["Œuf fécondé implanté dans la trompe (souvent ampoullaire)", "Trophoblaste envahit la paroi tubaire → érosion vasculaire", "Rupture tubaire → hémopéritoine aigu (500-2000 mL)", "Choc hémorragique : hypotension + tachycardie + vasoconstriction", "Irritation du diaphragme → douleur référée à l'épaule (sang sous-phrénique)"], consequence: "Urgence chirurgicale absolue — décès par choc hémorragique en l'absence de traitement dans l'heure" },
    dd: [
      { id: "geu_dd", label: "GEU rompue avec choc hémorragique", correct: true, explanation: "Tableau classique : femme en âge de procréer + douleur pelvienne + choc + hémopéritoine. β-hCG + écho confirment." },
      { id: "kyste_rompu", label: "Kyste ovarien rompu hémorragique", correct: false, explanation: "Possible mais β-hCG négatif et moins de choc habituellement. À éliminer après GEU." },
      { id: "appendicite_perf", label: "Appendicite perforée", correct: false, explanation: "Douleur droite possible mais pas de choc hémorragique aussi brutal. Pas de métrorragies. β-hCG négatif." },
      { id: "torsion_ovaire", label: "Torsion d'annexe", correct: false, explanation: "Douleur pelvienne possible, mais pas de choc hémorragique. Pas de β-hCG positif." }
    ],
    gestures: [
      { id: "choc_geu", name: "Remplissage + β-hCG + écho pelvienne + appel chirurgien IMMÉDIAT", correct: true, description: "Stabilisation hémodynamique ET confirmation diagnostique en parallèle — puis bloc opératoire sans délai", steps: ["2 VVP larges (G16) + prélèvements : NFS, groupe Rh RAI, β-hCG, bilan hémo", "Remplissage SSI 500mL rapide (objectif PAS > 90 mmHg)", "β-hCG qualitatif en urgence (positif en 2 min)", "Écho pelvienne au lit si disponible : épanchement intrapéritonéal", "Appel immédiat chirurgien gynécologue + anesthésiste", "Transfusion O- si choc profond avant bilan RAI", "Bloc opératoire URGENT : salpingectomie ou salpingotomie"] },
      { id: "attendre_imagerie", name: "TDM abdominal avant décision chirurgicale", correct: false, description: "ERREUR : patient en choc hémorragique = bloc opératoire direct. Le TDM est contre-indiqué dans ce contexte." }
    ],
    keyPoints: ["GEU : 1ère cause de mortalité maternelle au 1er trimestre", "Toute femme en âge de procréer + douleur abdominale + choc = GEU jusqu'à preuve contraire", "β-hCG positif + épanchement péri-utérin = GEU rompue → bloc sans délai", "Douleur épaule = signe du sang sous-phrénique (pathognomonique d'hémopéritoine)", "Choc + GEU = transfusion O- AVANT les résultats RAI si nécessaire"],
    sourcesFull: ["CNGOF. Prise en charge de la GEU. RPC 2018.", "Mol F et al. Salpingotomy versus salpingectomy in tubal ectopic pregnancy. Lancet 2014.", "HAS. GEU — recommandations 2021."]
  },

  {
    id: "tamponnade", title: "Tamponnade cardiaque", subtitle: "Épanchement péricardique compressif — urgence hémodynamique",
    specialty: "Cardio-Réanimation", difficulty: 3, color: "#1D4ED8",
    vignette: { headline: "Homme de 55 ans, dyspnée et hypotension progressive", context: "Patient hospitalisé en oncologie pour cancer du poumon. Appel de l'équipe pour détérioration hémodynamique.", tags: ["Dyspnée", "Hypotension", "Néoplasie"] },
    patient: { name: "Michel B., 55 ans", age: 55, sex: "M", context: "Cancer bronchique non à petites cellules stade IV, sous chimiothérapie. ATCD : HTA, tabagisme 30 PA.", arriving: "Appel de l'oncologue : patient dyspnéique, hypotension depuis 2h, veines jugulaires turgescentes. Transfert aux urgences." },
    vitals: { pa: "80/60", fc: 118, spo2: 92, fr: 28, temp: 37.2, glasgow: 14 },
    symptoms: ["Dyspnée orthopnée d'aggravation progressive", "Turgescence jugulaire bilatérale", "Pouls paradoxal (chute PAS > 10 mmHg en inspiration)", "Bruits cardiaques assourdis", "Hépatomégalie douloureuse"],
    ecg: { rythme: "Sinusal", fc: 118, pr: 160, qrs: 90, qt: 380, description: "Microvoltage diffus. Alternance électrique (variation amplitude QRS). Tachycardie sinusale.", anomalies: ["Microvoltage (< 5mm en dérivations périphériques)", "Alternance électrique — signe quasi-pathognomonique de tamponnade"] },
    physiopathology: { mechanism: "Épanchement péricardique → compression des cavités droites → équilibre des pressions → effondrement du débit cardiaque", cascade: ["Accumulation liquidienne dans le péricarde (néoplasie, infection, post-radique)", "Pression intrapéricardique > pression remplissage OD → collapsus OD/VD", "Equalisation des pressions diastoliques des 4 cavités", "Débit cardiaque effondré → tachycardie compensatrice puis choc", "Pouls paradoxal : en inspiration, retour veineux ↑ → septum empièle sur VG déjà comprimé"], consequence: "Arrêt cardiaque par dissociation électromécanique si non traité dans les minutes" },
    dd: [
      { id: "tamponnade_dd", label: "Tamponnade cardiaque sur épanchement néoplasique", correct: true, explanation: "Triade de Beck : hypotension + turgescence jugulaire + bruits assourdis. Alternance électrique pathognomonique. Contexte néoplasique." },
      { id: "ic_droite", label: "Insuffisance cardiaque droite aiguë", correct: false, explanation: "Turgescence jugulaire et hépatomégalie communes, mais pas d'alternance électrique ni de pouls paradoxal. Pas de dyspnée aussi brutale." },
      { id: "ep_massive", label: "Embolie pulmonaire massive", correct: false, explanation: "EP peut donner choc et tachycardie, mais pas de microvoltage ni d'alternance électrique. Écho fait le diagnostic différentiel." },
      { id: "oap", label: "OAP cardiogénique", correct: false, explanation: "OAP : crépitants bilatéraux, pression de remplissage élevée. Pas de microvoltage. Bruits cardiaques normaux ou soufflants." }
    ],
    gestures: [
      { id: "pericardiocent", name: "Péricardiocentèse en urgence (guidée par écho)", correct: true, description: "Geste salvateur immédiat. 50mL évacués suffisent à lever la tamponnade.", steps: ["Écho cardiaque au lit IMMÉDIAT : confirme épanchement + collapsus OD", "Oxygène haut débit + VVP + monitoring continu", "Appel cardiologue interventionnel / réanimateur", "Péricardiocentèse sous guidage écho : voie sous-xiphoïdienne", "Aiguille 18G + seringue 50mL : retirer 50-100mL en premier", "Laisser drain de Pigtail pour drainage continu", "Analyse du liquide : cytologie (cellules néoplasiques ?)"] },
      { id: "furosemide_tampo", name: "Furosémide IV pour réduire la congestion", correct: false, description: "ERREUR : le diurétique diminue la précharge → aggrave le remplissage des cavités déjà comprimées → arrêt cardiaque." }
    ],
    keyPoints: ["Triade de Beck : hypotension + TJ + bruits assourdis (présente dans 30% seulement)", "Alternance électrique = signe ECG quasi-pathognomonique de tamponnade", "Pouls paradoxal > 10 mmHg = signe clé à rechercher", "Contextes : néoplasie, péricardite, post-chirurgie cardiaque, dissection type A, IRC", "50 mL évacués suffisent souvent à lever la tamponnade et stabiliser le patient"],
    sourcesFull: ["Adler Y et al. ESC Guidelines Pericardial Diseases. Eur Heart J 2015.", "Spodick DH. Acute cardiac tamponade. NEJM 2003.", "HAS. Péricardite et épanchement péricardique. 2020."]
  },

  {
    id: "hsa", title: "Hémorragie sous-arachnoïdienne", subtitle: "Céphalée en coup de tonnerre — rupture d'anévrisme",
    specialty: "Neuro-Urgences", difficulty: 3, color: "#7C3AED",
    vignette: { headline: "Femme de 48 ans, céphalée brutale 'jamais connue'", context: "Patiente amenée par son mari depuis le restaurant. Céphalée d'intensité maximale d'emblée il y a 45 min.", tags: ["Céphalée brutale", "Vomissements", "Raideur nuque"] },
    patient: { name: "Isabelle R., 48 ans", age: 48, sex: "F", context: "ATCD : migraine connue, HTA traitée par amlodipine. Tabagisme 15 PA. Pas de prise d'anticoagulants.", arriving: "Céphalée décrite comme 'la pire de ma vie', d'installation en 1-2 secondes pendant le repas. Vomissements en jet. Raideur de nuque." },
    vitals: { pa: "195/110", fc: 58, spo2: 97, fr: 16, temp: 37.5, glasgow: 13 },
    symptoms: ["Céphalée brutale d'intensité maximale d'emblée ('coup de tonnerre')", "Vomissements en jet", "Raideur de nuque (méningisme)", "Photophobie et phonophobie", "Légère confusion (GCS 13)"],
    ecg: { rythme: "Sinusal bradycarde", fc: 58, pr: 180, qrs: 90, qt: 480, description: "Bradycardie sinusale réflexe. Ondes T amples et larges (onde T 'cérébrale'). QT allongé.", anomalies: ["Ondes T larges et symétriques (effet catécholamines)", "QT allongé — risque arythmie", "Sous-décalage ST diffus possible (atteinte neurocardiogénique)"] },
    physiopathology: { mechanism: "Rupture d'un anévrisme artériel cérébral → saignement sous-arachnoïdien → HTIC aiguë + vasospasme", cascade: ["Anévrisme artériel (sacciforme le plus souvent) → rupture spontanée", "Sang dans l'espace sous-arachnoïdien → HTIC brutale", "Céphalée instantanée par distension méningée et HTIC", "Vasospasme cérébral secondaire (J4-J14) → ischémie cérébrale différée", "Décharge catécholaminergique → modifications ECG + cardiotoxicité (Tako-Tsubo)"], consequence: "30% de décès à J30 — 15% décèdent avant l'hôpital. Resaignement dans les 24h : 15-20%." },
    dd: [
      { id: "hsa_dd", label: "Hémorragie sous-arachnoïdienne par rupture d'anévrisme", correct: true, explanation: "Céphalée en coup de tonnerre + méningisme + HTA réactionnelle. TDM cérébral sans injection en urgence." },
      { id: "migraine_sev", label: "Migraine sévère", correct: false, explanation: "La migraine ne débute jamais en 1-2 secondes. Pas de méningisme. Mais une migraine 'différente de l'habituelle' doit faire évoquer HSA." },
      { id: "meningite_hsa", label: "Méningite bactérienne", correct: false, explanation: "Méningisme commun mais céphalée progressive + fièvre + purpura. Pas d'installation en coup de tonnerre. TDM avant PL." },
      { id: "hematome_hsa", label: "Hématome intraparenchymateux", correct: false, explanation: "Peut donner céphalée + déficit neurologique focal + HTA. TDM fait le diagnostic différentiel." }
    ],
    gestures: [
      { id: "tdm_hsa", name: "TDM cérébral sans injection IMMÉDIAT + artériographie", correct: true, description: "TDM : hyperdensité citernes périmésencéphaliques. Si TDM normal < 6h : PL. Artério-TDM pour localiser l'anévrisme.", steps: ["TDM cérébral sans injection en urgence (sensibilité 98% si < 6h)", "Si TDM normal et < 6h : PL (xanthochromie + GR > 100 000/mm³)", "Artério-TDM 4 vaisseaux pour cartographie anévrismale", "Appel neurochirurgien / neuroradiologue interventionnel", "Nimodipine 60mg/4h PO dès HSA confirmée (prévention vasospasme)", "Contrôle tensionnel : PAS < 160 mmHg (nicardipine IVSE)", "Repos strict, chambre noire, antalgiques IV, antiémétiques"] },
      { id: "ponction_lombaire_direct", name: "Ponction lombaire en urgence sans TDM", correct: false, description: "DANGER : engagement cérébral possible si HTIC non éliminée. TDM AVANT toute PL systématiquement." }
    ],
    keyPoints: ["Céphalée en coup de tonnerre = HSA jusqu'à preuve contraire (même si TDM normal)", "TDM cérébral sans injection : 1er examen — sensibilité 98% dans les 6h", "PL si TDM normal : xanthochromie + GR non dégradants confirment l'HSA", "Nimodipine PO : réduit le vasospasme et améliore le pronostic neurologique", "Resaignement : 15-20% dans les 24h — clippage/coiling en urgence"],
    sourcesFull: ["Connolly ES et al. Guidelines for Aneurysmal SAH. Stroke 2012.", "van Gijn J, Kerr RS. Subarachnoid haemorrhage. Lancet 2007.", "SFNR/SFMU. Recommandations HSA 2020."]
  },

  {
    id: "rhabdomyolyse", title: "Rhabdomyolyse sévère", subtitle: "Destruction musculaire massive — IRA myoglobinurique",
    specialty: "Réanimation", difficulty: 2, color: "#92400E",
    vignette: { headline: "Homme de 35 ans, retrouvé au sol depuis plusieurs heures", context: "Patient retrouvé par sa sœur à son domicile, allongé sur le sol, impossibilité de se lever. Urine rouge-brun.", tags: ["Immobilisation prolongée", "Urines foncées", "Douleurs musculaires"] },
    patient: { name: "Kevin L., 35 ans", age: 35, sex: "M", context: "Consommation d'alcool et de cocaïne lors d'une fête 2 jours avant. Retrouvé au sol après 12-18h d'immobilisation.", arriving: "Douleurs musculaires diffuses, myalgies intenses, urines rouge-brun. Confusion modérée. Oligo-anurie depuis plusieurs heures." },
    vitals: { pa: "105/70", fc: 108, spo2: 96, fr: 20, temp: 38.2, glasgow: 13 },
    symptoms: ["Myalgies intenses diffuses (quadriceps, fessiers, dorsaux)", "Urines rouge-brun (myoglobinurie)", "Oligo-anurie (< 400mL/24h)", "Œdème des membres inférieurs (loge musculaire)", "Confusion et agitation"],
    ecg: { rythme: "Sinusal", fc: 108, pr: 160, qrs: 100, qt: 420, description: "Tachycardie sinusale. Ondes T pointues et symétriques (hyperkaliémie). QRS légèrement élargi.", anomalies: ["Ondes T amples et pointues (hyperkaliémie)", "QRS s'élargissant — surveillance rapprochée", "Risque arythmie ventriculaire sur hyperkaliémie"] },
    physiopathology: { mechanism: "Lyse des fibres musculaires → libération de myoglobine → toxicité rénale tubulaire directe + obstruction", cascade: ["Immobilisation prolongée + compression musculaire → nécrose ischémique des fibres", "Libération massive : myoglobine, CK, K+, phosphore, acide urique, lactate", "Myoglobine filtrée par le glomérule → précipite dans les tubules acides → obstruction", "Toxicité directe tubulaire (radicaux libres) → IRA oligo-anurique", "Hyperkaliémie + hypocalcémie + acidose métabolique → risque arythmie fatale"], consequence: "IRA dans 15-50% des rhabdomyolyses sévères — décès par hyperkaliémie ou arythmie si non traité" },
    dd: [
      { id: "rhabdo_dd", label: "Rhabdomyolyse sévère avec IRA myoglobinurique", correct: true, explanation: "CK > 10 000 UI/L + myoglobinurie + IRA + contexte (immobilisation, toxiques). Triade classique." },
      { id: "glomerulonephrite", label: "Glomérulonéphrite aiguë", correct: false, explanation: "Hématurie possible mais CK normale. Pas de contexte traumatique ou toxique. Protéinurie franche." },
      { id: "hemoglobinurie", label: "Hémolyse intravasculaire", correct: false, explanation: "Urines rouges mais bandelette : hémoglobine vs myoglobine. CK effondrée. Bilan hémolyse (LDH, bilirubine, haptoglobine)." },
      { id: "ira_obstructive", label: "IRA obstructive", correct: false, explanation: "Anurie possible mais pas de myalgies ni de CK élevée. Écho rénale : hydronéphrose bilatérale." }
    ],
    gestures: [
      { id: "hydratation_rhabdo", name: "Hyperhydratation IV massive + alcalinisation urinaire", correct: true, description: "Objectif : diurèse > 200-300 mL/h. Alcaliniser pour éviter la précipitation de myoglobine.", steps: ["VVP + SG5% ou SSI 1-1,5L/h jusqu'à diurèse > 200 mL/h", "Bicarbonate de sodium 1,4% si pH urinaire < 6,5 (prévient précipitation myoglobine)", "Furosémide si oligoanurie persistante malgré remplissage", "Monitoring: ionogramme/6h (hyperkaliémie ++ danger)", "Si K+ > 6 mmol/L : gluconate de Ca²+, bicarbonate, kayexalate, dialyse", "CK, myoglobine, créatinine toutes les 6h", "Hémodialyse si IRA sévère, anurie, K+ réfractaire"] },
      { id: "restriction_rhabdo", name: "Restriction hydrique pour protéger les reins", correct: false, description: "ERREUR FATALE : la restriction hydrique aggrave l'IRA myoglobinurique. Il faut au contraire hyperhydrater massivement." }
    ],
    keyPoints: ["CK > 5000 UI/L = rhabdomyolyse sévère → hospitalisation systématique", "Diurèse > 200 mL/h = objectif principal pour protéger les reins", "Hyperkaliémie : complication la plus dangereuse — ECG obligatoire", "Alcalinisation urinaire (pH > 6,5) empêche la précipitation de la myoglobine", "Hémodialyse si anurie résistante ou K+ > 6,5 mmol/L réfractaire"],
    sourcesFull: ["Bosch X et al. Rhabdomyolysis and acute kidney injury. NEJM 2009.", "Torres PA et al. Rhabdomyolysis: pathogenesis, diagnosis, and treatment. Ochsner J 2015.", "SFNDT. IRA sur rhabdomyolyse — recommandations 2019."]
  },

  {
    id: "ira_anurique", title: "Insuffisance rénale aiguë anurique", subtitle: "Anurie aiguë — urgence néphro-urologique",
    specialty: "Urologie-Urgences", difficulty: 2, color: "#0F766E",
    vignette: { headline: "Homme de 72 ans, n'a pas uriné depuis 24h", context: "Patient adressé par son médecin traitant pour anurie. Antécédent de cancer prostatique.", tags: ["Anurie", "Globe vésical", "Cancer prostatique"] },
    patient: { name: "Jean-Pierre D., 72 ans", age: 72, sex: "M", context: "Cancer prostatique diagnostiqué il y a 3 ans, sous hormonothérapie. ATCD : HTA, insuffisance rénale chronique stade 3 (DFG 40).", arriving: "N'a pas uriné depuis 24h. Douleurs lombaires bilatérales. Globe vésical palpable. Prise d'AINS depuis 5 jours pour lombalgie." },
    vitals: { pa: "165/95", fc: 88, spo2: 96, fr: 18, temp: 37.0, glasgow: 15 },
    symptoms: ["Anurie totale depuis 24h", "Globe vésical (percussion hyposonore sus-pubienne)", "Douleurs lombaires bilatérales", "Nausées et vomissements", "Légère confusion (urémie)"],
    ecg: { rythme: "Sinusal", fc: 88, pr: 170, qrs: 110, qt: 440, description: "Ondes T pointues et symétriques dans les dérivations précordiales. QRS légèrement élargi. Hyperkaliémie probable.", anomalies: ["Ondes T pointues symétriques (hyperkaliémie)", "QRS s'élargissant progressivement", "Risque asystolie ou FV si K+ non traité"] },
    physiopathology: { mechanism: "Double obstruction urinaire (prostatique + AINS) sur IRC préexistante → anurie par obstruction + néphrotoxicité", cascade: ["Cancer prostatique → compression urétrale chronique (obstruction infravésicale)", "AINS → vasoconstriction afférente rénale + rétention sodée → IRA fonctionnelle surajoutée", "Globe vésical → rétention complète d'urine → distension vésicale → reflux urétéral", "IRA obstructive + pré-rénale sur IRC chronique → anurie rapide", "Accumulation urée + créatinine + K+ + acide urique → syndrome urémique"], consequence: "Hyperkaliémie menaçante + acidose + péricardite urémique si non traité. Dialyse urgente possible." },
    dd: [
      { id: "obstruction_dd", label: "IRA obstructive sur cancer prostatique + AINS", correct: true, explanation: "Anurie + globe vésical + cancer prostatique + AINS récents. Double mécanisme : obstruction infravésicale + néphrotoxicité." },
      { id: "ira_fonctionnelle", label: "IRA fonctionnelle pure sur déshydratation", correct: false, explanation: "IRA fonctionnelle : diurèse conservée (oligoanurie), pas de globe vésical, contexte de pertes. Répond au remplissage." },
      { id: "glomerulo_aigue", label: "Glomérulonéphrite rapidement progressive", correct: false, explanation: "Hématurie + protéinurie massive + syndrome néphritique. Pas de globe vésical. Biopsie rénale nécessaire." },
      { id: "necrose_tubulaire", label: "Nécrose tubulaire aiguë", correct: false, explanation: "NTA sur AINS possible mais pas de globe vésical. Écho rénale : reins augmentés de taille, pas de dilatation cavités." }
    ],
    gestures: [
      { id: "sondage_ira", name: "Sondage vésical + écho rénale + bilan électrolytes urgent", correct: true, description: "Lever l'obstruction est le geste salvateur. Écho confirme les lésions en amont.", steps: ["Sondage uréthral immédiat (ou KT sus-pubien si sténose) : confirme le globe", "Écho rénale-vésicale : dilatation pyélocalicielle ? hydronéphrose bilatérale ?", "Ionogramme, urée, créatinine, gazométrie en URGENCE", "ECG pour évaluer retentissement K+", "Si K+ > 6 mmol/L : Ca gluconate + bicarbonate + kayexalate", "Arrêt AINS + néphrotoxiques IMMÉDIAT", "Si hydronéphrose bilatérale : néphrostomie percutanée en urgence", "Avis urologue + néphrologue"] },
      { id: "remplissage_ira", name: "Remplissage massif au SSI sans sondage", correct: false, description: "Le remplissage sans lever l'obstruction aggrave le globe vésical. Le sondage vésical est prioritaire." }
    ],
    keyPoints: ["Globe vésical = sondage vésical immédiat (geste diagnostique ET thérapeutique)", "AINS : contre-indication formelle en IRC — vasoconstriction de l'artère afférente", "Après levée d'obstruction : surveillance diurèse ++ (syndrome de levée d'obstacle : polyurie massive)", "Hyperkaliémie > 6,5 mmol/L = urgence vitale — traitement immédiat avant dialyse", "Toujours écho rénale : lésions unilatérales ou bilatérales ? rein unique fonctionnel ?"],
    sourcesFull: ["Waikar SS, Bonventre JV. Acute kidney injury. NEJM 2010.", "HAS. Insuffisance rénale aiguë — guide parcours 2022.", "EAU Guidelines. Urological Emergencies 2023."]
  },

  {
    id: "overdose_opiace", title: "Overdose aux opiacés", subtitle: "Intoxication aiguë — dépression respiratoire",
    specialty: "Toxicologie", difficulty: 1, color: "#374151",
    vignette: { headline: "Homme de 29 ans, retrouvé inconscient dans les toilettes", context: "Retrouvé par personnel du fast-food dans les toilettes. Seringue à côté. Bradypnée extrême.", tags: ["Inconscient", "Bradypnée", "Seringue"] },
    patient: { name: "Thomas K., 29 ans", age: 29, sex: "M", context: "Usager de drogues IV connu. ATCD : hépatite C, abcès cutanés. Traitement de substitution arrêté il y a 6 mois.", arriving: "Retrouvé inconscient, cyanosé, bradypnéique (3/min). Seringue sur place. Myosis punctiforme bilatéral. FR 3/min." },
    vitals: { pa: "90/55", fc: 52, spo2: 72, fr: 3, temp: 35.8, glasgow: 5 },
    symptoms: ["Coma profond (GCS 5 : E1V1M3)", "Bradypnée extrême (3 mouvements/min)", "Cyanose centrale", "Myosis punctiforme bilatéral", "Hypotonie musculaire généralisée"],
    ecg: { rythme: "Sinusal bradycarde", fc: 52, pr: 180, qrs: 90, qt: 460, description: "Bradycardie sinusale. Allongement QT lié à l'hypoxie. Pas d'arythmie ventriculaire.", anomalies: ["Bradycardie + allongement QT par hypoxie", "Risque torsade de pointes sur QT long"] },
    physiopathology: { mechanism: "Agonisme des récepteurs opioïdes μ centraux → dépression respiratoire + sédation + hypotension", cascade: ["Liaison héroïne/fentanyl aux récepteurs μ (tronc cérébral, moelle)", "Dépression des centres respiratoires bulbaires → bradypnée → apnée", "Dépression conscience → perte des réflexes de protection des VAS → inhalation", "Hypoxie → hypoxémie → cyanose → arrêt cardiaque si non traité", "Myosis par action parasympathomimétique (noyaux d'Edinger-Westphal)"], consequence: "Arrêt cardio-respiratoire par apnée dans les minutes si naloxone non administrée" },
    dd: [
      { id: "overdose_dd", label: "Surdosage en opiacés (héroïne/fentanyl/morphine)", correct: true, explanation: "Triade classique : coma + bradypnée + myosis. Contexte toxicomanie. Réponse à la naloxone diagnostique et thérapeutique." },
      { id: "intox_benzo", label: "Intoxication aux benzodiazépines", correct: false, explanation: "BZD : coma + bradypnée possible, mais myosis absent (mydriase ou intermédiaire). Pas de réponse à la naloxone." },
      { id: "avc_coma", label: "AVC du tronc cérébral", correct: false, explanation: "Myosis possible (atteinte sympathique pontique), mais contexte différent. Pas de seringue. TDM cérébral nécessaire si doute après naloxone." },
      { id: "hypogly_coma", label: "Coma hypoglycémique", correct: false, explanation: "Dextro immédiat élimine (toujours faire). Pas de myosis, pas de bradypnée aussi sévère, pas de contexte toxicomanie." }
    ],
    gestures: [
      { id: "naloxone", name: "Naloxone IV/IM/IN immédiate + ventilation au masque", correct: true, description: "Antagoniste opioïde : reversal en 2 minutes. Priorité absolue à la ventilation assistée.", steps: ["Ventilation au masque ballon (BVM) IMMÉDIATEMENT — SpO2 prioritaire", "Naloxone : 0,4mg IV lente (ou IM ou IN x2 narines) — titrer par 0,1mg", "Réveil attendu en 1-3 minutes si opiacés. Si non : évoquer autre cause.", "Attention : demi-vie naloxone (60 min) < héroïne/fentanyl → récidive possible", "Perfusion naloxone continue : 2/3 dose efficace par heure si intoxication longue durée", "Monitoring 6h minimum même si réveil rapide", "Rechercher complications : inhalation, pneumonie, abcès, embolie septique"] },
      { id: "flumazenil", name: "Flumazénil IV en premier", correct: false, description: "Flumazénil = antidote BZD. Inefficace sur opiacés. Et dangereux si polyconsommation (risque convulsions)." }
    ],
    keyPoints: ["Triade opiacés : coma + bradypnée + myosis punctiforme", "Naloxone : 0,4mg IV à titrer — attention au sevrage précipité (agitation, douleur, agressivité)", "Demi-vie naloxone courte : surveillance 6h minimum, rechute possible avec fentanyl", "Dextro TOUJOURS (hypoglycémie fréquente chez toxicomanes)", "Naloxone nasale (4mg/0,1mL) : peut être administrée par les premiers secours"],
    sourcesFull: ["Boyer EW. Management of opioid analgesic overdose. NEJM 2012.", "ANSM. Naloxone Evzio — recommandations 2019.", "SFMU/SRLF. Prise en charge des intoxications aiguës. 2020."]
  },

  {
    id: "ischémie_membre", title: "Ischémie aiguë de membre", subtitle: "Obstruction artérielle — règle des 6P",
    specialty: "Chir-Vasculaire", difficulty: 2, color: "#0369A1",
    vignette: { headline: "Femme de 67 ans, jambe froide et insensible depuis 3h", context: "Patiente en FA non anticoagulée. Douleur brutale du membre inférieur gauche, jambe froide.", tags: ["FA", "Jambe froide", "Douleur brutale"] },
    patient: { name: "Monique C., 67 ans", age: 67, sex: "F", context: "FA permanente connue, non anticoagulée (oubli depuis 3 mois). ATCD : HTA, dyslipidémie, tabagisme sevré.", arriving: "Douleur brutale du MIG depuis 3h. Jambe froide, blanche, insensible. Abolition du pouls poplité et distaux. Début de parésie." },
    vitals: { pa: "155/90", fc: 92, spo2: 97, fr: 16, temp: 36.9, glasgow: 15 },
    symptoms: ["Douleur brutale du membre inférieur gauche (Pain)", "Pâleur du membre (Pallor)", "Pouls abolis en distal (Pulselessness)", "Paresthésies puis anesthésie (Paresthesia)", "Froideur cutanée (Poikilothermia)", "Début de parésie (Paralysis)"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 92, pr: null, qrs: 90, qt: 400, description: "Fibrillation auriculaire à réponse ventriculaire modérée. Absence d'onde P. Intervalles RR irréguliers.", anomalies: ["FA permanente", "Absence d'onde P — substrat de formation de thrombus auriculaire gauche"] },
    physiopathology: { mechanism: "FA → thrombus OG → embolie artérielle périphérique → occlusion bifurcation fémorale → ischémie de membre", cascade: ["FA → stase sanguine dans l'auricule gauche → formation de thrombus", "Décrochage du thrombus → embolie artérielle → bifurcation fémorale (embolie en selle)", "Obstruction artérielle → ischémie tissulaire en aval", "Ischémie nerveuse (paresthésies puis paralysie) + musculaire (nécrose si > 6h)", "Syndrome de reperfusion post-revascularisation : hyperkaliémie, acidose, œdème"], consequence: "Amputation si revascularisation > 6-8h. Décès par reperfusion massive si ischémie prolongée." },
    dd: [
      { id: "ischémie_dd", label: "Ischémie aiguë de membre sur embolie (FA)", correct: true, explanation: "6P classiques + FA non anticoagulée + début brutal. Écho-Doppler artériel + angio-TDM confirment." },
      { id: "thrombose_arterielle", label: "Thrombose artérielle sur AOMI", correct: false, explanation: "Début plus progressif, terrain artéritique connu, pouls parfois présents. Angiographie fait le différentiel." },
      { id: "phlébite_aiguë", label: "Thrombose veineuse profonde aiguë", correct: false, explanation: "TVP : membre chaud, rouge, douloureux, pouls présents. Jamais blanc ni froid." },
      { id: "sd_loges", label: "Syndrome des loges", correct: false, explanation: "Après trauma, effort intense. Membre chaud, tendu, douloureux. Pouls parfois présents." }
    ],
    gestures: [
      { id: "anticoag_chir", name: "Anticoagulation immédiate + revascularisation chirurgicale en urgence", correct: true, description: "Héparine dès la suspicion clinique. Embolectomie à la sonde de Fogarty sous AL dans les 6h.", steps: ["HNF 5000 UI IV bolus IMMÉDIATEMENT dès ischémie suspectée", "Écho-Doppler artériel au lit : confirme l'absence de flux + niveau d'occlusion", "Angio-TDM si embolectomie envisagée (cartographie)", "Appel chirurgien vasculaire URGENT", "Embolectomie à la sonde de Fogarty sous AL : objectif < 6h", "Post-revascularisation : surveillance syndrome de reperfusion (K+, myoglobine, CK)", "Anticoagulation relais HNF/AOD à vie (FA)"] },
      { id: "thrombolyse_périph", name: "Thrombolyse intra-artérielle seule", correct: false, description: "Thrombolyse : option si ischémie < stade IIb ET chirurgien vasculaire indisponible. Pas en 1ère intention si paralysie." }
    ],
    keyPoints: ["Règle des 6P : Pain, Pallor, Pulselessness, Paresthesia, Poikilothermia, Paralysis", "Paralysie = stade IIb = urgence chirurgicale absolue < 6h (sinon amputation)", "HNF immédiate : stoppe la propagation du thrombus, améliore la microcirculation", "FA non anticoagulée = 1ère cause d'embolie artérielle périphérique", "Syndrome de reperfusion : rhabdomyolyse + hyperkaliémie + acidose lactique → potentiellement fatal"],
    sourcesFull: ["Norgren L et al. TASC II guidelines. J Vasc Surg 2007.", "ESC Guidelines. Peripheral Arterial Diseases 2017.", "HAS. Ischémie aiguë de membre 2020."]
  },

  {
    id: "intox_paracetamol", title: "Intoxication au paracétamol", subtitle: "Hépatotoxicité différée — fenêtre thérapeutique étroite",
    specialty: "Toxicologie", difficulty: 2, color: "#374151",
    vignette: { headline: "Femme de 22 ans, prise de 20 comprimés de paracétamol", context: "Tentative de suicide médicamenteux. Prise il y a 4h. Actuellement asymptomatique.", tags: ["Tentative de suicide", "Paracétamol", "4h post-ingestion"] },
    patient: { name: "Lucie F., 22 ans", age: 22, sex: "F", context: "Étudiante, contexte de rupture sentimentale. Pas d'ATCD somatique. Dépression récente non traitée. Alcool modéré.", arriving: "A pris 20 comprimés de Doliprane 1g il y a 4h (= 20g). Actuellement sans signe clinique mais angoissée. Nausées légères." },
    vitals: { pa: "120/75", fc: 90, spo2: 99, fr: 16, temp: 36.9, glasgow: 15 },
    symptoms: ["Phase 1 (0-24h) : nausées, vomissements, malaise (souvent peu ou pas de symptômes)", "Douleur épigastrique légère", "Anxiété majeure", "Asymptomatique possible malgré ingestion létale", "Phase 2 (24-72h) : cytolyse hépatique progressive (si non traité)"],
    ecg: { rythme: "Sinusal", fc: 90, pr: 140, qrs: 80, qt: 380, description: "ECG normal. Pas d'anomalie. Le paracétamol n'est pas cardiotoxique directement.", anomalies: [] },
    physiopathology: { mechanism: "Saturation des voies de conjugaison hépatique → accumulation de NAPQI (métabolite toxique) → nécrose centrolobulaire", cascade: ["Paracétamol métabolisé à 90% par glucuronoconjugaison et sulfoconjugaison (non toxique)", "10% via CYP2E1 → NAPQI (N-acétyl-p-benzoquinone imine) — très réactif", "Normalement neutralisé par le glutathion hépatique", "Surdosage : épuisement du glutathion → NAPQI s'accumule → liaison covalente aux protéines hépatocytaires", "Nécrose hépatocytaire centrolobulaire → insuffisance hépatique fulminante (J2-J4)"], consequence: "Sans traitement : insuffisance hépatique fulminante + IRA à J2-J4 → encéphalopathie → décès ou transplantation" },
    dd: [
      { id: "paracetamol_dd", label: "Intoxication aiguë au paracétamol — stade I", correct: true, explanation: "Dose ingérée > 150mg/kg (ici 20g = 320mg/kg). Paracétamolémie à 4h sur nomogramme de Rumack-Matthew obligatoire." },
      { id: "intox_aspiration", label: "Intoxication aux AINS (ibuprofène)", correct: false, explanation: "AINS : gastrite, bronchospasme, néphrotoxicité. Pas d'hépatotoxicité retardée. Nomogramme différent." },
      { id: "hepatite_medicamenteuse", label: "Hépatite médicamenteuse sur autre molécule", correct: false, explanation: "Histoire clinique claire ici. Bilan hépatique normal à 4h (cytolyse apparaît à 24-48h)." },
      { id: "gastrite_stress", label: "Gastrite de stress / troubles fonctionnels", correct: false, explanation: "Nausées bénignes possibles mais le contexte impose de traiter comme une intoxication grave jusqu'à preuve contraire." }
    ],
    gestures: [
      { id: "nac", name: "N-acétylcystéine IV IMMÉDIATE + dosage paracétamolémie", correct: true, description: "La NAC régénère le glutathion hépatique. Efficace si donnée < 10h. Potentiellement utile jusqu'à 24h.", steps: ["Paracétamolémie à H4 minimum (tube rouge — labo urgences)", "Reporter sur nomogramme de Rumack-Matthew → zone à risque ?", "N-acétylcystéine IV : 150mg/kg en 15 min, puis 50mg/kg sur 4h, puis 100mg/kg sur 16h", "Si paracétamolémie H4 > 150 mg/L (ou > 100 si facteurs de risque) : NAC sans attendre", "Bilan hépatique (ASAT, ALAT, bilirubine, TP) à H0 et H24", "Évaluation psychiatrique systématique en parallèle", "Transfert réanimation si signes d'insuffisance hépatique (INR > 2, encéphalopathie)"] },
      { id: "charbon_actif", name: "Charbon activé sans NAC", correct: false, description: "Charbon activé efficace < 1h post-ingestion. Mais après 4h, son efficacité est nulle. La NAC est l'antidote principal." }
    ],
    keyPoints: ["Le paracétamol est asymptomatique à la phase initiale — ne pas être rassuré", "Nomogramme de Rumack-Matthew : paracétamolémie à H4 → décision de traitement", "NAC optimale si débutée < 10h, mais doit être donnée jusqu'à 24h si doute", "Dose toxique : > 100mg/kg chez l'adulte sain, > 75mg/kg si alcool/inducteurs enzymatiques", "Transplantation hépatique : critères de Clichy si IHF installée"],
    sourcesFull: ["Rumack BH. Acetaminophen hepatotoxicity. Hepatology 2004.", "SFMU. Intoxications médicamenteuses volontaires 2021.", "HAS. Tentatives de suicide par médicaments 2022."]
  },

  {
    id: "wernicke", title: "Encéphalopathie de Wernicke", subtitle: "Carence en vitamine B1 — urgence métabolique",
    specialty: "Neuro-Urgences", difficulty: 3, color: "#6366F1",
    vignette: { headline: "Homme de 52 ans, confusion et troubles de l'équilibre", context: "Patient éthylique chronique, apporté par les pompiers. Pris pour une ivresse mais agitation atypique.", tags: ["Éthylisme", "Confusion", "Ataxie"] },
    patient: { name: "Bernard T., 52 ans", age: 52, sex: "M", context: "Éthylique chronique (2L de vin/j depuis 15 ans). Dénutrition sévère, IMC 17. Pas de suivi médical. Vit seul.", arriving: "Confus, ataxique, yeux déviés vers la droite. Apporté pour 'ivresse' mais pas d'odeur alcoolique. Dernier repas inconnu." },
    vitals: { pa: "105/65", fc: 100, spo2: 96, fr: 18, temp: 36.5, glasgow: 12 },
    symptoms: ["Confusion mentale et désorientation (triade de Wernicke)", "Ataxie cérébelleuse (démarche en titubant même sans alcool)", "Paralysie oculomotrice (nystagmus, paralysie du VI)", "Dénutrition sévère visible (IMC 17, pli cutané absent)", "Pas d'odeur alcoolique actuellement"],
    ecg: { rythme: "Sinusal", fc: 100, pr: 150, qrs: 90, qt: 400, description: "Tachycardie sinusale modérée. Pas d'anomalie spécifique. L'encéphalopathie de Wernicke n'a pas de signe ECG pathognomonique.", anomalies: [] },
    physiopathology: { mechanism: "Carence sévère en thiamine (B1) → blocage du métabolisme glucidique central → nécrose des corps mamillaires et du thalamus", cascade: ["Éthylisme chronique + dénutrition → carence en thiamine (B1)", "B1 = cofacteur indispensable de la pyruvate déshydrogénase et de l'alpha-cétoglutarate déshydrogénase", "Blocage du cycle de Krebs dans les neurones → production d'énergie impossible", "Zones les plus sensibles : corps mamillaires, thalamus médian, substance grise périaqueducale", "Aggravation AIGUË si apport de glucose sans B1 → excès de pyruvate → acidose lactique cérébrale"], consequence: "Sans traitement : évolution vers syndrome de Korsakoff (amnésie permanente irréversible dans 80% des cas)" },
    dd: [
      { id: "wernicke_dd", label: "Encéphalopathie de Wernicke", correct: true, explanation: "Triade : confusion + ataxie + ophtalmoplégie. Contexte éthylisme/dénutrition. Traitement empirique immédiat sans attendre la biologie." },
      { id: "ivresse_aigue", label: "Ivresse alcoolique aiguë", correct: false, explanation: "Confusion + ataxie possibles mais odeur alcoolique + alcoolémie positive. Pas de paralysie oculomotrice. Récupération spontanée." },
      { id: "avc_cerebelleux", label: "AVC cérébelleux", correct: false, explanation: "Ataxie possible mais début brutal, déficit focal fixé. TDM cérébral normal dans Wernicke (IRM : hypersignal T2 corps mamillaires)." },
      { id: "encephalite_auto_immune", label: "Encéphalite auto-immune", correct: false, explanation: "Confusion + mouvement oculaires anormaux possibles mais contexte différent. Pas de dénutrition. PL et auto-anticorps nécessaires." }
    ],
    gestures: [
      { id: "thiamine", name: "Thiamine IV AVANT tout apport glucosé", correct: true, description: "Règle absolue : jamais de glucose avant la thiamine chez l'éthylique dénutri. 500mg IV en 30 min.", steps: ["Thiamine (Benerva®) 500mg IV en 30 min (AVANT tout sérum glucosé)", "NE JAMAIS perfuser du G5% ou G30% avant la thiamine chez l'éthylique", "Magnésium IV (le magnésium est cofacteur de la thiamine)", "Monitoring neurologique toutes les 30 min", "Si amélioration : thiamine 250mg/j IM ou IV x 5 jours", "Bilan nutritionnel complet + dosage thiaminémie (résultat non urgent)", "Réévaluation à 24h : persistance des signes → IRM cérébrale (corps mamillaires)"] },
      { id: "glucose_wernicke", name: "G30% IV pour corriger l'hypoglycémie d'abord", correct: false, description: "ERREUR GRAVE : le glucose sans thiamine précipite l'encéphalopathie de Wernicke. Thiamine TOUJOURS avant glucose chez l'éthylique." }
    ],
    keyPoints: ["Triade de Wernicke : confusion + ataxie + ophtalmoplégie (incomplète dans 20% des cas)", "JAMAIS de glucose avant thiamine chez l'éthylique dénutri — aggravation fulminante possible", "Traitement empirique : thiamine 500mg IV si moindre doute — risque 0, bénéfice massif", "Syndrome de Korsakoff : amnésie antérograde permanente dans 80% si Wernicke non traité", "IRM : hypersignal T2 corps mamillaires + thalamus médian = signature de Wernicke"],
    sourcesFull: ["Sechi G, Serra A. Wernicke's encephalopathy. Lancet Neurology 2007.", "EFNS. Thiamine deficiency disorders. Eur J Neurol 2010.", "SFNP/SFNC. Encéphalopathie de Wernicke — recommandations 2019."]
  },

  {
    id: "coma_hyperosmolaire", title: "Coma hyperglycémique hyperosmolaire", subtitle: "Déshydratation intracellulaire sévère — sujet âgé diabétique",
    specialty: "Endocrino-Urgences", difficulty: 3, color: "#B45309",
    vignette: { headline: "Femme de 82 ans, confusion et déshydratation sévère", context: "Patiente diabétique de type 2 en EHPAD. Fièvre depuis 5 jours, alimentation insuffisante. Dextro à 38 mmol/L.", tags: ["Diabète type 2", "Déshydratation", "Confusion"] },
    patient: { name: "Raymonde P., 82 ans", age: 82, sex: "F", context: "Diabète type 2 depuis 20 ans sous metformine. ATCD : démence légère, HTA, insuffisance rénale modérée. En EHPAD.", arriving: "Confusion profonde depuis 48h. Déshydratation sévère (pli cutané, muqueuses sèches). Dextro = 38 mmol/L. Diurèse abondante récente puis anurie." },
    vitals: { pa: "95/60", fc: 118, spo2: 94, fr: 22, temp: 38.8, glasgow: 10 },
    symptoms: ["Confusion profonde — agitation chez certains patients", "Déshydratation sévère (pli cutané + muqueuses sèches + yeux excavés)", "Polyurie osmotique initiale puis oligurie", "Tachycardie + hypotension orthostatique", "Absence de dyspnée de Kussmaul (contrairement à l'ACD)"],
    ecg: { rythme: "Sinusal", fc: 118, pr: 160, qrs: 90, qt: 440, description: "Tachycardie sinusale. Pas d'anomalie spécifique. Surveillance des signes d'hyperkaliémie possible au cours de la réhydratation.", anomalies: [] },
    physiopathology: { mechanism: "Hyperglycémie extrême (> 30 mmol/L) + déshydratation → hyperosmolalité plasmatique → déshydratation intracellulaire cérébrale", cascade: ["Infection intercurrente → stress → hyperglycémie ++ (insulino-résistance)", "Diurèse osmotique → perte massive d'eau libre → hypernatrémie relative", "Osmolalité plasmatique > 320 mOsm/kg → déshydratation intracellulaire", "Cellules cérébrales se déshydratent → confusion → coma", "Pas de cétose car insulinémie résiduelle suffit à inhiber la lipolyse (contrairement à l'ACD)"], consequence: "Mortalité 15-20% (vs 1-5% pour ACD) — complications thromboemboliques ++ sur terrain fragile" },
    dd: [
      { id: "hyperosmolaire_dd", label: "Coma hyperglycémique hyperosmolaire", correct: true, explanation: "Glycémie > 30 mmol/L + osmolalité > 320 + absence de cétose + déshydratation sévère + sujet âgé diabétique. Souvent déclenché par une infection." },
      { id: "acd_dd2", label: "Acidocétose diabétique", correct: false, explanation: "ACD : glycémie plus basse (< 30), cétose +++ (haleine acétonique), dyspnée de Kussmaul, pH < 7,30. Plutôt DT1 jeune." },
      { id: "meningite_sujet_age", label: "Méningite bactérienne", correct: false, explanation: "Fièvre + confusion possibles. Mais méningisme à chercher. PL après TDM. Dextro normal dans la méningite." },
      { id: "avc_ischemique", label: "AVC ischémique avec confusion", correct: false, explanation: "Déficit focal + imagerie cérébrale. Glycémie peut monter de manière réactionnelle. Hyperosmolalité absente." }
    ],
    gestures: [
      { id: "rehydratation_hyperosmolaire", name: "Réhydratation IV progressive + insuline à faible dose", correct: true, description: "Corriger lentement pour éviter l'œdème cérébral. SSI 0,9% en 1ère intention, insuline secondaire.", steps: ["SSI 0,9% : 1L en 1h, puis 1L/2h, puis 1L/4h (objectif : - 50% du déficit en 24h)", "JAMAIS de réhydratation trop rapide → risque d'œdème cérébral", "Insuline ordinaire IVSE à démarrer quand glycémie > 25 mmol/L et APRÈS réhydratation (0,1 UI/kg/h)", "Objectif : baisser glycémie de 5 mmol/L/h maximum", "Ionogramme, osmolalité, glycémie, créatinine toutes les 2h", "Prévention HBPM (thrombose+++ sur terrain hyperviscosité)", "Traiter le facteur déclenchant (antibiotiques si infection)"] },
      { id: "insuline_seule", name: "Insuline IV rapide forte dose d'emblée", correct: false, description: "ERREUR : insuline sans réhydratation → hypotension + choc (l'insuline fait rentrer le glucose en cellule → descente osmolalité trop rapide → hypovolémie aggravée)." }
    ],
    keyPoints: ["CHH : glycémie > 30 mmol/L + osmolalité > 320 + pas de cétose + sujet âgé", "Réhydratation douce en priorité : baisser osmolalité de 2-4 mOsm/kg/h maximum", "Insuline secondaire : attendre que la réhydratation ait amorcé la baisse de glycémie", "Complications thromboemboliques : HBPM préventive systématique (hyperviscosité)", "Mortalité 15-20% : chercher et traiter le facteur déclenchant (infection++)"],
    sourcesFull: ["Pasquel FJ, Umpierrez GE. Hyperosmolar hyperglycemic state. Diabetes Care 2014.", "Kitabchi AE et al. DKA and HHS. Diabetes Care 2009.", "SFD. Urgences métaboliques diabétiques. 2020."]
  },

  {
    id: "infarctus_mesenterique", title: "Infarctus mésentérique aigu", subtitle: "Ischémie intestinale — urgence vasculaire abdominale",
    specialty: "Chirurgie digestive", difficulty: 3, color: "#F97316",
    vignette: { headline: "Femme de 74 ans, douleur abdominale intense disproportionnée", context: "FA connue non anticoagulée. Douleur abdominale aiguë diffuse depuis 4h. Douleur disproportionnée à l'examen clinique.", tags: ["FA", "Douleur abdominale", "Choc"] },
    patient: { name: "Henriette M., 74 ans", age: 74, sex: "F", context: "FA paroxystique sous bêtabloquant, non anticoagulée depuis 6 mois (chute). ATCD : cardiopathie ischémique, HTA.", arriving: "Douleur abdominale diffuse et intense depuis 4h. Douleur disproportionnée à l'examen (abdomen souple mais patient hurlant). Diarrhée sanglante." },
    vitals: { pa: "95/60", fc: 126, spo2: 94, fr: 24, temp: 38.5, glasgow: 14 },
    symptoms: ["Douleur abdominale violente disproportionnée à l'examen clinique (signe classique)", "Diarrhée sanglante (infarctus transmural)", "Abdomen souple initialement (avant péritonite)", "Nausées et vomissements incoercibles", "Choc hémodynamique en installation"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 126, pr: null, qrs: 90, qt: 380, description: "FA à réponse ventriculaire rapide. Tachycardie. Pas d'anomalie ST. Source emboligène.", anomalies: ["FA — risque thrombo-embolique majeur", "Tachycardie réflexe sur état de choc"] },
    physiopathology: { mechanism: "FA → embolie de l'artère mésentérique supérieure → ischémie grêlo-colique → nécrose transmurale → péritonite stercorale", cascade: ["FA → thrombus auriculaire gauche → embolie de l'artère mésentérique supérieure (AMS)", "Occlusion artérielle → ischémie des anses intestinales irriguées par l'AMS (jéjunum + iléon + côlon droit)", "Ischémie → nécrose transmurale en quelques heures", "Translocation bactérienne → sepsis → choc septique", "Douleur disproportionnée car ischémie viscérale sans irritation péritonéale initiale"], consequence: "Mortalité > 60% si diagnostic tardif (> 6h). Résection intestinale massive → grêle court." },
    dd: [
      { id: "infarctus_mes_dd", label: "Infarctus mésentérique sur embolie artérielle (FA)", correct: true, explanation: "Douleur disproportionnée + FA + choc = infarctus mésentérique jusqu'à preuve contraire. Angio-TDM abdominal confirme." },
      { id: "occlusion_intestinale", label: "Occlusion intestinale aiguë", correct: false, explanation: "Occlusion : arrêt des matières + gaz + météorisme. Pas de diarrhée sanglante. ASP/TDM : niveaux hydro-aériques." },
      { id: "pancreatite_aigue", label: "Pancréatite aiguë nécrosante", correct: false, explanation: "Douleur épigastrique + lipase élevée + TDM : nécrose pancréatique. Pas de diarrhée sanglante. FA moins impliquée." },
      { id: "colite_aigue", label: "Colite ischémique", correct: false, explanation: "Touche le côlon sigmoïde (zone de Griffiths). Moins grave, pas de choc. Angio-TDM montre l'AMS perméable." }
    ],
    gestures: [
      { id: "angiotdm_bloc", name: "Angio-TDM abdominal IMMÉDIAT + chirurgien vasculaire + anticoagulation", correct: true, description: "Diagnostic par angio-TDM en urgence. Revascularisation chirurgicale ou endovasculaire dans les 6h.", steps: ["Angio-TDM abdomino-pelvien en urgence (sensibilité 90%+ pour embolie AMS)", "HNF 5000 UI IV bolus dès suspicion (avant TDM si choc)", "Appel chirurgien vasculaire + digestif + réanimateur IMMÉDIATEMENT", "Réanimation : VVP large, remplissage, antibiotiques (bêta-lactamine + métronidazole)", "Si viable : embolectomie chirurgicale ou thrombolyse intra-artérielle", "Si nécrose : résection intestinale + second look à 24-48h", "Post-op : nutrition parentérale + anticoagulation à vie (FA)"] },
      { id: "traitement_medical_seul", name: "Antalgiques + surveillance médicale", correct: false, description: "ERREUR FATALE : attendre aggrave l'ischémie. Chaque heure = mètres d'intestin nécrosés. Chirurgie en urgence." }
    ],
    keyPoints: ["Douleur abdominale disproportionnée à l'examen + FA = infarctus mésentérique jusqu'à preuve contraire", "Angio-TDM : examen clé — ne pas attendre si choc", "HNF immédiate : stoppe la propagation de la thrombose mésentérique", "Mortalité > 60% si diagnostic tardif — pronostic catastrophique passé 6h", "Second look chirurgical à 48h : réévaluation de la viabilité intestinale"],
    sourcesFull: ["Tilsed JV et al. ESTES guidelines acute mesenteric ischaemia. Eur J Trauma 2016.", "Acosta S. Mesenteric ischemia. Curr Opin Crit Care 2015.", "HAS. Ischémie mésentérique aiguë 2021."]
  },

  {
    id: "thyrotoxicose", title: "Crise thyrotoxique", subtitle: "Tempête thyroïdienne — urgence endocrinologique",
    specialty: "Endocrino-Urgences", difficulty: 3, color: "#B45309",
    vignette: { headline: "Femme de 38 ans, fièvre et agitation extrême", context: "Hyperthyroïdie connue, traitement arrêté depuis 3 semaines. Amenée par son conjoint pour agitation et confusion.", tags: ["Hyperthyroïdie", "Fièvre", "Agitation"] },
    patient: { name: "Nathalie V., 38 ans", age: 38, sex: "F", context: "Maladie de Basedow depuis 2 ans sous carbimazole. Arrêt volontaire du traitement il y a 3 semaines. Infection dentaire récente.", arriving: "Agitation majeure, confusion, tremblements, sueurs profuses. Fièvre à 39,8°C. Tachycardie extrême. Exophtalmie bilatérale." },
    vitals: { pa: "170/60", fc: 156, spo2: 96, fr: 26, temp: 39.8, glasgow: 12 },
    symptoms: ["Tachycardie extrême (156 bpm) ou FA", "Fièvre élevée (39,8°C) — amplifiée par la thermogenèse thyroïdienne", "Agitation, confusion, anxiété majeure", "Tremblements fins des extrémités + sueurs profuses", "Exophtalmie bilatérale (maladie de Basedow)"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 156, pr: null, qrs: 80, qt: 320, description: "FA à réponse ventriculaire rapide. Tachycardie extrême. Possible flutter. QT court.", anomalies: ["FA à FC très rapide (156/min)", "Sous-décalage ST diffus possible (ischémie sous-endocardique sur tachycardie)"] },
    physiopathology: { mechanism: "Excès brutal d'hormones thyroïdiennes → catabolisme extrême + effet sympathomimétique → défaillance multi-organes", cascade: ["Arrêt antithyroïdien + facteur déclenchant (infection) → libération massive T3/T4", "Effet sympathomimétique : tachycardie + HTA + tremblements + agitation", "Thermogenèse extrême → hyperthermie → déshydratation", "Insuffisance cardiaque à haute sortance → OAP possible", "Défaillance hépatique (ictère) + neurologique (confusion, coma)"], consequence: "Mortalité 10-30% sans traitement — insuffisance cardiaque + défaillance multiviscérale" },
    dd: [
      { id: "thyrotox_dd", label: "Crise thyrotoxique (tempête thyroïdienne)", correct: true, explanation: "Score de Burch-Wartofsky > 45 = crise probable. FA + fièvre + agitation + hyperthyroïdie connue + facteur déclenchant." },
      { id: "sepsis_thyro", label: "Choc septique avec tachycardie", correct: false, explanation: "Sepsis possible mais contexte d'hyperthyroïdie + exophtalmie. TSH effondrée + T4 libre élevée font le diagnostic." },
      { id: "intox_sympathomimetique", label: "Intoxication aux sympathomimétiques", correct: false, explanation: "Cocaïne/amphétamines : tachycardie + HTA + agitation similaires. Contexte clinique + TSH/T4 différencient." },
      { id: "pheochromocytome", label: "Phéochromocytome en poussée", correct: false, explanation: "HTA paroxystique + tachycardie + sueurs. Métanéphrines urinaires élevées. TSH normale." }
    ],
    gestures: [
      { id: "traitement_thyrotox", name: "Propylthiouracile + bêtabloquant + iode + corticoïdes", correct: true, description: "4 piliers : inhiber la synthèse, inhiber la libération, ralentir la conversion T4→T3, sédater le système sympathique.", steps: ["Propylthiouracile (PTU) 600mg per os/SNG : bloque synthèse ET conversion T4→T3", "Attendre 1h puis iode (solution de Lugol 5 gouttes x 3/j) : bloque libération thyroïdienne", "Propranolol 40mg/6h PO ou métoprolol IV si FA rapide (contrôle FC)", "Hydrocortisone 200mg/j IV : bloque conversion T4→T3 + insuffisance surrénalienne relative", "Antipyrétiques : paracétamol (PAS d'aspirine qui libère T4 des protéines)", "Traiter le facteur déclenchant (antibiotiques)", "Soins intensifs / réanimation : monitoring continu"] },
      { id: "aspirine_thyro", name: "Aspirine pour la fièvre + surveillance", correct: false, description: "CONTRE-INDIQUÉ : l'aspirine déplace les hormones thyroïdiennes de leurs protéines de transport → aggrave la thyrotoxicose." }
    ],
    keyPoints: ["Score de Burch-Wartofsky > 45 = crise thyrotoxique probable → traitement immédiat sans attendre TSH", "Séquence : PTU D'ABORD (1h), puis iode — l'inverse aggrave la crise (effet Jod-Basedow)", "Pas d'aspirine antipyrétique — paracétamol uniquement", "Propranolol : contrôle la fréquence cardiaque ET bloque la conversion T4→T3", "Mortalité 10-30% : soins intensifs systématiques"],
    sourcesFull: ["Burch HB, Wartofsky L. Life-threatening thyrotoxicosis. Endocrinol Metab Clin 1993.", "Ross DS et al. ATA Guidelines Hyperthyroidism. Thyroid 2016.", "SFE/SFNEP. Urgences endocriniennes. 2021."]
  },

  {
    id: "celulite_cervicale", title: "Cellulite cervicale diffuse", subtitle: "Infection cervico-faciale grave — risque de médiastinite",
    specialty: "ORL-Urgences", difficulty: 3, color: "#0891B2",
    vignette: { headline: "Homme de 45 ans, tuméfaction cervicale fébrile rapidement progressive", context: "Douleur dentaire négligée depuis 3 semaines. Tuméfaction cervicale gauche depuis 48h. Trismus et dysphagie.", tags: ["Infection dentaire", "Trismus", "Dysphagie"] },
    patient: { name: "Rachid B., 45 ans", age: 45, sex: "M", context: "Diabétique type 2 mal équilibré (HbA1c 9%). Douleur molaire inférieure gauche depuis 3 semaines non traitée. Sans médecin traitant.", arriving: "Tuméfaction cervicale gauche diffuse, chaude, indurée, douloureuse depuis 48h. Trismus majeur. Dysphagie totale. Stridor inspiratoire." },
    vitals: { pa: "125/80", fc: 118, spo2: 92, fr: 28, temp: 39.4, glasgow: 15 },
    symptoms: ["Tuméfaction cervicale diffuse, chaude et indurée", "Trismus (ouverture de bouche < 1 cm)", "Dysphagie totale aux liquides", "Stridor inspiratoire (compression trachéale)", "Fièvre à 39,4°C + syndrome inflammatoire sévère"],
    ecg: { rythme: "Sinusal", fc: 118, pr: 150, qrs: 80, qt: 380, description: "Tachycardie sinusale réactionnelle à l'infection. Pas d'anomalie spécifique. Surveiller si médiastinite (péricardite, épanchement).", anomalies: [] },
    physiopathology: { mechanism: "Foyer dentaire → extension aux espaces cervicaux profonds → phlegmon diffus → compression laryngée + risque médiastinite descendante", cascade: ["Dent infectée (cellulite péri-apicale) → envahissement des espaces sous-mandibulaires", "Propagation aux espaces péri-pharyngés et rétropharyngés (plan facial cervical profond)", "Diffusion descendante vers le médiastin (angine de Ludwig → médiastinite)", "Compression trachéo-laryngée → dyspnée + stridor → risque asphyxie", "Diabetes : déficit immunitaire → extension rapide, germes polymicrobiens"], consequence: "Médiastinite descendante dans 20-40% si non traité : mortalité 40-60%. Asphyxie aiguë possible." },
    dd: [
      { id: "cellulite_dd", label: "Cellulite cervicale diffuse profonde (angine de Ludwig)", correct: true, explanation: "Plancher buccal induré + trismus + dysphagie + fièvre + foyer dentaire. TDM cervical avec injection : espaces profonds envahis." },
      { id: "adenophlegmon", label: "Adénophlegmon cervical", correct: false, explanation: "Adénite suppurée : masse fluctuante isolée, moins de trismus. TDM : abcès ganglionnaire vs diffusion spatiale." },
      { id: "angio_oedeme", label: "Angioœdème laryngé", correct: false, explanation: "Angioœdème : installation rapide (minutes), pas de fièvre, contexte allergique. Pas d'induration cervicale." },
      { id: "phlegmon_periamyg", label: "Phlegmon péri-amygdalien", correct: false, explanation: "Voix de patate chaude + bombement unilatéral + trismus moins sévère. Pas de propagation cervicale diffuse." }
    ],
    gestures: [
      { id: "voies_aeriennes_cellulite", name: "Sécurisation des voies aériennes + TDM cervical + ATB IV + drainage chirurgical", correct: true, description: "Priorité absolue : protéger les voies aériennes avant tout. Intubation difficile anticipée.", steps: ["Évaluation immédiate des voies aériennes : stridor = pré-intubation urgente", "Si stridor : appel ORL + anesthésiste IMMÉDIATEMENT — intubation vigile fibroscopique ou trachéotomie d'urgence", "TDM cervico-thoracique avec injection : extension des espaces + médiastinite ?", "Antibiotiques IV larges spectre : amoxicilline-acide clavulanique + métronidazole ± gentamicine", "Si diabétique : équilibration glycémique (facteur aggravant)", "Drainage chirurgical des collections : ORL ou chirurgien maxillo-facial", "Soins intensifs si médiastinite"] },
      { id: "att_tdm_antibio", name: "Antibiotiques per os et surveillance à domicile", correct: false, description: "ERREUR GRAVE : cellulite cervicale profonde = hospitalisation urgente. Stridor = urgence vitale immédiate. Antibiotiques PO insuffisants." }
    ],
    keyPoints: ["Stridor = urgence vitale → intubation vigile fibroscopique par ORL/anesthésiste expérimenté", "TDM cervico-thoracique : évalue l'extension médiastinale (médiastinite = mortalité 40-60%)", "Angine de Ludwig : plancher buccal induré bilatéral + trismus + dysphagie", "Diabète = facteur de risque majeur d'extension et de complications", "Drainage chirurgical précoce : clé du pronostic"],
    sourcesFull: ["Eftekharian A et al. Ludwig's angina. J Oral Maxillofac Surg 2009.", "Boscolo-Rizzo P, Da Mosto MC. Deep neck space infections. Eur Arch Otorhinolaryngol 2009.", "SFCO. Infections cervico-faciales graves. Recommandations 2018."]
  },

  {
    id: "bpco_exacerbation", title: "Exacerbation sévère de BPCO", subtitle: "Insuffisance respiratoire aiguë hypercapnique",
    specialty: "Pneumo-Urgences", difficulty: 2, color: "#0891B2",
    vignette: { headline: "Homme de 68 ans, dyspnée et confusion", context: "BPCO sévère stade GOLD III. Amenée par les pompiers pour dyspnée aiguë avec confusion. Teint rosé.", tags: ["BPCO", "Dyspnée", "Confusion"] },
    patient: { name: "Roger D., 68 ans", age: 68, sex: "M", context: "BPCO stade GOLD III (VEMS 35%). Tabagisme 40 PA, sevré depuis 5 ans. Oxygénothérapie de déambulation 2L/min. Deux hospitalisations l'an dernier.", arriving: "Dyspnée de repos depuis 3 jours, aggravée. Confusion depuis ce matin. Cyanose périphérique. Teint rosé (hypercapnie). Encombrement majeur." },
    vitals: { pa: "155/90", fc: 108, spo2: 78, fr: 34, temp: 38.2, glasgow: 12 },
    symptoms: ["Dyspnée de repos extrême, orthopnée", "Confusion et agitation (signe d'hypercapnie grave)", "Teint rosé (vasodilatation par CO2)", "Cyanose périphérique", "Tirage intercostal et sus-claviculaire, balancement thoraco-abdominal"],
    ecg: { rythme: "Sinusal", fc: 108, pr: 160, qrs: 100, qt: 420, description: "Tachycardie sinusale. Axe droit (cœur pulmonaire chronique). Ondes P pointues en D2 (P pulmonaire). Pas de BBD complet.", anomalies: ["Axe QRS droit (> +90°) — cœur pulmonaire chronique", "Ondes P pointues D2 (P pulmonaire) — hypertrophie atriale droite"] },
    physiopathology: { mechanism: "Exacerbation (infection) → obstruction bronchique ++ → hypoventilation alvéolaire → hypoxémie + hypercapnie → acidose respiratoire", cascade: ["Infection respiratoire → inflammation bronchique + bronchoconstriction → obstruction majorée", "Augmentation résistances → travail respiratoire ++ → fatigue des muscles respiratoires", "Hypoventilation alvéolaire → CO2 s'accumule → hypercapnie + acidose respiratoire", "Vasoconstriction pulmonaire hypoxique → HTAP aiguë sur chronique", "Confusion = signe de gravité majeur (CO2 > 60-70 mmHg)"], consequence: "Arrêt respiratoire par épuisement si VNI non démarrée. Intubation à éviter si possible (sevrage très difficile)." },
    dd: [
      { id: "bpco_dd", label: "Exacerbation sévère de BPCO avec hypercapnie", correct: true, explanation: "BPCO connu + confusion + tachypnée + SpO2 basse + teint rosé. Gaz du sang : pH < 7,35 + PCO2 > 50 mmHg confirment." },
      { id: "oap_bpco", label: "OAP cardiogénique sur cardiopathie hypertensive", correct: false, explanation: "OAP : crépitants bilatéraux, BNP élevé, orthopnée, réponse aux diurétiques. Pas d'hypercapnie au premier plan. Écho cardiaque différencie." },
      { id: "ep_bpco", label: "Embolie pulmonaire massive", correct: false, explanation: "EP : tachycardie + dyspnée mais hypocapnie (hyperventilation réflexe). D-dimères + angio-TDM si doute." },
      { id: "pneumonie_bpco", label: "Pneumonie aiguë communautaire décompensant la BPCO", correct: false, explanation: "Les deux peuvent coexister — radio/TDM thorax recherche un foyer de condensation. ATB si suspicion d'infection bactérienne." }
    ],
    gestures: [
      { id: "vni_bpco", name: "VNI (BPAP) immédiate + oxygène contrôlé + bronchodilatateurs", correct: true, description: "La VNI est le traitement de référence de l'exacerbation sévère hypercapnique. Évite l'intubation dans 60-80% des cas.", steps: ["Gaz du sang artériaux immédiatement (pH, PCO2, PO2, HCO3-)", "Oxygène contrôlé : objectif SpO2 88-92% SEULEMENT (éviter hyperoxie → aggrave hypercapnie)", "VNI (BPAP) : IPAP 12-16 cmH2O, EPAP 4-8 cmH2O, séances de 20 min/h minimum", "Bronchodilatateurs nébulisés : salbutamol 5mg + ipratropium 0,5mg toutes les 20 min", "Corticoïdes IV : méthylprednisolone 40mg/j x 5 jours", "Antibiotiques si expectoration purulente (amoxicilline-clavulanate)", "Si pH < 7,25 après 1h de VNI → intubation invasive"] },
      { id: "o2_haut_debit", name: "Oxygène à haut débit 15L/min au masque haute concentration", correct: false, description: "ERREUR CLASSIQUE : hyperoxie chez le BPCO aggrave la rétention de CO2 (effet Haldane + vasodilatation pulmonaire). Objectif SpO2 88-92%." }
    ],
    keyPoints: ["SpO2 cible BPCO : 88-92% — l'hyperoxie aggrave l'hypercapnie (effet Haldane)", "VNI = traitement de référence EABPCO hypercapnique — réduit la mortalité de 50%", "pH < 7,25 après VNI = intubation — pronostic très sombre (sevrage difficile)", "Confusion = signe de gravité majeur = PCO2 probablement > 60-70 mmHg", "Bronchodilatateurs + corticoïdes + antibiotiques (si purulent) : trépied thérapeutique"],
    sourcesFull: ["GOLD. Global Strategy for Prevention, Diagnosis and Management of COPD. 2024.", "Rochwerg B et al. Noninvasive ventilation for AECOPD. Intensive Care Med 2017.", "SPLF. Recommandations BPCO exacerbations. 2021."]
  },

  {
    id: "pyelonephrite_grave", title: "Pyélonéphrite grave / Choc uroseptique", subtitle: "Infection urinaire haute compliquée — porte d'entrée uroseptique",
    specialty: "Urologie-Infectio", difficulty: 2, color: "#059669",
    vignette: { headline: "Femme de 58 ans, fièvre et hypotension", context: "Diabétique, douleur lombaire droite depuis 48h. Aux urgences : hypotension et marbrures. Bandelette urinaire : nitrites ++.", tags: ["Pyélonéphrite", "Sepsis", "Diabète"] },
    patient: { name: "Sylvie C., 58 ans", age: 58, sex: "F", context: "Diabétique type 2 sous metformine, HTA. Antécédent de pyélonéphrite il y a 2 ans. Pas d'allergie connue.", arriving: "Douleur lombaire droite depuis 48h avec fièvre à 39,5°C. Évolution vers hypotension (85/50) et marbrures des genoux. Frissons intenses. BU : nitrites ++, leucocytes +++." },
    vitals: { pa: "85/50", fc: 124, spo2: 95, fr: 24, temp: 39.5, glasgow: 14 },
    symptoms: ["Douleur lombaire droite spontanée + contact lombaire douloureux", "Frissons intenses + fièvre élevée", "Hypotension + tachycardie (critères sepsis)", "Marbrures des genoux (hypoperfusion)", "BU : nitrites + leucocytes +++"],
    ecg: { rythme: "Sinusal", fc: 124, pr: 150, qrs: 80, qt: 370, description: "Tachycardie sinusale réflexe sur état de choc septique d'origine urinaire. Pas d'anomalie spécifique. Surveiller QTc si fluoroquinolones.", anomalies: [] },
    physiopathology: { mechanism: "E. coli → infection parenchyme rénal → bactériémie → SIRS → choc septique", cascade: ["Colonisation urétrale ascendante → cystite → pyélonéphrite (E. coli 80%)", "Bactériémie → libération de LPS → activation macrophages → cytokines pro-inflammatoires", "Vasodilatation systémique → chute des résistances vasculaires → choc distributif", "Dysfonction d'organe (rein, foie, coagulation) → sepsis sévère puis choc", "Facteurs aggravants : diabète, obstacle (calcul, tumeur), immunodépression"], consequence: "Choc uroseptique : mortalité 20-30% sans traitement précoce. Pronostic dépend de la levée d'obstacle si présente." },
    dd: [
      { id: "pyelo_dd", label: "Choc uroseptique sur pyélonéphrite aiguë", correct: true, explanation: "Douleur lombaire + BU positive + sepsis = pyélonéphrite compliquée. TDM abdominal avec injection : abcès rénal ? Obstacle (calcul) ? Gaz (pyélonéphrite emphysémateuse) ?" },
      { id: "appendicite_droite", label: "Appendicite aiguë compliquée", correct: false, explanation: "Douleur fosse iliaque droite + défense. BU peut être faussement positive. TDM confirme. Appendicite rétrocæcale peut mimer une pyélo." },
      { id: "chol_pyelo", label: "Cholécystite aiguë lithiasique", correct: false, explanation: "Douleur hypochondre droit + Murphy + ASAT/ALAT élevées. Echographie : lithiase + épaississement paroi vésiculaire." },
      { id: "dissection_abd", label: "Dissection aortique abdominale", correct: false, explanation: "Douleur dorsale + choc mais BU négative, douleur irradiant en bas. Angio-TDM aortique si doute." }
    ],
    gestures: [
      { id: "atb_preco_choc_uroseptique", name: "ATB IV précoce + remplissage + écho + TDM urgence", correct: true, description: "Heure golden : ATB dans la 1ère heure + remplissage vasculaire + bilan d'imagerie en urgence.", steps: ["Hémocultures x2 AVANT antibiotiques (ne pas retarder > 45 min)", "ECBU en urgence", "ATB IV immédiat : C3G (cefotaxime 2g ou ceftriaxone 2g) + aminoside si choc (gentamicine 5mg/kg)", "Remplissage : NaCl 0,9% 30 mL/kg dans les 3h (sepsis), noradrénaline si choc réfractaire", "TDM abdomino-pelvien avec injection : abcès, obstacle, gaz (emphysémateuse)", "Si obstacle (calcul) : urologue en urgence — drainage (sonde urétérale ou néphrostomie)", "Sulfamides et fluoroquinolones : résistances > 20% en France — éviter en probabiliste"] },
      { id: "atb_po_pyelo", name: "Fluoroquinolones per os + hospitalisation différée", correct: false, description: "ERREUR : choc uroseptique = hospitalisation immédiate + ATB IV. Quinolones PO réservées aux PNA non compliquées. Résistances élevées en France (> 20%)." }
    ],
    keyPoints: ["Hour-1 bundle : ATB dans l'heure, hémocultures avant, remplissage 30 mL/kg", "C3G + aminoside en première intention si choc (PNA compliquée)", "TDM : abcès rénal ? Calcul obstructif ? Pyélonéphrite emphysémateuse (gaz = urgence chirurgicale) ?", "Ne pas utiliser les quinolones en probabiliste (résistances France > 20%)", "Évaluer la réponse à H6 : si pas d'amélioration → imagerie + drainage"],
    sourcesFull: ["SPILF. Recommandations pyélonéphrites aigues. 2020.", "Singer M et al. Third International Consensus Definitions for Sepsis (Sepsis-3). JAMA 2016.", "EAU Guidelines Urological Infections. 2024."]
  },

  {
    id: "hematome_sous_dural", title: "Hématome sous-dural chronique", subtitle: "Chute + anticoagulants — décompensation neurologique tardive",
    specialty: "Neuro-Chir", difficulty: 2, color: "#1E40AF",
    vignette: { headline: "Homme de 82 ans, confusion progressive depuis 3 semaines", context: "Chute il y a 4 semaines, sous AVK. Confusion progressive signalée par la famille. Hémiparésie gauche discrète.", tags: ["AVK", "Chute", "Confusion"] },
    patient: { name: "Marcel T., 82 ans", age: 82, sex: "M", context: "FA permanente sous warfarine (INR cible 2-3). Chute il y a 4 semaines, traumatisme crânien bénin apparent. HTA, dément léger.", arriving: "Confusion progressive depuis 3 semaines selon la famille. Marche difficile, hémiparésie gauche discrète. Céphalées intermittentes. INR ce jour : 2,8." },
    vitals: { pa: "160/90", fc: 74, spo2: 97, fr: 16, temp: 37.2, glasgow: 13 },
    symptoms: ["Confusion progressive sur 3 semaines (début insidieux)", "Hémiparésie gauche discrète (déficit focal)", "Céphalées intermittentes", "Antécédent de traumatisme crânien sous anticoagulants", "INR suprathérapeutique (2,8)"],
    ecg: { rythme: "Fibrillation auriculaire", fc: 74, pr: null, qrs: 80, qt: 400, description: "FA à fréquence contrôlée (74/min). Pas d'anomalie aiguë. Contexte : anticoagulation pour FA.", anomalies: [] },
    physiopathology: { mechanism: "Traumatisme crânien → déchirure des veines pontines → saignement sous-dural lent → hématome chronique expansif", cascade: ["Traumatisme crânien (parfois minime) → déchirure des veines en pont corticales (bridging veins)", "Hématome sous-dural aigu → clairance partielle → hématome chronique (sang dégradé, hypodense/isodense)", "Membrane inflammatoire se forme → néovaisseaux fragiles → resaignements itératifs", "Effet de masse croissant → compression corticale → déficit neurologique progressif", "AVK : amplifient le saignement initial et les resaignements"], consequence: "Sans évacuation : engagement temporal possible. Avec évacuation : pronostic généralement favorable (guérison > 80%)." },
    dd: [
      { id: "hsd_dd", label: "Hématome sous-dural chronique (HSDC)", correct: true, explanation: "Trauma sous AVK + confusion progressive + hémiparésie + délai 4 semaines = HSDC jusqu'à preuve contraire. TDM cérébral confirme (hypodense/isodense)." },
      { id: "avc_ischémique", label: "AVC ischémique sous-cortical", correct: false, explanation: "AVC : déficit brutal, pas progressif sur 3 semaines. IRM diffusion : restriction si ischémique. TDM : pas de collection sous-durale." },
      { id: "demence_rapide", label: "Démence à corps de Lewy ou frontale", correct: false, explanation: "Démence : progression sur mois-années, pas 3 semaines post-trauma. Pas d'hémiparésie. TDM/IRM : atrophie corticale, pas de collection." },
      { id: "encephalite", label: "Encéphalite virale", correct: false, explanation: "Encéphalite : fièvre + LCR inflammatoire + IRM : hypersignal temporal. Contexte post-traumatique différent." }
    ],
    gestures: [
      { id: "tdm_reversal_chir", name: "TDM cérébral urgent + reversal AVK + neurochirurgie", correct: true, description: "TDM confirme et guide l'urgence chirurgicale. INR doit être normalisé avant toute intervention.", steps: ["TDM cérébral sans injection IMMÉDIAT (urgence neurologique)", "Évaluer l'urgence chirurgicale : taille hématome, engagement ?", "Reversal AVK : vitamine K 10mg IV + CCP (PPSB) selon INR actuel — objectif INR < 1,5 avant chirurgie", "Neurochirurgien d'astreinte : trépanation ou craniotomie (évacuation hématome)", "Si bilateral : évacuation bilatérale", "Post-opératoire : décision de reprise anticoagulation à discuter (risque hémorragique vs embolique)", "Réévaluer indication de l'AVK (FA) : AOD moins de risque hémorragique intracrânien"] },
      { id: "observation_hsd", name: "Correction INR et surveillance médicale simple", correct: false, description: "INSUFFISANT si déficit neurologique ou hématome > 10mm : évacuation chirurgicale indispensable. Surveillance seule réservée aux HSDC asymptomatiques minimes." }
    ],
    keyPoints: ["HSDC : tableau subaigu-chronique post-trauma sous anticoagulants — toujours TDM après chute sous AVK", "TDM : hypodense (> 3 sem) ou isodense (2-3 sem) — attention : isodense peut être raté", "Reversal AVK avant chirurgie : CCP + vitamine K IV", "Trépanation-évacuation : bon pronostic (> 80% de récupération neurologique)", "AOD plutôt qu'AVK en post-op pour la FA (moins de risque hémorragique intracrânien)"],
    sourcesFull: ["Mack LR et al. Chronic subdural hematoma. Neurology 2022.", "SFNC. Prise en charge HSDC. Recommandations 2019.", "ESC. Antithrombotic therapy after intracranial bleeding in AF. 2023."]
  },

  {
    id: "noyade", title: "Noyade / Submersion accidentelle", subtitle: "Arrêt cardio-respiratoire hypoxique — hypothermie associée",
    specialty: "Réanimation", difficulty: 3, color: "#0369A1",
    vignette: { headline: "Adolescent de 15 ans, repêché inconscient dans une piscine", context: "Retrouvé au fond d'une piscine, inconscient. Durée d'immersion inconnue. SMUR à 8 min. T° corporelle : 32°C.", tags: ["Noyade", "Arrêt cardiaque", "Hypothermie"] },
    patient: { name: "Lucas F., 15 ans", age: 15, sex: "M", context: "Adolescent sans ATCD. Retrouvé au fond d'une piscine familiale. Témoins : disparition sous l'eau 5-8 minutes. T° eau : 22°C.", arriving: "Repêché inconscient, pas de pouls, apnéique. RCP débutée par les témoins. SMUR : PEA lente. T° 32°C. Pupilles en mydriase bilatérale." },
    vitals: { pa: "0/0", fc: 0, spo2: null, fr: 0, temp: 32.0, glasgow: 3 },
    symptoms: ["Arrêt cardio-respiratoire (pas de pouls, apnée)", "Inconscience profonde (Glasgow 3)", "Hypothermie (T° 32°C)", "Pupilles en mydriase bilatérale (réversible si hypothermie)", "PEA lente à l'arrivée du SMUR"],
    ecg: { rythme: "PEA (activité électrique sans pouls)", fc: 28, pr: null, qrs: 200, qt: null, description: "Bradycardie sinusale extrême sur hypothermie. Risque de FV à tout moment (T° < 32°C). Ondes J d'Osborn caractéristiques. Ne pas diagnostiquer 'asystolie' avant réchauffement.", anomalies: ["Ondes J d'Osborn (encoche à la jonction QRS-T) — pathognomoniques de l'hypothermie", "Bradycardie sinusale extrême sur hypothermie", "Allongement de tous les intervalles (PR, QRS, QT)"] },
    physiopathology: { mechanism: "Submersion → hypoxie → perte de conscience → inhalation d'eau → arrêt cardiaque + hypothermie protectrice cérébrale", cascade: ["Submersion → apnée réflexe puis inhalation → hypoxie alvéolaire → perte de conscience", "Eau inhalée → œdème pulmonaire lésionnel (SDRA)", "Hypoxie → arrêt cardiaque (bradycardie → PEA → FV/asystolie)", "Hypothermie associée : ralentit le métabolisme → facteur protecteur cérébral", "Paradoxe : hypothermie peut maintenir une viabilité cérébrale malgré l'arrêt cardiaque"], consequence: "Principe : 'No one is dead until warm and dead'. Réchauffement actif obligatoire avant de certifier le décès." },
    dd: [
      { id: "noyade_dd", label: "Arrêt cardiaque sur noyade avec hypothermie secondaire", correct: true, explanation: "Contexte évident. Priorité : RCP + réchauffement + ECMO si disponible. Ne pas arrêter la RCP avant T° ≥ 32-35°C." },
      { id: "trauma_plongeon", label: "Traumatisme cervical sur plongeon (tétraplégie + apnée)", correct: false, explanation: "Plongeon en eau peu profonde : fracture cervicale possible. Immobilisation cervicale pendant la RCP jusqu'à preuve contraire." },
      { id: "arythmie_syndrome_qt", label: "Syndrome du QT long — arythmie avant la noyade", correct: false, explanation: "Noyade en eau froide peut déclencher une syncope sur syndrome de QT long. ECG post-réanimation : recherche anomalie primaire." }
    ],
    gestures: [
      { id: "rcp_rechauffement_ecmo", name: "RCP continue + réchauffement actif + ECMO si T° < 28°C", correct: true, description: "Principe fondamental : ne jamais arrêter la RCP avant d'avoir réchauffé. ECMO = réchauffement le plus rapide.", steps: ["RCP de qualité continue sans interruption (MCE + ventilation)", "Intubation oro-trachéale + ventilation 100% O2", "Voie veineuse centrale ou IO — soluté chaud 42°C en remplissage", "Monitorage continu : T° centrale (œsophagienne), rythme cardiaque", "Réchauffement actif : couverture chauffante, solutés chauds, chaleur humidifiée", "Si T° < 28°C ou K+ < 12 mmol/L : transfert vers centre ECMO", "ECMO veino-artérielle : réchauffement à 10°C/h, choc récupéré en général à T° > 32°C", "FV sur hypothermie : choc électrique différé à T° ≥ 30°C"] },
      { id: "stopper_rcp_noyade", name: "Arrêter la RCP — pronostic défavorable (mydriase + asystolie)", correct: false, description: "ERREUR ABSOLUE : mydriase et asystolie sont réversibles en cas d'hypothermie. 'No one is dead until warm and dead' — règle d'or de la noyade." }
    ],
    keyPoints: ["'No one is dead until warm and dead' — ne jamais certifier avant réchauffement complet", "Ondes J d'Osborn : pathognomoniques de l'hypothermie sur ECG", "ECMO veino-artérielle : solution idéale si T° < 28°C (réchauffement rapide + soutien hémodynamique)", "K+ > 12 mmol/L = pronostic très défavorable (nécrose cellulaire diffuse) — critère d'arrêt validé", "Défibrillation retardée à T° ≥ 30°C (fibres cardiaques non répondantes en hypothermie sévère)"],
    sourcesFull: ["Szpilman D et al. Drowning. NEJM 2012.", "Truhlár A et al. Cardiac arrest in special circumstances — ERC Guidelines 2021.", "SFAR. Hypothermie accidentelle et noyade. Recommandations 2020."]
  },

  {
    id: "pneumonie_sdra", title: "Pneumonie grave / SDRA", subtitle: "Détresse respiratoire aiguë — pneumonie sévère bilatérale",
    specialty: "Pneumo-Réanimation", difficulty: 3, color: "#6366F1",
    vignette: { headline: "Homme de 52 ans, dyspnée rapidement progressive", context: "Fièvre depuis 5 jours, dyspnée aggravée. SpO2 84% en air ambiant. Rx thorax : infiltrats bilatéraux.", tags: ["Pneumonie", "SDRA", "Détresse respiratoire"] },
    patient: { name: "Karim B., 52 ans", age: 52, sex: "M", context: "Obèse (IMC 38), diabétique type 2, non fumeur. Fièvre depuis 5 jours avec toux sèche puis productive. Admis pour dyspnée explosive avec SpO2 84%.", arriving: "Dyspnée de repos extrême depuis 12h, SpO2 84% en AA, polypnée à 36/min. Confusion légère. Radio thorax : infiltrats bilatéraux diffus." },
    vitals: { pa: "130/80", fc: 118, spo2: 84, fr: 36, temp: 39.2, glasgow: 13 },
    symptoms: ["Dyspnée de repos extrême, SpO2 84% en air ambiant", "Polypnée majeure (36/min) + tirage", "Confusion (hypoxémie sévère)", "Infiltrats bilatéraux à la radio thorax", "Fièvre 5 jours + toux sèche puis productive"],
    ecg: { rythme: "Sinusal", fc: 118, pr: 150, qrs: 80, qt: 380, description: "Tachycardie sinusale réactionnelle à l'hypoxémie sévère. Déviation axiale droite possible si HTAP aiguë.", anomalies: [] },
    physiopathology: { mechanism: "Pneumonie virale ou bactérienne → inflammation alvéolaire → œdème lésionnel → SDRA = hypoxémie réfractaire bilatérale", cascade: ["Agent pathogène (virus, Légionelle, pneumocoque) → infection alvéolaire bilatérale", "Réponse inflammatoire locale massive → lésion de la membrane alvéolo-capillaire", "Œdème alvéolaire non cardiogénique → atélectasies → shunt intra-pulmonaire", "PaO2/FiO2 < 200 = SDRA modéré, < 100 = SDRA sévère", "Aggravation par ventilation à haut volume (volotrauma) : indication VNI puis VM"], consequence: "SDRA sévère : mortalité 40-60%. CNHD ou VNI en première ligne, ventilation invasive si échec." },
    dd: [
      { id: "sdra_dd", label: "SDRA sur pneumonie grave (PaO2/FiO2 < 200)", correct: true, explanation: "Critères Berlin SDRA : début < 7 jours + infiltrats bilatéraux + PaO2/FiO2 < 200 + pas d'OAP cardiogénique." },
      { id: "oap_cardiogenique_sdra", label: "OAP cardiogénique (insuffisance cardiaque aiguë)", correct: false, explanation: "OAP : crépitants, BNP élevé, cardiomégalie, réponse rapide aux diurétiques. Écho cardiaque : dysfonction VG. TnT et BNP différencient." },
      { id: "ep_sdra", label: "Embolie pulmonaire bilatérale massive", correct: false, explanation: "EP massive : hypoxémie + tachycardie + signes droits ECG. Angio-TDM confirme. Pas d'infiltrats diffus bilatéraux." },
      { id: "hemorragie_alvéolaire", label: "Hémorragie alvéolaire diffuse", correct: false, explanation: "Hémoptysie + infiltrats bilatéraux + anémie + LBA sanglant. Contexte auto-immun (vascularite, syndrome Goodpasture)." }
    ],
    gestures: [
      { id: "cnhd_vni_sdra", name: "CNHD ou VNI + décubitus ventral + ATB large spectre", correct: true, description: "Stratégie ventilatoire non invasive en première ligne. Décubitus ventral améliore l'oxygénation de 50-70%.", steps: ["Oxygène : objectif SpO2 92-96% — CNHD 40-60L/min d'emblée", "Si SDRA modéré-sévère : VNI (CPAP 10 cmH2O) — position demi-assise", "Décubitus ventral vigile : améliore le drainage des zones déclives (16h/j recommandé)", "Bilan étiologique : PCR multi-respiratoire, antigènes urinaires Légionelle + pneumocoque, LBA si intubé", "ATB probabiliste : C3G + macrolide (pneumonie communautaire sévère)", "Corticoïdes si SDRA sévère réfractaire > 7j (dexaméthasone 6mg/j)", "Si échec VNI : intubation + VM protectrice (Vt 6mL/kg, Pplat < 30 cmH2O)"] },
      { id: "o2_masque_sdra", name: "Oxygène au masque haute concentration 15L/min et surveillance", correct: false, description: "INSUFFISANT pour un SDRA sévère (SpO2 84%). Le masque HC délivre FiO2 ≈ 60-70% — insuffisant pour un shunt intra-pulmonaire massif. CNHD ou VNI indispensables." }
    ],
    keyPoints: ["Critères SDRA Berlin : début < 7j + infiltrats bilatéraux + PaO2/FiO2 < 200 + contexte non cardiaque", "CNHD en première ligne : confort + SpO2 + évite 50% des intubations", "Décubitus ventral vigile : simple et efficace, améliore l'oxygénation de 50-70% en quelques minutes", "VM protectrice si intubé : Vt 6mL/kg + Pplat < 30 cmH2O (prévention volotrauma)", "Bilan étiologique exhaustif : PCR respiratoire large, sérologies, antigènes urinaires"],
    sourcesFull: ["ARDS Definition Task Force. ARDS Berlin definition. JAMA 2012.", "Frat JP et al. CPAP/High-flow in acute hypoxemia (FLORALI). NEJM 2015.", "Guérin C et al. Prone positioning in ARDS. NEJM 2013."]
  },

  {
    id: "brulure_grave", title: "Brûlures graves étendues", subtitle: "Brûlures > 20% SCT — choc hypovolémique + inhalation",
    specialty: "Réanimation", difficulty: 3, color: "#DC2626",
    vignette: { headline: "Homme de 35 ans, brûlures étendues dans un incendie d'appartement", context: "Retrouvé dans un appartement en feu. Brûlures du visage, torse et membres supérieurs. Voix rauque + suie dans les narines.", tags: ["Brûlures", "Inhalation", "Choc"] },
    patient: { name: "Mehdi K., 35 ans", age: 35, sex: "M", context: "Pas d'ATCD. Incendie d'appartement, présence dans la fumée environ 20 minutes. Brûlures visage + torse antérieur + membres supérieurs.", arriving: "Brûlures du visage, torse antérieur, membres supérieurs. SCT estimé 30%. 2e et 3e degrés. Voix rauque, stridor, suie dans les narines et la gorge. SpO2 88% en air ambiant." },
    vitals: { pa: "100/65", fc: 130, spo2: 88, fr: 28, temp: 36.8, glasgow: 14 },
    symptoms: ["Brûlures visage + torse + membres (SCT ≈ 30%)", "Voix rauque + stridor (brûlure voies aériennes supérieures)", "Suie dans narines et bouche (inhalation de fumée)", "SpO2 88% en air ambiant", "Tachycardie + hypotension (choc précoce)"],
    ecg: { rythme: "Sinusal", fc: 130, pr: 140, qrs: 80, qt: 360, description: "Tachycardie sinusale sur douleur et hypovolémie. Pas d'anomalie spécifique.", anomalies: [] },
    physiopathology: { mechanism: "Brûlures étendues → perte plasmatique massive → hypovolémie → choc. Inhalation → lésion trachéo-bronchique → hypoxémie. Intoxication CO.", cascade: ["Brûlures cutanées → destruction barrière épithéliale → fuite capillaire massive (albumine + eau)", "Fuite plasmatique → hypovolémie → choc des premières 24h", "Inhalation de fumée → suies → lésion épithélium bronchique → œdème + atélectasies", "CO (monoxyde de carbone) → carboxyhémoglobine → hypoxie tissulaire sans hypoxémie mesurable", "Œdème facial progressif → risque d'obstruction laryngée en quelques heures"], consequence: "Sans intubation précoce : obstruction laryngée irréductible par l'œdème. Sans remplissage Parkland : choc irréversible à H6." },
    dd: [
      { id: "brulure_dd", label: "Brûlures graves (> 20% SCT) avec syndrome d'inhalation", correct: true, explanation: "SCT > 20% + voix rauque + suie = brûlures graves avec inhalation jusqu'à preuve du contraire. Intubation précoce avant l'œdème." },
      { id: "inhalation_seule", label: "Intoxication au CO isolée sans brûlures significatives", correct: false, explanation: "CO : symptômes centraux (céphalées, confusion, coma) sans brûlures étendues. SpO2 normale (pulse-oxymètre ne détecte pas le CO). Gazométrie : COHb élevée." },
      { id: "choc_anaphylactique_chimique", label: "Choc anaphylactique sur brûlure chimique", correct: false, explanation: "Anaphylaxie : urticaire, bronchospasme, pas de brûlures cutanées thermiques. Contexte différent (solvant, acide, base)." }
    ],
    gestures: [
      { id: "intubation_remplissage_brulure", name: "Intubation précoce + formule de Parkland + O2 haute concentration", correct: true, description: "L'intubation DOIT précéder l'œdème laryngé — fenêtre courte (H0-H2). Remplissage Parkland : 4 mL/kg/% SCT en 24h.", steps: ["O2 haute concentration 15L/min IMMÉDIATEMENT : dilue le CO (T½ COHb sous O2 : 60-90 min vs 5h en AA)", "Intubation oro-trachéale PRÉCOCE si voix rauque / stridor / brûlures faciales — ne pas attendre l'obstruction", "Formule de Parkland : 4 mL/kg/% SCT de Ringer Lactate en 24h (50% dans les 8 premières heures)", "Antalgie : morphine titrée IV (10 mg toutes les 5 min selon EVA)", "Calcul précis SCT : règle des 9 de Wallace, exclure le 1er degré", "Sondage urinaire : diurèse cible 0,5-1 mL/kg/h", "Contact précoce centre de traitement des brûlés (CSST)", "Gazométrie + COHb : si COHb > 25% → oxygène hyperbare discuté"] },
      { id: "remplissage_seul", name: "Remplissage + pansements + O2 au masque — pas d'intubation", correct: false, description: "ERREUR GRAVE : l'œdème laryngé peut rendre l'intubation impossible en 2-3h. Intubation précoce si signe d'atteinte des VAS." }
    ],
    keyPoints: ["Intubation PRÉCOCE si brûlures du visage + voix rauque — l'œdème peut fermer la glotte en 2-3h", "O2 haute concentration dès l'arrivée : réduit la T½ du CO de 5h à 60-90 minutes", "Formule de Parkland : 4 mL/kg/% SCT de Ringer Lactate en 24h (50% en 8h)", "Diurèse cible 0,5-1 mL/kg/h : meilleur reflet de l'adéquation du remplissage", "SCT > 20% + inhalation = transfert immédiat en centre spécialisé brûlés (CSST)"],
    sourcesFull: ["Jeschke MG et al. Burn injury. Nat Rev Dis Primers 2020.", "SFAR. Prise en charge initiale du brûlé grave. Recommandations 2020.", "ISBI Practice Guidelines Burn Care. Burns 2016."]
  },

].filter(Boolean)
