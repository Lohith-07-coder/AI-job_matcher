# extractor
import re
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent

skills_path = BASE / "skills.json"
SKILLS = json.load(open(skills_path))

def extract_email(text):
    m = re.search(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", text)
    return m.group(0) if m else None

def extract_phone(text):
    m = re.search(r"\b\d{10}\b", text)
    return m.group(0) if m else None

def extract_skills(text):
    text = text.lower()
    return list({skill for skill in SKILLS if skill.lower() in text})

def extract_details(text):
    return {
        "email": extract_email(text),
        "phone": extract_phone(text),
        "skills": extract_skills(text)
    }
