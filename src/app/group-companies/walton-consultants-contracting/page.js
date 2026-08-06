"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Building2, CheckCircle2, ClipboardList, Globe2,
  Hammer, Layers, MapPin, Phone, MessageCircle, Mail, Plus, Minus, Send,
  Truck, Users, Wrench, ShieldCheck, Sparkles, Menu, X,
} from "lucide-react";

// ── Color System matching Walton Consultants Logo ──
const COLORS = {
  navy:         "#0E2A47", // Official Walton Dark Navy Blue
  navyDark:     "#081B30",
  navySoft:     "#1A3C60",
  gold:         "#C5A059", // Official Walton Warm Gold Accent
  goldHover:    "#A6823B",
  white:        "#FFFFFF",
  bgLight:      "#F4F7FA", // Crisp light grey-blue background
  border:       "#D8E2EC",
  textMuted:    "#3A4E63",
  textLight:    "#657B94",
};

const HERO = {
  badge: "Trusted Engineering & Infrastructure Development",
  headline: "Engineering Excellence. Building Tomorrow's Infrastructure.",
  subline:
    "Walton Consultants & Contracting is a leading engineering and construction company specializing in civil engineering, EPC projects, industrial construction, and infrastructure development. We deliver innovative, sustainable, and high-quality engineering solutions.",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "View Our Expertise",
  backgroundImage: "/wlaton-hearo.png",
};

const ABOUT_SECTION = {
  eyebrow: "About Our Company",
  heading: "Building Strong Foundations for the Future",
  paragraphs: [
    "Walton Consultants & Contracting provides integrated engineering, procurement, construction, and infrastructure solutions across multiple industries. From concept and design to execution and project completion, we combine technical expertise, innovation, and operational excellence to deliver projects that meet the highest standards of quality and performance.",
    "Our multidisciplinary team of engineers, architects, project managers, and technical specialists is committed to delivering sustainable infrastructure that creates lasting value for businesses and communities.",
  ],
  image: "/walton-about.png",
  imageAlt: "Walton Consultants office and team",
};

const STATS = [
  { value: 25,   suffix: "+",     label: "Years of Engineering Excellence" },
  { value: 350,  suffix: "+",     label: "Completed Projects" },
  { value: 1200, suffix: "+",     label: "Engineering Professionals" },
  { value: 50,   suffix: "+",     label: "Industrial & Government Clients" },
  { value: 99,   suffix: "%",     label: "Project Delivery Success" },
];

const CORE_SERVICES = [
  {
    icon: Building2,
    title: "Civil Engineering",
    desc: "Design and construction of roads, highways, bridges, commercial buildings, residential developments, and public infrastructure.",
  },
  {
    icon: Truck,
    title: "EPC Projects",
    desc: "Complete engineering, procurement, and construction solutions for complex industrial and infrastructure projects.",
  },
  {
    icon: Wrench,
    title: "Industrial Construction",
    desc: "Construction of factories, warehouses, manufacturing plants, processing facilities, and industrial complexes.",
  },
  {
    icon: Layers,
    title: "Infrastructure Development",
    desc: "Development of transportation systems, water infrastructure, utilities, urban development, and public facilities.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Professional planning, scheduling, budgeting, risk management, quality assurance, and project supervision.",
  },
  {
    icon: Hammer,
    title: "Engineering Consultancy",
    desc: "Technical advisory services including structural engineering, feasibility studies, design review, and construction planning.",
  },
];

const INDUSTRIES = [
  "Infrastructure Development",
  "Oil & Gas",
  "Manufacturing",
  "Energy & Utilities",
  "Commercial Buildings",
  "Residential Communities",
  "Healthcare Facilities",
  "Educational Institutions",
  "Transportation",
  "Logistics & Warehousing",
  "Government Projects",
  "Smart Cities",
];

const WHY_CHOOSE = [
  {
    title: "Experienced Engineering Team",
    desc: "Highly qualified engineers, architects, planners, and technical experts delivering world-class solutions.",
  },
  {
    title: "Complete Project Delivery",
    desc: "Comprehensive services covering planning, design, procurement, construction, and commissioning.",
  },
  {
    title: "Advanced Engineering Technology",
    desc: "Utilizing modern engineering tools, digital planning tools, and innovative construction methodologies.",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality control procedures ensure durability, safety, and long-term project performance.",
  },
  {
    title: "Safety First",
    desc: "Maintaining international health, safety, and environmental standards across every project.",
  },
  {
    title: "Sustainable Construction",
    desc: "Developing environmentally responsible infrastructure through efficient resource management and sustainable practices.",
  },
];

