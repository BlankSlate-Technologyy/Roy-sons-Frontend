"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { BiomaxNavbar, BiomaxFooter } from "../components/BiomaxShared";
import {
  HeartPulse,
  Microscope,
  GraduationCap,
  Pill,
  Dna,
  FlaskConical,
  Building2,
  Award,
  Target,
  ShieldCheck,
  Handshake,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  Boxes,
  Zap,
  Users,
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
  { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
  { label: "Industries", href: "/group-companies/biomax/industries", active: true },
  { label: "Contact Us", href: "/group-companies/biomax#contact-form" },
];

// ─── The 7 Industry Verticals (Exact User Reference Image) ────────────────────
const INDUSTRIES_DATA = [
  {
    id: "healthcare-diagnostics",
    icon: HeartPulse,
    title: "Healthcare & Diagnostics",
    image: "/biomax_ind_healthcare_ai.jpg",
    imageAlt: "Clinical medical diagnostics and pathology laboratory solutions",
    desc: "Supporting hospitals, diagnostic laboratories, medical institutions, and clinical testing environments with laboratory and diagnostic solutions.",
    tags: ["Diagnostic Labs", "Hospital Networks", "Pathology Testing"],
  },
  {
    id: "research-institutions",
    icon: Microscope,
    title: "Research Institutions",
    image: "/biomax_ind_research_ai.jpg",
    imageAlt: "Scientific research laboratories and advanced microscopy",
    desc: "Providing scientific equipment and laboratory technologies for research organizations and scientific laboratories.",
    tags: ["Life Sciences R&D", "Microscopy Suites", "Analytical Chemistry"],
  },
  {
    id: "universities-education",
    icon: GraduationCap,
    title: "Universities & Educational Institutions",
    image: "/biomax_ind_university_ai.jpg",
    imageAlt: "University students in scientific life sciences laboratory",
    desc: "Supporting universities, colleges, and educational laboratories with equipment and laboratory supplies for teaching and research.",
    tags: ["Academic Labs", "Student Workstations", "Educational Supplies"],
  },
  {
    id: "pharmaceutical-industry",
    icon: Pill,
    title: "Pharmaceutical Industry",
    image: "/biomax_scientific_instruments_ai.jpg",
    imageAlt: "Pharmaceutical laboratory quality control and HPLC testing",
    desc: "Laboratory solutions supporting pharmaceutical research, testing, quality control, and development environments.",
    tags: ["QA/QC Laboratories", "Formulation Testing", "Regulatory Compliance"],
  },
  {
    id: "biotechnology",
    icon: Dna,
    title: "Biotechnology",
    image: "/biomax_biotech_solutions_ai.jpg",
    imageAlt: "Biotechnology molecular biology and cell culture workstations",
    desc: "Providing equipment and technologies for biotechnology research, molecular biology, and related applications.",
    tags: ["Genomics & PCR", "Cell Culture", "Biosafety Environments"],
  },
  {
    id: "food-agriculture",
    icon: FlaskConical,
    title: "Food & Agriculture",
    image: "/biomax_consumables_ai.jpg",
    imageAlt: "Food safety testing and agricultural research consumables",
    desc: "Laboratory solutions supporting food testing, agricultural research, quality analysis, and related scientific applications.",
    tags: ["Food Safety Testing", "Agronomic Research", "Soil & Water Analysis"],
  },
  {
    id: "industrial-laboratories",
    icon: Building2,
    title: "Industrial Laboratories",
    image: "/biomax_lab_equipment_ai.jpg",
    imageAlt: "Industrial testing laboratories and quality control equipment",
    desc: "Supporting industrial laboratories with testing, analysis, measurement, and quality-control solutions.",
    tags: ["Materials Testing", "Industrial Calibration", "Process Control"],
  },
];

// ─── Bottom Value Badges (Exact from Image) ───────────────────────────────────
const BOTTOM_BADGES = [
  { icon: Award, label: "Trusted Solutions" },
  { icon: Target, label: "Industry Expertise" },
  { icon: ShieldCheck, label: "Quality You Can Trust" },
  { icon: Handshake, label: "Committed to Excellence" },
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

export default function BiomaxIndustriesPage() {
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

      {/* ─── Hero Section with AI Background Image ─────────────────────────── */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden border-b min-h-[460px] sm:min-h-[500px] flex items-center" style={{ borderColor: COLORS.border }}>
        {/* ── Background AI Header Image ── */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <Image
            src="/biomax_header_industries_ai.jpg"
            alt="Multi-Industry Laboratory Capabilities"
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
          <div className="max-w-3xl space-y-4">
            <span
              className="text-[12px] sm:text-[13px] font-black uppercase tracking-[0.18em] px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-2 border backdrop-blur-md shadow-md text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.35)",
              }}
            >
              <Sparkles size={14} className="text-[#2ee6ad]" />
              <span>MULTI-SECTOR CAPABILITIES</span>
              <span className="w-2 h-2 rounded-full bg-[#2ee6ad] animate-pulse" />
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-tight leading-[1.1] text-white drop-shadow-md">
              INDUSTRIES &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ee6ad] to-[#ffffff]">SECTORS WE SERVE</span>
            </h1>

            <div className="flex items-center gap-2 my-2">
              <div className="w-16 h-1 rounded-full bg-[#2ee6ad]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ee6ad]" />
            </div>

            <p className="text-[17px] sm:text-[19px] leading-relaxed font-medium text-slate-100 max-w-2xl">
              Bio Max Corporation provides laboratory and biotechnology solutions across multiple scientific, healthcare, educational, and industrial sectors.
            </p>

            <div className="pt-3 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("industry-cards-section")}
                className="px-7 py-3.5 rounded-xl text-[14px] font-bold text-white flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
                style={{ backgroundColor: COLORS.accent }}
              >
                <span>Explore 7 Sectors</span>
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection("industry-inquiry-section")}
                className="px-7 py-3.5 rounded-xl text-[14px] font-bold border-2 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md text-white hover:bg-white hover:text-[#165B7E]"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.75)",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                }}
              >
                <span>Request Sector Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The 7 Industry Column Cards ─────── */}
      <section id="industry-cards-section" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className="text-[11.5px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3 border shadow-xs"
              style={{ backgroundColor: `${COLORS.accent}14`, color: COLORS.accent, borderColor: `${COLORS.accent}30` }}
            >
              SPECIALIZED SECTOR SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3" style={{ color: COLORS.primary }}>
              Sectors &amp; Industries We Empower
            </h2>
            <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>
              From clinical healthcare to advanced biotechnology and industrial manufacturing, explore our dedicated equipment and technology portfolios tailored for each sector.
            </p>
          </div>

          {/* Cards Grid: Row 1 has 4 cards, Row 2 has 3 cards perfectly filling 12 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const Icon = ind.icon;
              const isSecondRow = idx >= 4;
              const colSpanClass = isSecondRow ? "lg:col-span-4" : "lg:col-span-3";

              return (
                <div
                  key={ind.id}
                  className={`${colSpanClass} rounded-2xl border border-[#d7e5ec] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#1D906C] transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
                >
                  <div>
                    {/* Card Image Header with Floating Badge & Icon */}
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={ind.image}
                        alt={ind.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />

                      {/* Icon Floating Tile */}
                      <div className="absolute top-3.5 left-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center border border-white/60 group-hover:scale-110 group-hover:bg-[#1D906C] transition-all duration-300">
                          <Icon size={20} className="text-[#165B7E] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Sector Number Tag */}
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#0D2B3D]/85 text-[#2ee6ad] border border-white/10 backdrop-blur-sm">
                          Sector {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-[#165B7E] group-hover:text-[#1D906C] transition-colors leading-snug mb-2.5 min-h-[44px] flex items-center">
                        {ind.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#1F4E68] mb-4 min-h-[60px]">
                        {ind.desc}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {ind.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 group-hover:border-[#1D906C]/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                    <Link
                      href={`/group-companies/biomax/industries/${ind.id}`}
                      className="w-full py-2.5 px-4 rounded-xl text-[12.5px] font-bold text-white bg-[#165B7E] group-hover:bg-[#1D906C] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md cursor-pointer"
                    >
                      <span>Explore Sector Solutions</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom Value Ribbon (Exact Reproduction from Image) ───────── */}
      <section className="px-6 pb-16 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-2xl p-6 sm:p-7 shadow-sm border bg-white relative overflow-hidden"
            style={{
              borderColor: COLORS.border,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Left: Hexagonal Flask Badge + Statement */}
              <div className="lg:col-span-6 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <FlaskConical size={28} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[16px] font-black uppercase tracking-wider leading-tight" style={{ color: COLORS.primary }}>
                    ONE PARTNER. MULTIPLE INDUSTRIES. <br className="hidden sm:inline" />
                    <span style={{ color: COLORS.accent }}>BETTER SOLUTIONS.</span>
                  </h4>
                </div>
              </div>

              {/* Right: 4 Badges */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6" style={{ borderColor: COLORS.border }}>
                {BOTTOM_BADGES.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.label} className="flex flex-col items-center text-center">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 shadow-sm"
                        style={{ backgroundColor: `${COLORS.primary}12` }}
                      >
                        <Icon size={16} style={{ color: COLORS.primary }} />
                      </div>
                      <span className="text-[11px] font-bold leading-tight" style={{ color: COLORS.muted }}>
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sector Tailored Consultation Form ──────────────────────────────── */}
      <section id="industry-inquiry-section" className="py-10 sm:py-12 px-6 bg-white border-t" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-2xl border overflow-hidden shadow-md bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div className="grid lg:grid-cols-12 items-stretch">
              {/* Left Info Panel */}
              <div
                className="lg:col-span-5 p-6 sm:p-8 text-white flex flex-col justify-between"
                style={{ backgroundColor: COLORS.primary }}
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#dce8f0] block mb-2">
                    SECTOR SOLUTIONS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
                    Connect With Our Industry Specialists
                  </h3>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-6">
                    Whatever your industry, our dedicated application engineers provide tailored equipment recommendations, technical setup, and procurement guidance.
                  </p>

                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Main Office</p>
                        <p className="text-[12.5px] text-white font-medium">
                          First Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <Phone size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Direct Contact</p>
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
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Corporate Email</p>
                        <p className="text-[12.5px] text-white font-medium">
                          info@roysons.org | support@roysons.org
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 flex gap-3">
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
              <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-center">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
                    INDUSTRY INQUIRY &amp; PROPOSALS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2.5" style={{ color: COLORS.primary }}>
                    Request Industry-Specific Consultation
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: COLORS.muted }}>
                    Whether you require clinical diagnostics systems for hospitals, analytical instruments for universities, or quality-control machinery for pharmaceutical plants, our specialists are ready to tailor solutions.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Custom equipment packages configured for your sector needs",
                      "Turnkey laboratory setup, delivery, calibration & support",
                      "Institutional procurement pricing & long-term maintenance contracts",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-3">
                        <CheckCircle2 size={19} className="flex-shrink-0" style={{ color: COLORS.accent }} />
                        <span className="text-[14px] sm:text-[14.5px] font-bold" style={{ color: COLORS.primary }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/group-companies/biomax/contact"
                  className="w-full py-3.5 rounded-xl text-[14px] font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Submit Industry Inquiry on Contact Page</span>
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
