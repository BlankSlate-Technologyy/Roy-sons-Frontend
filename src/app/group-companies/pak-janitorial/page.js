"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, Leaf, MapPin, Phone,
  MessageCircle, Mail, Plus, Minus, Send, ShieldCheck, Sparkles,
  Users, Wrench, Building2, Clock, Menu, X, Cpu, FlaskConical,
  HeartPulse, Wind, Microscope, Gauge, Hammer, LifeBuoy,
} from "lucide-react";

// ── Color System matching Pakistan Medical Supplies ──
const COLORS = {
  royalBlue:    "#1A4FA0",
  royalBlueDark:"#163D80",
  skyBlue:      "#2B8DD6",
  charcoal:     "#1E2A3A",
  white:        "#FFFFFF",
  bgLight:      "#F4F8FD",
  border:       "#D2E4F5",
  textMuted:    "#3D5166",
  textLight:    "#5A7080",
};

const HERO = {
  badge: "Trusted Healthcare Infrastructure & Medical Engineering Company",
  headlineLine1: "Engineering Healthcare.",
  headlineLine2: "Advancing Patient Care.",
  subline:
    "Pakistan Medical Supplies is a leading healthcare engineering company specializing in hospital infrastructure, clean room technology, HVAC engineering, and turnkey medical facility development. We deliver innovative, sustainable, and internationally compliant healthcare environments for hospitals, pharmaceutical industries, laboratories, and healthcare institutions.",
  ctaPrimary: "Explore Solutions",
  ctaSecondary: "Our Expertise",
};

const STATS = [
  { value: 20,  suffix: "+", label: "Years of Industry Experience" },
  { value: 300, suffix: "+", label: "Healthcare Projects" },
  { value: 150, suffix: "+", label: "Hospital Facilities Delivered" },
  { value: 500, suffix: "+", label: "Engineering Professionals" },
  { value: 99,  suffix: "%", label: "Quality Compliance" },
  { value: 25,  suffix: "+", label: "Cities Served" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Hospital Engineering",
    desc: "Comprehensive engineering solutions for hospitals, medical centers, and specialized healthcare facilities.",
  },
  {
    icon: Hammer,
    title: "Turnkey Healthcare Projects",
    desc: "End-to-end planning, engineering, procurement, construction, installation, testing, and commissioning.",
  },
  {
    icon: Wind,
    title: "Clean Room Systems",
    desc: "Design and construction of ISO and GMP-compliant clean rooms for pharmaceutical and biotechnology industries.",
  },
  {
    icon: Gauge,
    title: "HVAC Engineering",
    desc: "Advanced HVAC systems designed for hospitals, laboratories, operating theatres, and healthcare environments.",
  },
  {
    icon: FlaskConical,
    title: "GMP Facility Development",
    desc: "Construction of pharmaceutical manufacturing facilities that comply with international GMP standards.",
  },
  {
    icon: Cpu,
    title: "Medical Gas Pipeline Systems",
    desc: "Installation of oxygen, vacuum, compressed air, nitrous oxide, and medical gas distribution systems.",
  },
  {
    icon: Microscope,
    title: "Laboratory Engineering",
    desc: "Custom-designed laboratory infrastructure with controlled environments and utility systems.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Facility Support",
    desc: "Preventive maintenance, system upgrades, validation, and technical support services.",
  },
];

const INDUSTRIES = [
  "Hospitals",
  "Pharmaceutical Companies",
  "Biotechnology Facilities",
  "Research Laboratories",
  "Diagnostic Centers",
  "Medical Colleges",
  "Healthcare Institutions",
  "Government Healthcare Projects",
  "Clean Room Manufacturing",
  "Industrial Healthcare Facilities",
];

