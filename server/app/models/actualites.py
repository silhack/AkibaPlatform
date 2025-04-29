from sqlmodel import SQLModel, Field
import enum
import uuid

# ACTUALITES MODELES

class Categorie(str, enum.Enum):
  TOUS = "Tous"
  ANALYSES_TENDANCES = "Analyses & tendances"
  EVENEMENTS = "Événements"
  ETUDES = "Études"

class ActualitesBase(SQLModel):
  image: str | None = None
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
  image: str | None = None
  titre: str | None = None
  description: str | None = None
  source: str | None = None
  categorie: Categorie | None = None

