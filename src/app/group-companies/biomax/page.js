"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { BiomaxNavbar, BiomaxFooter, HeroPrimaryButton, HeroOutlineButton } from "./components/BiomaxShared";
import "./biomax.css";
import {
  ChevronRight, ChevronLeft, ChevronDown, ArrowRight,
  FlaskConical, Microscope, HeartPulse, Building2, GraduationCap, Pill, Landmark,
  Dna, TestTube, Wrench, Truck, ShieldCheck, Target, Eye, Sparkles,
  CheckCircle2, Users, Gauge, Package, ClipboardCheck, Recycle, Settings,
  Phone, Mail, MapPin, Star, Facebook, Linkedin, Twitter, Youtube, Plus, Minus,
  Activity, Award, Clock
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:    "#165B7E",      // BioMax Teal-Blue (from "BIO MAX" & Cross)
  primaryDk:  "#0D3A52",      // Deep Navy Teal
  accent:     "#1D906C",      // BioMax DNA Emerald Green (from Helix)
  accentDk:   "#136B50",      // Deep Forest Green
  accentRed:  "#7B1C2A",      // BioMax Crimson Red (from "CORPORATION")
  white:      "#ffffff",      // Pure White Background
  ink:        "#165B7E",      // Teal-Blue Headings & Title Text
  muted:      "#1F4E68",      // Medium Slate Teal-Blue Body Text
  greenText:  "#1D906C",      // DNA Green Accent Text
  border:     "#d7e5ec",      // Crisp Border
  lightBg:    "#ffffff",      // Pure White
  footerBg:   "#0D2B3D",      // Deep Brand Navy Teal Footer
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/group-companies/biomax/about" },
  { label: "Products", href: "/group-companies/biomax/solutions", dropdown: true },
  { label: "Research & Development", href: "/group-companies/biomax/rnd" },
  { label: "Quality Assurance", href: "/group-companies/biomax/quality" },
  { label: "Industries", href: "/group-companies/biomax/industries" },
];

const TRUSTED_BY = [
  { icon: FlaskConical,     label: "Research\nLaboratories" },
  { icon: HeartPulse,       label: "Diagnostic\nCenters" },
  { icon: Building2,        label: "Hospitals &\nClinical Labs" },
  { icon: GraduationCap,    label: "Universities &\nAcademic Institutions" },
  { icon: Pill,             label: "Pharmaceutical\nCompanies" },
  { icon: Landmark,         label: "Government Health\nDepartments" },
];


const HERO_SLIDES = [
  {
    id: 1,
    image: "/biomax_hero_slide_1.jpg",
    alt: "BioMax Automated Genomics & DNA Sequencing Platforms",
    badge: "Genomics & Automated Sequencing",
    title: "Automated Robotic Pipetting Workstations",
    desc: "Automated liquid handling with sub-microliter precision for genomics and molecular diagnostics.",
    specBadge: "Precision Verified",
    specValue: "99.98% Robotic Precision",
    icon: Dna,
    tabLabel: "Genomics",
  },
  {
    id: 2,
    image: "/biomax_hero_slide_2.jpg",
    alt: "BioMax Clinical Pathology & Diagnostic Analyzers",
    badge: "Clinical Pathology Systems",
    title: "Automated Diagnostic Analyzers & Spectrophotometry",
    desc: "Continuous multi-channel pathology testing for hospital and commercial diagnostic hubs.",
    specBadge: "Clinical Standard",
    specValue: "ISO 13485 • Rapid Turnaround",
    icon: HeartPulse,
    tabLabel: "Pathology",
  },
  {
    id: 3,
    image: "/biomax_hero_slide_3.jpg",
    alt: "BioMax Molecular Biology & Cellular Imaging",
    badge: "Advanced Optics & Imaging",
    title: "Confocal Fluorescence Microscopy Systems",
    desc: "Sub-micron optical resolution and microfluidic testing for university research laboratories.",
    specBadge: "Advanced Optics",
    specValue: "4K Laser Confocal Optics",
    icon: Microscope,
    tabLabel: "Imaging",
  },
  {
    id: 4,
    image: "/biomax_products_hero_ai.jpg",
    alt: "BioMax Turnkey Scientific Laboratory Solutions",
    badge: "Turnkey Lab Infrastructure",
    title: "Integrated Laboratory Instrumentation & Cleanrooms",
    desc: "End-to-end laboratory design, sterile cleanroom systems, and analytical benches.",
    specBadge: "Turnkey Excellence",
    specValue: "150+ Systems • Full Deployment",
    icon: FlaskConical,
    tabLabel: "Turnkey",
  },
];

