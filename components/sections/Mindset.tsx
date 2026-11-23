"use client";

import React from "react";
import { mindsetPrinciples } from "@/data/mindset";
import { Compass, Trophy, LineChart, GraduationCap, Sparkles, Quote } from "lucide-react";

export const Mindset: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-[#C8FF00]" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-[#C8FF00]" />;
      case "LineChart":
        return <LineChart className="w-5 h-5 text-[#C8FF00]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#C8FF00]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C8FF00]" />;
    }
  };

  return (
    <section id="mindset" className="py-20 md:py-28 border-t border-[#262626] bg-[#0A0A0A]/50 relative overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,255,0,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#262626]">
            <Sparkles className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold">
              MINDSET & PHILOSOPHY
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            Engineering Mindset & Growth
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#C8FF00] font-semibold italic">
            &ldquo;The Principles that Drive My Growth&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed pt-1">
            The core engineering values that guide how I solve problems, tackle ambiguity, and build dependable systems.
          </p>

          {/* Lime Accent Underline Bar */}
          <div className="w-16 h-1 bg-[#C8FF00] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Cards Grid with Desktop Connecting Dashed Line */}
        <div className="relative">
          {/* Subtle Desktop Connecting Dashed Line */}
          <div className="hidden lg:block absolute top-[130px] left-[10%] right-[10%] border-t border-dashed border-[#262626] pointer-events-none z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {mindsetPrinciples.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#121212] border border-[#262626] p-6 flex flex-col justify-between space-y-6 hover:bg-[#161616] hover:border-[#C8FF00]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative"
              >
                {/* Top: Icon & Number Badge */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                    <div className="w-11 h-11 rounded-xl bg-[#0A0A0A] border border-[#262626] group-hover:border-[#C8FF00]/40 flex items-center justify-center transition-colors shadow-inner">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="font-mono text-xs text-[#666666] group-hover:text-[#C8FF00] font-bold transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-lg uppercase tracking-tight text-[#F5F5F5] mt-5 mb-3 group-hover:text-[#C8FF00] transition-colors">
                    {item.title}
                  </h3>

                  {/* Quote with vertical orange accent bar */}
                  <div className="relative pl-3.5 my-3 border-l-2 border-l-[#FF5A1F]">
                    <p className="text-xs sm:text-[13px] text-[#F5F5F5] font-medium leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Description / Support */}
                  <p className="text-xs text-[#A0A0A0] leading-relaxed pt-2">
                    {item.support}
                  </p>
                </div>

                {/* Footer Micro-label */}
                <div className="pt-4 border-t border-[#262626]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F] group-hover:bg-[#C8FF00] transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#666666] group-hover:text-[#A0A0A0] transition-colors font-medium">
                    {item.footerLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
