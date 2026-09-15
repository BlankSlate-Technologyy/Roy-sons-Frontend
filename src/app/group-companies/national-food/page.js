"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hotel,
  Package,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users2,
  UtensilsCrossed,
  Wheat,
  ThermometerSnowflake,
  Activity,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NFSShared";

const HERO_SLIDES = [
  {
    tag: "Institutional & Corporate Catering",
    title: "National Food Services. Culinary Mastery. Uncompromised Hygiene.",
    subtitle:
      "Delivering nutritious, high-capacity, and hygienic food programs for corporate headquarters, industrial sites, healthcare centers, and educational campuses nationwide.",
    badgeTitle: "1,000,000+ Meals Daily",
    badgeSubtitle: "HACCP Certified Central Kitchen Operations",
    img: "/nationalfood/hero_institutional_catering.jpg",
    alt: "Institutional Kitchen and Corporate Catering Operations",
  },
  {
    tag: "Hospital & Healthcare Nutrition",
    title: "Clinical Care Nutrition. Dietitian-Approved Therapeutic Diets.",
    subtitle:
      "Specialized bedside nutrition and customized clinical therapeutic meal planning for hospital inpatients, surgical wards, and healthcare professionals.",
    badgeTitle: "Clinical Dietetics",
    badgeSubtitle: "Sterile Tray Line & Thermal Bedside Delivery",
    img: "/nationalfood/hero_healthcare_nutrition.jpg",
    alt: "Hospital Clinical Patient Dining and Nutrition",
  },
  {
    tag: "Food Trading & Agricultural Commodities",
    title: "Food Trading & Institutional Commodity Procurement.",
    subtitle:
      "Direct farm procurement and bulk wholesale distribution of export-grade basmati rice, wheat, pulses, cooking oils, and certified Halal meats.",
    badgeTitle: "Commodity Trading",
    badgeSubtitle: "Direct Farm-to-Enterprise Bulk Supply Chains",
    img: "/nationalfood/hero_agricultural_trading.jpg",
    alt: "Agricultural Food Trading and Grains Warehousing",
  },
  {
    tag: "Cold-Chain Logistics & Distribution",
    title: "Cold-Chain Fleet. Precision Temperature Assurance.",
    subtitle:
      "Operating an unbroken temperature-controlled distribution network with 48+ multi-temperature refrigerated vehicles maintaining continuous freshness.",
    badgeTitle: "48+ Chilled Fleet",
    badgeSubtitle: "Continuous Thermal Sensor Logging (+2°C to +4°C)",
    img: "/nationalfood/hero_cold_chain.jpg",
    alt: "Refrigerated Food Distribution and Cold Chain Logistics",
  },
];

const STATS = [
  { icon: Award, value: "25+", label: "Years of Corporate &\nCatering Excellence" },
  { icon: Building2, value: "500+", label: "Institutional &\nCorporate Contracts" },
  { icon: UtensilsCrossed, value: "1000000+", label: "Nutritious Meals\nPrepared Daily" },
  { icon: Users2, value: "350+", label: "Hospitals, Colleges &\nCorporate Facilities" },
  { icon: ShieldCheck, value: "99.9%", label: "HACCP Food Safety &\nHygiene Compliance" },
];

