"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Brain, Code2, Database, Cloud, ShieldCheck,
  Smartphone, BarChart3, Users2, CheckCircle2, MapPin, Phone, MessageCircle,
  Mail, Plus, Minus, Send, Server, Layers, Cpu, Lock, BadgeCheck,
  Network, Search, Compass, PenTool, Hammer, TestTube2, Wrench,
  Building2, Landmark, HeartPulse, GraduationCap, Factory, ShoppingCart,
  Truck, Radio, Home as HomeIcon, Zap, Sparkles, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";

// ── Color System matching Digital Zoning Corporation Logo ──
const COLORS = {
  navy:         "#0A3A6B", // Deep Tech Navy Blue from Digital Zoning logo
  navyDark:     "#062242",
  cyan:         "#00A8E8", // Vibrant Cyan / Electric Blue from Digital Zoning logo
  cyanHover:    "#0086BA",
  slate:        "#3D4852", // Dark Slate / Charcoal Gray from logo
  white:        "#FFFFFF",
  bgLight:      "#F4F8FC", // Light tech-tinted background
  border:       "#D2E3F3",
  textMuted:    "#3E4F61",
  textLight:    "#6B7C90",
};

const HERO = {
  badge: "Leading AI & Enterprise Software Development Company",
  headline: "Digital Zoning Corporation",
  subline:
    "Transforming businesses through artificial intelligence, enterprise software, ERP solutions, cloud computing, cybersecurity, and digital transformation. Digital Zoning Corporation builds intelligent digital ecosystems engineered for high performance.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Talk To An Expert",
};

const STATS = [
  { value: 15,  suffix: "+", label: "Years of Industry Experience" },
  { value: 500, suffix: "+", label: "Successful Projects Delivered" },
  { value: 200, suffix: "+", label: "Enterprise & Global Clients" },
  { value: 150, suffix: "+", label: "Software & AI Engineers" },
  { value: 99,  suffix: "%", label: "Client Satisfaction & Uptime" },
  { value: 25,  suffix: "+", label: "Countries Served Worldwide" },
];

const SERVICES = [
  { icon: Brain,        title: "Artificial Intelligence",           desc: "AI-powered business automation, predictive analytics, machine learning models, and intelligent decision systems." },
  { icon: Code2,        title: "Custom Software Development",       desc: "Scalable web applications, enterprise software, SaaS platforms, and tailored business systems." },
  { icon: Layers,       title: "ERP Solutions",                     desc: "End-to-end ERP implementation for finance, HR, inventory, manufacturing, procurement, and operations." },
  { icon: Cloud,        title: "Cloud Computing",                   desc: "Cloud migration, infrastructure management, DevOps, server optimization, and multi-cloud governance." },
  { icon: ShieldCheck,  title: "Cybersecurity",                     desc: "Comprehensive security solutions including penetration testing, threat monitoring, data encryption, and compliance." },
  { icon: Smartphone,   title: "Mobile Application Development",    desc: "High-performance iOS, Android, and cross-platform mobile apps built with modern frameworks." },
  { icon: BarChart3,    title: "Data Analytics & Business Intelligence", desc: "Transforming raw data into actionable insights through interactive dashboards and BI reporting." },
  { icon: Users2,       title: "IT Consultancy & Digital Strategy", desc: "Strategic technology consulting, architecture planning, and enterprise digital transformation advisory." },
];

const WHY_CHOOSE = [
  { title: "AI-Driven Innovation", desc: "Building intelligent systems that automate workflows and drive competitive advantage." },
  { title: "Enterprise Reliability", desc: "Years of experience delivering mission-critical software for enterprises and governments." },
  { title: "Secure By Architecture", desc: "Every solution is built with zero-trust cybersecurity standards and strict data privacy." },
  { title: "Scalable Performance",   desc: "Future-ready cloud infrastructure designed to handle high transaction volumes effortlessly." },
  { title: "Agile Engineering",      desc: "Transparent, sprint-based software development with rapid time-to-market." },
  { title: "24/7 Dedicated Support", desc: "Round-the-clock monitoring, maintenance, updates, and dedicated technical assistance." },
];

const INDUSTRIES = [
  "Banking & Finance",
  "Healthcare & Pharma",
  "Government & Public Sector",
  "Education & E-Learning",
  "Manufacturing & Industrial",
  "Retail & E-Commerce",
  "Logistics & Supply Chain",
  "Telecommunications",
  "Real Estate & Property",
  "Energy & Utilities",
];

