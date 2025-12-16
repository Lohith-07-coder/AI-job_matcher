# job routes
from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from app.utils.ats_score import recommend_roles

router = APIRouter()

class SkillsPayload(BaseModel):
    skills: List[str]

@router.post("/recommend")
def recommend_jobs(payload: SkillsPayload):
    return {"recommendations": recommend_roles(payload.skills)}
