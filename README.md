# Om Jawale — Personal Portfolio

A production-quality personal portfolio website for **Om Jawale** — AI & Full-Stack Engineer specializing in Machine Learning, Multilingual NLP Pipelines, and Data Analytics.

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**. Designed in a high-contrast dark aesthetic: near-black background (`#0A0A0A`), card surfaces (`#121212` / `#161616`), borders (`#262626`), neon lime highlights (`#C8FF00`), and subtle orange accents (`#FF5A1F`).

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Core**: React 18, TypeScript (Strict Type Safety)
- **Styling**: Tailwind CSS, Custom Utility Classes, CSS Variables
- **Icons**: [lucide-react](https://lucide.dev/)
- **Visuals & Interactivity**: Interactive HTML5 Canvas Particle Network, 3D Tilt, Custom Cursor Follower, Responsive Modals
- **Deployment**: Optimized for [Vercel](https://vercel.com/) with static pre-rendering and serverless route handlers

---

## ✨ Features & Architecture

- **Original Monogram Brand**: Custom geometric SVG logo (orbit O + circuit-trace J) with stroke-draw on mount and an easter egg interactive pulse.
- **Hero Section**: Verified professional portrait with mouse-follow 3D card tilt, verified status pill, `MCA — IMED` identity badge, and magnetic action CTAs.
- **About ("Beyond the Code")**: Verified academic foundation (MCA at Bharati Vidyapeeth IMED, BCA from RTMNU), hackathon track record, linguistic fluency, and competitive athletics.
- **Skills Inventory**: 7 grouped competency domains (Languages, AI/ML & LLMs, Data Analytics, Backend, Frontend, Databases & Search, Tools & DevOps) with **interactive skill filtering** that dynamically highlights matching projects.
- **Engineering Mindset & Growth**: 4 core engineering principles (*01 Build to Learn*, *02 Pressure Is Practice*, *03 Evidence Over Opinion*, *04 Keep Learning*) with quote accent bars and desktop connecting line.
- **Industry Experience**: Verified data analytics internships at Itrnity Infotech and Codec Technologies with direct links to credentials.
- **Featured Projects**: Asymmetric grid showcasing real-world systems:
  - **Smart Campus Complaint System** (*Flagship Hero Card*): 2nd Place at The Sandbox Hackathon 2026, tri-portal WebSocket dispatch mesh, role-based JWT auth, and trophy badge linking directly to the certificate lightbox.
  - **People's Priorities** (*Prominent Card*): 6-stage multilingual NLP pipeline ranking citizen grievances into development planning.
  - **WebVault** (*Prominent Card*): Asynchronous crawler with local Llama 3 categorization and Meilisearch full-text search.
  - **Sales Forecasting & Customer Churn Prediction** (*Compact Cards*): Time-series ML benchmarks and classification pipelines.
- **Certificates & Honors Lightbox**: 7 verified credentials (Microsoft Learn Power BI, Itrnity Infotech, Codec Technologies, The Sandbox Hackathon, VBYLD) rendered upright with high-res zoom, pan, keyboard navigation, and PDF downloads.
- **GitHub Activity & Code Journey**: Synced contribution heatmap calendar (53×7 grid), repository statistics, and direct links to public project repositories.
- **Education Timeline**: Degree timelines covering MCA, BCA, HSC, and SSC.
- **Curated Resume Viewer**: Embedded ATS-optimized resume viewer for desktop, high-res fallback card for mobile, fullscreen modal, and direct PDF download.
- **Contact Form**: Multi-field validated contact form with direct mailto fallback when no API key is provided.

---

## 📁 Repository Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form submission handler (Resend / fallback)
│   │   └── github/route.ts       # GitHub user & contribution calendar data handler
│   ├── globals.css               # Dark theme variables, custom scrollbar, animations
│   ├── layout.tsx                # Metadata, viewport, font configuration
│   ├── page.tsx                  # Single-page layout & state orchestration
│   ├── robots.ts                 # Search engine crawler directives
│   └── sitemap.ts                # Dynamic sitemap generator
├── components/
│   ├── AnimatedBackground.tsx    # Canvas particle network with drifting nodes & glyphs
│   ├── CertificateLightbox.tsx   # Fullscreen zoom/pan certificate viewer with keyboard controls
│   ├── CustomCursor.tsx          # Desktop cursor follower ring
│   ├── Footer.tsx                # Site footer with monogram logo and back-to-top
│   ├── Logo.tsx                  # Geometric SVG logo with stroke animation & easter egg
│   ├── Navbar.tsx                # Sticky dark navigation with scroll spy & mobile menu
│   ├── ProjectModal.tsx          # Deep-dive architecture modal for projects
│   ├── ProjectVisuals.tsx        # Dynamic SVG/CSS architectural motifs
│   ├── ResumeModal.tsx           # Fullscreen responsive resume modal
│   └── sections/
│       ├── About.tsx             # Academic & personal foundation ("Beyond the Code")
│       ├── Certificates.tsx      # Verified credentials gallery + honors strip
│       ├── Contact.tsx           # Contact coordinates and message form
│       ├── Education.tsx         # Academic timeline
│       ├── Experience.tsx        # Professional internship experience
│       ├── GitHubActivity.tsx    # Live contribution calendar & stats
│       ├── Hero.tsx              # Portrait photo card, identity pill, CTAs
│       ├── Mindset.tsx           # Core engineering philosophy cards
│       ├── Projects.tsx          # Asymmetric projects showcase with skill filtering
│       ├── ResumeSection.tsx     # Embedded resume preview & download
│       └── Skills.tsx            # 7-group technical capabilities inventory
├── data/
│   ├── achievements.ts           # Hackathon honors and awards
│   ├── certificates.ts           # Certificate metadata and preview paths
│   ├── education.ts              # Academic degree milestones
│   ├── experience.ts             # Professional roles and achievements
│   ├── mindset.ts                # Engineering principles and quotes
│   ├── projects.ts               # Project details, tech tags, and verified URLs
│   ├── site-config.ts            # Site configuration, bio, navigation links
│   └── skills.ts                 # Categorized skills inventory
└── public/
    └── assets/
        ├── certificates/
        │   ├── original/         # Unaltered original PDF & PNG certificate documents
        │   ├── previews/         # High-resolution upright WebP & PNG previews
        │   └── thumbnails/       # Responsive card thumbnails
        ├── photo/                # Professional portrait (WebP & JPEG)
        └── resume/               # Om_Jawale_Resume.pdf + mobile preview
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.17+ (Tested on v24.20.0)
- **npm**: v9+ (Tested on v11.19.0)

### 1. Clone & Install

```bash
git clone https://github.com/JawaleOm/Portfolio.git
cd Portfolio
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Resend API key for delivering contact form messages | Optional |
| `CONTACT_TO_EMAIL` | Destination email for contact form submissions | Optional |
| `GITHUB_TOKEN` | GitHub personal token to increase API rate limits for heatmap | Optional |
| `WEB3FORMS_ACCESS_KEY` | Alternative form forwarding provider | Optional |

> **Note**: If no environment variables are configured, the site works completely out-of-the-box. The contact form validates inputs and gracefully falls back to a pre-filled direct mailto link to `omjawale23@gmail.com`.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio with hot module reloading.

### 4. Production Build

```bash
npm run build
npm start
```

---

## 🛠️ Updating Portfolio Content

All data is separated into type-safe modules in `/data`:

- **Projects**: Edit `data/projects.ts` to add or update projects, live demo links, architecture descriptions, or tech tags.
- **Certificates**: Place new certificates in `public/assets/certificates/original/` and add entries to `data/certificates.ts`.
- **Skills**: Update categories or add competencies in `data/skills.ts`.
- **Mindset**: Update core principles in `data/mindset.ts`.
- **Site Metadata**: Update contact coordinates, titles, and social handles in `data/site-config.ts`.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub: `https://github.com/JawaleOm/Portfolio`.
2. Navigate to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `JawaleOm/Portfolio` repository.
4. (Optional) Set your environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `GITHUB_TOKEN`).
5. Click **"Deploy"**. The site will be built and distributed on Vercel's global edge network.

---

## 📬 Contact & Connect

- **Author**: Om Jawale
- **GitHub**: [@JawaleOm](https://github.com/JawaleOm)
- **LinkedIn**: [linkedin.com/in/om-jawale](https://linkedin.com/in/om-jawale)
- **Email**: [omjawale23@gmail.com](mailto:omjawale23@gmail.com)
