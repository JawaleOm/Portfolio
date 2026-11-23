"use client";

import React from "react";
import { skillGroups } from "@/data/skills";
import {
  Code,
  Brain,
  BarChart3,
  Server,
  Layout,
  Database,
  Wrench,
  CheckCircle2,
  Filter,
} from "lucide-react";

interface SkillsProps {
  activeSkillFilter?: string | null;
  onSkillClick?: (skill: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({
  activeSkillFilter,
  onSkillClick,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code className="w-4 h-4 text-[#C8FF00]" />;
      case "aiml-llms":
        return <Brain className="w-4 h-4 text-[#C8FF00]" />;
      case "data-analytics":
        return <BarChart3 className="w-4 h-4 text-[#C8FF00]" />;
      case "backend-apis":
        return <Server className="w-4 h-4 text-[#C8FF00]" />;
      case "frontend":
        return <Layout className="w-4 h-4 text-[#C8FF00]" />;
      case "databases-search":
        return <Database className="w-4 h-4 text-[#C8FF00]" />;
      case "tools-devops":
        return <Wrench className="w-4 h-4 text-[#C8FF00]" />;
      default:
        return <Code className="w-4 h-4 text-[#C8FF00]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              02 // TECHNICAL CAPABILITIES
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
                SKILLS INVENTORY
              </h2>
              <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
                Seven grouped competency domains exactly per verified professional qualifications.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-[#262626] text-xs font-mono text-[#A0A0A0] w-fit">
              <Filter className="w-3.5 h-3.5 text-[#C8FF00]" />
              <span>Click any skill to filter projects</span>
            </div>
          </div>
        </div>

        {/* 7 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const isAimlOrData = group.id === "aiml-llms" || group.id === "data-analytics";
            return (
              <div
                key={group.id}
                className={`rounded-2xl bg-[#121212] border border-[#262626] p-6 space-y-4 hover:border-[#C8FF00]/40 hover:bg-[#161616] transition-all flex flex-col justify-between ${
                  isAimlOrData ? "border-l-2 border-l-[#FF5A1F]" : ""
                }`}
              >
                <div>
                  {/* Card Header with Icon & Micro-label */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(group.id)}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        {group.monoLabel}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#666666]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Group Title */}
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight text-[#F5F5F5] mb-4">
                    {group.category}
                  </h3>

                  {/* Skill Badges (Clickable filter) */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const isSelected = activeSkillFilter?.toLowerCase() === skill.toLowerCase();
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => {
                            if (onSkillClick) {
                              onSkillClick(isSelected ? "" : skill);
                            }
                          }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#C8FF00] text-[#0A0A0A] font-bold border border-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.4)] scale-105"
                              : "bg-[#0A0A0A] border border-[#262626] text-[#D4D4D4] hover:text-[#C8FF00] hover:border-[#C8FF00]/40"
                          }`}
                          title={`Click to filter projects by ${skill}`}
                        >
                          <CheckCircle2
                            className={`w-3 h-3 shrink-0 ${
                              isSelected ? "text-[#0A0A0A]" : "text-[#C8FF00]"
                            }`}
                          />
                          <span>{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-4 border-t border-[#262626]/60 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>{group.skills.length} VERIFIED STACK ITEMS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
