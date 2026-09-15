"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Boxes,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Factory,
  FlaskConical,
  Package,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Snowflake,
  Sparkles,
  TrendingUp,
  Truck,
  Users2,
  UtensilsCrossed,
  ArrowRight,
  Eye,
  Filter,
  X,
  Check,
  Wheat,
  Milk,
  Flame,
  Globe,
  Headphones,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  ProductDetailModal,
  WholesaleInquiryModal,
} from "./components/WaltonFoodShared";
import {
  COMPANY_INFO,
  HERO_SLIDES,
  STATS,
  FOOD_CATEGORIES,
  FOOD_LISTINGS,
  PROCESSING_CAPABILITIES,
  QUALITY_STANDARDS,
  PROCESS_STEPS,
  FAQS,
} from "./walton-food-data";

export default function WaltonFoodHomePage() {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Listing Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals State
  const [activeDetailProduct, setActiveDetailProduct] = useState(null);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState(null);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Auto-advance Slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Filter listings
  const filteredListings = FOOD_LISTINGS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (item.name && item.name.toLowerCase().includes(query)) ||
      (item.category && item.category.toLowerCase().includes(query)) ||
      (item.summary && item.summary.toLowerCase().includes(query)) ||
      (item.packaging && item.packaging.toLowerCase().includes(query)) ||
      (item.origin && item.origin.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const activeSlideData = HERO_SLIDES[currentSlide];

  const handleOpenInquiryFor = (product) => {
    setActiveInquiryProduct(product);
    setIsWholesaleOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#1E6B43] selection:text-white">
      {/* Fixed Navbar (Constrained to max-w-7xl) */}
      <WaltonFoodNavbar onOpenWholesaleModal={() => handleOpenInquiryFor(null)} />

      {/* ─── 1. INTERACTIVE HERO SLIDER HEADER ─── */}
      <section
        className="relative w-full bg-[#061022] overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[560px] sm:h-[620px] lg:h-[700px] w-full">
          {/* Background Images */}
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#061022]/90 via-[#061022]/70 to-[#061022]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061022] via-transparent to-black/20" />
            </div>
          ))}

          {/* Slider Content Container (Constrained max-w-7xl) */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl pt-8 sm:pt-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#1E6B43] text-white shadow-md">
                  <Factory size={13} className="text-[#F3C677]" />
                  <span>{activeSlideData.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 backdrop-blur-md text-[#F3C677] border border-white/20">
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
                  href="#food-listings"
                  className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Master Catalog</span>
                  <ArrowRight size={15} className="text-[#F3C677]" />
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenInquiryFor(null)}
                  className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send size={14} className="text-[#F3C677]" />
                  <span>Request Wholesale Quote</span>
                </button>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-white/15 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#10B981]" />
                  <span>ISO 22000 &amp; HACCP Certified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={16} className="text-[#F3C677]" />
                  <span>100% Halal Verified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Snowflake size={16} className="text-[#38BDF8]" />
                  <span>Sub-Zero -38°C Cryogenic IQF</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe size={16} className="text-[#34D399]" />
                  <span>Exporting to 35+ Countries</span>
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#1E6B43] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#1E6B43] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
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
                  idx === currentSlide ? "w-8 bg-[#1E6B43]" : "w-2 bg-white/40 hover:bg-white/80"
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border bg-emerald-50/20 hover:border-[#1E6B43] transition-all hover:shadow-sm"
                style={{ borderColor: theme.border }}
              >
                <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#134A2D] mb-1">
                  <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. MASTER FOOD LISTINGS BOARD ("listings of each and every type") ─── */}
      <section id="food-listings" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8] border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionLabel center>Comprehensive Food Processing Portfolio</SectionLabel>
            <SectionHeading center>
              Master Product &amp; Food Production Catalog
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Explore our diverse range of export-grade IQF frozen produce, shelf-stable retort ready meals, pasteurized dairy, stone-ground flours, fruit purees, and turnkey private-label supermarket lines.
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
                placeholder="Search food products by name, packaging format, category (e.g. French Fries, Biryani, Butter, Basmati Rice, Mango Puree)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1E6B43]"
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
              {FOOD_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#1E6B43] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter & Reset Button */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-6 px-1">
            <span>
              Showing <strong>{filteredListings.length}</strong> food product &amp; processing listing{filteredListings.length === 1 ? "" : "s"}
            </span>
            {(selectedCategory !== "All" || searchQuery !== "") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-[#1E6B43] font-bold hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Listings Grid */}
          {filteredListings.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border p-8" style={{ borderColor: theme.border }}>
              <Package className="mx-auto text-slate-300 mb-4" size={48} />
              <h3 className="text-lg font-bold text-slate-800 mb-2">No food products matched your search</h3>
              <p className="text-sm text-slate-500 mb-6">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-[#1E6B43] text-white cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Realistic Image */}
                    <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-[#134A2D] shadow-xs">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#D89C46] text-white shadow-xs">
                          {item.badge}
                        </span>
                      </div>

                      {/* Bottom Image Overlay Specs */}
                      <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white flex items-center justify-between text-[11px] font-bold">
                        <span className="text-[#F3C677]">{item.shelfLife}</span>
                        <span className="text-slate-200">{item.origin}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5">
                      <h3 className="text-base sm:text-lg font-black leading-snug text-[#134A2D] mb-2 group-hover:text-[#1E6B43] transition-colors line-clamp-2">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-3">
                        {item.summary}
                      </p>

                      {/* Packaging & MOQ */}
                      <div className="p-3 rounded-xl bg-slate-50 border space-y-1 mb-4" style={{ borderColor: theme.border }}>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-slate-400 uppercase">Packaging:</span>
                          <span className="font-extrabold text-slate-800 text-right truncate max-w-[180px]">{item.packaging}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-slate-400 uppercase">MOQ:</span>
                          <span className="font-black text-[#1E6B43]">{item.moq}</span>
                        </div>
                      </div>

                      {/* Key Features Preview */}
                      <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-400">
                          Quality Highlights:
                        </p>
                        {item.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 size={13} className="text-[#1E6B43] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-5 pt-0 border-t mt-3 pt-3" style={{ borderColor: theme.border }}>
                    <button
                      type="button"
                      onClick={() => handleOpenInquiryFor(item)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={13} className="text-[#F3C677]" />
                      <span>Inquire Supply &amp; Pricing</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── 4. PROCESSING CAPABILITIES & INFRASTRUCTURE ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Industrial Infrastructure</SectionLabel>
            <SectionHeading center>
              High-Speed Manufacturing &amp; Processing Divisions
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Engineered with world-class automated machinery, optical laser sorters, cryogenic IQF tunnels, and counter-pressure retort autoclaves producing over 120,000 metric tons annually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESSING_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="px-3 py-1 rounded-full text-[10.5px] font-black uppercase bg-[#1E6B43] text-white">
                        {cap.metrics}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#134A2D] mb-2.5">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed mb-5">
                      {cap.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.border }}>
                      {cap.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={13} className="text-[#1E6B43] flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleOpenInquiryFor(null)}
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-[#134A2D] hover:bg-emerald-50/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{ borderColor: theme.border }}
                  >
                    <span>Request Technical Dossier</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. 6-STAGE FARM-TO-FORK LIFECYCLE ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8] border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>End-to-End Quality Assurance</SectionLabel>
            <SectionHeading center>
              6-Stage Farm-to-Fork Manufacturing Pathway
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Every single batch is rigorously verified through our certified hygiene protocols, continuous optical scanning, and laboratory testing before global distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl border bg-white shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#1E6B43] transition-all"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-5 shadow-sm" style={{ backgroundColor: theme.green }}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-black text-[#134A2D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. QUALITY STANDARDS & HALAL CERTIFICATIONS ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Global Accreditations</SectionLabel>
            <SectionHeading center>
              International Food Safety &amp; Halal Compliance
            </SectionHeading>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Audited and certified by premier global food safety boards, facilitating seamless export clearance across UK, EU, North America, and GCC jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {QUALITY_STANDARDS.map((std, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border bg-emerald-50/20 text-center flex flex-col justify-between hover:border-[#1E6B43] transition-colors"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#1E6B43]/10 text-[#1E6B43] flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-sm font-black text-[#134A2D] mb-1">{std.name}</h4>
                  <p className="text-[11px] font-bold text-[#D89C46] uppercase mb-2">{std.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INTERACTIVE FAQ ACCORDION ─── */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8] border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center>
              Commercial &amp; Technical Inquiries
            </SectionHeading>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white overflow-hidden shadow-xs transition-colors"
                  style={{ borderColor: theme.border }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-[#134A2D]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#1E6B43] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t pt-3" style={{ borderColor: theme.border }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. B2B WHOLESALE & PRIVATE LABEL CALL TO ACTION ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#061022] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 text-xs font-black uppercase tracking-wider text-[#34D399] bg-emerald-950/40 mb-4">
            <Sparkles size={14} className="text-[#F3C677]" />
            <span>Scale Your Global Food Brand</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-5 leading-tight">
            Partner With Walton &amp; Mirror Food
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Whether you require high-capacity private-label co-packing, bulk IQF frozen vegetable containers, shelf-stable ambient retort meals, or dairy UHT supplies, our commercial team is ready to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenInquiryFor(null)}
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#1E6B43] hover:bg-[#134A2D] transition-all shadow-lg hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Send size={14} className="text-[#F3C677]" />
              <span>Request Wholesale / OEM Quote</span>
            </button>

            <Link
              href="/group-companies/walton-mirror-food/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
            >
              <span>Contact Commercial Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProductDetailModal
        product={activeDetailProduct}
        isOpen={!!activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
        onInquire={(p) => {
          setActiveDetailProduct(null);
          handleOpenInquiryFor(p);
        }}
      />

      <WholesaleInquiryModal
        product={activeInquiryProduct}
        isOpen={isWholesaleOpen}
        onClose={() => {
          setIsWholesaleOpen(false);
          setActiveInquiryProduct(null);
        }}
      />

      {/* Reusable Footer */}
      <WaltonFoodFooter />
    </main>
  );
}