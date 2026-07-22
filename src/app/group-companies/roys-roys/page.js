"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ChevronLeft,
  HeartPulse, BriefcaseMedical, FlaskConical, Microscope, Pill,
  Globe, ShieldCheck, Target, Award, Lightbulb, Leaf, Users, Star,
  Building2, Phone, Mail, MapPin, ArrowRight, CheckCircle2,
  Linkedin, Facebook, Twitter, Youtube,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:     "#113658",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  footerBg:    "#020f1f",
  footerBlue:  "#4da8ff",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const HERO_IMAGES = [
  "/roys_hospital_interior.png",
  "/roys_mri_scanner.png",
  "/roys slide 1.png",
];

const STATS = [
  { value: "15+",   label: "Years of\nExcellence" },
  { value: "250+",  label: "Projects\nDelivered" },
  { value: "30+",   label: "Countries\nServed" },
  { value: "1000+", label: "Products &\nSolutions" },
];

const TRUSTED_LOGOS = [
  { name: "World Health Organization", abbr: "WHO",      img: "/world health.png" },
  { name: "UNICEF",                    abbr: "UNICEF",   img: "/unicef.png" },
  { name: "Pakistan Army",             abbr: "Pak Army", img: "/pak.png" },
  { name: "Siemens Healthineers",      abbr: "Siemens",  img: "/siemens.png" },
  { name: "Philips Healthcare",        abbr: "PHILIPS",  img: "/philips.png" },
  { name: "GE Healthcare",             abbr: "GE Health",img: null },
  { name: "Becton Dickinson",          abbr: "BD",       img: "/bd.png" },
];

const CORE_BUSINESS_AREAS = [
  { icon: HeartPulse,      label: "Healthcare\nTechnologies" },
  { icon: BriefcaseMedical,label: "Hospital\nEngineering" },
  { icon: FlaskConical,    label: "Clean Room\n& HVAC" },
  { icon: Microscope,      label: "Laboratory\nSolutions" },
  { icon: Pill,            label: "Pharmaceutical\nConsultancy" },
  { icon: Globe,           label: "International\nProcurement" },
  { icon: ShieldCheck,     label: "Biomedical\nServices" },
];

const PRODUCTS_TABS = [
  "Diagnostic Imaging",
  "OT Solutions",
  "ICU & Critical Care",
  "Lab Equipment",
  "Hospital Furniture",
  "Clean Room Systems",
];

const PRODUCTS = [
  // Diagnostic Imaging
  { category: "Diagnostic Imaging", name: "X-Ray Systems",       desc: "Advanced digital radiography systems for accurate imaging.",    img: "/roys_hospital_interior.png" },
  { category: "Diagnostic Imaging", name: "Ultrasound Machines", desc: "High-performance advanced ultrasound for all applications.",    img: "/roys_ultrasound.png" },
  { category: "Diagnostic Imaging", name: "CT Scan Machines",    desc: "Advanced CT systems for precise diagnostics.",                  img: "/roys_ct_scan.png" },
  { category: "Diagnostic Imaging", name: "MRI Systems",         desc: "High-field MRI for detailed medical imaging.",                  img: "/roys_mri_scanner.png" },
  { category: "Diagnostic Imaging", name: "Mammography Systems", desc: "Digital mammography for early detection.",                      img: "/roys_hospital_interior.png" },
  
  // OT Solutions
  { category: "OT Solutions", name: "Operating Tables",    desc: "State-of-the-art operating tables for surgical precision.",     img: "/roys_ct_scan.png" },
  { category: "OT Solutions", name: "Surgical Lights",     desc: "High-intensity shadowless surgical lighting systems.",          img: "/roys_hospital_interior.png" },
  { category: "OT Solutions", name: "Anesthesia Machines", desc: "Advanced anesthesia delivery and monitoring systems.",          img: "/roys_mri_scanner.png" },
  
  // ICU & Critical Care
  { category: "ICU & Critical Care", name: "Patient Monitors",    desc: "Advanced patient monitoring systems for intensive care.",       img: "/roys_ultrasound.png" },
  { category: "ICU & Critical Care", name: "Ventilators",         desc: "High-performance ventilators for critical life support.",       img: "/roys_mri_scanner.png" },
  { category: "ICU & Critical Care", name: "Infusion Pumps",      desc: "Precise volumetric infusion pumps for critical medication.",    img: "/roys_ct_scan.png" },

  // Lab Equipment
  { category: "Lab Equipment", name: "Chemistry Analyzers", desc: "Automated chemistry analyzers for fast and accurate results.",  img: "/roys_ct_scan.png" },
  { category: "Lab Equipment", name: "Microscopes",         desc: "High-resolution microscopes for detailed laboratory analysis.", img: "/roys_hospital_interior.png" },
  { category: "Lab Equipment", name: "Centrifuges",         desc: "High-speed laboratory centrifuges for sample separation.",      img: "/roys_ultrasound.png" },

  // Hospital Furniture
  { category: "Hospital Furniture", name: "Hospital Beds",       desc: "Ergonomic and adjustable beds for patient comfort.",            img: "/roys_ultrasound.png" },
  { category: "Hospital Furniture", name: "Overbed Tables",      desc: "Adjustable overbed tables for patient convenience.",            img: "/roys_hospital_interior.png" },
  { category: "Hospital Furniture", name: "Medical Cabinets",    desc: "Secure and sterile medical storage cabinets.",                  img: "/roys_ct_scan.png" },

  // Clean Room Systems
  { category: "Clean Room Systems", name: "Modular OT Panels",   desc: "Seamless modular panels for sterile environments.",             img: "/roys_mri_scanner.png" },
  { category: "Clean Room Systems", name: "Laminar Air Flow",    desc: "Laminar flow systems to prevent airborne contamination.",       img: "/roys_hospital_interior.png" },
  { category: "Clean Room Systems", name: "Pass Boxes",          desc: "Dynamic and static pass boxes for material transfer.",          img: "/roys_ct_scan.png" },
];

