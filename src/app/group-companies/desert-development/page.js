"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Building2, Users2, User, ClipboardList, Star,
  ShieldCheck, Sparkles, Cpu, Leaf, Eye, Target, Quote,
  HelpCircle, Menu, X, ChevronLeft, ChevronRight, ExternalLink,
  Trees, Globe, Droplets, Sun, Wind, Layers, Compass, HardHat, Sprout, BarChart3
} from "lucide-react";

// ── Color System matching Desert Development & Rehabilitation ──
const COLORS = {
  primary:     "#1B4D3E", // Forest/Desert Green
  darkGreen:   "#0D3025",
  darkerGreen: "#071C15",
  emerald:     "#2D7D62", // Vibrant Emerald Accent
  cream:       "#F7FBF9", // Soft environmental background
  white:       "#FFFFFF",
  border:      "#D4E5DD",
  textMuted:   "#425C52",
  textLight:   "#5E7D72",
};

const HERO = {
  badge: "Leading Desert Development & Environmental Rehabilitation Company",
  headlineLine1: "Desert Development & Rehabilitation",
  headlineLine2: "Transforming Arid Landscapes into Sustainable Opportunities",
  subline:
    "Desert Development & Rehabilitation is a leading environmental engineering and land development company specializing in desert rehabilitation, sustainable infrastructure, land reclamation, ecological restoration, water management, afforestation, renewable energy integration, and climate-resilient development. We transform barren landscapes into productive ecosystems that support economic growth, environmental sustainability, and thriving communities.",
  ctaPrimary: "Explore Our Projects",
  ctaSecondary: "Contact Our Experts",
};

const ABOUT = {
  eyebrow: "ABOUT US",
  title: "Building Sustainable Futures in Desert Regions",
  paragraphs: [
    "Desert Development & Rehabilitation combines environmental science, engineering expertise, and innovative technologies to restore degraded lands and develop sustainable infrastructure across arid and semi-arid regions.",
    "Our multidisciplinary team delivers integrated solutions for governments, developers, environmental organizations, and industrial sectors by creating resilient landscapes that improve biodiversity, conserve natural resources, and support long-term economic development.",
  ],
  badges: [
    { title: "Integrated Solutions", desc: "Science & Engineering Synergies", icon: Layers },
    { title: "Environmental Excellence", desc: "Biodiversity & Land Conservation", icon: Leaf },
    { title: "Sustainable Growth", desc: "Long-Term Economic Development", icon: Sprout },
    { title: "Community Impact", desc: "Resilient & Thriving Ecosystems", icon: Users2 },
  ],
};

const STATS = [
  { icon: Award,       value: 25,    suffix: "+", label: "Years of Environmental Engineering Experience" },
  { icon: Globe,       value: 200,   suffix: "+", label: "Desert Rehabilitation Projects" },
  { icon: Trees,       value: 5,     suffix: "M+", label: "Trees Planted" },
  { icon: Users2,      value: 300,   suffix: "+", label: "Environmental Specialists" },
  { icon: ShieldCheck, value: 98,    suffix: "%", label: "Project Success Rate" },
  { icon: Compass,     value: 30,    suffix: "+", label: "Regions Successfully Restored" },
];

const SERVICES = [
  { icon: Sprout,     title: "Desert Rehabilitation",         desc: "Restoration of degraded desert ecosystems through scientific environmental engineering and sustainable land management." },
  { icon: Layers,     title: "Land Reclamation",              desc: "Transforming barren and unproductive land into usable agricultural, industrial, and urban development areas." },
  { icon: Building2,  title: "Sustainable Infrastructure",   desc: "Construction of roads, utilities, drainage systems, and eco-friendly infrastructure for desert environments." },
  { icon: Droplets,   title: "Water Resource Management",    desc: "Efficient irrigation systems, groundwater recharge, desalination support, and sustainable water conservation." },
  { icon: Trees,      title: "Afforestation & Green Belts",   desc: "Large-scale plantation projects to combat desertification and improve environmental resilience." },
  { icon: Sun,        title: "Renewable Energy Development", desc: "Solar farms, wind energy infrastructure, and sustainable power systems for remote desert regions." },
  { icon: Compass,    title: "Environmental Consultancy",    desc: "Environmental impact assessments, feasibility studies, and sustainability consulting." },
  { icon: Wind,       title: "Climate Adaptation Solutions", desc: "Developing resilient infrastructure that withstands harsh climatic conditions and supports long-term sustainability." },
];

