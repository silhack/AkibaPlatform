from fastapi import APIRouter, Depends, status, HTTPException
from app.models import contacts
from app.database import get_db

router = APIRouter(
  tags=["contacts"],
  prefix="/contacts"
)

@router.get("/", status_code=status.HTTP_200_OK)
async def get_contacts():
  return {"message": "All ur contacts are here 🚀"}