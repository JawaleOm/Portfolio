"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Menu, X, FileText } from "lucide-react";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onOpenResumeModal: () => void;
  onEasterEgg?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onEasterEgg }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        "hero",
        "about",
        "skills",
        "mindset",
        "experience",
        "projects",
        "certificates",
        "github",
        "education",
        "resume",
        "contact",
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626] py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* SVG Logo Monogram + Wordmark */}
        <Logo onEasterEgg={onEasterEgg} />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#121212]/80 border border-[#262626] px-3 py-1.5 rounded-full backdrop-blur-md">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                  isActive
                    ? "text-[#0A0A0A] bg-[#C8FF00] font-bold shadow-sm"
                    : "text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-[#1A1A1A]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button: Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold bg-[#C8FF00] text-[#0A0A0A] rounded-full hover:bg-[#d4ff33] transition-all hover:scale-[1.02] shadow-[0_0_15px_-3px_rgba(200,255,0,0.3)] min-h-[44px]"
            aria-label="View Resume Modal"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] transition-colors focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#C8FF00]" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 top-[65px] bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#262626] z-50 flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto"
        >
          <div className="flex flex-col gap-2 pt-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold pb-2">
              NAVIGATION
            </span>
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-base font-mono uppercase tracking-wider text-[#F5F5F5] hover:text-[#C8FF00] hover:bg-[#121212] border border-transparent hover:border-[#262626] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#262626] space-y-3 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-3.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Resume</span>
            </button>
            <a
              href={siteConfig.resumeDownloadUrl}
              download="Om_Jawale_Resume.pdf"
              className="w-full py-3.5 rounded-full bg-[#121212] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
