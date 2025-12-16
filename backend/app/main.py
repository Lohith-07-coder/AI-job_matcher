# main backend file
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.resume_routes import router as resume_router
from app.routes.job_routes import router as job_router
from app.routes.health_check import router as health_router

app = FastAPI(title="AI Resume Analyzer Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_router, prefix="/resume")
app.include_router(job_router, prefix="/jobs")
app.include_router(health_router, prefix="/health")


@app.get("/")
def home():
    return {"message": "AI Resume Analyzer Backend is running"}
