"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Handshake,
  PiggyBank,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users2,
  ArrowRight,
  Phone,
  Building2,
  Compass,
  Leaf,
  Droplets,
  HardHat,
  BarChart3,
  Layers,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/PakConsultShared";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/pakconsult/hero_1.jpg",
    tag: "Strategic Corporate & Public Policy",
    title: "Institutional Advisory & Strategic Governance",
    desc: "Guiding sovereign programs, corporate boards, and capital sponsors with empirical analysis, financial engineering, and FIDIC-compliant project oversight across Pakistan.",
    href: "/group-companies/pakistan-consultancy/services",
    cta: "Explore Practice Areas",
  },
  {
    id: 2,
    image: "/images/pakconsult/hero_2.jpg",
    tag: "National Infrastructure & Mobility",
    title: "Engineering Viability for Landmark Infrastructure",
    desc: "From transport corridors and bridges to urban logistics—delivering end-to-end techno-economic feasibilities, master planning, and construction governance.",
    href: "/group-companies/pakistan-consultancy/projects",
    cta: "View Infrastructure Projects",
  },
  {
    id: 3,
    image: "/images/pakconsult/hero_3.jpg",
    tag: "Renewable Energy & Climate Transition",
    title: "Pioneering Sustainable Energy & Climate Resilience",
    desc: "Empowering clean power transitions, hydrological risk modeling, and ESG-aligned infrastructure frameworks for enduring sustainability and economic viability.",
    href: "/group-companies/pakistan-consultancy/sustainability",
    cta: "Discover Sustainability",
  },
  {
    id: 4,
    image: "/images/pakconsult/hero_4.jpg",
    tag: "Feasibility & PPP Structuring",
    title: "Empirical Feasibility & PPP Transaction Structuring",
    desc: "Bankable DCF valuations, demand forecast modeling, and risk allocation matrices compliant with PPRA rules and international lending institution benchmarks.",
    href: "/group-companies/pakistan-consultancy/solutions",
    cta: "Explore Solutions",
  },
  {
    id: 5,
    image: "/images/pakconsult/hero_5.jpg",
    tag: "Industrial & Urban Development",
    title: "Transforming Industrial Ecosystems & Urban Hubs",
    desc: "Master planning Special Economic Zones (SEZs), smart cities, and commercial complexes with 20-year viability forecasting and institutional PMO execution.",
    href: "/group-companies/pakistan-consultancy/contact",
    cta: "Consult Senior Partner",
  },
];

const STATS = [
  { icon: Award, value: "15+", label: "Years of Strategic\nConsultancy" },
  { icon: FileSearch, value: "400+", label: "Completed Studies &\nProject Audits" },
  { icon: Users2, value: "150+", label: "Corporate & Sovereign\nClients" },
  { icon: Briefcase, value: "45+", label: "Senior Industry &\nFinancial Consultants" },
  { icon: ShieldCheck, value: "98%", label: "Program Delivery\nSuccess Rate" },
];

