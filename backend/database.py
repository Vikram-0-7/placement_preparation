import motor.motor_asyncio
import os

# MongoDB Connection String
MONGODB_URL = "mongodb://localhost:27017"
DATABASE_NAME = "placement_prep_hub"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
db = client[DATABASE_NAME]

async def get_db():
    return db

async def seed_data():
    # Check if data already exists to avoid duplicates
    if await db.topics.count_documents({}) == 0:
        topics = [
            {"category": "DSA", "topics": ["Arrays", "Linked List", "Trees", "Graphs", "DP"], "type": "eligibility"},
            {"category": "Aptitude", "topics": ["Quantitative", "Logical Reasoning", "Verbal"], "type": "eligibility"},
            {"category": "Core Subjects", "topics": ["OS", "DBMS", "CN", "OOP"], "type": "eligibility"}
        ]
        await db.topics.insert_many(topics)

    if await db.skills.count_documents({}) == 0:
        skills = [
            {
                "category": "AI / Machine Learning",
                "skills": ["Python", "TensorFlow", "Scikit-Learn"],
                "tools": ["Jupyter", "PyTorch"],
                "roadmap": ["Math", "ML Basics", "Deep Learning"]
            },
            {
                "category": "Software Development",
                "skills": ["React", "Node.js", "Python"],
                "tools": ["Git", "Docker"],
                "roadmap": ["Frontend", "Backend", "Full Stack"]
            },
             {
                "category": "Cyber Security",
                "skills": ["Networking", "Ethical Hacking", "Cryptography"],
                "tools": ["Kali Linux", "Wireshark"],
                "roadmap": ["CompTIA Security+", "CEH", "OSCP"]
            },
            {
                "category": "Cloud Computing",
                "skills": ["AWS", "Azure", "GCP"],
                "tools": ["Terraform", "Kubernetes"],
                "roadmap": ["Cloud Fundamentals", "Solutions Architect", "DevOps"]
            },
            {
                "category": "Data Science",
                "skills": ["Statistics", "SQL", "Tableau"],
                "tools": ["Pandas", "Matplotlib"],
                "roadmap": ["Data Analysis", "Feature Engineering", "Data Modeling"]
            }
        ]
        await db.skills.insert_many(skills)

    if await db.interview_questions.count_documents({}) == 0:
        questions = [
            {"type": "HR", "question": "Tell me about yourself", "answer": "Focus on your background, achievements, and why you are a good fit."},
            {"type": "HR", "question": "What are your strengths and weaknesses?", "answer": "Be honest but professional. Show how you are improving on weaknesses."},
            {"type": "Technical", "category": "OS", "question": "What is Deadlock?", "answer": "A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process."}
        ]
        await db.interview_questions.insert_many(questions)