const WHY_CHOOSE = [
  { title: "Industry Expertise", desc: "Decades of experience in healthcare engineering." },
  { title: "International Standards", desc: "Projects designed according to WHO, ISO, GMP, and global healthcare regulations." },
  { title: "Turnkey Solutions", desc: "One trusted partner for complete project execution." },
  { title: "Advanced Technologies", desc: "Modern engineering systems focused on safety, performance, and energy efficiency." },
  { title: "Quality Assurance", desc: "Strict inspection and testing procedures at every project stage." },
  { title: "Reliable Support", desc: "Dedicated technical assistance before, during, and after project completion." },
];

const PROCESS = [
  { step: "01", title: "Consultation", desc: "Understanding client objectives, technical requirements, and healthcare standards." },
  { step: "02", title: "Engineering Design", desc: "Developing detailed layouts, engineering drawings, and specifications." },
  { step: "03", title: "Procurement", desc: "Sourcing certified equipment and premium-quality engineering materials." },
  { step: "04", title: "Construction & Installation", desc: "Professional execution with strict compliance to healthcare regulations." },
  { step: "05", title: "Testing & Validation", desc: "Comprehensive inspections, performance testing, and system validation." },
  { step: "06", title: "Handover & Support", desc: "Final commissioning, documentation, staff training, and after-sales support." },
];

const SPECIALIZED_SOLUTIONS = [
  {
    title: "Modular Operating Theatres",
    subtitle: "Advanced operation theatre systems designed for safety, infection control, and efficiency.",
    image: "/pakmedical-card1.png",
  },
  {
    title: "Intensive Care Units (ICU)",
    subtitle: "Integrated ICU infrastructure with medical gas systems, HVAC, and smart monitoring.",
    image: "/pakmedical-card2.png",
  },
  {
    title: "Pharmaceutical Clean Rooms",
    subtitle: "Controlled production environments for pharmaceutical and biotechnology manufacturing.",
    image: "/pakmedical-card3.png",
  },
  {
    title: "Medical Laboratories",
    subtitle: "Modern laboratory engineering with specialized environmental control systems.",
    image: "/pakmedical-card4.png",
  },
  {
    title: "Hospital HVAC Systems",
    subtitle: "High-performance ventilation and climate control solutions for healthcare facilities.",
    image: "/pakmedical-card5.png",
  },
  {
    title: "Medical Gas Systems",
    subtitle: "Reliable pipeline systems delivering oxygen, compressed air, and gases safely.",
    image: "/pakmedical-card6.png",
  },
];

const TESTIMONIALS = [
  {
    quote: "Pakistan Medical Supplies delivered our hospital infrastructure on time and to the highest international standards. Exceptional engineering excellence!",
    name: "Hospital Administrator",
  },
  {
    quote: "Their clean room systems and GMP facility development expertise is unmatched in Pakistan. Highly recommended for pharmaceutical projects.",
    name: "Pharmaceutical Plant Manager",
  },
];

