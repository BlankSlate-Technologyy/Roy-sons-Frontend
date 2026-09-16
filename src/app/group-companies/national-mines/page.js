"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Drill,
  Factory,
  FlaskConical,
  Globe,
  HardHat,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  MINERALS_LIST,
} from "./components/NationalMinesShared";

const HERO_SLIDES = [
  {
    image: "/services/mining-1.jpg",
    tag: "Natural Mineral Exploration & Extraction",
    title: "Large-Scale Industrial Mining & Mineral Development",
    desc: "Extracting, refining, and delivering essential mineral resources that fuel national infrastructure, energy generation, and international metallurgical supply chains.",
  },
  {
    image: "/mine header.png",
    tag: "Heavy Mining Fleet & Extraction",
    title: "Advanced Open-Pit Engineering & Bulk Haulage Fleets",
    desc: "High-capacity electric excavators, rotary blast-hole drill rigs, and automated haulage fleets operating under stringent zero-harm safety standards.",
  },
  {
    image: "/services/mining-2.jpg",
    tag: "High-Purity Metallurgy & Beneficiation",
    title: "Modern Mineral Processing & Automated Flotation Plants",
    desc: "Closed-loop crushing, ball milling, froth flotation cells, and induction smelting producing certified export-grade concentrates and doré bullion.",
  },
];

const STATS = [
  { icon: Award, value: "20+", label: "Years of Mining\nExcellence" },
  { icon: BarChart3, value: "50+", label: "Exploration &\nMine Projects" },
  { icon: Truck, value: "5M+", label: "Tons of Minerals\nProcessed" },
  { icon: Users, value: "500+", label: "Engineers &\nGeologists" },
  { icon: ShieldCheck, value: "99%", label: "Operational Safety\nCompliance" },
];

const CORE_SERVICES = [
  {
    icon: Drill,
    title: "Mining Operations",
    desc: "High-capacity open-pit and underground extraction utilizing rigid haul trucks, rotary blast rigs, and continuous shift scheduling.",
    href: "/group-companies/national-mines/services#operations",
    image: "/services/mining-1.jpg",
    tag: "Extraction",
  },
  {
    icon: Mountain,
    title: "Mineral Exploration",
    desc: "Satellite hyperspectral mapping, deep diamond core drilling up to 1,500m, and computerized 3D deposit modeling.",
    href: "/group-companies/national-mines/services#exploration",
    image: "/mine header.png",
    tag: "Exploration",
  },
  {
    icon: HardHat,
    title: "Mine Development",
    desc: "Pit limit optimization, geotechnical slope stability analysis, haul road layouts, and bankable feasibility studies.",
    href: "/group-companies/national-mines/services#development",
    image: "/services/mining-1.jpg",
    tag: "Engineering",
  },
  {
    icon: FlaskConical,
    title: "Mineral Processing",
    desc: "Multi-stage crushing, ball milling, closed-loop froth flotation, and induction smelting for peak metallurgical recovery.",
    href: "/group-companies/national-mines/services#processing",
    image: "/services/mining-2.jpg",
    tag: "Beneficiation",
  },
  {
    icon: Layers,
    title: "Geological Services",
    desc: "Certified laboratory fire assays, XRF spectrometry, core logging, and Competent Person resource estimations.",
    href: "/group-companies/national-mines/services#geological",
    image: "/mine process.png",
    tag: "Assays",
  },
  {
    icon: Building2,
    title: "Mining Infrastructure",
    desc: "Heavy machinery maintenance pads, rail siding loadouts, dry-stack tailings facilities, and dedicated power grids.",
    href: "/group-companies/national-mines/services#infrastructure",
    image: "/services/mining-2.jpg",
    tag: "Infrastructure",
  },
];

