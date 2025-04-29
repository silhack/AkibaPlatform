from fastapi import APIRouter, Depends, status, HTTPException
from app.models import actualites
from app.database import get_db

router = APIRouter(
  tags=["actualites"],
  prefix="/actualites"
)

@router.get("/", status_code=status.HTTP_200_OK)
async def get_actualites():
  return {"message": "All ur actualites are here 🚀"}