const FAQS = [
  { q: "What types of healthcare projects do you undertake?", a: "We handle hospitals, clean rooms, GMP facilities, ICUs, operating theatres, medical gas systems, laboratory engineering, and complete HVAC installations for healthcare environments." },
  { q: "Do you follow international standards?", a: "Yes, all our projects comply with WHO, ISO, GMP, ASHRAE, HTM, and local healthcare authority regulations." },
  { q: "Can you manage turnkey projects end-to-end?", a: "Absolutely. We provide full turnkey services from concept design, engineering, procurement, construction, testing, validation, to final handover." },
  { q: "Do you provide after-sales maintenance support?", a: "Yes, we offer comprehensive preventive maintenance contracts, system upgrades, and 24/7 technical support after project handover." },
];

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
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
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
      if (progress < 1) { rafId = requestAnimationFrame(tick); } else { setCount(value); }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div
      ref={cardRef}
      className="rounded-[24px] border border-[#D2E4F5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#1A4FA0] mb-2 tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#3D5166]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1A4FA0] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1A4FA0]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1E2A3A] mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#3D5166]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E4F5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0] hover:bg-[#F4F8FD]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E4EEF8] text-[#1A4FA0] mb-6 transition-all duration-300 group-hover:bg-[#1A4FA0] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#1E2A3A] mb-3 transition-colors duration-300 group-hover:text-[#1A4FA0]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3D5166]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E4F5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0]">
      <div className="flex items-center gap-3 mb-3">
        <CheckCircle2 size={20} className="text-[#1A4FA0] flex-shrink-0 group-hover:scale-110 transition-transform" />
        <h3 className="text-lg font-black text-[#1E2A3A] transition-colors duration-300 group-hover:text-[#1A4FA0]">{title}</h3>
      </div>
      <p className="text-sm text-[#3D5166] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Step Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D2E4F5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A4FA0] text-white font-black text-sm group-hover:bg-[#2B8DD6] transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#1E2A3A]">{title}</h4>
      </div>
      <p className="text-sm text-[#3D5166] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── FAQ Accordion ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[20px] border border-[#D2E4F5] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#1E2A3A] transition-colors group-hover:text-[#1A4FA0]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E4EEF8] flex items-center justify-center text-[#1A4FA0] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#1A4FA0] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E4EEF8]">
          <p className="mt-3 text-sm leading-relaxed text-[#3D5166]">{answer}</p>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill in your name, email, and message."); return; }
    setError("");
    try {
      const res = await fetch("/group-companies/pak-janitorial/api/contact", {
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
      <div className="rounded-[28px] border border-[#D2E4F5] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E4EEF8] text-[#1A4FA0] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#1E2A3A] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3D5166] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#1A4FA0] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#2B8DD6]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D2E4F5] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#1E2A3A] mb-6">Request A Free Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D5166] mb-2">Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
            className="w-full rounded-xl border border-[#D2E4F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#1E2A3A] outline-none transition-all focus:border-[#1A4FA0] focus:bg-white" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D5166] mb-2">Email Address *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D2E4F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#1E2A3A] outline-none transition-all focus:border-[#1A4FA0] focus:bg-white" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D5166] mb-2">Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D2E4F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#1E2A3A] outline-none transition-all focus:border-[#1A4FA0] focus:bg-white" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D5166] mb-2">Service Type</label>
          <select name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#D2E4F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#1E2A3A] outline-none transition-all focus:border-[#1A4FA0] focus:bg-white">
            <option value="">Select a service</option>
            <option value="Hospital Engineering">Hospital Engineering</option>
            <option value="Turnkey Healthcare Projects">Turnkey Healthcare Projects</option>
            <option value="Clean Room Systems">Clean Room Systems</option>
            <option value="HVAC Engineering">HVAC Engineering</option>
            <option value="GMP Facility Development">GMP Facility Development</option>
            <option value="Medical Gas Pipeline Systems">Medical Gas Pipeline Systems</option>
            <option value="Laboratory Engineering">Laboratory Engineering</option>
            <option value="Maintenance & Facility Support">Maintenance & Facility Support</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3D5166] mb-2">Project Details & Requirements *</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your project scope, facility type, and requirements..."
          className="w-full rounded-xl border border-[#D2E4F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#1E2A3A] outline-none transition-all resize-none focus:border-[#1A4FA0] focus:bg-white" />
      </div>
      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}
      <button type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1A4FA0] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#2B8DD6] hover:scale-[1.02] hover:shadow-lg active:scale-95">
        Submit Request <Send size={15} />
      </button>
    </form>
  );
}

// ── Navbar ──
function PakMedNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D2E4F5]">
      <div className="hidden md:block bg-[#1A4FA0] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-white/80">Trusted Healthcare Infrastructure & Medical Engineering Company</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#1A4FA0] flex items-center justify-center group-hover:scale-105 transition-transform">
            <HeartPulse size={22} color="#fff" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#1A4FA0] leading-none">PAKISTAN MEDICAL</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#3D5166]">Supplies</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#1E2A3A]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#1A4FA0] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1A4FA0] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#1A4FA0] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2B8DD6] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Get a Consultation
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F8FD] text-[#1A4FA0]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D2E4F5] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#1E2A3A] hover:text-[#1A4FA0] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#1A4FA0] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Get a Consultation
          </a>
        </div>
      )}
    </header>
  );
}

