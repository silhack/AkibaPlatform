import uuid
from fastapi import HTTPException
from sqlmodel import Session, select
from app.models.contacts import ContactsCreate, ContactsUpdate, Contacts


def create_contact(db: Session, contact: ContactsCreate): 
  db_contact = Contacts.model_validate(contact)
  db.add(db_contact)
  db.commit()
  db.refresh(db_contact)
  return db_contact

def get_contacts(db: Session): 
  contacts = db.exec(select(Contacts)).all()
  return contacts

def get_contact(db: Session, id_contact: uuid.UUID): 
  contact = db.get(Contacts, id_contact)
  if not contact:
    raise HTTPException(status_code=404, detail="Contact inexistant")
  return contact

def update_contact(db: Session, id_contact: uuid.UUID, contact: ContactsUpdate):
  db_contact = db.get(Contacts, id_contact)
  if not db_contact:
    raise HTTPException(status_code=404, detail="Contact inexistant")
  hero_data = contact.model_dump(exclude_unset=True)
  db_contact.sqlmodel_update(hero_data)
  db.add(db_contact)
  db.commit()
  db.refresh(db_contact)
  return db_contact


def delete_contact(db: Session, id_contact: uuid.UUID):
  contact = db.get(Contacts, id_contact)
  if not contact:          
    raise HTTPException(status_code=404, detail="contact inexistant")
  db.delete(contact)
  db.commit()
  return {"Message": f"Contact {contact.nom} supprimé avec succès"}