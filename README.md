# Coreline Alliance Platform

Coreline est une alliance internationale d'experts en finance, agro-industrie, énergie et technologies œuvrant pour accélérer le développement de projets durables au service des communautés locales africaines.

**Le projet met en avant une approche institutionnelle et premium, alignant identité visuelle "Bleu et Or" et normes d'accessibilité (A11y).**

## 🚀 Fonctionnalités Principales
- **Architecture Multi-pages :** Navigation optimisée par React Router v7.
- **Design Institutionnel (Bleu & Or) :** Palette de couleurs premium reflétant l'excellence et la pérennité.
- **Accessibilité & SEO (Score >= 8/10) :** Sémantique HTML rigoureuse, métadonnées OpenGraph complètes, et labels ARIA.
- **Fluid Mockups :** Formulaires et interfaces réactives, gérés avec les hooks React et Framer Motion pour les animations fluides.

## 📁 Structure du Projet

```text
client/
├── public/                 # Assets (Logos, Photos comme ceo.jpeg) & Fichiers SEO (robots.txt, sitemap.xml)
├── src/
│   ├── components/         # Composants Modulaires Réutilisables
│   │   ├── home/           # Sections des différentes pages (Hero, Team, Contact...)
│   │   └── layout/         # Composants globaux persistants (Navbar, Footer)
│   ├── pages/              # Pages principales (Home, Vision, Actualités)
│   ├── App.jsx             # Configuration des routes (React Router)
│   └── coreline.css        # Système de Design (Styles, Grilles Bento, Variables de Thème)
```

## 🛠️ Technologies Utilisées
- **React 19**
- **React Router 7**
- **Vite**
- **Framer Motion**
- **Lucide React** & **React Icons**

## 🔧 Installation et Lancement

1. Cloner le projet et installer les dépendances (Note : les dépendances inutiles comme Tailwind ont été nettoyées pour privilégier le CSS pur premium).
```bash
cd client
npm install
```

2. Démarrer le serveur de développement :
```bash
npm run dev
```

3. Le site sera disponible à l'adresse locale standard générée par Vite (généralement `http://localhost:5173`).

---
Développé avec 💙 et 🏅 pour l'initiative IYWF 2026.
