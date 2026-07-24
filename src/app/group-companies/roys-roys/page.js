"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ChevronLeft,
  HeartPulse, BriefcaseMedical, FlaskConical, Microscope, Pill,
  Globe, ShieldCheck, Target, Award, Lightbulb, Leaf, Users, Star,
  Building2, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2,
  Linkedin, Facebook, Youtube, Instagram, Music,
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

const HERO_BACKGROUND_IMAGE = "/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg";

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
  { icon: ShieldCheck, title: "Trusted Government & Institutional Partner", desc: "Trusted partner for government contracts and institutional procurement." },
  { icon: Globe, title: "International Procurement & Global Sourcing Network", desc: "Access to a worldwide procurement and sourcing network." },
  { icon: Award, title: "Comprehensive Healthcare & Industrial Solutions", desc: "End-to-end healthcare and industrial systems delivered globally." },
  { icon: CheckCircle2, title: "Commitment to International Quality Standards", desc: "Ensuring compliance with global quality and regulatory standards." },
  { icon: Users, title: "Experienced Multidisciplinary Team", desc: "A team of professionals across engineering, healthcare, and logistics." },
  { icon: HeartPulse, title: "Reliable After-Sales Support & Technical Services", desc: "Dedicated support and technical service after delivery." },
  { icon: Lightbulb, title: "Customer-Centric Approach", desc: "Focused on tailored solutions and client satisfaction." },
  { icon: Star, title: "Innovation, Integrity & Excellence", desc: "Built on innovation, integrity, and operational excellence." },
];

