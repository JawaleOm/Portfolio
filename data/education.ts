export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  highlight?: string;
  status: "in-progress" | "completed";
}

export const educationList: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Bharati Vidyapeeth Deemed University (IMED)",
    period: "Jul 2026 – 2028 (exp.)",
    status: "in-progress",
    highlight: "Advanced studies in AI/ML architectures, enterprise data systems, and distributed cloud computing.",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "City Premier College (RTMNU)",
    period: "2023 – 2026",
    status: "completed",
    highlight: "Rigorous foundation in computer science, data structures, algorithms, databases, and software engineering.",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC) — State Board",
    institution: "Shahu Garden High School & Junior College",
    period: "2022",
    status: "completed",
    highlight: "Science stream curriculum with mathematics and computer foundation.",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC) — State Board",
    institution: "TBRAN’S Mundle English Medium School",
    period: "2020",
    status: "completed",
    highlight: "General secondary education with strong analytical and scientific grounding.",
  },
];
