from fastapi import APIRouter
from app.services.finance import run_flexprice_scenario

router = APIRouter()

@router.get("/whatif")
def what_if(hiring: int = 0, price_increase: float = 0.0):
    return run_flexprice_scenario(hiring, price_increase)
