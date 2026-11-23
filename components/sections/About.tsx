"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import {
  MapPin,
  GraduationCap,
  Globe,
  Award,
  Music,
  Activity,
  User,
  CheckCircle2,
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              01 // PERSONAL FOUNDATION
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            BEYOND THE CODE
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Education, verified hackathon track record, linguistic fluency, and athletics.
          </p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card: Who I Am & Education (Cols 1-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121212] border border-[#262626] border-l-2 border-l-[#FF5A1F] p-6 sm:p-8 space-y-6 hover:border-[#383838] transition-all">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C8FF00]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0]">
                  WHO I AM
                </span>
              </div>
              <span className="font-mono text-xs text-[#C8FF00] font-bold">NAGPUR, MAHARASHTRA</span>
            </div>

            <p className="text-base sm:text-lg text-[#F5F5F5] leading-relaxed">
              Based in <strong className="text-[#F5F5F5] font-semibold">Nagpur, Maharashtra</strong>.
              Currently pursuing Master of Computer Applications (<strong className="text-[#F5F5F5] font-semibold">MCA</strong>) at{" "}
              <strong className="text-[#F5F5F5] font-semibold">Bharati Vidyapeeth Deemed University (IMED)</strong>, Pune,
              and a <strong className="text-[#F5F5F5] font-semibold">BCA graduate</strong> from City Premier College (Rashtrasant Tukadoji Maharaj Nagpur University).
            </p>

            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
              I specialize in engineering production-grade software architectures — connecting data pipelines,
              machine learning models, and full-stack web applications. Beyond development, I bring the discipline
              of competitive sports and rhythmic precision into structured problem-solving.
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#C8FF00] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                    HIGHER EDUCATION
                  </span>
                  <span className="block font-mono text-xs font-bold text-[#F5F5F5] mt-0.5">
                    MCA (IMED) • BCA (RTMNU)
                  </span>
                  <span className="block text-[11px] text-[#888888]">Graduating 2026</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                    LOCATION & BASE
                  </span>
                  <span className="block font-mono text-xs font-bold text-[#F5F5F5] mt-0.5">
                    Nagpur, Maharashtra, India
                  </span>
                  <span className="block text-[11px] text-[#888888]">Open to relocation & remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hackathons, Languages & Activities (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Hackathons Card */}
            <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 space-y-4 hover:border-[#383838] transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C8FF00]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A0A0A0]">
                    COMPETITIVE HACKATHONS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#C8FF00] font-bold">2026</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] border-l-2 border-l-[#C8FF00]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F5F5F5]">
                      The Sandbox Hackathon 2026
                    </span>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/30">
                      2ND PLACE
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A0A0A0] mt-1">
                    GH Raisoni College of Engineering & Management, Nagpur • Smart Campus Complaint System
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] border-l-2 border-l-[#FF5A1F]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#F5F5F5]">
                      Bharatiya Antariksh Hackathon 2026
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#A0A0A0]">
                      ISRO INITIATIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A0A0A0] mt-1">
                    National space technology hackathon • Team Eduplay
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Athletics Split Card */}
            <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 space-y-4 hover:border-[#383838] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Languages */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#262626]">
                    <Globe className="w-3.5 h-3.5 text-[#C8FF00]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      LANGUAGES
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {siteConfig.languages.map((lang) => (
                      <div
                        key={lang.name}
                        className="flex items-center justify-between text-xs py-1 px-2 rounded bg-[#0A0A0A] border border-[#262626]"
                      >
                        <span className="text-[#F5F5F5] font-medium">{lang.name}</span>
                        <span className="font-mono text-[10px] text-[#C8FF00]">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Athletics & Percussion */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#262626]">
                    <Activity className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      ACTIVITIES
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-1.5 px-2 rounded bg-[#0A0A0A] border border-[#262626]">
                      <span className="block text-xs font-semibold text-[#F5F5F5]">
                        District Badminton
                      </span>
                      <span className="block text-[10px] text-[#A0A0A0]">District-level athlete</span>
                    </div>
                    <div className="p-1.5 px-2 rounded bg-[#0A0A0A] border border-[#262626]">
                      <span className="block text-xs font-semibold text-[#F5F5F5]">
                        Percussion
                      </span>
                      <span className="block text-[10px] text-[#A0A0A0]">Acoustic & rhythm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
