"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Droplets,
  HardHat,
  Layers,
  Leaf,
  MapPin,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Users2,
  Wind,
  ArrowRight,
  Globe,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ExternalLink,
  Maximize2,
  Eye,
  TreePine,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/DesertDevShared";
import {
  COMPANY_INFO,
  LAND_RESTORATION_STATS,
  TERRAIN_CATEGORIES,
  FULL_CATALOG_LISTINGS,
  TERRAIN_GUIDE,
  SERVICES_LIST,
  SIGNATURE_PROJECTS,
  PROCESS_STEPS,
  FAQS,
} from "./desert-dev-data";

const HERO_SLIDES = [
  {
    image: "/desertdev/hero_afforestation.jpg",
    tag: "Great Cholistan Mega-Afforestation",
    title: "50,000 Hectares · 4.5M Native Trees · UNCCD LDN Aligned",
    metric: "14.2M m³ Water Conserved Annually",
    href: "/group-companies/desert-development/solutions",
  },
  {
    image: "/desertdev/sand_dune_fixation.jpg",
    tag: "Mechanical Straw Dune Fixation",
    title: "10,000 Hectares · 99.2% Drift Arrest · Highway Defense",
    metric: "Protects 220+ km Trans-Desert Corridors",
    href: "/group-companies/desert-development/solutions",
  },
  {
    image: "/desertdev/solar_irrigation.jpg",
    tag: "Solar Deep Aquifer & Precision Drip",
    title: "350m Deep Boreholes · Zero Diesel · 98% Water Efficiency",
    metric: "25,000 m³/Day Potable & Crop Water",
    href: "/group-companies/desert-development/solutions",
  },
  {
    image: "/desertdev/renewable_solar_park.jpg",
    tag: "100MW Agrivoltaic Agro-Energy Park",
    title: "Bifacial Solar Trackers · Aloe Vera & Saffron Shade Farming",
    metric: "185 GWh Clean Energy + 40% Evaporation Cut",
    href: "/group-companies/desert-development/solutions",
  },
  {
    image: "/desertdev/arid_agriculture.jpg",
    tag: "Commercial Olive & Date Agro-Estates",
    title: "650,000 Picual Olives · Laser Contouring · GlobalGAP",
    metric: "95,000 Tons Annual Carbon Offset",
    href: "/group-companies/desert-development/solutions",
  },
];

