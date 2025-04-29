from sqlmodel import SQLModel, Field
import uuid
from typing import Optional

# Contacts MODELES

class ContactsBase(SQLModel):
  nom: str
  email: str = Field(index=True)
  telephone: str = Field(index=True)
  objet: str
  message: str

class Contacts(ContactsBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

class ContactsCreate(ContactsBase):
  pass

class ContactsPublic(ContactsBase):
  id: uuid.UUID

class ContactsUpdate(SQLModel):
  nom: Optional[str] = None
  email: Optional[str] = Field(default=None, index=True)
  telephone: Optional[str] = None
  objet: Optional[str] = None
  message: Optional[str] = None