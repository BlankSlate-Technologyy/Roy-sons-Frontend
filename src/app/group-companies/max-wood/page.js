"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Hammer,
  Home,
  Layers,
  MapPin,
  Palette,
  Phone,
  Ruler,
  Search,
  Send,
  ShieldCheck,
  Sofa,
  Sparkles,
  Users2,
  Utensils,
  ArrowRight,
  Eye,
  TreePine,
  Check,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxWoodShared";
import {
  COMPANY_INFO,
  TIMBER_SPECIES,
  SERVICES_LIST,
  FULL_CATALOG_LISTINGS,
  SIGNATURE_PROJECTS,
  PROCESS_STEPS,
  FAQS,
} from "./max-wood-data";

const HERO_SLIDES = [
  {
    image: "/maxwood/hero_living.jpg",
    tag: "Signature Living Room Suite",
    title: "Solid American Walnut · 3D Fluted Wall Slats · Italian PU",
    metric: "1,500+ Projects Completed",
    href: "/group-companies/max-wood/solutions",
  },
  {
    image: "/maxwood/executive_boardroom.jpg",
    tag: "Corporate Executive Boardroom",
    title: "20-Seater Burl Walnut Table · Inductive Wireless Charging",
    metric: "450+ Corporate Fitouts",
    href: "/group-companies/max-wood/solutions",
  },
  {
    image: "/maxwood/modular_kitchen.jpg",
    tag: "Haute Modular Kitchen",
    title: "Smoked European Oak · Calacatta Marble Waterfall Island",
    metric: "German Blum Dynamic Motion",
    href: "/group-companies/max-wood/solutions",
  },
  {
    image: "/maxwood/dining_suite.jpg",
    tag: "Bespoke Dining Architecture",
    title: "12-Seater Solid Oak Suite · Hand-Carved Artisan Joinery",
    metric: "10-Year Structural Warranty",
    href: "/group-companies/max-wood/solutions",
  },
  {
    image: "/maxwood/hospitality_lounge.jpg",
    tag: "Luxury Hospitality Suite",
    title: "Curved Banquettes · Perimeter LED Acoustic Cladding",
    metric: "5-Star Hotel Fitouts",
    href: "/group-companies/max-wood/solutions",
  },
];

