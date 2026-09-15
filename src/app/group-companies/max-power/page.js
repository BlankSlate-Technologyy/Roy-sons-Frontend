"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Battery,
  BatteryCharging,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Factory,
  FileText,
  HardHat,
  Layers,
  Leaf,
  MapPin,
  Package,
  Phone,
  PlugZap,
  Radio,
  Search,
  Send,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  Truck,
  Users2,
  Wrench,
  Zap,
  Activity,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxPowerShared";

const HERO_SLIDES = [
  {
    tag: "Utility Solar & Wind Generation",
    badgeTitle: "Renewable Generation",
    badgeSubtitle: "Utility Solar PV & Wind Farm Infrastructure",
    img: "/maxpower/hero_renewable_energy.jpg",
    alt: "Utility Scale Solar Farm and Wind Turbines Renewable Energy Infrastructure",
  },
  {
    tag: "Thermal & Combined-Cycle Gas",
    badgeTitle: "Power Generation Plants",
    badgeSubtitle: "Turnkey Industrial Turbines & Power Stations",
    img: "/maxpower/hero_power_generation.jpg",
    alt: "Modern Power Generation Plant with Turbines and Cooling Towers",
  },
  {
    tag: "132kV–500kV Transmission",
    badgeTitle: "High-Voltage Grid",
    badgeSubtitle: "220kV / 500kV AIS & GIS Substations",
    img: "/maxpower/hero_high_voltage_grid.jpg",
    alt: "High-Voltage Electricity Transmission Towers and Grid Substation",
  },
  {
    tag: "BESS & Grid Stabilization",
    badgeTitle: "Utility Battery Storage",
    badgeSubtitle: "Containerized Liquid-Cooled BESS Units",
    img: "/maxpower/hero_energy_storage.jpg",
    alt: "Utility-Scale Battery Energy Storage System Beside Solar Farm",
  },
];

const STATS = [
  { icon: Award, value: "30+", label: "Years of Heavy\nPower Experience" },
  { icon: Zap, value: "500+", label: "Completed Power\nProjects" },
  { icon: Sun, value: "2000+", suffix: " MW", label: "Installed Power\nCapacity" },
  { icon: Users2, value: "300+", label: "Certified Power &\nHigh-Voltage Engineers" },
  { icon: ShieldCheck, value: "99.8%", label: "Grid Reliability &\nSystem Uptime" },
];

const SERVICES = [
  {
    icon: Sun,
    title: "Renewable Energy Solutions",
    desc: "Designing and implementing utility solar, wind, hybrid, and clean energy systems for sustainable power generation.",
    href: "/group-companies/max-power/services#renewable-energy",
    img: "/maxpower/svc_renewable_energy.jpg",
    tag: "Renewable Energy",
  },
  {
    icon: Zap,
    title: "Power Generation Plants",
    desc: "Developing efficient thermal, hydro, solar, gas, and captive co-generation power plants for heavy industry and utilities.",
    href: "/group-companies/max-power/services#power-generation",
    img: "/maxpower/svc_power_generation.jpg",
    tag: "Power Plants",
  },
  {
    icon: Radio,
    title: "High-Voltage Transmission (132kV–500kV)",
    desc: "Turnkey EPC construction of substations, lattice transmission towers, distribution networks, and power step-up yards.",
    href: "/group-companies/max-power/services#transmission-distribution",
    img: "/maxpower/svc_high_voltage.jpg",
    tag: "Grid Infrastructure",
  },
  {
    icon: Battery,
    title: "Battery Energy Storage (BESS)",
    desc: "Advanced utility-scale battery storage solutions that improve grid stability, peak shaving, and renewable integration.",
    href: "/group-companies/max-power/services#energy-storage",
    img: "/maxpower/svc_battery_storage.jpg",
    tag: "Energy Storage",
  },
  {
    icon: Cpu,
    title: "Switchgear & SCADA Automation",
    desc: "Manufacturing 11kV/33kV vacuum switchgear panels, numerical relay protection, and plant-wide SCADA software.",
    href: "/group-companies/max-power/services#electrical-engineering",
    img: "/maxpower/svc_switchgear_scada.jpg",
    tag: "SCADA & Switchgear",
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance (O&M)",
    desc: "24/7 dedicated plant operations, predictive thermography, transformer oil filtering, and contractual availability SLAs.",
    href: "/group-companies/max-power/services#operations-maintenance",
    img: "/maxpower/svc_operations_maintenance.jpg",
    tag: "Plant O&M",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "MaxSolar Utility 100MW Farm EPC",
    tag: "Utility Solar EPC",
    desc: "Tier-1 bifacial panels, AI single-axis trackers, central inverters, and dedicated 132kV grid connection.",
    img: "/maxpower/sol_maxsolar_100mw.jpg",
    specs: ["100 MWac Grid Injection", "Bifacial PV & Single-Axis Trackers", "132kV High-Voltage Interconnection"],
  },
  {
    name: "MaxGrid 220kV / 132kV AIS/GIS Substation",
    tag: "High-Voltage Substations",
    desc: "Step-up power transformers up to 250MVA with SF6 gas-insulated switchgear and numerical differential relays.",
    img: "/maxpower/sol_maxgrid_substation.jpg",
    specs: ["220kV / 132kV Transmission", "SF6 Gas-Insulated Switchgear", "Sub-Cycle Fault Protection"],
  },
  {
    name: "MaxStorage PowerVault 10MWh BESS",
    tag: "Grid Energy Storage",
    desc: "Tier-1 Liquid-Cooled LFP containerized battery storage providing sub-second primary frequency regulation.",
    img: "/maxpower/sol_maxstorage_bess.jpg",
    specs: ["10 MWh Liquid-Cooled LFP", "Sub-Second Frequency Response", "Black-Start & Islanding Capability"],
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Energy Demand Feasibility",
    desc: "Analyzing power load curves, grid interconnection headroom, and geotechnical land conditions.",
  },
  {
    num: "02",
    title: "Single-Line CAD Engineering",
    desc: "Developing optimized electrical schematics, transformer thermal sizing, and ETAP fault coordination.",
  },
  {
    num: "03",
    title: "Sourcing & Procurement",
    desc: "Procuring Tier-1 high-voltage transformers, switchgear, solar PV modules, and structural steel.",
  },
  {
    num: "04",
    title: "Heavy Civil & Electrical Build",
    desc: "Executing reinforced foundation casting, pylon erection, cable pulling, and switchyard rigging.",
  },
  {
    num: "05",
    title: "Testing & Grid Commissioning",
    desc: "High-potential (Hi-Pot) dielectric testing, relay trip verification, and commercial COD grid synchronization.",
  },
  {
    num: "06",
    title: "24/7 O&M Asset Management",
    desc: "Providing 24/7 on-site certified plant engineers, thermographic drone scans, and spare parts inventory.",
  },
];

