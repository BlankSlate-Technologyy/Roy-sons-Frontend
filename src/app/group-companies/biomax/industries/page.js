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
    title: "HEALTHCARE & DIAGNOSTICS",
    image: "/biomax_ind_healthcare_ai.jpg",
    imageAlt: "Clinical medical diagnostics and pathology laboratory solutions",
    desc: "Supporting hospitals, diagnostic laboratories, medical institutions, and clinical testing environments with laboratory and diagnostic solutions.",
  },
  {
    id: "research-institutions",
    icon: Microscope,
    title: "RESEARCH INSTITUTIONS",
    image: "/biomax_ind_research_ai.jpg",
    imageAlt: "Scientific research laboratories and advanced microscopy",
    desc: "Providing scientific equipment and laboratory technologies for research organizations and scientific laboratories.",
  },
  {
    id: "universities-education",
    icon: GraduationCap,
    title: "UNIVERSITIES & EDUCATIONAL INSTITUTIONS",
    image: "/biomax_ind_university_ai.jpg",
    imageAlt: "University students in scientific life sciences laboratory",
    desc: "Supporting universities, colleges, and educational laboratories with equipment and laboratory supplies for teaching and research.",
  },
  {
    id: "pharmaceutical-industry",
    icon: Pill,
    title: "PHARMACEUTICAL INDUSTRY",
    image: "/biomax_scientific_instruments_ai.jpg",
    imageAlt: "Pharmaceutical laboratory quality control and HPLC testing",
    desc: "Laboratory solutions supporting pharmaceutical research, testing, quality control, and development environments.",
  },
  {
    id: "biotechnology",
    icon: Dna,
    title: "BIOTECHNOLOGY",
    image: "/biomax_biotech_solutions_ai.jpg",
    imageAlt: "Biotechnology molecular biology and cell culture workstations",
    desc: "Providing equipment and technologies for biotechnology research, molecular biology, and related applications.",
  },
  {
    id: "food-agriculture",
    icon: FlaskConical,
    title: "FOOD & AGRICULTURE",
    image: "/biomax_consumables_ai.jpg",
    imageAlt: "Food safety testing and agricultural research consumables",
    desc: "Laboratory solutions supporting food testing, agricultural research, quality analysis, and related scientific applications.",
  },
  {
    id: "industrial-laboratories",
    icon: Building2,
    title: "INDUSTRIAL LABORATORIES",
    image: "/biomax_lab_equipment_ai.jpg",
    imageAlt: "Industrial testing laboratories and quality control equipment",
    desc: "Supporting industrial laboratories with testing, analysis, measurement, and quality-control solutions.",
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    industry: "Healthcare & Diagnostics",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/group-companies/biomax/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.organization,
          email: formData.email,
          phone: formData.phone,
          subject: `Industry Solutions Inquiry: ${formData.industry}`,
          message: `Industry Sector: ${formData.industry} | Organization: ${formData.organization || "N/A"} | Inquiry: ${formData.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request.");
      }
      setFormStatus("sent");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        industry: "Healthcare & Diagnostics",
        message: "",
      });
    } catch (err) {
      alert(err.message || "Failed to submit inquiry.");
      setFormStatus(null);
    }
  };

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

      {/* ─── Hero Header (Exact Layout from User Image) ────────────────────── */}
      <section className="relative pt-12 pb-8 px-6 bg-white border-b overflow-hidden" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Title & Intro (Exact Text from Image) */}
            <div className="lg:col-span-6 space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1]"
                style={{ color: COLORS.primary }}
              >
                INDUSTRIES <br />
                <span style={{ color: "#165B7E" }}>WE SERVE</span>
              </h1>

              {/* Blue accent line with dot */}
              <div className="flex items-center gap-2 my-2">
                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS.primary }} />
              </div>

              {/* Exact Description Text from Image */}
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed font-medium" style={{ color: COLORS.muted }}>
                Bio Max Corporation provides laboratory and biotechnology solutions across multiple scientific, healthcare, educational, and industrial sectors.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("industry-cards-section")}
                  className="px-6 py-3 rounded-lg text-[13px] font-bold text-white flex items-center gap-2 shadow-md hover:bg-[#1D906C] transition-all cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Explore 7 Sectors</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => scrollToSection("industry-inquiry-section")}
                  className="px-6 py-3 rounded-lg text-[13px] font-bold border-2 bg-white flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                  style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: High-Tech Microscope & Glassware AI Showcase */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden border-2 shadow-xl group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/biomax_ind_hero_ai.jpg"
                  alt="Modern Scientific Laboratory Equipment & Glassware"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,51,89,0.7) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider mb-1 inline-block">
                    Multi-Industry Laboratory Capabilities
                  </span>
                  <p className="text-[12.5px] font-semibold text-white/90">
                    Trusted scientific instrumentation &amp; consumables across all research sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The 7 Industry Column Cards (Exact Reproduction of Image) ─────── */}
      <section id="industry-cards-section" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          {/* 7 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-stretch">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="rounded-2xl border-2 bg-white overflow-hidden shadow-md biomax-card-hover cursor-pointer flex flex-col justify-between group"
                  style={{ borderColor: COLORS.border }}
                >
                  <div>
                    {/* Top Header with Dark Blue Circular Icon */}
                    <div className="p-4 text-center flex flex-col items-center bg-white border-b" style={{ borderColor: COLORS.border }}>
                      <div
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        <Icon size={24} className="text-white" style={{ strokeWidth: 2 }} />
                      </div>
                      <h3
                        className="text-[11.5px] font-black uppercase tracking-wider leading-snug min-h-[34px] flex items-center justify-center text-center"
                        style={{ color: COLORS.primary }}
                      >
                        {ind.title}
                      </h3>
                    </div>

                    {/* Image Middle Section */}
                    <div className="relative w-full h-36 overflow-hidden">
                      <Image
                        src={ind.image}
                        alt={ind.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="250px"
                      />
                    </div>

                    {/* Description Paragraph (Exact from Image) */}
                    <div className="p-4 text-center">
                      <p className="text-[12px] leading-relaxed" style={{ color: COLORS.muted }}>
                        {ind.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="p-3 pt-0 text-center">
                    <div className="w-8 h-0.5 mx-auto rounded-full group-hover:w-16 transition-all duration-300" style={{ backgroundColor: COLORS.accent }} />
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
      <section id="industry-inquiry-section" className="py-16 px-6 bg-white border-t" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl border overflow-hidden shadow-sm bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div className="grid lg:grid-cols-12">
              {/* Left Info Panel */}
              <div
                className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r bg-white flex flex-col justify-between"
                style={{ borderColor: COLORS.border, backgroundColor: "#ffffff" }}
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest block mb-2" style={{ color: COLORS.accent }}>
                    SECTOR SOLUTIONS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                    Connect With Our Industry Specialists
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                    Whatever your industry, our dedicated application engineers provide tailored equipment recommendations, technical setup, and procurement guidance.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Main Office</p>
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
                    INDUSTRY INQUIRY &amp; PROPOSALS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                    Request Industry-Specific Consultation
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                    Whether you require clinical diagnostics systems for hospitals, analytical instruments for universities, or quality-control machinery for pharmaceutical plants, our specialists are ready to tailor solutions.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Custom equipment packages configured for your sector needs",
                      "Turnkey laboratory setup, delivery, calibration & support",
                      "Institutional procurement pricing & long-term maintenance contracts",
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
