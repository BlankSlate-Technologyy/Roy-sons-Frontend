"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  Hammer,
  Headphones,
  Home as HomeIcon,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  Users,
  Users2,
  Zap,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  Check,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  PropertyInquiryModal,
  PropertyDetailModal,
} from "./components/SwissHomesShared";
import {
  HERO_SLIDES,
  PROPERTY_LISTINGS,
  REAL_ESTATE_SERVICES,
  QUALITY_PILLARS,
} from "./swiss-homes-data";

const STATS = [
  { icon: Building2, value: "30+", label: "Years Real Estate\nExcellence" },
  { icon: Hammer, value: "200+", label: "Successfully Completed\nProjects" },
  { icon: Users2, value: "25K+", label: "Residential &\nCommercial Units" },
  { icon: User, value: "150+", label: "Architects &\nCivil Engineers" },
  { icon: Award, value: "98%", label: "Client Satisfaction\nRating" },
];

const CATEGORIES = [
  "All",
  "Residential Villas",
  "Luxury Apartments",
  "Gated Communities",
  "Country Farmhouses",
  "Commercial Plazas",
  "Smart Townhouses",
];

const FAQS = [
  {
    q: "What types of real estate projects does Swiss Home develop?",
    a: "Swiss Home develops turnkey luxury residential villas (5 Marla to 2 Kanal), luxury high-rise apartment towers and penthouses, master-planned gated housing societies, country agro farmhouses, and prime commercial corporate plazas across Lahore, Islamabad, and Rawalpindi.",
  },
  {
    q: "Are Swiss Home housing societies and projects legally approved?",
    a: "Yes. All Swiss Home master developments, gated societies, and commercial towers possess 100% legal approvals and No Objection Certificates (NOCs) from relevant regulatory authorities including Lahore Development Authority (LDA), Capital Development Authority (CDA), and Cantonment Boards.",
  },
  {
    q: "Do you offer flexible installment plans for villas and plots?",
    a: "Yes. We offer flexible 18 to 36-month interest-free installment plans with as low as 10% to 25% down payment. Bank home financing is also pre-approved through premier financial institutions for up to 20 years.",
  },
  {
    q: "Can overseas Pakistanis purchase and manage properties remotely?",
    a: "Absolutely. Swiss Home has a dedicated Overseas Client Liaison Desk offering digital virtual video walkthroughs, secure international wire transfers, embassy-attested power of attorney facilitation, and guaranteed rental management programs.",
  },
  {
    q: "How can I schedule a private site visit to a villa or housing sector?",
    a: "You can click the 'Inquire Property' button to select your preferred date, or contact our Senior Property Relationship Desk at 0092-42-38924737 / WhatsApp at 0092-304-7527498. Chauffeur-driven site visits can be arranged from our Lahore or Islamabad offices.",
  },
];