const PROCESS = [
  { step: "01", title: "Discovery & Strategy",     desc: "Understanding business goals, user needs, and technical requirements." },
  { step: "02", title: "Architecture & Planning",   desc: "Developing cloud architecture, UI/UX design, and development roadmaps." },
  { step: "03", title: "Agile Development",         desc: "Building secure, scalable software through iterative sprint cycles." },
  { step: "04", title: "Testing & Quality Control", desc: "Rigorously testing performance, security, and integration compatibility." },
  { step: "05", title: "Deployment & Launch",       desc: "Smooth production deployment, cloud provisioning, and data migration." },
  { step: "06", title: "Ongoing Support & Scaling", desc: "Continuous monitoring, feature updates, and performance optimization." },
];

const PLATFORMS = [
  { icon: Server,   title: "Enterprise ERP Systems", desc: "Customized ERP platforms for seamless cross-departmental operations." },
  { icon: Sparkles, title: "AI Business Automation",  desc: "Smart workflow automation powered by machine learning algorithms." },
  { icon: Users2,   title: "CRM Platforms",           desc: "Comprehensive customer relationship platforms that drive sales growth." },
  { icon: Cloud,    title: "Cloud Infrastructure",    desc: "Scalable multi-cloud management across AWS, Azure, and Google Cloud." },
  { icon: BarChart3,title: "Business Intelligence",   desc: "Real-time analytics and executive dashboards for data-driven decisions." },
  { icon: Lock,     title: "Cyber Defense Systems",   desc: "Proactive threat detection and automated security incident response." },
];

const FEATURED_PROJECTS = [
  { title: "Enterprise ERP Platform",       desc: "Integrated ERP solution for manufacturing and distribution enterprise.", image: "/project-infrastructure.png" },
  { title: "AI Support & Automation System", desc: "Intelligent AI assistant automating customer service and data workflows.", image: "/project-commercial.png" },
  { title: "Healthcare Management System",  desc: "Digital healthcare platform serving multi-specialty hospital networks.", image: "/project-industrial.png" },
  { title: "Smart Government Services Portal", desc: "Secure public sector portal facilitating digital citizen services.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  { name: "Enterprise Client", role: "CEO, Manufacturing Group", quote: "Digital Zoning Corporation transformed our business operations with a custom ERP system that improved productivity by 40%." },
  { name: "Government Authority", role: "IT Director", quote: "Their team delivered a secure, highly scalable citizen services platform on time and beyond expectations." },
  { name: "Global Technology Partner", role: "CTO, SaaS Platform", quote: "Outstanding expertise in AI integration, cloud infrastructure, and cybersecurity. Highly recommended." },
];

const FAQS = [
  { q: "What core services does Digital Zoning Corporation provide?", a: "We provide AI solutions, custom software development, ERP systems, cloud computing, cybersecurity, mobile app development, and business intelligence." },
  { q: "Can you build custom enterprise software?", a: "Yes. We engineer bespoke web applications, enterprise software platforms, and SaaS products tailored to your precise workflow requirements." },
  { q: "Do you offer cloud migration and DevOps?", a: "Yes. We handle end-to-end cloud migration, infrastructure optimization, automated DevOps pipelines, and cloud security on AWS, Azure, and GCP." },
  { q: "How do you ensure data security?", a: "We apply security-by-design principles, regular vulnerability audits, end-to-end encryption, Zero Trust access, and ISO-compliant security protocols." },
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
      className="rounded-[24px] border border-[#D2E3F3] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0A3A6B]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#0A3A6B] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#3E4F61]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#00A8E8] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00A8E8]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0A3A6B] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#3E4F61]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E3F3] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0A3A6B] hover:bg-[#F4F8FC]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F3FB] text-[#0A3A6B] mb-6 transition-all duration-300 group-hover:bg-[#0A3A6B] group-hover:text-[#00A8E8] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0A3A6B] mb-3 transition-colors duration-300 group-hover:text-[#00A8E8]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3E4F61]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E3F3] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#00A8E8]">
      <div className="text-[#00A8E8] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#0A3A6B] mb-3 transition-colors duration-300 group-hover:text-[#00A8E8]">{title}</h3>
      <p className="text-sm text-[#3E4F61] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E3F3] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0A3A6B]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A3A6B] text-[#00A8E8] font-black group-hover:bg-[#00A8E8] group-hover:text-white transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#0A3A6B]">{title}</h4>
      </div>
      <p className="text-sm text-[#3E4F61] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D2E3F3] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#0A3A6B] transition-colors group-hover:text-[#00A8E8]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6F3FB] flex items-center justify-center text-[#0A3A6B] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0A3A6B] group-hover:text-[#00A8E8]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E6F3FB]">
          <p className="mt-3 text-sm leading-relaxed text-[#3E4F61]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form Component ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
      <div className="rounded-[28px] border border-[#D2E3F3] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E6F3FB] text-[#0A3A6B] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0A3A6B] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3E4F61] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your message has been received. Our digital solutions team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0A3A6B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#00A8E8]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D2E3F3] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0A3A6B] mb-6">Start Your Digital Transformation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4F61] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D2E3F3] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A3A6B] outline-none transition-all focus:border-[#0A3A6B] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4F61] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D2E3F3] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A3A6B] outline-none transition-all focus:border-[#0A3A6B] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4F61] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D2E3F3] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A3A6B] outline-none transition-all focus:border-[#0A3A6B] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4F61] mb-2">Service Type</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D2E3F3] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A3A6B] outline-none transition-all focus:border-[#0A3A6B] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Custom Software">Custom Software</option>
            <option value="ERP Solutions">ERP Solutions</option>
            <option value="Cloud Services">Cloud Services</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4F61] mb-2">Project Overview *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your project requirements..."
          className="w-full rounded-xl border border-[#D2E3F3] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A3A6B] outline-none transition-all resize-none focus:border-[#0A3A6B] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0A3A6B] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#00A8E8] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Digital Zone Navbar ──
function DigitalZoneNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D2E3F3]">
      <div className="hidden md:block bg-[#0A3A6B] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#00A8E8]">Digital Zoning Corporation — Tech Innovators</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#0A3A6B] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Cpu size={22} color="#00A8E8" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#0A3A6B] leading-none">DIGITAL ZONING</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#3E4F61]">Corporation</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#0A3A6B]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#00A8E8] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A8E8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#00A8E8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0A3A6B] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#E6F3FB] text-[#0A3A6B]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D2E3F3] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#0A3A6B] hover:text-[#00A8E8] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#00A8E8] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}

// ── Digital Zone Footer ──
function DigitalZoneFooter() {
  return (
    <footer style={{ background: "#0A3A6B" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Cpu size={20} color="#00A8E8" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">DIGITAL ZONING</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Corporation</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">Innovative technology solutions, custom software, ERP systems, and digital transformation services for businesses across Pakistan.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#00A8E8]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#00A8E8]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#00A8E8]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#00A8E8]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["About Us","Services","Industries","FAQs","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#00A8E8]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#00A8E8]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#00A8E8]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#00A8E8]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Digital Zoning Corporation. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function DigitalZonePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const activeTestimonialItem = TESTIMONIALS[activeTestimonial];

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "digitalzone-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.navy;
    return () => {
      document.body.classList.remove("roys-roys-theme", "digitalzone-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme digitalzone-theme font-sans bg-white text-[#0A3A6B] selection:bg-[#0A3A6B] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0A3A6B !important;
          color-scheme: light !important;
        }
        .digitalzone-theme h1,
        .digitalzone-theme h2,
        .digitalzone-theme h3,
        .digitalzone-theme h4,
        .digitalzone-theme h5,
        .digitalzone-theme h6,
        .digitalzone-theme p,
        .digitalzone-theme span,
        .digitalzone-theme li,
        .digitalzone-theme a,
        .digitalzone-theme label,
        .digitalzone-theme button,
        .digitalzone-theme input,
        .digitalzone-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-[#D2E3F3] min-h-[500px] lg:min-h-[560px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,58,107,0.88) 0%, rgba(10,58,107,0.80) 50%, rgba(0,168,232,0.70) 100%), url("${encodeURI("/digitaz zoning.jpeg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00A8E8]/40 bg-[#0A3A6B]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#00A8E8] shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00A8E8]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Digital Zoning <span className="text-[#00A8E8]">Corporation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E6F3FB]">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#00A8E8] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0A3A6B] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#0A3A6B] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#00A8E8] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00A8E8]" />
                About Digital Zoning
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A3A6B] mb-5">Building Intelligent Digital Ecosystems</h2>
              <p className="text-base leading-relaxed text-[#3E4F61] mb-6">
                Digital Zoning Corporation helps businesses unlock growth through AI-driven software, secure cloud environments, and modern enterprise platforms built for performance and scale.
              </p>
              <p className="text-base leading-relaxed text-[#3E4F61]">
                From custom product development to ERP implementation and digital strategy, we provide the technology foundation to transform ambition into measurable results.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#D2E3F3] bg-[#F4F8FC] shadow-sm">
              <Image
                src="/digitaz zoning.jpeg"
                alt="Digital Zoning technology solutions"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3A6B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">SMART DIGITAL SOLUTIONS</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dceffd] mt-1">DIGITAL ZONING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F8FC] px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete Digital Technology Solutions"
            description="From AI automation and custom software to enterprise ERP, cloud infrastructure, and cybersecurity."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Platforms Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Intelligent Platforms"
            title="Enterprise Technology Ecosystems"
            description="High-performance software platforms designed to optimize business operations, customer engagement, and security."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PLATFORMS.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F8FC] px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Supporting Key Economic Sectors" description="Delivering tailored software, AI, and cloud solutions across diverse industries." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D2E3F3] bg-white p-5 text-sm font-semibold text-[#0A3A6B] text-center transition-all duration-300 hover:border-[#0A3A6B] hover:bg-[#0A3A6B] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Digital Zoning Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Your Trusted Technology Partner"
            description="Combining AI innovation, enterprise expertise, and zero-trust security."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F4F8FC] px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Engineering Workflow"
            description="From discovery and architecture planning to agile development and deployment."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Trusted by Enterprises & Government Institutions"
            description="Selected highlights of enterprise software and AI solutions successfully delivered."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D2E3F3] bg-[#F4F8FC] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0A3A6B]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0A3A6B] group-hover:text-[#00A8E8] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3E4F61] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeader
                eyebrow="Testimonials"
                title="What Our Enterprise Clients Say"
              />
              <div className="mt-8 rounded-[28px] border border-[#D2E3F3] bg-[#F4F8FC] p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#0A3A6B]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A3A6B] shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M9.5 7a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 9.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5H5.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 6.5 7h3Zm10 0a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 19.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 16.5 7h3Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00A8E8]">Client Feedback</p>
                      <p className="text-sm font-semibold text-[#3E4F61]">Trusted by growth-focused enterprises</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2E3F3] bg-white text-[#0A3A6B] transition hover:border-[#0A3A6B] hover:bg-[#E6F3FB]"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2E3F3] bg-white text-[#0A3A6B] transition hover:border-[#0A3A6B] hover:bg-[#E6F3FB]"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-base italic leading-relaxed text-[#3E4F61] mb-6">“{activeTestimonialItem.quote}”</p>
                <p className="font-black text-[#0A3A6B]">{activeTestimonialItem.name}</p>
                <p className="text-xs text-[#00A8E8] font-bold mt-1">{activeTestimonialItem.role}</p>

                <div className="mt-6 flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#0A3A6B]" : "w-2.5 bg-[#C7DDEC]"}`}
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
                description="Answers to common questions regarding our software, AI, and cloud services."
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
      <section id="contact" className="bg-[#F4F8FC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Digital Zoning Corporation"
            description="Discuss your software development, AI integration, ERP, or cloud transformation project with our engineers."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0A3A6B] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#00A8E8]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D2E3F3] mb-8">
                  Our technology solutions team responds to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00A8E8]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#00A8E8] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00A8E8]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#00A8E8] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00A8E8]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#00A8E8] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00A8E8]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#00A8E8] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D2E3F3]">
                &copy; {new Date().getFullYear()} Digital Zoning Corporation. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FC] px-6 py-16 lg:py-20 border-t border-[#D2E3F3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#00A8E8] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00A8E8]" />
                Our Location
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0A3A6B] mb-4">Visit Our Office</h3>
              <p className="text-base leading-relaxed text-[#3E4F61] mb-6">
                We welcome project consultations, strategy sessions, and technical planning meetings at our Lahore office.
              </p>
              <div className="rounded-[24px] border border-[#D2E3F3] bg-white p-6">
                <p className="text-sm font-semibold text-[#0A3A6B]">{CONTACT_INFO.office}</p>
                <a
                  href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0A3A6B] hover:text-[#00A8E8]"
                >
                  Open in Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#D2E3F3] shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Lahore%20Pakistan&output=embed"
                title="Digital Zoning Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}