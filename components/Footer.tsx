"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#262626] bg-[#0A0A0A] py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Brand info with SVG Logo */}
          <div className="space-y-3">
            <Logo />
            <p className="text-xs text-[#A0A0A0] max-w-md pt-2">
              MCA student at Bharati Vidyapeeth (IMED). Building intelligent systems, multilingual NLP pipelines, and verified production full-stack architectures.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              aria-label="Email Om"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.resumeDownloadUrl}
              download="Om_Jawale_Resume.pdf"
              className="w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              title="Download Resume PDF"
              aria-label="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#121212] border border-[#262626] text-xs font-mono text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors ml-2 min-h-[44px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Navigation Grid + Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#666666]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F5F5F5] uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Designed & Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};
