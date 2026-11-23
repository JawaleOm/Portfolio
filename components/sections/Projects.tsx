"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { Github, ExternalLink, Award, Info, Sparkles, Trophy, X, Filter } from "lucide-react";
import { ProjectVisual } from "../ProjectVisuals";
import { ProjectModal } from "../ProjectModal";

interface ProjectsProps {
  onSelectCertificate: (certId: string) => void;
  activeFilter?: string | null;
  onClearFilter?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectCertificate,
  activeFilter,
  onClearFilter,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mouse spotlight glow tracker
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const flagshipProject = projects.find((p) => p.size === "flagship") || projects[0];
  const prominentProjects = projects.filter((p) => p.size === "prominent");
  const compactProjects = projects.filter((p) => p.size === "compact");

  // Filter check helper
  const matchesFilter = (project: Project) => {
    if (!activeFilter) return true;
    const lowerFilter = activeFilter.toLowerCase();
    return (
      project.tech.some((t) => t.toLowerCase().includes(lowerFilter)) ||
      project.description.toLowerCase().includes(lowerFilter) ||
      project.name.toLowerCase().includes(lowerFilter)
    );
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#262626] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              04 // FEATURED WORKS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            ENGINEERING PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Production systems spanning real-time WebSockets, multilingual NLP pipelines, distributed crawlers, and predictive ML models.
          </p>

          {/* Active Skill Filter Banner */}
          {activeFilter && (
            <div className="pt-4 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-[#C8FF00]/40 text-xs font-mono">
                <Filter className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span className="text-[#A0A0A0]">Filtering by skill:</span>
                <span className="text-[#C8FF00] font-bold">{activeFilter}</span>
                {onClearFilter && (
                  <button
                    onClick={onClearFilter}
                    className="ml-1 p-0.5 rounded-full hover:bg-[#262626] text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                    aria-label="Clear skill filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Asymmetric Grid */}
        <div className="space-y-8">
          {/* 1. Flagship Card: Smart Campus Complaint System (Hero Card) */}
          {flagshipProject && (
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] p-6 sm:p-8 hover:bg-[#161616] hover:border-[#C8FF00]/50 transition-all duration-300 space-y-6 shadow-2xl group ${
                matchesFilter(flagshipProject) ? "opacity-100" : "opacity-35"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-[#262626]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* 2nd Place Trophy Badge Linking to Lightbox */}
                    <button
                      onClick={() => onSelectCertificate("cert-hackathon-sandbox")}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-wider hover:bg-[#d4ff33] transition-all hover:scale-105 shadow-[0_0_15px_-3px_rgba(200,255,0,0.4)]"
                      title="Inspect The Sandbox Hackathon Certificate"
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      <span>2ND PLACE — THE SANDBOX HACKATHON 2026</span>
                    </button>
                    <span className="font-mono text-xs text-[#A0A0A0]">
                      {flagshipProject.year} • GH Raisoni College, Nagpur
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                    {flagshipProject.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#C8FF00]">
                    {flagshipProject.tagline}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#161616] border border-[#262626] text-[#C8FF00] font-mono text-xs font-bold uppercase tracking-wider hover:border-[#C8FF00] transition-all min-h-[44px]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {flagshipProject.repoUrl && (
                    <a
                      href={flagshipProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Smart Campus Complaint System on GitHub"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d6ff33] transition-all hover:scale-105 shadow-[0_0_15px_-3px_rgba(200,255,0,0.3)] min-h-[44px]"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] font-mono text-xs font-semibold hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all min-h-[44px]"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed max-w-4xl">
                {flagshipProject.description}
              </p>

              {/* Visual Motif: Tri-Portal Realtime WebSocket Mesh */}
              <ProjectVisual type={flagshipProject.visualType} />

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#262626]/60">
                <span className="font-mono text-[10px] uppercase text-[#666666] mr-1">TECH:</span>
                {flagshipProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#0A0A0A] border border-[#262626] font-mono text-[11px] text-[#A0A0A0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 2. Prominent Cards: People's Priorities & WebVault (2 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {prominentProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl bg-[#121212] border border-[#262626] border-l-2 border-l-[#FF5A1F] p-6 sm:p-7 hover:bg-[#161616] hover:border-[#C8FF00]/40 transition-all flex flex-col justify-between space-y-5 shadow-xl ${
                  matchesFilter(project) ? "opacity-100" : "opacity-35"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#262626]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold">
                          SYSTEM // {project.year}
                        </span>
                        {project.badge && (
                          <button
                            onClick={() => {
                              if (project.badge?.certificateId) {
                                onSelectCertificate(project.badge.certificateId);
                              }
                            }}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] font-mono text-[10px] font-bold hover:bg-[#C8FF00] hover:text-[#0A0A0A] transition-colors"
                          >
                            <Award className="w-3 h-3" />
                            <span>{project.badge.text}</span>
                          </button>
                        )}
                      </div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#F5F5F5] uppercase tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#A0A0A0] mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#D4D4D4] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual Motif */}
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Footer: Tech + Actions */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#262626] font-mono text-[10px] text-[#A0A0A0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#262626]">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold hover:bg-[#d6ff33] transition-all min-h-[44px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0A0A0A] border border-[#262626] text-[#A0A0A0] hover:text-[#F5F5F5] hover:border-[#C8FF00] font-mono text-xs transition-colors min-h-[44px]"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Compact Cards: Sales Forecasting & Customer Churn (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compactProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl bg-[#121212] border border-[#262626] p-5 sm:p-6 hover:bg-[#161616] hover:border-[#C8FF00]/40 transition-all flex flex-col justify-between space-y-4 ${
                  matchesFilter(project) ? "opacity-100" : "opacity-35"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold">
                      ML BENCHMARK // {project.year}
                    </span>
                    <span className="font-mono text-[10px] text-[#C8FF00] font-semibold">
                      DATA SCIENCE
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl text-[#F5F5F5] uppercase tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                    {project.description}
                  </p>

                  <ProjectVisual type={project.visualType} />
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#262626] font-mono text-[10px] text-[#A0A0A0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] font-mono text-xs font-semibold transition-all min-h-[44px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-[#A0A0A0] hover:text-[#C8FF00] transition-colors p-2"
                    >
                      View Specs →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectCertificate={onSelectCertificate}
      />
    </section>
  );
};
