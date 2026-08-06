"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Briefcase, Zap, Sun, Cpu, Battery, Radio, Wrench,
  Plug, Fuel, Factory, Mountain, Building2, Building, HeartPulse, Server,
  Truck, Warehouse, ShieldCheck, HardHat, FlaskConical, MessageCircle, Gauge,
  MapPin, Phone, Mail, Plus, Minus, Send, CheckCircle2, Search, Compass,
  ClipboardList, Settings, Leaf, BrainCircuit, Users2, Menu, X, Facebook, Linkedin, Twitter,
  ChevronLeft, ChevronRight
} from "lucide-react";

// ── Color System matching Max Power Corporation Logo ──
const COLORS = {
  navy:         "#0E4B7E", // Deep Electric Navy Blue from Max Power logo
  navyDark:     "#0A3860",
  amber:        "#F5A623", // High-Voltage Electric Amber/Gold from Max Power logo
  amberHover:   "#D88E12",
  charcoal:     "#4A5568", // Slate Charcoal for text & subheadings
  charcoalDark: "#2D3748",
  white:        "#FFFFFF",
  bgLight:      "#F4F7FA", // Light electric-tinted background
  border:       "#D2E0EC",
  textMuted:    "#3E4C5E",
  textLight:    "#6B7A8E",
};

const HERO = {
  badge: "Leading Energy & Power Infrastructure Company",
  headline: "Max Power Corporation",
  subline:
    "Powering industries and energizing the future through renewable energy solutions, thermal & hybrid power plants, electrical engineering, high-voltage transmission, battery storage, and smart grid automation.",
  ctaPrimary: "Explore Solutions",
  ctaSecondary: "Talk To An Engineer",
};

const STATS = [
  { value: 30,   suffix: "+",   label: "Years of Industry Experience" },
  { value: 500,  suffix: "+",   label: "Completed Power Projects" },
  { value: 2000, suffix: "+ MW",label: "Installed Power Capacity" },
  { value: 300,  suffix: "+",   label: "Engineering Professionals" },
  { value: 99.8, suffix: "%",   label: "System Reliability & Uptime" },
];

const SERVICES = [
  { icon: Sun,     title: "Renewable Energy Solutions",       desc: "Designing and implementing solar, wind, hybrid, and clean energy systems for sustainable power generation." },
  { icon: Zap,     title: "Power Generation Plants",          desc: "Developing efficient thermal, hydro, solar, gas, and hybrid power plants for industrial and utility applications." },
  { icon: Cpu,     title: "Electrical Engineering",            desc: "Providing complete electrical engineering services including design, installation, testing, and commissioning." },
  { icon: Battery, title: "Energy Storage Systems",          desc: "Advanced battery storage solutions that improve grid stability, backup power, and renewable energy integration." },
  { icon: Radio,   title: "Power Transmission & Distribution", desc: "Construction of substations, transmission lines, distribution networks, and electrical infrastructure." },
  { icon: Wrench,  title: "Operations & Maintenance (O&M)",    desc: "Comprehensive maintenance services that maximize system efficiency, reliability, and equipment lifespan." },
];

const WHY_CHOOSE = [
  { title: "Engineering Excellence", desc: "Experienced power engineers delivering innovative and dependable energy solutions." },
  { title: "Sustainable Energy Focus", desc: "Promoting renewable technologies and environmentally responsible power generation." },
  { title: "Advanced Technology",      desc: "Utilizing smart grids, automation, digital monitoring, and intelligent energy systems." },
  { title: "Maximum Reliability",      desc: "High-efficiency systems engineered for maximum uptime and operational reliability." },
  { title: "Safety & Compliance",      desc: "Strict adherence to international electrical, environmental, and safety standards." },
  { title: "Complete Turnkey Delivery",desc: "From planning and engineering to commissioning and ongoing technical support." },
];