const WHY_CHOOSE = [
  { title: "Environmental Expertise",   desc: "Specialists in arid land restoration & greening." },
  { title: "Sustainable Engineering",   desc: "Eco-friendly infrastructure design." },
  { title: "Innovative Technologies",   desc: "Drone surveying, GIS, AI & smart irrigation." },
  { title: "Proven Experience",         desc: "Decades of successful large-scale projects." },
  { title: "Global Standards",          desc: "Full compliance with ISO & international guidelines." },
  { title: "End-to-End Project Delivery",desc: "From feasibility assessment to maintenance." },
];

const INDUSTRIES_SERVED = [
  { icon: Building2, title: "Government Authorities" },
  { icon: Leaf,      title: "Environmental Agencies" },
  { icon: Sun,       title: "Renewable Energy Companies" },
  { icon: Sprout,    title: "Agriculture & Farming" },
  { icon: Layers,    title: "Mining & Minerals" },
  { icon: HardHat,   title: "Infrastructure Developers" },
  { icon: Building2, title: "Industrial Parks" },
  { icon: Compass,   title: "Research Organizations" },
  { icon: Globe,     title: "NGOs & Non-Profits" },
  { icon: Sparkles,  title: "International Development Projects" },
];

const PROCESS = [
  { step: "01", icon: Compass,   title: "Site Assessment",         desc: "Comprehensive environmental surveys, soil analysis, and hydrology studies." },
  { step: "02", icon: Layers,    title: "Planning & Design",       desc: "Developing customized rehabilitation and infrastructure strategies." },
  { step: "03", icon: HardHat,   title: "Engineering & Development", desc: "Executing sustainable construction, earthworks, and restoration works." },
  { step: "04", icon: Sprout,    title: "Environmental Restoration", desc: "Implementing afforestation, soil improvement, and ecosystem recovery." },
  { step: "05", icon: BarChart3, title: "Monitoring & Optimization", desc: "Continuous sensor monitoring, satellite analysis, and performance evaluation." },
  { step: "06", icon: ShieldCheck, title: "Long-Term Sustainability", desc: "Maintenance programs ensuring lasting ecological and economic benefits." },
];

const SOLUTIONS = [
  { title: "Desert Greening",          desc: "Large-scale tree planting and soil rehabilitation." },
  { title: "Smart Irrigation Systems", desc: "Automated drip and subsurface water conservation." },
  { title: "Renewable Energy Parks",   desc: "Integrated solar and wind energy developments." },
  { title: "Sustainable Communities", desc: "Eco-friendly urban layouts for arid zones." },
  { title: "Climate Resilience",       desc: "Infrastructure engineered for harsh desert conditions." },
  { title: "Land Improvement",        desc: "Soil stabilization and erosion prevention." },
];

const TECH_ITEMS = [
  "GIS Mapping",
  "Drone Land Surveying",
  "AI Environmental Monitoring",
  "Satellite Land Analysis",
  "Smart Irrigation Systems",
  "Solar Energy Integration",
  "Climate Analytics",
  "Digital Environmental Modeling",
  "Water Recycling Technologies",
  "Sustainable Construction Methods",
];

const FEATURED_PROJECTS = [
  { title: "Desert Smart City Development", desc: "Integrated sustainable infrastructure for a modern desert community.", image: "/hero-building.png", fallbackBg: "from-[#1B4D3E] to-[#0D3025]" },
  { title: "National Afforestation Program", desc: "Large-scale tree plantation and ecosystem restoration initiative.", image: "/project-industrial.png", fallbackBg: "from-[#0D3025] to-[#2D7D62]" },
  { title: "Solar Energy Desert Park",      desc: "Renewable energy infrastructure supporting clean energy generation.", image: "/project-infrastructure.png", fallbackBg: "from-[#2D7D62] to-[#1B4D3E]" },
  { title: "Sustainable Agricultural Zone", desc: "Transforming arid land into productive agricultural development.", image: "/project-residential.png", fallbackBg: "from-[#1B4D3E] to-[#2D7D62]" },
];

