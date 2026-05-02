from pydantic import BaseModel
from typing import List, Optional

class Link(BaseModel):
    name: str
    url: str
    type: str

class ResourceSchema(BaseModel):
    id: str
    category: str
    topic: str
    difficulty: str
    links: List[Link]
    notes: str

class RoadmapStep(BaseModel):
    step: str
    skills: List[str]
    tools: List[str]
    resources: List[str]

class RoadmapSchema(BaseModel):
    id: str
    category: str
    steps: List[RoadmapStep]

class TechQuestionSchema(BaseModel):
    id: str
    category: str
    question: str
    answer: str
    difficulty: str
    tags: List[str]

class HRQuestionSchema(BaseModel):
    id: str
    question: str
    answer: str
    tips: str
    good_example: Optional[str] = None
    bad_example: Optional[str] = None
