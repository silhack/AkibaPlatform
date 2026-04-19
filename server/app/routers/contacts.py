import uuid
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.crud.contacts import create_contact, get_all_contacts, get_contact, update_contact, delete_contact, delete_all_contacts, send_mail
from app.database import get_db
from app.schemas.contacts import ContactCreate, ContactPublic, ContactUpdate
from app.dependencies import get_current_admin

# Router pour la gestion des demandes de contact
router = APIRouter(
  tags=["contacts"],
  prefix="/contacts"
)

# POST - Public (Formulaire de contact)
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ContactPublic)
def route_create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    """
    Crée une nouvelle demande de contact dans la base de données.
    """
    return create_contact(db, contact)

@router.post("/mail", status_code=status.HTTP_200_OK, response_model=dict)
async def route_send_mail(contact: ContactCreate, db: Session = Depends(get_db)):
    """
    Enregistre la demande et envoie un e-mail de notification.
    """
    return await send_mail(db, contact)

# GET - Protégé (Admin uniquement)
@router.get("/", status_code=status.HTTP_200_OK, response_model=list[ContactPublic])
def route_get_contacts(
    db: Session = Depends(get_db), 
    current_admin=Depends(get_current_admin)
):
    """
    Récupère la liste de tous les messages de contact (Admin uniquement).
    """
    return get_all_contacts(db)

@router.get("/{id_contact}", status_code=status.HTTP_200_OK, response_model=ContactPublic)
def route_get_contact(
    id_contact: uuid.UUID, 
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    """
    Récupère un message de contact spécifique par son ID (Admin uniquement).
    """
    return get_contact(db, id_contact)

@router.patch("/{id_contact}", status_code=status.HTTP_202_ACCEPTED, response_model=ContactPublic)
def route_update_contact(
    contact: ContactUpdate, 
    id_contact: uuid.UUID, 
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    """
    Met à jour un message de contact (Admin uniquement).
    """
    return update_contact(db, id_contact, contact)

@router.delete("/{id_contact}", status_code=status.HTTP_200_OK)
def route_delete_contact(
    id_contact: uuid.UUID, 
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    """
    Supprime un message de contact (Admin uniquement).
    """
    return delete_contact(db, id_contact)

@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_contacts(
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    """
    Supprime TOUS les messages de contact (Admin uniquement).
    """
    return delete_all_contacts(db)