const PROCESS = [
  { step: "01", title: "Project Assessment", desc: "Understanding project objectives, site conditions, and engineering requirements." },
  { step: "02", title: "Planning & Design", desc: "Preparing engineering designs, feasibility studies, schedules, and technical documentation." },
  { step: "03", title: "Procurement", desc: "Efficient sourcing of materials, equipment, and engineering resources." },
  { step: "04", title: "Construction", desc: "Executing precision construction with quality control and strict safety management." },
  { step: "05", title: "Inspection & Quality Control", desc: "Conducting comprehensive testing, inspections, and compliance verification." },
  { step: "06", title: "Project Handover", desc: "Delivering fully completed projects with operational readiness and technical documentation." },
];

const CAPABILITIES = [
  { title: "Structural Engineering", desc: "Design and analysis of buildings, bridges, industrial structures, and specialized systems." },
  { title: "Transportation Infrastructure", desc: "Roads, highways, bridges, rail, tunnels, and transit networks built for operational excellence." },
  { title: "Industrial Facilities", desc: "Manufacturing plants, refineries, processing facilities, and production infrastructure." },
  { title: "Mechanical & Electrical Engineering", desc: "HVAC systems, electrical installations, utilities, and integrated engineering systems." },
  { title: "Construction Supervision", desc: "On-site management, quality inspection, and technical monitoring for project excellence." },
  { title: "Project Planning", desc: "BIM scheduling, resource allocation, and intelligent construction documentation." },
];

const FEATURED_PROJECTS = [
  { title: "Highway Infrastructure Development", image: "/highway.png" },
  { title: "Industrial Manufacturing Facilities", image: "/industry.png" },
  { title: "Commercial & Mixed-Use Developments", image: "/commerical.png" },
  { title: "Utility Infrastructure Projects", image: "/utility.png" },
];

const TESTIMONIALS = [
  {
    quote: "Walton Consultants & Contracting consistently delivers high-quality engineering solutions that exceed our expectations.",
    name: "Industrial Client",
  },
  {
    quote: "Their experienced team ensures safety, reliability, and timely project delivery in every infrastructure engineering engagement.",
    name: "Infrastructure Development Partner",
  },
];

