from sqlmodel import Session, delete, select
from app.models.actualites import Actualites, ActualitesCreate, ActualitesUpdate
from app.utils.utils_actualites import save_image, delete_image_file
from fastapi import HTTPException, UploadFile
import uuid


def create_actualites(db: Session, actualites_data: ActualitesCreate, image: UploadFile = None):
    image_url = save_image(image) if image else None
    data = actualites_data.model_dump(exclude={"image"})
    db_actualites = Actualites(**data, image=image_url)

    db.add(db_actualites)
    db.commit()
    db.refresh(db_actualites)
    return db_actualites


def get_all_actualites(db: Session):
    return db.exec(select(Actualites)).all()


def get_actualite(db: Session, id_actualites: uuid.UUID):
    actualite = db.get(Actualites, id_actualites)
    if not actualite:
        raise HTTPException(status_code=404, detail="Actualité non trouvée")
    return actualite


def update_actualites(
    db: Session,
    id_actualites: uuid.UUID,
    actualites_update: ActualitesUpdate,
    image: UploadFile = None
):
    db_actualite = get_actualite(db, id_actualites)

    data = actualites_update.model_dump(exclude_unset=True)

    if image:
        if db_actualite.image:
            delete_image_file(db_actualite.image)  # Supprime l'ancien fichier
        db_actualite.image = save_image(image) 
        data["image"] = db_actualite.image

    for key, value in data.items():
        setattr(db_actualite, key, value)

    db_actualite.sqlmodel_update(data)

    db.add(db_actualite)
    db.commit()
    db.refresh(db_actualite)
    return db_actualite


def delete_actualite(db: Session, id_actualites: uuid.UUID):
    db_actualite = get_actualite(db, id_actualites)

    if db_actualite.image:
        delete_image_file(db_actualite.image)

    db.delete(db_actualite)
    db.commit()
    return {"message": f"Actualité '{db_actualite.titre}' supprimée"}


def delete_all_actualites(db: Session):
    actualites = db.exec(select(Actualites)).all()

    for actualite in actualites:
        if actualite.image:
            delete_image_file(actualite.image)
        db.delete(actualite)

    db.commit()
    return {"message": "Tous les articles ont été supprimés"}