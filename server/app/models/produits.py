from sqlmodel import JSON, Column, SQLModel, Field
import uuid
from typing import Optional, List

# PRODUITS MODELES

class ProduitsBase(SQLModel):
  image: str
  nom: str = Field(index=True)
  accroche: str
  description: str
  avantages: Optional[List[str]] = Field(sa_column=Column(JSON))

class Produits(ProduitsBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

class ProduitsCreate(ProduitsBase):
  pass

class ProduitsPublic(ProduitsBase):
  id: uuid.UUID

class ProduitsUpdate(SQLModel):
  image: str | None = None
  nom: str | None = None
  accroche: str | None = None
  description: str | None = None
  avantages: List[str] | None = None