const FAQS = [
  { q: "What services does Walton Consultants & Contracting provide?", a: "We provide civil engineering, EPC projects, industrial construction, infrastructure development, project management, and consultancy services." },
  { q: "Which industries do you serve?", a: "We serve infrastructure, oil & gas, manufacturing, energy, commercial, residential, healthcare, education, transport, logistics, and government sectors." },
  { q: "Do you provide complete EPC solutions?", a: "Yes, we offer full EPC services from design and procurement through construction and project commissioning." },
  { q: "How do you maintain project quality?", a: "Our teams apply rigorous quality control, inspection, compliance checks, and international engineering standards." },
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
      className="rounded-[24px] border border-[#D8E2EC] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E2A47]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#0E2A47] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#3A4E63]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#C5A059] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0E2A47] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#3A4E63]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D8E2EC] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E2A47] hover:bg-[#F4F7FA]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E8EEF5] text-[#0E2A47] mb-6 transition-all duration-300 group-hover:bg-[#0E2A47] group-hover:text-[#C5A059] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#0E2A47] mb-3 transition-colors duration-300 group-hover:text-[#C5A059]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3A4E63]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D8E2EC] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E2A47]">
      <div className="text-[#C5A059] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#0E2A47] mb-3 transition-colors duration-300 group-hover:text-[#C5A059]">{title}</h3>
      <p className="text-sm text-[#3A4E63] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D8E2EC] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E2A47]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E2A47] text-[#C5A059] font-black group-hover:bg-[#C5A059] group-hover:text-white transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#0E2A47]">{title}</h4>
      </div>
      <p className="text-sm text-[#3A4E63] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D8E2EC] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#0E2A47] transition-colors group-hover:text-[#C5A059]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E8EEF5] flex items-center justify-center text-[#0E2A47] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0E2A47] group-hover:text-[#C5A059]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E8EEF5]">
          <p className="mt-3 text-sm leading-relaxed text-[#3A4E63]">{answer}</p>
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
      const res = await fetch("/group-companies/walton-consultants-contracting/api/contact", {
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
      <div className="rounded-[28px] border border-[#D8E2EC] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E8EEF5] text-[#0E2A47] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#0E2A47] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3A4E63] max-w-md mx-auto mb-6">
          Thank you, {form.name}. {form.service ? `Your inquiry about "${form.service}" has been received.` : "Your inquiry has been received."} Our engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#C5A059]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D8E2EC] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#0E2A47] mb-6">Request A Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4E63] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D8E2EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E2A47] outline-none transition-all focus:border-[#0E2A47] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4E63] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D8E2EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E2A47] outline-none transition-all focus:border-[#0E2A47] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4E63] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D8E2EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E2A47] outline-none transition-all focus:border-[#0E2A47] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4E63] mb-2">Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D8E2EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E2A47] outline-none transition-all focus:border-[#0E2A47] focus:bg-white"
          >
            <option value="">Select a service...</option>
            {CORE_SERVICES.map((service) => (
              <option key={service.title} value={service.title}>{service.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3A4E63] mb-2">Project Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your project requirements and scope..."
          className="w-full rounded-xl border border-[#D8E2EC] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0E2A47] outline-none transition-all resize-none focus:border-[#0E2A47] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0E2A47] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#C5A059] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Request <Send size={15} />
      </button>
    </form>
  );
}

// ── Walton Consultants Navbar ──
function WaltonConsNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D8E2EC]">
      <div className="hidden md:block bg-[#081B30] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#C5A059]">Walton Consultants &amp; Contracting — Engineering Excellence</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#0E2A47] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Building2 size={22} color="#C5A059" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#0E2A47] leading-none">WALTON CONSULTANTS</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#3A4E63]">&amp; Contracting</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#0E2A47]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#C5A059] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#A6823B] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F7FA] text-[#0E2A47]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D8E2EC] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#0E2A47] hover:text-[#C5A059] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#C5A059] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}

// ── Walton Consultants Footer ──
function WaltonConsFooter() {
  return (
    <footer style={{ background: "#0E2A47" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Building2 size={20} color="#C5A059" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">WALTON CONSULTANTS</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">&amp; Contracting</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">Trusted engineering, infrastructure development, and project management services across Pakistan.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C5A059]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#C5A059]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#C5A059]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["About Us","Services","Projects","Careers","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#C5A059]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#C5A059]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#C5A059]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Walton Consultants &amp; Contracting. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function WaltonConsultantsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "walton-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.navy;
    return () => {
      document.body.classList.remove("roys-roys-theme", "walton-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme walton-theme font-sans bg-white text-[#0E2A47] selection:bg-[#0E2A47] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0E2A47 !important;
          color-scheme: light !important;
        }
        .walton-theme h1,
        .walton-theme h2,
        .walton-theme h3,
        .walton-theme h4,
        .walton-theme h5,
        .walton-theme h6,
        .walton-theme p,
        .walton-theme span,
        .walton-theme li,
        .walton-theme a,
        .walton-theme label,
        .walton-theme button,
        .walton-theme input,
        .walton-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <WaltonConsNavbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#F4F7FA] border-b border-[#D8E2EC]"
        style={{
          backgroundImage: HERO.backgroundImage
            ? `linear-gradient(180deg, rgba(244,247,250,0.95) 0%, rgba(244, 247, 250, 0) 40%, rgba(244,247,250,0.95) 100%), url("${encodeURI(HERO.backgroundImage)}")`
            : "linear-gradient(180deg, rgba(244,247,250,0.95) 0%, rgba(244, 247, 250, 0.43) 40%, rgba(244,247,250,0.95) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,42,71,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#C5D5E6] bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#0E2A47] shadow-sm backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#0E2A47]">
              Engineering Excellence. <span className="text-[#C5A059]">Building Tomorrow's Infrastructure.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3A4E63]">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E2A47] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#C5A059] hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0E2A47] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0E2A47] transition-all duration-300 hover:bg-[#0E2A47] hover:text-white hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <div className={`grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center ${ABOUT_SECTION.image ? "lg:grid-cols-[1.25fr_0.95fr]" : ""}`}>
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#C5A059] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                {ABOUT_SECTION.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0E2A47] mb-5">{ABOUT_SECTION.heading}</h2>
              <p className="text-base leading-relaxed text-[#3A4E63] mb-6">{ABOUT_SECTION.paragraphs[0]}</p>
              <p className="text-base leading-relaxed text-[#3A4E63]">{ABOUT_SECTION.paragraphs[1]}</p>
            </div>
            {ABOUT_SECTION.image ? (
              <div
                className="overflow-hidden rounded-[28px] border border-[#D8E2EC] bg-[#F4F7FA]"
                style={{ boxShadow: "0 24px 70px -32px rgba(14,42,71,0.32)" }}
              >
                <Image src={ABOUT_SECTION.image} alt={ABOUT_SECTION.imageAlt} width={720} height={540} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div
                className="relative rounded-[28px] overflow-hidden border border-[#D8E2EC] bg-[#F4F7FA] p-8 text-center"
                style={{ boxShadow: "0 24px 70px -32px rgba(14,42,71,0.32)" }}
              >
                <div className="w-20 h-20 rounded-full bg-[#E8EEF5] text-[#0E2A47] mx-auto flex items-center justify-center mb-4">
                  <Building2 size={40} />
                </div>
                <h3 className="text-xl font-black text-[#0E2A47] uppercase tracking-wide">WALTON</h3>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mt-1">CONSULTANTS & CONTRACTING</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F4F7FA] px-6 py-14 lg:py-20 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Expert Services Across Every Phase"
            description="From civil engineering to EPC delivery, Walton provides comprehensive solutions for complex industrial and infrastructure projects."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Industries We Serve" description="Delivering tailored engineering excellence across sectors that shape modern economies." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D8E2EC] bg-white p-5 text-sm font-semibold text-[#0E2A47] text-center transition-all duration-300 hover:border-[#0E2A47] hover:bg-[#0E2A47] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="expertise" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Walton"
            title="Why Choose Walton Consultants & Contracting"
            description="A strong blend of experienced teams, advanced technology, and sustainability focus makes Walton the trusted partner for large-scale infrastructure projects."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Engineering Process"
            title="Our Engineering Process"
            description="A disciplined workflow that ensures every project meets performance, schedule, and quality expectations."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Technology */}
      <section id="capabilities" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="rounded-[28px] border border-[#D8E2EC] bg-[#F4F7FA] p-8 md:p-10 shadow-sm">
            <SectionHeader
              eyebrow="Engineering Capabilities"
              title="Comprehensive Engineering Capabilities"
              description="Robust technical expertise spans structural design, site development, facility construction, and integrated system delivery."
            />
            <div className="mt-8 grid gap-4">
              {CAPABILITIES.map((item, index) => (
                <div key={index} className="rounded-2xl border border-[#D8E2EC] bg-white p-5">
                  <p className="font-bold text-[#0E2A47] mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed text-[#3A4E63]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[28px] border border-[#D8E2EC] bg-[#F4F7FA] p-8 shadow-sm">
              <h3 className="text-xl font-black text-[#0E2A47] mb-4">Sustainability & Quality</h3>
              <p className="text-sm leading-relaxed text-[#3A4E63] mb-6">Engineering with environmental responsibility through energy efficiency, material optimization, and safety management.</p>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white p-4 border border-[#D8E2EC]">
                  <p className="font-bold text-[#0E2A47]">Safety Standards</p>
                  <p className="mt-1 text-xs text-[#3A4E63]">We maintain rigorous safety and environmental standards on all worksites.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-[#D8E2EC]">
                  <p className="font-bold text-[#0E2A47]">Quality Assurance</p>
                  <p className="mt-1 text-xs text-[#3A4E63]">Strict quality management ensures resilient infrastructure delivery.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-[#D8E2EC]">
                  <p className="font-bold text-[#0E2A47]">Risk Management</p>
                  <p className="mt-1 text-xs text-[#3A4E63]">Advanced planning mitigates risk across engineering execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Engineering Projects Delivered"
            description="Selected works that demonstrate our capability across infrastructure, industrial, commercial, and utility development."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D8E2EC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0E2A47]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#0E2A47] group-hover:text-[#C5A059] transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Insights"
            title="Testimonials & Frequently Asked Questions"
            description="What our clients say and the questions we answer most often."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-xl font-black text-[#0E2A47] mb-6">What Our Clients Say</h3>
              <div className="grid gap-6">
                {TESTIMONIALS.map((item, index) => (
                  <div key={index} className="rounded-[28px] border border-[#D8E2EC] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#0E2A47]">
                    <p className="text-base italic leading-relaxed text-[#3A4E63] mb-6">“{item.quote}”</p>
                    <p className="font-black text-[#0E2A47]">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0E2A47] mb-6">Frequently Asked Questions</h3>
              <div className="grid gap-4 max-w-xl">
                {FAQS.map((item, index) => (
                  <FaqAccordionItem key={index} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section with User Information */}
      <section id="contact" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Walton Consultants & Contracting"
            description="Discuss your engineering, procurement, or construction project with our experts today."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#0E2A47] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#C5A059]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D8E2EC] mb-8">
                  Our engineering team responds to every consultation request within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#C5A059] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#C5A059] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#C5A059] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#C5A059] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D8E2EC]">
                &copy; {new Date().getFullYear()} Walton Consultants & Contracting. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-t border-[#D8E2EC]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Location"
            title="Visit Our Walton Office"
            description="Find us near Zakir Tikka on Service Lane, Ring Road. Use the map link to open directions in Google Maps."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-[28px] border border-[#D8E2EC] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-[#0E2A47] mb-4">Office Location</h3>
              <p className="text-sm leading-relaxed text-[#3A4E63] mb-6">
                1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
              </p>
              <a
                href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E2A47] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#C5A059]"
              >
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#D8E2EC] bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.73888879359!2d74.2895593150027!3d31.45275698142781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d6dfd96b7f%3A0x28f4f4f5f1f69c20!2sService%20Lane%20Ring%20Road%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="360"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <WaltonConsFooter />
    </main>
  );
}
