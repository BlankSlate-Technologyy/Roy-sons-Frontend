"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Home as HomeIcon, Building2, TrendingUp, Compass,
  Hammer, ClipboardCheck, ClipboardList, Users2, User, Landmark,
  ShoppingCart, GraduationCap, HeartPulse, Factory, Layers, Network,
  Search, PenTool, Wrench, KeyRound, Settings2, Leaf, Star, ShieldCheck,
  Sparkles, Cpu, Eye, Target, Quote, HelpCircle, Upload, ImageIcon, X,
  Menu, ChevronRight, Globe, Clock, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";

// ── Color System — Swiss Homes Logo: White BG + Deep Red accent ──
const C = {
  red:       "#B01B2E",   // Deep Swiss Red (logo primary)
  redHover:  "#8E1524",   // Darker red for hover
  redLight:  "#F9E8EA",   // Very light red tint for bg accents
  redBorder: "#E8B0B7",   // Soft red border
  charcoal:  "#2B2B2B",   // Logo wordmark charcoal
  darkBg:    "#1A1A1A",   // Deep footer background
  white:     "#FFFFFF",
  offWhite:  "#F8F8F8",   // Alternating section bg
  border:    "#E8E8E8",
  textMuted: "#5A5A5A",
  textLight: "#8A8A8A",
  green:     "#1F5C3F",
};

const HERO = {
  badge: "Trusted Real Estate & Housing Development Company",
  headlineLine1: "Building Modern Communities.",
  headlineLine2: "Creating Better Living.",
  subline:
    "Swiss Homes is a premier real estate and housing development company specializing in residential communities, commercial developments, smart housing projects, and property investment solutions. We combine innovative design, sustainable construction, and world-class engineering to create modern spaces that enhance lifestyles, strengthen communities, and deliver long-term investment value.",
  ctaPrimary: "Explore Our Projects",
  ctaSecondary: "View Investment Opportunities",
};

const ABOUT = {
  eyebrow: "About Us",
  title: "Shaping the Future of Real Estate Development",
  paragraphs: [
    "Swiss Homes is dedicated to developing premium residential, commercial, and mixed-use communities that combine architectural excellence, sustainable planning, and modern infrastructure. From land acquisition and master planning to construction and property management, we deliver complete real estate solutions that exceed expectations.",
    "Our experienced architects, engineers, planners, and development specialists are committed to creating vibrant communities where people can live, work, and thrive.",
  ],
};

const STATS = [
  { icon: Building2,     value: 30,    suffix: "+", label: "Years of Real Estate Excellence" },
  { icon: ClipboardList, value: 200,   suffix: "+", label: "Successfully Completed Projects" },
  { icon: Users2,        value: 25000, suffix: "+", label: "Residential & Commercial Units Delivered" },
  { icon: User,          value: 100,   suffix: "+", label: "Development Professionals" },
  { icon: Award,         value: 98,    suffix: "%", label: "Customer Satisfaction Rate" },
];

const SERVICES = [
  { icon: HomeIcon,       title: "Residential Development",  desc: "Developing modern housing communities, luxury villas, apartments, and family-friendly neighborhoods." },
  { icon: Building2,      title: "Commercial Development",   desc: "Construction of office buildings, shopping centers, business parks, and mixed-use developments." },
  { icon: TrendingUp,     title: "Property Investment",      desc: "Providing secure real estate investment opportunities with long-term growth potential." },
  { icon: Compass,        title: "Master Planning",          desc: "Comprehensive urban planning, infrastructure design, and sustainable community development." },
  { icon: Hammer,         title: "Construction Management",  desc: "Managing every stage of construction with strict quality control, safety standards, and timely project delivery." },
  { icon: ClipboardCheck, title: "Property Management",      desc: "Professional property maintenance, facility management, leasing support, and asset management services." },
];

const INDUSTRY_LIST_LEFT = [
  "Luxury Residential Communities",
  "Smart Housing Developments",
  "Apartment Complexes",
  "Commercial Towers",
  "Business Parks",
  "Mixed-Use Developments",
];
const INDUSTRY_LIST_RIGHT = [
  "Retail Centers",
  "Gated Communities",
  "Affordable Housing Projects",
  "Urban Infrastructure",
  "Smart City Developments",
  "Investment Properties",
];