export default function MaxWoodHomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeTimberTab, setActiveTimberTab] = useState("american-walnut");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

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

  const selectedTimber =
    TIMBER_SPECIES.find((t) => t.id === activeTimberTab) || TIMBER_SPECIES[0];

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden selection:bg-[#BA7A3E] selection:text-white">
      <MaxWoodNavbar />

      {/* ─── 1. HERO SECTION (LUXURY ARCHITECTURAL TIMBER RESIDENCE) ─── */}
      <section
        className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-black tracking-tight leading-[1.14] uppercase mb-6"
                style={{ color: theme.darkWood }}
              >
                <span className="inline-block whitespace-nowrap">MAX Wood Corporation.</span>{" "}
                <span className="block mt-2" style={{ color: theme.primary }}>
                  Crafting Spaces of Distinction.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Welcome to MAX Wood Corporation. We design, manufacture, and install bespoke luxury furniture, corporate executive interiors, 5-star hospitality fitouts, and precision wood-based architectural solutions. Handcrafted from kiln-dried solid hardwoods with German 5-axis CNC precision.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <Link
                  href="/group-companies/max-wood/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore 24+ Catalog Listings</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-wood/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider border transition-all duration-300 hover:bg-amber-50/60 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkWood }}
                >
                  <span>Book Interior Consultation</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: theme.border }}>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkWood }}>
                    8% MC
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.goldHover }}>
                    Kiln-Dried Hardwood
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkWood }}>
                    5-Axis CNC
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.goldHover }}>
                    German Precision
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black block" style={{ color: theme.darkWood }}>
                    10-Year
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.goldHover }}>
                    Structural Warranty
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
                        dotIdx === heroSlideIndex ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Bottom Info Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/95 via-[#21140A]/25 to-transparent flex items-end p-5 sm:p-6 z-20 pointer-events-none">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border shadow-xl w-full pointer-events-auto transition-all duration-500"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BA7A3E] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        {HERO_SLIDES[heroSlideIndex].tag}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold line-clamp-1 sm:line-clamp-none" style={{ color: theme.darkWood }}>
                      {HERO_SLIDES[heroSlideIndex].title}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">{HERO_SLIDES[heroSlideIndex].metric}</span>
                      <Link
                        href={HERO_SLIDES[heroSlideIndex].href}
                        className="font-bold text-[#5C3A21] hover:underline flex items-center gap-1 cursor-pointer"
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
        className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Award, value: "25+", label: "Years of Woodcraft\nExcellence" },
              { icon: Home, value: "1500+", label: "Turnkey Projects\nDelivered" },
              { icon: Sofa, value: "500+", label: "Signature Furniture\nDesigns" },
              { icon: Users2, value: "250+", label: "Master Craftsmen &\nInterior Architects" },
              { icon: Compass, value: "30+", label: "Cities Served\nNationwide" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-4 p-4 rounded-2xl border bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.gold}25`, color: theme.primary }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <div style={{ color: theme.darkWood }}>
                      <AnimatedCounter targetValue={stat.value} />
                    </div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line leading-tight mt-0.5"
                      style={{ color: theme.textLight }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. CORE SERVICES VERTICALS (6 CARDS WITH REALISTIC IMAGES) ─── */}
      <section
        id="services"
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <SectionLabel center>Our Core Craft Disciplines</SectionLabel>
            <SectionHeading center>Furniture Manufacturing &amp; Interior Solutions</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              From initial architectural sketches and 3D photorealistic renderings to in-house timber fabrication and white-glove on-site assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_LIST.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Realistic Image Thumbnail */}
                    <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10.5px] font-black uppercase tracking-widest bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[#5C3A21] shadow-xs">
                          {srv.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: theme.primary }}
                        >
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-lg sm:text-xl font-black leading-snug mb-2 group-hover:text-[#BA7A3E] transition-colors"
                        style={{ color: theme.darkWood }}
                      >
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {srv.desc}
                      </p>

                      {/* Deliverables Checklist */}
                      <ul className="space-y-2 pt-3 border-t" style={{ borderColor: theme.border }}>
                        {srv.deliverables.slice(0, 3).map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 size={14} className="text-[#BA7A3E] shrink-0 mt-0.5" />
                            <span className="leading-tight">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/group-companies/max-wood/services#${srv.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#5C3A21] hover:text-[#BA7A3E] transition-colors"
                    >
                      <span>Explore Technical Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE LISTINGS CATALOG SHOWCASE ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6" data-aos="fade-up">
            <div>
              <SectionLabel>Furniture &amp; Interior Listings</SectionLabel>
              <SectionHeading>Featured Collections &amp; Architectural Pieces</SectionHeading>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2">
                Click on any piece to inspect detailed joinery, timber species, hardware, and dimensions.
              </p>
            </div>
            <Link
              href="/group-companies/max-wood/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xs transition-all hover:opacity-95 self-start md:self-auto shrink-0"
              style={{ backgroundColor: theme.primary }}
            >
              <span>View All 24+ Catalog Listings</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
            {["All", "Living & Lounge", "Executive Office", "Dining & Hospitality", "Bedroom Suites", "Architectural Paneling", "Modular Kitchens"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCatalogCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedCatalogCategory === cat
                      ? "text-white shadow-xs"
                      : "bg-white text-slate-700 border hover:bg-amber-50/50"
                  }`}
                  style={{
                    backgroundColor: selectedCatalogCategory === cat ? theme.primary : undefined,
                    borderColor: theme.border,
                  }}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Grid of Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((item, idx) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/80 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-2.5 py-1 rounded-full text-[#5C3A21] shadow-xs">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-[#21140A]/80 text-amber-200 px-2.5 py-0.5 rounded-full">
                        {item.sku}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3
                      className="text-base sm:text-lg font-black leading-snug mb-2 group-hover:text-[#BA7A3E] transition-colors"
                      style={{ color: theme.darkWood }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t text-xs" style={{ borderColor: theme.border }}>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Timber:</span>
                        <span className="font-semibold text-slate-800 text-right truncate max-w-[200px]">{item.timber}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Warranty:</span>
                        <span className="font-bold text-emerald-700">{item.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-50 hover:bg-[#5C3A21] text-[#5C3A21] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Eye size={14} />
                    <span>Quick View Specs</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TIMBER & MATERIAL LABORATORY (INTERACTIVE GUIDE) ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <SectionLabel center>The Science of Fine Woodcraft</SectionLabel>
            <SectionHeading center>Premium Sustainable Hardwoods &amp; Finishes</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Every tree species exhibits distinct acoustic, structural, and grain characteristics. We carefully select, kiln-dry, and formulate finishes for lifelong performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Timber Species Selector Tabs */}
            <div className="lg:col-span-4 space-y-2.5" data-aos="fade-right">
              {TIMBER_SPECIES.map((spec) => {
                const active = spec.id === activeTimberTab;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setActiveTimberTab(spec.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      active
                        ? "bg-amber-50/80 border-[#BA7A3E] shadow-xs"
                        : "bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <h4
                        className="text-sm font-black uppercase tracking-wider"
                        style={{ color: active ? theme.primary : theme.darkWood }}
                      >
                        {spec.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">{spec.origin}</span>
                    </div>
                    <ChevronRight
                      size={18}
                      className={active ? "text-[#BA7A3E] translate-x-1" : "text-slate-300"}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Timber Deep Dive Card */}
            <div
              className="lg:col-span-8 p-7 sm:p-9 rounded-3xl border bg-[#FDFBF7] shadow-sm"
              style={{ borderColor: theme.border }}
              data-aos="fade-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b gap-3" style={{ borderColor: theme.border }}>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#BA7A3E]">
                    Hardwood Profile
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight" style={{ color: theme.darkWood }}>
                    {selectedTimber.name}
                  </h3>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white border border-amber-200 text-xs font-black text-[#5C3A21] self-start">
                  Janka Hardness: {selectedTimber.jankaHardness}
                </div>
              </div>

              <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700 mb-6">
                {selectedTimber.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Color Profile
                  </span>
                  <span className="font-bold text-slate-800 leading-snug block">
                    {selectedTimber.colorProfile}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Grain Pattern
                  </span>
                  <span className="font-bold text-slate-800 leading-snug block">
                    {selectedTimber.grain}
                  </span>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                  <span className="font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Ideal Architectural Applications
                  </span>
                  <span className="font-bold text-slate-800 leading-snug block">
                    {selectedTimber.applications}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. 6-STEP PROVEN TURNKEY PROCESS ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <SectionLabel center>Seamless Turnkey Execution</SectionLabel>
            <SectionHeading center>From Conceptual Sketch to White-Glove Handover</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Our transparent 6-stage engineering and fabrication pipeline guarantees millimeter accuracy and zero punch-list handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="p-7 rounded-3xl border bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black font-mono text-[#D4A373]">
                        {step.num}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs"
                        style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                      >
                        <StepIcon size={20} />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-black mb-2" style={{ color: theme.darkWood }}>
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. SIGNATURE PROJECTS SHOWCASE ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
            <div>
              <SectionLabel>Portfolio of Distinction</SectionLabel>
              <SectionHeading>Signature Completed Projects</SectionHeading>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2">
                Explore residential mega-villas, luxury mountain resorts, and executive commercial headquarters.
              </p>
            </div>
            <Link
              href="/group-companies/max-wood/projects"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#5C3A21] hover:text-[#BA7A3E] transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SIGNATURE_PROJECTS.slice(0, 3).map((proj, idx) => (
              <div
                key={proj.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="rounded-3xl border bg-[#FDFBF7] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-3 py-1 rounded-full text-[#5C3A21]">
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#BA7A3E] font-bold mb-2">
                      <MapPin size={13} />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black leading-snug mb-2" style={{ color: theme.darkWood }}>
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {proj.scope}
                    </p>

                    <div className="p-3 rounded-xl bg-white border text-xs text-slate-700" style={{ borderColor: theme.border }}>
                      <strong className="text-[#5C3A21] block mb-0.5">Scale &amp; Impact:</strong>
                      {proj.scale}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    href="/group-companies/max-wood/projects"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#5C3A21] hover:text-[#BA7A3E]"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. INTERACTIVE PROJECT ESTIMATOR & INQUIRY FORM ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div
            data-aos="fade-up"
            className="rounded-3xl p-8 sm:p-12 border shadow-xl bg-white grid lg:grid-cols-12 gap-10 items-center"
            style={{ borderColor: theme.border }}
          >
            <div className="lg:col-span-6 space-y-4">
              <SectionLabel>Start Your Bespoke Woodcraft Journey</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight" style={{ color: theme.darkWood }}>
                Request an Architectural &amp; Furniture Consultation
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
                Whether you are outfitting a luxury residential villa, corporate headquarters, or boutique hospitality resort, our master joinery team provides complimentary spatial assessments and 3D concept proposals.
              </p>

              <div className="space-y-2.5 pt-4">
                {[
                  "Complimentary spatial site survey & 3D visualization",
                  "Direct access to master carpenters and interior architects",
                  "Material sample kit delivered directly to your office or home",
                  "10-Year structural frame guarantee on all solid wood collections",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#FDFBF7] border" style={{ borderColor: theme.border }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your consultation request has been received. Our senior interior architect will contact you within 24 hours.");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                      style={{ borderColor: theme.border }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                      style={{ borderColor: theme.border }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                      Project Type
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                      style={{ borderColor: theme.border }}
                    >
                      <option>Luxury Residential Villa</option>
                      <option>Corporate Office / Boardroom</option>
                      <option>Hospitality Resort / Restaurant</option>
                      <option>Custom Dining / Living Furniture</option>
                      <option>Acoustic Wall Paneling</option>
                      <option>Modular Kitchen &amp; Wardrobes</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                      Preferred Timber
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                      style={{ borderColor: theme.border }}
                    >
                      <option>American Black Walnut</option>
                      <option>Burma Teak</option>
                      <option>European White Oak</option>
                      <option>Indigenous Seasoned Sheesham</option>
                      <option>Expert Recommendation Required</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Islamabad, Lahore, Karachi, Peshawar, Murree"
                    className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                    style={{ borderColor: theme.border }}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">
                    Brief Requirements / Spatial Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your space, timeline, or specific custom furniture requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-[#BA7A3E]"
                    style={{ borderColor: theme.border }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Send size={15} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) ─── */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <SectionLabel center>Clarity &amp; Confidence</SectionLabel>
            <SectionHeading center>Frequently Asked Questions</SectionHeading>
            <p className="text-sm sm:text-base font-medium mt-3" style={{ color: theme.textMuted }}>
              Insights into our timber kiln-drying technology, bespoke customization, warranties, and turnkey site installation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="rounded-2xl border bg-white overflow-hidden transition-all duration-200"
                  style={{ borderColor: theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer transition-colors"
                    style={{ color: isOpen ? theme.primary : theme.darkWood }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#BA7A3E]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-5 pb-5 pt-0 text-xs sm:text-sm font-medium leading-relaxed border-t pt-3"
                      style={{ color: theme.textMuted, borderColor: theme.border }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. QUICK-VIEW MODAL FOR FURNITURE LISTINGS ─── */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#21140A]/85 text-amber-200 text-[10px] font-mono px-3 py-1 rounded-full">
                {activeModalItem.sku}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#BA7A3E]">
                {activeModalItem.category} • {activeModalItem.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1" style={{ color: theme.darkWood }}>
                {activeModalItem.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                {activeModalItem.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border text-xs mb-5" style={{ borderColor: theme.border }}>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Timber Species</strong>
                <span className="font-bold text-slate-800">{activeModalItem.timber}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Surface Finish</strong>
                <span className="font-bold text-slate-800">{activeModalItem.finish}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Dimensions</strong>
                <span className="font-bold text-slate-800">{activeModalItem.dimensions}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Hardware &amp; Joinery</strong>
                <span className="font-bold text-slate-800">{activeModalItem.hardware}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Structural Warranty</strong>
                <span className="font-bold text-emerald-700">{activeModalItem.warranty}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Production Lead Time</strong>
                <span className="font-bold text-slate-800">{activeModalItem.leadTime}</span>
              </div>
            </div>

            <div className="mb-6">
              <strong className="text-xs font-black uppercase tracking-wider text-[#5C3A21] block mb-2">
                Key Engineering Highlights:
              </strong>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeModalItem.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#BA7A3E] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t" style={{ borderColor: theme.border }}>
              <Link
                href="/group-companies/max-wood/contact"
                onClick={() => setActiveModalItem(null)}
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 text-center shadow-xs cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Inquire About This Piece</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setActiveModalItem(null)}
                className="py-3 px-5 rounded-xl text-xs font-bold border hover:bg-slate-50 text-slate-700 cursor-pointer"
                style={{ borderColor: theme.border }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── 11. FOOTER ─── */}
      <MaxWoodFooter />
    </main>
  );
}