const TRUSTED_SECTORS = [
  {
    icon: FlaskConical,
    title: "Research Laboratories",
    badge: "50+ R&D Centers",
    tagline: "Genomics, Proteomics & Materials",
    description: "Equipping molecular biology and analytical chemistry labs with high-precision instrumentation and sterile testing workflows.",
    stats: "Turnkey R&D Setup",
    metric: "50+ Active Labs",
  },
  {
    icon: HeartPulse,
    title: "Diagnostic Centers",
    badge: "120+ Diagnostic Labs",
    tagline: "Hematology & Biochemistry",
    description: "Automated pathology analyzers delivering rapid turnaround with clinical precision and high-throughput reliability.",
    stats: "Rapid Precision",
    metric: "120+ Diagnostic Units",
  },
  {
    icon: Building2,
    title: "Hospitals & Clinical Labs",
    badge: "80+ Hospital Systems",
    tagline: "Point-of-Care & Critical Care",
    description: "High-uptime, 24/7 reliable diagnostic equipment supporting emergency, surgical, and critical patient workflows.",
    stats: "24/7 Clinical Grade",
    metric: "80+ Hospital Systems",
  },
  {
    icon: GraduationCap,
    title: "Universities & Academia",
    badge: "45+ Universities",
    tagline: "Teaching & Student Benches",
    description: "Specialized workstations, spectrophotometers, and scientific instruments supporting life science education and faculty research.",
    stats: "Academic Excellence",
    metric: "45+ Campuses",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Companies",
    badge: "35+ Pharma Plants",
    tagline: "Quality Control & Drug Formulation",
    description: "GMP and GLP compliant testing platforms for rigorous pharmaceutical batch assurance and sterility validation.",
    stats: "GMP/GLP Compliant",
    metric: "35+ Pharma Hubs",
  },
  {
    icon: Landmark,
    title: "Government Health Bodies",
    badge: "15+ Public Health Hubs",
    tagline: "Surveillance & Disease Control",
    description: "National diagnostic pipelines, epidemiology centers, and reference laboratory networks for public health safety.",
    stats: "National Quality",
    metric: "15+ Public Agencies",
  },
];

const CORE_VALUES = [
  { icon: Sparkles,      label: "Innovation" },
  { icon: Target,        label: "Precision" },
  { icon: ShieldCheck,   label: "Integrity" },
  { icon: Star,          label: "Scientific\nExcellence" },
  { icon: CheckCircle2,  label: "Reliability" },
  { icon: Users,         label: "Customer\nFocus" },
  { icon: Recycle,       label: "Sustainability" },
];

const SOLUTIONS = [
  { icon: Microscope,       title: "Laboratory Equipment",              desc: "Advanced instruments and machinery for research, testing, and analysis.", href: "/group-companies/biomax/solutions/lab-equipment" },
  { icon: HeartPulse,       title: "Diagnostic Systems",                desc: "Precise diagnostic technologies for accurate clinical and research results.", href: "/group-companies/biomax/solutions/diagnostic-equipment" },
  { icon: Dna,              title: "Biotechnology Solutions",           desc: "Innovative biological tools and reagents supporting cutting-edge research.", href: "/group-companies/biomax/solutions/biotech-solutions" },
  { icon: TestTube,         title: "Molecular & Genetic Testing Equipment", desc: "Specialized systems for PCR, sequencing, and genetic analysis.", href: "/group-companies/biomax/solutions/biotech-solutions" },
  { icon: FlaskConical,     title: "Laboratory Consumables & Reagents", desc: "High-quality supplies for consistent and reliable lab operations.", href: "/group-companies/biomax/solutions/consumables" },
  { icon: Target,           title: "Research Instruments",              desc: "Precision tools designed for academic and scientific research institutions.", href: "/group-companies/biomax/solutions/scientific-instruments" },
  { icon: Building2,        title: "Clinical Laboratory Solutions",     desc: "Complete systems supporting hospital and diagnostic laboratory workflows.", href: "/group-companies/biomax/solutions/diagnostic-equipment" },
  { icon: Settings,         title: "Calibration & Maintenance Services",desc: "Ensuring equipment accuracy and long-term operational reliability.", href: "/group-companies/biomax/solutions/lab-equipment" },
];

const WHY_CHOOSE = [
  { title: "International Quality Standards", desc: "Every product meets strict global quality benchmarks." },
  { title: "Research-Driven Innovation",      desc: "Continuous investment in the latest biotechnology advancements." },
  { title: "Expert Technical Team",           desc: "Scientists and engineers with deep industry expertise." },
  { title: "Accurate & Reliable Systems",     desc: "Equipment tested for precision and consistent performance." },
  { title: "Nationwide Supply Network",       desc: "Timely delivery and installation across all regions." },
  { title: "Dedicated Technical Support",     desc: "Ongoing consultation, training, and after-sales service." },
];