const INDUSTRY_ICON_GRID = [
  { icon: HomeIcon,      title: "Residential Real Estate" },
  { icon: Building2,     title: "Commercial Real Estate" },
  { icon: TrendingUp,    title: "Property Investors" },
  { icon: Landmark,      title: "Corporate Businesses" },
  { icon: Award,         title: "Hospitality" },
  { icon: ShoppingCart,  title: "Retail" },
  { icon: Landmark,      title: "Government Housing Programs" },
  { icon: GraduationCap, title: "Educational Institutions" },
  { icon: HeartPulse,    title: "Healthcare Developments" },
  { icon: Factory,       title: "Industrial Parks" },
  { icon: Layers,        title: "Mixed-Use Communities" },
  { icon: Network,       title: "Smart Cities" },
];

const WHY_CHOOSE = [
  { title: "Premium Quality Construction", desc: "Building durable, modern, and aesthetically designed properties using premium materials." },
  { title: "Innovative Design",            desc: "Creating functional spaces through contemporary architecture and intelligent planning." },
  { title: "Sustainable Development",      desc: "Developing environmentally responsible communities with green infrastructure and energy-efficient solutions." },
  { title: "Prime Locations",              desc: "Selecting strategic locations that maximize accessibility, convenience, and investment potential." },
  { title: "Experienced Professionals",    desc: "A team of architects, engineers, planners, and project managers delivering exceptional results." },
  { title: "Customer-Centric Approach",    desc: "Providing personalized solutions, transparent communication, and reliable after-sales support." },
];

const PROCESS = [
  { step: "01", icon: Search,         title: "Land Acquisition",    desc: "Selecting strategic locations with strong growth potential." },
  { step: "02", icon: PenTool,        title: "Planning & Design",   desc: "Developing master plans, architectural designs, and engineering solutions." },
  { step: "03", icon: Wrench,         title: "Construction",        desc: "Executing projects with advanced construction techniques and strict quality standards." },
  { step: "04", icon: ClipboardCheck, title: "Quality Inspection",  desc: "Comprehensive inspections ensuring structural integrity and premium finishing." },
  { step: "05", icon: KeyRound,       title: "Property Handover",   desc: "Delivering fully completed properties ready for occupancy or investment." },
  { step: "06", icon: Settings2,      title: "Property Management", desc: "Providing long-term maintenance, facility management, and customer support." },
];

const TECH_CHECKLIST = [
  "Building Information Modeling (BIM)",
  "Smart Home Automation",
  "Digital Construction Management",
  "3D Architectural Visualization",
  "Sustainable Building Materials",
  "Energy-Efficient Building Systems",
  "Smart Security Solutions",
  "AI Property Analytics",
  "GIS Planning Systems",
  "Digital Property Management",
];

const FEATURED_PROJECTS = [
  { title: "Luxury Residential Community", desc: "Modern villas and family homes designed for comfort, security, and premium living.", icon: HomeIcon },
  { title: "Smart Apartment Complex",      desc: "Contemporary apartments equipped with intelligent home technologies and lifestyle amenities.", icon: Building2 },
  { title: "Commercial Business Center",   desc: "Modern office spaces supporting business growth and professional environments.", icon: Landmark },
  { title: "Mixed-Use Development",        desc: "Integrated residential, retail, commercial, and recreational spaces within one vibrant community.", icon: Layers },
];

const TESTIMONIALS = [
  { name: "Homeowner",         role: "Residential Client",  quote: "Swiss Homes exceeded our expectations with exceptional construction quality, modern design, and a seamless home-buying experience." },
  { name: "Property Investor", role: "Investment Client",   quote: "Their strategic locations, transparent processes, and strong investment returns make Swiss Homes a trusted development partner." },
];

const FAQS = [
  { q: "What types of properties do you develop?", a: "We develop residential communities, luxury villas, apartment complexes, commercial towers, business parks, and mixed-use developments across prime locations." },
  { q: "Do you offer property investment opportunities?", a: "Yes. We provide secure real estate investment opportunities across our residential and commercial developments, backed by strong long-term growth potential." },
  { q: "How do you ensure construction quality?", a: "Every project follows strict quality control, safety standards, and multi-stage inspections, using premium materials and advanced construction techniques." },
  { q: "Do you provide property management services?", a: "Yes. Our team offers ongoing property maintenance, facility management, leasing support, and asset management after handover." },
];

