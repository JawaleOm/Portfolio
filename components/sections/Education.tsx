"use client";

import React from "react";
import { educationList } from "@/data/education";
import { GraduationCap, Calendar, CheckCircle2, Clock } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              06 // ACADEMIC RECORD
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            EDUCATION
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Formal degrees and academic background in computer applications and information technology.
          </p>
        </div>

        {/* Education Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => {
            const isInProgress = edu.status === "in-progress";
            return (
              <div
                key={edu.id}
                className={`rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-7 hover:bg-[#161616] hover:border-[#C8FF00]/40 transition-all flex flex-col justify-between space-y-4 ${
                  isInProgress ? "border-l-4 border-l-[#C8FF00]" : "border-l-2 border-l-[#FF5A1F]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#C8FF00]" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        STAGE 0{index + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A0A0A] border border-[#262626]">
                      {isInProgress ? (
                        <>
                          <Clock className="w-3 h-3 text-[#C8FF00] animate-pulse" />
                          <span className="font-mono text-[11px] text-[#C8FF00] font-bold">
                            ENROLLED
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#A0A0A0]" />
                          <span className="font-mono text-[11px] text-[#A0A0A0]">COMPLETED</span>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl text-[#F5F5F5] uppercase tracking-tight">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-semibold text-[#C8FF00]">{edu.institution}</p>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#A0A0A0]">
                    <Calendar className="w-3.5 h-3.5 text-[#666666]" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.highlight && (
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-1">
                      {edu.highlight}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#262626]/60 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>VERIFIED INSTITUTION</span>
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