const INDUSTRIES = [
  "Power Utilities",
  "Oil & Gas",
  "Manufacturing & Industrial",
  "Mining & Heavy Industry",
  "Commercial Buildings",
  "Smart Cities",
  "Government Infrastructure",
  "Healthcare Facilities",
  "Data Centers",
  "Transportation & Logistics",
];

const PROCESS = [
  { step: "01", title: "Energy Assessment",         desc: "Analyzing project requirements, energy demand, and technical feasibility." },
  { step: "02", title: "Engineering & Design",       desc: "Developing optimized electrical and energy system designs." },
  { step: "03", title: "Procurement & Sourcing",     desc: "Sourcing certified equipment, components, and engineering materials." },
  { step: "04", title: "Installation & Construction",desc: "Executing power projects with precision, safety, and quality assurance." },
  { step: "05", title: "Testing & Commissioning",    desc: "Comprehensive performance testing, calibration, and operational verification." },
  { step: "06", title: "Operations & Maintenance",   desc: "Providing continuous monitoring, preventive maintenance, and technical support." },
];

const TECHNOLOGIES = [
  "Smart Grid Solutions", "Solar PV Systems", "Wind Energy Technology", "Battery Energy Storage",
  "SCADA Automation", "Power Management Systems", "Electrical Protection Systems",
  "Digital Energy Monitoring", "AI-Based Energy Analytics", "IoT Energy Management",
];

