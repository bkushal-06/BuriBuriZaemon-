import requests
FLEXPRICE_API_KEY = os.getenv("FLEXPRICE_API_KEY")

url = "https://api.cloud.flexprice.io/v1/plans"
headers = { "x-api-key": f"{FLEXPRICE_API_KEY}", "Content-Type": "application/json" }
data = {}
response = requests.get(url, headers=headers, json=data)
print(response.json())