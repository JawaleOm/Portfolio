export type CertificateCategory = "internship" | "course" | "award" | "participation";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory;
  categoryBadge: string;
  badgeAccent?: "lime" | "orange" | "neutral";
  description: string;
  previewUrl: string;
  previewWebp: string;
  thumbnailUrl: string;
  thumbnailWebp: string;
  originalFileUrl: string;
  downloadFilename: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  verificationDetails?: string;
}

export const certificates: Certificate[] = [
  {
    id: "hackathon_2nd_place",
    title: "2nd Place — The Sandbox Hackathon",
    issuer: "GH Raisoni College of Engineering and Management, Nagpur",
    date: "08 April 2026",
    category: "award",
    categoryBadge: "2ND PLACE AWARD",
    badgeAccent: "lime",
    description:
      "Awarded 2nd Place at The Sandbox Hackathon for developing the Smart Campus Complaint System, featuring tri-portal role management, JWT security, and real-time WebSocket incident tracking.",
    previewUrl: "/assets/certificates/previews/hackathon_2nd_place.png",
    previewWebp: "/assets/certificates/previews/hackathon_2nd_place.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/hackathon_2nd_place.png",
    thumbnailWebp: "/assets/certificates/thumbnails/hackathon_2nd_place.webp",
    originalFileUrl: "/assets/certificates/original/Sandbox_Hackathon_2026_Certificate.pdf",
    downloadFilename: "Om_Jawale_Sandbox_Hackathon_2nd_Place.pdf",
    width: 1600,
    height: 1131,
    thumbWidth: 600,
    thumbHeight: 424,
    verificationDetails: "GH Raisoni College of Engineering & Management, Nagpur | Dated 08/04/2026",
  },
  {
    id: "codec_internship",
    title: "Data Analytics Internship Certificate",
    issuer: "Codec Technologies Pvt. Ltd.",
    date: "04 June 2026 – 04 July 2026",
    category: "internship",
    categoryBadge: "INTERNSHIP",
    badgeAccent: "orange",
    description:
      "Successfully completed a 1-Month AICTE & ICAC Approved Internship in Data Analytics from 04/06/2026 to 04/07/2026, demonstrating proficiency in data engineering pipelines and analytics workflows.",
    previewUrl: "/assets/certificates/previews/codec_internship.png",
    previewWebp: "/assets/certificates/previews/codec_internship.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/codec_internship.png",
    thumbnailWebp: "/assets/certificates/thumbnails/codec_internship.webp",
    originalFileUrl: "/assets/certificates/original/Codec_Technologies_Internship_Certificate.pdf",
    downloadFilename: "Codec_Technologies_Internship_Certificate.pdf",
    width: 1600,
    height: 1000,
    thumbWidth: 600,
    thumbHeight: 375,
    verificationDetails: "AICTE & ICAC Approved | 1-Month Duration",
  },
  {
    id: "codec_training",
    title: "Data Analytics Training Program",
    issuer: "Codec Technologies Pvt. Ltd.",
    date: "07 April 2026",
    category: "course",
    categoryBadge: "TRAINING PROGRAM",
    badgeAccent: "neutral",
    description:
      "Certificate of Completion for the ICAC-recognized Data Analytics Training Program at Codec Technologies, covering end-to-end data processing, exploratory analysis, and visualization.",
    previewUrl: "/assets/certificates/previews/codec_training.png",
    previewWebp: "/assets/certificates/previews/codec_training.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/codec_training.png",
    thumbnailWebp: "/assets/certificates/thumbnails/codec_training.webp",
    originalFileUrl: "/assets/certificates/original/Codec_Technologies_Training_Program.pdf",
    downloadFilename: "Codec_Technologies_Training_Program.pdf",
    width: 1600,
    height: 1131,
    thumbWidth: 600,
    thumbHeight: 424,
    verificationDetails: "ICAC Recognized Training Program | Dated 7/4/2026",
  },
  {
    id: "itrnity_internship",
    title: "Certificate of Internship (Data Analyst Intern)",
    issuer: "Itrnity Infotech Pvt. Ltd.",
    date: "February 2025 – April 2025",
    category: "internship",
    categoryBadge: "INTERNSHIP",
    badgeAccent: "orange",
    description:
      "Successfully completed internship as Data Analyst Intern from February '25 to April '25. Performance and conduct throughout the tenure rated as 'Excellent'.",
    previewUrl: "/assets/certificates/previews/itrnity_internship.png",
    previewWebp: "/assets/certificates/previews/itrnity_internship.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/itrnity_internship.png",
    thumbnailWebp: "/assets/certificates/thumbnails/itrnity_internship.webp",
    originalFileUrl: "/assets/certificates/original/Itrnity_Infotech_Internship_Certificate.pdf",
    downloadFilename: "Itrnity_Infotech_Internship_Certificate.pdf",
    width: 1132,
    height: 1600,
    thumbWidth: 424,
    thumbHeight: 600,
    verificationDetails: "Rated 'Excellent' for performance and conduct | Feb-Apr 2025",
  },
  {
    id: "itrnity_course",
    title: "Certificate of Completion (Data Analytics Course)",
    issuer: "Itrnity Infotech Pvt. Ltd.",
    date: "November 2024 – January 2025",
    category: "course",
    categoryBadge: "COURSE COMPLETION",
    badgeAccent: "neutral",
    description:
      "Certificate of completion for a comprehensive 3-month Data Analytics course from November '24 to January '25, awarded on 2 May 2025 for dedication and project achievements.",
    previewUrl: "/assets/certificates/previews/itrnity_course.png",
    previewWebp: "/assets/certificates/previews/itrnity_course.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/itrnity_course.png",
    thumbnailWebp: "/assets/certificates/thumbnails/itrnity_course.webp",
    originalFileUrl: "/assets/certificates/original/Itrnity_Infotech_Course_Completion_Certificate.pdf",
    downloadFilename: "Itrnity_Infotech_Course_Completion_Certificate.pdf",
    width: 1600,
    height: 1132,
    thumbWidth: 600,
    thumbHeight: 424,
    verificationDetails: "3-Month Intensive Course | Issued 2 May 2025",
  },
  {
    id: "power_bi",
    title: "Secure Data Access in Power BI",
    issuer: "Microsoft Learn",
    date: "05 July 2025",
    category: "course",
    categoryBadge: "MICROSOFT LEARN",
    badgeAccent: "neutral",
    description:
      "Microsoft Learn verified credential certifying completion of 'Secure data access in Power BI', focusing on row-level security (RLS), workspace permissions, and secure credential handling.",
    previewUrl: "/assets/certificates/previews/power_bi.png?v=2",
    previewWebp: "/assets/certificates/previews/power_bi.webp?v=2",
    thumbnailUrl: "/assets/certificates/thumbnails/power_bi.png?v=2",
    thumbnailWebp: "/assets/certificates/thumbnails/power_bi.webp?v=2",
    originalFileUrl: "/assets/certificates/original/Power_BI_Desktop_Certificate.pdf",
    downloadFilename: "Power_BI_Desktop_Certificate.pdf",
    width: 1600,
    height: 1237,
    thumbWidth: 600,
    thumbHeight: 463,
    verificationDetails: "Microsoft Learn Verified | 05 July 2025",
  },
  {
    id: "vbyld_quiz_participation",
    title: "Certificate of Participation — VBYLD 2026 Quiz",
    issuer: "Ministry of Youth Affairs & Sports / MY Bharat",
    date: "07 October 2025",
    category: "participation",
    categoryBadge: "PARTICIPATION",
    badgeAccent: "neutral",
    description:
      "Certificate of Participation in the Online Quiz on Viksit Bharat Young Leaders Dialogue (VBYLD) 2026, organized by the Ministry of Youth Affairs and Sports, Government of India.",
    previewUrl: "/assets/certificates/previews/vbyld_quiz_participation.png",
    previewWebp: "/assets/certificates/previews/vbyld_quiz_participation.webp",
    thumbnailUrl: "/assets/certificates/thumbnails/vbyld_quiz_participation.png",
    thumbnailWebp: "/assets/certificates/thumbnails/vbyld_quiz_participation.webp",
    originalFileUrl: "/assets/certificates/original/VBYLD_2026_Quiz_Participation_Certificate.png",
    downloadFilename: "VBYLD_2026_Quiz_Participation_Certificate.png",
    width: 1600,
    height: 1349,
    thumbWidth: 600,
    thumbHeight: 505,
    verificationDetails: "Ministry of Youth Affairs & Sports / MY Bharat | Participation Date 07/10/2025",
  },
];
