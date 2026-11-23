import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omjawale.dev"),
  title: "Om Jawale | AI & Full-Stack Engineer | Machine Learning | Data Analytics",
  description:
    "Portfolio of Om Jawale — MCA student at Bharati Vidyapeeth (IMED) and BCA graduate. Building intelligent systems, multilingual NLP pipelines, async web crawlers, and modern full-stack web applications. 2nd Place Winner at The Sandbox Hackathon 2026.",
  keywords: [
    "Om Jawale",
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "Data Analytics",
    "Next.js",
    "FastAPI",
    "NLP Pipeline",
    "Nagpur",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Om Jawale", url: "https://github.com/JawaleOm" }],
  creator: "Om Jawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omjawale.dev",
    siteName: "Om Jawale Portfolio",
    title: "Om Jawale | AI & Full-Stack Engineer",
    description:
      "Building Intelligent Systems. Turning Ideas Into Impact. AI/ML, Data Analytics, and Full-Stack Engineering.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Om Jawale - AI & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Jawale | AI & Full-Stack Engineer",
    description:
      "Building Intelligent Systems. Turning Ideas Into Impact. AI/ML, Data Analytics, and Full-Stack Engineering.",
    images: ["/og-image.png"],
    creator: "@JawaleOm",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#C8FF00] selection:text-[#0A0A0A]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
