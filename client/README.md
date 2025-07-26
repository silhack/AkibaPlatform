# Site Vitrine AKIBA - Application Client

Ce dossier contient l'**application frontend React** du site vitrine d'AKIBA, incluant un panneau d'administration complet pour la gestion du contenu.

## Technologies

- **React 19.0.0** avec **Vite 6.2.0**
- **Tailwind CSS 4.0.15** pour le styling
- **Framer Motion 12.6.2** pour les animations
- **React Router 7.4.0** pour la navigation
- **Axios 1.9.0** pour les appels API
- **React Icons 5.5.0** pour les icônes
- Architecture modulaire et responsive design

## Fonctionnalités Principales

### Site Public
- Page d'accueil dynamique avec animations
- Présentation des services et solutions d'AKIBA
- Catalogue de produits avec pages détaillées
- Section actualités et articles
- Formulaire de contact
- Pages à propos et services
- Design responsive mobile-first

### Panneau d'Administration
- **Authentification sécurisée** avec gestion de tokens
- **Gestion des actualités** (CRUD complet avec upload d'images)
- **Gestion des produits** (CRUD avec avantages multiples)
- **Gestion des contacts** (visualisation et modération)
- **Gestion des administrateurs** (création/suppression de comptes)
- Interface intuitive avec navigation par onglets

## Structure du Projet

```
src/
├── components/
│   ├── admin-panel/       # Composants du panneau d'administration
│   │   ├── ActualitesTab.jsx    # Gestion des actualités
│   │   ├── ProduitsTab.jsx      # Gestion des produits
│   │   ├── ContactsTab.jsx      # Gestion des contacts
│   │   └── AdminsTab.jsx        # Gestion des administrateurs
│   ├── home/              # Composants page d'accueil
│   ├── layout/            # Layout et navigation
│   ├── contact/           # Composants contact
│   ├── produits/          # Composants produits
│   ├── news/              # Composants actualités
│   └── ui/                # Composants UI réutilisables
├── pages/                 # Pages principales de l'application
├── context/               # Contextes React (AuthContext)
├── services/              # Services API (axiosClient)
├── data/                  # Données statiques et configuration
└── utils/                 # Fonctions utilitaires
```

## Panneau d'Administration - Fonctionnalités Détaillées

### Accès Admin
- **URL d'accès**: `/admin`
- **Authentification**: Token JWT stocké en localStorage
- **Route protégée**: Redirection automatique vers login si non authentifié

### Onglets de Gestion

#### 1. Actualités (`components/admin-panel/ActualitesTab.jsx`)
- **Création d'articles** avec titre, catégorie, description
- **Upload d'images** avec prévisualisation
- **Gestion de sources multiples** (ajout/suppression dynamique)
- **Catégories disponibles**: Études, Analyses & tendances, Évènements
- **Actions**: Créer, modifier, supprimer avec confirmation

#### 2. Produits (`components/admin-panel/ProduitsTab.jsx`)
- **Gestion complète des produits** (nom, accroche, description)
- **Upload d'images produits**
- **Avantages multiples** ajoutables dynamiquement
- **Interface tableau responsive**
- **Modales d'édition** avec validation

#### 3. Contacts (`components/admin-panel/ContactsTab.jsx`)
- **Visualisation des messages** de contact du site
- **Champs**: nom, email, téléphone, objet, message
- **Gestion des demandes** (consultation, modification, suppression)
- **Historique avec dates** de création/modification

#### 4. Administrateurs (`components/admin-panel/AdminsTab.jsx`)
- **Création de comptes admin** (nom d'utilisateur, mot de passe)
- **Gestion des permissions** administrateur
- **Suppression sécurisée** avec confirmation
- **Affichage des informations** de dernière connexion

### Sécurité Admin
- **Authentification par token JWT**
- **Validation côté client** avant envoi
- **Protection des routes** sensibles
- **Confirmation pour actions destructives**
- **Gestion automatique des sessions**

## Installation et Démarrage

### Prérequis
- Node.js 18+ et npm
- Backend API en fonctionnement
- Configuration des variables d'environnement

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd client

# Installer les dépendances
npm install

# Démarrer en développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement (port 5173)
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

## Configuration

### Variables d'Environnement
Configurer l'URL de l'API backend dans `src/data/config.js`

### Authentification
- Context d'authentification global (`src/context/AuthContext.jsx`)
- Gestion automatique des tokens
- Redirection et logout automatique

## Architecture Admin

### Flux d'Authentification
1. **Login** → Vérification credentials → Stockage token
2. **Navigation** → Vérification token → Accès aux fonctionnalités
3. **Actions CRUD** → Validation → API call → Mise à jour interface
4. **Logout** → Suppression token → Redirection

### Gestion d'État
- **React Context** pour l'authentification
- **State local** pour les formulaires et modales
- **Gestion d'erreurs** avec feedback utilisateur
- **Loading states** pour les opérations asynchrones

## Déploiement

### Build de Production
```bash
npm run build
# Génère le dossier dist/ prêt pour déploiement
```

### Docker
```bash
# Build de l'image
docker build -t akiba-client .

# Lancement
docker run -p 80:80 akiba-client
```

## Contribution
1. Fork du projet
2. Branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Pull Request

## Support
Pour toute question ou assistance technique, contactez l'équipe de développement AKIBA.
