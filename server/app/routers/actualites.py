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
from app.models.actualites import ActualitesCreate, ActualitesPublic, ActualitesUpdate, Categorie

router = APIRouter(tags=["actualites"], prefix="/actualites")


@router.post("/", response_model=ActualitesPublic, status_code=status.HTTP_201_CREATED)
def route_create_actualites(
    titre: str = Form(...),
    description: str = Form(...),
    source: str = Form(...),
    categorie: Categorie = Form(...),
    image: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    actualites_data = ActualitesCreate(titre=titre, description=description, source=source, categorie=categorie)
    return create_actualites(db, actualites_data, image)


@router.get("/", response_model=list[ActualitesPublic], status_code=status.HTTP_200_OK)
def route_get_actualites(db: Session = Depends(get_db)):
    return get_all_actualites(db)


@router.get("/{id_actualites}", response_model=ActualitesPublic, status_code=status.HTTP_200_OK)
def route_get_actualite(id_actualites: uuid.UUID, db: Session = Depends(get_db)):
    return get_actualite(db, id_actualites)


@router.patch("/{id_actualites}", response_model=ActualitesPublic, status_code=status.HTTP_200_OK)
def route_update_actualites(
    id_actualites: uuid.UUID,
    titre: str | None = Form(None),
    description: str | None = Form(None),
    source: str | None = Form(None),
    categorie: Categorie | None = Form(None),
    image: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    update_data = ActualitesUpdate(
        titre=titre,
        description=description,
        source=source,
        categorie=categorie
    )
    return update_actualites(db, id_actualites, update_data, image)


@router.delete("/{id_actualites}", status_code=status.HTTP_200_OK)
def route_delete_actualite(id_actualites: uuid.UUID, db: Session = Depends(get_db)):
    return delete_actualite(db, id_actualites)


@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_actualites(db: Session = Depends(get_db)):
    return delete_all_actualites(db)