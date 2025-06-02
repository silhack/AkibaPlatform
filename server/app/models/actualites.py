from datetime import datetime, timezone
from sqlmodel import SQLModel, Field, Relationship
import enum
import uuid
from typing import Optional, List

class Categorie(str, enum.Enum):
    ANALYSES_TENDANCES = "Analyses & tendances"
    EVENEMENTS = "Évènements"
    ETUDES = "Études"


class ActualiteSourceLink(SQLModel, table=True):
    actualite_id: uuid.UUID = Field(foreign_key="actualites.id", primary_key=True)
    source_id: int = Field(foreign_key="source.id", primary_key=True)

class Source(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nom: str = Field(index=True, unique=True)
    actualites: List["Actualites"] = Relationship(back_populates="sources", link_model=ActualiteSourceLink)

class ActualitesBase(SQLModel):
    image: str | None = None
    titre: str = Field(index=True)
    description: str
    categorie: Categorie
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class Actualites(ActualitesBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    sources: List[Source] = Relationship(back_populates="actualites", link_model=ActualiteSourceLink)

class ActualitesCreate(ActualitesBase):
    sources: List[str]

class ActualitesPublic(ActualitesBase):
    id: uuid.UUID
    sources: List[str]

class ActualitesUpdate(SQLModel):
    image: str | None = None
    titre: str | None = None
    description: str | None = None
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    categorie: Categorie | None = None
    sources: List[str] | None = None

def convert_actualite_to_public(actu: Actualites) -> ActualitesPublic:
    return ActualitesPublic(
        id=actu.id,
        image=actu.image,
        titre=actu.titre,
        created_at= actu.created_at,
        updated_at= actu.updated_at,
        description=actu.description,
        categorie=actu.categorie,
        sources=[source.nom for source in actu.sources]
    )
