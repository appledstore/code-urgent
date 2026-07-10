# Politique de Confidentialité — Code Urgent

*Dernière mise à jour : juillet 2026*  
*Conforme au RGPD (Règlement UE 2016/679)*

## 1. Responsable du traitement

Dr [Prénom NOM]  
[Adresse professionnelle]  
Email : contact@docteurled.life

## 2. Données collectées

### Données de compte (obligatoires)
- Adresse email
- Mot de passe (chiffré, jamais accessible en clair)
- Prénom et nom (optionnel à l'inscription)

### Données de progression (générées par l'utilisation)
- Cas cliniques complétés
- Scores obtenus
- Mode utilisé (médecin / IOA)
- Date de complétion

### Données de paiement
- Traitées exclusivement par **Stripe** — Code Urgent ne stocke aucune donnée bancaire

### Données techniques
- Adresse IP (logs serveur Vercel, conservation 30 jours)
- Type de navigateur / appareil

## 3. Finalités du traitement

| Données | Finalité | Base légale |
|---------|----------|-------------|
| Email + mot de passe | Authentification et accès au compte | Exécution du contrat |
| Progression | Synchronisation entre appareils | Intérêt légitime |
| Email | Envoi de la confirmation d'achat | Exécution du contrat |
| Email | Informations sur les mises à jour | Consentement |

## 4. Durée de conservation

- **Données de compte** : durée de vie du compte + 3 ans après la dernière connexion
- **Données de progression** : durée de vie du compte
- **Données de paiement** : 10 ans (obligation comptable, gérées par Stripe)

## 5. Destinataires des données

Vos données sont transmises uniquement à :

- **Supabase** (hébergement base de données) — serveurs en Europe (Frankfurt)
- **Vercel** (hébergement application) — serveurs en Europe
- **Stripe** (paiement) — données bancaires uniquement

Aucune donnée n'est vendue ou transmise à des tiers à des fins commerciales.

## 6. Vos droits (RGPD)

Vous disposez des droits suivants :
- **Accès** : obtenir une copie de vos données
- **Rectification** : corriger vos données inexactes
- **Suppression** : demander la suppression de votre compte et données
- **Portabilité** : recevoir vos données dans un format structuré
- **Opposition** : vous opposer à certains traitements
- **Limitation** : demander la limitation du traitement

**Pour exercer vos droits :** contact@docteurled.life  
Réponse sous 30 jours maximum.

Vous pouvez également introduire une réclamation auprès de la **CNIL** : www.cnil.fr

## 7. Cookies

Code Urgent utilise uniquement :
- Un cookie de session d'authentification (nécessaire au fonctionnement)
- Le stockage local (localStorage) pour vos préférences (thème, langue)

Aucun cookie publicitaire ou de tracking tiers n'est utilisé.

## 8. Sécurité

- Connexions chiffrées HTTPS (TLS 1.3)
- Mots de passe hachés (bcrypt via Supabase Auth)
- Row Level Security activé sur la base de données
- Accès aux données limité au strict nécessaire

## 9. Modifications

Toute modification substantielle sera notifiée par email avant son entrée en vigueur.

## 10. Contact DPO

Pour toute question relative à la protection de vos données :  
contact@docteurled.life
