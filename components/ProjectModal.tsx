"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { X, Github, ExternalLink, Layers, CheckCircle, Database } from "lucide-react";
import { ProjectVisual } from "./ProjectVisuals";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectCertificate?: (certId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectCertificate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#0A0A0A] border border-[#262626] text-[#A0A0A0] hover:text-[#F5F5F5] hover:border-[#C8FF00] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#FF5A1F] font-bold uppercase tracking-wider">
              PROJECT ARCHITECTURE // {project.year}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] font-mono text-[10px] font-bold">
                {project.badge.text}
              </span>
            )}
          </div>
          <h3
            id="modal-project-title"
            className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-tight"
          >
            {project.name}
          </h3>
          <p className="text-sm font-semibold text-[#C8FF00]">{project.tagline}</p>
        </div>

        {/* Visual Motif */}
        <div className="pt-2">
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Description & Overview */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0] font-bold">
            OVERVIEW
          </h4>
          <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture & Implementation Steps */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C8FF00]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0] font-bold">
              PIPELINE SPECIFICATION & ARCHITECTURE
            </h4>
          </div>
          <ul className="space-y-2">
            {project.details.architecture.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0A0A0] p-2.5 rounded-lg bg-[#0A0A0A] border border-[#262626]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#C8FF00] shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0] font-bold">
            TECHNOLOGIES EMPLOYED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-[#0A0A0A] border border-[#262626] font-mono text-xs text-[#F5F5F5]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d6ff33] transition-all min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span>Verified Repository</span>
              </a>
            )}

            {project.badge?.certificateId && onSelectCertificate && (
              <button
                onClick={() => {
                  onClose();
                  onSelectCertificate(project.badge!.certificateId!);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121212] border border-[#C8FF00]/40 text-[#C8FF00] hover:bg-[#C8FF00]/10 font-mono text-xs font-bold uppercase tracking-wider transition-all min-h-[44px]"
              >
                <span>View Hackathon Award</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-mono text-[#A0A0A0] hover:text-[#F5F5F5] min-h-[44px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
