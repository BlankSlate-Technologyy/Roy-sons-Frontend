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
  FileText,
  Globe,
  HardHat,
  Layers,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  Users2,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ExternalLink,
  Maximize2,
  Eye,
  Factory,
  ClipboardList,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/InverseUnionShared";
import {
  COMPANY_INFO,
  SUPPLY_CHAIN_STATS,
  TRADE_CATEGORIES,
  FULL_CATALOG_LISTINGS,
  INCOTERMS_GUIDE,
  SERVICES_LIST,
  SIGNATURE_PROJECTS,
  PROCESS_STEPS,
  FAQS,
} from "./inverse-union-data";

const HERO_SLIDES = [
  {
    image: "/inverseunion/hero_maritime_freight.jpg",
    tag: "Deep-Sea Maritime Container Lines",
    title: "45,000+ Annual TEUs · Tier-1 Carrier Allocations · Global Hubs",
    metric: "12 - 35 Days Reliable Sea Transit",
    href: "/group-companies/inverse&union/solutions",
  },
  {
    image: "/inverseunion/global_sourcing_warehouse.jpg",
    tag: "High-Tech Industrial Sourcing",
    title: "Direct OEM Procurement · 120+ Source Countries · Zero Middlemen",
    metric: "Verified EN 10204 3.2 Inspection",
    href: "/group-companies/inverse&union/solutions",
  },
  {
    image: "/inverseunion/air_cargo_logistics.jpg",
    tag: "Priority Air Cargo Express Charter",
    title: "Boeing 747-8F & 777F Freighters · AOG Flight Critical Spares",
    metric: "24 - 72 Hours Global Touchdown",
    href: "/group-companies/inverse&union/solutions",
  },
  {
    image: "/inverseunion/bulk_commodity_port.jpg",
    tag: "Bulk Agricultural & Industrial Sealift",
    title: "Panamax & Supramax Charters · Grain, Fertilizer & Polymers",
    metric: "250,000 MT National Supply Delivered",
    href: "/group-companies/inverse&union/solutions",
  },
  {
    image: "/inverseunion/cold_chain_pharma.jpg",
    tag: "Validated Pharmaceutical Cold-Chain",
    title: "-80°C Cryogenic & +2°C to +8°C Active Reefer Containers",
    metric: "100% Continuous IoT Temperature Audit",
    href: "/group-companies/inverse&union/solutions",
  },
];

