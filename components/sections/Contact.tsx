"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "notConfigured">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter a message subject.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a message (at least 10 characters).");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          honeypot: formData.website_hp,
        }),
      });

      const data = await res.json();

      if (data.notConfigured) {
        setStatus("notConfigured");
        setErrorMessage(data.message || "Contact service not configured.");
        setMailtoFallbackUrl(data.mailtoUrl || `mailto:${siteConfig.email}`);
        return;
      }

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message. Please contact Om directly via email.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", website_hp: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("A network error occurred. Please contact Om directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#262626] relative overflow-hidden">
      {/* Subtle lime glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(200,255,0,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F] font-bold">
              08 // INITIATE DIALOGUE
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-[#F5F5F5]">
            CONTACT & CONNECT
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl">
            Open to discussing AI/ML engineering, data analytics, and full-stack opportunities.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#121212] border border-[#262626] border-l-4 border-l-[#C8FF00] p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="font-display font-black text-xl text-[#F5F5F5] uppercase tracking-tight">
                  DIRECT CHANNELS
                </h3>
                <p className="font-mono text-xs text-[#A0A0A0] mt-1">
                  Prompt response within 24 hours.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] hover:bg-[#161616] transition-all group min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      EMAIL
                    </span>
                    <span className="block text-sm font-semibold text-[#F5F5F5] group-hover:text-[#C8FF00] truncate transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] hover:bg-[#161616] transition-all group min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00] group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      PHONE / WHATSAPP
                    </span>
                    <span className="block text-sm font-semibold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                      {siteConfig.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0A0A0A] border border-[#262626]">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#FF5A1F]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                      LOCATION
                    </span>
                    <span className="block text-sm font-semibold text-[#F5F5F5]">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] hover:bg-[#161616] transition-all group min-h-[48px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        LINKEDIN
                      </span>
                      <span className="block text-sm font-semibold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                        om-jawale-4b7a9431a
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A0A0A0] group-hover:text-[#C8FF00] transition-colors mr-2" />
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] hover:bg-[#161616] transition-all group min-h-[48px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#262626] flex items-center justify-center text-[#C8FF00]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        GITHUB
                      </span>
                      <span className="block text-sm font-semibold text-[#F5F5F5] group-hover:text-[#C8FF00] transition-colors">
                        JawaleOm
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A0A0A0] group-hover:text-[#C8FF00] transition-colors mr-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#121212] border border-[#262626] border-l-2 border-l-[#FF5A1F] p-6 sm:p-8 space-y-6">
              <div className="pb-3 border-b border-[#262626] flex items-center justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-[#F5F5F5] uppercase tracking-tight">
                    SEND A MESSAGE
                  </h3>
                  <p className="font-mono text-xs text-[#A0A0A0]">
                    Direct dispatch with spam protection
                  </p>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#C8FF00] font-bold">
                  LIVE FORM
                </span>
              </div>

              {/* Success Notification */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-[#C8FF00]/10 border border-[#C8FF00]/40 flex items-start gap-3 text-sm text-[#C8FF00]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Transmitted Successfully!</span>
                    <span>Thank you for reaching out. Om will respond to your inquiry shortly.</span>
                  </div>
                </div>
              )}

              {/* Not Configured State (Honest message + Mailto fallback) */}
              {status === "notConfigured" && (
                <div className="p-5 rounded-xl bg-[#1A1A1A] border border-[#FF5A1F]/40 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#FF5A1F]">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#F5F5F5]">Form Service Notice</span>
                      <span className="text-xs text-[#A0A0A0]">{errorMessage}</span>
                    </div>
                  </div>
                  {mailtoFallbackUrl && (
                    <div className="pt-2">
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d4ff33] transition-all min-h-[44px]"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open Direct Email Client</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Generic Error */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-sm text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Error</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from visual users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Do not fill this field</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-[#A0A0A0]"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] placeholder-[#666666] focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none text-sm transition-colors min-h-[44px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-[#A0A0A0]"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] placeholder-[#666666] focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none text-sm transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A0A0A0]"
                  >
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    placeholder="AI/ML Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] placeholder-[#666666] focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none text-sm transition-colors min-h-[44px]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A0A0A0]"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Detail your inquiry, project scope, or role specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#262626] text-[#F5F5F5] placeholder-[#666666] focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] outline-none text-sm transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C8FF00] text-[#0A0A0A] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#d6ff33] transition-all hover:scale-[1.01] shadow-[0_0_20px_-5px_rgba(200,255,0,0.3)] disabled:opacity-50 min-h-[48px]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
