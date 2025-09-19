from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from app.routers import doc_checker, cfo_helper

# Load environment variables
FLEXPRICE_API_KEY = os.getenv("FLEXPRICE_API_KEY")
PATHWAY_API_KEY = os.getenv("PATHWAY_API_KEY")

app = FastAPI(
    title="CFO Helper Backend",
    description="AI-powered financial assistant for budget scenarios and document analysis",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(doc_checker.router, prefix="/doc-checker", tags=["Doc Checker"])
app.include_router(cfo_helper.router, prefix="/cfo-helper", tags=["CFO Helper"])

@app.get("/")
def root():
    return {
        "message": "CFO Helper Backend Running",
        "flexprice_configured": bool(FLEXPRICE_API_KEY),
        "pathway_configured": bool(PATHWAY_API_KEY),
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "CFO Helper API",
        "environment_variables": {
            "flexprice_api_key": "configured" if FLEXPRICE_API_KEY else "missing",
            "pathway_api_key": "configured" if PATHWAY_API_KEY else "missing"
        }
    }