const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Dedicated Swiss Homes Header / Navbar ──
function SwissHomesNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E8E8E8]">
      {/* Top micro contact bar */}
      <div className="hidden md:block bg-[#2B2B2B] text-white py-2 px-6 border-b border-[#3D3D3D]">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: C.red }} />
              Lahore, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} style={{ color: C.red }} />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} style={{ color: C.red }} />
              {CONTACT_INFO.emails[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 text-xs text-[#B01B2E] font-bold">
              <ShieldCheck size={13} />
              Swiss Homes Real Estate
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/swiss-homes" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F9E8EA] p-1 flex items-center justify-center border border-[#E8B0B7] group-hover:scale-105 transition-transform">
            <img src="/swiss homes.jpeg" alt="Swiss Homes Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none text-[#2B2B2B] group-hover:text-[#B01B2E] transition-colors">
              SWISS HOMES
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#B01B2E] mt-0.5">
              Real Estate &amp; Housing
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#2B2B2B]">
          {[
            { label: "Home", href: "/group-companies/swiss-homes" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Developments", href: "#projects" },
            { label: "Why Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#B01B2E] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B01B2E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#B01B2E] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8E1524] hover:scale-105 active:scale-95"
          >
            <MessageCircle size={15} />
            Contact Sales
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2B2B2B] hover:bg-[#F8F8F8] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E8E8] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#2B2B2B]">
            <Link href="/group-companies/swiss-homes" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              Home
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              About Us
            </Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              Services
            </Link>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              Developments
            </Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              Why Us
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B01B2E]">
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-[#E8E8E8]">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#B01B2E] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
            >
              <MessageCircle size={15} /> Contact Sales
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Dedicated Swiss Homes Footer ──
function SwissHomesFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-4 border-[#B01B2E]">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src="/swiss homes.jpeg" alt="Swiss Homes" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">SWISS HOMES</h3>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#B01B2E] mt-1">
                  Real Estate &amp; Housing Development
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70 mb-6">
              Swiss Homes is a premier real estate development company specializing in residential communities, commercial spaces, smart housing projects, and property investments with unmatched construction quality.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#B01B2E] text-white flex items-center justify-center hover:bg-[#8E1524] hover:scale-110 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.emails[0]}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#B01B2E] hover:scale-110 transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#B01B2E] hover:scale-110 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B01B2E]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                "Residential Development",
                "Commercial Development",
                "Property Investment Solutions",
                "Master Urban Planning",
                "Construction Management",
                "Property & Facility Management",
              ].map((s, i) => (
                <li key={i}>
                  <Link href="#services" className="hover:text-[#B01B2E] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#B01B2E]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B01B2E]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                { label: "About Us", href: "#about" },
                { label: "Featured Projects", href: "#projects" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Development Process", href: "#process" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#B01B2E] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#B01B2E]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B01B2E]" />
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#B01B2E] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.office}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#B01B2E] flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-[#B01B2E] flex-shrink-0" />
                <span>{CONTACT_INFO.whatsapp.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#B01B2E] flex-shrink-0" />
                <span>{CONTACT_INFO.emails.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {new Date().getFullYear()} Swiss Homes Real Estate &amp; Housing Development. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Roysons Group
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Animated Counter ──
function StatCounterCard({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let id;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) id = requestAnimationFrame(tick); else setCount(value);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [started, value]);

  return (
    <div ref={ref} className="group rounded-[20px] border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ borderColor: C.border }}>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ borderColor: C.red, color: C.red, backgroundColor: "transparent" }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.color = C.white; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.red; }}>
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black mb-2 tabular-nums" style={{ color: C.charcoal }}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed" style={{ color: C.textMuted }}>{label}</p>
    </div>
  );
}

// ── Section Header ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black mb-3" style={{ color: C.red }}>
        <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: C.red }} />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: C.charcoal }}>{title}</h2>
      {description && <p className="text-sm md:text-base leading-relaxed" style={{ color: C.textMuted }}>{description}</p>}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ borderColor: C.border }}
      onMouseEnter={e => e.currentTarget.style.borderColor = C.red}
      onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: C.redLight, color: C.red }}>
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#B01B2E]" style={{ color: C.charcoal }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{desc}</p>
    </div>
  );
}

// ── Industry Icon Card ──
function IndustryIconCard({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: C.border }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = C.red; e.currentTarget.style.backgroundColor = C.red; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.backgroundColor = C.white; }}>
      <div className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: C.redLight, color: C.red }}>
        <Icon size={20} />
      </div>
      <p className="text-xs font-bold leading-snug transition-colors duration-300 group-hover:text-white" style={{ color: C.charcoal }}>{title}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[20px] border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ borderColor: C.border }}
      onMouseEnter={e => e.currentTarget.style.borderColor = C.red}
      onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
      <div className="flex items-center justify-center w-11 h-11 rounded-full mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: C.redLight, color: C.red }}>
        <CheckCircle2 size={20} />
      </div>
      <h3 className="text-lg font-black mb-3 transition-colors duration-300 group-hover:text-[#B01B2E]" style={{ color: C.charcoal }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{desc}</p>
    </div>
  );
}

