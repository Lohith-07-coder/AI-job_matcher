# resume routes
from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from app.utils.parser import extract_text_from_pdf
from app.utils.extractor import extract_details
from app.utils.ats_score import calculate_ats_score

router = APIRouter()

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    content = await file.read()
    text = extract_text_from_pdf(content)
    details = extract_details(text)
    score = calculate_ats_score(details.get("skills", []))

    return JSONResponse({
        "filename": file.filename,
        "text_snippet": text[:200] + "...",
        "details": details,
        "ats_score": score
    })
