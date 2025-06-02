from datetime import datetime, timezone
from sqlmodel import Relationship, SQLModel, Field
import uuid
from typing import Optional, List

# PRODUITS MODELES
class ProduitAvantageLink(SQLModel, table=True):
  produit_id: uuid.UUID | None = Field(default=None, foreign_key="produits.id", primary_key=True)
  avantage_id: int | None = Field(default=None, foreign_key="avantage.id", primary_key=True)

class ProduitsBase(SQLModel):
  image: str | None = None
  nom: str = Field(index=True)
  accroche: str
  description: str
  created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Avantage(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  nom: str = Field(index=True, unique=True)
  produits: List["Produits"] = Relationship(back_populates="avantages", link_model=ProduitAvantageLink)

class Produits(ProduitsBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
  avantages: List[Avantage] = Relationship(back_populates="produits", link_model=ProduitAvantageLink)

class ProduitsCreate(ProduitsBase):
  avantages: List[str]

class ProduitsPublic(ProduitsBase):
  id: uuid.UUID
  avantages: List[str]

class ProduitsUpdate(SQLModel):
  image: str | None = None
  nom: str | None = None
  accroche: str | None = None
  updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
  description: str | None = None
  avantages: List[str] | None = None

def convert_produit_to_public(produit: Produits) -> ProduitsPublic:
  return ProduitsPublic(
    id=produit.id,
    image=produit.image,
    nom=produit.nom,
    created_at= produit.created_at,
    updated_at= produit.updated_at,
    accroche=produit.accroche,
    description=produit.description,
    avantages=[a.nom for a in produit.avantages]
  )

