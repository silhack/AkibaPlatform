import uuid
from typing import Optional
from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlmodel import Session
from app.crud.actualites import (
    create_actualites,
    delete_actualite,
    get_actualite,
    get_all_actualites,
    update_actualites,
    delete_all_actualites
)
from app.database import get_db
from app.models.actualites import ActualitesCreate, ActualitesPublic, ActualitesUpdate, Categorie, convert_actualite_to_public

router = APIRouter(tags=["actualites"], prefix="/actualites")


@router.post("/", response_model=ActualitesPublic, status_code=status.HTTP_201_CREATED)
def route_create_actualites(
    titre: str = Form(...),
    description: str = Form(...),
    sources: list[str] = Form([]),
    categorie: Categorie = Form(...),
    image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    actualites_data = ActualitesCreate(titre=titre, description=description, sources=sources, categorie=categorie)
    db_actualite = create_actualites(db, actualites_data, image)
    return convert_actualite_to_public(db_actualite)


@router.get("/", response_model=list[ActualitesPublic], status_code=status.HTTP_200_OK)
def route_get_actualites(db: Session = Depends(get_db)):
    actualites = get_all_actualites(db)
    return [convert_actualite_to_public(actu) for actu in actualites]


@router.get("/{id_actualites}", response_model=ActualitesPublic, status_code=status.HTTP_200_OK)
def route_get_actualite(id_actualites: uuid.UUID, db: Session = Depends(get_db)):
    actu = get_actualite(db, id_actualites)
    return convert_actualite_to_public(actu)


@router.patch("/{id_actualites}", response_model=ActualitesPublic, status_code=status.HTTP_200_OK)
def route_update_actualites(
    id_actualites: uuid.UUID,
    titre: str | None = Form(None),
    description: str | None = Form(None),
    sources: list[str] | None = Form(None),
    categorie: Categorie | None = Form(None),
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    update_data = ActualitesUpdate(
        titre=titre,
        description=description,
        sources=sources,
        categorie=categorie
    )
    actu = update_actualites(db, id_actualites, update_data, image)
    return convert_actualite_to_public(actu)


@router.delete("/{id_actualites}", status_code=status.HTTP_200_OK)
def route_delete_actualite(id_actualites: uuid.UUID, db: Session = Depends(get_db)):
    return delete_actualite(db, id_actualites)


@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_actualites(db: Session = Depends(get_db)):
    return delete_all_actualites(db)