// ── Process Step Card ──
function ProcessStepCard({ step, icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ borderColor: C.border }}
      onMouseEnter={e => e.currentTarget.style.borderColor = C.red}
      onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full font-black text-sm text-white transition-all group-hover:scale-110"
          style={{ backgroundColor: C.red }}>
          {step}
        </div>
        <div className="flex items-center justify-center w-9 h-9 rounded-lg transition-all"
          style={{ backgroundColor: C.redLight, color: C.red }}>
          <Icon size={17} />
        </div>
        <h4 className="text-base font-bold" style={{ color: C.charcoal }}>{title}</h4>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>{desc}</p>
    </div>
  );
}

// ── Testimonial Slider ──
function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="rounded-[24px] border p-8" style={{ borderColor: C.border, backgroundColor: C.offWhite }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: C.red }}>Testimonials</p>
          <h3 className="mt-2 text-lg font-black" style={{ color: C.charcoal }}>What Our Clients Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={goPrev} aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-all"
            style={{ borderColor: C.border, backgroundColor: C.white, color: C.charcoal }}>
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-all"
            style={{ borderColor: C.border, backgroundColor: C.white, color: C.charcoal }}>
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[20px] border bg-white p-6 shadow-sm" style={{ borderColor: C.border }}>
        <p className="text-sm italic leading-relaxed" style={{ color: C.textMuted }}>“{activeItem.quote}”</p>
        <div className="mt-5">
          <p className="text-sm font-black" style={{ color: C.charcoal }}>{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mt-1" style={{ color: C.red }}>{activeItem.role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className="h-2.5 w-2.5 rounded-full transition-all"
            style={{ backgroundColor: index === activeIndex ? C.red : C.border }}
          />
        ))}
      </div>
    </div>
  );
}

// ── FAQ Accordion Item ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border overflow-hidden transition-all duration-300"
      style={{ borderColor: C.border, backgroundColor: C.white }}>
      <button onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group">
        <h4 className="text-base font-bold transition-colors" style={{ color: isOpen ? C.red : C.charcoal }}>{question}</h4>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
          style={{ backgroundColor: isOpen ? C.red : C.redLight, color: isOpen ? C.white : C.red }}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t" style={{ borderColor: C.redBorder }}>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: C.textMuted }}>{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill in your name, email, and message."); return; }
    setError("");
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="rounded-[28px] border p-8 md:p-10 text-center shadow-sm" style={{ borderColor: C.border, backgroundColor: C.white }}>
      <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5" style={{ backgroundColor: C.redLight, color: C.red }}>
        <CheckCircle2 size={32} />
      </div>
      <h3 className="text-2xl font-black mb-3" style={{ color: C.charcoal }}>Thank You!</h3>
      <p className="text-sm leading-relaxed max-w-md mx-auto mb-6" style={{ color: C.textMuted }}>
        Thank you, {form.name}. Your message has been received. Our sales team will contact you shortly.
      </p>
      <button onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all"
        style={{ backgroundColor: C.red }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = C.redHover}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = C.red}>
        Send Another Message
      </button>
    </div>
  );

  const inputCls = "w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all bg-[#FAFAFA]";

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border p-8 md:p-10 shadow-sm" style={{ borderColor: C.border, backgroundColor: C.white }}>
      <h3 className="text-2xl font-black mb-6" style={{ color: C.charcoal }}>Start Your Real Estate Journey</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
            className={inputCls} style={{ borderColor: C.border, color: C.charcoal }} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>Email Address *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
            className={inputCls} style={{ borderColor: C.border, color: C.charcoal }} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 1234567"
            className={inputCls} style={{ borderColor: C.border, color: C.charcoal }} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>Service Required</label>
          <select name="service" value={form.service} onChange={handleChange}
            className={inputCls} style={{ borderColor: C.border, color: C.charcoal }}>
            <option value="">Select a service</option>
            <option value="Residential Development">Residential Development</option>
            <option value="Commercial Development">Commercial Development</option>
            <option value="Property Investment">Property Investment</option>
            <option value="Master Planning">Master Planning</option>
            <option value="Construction Management">Construction Management</option>
            <option value="Property Management">Property Management</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.textMuted }}>Project Overview *</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your property requirements..."
          className={`${inputCls} resize-none`} style={{ borderColor: C.border, color: C.charcoal }} />
      </div>
      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}
      <button type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
        style={{ backgroundColor: C.red }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = C.redHover}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = C.red}>
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Hero BG Image Uploader ──
function HeroBgUploader({ bgImage, setBgImage }) {
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBgImage(url);
  };

  return (
    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      {bgImage && (
        <button onClick={() => setBgImage(null)}
          className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
          style={{ backgroundColor: "rgba(176,27,46,0.9)" }}>
          <X size={13} /> Remove
        </button>
      )}
      <button
        onClick={() => fileRef.current?.click()}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: "rgba(30,90,60,0.9)" }}
      >
        <ImageIcon size={13} /> {bgImage ? "Change" : "Set BG"}
      </button>
    </div>
  );
}