const FEATURED_MINERALS = [
  {
    name: "Copper (Cu)",
    grade: "28–32% Concentrate",
    desc: "High-grade copper concentrate and cathode sheets extracted from porphyry deposits for metallurgical smelting and electrical conductors.",
    slug: "copper-cu",
    image: "/mine copper.png",
    tag: "Base Metals",
  },
  {
    name: "Gold (Au)",
    grade: "99.4% Purity",
    desc: "Certified gold doré bullion bars and placer concentrates sourced from epithermal quartz veins with full chain-of-custody verification.",
    slug: "gold-au",
    image: "/mine gold.png",
    tag: "Precious Metals",
  },
  {
    name: "Iron Ore (Fe)",
    grade: "62–65% Fe Content",
    desc: "High-density magnetite and hematite lumps for direct reduction iron (DRI) plants and integrated steel manufacturing.",
    slug: "iron-ore-fe",
    image: "/mine gold.png",
    tag: "Ferrous Minerals",
  },
  {
    name: "Coal",
    grade: "6,200+ kcal/kg",
    desc: "High-calorific sub-bituminous and anthracite coal deposits supplying thermal power plants, cement kilns, and industrial furnaces.",
    slug: "coal-anthracite-bituminous",
    image: "/mine copper.png",
    tag: "Energy Resources",
  },
  {
    name: "Limestone (CaCO3)",
    grade: "94%+ CaCO3",
    desc: "Pure chemical limestone boulders and crushed aggregate for cement factories, flue-gas desulfurization, and steel flux.",
    slug: "limestone-caco3",
    image: "/mine gold.png",
    tag: "Industrial Minerals",
  },
  {
    name: "Gypsum (CaSO4)",
    grade: "92%+ Purity",
    desc: "Natural raw gypsum rock and pulverized agricultural gypsum for wallboard manufacturing, cement retarder, and soil reclamation.",
    slug: "gypsum-caso4",
    image: "/mine copper.png",
    tag: "Construction Minerals",
  },
];

const INDUSTRIES = [
  { icon: Building, label: "Construction & Aggregates", desc: "High-strength limestone, granite sub-base, and manufactured sand.", href: "/group-companies/national-mines/industries/construction-aggregates" },
  { icon: Landmark, label: "Infrastructure Development", desc: "Armor rock, railway ballast, and motorways foundation materials.", href: "/group-companies/national-mines/industries/infrastructure-development" },
  { icon: Factory, label: "Steel & Alloys Manufacturing", desc: "Iron ore lumps, metallurgical chromite, and high-purity limestone flux.", href: "/group-companies/national-mines/industries/steel-alloys-manufacturing" },
  { icon: Building2, label: "Cement & Building Materials", desc: "High-calcium limestone, raw gypsum, and silica sand feedstocks.", href: "/group-companies/national-mines/industries/cement-building-materials" },
  { icon: Zap, label: "Energy & Captive Power", desc: "High-heat sub-bituminous and anthracite industrial coal supplies.", href: "/group-companies/national-mines/industries/energy-power-generation" },
  { icon: Layers, label: "Metals & Industrial Materials", desc: "Foundry silica sand, copper cathode sheets, and mineral concentrates.", href: "/group-companies/national-mines/industries/industrial-chemicals-foundry" },
];

const FEATURED_PROJECTS = [
  {
    title: "Chagai Copper-Gold Mining Complex",
    region: "Balochistan Province",
    desc: "Major porphyry deposit extraction utilizing 100-ton haul truck fleets, semi-autogenous grinding mills, and automated flotation cells producing export concentrates.",
    image: "/services/mining-1.jpg",
    metric: "35,000 TPD Ore Capacity",
  },
  {
    title: "Salt Range Coal & Minerals Reserve",
    region: "Punjab Concession Belt",
    desc: "Sub-bituminous coal and gypsum extraction supplying regional cement manufacturing corridors and industrial power plants with verified energy density.",
    image: "/mine header.png",
    metric: "1.2M Tons Annual Delivery",
  },
  {
    title: "Central Indus High-Calcium Limestone Quarry",
    region: "D.G. Khan & Southern Punjab",
    desc: "Automated drilling, low-vibration blasting, and multi-tier crushing facilities supplying premium calcium carbonate to national infrastructure projects.",
    image: "/services/mining-2.jpg",
    metric: "94%+ Purity Certified",
  },
];

const FAQS = [
  {
    q: "What minerals does National Mines Corporation extract and supply?",
    a: "We extract, refine, and supply Gold, Copper, Iron Ore, Coal, Limestone, Gypsum, Chromite, Marble, Granite, and Silica Sand across Pakistan and global export markets.",
  },
  {
    q: "How do you ensure mineral purity and grade accuracy?",
    a: "Every batch is assayed in certified geological laboratories with computerized spectrometry (XRF) and fire assay reports provided before commercial dispatch.",
  },
  {
    q: "Do you supply raw bulk minerals as well as refined concentrates?",
    a: "Yes. We offer run-of-mine raw ores, precision-crushed aggregates, and refined metallurgical concentrates (e.g. 28–32% Copper concentrate, 99.4% Gold doré bullion).",
  },
  {
    q: "What environmental and sustainability protocols do you enforce?",
    a: "We enforce zero-toxic liquid discharge, recycle over 92% of process water, practice progressive bench revegetation, and maintain a 99% safety compliance rating under ISO 45001.",
  },
];

