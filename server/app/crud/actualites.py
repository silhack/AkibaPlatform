from datetime import datetime, timezone
from sqlmodel import Session, delete, select
from app.models.actualites import Actualites, ActualitesCreate, ActualitesUpdate, Source
from app.utils.utils_actualites import save_image, delete_image_file
from fastapi import HTTPException, UploadFile
import uuid

def get_or_create_sources(db: Session, sources_noms: list[str]):
    sources = []
    for nom in sources_noms:
        source = db.exec(select(Source).where(Source.nom == nom)).first()
        if not source:
            source = Source(nom=nom)
            db.add(source)
            db.commit()
            db.refresh(source)
        sources.append(source)
    return sources

def create_actualites(db: Session, actualites_data: ActualitesCreate, image: UploadFile = None):
    image_url = save_image(image) if image else None
    data = actualites_data.model_dump(exclude={"image", "sources"})
    sources_objs = get_or_create_sources(db, actualites_data.sources)

    db_actualites = Actualites(**data, image=image_url, sources=sources_objs)

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

    update_data = actualites_update.model_dump(exclude_unset=True)

    if "titre" in update_data and update_data["titre"] == "":
        update_data["titre"] = db_actualite.titre
    if "description" in update_data and update_data["description"] == "":
        update_data["description"] = db_actualite.description
    if "categorie" in update_data and update_data["categorie"] == "":
        update_data["categorie"] = db_actualite.categorie

    if image:
        if db_actualite.image:
            delete_image_file(db_actualite.image)
        db_actualite.image = save_image(image)
        update_data["image"] = db_actualite.image

    if "sources" in update_data:
        sources_noms = update_data.pop("sources")
        
        nouveaux_sources = get_or_create_sources(db, sources_noms)

        for source in nouveaux_sources:
            if source not in db_actualite.sources:
                db_actualite.sources.append(source)

    update_data["updated_at"] = datetime.now(timezone.utc)

    db_actualite.sqlmodel_update(update_data)

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

    orphans = db.exec(select(Source).where(~Source.actualites.any())).all()
    for source in orphans:
        db.delete(source)
    db.commit()
    return {"message": "Tous les articles ont été supprimés"}