// ── Main Page ──
export default function SwissHomesPage() {
  const heroBg = "/swiss homes.jpeg";

  useEffect(() => {
    document.body.classList.add("swiss-homes-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = C.charcoal;
    return () => {
      document.body.classList.remove("swiss-homes-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="swiss-homes-theme font-sans bg-white" style={{ color: C.charcoal, backgroundColor: "#FFFFFF" }}>
      <style>{`
        body.swiss-homes-theme,
        body.swiss-homes-theme html,
        body.swiss-homes-theme main {
          background-color: #FFFFFF !important;
          color: #2B2B2B !important;
        }

        body.swiss-homes-theme section {
          background-color: transparent;
        }

        body.swiss-homes-theme section.bg-white {
          background-color: #FFFFFF !important;
        }

        body.swiss-homes-theme h1,
        body.swiss-homes-theme h2,
        body.swiss-homes-theme h3,
        body.swiss-homes-theme h4,
        body.swiss-homes-theme h5,
        body.swiss-homes-theme h6,
        body.swiss-homes-theme p,
        body.swiss-homes-theme span,
        body.swiss-homes-theme li,
        body.swiss-homes-theme a,
        body.swiss-homes-theme label,
        body.swiss-homes-theme button,
        body.swiss-homes-theme input,
        body.swiss-homes-theme textarea {
          background-image: none !important;
          background-clip: border-box !important;
          -webkit-background-clip: border-box !important;
          -webkit-text-fill-color: currentcolor !important;
        }

        body.swiss-homes-theme h1.text-white,
        body.swiss-homes-theme h2.text-white,
        body.swiss-homes-theme h3.text-white,
        body.swiss-homes-theme h4.text-white,
        body.swiss-homes-theme h5.text-white,
        body.swiss-homes-theme h6.text-white,
        body.swiss-homes-theme p.text-white,
        body.swiss-homes-theme span.text-white,
        body.swiss-homes-theme li.text-white,
        body.swiss-homes-theme a.text-white {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        body.swiss-homes-theme .bg-white,
        body.swiss-homes-theme div.bg-white {
          background-color: #ffffff !important;
        }

        input:focus, textarea:focus { border-color: ${C.red} !important; background: #fff !important; }
        ::selection { background: ${C.red}; color: white; }
      `}</style>

      {/* Custom Swiss Homes Navbar */}
      <SwissHomesNavbar />

      {/* ── Hero Section ── */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20,20,20,0.85) 0%, rgba(43,43,43,0.80) 50%, rgba(176,27,46,0.70) 100%), url("${encodeURI(heroBg)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderColor: C.border,
        }}
      >
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl w-full px-6 py-16 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm mb-6 backdrop-blur-sm">
              <ShieldCheck size={14} style={{ color: C.red }} />
              {HERO.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span style={{ color: C.red }}>{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.red }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.redHover}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.red}>
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#2B2B2B] hover:scale-[1.03] active:scale-95">
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b" style={{ borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative rounded-[32px] overflow-hidden shadow-lg min-h-[300px] border-2" style={{ borderColor: C.border, background: `linear-gradient(135deg, ${C.charcoal} 0%, #444 100%)` }}>
            <Image src="/swiss homes.jpeg" alt="Swiss Homes development project" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Modern Living Spaces
            </div>
          </div>
          <div>
            <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <div className="mt-6 space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed" style={{ color: C.textMuted }}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: C.red }} />
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: C.red }}>Excellence Since Day One</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter Section ── */}
      <section className="px-6 py-14 lg:py-20 border-b" style={{ backgroundColor: C.offWhite, borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((s, i) => <StatCounterCard key={i} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section id="services" className="bg-white px-6 py-16 lg:py-24 border-b" style={{ borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Complete Real Estate & Development Solutions"
            description="From land acquisition and master planning to construction and long-term property management."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />)}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="px-6 py-16 lg:py-24 border-b" style={{ backgroundColor: C.offWhite, borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries We Serve" title="Supporting Diverse Property Sectors" center />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-[24px] border bg-white p-8" style={{ borderColor: C.border }}>
              {[...INDUSTRY_LIST_LEFT, ...INDUSTRY_LIST_RIGHT].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: C.red }} />
                  <span className="text-sm font-semibold" style={{ color: C.charcoal }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {INDUSTRY_ICON_GRID.map((item, i) => <IndustryIconCard key={i} icon={item.icon} title={item.title} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Swiss Homes ── */}
      <section id="why-us" className="bg-white px-6 py-16 lg:py-24 border-b" style={{ borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Swiss Homes"
            description="Combining construction excellence, sustainable design, and a customer-first approach."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => <FeatureCard key={i} title={item.title} desc={item.desc} />)}
          </div>
        </div>
      </section>

      {/* ── Development Process ── */}
      <section id="process" className="px-6 py-16 lg:py-24 border-b" style={{ backgroundColor: C.offWhite, borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Development Process"
            title="A Disciplined, End-to-End Workflow"
            description="From land acquisition to long-term property management — every stage is handled in sequence."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, i) => <ProcessStepCard key={i} step={item.step} icon={item.icon} title={item.title} desc={item.desc} />)}
          </div>
        </div>
      </section>

      {/* ── Feature Panels: Smart Living / Technology / Sustainability ── */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b" style={{ borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-3">
          {/* Smart Living */}
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ background: `linear-gradient(135deg, ${C.red} 0%, ${C.redHover} 100%)` }}>
            <Sparkles size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Smart Living Solutions</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-3">Creating Communities for Modern Living</p>
            <p className="text-sm leading-relaxed text-white/80">
              Swiss Homes develops integrated communities featuring green spaces, smart infrastructure, modern amenities, security systems, and sustainable designs that improve quality of life and long-term property value.
            </p>
          </div>

          {/* Technology */}
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: C.charcoal }}>
            <Cpu size={28} className="absolute top-6 right-6" style={{ color: `${C.red}70` }} />
            <h3 className="text-xl font-black text-white mb-2">Technology &amp; Innovation</h3>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.red }}>Building Smarter with Modern Technologies</p>
            <ul className="space-y-2">
              {TECH_CHECKLIST.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: C.red }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability */}
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #1F5C3F 0%, #12402B 100%)" }}>
            <Leaf size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Sustainability</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-green-200 mb-3">Sustainable Communities for Future Generations</p>
            <p className="text-sm leading-relaxed text-green-100">
              Swiss Homes integrates environmentally responsible construction practices through energy-efficient buildings, water conservation, renewable energy integration, green landscaping, waste reduction, and sustainable urban planning.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Developments ── */}
      <section id="projects" className="px-6 py-16 lg:py-24 border-b" style={{ backgroundColor: C.offWhite, borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Featured Developments" title="Projects Shaping Modern Communities" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, i) => (
              <div key={i} className="group overflow-hidden rounded-[24px] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ borderColor: C.border }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.red}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                <div className="relative h-40 w-full flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${C.charcoal} 0%, #444 100%)` }}>
                  <project.icon size={44} className="transition-transform duration-500 group-hover:scale-110" style={{ color: `${C.red}80` }} />
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: C.red }} />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold mb-2 transition-colors group-hover:text-[#B01B2E]" style={{ color: C.charcoal }}>{project.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Testimonials / FAQ ── */}
      <section id="faqs" className="bg-white px-6 py-16 lg:py-24 border-b" style={{ borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${C.charcoal} 0%, #444 100%)` }}>
              <Eye size={26} className="absolute top-6 right-6 text-white/30" />
              <div className="absolute top-0 left-0 w-2 h-full rounded-l-[24px]" style={{ backgroundColor: C.red }} />
              <h3 className="text-lg font-black text-white mb-2">Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/75">
                To become a globally recognized real estate developer creating sustainable communities, innovative properties, and exceptional investment opportunities that improve the way people live and work.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${C.red} 0%, ${C.redHover} 100%)` }}>
              <Target size={26} className="absolute top-6 right-6 text-white/30" />
              <h3 className="text-lg font-black text-white mb-2">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/80">
                To deliver premium real estate developments through innovation, engineering excellence, sustainable construction, and customer-focused solutions while creating lasting value for homeowners, investors, and communities.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="rounded-[24px] border p-8" style={{ borderColor: C.border, backgroundColor: C.offWhite }}>
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle size={22} style={{ color: C.red }} />
                <h3 className="text-lg font-black" style={{ color: C.charcoal }}>Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {FAQS.map((item, i) => <FaqAccordionItem key={i} question={item.q} answer={item.a} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden px-6 py-16 lg:py-20" style={{ backgroundColor: C.charcoal }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at bottom left, ${C.red}25, transparent 55%)` }} />
        {/* Red top border accent */}
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: C.red }} />
        <div className="mx-auto max-w-screen-xl relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Building Communities. <span style={{ color: C.red }}>Creating Lasting Value.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
              Swiss Homes continues to shape the future of real estate through innovative design, sustainable development, and premium construction. Our commitment to quality, customer satisfaction, and responsible urban development helps create communities where families, investors, and communities can thrive.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: C.red }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = C.redHover}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = C.red}>
              Explore Our Projects <ArrowRight size={16} />
            </Link>
            <Link href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#2B2B2B] active:scale-95">
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="px-6 py-16 lg:py-24" style={{ backgroundColor: C.offWhite }}>
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Swiss Homes"
            description="Discuss your residential, commercial, or investment property project with our development team."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 rounded-[28px] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between"
              style={{ backgroundColor: C.charcoal }}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: C.red }} />
                  <span className="text-xs uppercase tracking-[0.25em] font-black" style={{ color: C.red }}>Contact Details</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed mb-8 text-white/65">
                  Our real estate team responds to every inquiry within one business day.
                </p>
                <div className="space-y-6 text-sm">
                  {[
                    { icon: Phone, label: "Call Us", value: `Phone: ${CONTACT_INFO.phone}` },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${C.red}25`, color: C.red }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.red }}>{label}</p>
                        <p className="text-white/80 font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${C.red}25`, color: C.red }}>
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.red }}>WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map(num => <p key={num} className="text-white/80 font-semibold">{num}</p>)}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${C.red}25`, color: C.red }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: C.red }}>Email Us</p>
                      {CONTACT_INFO.emails.map(mail => <p key={mail} className="text-white/80 font-medium">{mail}</p>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
                &copy; {new Date().getFullYear()} Swiss Homes Real Estate. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Location Section */}
      <section className="px-6 py-16 lg:py-24 border-t" style={{ backgroundColor: C.offWhite, borderColor: C.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border bg-white p-8 shadow-sm" style={{ borderColor: C.border }}>
              <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: C.red }}>Our Location</p>
              <h3 className="mt-3 text-2xl font-black" style={{ color: C.charcoal }}>Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: C.textMuted }}>
                We welcome property consultations, investment discussions, and development meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border bg-[#F8F8F8] p-4" style={{ borderColor: C.border }}>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: C.charcoal }}>{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: C.red }}>
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border bg-white shadow-sm" style={{ borderColor: C.border }}>
              <iframe
                title="Swiss Homes Office Location"
                src={MAP_SRC}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Homes Dedicated Footer */}
      <SwissHomesFooter />
    </main>
  );
}