const INDUSTRIES = [
  { icon: FlaskConical,  label: "Research Laboratories", href: "/group-companies/biomax/industries/research-institutions" },
  { icon: HeartPulse,    label: "Diagnostic Centers", href: "/group-companies/biomax/industries/healthcare-diagnostics" },
  { icon: Building2,     label: "Hospitals & Clinics", href: "/group-companies/biomax/industries/healthcare-diagnostics" },
  { icon: GraduationCap, label: "Universities & Academic Institutes", href: "/group-companies/biomax/industries/universities-education" },
  { icon: Pill,          label: "Pharmaceutical Companies", href: "/group-companies/biomax/industries/pharmaceutical-industry" },
  { icon: Dna,           label: "Biotechnology Firms", href: "/group-companies/biomax/industries/biotechnology" },
  { icon: Landmark,      label: "Government Health Institutions", href: "/group-companies/biomax/industries/research-institutions" },
  { icon: TestTube,      label: "Industrial Testing Laboratories", href: "/group-companies/biomax/industries/industrial-laboratories" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation",        desc: "Understanding client requirements and lab needs." },
  { step: "02", title: "Product Sourcing",    desc: "Selecting the right equipment and solutions." },
  { step: "03", title: "Quality Verification",desc: "Ensuring international compliance standards." },
  { step: "04", title: "Installation & Setup",desc: "Professional on-site setup and calibration." },
  { step: "05", title: "Training & Support",  desc: "Staff training for optimal equipment use." },
  { step: "06", title: "After-Sales Service", desc: "Ongoing maintenance and technical assistance." },
];

const STATS = [
  { value: "150+",  label: "Laboratory\nProducts" },
  { value: "20+",   label: "Technical\nExperts" },
  { value: "300+",  label: "Institutional\nPartners" },
  { value: "5,000+",label: "Successful\nInstallations" },
  { value: "10+",   label: "Regions\nServed" },
  { value: "98%",   label: "Client\nSatisfaction" },
];

const QUALITY_POINTS = [
  { icon: Target,          label: "Accuracy" },
  { icon: ShieldCheck,     label: "Reliability" },
  { icon: Package,         label: "Durability" },
  { icon: ClipboardCheck,  label: "Regulatory\nCompliance" },
  { icon: Gauge,           label: "Performance\nConsistency" },
];

const TESTIMONIALS = [
  { name: "Dr. Sara Malik",  role: "Research Director",        quote: "BIO MAX CORPORATION's equipment has significantly improved the efficiency of our research processes." },
  { name: "Ahmed Raza",      role: "Lab Manager, Diagnostic Center", quote: "Professional support and dependable equipment — exactly what our lab needed." },
  { name: "Prof. Bilal Khan",role: "University Research Head",  quote: "Their technical team is knowledgeable and always available for guidance." },
];

const FAQS = [
  { q: "What products do you offer?", a: "We supply laboratory equipment, diagnostic systems, biotechnology solutions, molecular testing equipment, consumables, and calibration services." },
  { q: "Which industries do you serve?", a: "We serve research laboratories, hospitals, universities, pharmaceutical companies, government health institutions, and forensic labs." },
  { q: "Do you provide installation support?", a: "Yes, our technical team provides full on-site installation, calibration, and staff training." },
  { q: "Are your products internationally certified?", a: "All products meet international quality and regulatory compliance standards." },
  { q: "Do you offer maintenance services?", a: "Yes, we provide ongoing calibration, maintenance, and after-sales technical support." },
];

const FOOTER_LINKS = {
  "Quick Links": ["Home", "About", "Products", "Research", "Quality Assurance", "Our Services"],
  "Products": ["Laboratory Equipment", "Diagnostic Systems", "Biotechnology Solutions", "Research Instruments", "Consumables", "Clinical Solutions"],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-2" style={{ color: COLORS.primary }}>
        {eyebrow}
      </span>
      <h2 className="text-2xl lg:text-3xl font-extrabold uppercase" style={{ color: COLORS.accent }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[13px] mt-2" style={{ color: COLORS.muted }}>{subtitle}</p>
      )}
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-6 py-3 rounded-md text-[12.5px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 ${className}`}
      style={{ 
        backgroundColor: isHovered ? COLORS.accent : COLORS.primary, 
        color: "#ffffff" 
      }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-6 py-3 rounded-md text-[12.5px] font-bold uppercase tracking-wide border flex items-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      style={{ 
        borderColor: isHovered ? COLORS.accent : COLORS.primary, 
        backgroundColor: isHovered ? COLORS.accent : "transparent",
        color: isHovered ? "#ffffff" : COLORS.primary 
      }}
    >
      {children}
    </Link>
  );
}

// ─── Animated Counter Helpers ───────────────────────────────────────────────

function parseStatValue(val) {
  const raw = String(val).replace(/,/g, "");
  const suffix = raw.match(/[+%]$/)?.[0] ?? "";
  const num = parseFloat(raw);
  const hasComma = String(val).includes(",");
  return { num, suffix, hasComma };
}

function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!shouldStart) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);
  return count;
}

function AnimatedStatBiomax({ value, label, accentColor }) {
  const { num, suffix, hasComma } = parseStatValue(value);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = hasComma ? count.toLocaleString("en-US") : count;

  return (
    <div
      ref={ref}
      className="p-5 rounded-xl border bg-white text-center shadow-sm biomax-counter-box cursor-pointer"
      style={{ borderColor: COLORS.border }}
    >
      <p className="text-2xl lg:text-3xl font-black" style={{ color: accentColor ?? COLORS.accent }} suppressHydrationWarning>
        {display}{suffix}
      </p>
      <p className="text-[11px] font-bold mt-1 whitespace-pre-line leading-tight" style={{ color: COLORS.primary }}>
        {label}
      </p>
    </div>
  );
}

// ─── Page Sections ──────────────────────────────────────────────────────────

function scrollToSection(e, href) {
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const targetId = href.replace("#", "");
  const el = document.getElementById(targetId);
  if (el) {
    const navOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

const BIOMAX_SECTION_IDS = ["home", "about", "solutions", "rnd", "quality", "industries", "contact"];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      id="home"
      className="section-animate relative min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] flex items-center overflow-hidden border-b"
      style={{ borderColor: COLORS.border }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── BACKGROUND SLIDER IMAGES ── */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {HERO_SLIDES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center transform transition-transform duration-7000 scale-105"
              sizes="100vw"
            />
          </div>
        ))}

        {/* High-Contrast Scientific Gradient Overlay: Ensures crystal clear typography */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              110deg,
              rgba(13, 43, 61, 0.96) 0%,
              rgba(13, 58, 82, 0.90) 45%,
              rgba(13, 58, 82, 0.75) 75%,
              rgba(29, 144, 108, 0.40) 100%
            )`,
          }}
        />

        {/* High-tech radial glow */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 85% 45%, rgba(46, 230, 173, 0.22) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── CONTENT OVERLAY DIRECTLY ON TOP OF IMAGE ── */}
      <div className="mx-auto max-w-screen-xl relative z-20 w-full px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 space-y-7">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-black uppercase tracking-wider backdrop-blur-md shadow-lg border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.35)",
                color: "#ffffff",
              }}
            >
              <ShieldCheck size={16} className="text-[#2ee6ad]" />
              <span>Advancing Laboratory Science &amp; Biotechnology</span>
              <span className="w-2 h-2 rounded-full bg-[#2ee6ad] animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-black leading-[1.08] tracking-tight text-white drop-shadow-md">
              BIOTECHNOLOGY &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ee6ad] via-[#65e8b5] to-[#ffffff]">
                LABORATORY SOLUTIONS
              </span>
            </h1>

            <p className="text-[17px] sm:text-[19px] lg:text-[21px] font-medium leading-relaxed max-w-2xl text-slate-100/95 drop-shadow-xs">
              Supplying advanced scientific equipment, high-precision laboratory systems, and biotechnology solutions for research, healthcare, and diagnostic institutions.
            </p>

            <div className="flex flex-wrap gap-5 pt-2">
              <HeroPrimaryButton href="/group-companies/biomax/solutions">
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/biomax/contact">
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </HeroOutlineButton>
            </div>

            {/* Quick Hero Highlights Bar */}
            <div
              className="pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-4"
              style={{ borderColor: "rgba(255, 255, 255, 0.22)" }}
            >
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-2xl sm:text-3xl font-black text-white">150+</p>
                <p className="text-[13px] font-bold text-slate-200 mt-0.5">Lab Products</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-2xl sm:text-3xl font-black text-[#2ee6ad]">99.8%</p>
                <p className="text-[13px] font-bold text-slate-200 mt-0.5">Precision Benchmark</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-2xl sm:text-3xl font-black text-white">300+</p>
                <p className="text-[13px] font-bold text-slate-200 mt-0.5">Partner Labs</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <p className="text-2xl sm:text-3xl font-black text-[#2ee6ad]">24/7</p>
                <p className="text-[13px] font-bold text-slate-200 mt-0.5">Field Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Slide Control Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className="p-6 sm:p-7 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: "rgba(13, 43, 61, 0.80)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2ee6ad] animate-pulse" />
                  <span className="text-[12px] font-black uppercase tracking-widest text-[#2ee6ad]">
                    {slide.badge}
                  </span>
                </div>
                <div
                  className="w-12 py-2 rounded-2xl backdrop-blur-md border border-white/25 shadow-md flex flex-col items-center justify-center text-center select-none"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <span className="text-[13px] font-black text-white leading-none">
                    0{currentSlide + 1}
                  </span>
                  <span className="text-[11px] font-black text-white/80 leading-none my-1 select-none">
                    /
                  </span>
                  <span className="text-[13px] font-black text-white leading-none">
                    0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/15 border border-white/20 text-[#2ee6ad]">
                <SlideIcon size={28} />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                {slide.title}
              </h3>

              <p className="text-[14.5px] sm:text-[15.5px] text-slate-200 leading-relaxed mb-5 font-medium">
                {slide.desc}
              </p>

              {/* Spec Pill */}
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#2ee6ad]">{slide.specBadge}</p>
                  <p className="text-[14px] font-black text-white">{slide.specValue}</p>
                </div>
                <CheckCircle2 size={20} className="text-[#2ee6ad]" />
              </div>

              {/* Prev / Next & Progress Indicators */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-11 h-11 rounded-full bg-white/15 hover:bg-[#1D906C] text-white border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-11 h-11 rounded-full bg-white/15 hover:bg-[#1D906C] text-white border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? "w-8 bg-[#2ee6ad]" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Quick Slide Switch Buttons */}
            <div className="grid grid-cols-4 gap-2">
              {HERO_SLIDES.map((item, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`py-2.5 px-1 rounded-xl text-center transition-all duration-200 cursor-pointer border backdrop-blur-md ${
                      isActive
                        ? "bg-[#2ee6ad] text-[#0D3A52] font-black border-[#2ee6ad] shadow-lg scale-[1.03]"
                        : "bg-white/10 text-white/90 font-bold border-white/15 hover:bg-white/20"
                    }`}
                  >
                    <span className="block text-[12.5px] truncate">{item.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="section-animate py-14 lg:py-18 px-6 bg-white border-b" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest border bg-white mb-3 shadow-xs"
            style={{ color: COLORS.accent, borderColor: COLORS.border }}
          >
            <ShieldCheck size={14} style={{ color: COLORS.accent }} />
            <span>Trusted Institutional Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight" style={{ color: COLORS.primary }}>
            Powering High-Impact Laboratories Across 6 Core Sectors
          </h2>
          <p className="text-[14px] sm:text-[15px] font-medium mt-3 leading-relaxed" style={{ color: COLORS.muted }}>
            Bio Max Corporation instruments, reagents, and engineering workflows are deployed across Pakistan’s leading healthcare networks, accredited research institutes, and clinical laboratories.
          </p>
        </div>

        {/* 6 Attractive Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUSTED_SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="group relative p-6 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
                style={{ borderColor: COLORS.border }}
              >
                {/* Top Glowing Gradient Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1D906C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div>
                  {/* Top Bar: Icon & Pill Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                      style={{
                        backgroundColor: "rgba(22, 91, 126, 0.08)",
                        border: "1px solid rgba(22, 91, 126, 0.15)",
                      }}
                    >
                      <Icon size={26} style={{ color: COLORS.primary }} className="group-hover:text-[#1D906C] transition-colors" />
                    </div>

                    <span
                      className="text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border shadow-xs"
                      style={{
                        backgroundColor: "#f0fdf7",
                        borderColor: "#c6f1dc",
                        color: COLORS.accent,
                      }}
                    >
                      {sector.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-[17px] font-black mb-1 group-hover:text-[#1D906C] transition-colors" style={{ color: COLORS.primary }}>
                    {sector.title}
                  </h3>
                  <p className="text-[12px] font-bold uppercase tracking-wider mb-2.5 text-[#1D906C]">
                    {sector.tagline}
                  </p>
                  <p className="text-[13px] leading-relaxed font-medium" style={{ color: COLORS.muted }}>
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Institutional Trust Metrics Ribbon */}
        <div
          className="mt-10 p-6 sm:p-7 rounded-2xl border bg-gradient-to-r from-[#f8fcfa] via-white to-[#f4f9fc] shadow-sm flex flex-wrap items-center justify-around gap-6 text-center"
          style={{ borderColor: COLORS.border }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#165B7E]/10 text-[#165B7E]">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-left">
              <p className="text-[17px] font-black text-[#165B7E]">300+ Deployments</p>
              <p className="text-[11.5px] font-bold text-[#1F4E68]">Across Major Clinical &amp; R&amp;D Hubs</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-slate-200" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#1D906C]/10 text-[#1D906C]">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <p className="text-[17px] font-black text-[#1D906C]">ISO 17025 &amp; 13485</p>
              <p className="text-[11.5px] font-bold text-[#1F4E68]">Certified Quality &amp; Calibration Benchmarks</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-slate-200" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#165B7E]/10 text-[#165B7E]">
              <Settings size={20} />
            </div>
            <div className="text-left">
              <p className="text-[17px] font-black text-[#165B7E]">24/7 Field Support</p>
              <p className="text-[11.5px] font-bold text-[#1F4E68]">On-Site Calibration &amp; Engineering Teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const whyChoosePoints = [
    { title: "Reliable Scientific Equipment", icon: Microscope, desc: "High-precision instrumentation and laboratory analyzers tested for durability." },
    { title: "Laboratory & Diagnostic Solutions", icon: HeartPulse, desc: "End-to-end diagnostic systems and workflow optimizations." },
    { title: "Technical Expertise", icon: Users, desc: "Engineers and scientific specialists providing calibration and protocol guidance." },
    { title: "Quality-Focused Products", icon: ShieldCheck, desc: "International compliance with ISO, CE, and rigorous laboratory benchmarks." },
    { title: "Professional Customer Support", icon: CheckCircle2, desc: "Responsive technical assistance, installation, and ongoing maintenance." },
    { title: "Solutions for Multiple Industries", icon: Building2, desc: "Serving research, healthcare, academic, diagnostic, and industrial sectors." },
  ];

  return (
    <section id="about" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl space-y-12">
        {/* Main Header & Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-widest block mb-2.5" style={{ color: COLORS.primary }}>
              02 — ABOUT US
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-4" style={{ color: COLORS.accent }}>
              About Bio Max Corporation
            </h2>
            <p className="text-[18px] sm:text-[20px] font-extrabold mb-4" style={{ color: COLORS.primary }}>
              Empowering Laboratories with Advanced Scientific Technology
            </p>
            <div className="space-y-4 text-[16px] sm:text-[17.5px] leading-relaxed" style={{ color: COLORS.ink }}>
              <p>
                Bio Max Corporation is a biotechnology and laboratory solutions company focused on providing reliable scientific equipment, laboratory systems, and technical solutions to research, healthcare, diagnostic, educational, and industrial institutions.
              </p>
              <p>
                We work with laboratories and organizations that require dependable technology, quality products, and professional support for their scientific and diagnostic operations.
              </p>
              <p>
                Our approach combines quality, technical expertise, innovation, and customer support to help laboratories operate efficiently and achieve accurate and consistent results.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: COLORS.border }}>
              <Image 
                src="/biomax_research_lab.jpg" 
                alt="Bio Max Corporation laboratory equipment and scientific research" 
                fill 
                className="object-cover object-center" 
                sizes="600px" 
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div
            className="p-8 rounded-2xl border transition-all duration-300 shadow-sm"
            style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}18` }}>
                <Target size={20} style={{ color: COLORS.primary }} />
              </div>
              <h3 className="text-xl font-extrabold" style={{ color: COLORS.primary }}>
                Our Mission
              </h3>
            </div>
            <p className="text-[14px] leading-relaxed" style={{ color: COLORS.muted }}>
              To provide high-quality biotechnology and laboratory solutions that support scientific research, diagnostics, education, and industrial development.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="p-8 rounded-2xl border transition-all duration-300 shadow-sm"
            style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${COLORS.accent}18` }}>
                <Eye size={20} style={{ color: COLORS.accent }} />
              </div>
              <h3 className="text-xl font-extrabold" style={{ color: COLORS.accent }}>
                Our Vision
              </h3>
            </div>
            <p className="text-[14px] leading-relaxed" style={{ color: COLORS.muted }}>
              To become a trusted provider of advanced laboratory and biotechnology solutions, contributing to scientific progress and better research outcomes.
            </p>
          </div>
        </div>

        {/* Why Choose Bio Max? 6 Key Pillars */}
        <div className="pt-4">
          <div className="mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>
              PROVEN VALUE
            </span>
            <h3 className="text-2xl font-black" style={{ color: COLORS.accent }}>
              Why Choose Bio Max?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoosePoints.map(({ title, icon: Icon, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: COLORS.border }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${COLORS.primary}12` }}
                  >
                    <Icon size={20} style={{ color: COLORS.primary }} />
                  </div>
                  <h4 className="text-[14.5px] font-black" style={{ color: COLORS.ink }}>
                    {title}
                  </h4>
                </div>
                <p className="text-[12.5px] leading-relaxed" style={{ color: COLORS.muted }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="OUR SOLUTIONS" title="Complete Biotechnology & Laboratory Portfolio" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SOLUTIONS.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={href || "/group-companies/biomax/solutions"}
              className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md hover:border-[#1D906C] hover:-translate-y-1.5 transition-all flex flex-col justify-between group cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${COLORS.primary}12` }}>
                  <Icon size={26} style={{ color: COLORS.primary }} />
                </div>
                <h4 className="text-[16px] sm:text-[17px] font-black mb-2 group-hover:text-[#1D906C] transition-colors" style={{ color: COLORS.primary }}>{title}</h4>
                <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed mb-4" style={{ color: COLORS.muted }}>{desc}</p>
              </div>
              <div className="pt-2 text-[11px] font-extrabold text-[#1D906C] flex items-center gap-1">
                <span>View Details</span>
                <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>

        {/* View Full Product Catalog Banner */}
        <div className="mt-12 p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-md" style={{ borderColor: COLORS.border }}>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
              OUR PRODUCTS &amp; LABORATORY SOLUTIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-black" style={{ color: COLORS.primary }}>
              Looking for Detailed Equipment Specifications?
            </h3>
            <p className="text-[13.5px] mt-1" style={{ color: COLORS.muted }}>
              Explore our 5 specialized solution portfolios: Laboratory Equipment, Diagnostics, Biotech, Consumables &amp; Scientific Instruments.
            </p>
          </div>
          <Link
            href="/group-companies/biomax/solutions"
            className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold text-white flex items-center gap-2 shadow-md hover:bg-[#1D906C] transition-all flex-shrink-0 cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore Products &amp; Solutions</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyIndustriesProcessSection() {
  return (
    <section className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-3 gap-8">
        {/* Why Choose Us */}
        <div className="p-8 rounded-xl border shadow-md" style={{ borderColor: COLORS.border }}>
          <span className="text-[13px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>WHY CHOOSE US</span>
          <h3 className="text-[23px] sm:text-[25px] font-black mb-6" style={{ color: COLORS.accent }}>Your Trusted Partner in Science</h3>
          <div className="space-y-5">
            {WHY_CHOOSE.map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.accent }} />
                <div>
                  <p className="text-[16px] font-black" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="p-8 rounded-xl border shadow-md flex flex-col justify-between" style={{ borderColor: COLORS.border }}>
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>INDUSTRIES WE SERVE</span>
            <h3 id="industries" className="text-[23px] sm:text-[25px] font-black mb-6" style={{ color: COLORS.accent }}>Sectors We Support</h3>
            <div className="space-y-2.5 mb-6">
              {INDUSTRIES.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href || "/group-companies/biomax/industries"}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0F7FA] transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${COLORS.primary}15` }}
                    >
                      <Icon size={16} style={{ color: COLORS.primary }} />
                    </div>
                    <span className="text-[13px] font-bold group-hover:text-[#1D906C] transition-colors" style={{ color: COLORS.ink }}>{label}</span>
                  </div>
                  <ChevronRight size={13} className="text-[#1D906C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/group-companies/biomax/industries"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[12px] font-bold text-white shadow-sm hover:bg-[#1D906C] transition-all"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore All 7 Sectors</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Our Process */}
        <div className="p-8 rounded-xl border shadow-md" style={{ borderColor: COLORS.border }}>
          <span className="text-[13px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>OUR PROCESS</span>
          <h3 className="text-[23px] sm:text-[25px] font-black mb-6" style={{ color: COLORS.accent }}>How We Deliver Excellence</h3>
          <div className="space-y-5">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold"
                  style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                >
                  {step}
                </div>
                <div>
                  <p className="text-[14px] font-bold" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[12.5px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentStatsSection() {
  return (
    <section className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            OUR COMMITMENT
          </span>
          <h3 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: COLORS.accent }}>Driving Scientific Progress</h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.muted }}>
            We believe reliable laboratory infrastructure is the foundation of scientific discovery. Our
            commitment goes beyond supplying equipment — we partner with institutions to strengthen research
            capabilities, improve diagnostic accuracy, and support the advancement of science and healthcare.
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[11px] font-extrabold uppercase tracking-widest mb-5 text-center lg:text-left" style={{ color: COLORS.primary }}>
            COMPANY STATISTICS
          </p>
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <AnimatedStatBiomax key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RndQualitySection() {
  return (
    <section className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-8">
        <div id="rnd" className="p-8 rounded-2xl border flex flex-col justify-between shadow-sm bg-white" style={{ borderColor: COLORS.border, backgroundColor: "#ffffff" }}>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.accent }}>
              RESEARCH &amp; DEVELOPMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>Advancing Laboratory Science</h3>
            <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
              Our R&amp;D team focuses on identifying emerging laboratory technologies and developing practical solutions for modern scientific and diagnostic environments.
            </p>
          </div>
          <Link
            href="/group-companies/biomax/rnd"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold text-white hover:bg-[#1D906C] transition-all w-fit shadow-md cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore R&amp;D Focus</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div id="quality" className="p-8 rounded-2xl border flex flex-col justify-between shadow-sm bg-white" style={{ borderColor: COLORS.border, backgroundColor: "#ffffff" }}>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
              QUALITY ASSURANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.accent }}>Quality You Can Trust</h3>
            <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: COLORS.muted }}>
              Our quality-focused approach extends from product selection and sourcing to technical support and customer service.
            </p>
            <div className="grid grid-cols-5 gap-2 mb-6">
              {QUALITY_POINTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5 p-2 rounded-lg bg-white border" style={{ borderColor: COLORS.border }}>
                  <Icon size={16} style={{ color: COLORS.accent }} />
                  <span className="text-[9.5px] font-bold leading-tight" style={{ color: COLORS.ink }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/group-companies/biomax/quality"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold text-white hover:bg-[#1D906C] transition-all w-fit shadow-md"
            style={{ backgroundColor: COLORS.accent }}
          >
            <span>View Quality Standards</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsFaqSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const faqRefs = useRef([]);

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-animate py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-10">

        {/* ── Testimonials Slider ── */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="TESTIMONIALS" title="What Our Partners Say" />

          {/* Slide track */}
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {TESTIMONIALS.map(({ name, role, quote }) => (
                <div
                  key={name}
                  className="min-w-full px-1"
                >
                  <div className="p-7 rounded-xl border bg-white shadow-md" style={{ borderColor: COLORS.border }}>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill={COLORS.accent} style={{ color: COLORS.accent }} />
                      ))}
                    </div>
                    <p className="text-[15px] leading-relaxed mb-6 italic" style={{ color: COLORS.ink }}>
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-[14px] flex-shrink-0"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        {name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[16px] font-black" style={{ color: COLORS.primary }}>{name}</p>
                        <p className="text-[13.5px] font-bold" style={{ color: COLORS.muted }}>{role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeSlide === i ? "28px" : "8px",
                  height: "8px",
                  backgroundColor: activeSlide === i ? COLORS.primary : `${COLORS.primary}40`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── FAQ with smooth animation ── */}
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <style>{`
            .faq-body {
              display: grid;
              grid-template-rows: 0fr;
              transition: grid-template-rows: 0.4s ease, opacity 0.35s ease;
              opacity: 0;
            }
            .faq-body.open {
              grid-template-rows: 1fr;
              opacity: 1;
            }
            .faq-body > div { overflow: hidden; }
          `}</style>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={q}
                  className="rounded-lg border bg-white overflow-hidden"
                  style={{
                    borderColor: isOpen ? COLORS.primary : COLORS.border,
                    boxShadow: isOpen ? `0 0 0 1px ${COLORS.primary}30` : "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="text-[13px] font-bold" style={{ color: isOpen ? COLORS.primary : COLORS.ink }}>
                      Q{idx + 1}. {q}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: COLORS.primary }}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div className={`faq-body${isOpen ? " open" : ""}`}>
                    <div>
                      <p className="px-5 pb-4 text-[15px] sm:text-[16px] leading-relaxed" style={{ color: COLORS.muted }}>{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-animate py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-2xl border p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-sm bg-white"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
        >
          <div>
            <h2 className="text-xl lg:text-2xl font-black mb-2" style={{ color: COLORS.primary }}>
              Partner with BIO MAX CORPORATION
            </h2>
            <p className="text-[13.5px] max-w-md" style={{ color: COLORS.muted }}>
              Let&apos;s work together for dependable laboratory equipment, biotechnology solutions, and advanced scientific progress.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/group-companies/biomax/contact"
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-lg text-[13px] font-bold text-white flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-md hover:bg-[#1D906C]"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span>Contact Us Today</span> <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+923218431665"
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-lg text-[13px] font-bold border-2 bg-white flex items-center gap-2 transition-all duration-200 cursor-pointer"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              <Phone size={15} /> 0092-321-8431665
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <span className="text-[13px] font-extrabold uppercase tracking-widest" style={{ color: COLORS.primary }}>GET IN TOUCH</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-1 mb-4" style={{ color: COLORS.accent }}>Contact BIO MAX</h2>
          <p className="text-[14px] max-w-xl mx-auto" style={{ color: COLORS.muted }}>
            Have a question about our laboratory products, diagnostic equipment, or services? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Our Office", value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore." },
              { icon: Phone, label: "Call Us", value: "0092-42-38924737" },
              { icon: Phone, label: "WhatsApp", value: "0092-304-7527498 | 0092-321-8431665" },
              { icon: Mail, label: "Email Us", value: "info@roysons.org | support@roysons.org" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-white border shadow-sm" style={{ borderColor: COLORS.border }}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Icon size={22} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>{label}</p>
                  <p className="text-[15px] font-bold mt-1 leading-snug" style={{ color: COLORS.ink }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Us CTA Card */}
          <div
            className="lg:col-span-5 rounded-3xl p-8 border flex flex-col justify-between shadow-sm bg-white"
            style={{ borderColor: COLORS.border, backgroundColor: "#ffffff" }}
          >
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest block mb-2" style={{ color: COLORS.accent }}>
                ONLINE INQUIRY &amp; SUPPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: COLORS.primary }}>
                Send Us Your Requirements
              </h3>
              <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
                Looking for instrument quotes, product specifications, or technical setup support? Submit your message directly on our dedicated Contact page.
              </p>
            </div>

            <Link
              href="/group-companies/biomax/contact"
              className="w-full py-4 rounded-xl text-[14px] font-bold text-center flex items-center justify-center gap-2 text-white hover:bg-[#1D906C] transition-all shadow-md cursor-pointer"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span>Go to Contact Page</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Google Map Section ─────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Floating Address Header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-screen-xl pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-3.5 rounded-2xl border bg-white/95 backdrop-blur-md px-6 py-4 shadow-xl max-w-3xl mx-auto"
          style={{ borderColor: COLORS.border }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${COLORS.primary}15` }}
          >
            <MapPin size={20} color={COLORS.primary} />
          </div>
          <div>
            <p
              className="text-[11px] font-black uppercase tracking-widest mb-0.5"
              style={{ color: COLORS.primary }}
            >
              Find Us
            </p>
            <p
              className="text-xs sm:text-sm font-semibold leading-snug"
              style={{ color: COLORS.ink }}
            >
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore
            </p>
          </div>
        </div>
      </div>

      {/* Map Embed - Full Width */}
      <div className="w-full h-[500px] md:h-[550px] lg:h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de60e29e3b%3A0x9a9d95ad0e1c7d50!2sRehman%20Centre-2%2C%20Ring%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BIO MAX CORPORATION Office Location"
        />
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function BioMaxCorporationPage() {
  useEffect(() => {
    document.body.classList.add("biomax-theme");

    const sections = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section-fade");
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.body.classList.remove("biomax-theme");
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen biomax-theme bg-white" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
      <style>{`
        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(55px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-animate {
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-section-fade {
          animation: sectionFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <ScrollProgress color={COLORS.accent} />
      <BiomaxNavbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <SolutionsSection />
      <WhyIndustriesProcessSection />
      <CommitmentStatsSection />
      <RndQualitySection />
      <TestimonialsFaqSection />
      <ContactSection />
      <CtaSection />
      <MapSection />
      <BiomaxFooter />
    </main>
  );
}