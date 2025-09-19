from flask import Flask, jsonify
import requests

FLEXPRICE_API_KEY = os.getenv("FLEXPRICE_API_KEY")
app = Flask(__name__)

@app.route("/plans")
def get_plans():
    url = "https://api.cloud.flexprice.io/v1/plans"
    headers = {
        "x-api-key": f"{FLEXPRICE_API_KEY}",
        "Content-Type": "application/json"
    }
    response = requests.get(url, headers=headers)
    return jsonify(response.json())
