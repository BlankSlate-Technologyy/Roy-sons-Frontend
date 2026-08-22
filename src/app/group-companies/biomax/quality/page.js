"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { BiomaxNavbar, BiomaxFooter } from "../components/BiomaxShared";
import {
  ShieldCheck,
  Search,
  TrendingUp,
  Headphones,
  Users,
  Settings,
  Microscope,
  Target,
  Award,
  ClipboardCheck,
  Globe,
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  Building2,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  FileCheck,
  Check,
  Zap,
} from "lucide-react";

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
  lightGreen: "#ffffff",
  footerBg:   "#0D2B3D",      // Deep Brand Navy Teal Footer
};

// ─── Navigation Links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/group-companies/biomax" },
  { label: "About Us", href: "/group-companies/biomax/about" },
  { label: "Products & Solutions", href: "/group-companies/biomax/solutions" },
  { label: "Research & Development", href: "/group-companies/biomax/rnd" },
  { label: "Quality Assurance", href: "/group-companies/biomax/quality", active: true },
  { label: "Industries", href: "/group-companies/biomax/industries" },
  { label: "Contact Us", href: "/group-companies/biomax#contact-form" },
];

// ─── 6 Quality Commitment Items (Exact from Image) ───────────────────────────
const QUALITY_COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: "Reliable Product Selection",
  },
  {
    icon: Search,
    title: "Quality-Focused Sourcing",
  },
  {
    icon: TrendingUp,
    title: "Performance & Reliability",
  },
  {
    icon: Headphones,
    title: "Proper Technical Support",
  },
  {
    icon: Users,
    title: "Customer-Centered Service",
  },
  {
    icon: Settings,
    title: "Continuous Improvement",
  },
];

// ─── 5 Quality Horizontal Badges (Exact from Image) ──────────────────────────
const QUALITY_BADGES = [
  {
    icon: Award,
    title: "QUALITY ASSURED",
  },
  {
    icon: ClipboardCheck,
    title: "TESTED FOR RELIABILITY",
  },
  {
    icon: Target,
    title: "HIGH PERFORMANCE",
  },
  {
    icon: Globe,
    title: "CERTIFIED STANDARDS",
  },
  {
    icon: Handshake,
    title: "TRUSTED SUPPORT",
  },
];

// ─── 5 Bottom Pillars (Exact from Image) ──────────────────────────────────────
const GOAL_PILLARS = [
  { icon: ShieldCheck, label: "Quality" },
  { icon: Microscope, label: "Reliability" },
  { icon: Settings, label: "Consistency" },
  { icon: Users, label: "Trust" },
  { icon: TrendingUp, label: "Excellence" },
];

// ─── Quality Verification Standards ──────────────────────────────────────────
const QA_PROTOCOLS = [
  {
    step: "01",
    title: "Manufacturer Verification",
    desc: "Rigorous audit and onboarding of certified equipment and consumables manufacturers.",
  },
  {
    step: "02",
    title: "Batch & Instrument Testing",
    desc: "Incoming verification of dimensional accuracy, optical clarity, and electrical parameters.",
  },
  {
    step: "03",
    title: "Traceable Calibration",
    desc: "Precision calibration aligning with international measurement and laboratory benchmarks.",
  },
  {
    step: "04",
    title: "Post-Delivery Technical QA",
    desc: "On-site installation validation (IQ/OQ), user training, and ongoing performance monitoring.",
  },
];

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "/group-companies/biomax" },
    { label: "About Us", href: "/group-companies/biomax/about" },
    { label: "Products & Solutions", href: "/group-companies/biomax/solutions" },
    { label: "Research & Development", href: "/group-companies/biomax/rnd" },
    { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
    { label: "Industries", href: "/group-companies/biomax/industries" },
  ],
  "Product Portfolios": [
    { label: "Laboratory Equipment", href: "/group-companies/biomax/solutions#lab-equipment" },
    { label: "Diagnostic Equipment", href: "/group-companies/biomax/solutions#diagnostic-equipment" },
    { label: "Biotechnology Solutions", href: "/group-companies/biomax/solutions#biotech-solutions" },
    { label: "Laboratory Consumables", href: "/group-companies/biomax/solutions#consumables" },
    { label: "Scientific Instruments", href: "/group-companies/biomax/solutions#scientific-instruments" },
  ],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

