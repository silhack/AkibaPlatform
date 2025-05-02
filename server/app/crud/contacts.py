from pathlib import Path
import uuid
import os
from fastapi import HTTPException
from fastapi_mail import FastMail, MessageSchema, MessageType, ConnectionConfig
from sqlmodel import Session, select, delete
from app.models.contacts import ContactsCreate, ContactsUpdate, Contacts
from dotenv import load_dotenv

load_dotenv()

class Envs: 
  MAIL_USERNAME = os.getenv('EMAIL_USERNAME')
  MAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')
  MAIL_PORT = int(os.getenv('EMAIL_PORT'))
  MAIL_SERVER = os.getenv('EMAIL_SERVER')

conf = ConnectionConfig(
  MAIL_USERNAME=Envs.MAIL_USERNAME,
  MAIL_PASSWORD=Envs.MAIL_PASSWORD,
  MAIL_FROM=Envs.MAIL_USERNAME,
  MAIL_PORT=Envs.MAIL_PORT,
  MAIL_SERVER=Envs.MAIL_SERVER,
  MAIL_STARTTLS=False,
  MAIL_SSL_TLS=False,
  USE_CREDENTIALS=False,
  VALIDATE_CERTS=False,
  TEMPLATE_FOLDER=Path(__file__).resolve().parent.parent / "templates"
)

def create_contact(db: Session, contact: ContactsCreate): 
  db_contact = Contacts.model_validate(contact)
  db.add(db_contact)
  db.commit()
  db.refresh(db_contact)
  return db_contact

def get_all_contacts(db: Session): 
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
  contact_data = contact.model_dump(exclude_unset=True)
  db_contact.sqlmodel_update(contact_data)
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

def delete_all_contacts(db: Session):
    db.exec(delete(Contacts))
    db.commit()
    return {"message": "Tous les contacts ont été supprimés"}

async def send_mail(db: Session, contact: ContactsCreate):
  
  create_contact(db, contact)

  template_body = {
    "title": contact.objet,
    "name": contact.nom,
    "email": contact.email,
    "message": contact.message
  }

  message = MessageSchema(
    subject="Formulaire de contact - AkibaSolution",
    recipients=[Envs.MAIL_USERNAME],
    reply_to=[contact.email],
    template_body={"body": template_body},
    subtype=MessageType.html
  )

  fm = FastMail(conf)
  await fm.send_message(message, template_name="email.html")

  return {"message": "Votre message a été envoyé avec succès."}