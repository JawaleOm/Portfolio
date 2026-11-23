export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  location?: string;
  certificateId?: string;
  bullets: string[];
  techTags?: string[];
}

export const experiences: Experience[] = [
  {
    id: "codec-internship",
    role: "Data Analytics Intern",
    company: "Codec Technologies Pvt. Ltd. (1-Month AICTE & ICAC Approved Internship)",
    period: "Jun 2026 – Jul 2026",
    startDate: "2026-06",
    endDate: "2026-07",
    certificateId: "codec_internship",
    bullets: [
      "Completed the AICTE- and ICAC-approved internship and Codec’s ICAC-recognized Data Analytics Training Program.",
    ],
    techTags: ["Data Analytics", "AICTE Approved", "ICAC Recognized", "Data Pipelines"],
  },
  {
    id: "it-support-instructor",
    role: "IT Support & Computer Instructor",
    company:
      "IT & Co. (Dadasaheb Balpande College of Pharmacy) — Balpande Public School, Besa",
    period: "Jul 2025 – Oct 2025",
    startDate: "2025-07",
    endDate: "2025-10",
    bullets: [
      "Handled the educational and ERP-type websites of Balpande Public School, Besa.",
      "Taught computer studies to students of Standards 1 to 6.",
      "Handled exam-paper department work alongside web and IT responsibilities.",
    ],
    techTags: ["Web Systems", "ERP Maintenance", "IT Support", "Technical Instruction"],
  },
  {
    id: "itrnity-internship",
    role: "Data Analyst Intern",
    company: "Itrnity Infotech Pvt. Ltd.",
    period: "Feb 2025 – Apr 2025",
    startDate: "2025-02",
    endDate: "2025-04",
    certificateId: "itrnity_internship",
    bullets: [
      "Worked on data analytics tasks and team projects; rated “excellent” for performance and conduct.",
    ],
    techTags: ["Data Analytics", "Performance: Excellent", "Team Collaboration"],
  },
];
