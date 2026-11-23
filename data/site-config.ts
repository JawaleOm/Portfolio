export interface SiteConfig {
  name: string;
  initials: string;
  heroBadge: string;
  institutionFull: string;
  headline: string;
  subheadline: string;
  location: string;
  statusBadge: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedin: string;
  github: string;
  resumeDownloadUrl: string;
  navLinks: { name: string; href: string }[];
  languages: { name: string; level: string }[];
  interests: string[];
}

export const siteConfig: SiteConfig = {
  name: "Om Jawale",
  initials: "OJ",
  heroBadge: "MCA — IMED",
  institutionFull: "Bharati Vidyapeeth Deemed University (IMED)",
  headline: "BUILDING INTELLIGENT SYSTEMS. TURNING IDEAS INTO IMPACT.",
  subheadline:
    "I build intelligent applications that combine AI, machine learning, data analytics and modern full-stack technologies to solve real-world problems.",
  location: "Nagpur, Maharashtra, India",
  statusBadge: "NAGPUR, INDIA • OPEN TO AI/ML & FULL-STACK ROLES",
  email: "omjawale23@gmail.com",
  phone: "+919356606951",
  phoneDisplay: "+91 9356606951",
  linkedin: "https://linkedin.com/in/om-jawale-4b7a9431a",
  github: "https://github.com/JawaleOm",
  resumeDownloadUrl: "/assets/resume/Om_Jawale_Resume.pdf?v=2",
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Mindset", href: "#mindset" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "GitHub", href: "#github" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
  languages: [
    { name: "English", level: "Intermediate" },
    { name: "Hindi", level: "Fluent" },
    { name: "Marathi", level: "Fluent" },
  ],
  interests: [
    "District-level badminton",
    "Percussion",
    "Applied AI Research",
    "Hackathons & Rapid Prototyping",
  ],
};
