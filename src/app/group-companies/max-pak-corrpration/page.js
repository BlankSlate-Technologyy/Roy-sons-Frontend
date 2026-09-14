"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  Phone,
  Settings,
  HardHat,
  Truck,
  Wrench,
  Factory,
  Zap,
  Activity,
  Eye,
  X,
  FileText,
  MapPin,
  Clock,
  Sparkles,
  Building2,
  PackageCheck,
  ClipboardList,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxPakShared";
import {
  COMPANY_INFO,
  HERO_SLIDES,
  INDUSTRIAL_CATEGORIES,
  FULL_CATALOG_LISTINGS,
  PROCESS_STEPS,
  PROJECT_CASE_STUDIES,
  FAQS,
} from "./maxpak-data";

export default function MaxPakHomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [selectedCat, setSelectedCat] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  // Auto-play slider
  useEffect(() => {
    if (isSliderHovered) return;
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSliderHovered]);

  const currentSlide = HERO_SLIDES[heroIndex];

  const featuredListings = FULL_CATALOG_LISTINGS.filter((item) => {
    if (selectedCat === "All") return true;
    return item.category === selectedCat;
  }).slice(0, 6);

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#1B365D] selection:text-white">
      <MaxPakNavbar />

      {/* ─── 1. HERO SECTION WITH INTERACTIVE 5-SLIDE AI IMAGE SLIDER ─── */}
      <section
        className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-slate-50/60 to-white"
        style={{ borderColor: theme.border }}
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-[0.2em] bg-white shadow-xs text-[#1B365D]" style={{ borderColor: theme.border }}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Premier Industrial Trading &amp; Commercial Supplies</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] font-black tracking-tight leading-[1.12] uppercase"
                style={{ color: theme.navyDark }}
              >
                Max Pak Corporation.{" "}
                <span className="block mt-2 text-[#16A34A]">
                  Industrial Trading &amp; Commercial Supplies.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed max-w-xl"
                style={{ color: theme.textMuted }}
              >
                Supplying heavy industrial machinery, ASTM construction steel, earthmoving fleets, high-pressure pipeline valves, and 11kV/132kV electrical substation switchgear across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/group-companies/max-pak-corrpration/solutions"
                  className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer flex items-center gap-2"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/group-companies/max-pak-corrpration/contact"
                  className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider border-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer flex items-center gap-2"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <FileText size={15} />
                  <span>Request RFQ Term Sheet</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
                <div>
                  <span className="text-xl font-black block text-[#1B365D]">30+ Yrs</span>
                  <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                </div>
                <div>
                  <span className="text-xl font-black block text-[#16A34A]">10,000+</span>
                  <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Products</span>
                </div>
                <div>
                  <span className="text-xl font-black block text-[#1B365D]">99.2%</span>
                  <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">OTIF Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Image Slider */}
            <div className="lg:col-span-6 w-full">
              <div
                className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border bg-slate-900 group"
                style={{ borderColor: theme.border }}
              >
                {/* Images Crossfade */}
                {HERO_SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />
                  </div>
                ))}

                {/* Top Badge Overlay */}
                <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                  <span className="text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm border border-white/50 backdrop-blur-xs">
                    {currentSlide.badge}
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
                    {currentSlide.statValue}
                  </span>
                </div>

                {/* Slide Caption Bottom Overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg border-white/40">
                    <p className="text-[10.5px] font-black uppercase tracking-widest text-[#16A34A] mb-1">
                      {currentSlide.subtitle}
                    </p>
                    <h3 className="text-base sm:text-lg font-black leading-snug uppercase text-[#0F172A] line-clamp-1 mb-2">
                      {currentSlide.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 line-clamp-2">
                      {currentSlide.description}
                    </p>
                  </div>
                </div>

                {/* Left / Right Slider Controls */}
                <button
                  onClick={() =>
                    setHeroIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-xs"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-xs"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Pagination Indicator Dots */}
                <div className="absolute top-5 right-5 z-30 flex items-center gap-1.5 bg-black/40 px-2.5 py-1.5 rounded-full backdrop-blur-xs">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === heroIndex ? "w-6 bg-emerald-400" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. ENTERPRISE PERFORMANCE METRICS ─── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-5 rounded-2xl border text-center bg-slate-50/50" style={{ borderColor: theme.border }}>
              <span className="text-2xl sm:text-3xl font-black text-[#1B365D] block mb-1">
                <AnimatedCounter targetValue="30+" duration={1400} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Years of Industrial Trading
              </p>
            </div>
            <div className="p-5 rounded-2xl border text-center bg-slate-50/50" style={{ borderColor: theme.border }}>
              <span className="text-2xl sm:text-3xl font-black text-[#16A34A] block mb-1">
                <AnimatedCounter targetValue="10000+" duration={1500} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Industrial Products Delivered
              </p>
            </div>
            <div className="p-5 rounded-2xl border text-center bg-slate-50/50" style={{ borderColor: theme.border }}>
              <span className="text-2xl sm:text-3xl font-black text-[#1B365D] block mb-1">
                <AnimatedCounter targetValue="2500+" duration={1600} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Completed EPC Projects
              </p>
            </div>
            <div className="p-5 rounded-2xl border text-center bg-slate-50/50" style={{ borderColor: theme.border }}>
              <span className="text-2xl sm:text-3xl font-black text-[#1B365D] block mb-1">
                <AnimatedCounter targetValue="800+" duration={1700} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Corporate Industrial Clients
              </p>
            </div>
            <div className="p-5 rounded-2xl border text-center bg-slate-50/50 col-span-2 md:col-span-1" style={{ borderColor: theme.border }}>
              <span className="text-2xl sm:text-3xl font-black text-[#16A34A] block mb-1">
                <AnimatedCounter targetValue="99.2%" duration={1800} />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                On-Time In-Full Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE INDUSTRIAL SUPPLY CAPABILITIES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/40" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Supply Divisions</SectionLabel>
            <SectionHeading center>Comprehensive Industrial Trading Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Supplying certified machinery, construction metals, heavy equipment fleets, valves, switchgear, and turnkey EPC packages backed by Mill Test Certificates and OEM warranties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heavy Industrial Machinery & CNC Centers",
                desc: "5-axis CNC milling centers, 12kW fiber laser cutters, 800-ton hydraulic deep drawing presses, and floor-type horizontal boring mills.",
                image: "/maxpak/cnc_workshop.jpg",
                tag: "Precision Machinery",
                icon: Settings,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
              {
                title: "ASTM Structural Steel & Deformed Rebar",
                desc: "ASTM A615 Grade 60 rebar, wide-flange HEA/HEB H-beams, API 5L linepipes, and ASTM A516 boiler plates with EN 10204 3.1 MTCs.",
                image: "/maxpak/structural_steel_rebar.jpg",
                tag: "Structural Steel",
                icon: HardHat,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
              {
                title: "Heavy Earthmoving & 500-Ton Cranes",
                desc: "50-ton crawler excavators, 6.0 m³ wheel loaders, 500-ton all-terrain mobile cranes, and 32-ton heavy industrial forklifts.",
                image: "/maxpak/earthmoving_excavators.jpg",
                tag: "Heavy Fleet",
                icon: Truck,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
              {
                title: "Industrial High-Pressure Valves & Piping",
                desc: "API 6D trunnion ball valves, smart pneumatic control valves, ASME Class 1500 forged flanges, and chemical slurry pumps.",
                image: "/maxpak/industrial_valves_piping.jpg",
                tag: "Valves & Piping",
                icon: Wrench,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
              {
                title: "Electrical Switchgear & Power Systems",
                desc: "11kV vacuum switchgear, 25 MVA grid transformers, low-voltage intelligent MCC panels, and 2,000 kVA containerized generator sets.",
                image: "/maxpak/electrical_switchgear.jpg",
                tag: "Power Systems",
                icon: Zap,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
              {
                title: "Turnkey EPC Plants & Commercial Supplies",
                desc: "20 T/H steam boilers, ASME Section VIII pressure vessels, heavy warehouse pallet racking, and enterprise PPE safety suites.",
                image: "/maxpak/epc_plant.jpg",
                tag: "Turnkey Plants",
                icon: Factory,
                href: "/group-companies/max-pak-corrpration/solutions",
              },
            ].map((div, i) => {
              const Icon = div.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={div.image}
                        alt={div.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#1B365D] shadow-xs">
                          {div.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center mb-3">
                        <Icon size={20} />
                      </div>
                      <h3
                        className="text-lg font-black uppercase leading-snug mb-2"
                        style={{ color: theme.navyDark }}
                      >
                        {div.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                        {div.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={div.href}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1B365D] hover:text-[#16A34A] transition-colors"
                    >
                      <span>Explore Division Products</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE PRODUCT CATALOG SHOWCASE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionLabel>Commercial Catalog</SectionLabel>
              <SectionHeading>Featured Industrial Product Suites</SectionHeading>
              <p className="text-sm font-medium mt-2 max-w-xl text-slate-500">
                Explore real industrial equipment with direct factory warranties, Mill Test Certificates, and on-site commissioning.
              </p>
            </div>
            <Link
              href="/group-companies/max-pak-corrpration/solutions"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1B365D] hover:underline"
            >
              <span>View Full 20+ Catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {INDUSTRIAL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCat === cat
                    ? "bg-[#1B365D] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-50 border"
                }`}
                style={{ borderColor: theme.border }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Listings Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                      {item.sku}
                    </div>
                    <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                      {item.compliance.split(",")[0]}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#16A34A] block mb-1">
                      {item.category}
                    </span>
                    <h4
                      className="text-base font-black uppercase tracking-tight mb-2 line-clamp-1"
                      style={{ color: theme.navyDark }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 py-3 border-t border-slate-100">
                      {(item.features || []).slice(0, 2).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] font-medium text-slate-600 line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex gap-2">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold border text-slate-800 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{ borderColor: theme.border }}
                  >
                    <Eye size={13} />
                    <span>Quick Spec</span>
                  </button>
                  <Link
                    href={`/group-companies/max-pak-corrpration/contact?sku=${encodeURIComponent(
                      item.sku
                    )}`}
                    className="py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#1B365D] hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TURNKEY 6-STEP SOURCING PIPELINE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Execution Rigor</SectionLabel>
            <SectionHeading center>6-Step Turnkey Sourcing Pipeline</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              From initial engineering sizing to bonded heavy haulage and on-site mechanical commissioning, Max Pak ensures zero-defect supply delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl border bg-white hover:border-[#16A34A] transition-colors shadow-xs group"
                style={{ borderColor: theme.border }}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#16A34A] font-black text-base flex items-center justify-center mb-5 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="text-base font-black uppercase tracking-tight mb-2" style={{ color: theme.navyDark }}>
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SIGNATURE PROJECT CASE STUDIES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Proven Track Record</SectionLabel>
            <SectionHeading center>Signature Industrial Deployments</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Delivering mega-tonnage equipment and critical infrastructure supplies for national highway corridors, 500kV electrical grids, and petrochemical plants.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECT_CASE_STUDIES.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-[#1B365D] text-[10.5px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                      {project.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#16A34A] block mb-1">
                      {project.client}
                    </span>
                    <h3 className="text-lg font-black uppercase leading-snug mb-3" style={{ color: theme.navyDark }}>
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-4">
                      {project.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={13} className="text-[#16A34A]" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/group-companies/max-pak-corrpration/projects"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-center block text-[#1B365D] hover:bg-slate-50 transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    View Project Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. FREQUENTLY ASKED QUESTIONS ACCORDION ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Commercial &amp; Technical Clarity</SectionLabel>
            <SectionHeading center>Frequently Asked Questions</SectionHeading>
            <p className="text-sm font-medium mt-2" style={{ color: theme.textMuted }}>
              Key parameters regarding procurement contracts, MTC quality testing, inventory reserves, and emergency delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border rounded-2xl bg-white overflow-hidden transition-all shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm cursor-pointer"
                  style={{ color: theme.navyDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-slate-400 flex-shrink-0 ${
                      openFaq === i ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. BOTTOM LANDED-COST RFQ BANNER ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white"
            style={{ borderColor: theme.border }}
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                EPC CONTRACTORS &amp; INDUSTRIAL BUYERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mb-2" style={{ color: theme.navyDark }}>
                Initiate Your Industrial Supply Term Sheet Today
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our engineering procurement specialists to review technical specifications, mill allocations, and scheduled on-site delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK SPECIFICATION MODAL ─── */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-64 bg-slate-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-600 text-white inline-block mb-2">
                  {activeModalItem.sku} &bull; {activeModalItem.compliance.split(",")[0]}
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#16A34A] block mb-1">
                  Category: {activeModalItem.category}
                </span>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                {Object.entries(activeModalItem.specs).map(([k, v]) => (
                  <div key={k}>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">{k}</span>
                    <span className="font-bold text-slate-800">{v}</span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider mb-2.5" style={{ color: theme.navyDark }}>
                  Key Engineering Deliverables
                </h4>
                <div className="space-y-1.5">
                  {activeModalItem.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/group-companies/max-pak-corrpration/contact?sku=${encodeURIComponent(
                    activeModalItem.sku
                  )}`}
                  className="flex-1 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all shadow-md hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Landed-Cost Quotation</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider border text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  style={{ borderColor: theme.border }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MaxPakFooter />
    </main>
  );
}