from sqlmodel import create_engine, Session, SQLModel
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')

engine = create_engine(DATABASE_URL, echo=True)

def init_db():
  SQLModel.metadata.create_all(bind=engine)

def get_db():
  with Session(engine) as session:
    yield session