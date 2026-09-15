"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  FileCheck,
  Fuel,
  Globe2,
  HardHat,
  HeartPulse,
  Landmark,
  Layers,
  MapPin,
  MessageSquare,
  Monitor,
  Phone,
  Plane,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Users2,
  User,
  UserSearch,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  ExternalLink,
  Briefcase,
  DollarSign,
  Filter,
  Eye,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  JobDetailAndApplyModal,
  EmployerInquiryModal,
} from "./components/NeomRecruitmentShared";
import {
  COMPANY_INFO,
  HERO_SLIDES,
  STATS,
  JOB_CATEGORIES,
  JOB_VACANCIES,
  RECRUITMENT_SERVICES,
  SECTOR_SOLUTIONS,
  PROCESS_STEPS,
  FAQS,
} from "./neom-recruitment-data";

export default function NeomRecruitmentHomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Listing filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  // Modals state
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);

  // Auto-play hero slider every 5 seconds
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

  // Filtered job vacancies
  const filteredJobs = JOB_VACANCIES.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesCountry = selectedCountry === "All" || job.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesCountry && matchesSearch;
  });

  const handleOpenJobModal = (job) => {
    setSelectedJobForModal(job);
    setIsJobModalOpen(true);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#0072CE] selection:text-white">
      {/* Top Fixed Navbar */}
      <NeomRecruitmentNavbar onOpenEmployerModal={() => setIsEmployerModalOpen(true)} />

      {/* ─── 1. INTERACTIVE HERO SLIDER HEADER ("header ma slider lagna ha") ─── */}
      <section
        className="relative w-full bg-[#07152B] overflow-hidden select-none"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        {/* Slider Background Images with Smooth Fade & Scale */}
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
              {/* Dual dark overlay for ultra-crisp text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07152B]/95 via-[#07152B]/80 to-[#07152B]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-black/30" />
            </div>
          ))}

          {/* Foreground Content Container */}
          <div className="relative z-20 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl pt-8 sm:pt-0" data-aos="fade-up">
              {/* Active Slide Tag & Live Badge */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0072CE] text-white shadow-md">
                  <Sparkles size={13} />
                  <span>{activeSlideData.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 backdrop-blur-md text-emerald-400 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{activeSlideData.statsBadge}</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black uppercase tracking-tight text-white leading-[1.12] mb-5">
                {activeSlideData.title}
              </h1>

              {/* Dynamic Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed mb-8 max-w-2xl">
                {activeSlideData.desc}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#job-listings"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-[#0072CE] hover:bg-[#005BB5]"
                >
                  <Briefcase size={16} />
                  <span>Explore Open Vacancies</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsEmployerModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white cursor-pointer"
                >
                  <span>Request Workforce / Hire Talent</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-5 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#00A896]" />
                  <span>OEP License # 4120/ISB</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={16} className="text-[#00A896]" />
                  <span>ISO 9001:2015 Certified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={16} className="text-[#00A896]" />
                  <span>55,000+ Mobilized</span>
                </span>
              </div>
            </div>
          </div>

          {/* Slider Prev / Next Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#0072CE] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#0072CE] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slide Indicator Bar & Pagination */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-[#0072CE]" : "w-2 bg-white/40 hover:bg-white/80"
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
              <div key={i} className="p-4 rounded-xl border bg-sky-50/30 hover:border-[#0072CE] transition-colors" style={{ borderColor: theme.border }}>
                <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F2B5B] mb-1">
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

      {/* ─── 3. EXTENSIVE JOB LISTINGS SECTION OF EACH & EVERY TYPE ─── */}
      <section id="job-listings" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionLabel center>Live International Career Openings</SectionLabel>
            <SectionHeading center>
              Comprehensive Overseas Job Listings &amp; Vacancies
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Explore actively recruiting vacancies across Saudi Arabia, NEOM, UAE, Qatar, Kuwait, and Oman. Every position includes certified employment visas, medical coverage, furnished accommodation, and direct employer contracts.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border shadow-xs mb-8 space-y-4" style={{ borderColor: theme.border }}>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Search input */}
              <div className="sm:col-span-8 relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search job title, skill (e.g. Cardiologist, 6G Welder, Civil Engineer, Chef)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0072CE]"
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

              {/* Country selector */}
              <div className="sm:col-span-4">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0072CE]"
                  style={{ borderColor: theme.border }}
                >
                  <option value="All">All Deployment Countries</option>
                  <option value="Saudi Arabia">Saudi Arabia (KSA / NEOM / Riyadh)</option>
                  <option value="United Arab Emirates">United Arab Emirates (Dubai / Abu Dhabi)</option>
                  <option value="Qatar">Qatar (Doha)</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1 pl-1 pr-2 flex-shrink-0">
                <Filter size={12} />
                <span>Sector:</span>
              </span>
              {JOB_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0F2B5B] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-6 px-1">
            <span>
              Showing <strong>{filteredJobs.length}</strong> active position{filteredJobs.length === 1 ? "" : "s"}
            </span>
            {(selectedCategory !== "All" || searchQuery !== "" || selectedCountry !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setSelectedCountry("All");
                }}
                className="text-[#0072CE] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Job Listings Grid */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border text-center space-y-3" style={{ borderColor: theme.border }}>
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <h4 className="text-base font-bold text-slate-800">No vacancies match your current search</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try selecting &ldquo;All&rdquo; categories or clearing your search keywords. New positions are updated daily.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setSelectedCountry("All");
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase bg-[#0072CE] text-white hover:bg-[#005BB5]"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border shadow-xs hover:shadow-md hover:border-[#0072CE] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  style={{ borderColor: theme.border }}
                >
                  {/* Card Header */}
                  <div className="p-5 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-[#0F2B5B]">
                        {job.category}
                      </span>
                      {job.urgentBadge && (
                        <span className="px-2 py-0.5 rounded-full text-[9.5px] font-black uppercase tracking-wider bg-red-100 text-red-700 animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-black uppercase text-[#07152B] group-hover:text-[#0072CE] transition-colors line-clamp-2">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1.5">
                      <MapPin size={13} className="text-[#0072CE] flex-shrink-0" />
                      <span>{job.country} ({job.city})</span>
                    </p>
                  </div>

                  {/* Card Body Specs */}
                  <div className="p-5 space-y-3.5 flex-1">
                    {/* Salary Highlight */}
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-800">
                        Monthly Salary
                      </span>
                      <span className="text-xs sm:text-[13px] font-black text-emerald-950">
                        {job.salary}
                      </span>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Experience</span>
                        <span className="font-semibold text-slate-800">{job.experience}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Positions Open</span>
                        <span className="font-semibold text-[#0072CE]">{job.vacancies} Openings</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Contract</span>
                        <span className="font-semibold text-slate-800">{job.contractDuration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Apply By</span>
                        <span className="font-semibold text-red-600">{job.deadline}</span>
                      </div>
                    </div>

                    {/* Benefits Preview */}
                    <div className="pt-2 border-t" style={{ borderColor: theme.border }}>
                      <p className="text-[10.5px] uppercase font-bold text-slate-400 mb-1.5">Provided Perks</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.benefits?.slice(0, 3).map((b, idx) => (
                          <span key={idx} className="text-[10.5px] font-medium bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                            ✓ {b.split(" ")[0]} {b.split(" ")[1]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-4 border-t bg-slate-50" style={{ borderColor: theme.border }}>
                    <button
                      type="button"
                      onClick={() => handleOpenJobModal(job)}
                      className="w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#0072CE] hover:bg-[#005BB5] shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Candidate Registration Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#07152B] to-[#0F2B5B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Don&apos;t see your exact trade or profession?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Register your credentials in our general international candidate database. Our talent acquisition directors regularly mobilize specialized personnel for upcoming KSA &amp; GCC delegations.
              </p>
            </div>
            <Link
              href="/group-companies/Neom-city-recruitment/contact"
              className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-[#00A896] hover:bg-[#008f80] text-white transition-all whitespace-nowrap shadow-md cursor-pointer"
            >
              Submit General CV Application
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. CORPORATE RECRUITMENT SERVICES GRID (REALISTIC IMAGES) ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Turnkey Workforce Capabilities</SectionLabel>
            <SectionHeading center>
              Enterprise Recruitment &amp; HR Services
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              We provide multinational corporations, engineering EPC contractors, and healthcare networks with turnkey workforce solutions adhering to stringent global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECRUITMENT_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs hover:shadow-xl hover:border-[#0072CE] transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Realistic Image */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        {srv.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {srv.desc}
                    </p>
                    <ul className="space-y-1.5 pt-2 border-t" style={{ borderColor: theme.border }}>
                      {srv.features?.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#0072CE] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/group-companies/Neom-city-recruitment/services#${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0072CE] hover:text-[#0F2B5B] transition-colors"
                  >
                    <span>Learn More About Division</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TECHNICAL TRADE TESTING & PRACTICAL VERIFICATION (FEATURED PHOTO) ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-sky-50/40 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Realistic Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment/hero_trades.jpg"
                  alt="Neom City Recruitment Vocational Trade Testing Workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-[#0072CE]">
                      Testing Bay 4 · Automation Evaluation
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs font-bold text-[#07152B]">
                    Certified 6G Welders, High-Voltage Electricians &amp; HVAC Technicians Tested Daily
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-5">
              <SectionLabel>Vetted Hands-On Verification</SectionLabel>
              <SectionHeading>
                Accredited Trade Testing Workshops &amp; Skill Verification
              </SectionHeading>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                Unlike typical agencies relying solely on paper CVs, Neom City Recruitment Consultants operates fully equipped vocational trade testing workshops in Islamabad, Lahore, and Karachi.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <BadgeCheck size={22} className="text-[#0072CE] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#07152B]">
                      100% Practical Field Testing
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Welders, electricians, mechanics, and machine operators undergo rigorous physical scorecards with video recordings provided to client delegators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <ClipboardCheck size={22} className="text-[#00A896] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#07152B]">
                      Primary Source DataFlow &amp; Background Audit
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Doctors, clinical nurses, and chartered engineers undergo DataFlow verification, SCFHS Prometric assessments, and embassy attestation before travel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border shadow-2xs" style={{ borderColor: theme.border }}>
                  <ShieldCheck size={22} className="text-[#0F2B5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase text-[#07152B]">
                      90-Day Unconditional Replacement Guarantee
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We offer a 3-month comprehensive warranty. Any candidate deemed unsuitable is replaced swiftly without recruitment charges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setIsEmployerModalOpen(true)}
                  className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#0F2B5B] hover:bg-[#0072CE] transition-colors shadow-md cursor-pointer"
                >
                  Schedule an Employer Trade Testing Delegation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. INDUSTRY SECTOR SOLUTIONS (REALISTIC CARDS) ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Targeted Manpower Disciplines</SectionLabel>
            <SectionHeading center>
              Industry-Specific Global Workforce Solutions
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              Supplying specialized talent tailored to the precise regulatory, technical, and operational needs of key economic sectors.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/95 via-[#07152B]/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/20">
                    {sec.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-[#00A896] block mb-1">
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

      {/* ─── 7. RECRUITMENT & MOBILIZATION PROCESS ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Step-by-Step Excellence</SectionLabel>
            <SectionHeading center>
              Our 6-Stage Mobilization Process
            </SectionHeading>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3">
              A disciplined, transparent recruitment lifecycle from initial requisition to candidate workplace integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-2xl border shadow-xs hover:border-[#0072CE] transition-all duration-300"
                style={{ borderColor: theme.border }}
              >
                <span className="text-2xl sm:text-3xl font-black text-[#0072CE] block mb-2 font-mono">
                  {step.num}
                </span>
                <h4 className="text-sm sm:text-base font-black uppercase text-[#07152B] mb-2">
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
            <SectionLabel center>Clarity &amp; Transparency</SectionLabel>
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
                  <span className="text-xs sm:text-sm font-bold text-[#07152B]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#0072CE] transition-transform duration-200 flex-shrink-0 ${
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#07152B] via-[#0F2B5B] to-[#0072CE] text-white">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20 inline-block text-[#00A896]">
            Accelerate Your International Hiring
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
            Partner with Pakistan&apos;s Premier Overseas Employment Promoter
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Whether you require a C-level executive, a contingent of 2,000 certified construction specialists, or board-certified hospital doctors, Neom City Recruitment Consultants ensures compliant, rapid mobilization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsEmployerModalOpen(true)}
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#07152B] bg-white hover:bg-slate-100 transition-all shadow-lg cursor-pointer"
            >
              Request Corporate Manpower Proposal
            </button>
            <Link
              href="/group-companies/Neom-city-recruitment/contact"
              className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white border border-white/30 hover:bg-white/10 transition-all cursor-pointer"
            >
              Contact Embassy Liaison Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <JobDetailAndApplyModal
        job={selectedJobForModal}
        isOpen={isJobModalOpen}
        onClose={() => {
          setIsJobModalOpen(false);
          setSelectedJobForModal(null);
        }}
      />

      <EmployerInquiryModal
        isOpen={isEmployerModalOpen}
        onClose={() => setIsEmployerModalOpen(false)}
      />

      {/* Reusable Footer */}
      <NeomRecruitmentFooter />
    </main>
  );
}