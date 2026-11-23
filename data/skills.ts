export interface SkillGroup {
  id: string;
  category: string;
  monoLabel: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    category: "Languages",
    monoLabel: "CORE SYNTAX",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C", "C++"],
  },
  {
    id: "aiml-llms",
    category: "AI/ML & LLMs",
    monoLabel: "INTELLIGENT SYSTEMS",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Prophet",
      "NLP",
      "LLMs (Gemini, Llama 3)",
      "Prompt Engineering",
    ],
  },
  {
    id: "data-analytics",
    category: "Data & Analytics",
    monoLabel: "PIPELINES & INSIGHTS",
    skills: [
      "Pandas",
      "NumPy",
      "EDA",
      "Data Cleaning",
      "Time Series Forecasting",
      "Power BI",
      "Excel",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    id: "backend-apis",
    category: "Backend & APIs",
    monoLabel: "SERVICES & ARCHITECTURE",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "WebSockets (Socket.io)",
      "Celery",
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    monoLabel: "INTERFACES & UX",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "databases-search",
    category: "Databases & Search",
    monoLabel: "STORAGE & INDEXING",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Meilisearch",
      "Prisma ORM",
    ],
  },
  {
    id: "tools-devops",
    category: "Tools & DevOps",
    monoLabel: "DEPLOYMENT & AUTOMATION",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Playwright"],
  },
];
