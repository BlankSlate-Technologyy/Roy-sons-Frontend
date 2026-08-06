"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Building2, Users2, User, ClipboardList, Star,
  Compass, ShieldCheck, Sparkles, Cpu, Leaf, Eye, Target, Quote,
  HelpCircle, Menu, X, ChevronLeft, ChevronRight, ExternalLink,
  Layers, HardHat, Factory, Trees, Zap, Activity, Grid, Globe, FileText
} from "lucide-react";

// ── Color System matching Neom City Corporation ──
const COLORS = {
  navy:       "#0A2540", // Deep Navy
  navyDark:   "#05172A",
  teal:       "#008080", // Modern Teal/Cyan accent
  emerald:    "#10B981",
  cream:      "#F4F7F6", // Alternating section background
  white:      "#FFFFFF",
  border:     "#E2E8F0",
  textMuted:  "#475569",
  textLight:  "#64748B",
  green:      "#059669",
};

const HERO = {
  badge: "Leading Smart City & Urban Infrastructure Development Company",
  headlineLine1: "Neom City Corporation",
  headlineLine2: "Building Intelligent Cities. Shaping the Future of Urban Living.",
  subline:
    "Neom City Corporation is a leading urban development company specializing in smart cities, commercial districts, industrial zones, sustainable infrastructure, mixed-use developments, and digital city solutions. We design, develop, and deliver world-class urban environments that combine advanced technologies, sustainability, and modern infrastructure to create thriving communities for future generations.",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "Contact Our Experts",
};

const ABOUT = {
  eyebrow: "ABOUT US",
  title: "Engineering Tomorrow's Smart Cities",
  paragraphs: [
    "Neom City Corporation is committed to transforming urban landscapes through innovative planning, sustainable infrastructure, and intelligent city technologies. We deliver integrated urban developments that improve quality of life, drive economic growth, and support environmental sustainability.",
    "Our multidisciplinary team of architects, engineers, planners, and technology experts collaborates to create future-ready cities equipped with smart transportation, digital infrastructure, renewable energy systems, and green public spaces.",
  ],
  features: [
    "Master Planning & Urban Design",
    "Sustainable Smart Infrastructure",
    "Advanced IoT & Digital Integration",
    "End-to-End Project Execution",
  ],
};

const STATS = [
  { icon: Award,       value: 25,     suffix: "+", label: "Years of Urban Development Experience" },
  { icon: Building2,   value: 150,    suffix: "+", label: "Smart Infrastructure Projects" },
  { icon: Factory,     value: 50,     suffix: "+", label: "Commercial Developments" },
  { icon: Users2,      value: 300,    suffix: "+", label: "Engineering & Planning Experts" },
  { icon: ShieldCheck, value: 99,     suffix: "%", label: "Project Success Rate" },
  { icon: Compass,     value: 20,     suffix: "+", label: "Cities Developed" },
];

const SERVICES = [
  { icon: Compass,     title: "Smart City Planning",          desc: "Master planning and development of intelligent, connected, and sustainable urban communities." },
  { icon: HardHat,     title: "Urban Infrastructure",         desc: "Design and construction of roads, bridges, utilities, drainage systems, and public infrastructure." },
  { icon: Building2,   title: "Commercial District Development", desc: "Development of business parks, financial districts, shopping centers, and commercial hubs." },
  { icon: Factory,     title: "Industrial Zone Development",  desc: "Planning and construction of industrial parks, logistics hubs, and manufacturing zones." },
  { icon: Trees,       title: "Residential Communities",      desc: "Development of modern residential neighborhoods with smart amenities and green spaces." },
  { icon: Zap,         title: "Smart Transportation",         desc: "Integrated mobility solutions including intelligent traffic systems, EV infrastructure, and public transit." },
  { icon: Leaf,        title: "Renewable Energy Integration", desc: "Solar energy, smart grids, energy-efficient utilities, and sustainable power systems." },
  { icon: Cpu,         title: "Digital City Solutions",       desc: "IoT platforms, smart governance, surveillance systems, data analytics, and city automation." },
];

