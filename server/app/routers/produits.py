import uuid
from typing import Optional
from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlmodel import Session
from app.crud.produits import (
    create_produit,
    delete_produit,
    get_produit,
    get_all_produits,
    update_produit,
    delete_all_produits
)
from app.database import get_db
from app.models.produits import ProduitsCreate, ProduitsPublic, ProduitsUpdate, convert_produit_to_public

router = APIRouter(tags=["produits"], prefix="/produits")

#POST - Ajout d'un produit à la DB
@router.post("/", response_model=ProduitsPublic, status_code=status.HTTP_201_CREATED)
def route_create_produit(
    nom: str = Form(...),
    description: str = Form(...),
    accroche: str = Form(...),
    avantages: list[str] = Form([]),
    image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    produits_data = ProduitsCreate(
        nom=nom,
        description=description,
        accroche=accroche,
        avantages=avantages
    )
    db_produit = create_produit(db, produits_data, image)
    return convert_produit_to_public(db_produit)

#GET - Récuperer tous les produits depuis la DB
@router.get("/", response_model=list[ProduitsPublic], status_code=status.HTTP_200_OK)
def route_get_produits(db: Session = Depends(get_db)):
    produits = get_all_produits(db)
    return [convert_produit_to_public(produit) for produit in produits]

#GET - Récuperer un produit depuis la DB
@router.get("/{id_produit}", response_model=ProduitsPublic, status_code=status.HTTP_200_OK)
def route_get_produit(id_produit: uuid.UUID, db: Session = Depends(get_db)):
    produit = get_produit(db, id_produit)
    return convert_produit_to_public(produit)

#PATCH - Mettre à jour un produit depuis la DB
@router.patch("/{id_produit}", response_model=ProduitsPublic, status_code=status.HTTP_200_OK)
def route_update_produit(
    id_produit: uuid.UUID,
    nom: str | None = Form(None),
    description: str | None = Form(None),
    accroche: str | None = Form(None),
    avantages: list[str] | None = Form(None),
    image: UploadFile | None = File(None),
    db: Session = Depends(get_db)
):
    update_data = ProduitsUpdate(
        nom=nom,
        description=description,
        accroche=accroche,
        avantages=avantages
    )
    produit = update_produit(db, id_produit, update_data, image)
    return convert_produit_to_public(produit)

#DELETE - Supprimer un produit depuis la DB
@router.delete("/{id_produit}", status_code=status.HTTP_200_OK)
def route_delete_produit(id_produit: uuid.UUID, db: Session = Depends(get_db)):
    return delete_produit(db, id_produit)

#DELETE - Supprimer tous les produits de la DB
@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_produits(db: Session = Depends(get_db)):
    return delete_all_produits(db)