const SERVICES = [
  {
    icon: Wheat,
    title: "Food Trading & Agricultural Commodities",
    desc: "Direct farm procurement and wholesale distribution of export-grade basmati rice, wheat, pulses, edible oils, and certified Halal meat.",
    href: "/group-companies/national-food/services#food-trading",
    img: "/nationalfood/svc_food_trading_commodities.jpg",
    tag: "Commodities & Trading",
  },
  {
    icon: UtensilsCrossed,
    title: "Institutional & Corporate Catering",
    desc: "Customized daily meal programs, cafeteria management, executive dining, and shift-based workforce nutrition for corporate enterprises.",
    href: "/group-companies/national-food/services#corporate-catering",
    img: "/nationalfood/svc_corporate_catering.jpg",
    tag: "Corporate Dining",
  },
  {
    icon: Hotel,
    title: "Hospital & Healthcare Nutrition",
    desc: "Dietitian-approved therapeutic meal preparation for hospital in-patients, sterile surgical recovery diets, and medical staff dining.",
    href: "/group-companies/national-food/services#healthcare-nutrition",
    img: "/nationalfood/svc_healthcare_nutrition.jpg",
    tag: "Clinical Nutrition",
  },
  {
    icon: Building2,
    title: "Educational Food Services",
    desc: "Hygienic, balanced, and student-focused dining services for boarding schools, colleges, and university campus food courts.",
    href: "/group-companies/national-food/services#educational-dining",
    img: "/nationalfood/svc_educational_dining.jpg",
    tag: "Campus Dining",
  },
  {
    icon: Truck,
    title: "Refrigerated Cold Chain & Distribution",
    desc: "Dedicated nationwide fleet of 48+ multi-temperature refrigerated vehicles (+2°C to +4°C) guaranteeing unbroken farm-to-table freshness.",
    href: "/group-companies/national-food/services#cold-chain-logistics",
    img: "/nationalfood/svc_cold_chain_distribution.jpg",
    tag: "Cold Chain Logistics",
  },
  {
    icon: Package,
    title: "Bulk Institutional Commodity Sourcing",
    desc: "Strategic bulk volume procurement, climate-controlled warehousing, and reliable commodity inventory management for long-term supply stability.",
    href: "/group-companies/national-food/services#bulk-sourcing",
    img: "/nationalfood/svc_bulk_commodity_sourcing.jpg",
    tag: "Bulk Sourcing",
  },
  {
    icon: ShieldCheck,
    title: "HACCP & ISO 22000 Food Safety Audits",
    desc: "Certified food laboratory testing, routine ATP hygiene swabs, microbiological verification, chef screenings, and PFA regulatory compliance.",
    href: "/group-companies/national-food/services#quality-audits",
    img: "/nationalfood/svc_food_safety_audits.jpg",
    tag: "Hygiene & Compliance",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "NFS Corporate Dining Suite",
    tag: "Corporate Cafeteria Operations",
    desc: "Rotating gourmet hot lunch buffets, live chef cooking stations, and smart mobile cashless cafeteria ordering for modern office campuses.",
    img: "/nationalfood/pkg_corporate_dining.jpg",
    features: ["Rotating 4-Week Menus", "Live Cooking Theaters", "Cashless POS Terminals"],
  },
  {
    name: "NFS Clinical Nutrition Suite",
    tag: "Healthcare & Patient Diets",
    desc: "Specialized diabetic, renal, cardiac, and texture-modified diets delivered in sterile thermal trays to patient bedsides under clinical guidelines.",
    img: "/nationalfood/pkg_clinical_nutrition.jpg",
    features: ["Clinical Dietitian Formulations", "Sterile Thermal Tray Delivery", "HACCP Bedside Handover"],
  },
  {
    name: "NFS Campus Dining Plan",
    tag: "University & Boarding Food Courts",
    desc: "Nutrient-dense, high-energy meal passes for up to 25,000 students daily across multiple campus food courts and residential dining halls.",
    img: "/nationalfood/pkg_campus_dining.jpg",
    features: ["High-Volume Speed Lines", "Balanced Student Nutrition", "Allergen-Controlled Prep"],
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Dietary Scoping & Nutritional Audit",
    desc: "Analyzing client headcount, shift timings, dietitian guidelines, nutritional caloric needs, and kitchen infrastructure.",
  },
  {
    num: "02",
    title: "Menu Formulation & Executive Tasting",
    desc: "Engineering balanced multi-week rotating menus and hosting interactive tasting sessions with client steering committees.",
  },
  {
    num: "03",
    title: "Direct Farm Procurement & Traceability",
    desc: "Sourcing premium 100% Halal meat, farm-fresh produce, and export-grade grains with complete batch traceability.",
  },
  {
    num: "04",
    title: "Central Sterile Prep & Controlled Cooking",
    desc: "Preparing meals in stainless steel commercial central kitchens under continuous digital HACCP temperature monitoring.",
  },
  {
    num: "05",
    title: "Thermal Dispatch & On-Site Serving",
    desc: "Delivering via insulated thermoboxes and temperature-controlled trucks, served hot by trained, uniformed hospitality teams.",
  },
  {
    num: "06",
    title: "ATP Surface Swabs & Daily Audits",
    desc: "Conducting rapid ATP bioluminescence swabs, waste segregation audits, and quarterly customer satisfaction benchmarking.",
  },
];

const FAQS = [
  {
    q: "What food safety certifications does National Food Services operate under?",
    a: "Our central kitchens and institutional dining operations are certified under HACCP, ISO 22000 (Food Safety Management Systems), Halal Certification, and strictly comply with Punjab Food Authority (PFA) and international hospitality hygiene standards.",
  },
  {
    q: "Can National Food Services accommodate specialized clinical diets for hospital patients?",
    a: "Yes. We have dedicated registered clinical dietitians on staff who formulate customized meal regimens for diabetic, renal, cardiac, post-operative, and pediatric patients with sterile isolation kitchen preparation and thermal bedside delivery.",
  },
  {
    q: "How does NFS handle cold-chain and temperature control during transportation?",
    a: "We operate a dedicated fleet of 48+ refrigerated trucks equipped with real-time GPS temperature logging maintaining optimal chilling (+2°C to +4°C), and food-grade insulated cambro hot-carriers maintaining serving temperatures above 65°C.",
  },
  {
    q: "What is the daily meal capacity of National Food Services?",
    a: "NFS currently prepares and distributes over 1,000,000 meals daily across Pakistan, ranging from corporate headquarters with 200 staff to mega-university campuses, hospital networks, and industrial manufacturing plants with over 25,000 workers.",
  },
  {
    q: "Does NFS handle bulk agricultural commodity supply and trading?",
    a: "Yes. In addition to prepared institutional catering, our food trading division supplies high-volume agricultural commodities including basmati rice, wheat flour, pulses, cooking oils, and bulk Halal proteins directly to commercial institutions.",
  },
];

