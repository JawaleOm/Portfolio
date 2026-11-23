"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, Award, ExternalLink, ChevronRight } from "lucide-react";

interface ExperienceProps {
  onSelectCertificate: (certId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectCertificate }) => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              03 // CAREER TIMELINE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            WORK EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Industry experience in data analytics, educational tech infrastructure, and data pipelines.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#262626] space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, index) => {
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#C8FF00] group-hover:scale-125 group-hover:bg-[#C8FF00] transition-all" />

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#121212] border border-[#262626] border-l-2 border-l-[#FF5A1F] p-6 sm:p-8 hover:bg-[#161616] hover:border-[#C8FF00]/40 transition-all space-y-4">
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#262626]">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold block mb-1">
                        ROLE #{index + 1}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#F5F5F5] uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#C8FF00] mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A] border border-[#262626] self-start sm:self-auto shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#C8FF00]" />
                      <span className="font-mono text-xs text-[#A0A0A0] font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points exactly per resume */}
                  <ul className="space-y-2.5 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#C8FF00] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer: Tech tags + Linked Certificate Trigger */}
                  <div className="pt-4 border-t border-[#262626]/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {exp.techTags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#262626] text-[11px] font-mono text-[#A0A0A0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.certificateId && (
                      <button
                        onClick={() => onSelectCertificate(exp.certificateId!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] hover:bg-[#C8FF00] hover:text-[#0A0A0A] font-mono text-xs font-bold transition-all"
                        aria-label={`View Certificate for ${exp.company}`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
