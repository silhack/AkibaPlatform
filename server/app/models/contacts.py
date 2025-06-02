from datetime import datetime, timezone
from sqlmodel import SQLModel, Field
import uuid

# CONTACTS MODELES

class ContactsBase(SQLModel):
  nom: str
  email: str = Field(index=True)
  telephone: str = Field(index=True)
  objet: str
  message: str
  created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Contacts(ContactsBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

class ContactsCreate(ContactsBase):
  pass

class ContactsPublic(ContactsBase):
  id: uuid.UUID

class ContactsUpdate(SQLModel):
  nom: str | None = None
  email: str | None = None
  telephone: str | None = None
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
  objet: str | None = None
  message: str | None = None