const INDUSTRIES = [
  { icon: Building2,  label: "Hospitals" },
  { icon: ShieldCheck,label: "Government" },
  { icon: Star,       label: "Military\nHealthcare" },
  { icon: Award,      label: "Universities" },
  { icon: Microscope, label: "Research\nCenters" },
  { icon: Users,      label: "Private\nClinics" },
  { icon: HeartPulse, label: "NGOs" },
  { icon: FlaskConical,label: "Diagnostic\nLabs" },
  { icon: Pill,       label: "Pharmaceutical\nIndustry" },
];

const WHY_CHOOSE = [
  { icon: Globe,        title: "Global Network",        desc: "Access to premium global partners and suppliers." },
  { icon: Award,        title: "Engineering Excellence", desc: "Expert engineers and consultants on every project." },
  { icon: ShieldCheck,  title: "Regulatory Expertise",  desc: "Compliance with international standards." },
  { icon: Target,       title: "Turnkey Solutions",     desc: "End-to-end project implementation." },
  { icon: HeartPulse,   title: "Technical Support",     desc: "24/7 after sales support." },
  { icon: CheckCircle2, title: "Quality Assurance",     desc: "Certified quality management." },
];

const VALUES = [
  { icon: Lightbulb, label: "Integrity",           desc: "We adhere strictly to honesty and moral standards." },
  { icon: Star,      label: "Innovation",           desc: "Constantly upgrading medical technologies." },
  { icon: Award,     label: "Excellence",           desc: "Aiming for perfection in every delivery." },
  { icon: Leaf,      label: "Sustainability",       desc: "Designing long-lasting and eco-conscious engineering." },
  { icon: Users,     label: "Customer Commitment",  desc: "Full post-sales support and partnership." },
];

const CORPORATE_INFO = [
  { label: "Company Name",        val: "ROYS & ROYS International" },
  { label: "Industry Sector",     val: "Healthcare Engineering & Medical Technologies" },
  { label: "Corporate Link",      val: "ROYSONS Pvt.Ltd., Pakistan" },
  { label: "Registered Address",  val: "123 Business Avenue,Lahore, Pakistan" },
];

const NAV_LINKS = ["Home", "About Us", "Solutions", "Products", "Industries", "Projects", "Contact"];

const FOOTER_LINKS = {
  Company:    ["About Us", "Our Values", "Careers", "News & Media"],
  Solutions:  ["Healthcare Technologies", "Hospital Engineering", "Laboratory Solutions", "Clean Room Systems"],
  Industries: ["Hospitals", "Government", "Pharmaceutical", "Research Centers"],
};

const SOCIAL_ICONS = [Linkedin, Facebook, Twitter, Youtube];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <span
        className="text-[11px] font-extrabold tracking-widest uppercase block mb-3"
        style={{ color: COLORS.primary }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-3xl font-extrabold tracking-tight uppercase"
        style={{ color: COLORS.black }}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4 h-1 w-14 rounded-full"
        style={{ backgroundColor: COLORS.primary }}
      />
    </div>
  );
}

