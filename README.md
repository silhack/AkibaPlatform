# Site Vitrine AKIBA SOLUTION

**Akiba Solution** est une entreprise technologique dédiée à la structuration, la digitalisation et au financement des PME agroalimentaires africaines.

Ce projet se compose de deux parties :
- Un **site vitrine** moderne (frontend React)
- Une **API backend** robuste (FastAPI + PostgreSQL)


## Arborescence du projet

```bash
AkibaPlatform/
├── client/          # Site vitrine React (frontend)
├── server/          # API FastAPI (backend)
├── README.md        # Ce fichier global
```


## Frontend – Site Vitrine

Le frontend est un site vitrine moderne développé avec **React 19**, **Vite** et **TailwindCSS**. Il présente l’entreprise, ses services, ses produits, ses partenaires et propose un formulaire de contact dynamique.

Voir le [README du frontend](./client/README.md)


## Backend – API REST FastAPI

Le backend utilise **FastAPI**, **SQLModel** et **PostgreSQL** pour :

* gérer les actualités, produits, formulaires

Voir le [README du backend](./server/README.md)


## Lancer le projet localement

### 1. Cloner le dépôt

```bash
git clone https://github.com/silhack/AkibaPlatform.git
cd AkibaPlatform
```


### 2. Lancer le backend

```bash
cd server
python -m venv .venv
source .venv/bin/activate  # ou .venv\Scripts\activate sous Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

> Assure-toi d’avoir PostgreSQL installé et une base configurée avec `.env`


### 3. Lancer le frontend

```bash
cd client
npm install
npm run dev
```

> Accès à l’application sur `http://localhost:5173`
> L’API est disponible sur `http://localhost:8000/docs`


## Déploiement

Le projet peut être déployé :

* côté **frontend** sur Vercel, Netlify ou serveur Nginx
* côté **backend** via Docker ou serveur Python (Gunicorn/Uvicorn)


## Auteurs

* **Akiba Solution** — [www.akibasolution.com](http://www.akibasolution.com)


## Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.



