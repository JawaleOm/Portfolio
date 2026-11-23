export type ProjectSize = "flagship" | "prominent" | "compact";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  year: string;
  size: ProjectSize;
  description: string;
  bullets: string[];
  tech: string[];
  repoUrl: string; // Verified real repository link
  liveUrl?: string; // Only rendered when verified URL exists
  badge?: {
    text: string;
    certificateId?: string;
  };
  visualType: "triage-realtime" | "nlp-pipeline" | "crawler-queue" | "timeseries" | "classifier-eval";
  details: {
    venue?: string;
    deployment?: string;
    architecture: string[];
    keyComponents: { label: string; desc: string }[];
    dataset?: string;
  };
}

export const projects: Project[] = [
  {
    id: "smart-campus",
    name: "Smart Campus Complaint System",
    tagline: "2nd Place, The Sandbox Hackathon 2026",
    year: "2026",
    size: "flagship",
    description:
      "Developed a full-stack complaint platform with role-based Student, Staff and Admin portals, JWT authentication, real-time WebSocket updates and an analytics dashboard; deployed on Vercel.",
    bullets: [
      "Awarded 2nd Place at The Sandbox Hackathon (GH Raisoni College of Engineering and Management, Nagpur, April 2026).",
      "Tri-portal role-based access control (Student, Staff, Admin) secured by JWT authentication and session protection.",
      "Real-time bidirectional status notifications and resolution updates via WebSockets (Socket.io).",
      "Interactive administrative analytics dashboard tracking turnaround time and department resolution SLAs; deployed on Vercel.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.io",
      "Vercel",
    ],
    repoUrl: "https://github.com/JawaleOm/smart-campus-complaint-system",
    liveUrl: "", // Verified liveUrl placeholder (resume notes 'deployed on Vercel')
    badge: {
      text: "2ND PLACE - THE SANDBOX HACKATHON 2026",
      certificateId: "hackathon_2nd_place",
    },
    visualType: "triage-realtime",
    details: {
      venue: "GH Raisoni College of Engineering and Management, Nagpur — April 2026",
      deployment: "Deployed on Vercel",
      architecture: [
        "Student Portal: Authentication, complaint logging, image attachments, live status tracking",
        "Staff Portal: Department triage, ticket reassignment, milestone resolution updates",
        "Admin Portal: Executive oversight, analytics dashboard, resolution SLAs and audit logs",
        "Real-Time Event Broker: Socket.io bidirectional event bus for instant state updates",
        "Data Layer: Prisma ORM with strict relational schema constraints on PostgreSQL",
        "Hosting & Edge: Production deployment on Vercel serverless infrastructure",
      ],
      keyComponents: [
        { label: "Honor", desc: "2nd Place Award Winner — The Sandbox Hackathon 2026" },
        { label: "Authentication", desc: "Role-gated JSON Web Tokens (JWT)" },
        { label: "Live Updates", desc: "Socket.io real-time WebSocket protocol" },
        { label: "Deployment", desc: "Production Edge Deployment on Vercel" },
      ],
    },
  },
  {
    id: "peoples-priorities",
    name: "People's Priorities",
    tagline: "AI for Constituency Development Planning",
    year: "2026",
    size: "prominent",
    description:
      "Built a multilingual governance platform that ranks citizen complaints into development recommendations via a six-stage AI pipeline (speech-to-text, translation, topic classification, urgency detection, duplicate scan, multi-factor Priority Score).",
    bullets: [
      "Six-stage AI pipeline for unstructured civic data across diverse regional Indian languages.",
      "Automated vernacular audio transcription and translation into standardized text.",
      "LLM topic classification, urgency detection, and semantic duplicate scan clustering.",
      "Multi-factor Priority Score engine computing actionable constituency development priorities.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
      "Recharts",
      "Leaflet",
    ],
    repoUrl: "https://github.com/JawaleOm/peoples-priorities",
    visualType: "nlp-pipeline",
    details: {
      architecture: [
        "Stage 1: Speech-to-Text (Voice submission in local vernaculars)",
        "Stage 2: Multilingual Translation to normalized text representation",
        "Stage 3: LLM Topic Classification & domain routing",
        "Stage 4: Urgency & severity anomaly detection",
        "Stage 5: Semantic Duplicate Scan & incident clustering",
        "Stage 6: Multi-Factor Priority Score calculation & decision engine",
      ],
      keyComponents: [
        { label: "AI Core", desc: "Gemini API with structured prompt workflows" },
        { label: "Frontend", desc: "Next.js App Router, Tailwind CSS, Leaflet GIS" },
        { label: "Backend", desc: "Express.js REST API with PostgreSQL storage" },
      ],
    },
  },
  {
    id: "webvault",
    name: "WebVault",
    tagline: "Intelligent Website Data Explorer & Search Dashboard",
    year: "2026",
    size: "prominent",
    description:
      "Developed a web-scraping and AI content-extraction platform with asynchronous crawling, queue-based background processing, LLM-driven categorization, tagging and summarization, and a full-text search dashboard.",
    bullets: [
      "High-throughput asynchronous web crawling pipeline backed by Playwright and Celery worker queues.",
      "Automated content extraction, noise filtering, and metadata structuring.",
      "Local Llama 3 integration via Ollama for privacy-focused categorization, tagging, and summarization.",
      "Sub-millisecond full-text indexing and instant search dashboard powered by Meilisearch.",
    ],
    tech: [
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Meilisearch",
      "Playwright",
      "Ollama (Llama 3)",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    repoUrl: "https://github.com/JawaleOm/WebVault",
    visualType: "crawler-queue",
    details: {
      architecture: [
        "Headless browser crawling orchestrated via Playwright",
        "Queue-based distributed background tasks managed by Celery and Redis",
        "Local LLM inference using Ollama running Llama 3",
        "Inverted index full-text search queries served by Meilisearch",
      ],
      keyComponents: [
        { label: "Task Queue", desc: "Celery + Redis distributed execution" },
        { label: "Search Index", desc: "Meilisearch instant typo-tolerant search" },
        { label: "Inference", desc: "Local Llama 3 via Ollama container" },
      ],
    },
  },
  {
    id: "sales-forecasting",
    name: "Sales Forecasting Using Machine Learning",
    tagline: "Comparative Time-Series Predictive Modeling",
    year: "2026",
    size: "compact",
    description:
      "Compared ARIMA, Facebook Prophet and LSTM time-series models on the Superstore dataset, covering data cleaning, exploratory data analysis (EDA) and visualization of predicted sales trends.",
    bullets: [
      "Rigorous time-series preprocessing, seasonality decomposition, and stationarity testing (ADF test).",
      "Benchmark comparison across classical statistical (ARIMA), additive (Prophet), and deep learning (LSTM) architectures.",
      "Evaluated model performance using RMSE, MAE, and MAPE metrics.",
      "Visualized historical trends and forward forecasting intervals with Matplotlib and Seaborn.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "Prophet",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
    ],
    repoUrl: "https://github.com/JawaleOm/Sales-Forecasting-Using-Machine-Learning",
    visualType: "timeseries",
    details: {
      architecture: [
        "Dataset: Superstore multi-year transaction log",
        "Decomposition: Trend, seasonality, and residual noise analysis",
        "Models: ARIMA(p,d,q) parameter grid search vs. Prophet vs. 2-layer LSTM",
      ],
      keyComponents: [
        { label: "Dataset", desc: "Superstore Sales Benchmark Dataset" },
        { label: "Evaluation", desc: "Cross-validation with RMSE and MAE" },
      ],
      dataset: "Superstore Sales Dataset",
    },
  },
  {
    id: "customer-churn",
    name: "Customer Churn Prediction",
    tagline: "Binary Classification & Risk Attribution",
    year: "2026",
    size: "compact",
    description:
      "Predicted telecom customer churn on the IBM Telco dataset with Logistic Regression, Random Forest and XGBoost, evaluated on accuracy, recall and ROC-AUC.",
    bullets: [
      "Data wrangling and categorical encoding on the 7,043-row IBM Telco dataset.",
      "Addressed class imbalance using stratified sampling and cost-sensitive loss weighting.",
      "Trained and tuned Logistic Regression, Random Forest, and XGBoost classifiers.",
      "Comprehensive evaluation prioritizing Recall and ROC-AUC to minimize false negatives on high-risk accounts.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
    ],
    repoUrl: "https://github.com/JawaleOm/Customer-Churn-Prediction",
    visualType: "classifier-eval",
    details: {
      architecture: [
        "Dataset: IBM Telco Customer Churn (7,043 customer accounts, 21 attributes)",
        "Feature Engineering: Tenure bucketing, contract type encoding, monthly charge scaling",
        "Model Selection: Baseline Logistic Regression vs. Random Forest vs. XGBoost",
      ],
      keyComponents: [
        { label: "Dataset", desc: "IBM Telco Customer Churn Dataset" },
        { label: "Primary Metric", desc: "Recall & ROC-AUC Optimization" },
      ],
      dataset: "IBM Telco Customer Churn Dataset",
    },
  },
];