const SERVICES = [
  {
    icon: Briefcase,
    title: "Strategic Advisory & Policy Development",
    desc: "Corporate strategic roadmaps, regulatory advisory, business restructuring, and institutional reform frameworks for public & private sectors.",
    href: "/group-companies/pakistan-consultancy/services#strategy",
    img: "/images/pakconsult/service_strategy.jpg",
    tag: "Corporate Advisory",
  },
  {
    icon: FileSearch,
    title: "Techno-Economic Feasibility Studies",
    desc: "Comprehensive market demand sizing, technical viability modeling, 20-year NPV/IRR evaluations, and PC-I / PC-II preparation.",
    href: "/group-companies/pakistan-consultancy/services#feasibility",
    img: "/images/pakconsult/service_feasibility.jpg",
    tag: "Bankable Feasibility",
  },
  {
    icon: BarChart3,
    title: "Project Management Office (PMO) Setup",
    desc: "Enterprise PMO governance, earned value cost telemetry, schedule variance tracking, and quality supervision for mega projects.",
    href: "/group-companies/pakistan-consultancy/services#pmo",
    img: "/images/pakconsult/service_pmo.jpg",
    tag: "Program PMO",
  },
  {
    icon: PiggyBank,
    title: "Investment Structuring & PPP Advisory",
    desc: "Structuring Build-Operate-Transfer (BOT) concessions, Viability Gap Funding (VGF), and bankable transaction models for sponsors.",
    href: "/group-companies/pakistan-consultancy/services#investment",
    img: "/images/pakconsult/service_investment.jpg",
    tag: "Transaction Advisory",
  },
  {
    icon: HardHat,
    title: "Infrastructure & Engineering Advisory",
    desc: "Technical due diligence, civil master planning, design validation, contractor pre-qualification, and independent engineer supervision.",
    href: "/group-companies/pakistan-consultancy/services#infrastructure",
    img: "/images/pakconsult/service_infrastructure.jpg",
    tag: "Civil & Transport",
  },
  {
    icon: Leaf,
    title: "ESG, Environmental & Climate Resilience",
    desc: "Environmental & Social Impact Assessments (ESIA), carbon audit frameworks, green certification roadmaps, and climate risk resilience.",
    href: "/group-companies/pakistan-consultancy/services#sustainability",
    img: "/images/pakconsult/service_sustainability.jpg",
    tag: "ESG Standards",
  },
  {
    icon: Droplets,
    title: "Water Resources & Hydrology Advisory",
    desc: "Watershed hydrology modeling, urban stormwater management, irrigation modernization, and industrial effluent treatment designs.",
    href: "/group-companies/pakistan-consultancy/services#environmental",
    img: "/images/pakconsult/service_environmental.jpg",
    tag: "Hydrology & Water",
  },
  {
    icon: Building2,
    title: "Industrial & Special Economic Zones (SEZ)",
    desc: "Full-scale industrial estate master planning, utility demand forecasting, cluster competitiveness analysis, and SEZ regulatory approvals.",
    href: "/group-companies/pakistan-consultancy/services#development",
    img: "/images/pakconsult/service_development_planning.jpg",
    tag: "SEZ & Industrial",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "National Highway & Transport PPP Suite",
    tag: "Transport Concessions",
    desc: "End-to-end BOT transaction structuring, traffic demand forecasting, toll elasticity analysis, and FIDIC contract drafting.",
    img: "/images/pakconsult/project_transport.jpg",
  },
  {
    name: "Special Economic Zone (SEZ) Master Package",
    tag: "Industrial Hubs",
    desc: "Turnkey planning for 300+ acre industrial zones, environmental compliance, power & water utility designs, and investor roadshow preparation.",
    img: "/images/pakconsult/project_sez.jpg",
  },
  {
    name: "Clean Energy Transition & Grid Feasibility",
    tag: "Renewable Power",
    desc: "Solar/wind power evacuation modeling, tariff petition filings with NEPRA, and bankable financial models for commercial IPPs.",
    img: "/images/pakconsult/project_solar.jpg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery & Scope Alignment", desc: "Aligning with institutional objectives, statutory PPRA/FIDIC mandates, and defining empirical baseline parameters." },
  { num: "02", title: "Field Surveys & Empirical Modeling", desc: "Executing site surveys, market demand regressions, geological testing, and financial DCF valuation matrices." },
  { num: "03", title: "Feasibility & Bankable Structuring", desc: "Drafting bankable techno-economic feasibility reports, risk allocation frameworks, and investor-ready transaction models." },
  { num: "04", title: "Tender Governance & Procurement", desc: "Drafting transparent RFPs, evaluating contractor bids under PPRA rules, and negotiating EPC/FIDIC concession agreements." },
  { num: "05", title: "PMO Oversight & Quality Control", desc: "Deploying independent supervisory engineers, monitoring real-time earned value telemetry, and eliminating milestone delays." },
  { num: "06", title: "Commissioning & Impact Review", desc: "Conducting project close-out audits, post-commissioning performance reviews, and long-term asset management advisory." },
];

const FAQS = [
  {
    q: "What international standards do Pakistan Consultancy Services studies adhere to?",
    a: "Our techno-economic feasibilities and engineering advisory comply with guidelines set forth by the World Bank, Asian Development Bank (ADB), Planning Commission of Pakistan (PC-I and PC-II benchmarks), and FIDIC suite of contracts.",
  },
  {
    q: "Can you assist government agencies and private sponsors with PPP concessions?",
    a: "Yes. We specialize in Public-Private Partnership (PPP) concessions including Build-Operate-Transfer (BOT), DBFOM, and Viability Gap Funding (VGF) structures with full financial modeling and investor documentation.",
  },
  {
    q: "How does Pakistan Consultancy Services ensure PPRA procurement compliance?",
    a: "Our team drafts rigorous, audit-proof Request for Proposals (RFP), contractor pre-qualification criteria, and objective bid evaluation scoring systems in strict compliance with federal and provincial PPRA regulations.",
  },
  {
    q: "What is your typical Project Management Office (PMO) engagement model?",
    a: "We deploy turnkey PMO setups equipped with digital reporting dashboards, earned value analysis (EVA), schedule risk registers, and independent site engineering supervision to ensure mega projects finish on time and within budget.",
  },
];