export default function BiomaxQualityPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.classList.add("biomax-theme");
    return () => {
      document.body.classList.remove("biomax-theme");
    };
  }, []);

  return (
    <main className="min-h-screen biomax-theme bg-white" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
      <ScrollProgress color={COLORS.accent} />
      <BiomaxNavbar />

      {/* ─── Hero & Master Showcase Section (Exact Reference Layout) ───────── */}
      <section className="relative py-12 lg:py-16 px-6 bg-white border-b overflow-hidden" style={{ borderColor: COLORS.border }}>
        {/* Subtle Molecular DNA Texture */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <div className="w-full h-full bg-[radial-gradient(#165B7E_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="mx-auto max-w-screen-xl relative z-10 space-y-10">
          {/* Top Row: Title, Subtitle, Intro Text + Top-Right Badge */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              {/* Main Heading */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight"
                style={{ color: COLORS.primary }}
              >
                QUALITY <br className="hidden sm:inline" />
                <span style={{ color: "#165B7E" }}>ASSURANCE</span>
              </h1>

              {/* Subtitle with dashes */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-0.5" style={{ backgroundColor: COLORS.primary }} />
                <h2 className="text-lg sm:text-xl font-black tracking-wide" style={{ color: COLORS.primary }}>
                  Quality You Can Trust
                </h2>
                <span className="w-10 h-0.5" style={{ backgroundColor: COLORS.primary }} />
              </div>

              {/* Exact Paragraph 1 & Paragraph 2 */}
              <div className="space-y-3 text-[14.5px] sm:text-[15.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                <p>
                  Quality and reliability are fundamental to laboratory operations. At Bio Max Corporation, we focus on providing products and solutions that meet appropriate quality and performance requirements.
                </p>
                <p>
                  Our quality-focused approach extends from product selection and sourcing to technical support and customer service.
                </p>
              </div>
            </div>

            {/* Top Right: "QUALITY YOU CAN TRUST" Shield Badge */}
            <div className="flex-shrink-0 flex items-center justify-start lg:justify-end">
              <div
                className="p-5 rounded-2xl shadow-sm flex flex-col items-center text-center border-2 bg-white"
                style={{
                  borderColor: COLORS.border,
                  backgroundColor: "#ffffff",
                  minWidth: "180px",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <ShieldCheck size={26} style={{ color: COLORS.primary }} />
                </div>
                <p className="text-[12px] font-black uppercase tracking-wider" style={{ color: COLORS.primary }}>
                  QUALITY
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.accent }}>
                  YOU CAN TRUST
                </p>
                <div className="mt-2 w-6 h-6 rounded-full bg-[#1D906C] flex items-center justify-center shadow-sm">
                  <Check size={14} className="text-white" style={{ strokeWidth: 3 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main 3-Column Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: OUR QUALITY COMMITMENT */}
            <div className="lg:col-span-4 flex flex-col">
              <div
                className="rounded-2xl border-2 bg-white shadow-lg overflow-hidden flex-1 flex flex-col"
                style={{ borderColor: COLORS.border }}
              >
                {/* Header Tab */}
                <div
                  className="px-6 py-3.5 text-white flex items-center justify-between"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <h3 className="text-[13px] font-black uppercase tracking-wider">
                    OUR QUALITY COMMITMENT
                  </h3>
                  <ShieldCheck size={18} className="text-white/80" />
                </div>

                {/* 6 Items List with Dividers */}
                <div className="p-4 sm:p-5 divide-y flex-1 flex flex-col justify-between" style={{ borderColor: COLORS.border }}>
                  {QUALITY_COMMITMENTS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-center gap-3.5 py-3 first:pt-1 last:pb-1">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: COLORS.primary }}
                        >
                          <Icon size={17} className="text-white" />
                        </div>
                        <span className="text-[13.5px] font-bold" style={{ color: COLORS.primary }}>
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Center Card: QUALITY CONTROL */}
            <div className="lg:col-span-3 flex flex-col">
              <div
                className="rounded-2xl border-2 bg-white p-6 sm:p-8 shadow-lg flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden"
                style={{ borderColor: COLORS.border }}
              >
                {/* Center Badge Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <ShieldCheck size={32} className="text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider mb-2" style={{ color: COLORS.primary }}>
                  QUALITY CONTROL
                </h3>
                <div className="w-10 h-0.5 mx-auto mb-4" style={{ backgroundColor: COLORS.accent }} />

                <p className="text-[13px] sm:text-[13.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                  We aim to work with reputable manufacturers and technology providers while maintaining appropriate quality standards throughout our product and service process.
                </p>

                <div className="mt-6 pt-4 border-t w-full" style={{ borderColor: COLORS.border }}>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1D906C] flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>ISO 9001 &amp; CE Compliant</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Scientist Microscopy Laboratory AI Photo */}
            <div className="lg:col-span-5 flex flex-col">
              <div
                className="relative w-full h-[320px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden border-2 shadow-lg group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/biomax_qa_scientist_ai.jpg"
                  alt="BioMax Quality Assurance Inspection & Microscopy"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(13,43,61,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider mb-1 inline-block">
                    Rigorous Inspection
                  </span>
                  <p className="text-[12.5px] font-semibold text-white/90">
                    High-magnification optical verification &amp; quality calibration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Horizontal Quality Badges Bar (Exact from Image) */}
          <div
            className="rounded-2xl border-2 bg-white p-5 sm:p-6 shadow-md"
            style={{ borderColor: COLORS.border }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {QUALITY_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.title}
                    className={`flex flex-col items-center text-center p-3 transition-transform hover:scale-105 ${
                      idx < 4 ? "lg:border-r" : ""
                    }`}
                    style={{ borderColor: COLORS.border }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2.5 shadow-sm"
                      style={{ backgroundColor: `${COLORS.primary}12` }}
                    >
                      <Icon size={22} style={{ color: COLORS.primary }} />
                    </div>
                    <p className="text-[11.5px] font-black uppercase tracking-wider leading-tight" style={{ color: COLORS.primary }}>
                      {badge.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Goal Banner */}
          <div
            className="rounded-2xl p-6 sm:p-8 shadow-sm border bg-white relative overflow-hidden"
            style={{
              borderColor: COLORS.border,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Left Goal Quote */}
              <div className="lg:col-span-7 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <Target size={32} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wider mb-0.5" style={{ color: COLORS.accent }}>
                    Our goal is simple:
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-black leading-snug" style={{ color: COLORS.primary }}>
                    “ Deliver reliable solutions that laboratories can depend on. ”
                  </p>
                </div>
              </div>

              {/* Right 5 Pillars */}
              <div className="lg:col-span-5 grid grid-cols-5 gap-2 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6" style={{ borderColor: COLORS.border }}>
                {GOAL_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.label} className="flex flex-col items-center text-center">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-1.5 shadow-sm"
                        style={{ backgroundColor: `${COLORS.primary}12` }}
                      >
                        <Icon size={18} style={{ color: COLORS.primary }} />
                      </div>
                      <span className="text-[10.5px] font-bold" style={{ color: COLORS.muted }}>
                        {pillar.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quality Verification Protocols ────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-b" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span
              className="text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-2 border bg-[#EAF6F3]"
              style={{ color: COLORS.accent, borderColor: `${COLORS.accent}40` }}
            >
              QUALITY FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black" style={{ color: COLORS.primary }}>
              End-to-End Quality Protocols
            </h2>
            <p className="mt-2 text-[14.5px]" style={{ color: COLORS.muted }}>
              How BioMax ensures standard adherence across every stage of supply, testing, and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QA_PROTOCOLS.map((proto) => (
              <div
                key={proto.step}
                className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div
                    className="text-2xl font-black mb-3 px-3 py-1 rounded-lg inline-block text-white"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {proto.step}
                  </div>
                  <h3 className="text-[16px] font-black mb-2" style={{ color: COLORS.primary }}>
                    {proto.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
                    {proto.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Inquiry / Certificate Consultation Form ───────────────── */}
      <section id="qa-inquiry-section" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl border overflow-hidden shadow-xl bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div className="grid lg:grid-cols-12">
              {/* Left Info Panel */}
              <div
                className="lg:col-span-5 p-8 sm:p-10 text-white flex flex-col justify-between"
                style={{ backgroundColor: COLORS.primary }}
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#dce8f0] block mb-2">
                    COMPLIANCE &amp; CERTIFICATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">
                    Quality &amp; Compliance Inquiries
                  </h3>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-6">
                    Need batch inspection certificates, IQ/OQ validation protocols, or compliance documentation? Our Quality Assurance department is ready to assist.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">QA Department Location</p>
                        <p className="text-[12.5px] text-white font-medium">
                          1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <Phone size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Telephone Support</p>
                        <p className="text-[12.5px] text-white font-medium">
                          0092-42-38924737 | WhatsApp: 0092-304-7527498
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <Mail size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">QA Direct Email</p>
                        <p className="text-[12.5px] text-white font-medium">
                          info@roysons.org | support@roysons.org
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20 flex gap-3">
                  {SOCIAL_ICONS.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right CTA Panel */}
              <div className="lg:col-span-7 p-8 sm:p-10 bg-white flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
                    QA INQUIRY &amp; COMPLIANCE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                    Request Quality Verification &amp; Support
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                    Need batch inspection certificates (COA), IQ/OQ validation protocols, calibration logs, or compliance documentation? Submit your inquiry directly on our dedicated Contact page.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Standard Certificate of Analysis (COA) & CE documentation",
                      "ISO 9001:2015 traceability & performance verification",
                      "Full technical calibration certificates with measurement metrics",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} style={{ color: COLORS.accent }} />
                        <span className="text-[13px] font-semibold" style={{ color: COLORS.primary }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/group-companies/biomax/contact"
                  className="w-full py-4 rounded-xl text-[14px] font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Submit QA Request on Contact Page</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BiomaxFooter />
    </main>
  );
}
