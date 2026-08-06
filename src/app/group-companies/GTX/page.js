"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Zap, Battery, Truck, TrafficCone, Sun, Gauge, Users2,
  ShieldCheck, Cloud, Wifi, LineChart, MapPinned, MapPin, Phone, MessageCircle,
  Mail, Plus, Minus, Send, PlugZap, BatteryCharging, CheckCircle2, Search,
  ScanSearch, ClipboardList, Wrench, Hammer, Building2, Landmark, School,
  ShoppingBag, Factory, Fuel, Home as HomeIcon, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";

// ── Color System matching GTX German Technology Xpert Logo ──
const COLORS = {
  blue:         "#16A34A", // Official GTX Racing/Tech Blue
  blueDark:     "#15803D",
  blueSoft:     "#DCFCE7",
  red:          "#16A34A", // Official GTX Racing Red Accent
  redHover:     "#15803D",
  charcoal:     "#202A36", // Official GTX Hexagon Charcoal Slate for text & dark panels
  charcoalDark: "#052e16",
  white:        "#FFFFFF",
  bgLight:      "#F4F7FA", // Light grey-blue background
  border:       "#D6E2F0",
  textMuted:    "#3E4C5E",
  textLight:    "#6B7A8E",
};

const HERO = {
  badge: "German Engineering & EV Mobility Solutions",
  headline: "German Technology Xpert (GTX)",
  subline:
    "Engineering the future of electric mobility, intelligent charging infrastructure, smart energy management, and high-performance battery technology. GTX brings German engineering precision to transform urban transport and green energy ecosystems.",
  ctaPrimary: "Explore Solutions",
  ctaSecondary: "Get In Touch",
};

const STATS = [
  { value: 15,  suffix: "+", label: "Years of Engineering Excellence" },
  { value: 200, suffix: "+", label: "EV Infrastructure Projects" },
  { value: 500, suffix: "+", label: "Charging Stations Installed" },
  { value: 100, suffix: "+", label: "Technology & EV Experts" },
  { value: 99,  suffix: "%", label: "Customer Satisfaction & Uptime" },
  { value: 20,  suffix: "+", label: "Cities & Regions Served" },
];

const SOLUTIONS = [
  { icon: Zap,          title: "Electric Vehicle Infrastructure", desc: "Comprehensive EV charging infrastructure for commercial, residential, and public applications." },
  { icon: PlugZap,      title: "Smart EV Charging Stations",      desc: "Fast, reliable, and intelligent charging solutions with advanced monitoring and payment systems." },
  { icon: Truck,        title: "Fleet Electrification",           desc: "Helping businesses transition their commercial fleets to electric mobility." },
  { icon: TrafficCone,  title: "Smart Transportation Systems",    desc: "AI-powered traffic management, intelligent transport systems, and connected mobility technologies." },
  { icon: Sun,          title: "Renewable Energy Integration",    desc: "Solar-powered EV charging systems and clean energy integration for sustainable transportation." },
  { icon: Battery,      title: "Battery Energy Storage",          desc: "Advanced battery storage solutions for reliable and efficient power management." },
  { icon: LineChart,    title: "Energy Management Systems",       desc: "Intelligent software platforms for monitoring, optimizing, and controlling energy usage." },
  { icon: Users2,       title: "EV Consultancy",                  desc: "Strategic consulting, project planning, feasibility studies, and implementation support." },
];

const WHY_CHOOSE = [
  { title: "German Engineering Standards", desc: "Precision-engineered solutions built to world-class quality and reliability." },
  { title: "Innovative Technologies",      desc: "Cutting-edge smart mobility and clean energy solutions." },
  { title: "End-to-End Services",          desc: "Complete project management from consultation to installation and maintenance." },
  { title: "Sustainable Solutions",        desc: "Reducing carbon emissions through environmentally responsible engineering." },
  { title: "Expert Engineering Team",       desc: "Experienced engineers, energy specialists, and mobility consultants." },
  { title: "Reliable Support",             desc: "Dedicated technical support and long-term service commitments." },
];