function IconCard({ icon: Icon, label, iconSize = 20, containerSize = "w-12 h-12" }) {
  return (
    <div
      className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg group"
      style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.primary;
        e.currentTarget.querySelector('span').style.color = '#ffffff';
        e.currentTarget.querySelector('svg').style.color = '#ffffff';
        e.currentTarget.children[0].style.backgroundColor = 'rgba(255,255,255,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.white;
        e.currentTarget.querySelector('span').style.color = COLORS.black;
        e.currentTarget.querySelector('svg').style.color = COLORS.primary;
        e.currentTarget.children[0].style.backgroundColor = `${COLORS.primary}10`;
      }}
    >
      <div
        className={`${containerSize} rounded-full flex items-center justify-center mb-3 transition-colors duration-300`}
        style={{ backgroundColor: `${COLORS.primary}10` }}
      >
        <Icon size={iconSize * 1.5} style={{ color: COLORS.primary }} className="transition-colors duration-300" />
      </div>
      <span
        className="text-[14px] font-black leading-snug whitespace-pre-line transition-colors duration-300"
        style={{ color: COLORS.black }}
      >
        {label}
      </span>
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-all duration-300 ease-out ${className}`}
      style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider border flex items-center gap-2 hover:bg-slate-900 hover:text-white transition-all duration-300 ease-out ${className}`}
      style={{ borderColor: COLORS.primary, color: COLORS.white }}
    >
      {children}
    </Link>
  );
}

