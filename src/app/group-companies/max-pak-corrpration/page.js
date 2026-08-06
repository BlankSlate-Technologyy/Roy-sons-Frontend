"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Settings, Package, ClipboardList, Wrench, Truck,
  Headset, HardHat, Building2, Factory, Zap, Landmark, Bolt, Ship,
  Sprout, Pipette, ShieldCheck, HeartHandshake, Cpu, Star, Quote,
  HelpCircle, Eye, Compass, Leaf, TrendingUp, Layers, Bolt as ElectricIcon,
  Cog, Beaker, Thermometer, Waves, ClipboardCheck, ScanSearch,
  PackageCheck, PackageSearch, PlaneTakeoff, Car, TreePine, Upload, X, Menu, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";

// ── Color System matching Max Pak Corporation Shield Logo (Deep Navy #1B365D + Emerald Green Accent) ──
const C = {
  navy:        "#1B365D",   // Primary Deep Navy Shield & Wordmark color
  navyHover:   "#122646",   // Darker navy for hover
  green:       "#16A34A",   // Emerald Green Arrow accent from Logo
  greenHover:  "#15803D",
  navyLight:   "#EDF2F7",   // Light navy tint for icons
  border:      "#E2E8F0",
  charcoal:    "#1E293B",   // Typography charcoal text
  darkBg:      "#0F172A",   // Footer dark background
  white:       "#FFFFFF",   // Pure white page bg
  offWhite:    "#F8FAFC",   // Alternating section bg
  textMuted:   "#475569",
  textLight:   "#64748B",
};

const HERO = {
  badge: "Trusted Industrial Trading & Commercial Supply Company",
  headlineLine1: "Powering Industries.",
  headlineLine2: "Supplying Excellence.",
  subline:
    "Max Pak Corporation is a leading industrial trading and commercial supply company specializing in industrial equipment, heavy machinery, construction materials, engineering products, and integrated procurement solutions. We connect manufacturers, suppliers, contractors, and industries through reliable sourcing, efficient logistics, and world-class supply chain management to support sustainable industrial growth.",
  ctaPrimary: "Explore Our Products",
  ctaSecondary: "View Our Solutions",
};

const ABOUT = {
  eyebrow: "About Us",
  title: "Delivering Reliable Industrial Supply Solutions",
  paragraphs: [
    "Max Pak Corporation provides complete industrial procurement and trading solutions for businesses across construction, manufacturing, energy, infrastructure, and engineering sectors. From product sourcing and quality inspection to warehousing, logistics, and after-sales support, we ensure efficiency, reliability, and long-term business value.",
    "Our experienced procurement specialists, engineers, supply chain experts, and technical consultants help clients secure high-quality industrial products with competitive pricing and dependable service.",
  ],
};

const STATS = [
  { icon: ClipboardCheck, value: 30,    suffix: "+", label: "Years of Industrial Trading Experience" },
  { icon: Package,        value: 10000, suffix: "+", label: "Products Supplied" },
  { icon: ClipboardList,  value: 2500,  suffix: "+", label: "Successful Projects" },
  { icon: Building2,      value: 800,   suffix: "+", label: "Corporate Clients" },
  { icon: ShieldCheck,    value: 99,    suffix: "%", label: "On-Time Delivery Rate" },
];

const SERVICES = [
  { icon: Settings,      title: "Industrial Equipment Supply", desc: "Providing industrial machinery, manufacturing equipment, tools, and engineering products from trusted global brands." },
  { icon: HardHat,       title: "Construction Materials",       desc: "Supplying premium-quality steel, cement, pipes, fittings, structural materials, and building products for infrastructure projects." },
  { icon: ClipboardList, title: "Engineering Procurement",      desc: "End-to-end procurement services covering supplier management, sourcing, quality assurance, and contract support." },
  { icon: Truck,         title: "Heavy Machinery Solutions",    desc: "Supplying construction equipment, earthmoving machinery, lifting equipment, and industrial vehicles." },
  { icon: Package,       title: "Supply Chain Management",      desc: "Integrated warehousing, inventory management, logistics, transportation, and distribution services." },
  { icon: Headset,       title: "Technical Support",            desc: "Offering product consultation, installation guidance, maintenance coordination, and after-sales support." },
];

