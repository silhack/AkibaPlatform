import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.database import init_db
from contextlib import asynccontextmanager
from app.routers import actualites, produits, contacts

@asynccontextmanager
async def lifespan(app: FastAPI):
  init_db()
  yield

app = FastAPI(lifespan=lifespan)

os.makedirs("uploads", exist_ok=True)

app.mount("/app/static", StaticFiles(directory="static"), name="static")

#Configuration CORS
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173"],  # Frontends autorisés
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

#Configuration des routers
app.include_router(actualites.router)
app.include_router(contacts.router)
app.include_router(produits.router)

#Points d'entrée
@app.get("/")
def read_root():
  return {"message": "Bienvenue: API is running 🚀"}