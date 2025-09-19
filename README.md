# BuriBuriZaemon-
project-root/
│
├── frontend/                    # React/Next.js app
├── backend/                     # Microservices
│   ├── api_gateway/            # FastAPI gateway
│   ├── document_service/       # Basic coordination service
│   ├── finance_service/        # Budget calculations
│   ├── billing_service/        # Flexprice integration
│   └── notification_service/   # Alerts and notifications
├── pathways/                   # Pathway pipelines (MAIN ENGINE)
│   ├── doc_pipeline/          # Document processing + vector indexing
│   ├── finance_pipeline/      # Financial data processing
│   └── configs/               # Pipeline configurations
├── billing/                    # Flexprice integration
└── docker-compose.yaml        # Container orchestration


# New structure
hackathon-project/
├── frontend/                 # React app
│   ├── src/
│   │   ├── components/       # Upload, Sliders, Reports
│   │   ├── services/         # API calls
│   │   └── App.js           # Main app
│   └── package.json
├── pathway-engine/           # Main backend
│   ├── main.py              # Pathway pipeline + REST API
│   ├── document_processor.py # AI conflict detection
│   ├── finance_calculator.py # Budget scenarios
│   └── flexprice_client.py   # Billing integration
├── docker-compose.yaml      # Quick container setup
└── README.md               # Demo instructions
