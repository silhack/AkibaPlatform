from sqlmodel import Session, select
from app.models.produits import Produits, ProduitsCreate, ProduitsUpdate, Avantage
from app.utils.utils_produits import save_image, delete_image_file
from fastapi import HTTPException, UploadFile
import uuid

def get_or_create_avantages(db: Session, avantages_noms: list[str]):
    avantages = []
    for nom in avantages_noms:
        avantage = db.exec(select(Avantage).where(Avantage.nom == nom)).first()
        if not avantage:
            avantage = Avantage(nom=nom)
            db.add(avantage)
            db.commit()
            db.refresh(avantage)
        avantages.append(avantage)
    return avantages


def create_produit(db: Session, produits_data: ProduitsCreate, image: UploadFile = None):
    image_url = save_image(image) if image else None
    data = produits_data.model_dump(exclude={"image", "avantages"})
    avantages_objs = get_or_create_avantages(db, produits_data.avantages)

    db_produit = Produits(**data, image=image_url, avantages=avantages_objs)

    db.add(db_produit)
    db.commit()
    db.refresh(db_produit)

    return db_produit


def get_all_produits(db: Session):
    return db.exec(select(Produits)).all()


def get_produit(db: Session, id_produit: uuid.UUID):
    produit = db.get(Produits, id_produit)
    if not produit:
        raise HTTPException(status_code=404, detail="Produit non trouvé")
    return produit


def update_produit(
    db: Session,
    id_produit: uuid.UUID,
    produits_update: ProduitsUpdate,
    image: UploadFile = None
):
    db_produit = get_produit(db, id_produit) 

    update_data = produits_update.model_dump(exclude_unset=True)

    if "nom" in update_data and update_data["nom"] == "":
        update_data["nom"] = db_produit.nom
    if "description" in update_data and update_data["description"] == "":
        update_data["description"] = db_produit.description
    if "accroche" in update_data and update_data["accroche"] == "":
        update_data["accroche"] = db_produit.accroche

    if image:
        if db_produit.image:
            delete_image_file(db_produit.image)
        db_produit.image = save_image(image)
        update_data["image"] = db_produit.image

    if "avantages" in update_data:
        avantages_noms = update_data.pop("avantages")
        
        nouveaux_avantages = get_or_create_avantages(db, avantages_noms)

        for avantage in nouveaux_avantages:
            if avantage not in db_produit.avantages:
                db_produit.avantages.append(avantage)

    db_produit.sqlmodel_update(update_data)

    db.add(db_produit)
    db.commit()
    db.refresh(db_produit)
    return db_produit


def delete_produit(db: Session, id_produit: uuid.UUID):
    db_produit = get_produit(db, id_produit)

    if db_produit.image:
        delete_image_file(db_produit.image)

    db.delete(db_produit)
    db.commit()
    return {"message": f"Produit '{db_produit.nom}' supprimé"}


def delete_all_produits(db: Session):
    db_produits = db.exec(select(Produits)).all() 

    for produit in db_produits:
        if produit.image:
            delete_image_file(produit.image)
        db.delete(produit)

    db.commit()

    orphans = db.exec(select(Avantage).where(~Avantage.produits.any())).all()
    for avantage in orphans:
        db.delete(avantage)
    db.commit()
    return {"message": "Tous les produits ont été supprimés"}
