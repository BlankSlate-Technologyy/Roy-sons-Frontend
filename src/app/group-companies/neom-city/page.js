"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Cpu,
  Factory,
  HardHat,
  Leaf,
  MapPin,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trees,
  Users2,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Filter,
  Eye,
  Layers,
  DollarSign,
  Maximize2,
  Briefcase,
} from "lucide-react";
import {
  theme,
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  DevelopmentDetailModal,
  MasterplanInquiryModal,
} from "./components/NeomCityShared";
import {
  COMPANY_INFO,
  HERO_SLIDES,
  STATS,
  DEVELOPMENT_CATEGORIES,
  MASTER_DEVELOPMENTS,
  URBAN_SERVICES,
  SECTOR_SOLUTIONS,
  PROCESS_STEPS,
  FAQS,
} from "./neom-city-data";

export default function NeomCityHomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Listing filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [selectedDevForModal, setSelectedDevForModal] = useState(null);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Auto-play hero slider every 5.2 seconds
  useEffect(() => {
    if (isSliderHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isSliderHovered]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Filtered developments
  const filteredDevelopments = MASTER_DEVELOPMENTS.filter((dev) => {
    const matchesCat = selectedCategory === "All" || dev.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.zoning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenDevModal = (dev) => {
    setSelectedDevForModal(dev);
    setIsDevModalOpen(true);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#008080] selection:text-white">
      {/* Top Fixed Navbar */}
      <NeomCityNavbar onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />

      {/* ─── 1. INTERACTIVE HERO SLIDER HEADER ("header ma slider lagna ha") ─── */}
      <section
        className="relative w-full bg-[#05172A] overflow-hidden select-none"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[650px]">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05172A]/95 via-[#05172A]/80 to-[#05172A]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05172A] via-transparent to-black/30" />
            </div>
          ))}

          {/* Content Container */}
          <div className="relative z-20 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl pt-8 sm:pt-0" data-aos="fade-up">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#008080] text-white shadow-md">
                  <Compass size={13} />
                  <span>{activeSlideData.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 backdrop-blur-md text-[#10B981] border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>{activeSlideData.statsBadge}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black uppercase tracking-tight text-white leading-[1.12] mb-5">
                {activeSlideData.title}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed mb-8 max-w-2xl">
                {activeSlideData.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#master-developments"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-[#008080] hover:bg-[#006666]"
                >
                  <Building2 size={16} />
                  <span>Explore Master Developments</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white cursor-pointer"
                >
                  <span>Request Urban Planning RFP</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-5 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#10B981]" />
                  <span>LEED Platinum for Cities</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={16} className="text-[#10B981]" />
                  <span>Envision Gold Standard</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Trees size={16} className="text-[#10B981]" />
                  <span>35,000+ Hectares Zoned</span>
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#008080] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#008080] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-[#008080]" : "w-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
            <span className="text-[11px] font-mono font-bold text-white/80 ml-2">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. LIVE METRICS COUNTER BAR ─── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl border bg-teal-50/20 hover:border-[#008080] transition-colors" style={{ borderColor: theme.border }}>
                <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2540] mb-1">
                  <AnimatedCounter targetValue={stat.value} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. EXTENSIVE MASTER DEVELOPMENT LISTINGS BOARD ("listings of each and every type") ─── */}
      <section id="master-developments" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionLabel center>Urban Master Concessions &amp; Districts</SectionLabel>
            <SectionHeading center>
              Comprehensive Smart City Master Developments
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Explore master-planned urban districts, financial business bays, zero-carbon residential communities, Special Economic Zones, and clean energy microgrids developed under international LEED Platinum standards.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border shadow-xs mb-8 space-y-4" style={{ borderColor: theme.border }}>
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search master development by name, zoning, district (e.g. Financial Bay, Eco-Community, SEZ, Solar Hub)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#008080]"
                style={{ borderColor: theme.border }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1 pl-1 pr-2 flex-shrink-0">
                <Filter size={12} />
                <span>Sector:</span>
              </span>
              {DEVELOPMENT_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0A2540] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-6 px-1">
            <span>
              Showing <strong>{filteredDevelopments.length}</strong> master development{filteredDevelopments.length === 1 ? "" : "s"}
            </span>
            {(selectedCategory !== "All" || searchQuery !== "") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-[#008080] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Developments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevelopments.map((dev) => (
              <div
                key={dev.id}
                className="bg-white rounded-2xl border shadow-xs hover:shadow-xl hover:border-[#008080] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Realistic Image */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#008080] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                      {dev.category}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#10B981] block">
                        {dev.totalArea} · {dev.investmentValue}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-black uppercase text-[#05172A] group-hover:text-[#008080] transition-colors line-clamp-2">
                      {dev.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin size={13} className="text-[#008080] flex-shrink-0" />
                      <span>{dev.location}</span>
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border text-xs space-y-1" style={{ borderColor: theme.border }}>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold uppercase text-[10px]">Status:</span>
                        <span className="font-semibold text-emerald-800 text-[11px]">{dev.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold uppercase text-[10px]">Capacity:</span>
                        <span className="font-semibold text-slate-800 text-[11px]">{dev.capacity}</span>
                      </div>
                    </div>

                    <ul className="space-y-1 pt-1 text-xs text-slate-600">
                      {dev.features?.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-[#008080] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 border-t bg-slate-50 flex items-center gap-2" style={{ borderColor: theme.border }}>
                  <button
                    type="button"
                    onClick={() => handleOpenDevModal(dev)}
                    className="flex-1 py-2 rounded-lg text-xs font-bold uppercase border border-slate-300 hover:border-[#008080] bg-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Eye size={13} />
                    <span>Masterplan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenDevModal(dev)}
                    className="flex-1 py-2 rounded-lg text-xs font-black uppercase text-white bg-[#008080] hover:bg-[#006666] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. URBAN SERVICES & ENGINEERING DISCIPLINES ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Turnkey Master Development</SectionLabel>
            <SectionHeading center>
              Urban Planning &amp; Smart Infrastructure Services
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Delivering full-lifecycle urban capabilities from initial GIS spatial zoning to subterranean trunk utilities, centralized district cooling, and municipal digital twin deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {URBAN_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs hover:shadow-xl hover:border-[#008080] transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        {srv.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {srv.desc}
                    </p>
                    <ul className="space-y-1.5 pt-2 border-t" style={{ borderColor: theme.border }}>
                      {srv.features?.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#008080] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/group-companies/neom-city/services#${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#008080] hover:text-[#0A2540] transition-colors"
                  >
                    <span>Explore Discipline Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SUBTERRANEAN UTILITY DUCTS & DIGITAL TWIN SHOWCASE ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-teal-50/30 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomcity/hero_transit_infrastructure.jpg"
                  alt="Neom City Autonomous Transit and Subterranean Corridors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-[#008080]">
                      Subterranean Infrastructure &amp; Transit Hub
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs font-bold text-[#05172A]">
                    100% Walkable Underground Utility Ducts &amp; Zero Surface Trenching Guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel>Intelligent Urban Engineering</SectionLabel>
              <SectionHeading>
                Subterranean Common Utility Tunnels &amp; Digital Twins
              </SectionHeading>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Traditional cities suffer perpetual road excavations for utility maintenance. Neom City Corporation engineers walkable, multi-compartment subterranean reinforced concrete utility conduits.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <Layers size={22} className="text-[#008080] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#05172A]">
                      Walkable Underground Utility Tunnels
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dedicated bays for potable water, chilled district cooling mains, 132kV power, and multi-tenant fiber optic conduits with robotic inspection sensors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <Cpu size={22} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#05172A]">
                      Unified Municipal Digital Twin Operations
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Real-time 3D simulation of traffic flows, power grid telemetry, water pressure leaks, and air quality across every city sector.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <Trees size={22} className="text-[#0A2540] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#05172A]">
                      Sponge City Stormwater Hydrology
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Permeable pavements and landscaped bio-retention swales capture 100% of rainwater, eliminating urban flooding and recharging natural aquifers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#008080] transition-colors shadow-md cursor-pointer"
                >
                  Commission Municipal Infrastructure Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SECTOR SOLUTIONS SHOWCASE ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Strategic Concession Sectors</SectionLabel>
            <SectionHeading center>
              Next-Generation Urban Master Solutions
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Engineering specialized urban districts tailored to macroeconomic investment, industrial exports, and sustainable living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTOR_SOLUTIONS.map((sec, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border bg-white shadow-xs hover:shadow-xl transition-all duration-300"
                style={{ borderColor: theme.border }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={sec.image}
                    alt={sec.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/95 via-[#05172A]/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/20">
                    {sec.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-[#10B981] block mb-1">
                      {sec.metric}
                    </span>
                    <h4 className="text-base font-black uppercase leading-snug">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-medium">
                      {sec.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. URBAN LIFECYCLE PROCESS ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Master Concession Roadmap</SectionLabel>
            <SectionHeading center>
              Our 6-Stage Urban Lifecycle Model
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              From raw topography assessment to digital twin municipal governance, our phased methodology ensures risk-free execution and high capital yields.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-2xl border shadow-xs hover:border-[#008080] transition-all duration-300"
                style={{ borderColor: theme.border }}
              >
                <span className="text-2xl sm:text-3xl font-black text-[#008080] block mb-2 font-mono">
                  {step.num}
                </span>
                <h4 className="text-sm sm:text-base font-black uppercase text-[#05172A] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ACCORDION ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Clarity &amp; Institutional Governance</SectionLabel>
            <SectionHeading center>
              Frequently Asked Questions
            </SectionHeading>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border overflow-hidden transition-all bg-white"
                style={{ borderColor: theme.border }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#05172A]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#008080] transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t bg-slate-50/50" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CORPORATE CALL TO ACTION BANNER ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#05172A] via-[#0A2540] to-[#008080] text-white">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20 inline-block text-[#10B981]">
            Build The Future Of Urban Living
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
            Partner With Pakistan&apos;s Leading Smart Metropolis Developer
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Whether you represent a municipal authority commissioning a 10,000-hectare smart city masterplan or an institutional investor seeking commercial land concessions, Neom City Corporation delivers turnkey urban excellence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#05172A] bg-white hover:bg-slate-100 transition-all shadow-lg cursor-pointer"
            >
              Request Masterplan RFP Consultation
            </button>
            <Link
              href="/group-companies/neom-city/contact"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-all cursor-pointer"
            >
              Contact Sovereign Concessions Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DevelopmentDetailModal
        development={selectedDevForModal}
        isOpen={isDevModalOpen}
        onClose={() => {
          setIsDevModalOpen(false);
          setSelectedDevForModal(null);
        }}
      />

      <MasterplanInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      <NeomCityFooter />
    </main>
  );
}