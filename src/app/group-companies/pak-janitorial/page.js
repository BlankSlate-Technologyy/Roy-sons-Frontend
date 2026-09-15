"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FlaskConical,
  Gauge,
  Hammer,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users2,
  Wind,
  ArrowRight,
  BriefcaseMedical,
  Layers,
  Sliders,
  Check,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  CardImageSlider,
} from "./components/PakMedicalShared";

// ─── Hero Slider Data (5 Editorial Slides) ──────────────────────────
const HERO_SLIDES = [
  {
    image: "/images/pakmedical/hero_hospital_engineering.jpg",
    eyebrow: "Turnkey Hospital Engineering & Critical Infrastructure",
    title: "ENGINEERING THE FUTURE OF HEALTHCARE",
    desc: "Advanced hospital engineering, clean-room environments and critical healthcare infrastructure designed for safety, efficiency and uncompromising performance.",
    tag: "Hospital Engineering",
  },
  {
    image: "/images/pakmedical/hero_cleanroom.jpg",
    eyebrow: "ISO 14644 & cGMP Cleanroom Environments",
    title: "SMARTER HOSPITALS. ENGINEERED FOR EXCELLENCE.",
    desc: "Precision laminar airflow ceilings, negative and positive pressure airlocks, and ultra-sterile biocontainment suites for surgical centers and pharmaceutical production.",
    tag: "ISO Clean Rooms",
  },
  {
    image: "/images/pakmedical/hero_medgas.jpg",
    eyebrow: "HTM 02-01 & NFPA 99 Certified MGPS Networks",
    title: "FAIL-SAFE MEDICAL GAS INFRASTRUCTURE",
    desc: "Life-supporting medical gas distribution systems, duplex cryogenic oxygen manifolds, digital alarm telemetry, and zero-leak copper pipeline networks.",
    tag: "Medical Gas Systems",
  },
  {
    image: "/images/pakmedical/hero_operating_theatre.jpg",
    eyebrow: "Turnkey Modular Operating Theatres",
    title: "MODULAR SURGICAL SUITES OF TOMORROW",
    desc: "Pre-engineered hermetic surgical suites equipped with articulated surgical pendants, touchless glass door systems, and integrated surgeon control panels.",
    tag: "Modular OTs",
  },
  {
    image: "/images/pakmedical/hero_hospital_exterior.jpg",
    eyebrow: "National Healthcare Facility Development",
    title: "COMPREHENSIVE HEALTHCARE FACILITY EPC",
    desc: "Architectural planning, biomedical mechanical engineering, and turnkey execution for multi-specialty hospitals and tertiary medical centers across Pakistan.",
    tag: "Facility EPC",
  },
];

// ─── Live Statistics ────────────────────────────────────────────────
const STATS = [
  { icon: Award, value: "20+", label: "Years of Medical\nEngineering Heritage" },
  { icon: HeartPulse, value: "300+", label: "Completed Healthcare\n& Cleanroom Projects" },
  { icon: Building2, value: "150+", label: "Hospital Facilities\nDelivered Nationwide" },
  { icon: Users2, value: "500+", label: "Biomedical & HVAC\nEngineers on Staff" },
  { icon: ShieldCheck, value: "99.9%", label: "ISO 14644 & HTM 02-01\nCompliance Rate" },
];

