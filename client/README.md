# Akiba Solution — Site Vitrine

Ce dossier contient le **frontend React** du site vitrine d’Akiba Solution, une entreprise technologique au service des PME agroalimentaires africaines.

## Tech Stack

- **React 19** + **Vite**
- **TailwindCSS** pour le style
- **Framer Motion** pour les animations
- **React Router** pour la navigation
- Architecture modulaire par sections (`components`, `pages`, `data`, `assets`)
- Responsive design mobile-first


## Fonctionnalités principales

- Page d’accueil dynamique et animée
- Présentation des services et expertises
- Section produits avec détails
- Intégration des partenaires (logos + fiches descriptives)
- FAQ, actualités et appel à l’action
- Animations fluides à l’entrée des sections
- Structure SEO-friendly


## Structure du projet

```bash
src/
├── assets/         # Images, icônes, illustrations
├── components/     # Composants réutilisables par section (ForHome, ForAbout, etc.)
├── data/           # Données statiques (produits, services, partenaires, etc.)
├── pages/          # Pages principales (home, produits, contact, etc.)
├── App.jsx         # Configuration des routes
└── main.jsx        # Point d'entrée React
```

## Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/silhack/AkibaPlatform.git
cd AkibaPlatform
```

### 2. Installer les dépendances

```bash
cd client
npm install
```

### 3. Démarrer le serveur de développement

```bash
npm run dev
```

Accéder à [http://localhost:5173](http://localhost:5173)

---

## API Backend

> Ce frontend consomme l’API REST du backend [Akiba API](../server/README.md).
> Assurez-vous que le backend tourne avant d’utiliser les fonctionnalités connectées (ex. : formulaire de contact).


## Déploiement

Le site peut être déployé sur :


```bash
npm run build
```

## Auteurs

* **Akiba Solution — [www.akibasolution.com](http://www.akibasolution.com)**