const PRODUCT_CATEGORIES = [
  { icon: Cog,          title: "Industrial Machinery" },
  { icon: HardHat,      title: "Construction Equipment" },
  { icon: Layers,       title: "Steel & Structural Materials" },
  { icon: ElectricIcon, title: "Electrical Equipment" },
  { icon: Settings,     title: "Mechanical Components" },
  { icon: Wrench,       title: "Power Tools" },
  { icon: ShieldCheck,  title: "Safety Equipment (PPE)" },
  { icon: Beaker,       title: "Industrial Chemicals" },
  { icon: Thermometer,  title: "HVAC Equipment" },
  { icon: Waves,        title: "Pumps & Compressors" },
];

const INDUSTRIES_GRID = [
  { icon: HardHat,   title: "Construction" },
  { icon: Factory,   title: "Manufacturing" },
  { icon: Pipette,   title: "Oil & Gas" },
  { icon: Cog,       title: "Mining" },
  { icon: Zap,       title: "Energy & Utilities" },
  { icon: Landmark,  title: "Infrastructure" },
  { icon: Truck,     title: "Transportation" },
  { icon: Ship,      title: "Marine & Ports" },
  { icon: Sprout,    title: "Agriculture" },
  { icon: Landmark,  title: "Government Projects" },
  { icon: Factory,   title: "Industrial Plants" },
  { icon: HardHat,   title: "Engineering Contractors" },
];

const WHY_CHOOSE = [
  { title: "Global Supply Network",    desc: "Strong partnerships with leading manufacturers and international suppliers." },
  { title: "Premium Product Quality",  desc: "Supplying certified industrial products that meet international standards." },
  { title: "Fast Procurement",         desc: "Efficient sourcing and delivery solutions that reduce project delays." },
  { title: "Technical Expertise",      desc: "Experienced engineers and procurement specialists providing professional guidance." },
  { title: "Reliable Logistics",       desc: "Modern warehousing and nationwide distribution ensuring timely deliveries." },
  { title: "Customer-Focused Service", desc: "Delivering customized procurement solutions and long-term business partnerships." },
];

const PROCESS = [
  { step: "01", icon: ScanSearch,    title: "Inquiry & Sourcing",    desc: "Understanding product specifications and sourcing from certified global manufacturers." },
  { step: "02", icon: ClipboardCheck,title: "Quality Verification",  desc: "Inspecting product compliance, material specifications, and quality standards." },
  { step: "03", icon: PackageCheck,  title: "Procurement & Orders",  desc: "Managing purchase contracts, supplier relations, and order tracking." },
  { step: "04", icon: Truck,         title: "Logistics & Delivery",  desc: "Coordinating customs clearance, warehousing, transportation, and site delivery." },
  { step: "05", icon: ShieldCheck,   title: "Product Handover",     desc: "Delivering products with full documentation, warranties, and compliance certificates." },
  { step: "06", icon: Headset,       title: "After-Sales Support",   desc: "Providing technical assistance, spare parts support, and ongoing maintenance guidance." },
];

const FEATURED_CAPABILITIES = [
  { title: "Custom Sourcing & Procurement", desc: "Tailored industrial product sourcing for specialized engineering and infrastructure projects.", icon: ScanSearch },
  { title: "Bulk Construction Supplies",    desc: "Direct supply contracts for steel, cement, piping systems, and heavy structural materials.", icon: HardHat },
  { title: "Warehousing & Inventory Control",desc: "Modern storage facilities offering buffer stock management and flexible delivery schedules.", icon: Package },
  { title: "Quality Certification Support", desc: "Full material test reports (MTR), ISO compliance, and international safety documentation.", icon: ShieldCheck },
];

