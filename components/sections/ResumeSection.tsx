"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
} from "lucide-react";

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 md:py-28 border-t border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              08 // CURRICULUM VITAE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            CURATED RESUME
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Single-page verified resume detailing AI architectures, full-stack systems, education, and credentials.
          </p>
        </div>

        {/* Prominent Resume Card Container */}
        <div className="rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Top Control Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-black text-lg sm:text-xl text-[#F5F5F5] uppercase tracking-tight break-all">
                  Om_Jawale_Resume.pdf
                </h3>
                <p className="font-mono text-xs text-[#A0A0A0]">
                  Verified ATS-Optimized Document • 1 Page • Updated 2026
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* View in Modal */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all min-h-[44px]"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>

              {/* Open in New Tab */}
              <a
                href={siteConfig.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all min-h-[44px]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in New Tab</span>
              </a>

              {/* Download Original PDF */}
              <a
                href={siteConfig.resumeDownloadUrl}
                download="Om_Jawale_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#d4ff33] transition-all hover:scale-[1.02] shadow-[0_0_15px_-3px_rgba(200,255,0,0.3)] min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Viewer: Desktop iframe / Mobile preview fallback card */}
          <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] overflow-hidden">
            {/* Desktop Iframe (Visible on md and up) */}
            <div className="hidden md:block w-full h-[780px]">
              <object
                data={`${siteConfig.resumeDownloadUrl}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src={`${siteConfig.resumeDownloadUrl}#toolbar=0&navpanes=0`}
                  title="Om Jawale Resume"
                  className="w-full h-full border-none"
                />
              </object>
            </div>

            {/* Mobile Fallback Card (Visible on mobile/tablet) */}
            <div className="md:hidden p-4 sm:p-6 flex flex-col items-center space-y-4">
              <div className="relative w-full max-w-[420px] aspect-[1/1.414] rounded-lg overflow-hidden border border-[#262626] bg-[#121212] shadow-xl">
                <Image
                  src="/assets/resume/resume_preview.webp?v=2"
                  alt="Om Jawale Resume Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain"
                />
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="flex-1 py-3 px-4 rounded-full bg-[#161616] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase font-bold text-center hover:border-[#C8FF00] min-h-[48px] flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-[#C8FF00]" />
                  <span>Inspect Resume</span>
                </button>
                <a
                  href={siteConfig.resumeDownloadUrl}
                  download="Om_Jawale_Resume.pdf"
                  className="flex-1 py-3 px-4 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase font-bold text-center min-h-[48px] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center justify-between text-xs font-mono text-[#666666] pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" />
              SOURCE OF TRUTH VERIFIED
            </span>
            <span>UPDATED: 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