const INDUSTRIES = [
  "Government Organizations",
  "Smart Cities",
  "Commercial Buildings",
  "Residential Communities",
  "Corporate Offices",
  "Shopping Malls",
  "Fuel & Service Stations",
  "Transportation Companies",
  "Manufacturing Industries",
  "Educational Institutions",
];

const PROCESS = [
  { step: "01", title: "Consultation",            desc: "Understanding project requirements and mobility objectives." },
  { step: "02", title: "Site Assessment",         desc: "Technical surveys and infrastructure evaluation." },
  { step: "03", title: "System Design",           desc: "Customized engineering designs and energy planning." },
  { step: "04", title: "Installation",            desc: "Professional installation by certified engineering teams." },
  { step: "05", title: "Testing & Commissioning", desc: "Performance validation and safety inspections." },
  { step: "06", title: "Maintenance & Support",   desc: "Continuous monitoring, servicing, and technical assistance." },
];

const PRODUCTS = [
  { icon: Zap,      title: "DC Fast Chargers",      desc: "Ultra-fast charging solutions for commercial and highway applications." },
  { icon: PlugZap,  title: "AC Charging Stations",   desc: "Reliable charging systems for homes, offices, and public parking." },
  { icon: Cloud,    title: "Smart Charging Software",desc: "Cloud-based charging management and monitoring platform." },
  { icon: Battery,  title: "Energy Storage Systems", desc: "Advanced battery storage for uninterrupted power supply." },
  { icon: Sun,      title: "Solar EV Charging",      desc: "Renewable energy-powered EV charging infrastructure." },
  { icon: Wifi,     title: "Smart Grid Solutions",   desc: "Intelligent energy distribution and grid integration." },
];

const FEATURED_PROJECTS = [
  { title: "Smart City EV Network",       desc: "Deployment of intelligent EV charging infrastructure across urban areas.", image: "/GTX-card1.png" },
  { title: "Commercial Charging Hub",     desc: "High-capacity charging solutions for commercial vehicle fleets.", image: "/GTX-card2.png" },
  { title: "Solar Charging Station",      desc: "Renewable energy-powered EV charging infrastructure.", image: "/GTX-card3.png" },
  { title: "Corporate Fleet Electrification", desc: "Complete electric mobility transition for enterprise fleets.", image: "/GTX-card4.png" },
];

const TESTIMONIALS = [
  { name: "Commercial Fleet Operator", role: "Fleet Director",     quote: "GTX helped us transition to electric vehicles with reliable charging infrastructure and exceptional technical support." },
  { name: "Smart City Authority",     role: "Project Lead",       quote: "Their innovative EV charging solutions have significantly improved our city's sustainable transportation network." },
  { name: "Corporate Client",          role: "Operations Manager", quote: "Professional engineering, world-class products, and outstanding customer service made GTX the perfect technology partner." },
];

const FAQS = [
  { q: "What services does GTX provide?", a: "We provide EV charging infrastructure, smart transportation systems, fleet electrification, renewable energy integration, battery storage, and energy management solutions." },
  { q: "Do you provide complete installation services?", a: "Yes. Our certified engineering teams handle every stage — consultation, site assessment, system design, installation, testing, and commissioning." },
  { q: "Can your charging stations support all EV brands?", a: "Our charging infrastructure is built to open standards and supports a wide range of EV brands and connector types." },
  { q: "Do you provide maintenance and technical support?", a: "Yes. We offer continuous monitoring, servicing, predictive maintenance, and dedicated technical support for every installation." },
];

