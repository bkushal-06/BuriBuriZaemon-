from fastapi import APIRouter, UploadFile
from app.services.nlp import analyze_documents

router = APIRouter()

@router.post("/analyze")
async def analyze(file: UploadFile):
    content = await file.read()
    text = content.decode("utf-8", errors="ignore")  # simplified
    return {"analysis": analyze_documents([text])}