// ── Footer ──
function PakMedFooter() {
  return (
    <footer className="text-white" style={{ background: "#1A4FA0" }}>
      <div className="h-1.5 bg-[#2B8DD6]" />
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <HeartPulse size={20} color="#fff" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">PAKISTAN MEDICAL</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Supplies</p>
            </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed mb-5">Engineering healthcare infrastructure for a better tomorrow. Delivering world-class medical facilities across Pakistan.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {["About Us", "Services", "Industries", "FAQ", "Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition-colors">{l}</a></li>
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
        © {new Date().getFullYear()} Pakistan Medical Supplies. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function PakJanitorialPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "pak-janitorial-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.charcoal;
    return () => {
      document.body.classList.remove("roys-roys-theme", "pak-janitorial-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme pak-janitorial-theme font-sans bg-white text-[#1E2A3A] selection:bg-[#1A4FA0] selection:text-white">
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #1E2A3A !important;
          color-scheme: light !important;
        }
        .pak-janitorial-theme h1,
        .pak-janitorial-theme h2,
        .pak-janitorial-theme h3,
        .pak-janitorial-theme h4,
        .pak-janitorial-theme h5,
        .pak-janitorial-theme h6,
        .pak-janitorial-theme p,
        .pak-janitorial-theme span,
        .pak-janitorial-theme li,
        .pak-janitorial-theme a,
        .pak-janitorial-theme label,
        .pak-janitorial-theme button,
        .pak-janitorial-theme input,
        .pak-janitorial-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <PakMedNavbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden border-b border-[#D2E4F5]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/pakmedical-hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/78 to-[#1A4FA0]/60" />
        <div className="relative mx-auto max-w-screen-xl px-6 py-14 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#B8D4EE] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#1A4FA0] shadow-sm">
              <ShieldCheck size={14} className="text-[#1A4FA0]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {HERO.headlineLine1}<br />
              <span className="text-[#2B8DD6]">{HERO.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A4FA0] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#2B8DD6] hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#1A4FA0] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F4F8FD] px-6 py-14 lg:py-20 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-20 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1A4FA0] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1A4FA0]" />
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1E2A3A] mb-5">
                Building World-Class Healthcare Infrastructure
              </h2>
              <p className="text-base leading-relaxed text-[#3D5166] mb-6">
                Pakistan Medical Supplies delivers complete healthcare engineering solutions that support the growing demands of modern medical facilities. From concept and design to installation and commissioning, we provide integrated infrastructure for hospitals, pharmaceutical manufacturing plants, research laboratories, diagnostic centers, and clean room environments.
              </p>
              <p className="text-base leading-relaxed text-[#3D5166]">
                Our experienced engineers, project managers, and healthcare specialists combine innovation with global standards to create reliable, efficient, and sustainable healthcare spaces that enhance patient care and operational performance.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#D2E4F5] bg-[#F4F8FD] shadow-sm">
              <Image
                src="/pakmedical-about.png"
                alt="Pakistan Medical Supplies healthcare engineering"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">PAKISTAN MEDICAL</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#cce4f7] mt-1">SUPPLIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F8FD] px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Complete Healthcare Engineering Solutions"
            description="From hospital engineering and clean room systems to medical gas pipelines and laboratory infrastructure."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries We Serve" title="Supporting Every Healthcare Sector" description="Delivering tailored engineering solutions across all healthcare and pharmaceutical industries." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D2E4F5] bg-[#F4F8FD] p-5 text-sm font-semibold text-[#1E2A3A] text-center transition-all duration-300 hover:border-[#1A4FA0] hover:bg-[#1A4FA0] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="expertise" className="bg-[#F4F8FD] px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Pakistan Medical Supplies"
            title="Engineering Excellence for Healthcare"
            description="High standards, advanced technologies, and reliable service make us the preferred healthcare engineering partner."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="From Planning to Project Delivery"
            description="A systematic 6-step workflow that ensures every healthcare facility is engineered, installed, and commissioned to perfection."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section id="projects" className="bg-[#F4F8FD] px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Specialized Solutions"
            title="Advanced Healthcare Engineering"
            description="Specialized infrastructure solutions for critical healthcare and pharmaceutical environments."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZED_SOLUTIONS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D2E4F5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#1E2A3A] group-hover:text-[#1A4FA0] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3D5166] leading-relaxed">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cpu, title: "Technology & Innovation", desc: "We integrate advanced technologies like BIM, BMS, smart automation, and energy-efficient systems to deliver future-ready healthcare facilities." },
              { icon: ShieldCheck, title: "Quality & Compliance", desc: "Our projects follow international standards with strict quality control, ensuring safety, reliability, and long-term performance." },
              { icon: Leaf, title: "Sustainability", desc: "We build environmentally responsible healthcare facilities through energy efficiency, sustainable materials, and smart engineering solutions." },
              { icon: Award, title: "Client Satisfaction", desc: "Our commitment to excellence and timely delivery has earned the trust of leading healthcare organizations across Pakistan." },
            ].map((item, index) => (
              <div key={index} className="group rounded-[24px] border border-[#D2E4F5] bg-[#F4F8FD] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1A4FA0]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E4EEF8] text-[#1A4FA0] mb-5 transition-all duration-300 group-hover:bg-[#1A4FA0] group-hover:text-white group-hover:scale-110">
                  <item.icon size={26} />
                </div>
                <h3 className="text-lg font-black text-[#1E2A3A] mb-3 group-hover:text-[#1A4FA0] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#3D5166] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section className="bg-[#F4F8FD] px-6 py-16 lg:py-24 border-b border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
              <div className="mt-8 grid gap-6">
                {TESTIMONIALS.map((item, index) => (
                  <div key={index} className="rounded-[28px] border border-[#D2E4F5] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#1A4FA0]">
                    <p className="text-base italic leading-relaxed text-[#3D5166] mb-6">"{item.quote}"</p>
                    <p className="font-black text-[#1E2A3A]">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="faq">
              <SectionHeader
                eyebrow="Frequently Asked Questions"
                title="Common Questions"
                description="Answers to common questions about our healthcare engineering and facility development services."
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

      {/* Contact Section */}
      <section id="contact" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Pakistan Medical Supplies"
            description="Request a free consultation, project assessment, or discuss your healthcare infrastructure needs today."
            center
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 rounded-[28px] bg-[#1A4FA0] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-white/90">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Engineering Team</h3>
                <p className="text-sm leading-relaxed text-white/90 mb-8">
                  Our healthcare engineering team responds to every inquiry and project consultation within one business day.
                </p>
                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white"><MapPin size={20} /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white"><Phone size={20} /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white"><MessageCircle size={20} /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white"><Mail size={20} /></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-xs text-white/80">
                © {new Date().getFullYear()} Pakistan Medical Supplies. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F4F8FD] px-6 py-16 lg:py-20 border-t border-[#D2E4F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1A4FA0] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1A4FA0]" />
                Our Location
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#1E2A3A] mb-4">Visit Our Office</h3>
              <p className="text-base leading-relaxed text-[#3D5166] mb-6">
                We are based in Lahore and welcome visits for project consultations, facility planning, and engineering assessments.
              </p>
              <div className="rounded-[24px] border border-[#D2E4F5] bg-white p-6">
                <p className="text-sm font-semibold text-[#1E2A3A]">{CONTACT_INFO.office}</p>
                <a
                  href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FA0] hover:text-[#2B8DD6]"
                >
                  Open in Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#D2E4F5] shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Lahore%20Pakistan&output=embed"
                title="Pakistan Medical Supplies Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <PakMedFooter />
    </main>
  );
}