export default function NFSHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Hero Slider Auto-advance (5.5s)
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
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section with Autoplay Slider & Balanced Controls */}
      <section
        className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-[#F8FAF9] to-white overflow-hidden"
        style={{ borderColor: theme.border }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Category pill indicator */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.16em] mb-4 bg-white shadow-2xs"
                style={{ borderColor: theme.border, color: theme.teal }}
              >
                <UtensilsCrossed size={13} style={{ color: theme.forestGreen }} />
                <span>{activeSlideData.tag}</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.15] uppercase mb-5 transition-all duration-300 min-h-[90px] sm:min-h-[110px]"
                style={{ color: theme.navy }}
              >
                {activeSlideData.title}
              </h1>

              <p
                className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-8 transition-opacity duration-300 max-w-2xl min-h-[54px] sm:min-h-[64px]"
                style={{ color: theme.textMuted }}
              >
                {activeSlideData.subtitle}
              </p>

              {/* Strategic CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
                <Link
                  href="/group-companies/national-food/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.teal }}
                >
                  <span>Explore Catering Menus</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/group-companies/national-food/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Catering Quote</span>
                </Link>
              </div>

              {/* Slider Controls: Dots and Prev/Next buttons */}
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

            {/* Right Hero Image Card with smooth slide change */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[540px] h-[360px] sm:h-[430px] rounded-3xl overflow-hidden shadow-lg border group bg-slate-50"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/20 to-transparent flex items-end p-5 sm:p-6">
                      <div
                        className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-md w-full"
                        style={{ borderColor: theme.border }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black uppercase tracking-wider" style={{ color: theme.forestGreen }}>
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
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-[#F8FAF9]"
                    style={{ border: `1px solid ${theme.border}` }}
                  >
                    <Icon size={20} style={{ color: theme.teal }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual with photorealistic institutional kitchen */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-md group bg-slate-50"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/nationalfood/about_institutional_kitchen.jpg"
                  alt="National Food Services Institutional Culinary Facility and Central Kitchen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-1">
                      Premier Institutional Food Infrastructure
                    </p>
                    <h4 className="text-base sm:text-lg font-bold">
                      25+ Years of Nourishing Leading Organizations Across Pakistan
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About National Food Services</SectionLabel>
              <SectionHeading className="mb-6">Nourishing Pakistan&apos;s Workforce, Patients &amp; Students</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                National Food Services (NFS) delivers nourishing, hygienic, and scalable food management programs for corporate campuses, hospital networks, universities, and industrial sites. Our certified central kitchen network, registered dietitians, and refrigerated cold-chain distribution ensure delicious, consistent, and safe meals 365 days a year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAF9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.forestGreen }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">HACCP &amp; ISO 22000 Certified</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAF9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.forestGreen }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">1,000,000+ Daily Meals Prepared</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAF9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.forestGreen }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Direct Farm Commodity Sourcing</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-xl border bg-[#F8FAF9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={18} style={{ color: theme.forestGreen }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">48+ Chilled Transport Vehicles</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-food/about"
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

      {/* Services Section - 7 Core Divisions (No Card Buttons, Hover Elevation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Institutional Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-food/services"
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
                    {/* Realistic Visual Asset */}
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
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
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#F8FAF9]"
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

      {/* Featured Catering Packages Section (No Card Buttons, Hover Polish) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAF9]" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Menus &amp; Suites</SectionLabel>
              <SectionHeading>Featured Catering Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-food/solutions"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider hover:underline"
              style={{ color: theme.teal }}
            >
              <span>Explore All Menus</span>
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
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
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
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 size={13} style={{ color: theme.forestGreen }} className="flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle border indicator on hover without card button */}
                <div className="px-6 pb-5 pt-0">
                  <div
                    className="h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: theme.forestGreen }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section (Disciplined Methodology) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Methodology</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Culinary &amp; Hygiene Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial dietary audit and tasting sessions to unbroken cold-chain logistics, thermal bedside serving, and daily ATP swab verification.
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
                    style={{ backgroundColor: theme.teal }}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAF9]" style={{ borderColor: theme.border }}>
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Institutional Queries</SectionLabel>
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
                      openFaq === idx ? "rotate-180 text-emerald-700" : "text-slate-400"
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

      {/* CTA Section - Kept Only Conversion High-Value CTAs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-[#F8FAF9]"
            style={{ borderColor: theme.border }}
          >
            <div>
              <span
                className="text-xs font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.forestGreen }}
              >
                COMMENCE YOUR INSTITUTIONAL CATERING PROGRAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Schedule An Executive Consultation &amp; Kitchen Audit
              </h2>
              <p className="text-xs sm:text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified executive chefs, clinical nutritionists, and supply directors to engineer tailored daily meal plans or bulk commodities for your organization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-sm hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.teal }}
              >
                <span>Request Catering Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-white cursor-pointer"
                style={{ borderColor: theme.teal, color: theme.teal }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}