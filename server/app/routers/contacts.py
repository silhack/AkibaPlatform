import uuid
from fastapi import APIRouter, Depends, status
from sqlmodel import Session
from app.crud.contacts import create_contact, get_all_contacts, get_contact, update_contact, delete_contact, delete_all_contacts
from app.database import get_db
from app.models.contacts import ContactsCreate, ContactsPublic, ContactsUpdate

router = APIRouter(
  tags=["contacts"],
  prefix="/contacts"
)

#POST - Ajouter un contact à la DB
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ContactsPublic)
def route_create_contact(contact: ContactsCreate, db: Session = Depends(get_db), ):
  return create_contact(db, contact)

#GET - Récuperer la liste des contacts depuis la DB
@router.get("/", status_code=status.HTTP_200_OK, response_model=list[ContactsPublic])
def route_get_contacts(db: Session = Depends(get_db), ):
  return get_all_contacts(db)

#GET - Récuperer un contact depuis la DB
@router.get("/{id_contact}", status_code=status.HTTP_200_OK, response_model=ContactsPublic)
def route_get_contacts(id_contact: uuid.UUID, db: Session = Depends(get_db) ):
  return get_contact(db, id_contact)

#PATCH - Modifier un contact de la DB
@router.patch("/{id_contact}", status_code=status.HTTP_202_ACCEPTED, response_model=ContactsPublic)
def route_update_contact(contact: ContactsUpdate, id_contact: uuid.UUID, db: Session = Depends(get_db)):
  return update_contact(db, id_contact, contact)

#DELETE - Supprimer un contact de la DB
@router.delete("/{id_contact}", status_code=status.HTTP_200_OK)
def route_delete_contact(id_contact: uuid.UUID, db: Session = Depends(get_db)):
  return delete_contact(db, id_contact)

#DELETE - Supprimer tous les contacts de la DB
@router.delete("/", status_code=status.HTTP_200_OK)
def route_delete_contact(db: Session = Depends(get_db)):
  return delete_all_contacts(db)