// Exact contact information requested by user
const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

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
      className="rounded-[24px] border border-[#D6E2F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#16A34A]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#16A34A] mb-2 tabular-nums">
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
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#16A34A] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#202A36] mb-4">
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
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#16A34A] hover:bg-[#F4F7FA]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#DCFCE7] text-[#16A34A] mb-6 transition-all duration-300 group-hover:bg-[#16A34A] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#202A36] mb-3 transition-colors duration-300 group-hover:text-[#16A34A]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3E4C5E]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#16A34A]">
      <div className="text-[#16A34A] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#202A36] mb-3 transition-colors duration-300 group-hover:text-[#16A34A]">{title}</h3>
      <p className="text-sm text-[#3E4C5E] leading-relaxed">{desc}</p>
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M9.5 7a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 9.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5H5.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 6.5 7h3Zm10 0a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 19.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 16.5 7h3Z" />
    </svg>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#16A34A]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16A34A] text-white font-black group-hover:bg-[#16A34A] transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#202A36]">{title}</h4>
      </div>
      <p className="text-sm text-[#3E4C5E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D6E2F0] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#202A36] transition-colors group-hover:text-[#16A34A]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#16A34A] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#DCFCE7]">
          <p className="mt-3 text-sm leading-relaxed text-[#3E4C5E]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form Component ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    try {
      const res = await fetch("/group-companies/GTX/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#202A36] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3E4C5E] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#16A34A]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#202A36] mb-6">Request A Technology Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#16A34A] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#16A34A] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#16A34A] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Service Type</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#16A34A] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="EV Infrastructure">EV Infrastructure</option>
            <option value="Fleet Electrification">Fleet Electrification</option>
            <option value="Smart Charging">Smart Charging</option>
            <option value="Renewable Integration">Renewable Integration</option>
            <option value="Energy Management">Energy Management</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Project Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your technical requirements..."
          className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all resize-none focus:border-[#16A34A] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#16A34A] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#16A34A] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Inquiry <Send size={15} />
      </button>
    </form>
  );
}

// ── GTX Navbar ──
function GTXNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D6E2F0]">
      <div className="hidden md:block bg-[#052e16] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#16A34A]">GTX — German Technology Xpert</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#16A34A] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap size={22} color="#fff" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#16A34A] leading-none">GTX</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#3E4C5E]">German Technology Xpert</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#202A36]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#16A34A] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#16A34A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#15803D] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F7FA] text-[#16A34A]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D6E2F0] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#202A36] hover:text-[#16A34A] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#16A34A] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}