const TESTIMONIALS = [
  {
    name: "Government Authority",
    role: "Ministry of Environment",
    quote: "Their desert rehabilitation expertise transformed degraded land into a sustainable development zone exceeding all expectations.",
    rating: 5,
  },
  {
    name: "Environmental Organization",
    role: "Project Director",
    quote: "Professional environmental planning, outstanding engineering, and measurable ecological improvements across our region.",
    rating: 5,
  },
  {
    name: "Renewable Energy Developer",
    role: "CEO",
    quote: "Their integrated land development solutions enabled the successful implementation of our solar power park.",
    rating: 5,
  },
  {
    name: "International Investor",
    role: "Managing Director",
    quote: "Exceptional capability in land reclamation and smart irrigation that brought high ROI to our agricultural venture.",
    rating: 5,
  },
];

const FAQS = [
  { q: "What services do you provide?", a: "We provide desert rehabilitation, land reclamation, sustainable infrastructure, water resource management, afforestation, renewable energy development, environmental consultancy, and climate adaptation solutions." },
  { q: "Do you develop large-scale environmental projects?", a: "Yes. We execute master-scale land reclamation, green belt afforestation, renewable energy parks, and desert smart city infrastructure." },
  { q: "Do your projects follow international environmental standards?", a: "Yes. All our projects comply strictly with ISO 14001, international environmental guidelines, and sustainability standards." },
  { q: "Can you provide complete project management?", a: "Yes. We manage complete lifecycles from initial environmental surveys and engineering design to construction, planting, and long-term monitoring." },
  { q: "Do you work with governments and private organizations?", a: "Yes. We partner with government ministries, environmental agencies, renewable energy companies, agricultural ventures, and international NGOs." },
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
      className="group rounded-[20px] border border-[#D4E5DD] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2D7D62]"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E8F3EE] border border-[#2D7D62]/30 text-[#1B4D3E] mb-4 transition-all duration-300 group-hover:bg-[#1B4D3E] group-hover:text-white group-hover:scale-110 shadow-sm">
        <Icon size={22} />
      </div>
      <p className="text-3xl lg:text-4xl font-black text-[#0D3025] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-bold leading-relaxed text-[#425C52]">{label}</p>
    </div>
  );
}

