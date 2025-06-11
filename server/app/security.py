from passlib.context import CryptContext
import secrets

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str : 
  return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) : 
  return pwd_context.verify(plain_password, hashed_password)

def generate_token() : 
  return secrets.token_urlsafe(64);