// ── GTX Footer ──
function GTXFooter() {
  return (
    <footer style={{ background: "#16A34A" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Zap size={20} color="#fff" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">GTX</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">German Technology Xpert</p>
            </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed mb-5">Cutting-edge German engineering and technology solutions for EV charging, smart systems, and industrial applications across Pakistan.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {["About Us","Services","Products","Industries","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/80">
            <p className="flex items-center gap-2"><MessageCircle size={14} /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/70 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} GTX — German Technology Xpert. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function GTXPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "gtx-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.charcoal;
    return () => {
      document.body.classList.remove("roys-roys-theme", "gtx-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonialItem = TESTIMONIALS[activeTestimonial];

  return (
    <main className="roys-roys-theme gtx-theme font-sans bg-white text-[#202A36] selection:bg-[#16A34A] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #202A36 !important;
          color-scheme: light !important;
        }
        .gtx-theme h1,
        .gtx-theme h2,
        .gtx-theme h3,
        .gtx-theme h4,
        .gtx-theme h5,
        .gtx-theme h6,
        .gtx-theme p,
        .gtx-theme span,
        .gtx-theme li,
        .gtx-theme a,
        .gtx-theme label,
        .gtx-theme button,
        .gtx-theme input,
        .gtx-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#D6E2F0]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/GTX_hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e16]/90 via-[#14532d]/80 to-[#16A34A]/70" />
        <div className="relative mx-auto max-w-screen-xl px-6 py-12 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#BBF7D0] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#16A34A] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              German Technology Xpert <span className="text-[#16A34A]">(GTX)</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#16A34A] hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#16A34A] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#16A34A] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                About GTX
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#202A36] mb-5">Engineering Smarter Mobility For Tomorrow</h2>
              <p className="text-base leading-relaxed text-[#3E4C5E] mb-6">
                GTX brings together German engineering precision, smart charging technology, and sustainable energy solutions to power the future of transportation.
              </p>
              <p className="text-base leading-relaxed text-[#3E4C5E]">
                From EV infrastructure to fleet electrification and renewable integration, we deliver reliable systems for governments, enterprises, and modern urban environments.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#D6E2F0] bg-[#F4F7FA] shadow-sm">
              <Image
                src="/GTX-about.png"
                alt="GTX electric mobility systems"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2f]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">SMART EV SOLUTIONS</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dcecff] mt-1">GTX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section id="solutions" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Solutions"
            title="Complete Electric Mobility Ecosystem"
            description="GTX delivers end-to-end electric vehicle infrastructure, smart charging technology, and sustainable energy storage systems."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SOLUTIONS.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Hardware & Software"
            title="Hardware Built For The Grid"
            description="High-performance charging hardware and cloud-based management software engineered for durability and efficiency."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Supporting Every Sector" description="Deploying smart EV charging solutions across diverse commercial and public environments." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D6E2F0] bg-white p-5 text-sm font-semibold text-[#202A36] text-center transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GTX Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose GTX"
            title="Your Trusted Electric Mobility Partner"
            description="Combining German precision engineering with sustainable clean energy technology."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Engineering Workflow"
            description="From initial consultation to installation and 24/7 technical monitoring."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Trusted by Fleet Operators & Smart Cities"
            description="Selected highlights of EV charging infrastructure successfully deployed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D6E2F0] bg-[#F4F7FA] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#16A34A]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#202A36] group-hover:text-[#16A34A] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3E4C5E] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeader
                eyebrow="Testimonials"
                title="What Our Partners Say"
              />
              <div className="mt-8 rounded-[28px] border border-[#D6E2F0] bg-[#F4F7FA] p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#16A34A]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#16A34A] shadow-sm">
                      <QuoteIcon />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#16A34A]">Client Feedback</p>
                      <p className="text-sm font-semibold text-[#3E4C5E]">Trusted by industry leaders</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E2F0] bg-white text-[#16A34A] transition hover:border-[#16A34A] hover:bg-[#DCFCE7]"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E2F0] bg-white text-[#16A34A] transition hover:border-[#16A34A] hover:bg-[#DCFCE7]"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-base italic leading-relaxed text-[#3E4C5E] mb-6">“{activeTestimonialItem.quote}”</p>
                <p className="font-black text-[#202A36]">{activeTestimonialItem.name}</p>
                <p className="text-xs text-[#16A34A] font-bold mt-1">{activeTestimonialItem.role}</p>

                <div className="mt-6 flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#16A34A]" : "w-2.5 bg-[#C9D8EA]"}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Frequently Asked Questions"
                title="Common Questions"
                description="Answers to common questions regarding our EV charging infrastructure and technologies."
              />
              <div className="mt-8 grid gap-4">
                {FAQS.map((item, index) => (
                  <FaqAccordionItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section with User Information */}
      <section id="contact" className="bg-[#F4F7FA] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact German Technology Xpert (GTX)"
            description="Discuss your EV mobility project, fleet electrification, or infrastructure requirements with our engineers."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#16A34A] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#16A34A]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D6E2F0] mb-8">
                  Our EV engineering team responds to every technical inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#16A34A] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#16A34A] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
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
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
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

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D6E2F0]">
                &copy; {new Date().getFullYear()} German Technology Xpert (GTX). All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20 border-t border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#16A34A] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                Our Location
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#202A36] mb-4">Visit Our Office</h3>
              <p className="text-base leading-relaxed text-[#3E4C5E] mb-6">
                We welcome project discussions, technical consultations, and site planning meetings at our Lahore office.
              </p>
              <div className="rounded-[24px] border border-[#D6E2F0] bg-[#F4F7FA] p-6">
                <p className="text-sm font-semibold text-[#202A36]">{CONTACT_INFO.office}</p>
                <a
                  href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#16A34A] hover:text-[#15803D]"
                >
                  Open in Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#D6E2F0] shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Lahore%20Pakistan&output=embed"
                title="GTX Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <GTXFooter />
    </main>
  );
}