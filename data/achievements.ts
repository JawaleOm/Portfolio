export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  date: string;
  projectOrTeam: string;
  type: "award" | "hackathon";
  badge: string;
  badgeColor: "lime" | "neutral";
  description: string;
  certificateId?: string;
}

export const achievements: Achievement[] = [
  {
    id: "sandbox-hackathon",
    title: "2nd Place — The Sandbox Hackathon",
    organizer: "GH Raisoni College of Engineering and Management, Nagpur",
    date: "April 2026",
    projectOrTeam: "Smart Campus Complaint System",
    type: "award",
    badge: "2ND PLACE WINNER",
    badgeColor: "lime",
    description:
      "Recognized for designing and building an end-to-end full-stack campus governance platform featuring real-time WebSockets, role-based dashboards (Student, Staff, Admin), and JWT security.",
    certificateId: "hackathon_2nd_place",
  },
  {
    id: "bharatiya-antariksh-hackathon",
    title: "Bharatiya Antariksh Hackathon 2026",
    organizer: "ISRO & Hack2Skill",
    date: "2026",
    projectOrTeam: "Team Eduplay: AI Digital Twin of India’s Climate",
    type: "hackathon",
    badge: "HACKATHON PARTICIPANT",
    badgeColor: "neutral",
    description:
      "Collaborated as part of Team Eduplay on building an AI Digital Twin modeling regional climate indices and earth observation telemetry data.",
  },
];
