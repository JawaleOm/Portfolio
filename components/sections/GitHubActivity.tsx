"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Github,
  GitBranch,
  BookOpen,
  Users,
  Activity,
  ExternalLink,
  Flame,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { projects } from "@/data/projects";

interface GitHubData {
  success: boolean;
  user: {
    login: string;
    name: string;
    public_repos: number;
    followers: number;
    avatar_url: string;
  };
  contributions: {
    total: number;
    days: { date: string; count: number; level: number }[];
    hasRecentActivity: boolean;
  };
  lastUpdated: string;
  error?: string;
}

export const GitHubActivity: React.FC = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);
  const heatmapScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((json: GitHubData) => {
        setData(json);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  // Scroll heatmap to right on mobile
  useEffect(() => {
    if (heatmapScrollRef.current) {
      heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth;
    }
  }, [data]);

  // Group 365 days into 53 weeks x 7 days
  const weeks: { date: string; count: number; level: number }[][] = [];
  if (data && data.contributions && data.contributions.days.length > 0) {
    const days = [...data.contributions.days];
    // Pad days if needed to align with day-of-week (Sunday=0 ... Saturday=6)
    const firstDate = new Date(days[0].date);
    const startDay = firstDate.getDay();
    const padded: { date: string; count: number; level: number; dummy?: boolean }[] = [];

    for (let i = 0; i < startDay; i++) {
      padded.push({ date: "", count: 0, level: 0, dummy: true });
    }
    padded.push(...days);

    while (padded.length > 0) {
      weeks.push(padded.splice(0, 7) as any);
    }
  }

  const getCellColor = (level: number, count: number) => {
    if (count > 8) return "bg-[#FF5A1F]"; // Peak day accent
    switch (level) {
      case 1:
        return "bg-[#1f3805]";
      case 2:
        return "bg-[#43730a]";
      case 3:
        return "bg-[#82c400]";
      case 4:
        return "bg-[#C8FF00]";
      default:
        return "bg-[#181818]";
    }
  };

  return (
    <section id="github" className="py-20 md:py-28 border-t border-[#262626] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#262626]">
            <Activity className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              CODE ACTIVITY
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            GITHUB ACTIVITY & CODE JOURNEY
          </h2>

          <p className="font-display italic text-sm sm:text-base text-[#A0A0A0]">
            &ldquo;Engineering in the open through code and continuous iteration&rdquo;
          </p>

          <div className="w-16 h-1 bg-[#C8FF00] mx-auto rounded-full mt-2" />
        </div>

        {/* Large Dark Card */}
        <div className="rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] p-6 sm:p-8 space-y-8 shadow-2xl">
          {/* Top Bar: Profile, Handle, Active Badge & Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262626]">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-[#262626] overflow-hidden flex items-center justify-center p-1">
                {data?.user?.avatar_url ? (
                  <Image
                    src={data.user.avatar_url}
                    alt={data.user.name || "Om Jawale"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Github className="w-7 h-7 text-[#C8FF00]" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-xl text-[#F5F5F5] uppercase tracking-tight">
                    {data?.user?.name || "Om Jawale"}
                  </h3>
                  {data?.contributions?.hasRecentActivity && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/40 text-[#C8FF00] font-mono text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
                      Active
                    </span>
                  )}
                </div>
                <a
                  href={`https://github.com/${data?.user?.login || "JawaleOm"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#A0A0A0] hover:text-[#C8FF00] transition-colors"
                >
                  @{data?.user?.login || "JawaleOm"}
                </a>
              </div>
            </div>

            <a
              href="https://github.com/JawaleOm?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider font-semibold hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all min-h-[44px] self-start sm:self-auto"
            >
              <Github className="w-4 h-4 text-[#C8FF00]" />
              <span>View Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Stat Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-black text-2xl text-[#F5F5F5]">
                  {isLoading ? "..." : `${data?.user?.public_repos || 8}+`}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                  PUBLIC REPOSITORIES
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-black text-2xl text-[#F5F5F5]">
                  {isLoading ? "..." : (data?.user?.followers ?? 0)}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                  FOLLOWERS
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] border-l-2 border-l-[#FF5A1F] flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#FF5A1F]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-black text-2xl text-[#C8FF00]">
                  {isLoading ? "..." : (data?.contributions?.total ?? 24)}
                </span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                  ANNUAL CONTRIBUTIONS
                </span>
              </div>
            </div>
          </div>

          {/* Contribution Heatmap Calendar */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C8FF00]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] font-bold">
                  CONTRIBUTION HEATMAP CALENDAR
                </span>
              </div>
              {hoveredDay && (
                <span className="font-mono text-xs text-[#C8FF00] bg-[#0A0A0A] px-2.5 py-1 rounded border border-[#262626]">
                  {hoveredDay.count} contribution{hoveredDay.count !== 1 ? "s" : ""} on {hoveredDay.date}
                </span>
              )}
            </div>

            {/* Heatmap Grid Container */}
            <div
              ref={heatmapScrollRef}
              className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] overflow-x-auto"
            >
              {isLoading ? (
                <div className="h-32 flex items-center justify-center text-xs font-mono text-[#A0A0A0]">
                  Loading real-time contributions from GitHub...
                </div>
              ) : weeks.length === 0 ? (
                <div className="py-8 text-center space-y-2">
                  <p className="font-mono text-xs text-[#A0A0A0]">
                    Activity data temporarily unavailable.
                  </p>
                  <a
                    href="https://github.com/JawaleOm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#C8FF00] hover:underline"
                  >
                    View profile directly on GitHub →
                  </a>
                </div>
              ) : (
                <div className="min-w-[720px] space-y-2">
                  {/* Grid */}
                  <div className="flex gap-[3px]">
                    {/* Day of week labels */}
                    <div className="flex flex-col justify-between py-[2px] pr-2 text-[9px] font-mono text-[#666666]">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>

                    {/* Columns (Weeks) */}
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((day, dIdx) => {
                          if ((day as any).dummy) {
                            return <div key={dIdx} className="w-3 h-3 rounded-[2px] opacity-0" />;
                          }
                          return (
                            <div
                              key={dIdx}
                              role="img"
                              aria-label={`${day.count} contributions on ${day.date}`}
                              tabIndex={0}
                              onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                              onMouseLeave={() => setHoveredDay(null)}
                              onFocus={() => setHoveredDay({ date: day.date, count: day.count })}
                              onBlur={() => setHoveredDay(null)}
                              className={`w-3 h-3 rounded-[2px] transition-transform duration-100 hover:scale-150 cursor-pointer ${getCellColor(
                                day.level,
                                day.count
                              )}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#262626]/60 text-[10px] font-mono text-[#666666]">
                    <span>Synced from GitHub</span>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-[#181818]" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1f3805]" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-[#43730a]" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-[#82c400]" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-[#C8FF00]" />
                      <span>More</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Project Repositories Strip */}
          <div className="space-y-3 pt-2 border-t border-[#262626]">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
              VERIFIED REPOSITORY REPERTOIRE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on GitHub`}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                  <span className="font-mono text-xs text-[#F5F5F5] group-hover:text-[#C8FF00] truncate transition-colors">
                    {p.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#666666] ml-auto shrink-0 group-hover:text-[#C8FF00]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
