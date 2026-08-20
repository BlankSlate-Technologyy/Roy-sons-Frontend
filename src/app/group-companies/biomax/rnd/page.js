"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { BiomaxNavbar, BiomaxFooter } from "../components/BiomaxShared";
import {
  Microscope,
  Dna,
  TrendingUp,
  Cpu,
  Target,
  FlaskConical,
  HeartPulse,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  Activity,
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
  footerBg:   "#0D2B3D",      // Deep Brand Navy Teal Footer
};

// ─── Navigation Links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/group-companies/biomax" },
  { label: "About Us", href: "/group-companies/biomax/about" },
  { label: "Products & Solutions", href: "/group-companies/biomax/solutions" },
  { label: "Research & Development", href: "/group-companies/biomax/rnd", active: true },
  { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
  { label: "Industries", href: "/group-companies/biomax/industries" },
  { label: "Contact Us", href: "/group-companies/biomax#contact-form" },
];

// ─── 4 R&D Focus Pillars (Exact User Specifications) ──────────────────────────
const RD_FOCUS_PILLARS = [
  {
    id: "lab-innovation",
    icon: Microscope,
    title: "LABORATORY INNOVATION",
    desc: "Exploring modern technologies that improve laboratory workflows and operational efficiency.",
  },
  {
    id: "biotech-research",
    icon: Dna,
    title: "BIOTECHNOLOGY RESEARCH",
    desc: "Supporting applications in molecular biology, diagnostics, microbiology, and related scientific fields.",
  },
  {
    id: "process-improvement",
    icon: TrendingUp,
    title: "PROCESS IMPROVEMENT",
    desc: "Identifying solutions that can improve accuracy, productivity, and laboratory performance.",
  },
  {
    id: "technology-integration",
    icon: Cpu,
    title: "TECHNOLOGY INTEGRATION",
    desc: "Helping laboratories adopt modern systems and technologies suited to their operational requirements.",
  },
];

// ─── R&D Workflow Steps ───────────────────────────────────────────────────────
const RD_WORKFLOW = [
  {
    step: "01",
    title: "Needs Assessment & Scoping",
    desc: "Collaborating with researchers and clinical laboratory directors to identify operational bottlenecks and technology gaps.",
  },
  {
    step: "02",
    title: "Technology Evaluation",
    desc: "Assessing cutting-edge diagnostic platforms, molecular instruments, and automated systems from leading global developers.",
  },
  {
    step: "03",
    title: "Performance & Protocol Validation",
    desc: "Rigorous testing under simulated laboratory workflows to confirm reproducibility, precision, and regulatory compliance.",
  },
  {
    step: "04",
    title: "Integration & Application Training",
    desc: "Comprehensive on-site deployment, calibration, and customized technical training for laboratory scientists and staff.",
  },
];