// ─── Practice Cards with Image Headers ──────────────────────────────
const SERVICES = [
  {
    id: "hospital-engineering",
    title: "Hospital Engineering & Modular OTs",
    category: "Modular Surgical Suites",
    desc: "Turnkey pre-fabricated modular operation theatres with antimicrobial cladding, laminar airflow ceilings, and integrated surgeon consoles.",
    image: "/images/pakmedical/service_hospital_engineering.jpg",
    href: "/group-companies/pak-janitorial/services#hospital-engineering",
    highlights: ["Hermetic sliding doors", "Laminar airflow plenums", "Dual articulated pendants"],
  },
  {
    id: "clean-room-solutions",
    title: "Clean Room Solutions",
    category: "ISO 14644 & cGMP",
    desc: "Design and construction of ISO Class 4 to Class 8 clean rooms for pharmaceutical manufacturing, vaccine suites, and clinical research.",
    image: "/images/pakmedical/service_cleanrooms.jpg",
    href: "/group-companies/pak-janitorial/services#clean-room-systems",
    highlights: ["Flush antistatic coving", "Dynamic interlocking pass boxes", "H14 HEPA filtration"],
  },
  {
    id: "medical-gas-systems",
    title: "Medical Gas Systems (MGPS)",
    category: "HTM 02-01 Pipeline",
    desc: "Centralized cryogenic oxygen tanks, medical air compressors, vacuum plants, and digital zone monitoring alarm panels.",
    image: "/images/pakmedical/service_medgas.jpg",
    href: "/group-companies/pak-janitorial/services#medical-gas-pipeline",
    highlights: ["Degreased medical copper", "Master telemetry alarm panels", "Zero-leak terminal units"],
  },
  {
    id: "hvac-ventilation",
    title: "HVAC & Cleanroom Air Handling",
    category: "Hygienic Climate Control",
    desc: "Hospital-grade air handling units with multi-stage filtration, variable air volume (VAV), and strict positive/negative pressure cascades.",
    image: "/images/pakmedical/service_hvac.jpg",
    href: "/group-companies/pak-janitorial/services#hvac-engineering",
    highlights: ["Run-around heat recovery", "EC plug fan technology", "Differential pressure sensors"],
  },
  {
    id: "hospital-infrastructure",
    title: "Hospital Infrastructure & MEP",
    category: "Turnkey Medical EPC",
    desc: "End-to-end electrical, plumbing, architectural layout, and infection control partitioning for tertiary hospitals and trauma centers.",
    image: "/images/pakmedical/service_infrastructure.jpg",
    href: "/group-companies/pak-janitorial/services#turnkey-projects",
    highlights: ["Isolated power systems (IPS)", "Lead-lined radiation shielding", "Antimicrobial vinyl flooring"],
  },
  {
    id: "healthcare-equipment",
    title: "Healthcare Equipment & ICU Pendants",
    category: "Biomedical Systems",
    desc: "Ceiling-mounted surgical and anesthesia pendants, LED operating theatre lamps, and ICU patient bedhead units.",
    image: "/images/pakmedical/service_equipment.jpg",
    href: "/group-companies/pak-janitorial/services#equipment-installation",
    highlights: ["High-lux surgical LED lights", "Multi-gas articulated pendants", "Bedhead trunking systems"],
  },
];

// ─── Featured Solutions with Mini Card Sliders ──────────────────────
const FEATURED_SOLUTIONS = [
  {
    name: "PakMed UltraMOT Surgical Theatre Suite",
    category: "Modular Operation Theatre",
    desc: "A fully integrated surgical environment pre-engineered with antimicrobial wall cladding, laminar airflow ceiling, and touchless surgeon control console.",
    images: [
      "/images/pakmedical/solution_ot.jpg",
      "/images/pakmedical/service_hospital_engineering.jpg",
      "/images/pakmedical/hero_operating_theatre.jpg",
    ],
    specs: ["Antimicrobial HPL / SS304 Walls", "0.45 m/s Laminar Air Velocity", "Touchless Hermetic Sliding Doors"],
    href: "/group-companies/pak-janitorial/solutions",
  },
  {
    name: "PakMed CleanPro ISO Clean Room Envelope",
    category: "ISO 14644 Clean Rooms",
    desc: "Turnkey pharmaceutical and biotechnology cleanroom suite engineered with flush double-glazed view panels, dynamic pass boxes, and cascading pressure airlocks.",
    images: [
      "/images/pakmedical/solution_cleanroom.jpg",
      "/images/pakmedical/hero_cleanroom.jpg",
      "/images/pakmedical/service_cleanrooms.jpg",
    ],
    specs: ["ISO Class 4–8 / GMP Grade A–D", "50mm High-Density PUF Panels", "Dynamic Interlocking Airlocks"],
    href: "/group-companies/pak-janitorial/solutions",
  },
  {
    name: "PakMed MediGas Central MGPS Network",
    category: "Medical Gas Pipeline Systems",
    desc: "Complete HTM 02-01 medical gas generation and pipeline network supplying hospital beds, ICUs, and surgical suites with uninterrupted clinical gases.",
    images: [
      "/images/pakmedical/solution_medgas.jpg",
      "/images/pakmedical/hero_medgas.jpg",
      "/images/pakmedical/service_medgas.jpg",
    ],
    specs: ["HTM 02-01 & NFPA 99 Compliant", "Duplex Oil-Free Air Compressors", "Digital Telemetry Zone Alarms"],
    href: "/group-companies/pak-janitorial/solutions",
  },
];