const WHY_CHOOSE = [
  { title: "Smart City Expertise",      desc: "Specialists in future-ready urban planning." },
  { title: "Sustainable Development",   desc: "Environmentally responsible projects." },
  { title: "Global Standards",          desc: "Projects designed to international standards." },
  { title: "Advanced Technology",       desc: "AI, IoT, GIS, BIM & Smart Infrastructure." },
  { title: "Experienced Team",          desc: "Highly qualified professionals." },
  { title: "End-to-End Delivery",       desc: "From concept to operations & maintenance." },
];

const INDUSTRIES_SERVED = [
  { icon: Building2, title: "Government Authorities" },
  { icon: Compass,   title: "Urban Development Authorities" },
  { icon: Cpu,       title: "Smart City Projects" },
  { icon: HardHat,   title: "Real Estate Developers" },
  { icon: Factory,   title: "Industrial Parks" },
  { icon: Building2, title: "Commercial Developers" },
  { icon: Layers,    title: "Infrastructure Companies" },
  { icon: Zap,       title: "Transportation Authorities" },
  { icon: Leaf,      title: "Renewable Energy Companies" },
  { icon: Globe,     title: "International Investors" },
];

const PROCESS = [
  { step: "01", icon: FileText, title: "Research & Planning",             desc: "Understanding project goals, demographics, and urban development requirements." },
  { step: "02", icon: Compass,  title: "Master Planning",                 desc: "Developing city layouts, zoning plans, and infrastructure strategies." },
  { step: "03", icon: HardHat,  title: "Engineering & Design",            desc: "Creating detailed engineering drawings, BIM models, and technical specifications." },
  { step: "04", icon: Building2,title: "Construction",                    desc: "Building infrastructure using modern engineering techniques and standards." },
  { step: "05", icon: Cpu,      title: "Smart Technology Integration",    desc: "Implementing IoT, AI, smart utilities, digital services, and intelligent monitoring systems." },
  { step: "06", icon: ShieldCheck, title: "Operations & Maintenance",     desc: "Providing long-term management, maintenance, and continuous infrastructure optimization." },
];

const SOLUTIONS = [
  { title: "Smart Residential Cities",    desc: "Modern residential communities with digital services and green infrastructure." },
  { title: "Commercial Business Hubs",    desc: "Integrated business districts supporting commerce, innovation, and investment." },
  { title: "Industrial Smart Parks",     desc: "Advanced industrial zones equipped with smart logistics and sustainable infrastructure." },
  { title: "Smart Mobility Systems",     desc: "Intelligent traffic management, EV charging, and integrated public transportation." },
  { title: "Digital Governance",         desc: "Smart city platforms enabling efficient public services and citizen engagement." },
  { title: "Green Infrastructure",       desc: "Parks, water conservation, renewable energy, and eco-friendly urban development." },
];

const TECH_ITEMS = [
  "Artificial Intelligence (AI)",
  "Internet of Things (IoT)",
  "Building Information Modeling (BIM)",
  "Geographic Information Systems (GIS)",
  "Smart Traffic Management",
  "Smart Energy Systems",
  "Digital Twin Technology",
  "Smart Water Management",
  "Renewable Energy Integration",
  "City Data Analytics",
];

const FEATURED_PROJECTS = [
  { title: "Smart Metropolitan City",          desc: "Complete planning and infrastructure development for a modern smart city.", image: "/hero-building.png", fallbackBg: "from-[#0A2540] to-[#0F4C81]" },
  { title: "Commercial Financial District",     desc: "Development of a world-class commercial and business hub.", image: "/project-commercial.png", fallbackBg: "from-[#0F4C81] to-[#008080]" },
  { title: "Industrial Technology Park",        desc: "Integrated industrial ecosystem supporting advanced manufacturing and logistics.", image: "/project-industrial.png", fallbackBg: "from-[#008080] to-[#059669]" },
  { title: "Sustainable Residential Community", desc: "Eco-friendly housing development featuring renewable energy and smart infrastructure.", image: "/project-residential.png", fallbackBg: "from-[#059669] to-[#0A2540]" },
];

