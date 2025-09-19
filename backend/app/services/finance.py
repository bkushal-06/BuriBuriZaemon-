import requests, os

FLEXPRICE_API_KEY = os.getenv("FLEXPRICE_API_KEY")

def run_flexprice_scenario(hiring: int, price_increase: float):
    url = "https://api.flexprice.ai/scenario"
    payload = {
        "hiring": hiring,
        "price_increase": price_increase
    }
    headers = {"Authorization": f"Bearer {FLEXPRICE_API_KEY}"}
    
    res = requests.post(url, json=payload, headers=headers)
    return res.json()