const FAQS = [
  {
    q: "What is Max Power Corporation's installed power generation capacity?",
    a: "Max Power Corporation has engineered, constructed, and commissioned over 2,000 MW of installed power capacity across Pakistan, including utility solar parks, combined-cycle gas plants, and high-voltage transmission substations.",
  },
  {
    q: "Does Max Power execute high-voltage grid substations up to 500kV?",
    a: "Yes. We hold PEC Category C-A (No Limit) constructor licensing and deliver turnkey 132kV, 220kV, and 500kV Air-Insulated (AIS) and Gas-Insulated (GIS) grid substations and transmission lines.",
  },
  {
    q: "Can Max Power install Battery Energy Storage Systems (BESS) for industrial clients?",
    a: "Yes. We supply and integrate containerized LFP Battery Energy Storage Systems ranging from 1 MWh to 50 MWh for industrial peak shaving, backup power, and renewable energy smoothing.",
  },
  {
    q: "What operations and maintenance (O&M) services are offered?",
    a: "We offer comprehensive 24/7 plant operations, predictive thermographic auditing, transformer oil purification, vibration testing, and guaranteed availability performance contracts.",
  },
];

export default function MaxPowerHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Auto-play hero slider (5.5s)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-white text-[#334155] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section with 4-Slide Image Carousel */}
      <section
        className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden"
        style={{ borderColor: theme.border }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.16em] mb-4 bg-white shadow-2xs"
                style={{ borderColor: theme.border, color: theme.teal }}
              >
                <Zap size={13} style={{ color: theme.green }} />
                <span>CLEAN ENERGY • POWERING PROGRESS</span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] uppercase mb-5"
                style={{ color: theme.navy }}
              >
                MAX POWER CORPORATION
              </h1>

              {/* Supporting Text */}
              <p
                className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-6 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Delivering reliable, sustainable and innovative energy solutions for a stronger future.
              </p>

              {/* 3 Small Value Indicators */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white shadow-2xs text-xs font-bold" style={{ borderColor: theme.border, color: theme.navy }}>
                  <ShieldCheck size={15} style={{ color: theme.green }} />
                  <span>Reliable Energy</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white shadow-2xs text-xs font-bold" style={{ borderColor: theme.border, color: theme.navy }}>
                  <Leaf size={15} style={{ color: theme.green }} />
                  <span>Sustainable Solutions</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white shadow-2xs text-xs font-bold" style={{ borderColor: theme.border, color: theme.navy }}>
                  <Cpu size={15} style={{ color: theme.teal }} />
                  <span>Advanced Engineering</span>
                </div>
              </div>

              {/* Strategic CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
                <Link
                  href="/group-companies/max-power/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/group-companies/max-power/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Talk To An Engineer</span>
                </Link>
              </div>

              {/* Slider Navigation Controls: Prev/Next & Dots */}
              <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: theme.border }}>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors bg-white hover:bg-slate-50 cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navy }}
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors bg-white hover:bg-slate-50 cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navy }}
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.tag}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? "w-8" : "w-2 hover:w-3"
                      }`}
                      style={{
                        backgroundColor: currentSlide === idx ? theme.teal : "#CBD5E1",
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {currentSlide + 1} / {HERO_SLIDES.length}
                </span>
              </div>
            </div>

            {/* Right Hero Image Card (16:9 Photography with smooth transition) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[540px] aspect-[16/9] min-h-[320px] sm:min-h-[360px] rounded-3xl overflow-hidden shadow-lg border group bg-slate-50"
                style={{ borderColor: theme.border }}
              >
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.img}
                      alt={slide.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/85 via-[#061527]/20 to-transparent flex items-end p-5 sm:p-6">
                      <div
                        className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-md w-full"
                        style={{ borderColor: theme.border }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black uppercase tracking-wider" style={{ color: theme.green }}>
                            {slide.badgeTitle}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold" style={{ color: theme.navy }}>
                          {slide.badgeSubtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-5 sm:p-6 text-center flex flex-col items-center justify-center bg-white shadow-2xs hover:shadow-sm transition-shadow"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-[#F8FAFC]"
                    style={{ border: `1px solid ${theme.border}` }}
                  >
                    <Icon size={20} style={{ color: theme.teal }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                    {stat.suffix && <span className="font-black text-xl" style={{ color: theme.teal }}>{stat.suffix}</span>}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Energy Ecosystem Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual: Panoramic Energy Infrastructure Landscape */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-md group bg-slate-50"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/maxpower/about_energy_ecosystem.jpg"
                  alt="Max Power Corporation Energy Infrastructure and Power Ecosystem"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-1">
                      Turnkey EPC &amp; Grid Delivery
                    </p>
                    <h4 className="text-base sm:text-lg font-bold">
                      Reliable Energy + Engineering + Sustainability + Infrastructure
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Reliable Energy Solutions For National Progress</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Max Power Corporation delivers complete electrical engineering and energy infrastructure services across Pakistan. From utility solar PV parks and 500kV transmission grid stations to industrial battery energy storage (BESS) and captive co-generation plants, we empower heavy industries and national utilities with uncompromised power reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAFC]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.green }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">PEC Category C-A (No Limit) EPC</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAFC]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.green }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">2,000+ MW Installed Capacity</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAFC]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.green }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">500kV Substations &amp; Pylons</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAFC]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.green }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 SCADA &amp; Grid Reliability</span>
                </div>
              </div>

              <Link
                href="/group-companies/max-power/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:gap-3"
                style={{ color: theme.teal }}
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 6 Core Divisions (No Card Buttons, 4:3 Aspect Ratio, Hover Elevation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-power/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider hover:underline"
              style={{ color: theme.teal }}
            >
              <span>View All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="group rounded-3xl border overflow-hidden bg-white shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* 4:3 Image Container with Hover Zoom */}
                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-slate-800 shadow-xs">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#F8FAFC]"
                        style={{ border: `1px solid ${theme.border}` }}
                      >
                        <Icon size={19} style={{ color: theme.teal }} />
                      </div>

                      <h3 className="text-base sm:text-lg font-black mb-2.5 leading-snug" style={{ color: theme.navy }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Clean bottom line accent without interactive card button */}
                  <div className="px-6 pb-5 pt-0">
                    <div
                      className="h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: theme.teal }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Power Solutions (No Card Buttons, Technical Specs, Hover Elevation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Packages</SectionLabel>
              <SectionHeading>Featured Power Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-power/solutions"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider hover:underline"
              style={{ color: theme.teal }}
            >
              <span>View All Solutions</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="group rounded-3xl border overflow-hidden bg-white shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-slate-800 shadow-xs">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black mb-2 leading-snug" style={{ color: theme.navy }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t" style={{ borderColor: theme.border }}>
                      {p.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={13} style={{ color: theme.green }} className="flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle border indicator on hover without card button */}
                <div className="px-6 pb-5 pt-0">
                  <div
                    className="h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: theme.green }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Power EPC Lifecycle (Disciplined Protocol) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Power EPC Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial energy demand modeling to heavy switchgear erection, grid synchronization, and 24/7 O&amp;M asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl border bg-white shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white mb-5 shadow-xs"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-2.5" style={{ color: theme.navy }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Technical Queries</SectionLabel>
            <SectionHeading center className="mb-4">Frequently Asked Questions</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-2xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-teal-700" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Single Strong Conversion Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-[#F8FAFC]"
            style={{ borderColor: theme.border }}
          >
            <div>
              <span
                className="text-xs font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.teal }}
              >
                READY TO ELECTRIFY YOUR INDUSTRIAL ENTERPRISE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Schedule An Energy Engineering Consultation
              </h2>
              <p className="text-xs sm:text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior electrical engineers to review power infrastructure, grid requirements and turnkey energy project deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-sm hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Energy Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-white cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxPowerFooter />
    </main>
  );
}