"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { BiomaxNavbar, BiomaxFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/BiomaxShared";
import {
  Microscope,
  HeartPulse,
  Users,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Target,
  Eye,
  ArrowRight,
  Sparkles,
  FlaskConical,
  GraduationCap,
  Award,
  Globe,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
const COLORS = {
  primary:    "#165B7E",      // BioMax Teal-Blue (from "BIO MAX" & Cross)
  primaryDk:  "#0D3A52",      // Deep Navy Teal
  accent:     "#1D906C",      // BioMax DNA Emerald Green (from Helix)
  accentDk:   "#136B50",      // Deep Forest Green
  accentRed:  "#7B1C2A",      // BioMax Crimson Red (from "CORPORATION")
  white:      "#ffffff",      // Pure White Background
  ink:        "#165B7E",      // Teal-Blue Headings & Title Text
  muted:      "#1F4E68",      // Medium Slate Teal-Blue Body Text
  greenText:  "#1D906C",      // DNA Green Accent Text
  border:     "#d7e5ec",      // Crisp Border
  lightBg:    "#ffffff",      // Pure White
  footerBg:   "#0D2B3D",      // Deep Brand Navy Teal Footer
};

const WHY_CHOOSE_POINTS = [
  {
    title: "Reliable Scientific Equipment",
    icon: Microscope,
    desc: "Precision instruments and advanced laboratory analyzers tested for consistency, durability, and high accuracy.",
  },
  {
    title: "Laboratory & Diagnostic Solutions",
    icon: HeartPulse,
    desc: "Complete diagnostic and testing systems tailored to research, clinical workflows, and academic needs.",
  },
  {
    title: "Technical Expertise",
    icon: Users,
    desc: "Experienced scientists and technical specialists providing consultation, protocol guidance, and equipment training.",
  },
  {
    title: "Quality-Focused Products",
    icon: ShieldCheck,
    desc: "High-grade reagents, molecular systems, and instruments complying with international quality standards.",
  },
  {
    title: "Professional Customer Support",
    icon: CheckCircle2,
    desc: "Dedicated support team ensuring prompt delivery, smooth installation, calibration, and after-sales service.",
  },
  {
    title: "Solutions for Multiple Industries",
    icon: Building2,
    desc: "Customized biotechnology solutions for research, healthcare, diagnostic, educational, and industrial sectors.",
  },
];

const STATS = [
  { icon: Microscope, value: "150+", label: "Laboratory Products" },
  { icon: Users, value: "25+", label: "Technical Specialists" },
  { icon: Globe, value: "300+", label: "Institutions Supported" },
  { icon: Award, value: "99.2%", label: "Precision & Accuracy Rate" },
];

export default function BiomaxAboutPage() {
  useEffect(() => {
    document.body.classList.add("biomax-theme");
    return () => {
      document.body.classList.remove("biomax-theme");
    };
  }, []);

  return (
    <main className="min-h-screen biomax-theme bg-white" style={{ backgroundColor: COLORS.white, color: COLORS.ink }}>
      <ScrollProgress color={COLORS.primary} />
      <BiomaxNavbar />

      {/* Hero Section */}
      <section
        className="py-20 px-6 border-b bg-white"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white shadow-sm"
              style={{ color: COLORS.accent, borderColor: COLORS.border }}
            >
              <Sparkles size={13} />
              <span>02 — About Bio Max Corporation</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.accent }}>
              About Bio Max Corporation
            </h1>
            <p className="text-[18px] font-bold mb-3" style={{ color: COLORS.primary }}>
              Empowering Laboratories with Advanced Scientific Technology
            </p>
            <p className="text-[15.5px] leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Bio Max Corporation is a biotechnology and laboratory solutions company focused on providing reliable scientific equipment, laboratory systems, and technical solutions to research, healthcare, diagnostic, educational, and industrial institutions.
            </p>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
              We work with laboratories and organizations that require dependable technology, quality products, and professional support for their scientific and diagnostic operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="/group-companies/biomax/solutions">
                <span>Explore Lab Solutions</span>
                <ArrowRight size={15} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/biomax/contact">
                <span>Contact Technical Team</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Stats */}
      <section className="py-10 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="p-5 rounded-xl border text-center biomax-counter-box cursor-pointer shadow-sm bg-white"
              style={{ borderColor: COLORS.border }}
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: COLORS.accent }} />
              <div className="text-2xl lg:text-3xl font-black mb-1" style={{ color: COLORS.primary }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12.5px] font-bold" style={{ color: COLORS.primary }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Story & Image Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: `${COLORS.accent}18`, color: COLORS.accent }}
              >
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
                Precision, Quality &amp; Continuous Support
              </h2>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                Our approach combines quality, technical expertise, innovation, and customer support to help laboratories operate efficiently and achieve accurate and consistent results.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Dependable laboratory & diagnostic systems",
                  "High-accuracy analytical instrumentation",
                  "Comprehensive scientific protocol support",
                  "End-to-end institutional workflow calibration",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} style={{ color: COLORS.accent }} className="flex-shrink-0" />
                    <span className="text-[13.5px] font-bold" style={{ color: COLORS.ink }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] rounded-2xl overflow-hidden border shadow-md"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/biomax_research_lab.jpg"
                  alt="Bio Max Corporation laboratory equipment"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}18` }}>
                    <Target size={20} style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="text-2xl font-black" style={{ color: COLORS.primary }}>
                    Our Mission
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                  To provide high-quality biotechnology and laboratory solutions that support scientific research, diagnostics, education, and industrial development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t text-[12.5px] font-bold" style={{ borderColor: COLORS.border, color: COLORS.primary }}>
                Supporting Research &amp; Diagnostics
              </div>
            </div>

            {/* Vision */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${COLORS.accent}18` }}>
                    <Eye size={20} style={{ color: COLORS.accent }} />
                  </div>
                  <h3 className="text-2xl font-black" style={{ color: COLORS.accent }}>
                    Our Vision
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                  To become a trusted provider of advanced laboratory and biotechnology solutions, contributing to scientific progress and better research outcomes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t text-[12.5px] font-bold" style={{ borderColor: COLORS.border, color: COLORS.accent }}>
                Scientific Progress &amp; Better Outcomes
              </div>
            </div>
          </div>

          {/* Why Choose Bio Max? 6 Key Pillars */}
          <div>
            <div className="mb-6">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1 border"
                style={{ backgroundColor: COLORS.lightBg, color: COLORS.primary, borderColor: COLORS.border }}
              >
                OUR CORE ADVANTAGES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.accent }}>
                Why Choose Bio Max?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_POINTS.map(({ title, icon: Icon, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border bg-white shadow-sm biomax-card-hover cursor-pointer"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${COLORS.primary}12` }}
                    >
                      <Icon size={22} style={{ color: COLORS.primary }} />
                    </div>
                    <h3 className="text-[15.5px] font-black" style={{ color: COLORS.ink }}>
                      {title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div
            className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border bg-white"
            style={{ borderColor: COLORS.border, backgroundColor: "#ffffff" }}
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
                ADVANCE YOUR LABORATORY
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: COLORS.primary }}>
                Equip Your Facility With Reliable Technology
              </h3>
              <p className="text-[13.5px] max-w-xl" style={{ color: COLORS.muted }}>
                Consult with our technical team to identify the right scientific instruments and diagnostic equipment for your institution.
              </p>
            </div>
            <Link
              href="/group-companies/biomax/contact"
              className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold text-white transition-all flex-shrink-0 flex items-center gap-2 shadow-md hover:bg-[#1D906C] cursor-pointer"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <BiomaxFooter />
    </main>
  );
}
