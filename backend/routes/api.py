import json
import os
from fastapi import APIRouter
from typing import List
from models.schemas import ResourceSchema, RoadmapSchema, TechQuestionSchema, HRQuestionSchema

router = APIRouter()

DATA_FILE = os.path.join(os.path.dirname(__file__), "..", "data.json")

def load_data():
    if not os.path.exists(DATA_FILE):
        return {}
    with open(DATA_FILE, "r") as f:
        return json.load(f)

@router.get("/resources", response_model=List[ResourceSchema])
async def get_resources(category: str = None):
    data = load_data()
    resources = data.get("resources", [])
    if category:
        resources = [r for r in resources if r["category"] == category]
    return resources

@router.get("/roadmaps", response_model=List[RoadmapSchema])
async def get_roadmaps():
    data = load_data()
    return data.get("roadmaps", [])

@router.get("/technical-questions", response_model=List[TechQuestionSchema])
async def get_tech_questions(category: str = None):
    data = load_data()
    questions = data.get("technical_questions", [])
    if category:
        questions = [q for q in questions if q["category"] == category]
    return questions

@router.get("/hr-questions", response_model=List[HRQuestionSchema])
async def get_hr_questions():
    data = load_data()
    return data.get("hr_questions", [])