// ─── Key R&D Metrics ─────────────────────────────────────────────────────────
const RD_METRICS = [
  { icon: Sparkles, value: "25+", label: "R&D Programs Supported" },
  { icon: ShieldCheck, value: "99.8%", label: "Analytical Reliability" },
  { icon: GraduationCap, value: "50+", label: "Academic & Clinical Partners" },
  { icon: Users, value: "100%", label: "Specialist Support Commitment" },
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

export default function BiomaxRndPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    researchArea: "Molecular Biology",
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
          subject: `R&D Collaboration: ${formData.researchArea}`,
          message: `Research Area: ${formData.researchArea} | Organization: ${formData.organization || "N/A"} | Details: ${formData.message}`,
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
        researchArea: "Molecular Biology",
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

      {/* ─── Hero Section (Exact Reproduction of User Reference) ───────────── */}
      <section className="relative py-16 lg:py-24 px-6 overflow-hidden bg-white border-b" style={{ borderColor: COLORS.border }}>
        {/* Subtle Molecular DNA Backdrop Accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <div className="w-full h-full bg-[radial-gradient(#165B7E_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content (Exact User Image Content) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span
                  className="text-[12px] font-black uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 border bg-white shadow-sm"
                  style={{ color: COLORS.accent, borderColor: COLORS.border }}
                >
                  <Sparkles size={14} />
                  <span>SCIENTIFIC EXCELLENCE</span>
                </span>

                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.15]"
                  style={{ color: COLORS.primary }}
                >
                  RESEARCH &amp; <br />
                  <span style={{ color: "#165B7E" }}>DEVELOPMENT</span>
                </h1>

                <h2
                  className="text-lg sm:text-xl font-bold mt-4 mb-5"
                  style={{ color: COLORS.primary }}
                >
                  Advancing Laboratory Science Through Innovation
                </h2>
              </div>

              {/* Exact Paragraph 1 & Paragraph 2 */}
              <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: COLORS.muted }}>
                <p>
                  At Bio Max Corporation, we recognize that scientific progress depends on reliable technology and continuous innovation.
                </p>
                <p>
                  Our Research &amp; Development approach focuses on identifying emerging laboratory technologies and developing practical solutions for modern scientific and diagnostic environments.
                </p>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("rd-focus-section")}
                  className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold text-white flex items-center gap-2 shadow-md hover:bg-[#1D906C] transition-all cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Explore Our R&amp;D Focus</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => scrollToSection("rd-collaborate")}
                  className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold border-2 bg-white flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                  style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                >
                  <span>Collaborate With Us</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right: AI-Generated Scientist Laboratory Showcase */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border-2 shadow-2xl group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/biomax_rnd_hero_ai.jpg"
                  alt="BioMax Research & Development Laboratory"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,51,89,0.75) 0%, rgba(15,51,89,0.1) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider mb-1 inline-block">
                    BioMax Innovation Lab
                  </span>
                  <p className="text-sm font-semibold text-white/90">
                    Cutting-edge molecular diagnostics &amp; high-precision analytical research workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4-Pillars Card: OUR R&D FOCUS (Exact Layout from Image) ───────── */}
      <section id="rd-focus-section" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          {/* Main White Card Container */}
          <div
            className="rounded-3xl border-2 p-8 sm:p-12 shadow-xl bg-white relative overflow-hidden"
            style={{ borderColor: COLORS.border }}
          >
            {/* Header: • OUR R&D FOCUS • */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.primary }} />
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-[0.14em]"
                  style={{ color: COLORS.primary }}
                >
                  OUR R&amp;D FOCUS
                </h3>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.primary }} />
              </div>
              <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: COLORS.accent }} />
            </div>

            {/* 4 Pillars Grid with Vertical Dividers */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {RD_FOCUS_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 group ${
                      idx < 3 ? "lg:border-r" : ""
                    }`}
                    style={{ borderColor: COLORS.border }}
                  >
                    {/* Blue Circular Icon Container */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <Icon size={34} className="text-white" style={{ strokeWidth: 1.8 }} />
                    </div>

                    {/* Title */}
                    <h4
                      className="text-[14px] sm:text-[15px] font-black uppercase tracking-wide mb-3 min-h-[40px] flex items-center justify-center"
                      style={{ color: COLORS.primary }}
                    >
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-[13px] sm:text-[13.5px] leading-relaxed max-w-xs"
                      style={{ color: COLORS.muted }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom Banner: OUR OBJECTIVE (Exact Layout from Image) ────────── */}
      <section className="px-6 pb-16 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-10 shadow-sm border bg-white relative overflow-hidden"
            style={{
              borderColor: COLORS.border,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Circular Target Icon */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <Target size={44} style={{ color: COLORS.primary, strokeWidth: 2 }} />
                </div>
              </div>

              {/* Right: Objective Header & Text */}
              <div className="lg:col-span-10 space-y-2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                  <div className="hidden lg:block w-1.5 h-10 rounded-full" style={{ backgroundColor: COLORS.accent }} />
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider" style={{ color: COLORS.primary }}>
                    OUR OBJECTIVE
                  </h3>
                </div>

                <p className="text-[16px] sm:text-[18px] leading-relaxed font-medium max-w-4xl" style={{ color: COLORS.muted }}>
                  To bridge the gap between scientific innovation and practical laboratory applications, helping institutions adopt solutions that meet their evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── R&D Metrics & Key Milestones ───────────────────────────────────── */}
      <section className="py-12 px-6 border-t border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-5">
          {RD_METRICS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="p-6 rounded-2xl border bg-white shadow-sm flex flex-col items-center text-center biomax-counter-box cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${COLORS.primary}12` }}
              >
                <Icon size={24} style={{ color: COLORS.accent }} />
              </div>
              <div className="text-2xl lg:text-3xl font-black" style={{ color: COLORS.primary }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12.5px] font-bold mt-1" style={{ color: COLORS.primary }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── R&D Development Methodology Workflow ───────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span
              className="text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-2 border bg-[#EAF6F3]"
              style={{ color: COLORS.accent, borderColor: `${COLORS.accent}40` }}
            >
              INNOVATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black" style={{ color: COLORS.primary }}>
              How We Drive Laboratory Innovation
            </h2>
            <p className="mt-2 text-[14.5px]" style={{ color: COLORS.muted }}>
              A structured, science-driven methodology from initial technology discovery to full laboratory integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RD_WORKFLOW.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl border bg-white shadow-sm biomax-card-hover cursor-pointer flex flex-col justify-between"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div
                    className="text-2xl font-black mb-3 px-3 py-1 rounded-lg inline-block text-white"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-[16px] font-black mb-2" style={{ color: COLORS.primary }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── R&D Collaboration & Inquiry Form ──────────────────────────────── */}
      <section id="rd-collaborate" className="py-16 px-6 bg-white border-t" style={{ borderColor: COLORS.border }}>
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
                    R&amp;D PARTNERSHIPS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">
                    Collaborate with BioMax R&amp;D
                  </h3>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-6">
                    We actively collaborate with university researchers, clinical trial laboratories, and diagnostic centers to develop and validate next-generation laboratory solutions.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 flex-shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-bold uppercase text-white/70">R&amp;D Facility Location</p>
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
                        <p className="text-[10.5px] font-bold uppercase text-white/70">Telephone &amp; Support</p>
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
                        <p className="text-[10.5px] font-bold uppercase text-white/70">R&amp;D Direct Email</p>
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
                    JOIN HANDS IN RESEARCH
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                    Initiate an R&amp;D Consultation
                  </h3>
                  <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                    Are you planning a scientific research project, pilot validation, or seeking technological collaboration for academic institutions? Connect directly with our research specialists.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Custom technological integration & equipment trial access",
                      "Joint methodology design & biotechnology workflow consulting",
                      "Academic grant collaboration & laboratory modernization",
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
                  <span>Submit Research Proposal on Contact Page</span>
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