const TESTIMONIALS = [
  { name: "Project Director", role: "Infrastructure Contractor", quote: "Max Pak Corporation has been our trusted industrial supply partner for over 5 years. Exceptional product quality and on-time site deliveries every time." },
  { name: "Plant Manager",    role: "Manufacturing Group",      quote: "Their procurement team saved us critical downtime by sourcing specialized spare parts within 48 hours. Outstanding service!" },
];

const FAQS = [
  { q: "What types of industrial products do you supply?", a: "We supply industrial machinery, construction materials, electrical equipment, mechanical components, power tools, safety PPE, industrial chemicals, pumps, and heavy equipment." },
  { q: "Do you supply products for large infrastructure projects?", a: "Yes. We specialize in bulk material supply contracts for construction, energy, oil & gas, and manufacturing projects." },
  { q: "How do you ensure product quality?", a: "All products undergo multi-stage quality checks, material testing certificates (MTR), and are sourced directly from certified global manufacturers." },
  { q: "Can you manage nationwide or international logistics?", a: "Yes. Our integrated logistics team handles warehousing, customs clearance, freight, and direct site transportation." },
];

const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Dedicated Max Pak Header / Navbar ──
function MaxPakNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E2E8F0]">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#1B365D] text-white py-2 px-6 border-b border-[#2B4C7E]">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#16A34A]" />
              Lahore, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#16A34A]" />
              {CONTACT_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#16A34A]" />
              {CONTACT_INFO.emails[0]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 text-xs text-white font-bold">
              <ShieldCheck size={13} className="text-[#16A34A]" />
              Max Pak Corporation — Industrial Trading
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/max-pak-corrpration" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#EDF2F7] p-1 flex items-center justify-center border border-[#CBD5E0] group-hover:scale-105 transition-transform">
            <img src="/group-25.png" alt="Max Pak Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight leading-none text-[#1B365D] group-hover:text-[#122646] transition-colors">
              MAX PAK
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#16A34A] mt-0.5">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#1B365D]">
          {[
            { label: "Home", href: "/group-companies/max-pak-corrpration" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Products", href: "#products" },
            { label: "Why Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#16A34A] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#16A34A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1B365D] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#122646] hover:scale-105 active:scale-95"
          >
            <MessageCircle size={15} />
            Request Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1B365D] hover:bg-[#EDF2F7] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-bold text-sm text-[#1B365D]">
            <Link href="/group-companies/max-pak-corrpration" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              Home
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              About Us
            </Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              Services
            </Link>
            <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              Products
            </Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              Why Us
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#16A34A]">
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-[#E2E8F0]">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#1B365D] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md"
            >
              <MessageCircle size={15} /> Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Dedicated Max Pak Footer ──
function MaxPakFooter() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t-4 border-[#1B365D]">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center">
                <img src="/group-25.png" alt="Max Pak Corporation" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">MAX PAK</h3>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#16A34A] mt-1">
                  CORPORATION
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70 mb-6">
              Max Pak Corporation is a leading industrial trading and supply company providing equipment, machinery, construction materials, and supply chain solutions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1B365D] text-white flex items-center justify-center hover:bg-[#16A34A] hover:scale-110 transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.emails[0]}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1B365D] hover:scale-110 transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1B365D] hover:scale-110 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                "Industrial Equipment Supply",
                "Construction Materials Supply",
                "Engineering Procurement Solutions",
                "Heavy Machinery & Earthmoving",
                "Supply Chain & Distribution",
                "Technical Consultancy & Support",
              ].map((s, i) => (
                <li key={i}>
                  <Link href="#services" className="hover:text-[#16A34A] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#16A34A]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              {[
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Supply Process", href: "#process" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#16A34A] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#16A34A]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.office}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#16A34A] flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-[#16A34A] flex-shrink-0" />
                <span>{CONTACT_INFO.whatsapp.join(" / ")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#16A34A] flex-shrink-0" />
                <span>{CONTACT_INFO.emails.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; {new Date().getFullYear()} Max Pak Corporation. All rights reserved.</p>
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

// ── Animated Counter Component ──
function StatCounterCard({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let rafId;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setCount(value);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div
      ref={cardRef}
      className="group rounded-[20px] border border-[#E2E8F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1B365D]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#1B365D] text-[#1B365D] mb-4 transition-all duration-300 group-hover:bg-[#1B365D] group-hover:text-white group-hover:scale-110">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#1B365D] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#475569]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1B365D] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#16A34A]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1B365D] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#475569]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1B365D] hover:bg-[#F8FAFC]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EDF2F7] text-[#1B365D] mb-6 transition-all duration-300 group-hover:bg-[#1B365D] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#1B365D] mb-3 transition-colors duration-300 group-hover:text-[#16A34A]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
    </div>
  );
}

// ── Small Icon Grid Card ──
function IndustryIconCard({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#1B365D] hover:bg-[#1B365D]">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EDF2F7] text-[#1B365D] transition-all duration-300 group-hover:bg-[#16A34A] group-hover:text-white">
        <Icon size={20} />
      </div>
      <p className="text-xs font-bold text-[#1B365D] leading-snug transition-colors duration-300 group-hover:text-white">{title}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1B365D]">
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#EDF2F7] text-[#16A34A] mb-4 transition-all duration-300 group-hover:bg-[#16A34A] group-hover:text-white group-hover:scale-110">
        <CheckCircle2 size={20} />
      </div>
      <h3 className="text-lg font-black text-[#1B365D] mb-3 transition-colors duration-300 group-hover:text-[#16A34A]">{title}</h3>
      <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1B365D]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B365D] text-white font-black text-sm group-hover:bg-[#16A34A] transition-all">
          {step}
        </div>
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#EDF2F7] text-[#1B365D] transition-all group-hover:bg-[#1B365D] group-hover:text-white">
          <Icon size={17} />
        </div>
        <h4 className="text-base font-bold text-[#1B365D]">{title}</h4>
      </div>
      <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
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
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#16A34A]">Testimonials</p>
          <h3 className="mt-2 text-lg font-black text-[#1B365D]">What Clients Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={goPrev} aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#1B365D] transition-all hover:bg-[#1B365D] hover:text-white">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={goNext} aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#1B365D] transition-all hover:bg-[#1B365D] hover:text-white">
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm">
        <p className="text-sm italic leading-relaxed text-[#475569]">“{activeItem.quote}”</p>
        <div className="mt-5">
          <p className="text-sm font-black text-[#1B365D]">{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mt-1 text-[#16A34A]">{activeItem.role}</p>
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
            style={{ backgroundColor: index === activeIndex ? C.green : C.border }}
          />
        ))}
      </div>
    </div>
  );
}

// ── FAQ Accordion ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#1B365D] transition-colors group-hover:text-[#16A34A]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#EDF2F7] flex items-center justify-center text-[#1B365D] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#1B365D] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#EDF2F7]">
          <p className="mt-3 text-sm leading-relaxed text-[#475569]">{answer}</p>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/group-companies/max-pak-corrpration/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Error sending message. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#EDF2F7] text-[#1B365D] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#1B365D] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#475569] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our sales &amp; procurement team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#1B365D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#122646]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#1B365D] mb-6">Request Industrial Quotation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1B365D] outline-none transition-all focus:border-[#1B365D] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1B365D] outline-none transition-all focus:border-[#1B365D] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1B365D] outline-none transition-all focus:border-[#1B365D] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Service Required</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1B365D] outline-none transition-all focus:border-[#1B365D] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Industrial Equipment Supply">Industrial Equipment Supply</option>
            <option value="Construction Materials">Construction Materials</option>
            <option value="Engineering Procurement">Engineering Procurement</option>
            <option value="Heavy Machinery Solutions">Heavy Machinery Solutions</option>
            <option value="Supply Chain Management">Supply Chain Management</option>
            <option value="Technical Support">Technical Support</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Requirement Specifications *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Specify quantities, technical requirements, or project details..."
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1B365D] outline-none transition-all resize-none focus:border-[#1B365D] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1B365D] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#122646] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
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
          style={{ backgroundColor: "rgba(27,54,93,0.9)" }}>
          <X size={13} /> Remove
        </button>
      )}
      <button onClick={() => fileRef.current?.click()}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: "rgba(27,54,93,0.85)" }}>
        <ImageIcon size={13} /> Change BG
      </button>
    </div>
  );
}

// ── Main Page Component ──
export default function MaxPakCorporationPage() {
  const heroBg = "/max pak.jpeg";

  useEffect(() => {
    document.body.classList.add("max-pak-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = C.charcoal;
    return () => {
      document.body.classList.remove("max-pak-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="max-pak-theme font-sans bg-white" style={{ color: C.charcoal, backgroundColor: "#FFFFFF" }}>
      <style>{`
        body.max-pak-theme,
        body.max-pak-theme html,
        body.max-pak-theme main {
          background-color: #FFFFFF !important;
          color: #1E293B !important;
        }

        body.max-pak-theme section {
          background-color: transparent;
        }

        body.max-pak-theme section.bg-white {
          background-color: #FFFFFF !important;
        }

        body.max-pak-theme h1,
        body.max-pak-theme h2,
        body.max-pak-theme h3,
        body.max-pak-theme h4,
        body.max-pak-theme h5,
        body.max-pak-theme h6,
        body.max-pak-theme p,
        body.max-pak-theme span,
        body.max-pak-theme li,
        body.max-pak-theme a,
        body.max-pak-theme label,
        body.max-pak-theme button,
        body.max-pak-theme input,
        body.max-pak-theme textarea {
          background-image: none !important;
          background-clip: border-box !important;
          -webkit-background-clip: border-box !important;
          -webkit-text-fill-color: currentcolor !important;
        }

        body.max-pak-theme h1.text-white,
        body.max-pak-theme h2.text-white,
        body.max-pak-theme h3.text-white,
        body.max-pak-theme h4.text-white,
        body.max-pak-theme p.text-white,
        body.max-pak-theme span.text-white,
        body.max-pak-theme a.text-white {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        input:focus, textarea:focus { border-color: ${C.navy} !important; background: #fff !important; }
        ::selection { background: ${C.navy}; color: white; }
      `}</style>

      {/* Custom Max Pak Navbar */}
      <MaxPakNavbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b border-[#E2E8F0]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(27,54,93,0.88) 0%, rgba(18,38,70,0.84) 50%, rgba(22,163,74,0.70) 100%), url("${encodeURI(heroBg)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl w-full px-6 py-16 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm mb-6 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-[#16A34A]" />
              {HERO.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span className="text-[#16A34A]">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.navy }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = C.navyHover}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = C.navy}
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#1B365D] hover:scale-[1.03] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative rounded-[32px] overflow-hidden shadow-lg min-h-[300px] border-2 border-[#E2E8F0]">
            <Image src="/max pak.jpeg" alt="Max Pak industrial supply operations" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Industrial Excellence
            </div>
          </div>
          <div>
            <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
            <div className="mt-6 space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed text-[#475569]">{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-[#16A34A]" />
              <p className="text-xs font-black uppercase tracking-widest text-[#1B365D]">Reliable Industrial Supplies Since Day One</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F8FAFC] px-6 py-14 lg:py-20 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Complete Industrial Trading & Supply Solutions"
            description="From equipment sourcing and construction material supply to heavy machinery and technical support."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Product Range" title="Comprehensive Industrial Product Categories" center />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCT_CATEGORIES.map((item, index) => (
              <IndustryIconCard key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Sectors We Support" title="Supplying Diverse Industrial Sectors" center />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES_GRID.map((item, index) => (
              <IndustryIconCard key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Max Pak */}
      <section id="why-us" className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose Max Pak Corporation"
            description="Combining global supply networks, strict quality standards, and technical expertise."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Supply Process Section */}
      <section id="process" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Supply Process"
            title="A Disciplined, Quality-Assured Supply Workflow"
            description="From initial inquiry to nationwide site delivery and post-sales technical support."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Panels */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#1B365D] to-[#122646] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <ScanSearch size={28} className="absolute top-6 right-6 text-[#16A34A]" />
            <h3 className="text-xl font-black text-white mb-2">Global Procurement</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#16A34A] mb-3">Direct OEM Sourcing</p>
            <p className="text-sm leading-relaxed text-white/80">
              We connect local contractors and manufacturing plants with verified international original equipment manufacturers (OEMs).
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 bg-[#0F172A] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <ShieldCheck size={28} className="absolute top-6 right-6 text-[#16A34A]" />
            <h3 className="text-xl font-black text-white mb-2">Certified Quality</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#16A34A] mb-4">International Testing Standards</p>
            <p className="text-sm leading-relaxed text-white/80">
              All structural steel, mechanical components, and heavy equipment are backed by ISO certifications and Material Test Reports.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[24px] min-h-[280px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#16A34A] to-[#15803D] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Truck size={28} className="absolute top-6 right-6 text-white/40" />
            <h3 className="text-xl font-black text-white mb-2">Reliable Logistics</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">Nationwide Site Delivery</p>
            <p className="text-sm leading-relaxed text-white/90">
              Our fleet and partner logistics network ensure fast customs clearance, warehousing, and scheduled site drop-offs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Capabilities" title="Featured Sourcing & Supply Capabilities" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_CAPABILITIES.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1B365D]">
                <div className="relative h-40 w-full bg-gradient-to-br from-[#1B365D] to-[#122646] flex items-center justify-center overflow-hidden">
                  <item.icon size={44} className="text-[#16A34A] transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#16A34A]" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#1B365D] group-hover:text-[#16A34A] transition-colors mb-2">{item.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Testimonials, FAQ */}
      <section id="faqs" className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#1B365D] to-[#122646] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Eye size={26} className="absolute top-6 right-6 text-white/40" />
              <div className="absolute top-0 left-0 w-2 h-full rounded-l-[24px] bg-[#16A34A]" />
              <h3 className="text-lg font-black text-white mb-2">Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/75">
                To become a leading regional industrial supply enterprise recognized for quality products, reliable supply chain management, and long-term business partnerships.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] min-h-[220px] p-8 flex flex-col justify-end bg-gradient-to-br from-[#16A34A] to-[#15803D] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <ShieldCheck size={26} className="absolute top-6 right-6 text-white/40" />
              <h3 className="text-lg font-black text-white mb-2">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/90">
                To supply industries with high-performance equipment, machinery, and materials through efficient sourcing, rigorous quality assurance, and dependable technical support.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-8">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle size={22} className="text-[#16A34A]" />
                <h3 className="text-lg font-black text-[#1B365D]">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {FAQS.map((item, index) => (
                  <FaqAccordionItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-[#1B365D] px-6 py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(22,163,74,0.25),_transparent_55%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-[#16A34A]" />
        <div className="mx-auto max-w-screen-xl relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Delivering Industrial Excellence <span className="text-[#16A34A]">Through Quality &amp; Reliability.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
              Max Pak Corporation continues to power manufacturing, infrastructure, and engineering sectors with trusted industrial products and seamless supply chain solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 bg-[#16A34A] hover:bg-[#15803D]"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#1B365D] active:scale-95"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#F8FAFC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Max Pak Corporation"
            description="Discuss your industrial equipment, construction material, or procurement requirements with our sales team."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#1B365D] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#16A34A]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-white/75 mb-8">
                  Our procurement specialists respond to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#16A34A] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#16A34A] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#16A34A] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
                &copy; {new Date().getFullYear()} Max Pak Corporation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Location Section */}
      <section className="bg-[#F8FAFC] px-6 py-16 lg:py-24 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#16A34A]">Our Location</p>
              <h3 className="mt-3 text-2xl font-black text-[#1B365D]">Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                We welcome project consultations, procurement discussions, and industrial supply meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <p className="text-sm font-semibold leading-relaxed text-[#1B365D]">{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1B365D] transition-colors hover:text-[#16A34A]">
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-sm">
              <iframe
                title="Max Pak Corporation Office Location"
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

      {/* Dedicated Max Pak Footer */}
      <MaxPakFooter />
    </main>
  );
}