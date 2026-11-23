export interface MindsetPrinciple {
  id: string;
  number: string;
  title: string;
  quote: string;
  support: string;
  iconName: "Compass" | "Trophy" | "LineChart" | "GraduationCap";
  footerLabel: string;
}

export const mindsetPrinciples: MindsetPrinciple[] = [
  {
    id: "build-to-learn",
    number: "01",
    title: "Build to Learn",
    quote: "I learn by building. Every project starts with a real problem I want to solve.",
    support:
      "Engineered a six-stage multilingual NLP pipeline that ranks unstructured citizen complaints into development recommendations, and built an asynchronous web crawler with local Llama 3 categorization and Meilisearch search.",
    iconName: "Compass",
    footerLabel: "CORE PRINCIPLE",
  },
  {
    id: "pressure-is-practice",
    number: "02",
    title: "Pressure Is Practice",
    quote: "Hackathons taught me to ship under a deadline.",
    support:
      "Secured 2nd Place at The Sandbox Hackathon 2026 with the Smart Campus Complaint System, and engineered climate data models with Team Eduplay at the Bharatiya Antariksh Hackathon 2026 (ISRO & Hack2Skill).",
    iconName: "Trophy",
    footerLabel: "EXECUTION STANDARD",
  },
  {
    id: "evidence-over-opinion",
    number: "03",
    title: "Evidence Over Opinion",
    quote: "I trust the data: clean it, test it, measure it.",
    support:
      "Benchmarked ARIMA, Facebook Prophet, and LSTM architectures for Superstore sales forecasting, and systematically evaluated customer churn classifiers prioritizing Recall and ROC-AUC metrics on the IBM Telco dataset.",
    iconName: "LineChart",
    footerLabel: "ANALYTICAL RIGOR",
  },
  {
    id: "keep-learning",
    number: "04",
    title: "Keep Learning",
    quote: "Internships and certifications keep my skills tied to real work.",
    support:
      "Completed industrial data analytics internships at Itrnity Infotech and Codec Technologies, backed by Microsoft Learn verified credentials in secure data access and Power BI.",
    iconName: "GraduationCap",
    footerLabel: "CONTINUOUS GROWTH",
  },
];
