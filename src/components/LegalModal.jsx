const LEGAL_CONTENT = {
  'Mentions légales': `
## Éditeur de l'application

**Nom de l'application :** Code Urgent
**URL :** https://code-urgent.docteurled.life
**Éditeur :** Dr Laurent Dana
**Email de contact :** contact@docteurled.life

## Hébergement

**Hébergeur :** Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, USA

**Base de données :** Supabase Inc. — Serveurs Europe (Frankfurt)

## Propriété intellectuelle

L'ensemble du contenu de l'application Code Urgent (cas cliniques, textes, interface, code source) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable de l'éditeur.

## Responsabilité médicale

Code Urgent est une application de **formation et d'entraînement** destinée aux professionnels et étudiants en santé. Elle ne constitue en aucun cas un outil d'aide à la décision clinique en situation réelle. Les cas cliniques présentés sont fictifs et à but pédagogique uniquement.

## Sources

Les contenus médicaux s'appuient sur les recommandations de la SFMU, ESC, HAS, Cochrane et autres sociétés savantes citées dans chaque cas clinique.
  `,

  'CGU': `
## Conditions Générales d'Utilisation

*Dernière mise à jour : juillet 2026*

**Article 1 — Objet**
Les présentes CGU régissent l'accès et l'utilisation de l'application Code Urgent, accessible à l'adresse https://code-urgent.docteurled.life.

**Article 2 — Public cible**
Code Urgent est destiné aux médecins, internes, infirmiers IOA et étudiants en santé.

**Article 3 — Création de compte**
L'accès nécessite la création d'un compte avec une adresse email valide. L'utilisateur s'engage à maintenir la confidentialité de ses identifiants et à ne pas partager son compte.

**Article 4 — Accès gratuit et premium**
3 cas cliniques sont accessibles gratuitement. L'accès à l'intégralité des 50 cas nécessite un abonnement payant.

**Article 5 — Finalité pédagogique exclusive**
Code Urgent est un outil de simulation pédagogique. Il ne constitue pas un outil d'aide à la décision médicale en situation réelle et ne remplace pas le jugement clinique du professionnel de santé.

**Article 6 — Propriété intellectuelle**
Tous les contenus sont la propriété exclusive de l'éditeur. Toute reproduction ou redistribution est strictement interdite.

**Article 7 — Comportements interdits**
Extraction automatisée des contenus, partage d'identifiants, utilisation commerciale sans autorisation.

**Article 8 — Droit applicable**
Droit français. Tribunaux français compétents en cas de litige.

**Contact :** contact@docteurled.life
  `,

  'CGV': `
## Conditions Générales de Vente

*Dernière mise à jour : juillet 2026*

**Article 1 — Vendeur**
Dr Laurent Dana — contact@docteurled.life

**Article 2 — Tarifs**

| Offre | Prix |
|-------|------|
| Freemium (3 cas) | Gratuit |
| Accès à vie (50 cas) | 39,00 € TTC |
| Abonnement annuel | 29,00 € TTC / an |

**Article 3 — Paiement**
Paiement sécurisé par Stripe (certifié PCI-DSS). Moyens acceptés : carte bancaire, Apple Pay, Google Pay.

**Article 4 — Accès au service**
L'accès premium est activé immédiatement après confirmation du paiement. Il est strictement personnel et non transférable.

**Article 5 — Droit de rétractation**
Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques dont l'exécution a commencé avec l'accord exprès du consommateur.

À titre commercial, remboursement accepté dans les 48h si moins de 5 cas premium consultés.

**Article 6 — Abonnement annuel**
Renouvellement automatique. Résiliation possible à tout moment depuis l'espace personnel, avec effet à la fin de la période en cours.

**Article 7 — Médiation**
En cas de litige : CM2C — www.cm2c.net

**Contact :** contact@docteurled.life
  `,

  'Confidentialité': `
## Politique de Confidentialité

*Dernière mise à jour : juillet 2026 — Conforme au RGPD*

**Responsable du traitement :** Dr Laurent Dana — contact@docteurled.life

**Données collectées**
- Adresse email et mot de passe (chiffré)
- Progression : cas complétés, scores, mode utilisé
- Données de paiement : traitées exclusivement par Stripe

**Finalités**
- Authentification et accès au compte
- Synchronisation de la progression entre appareils
- Confirmation d'achat

**Conservation**
- Données de compte : durée de vie du compte + 3 ans
- Données de paiement : 10 ans (obligation comptable, gérées par Stripe)

**Vos droits (RGPD)**
Accès, rectification, suppression, portabilité, opposition.
Demande à adresser à : contact@docteurled.life — Réponse sous 30 jours.
Réclamation possible auprès de la CNIL : www.cnil.fr

**Cookies**
Uniquement un cookie de session d'authentification et le localStorage pour vos préférences (thème, langue). Aucun cookie publicitaire.

**Sécurité**
Connexions HTTPS, mots de passe hachés, Row Level Security sur la base de données.

**Hébergeurs**
Supabase (Frankfurt, Europe) · Vercel (Europe)
  `
}

export default function LegalModal({ page, onClose }) {
  if (!page) return null
  const content = LEGAL_CONTENT[page] || ''

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', margin: '20px 0 10px' }}>{line.slice(3)}</h2>
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{ fontWeight: 700, color: 'var(--text)', margin: '12px 0 4px' }}>{line.slice(2, -2)}</p>
      if (line.startsWith('| ') && line.includes('|')) {
        const cells = line.split('|').filter(c => c.trim())
        if (line.includes('---')) return null
        return (
          <div key={i} style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border2)' }}>
            {cells.map((c, j) => (
              <div key={j} style={{ flex: 1, padding: '6px 8px', fontSize: 12, color: j === 0 ? 'var(--text)' : 'var(--text2)' }}>{c.trim()}</div>
            ))}
          </div>
        )
      }
      if (line.startsWith('- ')) return <div key={i} style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 4, paddingLeft: 8 }}>• {line.slice(2)}</div>
      if (line.trim() === '') return <div key={i} style={{ height: 6 }} />
      return <p key={i} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, margin: '4px 0' }}>{line}</p>
    })
  }

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
        borderRadius: '20px 20px 0 0', maxHeight: '88dvh',
        display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px', borderBottom: '1px solid var(--border2)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0
        }}>
          <div style={{ width: 40, height: 4, background: 'var(--border)', borderRadius: 2, position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)' }} />
          <div style={{ fontSize: 15, fontWeight: 700 }}>{page}</div>
          <button onClick={onClose} style={{
            background: 'var(--bg3)', border: 'none', borderRadius: '50%',
            width: 28, height: 28, cursor: 'pointer', color: 'var(--text2)', fontSize: 16
          }}>×</button>
        </div>
        {/* Content */}
        <div style={{ overflowY: 'auto', padding: '16px 20px 40px' }}>
          {renderContent(content)}
        </div>
      </div>
    </div>
  )
}
