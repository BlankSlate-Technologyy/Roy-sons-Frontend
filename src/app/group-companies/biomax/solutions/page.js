"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { BiomaxNavbar, BiomaxFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/BiomaxShared";
import {
  Microscope,
  HeartPulse,
  Dna,
  FlaskConical,
  TestTube,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Package,
  Settings,
  ChevronRight,
  ShieldCheck,
  Award,
  Building2,
  GraduationCap,
  Pill,
  Landmark,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
  FileText,
  Search,
  Check,
  Layers,
  Activity,
  Boxes,
  Zap,
  Users,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
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

// ─── Product Category Data (Exact User Specifications) ────────────────────────
const PRODUCT_CATEGORIES = [
  {
    id: "lab-equipment",
    icon: Microscope,
    title: "Laboratory Equipment",
    eyebrow: "CATEGORY 01",
    tagline: "Advanced equipment designed for routine laboratory operations, research, testing, and analysis.",
    image: "/biomax_lab_equipment_ai.jpg",
    imageAlt: "Advanced modern laboratory equipment — centrifuges, microscopes, incubators",
    accentColor: COLORS.primary,
    badge: "CORE EQUIPMENT",
    description: "BioMax provides robust, high-performance laboratory equipment engineered for universities, commercial testing facilities, and industrial research laboratories. Designed for continuous operation, precision control, and long-term durability.",
    items: [
      "Laboratory Instruments",
      "Analytical Equipment",
      "Centrifuges",
      "Incubators",
      "Microscopes",
      "Laboratory Shakers",
      "Heating & Cooling Equipment",
    ],
    features: [
      "Digital microprocessor temperature & speed regulation",
      "Low noise, maintenance-free brushless induction motors",
      "Anti-vibration damping for sensitive analytical procedures",
      "Intuitive digital control panels with programmable protocols",
    ],
  },
  {
    id: "diagnostic-equipment",
    icon: HeartPulse,
    title: "Diagnostic Equipment",
    eyebrow: "CATEGORY 02",
    tagline: "Reliable solutions for clinical and diagnostic laboratories.",
    image: "/biomax_diagnostic_equipment_ai.jpg",
    imageAlt: "Clinical diagnostic instruments and automated sample processing systems",
    accentColor: COLORS.accent,
    badge: "CLINICAL & DIAGNOSTIC",
    description: "Our clinical diagnostic solutions deliver high throughput, rapid turnaround times, and dependable accuracy for patient diagnostics, pathology centers, and hospital laboratories.",
    items: [
      "Diagnostic Instruments",
      "Clinical Laboratory Equipment",
      "Sample Processing Systems",
      "Testing Equipment",
      "Laboratory Consumables",
    ],
    features: [
      "Automated robotic sample handling & barcode tracking",
      "Multi-parameter clinical testing with high reproducibility",
      "Seamless laboratory information system (LIS) integration",
      "Compliance with international diagnostic safety benchmarks",
    ],
  },
  {
    id: "biotech-solutions",
    icon: Dna,
    title: "Biotechnology Solutions",
    eyebrow: "CATEGORY 03",
    tagline: "Specialized technologies supporting biotechnology research and laboratory workflows.",
    image: "/biomax_biotech_solutions_ai.jpg",
    imageAlt: "Biotechnology research systems — PCR, DNA analysis, cell culture",
    accentColor: COLORS.primary,
    badge: "GENOMICS & BIOTECH",
    description: "Cutting-edge tools and instrumentation supporting life sciences, molecular genetics, nucleic acid amplification, and cell culture workflows in academic and commercial biotech facilities.",
    items: [
      "Molecular Biology Equipment",
      "DNA & RNA Analysis Solutions",
      "PCR & Related Systems",
      "Cell Culture Equipment",
      "Biotechnology Consumables",
      "Research Laboratory Systems",
    ],
    features: [
      "High-precision thermal cyclers for qualitative & quantitative PCR",
      "High-resolution UV/Blue LED transillumination for gel imaging",
      "Sterile laminar flow & biosafety cell culture environments",
      "Optimized reagents and consumables for molecular extraction",
    ],
  },
  {
    id: "consumables",
    icon: FlaskConical,
    title: "Laboratory Consumables",
    eyebrow: "CATEGORY 04",
    tagline: "A range of essential laboratory consumables designed for routine and specialized applications.",
    image: "/biomax_consumables_ai.jpg",
    imageAlt: "Laboratory consumables — glassware, plasticware, pipettes, tubes",
    accentColor: COLORS.accent,
    badge: "ESSENTIAL SUPPLIES",
    description: "A comprehensive catalog of premium laboratory consumables manufactured to stringent purity standards, ensuring sample integrity, zero cross-contamination, and accurate fluid handling.",
    items: [
      "Laboratory Plasticware",
      "Glassware",
      "Pipettes & Tips",
      "Tubes & Containers",
      "Sample Collection Products",
      "General Laboratory Supplies",
    ],
    features: [
      "Certified DNase, RNase, Pyrogen & Endotoxin-free options",
      "High-purity virgin medical-grade polypropylene (PP)",
      "Borosilicate 3.3 laboratory glass with superior thermal shock resistance",
      "Ultra-low retention filter pipette tips for precision dispensing",
    ],
  },
  {
    id: "scientific-instruments",
    icon: Target,
    title: "Scientific Instruments",
    eyebrow: "CATEGORY 05",
    tagline: "Precision-focused instruments for measurement, analysis, research, and quality control.",
    image: "/biomax_scientific_instruments_ai.jpg",
    imageAlt: "Scientific precision instruments for measurement, HPLC, spectrophotometry and analytical weighing",
    accentColor: COLORS.primary,
    badge: "PRECISION ANALYTICS",
    description: "Advanced analytical and measurement instruments engineered for chemical characterization, quality assurance testing, environmental monitoring, and scientific discovery.",
    items: [
      "Precision-Focused Measurement Instruments",
      "UV-Vis Spectrophotometers & Optical Analyzers",
      "Chromatography & Separation Systems (HPLC)",
      "Analytical Microbalances & Precision Scales",
      "Digital pH, Conductivity & Electrochemical Meters",
      "Quality Control & Calibration Instruments",
    ],
    features: [
      "Sub-milligram analytical weighing accuracy with internal calibration",
      "Multi-wavelength spectral scanning with high photometric linearity",
      "GLP / GMP compliant data recording and audit trails",
      "Robust sensor technology for harsh chemical environments",
    ],
  },
];

// ─── Key Stats ────────────────────────────────────────────────────────────────
const OVERVIEW_STATS = [
  { icon: Package, value: "150+", label: "Laboratory Products" },
  { icon: Layers, value: "5", label: "Core Categories" },
  { icon: ShieldCheck, value: "99.2%", label: "Accuracy Rate" },
  { icon: Building2, value: "300+", label: "Institutions Served" },
];

// ─── Industries Served ────────────────────────────────────────────────────────
const INDUSTRIES = [
  { icon: FlaskConical, title: "Research Labs", desc: "Scientific R&D centers & universities" },
  { icon: HeartPulse, title: "Diagnostic Centers", desc: "Clinical pathology & testing facilities" },
  { icon: Building2, title: "Hospitals & Clinics", desc: "Healthcare & emergency laboratories" },
  { icon: Pill, title: "Pharmaceutical Firms", desc: "Drug development & QA/QC testing" },
  { icon: Dna, title: "Biotech Enterprises", desc: "Genomics, agriculture & cell culture" },
  { icon: Landmark, title: "Government & Forensics", desc: "Public health & regulatory agencies" },
];

// ─── Navigation Links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/group-companies/biomax" },
  { label: "About Us", href: "/group-companies/biomax/about" },
  { label: "Products & Solutions", href: "/group-companies/biomax/solutions", active: true },
  { label: "Research & Development", href: "/group-companies/biomax/rnd" },
  { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
  { label: "Industries", href: "/group-companies/biomax/industries" },
  { label: "Contact Us", href: "/group-companies/biomax#contact-form" },
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
  "Product Categories": [
    { label: "Laboratory Equipment", href: "#lab-equipment" },
    { label: "Diagnostic Equipment", href: "#diagnostic-equipment" },
    { label: "Biotechnology Solutions", href: "#biotech-solutions" },
    { label: "Laboratory Consumables", href: "#consumables" },
    { label: "Scientific Instruments", href: "#scientific-instruments" },
  ],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BiomaxSolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCategoryForQuote, setSelectedCategoryForQuote] = useState("Laboratory Equipment");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.add("biomax-theme");
    return () => {
      document.body.classList.remove("biomax-theme");
    };
  }, []);

  const scrollToInquiry = (categoryTitle) => {
    if (categoryTitle) {
      setSelectedCategoryForQuote(categoryTitle);
    }
    const el = document.getElementById("inquire-section");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Filtered categories if search is used
  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.title.toLowerCase().includes(q) ||
      cat.tagline.toLowerCase().includes(q) ||
      cat.items.some((item) => item.toLowerCase().includes(q))
    );
  });

  return (
    <main className="min-h-screen biomax-theme bg-white" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
      <ScrollProgress color={COLORS.accent} />
      <BiomaxNavbar />

      {/* ─── Hero Section with High-Tech Lab Showcase ──────────────────────── */}
      <section className="relative py-16 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ backgroundColor: "#ffffff", borderColor: COLORS.border }}>
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="max-w-3xl space-y-4">
            {/* Pill Eyebrow */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-widest mb-2 border bg-white shadow-sm"
              style={{ color: COLORS.accent, borderColor: COLORS.border }}
            >
              <Sparkles size={14} style={{ color: COLORS.accent }} />
              <span>Our Products &amp; Laboratory Solutions</span>
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.primary }}>
              Our Products &amp; <br />
              <span style={{ color: COLORS.accent }}>Laboratory Solutions</span>
            </h1>

            {/* Intro Text (Verbatim Requirement) */}
            <p className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed max-w-2xl" style={{ color: COLORS.muted }}>
              We provide a comprehensive range of scientific and laboratory solutions designed to support modern research, diagnostics, healthcare, and industrial applications.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#category-explorer"
                className="px-7 py-3.5 rounded-md text-[13.5px] font-bold text-white transition-all flex items-center gap-2 cursor-pointer shadow-md hover:bg-[#1D906C] hover:-translate-y-0.5"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span>Browse 5 Solution Portfolios</span>
                <ChevronRight size={16} />
              </a>
              <button
                onClick={() => scrollToInquiry("General Products Inquiry")}
                className="px-7 py-3.5 rounded-md text-[13.5px] font-bold border-2 bg-white transition-all flex items-center gap-2 cursor-pointer hover:bg-[#1D906C] hover:border-[#1D906C] hover:text-white hover:-translate-y-0.5"
                style={{ borderColor: COLORS.accent, color: COLORS.accent }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Quick Jump Category Chips */}
          <div className="mt-12 pt-8 border-t grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" style={{ borderColor: COLORS.border }}>
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(idx);
                    const el = document.getElementById("category-explorer");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="p-3.5 rounded-xl bg-white hover:border-[#1D906C] border text-left transition-all duration-200 cursor-pointer group flex items-center gap-2.5 hover:-translate-y-0.5 shadow-sm"
                  style={{ borderColor: COLORS.border }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${COLORS.primary}12` }}
                  >
                    <Icon size={16} style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase" style={{ color: COLORS.accent }}>{cat.eyebrow}</p>
                    <p className="text-[12px] font-black leading-tight" style={{ color: COLORS.primary }}>{cat.title}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Stats Bar with Animated Counter ───────────────────────────────── */}
      <section className="py-8 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {OVERVIEW_STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3.5 p-4 rounded-xl border bg-white biomax-counter-box cursor-pointer shadow-sm"
              style={{ borderColor: COLORS.border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${COLORS.primary}15` }}
              >
                <Icon size={22} style={{ color: COLORS.primary }} />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-black leading-none" style={{ color: COLORS.primary }}>
                  <Counter value={value} duration={2} />
                </div>
                <p className="text-[12.5px] font-bold mt-1" style={{ color: COLORS.muted }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Interactive Category Explorer (Tabs + Deep Dive) ──────────────── */}
      <section id="category-explorer" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span
                className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-2 border"
                style={{ backgroundColor: COLORS.lightGreen, color: COLORS.accent, borderColor: `${COLORS.accent}40` }}
              >
                CATEGORY EXPLORER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black" style={{ color: COLORS.primary }}>
                Explore by Product Category
              </h2>
              <p className="text-[14.5px] mt-2 max-w-2xl" style={{ color: COLORS.muted }}>
                Select a category below to explore advanced laboratory equipment, specialized technologies, and consumables.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search solutions & products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-[13px] border rounded-lg outline-none transition-all"
                style={{ borderColor: COLORS.border, color: COLORS.primary }}
              />
              <Search size={15} className="absolute left-3 top-3.5" style={{ color: COLORS.accent }} />
            </div>
          </div>

          {/* 5 Tab Navigation */}
          <div className="border-b" style={{ borderColor: COLORS.border }}>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-px">
              {PRODUCT_CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                    className="flex items-center gap-2.5 px-5 py-3.5 rounded-t-xl text-[13.5px] font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 border-t border-l border-r"
                    style={{
                      backgroundColor: isActive ? COLORS.white : COLORS.lightBg,
                      borderColor: isActive ? COLORS.border : "transparent",
                      color: isActive ? COLORS.primary : COLORS.muted,
                      borderBottom: isActive ? `3px solid ${COLORS.accent}` : "3px solid transparent",
                    }}
                  >
                    <Icon size={17} style={{ color: isActive ? COLORS.accent : COLORS.muted }} />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Display */}
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            if (idx !== activeTab) return null;
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-8 lg:p-10 rounded-2xl border bg-white shadow-sm"
                style={{ borderColor: COLORS.border }}
              >
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Specifications & Content */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{ backgroundColor: `${cat.accentColor}15`, color: cat.accentColor }}
                        >
                          {cat.eyebrow}
                        </span>
                        <span
                          className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border"
                          style={{ backgroundColor: COLORS.lightBg, color: COLORS.muted, borderColor: COLORS.border }}
                        >
                          {cat.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 my-2">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: `${cat.accentColor}18` }}
                        >
                          <Icon size={26} style={{ color: cat.accentColor }} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
                          {cat.title}
                        </h3>
                      </div>

                      {/* Tagline (Exact User Text) */}
                      <p className="text-[15px] font-semibold leading-relaxed" style={{ color: COLORS.accent }}>
                        {cat.tagline}
                      </p>
                      <p className="text-[13.5px] leading-relaxed mt-2" style={{ color: COLORS.muted }}>
                        {cat.description}
                      </p>
                    </div>

                    {/* Solutions Include Block (Exact User Text) */}
                    <div className="p-6 rounded-xl border bg-white" style={{ borderColor: COLORS.border }}>
                      <p
                        className="text-[12.5px] font-black uppercase tracking-wider mb-3.5 flex items-center gap-2"
                        style={{ color: COLORS.primary }}
                      >
                        <Boxes size={15} style={{ color: cat.accentColor }} />
                        <span>Solutions Include:</span>
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {cat.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2.5 p-2 rounded-lg bg-white border"
                            style={{ borderColor: COLORS.border }}
                          >
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${cat.accentColor}18` }}
                            >
                              <Check size={11} style={{ color: cat.accentColor }} />
                            </div>
                            <span className="text-[13px] font-bold" style={{ color: COLORS.primary }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineering & Reliability Highlights */}
                    <div>
                      <p className="text-[12px] font-black uppercase tracking-wider mb-2.5" style={{ color: COLORS.muted }}>
                        Key Technical Advantages:
                      </p>
                      <div className="space-y-2">
                        {cat.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-[13px]">
                            <Zap size={14} className="flex-shrink-0 mt-1 text-[#1D906C]" />
                            <span style={{ color: COLORS.muted }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => scrollToInquiry(cat.title)}
                        className="px-6 py-3 rounded-lg text-[13.5px] font-bold text-white flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        <span>Inquire for {cat.title}</span>
                        <ArrowRight size={15} />
                      </button>
                      <button
                        onClick={() => scrollToInquiry(`Technical Specs for ${cat.title}`)}
                        className="px-6 py-3 rounded-lg text-[13.5px] font-bold border-2 bg-white flex items-center gap-2 transition-all duration-200 cursor-pointer"
                        style={{ borderColor: COLORS.accent, color: COLORS.accent }}
                      >
                        <FileText size={15} />
                        <span>Request Datasheet</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: AI-Generated High-Resolution Photography */}
                  <div className="lg:col-span-6">
                    <div
                      className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border shadow-lg group"
                      style={{ borderColor: COLORS.border }}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className="px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider text-white shadow-md backdrop-blur-md"
                          style={{ backgroundColor: "rgba(15, 51, 89, 0.85)" }}
                        >
                          {cat.badge}
                        </span>
                      </div>
                      {/* Gradient Overlay Caption */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-6 z-10"
                        style={{ background: "linear-gradient(to top, rgba(15,51,89,0.92) 0%, rgba(15,51,89,0.5) 60%, transparent 100%)" }}
                      >
                        <p className="text-white font-black text-[16px]">{cat.title}</p>
                        <p className="text-white/80 text-[13px] mt-0.5">{cat.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Complete Visual Grid: All 5 Categories ────────────────────────── */}
      <section className="py-16 px-6 border-t" style={{ backgroundColor: COLORS.lightBg, borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span
              className="text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-2 border bg-white shadow-sm"
              style={{ color: COLORS.primary, borderColor: COLORS.border }}
            >
              COMPLETE PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black" style={{ color: COLORS.primary }}>
              All 5 Product Portfolios
            </h2>
            <p className="mt-2 text-[14.5px]" style={{ color: COLORS.muted }}>
              Comprehensive scientific equipment, diagnostics, consumables, and precision measurement tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border bg-white overflow-hidden shadow-sm biomax-card-hover cursor-pointer flex flex-col justify-between group"
                  style={{ borderColor: COLORS.border }}
                >
                  <div>
                    {/* Category Image Header */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="400px"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-[10.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white backdrop-blur-md"
                          style={{ backgroundColor: "rgba(15, 51, 89, 0.85)" }}
                        >
                          {cat.eyebrow}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${cat.accentColor}18` }}
                        >
                          <Icon size={16} style={{ color: cat.accentColor }} />
                        </div>
                        <h3 className="text-lg font-black" style={{ color: COLORS.primary }}>
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: COLORS.muted }}>
                        {cat.tagline}
                      </p>

                      {/* Items List */}
                      <div className="space-y-1.5 mb-4">
                        {cat.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-[12.5px]">
                            <CheckCircle2 size={13} style={{ color: cat.accentColor }} className="flex-shrink-0" />
                            <span className="font-semibold" style={{ color: COLORS.primary }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 border-t mt-4" style={{ borderColor: COLORS.border }}>
                    <div className="pt-4 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setActiveTab(idx);
                          const el = document.getElementById("category-explorer");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[12.5px] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                        style={{ color: COLORS.accent }}
                      >
                        <span>View Details</span>
                        <ChevronRight size={14} />
                      </button>
                      <button
                        onClick={() => scrollToInquiry(cat.title)}
                        className="px-3.5 py-1.5 rounded-md text-[12px] font-bold text-white shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Industries & Applications Served ──────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-b" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span
              className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-2 border"
              style={{ backgroundColor: COLORS.lightGreen, color: COLORS.accent, borderColor: `${COLORS.accent}40` }}
            >
              APPLICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
              Industries &amp; Facilities We Support
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: COLORS.muted }}>
              Our products empower leading institutions across healthcare, research, and industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 rounded-xl border text-center flex flex-col items-center justify-center hover:shadow-md transition-all duration-200"
                style={{ backgroundColor: COLORS.lightBg, borderColor: COLORS.border }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-3 shadow-sm"
                  style={{ backgroundColor: COLORS.white, color: COLORS.primary }}
                >
                  <Icon size={20} />
                </div>
                <h4 className="text-[13px] font-black leading-snug mb-1" style={{ color: COLORS.primary }}>
                  {title}
                </h4>
                <p className="text-[11px] leading-tight" style={{ color: COLORS.muted }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Assurance & Compliance ────────────────────────────────── */}
      <section className="py-14 px-6 border-b" style={{ backgroundColor: COLORS.lightBg, borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "International Quality",
              desc: "Products compliant with CE, ISO 9001 and global manufacturing standards.",
            },
            {
              icon: Award,
              title: "Certified Calibration",
              desc: "Traceable IQ / OQ / PQ validation & calibration services available.",
            },
            {
              icon: Users,
              title: "Specialist Support",
              desc: "Experienced application specialists for setup, protocols & technical training.",
            },
            {
              icon: Activity,
              title: "Warranty & Maintenance",
              desc: "Comprehensive warranty protection and prompt on-site maintenance services.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-xl border bg-white flex items-start gap-3.5 shadow-sm"
              style={{ borderColor: COLORS.border }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${COLORS.accent}15`, color: COLORS.accent }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h4 className="text-[13.5px] font-black mb-1" style={{ color: COLORS.primary }}>
                  {title}
                </h4>
                <p className="text-[12px] leading-relaxed" style={{ color: COLORS.muted }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Direct Inquiry / Request Quotation Form ───────────────────────── */}
      <section id="inquire-section" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-2xl border overflow-hidden shadow-lg"
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
                    TECHNICAL CONSULTATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">
                    Request a Product Quotation
                  </h3>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-6">
                    Connect directly with our laboratory equipment specialists. We will help you select the ideal configuration, provide detailed pricing, and assist with laboratory deployment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Office Location</p>
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
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Phone &amp; WhatsApp</p>
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
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Email Us</p>
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
                    ONLINE INQUIRY &amp; QUOTATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                    Request Custom Equipment Proposal
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                    Looking for detailed model specifications, institutional bulk pricing, or tender procurement documents? Our dedicated sales engineers will prepare a comprehensive proposal for your facility.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Official manufacturer authorization & warranty coverage",
                      "Standard IQ/OQ installation & validation support",
                      "Turnkey delivery, calibration & on-site staff training",
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
                  <span>Submit Inquiry on Contact Page</span>
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
