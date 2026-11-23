"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ExternalLink,
  Download,
  Calendar,
  Building,
} from "lucide-react";

interface LightboxProps {
  certificates: Certificate[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const CertificateLightbox: React.FC<LightboxProps> = ({
  certificates,
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const touchStart = useRef({ x: 0, y: 0 });

  const activeCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  // Reset zoom and pan when certificate changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [selectedIndex]);

  // Lock body scroll
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const nextIdx = (selectedIndex + 1) % certificates.length;
    onNavigate(nextIdx);
  }, [selectedIndex, certificates.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    const prevIdx = (selectedIndex - 1 + certificates.length) % certificates.length;
    onNavigate(prevIdx);
  }, [selectedIndex, certificates.length, onNavigate]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.3, 3.5));
  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(z - 0.3, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
        case "_":
          handleZoomOut();
          break;
        case "0":
          handleResetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, onClose]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(z + 0.15, 3.5));
    } else {
      setZoom((z) => {
        const next = Math.max(z - 0.15, 1);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Mouse drag pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch handling (Swipe for prev/next when zoom=1, pan when zoom > 1)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (zoom > 1) {
        dragStart.current = { x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y };
        setIsDragging(true);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (zoom > 1 && isDragging && e.touches.length === 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (zoom === 1 && e.changedTouches.length === 1) {
      const diffX = e.changedTouches[0].clientX - touchStart.current.x;
      const diffY = e.changedTouches[0].clientY - touchStart.current.y;
      if (Math.abs(diffX) > 50 && Math.abs(diffY) < 60) {
        if (diffX > 0) handlePrev();
        else handleNext();
      }
    }
    setIsDragging(false);
  };

  // Double click zoom toggle
  const handleDoubleClick = () => {
    if (zoom > 1) {
      handleResetZoom();
    } else {
      setZoom(2);
    }
  };

  if (!activeCert || selectedIndex === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-cert-title"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-fadeIn select-none"
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#262626] bg-[#0A0A0A]/90 z-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C8FF00] font-bold">
            {selectedIndex + 1} / {certificates.length}
          </span>
          <span className="hidden sm:inline font-mono text-xs text-[#A0A0A0]">
            {activeCert.categoryBadge}
          </span>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] disabled:opacity-40 transition-colors"
            title="Zoom Out (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-[#A0A0A0] w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 3.5}
            className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] disabled:opacity-40 transition-colors"
            title="Zoom In (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] transition-colors"
            title="Reset Zoom (0)"
            aria-label="Reset Zoom"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          <div className="h-4 w-px bg-[#262626] mx-1" />

          {/* Open original in new tab */}
          <a
            href={activeCert.originalFileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#A0A0A0] hover:text-[#C8FF00] hover:border-[#C8FF00] transition-colors"
            title="Open Original Document"
            aria-label="Open original document in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Download file */}
          <a
            href={activeCert.originalFileUrl}
            download={activeCert.downloadFilename}
            className="p-2 rounded-lg bg-[#C8FF00] text-[#0A0A0A] font-bold hover:bg-[#d6ff33] transition-colors"
            title="Download Document"
            aria-label="Download original certificate"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#121212] border border-[#262626] text-[#F5F5F5] hover:border-red-500 hover:text-red-400 transition-colors ml-2"
            title="Close Lightbox (Esc)"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
        style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
      >
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#121212]/80 border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] hover:bg-[#121212] transition-all focus:outline-none"
          aria-label="Previous Certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Certificate Image Canvas */}
        <div
          className="relative max-w-full max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
          }}
        >
          <img
            src={activeCert.previewWebp}
            alt={activeCert.title}
            className="max-w-full max-h-[75vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-[#262626]"
            draggable={false}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#121212]/80 border border-[#262626] text-[#F5F5F5] hover:border-[#C8FF00] hover:bg-[#121212] transition-all focus:outline-none"
          aria-label="Next Certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Metadata Bar */}
      <div className="px-4 sm:px-6 py-4 border-t border-[#262626] bg-[#0A0A0A]/90 z-20">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5A1F] font-bold">
                {activeCert.categoryBadge}
              </span>
              <span className="text-[#666666] text-xs">•</span>
              <span className="font-mono text-xs text-[#A0A0A0] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C8FF00]" />
                {activeCert.date}
              </span>
            </div>
            <h3
              id="lightbox-cert-title"
              className="font-display font-black text-lg sm:text-xl text-[#F5F5F5] uppercase tracking-tight"
            >
              {activeCert.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0]">
              Issuer: <span className="text-[#F5F5F5] font-semibold">{activeCert.issuer}</span>
              {activeCert.verificationDetails && (
                <span className="ml-2 text-[#C8FF00]">({activeCert.verificationDetails})</span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={activeCert.originalFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#121212] border border-[#262626] text-xs font-mono font-semibold text-[#F5F5F5] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors min-h-[44px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Original</span>
            </a>
            <a
              href={activeCert.originalFileUrl}
              download={activeCert.downloadFilename}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C8FF00] text-[#0A0A0A] text-xs font-mono font-bold hover:bg-[#d6ff33] transition-colors min-h-[44px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