const TESTIMONIALS = [
  {
    name: "Urban Development Authority",
    role: "Director",
    quote: "Neom City Corporation delivered an exceptional smart city project that exceeded our expectations in innovation, sustainability, and quality.",
    rating: 5,
  },
  {
    name: "Real Estate Developer",
    role: "CEO",
    quote: "Their expertise in urban planning and infrastructure development transformed our vision into a world-class community.",
    rating: 5,
  },
  {
    name: "Government Agency",
    role: "Project Director",
    quote: "Professional project management, technical excellence, and timely delivery made Neom City Corporation our trusted development partner.",
    rating: 5,
  },
  {
    name: "Infrastructure Investment",
    role: "Managing Director",
    quote: "The integration of smart grid systems and green infrastructure in our commercial district exceeded global standards.",
    rating: 5,
  },
];

const FAQS = [
  { q: "What services does Neom City Corporation provide?", a: "We provide smart city planning, urban infrastructure development, commercial district development, industrial zone development, residential communities, smart transportation, renewable energy integration, and digital city solutions." },
  { q: "Do you develop complete smart cities?", a: "Yes. We manage complete urban development cycles from initial feasibility and master planning to infrastructure construction, technology integration, and long-term operations." },
  { q: "Do your projects follow international standards?", a: "Yes. All our projects comply strictly with ISO international standards, quality assurance protocols, safety measures, and environmental guidelines." },
  { q: "Do you integrate smart technologies?", a: "We integrate state-of-the-art IoT sensors, AI analytics, BIM modeling, GIS spatial mapping, smart traffic systems, and digital twin technology into our urban developments." },
  { q: "Do you work with government and private developers?", a: "Yes. We partner with government authorities, urban development boards, private real estate developers, industrial companies, and international investors." },
];

// Updated Contact Information requested by user
const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
  googleMapsUrl: "https://maps.app.goo.gl/iDreS8eCT1teZeRV7",
};

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
      className="group rounded-[20px] border border-[#E2E8F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#008080]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#10B981]/30 text-[#008080] mb-4 transition-all duration-300 group-hover:bg-[#008080] group-hover:text-white group-hover:scale-110">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#0A2540] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-bold leading-relaxed text-[#475569]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#008080] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#008080]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A2540] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#475569]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#008080] hover:bg-[#F4F7F6]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F4F1] text-[#008080] mb-6 transition-all duration-300 group-hover:bg-[#0A2540] group-hover:text-[#10B981] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0A2540] mb-3 transition-colors duration-300 group-hover:text-[#008080]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#475569]">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-300 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
      >
        <h4 className="text-sm md:text-base font-bold text-[#0A2540] transition-colors group-hover:text-[#008080]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#0A2540] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0A2540] group-hover:text-[#10B981]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 border-t border-[#F0F4F8]">
          <p className="mt-3 text-sm leading-relaxed text-[#475569]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Testimonials Slider Component ──
function TestimonialsSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <div className="relative rounded-[24px] border border-[#E2E8F0] bg-white p-8 shadow-sm flex flex-col justify-between min-h-[340px]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote size={28} className="text-[#008080]" />
            <span className="text-xs uppercase tracking-widest font-black text-[#008080]">Client Review</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={15} className="fill-[#10B981] text-[#10B981]" />
            ))}
          </div>
        </div>

        <p className="text-base md:text-lg italic leading-relaxed text-[#0A2540] mb-8 min-h-[90px]">
          &ldquo;{current.quote}&rdquo;
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-[#F0F4F8] pt-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0A2540] text-[#10B981] flex items-center justify-center font-black text-lg shadow-inner">
              {current.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-[#0A2540]">{current.name}</p>
              <p className="text-xs text-[#008080] font-semibold">{current.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-[#F4F7F6] text-[#0A2540] flex items-center justify-center transition-all hover:bg-[#008080] hover:text-white hover:border-[#008080]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-[#F4F7F6] text-[#0A2540] flex items-center justify-center transition-all hover:bg-[#008080] hover:text-white hover:border-[#008080]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#008080]" : "w-2 bg-[#E2E8F0]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Contact Form Component with Service Dropdown ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const servicesOptions = [
    "Smart City Planning",
    "Urban Infrastructure",
    "Commercial District Development",
    "Industrial Zone Development",
    "Residential Communities",
    "Smart Transportation",
    "Renewable Energy Integration",
    "Digital City Solutions",
    "Consultancy & Master Planning",
  ];

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
      const res = await fetch("/group-companies/neom-city/api/contact", {
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
        <div className="w-16 h-16 rounded-full bg-[#E6F4F1] text-[#008080] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0A2540] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#475569] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry regarding &ldquo;{form.service || "our services"}&rdquo; has been received. Our urban development specialists will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#008080]"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0A2540] mb-6">Contact Our Experts</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A2540] outline-none transition-all focus:border-[#008080] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A2540] outline-none transition-all focus:border-[#008080] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A2540] outline-none transition-all focus:border-[#008080] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A2540] outline-none transition-all focus:border-[#008080] focus:bg-white"
          >
            <option value="">Select a Service</option>
            {servicesOptions.map((srv) => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2">Your Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your project scope or development requirements..."
          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A2540] outline-none transition-all resize-none focus:border-[#008080] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#008080] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0A2540] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Neom City Navbar ──
function NeomCityNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Smart Cities", href: "#smart-cities" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E2E8F0]">
      <div className="hidden md:block bg-[#05172A] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#10B981]" /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-[#10B981]" /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-[#10B981]" /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#10B981]">Neom City Corporation — Smart Cities &amp; Urban Development</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#0A2540] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
            <img src="/group-11.png" alt="Neom City Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
            <Building2 size={24} color="#10B981" style={{ display: 'none' }} />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#0A2540] leading-none">NEOM CITY</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#008080]">Corporation</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#0A2540]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#008080] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#008080] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#008080] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0A2540] hover:scale-105 transition-all">
            Contact Our Experts <ArrowRight size={14} />
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F7F6] text-[#0A2540]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#0A2540] hover:text-[#008080] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#008080] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            Contact Our Experts <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}

// ── About Section Component (with Image Support Option) ──
function AboutSection({ imageSrc = "/neom city.jpeg" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="mx-auto max-w-screen-xl grid gap-12 lg:grid-cols-2 items-center">
        {/* About Section Image Container */}
        <div className="relative group">
          <div className="relative rounded-[32px] overflow-hidden border-2 border-[#E2E8F0] shadow-xl bg-gradient-to-br from-[#0A2540] to-[#0F4C81] min-h-[380px] flex items-center justify-center">
            {!imgError && imageSrc ? (
              <img
                src={imageSrc}
                alt="Engineering Tomorrow's Smart Cities - Neom City Corporation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[380px]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <Building2 size={64} className="text-[#10B981] mb-4 animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-2">NEOM CITY CORPORATION</h3>
                <p className="text-xs uppercase tracking-widest text-[#10B981]">Smart Cities &amp; Urban Infrastructure</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-[#10B981]">Neom City Corporation</p>
              <p className="text-sm font-bold mt-1">Leading Smart City &amp; Urban Infrastructure Development</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl bg-[#008080] p-4 text-white shadow-lg hidden sm:flex items-center gap-3">
            <Award size={24} className="text-[#10B981]" />
            <div>
              <p className="text-xs font-black uppercase tracking-wider">25+ Years</p>
              <p className="text-[10px] text-white/80">Urban Development</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
          <div className="mt-6 space-y-4">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-[#475569]">{p}</p>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {ABOUT.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-[#F4F7F6] p-3.5">
                <CheckCircle2 size={18} className="text-[#008080] flex-shrink-0" />
                <span className="text-xs font-bold text-[#0A2540]">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Location Section Component (Standalone Section directly below Contact Us) ──
function LocationSection() {
  return (
    <section id="location" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow="OUR LOCATION"
          title="Visit Our Head Office"
          description="We are conveniently located in Lahore. Drop by our office or open our location on Google Maps."
          center
        />

        <div className="mt-10 rounded-[28px] border border-[#E2E8F0] bg-[#F4F7F6] p-6 lg:p-8 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 border border-[#E2E8F0] shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#008080] mb-2">
                <MapPin size={16} /> Office Address
              </span>
              <p className="text-base font-bold text-[#0A2540] leading-relaxed">
                {CONTACT_INFO.office}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-[#E2E8F0]">
                <p className="text-xs font-black uppercase tracking-wider text-[#008080] mb-1">Phone</p>
                <p className="text-sm font-bold text-[#0A2540]">{CONTACT_INFO.phone}</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-[#E2E8F0]">
                <p className="text-xs font-black uppercase tracking-wider text-[#008080] mb-1">Email</p>
                <p className="text-sm font-bold text-[#0A2540]">{CONTACT_INFO.emails[0]}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#008080] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0A2540] hover:scale-[1.02] active:scale-95"
              >
                <MapPin size={16} /> Open Location in Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[360px] lg:h-[420px] rounded-[24px] overflow-hidden border-2 border-[#E2E8F0] shadow-md relative bg-slate-200">
            <iframe
              title="Neom City Corporation Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.486221086278!2d74.375!3d31.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI3JzE4LjAiTiA3NMKwMjInMzAwIkU!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E2E8F0] shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-[#0A2540]">Neom City Corporation Head Office</p>
                <p className="text-[11px] text-[#475569] leading-tight">Rehman Centre-2, Ring Road, Lahore</p>
              </div>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#008080] hover:underline"
              >
                Directions <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Neom City Footer ──
function NeomCityFooter() {
  return (
    <footer style={{ background: "#05172A" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5">
              <img src="/group-11.png" alt="Neom City Corporation" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
              <Building2 size={20} color="#10B981" style={{ display: 'none' }} />
            </div>
            <div>
              <p className="font-black text-lg leading-none">NEOM CITY CORPORATION</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#10B981]">Smart Cities &amp; Urban Infrastructure</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Building intelligent cities and shaping the future of urban living through sustainable infrastructure and digital innovation.
          </p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#10B981]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#10B981]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#10B981]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#10B981]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["Home", "About Us", "Services", "Projects", "Location", "Careers", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-[#10B981] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#10B981]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#10B981]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#10B981]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#10B981]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-5">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-[#008080] transition-colors"
            >
              <MapPin size={14} className="text-[#10B981]" /> View Location Map <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Neom City Corporation. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function NeomCityPage() {
  useEffect(() => {
    document.body.classList.add("neom-city-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.navy;
    return () => {
      document.body.classList.remove("neom-city-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="neom-city-theme font-sans bg-white text-[#0A2540] selection:bg-[#0A2540] selection:text-white">
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0A2540 !important;
          color-scheme: light !important;
        }
        .neom-city-theme h1, .neom-city-theme h2, .neom-city-theme h3,
        .neom-city-theme h4, .neom-city-theme h5, .neom-city-theme h6,
        .neom-city-theme p, .neom-city-theme span, .neom-city-theme li,
        .neom-city-theme a, .neom-city-theme label, .neom-city-theme button,
        .neom-city-theme input, .neom-city-theme textarea, .neom-city-theme select {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <NeomCityNavbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#0A2540] border-b border-[#0A2540] py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/neom city.jpeg"
            alt="Neom City Corporation Background"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { e.currentTarget.src = '/hero-building.png'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-[#0A2540]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,128,128,0.25),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-screen-xl px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
              <ShieldCheck size={14} className="text-[#10B981]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span className="text-[#10B981]">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#CBD5E1]">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#008080] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0A2540] hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0A2540] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F4F7F6] px-6 py-14 lg:py-20 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section (with Image Option) */}
      <AboutSection imageSrc="/neom city.jpeg" />

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F7F6] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Complete Smart City Development Solutions"
            description="From master planning and urban infrastructure to digital governance and renewable energy integration."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Industries We Serve & Process */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Why Choose Us */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#E2E8F0] bg-[#F4F7F6] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#008080]">WHY CHOOSE NEOM CITY CORPORATION</span>
                <h3 className="mt-2 text-2xl font-black text-[#0A2540] mb-6">Your Trusted Urban Development Partner</h3>
                <div className="space-y-4">
                  {WHY_CHOOSE.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-[#0A2540]">{item.title}</p>
                        <p className="text-xs text-[#475569]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#008080] mb-2 block">INDUSTRIES WE SERVE</span>
              <h3 className="text-2xl font-black text-[#0A2540] mb-6">Empowering Urban Stakeholders</h3>
              <div className="grid grid-cols-2 gap-3">
                {INDUSTRIES_SERVED.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3.5 shadow-sm hover:border-[#008080] transition-colors">
                    <item.icon size={18} className="text-[#008080] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#0A2540]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#E2E8F0] bg-[#0A2540] p-8 text-white shadow-xl">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#10B981]">OUR PROCESS</span>
              <h3 className="mt-2 text-2xl font-black text-white mb-6">From Vision to Smart City</h3>
              <div className="space-y-4">
                {PROCESS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#008080] text-white flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Solutions & Technology */}
      <section id="smart-cities" className="bg-[#F4F7F6] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          {/* Infrastructure Solutions */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#008080]">OUR SOLUTIONS</span>
            <h3 className="mt-2 text-2xl font-black text-[#0A2540] mb-6">Future-Ready Urban Infrastructure</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SOLUTIONS.map((sol, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                  <h4 className="text-sm font-bold text-[#0A2540] mb-1.5">{sol.title}</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Innovation */}
          <div className="rounded-[28px] border border-[#E2E8F0] bg-[#05172A] p-8 text-white shadow-xl">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#10B981]">TECHNOLOGY &amp; INNOVATION</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-6">Building Intelligent Cities</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TECH_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Quality Standards */}
      <section id="sustainability" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] bg-gradient-to-br from-[#059669] to-[#0A2540] p-8 text-white shadow-lg">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-white/80">SUSTAINABILITY</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-4">Creating Greener Cities</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Our developments prioritize environmental responsibility through renewable energy integration, green buildings, sustainable transportation, efficient water management, waste recycling systems, and climate-resilient infrastructure that supports healthier communities.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#E2E8F0] bg-[#F4F7F6] p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#008080]">QUALITY &amp; COMPLIANCE</span>
            <h3 className="mt-2 text-2xl font-black text-[#0A2540] mb-4">Built to Global Standards</h3>
            <p className="text-sm leading-relaxed text-[#475569] mb-6">
              Every project follows internationally recognized engineering, environmental, construction, and urban planning standards to ensure safety, quality, efficiency, and long-term performance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {["International Standards", "Quality Assurance", "Safety First", "Environmental Compliance"].map((std, i) => (
                <div key={i} className="p-3 rounded-xl bg-white border border-[#E2E8F0]">
                  <ShieldCheck size={20} className="mx-auto text-[#008080] mb-1" />
                  <p className="text-[10px] font-bold text-[#0A2540]">{std}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-[#F4F7F6] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="FEATURED PROJECTS" title="Transformative Urban Developments" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((proj, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#008080]">
                <div className={`relative h-44 w-full bg-gradient-to-br ${proj.fallbackBg} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <Building2 size={40} className="absolute text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#008080] transition-colors mb-2">{proj.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#0A2540] to-[#0F4C81] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Target size={28} className="absolute top-6 right-6 text-[#10B981]/50" />
            <h3 className="text-xl font-black text-white mb-2">OUR MISSION</h3>
            <p className="text-sm leading-relaxed text-[#CBD5E1]">
              To create sustainable, intelligent, and innovative urban environments that improve quality of life, strengthen economies, and shape the future of modern cities.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#0F4C81] to-[#008080] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Eye size={28} className="absolute top-6 right-6 text-white/50" />
            <h3 className="text-xl font-black text-white mb-2">OUR VISION</h3>
            <p className="text-sm leading-relaxed text-white/90">
              To become a globally recognized leader in smart city development, sustainable infrastructure, and urban innovation by delivering transformative projects that redefine the future of urban living.
            </p>
          </div>
        </div>
      </section>

      {/* COMBINED SECTION: Testimonials & FAQs (Left & Right Side-by-Side as requested) */}
      <section id="testimonials-faq" className="bg-[#F4F7F6] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Client Testimonials with Slider */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#008080] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#008080]" />
                  CLIENT TESTIMONIALS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0A2540]">What Our Partners Say</h3>
              </div>
              <TestimonialsSlider testimonials={TESTIMONIALS} />
            </div>

            {/* Right Side: Frequently Asked Questions */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#008080] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#008080]" />
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0A2540]">Got Questions? We Have Answers</h3>
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

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#F4F7F6] px-6 py-16 lg:py-24 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Contact Neom City Corporation"
            description="Discuss your urban development, smart city master plan, or infrastructure inquiry with our experts."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0A2540] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full min-h-[460px]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#10B981]">CONTACT DETAILS</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1] mb-8">
                  Our urban development team responds to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#10B981]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#10B981] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#10B981]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#10B981] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#10B981]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#10B981] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#10B981]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#10B981] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-xs text-[#CBD5E1]">
                &copy; {new Date().getFullYear()} Neom City Corporation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Location Section directly below Contact Us */}
      <LocationSection />

      <NeomCityFooter />
    </main>
  );
}