// ─── Page Sections ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-none transition-all duration-300">
      <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
        <Link href="/group-companies" className="flex items-center gap-3">
          <Image
            src="/roys logo.png"
            alt="Roys & Roys Logo"
            width={240}
            height={70}
            className="object-contain rounded-sm"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={item === "Contact" ? "/contact" : `#${item.toLowerCase().replace(" ", "-")}`}
              className="text-[12.5px] font-bold uppercase tracking-wider transition-colors hover:text-[#00a299]"
              style={{ color: COLORS.black }}
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:bg-[#009088]"
          style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

function HeroSection({ bgImageIndex }) {
  return (
    <section id="home" className="relative py-20 lg:py-28 px-6 overflow-hidden bg-transparent">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {HERO_IMAGES.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: idx === bgImageIndex ? 1 : 0,
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)" }}
        />
      </div>

      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-12 items-center relative z-10">
        {/* Left: Copy */}
        <div className="flex-1">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] mb-4" style={{ color: COLORS.primary }}>
            ROYS &amp; ROYS INTERNATIONAL
          </p>
          <h1 className="text-3xl lg:text-5xl font-black leading-[1.08] tracking-tight mb-6" style={{ color: COLORS.white }}>
            Engineering Excellence.<br />
            Healthcare Innovation.<br />
            <span style={{ color: COLORS.primary }}>Global Trade.</span>
          </h1>
          <p className="text-[14px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            ROYS &amp; ROYS International is the flagship company of ROYS Group of Companies, delivering integrated
            healthcare technologies, hospital engineering, laboratory solutions, medical equipment, pharmaceutical
            consultancy, and international procurement services.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#solutions">Explore Solutions <ArrowRight size={15} /></PrimaryButton>
            <OutlineButton href="/contact">Contact Us <ArrowRight size={15} /></OutlineButton>
          </div>
        </div>

        {/* Right: Image + Stats */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div
            className="relative w-full lg:w-[480px] h-[280px] lg:h-[340px] rounded-xl overflow-hidden mb-6 shadow-2xl"
            style={{ border: "1.5px solid rgba(255,255,255,0.1)" }}
          >
            <Image src="/roys_hospital_interior.png" alt="Roys Hospital Systems" fill className="object-cover" sizes="480px" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="grid grid-cols-4 gap-3 max-w-[480px]">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="p-3.5 text-center rounded-lg border"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xl lg:text-2xl font-black" style={{ color: COLORS.primary }}>{stat.value}</p>
                <p className="text-[10px] font-bold mt-1 whitespace-pre-line leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBanner() {
  const [activeLogo, setActiveLogo] = useState(0);
  const visibleCount = 4;
  const maxIndex = Math.max(TRUSTED_LOGOS.length - visibleCount, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo((current) => (current === maxIndex ? 0 : current + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-10 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-[15px] font-black tracking-[0.24em] text-neutral-500 uppercase mb-8">
          TRUSTED BY LEADING ORGANIZATIONS
        </p>

        <div className="relative overflow-hidden rounded-[32px] border-0 shadow-none bg-transparent">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out px-6 py-8"
            style={{ transform: `translateX(-${activeLogo * (100 / visibleCount)}%)` }}
          >
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex-shrink-0 rounded-[28px] bg-transparent border-0 p-6 flex items-center justify-center shadow-none"
                style={{ minWidth: `${100 / visibleCount}%` }}
              >
                {logo.img ? (
                  <div className="relative w-full h-24">
                    <Image
                      src={logo.img}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="220px"
                    />
                  </div>
                ) : (
                  <span className="text-[18px] font-black tracking-wider text-neutral-800">{logo.abbr}</span>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveLogo((prev) => Math.max(prev - 1, 0))}
            disabled={activeLogo === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous trusted logo"
          >
            <ChevronLeft size={22} color={COLORS.primary} />
          </button>
          <button
            type="button"
            onClick={() => setActiveLogo((prev) => Math.min(prev + 1, maxIndex))}
            disabled={activeLogo === maxIndex}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next trusted logo"
          >
            <ChevronRight size={22} color={COLORS.primary} />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveLogo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeLogo === index ? "bg-[#113658] scale-125" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    { label: "Global Standards",     desc: "Ensuring compliance with FDA, CE, and GMP requirements." },
    { label: "Turnkey Solutions",    desc: "From design and planning to engineering and installation." },
    { label: "Technical Excellence", desc: "Delivered by seasoned engineers and medical technology experts." },
  ];

  return (
    <section id="about-us" className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-14 items-center">
        {/* Left: Text */}
        <div className="flex-1 max-w-lg">
          <span className="text-[20px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            ABOUT US
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.black }}>
            Building the Future of Healthcare
          </h2>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            We provide end-to-end solutions in healthcare infrastructure, medical equipment, laboratory technologies,
            and pharmaceutical consultancy. Our commitment is to innovation, quality, and global regulatory compliance.
          </p>
          <div className="space-y-4 mb-8">
            {highlights.map(({ label, desc }) => (
              <div key={label} className="flex gap-3.5">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <CheckCircle2 size={15} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold" style={{ color: COLORS.black }}>{label}</h4>
                  <p className="text-[12px]" style={{ color: COLORS.black }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <PrimaryButton href="/contact" className="w-fit">
            Learn More About Us <ArrowRight size={15} />
          </PrimaryButton>
        </div>

        {/* Right: Image showcase */}
        <div className="flex-1 w-full grid gap-4">
          <div className="relative h-[520px] rounded-[32px] overflow-hidden shadow-2xl border" style={{ borderColor: COLORS.border }}>
            <Image
              src="/roys_hospital_interior.png"
              alt="Hospital interior operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[260px] rounded-[32px] overflow-hidden shadow-2xl border" style={{ borderColor: COLORS.border }}>
              <Image
                src="/roys_mri_scanner.png"
                alt="MRI scanning room setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[260px] rounded-[32px] overflow-hidden shadow-2xl border" style={{ borderColor: COLORS.border }}>
              <Image
                src="/roys_ct_scan.png"
                alt="CT scanner system installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  const cards = [
    {
      accentColor: COLORS.primary,
      icon: Target,
      eyebrow: "OUR VISION",
      title: "To Lead & Innovate",
      body: "To be a global leader in healthcare engineering and medical solutions, transforming public health and medical access through quality, advanced technology, and sustainable engineering values.",
    },
    {
      accentColor: COLORS.primary,
      icon: Award,
      eyebrow: "OUR MISSION",
      title: "To Support Globally",
      body: "To deliver world-class medical technologies and healthcare equipment, supported by exceptional engineering capabilities and international distribution frameworks to elevate modern clinical delivery.",
    },
  ];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-8">
        {cards.map(({ accentColor, icon: Icon, eyebrow, title, body }) => (
          <div
            key={eyebrow}
            className="p-8 lg:p-10 rounded-lg border shadow-sm flex gap-5"
            style={{ backgroundColor: COLORS.white, borderColor: COLORS.border, borderLeft: `5px solid ${accentColor}` }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}15` }}
            >
              <Icon size={28} style={{ color: accentColor }} />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: accentColor }}>
                {eyebrow}
              </span>
              <h3 className="text-[16px] font-extrabold mb-3" style={{ color: COLORS.black }}>{title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: COLORS.black }}>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CoreBusinessSection() {
  return (
    <section id="solutions" className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="CORE ACTIVITIES" title="Core Business Areas" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CORE_BUSINESS_AREAS.map(({ icon, label }) => (
            <IconCard key={label} icon={icon} label={label} iconSize={20} containerSize="w-12 h-12" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ activeTab, setActiveTab, productIndex, onSlideLeft, onSlideRight }) {
  const activeCategory = PRODUCTS_TABS[activeTab];
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="PORTFOLIO" title="Products & Solutions" />

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center border-b pb-5" style={{ borderColor: COLORS.border }}>
          {PRODUCTS_TABS.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className="px-5 py-2.5 text-[11.5px] font-extrabold uppercase tracking-wider rounded-sm transition-all cursor-pointer hover:opacity-80"
                style={{
                  backgroundColor: isActive ? COLORS.primary : "transparent",
                  color: isActive ? COLORS.white : COLORS.black,
                  border: isActive ? "none" : `1px solid ${COLORS.border}`,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={onSlideLeft}
            aria-label="Previous product"
            className="absolute left-0 lg:left-[-20px] z-10 w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition-opacity cursor-pointer"
            style={{ backgroundColor: COLORS.primary, borderColor: "rgba(0,0,0,0.1)" }}
          >
            <ChevronLeft size={20} color="#ffffff" />
          </button>

          <div className="w-full overflow-hidden px-10">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${productIndex * 264}px)`, width: "max-content" }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="w-[240px] rounded-lg overflow-hidden border shadow-lg flex-shrink-0"
                  style={{ backgroundColor: COLORS.primary, borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <div className="relative h-[160px] w-full">
                    <Image src={product.img} alt={product.name} fill className="object-cover" sizes="240px" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[13.5px] font-extrabold mb-1" style={{ color: "#ffffff" }}>{product.name}</h4>
                    <p className="text-[11.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onSlideRight}
            aria-label="Next product"
            className="absolute right-0 lg:right-[-20px] z-10 w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition-opacity cursor-pointer"
            style={{ backgroundColor: COLORS.primary, borderColor: "rgba(0,0,0,0.1)" }}
          >
            <ChevronRight size={20} color="#ffffff" />
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="MARKET SECTORS" title="Industries We Serve" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="p-5 border rounded-lg text-center flex flex-col items-center shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg group"
              style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.querySelector('span').style.color = '#ffffff';
                e.currentTarget.querySelector('svg').style.color = '#ffffff';
                e.currentTarget.children[0].style.backgroundColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                e.currentTarget.querySelector('span').style.color = COLORS.black;
                e.currentTarget.querySelector('svg').style.color = COLORS.primary;
                e.currentTarget.children[0].style.backgroundColor = `${COLORS.primary}10`;
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
                style={{ backgroundColor: `${COLORS.primary}10` }}
              >
                <Icon size={39} style={{ color: COLORS.primary }} className="transition-colors duration-300" />
              </div>
              <span className="text-[15px] font-black whitespace-pre-line leading-normal transition-colors duration-300" style={{ color: COLORS.black }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="COMPETITIVE VALUE" title="Why Choose Roys & Roys International?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg flex gap-5 shadow-sm"
              style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
                <Icon size={22} style={{ color: COLORS.white }} />
              </div>
              <div>
                <h4 className="text-[14px] font-extrabold mb-1.5" style={{ color: COLORS.black }}>{title}</h4>
                <p className="text-[12.5px] leading-relaxed" style={{ color: COLORS.black }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesAndCorporateSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedValue = VALUES[selectedIndex];

  return (
    <section className="py-20 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-12 items-start">

        {/* Value Cards */}
        <div className="lg:col-span-5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            WHAT WE STAND FOR
          </span>
          <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLORS.black }}>Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {VALUES.map(({ icon: Icon, label }, idx) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 bg-white"
                style={{ borderColor: selectedIndex === idx ? COLORS.primary : COLORS.border }}
              >
                <Icon size={20} className="mb-3" style={{ color: COLORS.primary }} />
                <span className="text-[11px] font-extrabold leading-tight text-neutral-800 whitespace-pre-line">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Corporate Info */}
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            OFFICIAL DETAILS
          </span>
          <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLORS.black }}>Corporate Info</h3>

          <div className="border rounded-lg p-6 shadow-sm mb-8" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
            <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-neutral-500">Selected Value</span>
            <h4 className="text-xl font-extrabold mb-3" style={{ color: COLORS.black }}>{selectedValue.label}</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.black }}>{selectedValue.desc}</p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
            {CORPORATE_INFO.map(({ label, val }, idx) => (
              <div
                key={label}
                className={`pb-3.5 mb-3.5 ${idx < CORPORATE_INFO.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: COLORS.border }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider block mb-1 text-neutral-500">{label}</span>
                <span className="text-[13px] font-extrabold" style={{ color: COLORS.black }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const contactItems = [
    { icon: Phone,  text: "+92 300 1234567" },
    { icon: Mail,   text: "info@ROYSONS.org" },
    { icon: MapPin, text: "123 Business Avenue, Lahore, Pakistan" },
  ];

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: COLORS.white, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}
    >
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-black mb-4 leading-tight" style={{ color: COLORS.black }}>
            Let&apos;s Build a Healthier, Smarter,<br />and More Sustainable Future Together.
          </h2>
          <div className="flex flex-wrap gap-6 mt-6">
            {contactItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={16} style={{ color: COLORS.primary }} />
                <span className="text-[13px] font-semibold" style={{ color: COLORS.black }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
          <PrimaryButton href="/contact" className="flex-1 lg:flex-none justify-center">
            Request Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-14 px-6 overflow-hidden bg-[#020f1f]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/roys_hospital_interior.png')", opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-[#020f1f]/92" />
      </div>

      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 items-start relative z-10">

        {/* Brand */}
        <div className="lg:col-span-4 max-w-sm">
          <Image
            src="/roys logo.png"
            alt="Roys & Roys Logo"
            width={180}
            height={50}
            className="object-contain mb-5 rounded-sm"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
          <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>
            Delivering specialized contracting excellence across healthcare systems, international procurement
            networks, technology infrastructure, and heavy engineering sectors.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/15 hover:border-white/40 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <Icon size={15} style={{ color: "rgba(255,255,255,0.9)" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(255,255,255,0.95)" }}>
              {heading}
            </h5>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[12.5px] transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="lg:col-span-2">
          <h5 className="text-[11px] font-black uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(255,255,255,0.95)" }}>
            Contact Us
          </h5>
          <div className="space-y-3.5">
            <p className="text-[12px] leading-relaxed flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
              <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.footerBlue }} />
              <span>123 Business Avenue,
Lahore, Pakistan</span>
            </p>
            <p className="text-[12px] flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
              <Phone size={14} className="flex-shrink-0" style={{ color: COLORS.footerBlue }} />
              <span>+92 300 1234567</span>
            </p>
            <p className="text-[12px] flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
              <Mail size={14} className="flex-shrink-0" style={{ color: COLORS.footerBlue }} />
              <span>info@ROYSONS.org</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-screen-xl mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p className="text-[11.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          &copy; 2026 ROYS &amp; ROYS International. All Rights Reserved. Member of ROYS Group.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service"].map((label) => (
            <a key={label} href="#" className="text-[11.5px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function RoysRoysPage() {
  const [activeTab, setActiveTab]       = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // Hero background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Page-scoped body class for theme isolation
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => document.body.classList.remove("roys-roys-theme");
  }, []);

  const activeCategory = PRODUCTS_TABS[activeTab];
  const filteredProductsCount = PRODUCTS.filter(p => p.category === activeCategory).length;

  const handleSlideLeft  = () => setProductIndex((prev) => (prev === 0 ? Math.max(0, filteredProductsCount - 1) : prev - 1));
  const handleSlideRight = () => setProductIndex((prev) => (prev === Math.max(0, filteredProductsCount - 1) ? 0 : prev + 1));

  const handleTabChange = (idx) => {
    setActiveTab(idx);
    setProductIndex(0);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.black }}>
      <Navbar />
      <HeroSection bgImageIndex={bgImageIndex} />
      <TrustedBanner />
      <AboutSection />
      <VisionMissionSection />
      <CoreBusinessSection />
      <ProductsSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        productIndex={productIndex}
        onSlideLeft={handleSlideLeft}
        onSlideRight={handleSlideRight}
      />
      <IndustriesSection />
      <WhyChooseSection />
      <ValuesAndCorporateSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
