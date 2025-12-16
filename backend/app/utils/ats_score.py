# ats score
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent
JOB_ROLES = json.load(open(BASE / "job_roles.json"))

def calculate_ats_score(skills):
    required = JOB_ROLES["Machine Learning Engineer"]
    match = len(set(s.lower() for s in skills) & set(s.lower() for s in required))
    return int((match / len(required)) * 100)

def recommend_roles(skills):
    results = []
    for role, req in JOB_ROLES.items():
        matched = list(set(s.lower() for s in skills) & set(s.lower() for s in req))
        pct = int((len(matched) / len(req)) * 100)
        results.append({"role": role, "match": pct, "matched_skills": matched})
    return sorted(results, key=lambda x: x["match"], reverse=True)
