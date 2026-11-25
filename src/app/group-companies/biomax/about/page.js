"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
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

const TEAM_MEMBERS = [
  {
    name: "Dr. Tariq Mahmood",
    dept: "Biotechnology & R&D",
    role: "Head of Biotech & Molecular Systems",
    image: "/team/laboratory_professional.jpg",
    desc: "Specializing in qualitative & quantitative PCR instruments, cell culture biosafety and molecular extraction workflows.",
    badge: "Molecular Diagnostics",
  },
  {
    name: "Engr. Farhan Siddiqui",
    dept: "Diagnostic Solutions",
    role: "Director of Laboratory Equipment",
    image: "/team/medical_equipment.jpg",
    desc: "Over 14 years managing institutional lab tenders, spectrophotometry analyzers, and diagnostic instrument deployments.",
    badge: "Diagnostic Systems",
  },
  {
    name: "Dr. Ayesha Malik",
    dept: "Quality Assurance",
    role: "Lead QA & Compliance Scientist",
    image: "/biomax_qa_scientist_ai.jpg",
    desc: "Directs IQ/OQ validation protocols, calibration audits, and ensures compliance with international quality standards.",
    badge: "IQ/OQ Validation",
  },
  {
    name: "Muhammad Usman",
    dept: "Technical Support",
    role: "Lead Support & Calibration Engineer",
    image: "/team/technical_support.jpg",
    desc: "Providing turnkey delivery, optical system calibration, preventive maintenance contracts, and on-site staff training.",
    badge: "Turnkey Calibration",
  },
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

      {/* Hero Section with AI Background Image */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-6 overflow-hidden border-b flex items-center"
        style={{ borderColor: COLORS.border }}
      >
        {/* ── Background AI Header Image ── */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <Image
            src="/biomax_header_about_ai.jpg"
            alt="About Bio Max Corporation"
            fill
            priority
            className="object-cover object-center transform scale-105"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(
                110deg,
                rgba(13, 43, 61, 0.96) 0%,
                rgba(13, 58, 82, 0.90) 45%,
                rgba(13, 58, 82, 0.75) 75%,
                rgba(29, 144, 108, 0.40) 100%
              )`,
            }}
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 85% 45%, rgba(46, 230, 173, 0.22) 0%, transparent 65%)",
            }}
          />
        </div>

        {/* ── Content Overlaid on Top of Image ── */}
        <div className="mx-auto max-w-screen-xl relative z-20 w-full">
          <div className="max-w-3xl space-y-3 sm:space-y-3.5">
            <span
              className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full inline-flex items-center gap-2 border backdrop-blur-md shadow-md text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.35)",
              }}
            >
              <Sparkles size={14} className="text-[#2ee6ad]" />
              <span>02 — About Bio Max Corporation</span>
              <span className="w-2 h-2 rounded-full bg-[#2ee6ad] animate-pulse" />
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black leading-tight text-white drop-shadow-md">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ee6ad] to-[#ffffff]">Bio Max Corporation</span>
            </h1>

            <p className="text-[18px] sm:text-[21px] font-bold text-[#2ee6ad] drop-shadow-xs">
              Empowering Laboratories with Advanced Scientific Technology
            </p>

            <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-slate-100 font-medium">
              Bio Max Corporation is a biotechnology and laboratory solutions company focused on providing reliable scientific equipment, laboratory systems, and technical solutions to research, healthcare, diagnostic, educational, and industrial institutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 sm:pt-2">
              <HeroPrimaryButton href="/group-companies/biomax/solutions">
                <span>Explore Lab Solutions</span>
                <ArrowRight size={16} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/biomax/contact">
                <span>Contact Technical Team</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Executive Leadership & Specialized Team Section ─── */}
      <section className="py-14 sm:py-18 px-6 bg-[#f8fbfa] border-b" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span
              className="text-[11.5px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3 border shadow-xs"
              style={{ backgroundColor: `${COLORS.accent}14`, color: COLORS.accent, borderColor: `${COLORS.accent}30` }}
            >
              LEADERSHIP &amp; SPECIALIST TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3" style={{ color: COLORS.primary }}>
              Guided by Vision, Science &amp; Engineering
            </h2>
            <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>
              Our executive board and multidisciplinary team of biotechnology specialists, laboratory engineers, and validation experts drive Bio Max Corporation&apos;s operational excellence across Pakistan.
            </p>
          </div>

          {/* Top Row: Executive Leadership / CEO & Director Spotlight Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CEO Card - Ijaz Naseer */}
            <div
              className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start group"
              style={{ borderColor: COLORS.border }}
            >
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 flex-shrink-0 rounded-xl overflow-hidden border shadow-inner bg-slate-900" style={{ borderColor: COLORS.border }}>
                <Image
                  src="/logos/chairman.jpeg"
                  alt="Ijaz Naseer - Chairman & CEO"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white inline-block mb-2 shadow-xs" style={{ backgroundColor: COLORS.primary }}>
                    Chief Executive Officer
                  </span>
                  <h3 className="text-2xl font-black mb-1" style={{ color: COLORS.primary }}>
                    Ijaz Naseer
                  </h3>
                  <p className="text-[13px] font-bold mb-3" style={{ color: COLORS.accent }}>
                    Chairman &amp; CEO, Roysons Group &amp; Bio Max Corporation
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-slate-600">
                    Pioneering high-standard healthcare, laboratory engineering, and institutional biotechnology supply. Championing manufacturer-certified technology deployment and long-term public and private institutional partnerships.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t flex items-center justify-center sm:justify-start gap-2" style={{ borderColor: COLORS.border }}>
                  <ShieldCheck size={16} style={{ color: COLORS.accent }} />
                  <span className="text-[12px] font-bold text-slate-700">Executive Strategic Governance</span>
                </div>
              </div>
            </div>

            {/* Director Card - Hesham Sultan Ijaz */}
            <div
              className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start group"
              style={{ borderColor: COLORS.border }}
            >
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 flex-shrink-0 rounded-xl overflow-hidden border shadow-inner bg-slate-900" style={{ borderColor: COLORS.border }}>
                <Image
                  src="/Hesham Sultan Ijaz.jpg.jpeg"
                  alt="Hesham Sultan Ijaz - Executive Director"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white inline-block mb-2 shadow-xs" style={{ backgroundColor: COLORS.accent }}>
                    Executive Director
                  </span>
                  <h3 className="text-2xl font-black mb-1" style={{ color: COLORS.primary }}>
                    Hesham Sultan Ijaz
                  </h3>
                  <p className="text-[13px] font-bold mb-3" style={{ color: COLORS.accent }}>
                    Director, Corporate Strategy &amp; Business Expansion
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-slate-600">
                    Leading strategic corporate growth, international OEM partnerships, and the rollout of advanced scientific systems for academic universities, diagnostics centers, and specialized research facilities.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t flex items-center justify-center sm:justify-start gap-2" style={{ borderColor: COLORS.border }}>
                  <CheckCircle2 size={16} style={{ color: COLORS.accent }} />
                  <span className="text-[12px] font-bold text-slate-700">Strategic Ventures &amp; Partnerships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: 4 Core Technical & Scientific Specialists */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg sm:text-xl font-black" style={{ color: COLORS.primary }}>
                Departmental Heads &amp; Technical Leads
              </h4>
              <span className="text-[12px] font-bold text-slate-500">Multidisciplinary Team</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.role}
                  className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#2ee6ad]">
                        {member.dept}
                      </p>
                      <h5 className="text-[15.5px] font-black leading-tight drop-shadow-sm">
                        {member.name}
                      </h5>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[12.5px] font-bold mb-2" style={{ color: COLORS.primary }}>
                        {member.role}
                      </p>
                      <p className="text-[12px] leading-relaxed text-slate-600">
                        {member.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5 text-slate-500" style={{ borderColor: COLORS.border }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                      <span>{member.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

              <div className="space-y-3 pt-2">
                {[
                  "Dependable laboratory & diagnostic systems",
                  "High-accuracy analytical instrumentation",
                  "Comprehensive scientific protocol support",
                  "End-to-end institutional workflow calibration",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={19} style={{ color: COLORS.accent }} className="flex-shrink-0" />
                    <span className="text-[15px] sm:text-[15.5px] font-bold" style={{ color: COLORS.ink }}>
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
            <div className="p-8 rounded-2xl border border-[#d7e5ec] bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#165B7E] transition-all duration-300 cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#165B7E]"
                    style={{ backgroundColor: `${COLORS.primary}18` }}
                  >
                    <Target size={20} className="transition-colors duration-300 group-hover:text-white" style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-[#165B7E]" style={{ color: COLORS.primary }}>
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
            <div className="p-8 rounded-2xl border border-[#d7e5ec] bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#1D906C] transition-all duration-300 cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1D906C]"
                    style={{ backgroundColor: `${COLORS.accent}18` }}
                  >
                    <Eye size={20} className="transition-colors duration-300 group-hover:text-white" style={{ color: COLORS.accent }} />
                  </div>
                  <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-[#1D906C]" style={{ color: COLORS.accent }}>
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