const WHAT_WE_DO = [
  "Government Contracting & Procurement",
  "International Import & Export",
  "Global Trading & Supply Chain Management",
  "Manufacturing Solutions",
  "Strategic Consultancy Services",
  "Medical Devices & Healthcare Equipment",
  "Veterinary Healthcare Solutions",
  "Human & Veterinary Vaccines",
  "Surgical Disposable Products",
  "Medical Consumables",
  "Hospital & Medical Furniture",
  "Laboratory Equipment & Scientific Instruments",
  "Pharmaceutical Products",
  "Hospital Engineering & Infrastructure",
  "Turnkey Healthcare Projects",
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

const NAV_LINKS = ["Home", "About Us", "Solutions", "Products", "Industries", "What We Do", "Contact"];

const FOOTER_LINKS = {
  Company:    ["About Us", "Our Values", "Careers", "News & Media"],
  Solutions:  ["Healthcare Technologies", "Hospital Engineering", "Laboratory Solutions", "Clean Room Systems"],
  Industries: ["Hospitals", "Government", "Pharmaceutical", "Research Centers"],
};

// Footer social links: set `href` to the desired URL and `newTab: true` to open in a new tab
const SOCIAL_LINKS = [
  { label: "Facebook", Icon: Facebook, href: "#", newTab: false },
  { label: "Instagram", Icon: Instagram, href: "#", newTab: false },
  { label: "LinkedIn", Icon: Linkedin, href: "#", newTab: false },
  { label: "YouTube", Icon: Youtube, href: "#", newTab: false },
  { label: "TikTok", Icon: Music, href: "#", newTab: false },
];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-8">
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
      className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
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

function TiktokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16.5 3.5v6.5a4 4 0 1 1-4-4" />
      <path d="M12.5 13.5V21a3 3 0 1 1-3-3" />
      <path d="M16.5 10.5h1.5a2 2 0 1 1-2 2V8.5" />
    </svg>
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
            <button
              key={item}
              type="button"
              onClick={() => {
                const idMap = {
                  "Home": "home",
                  "About Us": "about-us",
                  "Solutions": "solutions",
                  "Products": "products",
                  "Industries": "industries",
                  "Projects": "projects",
                  "Contact": "contact",
                };
                const id = idMap[item] || item.toLowerCase().replace(/\s+/g, "-");
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-[12.5px] font-bold uppercase tracking-wider bg-transparent border-0 cursor-pointer"
              style={{ color: COLORS.black }}
            >
              {item}
            </button>
          ))}
        </nav>

        <Link
          href="#protfolio"
          className="px-5 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:bg-[#009088]"
          style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
        >
          Our Projects
        </Link>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative py-12 lg:py-20 px-6 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)" }}
        />
      </div>

      <div className="mx-auto max-w-screen-xl relative z-10">
        <div className="max-w-3xl">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.4em] mb-4" style={{ color: COLORS.white }}>
            Global Trade • Government Contracting • Healthcare Solutions
          </p>
          <h1 className="text-2xl lg:text-4xl font-black leading-tight mb-6" style={{ color: COLORS.white }}>
            Delivering Excellence Through Global Trade, Innovation & Strategic Partnerships
          </h1>
          <p className="text-[16px] leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
            ROYS & ROYS International is a diversified international business company specializing in government contracting, import & export, consultancy, manufacturing, medical devices, veterinary healthcare, vaccines, surgical disposables, and healthcare infrastructure. We deliver reliable, innovative, and sustainable solutions to public and private sector organizations worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#what-we-do">Explore Our Services <ArrowRight size={15} /></PrimaryButton>
            <OutlineButton href="#contact">Contact Our Team <ArrowRight size={15} /></OutlineButton>
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
    <section className="py-3 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-[11px] font-black tracking-[0.24em] text-neutral-500 uppercase mb-3">
          TRUSTED BY LEADING ORGANIZATIONS
        </p>

        <div className="relative overflow-hidden rounded-[32px] border-0 shadow-none bg-transparent">
          <div
            className="flex gap-2 transition-transform duration-500 ease-in-out px-4 py-3"
            style={{ transform: `translateX(-${activeLogo * (100 / visibleCount)}%)` }}
          >
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex-shrink-0 rounded-[28px] bg-transparent border-0 p-3 flex items-center justify-center shadow-none"
                style={{ minWidth: `${100 / visibleCount}%` }}
              >
                {logo.img ? (
                  <div className="relative w-full h-14">
                    <Image
                      src={logo.img}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="220px"
                    />
                  </div>
                ) : (
                  <span className="text-[16px] font-black tracking-wider text-neutral-800">{logo.abbr}</span>
                )}
              </div>
            ))}
          </div>

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
    <section id="about-us" className="py-12 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Text */}
        <div className="flex-1 max-w-lg">
          <span className="text-[20px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            ABOUT US
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.black }}>
            Delivering Excellence Through Global Trade, Innovation & Strategic Partnerships
          </h2>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            ROYS & ROYS International is a diversified international business company committed to delivering world-class solutions across government contracting, international trade, healthcare, manufacturing, consultancy, and engineering. As the flagship company of ROYS Group of Companies, we serve public and private sector organizations with a strong focus on quality, innovation, reliability, and sustainable growth.
          </p>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            With extensive experience in government procurement, import and export operations, strategic consultancy, manufacturing, medical device supplies, veterinary healthcare, vaccines, surgical disposables, laboratory solutions, and hospital infrastructure, we provide comprehensive solutions tailored to the evolving needs of our clients.
          </p>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            Our global sourcing network and strategic partnerships enable us to deliver premium-quality products and services while maintaining international standards of excellence. From supplying advanced medical equipment and veterinary solutions to managing turnkey healthcare projects and government contracts, we are committed to creating long-term value for our customers and stakeholders.
          </p>
          <p className="text-[14px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            At ROYS & ROYS International, we believe that trust, integrity, innovation, and customer satisfaction are the foundations of every successful partnership. Our multidisciplinary team works closely with government agencies, healthcare institutions, industries, research organizations, and commercial enterprises to deliver reliable, cost-effective, and future-ready solutions.
          </p>
          <p className="text-[14px] leading-relaxed mb-8" style={{ color: COLORS.black }}>
            Driven by a vision to become a globally recognized leader, we continue to expand our capabilities across international markets while contributing to economic development, technological advancement, and community well-being.
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
          <PrimaryButton href="#contact" className="w-fit">
            Get in Touch <ArrowRight size={15} />
          </PrimaryButton>
        </div>

        {/* Right: Image showcase */}
        <div className="flex-1 w-full grid gap-4">
          {/* Duplicated top images (same as bottom) */}
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
          {/* Main large image */}
          <div className="relative h-[520px] rounded-[32px] overflow-hidden shadow-2xl border" style={{ borderColor: COLORS.border }}>
            <Image
              src="/roys_hospital_interior.png"
              alt="Hospital interior operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Bottom images */}
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
    <section className="py-8 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-6">
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

