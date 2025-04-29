from sqlmodel import SQLModel, Field
import enum
import uuid
from typing import Optional

# ACTUALITES MODELES

class Categorie(str, enum.Enum):
  TOUS = "Tous"
  ANALYSES_TENDANCES = "Analyses & tendances"
  EVENEMENTS = "Événements"
  ETUDES = "Études"

class ActualitesBase(SQLModel):
  image: str
  titre: str = Field(index=True)
  description: str
  source: str
  categorie: Categorie = Field(sa_column_kwargs={"nullable": False})

class Actualites(ActualitesBase, table=True):
  id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

class ActualitesCreate(ActualitesBase):
  pass

class ActualitesPublic(ActualitesBase):
  id: uuid.UUID

class ActualitesUpdate(SQLModel):
  image: Optional[str] = None
  titre: Optional[str] = Field(default=None, index=True)
  description: Optional[str] = None
  source: Optional[str] = None
  categorie: Optional[Categorie] = None

