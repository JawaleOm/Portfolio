"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import {
  Download,
  Eye,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
} from "lucide-react";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  // 3D Tilt State for Photo Card
  const photoCardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max 6 degrees rotation
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glow Band */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(200,255,0,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Content (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#262626] shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00]" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#A0A0A0] font-medium truncate">
                {siteConfig.statusBadge}
              </span>
            </div>

            {/* Name Heading + Identity Area (MCA — IMED) */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase text-[#F5F5F5] leading-[0.95]">
                {siteConfig.name}
              </h1>

              {/* MCA — IMED Pill Badge & Subline */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/40 text-[#C8FF00] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase w-fit">
                  <GraduationCap className="w-4 h-4 text-[#C8FF00]" />
                  <span>{siteConfig.heroBadge}</span>
                </div>
                <span className="font-mono text-xs text-[#A0A0A0]">
                  {siteConfig.institutionFull}
                </span>
              </div>
            </div>

            {/* Headline Banner */}
            <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] border-l-2 border-l-[#FF5A1F] w-full">
              <p className="font-display font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#F5F5F5]">
                {siteConfig.headline}
              </p>
            </div>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-2xl">
              {siteConfig.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary Lime CTA with subtle magnetic scale */}
              <a
                href={siteConfig.resumeDownloadUrl}
                download="Om_Jawale_Resume.pdf"
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#d4ff33] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_-5px_rgba(200,255,0,0.4)] min-h-[48px] w-full sm:w-auto text-center"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* Secondary Outline: View Projects */}
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all min-h-[48px] w-full sm:w-auto text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* View Resume in Lightbox */}
              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent border border-transparent text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-[#161616] font-mono text-xs uppercase tracking-wider transition-all min-h-[48px] w-full sm:w-auto"
                aria-label="View Resume Preview"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social & Contact Icon Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#262626] w-full">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#666666] mr-2">
                CONNECT
              </span>
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
                href={`tel:${siteConfig.phone}`}
                className="w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
                aria-label="Call Om"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Tilting Photo Card (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={photoCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? "transform 0.5s ease-out" : "transform 0.1s ease-out",
              }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] cursor-pointer will-change-transform"
            >
              {/* Back Accent Card with Lime Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-[#C8FF00]/30 via-transparent to-[#FF5A1F]/20 blur-sm opacity-80" />

              <div className="relative rounded-2xl bg-[#121212] border border-[#262626] p-3 overflow-hidden shadow-2xl hover:border-[#C8FF00]/50 transition-colors">
                {/* Micro-label top bar */}
                <div className="flex items-center justify-between pb-2.5 px-1 border-b border-[#262626] mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      VERIFIED PORTRAIT
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold">
                    NAGPUR, IN
                  </span>
                </div>

                {/* Photo container: 4:5 aspect ratio, cropped upper third */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626]">
                  <Image
                    src="/assets/photo/om_jawale.webp"
                    alt="Om Jawale - MCA Student at IMED"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-[50%_20%]"
                  />
                  {/* Subtle inner shadow border */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
                </div>

                {/* Caption / Metadata below photo */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A0A0A0]">OM JAWALE</span>
                  <span className="text-[#C8FF00] font-bold">MCA @ IMED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