// ─── 6-Stage Engineering Lifecycle ──────────────────────────────────
const LIFECYCLE_STAGES = [
  {
    step: "01",
    title: "Clinical Feasibility & Layout",
    desc: "Architectural zoning, cleanroom air cascade planning, and workflow isolation audits to prevent hospital cross-contamination.",
  },
  {
    step: "02",
    title: "Detailed Biomedical MEP",
    desc: "Engineering calculations for medical gas sizing, laminar airflow CFM, heat loads, and isolated electrical grounding.",
  },
  {
    step: "03",
    title: "Modular Enclosure Fabrication",
    desc: "Precision manufacturing of antimicrobial wall panels, hermetic doors, ceiling plenums, and antistatic flooring.",
  },
  {
    step: "04",
    title: "MEP & Pipeline Installation",
    desc: "On-site installation of degreased copper gas lines, AHU ducting networks, surgical pendants, and electrical panels.",
  },
  {
    step: "05",
    title: "Testing, DOP & Validation",
    desc: "Rigorous ISO 14644 airborne particle counting, DOP HEPA challenge tests, and HTM 02-01 gas pressure retention certification.",
  },
  {
    step: "06",
    title: "Handover & 24/7 AMC Support",
    desc: "Staff operation training, comprehensive documentation dossiers, and 24/7 emergency response service contracts.",
  },
];

// ─── FAQ Accordion Data ─────────────────────────────────────────────
const FAQS = [
  {
    q: "What standards do Pakistan Medical Supplies clean rooms comply with?",
    a: "Our clean rooms strictly adhere to ISO 14644-1 (Classes 4 through 8), EU cGMP (Grades A, B, C, D), PIC/S guidelines, and WHO Good Manufacturing Practice standards. Every installation undergoes rigorous particle counting, air velocity testing, and DOP/PAO HEPA integrity audits.",
  },
  {
    q: "Does Pakistan Medical Supplies deliver full Turnkey Modular Operation Theatres (MOT)?",
    a: "Yes. We deliver complete turnkey Modular Operation Theatres, encompassing pre-fabricated antimicrobial wall paneling (HPL or Stainless Steel 304), laminar airflow ceiling plenums, hermetically sealed automatic doors, surgical control panels, surgical pendants, medical gas terminal outlets, and conductive antistatic vinyl flooring.",
  },
  {
    q: "How do you ensure medical gas pipeline safety and leak-prevention?",
    a: "All medical gas installations follow HTM 02-01 and NFPA 99 engineering codes. We utilize medical-grade degreased copper piping, silver-brazed joints with nitrogen purge, and multi-stage pressure retention leak testing before commissioning. Master digital alarm panels continuously monitor pressure in clinical zones.",
  },
  {
    q: "Do you provide scheduled maintenance and re-validation contracts?",
    a: "Yes. We provide scheduled preventive maintenance (PPM), HEPA filter replacement, periodic air velocity balancing, DOP challenge audits, and 24/7 on-call emergency engineering support for critical care hospitals across Pakistan.",
  },
];

