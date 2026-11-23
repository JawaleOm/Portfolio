"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Mindset } from "@/components/sections/Mindset";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Education } from "@/components/sections/Education";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  // Easter egg: keyboard listener for sequence 'o' then 'j'
  useEffect(() => {
    let lastKey = "";
    let timeout: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore in input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (lastKey === "o" && e.key.toLowerCase() === "j") {
        triggerEasterEgg();
        lastKey = "";
      } else {
        lastKey = e.key.toLowerCase();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          lastKey = "";
        }, 1000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);

  const triggerEasterEgg = () => {
    setIsEasterEggActive(true);
    setTimeout(() => {
      setIsEasterEggActive(false);
    }, 2500);
  };

  const handleSelectCertificate = (certId: string) => {
    setSelectedCertId(certId);
    // Smooth scroll to certificates section
    const el = document.getElementById("certificates");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillClick = (skill: string) => {
    if (!skill || activeSkillFilter === skill) {
      setActiveSkillFilter(null);
    } else {
      setActiveSkillFilter(skill);
      // Smooth scroll to projects section so user sees filtered results
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col relative selection:bg-[#C8FF00] selection:text-[#0A0A0A] ${
        isEasterEggActive ? "animate-pulse" : ""
      }`}
    >
      {/* Background Interactive Canvas Particle Network */}
      <AnimatedBackground />

      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Easter Egg Banner Notification */}
      {isEasterEggActive && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono font-black text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(200,255,0,0.8)] flex items-center gap-2 animate-bounce">
          <span>⚡ EASTER EGG UNLOCKED: OM JAWALE ENGINE RUNNING AT 100% ⚡</span>
        </div>
      )}

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onEasterEgg={triggerEasterEgg}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills
          activeSkillFilter={activeSkillFilter}
          onSkillClick={handleSkillClick}
        />
        <Mindset />
        <Experience onSelectCertificate={handleSelectCertificate} />
        <Projects
          onSelectCertificate={handleSelectCertificate}
          activeFilter={activeSkillFilter}
          onClearFilter={() => setActiveSkillFilter(null)}
        />
        <Certificates
          externalSelectedId={selectedCertId}
          onClearExternalSelected={() => setSelectedCertId(null)}
        />
        <GitHubActivity />
        <Education />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Resume Lightbox / Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
