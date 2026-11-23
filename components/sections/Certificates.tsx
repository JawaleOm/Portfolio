"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificates, Certificate } from "@/data/certificates";
import { achievements } from "@/data/achievements";
import {
  Award,
  Calendar,
  Building,
  Maximize2,
  ExternalLink,
  Download,
  Trophy,
  CheckCircle,
} from "lucide-react";
import { CertificateLightbox } from "../CertificateLightbox";

interface CertificatesProps {
  externalSelectedId?: string | null;
  onClearExternalSelected?: () => void;
}

export const Certificates: React.FC<CertificatesProps> = ({
  externalSelectedId,
  onClearExternalSelected,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // If externally triggered (e.g. from Experience or Projects badge)
  React.useEffect(() => {
    if (externalSelectedId) {
      const idx = certificates.findIndex((c) => c.id === externalSelectedId);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
      if (onClearExternalSelected) {
        onClearExternalSelected();
      }
    }
  }, [externalSelectedId, onClearExternalSelected]);

  return (
    <section id="certificates" className="py-20 md:py-28 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              05 // CREDENTIALS & RECOGNITION
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            CERTIFICATES & AWARDS
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Verified credentials from recognized institutions, government bodies, and competitive hackathons.
          </p>
        </div>

        {/* Achievements Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
            <Trophy className="w-5 h-5 text-[#C8FF00]" />
            <h3 className="font-display font-bold text-lg uppercase tracking-tight text-[#F5F5F5]">
              HONORS & HACKATHONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-xl bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                        ach.badgeColor === "lime"
                          ? "bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/30"
                          : "bg-[#1A1A1A] text-[#A0A0A0] border border-[#262626]"
                      }`}
                    >
                      {ach.badge}
                    </span>
                    <span className="font-mono text-xs text-[#A0A0A0]">{ach.date}</span>
                  </div>
                  <h4 className="font-display font-black text-lg text-[#F5F5F5] uppercase tracking-tight">
                    {ach.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#C8FF00]">{ach.organizer}</p>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>

                {ach.certificateId && (
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const idx = certificates.findIndex((c) => c.id === ach.certificateId);
                        if (idx !== -1) setLightboxIndex(idx);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C8FF00] hover:underline"
                    >
                      <span>View Hackathon Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates 7-Card Responsive Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const isAward = cert.category === "award";
            return (
              <div
                key={cert.id}
                onClick={() => setLightboxIndex(index)}
                className={`group cursor-pointer rounded-2xl bg-[#121212] border border-[#262626] p-4 hover:bg-[#161616] hover:border-[#C8FF00]/50 transition-all flex flex-col justify-between space-y-4 shadow-lg ${
                  isAward ? "border-l-2 border-l-[#C8FF00]" : "border-l-2 border-l-[#FF5A1F]"
                }`}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`View ${cert.title} in lightbox`}
              >
                {/* Thumbnail Container (contain frame, letterboxed to preserve exact aspect ratio) */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626] flex items-center justify-center p-2 group-hover:border-[#C8FF00]/40 transition-colors">
                  <Image
                    src={cert.thumbnailWebp}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                        isAward
                          ? "bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/30"
                          : "bg-[#0A0A0A] text-[#FF5A1F] border border-[#262626]"
                      }`}
                    >
                      {cert.categoryBadge}
                    </span>
                    <span className="font-mono text-[11px] text-[#A0A0A0] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#666666]" />
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors line-clamp-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#A0A0A0] flex items-center gap-1.5 truncate">
                    <Building className="w-3 h-3 text-[#666666] shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {/* Footer Bar */}
                <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#666666]">CLICK TO INSPECT</span>
                  <span className="text-[#C8FF00] font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Interactive Lightbox */}
      <CertificateLightbox
        certificates={certificates}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