export default function DesertDevHomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeTerrainTab, setActiveTerrainTab] = useState("shifting-sand-dunes");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Auto-play hero image slider
  useEffect(() => {
    if (isSliderHovered) return;
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isSliderHovered]);

  const prevHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Filter 6 featured items for the homepage preview
  const featuredListings = FULL_CATALOG_LISTINGS.filter((item) => {
    if (selectedCatalogCategory === "All") return true;
    return item.category === selectedCatalogCategory;
  }).slice(0, 6);

  const selectedTerrain =
    TERRAIN_GUIDE.find((t) => t.id === activeTerrainTab) || TERRAIN_GUIDE[0];

  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden selection:bg-[#2D7D62] selection:text-white">
      <DesertDevNavbar />

      {/* ─── 1. HERO SECTION (INTERACTIVE SLIDER + ENTERPRISE MISSION) ─── */}
      <section
        className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black tracking-tight leading-[1.12] uppercase mb-6"
                style={{ color: theme.darkGreen }}
              >
                Desert Development Corporation.{" "}
                <span className="block mt-2" style={{ color: theme.primary }}>
                  Engineering Resilient Arid Ecosystems.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Welcome to Desert Development Corporation. We pioneer large-scale scientific desert rehabilitation, precision land reclamation, deep solar hydrology, mega-afforestation green corridors, and utility agrivoltaic parks. Turning extreme arid wastelands into thriving, climate-resilient economic assets.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <Link
                  href="/group-companies/desert-development/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore 24+ Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/desert-development/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider border transition-all duration-300 hover:bg-emerald-50/60 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkGreen }}
                >
                  <span>Request Land Feasibility</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: theme.border }}>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkGreen }}>
                    98%
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.emerald }}>
                    Water Efficiency
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkGreen }}>
                    UNCCD
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.emerald }}>
                    LDN Framework
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkGreen }}>
                    1.2M+ Tons
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.emerald }}>
                    Carbon Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Realistic Image Showcase Slider */}
            <div
              className="lg:col-span-5 w-full flex justify-center"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div
                className="relative w-full max-w-[540px] h-[390px] sm:h-[470px] rounded-3xl overflow-hidden shadow-2xl border group select-none"
                style={{ borderColor: theme.border }}
                onMouseEnter={() => setIsSliderHovered(true)}
                onMouseLeave={() => setIsSliderHovered(false)}
              >
                {/* Image Slides with Smooth Crossfade */}
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === heroSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.tag}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                ))}

                {/* Slider Nav Arrows */}
                <button
                  type="button"
                  onClick={prevHeroSlide}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer opacity-70 group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextHeroSlide}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg cursor-pointer opacity-70 group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {HERO_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setHeroSlideIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === heroSlideIndex ? "w-6 bg-emerald-400" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Bottom Info Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/95 via-[#071C15]/25 to-transparent flex items-end p-5 sm:p-6 z-20 pointer-events-none">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border shadow-xl w-full pointer-events-auto transition-all duration-500"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black uppercase tracking-wider text-[#2D7D62] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        {HERO_SLIDES[heroSlideIndex].tag}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold line-clamp-1 sm:line-clamp-none" style={{ color: theme.darkGreen }}>
                      {HERO_SLIDES[heroSlideIndex].title}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">{HERO_SLIDES[heroSlideIndex].metric}</span>
                      <Link
                        href={HERO_SLIDES[heroSlideIndex].href}
                        className="font-bold text-[#1B4D3E] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore Solutions</span>
                        <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. STATS COUNTER BAR ─── */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F7FBF9]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {LAND_RESTORATION_STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div style={{ color: theme.primary }}>
                  <AnimatedCounter targetValue={stat.value} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: theme.textLight }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CORE SERVICE DISCIPLINES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Engineering Capabilities</SectionLabel>
            <SectionHeading center>Pioneering Land Development &amp; Ecological Solutions</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-4" style={{ color: theme.textMuted }}>
              From stabilizing shifting desert dunes to deploying high-yield agrivoltaics, we execute complete turnkey land reclamation backed by satellite telemetry and accredited carbon offset standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl border overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ borderColor: theme.border }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-extrabold uppercase tracking-widest text-white bg-[#1B4D3E]/90 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.id.replace("-", " ")}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2.5" style={{ color: theme.darkGreen }}>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-5" style={{ color: theme.textMuted }}>
                      {service.desc}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-4 border-t" style={{ borderColor: theme.border }}>
                      {service.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold" style={{ color: theme.darkGreen }}>
                          <CheckCircle2 size={13} style={{ color: theme.emerald }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/group-companies/desert-development/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1B4D3E] hover:underline"
                  >
                    <span>Full Engineering Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE CATALOG & SPECIFICATION MODAL SHOWCASE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionLabel>24+ Environmental Listings</SectionLabel>
              <SectionHeading>Featured Land Development Solutions</SectionHeading>
              <p className="text-sm font-medium mt-2 max-w-xl" style={{ color: theme.textMuted }}>
                Explore engineered systems with comprehensive technical parameters, terrain classifications, and warranties.
              </p>
            </div>
            <Link
              href="/group-companies/desert-development/solutions"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1B4D3E] hover:underline"
            >
              <span>View All 24+ Listings</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {TERRAIN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCatalogCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCatalogCategory === cat
                    ? "bg-[#1B4D3E] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border"
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
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                style={{ borderColor: theme.border }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.sku}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.accreditation}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D7D62]">
                      {item.terrain}
                    </span>
                    <h4 className="text-base font-black uppercase tracking-tight mt-1 mb-2 line-clamp-1" style={{ color: theme.darkGreen }}>
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] py-2.5 px-3 rounded-lg bg-emerald-50/50 mb-4">
                      <div>
                        <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Efficiency</span>
                        <span className="font-bold text-[#0D3025]">{item.efficiency}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Capacity</span>
                        <span className="font-bold text-[#0D3025]">{item.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold border border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye size={13} />
                      <span>Quick View Spec</span>
                    </button>
                    <Link
                      href="/group-companies/desert-development/contact"
                      className="py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#1B4D3E] hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. ARID GEOMORPHOLOGY & TERRAIN GUIDE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Terrain Classification</SectionLabel>
            <SectionHeading center>Arid Geomorphology Engineering Guide</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Every desert ecosystem requires tailored intervention. Explore how we engineer solutions according to soil type, salt index, and wind dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {TERRAIN_GUIDE.map((terrain) => (
                <button
                  key={terrain.id}
                  onClick={() => setActiveTerrainTab(terrain.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    activeTerrainTab === terrain.id
                      ? "bg-[#1B4D3E] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <span className="text-sm font-black uppercase tracking-tight block">
                      {terrain.name}
                    </span>
                    <span className={`text-xs font-medium ${activeTerrainTab === terrain.id ? "text-emerald-200" : "text-slate-500"}`}>
                      {terrain.classification}
                    </span>
                  </div>
                  <ChevronRight size={16} className={activeTerrainTab === terrain.id ? "text-emerald-300" : "text-slate-400"} />
                </button>
              ))}
            </div>

            {/* Right Details Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#2D7D62]">
                  {selectedTerrain.classification}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Tested across 30+ Arid Basins
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: theme.darkGreen }}>
                {selectedTerrain.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-700 block mb-1">
                    Inherent Landscape Challenges
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {selectedTerrain.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-1">
                    Engineered Interventions &amp; Solutions
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {selectedTerrain.solutions}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: theme.border }}>
                <span className="font-semibold text-slate-500">
                  Target Regions: <strong className="text-slate-700">{selectedTerrain.coverageRegions}</strong>
                </span>
                <Link
                  href="/group-companies/desert-development/contact"
                  className="font-bold text-[#1B4D3E] hover:underline flex items-center gap-1"
                >
                  <span>Request Site Soil Assay</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. TURNKEY SCIENTIFIC RECLAMATION PIPELINE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Turnkey Execution</SectionLabel>
            <SectionHeading center>6-Step Scientific Reclamation Methodology</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              From airborne LiDAR topography to Verra VCS international carbon credit auditing, every project follows a strict scientific and engineering protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-3xl border bg-white hover:border-[#1B4D3E] transition-colors group relative"
                style={{ borderColor: theme.border }}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1B4D3E] font-black text-base flex items-center justify-center mb-5 group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h4 className="text-base font-black uppercase tracking-tight mb-2" style={{ color: theme.darkGreen }}>
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. SIGNATURE PROJECTS CASE STUDIES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionLabel>Proven Track Record</SectionLabel>
              <SectionHeading>Signature Environmental Case Studies</SectionHeading>
              <p className="text-sm font-medium mt-2 max-w-xl" style={{ color: theme.textMuted }}>
                Over 250+ executed projects restoring vast arid terrains across South Asia and the Middle East.
              </p>
            </div>
            <Link
              href="/group-companies/desert-development/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1B4D3E] hover:underline"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIGNATURE_PROJECTS.slice(0, 3).map((proj, idx) => (
              <div
                key={idx}
                className="rounded-3xl border overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col group"
                style={{ borderColor: theme.border }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {proj.region}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D7D62]">
                      {proj.category}
                    </span>
                    <h4 className="text-lg font-black uppercase tracking-tight mt-1 mb-2" style={{ color: theme.darkGreen }}>
                      {proj.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mb-5 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs py-3 px-3 rounded-xl bg-emerald-50/50 mb-5">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Land Scale</span>
                        <span className="font-bold text-[#0D3025]">{proj.hectares}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Carbon Offset</span>
                        <span className="font-bold text-[#0D3025]">{proj.carbonOffset}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/group-companies/desert-development/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CONSULTATION & FEASIBILITY ESTIMATOR ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Project Feasibility</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4" style={{ color: theme.darkGreen }}>
                Request Turnkey Arid Land Rehabilitation Feasibility
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Whether you represent a government authority, agricultural corporation, or renewable energy developer, our senior hydrologists and environmental engineers will formulate a customized technical proposal and carbon offset projection.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Airborne satellite LiDAR terrain mapping and watershed modeling",
                  "Deep aquifer geophysical sounding and water salinity profiling",
                  "Straw checkerboard and biopolymer sand stabilization design",
                  "Turnkey UNCCD Land Degradation Neutrality and Verra VCS carbon credit certification",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold" style={{ color: theme.darkGreen }}>
                    <CheckCircle2 size={16} style={{ color: theme.emerald }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl border bg-emerald-50/50 text-xs font-bold flex items-center justify-between" style={{ borderColor: theme.border }}>
                <span style={{ color: theme.darkGreen }}>Direct Project Desk: +92 (51) 844-3200</span>
                <span className="text-[#2D7D62]">24-Hour Initial Feasibility Review</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border shadow-xl bg-white" style={{ borderColor: theme.border }}>
              <h3 className="text-lg font-black uppercase tracking-tight mb-1" style={{ color: theme.darkGreen }}>
                Land Assessment Consultation
              </h3>
              <p className="text-xs text-slate-500 mb-6">Fill in details regarding your land parcel to receive initial scope within 48 hours.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Desert Development Corporation's environmental engineering desk will contact you shortly."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Full Name</label>
                    <input type="text" required placeholder="Dr. / Engr. / Mr. Name" className="w-full text-xs p-3 rounded-xl border focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }} />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Organization / Entity</label>
                    <input type="text" required placeholder="Agency / Corporation" className="w-full text-xs p-3 rounded-xl border focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Email Address</label>
                    <input type="email" required placeholder="contact@domain.com" className="w-full text-xs p-3 rounded-xl border focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }} />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Phone / WhatsApp</label>
                    <input type="tel" required placeholder="+92 300 1234567" className="w-full text-xs p-3 rounded-xl border focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }} />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Primary Solution Required</label>
                  <select className="w-full text-xs p-3 rounded-xl border bg-white focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }}>
                    <option>Desert Rehabilitation &amp; Sand Dune Fixation</option>
                    <option>Arid Land Reclamation &amp; Earthworks</option>
                    <option>Deep Aquifer &amp; Solar Water Hydrology</option>
                    <option>Mega-Afforestation &amp; Green Corridors</option>
                    <option>Desert Renewable Energy &amp; Agrivoltaics</option>
                    <option>Airborne LiDAR &amp; GIS Topographical Survey</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Approximate Land Area (Hectares) &amp; Coordinates</label>
                  <textarea rows={3} placeholder="Provide approximate scale (e.g. 2,500 Hectares in Cholistan), soil conditions, and target objectives..." className="w-full text-xs p-3 rounded-xl border focus:outline-[#1B4D3E]" style={{ borderColor: theme.border }} />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer flex items-center justify-center gap-2"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Send size={14} />
                  <span>Submit Land Assessment Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Technical Inquiries</SectionLabel>
            <SectionHeading center>Frequently Asked Questions</SectionHeading>
            <p className="text-sm font-medium mt-3" style={{ color: theme.textMuted }}>
              Learn more about our water management, sand stabilization, and carbon credit auditing protocols.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-2xl overflow-hidden bg-white transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-xs sm:text-sm flex items-center justify-between cursor-pointer"
                  style={{ color: theme.darkGreen }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-[#2D7D62] ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-3 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUICK-VIEW SPECIFICATION MODAL ─── */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                {activeModalItem.sku}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {activeModalItem.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: theme.darkGreen }}>
              {activeModalItem.title}
            </h3>

            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider mb-2.5" style={{ color: theme.darkGreen }}>
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-1.5">
                {activeModalItem.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border mb-6" style={{ borderColor: theme.border }}>
              <h4 className="text-xs font-black uppercase tracking-wider mb-2 text-slate-700">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(activeModalItem.specs).map(([k, v]) => (
                  <div key={k}>
                    <span className="text-slate-400 block text-[10px]">{k}</span>
                    <span className="font-bold text-slate-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: theme.border }}>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty / Guarantee</span>
                <span className="text-xs font-bold text-emerald-800">{activeModalItem.warranty}</span>
              </div>
              <Link
                href="/group-companies/desert-development/contact"
                onClick={() => setActiveModalItem(null)}
                className="py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Project Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <DesertDevFooter />
    </main>
  );
}
