from datetime import datetime, timezone
import uuid
from fastapi import HTTPException
from sqlmodel import Session, delete, select
from app.models.admin import Admins, AdminsCreate, AdminsUpdate
from app.security import hash_password

def get_admin_by_name(db: Session, nom: str):
    return db.exec(select(Admins).where(Admins.nom == nom)).first()

def get_admin_by_id(db: Session, admin_id: uuid.UUID):
    return db.get(Admins, admin_id)

def create_admin(db: Session, admin_data: AdminsCreate):
    hashed = hash_password(admin_data.password)
    admin = Admins(nom=admin_data.nom, password=hashed)
    db_admin = Admins.model_validate(admin)
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)
    return db_admin 

def get_all_admins(db: Session): 
  admins = db.exec(select(Admins)).all()
  return admins

def update_admin(admin_id: uuid.UUID, admin: AdminsUpdate, db: Session):
    db_admin = get_admin_by_id(db, admin_id)
    if not db_admin:
        raise HTTPException(status_code=404, detail="Admin inexistant")

    admin_data = admin.model_dump(exclude_unset=True)

    if "password" in admin_data and admin_data["password"]:
        admin_data["password"] = hash_password(admin_data["password"])

    admin_data["updated_at"] = datetime.now(timezone.utc)
    db_admin.sqlmodel_update(admin_data)
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)
    return db_admin

def delete_admin(db: Session, admin_id: uuid.UUID):
    admin = get_admin_by_id(db, admin_id)
    if not admin:
        raise HTTPException(status_code=404, detail="Admin inexistant")
    db.delete(admin)
    db.commit()
    return {"Message": f"Admin {admin.nom} supprimé avec succès"}

def delete_all_admins(db: Session):
    db.exec(delete(Admins))
    db.commit()
    return {"message": "Tous les admins ont été supprimés"}