"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl bg-[#121212] border border-[#262626] border-t-4 border-t-[#C8FF00] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#262626] bg-[#0A0A0A]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3
                id="modal-resume-title"
                className="font-display font-bold text-sm sm:text-base text-[#F5F5F5] uppercase tracking-tight"
              >
                Om Jawale — Resume (One Page)
              </h3>
              <p className="font-mono text-[10px] text-[#A0A0A0]">
                AI & FULL-STACK ENGINEER | NAGPUR, INDIA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
              title="Open in new tab"
              aria-label="Open resume in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.resumeDownloadUrl}
              download="Om_Jawale_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold hover:bg-[#d6ff33] transition-colors"
              title="Download PDF"
              aria-label="Download Om Jawale Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#A0A0A0] hover:text-[#F5F5F5] hover:border-red-500 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewer Body: Desktop uses iframe/object, mobile shows fallback preview image with download */}
        <div className="relative flex-1 bg-[#0A0A0A] overflow-y-auto">
          {/* Desktop PDF iframe */}
          <div className="hidden sm:block w-full h-full">
            <iframe
              src={`${siteConfig.resumeDownloadUrl}#toolbar=0&navpanes=0`}
              title="Om Jawale Resume PDF"
              className="w-full h-full border-none"
            />
          </div>

          {/* Mobile Fallback Image */}
          <div className="sm:hidden p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[1/1.414] rounded-lg overflow-hidden border border-[#262626] bg-[#121212] shadow-lg mb-4">
              <Image
                src="/assets/resume/resume_preview.webp"
                alt="Om Jawale Resume Preview"
                fill
                className="object-contain"
              />
            </div>
            <a
              href={siteConfig.resumeDownloadUrl}
              download="Om_Jawale_Resume.pdf"
              className="w-full py-3 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase font-bold text-center"
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
