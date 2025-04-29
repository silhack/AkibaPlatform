from fastapi import APIRouter, Depends, status, HTTPException
from app.models import produits
from app.database import get_db

router = APIRouter(
  tags=["produits"],
  prefix="/produits"
)

@router.get("/", status_code=status.HTTP_200_OK)
async def get_produits():
  return {"message": "All ur produits are here 🚀"}