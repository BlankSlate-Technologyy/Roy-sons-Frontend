"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "../constants";
import { Container } from "./Shared";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/gateway/gateway_slider_1.jpg",
    badge: "GATEWAY PHARMACEUTICALS CONSULTANTS",
    badgeIcon: Sparkles,
    tagline: "Regulatory Affairs & Compliance Advisory",
    titleLine1: "PHARMACEUTICAL",
    titleHighlight: "REGULATORY",
    titleLine2: "CONSULTANCY",
    desc: "Offering licensing, compliance, regulatory affairs, and consultancy services for pharmaceutical organizations. Precision without compromise.",
    metric: "200+ Registrations • 100% Accredited Audit",
    primaryLabel: "Explore Services",
    primaryHref: "/group-companies/gateway/services",
    secondaryLabel: "Contact Us",
    secondaryHref: "/group-companies/gateway#contact",
    sideBadgeTitle: "DRAP & Compliance",
    sideBadgeSubtitle: "100% Accredited Audit",
  },
  {
    id: 2,
    image: "/gateway/gateway_slider_2.jpg",
    badge: "cGMP & QUALITY COMPLIANCE AUDITING",
    badgeIcon: ShieldCheck,
    tagline: "Advanced Manufacturing & Quality Systems",
    titleLine1: "PRECISION",
    titleHighlight: "QUALITY & cGMP",
    titleLine2: "AUDIT READINESS",
    desc: "Comprehensive site gap analyses, validation protocols, and regulatory inspection preparation aligned with international WHO and PIC/S standards.",
    metric: "500+ Licenses Processed • 98% Approval Success",
    primaryLabel: "Industries We Serve",
    primaryHref: "/group-companies/gateway/industries",
    secondaryLabel: "Consult Pharma Desk",
    secondaryHref: "/group-companies/gateway#contact",
    sideBadgeTitle: "Quality Assurance",
    sideBadgeSubtitle: "WHO / cGMP Audits",
  },
  {
    id: 3,
    image: "/gateway/gateway_slider_3.jpg",
    badge: "GLOBAL DRUG REGISTRATIONS & LICENSING",
    badgeIcon: Award,
    tagline: "Technical CTD Dossiers & Market Authorizations",
    titleLine1: "EXPEDITE",
    titleHighlight: "MARKET ENTRY &",
    titleLine2: "PRODUCT LICENSING",
    desc: "Accelerate your pharmaceutical product registrations, renewals, and cross-border commercial authorizations with our seasoned regulatory specialists.",
    metric: "15+ Regulatory Experts • 150+ Corporate Partnerships",
    primaryLabel: "Areas of Expertise",
    primaryHref: "/group-companies/gateway/expertise",
    secondaryLabel: "Request Consultation",
    secondaryHref: "/group-companies/gateway#contact",
    sideBadgeTitle: "CTD Dossiers",
    sideBadgeSubtitle: "Fast-Track Submissions",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[current];
  const BadgeIcon = slide.badgeIcon;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background AI Image Carousel with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.titleLine1}
            fill
            className="object-cover object-center pointer-events-none"
            priority
            sizes="100vw"
          />

          {/* Directional Overlay: deep navy on left for text, soft & light on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 24, 56, 0.95) 0%, rgba(11, 30, 61, 0.82) 42%, rgba(15, 38, 77, 0.35) 72%, rgba(7, 24, 56, 0.08) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Content */}
      <Container className="relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5 border backdrop-blur-md bg-white/10 border-white/20 text-[#34D399]">
                  <BadgeIcon size={14} className="text-[#34D399] shrink-0" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] mb-3.5 text-white">
                  {slide.titleLine1}
                  <br />
                  <span className="text-[#34D399] drop-shadow-sm">
                    {slide.titleHighlight}
                  </span>
                  <br />
                  {slide.titleLine2}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-[17px] text-slate-200 font-medium leading-relaxed mb-4 max-w-2xl drop-shadow-xs">
                  {slide.desc}
                </p>

                {/* Metric pill */}
                <div className="inline-block text-xs font-semibold text-slate-300 bg-slate-900/60 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10 mb-5">
                  <span className="text-[#34D399] font-bold">✓</span> {slide.metric}
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href={slide.primaryHref}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:opacity-95 hover:shadow-xl active:scale-95 cursor-pointer"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    <span>{slide.primaryLabel}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href={slide.secondaryHref}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wide transition-all duration-300 shadow-md active:scale-95 cursor-pointer bg-white text-[#173F8A] hover:bg-slate-100 hover:shadow-lg border-2 border-white"
                  >
                    <span>{slide.secondaryLabel}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Floating Badge / Snapshot Preview */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="relative p-5 rounded-2xl border backdrop-blur-xl bg-slate-900/70 border-white/15 shadow-2xl max-w-xs w-full space-y-3.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#2E8B57]/20 border border-[#2E8B57]/40 text-[#34D399]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-white block">
                      {slide.sideBadgeTitle}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 block">
                      {slide.sideBadgeSubtitle}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Regulatory Body:</span>
                    <span className="font-bold text-white">DRAP / MoH</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Audit Status:</span>
                    <span className="font-bold text-[#34D399]">100% Compliant</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Dossier Format:</span>
                    <span className="font-bold text-white">CTD / eCTD</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Bottom Controls: Prev/Next, Dots & Slide Counter */}
        <div className="mt-8 sm:mt-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  current === idx
                    ? "w-8 bg-[#34D399]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter & Arrow Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              0{current + 1} / 0{HERO_SLIDES.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