export default function PakMedicalHomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Auto-advance Hero Slider every 5.5s
  useEffect(() => {
    if (isSliderHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isSliderHovered]);

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. FULL-WIDTH HERO IMAGE SLIDER (5 Slides)
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] bg-slate-950 overflow-hidden select-none"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        {/* Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-[#0A2540]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

            {/* Slide Content */}
            <div className="relative z-20 h-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-3xl">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300 mb-5">
                  <HeartPulse size={14} className="text-[#0EA5E9]" />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-xs">
                  {slide.desc}
                </p>

                {/* Minimal Hero CTA buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/group-companies/pak-janitorial/solutions"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A4FA0] hover:bg-[#0E3570] transition-all duration-200 shadow-lg shadow-blue-900/30 cursor-pointer"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/group-companies/pak-janitorial/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all duration-200 cursor-pointer"
                  >
                    <span>Consult Bio-Engineer</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls: Arrows */}
        <div className="absolute inset-y-0 left-4 sm:left-6 flex items-center z-30">
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all duration-200 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 sm:right-6 flex items-center z-30">
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-all duration-200 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Bottom Bar: Dots & Slide Counter */}
        <div className="absolute bottom-6 inset-x-0 z-30 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.title}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide ? "w-8 bg-cyan-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="text-xs font-mono font-bold tracking-widest text-slate-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            0{activeSlide + 1} / 0{HERO_SLIDES.length}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LIVE KPI COUNTER SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakmed-counter-box rounded-2xl border border-slate-200 p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#1A4FA0]/10">
                    <Icon size={22} className="text-[#1A4FA0]" />
                  </div>
                  <div className="mb-1 text-[#0A2540]">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SERVICES SECTION (Image-Based Cards)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Specialized Medical Practices</SectionLabel>
            <SectionHeading>ENGINEERED FOR CRITICAL HEALTHCARE</SectionHeading>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mt-4">
              From hospital infrastructure to sterile environments and medical gas systems, we deliver integrated engineering solutions built around safety, reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="pakmed-card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Card Image Header with Zoom on Hover */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[#0A2540] border border-slate-200 shadow-xs">
                    {srv.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0A2540] mb-3 group-hover:text-[#1A4FA0] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Check size={14} className="text-[#0D7C85] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={srv.href}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1A4FA0] hover:text-[#0E3570] group-hover:translate-x-1 transition-all"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FEATURED SOLUTIONS (Mini Card Image Slider)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Flagship Turnkey Packages</SectionLabel>
              <SectionHeading>COMPLETE HEALTHCARE ENGINEERING SOLUTIONS</SectionHeading>
              <p className="text-base text-slate-600 font-medium leading-relaxed mt-4">
                Engineered for uncompromising clinical uptime, zero microbial infiltration, and full international certification compliance.
              </p>
            </div>
            <Link
              href="/group-companies/pak-janitorial/solutions"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1A4FA0] hover:text-[#0E3570] transition-colors self-start md:self-auto"
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_SOLUTIONS.map((item) => (
              <div
                key={item.name}
                className="pakmed-card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all"
              >
                {/* Mini Image Slider in Card Header */}
                <CardImageSlider
                  images={item.images}
                  alt={item.name}
                  height="h-56"
                />

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0D7C85] mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-black uppercase tracking-tight text-[#0A2540] mb-3 group-hover:text-[#1A4FA0] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4 space-y-2 mb-6">
                      {item.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1A4FA0]" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1A4FA0] hover:text-[#0E3570] group-hover:translate-x-1 transition-all"
                  >
                    <span>Solution Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. 6-STAGE HEALTHCARE ENGINEERING LIFECYCLE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Integrated Turnkey EPC</SectionLabel>
            <SectionHeading center>END-TO-END HEALTHCARE ENGINEERING LIFECYCLE</SectionHeading>
            <p className="text-base text-slate-600 font-medium leading-relaxed mt-4">
              From concept feasibility and clinical MEP sizing to cleanroom fabrication, ISO qualification, and 24/7 ongoing AMC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIFECYCLE_STAGES.map((stg) => (
              <div
                key={stg.step}
                className="rounded-2xl border border-slate-200 p-7 bg-[#F8FAFC] hover:bg-white hover:border-[#2B8DD6] transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#0D7C85] group-hover:text-[#1A4FA0] transition-colors">
                    {stg.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#0EA5E9] transition-colors" />
                </div>
                <h4 className="text-base font-black uppercase tracking-tight text-[#0A2540] mb-2">
                  {stg.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INTERACTIVE FAQ ACCORDION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-lg">
          <div className="text-center mb-12">
            <SectionLabel center>Standards &amp; Assurance</SectionLabel>
            <SectionHeading center>FREQUENTLY ASKED QUESTIONS</SectionHeading>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A2540] hover:text-[#1A4FA0] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 text-[#0D7C85] ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CONVERSION CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0E3570] to-[#0A2540] opacity-90" />
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 mb-5">
            <HeartPulse size={14} className="text-[#0EA5E9]" />
            <span>Consultation &amp; Hospital Facility Scoping</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-5 drop-shadow-md">
            LET&apos;S BUILD BETTER HEALTHCARE ENVIRONMENTS
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Partner with Pakistan&apos;s foremost hospital engineering, modular clean room, and medical gas specialists. Connect with our principal biomedical engineers today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/pak-janitorial/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-[#0A2540] bg-white hover:bg-slate-100 transition-all shadow-lg cursor-pointer"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:00924238924737"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all cursor-pointer"
            >
              <Phone size={16} />
              <span>0092-42-38924737</span>
            </a>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
