# 📊 CFO Helper – Smart Compliance & Financial Planning Tool  

## 🔹 Problem Statement  
Organizations, startups, and even college teams often face two challenges:  

1. **Conflicting Documents** – Rules, contracts, or policies often contradict each other (e.g., *“submit before 10 PM” vs. “submit before midnight”*). This causes confusion, disputes, and wasted time.  
2. **Unclear Financial Planning** – Teams struggle with questions like *“What if I hire more people?”* or *“What if I increase prices?”*. Traditional tools like Excel don’t make *what-if analysis* easy.  

Both problems affect compliance and financial sustainability. **CFO Helper solves this in one tool.**  

---

## 🔹 Solution  
CFO Helper has **two AI-powered modules**:  

- **📑 Doc Checker**  
   - Upload PDF/DOC files.  
   - NLP-based parser detects contradictions (deadlines, policies, dates).  
   - Generates structured conflict reports.  

- **💰 CFO Helper**  
   - Interactive budget simulator with sliders & input fields.  
   - Runs “what-if” analysis (spending, hiring, pricing).  
   - Generates insights + charts for easy decision-making.  

---

## 🔹 Tech Stack  

### ⚡ Frontend  
- React + TailwindCSS  
- Clean, minimal UI with sliders, forms, and dashboard  

### ⚡ Backend  
- FastAPI (Python) + Uvicorn  
- Services:  
  - `Doc Checker Agent` → parses and analyzes documents  
  - `CFO Helper Agent` → runs financial simulations  
- Dockerized for easy deployment  

### ⚡ Libraries  
- `PyMuPDF`, `python-docx` → document parsing  
- `pandas`, `numpy` → financial calculations  
- `matplotlib` → chart generation  
- `scikit-learn` (optional, for NLP enhancements)  

---

## 🔹 Project Structure  

cfo-helper/
│── backend/
│ │── app/
│ │ ├── main.py
│ │ ├── routers/
│ │ │ ├── doc_checker.py
│ │ │ ├── cfo_helper.py
│ │ ├── services/
│ │ │ ├── nlp.py
│ │ │ ├── finance.py
│ │ └── models/schemas.py
│ │── requirements.txt
│ │── Dockerfile
│── docker-compose.yml
│── frontend/ (React UI)


---

## 🔹 Getting Started  

### 1️⃣ Clone the repo  
```sh
git clone https://github.com/<your-username>/cfo-helper.git
cd cfo-helper
```
---

### 2️⃣ Run with Docker
```sh
docker-compose up --build
```
Backend will be available at 👉 http://localhost:8000/docs
---

3️⃣ Frontend (React)

Go to frontend/ and run:
```sh
npm install
npm start
```

Frontend will run at 👉 http://localhost:3000

🔹 Features Demo

📑 Upload a PDF/DOC → get contradiction report

💰 Adjust hiring & pricing → see instant profit/loss simulation

📊 Dashboard → usage stats & charts

