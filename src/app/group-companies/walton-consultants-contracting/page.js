"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  HardHat,
  Layers,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users2,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  CardImageSlider,
} from "./components/WaltonShared";
import { WALTON_SERVICES } from "./services-data";
import { WALTON_SOLUTIONS } from "./solutions-data";
import { WALTON_PROJECTS } from "./projects-data";

// 5 Unique Cinematic Hero Slides
const HERO_SLIDES = [
  {
    image: "/images/walton/hero_infrastructure.jpg",
    eyebrow: "Engineering & Infrastructure Excellence",
    headline: "ENGINEERING WHAT'S NEXT",
    subheadline: "BUILT ON ENGINEERING. DRIVEN BY IMPACT.",
    description:
      "We deliver intelligent engineering, infrastructure and development solutions that transform ambitious ideas into high-performance, sustainable projects.",
    primaryCta: { label: "Explore Projects", href: "/group-companies/walton-consultants-contracting/projects" },
    secondaryCta: { label: "Our Divisions", href: "/group-companies/walton-consultants-contracting/services" },
  },
  {
    image: "/images/walton/hero_engineering_team.jpg",
    eyebrow: "PEC Category C-A (No Limit) Constructor",
    headline: "EXPERTISE AT EVERY SCALE",
    subheadline: "PRECISION EXECUTION. UNCOMPROMISING SAFETY.",
    description:
      "Our multidisciplinary civil structural engineers, project directors, and technical consultants supervise complex builds with single-point accountability.",
    primaryCta: { label: "Technical Capabilities", href: "/group-companies/walton-consultants-contracting/services" },
    secondaryCta: { label: "About Our Enterprise", href: "/group-companies/walton-consultants-contracting/about" },
  },
  {
    image: "/images/walton/hero_modern_architecture.jpg",
    eyebrow: "Commercial & Mixed-Use Superstructures",
    headline: "SHAPING MODERN CITIES",
    subheadline: "ARCHITECTURAL VISION. STRUCTURAL INTEGRITY.",
    description:
      "From high-rise commercial headquarters to integrated civic districts, we engineer iconic landmarks with post-tensioned floor systems and seismic resilience.",
    primaryCta: { label: "Commercial Solutions", href: "/group-companies/walton-consultants-contracting/solutions" },
    secondaryCta: { label: "View Portfolio", href: "/group-companies/walton-consultants-contracting/projects" },
  },
  {
    image: "/images/walton/hero_transportation.jpg",
    eyebrow: "Highways, Bridges & Corridors",
    headline: "CONNECTING REGIONS & COMMERCE",
    subheadline: "HEAVY CIVIL ROADWORKS & EXPRESSWAY NETWORKS.",
    description:
      "Building high-capacity highway interchanges, prestressed concrete river bridges, and multi-modal transit corridors that power regional economic productivity.",
    primaryCta: { label: "Transportation Works", href: "/group-companies/walton-consultants-contracting/services" },
    secondaryCta: { label: "Contact Engineering Desk", href: "/group-companies/walton-consultants-contracting/contact" },
  },
  {
    image: "/images/walton/hero_sustainable_infra.jpg",
    eyebrow: "Sustainable Urban Development",
    headline: "INFRASTRUCTURE FOR THE FUTURE",
    subheadline: "SUSTAINABLE ENGINEERING. RESILIENT COMMUNITIES.",
    description:
      "Combining solar renewable generation, water-sensitive drainage systems, green building envelopes, and smart urban infrastructure for generations to come.",
    primaryCta: { label: "Sustainability Focus", href: "/group-companies/walton-consultants-contracting/sustainability" },
    secondaryCta: { label: "Request Proposal", href: "/group-companies/walton-consultants-contracting/contact" },
  },
];

