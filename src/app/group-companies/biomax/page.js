"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  ChevronRight, ChevronDown, ArrowRight,
  FlaskConical, Microscope, HeartPulse, Building2, GraduationCap, Pill, Landmark,
  Dna, TestTube, Wrench, Truck, ShieldCheck, Target, Eye, Sparkles,
  CheckCircle2, Users, Gauge, Package, ClipboardCheck, Recycle, Settings,
  Phone, Mail, MapPin, Star, Facebook, Linkedin, Twitter, Youtube, Plus, Minus,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:    "#1A4B7A",
  primaryDk:  "#0F3359",
  accent:     "#2E8B78",
  accentAlt:  "#7B1C2A",
  white:      "#ffffff",
  ink:        "#1A4B7A",
  muted:      "#4A6A8A",
  border:     "#dce8f0",
  lightBg:    "#F0F6FA",
  footerBg:   "#0F2847",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#solutions", dropdown: true },
  { label: "Research & Development", href: "#rnd" },
  { label: "Quality Assurance", href: "#quality" },
  { label: "Industries", href: "#industries" },
];

const TRUSTED_BY = [
  { icon: FlaskConical,     label: "Research\nLaboratories" },
  { icon: HeartPulse,       label: "Diagnostic\nCenters" },
  { icon: Building2,        label: "Hospitals &\nClinical Labs" },
  { icon: GraduationCap,    label: "Universities &\nAcademic Institutions" },
  { icon: Pill,             label: "Pharmaceutical\nCompanies" },
  { icon: Landmark,         label: "Government Health\nDepartments" },
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
  { icon: Microscope,       title: "Laboratory Equipment",              desc: "Advanced instruments and machinery for research, testing, and analysis." },
  { icon: HeartPulse,       title: "Diagnostic Systems",                desc: "Precise diagnostic technologies for accurate clinical and research results." },
  { icon: Dna,              title: "Biotechnology Solutions",           desc: "Innovative biological tools and reagents supporting cutting-edge research." },
  { icon: TestTube,         title: "Molecular & Genetic Testing Equipment", desc: "Specialized systems for PCR, sequencing, and genetic analysis." },
  { icon: FlaskConical,     title: "Laboratory Consumables & Reagents", desc: "High-quality supplies for consistent and reliable lab operations." },
  { icon: Target,           title: "Research Instruments",              desc: "Precision tools designed for academic and scientific research institutions." },
  { icon: Building2,        title: "Clinical Laboratory Solutions",     desc: "Complete systems supporting hospital and diagnostic laboratory workflows." },
  { icon: Settings,         title: "Calibration & Maintenance Services",desc: "Ensuring equipment accuracy and long-term operational reliability." },
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
  { icon: FlaskConical,  label: "Research Laboratories" },
  { icon: HeartPulse,    label: "Diagnostic Centers" },
  { icon: Building2,     label: "Hospitals & Clinics" },
  { icon: GraduationCap, label: "Universities & Academic Institutes" },
  { icon: Pill,          label: "Pharmaceutical Companies" },
  { icon: Dna,           label: "Biotechnology Firms" },
  { icon: Landmark,      label: "Government Health Institutions" },
  { icon: TestTube,      label: "Forensic Laboratories" },
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
      className={`px-6 py-3 rounded-sm text-[12.5px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300 ${className}`}
      style={{ 
        backgroundColor: isHovered ? COLORS.accent : COLORS.primary, 
        color: COLORS.white 
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
      className={`px-6 py-3 rounded-sm text-[12.5px] font-bold uppercase tracking-wide border flex items-center gap-2 transition-all duration-300 ${className}`}
      style={{ 
        borderColor: COLORS.primary, 
        backgroundColor: isHovered ? COLORS.primary : "transparent",
        color: isHovered ? COLORS.white : COLORS.primary 
      }}
    >
      {children}
    </Link>
  );
}

// ─── Animated Counter Helpers ───────────────────────────────────────────────

function parseStatValue(val) {
  const raw = val.replace(/,/g, "");
  const suffix = raw.match(/[+%]$/)?.[0] ?? "";
  const num = parseFloat(raw);
  const hasComma = val.includes(",");
  return { num, suffix, hasComma };
}

function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
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

  const display = hasComma ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="p-5 rounded-lg border bg-white text-center shadow-sm" style={{ borderColor: COLORS.border }}>
      <p className="text-xl lg:text-2xl font-black" style={{ color: accentColor ?? COLORS.accent }}>
        {display}{suffix}
      </p>
      <p className="text-[10.5px] font-bold mt-1 whitespace-pre-line leading-tight" style={{ color: COLORS.muted }}>
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

function Navbar() {
  const activeSection = useActiveSection(BIOMAX_SECTION_IDS, 120);

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-all" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <Link href="/group-companies" className="flex items-center">
          <Image 
            src="/bio max.jpeg" 
            alt="BIO MAX CORPORATION Logo" 
            width={140} 
            height={44} 
            className="h-11 w-auto object-contain" 
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const targetId = item.href.replace("#", "");
            const isActive = activeSection === targetId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative text-[12.5px] font-semibold py-1 transition-colors hover:text-[#2C6FC9] cursor-pointer"
                style={{ color: isActive ? COLORS.accent : COLORS.ink }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="biomaxUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: COLORS.accent }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <PrimaryButton href="#solutions" className="hidden md:flex">Our Services</PrimaryButton>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="section-animate relative py-24 lg:py-36 px-6 overflow-hidden flex items-center min-h-[500px]" style={{ backgroundColor: COLORS.white }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/biomax header.png" 
          alt="Biotechnology laboratory background" 
          fill 
          className="object-cover object-center pointer-events-none" 
          priority 
        />
        {/* Soft white gradient overlay for maximum text readability and seamless transition */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 100%)" 
          }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-[46px] font-black leading-[1.1] mb-5" style={{ color: COLORS.accent }}>
            BIOTECHNOLOGY &amp;<br />LABORATORY SOLUTIONS
          </h1>
          <p className="text-[15px] font-medium leading-relaxed mb-8 max-w-md" style={{ color: COLORS.primary }}>
            Supplying scientific equipment, laboratory systems, and biotechnology solutions for research and
            diagnostic institutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#solutions">Explore Products <ArrowRight size={15} /></PrimaryButton>
            <OutlineButton href="#solutions" className="bg-white/80 hover:bg-white transition-colors">
              Our Services <ArrowRight size={15} />
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="section-animate py-12 px-6 border-y" style={{ backgroundColor: COLORS.lightBg, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-[13px] font-black tracking-[0.2em] uppercase mb-8" style={{ color: COLORS.muted }}>
          Trusted By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUSTED_BY.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer group"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(27,79,204,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: `${COLORS.primary}12` }}
              >
                <Icon size={28} style={{ color: COLORS.primary }} />
              </div>
              <span className="text-[13px] font-bold leading-snug whitespace-pre-line" style={{ color: COLORS.ink }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            ABOUT US
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6" style={{ color: COLORS.accent }}>
            Advancing Science Through Reliable Solutions
          </h2>
          <div className="space-y-4 mb-2 text-[13.5px] leading-relaxed" style={{ color: COLORS.ink }}>
            <p>
              BIO MAX CORPORATION is a trusted name in biotechnology and laboratory solutions, dedicated to
              supplying high-quality scientific equipment, diagnostic systems, and research technologies to
              institutions across the country.
            </p>
            <p>
              Our team of scientists, engineers, and technical specialists works closely with laboratories,
              hospitals, and research centers to ensure accurate, efficient, and reliable outcomes for every
              project.
            </p>
            <p>
              From academic research to clinical diagnostics, we are committed to supporting scientific
              advancement through innovation and precision.
            </p>
          </div>

          <div className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg mt-8">
            <Image src="/biomaxabout.png" alt="Lab scientists at work" fill className="object-cover" sizes="700px" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div
            className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
            style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.primary;
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(27,79,204,0.13)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.backgroundColor = COLORS.white;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = COLORS.lightBg;
            }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Target size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Mission</h4>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
              To empower research and diagnostic institutions with cutting-edge laboratory equipment and
              biotechnology solutions that drive scientific progress.
            </p>
          </div>

          <div
            className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
            style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.primary;
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(27,79,204,0.13)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.backgroundColor = COLORS.white;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = COLORS.lightBg;
            }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Eye size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Vision</h4>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
              To be a globally recognized leader in biotechnology solutions, known for innovation, precision, and
              unwavering commitment to scientific excellence.
            </p>
          </div>

          <div
            className="p-6 rounded-lg border transition-all duration-300 cursor-pointer"
            style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = COLORS.primary;
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(27,79,204,0.13)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.backgroundColor = COLORS.white;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = COLORS.lightBg;
            }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Sparkles size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Core Values</h4>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {CORE_VALUES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer"
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-1 transition-all duration-200"
                    style={{ backgroundColor: `${COLORS.primary}15`, border: `1.5px solid ${COLORS.primary}35` }}
                  >
                    <Icon size={28} style={{ color: COLORS.primary }} />
                  </div>
                  <span className="text-[11.5px] font-bold leading-tight whitespace-pre-line" style={{ color: COLORS.ink }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="OUR SOLUTIONS" title="Complete Biotechnology & Laboratory Portfolio" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-lg border bg-white shadow-sm hover:-translate-y-1 transition-transform"
              style={{ borderColor: COLORS.border }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${COLORS.primary}12` }}>
                <Icon size={30} style={{ color: COLORS.primary }} />
              </div>
              <h4 className="text-[13px] font-extrabold mb-1.5" style={{ color: COLORS.primary }}>{title}</h4>
              <p className="text-[11.5px] leading-relaxed" style={{ color: COLORS.muted }}>{desc}</p>
            </div>
          ))}
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
          <h3 className="text-[20px] font-extrabold mb-6" style={{ color: COLORS.accent }}>Your Trusted Partner in Science</h3>
          <div className="space-y-5">
            {WHY_CHOOSE.map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.accent }} />
                <div>
                  <p className="text-[14px] font-bold" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[12.5px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="p-8 rounded-xl border shadow-md" style={{ borderColor: COLORS.border }}>
          <span className="text-[13px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>INDUSTRIES WE SERVE</span>
          <h3 id="industries" className="text-[20px] font-extrabold mb-6" style={{ color: COLORS.accent }}>Sectors We Support</h3>
          <div className="space-y-4">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Icon size={20} style={{ color: COLORS.primary }} />
                </div>
                <span className="text-[14px] font-semibold" style={{ color: COLORS.ink }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="p-8 rounded-xl border shadow-md" style={{ borderColor: COLORS.border }}>
          <span className="text-[13px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>OUR PROCESS</span>
          <h3 className="text-[20px] font-extrabold mb-6" style={{ color: COLORS.accent }}>How We Deliver Excellence</h3>
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
    <section className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            OUR COMMITMENT
          </span>
          <h3 className="text-2xl font-extrabold mb-4" style={{ color: COLORS.accent }}>Driving Scientific Progress</h3>
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
        <div id="rnd" className="p-8 rounded-lg text-white" style={{ backgroundColor: COLORS.primary }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: "#9FC0EE" }}>
            RESEARCH & DEVELOPMENT
          </span>
          <h3 className="text-xl font-extrabold mb-4">Innovation at the Core</h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Our R&amp;D team continuously explores emerging biotechnology trends and laboratory advancements to
            bring next-generation solutions that improve accuracy, efficiency, and reliability for research and
            diagnostic institutions.
          </p>
        </div>

        <div id="quality" className="p-8 rounded-lg border" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            QUALITY ASSURANCE
          </span>
          <h3 className="text-xl font-extrabold mb-4" style={{ color: COLORS.accent }}>Precision Without Compromise</h3>
          <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
            Every product undergoes rigorous testing to ensure:
          </p>
          <div className="grid grid-cols-5 gap-3">
            {QUALITY_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon size={18} style={{ color: COLORS.accent }} />
                <span className="text-[10px] font-bold leading-tight whitespace-pre-line" style={{ color: COLORS.ink }}>{label}</span>
              </div>
            ))}
          </div>
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
    <section className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
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
                        <p className="text-[13px] font-extrabold" style={{ color: COLORS.primary }}>{name}</p>
                        <p className="text-[11.5px]" style={{ color: COLORS.muted }}>{role}</p>
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
              transition: grid-template-rows 0.4s ease, opacity 0.35s ease;
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
                      <p className="px-5 pb-4 text-[12.5px] leading-relaxed" style={{ color: COLORS.muted }}>{a}</p>
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
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);

  return (
    <section id="contact" className="py-14 px-6" style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
        <div>
          <h2 className="text-xl lg:text-2xl font-black text-white mb-2">Let&apos;s Advance Science Together</h2>
          <p className="text-[13px] max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Partner with BIO MAX CORPORATION for reliable laboratory equipment, biotechnology solutions, and
            dependable technical support.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0 w-full lg:w-auto">
          <Link
            href="#contact"
            onMouseEnter={() => setHoverBtn1(true)}
            onMouseLeave={() => setHoverBtn1(false)}
            className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-sm text-[12.5px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: hoverBtn1 ? COLORS.accent : COLORS.white, 
              color: hoverBtn1 ? COLORS.white : COLORS.primary 
            }}
          >
            Contact Sales <ArrowRight size={15} />
          </Link>
          <Link
            href="#contact"
            onMouseEnter={() => setHoverBtn2(true)}
            onMouseLeave={() => setHoverBtn2(false)}
            className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-sm text-[12.5px] font-bold uppercase tracking-wide border flex items-center gap-2 transition-all duration-300"
            style={{ 
              borderColor: COLORS.white,
              backgroundColor: hoverBtn2 ? COLORS.white : "transparent",
              color: hoverBtn2 ? COLORS.primary : COLORS.white 
            }}
          >
            Become a Partner <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-animate py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <span className="text-[13px] font-extrabold uppercase tracking-widest" style={{ color: COLORS.primary }}>GET IN TOUCH</span>
          <h2 className="text-3xl font-black mt-1 mb-3" style={{ color: COLORS.accent }}>Contact BIO MAX</h2>
          <p className="text-[14px] max-w-xl mx-auto" style={{ color: COLORS.muted }}>
            Have a question about our products or services? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: "Our Office", value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore." },
              { icon: Phone, label: "Call Us", value: "0092-42-38924737" },
              { icon: Phone, label: "WhatsApp", value: "0092-304-7527498 | 0092-321-8431665" },
              { icon: Mail, label: "Email Us", value: "info@roysons.org | support@roysons.org" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-white border shadow-sm" style={{ borderColor: COLORS.border }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Icon size={22} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide" style={{ color: COLORS.primary }}>{label}</p>
                  <p className="text-[13.5px] font-semibold mt-0.5 leading-snug" style={{ color: COLORS.ink }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border shadow-md p-8" style={{ borderColor: COLORS.border }}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>First Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ali"
                    className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all"
                    style={{ borderColor: COLORS.border, color: COLORS.ink, "--tw-ring-color": COLORS.primary }}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ahmed"
                    className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all"
                    style={{ borderColor: COLORS.border, color: COLORS.ink }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all"
                  style={{ borderColor: COLORS.border, color: COLORS.ink }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all"
                  style={{ borderColor: COLORS.border, color: COLORS.ink }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>Service</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all"
                  style={{ borderColor: COLORS.border, color: COLORS.ink }}
                >
                  {SOLUTIONS.map(({ title }) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5 uppercase tracking-wide" style={{ color: COLORS.primary }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border text-[13px] outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: COLORS.border, color: COLORS.ink }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg text-[13px] font-extrabold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.primary }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Google Map Section ─────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="section-animate py-10 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: COLORS.border }}
        >
          {/* Header */}
          <div
            className="px-8 py-5 flex items-center gap-3 border-b bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${COLORS.primary}15` }}
            >
              <MapPin size={18} style={{ color: COLORS.primary }} />
            </div>
            <div>
              <p
                className="text-[11px] font-black uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Find Us
              </p>
              <p
                className="text-[13px] font-semibold"
                style={{ color: COLORS.ink }}
              >
                1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore
              </p>
            </div>
          </div>
          {/* Map Embed */}
          <div className="w-full h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de60e29e3b%3A0x9a9d95ad0e1c7d50!2sRehman%20Centre-2%2C%20Ring%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIO MAX CORPORATION Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6" style={{ backgroundColor: COLORS.footerBg }}>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 max-w-sm">
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
              <Image 
                src="/bio max.jpeg" 
                alt="BIO MAX CORPORATION Logo" 
                width={130} 
                height={40} 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </div>
          <p className="text-[12px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
            Your trusted partner for biotechnology and laboratory solutions.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <Icon size={14} style={{ color: "rgba(255,255,255,0.9)" }} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.16em] mb-4 text-white">{heading}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[12px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-4">
          <h5 className="text-[11px] font-black uppercase tracking-[0.16em] mb-4 text-white">Contact Us</h5>
          <div className="space-y-3">
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              0092-42-38924737
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              WhatsApp: 0092-304-7527498 | 0092-321-8431665
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              info@roysons.org
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              support@roysons.org
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
          &copy; 2026 BIO MAX CORPORATION. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service"].map((label) => (
            <a key={label} href="#" className="text-[11px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function BioMaxCorporationPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("biomax-theme");
    document.body.style.backgroundColor = COLORS.white;
    document.body.style.color = COLORS.primary;

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
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("biomax-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
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
      <Navbar />
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
      <Footer />
    </main>
  );
}