export default function PakConsultHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const timerRef = useRef(null);

  // Auto-play slider with 5.5s interval, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── FULL-WIDTH HERO IMAGE SLIDER ──────────────────────────────────── */}
      <section
        className="relative w-full min-h-[580px] lg:h-[660px] xl:h-[700px] flex items-center overflow-hidden bg-slate-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images with Crossfade */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transform transition-transform duration-[6000ms]`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Sophisticated Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/80 to-[#0A2540]/40 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A2540]/30 to-[#071727]/70 z-10 pointer-events-none" />

        {/* Slide Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A059] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span>{activeSlide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              {activeSlide.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              {activeSlide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href={activeSlide.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer"
              >
                <span>{activeSlide.cta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                <span>Consult Partners</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls: Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slider Bottom Bar: Dot Indicators & Counter */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-[#C5A059]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 bg-black/30 px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm">
            <span className="text-white font-bold">0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{HERO_SLIDES.length}</span>
          </div>
        </div>
      </section>

      {/* ─── STATS COUNTER STRIP ───────────────────────────────────────────── */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs hover:border-[#0D7C85]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-teal-50 text-[#0D7C85]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#0A2540] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PRACTICE SUMMARY ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual with Realistic Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/pakconsult/about_meeting.jpg"
                  alt="Strategic Consulting Boardroom Advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                      Institutional Trust
                    </span>
                    <h3 className="text-lg font-bold">15+ Years of Proven Advisory &amp; Feasibility Excellence</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Practice</SectionLabel>
              <SectionHeading className="mb-5">
                Strategic Consulting Engineered for Real-World Execution
              </SectionHeading>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Pakistan Consultancy Services delivers high-impact management consulting, techno-economic feasibility studies, PPP transaction structuring, and turnkey Project Management Office (PMO) governance. We bridge the gap between grand strategic vision and bankable, compliant execution across Pakistan&apos;s industrial and infrastructure landscape.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#0D7C85] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">FIDIC &amp; PPRA Certified Advisory</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#0D7C85] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">400+ Delivered Studies</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#0D7C85] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Bankable Financial DCF Models</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#0D7C85] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Multi-City Senior Partner Access</span>
                </div>
              </div>

              <Link
                href="/group-companies/pakistan-consultancy/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D7C85] hover:text-[#08545A] transition-colors"
              >
                <span>Read Full Corporate Profile &amp; Governance</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8 IMAGE-LED PRACTICE AREAS (SERVICE CARDS) ────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Core Practice Areas</SectionLabel>
              <SectionHeading>Strategic Advisory &amp; Technical Services</SectionHeading>
            </div>

            <Link
              href="/group-companies/pakistan-consultancy/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D7C85] hover:text-[#08545A] transition-colors"
            >
              <span>View All 8 Practice Areas</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0A2540]/85 text-white backdrop-blur-xs">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="w-8 h-8 rounded-md bg-teal-50 text-[#0D7C85] flex items-center justify-center mb-3">
                        <Icon size={18} />
                      </div>

                      <h3 className="text-[15px] font-bold text-[#0A2540] mb-2 leading-snug">
                        {svc.title}
                      </h3>

                      <p className="text-[12.5px] text-slate-600 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-2.5 rounded-lg border border-slate-200 hover:border-[#0D7C85] hover:bg-teal-50/40 text-[12px] font-bold text-[#0A2540] hover:text-[#0D7C85] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED SOLUTIONS & ENGAGEMENTS ──────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Flagship Engagements</SectionLabel>
              <SectionHeading>Featured Advisory Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/pakistan-consultancy/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D7C85] hover:text-[#08545A] transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SOLUTIONS_PREVIEW.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C5A059] text-white">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0A2540] mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/group-companies/pakistan-consultancy/contact"
                    className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-[#0D7C85] text-xs font-bold text-[#0A2540] hover:text-[#0D7C85] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Technical Specifications</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6-STAGE METHODOLOGY LIFECYCLE ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Disciplined Methodology</SectionLabel>
            <SectionHeading center className="mb-3">
              The 6-Stage Advisory Lifecycle
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              A structured, audit-proof delivery framework ensuring every study, transaction, and program conforms to international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0D7C85]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A2540] text-[#C5A059] font-black text-sm flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-[#0A2540] mb-2">
                  {step.title}
                </h4>
                <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQS ACCORDION ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-3">
              Advisory Governance &amp; Engagement
            </SectionHeading>
            <p className="text-sm text-slate-600">
              Clear answers regarding our credentials, procurement compliance, and engagement protocols.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[14px] sm:text-base text-[#0A2540] cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 flex-shrink-0 text-slate-400 ${
                      openFaq === idx ? "rotate-180 text-[#0D7C85]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[13px] sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CALL TO ACTION ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#0A2540] to-[#0C1E2E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                Commence Your Strategic Initiative
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Schedule A Senior Partner Consultation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our advisory partners in Lahore, Islamabad, or Karachi to review Terms of Reference, feasibility requirements, and transaction structuring.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Request Proposal / ToR
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>042-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}