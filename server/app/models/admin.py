from datetime import datetime, timezone
from sqlmodel import SQLModel, Field
import uuid

# ADMINS MODELES

class AdminsBase(SQLModel):
  nom: str = Field(index=True)
  password: str 
  created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Admins(AdminsBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

class AdminsCreate(AdminsBase):
  pass

class AdminsPublic(AdminsBase):
  id: uuid.UUID

class AdminsUpdate(SQLModel):
  nom: str | None = None
  password: str | None = None
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class LoginRequest(SQLModel):
  nom: str
  password: str