const STATS = [
  { icon: Award, value: "25+", label: "Years of Engineering\nExcellence" },
  { icon: Building2, value: "350+", label: "Completed Civil &\nInfrastructure Projects" },
  { icon: Users2, value: "1200+", label: "Engineers & Technical\nSpecialists on Staff" },
  { icon: HardHat, value: "50+", label: "Industrial & Government\nCorporate Clients" },
  { icon: ShieldCheck, value: "99%", label: "On-Time Milestone\nDelivery Success" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Geotechnical & Soil Profiling", desc: "Core drilling, plate load bearing tests, and seismic hazard micro-zonation analysis." },
  { num: "02", title: "Architectural & 3D BIM Modeling", desc: "Developing structural models in ETABS and Revit with multi-discipline clash resolution." },
  { num: "03", title: "Procurement & Quality Sourcing", desc: "Certified ASTM Grade-60 steel rebar, high-grade Portland cement, and precast elements." },
  { num: "04", title: "Heavy Civil & Superstructure Build", desc: "Rotary bored piling, mass concrete foundation pours, and hydraulic self-climbing forms." },
  { num: "05", title: "Non-Destructive Testing (NDT)", desc: "Compressive concrete cylinder tests, ultrasonic steel weld inspection, and MEP commissioning." },
  { num: "06", title: "Handover & Lifecycle Support", desc: "As-built drawings, statutory completion certifications, and structural warranty operations." },
];

const FAQS = [
  {
    q: "What Pakistan Engineering Council (PEC) licensing does Walton hold?",
    a: "Walton Consultants & Contracting holds Category C-A (No Limit) constructor licensing from the Pakistan Engineering Council, authorizing the execution of civil and infrastructure works of unlimited financial value.",
  },
  {
    q: "Does Walton execute turnkey EPC industrial projects?",
    a: "Yes. We take single-point responsibility for industrial facilities, including front-end engineering design, heavy equipment dynamic foundations, pre-engineered steel erection, 132kV substations, and integrated commissioning.",
  },
  {
    q: "Can Walton engineer high-rise towers in high seismic zones?",
    a: "Yes. Our structural design teams implement ductile dual shear wall core systems, post-tensioned beam-less slabs, and deep bored cast-in-place piling in full compliance with ACI 318 and Building Code of Pakistan (BCP) Seismic Zones 2B, 3, and 4.",
  },
  {
    q: "How does Walton ensure quality control during large concrete pours?",
    a: "We maintain on-site computer-controlled batching plants with liquid nitrogen or flake ice chillers for mass pours, continuous slump/temperature verification, and third-party laboratory compressive testing at 7, 14, and 28 days.",
  },
];

export default function WaltonHomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Smooth Autoplay for Hero Slider
  useEffect(() => {
    if (heroPaused) return;
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroPaused]);

  const activeSlide = HERO_SLIDES[heroIdx];

  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. FULL-WIDTH CINEMATIC HERO IMAGE SLIDER
      ───────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] xl:h-[780px] overflow-hidden bg-[#0A1E34]"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        {/* Slides Images with Smooth Cross-Fade and Zoom */}
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.image + i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === heroIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                i === heroIdx ? "scale-105" : "scale-100"
              }`}
              priority={i === 0}
              sizes="100vw"
            />
            {/* Cinematic Multi-Layer Dark Overlay for Maximum Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061423]/92 via-[#0A1E34]/75 to-[#0A1E34]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/90 via-transparent to-[#0A1E34]/30" />
          </div>
        ))}

        {/* Hero Content Layer */}
        <div className="relative z-20 mx-auto max-w-screen-xl h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFC48B] text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span>{activeSlide.eyebrow}</span>
            </div>

            {/* Powerful Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-black tracking-tight text-white leading-[1.1] uppercase mb-3 drop-shadow-md">
              {activeSlide.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              {activeSlide.subheadline}
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-xl">
              {activeSlide.description}
            </p>

            {/* Minimal CTA Buttons Inside Hero */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href={activeSlide.primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: theme.navy }}
              >
                <span>{activeSlide.primaryCta.label}</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href={activeSlide.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 transition-all duration-300"
              >
                <span>{activeSlide.secondaryCta.label}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls: Arrows */}
        <button
          onClick={() => setHeroIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
          aria-label="Previous Hero Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
          aria-label="Next Hero Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Dots with Active Pill Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === heroIdx ? "w-8 bg-[#C5A059]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORPORATE METRICS COUNTER SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="walton-stat-card rounded-2xl border border-slate-200 p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${theme.navy}10` }}
                  >
                    <Icon size={20} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navyDark }}>
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
          3. HOME — SERVICES CARDS (LARGE IMAGE HEADERS + MINI SLIDERS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionLabel>Core Disciplines</SectionLabel>
              <SectionHeading className="mb-3">
                EXPERTISE THAT MOVES PROJECTS FORWARD
              </SectionHeading>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                From technical consultancy and project management to infrastructure development and construction oversight, we bring engineering expertise to every stage of the project lifecycle.
              </p>
            </div>

            <Link
              href="/group-companies/walton-consultants-contracting/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E2A47] hover:text-[#C5A059] transition-colors shrink-0"
            >
              <span>Explore All 8 Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 8 Service Cards Grid with Large Image Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WALTON_SERVICES.map((svc, idx) => {
              const isFeatured = idx < 4; // First 4 are featured with mini-sliders
              return (
                <div
                  key={svc.id}
                  className="walton-card-lift rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
                >
                  <div>
                    {/* Header: Mini Slider for featured cards, large image for others */}
                    {isFeatured && svc.images && svc.images.length > 1 ? (
                      <CardImageSlider images={svc.images} alt={svc.title} className="h-48" />
                    ) : (
                      <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover walton-img-zoom transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[#0E2A47] inline-block mb-2.5">
                        {svc.category}
                      </span>

                      <h3 className="text-base font-black text-[#0A1E34] leading-snug mb-2 group-hover:text-[#0E2A47] transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {svc.overview}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={`/group-companies/walton-consultants-contracting/services#${svc.id}`}
                      className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0A1E34] hover:bg-slate-50 hover:border-[#C5A059] transition-all"
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SOLUTIONS PREVIEW SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionLabel>Engineered Packages</SectionLabel>
              <SectionHeading className="mb-3">
                FROM COMPLEX CHALLENGES TO PRACTICAL SOLUTIONS
              </SectionHeading>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Integrated packages designed to deliver cost certainty, structural durability, and rapid commissioning across critical sectors.
              </p>
            </div>

            <Link
              href="/group-companies/walton-consultants-contracting/solutions"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E2A47] hover:text-[#C5A059] transition-colors shrink-0"
            >
              <span>View All Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WALTON_SOLUTIONS.slice(0, 4).map((sol) => (
              <div
                key={sol.id}
                className="walton-card-lift rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={sol.image}
                      alt={sol.name}
                      fill
                      className="object-cover walton-img-zoom transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/90 text-[#0A1E34] backdrop-blur-xs">
                      {sol.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-black text-[#0A1E34] leading-snug mb-2">
                      {sol.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {sol.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                      {sol.stats.slice(0, 2).map((st) => (
                        <div key={st.label}>
                          <span className="text-xs font-black text-[#0E2A47] block">{st.value}</span>
                          <span className="text-[10px] text-slate-500 font-semibold">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/group-companies/walton-consultants-contracting/solutions"
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0A1E34] hover:bg-slate-50 transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FEATURED PROJECTS SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <SectionLabel>National Footprint</SectionLabel>
              <SectionHeading className="mb-3">
                PROJECTS BUILT TO MAKE AN IMPACT
              </SectionHeading>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Landmark bridges, highway interchanges, high-rise commercial superstructures, and industrial manufacturing plants executed across Pakistan.
              </p>
            </div>

            <Link
              href="/group-companies/walton-consultants-contracting/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E2A47] hover:text-[#C5A059] transition-colors shrink-0"
            >
              <span>View Full Portfolio</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WALTON_PROJECTS.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="walton-card-lift rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
              >
                <div>
                  <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover walton-img-zoom transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/70 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#C5A059] text-white">
                      {p.category}
                    </span>
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-[11px] font-bold text-slate-200 flex items-center gap-1">
                        <MapPin size={12} className="text-[#C5A059]" /> {p.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-black text-[#0A1E34] mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {p.summary}
                    </p>

                    <div className="flex items-center justify-between text-xs py-2 border-t border-slate-100">
                      <span className="text-slate-500 font-semibold">Client</span>
                      <span className="font-bold text-[#0A1E34] text-right truncate max-w-[200px]">{p.client}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/group-companies/walton-consultants-contracting/projects"
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0A1E34] hover:bg-slate-50 transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. 6-STAGE CONSTRUCTION LIFECYCLE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-3">
              6-Stage Construction Lifecycle
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From geotechnical soil investigation to 3D BIM clash resolution, heavy structural build, and final statutory commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-xs text-white mb-5 shadow-xs"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-[#0A1E34] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FAQ ACCORDION SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Clarity &amp; Governance</SectionLabel>
            <SectionHeading center className="mb-3">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600">
              Essential technical and operational details on our contracting framework.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A1E34] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C5A059]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FINAL CALL TO ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-xl text-white relative overflow-hidden"
            style={{ backgroundColor: theme.navyDark }}
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight mb-3 text-white">
                Let&apos;s Build Something That Matters
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Have an infrastructure, engineering or development challenge? Our team can help turn complex requirements into practical, scalable solutions.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: theme.goldHover }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 text-white flex items-center gap-2 transition-all hover:bg-white/10"
              >
                <Phone size={15} />
                <span>+92 42 3892-4737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
