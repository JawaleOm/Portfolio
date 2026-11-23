"use client";

import React from "react";

interface ProjectVisualProps {
  type: "nlp-pipeline" | "crawler-queue" | "triage-realtime" | "timeseries" | "classifier-eval";
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  if (type === "nlp-pipeline") {
    const stages = [
      { num: "01", name: "Speech-to-Text", tech: "Vernacular Audio" },
      { num: "02", name: "Translation", tech: "Normalized Text" },
      { num: "03", name: "Classification", tech: "Civic Topics" },
      { num: "04", name: "Urgency Scan", tech: "Severity Engine" },
      { num: "05", name: "Duplicate Scan", tech: "Semantic Cluster" },
      { num: "06", name: "Priority Score", tech: "Decision Engine" },
    ];

    return (
      <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] p-4 sm:p-5 overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
              6-STAGE MULTILINGUAL NLP PIPELINE ARCHITECTURE
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#FF5A1F] font-bold">END-TO-END</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className="relative p-2.5 rounded-lg bg-[#121212] border border-[#262626] hover:border-[#C8FF00]/50 transition-colors flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[9px] text-[#C8FF00] font-bold">{stage.num}</span>
                {i < stages.length - 1 && (
                  <span className="hidden lg:block text-[#666666] text-xs">→</span>
                )}
              </div>
              <span className="text-xs font-bold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors leading-tight">
                {stage.name}
              </span>
              <span className="font-mono text-[10px] text-[#A0A0A0] mt-1.5 block">
                {stage.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "crawler-queue") {
    const blocks = [
      { label: "Playwright Crawler", sub: "Async Headless Browser", color: "#F5F5F5" },
      { label: "Celery + Redis", sub: "Distributed Task Queue", color: "#FF5A1F" },
      { label: "Llama 3 (Ollama)", sub: "Local LLM Categorization", color: "#C8FF00" },
      { label: "Meilisearch", sub: "Full-Text Instant Index", color: "#C8FF00" },
    ];

    return (
      <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] p-4">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#262626] mb-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
            ASYNC CRAWLING & SEARCH PIPELINE
          </span>
          <span className="font-mono text-[10px] text-[#C8FF00] font-semibold">OLLAMA + MEILI</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {blocks.map((b, i) => (
            <div
              key={b.label}
              className="p-2.5 rounded-lg bg-[#121212] border border-[#262626] text-center"
            >
              <span className="block font-mono text-[11px] font-bold text-[#F5F5F5] truncate">
                {b.label}
              </span>
              <span className="block font-mono text-[9px] text-[#A0A0A0] mt-0.5 truncate">
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "triage-realtime") {
    return (
      <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] p-4">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#262626] mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
              TRI-PORTAL WEBSOCKET EVENT MESH
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#C8FF00] font-bold">VERCEL LIVE</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="font-mono text-[10px] text-[#C8FF00] block font-bold">STUDENT</span>
            <span className="font-mono text-[9px] text-[#A0A0A0] block mt-0.5">Ticket Submit</span>
          </div>
          <div className="p-2 rounded-lg bg-[#121212] border border-[#FF5A1F]/40 text-center">
            <span className="font-mono text-[10px] text-[#FF5A1F] block font-bold">SOCKET.IO</span>
            <span className="font-mono text-[9px] text-[#A0A0A0] block mt-0.5">Live Dispatch</span>
          </div>
          <div className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-center">
            <span className="font-mono text-[10px] text-[#F5F5F5] block font-bold">ADMIN/STAFF</span>
            <span className="font-mono text-[9px] text-[#A0A0A0] block mt-0.5">Triage & SLA</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "timeseries") {
    return (
      <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] p-3">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#262626] mb-2 text-[10px] font-mono">
          <span className="text-[#A0A0A0]">MODEL BENCHMARK</span>
          <span className="text-[#C8FF00]">ARIMA / PROPHET / LSTM</span>
        </div>
        <svg viewBox="0 0 300 60" className="w-full h-12 stroke-current overflow-visible">
          {/* Grid lines */}
          <line x1="0" y1="50" x2="300" y2="50" stroke="#262626" strokeWidth="1" />
          <line x1="0" y1="25" x2="300" y2="25" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
          {/* Actual series */}
          <path
            d="M 10 45 Q 40 20 80 35 T 150 20 T 220 30 T 290 15"
            fill="none"
            stroke="#666666"
            strokeWidth="1.5"
          />
          {/* Predicted series */}
          <path
            d="M 150 20 Q 185 15 220 28 T 290 12"
            fill="none"
            stroke="#C8FF00"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
        </svg>
      </div>
    );
  }

  if (type === "classifier-eval") {
    return (
      <div className="w-full rounded-xl bg-[#0A0A0A] border border-[#262626] p-3">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#262626] mb-2 text-[10px] font-mono">
          <span className="text-[#A0A0A0]">IBM TELCO EVALUATION</span>
          <span className="text-[#FF5A1F]">XGBOOST ROC-AUC</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
          <div className="bg-[#121212] border border-[#262626] px-2 py-1 rounded text-center flex-1">
            <span className="text-[#A0A0A0] block text-[9px]">LOGISTIC REG</span>
            <span className="text-[#F5F5F5] font-bold">Baseline</span>
          </div>
          <div className="bg-[#121212] border border-[#262626] px-2 py-1 rounded text-center flex-1">
            <span className="text-[#A0A0A0] block text-[9px]">RANDOM FOREST</span>
            <span className="text-[#F5F5F5] font-bold">Ensemble</span>
          </div>
          <div className="bg-[#121212] border border-[#C8FF00]/40 px-2 py-1 rounded text-center flex-1">
            <span className="text-[#C8FF00] block text-[9px]">XGBOOST</span>
            <span className="text-[#C8FF00] font-bold">Top Recall</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