export default function NationalMinesHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* ─── 1. CINEMATIC MINING HERO SECTION WITH SMOOTH SLIDER ─────────── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center border-b overflow-hidden" style={{ borderColor: theme.border }}>
        {/* Slider Background Images */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
              currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={idx === 0}
            />
            {/* Dark Subtle Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07111C]/92 via-[#0B1B2B]/85 to-[#07111C]/75" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] font-medium uppercase tracking-wider mb-5">
              <Mountain size={13} style={{ color: theme.gold }} />
              <span className="text-white/90">{HERO_SLIDES[currentSlide].tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-5 text-white">
              {HERO_SLIDES[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-200 mb-8 max-w-2xl">
              {HERO_SLIDES[currentSlide].desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/group-companies/national-mines/minerals"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Explore Mineral Reserves</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/group-companies/national-mines/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border border-white/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <span>Request Procurement Proposal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-7 bg-[#C59B27]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-1.5 rounded-lg border border-white/20 bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-1.5 rounded-lg border border-white/20 bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. OPERATIONS & IMPACT STATISTICS ───────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.gold}15` }}>
                    <Icon size={20} style={{ color: theme.gold }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT NATIONAL MINES CORPORATION ─────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/mining-2.jpg"
                  alt="National Mines Corporation Industrial Flotation Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.gold }}>
                      Roy &amp; Sons Group Company
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Geological Exploration · Heavy Extraction · Certified Metallurgy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Corporate Background</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Industrial Strength Backed by Geological Science
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd (NMC) is an established natural resources exploration and extraction enterprise. Operating across premier metallogenic belts in Balochistan, Punjab, and northern territories, we deliver certified raw ores, crushed aggregates, and refined metallurgical concentrates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">ISO 45001 Zero-Harm Mandate</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">Certified XRF &amp; Fire Assays</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-mines/about"
                className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.gold }}
              >
                <span>Read complete corporate overview</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. MINING & MINERAL DEVELOPMENT LIFECYCLE ───────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-3">6-Stage Mining &amp; Mineral Development</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              From initial satellite reconnaissance to heavy excavation, closed-loop refining, and progressive land rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Geological Survey & Mapping", desc: "Hyperspectral satellite imaging, geochemical stream sampling, and high-resolution magnetic surveys.", icon: Mountain },
              { num: "02", title: "Exploration Core Drilling", desc: "Diamond core drilling rigs recovering continuous core samples to confirm depth, strike, and grade.", icon: Drill },
              { num: "03", title: "Mine Planning & Modeling", desc: "3D block modeling, geotechnical slope stability analysis, and bankable economic feasibility studies.", icon: HardHat },
              { num: "04", title: "Precision Heavy Extraction", desc: "Controlled blasting, electric hydraulic excavators, and rigid haul truck dispatch telemetry.", icon: Truck },
              { num: "05", title: "Beneficiation & Flotation", desc: "Multi-stage crushing, ball milling, froth flotation cells, and induction smelting for peak purity.", icon: FlaskConical },
              { num: "06", title: "Progressive Rehabilitation", desc: "Ongoing bench grading, topsoil replacement, native tree reforestation, and process water recycling.", icon: Leaf },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.gold}15` }}>
                        <Icon size={18} style={{ color: theme.gold }} />
                      </div>
                      <span className="text-xs font-bold text-slate-400">STAGE {step.num}</span>
                    </div>
                    <h3 className="text-[16px] font-semibold mb-1.5" style={{ color: theme.navy }}>
                      {step.title}
                    </h3>
                    <p className="text-xs font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. CORE SERVICES (COMPACT HEADERS, SUBTLE ARROW LINKS) ───────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Technical Operations</SectionLabel>
              <SectionHeading>Core Mining Services</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/services"
              className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              style={{ color: theme.gold }}
            >
              <span>View all services</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    <Link
                      href={svc.href}
                      className="mine-img-wrapper block w-full h-44 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}15` }}>
                          <Icon size={16} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: theme.navy }}>
                          <Link href={svc.href} className="hover:text-[#C59B27] transition-colors">
                            {svc.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs font-normal leading-relaxed line-clamp-3 mb-3" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-1 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={svc.href}
                      className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.gold }}
                    >
                      <span>Explore specifications</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. MINERAL RESOURCES (CLOSE-UP PHOTOGRAPHY, SUBTLE LINKS) ────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Mineral Portfolio</SectionLabel>
              <SectionHeading>Strategic Mineral Reserves</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/minerals"
              className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              style={{ color: theme.gold }}
            >
              <span>Explore all minerals</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_MINERALS.map((min) => (
              <div
                key={min.slug}
                className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
              >
                <div>
                  <Link
                    href={`/group-companies/national-mines/minerals/${min.slug}`}
                    className="mine-img-wrapper block w-full h-44 bg-slate-950 relative cursor-pointer"
                  >
                    <Image
                      src={min.image}
                      alt={min.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                        {min.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-black/80 text-amber-300 border border-amber-500/30">
                        {min.grade}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold tracking-tight mb-1" style={{ color: theme.navy }}>
                      <Link href={`/group-companies/national-mines/minerals/${min.slug}`} className="hover:text-[#C59B27] transition-colors">
                        {min.name}
                      </Link>
                    </h3>
                    <p className="text-xs font-normal leading-relaxed line-clamp-2 text-slate-500 mb-2">
                      {min.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1 border-t" style={{ borderColor: theme.borderLight }}>
                  <Link
                    href={`/group-companies/national-mines/minerals/${min.slug}`}
                    className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    style={{ color: theme.gold }}
                  >
                    <span>View commodity specs</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INDUSTRIES WE SERVE ──────────────────────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Downstream Integration</SectionLabel>
            <SectionHeading center className="mb-3">Industries We Empower</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Supplying verified raw materials and refined minerals to the foundations of modern industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="mine-card rounded-2xl p-5 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.gold}15` }}>
                      <Icon size={16} style={{ color: theme.gold }} />
                    </div>
                    <h3 className="text-[15px] font-semibold mb-1" style={{ color: theme.navy }}>
                      {ind.label}
                    </h3>
                    <p className="text-xs font-normal leading-relaxed text-slate-500 mb-3">
                      {ind.desc}
                    </p>
                  </div>

                  <Link
                    href={ind.href}
                    className="mine-link-arrow text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    style={{ color: theme.gold }}
                  >
                    <span>Industry details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. SUSTAINABILITY & RESPONSIBLE STEWARDSHIP ──────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Environmental Stewardship</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Responsible Mining for a Sustainable Future
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                Sustainable resource extraction is central to our operational mandate. From closed-loop process water recycling that conserves over 92% of water, to progressive open-pit bench reforestation and zero-toxic liquid discharge, we protect local ecosystems.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "92% Process water recycled through thickeners and press filtration",
                  "Simultaneous bench grading, topsoil restoration, and reforestation",
                  "Zero-toxic chemical effluent discharged into regional water tables",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                    <span className="text-xs font-normal text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/group-companies/national-mines/sustainability"
                className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.gold }}
              >
                <span>Read our full sustainability framework</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev/mining_rehabilitation.jpg"
                  alt="Mine Environmental Rehabilitation and Vegetation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FEATURED MINING CONCESSION PROJECTS ──────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Concession Operations</SectionLabel>
            <SectionHeading center className="mb-3">Featured Mining Projects</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Key industrial extraction sites supplying critical minerals across domestic and export corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="mine-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 bg-slate-100">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                        {proj.region}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold mb-1" style={{ color: theme.navy }}>
                      {proj.title}
                    </h3>
                    <p className="text-xs font-normal leading-relaxed text-slate-500 mb-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t flex items-center justify-between" style={{ borderColor: theme.borderLight }}>
                  <span className="text-[11px] font-semibold" style={{ color: theme.gold }}>
                    {proj.metric}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. FAQS & CLEAN CONTACT INQUIRY SECTION ────────────────────── */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Common Questions</SectionLabel>
            <SectionHeading center className="mb-3">Mining &amp; Procurement FAQs</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="mine-card rounded-xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm cursor-pointer"
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-4 text-xs font-normal leading-relaxed border-t pt-3 text-slate-600" style={{ borderColor: theme.borderLight }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Inquiry Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Bulk Mineral Supply &amp; Concession Inquiries
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Request Mineral Allocations &amp; Technical Assays
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Connect directly with our commercial trading desk in Lahore or our regional field headquarters for certified assay sheets, volume allocations, and FOB export terms.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Submit Procurement Inquiry</span>
                <ArrowRight size={13} />
              </Link>
              <a
                href="tel:+923218431665"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all hover:bg-white cursor-pointer"
                style={{ borderColor: theme.border, color: theme.navy }}
              >
                <Phone size={13} style={{ color: theme.gold }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}