// ── Section Title Component ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E] mb-3">
        <span className="inline-block w-6 h-[2px] bg-[#2D7D62]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0D3025] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#425C52]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card Component ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[20px] border border-[#D4E5DD] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2D7D62] hover:bg-[#F7FBF9]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E8F3EE] text-[#1B4D3E] mb-6 transition-all duration-300 group-hover:bg-[#0D3025] group-hover:text-[#2D7D62] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0D3025] mb-3 transition-colors duration-300 group-hover:text-[#1B4D3E]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#425C52]">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[18px] border border-[#D4E5DD] bg-white transition-all duration-300 overflow-hidden shadow-sm hover:border-[#2D7D62]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
      >
        <h4 className="text-sm md:text-base font-bold text-[#0D3025] transition-colors group-hover:text-[#1B4D3E]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E8F3EE] flex items-center justify-center text-[#0D3025] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0D3025] group-hover:text-[#2D7D62]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 border-t border-[#E8F3EE]">
          <p className="mt-3 text-sm leading-relaxed text-[#425C52]">{answer}</p>
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
    <div className="relative rounded-[24px] border border-[#D4E5DD] bg-white p-8 shadow-sm flex flex-col justify-between min-h-[340px] transition-all hover:border-[#2D7D62]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote size={28} className="text-[#1B4D3E]" />
            <span className="text-xs uppercase tracking-widest font-black text-[#1B4D3E]">Client Review</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={15} className="fill-[#2D7D62] text-[#2D7D62]" />
            ))}
          </div>
        </div>

        <p className="text-base md:text-lg italic leading-relaxed text-[#0D3025] mb-8 min-h-[90px]">
          &ldquo;{current.quote}&rdquo;
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-[#E8F3EE] pt-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0D3025] text-[#2D7D62] flex items-center justify-center font-black text-lg shadow-inner">
              {current.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-[#0D3025]">{current.name}</p>
              <p className="text-xs text-[#1B4D3E] font-semibold">{current.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-[#D4E5DD] bg-[#F7FBF9] text-[#0D3025] flex items-center justify-center transition-all hover:bg-[#1B4D3E] hover:text-white hover:border-[#1B4D3E]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-[#D4E5DD] bg-[#F7FBF9] text-[#0D3025] flex items-center justify-center transition-all hover:bg-[#1B4D3E] hover:text-white hover:border-[#1B4D3E]"
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
                idx === currentIndex ? "w-8 bg-[#1B4D3E]" : "w-2 bg-[#D4E5DD]"
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
    "Desert Rehabilitation",
    "Land Reclamation & Greening",
    "Sustainable Infrastructure",
    "Water Resource Management",
    "Afforestation & Green Belts",
    "Renewable Energy Parks",
    "Environmental Consultancy",
    "Climate Adaptation Solutions",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#D4E5DD] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E8F3EE] text-[#1B4D3E] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0D3025] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#425C52] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry regarding &ldquo;{form.service || "our services"}&rdquo; has been received. Our environmental engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0D3025] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#2D7D62] transition-all hover:bg-[#1B4D3E] hover:text-white"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D4E5DD] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0D3025] mb-6">Contact Our Environmental Team</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#425C52] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D4E5DD] bg-[#F7FBF9] px-4 py-3.5 text-sm text-[#0D3025] outline-none transition-all focus:border-[#1B4D3E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#425C52] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D4E5DD] bg-[#F7FBF9] px-4 py-3.5 text-sm text-[#0D3025] outline-none transition-all focus:border-[#1B4D3E] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#425C52] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D4E5DD] bg-[#F7FBF9] px-4 py-3.5 text-sm text-[#0D3025] outline-none transition-all focus:border-[#1B4D3E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#425C52] mb-2">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D4E5DD] bg-[#F7FBF9] px-4 py-3.5 text-sm text-[#0D3025] outline-none transition-all focus:border-[#1B4D3E] focus:bg-white"
          >
            <option value="">Select a Service</option>
            {servicesOptions.map((srv) => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#425C52] mb-2">Your Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your desert rehabilitation, land reclamation, or environmental project requirements..."
          className="w-full rounded-xl border border-[#D4E5DD] bg-[#F7FBF9] px-4 py-3.5 text-sm text-[#0D3025] outline-none transition-all resize-none focus:border-[#1B4D3E] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1B4D3E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0D3025] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Desert Development Navbar Component ──
function DesertDevNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Industries", href: "#industries" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Innovation", href: "#innovation" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D4E5DD]">
      <div className="hidden md:block bg-[#071C15] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#2D7D62]" /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} className="text-[#2D7D62]" /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} className="text-[#2D7D62]" /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#2D7D62]">Desert Development &amp; Rehabilitation — Environmental Engineering</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#0D3025] flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
            <img src="/group-6.png" alt="Desert Development Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
            <Trees size={24} color="#2D7D62" style={{ display: 'none' }} />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#0D3025] leading-none">DESERT DEVELOPMENT</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#1B4D3E]">&amp; Rehabilitation</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-[#0D3025]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="whitespace-nowrap relative py-1 hover:text-[#1B4D3E] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1B4D3E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-px h-6 bg-[#D4E5DD]" />
          <a href="#contact" className="whitespace-nowrap inline-flex items-center gap-2 rounded-full bg-[#1B4D3E] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0D3025] hover:scale-105 transition-all shadow-sm">
            Contact Our Experts <ArrowRight size={14} />
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F7FBF9] text-[#0D3025]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D4E5DD] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#0D3025] hover:text-[#1B4D3E] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="whitespace-nowrap flex items-center justify-center gap-2 rounded-full bg-[#1B4D3E] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            Contact Our Experts <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}

// ── About Section Component (with Image Support Option) ──
function AboutSection({ imageSrc = "/desert development.jpeg" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
      <div className="mx-auto max-w-screen-xl grid gap-12 lg:grid-cols-2 items-center">
        {/* About Section Image Container */}
        <div className="relative group">
          <div className="relative rounded-[32px] overflow-hidden border-2 border-[#D4E5DD] shadow-xl bg-gradient-to-br from-[#0D3025] to-[#1B4D3E] min-h-[380px] flex items-center justify-center">
            {!imgError && imageSrc ? (
              <img
                src={imageSrc}
                alt="Building Sustainable Futures in Desert Regions - Desert Development & Rehabilitation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[380px]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <Trees size={64} className="text-[#2D7D62] mb-4 animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-2">DESERT DEVELOPMENT</h3>
                <p className="text-xs uppercase tracking-widest text-[#2D7D62]">&amp; Rehabilitation</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-[#2D7D62]">Desert Development &amp; Rehabilitation</p>
              <p className="text-sm font-bold mt-1">Transforming Arid Landscapes into Sustainable Opportunities</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl bg-[#1B4D3E] p-4 text-white shadow-lg hidden sm:flex items-center gap-3">
            <Award size={24} className="text-[#2D7D62]" />
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#2D7D62]">25+ Years</p>
              <p className="text-[10px] text-white/90">Environmental Engineering</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
          <div className="mt-6 space-y-4">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-[#425C52]">{p}</p>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ABOUT.badges.map((bdg, idx) => (
              <div key={idx} className="flex items-center gap-3.5 rounded-2xl border border-[#D4E5DD] bg-[#F7FBF9] p-4 transition-all duration-300 hover:border-[#2D7D62] hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3EE] text-[#1B4D3E] flex items-center justify-center flex-shrink-0">
                  <bdg.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0D3025]">{bdg.title}</h4>
                  <p className="text-[11px] text-[#425C52]">{bdg.desc}</p>
                </div>
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
    <section id="location" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeader
          eyebrow="OUR LOCATION"
          title="Visit Our Head Office"
          description="We are conveniently located in Lahore. Drop by our office or open our location on Google Maps."
          center
        />

        <div className="mt-10 rounded-[28px] border border-[#D4E5DD] bg-[#F7FBF9] p-6 lg:p-8 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 border border-[#D4E5DD] shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1B4D3E] mb-2">
                <MapPin size={16} /> Office Address
              </span>
              <p className="text-base font-bold text-[#0D3025] leading-relaxed">
                {CONTACT_INFO.office}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-[#D4E5DD]">
                <p className="text-xs font-black uppercase tracking-wider text-[#1B4D3E] mb-1">Phone</p>
                <p className="text-sm font-bold text-[#0D3025]">{CONTACT_INFO.phone}</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-[#D4E5DD]">
                <p className="text-xs font-black uppercase tracking-wider text-[#1B4D3E] mb-1">Email</p>
                <p className="text-sm font-bold text-[#0D3025]">{CONTACT_INFO.emails[0]}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#1B4D3E] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0D3025] hover:scale-[1.02] active:scale-95"
              >
                <MapPin size={16} /> Open Location in Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[360px] lg:h-[420px] rounded-[24px] overflow-hidden border-2 border-[#D4E5DD] shadow-md relative bg-emerald-100">
            <iframe
              title="Desert Development & Rehabilitation Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.486221086278!2d74.375!3d31.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI3JzE4LjAiTiA3NMKwMjInMzAwIkU!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D4E5DD] shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-[#0D3025]">Desert Development &amp; Rehabilitation</p>
                <p className="text-[11px] text-[#425C52] leading-tight">Rehman Centre-2, Ring Road, Lahore</p>
              </div>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4D3E] hover:underline"
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

// ── Desert Development Footer Component ──
function DesertDevFooter() {
  return (
    <footer style={{ background: "#071C15" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5">
              <img src="/group-6.png" alt="Desert Development & Rehabilitation" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }} />
              <Trees size={20} color="#2D7D62" style={{ display: 'none' }} />
            </div>
            <div>
              <p className="font-black text-lg leading-none">DESERT DEVELOPMENT</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#2D7D62]">&amp; Rehabilitation</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Transforming arid landscapes into sustainable opportunities through scientific environmental engineering, ecological restoration, and smart land development.
          </p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#2D7D62]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#2D7D62]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#2D7D62]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#2D7D62]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["Home", "About Us", "Services", "Projects", "Location", "Careers", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-[#2D7D62] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#2D7D62]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#2D7D62]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#2D7D62]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#2D7D62]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-5">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1B4D3E] transition-colors"
            >
              <MapPin size={14} className="text-[#2D7D62]" /> View Location Map <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Desert Development &amp; Rehabilitation. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function DesertDevPage() {
  useEffect(() => {
    document.body.classList.add("desert-development-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.primary;
    return () => {
      document.body.classList.remove("desert-development-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="desert-development-theme font-sans bg-white text-[#0D3025] selection:bg-[#0D3025] selection:text-[#2D7D62]">
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0D3025 !important;
          color-scheme: light !important;
        }
        .desert-development-theme h1, .desert-development-theme h2, .desert-development-theme h3,
        .desert-development-theme h4, .desert-development-theme h5, .desert-development-theme h6,
        .desert-development-theme p, .desert-development-theme span, .desert-development-theme li,
        .desert-development-theme a, .desert-development-theme label, .desert-development-theme button,
        .desert-development-theme input, .desert-development-theme textarea, .desert-development-theme select {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <DesertDevNavbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#071C15] border-b border-[#071C15] py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/desert development.jpeg"
            alt="Desert Development & Rehabilitation Background"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => { e.currentTarget.src = '/highway.png'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071C15] via-[#071C15]/90 to-[#071C15]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,125,98,0.25),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-screen-xl px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
              <ShieldCheck size={14} className="text-[#2D7D62]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}
              <br />
              <span className="text-[#2D7D62]">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E8F3EE]">{HERO.subline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#1B4D3E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#0D3025] hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0D3025] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F7FBF9] px-6 py-14 lg:py-20 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section (with Image Option) */}
      <AboutSection imageSrc="/desert development.jpeg" />

      {/* Core Services Section */}
      <section id="services" className="bg-[#F7FBF9] px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Comprehensive Desert Development Solutions"
            description="From desert rehabilitation and land reclamation to sustainable water management and renewable energy parks."
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
      <section id="industries" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Why Choose Us */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#D4E5DD] bg-[#F7FBF9] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E]">WHY CHOOSE US</span>
                <h3 className="mt-2 text-2xl font-black text-[#0D3025] mb-6">Your Trusted Desert Development Partner</h3>
                <div className="space-y-4">
                  {WHY_CHOOSE.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#2D7D62] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-[#0D3025]">{item.title}</p>
                        <p className="text-xs text-[#425C52]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E] mb-2 block">INDUSTRIES WE SERVE</span>
              <h3 className="text-2xl font-black text-[#0D3025] mb-6">Empowering Sustainable Growth</h3>
              <div className="grid grid-cols-2 gap-3">
                {INDUSTRIES_SERVED.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-[#D4E5DD] bg-white p-3.5 shadow-sm hover:border-[#2D7D62] transition-colors">
                    <item.icon size={18} className="text-[#1B4D3E] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#0D3025]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#D4E5DD] bg-[#071C15] p-8 text-white shadow-xl">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#2D7D62]">OUR PROCESS</span>
              <h3 className="mt-2 text-2xl font-black text-white mb-6">From Desert to Sustainable Development</h3>
              <div className="space-y-4">
                {PROCESS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-[#E8F3EE] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Technology */}
      <section id="innovation" className="bg-[#F7FBF9] px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          {/* Solutions */}
          <div className="rounded-[28px] border border-[#D4E5DD] bg-white p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E]">OUR SOLUTIONS</span>
            <h3 className="mt-2 text-2xl font-black text-[#0D3025] mb-6">Innovative Environmental Development</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SOLUTIONS.map((sol, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-[#D4E5DD] bg-[#F7FBF9] hover:border-[#2D7D62] transition-colors">
                  <h4 className="text-sm font-bold text-[#0D3025] mb-1.5">{sol.title}</h4>
                  <p className="text-xs text-[#425C52] leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Innovation */}
          <div className="rounded-[28px] border border-[#D4E5DD] bg-[#0D3025] p-8 text-white shadow-xl">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#2D7D62]">TECHNOLOGY &amp; INNOVATION</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-6">Engineering Sustainable Landscapes</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TECH_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#2D7D62] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Quality Standards */}
      <section id="sustainability" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] bg-gradient-to-br from-[#1B4D3E] to-[#071C15] p-8 text-white shadow-lg">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#2D7D62]">SUSTAINABILITY</span>
            <h3 className="mt-2 text-2xl font-black text-white mb-4">Restoring Nature for Future Generations</h3>
            <p className="text-sm leading-relaxed text-white/90">
              We prioritize ecological restoration through responsible land development, renewable energy integration, biodiversity conservation, water efficiency, and environmentally friendly engineering practices that create lasting environmental and social value.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#D4E5DD] bg-[#F7FBF9] p-8 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E]">QUALITY &amp; COMPLIANCE</span>
            <h3 className="mt-2 text-2xl font-black text-[#0D3025] mb-4">Excellence Through International Standards</h3>
            <p className="text-sm leading-relaxed text-[#425C52] mb-6">
              Every project follows globally recognized environmental, engineering, and sustainability standards to ensure safety, reliability, operational excellence, and long-term environmental impact.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {["Environmental Standards", "Engineering Excellence", "Safety First", "Sustainable Results"].map((std, i) => (
                <div key={i} className="p-3 rounded-xl bg-white border border-[#D4E5DD]">
                  <ShieldCheck size={20} className="mx-auto text-[#1B4D3E] mb-1" />
                  <p className="text-[10px] font-bold text-[#0D3025]">{std}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-[#F7FBF9] px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="FEATURED PROJECTS" title="Transformative Arid Developments" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((proj, index) => (
              <div key={index} className="group overflow-hidden rounded-[24px] border border-[#D4E5DD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2D7D62]">
                <div className={`relative h-44 w-full bg-gradient-to-br ${proj.fallbackBg} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <Trees size={40} className="absolute text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0D3025] group-hover:text-[#1B4D3E] transition-colors mb-2">{proj.title}</h3>
                  <p className="text-xs text-[#425C52] leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#0D3025] to-[#1B4D3E] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Target size={28} className="absolute top-6 right-6 text-[#2D7D62]" />
            <h3 className="text-xl font-black text-white mb-2">OUR MISSION</h3>
            <p className="text-sm leading-relaxed text-[#E8F3EE]">
              To restore degraded desert landscapes through innovative engineering, sustainable infrastructure, and environmental stewardship while creating resilient communities and supporting economic development.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-[#1B4D3E] to-[#0D3025] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Eye size={28} className="absolute top-6 right-6 text-[#2D7D62]" />
            <h3 className="text-xl font-black text-white mb-2">OUR VISION</h3>
            <p className="text-sm leading-relaxed text-[#E8F3EE]">
              To become a global leader in desert rehabilitation, environmental restoration, and sustainable land development by delivering innovative solutions that transform arid regions into thriving ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* COMBINED SECTION: Testimonials & FAQs (Left & Right Side-by-Side) */}
      <section id="testimonials-faq" className="bg-[#F7FBF9] px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side: Client Testimonials with Slider */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#2D7D62]" />
                  CLIENT TESTIMONIALS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0D3025]">What Our Partners Say</h3>
              </div>
              <TestimonialsSlider testimonials={TESTIMONIALS} />
            </div>

            {/* Right Side: Frequently Asked Questions */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1B4D3E] mb-2">
                  <span className="inline-block w-6 h-[2px] bg-[#2D7D62]" />
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0D3025]">Got Questions? We Have Answers</h3>
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
      <section id="contact" className="bg-[#F7FBF9] px-6 py-16 lg:py-24 border-b border-[#D4E5DD]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Contact Desert Development & Rehabilitation"
            description="Discuss your desert greening project, land reclamation plan, or environmental engineering inquiry with our specialists."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0D3025] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full min-h-[460px]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#2D7D62]">CONTACT DETAILS</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#E8F3EE] mb-8">
                  Our environmental engineering team responds to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#2D7D62]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#2D7D62] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#2D7D62]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#2D7D62] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#2D7D62]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#2D7D62] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#2D7D62]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#2D7D62] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-xs text-[#E8F3EE]">
                &copy; {new Date().getFullYear()} Desert Development &amp; Rehabilitation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Location Section directly below Contact Us */}
      <LocationSection />

      <DesertDevFooter />
    </main>
  );
}