const FEATURED_PROJECTS = [
  { title: "Utility Scale Solar Power Plant",   desc: "Delivering 50MW renewable energy generation for regional utility providers.", image: "/project-infrastructure.png" },
  { title: "Industrial Substation Construction",desc: "High-voltage transmission substation built for heavy manufacturing complex.", image: "/project-industrial.png" },
  { title: "Hybrid Microgrid Energy System",   desc: "Solar and battery storage hybrid microgrid for remote industrial operations.", image: "/project-commercial.png" },
  { title: "Commercial Power Management",      desc: "Complete electrical automation and power distribution for a commercial hub.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  { name: "Utility Operations Director", role: "Power Utility Group", quote: "Max Power Corporation delivered our grid expansion project with exceptional precision, quality, and technical expertise." },
  { name: "Industrial Plant Manager",    role: "Manufacturing Group", quote: "Their solar and hybrid power installation drastically reduced our energy costs while guaranteeing 100% operational uptime." },
  { name: "Infrastructure Consultant",  role: "Energy Advisory Firm", quote: "Professional engineers, reliable equipment sourcing, and flawless execution. Max Power is our trusted energy partner." },
];

const FAQS = [
  { q: "What core energy services does Max Power Corporation offer?", a: "We specialize in renewable energy (solar/wind), power generation plants, high-voltage transmission & distribution, electrical engineering, battery storage, and O&M services." },
  { q: "Do you handle complete turnkey power projects?", a: "Yes. We manage full EPC lifecycle — energy assessment, engineering design, equipment procurement, construction, testing, and commissioning." },
  { q: "Can you help industrial plants transition to solar energy?", a: "Yes. We design and install captive solar and hybrid energy systems for factories and industrial plants to lower power bills and emissions." },
  { q: "What safety and quality standards do you follow?", a: "All Max Power installations conform to IEEE, IEC, ISO, and international safety and environmental compliance benchmarks." },
];

// Exact contact information requested by user
const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

// ── Max Power Custom Navbar Component ──
function MaxPowerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Projects", href: "#projects" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#D2E0EC] shadow-sm transition-all">
      <div className="mx-auto max-w-screen-xl px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-[#0E4B7E] flex items-center justify-center text-[#F5A623] shadow-md group-hover:bg-[#F5A623] group-hover:text-white transition-all duration-300">
            <Zap size={24} className="fill-current" />
          </div>
          <div>
            <span className="block text-lg font-black tracking-tight text-[#0E4B7E] leading-none uppercase">
              MAX POWER
            </span>
            <span className="block text-[9px] font-black tracking-[0.25em] text-[#F5A623] uppercase mt-0.5">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wider text-[#0E4B7E] hover:text-[#F5A623] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5A623] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0E4B7E] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#F5A623] hover:scale-[1.02]"
          >
            Get In Touch
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0E4B7E] hover:text-[#F5A623] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D2E0EC] px-6 py-4 space-y-3 animate-fade-in-up">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-wider text-[#0E4B7E] hover:text-[#F5A623] py-2 border-b border-[#F4F7FA]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center rounded-full bg-[#0E4B7E] py-3 text-xs font-bold uppercase tracking-widest text-white mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}

// ── Max Power Custom Footer Component ──
function MaxPowerFooter() {
  return (
    <footer className="bg-[#0E4B7E] text-white border-t-4 border-[#F5A623]">
      <div className="mx-auto max-w-screen-xl px-6 py-14 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F5A623] shadow-inner">
                <Zap size={26} className="fill-current" />
              </div>
              <div>
                <span className="block text-xl font-black tracking-tight text-white uppercase leading-none">
                  MAX POWER
                </span>
                <span className="block text-[10px] font-black tracking-[0.25em] text-[#F5A623] uppercase mt-1">
                  CORPORATION
                </span>
              </div>
            </div>
            <p className="text-xs text-[#D2E0EC] leading-relaxed">
              Powering industries and energizing the future through reliable renewable energy, thermal power generation, high-voltage substations, and electrical engineering excellence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D2E0EC] hover:bg-[#F5A623] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D2E0EC] hover:bg-[#F5A623] hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#D2E0EC] hover:bg-[#F5A623] hover:text-white transition-all">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#F5A623] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-[#D2E0EC]">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Target Sectors", href: "#sectors" },
                { label: "Why Choose Us", href: "#why-choose" },
                { label: "Featured Projects", href: "#projects" },
                { label: "FAQ Center", href: "#faqs" },
                { label: "Contact Us", href: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#F5A623] transition-colors flex items-center gap-1.5">
                    <span className="text-[#F5A623] text-xs">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#F5A623] mb-4">Core Solutions</h4>
            <ul className="space-y-2.5 text-xs text-[#D2E0EC]">
              {[
                "Renewable Solar & Wind",
                "Power Generation Plants",
                "Electrical Engineering",
                "Battery Energy Storage",
                "Transmission & Substations",
                "Operations & Maintenance",
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#F5A623] text-xs mt-0.5">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#F5A623] mb-4">Corporate Office</h4>
            <div className="space-y-3 text-xs text-[#D2E0EC]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#F5A623] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{CONTACT_INFO.office}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#F5A623] shrink-0" />
                <p className="font-semibold">{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle size={16} className="text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  {CONTACT_INFO.whatsapp.map((w, i) => (
                    <p key={i} className="font-medium">{w}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  {CONTACT_INFO.emails.map((e, i) => (
                    <p key={i} className="font-medium">{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D2E0EC] gap-4">
          <p>© {new Date().getFullYear()} Max Power Corporation. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5A623] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">ISO Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Animated Counter Component ──
function StatCounterCard({ value, suffix, label }) {
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
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div
      ref={cardRef}
      className="rounded-[24px] border border-[#D2E0EC] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E4B7E]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#0E4B7E] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#3E4C5E]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#F5A623] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0E4B7E] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#3E4C5E]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E0EC] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E4B7E] hover:bg-[#F4F7FA]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F0F8] text-[#0E4B7E] mb-6 transition-all duration-300 group-hover:bg-[#0E4B7E] group-hover:text-[#F5A623] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0E4B7E] mb-3 transition-colors duration-300 group-hover:text-[#F5A623]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3E4C5E]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E0EC] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#F5A623]">
      <div className="text-[#F5A623] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#0E4B7E] mb-3 transition-colors duration-300 group-hover:text-[#F5A623]">{title}</h3>
      <p className="text-sm text-[#3E4C5E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E0EC] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E4B7E]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E4B7E] text-[#F5A623] font-black group-hover:bg-[#F5A623] group-hover:text-white transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#0E4B7E]">{title}</h4>
      </div>
      <p className="text-sm text-[#3E4C5E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Testimonial Slider Component ──
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
    <div className="rounded-[28px] border border-[#D2E0EC] bg-[#F4F7FA] p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5A623]">Testimonials</p>
          <h3 className="mt-2 text-2xl font-black text-[#0E4B7E]">What Our Partners Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2E0EC] bg-white text-[#0E4B7E] transition-all hover:border-[#0E4B7E] hover:text-[#F5A623]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2E0EC] bg-white text-[#0E4B7E] transition-all hover:border-[#0E4B7E] hover:text-[#F5A623]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#D2E0EC] bg-white p-7 shadow-sm">
        <p className="text-base italic leading-relaxed text-[#3E4C5E]">“{activeItem.quote}”</p>
        <div className="mt-6">
          <p className="font-black text-[#0E4B7E]">{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A623] mt-1">{activeItem.role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeIndex ? "bg-[#0E4B7E]" : "bg-[#D2E0EC]"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D2E0EC] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#0E4B7E] transition-colors group-hover:text-[#F5A623]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6F0F8] flex items-center justify-center text-[#0E4B7E] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0E4B7E] group-hover:text-[#F5A623]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E6F0F8]">
          <p className="mt-3 text-sm leading-relaxed text-[#3E4C5E]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form Component ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/group-companies/max-power/api/contact", {
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
      <div className="rounded-[28px] border border-[#D2E0EC] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E6F0F8] text-[#0E4B7E] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0E4B7E] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3E4C5E] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our power engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0E4B7E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#F5A623]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D2E0EC] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0E4B7E] mb-6">Request Energy Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D2E0EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E4B7E] outline-none transition-all focus:border-[#0E4B7E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D2E0EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E4B7E] outline-none transition-all focus:border-[#0E4B7E] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D2E0EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E4B7E] outline-none transition-all focus:border-[#0E4B7E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Service Required</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#D2E0EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E4B7E] outline-none transition-all focus:border-[#0E4B7E] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Renewable Energy Solutions">Renewable Energy Solutions</option>
            <option value="Power Generation Plants">Power Generation Plants</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Energy Storage Systems">Energy Storage Systems</option>
            <option value="Transmission & Distribution">Transmission & Distribution</option>
            <option value="Operations & Maintenance">Operations & Maintenance</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Power Project Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your power capacity, site, or project needs..."
          className="w-full rounded-xl border border-[#D2E0EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E4B7E] outline-none transition-all resize-none focus:border-[#0E4B7E] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4B7E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#F5A623] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Request <Send size={15} />
      </button>
    </form>
  );
}

// ── Main Page Component ──
export default function MaxPowerPage() {
  // Header / Hero Background Image
  const headerBgImage = "/max power.jpeg";

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "maxpower-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.navy;
    return () => {
      document.body.classList.remove("roys-roys-theme", "maxpower-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme maxpower-theme font-sans bg-white text-[#0E4B7E] selection:bg-[#0E4B7E] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0E4B7E !important;
          color-scheme: light !important;
        }
        .maxpower-theme h1,
        .maxpower-theme h2,
        .maxpower-theme h3,
        .maxpower-theme h4,
        .maxpower-theme h5,
        .maxpower-theme h6,
        .maxpower-theme p,
        .maxpower-theme span,
        .maxpower-theme li,
        .maxpower-theme a,
        .maxpower-theme label,
        .maxpower-theme button,
        .maxpower-theme input,
        .maxpower-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      {/* Max Power Custom Navbar (replaces Roysons global navbar) */}
      <MaxPowerNavbar />

      {/* Hero Section with Header Background Image */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-[#D2E0EC] min-h-[500px] lg:min-h-[580px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 56, 96, 0.86) 0%, rgba(14, 75, 126, 0.80) 50%, rgba(10, 56, 96, 0.90) 100%), url("${encodeURI(headerBgImage)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-20 lg:py-28 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#F5A623]/50 bg-[#0E4B7E]/80 px-4.5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#F5A623] shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Powering Industries. <span className="text-[#F5A623]">Energizing The Future.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E6F0F8]">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#0E4B7E] shadow-lg transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0E4B7E] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D2E0EC] bg-[#F4F7FA] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#F5A623]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
                About Max Power
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-[#0E4B7E]">
                Reliable energy infrastructure designed for performance, safety, and long-term growth.
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-[#3E4C5E]">
                Max Power Corporation delivers dependable power systems across renewable energy, high-voltage transmission, industrial electrification, and smart energy management. Our engineering-led approach ensures every project is executed with precision, compliance, and measurable results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0E4B7E] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#F5A623]">
                  Request A Consultation <ArrowRight size={15} />
                </Link>
                <Link href="#projects" className="inline-flex items-center gap-2 rounded-full border border-[#D2E0EC] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#0E4B7E] transition-all hover:border-[#0E4B7E] hover:text-[#F5A623]">
                  View Projects
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#D2E0EC] bg-[#F4F7FA] p-3 shadow-sm">
              <div className="relative h-[380px] overflow-hidden rounded-[24px]">
                <Image src="/max power.jpeg" alt="Max Power facility and engineering work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Comprehensive Power & Energy Infrastructure Solutions"
            description="Delivering end-to-end power generation, renewable solar/wind energy, electrical substations, and energy storage systems."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="sectors" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Sectors We Support With Reliable Energy" description="Powering critical utilities, industrial plants, commercial complexes, and smart infrastructure." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D2E0EC] bg-[#F4F7FA] p-5 text-sm font-semibold text-[#0E4B7E] text-center transition-all duration-300 hover:border-[#0E4B7E] hover:bg-[#0E4B7E] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Max Power Section */}
      <section id="why-choose" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Your Trusted Partner In Power Infrastructure"
            description="Combining engineering excellence, high-voltage reliability, and clean energy innovation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Project Execution Workflow"
            description="From feasibility assessment and electrical design through procurement, installation, and O&M."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Energizing High-Impact Projects"
            description="Selected highlights of power generation, solar energy, and substation infrastructure successfully commissioned."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D2E0EC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E4B7E]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0E4B7E] group-hover:text-[#F5A623] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3E4C5E] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + FAQs */}
      <section id="faqs" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials & FAQs"
            title="Trusted by Clients. Clear Answers for Every Project."
            description="See how our clients describe their experience and explore common questions about our energy solutions."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="grid gap-4">
              {FAQS.map((item, index) => (
                <FaqAccordionItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section with User Information */}
      <section id="contact" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Max Power Corporation"
            description="Discuss your power generation project, solar hybrid installation, or electrical infrastructure needs."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0E4B7E] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#F5A623]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D2E0EC] mb-8">
                  Our power engineering team responds to every consultation and quote request within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A623]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#F5A623] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A623]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#F5A623] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5A623]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#F5A623] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D2E0EC]">
                © {new Date().getFullYear()} Max Power Corporation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Location Section */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-t border-[#D2E0EC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border border-[#D2E0EC] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F5A623]">Our Location</p>
              <h3 className="mt-3 text-2xl font-black text-[#0E4B7E]">Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3E4C5E]">
                We welcome project consultations, engineering discussions, and partnership meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border border-[#D2E0EC] bg-[#F4F7FA] p-4">
                <p className="text-sm font-semibold text-[#0E4B7E] leading-relaxed">{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0E4B7E] transition-colors hover:text-[#F5A623]">
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#D2E0EC] bg-white shadow-sm">
              <iframe
                title="Max Power Office Location"
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

      {/* Max Power Custom Footer (replaces Roysons corporate footer) */}
      <MaxPowerFooter />
    </main>
  );
}