export default function InverseUnionHomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeIncotermTab, setActiveIncotermTab] = useState("CIF");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Auto-play hero slider
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

  // Featured 6 listings for the homepage showcase
  const featuredListings = FULL_CATALOG_LISTINGS.filter((item) => {
    if (selectedCatalogCategory === "All") return true;
    return item.category === selectedCatalogCategory;
  }).slice(0, 6);

  const selectedIncoterm =
    INCOTERMS_GUIDE.find((t) => t.code === activeIncotermTab) || INCOTERMS_GUIDE[0];

  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden selection:bg-[#0080FF] selection:text-white">
      <InverseUnionNavbar />

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
                style={{ color: theme.navyDark }}
              >
                Inverse and Union Trading.{" "}
                <span className="block mt-2" style={{ color: theme.blue }}>
                  International Procurement &amp; Supply Chain.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Welcome to Inverse and Union Trading. We deliver mission-critical global sourcing, multi-modal container logistics, raw material procurement, customs tariff optimization, and structured trade finance across 120+ verified partner nations. Connecting your enterprise directly to verified global manufacturers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <Link
                  href="/group-companies/inverse&union/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore 24+ Sourcing Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/inverse&union/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider border transition-all duration-300 hover:bg-sky-50/60 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request International Trade Quote</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: theme.border }}>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.navyDark }}>
                    99.4%
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.blue }}>
                    OTIF Delivery Rate
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.navyDark }}>
                    120+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.blue }}>
                    Source Countries
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.navyDark }}>
                    $850M+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.blue }}>
                    Trade Delivered
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
                        dotIdx === heroSlideIndex ? "w-6 bg-blue-400" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Bottom Info Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/95 via-[#071A33]/25 to-transparent flex items-end p-5 sm:p-6 z-20 pointer-events-none">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border shadow-xl w-full pointer-events-auto transition-all duration-500"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0080FF] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        {HERO_SLIDES[heroSlideIndex].tag}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold line-clamp-1 sm:line-clamp-none" style={{ color: theme.navyDark }}>
                      {HERO_SLIDES[heroSlideIndex].title}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">{HERO_SLIDES[heroSlideIndex].metric}</span>
                      <Link
                        href={HERO_SLIDES[heroSlideIndex].href}
                        className="font-bold text-[#0080FF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore Catalog</span>
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
        className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SUPPLY_CHAIN_STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div style={{ color: theme.blue }}>
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
            <SectionLabel center>Core Capabilities</SectionLabel>
            <SectionHeading center>Global Procurement &amp; Trade Architecture</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-4" style={{ color: theme.textMuted }}>
              From securing primary mill allocations to multi-modal ocean chartering, we engineer resilient supply chains backed by strict Pre-Shipment Inspection (PSI) and UCP 600 trade finance.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-extrabold uppercase tracking-widest text-white bg-[#0B2545]/90 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.id.replace("-", " ")}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2.5" style={{ color: theme.navyDark }}>
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-5" style={{ color: theme.textMuted }}>
                      {service.desc}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-4 border-t" style={{ borderColor: theme.border }}>
                      {service.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold" style={{ color: theme.navyDark }}>
                          <CheckCircle2 size={13} style={{ color: theme.blue }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/group-companies/inverse&union/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0080FF] hover:underline"
                  >
                    <span>Full Service Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE CATALOG SHOWCASE WITH QUICK-VIEW MODAL ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionLabel>24+ Sourcing &amp; Trade Solutions</SectionLabel>
              <SectionHeading>Featured Procurement Programs</SectionHeading>
              <p className="text-sm font-medium mt-2 max-w-xl" style={{ color: theme.textMuted }}>
                Explore international procurement listings with origin verification, Incoterms parameters, and independent quality inspections.
              </p>
            </div>
            <Link
              href="/group-companies/inverse&union/solutions"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0080FF] hover:underline"
            >
              <span>View All 24+ Solutions</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {TRADE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCatalogCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCatalogCategory === cat
                    ? "bg-[#0B2545] text-white shadow-sm"
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
                  <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.compliance}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0080FF]">
                      {item.origin}
                    </span>
                    <h4 className="text-base font-black uppercase tracking-tight mt-1 mb-2 line-clamp-1" style={{ color: theme.navyDark }}>
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] py-2.5 px-3 rounded-lg bg-sky-50/50 mb-4">
                      <div>
                        <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Incoterm</span>
                        <span className="font-bold text-[#071A33]">{item.incoterm}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Lead Time</span>
                        <span className="font-bold text-[#071A33]">{item.leadTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href="/group-companies/inverse&union/contact"
                      className="w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#0080FF] hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-1.5 text-center"
                    >
                      <span>Inquire</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. INCOTERMS 2020 TRADE GUIDE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Commercial Framework</SectionLabel>
            <SectionHeading center>ICC Incoterms 2020 Commercial Trade Guide</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Transparent risk transfer and logistics allocation. We structure contracts under standard International Chamber of Commerce rules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {INCOTERMS_GUIDE.map((term) => (
                <button
                  key={term.code}
                  onClick={() => setActiveIncotermTab(term.code)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    activeIncotermTab === term.code
                      ? "bg-[#0B2545] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <span className="text-sm font-black uppercase tracking-tight block">
                      {term.code} — {term.name}
                    </span>
                    <span className={`text-xs font-medium ${activeIncotermTab === term.code ? "text-sky-200" : "text-slate-500"}`}>
                      Named Place: {term.namedPlace}
                    </span>
                  </div>
                  <ChevronRight size={16} className={activeIncotermTab === term.code ? "text-sky-300" : "text-slate-400"} />
                </button>
              ))}
            </div>

            {/* Right Details Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#0080FF]">
                  ICC Official Rules 2020
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Global Legal Enforceability
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navyDark }}>
                {selectedIncoterm.code} — {selectedIncoterm.name} ({selectedIncoterm.namedPlace})
              </h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-1">
                    Seller (Inverse &amp; Union) Responsibility
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {selectedIncoterm.sellerResponsibility}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                    Buyer Responsibility
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {selectedIncoterm.buyerResponsibility}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-1">
                    Best Applied For &amp; Risk Transfer Point
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {selectedIncoterm.bestFor} <strong>Transfer:</strong> {selectedIncoterm.riskTransfer}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: theme.border }}>
                <span className="font-semibold text-slate-500">
                  Ready to draft commercial contract terms under {selectedIncoterm.code}?
                </span>
                <Link
                  href="/group-companies/inverse&union/contact"
                  className="font-bold text-[#0080FF] hover:underline flex items-center gap-1"
                >
                  <span>Request Proforma Invoice</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. TURNKEY 6-STEP PROCUREMENT PIPELINE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Methodology</SectionLabel>
            <SectionHeading center>6-Step Global Procurement Pipeline</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              From supplier factory audit to door-to-door bonded delivery, every consignment is protected by international quality inspections and marine insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-3xl border bg-white hover:border-[#0080FF] transition-colors group relative"
                style={{ borderColor: theme.border }}
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0080FF] font-black text-base flex items-center justify-center mb-5 group-hover:bg-[#0080FF] group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h4 className="text-base font-black uppercase tracking-tight mb-2" style={{ color: theme.navyDark }}>
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

      {/* ─── 7. SIGNATURE CASE STUDIES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <SectionLabel>Global Track Record</SectionLabel>
              <SectionHeading>Signature Supply Chain Operations</SectionHeading>
              <p className="text-sm font-medium mt-2 max-w-xl" style={{ color: theme.textMuted }}>
                Over $850M in executed trade volume delivering heavy capital machinery, food security grains, and priority healthcare airlifts.
              </p>
            </div>
            <Link
              href="/group-companies/inverse&union/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0080FF] hover:underline"
            >
              <span>Explore All Operations</span>
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
                  <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {proj.origin}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0080FF]">
                      {proj.category}
                    </span>
                    <h4 className="text-lg font-black uppercase tracking-tight mt-1 mb-2" style={{ color: theme.navyDark }}>
                      {proj.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mb-5 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs py-3 px-3 rounded-xl bg-sky-50/50 mb-5">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Trade Volume</span>
                        <span className="font-bold text-[#071A33]">{proj.volume}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Consignment</span>
                        <span className="font-bold text-[#071A33]">{proj.teus}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/group-companies/inverse&union/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0080FF] hover:underline"
                  >
                    <span>Read Operation Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. TRADE CONSULTATION & QUOTE GENERATOR ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Trade Desk</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navyDark }}>
                Request International Procurement &amp; Freight Feasibility
              </h2>
              <p className="text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Whether you need to import complex industrial capital machinery, charter bulk ocean commodity vessels, or structure an international Letter of Credit (LC), our global trade specialists will prepare a comprehensive landed-cost proforma.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Direct OEM factory pricing across 120+ verified countries",
                  "Certified third-party pre-shipment inspection (SGS / TUV)",
                  "Multi-modal ocean, air charter, and overland customs clearance",
                  "UCP 600 compliant trade finance, LC structuring, and currency hedging",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold" style={{ color: theme.navyDark }}>
                    <CheckCircle2 size={16} style={{ color: theme.blue }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl border bg-sky-50/50 text-xs font-bold flex items-center justify-between" style={{ borderColor: theme.border }}>
                <span style={{ color: theme.navyDark }}>Direct Trade Desk: +92 (51) 844-3150</span>
                <span className="text-[#0080FF]">24-Hour International Proforma Dispatch</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border shadow-xl bg-white" style={{ borderColor: theme.border }}>
              <h3 className="text-lg font-black uppercase tracking-tight mb-1" style={{ color: theme.navyDark }}>
                Trade Quote Request
              </h3>
              <p className="text-xs text-slate-500 mb-6">Submit details regarding your commodity or cargo to receive an initial landed-cost quote within 24 hours.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Inverse and Union Trading's commercial trade desk will contact you within 24 hours."); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Contact Person</label>
                    <input type="text" required placeholder="Full Name" className="w-full text-xs p-3 rounded-xl border focus:outline-[#0080FF]" style={{ borderColor: theme.border }} />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Company / Entity</label>
                    <input type="text" required placeholder="Corporate Name" className="w-full text-xs p-3 rounded-xl border focus:outline-[#0080FF]" style={{ borderColor: theme.border }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Email Address</label>
                    <input type="email" required placeholder="trade@company.com" className="w-full text-xs p-3 rounded-xl border focus:outline-[#0080FF]" style={{ borderColor: theme.border }} />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Phone / WhatsApp</label>
                    <input type="tel" required placeholder="+92 300 1234567" className="w-full text-xs p-3 rounded-xl border focus:outline-[#0080FF]" style={{ borderColor: theme.border }} />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Trade Discipline Required</label>
                  <select className="w-full text-xs p-3 rounded-xl border bg-white focus:outline-[#0080FF]" style={{ borderColor: theme.border }}>
                    <option>Industrial Machinery &amp; Capital Equipment</option>
                    <option>Bulk Commodities &amp; Raw Materials (Grains/Urea/Polymers)</option>
                    <option>Global Multi-Modal Ocean &amp; Air Freight Logistics</option>
                    <option>Pharmaceutical &amp; Cold-Chain Sourcing (APIs)</option>
                    <option>Strategic Government &amp; Defense Procurement</option>
                    <option>Trade Finance &amp; Letter of Credit (LC) Structuring</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-slate-600">Cargo Specifications, Desired Incoterm &amp; Destination</label>
                  <textarea rows={3} placeholder="Specify estimated volume, HS Code (if known), preferred Incoterm (e.g. CIF Karachi or DDP Lahore), and target delivery timeframe..." className="w-full text-xs p-3 rounded-xl border focus:outline-[#0080FF]" style={{ borderColor: theme.border }} />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer flex items-center justify-center gap-2"
                  style={{ backgroundColor: theme.blue }}
                >
                  <Send size={14} />
                  <span>Submit Trade Quote Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Trade FAQs</SectionLabel>
            <SectionHeading center>Frequently Asked Questions</SectionHeading>
            <p className="text-sm font-medium mt-3" style={{ color: theme.textMuted }}>
              Learn more about our Incoterms coverage, Letters of Credit, quality inspections, and shipping tracking.
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
                  style={{ color: theme.navyDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-[#0080FF] ${openFaq === idx ? "rotate-180" : ""}`}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
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
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 bg-sky-50 px-2.5 py-1 rounded-md">
                {activeModalItem.sku}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {activeModalItem.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navyDark }}>
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
              <h4 className="text-xs font-black uppercase tracking-wider mb-2.5" style={{ color: theme.navyDark }}>
                Key Procurement Deliverables
              </h4>
              <ul className="space-y-1.5">
                {activeModalItem.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={13} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border mb-6" style={{ borderColor: theme.border }}>
              <h4 className="text-xs font-black uppercase tracking-wider mb-2 text-slate-700">
                Commercial &amp; Technical Parameters
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
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty / Assurance</span>
                <span className="text-xs font-bold text-blue-900">{activeModalItem.warranty}</span>
              </div>
              <Link
                href="/group-companies/inverse&union/contact"
                onClick={() => setActiveModalItem(null)}
                className="py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Proforma Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <InverseUnionFooter />
    </main>
  );
}