function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-8 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="WHAT WE DO" title="Our Service Offerings" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHAT_WE_DO.map((item) => (
            <div
              key={item}
              className="rounded-lg border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: COLORS.border }}
            >
              <p className="text-[14px] font-semibold leading-tight" style={{ color: COLORS.black }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreBusinessSection() {
  return (
    <section id="solutions" className="py-12 px-6" style={{ backgroundColor: COLORS.white }}>
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
    <section id="products" className="py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="PORTFOLIO" title="Products & Solutions" />

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-5 justify-center border-b pb-3" style={{ borderColor: COLORS.border }}>
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
        <div className="flex items-center justify-center">
          <div className="w-full overflow-hidden px-6">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${productIndex * 260}px)`, width: "max-content" }}
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
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="MARKET SECTORS" title="Industries We Serve" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="p-5 border rounded-lg text-center flex flex-col items-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
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
    <section className="py-8 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="COMPETITIVE VALUE" title="Why Choose Roys & Roys International?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 border border-[#e2e8f0] rounded-lg flex gap-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#113658]"
              style={{ backgroundColor: COLORS.white }}
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
    <section className="py-12 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-start">

        {/* LEFT: Selected Value box + Value Cards below */}
        <div className="lg:col-span-5">
          {/* Selected Value box - top left */}
          <div className="border rounded-lg p-5 shadow-sm mb-6" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
            <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-neutral-500">Selected Value</span>
            <h4 className="text-xl font-extrabold mb-2" style={{ color: COLORS.black }}>{selectedValue.label}</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.black }}>{selectedValue.desc}</p>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            WHAT WE STAND FOR
          </span>
          <h3 className="text-2xl font-extrabold mb-6 uppercase" style={{ color: COLORS.black }}>Our Values</h3>
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

        {/* RIGHT: Corporate Info only */}
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            OFFICIAL DETAILS
          </span>
          <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLORS.black }}>Corporate Info</h3>

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
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 px-6"
      style={{ backgroundColor: COLORS.white, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}
    >
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[45%]">
        <div className="relative h-full">
          <Image
            src="/roysandroys contact.png"
            alt="Roys & Roys contact image"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/75 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
              CONTACT US
            </span>
            <h2 className="text-3xl lg:text-4xl font-black mb-5 leading-tight" style={{ color: COLORS.black }}>
              Let&apos;s Build Stronger Partnerships Together
            </h2>
            <p className="text-[15px] leading-relaxed max-w-3xl" style={{ color: COLORS.black }}>
              Whether you&apos;re looking for a trusted partner in government contracting, international trade, healthcare solutions, manufacturing, or consultancy, ROYS & ROYS International is ready to support your business with reliable, innovative, and high-quality solutions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mt-10">
              {[
                { title: "Trusted Partner", description: "Reliable collaboration you can count on." },
                { title: "Quality Solutions", description: "High-quality services built for your success." },
                { title: "Global Reach", description: "International expertise with local understanding." },
                { title: "Dedicated Support", description: "Our team is here to assist you always." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-[13px] font-black mb-2" style={{ color: COLORS.primary }}>{item.title}</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: COLORS.black }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2" style={{ color: COLORS.black }}>
                  Send Us a Message
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: COLORS.black }}>
                  Share your requirements and our team will get back to you shortly.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  />
                  <input
                    type="text"
                    placeholder="Company Name *"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                />
                <select
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                >
                  <option>Select Service</option>
                  {WHAT_WE_DO.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <textarea
                  rows={5}
                  placeholder="Your Message *"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                />
                <button
                  type="button"
                  className="w-full rounded-2xl bg-[#113658] px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#0d2c4f]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
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
            src="/roysandroys white log.png"
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
            {SOCIAL_LINKS.map(({ label, Icon, href, newTab }, idx) => {
              const target = newTab ? "_blank" : undefined;
              const rel = newTab ? "noopener noreferrer" : undefined;
              return (
                <a
                  key={idx}
                  href={href}
                  title={label}
                  target={target}
                  rel={rel}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/15 hover:border-white/40 transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                >
                  <Icon size={15} style={{ color: "rgba(255,255,255,0.9)" }} />
                </a>
              );
            })}
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
        className="mx-auto max-w-screen-xl mt-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p className="text-[11.5px]" style={{ color: "rgba(255, 255, 255, 0.93)" }}>
          &copy; 2026 ROYS &amp; ROYS International. All Rights Reserved. Member of ROYS Group.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service"].map((label) => (
            <a key={label} href="#" className="text-[11.5px] hover:text-white transition-colors duration-200" style={{ color: "rgb(255, 255, 255)" }}>
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
      <HeroSection />
      <TrustedBanner />
      <AboutSection />
      <VisionMissionSection />
      <WhatWeDoSection />
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