export default function SwissHomesHomePage() {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modal State
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPropertyForInquiry, setSelectedPropertyForInquiry] = useState(null);
  const [activeDetailProperty, setActiveDetailProperty] = useState(null);

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

  // Filtering & Sorting
  const filteredProperties = PROPERTY_LISTINGS.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.priceNum - b.priceNum;
    if (sortBy === "price-high") return b.priceNum - a.priceNum;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleOpenInquiryFor = (property) => {
    setSelectedPropertyForInquiry(property);
    setIsInquiryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#1F2937] font-sans antialiased overflow-x-hidden">
      {/* Reusable Navbar constrained to max-w-7xl mx-auto */}
      <SwissHomesNavbar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* ─── Header Hero Slider Section ("header ma slider lagna ha") ─── */}
      <section
        className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] bg-slate-900 overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Realistic Photo */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className={`object-cover transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />

              {/* Gradient Scrims for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-transparent to-black/30" />

              {/* Slide Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-2xl text-white">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#B01B2E]">
                    <Sparkles size={14} className="text-[#B01B2E]" />
                    <span className="text-white">{slide.badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed mb-8 drop-shadow-xs">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setIsInquiryOpen(true)}
                      className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl hover:opacity-95 hover:scale-102 transition-all duration-300 cursor-pointer flex items-center gap-2"
                      style={{ backgroundColor: theme.red }}
                    >
                      <HomeIcon size={16} />
                      <span>Schedule Site Tour</span>
                    </button>

                    <a
                      href="#listings"
                      className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-xs flex items-center gap-2"
                    >
                      <span>Browse All Properties</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Controls: Prev / Next */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide
                  ? "w-8 bg-[#B01B2E]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Fast Property Search & Consultation Bar ─── */}
      <section className="bg-slate-50 border-b py-4 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border p-4 sm:p-5 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4" style={{ borderColor: theme.border }}>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#B01B2E]/10 flex items-center justify-center text-[#B01B2E] flex-shrink-0">
                <HomeIcon size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Direct Real Estate Sales Desk
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Smart Villas · High-Rise Penthouses · Gated Societies · 100% Legal Title
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck size={14} />
                <span>Book Site Walkthrough</span>
              </button>
              <a
                href="tel:00924238924737"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: theme.border }}
              >
                <Phone size={14} className="text-[#B01B2E]" />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers / Stats Counter Section ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs hover:shadow-md transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#B01B2E]/5 group-hover:bg-[#B01B2E]/15 transition-colors">
                    <Icon size={22} style={{ color: theme.red }} />
                  </div>
                  <div className="mb-1 text-slate-900">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* ─── Comprehensive Property Listings Section ("Listings of each and every type") ─── */}
      <section id="listings" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Premier Real Estate Portfolio</SectionLabel>
            <SectionHeading className="mb-4">
              Explore Available Properties &amp; <span style={{ color: theme.red }}>Developments</span>
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
              Discover turnkey luxury villas, skyline duplex penthouses, approved gated housing society sectors, countryside farmhouses, and prime commercial plots on flexible payment schedules.
            </p>
          </div>

          {/* Search & Filters Toolbar */}
          <div className="bg-white rounded-3xl border p-4 sm:p-6 mb-10 shadow-sm" style={{ borderColor: theme.border }}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 pb-6 border-b" style={{ borderColor: theme.border }}>
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by villa name, city, location, or plot size..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-slate-50/60"
                  style={{ borderColor: theme.border }}
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
                <SlidersHorizontal size={16} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-500 uppercase">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#B01B2E]"
                  style={{ borderColor: theme.border }}
                >
                  <option value="featured">Featured Developments</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-[#B01B2E] text-white shadow-md"
                        : "bg-slate-50 border text-slate-700 hover:border-[#B01B2E] hover:bg-white"
                    }`}
                    style={{ borderColor: active ? theme.red : theme.border }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Property Cards Grid */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border" style={{ borderColor: theme.border }}>
              <HomeIcon className="mx-auto text-slate-300 mb-3" size={48} />
              <h4 className="text-lg font-bold text-slate-800 mb-2">No properties matched your criteria</h4>
              <p className="text-sm text-slate-500 mb-6">Try clearing your keywords or choosing another category.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase bg-[#B01B2E] text-white cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Realistic Photo Image Card */}
                    <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-white/95 text-[#1F2937] shadow-sm">
                          {prop.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#B01B2E] text-white shadow-xs">
                          {prop.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">
                          {prop.status}
                        </span>
                        <span className="text-xs font-bold text-slate-200">
                          {prop.area}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#B01B2E]" />
                        <span>{prop.location}</span>
                      </div>

                      <h3 className="text-lg font-black leading-snug text-slate-900 mb-2 group-hover:text-[#B01B2E] transition-colors">
                        {prop.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5 line-clamp-3">
                        {prop.summary}
                      </p>

                      {/* Features Preview */}
                      {prop.features && (
                        <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                          <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                            Key Features:
                          </p>
                          {prop.features.slice(0, 3).map((f, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                              <CheckCircle2 size={13} className="text-[#B01B2E] flex-shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="p-6 pt-0 border-t mt-4" style={{ borderColor: theme.border }}>
                    <div className="flex items-baseline justify-between py-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Asking Price / Booking</span>
                        <p className="text-base font-black text-[#B01B2E]">{prop.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setActiveDetailProperty(prop)}
                        className="flex-1 py-2.5 rounded-xl border text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <Eye size={13} />
                        <span>Specs</span>
                      </button>
                      <button
                        onClick={() => handleOpenInquiryFor(prop)}
                        className="flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <HomeIcon size={13} />
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Core Real Estate & Housing Services ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Turnkey Solutions</SectionLabel>
            <SectionHeading className="mb-4">
              Real Estate Development &amp; <span style={{ color: theme.red }}>Civil Engineering</span>
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
              We design, develop, and construct sustainable master communities and high-value properties that appreciate over generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_ESTATE_SERVICES.map((s) => (
              <div
                key={s.id}
                className="rounded-3xl border p-8 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#B01B2E]/10 flex items-center justify-center text-[#B01B2E] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <HomeIcon size={26} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#B01B2E] block mb-1">
                    {s.metrics}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[#B01B2E] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-6">
                    {s.desc}
                  </p>
                </div>

                <Link
                  href={s.link}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-900 hover:text-[#B01B2E] transition-colors pt-4 border-t"
                  style={{ borderColor: theme.border }}
                >
                  <span>Explore Service</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Pillars / Swiss Construction Standard ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-[#B01B2E] mb-4">
                <ShieldCheck size={14} className="text-red-400" />
                <span className="text-white">The Swiss Benchmark</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
                Engineered For Generational Security &amp; Capital Growth
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-8">
                Every Swiss Home community is built upon four non-negotiable fundamentals: underground walk-in utility tunnels, seismic-engineered structures, solar microgrids, and 100% legal regulatory titles.
              </p>

              <button
                onClick={() => setIsInquiryOpen(true)}
                className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xl hover:opacity-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
                style={{ backgroundColor: theme.red }}
              >
                <CalendarCheck size={16} />
                <span>Consult Our Planning Desk</span>
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {QUALITY_PILLARS.map((col) => (
                <div
                  key={col.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B01B2E]/20 flex items-center justify-center text-red-400 mb-4">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-base font-black mb-2 text-white">{col.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel center>Buyer &amp; Investor Advisory</SectionLabel>
            <SectionHeading className="mb-4">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-sm text-slate-600">
              Clear information on transfers, legal approvals, payment installments, and site tour bookings.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="border rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-200"
                  style={{ borderColor: theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#B01B2E] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 border-t pt-3 bg-white" style={{ borderColor: theme.border }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1F2937] to-[#111827] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-[#B01B2E] mb-4">
            <Headphones size={14} className="text-red-400" />
            <span className="text-white">Senior Property Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Begin Your Real Estate Journey With Swiss Home
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you are looking to move into a custom 1 Kanal smart villa, invest in high-yield commercial property, or purchase a countryside farmhouse, our advisory team is at your service.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-all shadow-lg cursor-pointer flex items-center gap-2"
            >
              <HomeIcon size={16} />
              <span>Schedule A Site Tour Now</span>
            </button>
            <Link
              href="/group-companies/swiss-homes/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              Contact Sales Office
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <PropertyInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => {
          setIsInquiryOpen(false);
          setSelectedPropertyForInquiry(null);
        }}
        preselectedProperty={selectedPropertyForInquiry}
      />

      <PropertyDetailModal
        property={activeDetailProperty}
        onClose={() => setActiveDetailProperty(null)}
        onInquireNow={(prop) => {
          setSelectedPropertyForInquiry(prop);
          setIsInquiryOpen(true);
        }}
      />

      {/* Footer */}
      <SwissHomesFooter />
    </main>
  );
}