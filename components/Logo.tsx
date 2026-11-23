"use client";

import React, { useState } from "react";

interface LogoProps {
  showWordmark?: boolean;
  className?: string;
  onEasterEgg?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  showWordmark = true,
  className = "",
  onEasterEgg,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newCount = clickCount + 1;
    setClickCount(newCount);

    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 600);

    if (newCount >= 5) {
      if (onEasterEgg) onEasterEgg();
      setClickCount(0);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#hero"
      onClick={handleClick}
      className={`inline-flex items-center gap-3 group focus:outline-none select-none cursor-pointer ${className}`}
      aria-label="Om Jawale Home"
    >
      {/* Monogram Icon */}
      <div
        className={`relative w-10 h-10 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-center transition-all duration-300 group-hover:border-[#C8FF00] group-hover:shadow-[0_0_20px_-3px_rgba(200,255,0,0.4)] ${
          isPulsing ? "scale-95 border-[#C8FF00] shadow-[0_0_25px_rgba(200,255,0,0.8)]" : ""
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer Orbit / Hex Ring Accent */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            stroke="#262626"
            strokeWidth="1.5"
            className="group-hover:stroke-[#C8FF00]/40 transition-colors"
          />

          {/* Letter 'O' as an orbital loop */}
          <circle
            cx="15"
            cy="20"
            r="8.5"
            stroke="#C8FF00"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="logo-stroke-draw"
          />

          {/* Small Node on O orbit */}
          <circle cx="15" cy="11.5" r="1.5" fill="#FF5A1F" />

          {/* Letter 'J' with curved tail and terminal node */}
          <path
            d="M 27 12 V 23.5 C 27 27 24.5 28.5 21.5 28.5 C 19 28.5 17.5 27.2 17.5 25.5"
            stroke="#C8FF00"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="logo-stroke-draw"
          />

          {/* Circuit Trace Terminal Dot on J */}
          <circle
            cx="27"
            cy="12"
            r="2"
            fill="#C8FF00"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className="font-display font-black text-sm uppercase tracking-tight text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors leading-none">
            OM JAWALE
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#A0A0A0] leading-tight mt-0.5">
            AI & SYSTEMS
          </span>
        </div>
      )}
    </a>
  );
};
