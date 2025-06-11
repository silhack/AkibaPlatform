import uuid
from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session
from app.database import get_db
from app import security
from app.crud.admins import delete_all_admins, get_admin_by_id, get_admin_by_name, create_admin, delete_admin, get_all_admins, update_admin
from app.models.admin import AdminsCreate, AdminsPublic, AdminsUpdate, LoginRequest


router = APIRouter(
  tags=["admins"],
  prefix="/admins"
)

#POST - Connexion
@router.post("/login", status_code=status.HTTP_200_OK)
def login(data: LoginRequest, db: Session = Depends(get_db)):
  admin = get_admin_by_name(db, data.nom)
  token = security.generate_token()
  if not admin or not security.verify_password(data.password, admin.password): 
    raise HTTPException(status_code=401, detail="Nom d'utilisateur ou mot de passe invalide")
  return {"token": token, "admin_id": admin.id, "nom": admin.nom}

#POST - Ajouter un admin à la DB
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=AdminsPublic)
def route_create_admin(admin_data: AdminsCreate, db: Session = Depends(get_db)):
    existing = get_admin_by_name(db, admin_data.nom)
    if existing:
        raise HTTPException(status_code=400, detail="Un admin avec ce nom existe déjà")
    return create_admin(db, admin_data)

#GET - Récupérer un admin de la DB
@router.get("/{admin_id}", status_code=status.HTTP_200_OK, response_model=AdminsPublic)
def route_get_admin(admin_id: uuid.UUID, db: Session = Depends(get_db)):
    admin = get_admin_by_id(db, admin_id)
    if not admin:
        raise HTTPException(status_code=404, detail="Admin non trouvé")
    return admin

#GET - Récupérer tous les admins de la DB
@router.get("/", status_code=status.HTTP_200_OK, response_model=list[AdminsPublic])
def route_get_admins(db: Session = Depends(get_db)):
  return get_all_admins(db)

#PATCH - Modifier un admin de la DB
@router.patch("/{admin_id}", status_code=status.HTTP_200_OK, response_model=AdminsPublic)
def route_update_admin(admin_id: uuid.UUID, update_data: AdminsUpdate, db: Session = Depends(get_db)):
  return update_admin(admin_id, update_data, db)
    

@router.delete("/{admin_id}", status_code=status.HTTP_200_OK)
def route_delete_admin(admin_id: str, db: Session = Depends(get_db)):
  return delete_admin(db, admin_id)

#DELETE - Supprimer tous les admins de la DB
@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_admins(db: Session = Depends(get_db)):
  return delete_all_admins(db)