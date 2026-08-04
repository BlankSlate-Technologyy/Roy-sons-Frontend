"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Briefcase, FileSearch, TrendingUp, Handshake,
  PiggyBank, Target, Settings, Scale, CheckCircle2, MapPin, Phone,
  MessageCircle, Mail, Plus, Minus, Send, Search, ClipboardList, Compass,
  Users2, BarChart3, Landmark, HardHat, HeartPulse, Factory, Zap, Sprout,
  GraduationCap, Building2, Globe2, Network, Menu, X,
} from "lucide-react";

// ── Color System matching Pakistani Consultancy Services Logo ──
const COLORS = {
  slate:        "#3A444E", // Official Logo Dark Slate Charcoal
  slateDark:    "#252C34",
  steel:        "#4F5963", // Logo Steel Gray
  gold:         "#C5A059", // Official Metallic Warm Gold Accent
  goldHover:    "#A6823B",
  white:        "#FFFFFF",
  bgLight:      "#F4F6F8", // Crisp light gray background
  border:       "#D6DCE2",
  textMuted:    "#48525D",
  textLight:    "#6E7A87",
};

const HERO = {
  badge: "Premier Strategic Advisory & Project Consultancy Firm",
  headline: "Pakistani Consultancy Services",
  subline:
    "Empowering businesses, government bodies, and investors through strategic advisory, technical feasibility studies, project management, financial consultancy, and organizational development. We turn complex challenges into sustainable growth strategies.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Request Consultation",
};

const STATS = [
  { value: 15,  suffix: "+", label: "Years of Strategic Consultancy" },
  { value: 400, suffix: "+", label: "Completed Projects & Studies" },
  { value: 150, suffix: "+", label: "Corporate & Institutional Clients" },
  { value: 45,  suffix: "+", label: "Senior Industry Consultants" },
  { value: 98,  suffix: "%", label: "Client Satisfaction & Delivery" },
  { value: 12,  suffix: "+", label: "Sectors & Industries Served" },
];

const SERVICES = [
  { icon: Briefcase,  title: "Project Consultancy",         desc: "Professional planning, execution, monitoring, and project governance for seamless delivery." },
  { icon: FileSearch, title: "Feasibility Studies",          desc: "Technical, financial, commercial, and environmental feasibility assessments." },
  { icon: TrendingUp, title: "Business Strategy & Growth",   desc: "Strategic planning, process improvement, organizational restructuring, and performance optimization." },
  { icon: Handshake,  title: "Procurement & Contracts",      desc: "Procurement planning, tender management, supplier evaluation, and contract administration." },
  { icon: PiggyBank,  title: "Investment & Advisory",        desc: "Investment planning, market research, financial modeling, and risk assessment for investors." },
  { icon: Target,     title: "Strategic Planning",           desc: "Long-term business blueprints that drive competitive advantage and sustainable value." },
  { icon: Settings,   title: "Project Management Office (PMO)", desc: "End-to-end PMO setup and supervision ensuring quality, cost control, and timelines." },
  { icon: Scale,      title: "Policy & Regulatory Advisory",desc: "Expert guidance on regulatory compliance, public-private partnerships (PPP), and governance." },
];

const WHY_CHOOSE = [
  { title: "Deep Industry Expertise",   desc: "Senior consultants with decades of hands-on experience across public and private sectors." },
  { title: "Data-Driven Research",      desc: "Evidence-backed advisory supported by rigorous market research and financial analysis." },
  { title: "Tailored Strategy",         desc: "Customized consulting frameworks designed around your specific business objectives." },
  { title: "Risk Mitigation",          desc: "Comprehensive risk identification, evaluation, and mitigation planning." },
  { title: "Uncompromising Integrity",  desc: "Transparent consulting built on ethics, accountability, and professional rigor." },
  { title: "End-to-End Partnership",   desc: "Dedicated support from initial concept through execution and post-project evaluation." },
];

const INDUSTRIES = [
  "Government & Public Sector",
  "Construction & Infrastructure",
  "Healthcare & Pharmaceuticals",
  "Manufacturing & Industrial",
  "Energy & Utilities",
  "Agriculture & Agribusiness",
  "Education & Human Capital",
  "Financial Services & Banking",
  "Information Technology",
  "Real Estate & Commercial Development",
];

const PROCESS = [
  { step: "01", title: "Discovery & Alignment",  desc: "Understanding project scope, business objectives, and stakeholder expectations." },
  { step: "02", title: "Research & Assessment",   desc: "Conducting thorough technical, financial, and market evaluations." },
  { step: "03", title: "Strategy & Framework",    desc: "Formulating actionable strategies, financial models, and roadmaps." },
  { step: "04", title: "Execution Support",       desc: "Guiding project implementation with dedicated on-site consultancy." },
  { step: "05", title: "Monitoring & KPI Review", desc: "Tracking progress against quality, cost, and schedule metrics." },
  { step: "06", title: "Sustained Growth",        desc: "Providing continuous advisory to lock in long-term performance gains." },
];

const FEATURED_PROJECTS = [
  { title: "National Infrastructure Advisory",  desc: "Strategic planning and project management for a regional highway network.", image: "/project-infrastructure.png" },
  { title: "Industrial Feasibility Study",       desc: "Comprehensive financial and market feasibility for a steel processing plant.", image: "/project-industrial.png" },
  { title: "Public Sector Procurement Reform",  desc: "Designing transparent procurement frameworks for government development funds.", image: "/project-commercial.png" },
  { title: "Corporate Restructuring Program",   desc: "Business transformation and process optimization for a conglomerate.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  { name: "Government Authority", role: "Director General", quote: "Pakistani Consultancy Services provided outstanding advisory that ensured the successful execution of our infrastructure initiative." },
  { name: "Corporate Group",       role: "Managing Director", quote: "Their feasibility study and financial modeling gave us total confidence to proceed with our multi-million dollar expansion." },
  { name: "Investment Partner",    role: "Senior Partner",   quote: "Professional, thorough, and highly knowledgeable consultants. Their strategic insights delivered real measurable value." },
];

const FAQS = [
  { q: "What consulting services do you provide?", a: "We provide project consultancy, feasibility studies, business strategy, procurement advisory, investment planning, PMO management, and regulatory compliance." },
  { q: "Which sectors do you work with?", a: "We advise government bodies, infrastructure developers, corporate enterprises, healthcare, energy, manufacturing, and real estate institutions." },
  { q: "Do you perform comprehensive feasibility studies?", a: "Yes. We conduct technical, financial, commercial, environmental, and legal feasibility assessments with detailed ROI modeling." },
  { q: "Can you assist international investors entering Pakistan?", a: "Yes. We offer market entry strategy, local partnership structuring, regulatory clearance, and investment feasibility for foreign investors." },
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
      className="rounded-[24px] border border-[#D6DCE2] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#3A444E]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#3A444E] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#48525D]">{label}</p>
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
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3A444E] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#48525D]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6DCE2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#3A444E] hover:bg-[#F4F6F8]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E8ECF0] text-[#3A444E] mb-6 transition-all duration-300 group-hover:bg-[#3A444E] group-hover:text-[#C5A059] group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#3A444E] mb-3 transition-colors duration-300 group-hover:text-[#C5A059]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#48525D]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6DCE2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C5A059]">
      <div className="text-[#C5A059] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#3A444E] mb-3 transition-colors duration-300 group-hover:text-[#C5A059]">{title}</h3>
      <p className="text-sm text-[#48525D] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6DCE2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#3A444E]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3A444E] text-[#C5A059] font-black group-hover:bg-[#C5A059] group-hover:text-white transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#3A444E]">{title}</h4>
      </div>
      <p className="text-sm text-[#48525D] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D6DCE2] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#3A444E] transition-colors group-hover:text-[#C5A059]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E8ECF0] flex items-center justify-center text-[#3A444E] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#3A444E] group-hover:text-[#C5A059]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E8ECF0]">
          <p className="mt-3 text-sm leading-relaxed text-[#48525D]">{answer}</p>
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
      <div className="rounded-[28px] border border-[#D6DCE2] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E8ECF0] text-[#3A444E] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#3A444E] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#48525D] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our senior advisory team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#3A444E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#C5A059]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D6DCE2] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#3A444E] mb-6">Request A Strategic Consultation</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all focus:border-[#3A444E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all focus:border-[#3A444E] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all focus:border-[#3A444E] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Service Type</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all focus:border-[#3A444E] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Project Consultancy">Project Consultancy</option>
            <option value="Feasibility Studies">Feasibility Studies</option>
            <option value="Business Strategy">Business Strategy</option>
            <option value="Procurement & Contracts">Procurement & Contracts</option>
            <option value="Investment Advisory">Investment Advisory</option>
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Consultancy Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Describe your project, objectives, or advisory needs..."
          className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all resize-none focus:border-[#3A444E] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#3A444E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#C5A059] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Consultation <Send size={15} />
      </button>
    </form>
  );
}

// ── PCS Navbar ──
function PCSNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D6DCE2]">
      <div className="hidden md:block bg-[#252C34] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#C5A059]">Pakistani Consultancy Services — Expert Guidance</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#3A444E] flex items-center justify-center group-hover:scale-105 transition-transform">
            <TrendingUp size={22} color="#C5A059" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#3A444E] leading-none">PAKISTANI CONSULTANCY</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#48525D]">Services (PCS)</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#3A444E]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#C5A059] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#A6823B] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Book Consultation
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F6F8] text-[#3A444E]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D6DCE2] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#3A444E] hover:text-[#C5A059] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#C5A059] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}

// ── PCS Footer ──
function PCSFooter() {
  return (
    <footer style={{ background: "#3A444E" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <TrendingUp size={20} color="#C5A059" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">PAKISTANI CONSULTANCY</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Services (PCS)</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">Expert business, legal, financial, and strategic consulting services empowering businesses across Pakistan with professional guidance.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C5A059]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#C5A059]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#C5A059]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["About Us","Services","Expertise","FAQs","Contact"].map(l => (
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
        © {new Date().getFullYear()} Pakistani Consultancy Services. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function PakistanConsultancyPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const activeTestimonialItem = TESTIMONIALS[activeTestimonial];

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "pcs-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.slate;
    return () => {
      document.body.classList.remove("roys-roys-theme", "pcs-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme pcs-theme font-sans bg-white text-[#3A444E] selection:bg-[#3A444E] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #3A444E !important;
          color-scheme: light !important;
        }
        .pcs-theme h1,
        .pcs-theme h2,
        .pcs-theme h3,
        .pcs-theme h4,
        .pcs-theme h5,
        .pcs-theme h6,
        .pcs-theme p,
        .pcs-theme span,
        .pcs-theme li,
        .pcs-theme a,
        .pcs-theme label,
        .pcs-theme button,
        .pcs-theme input,
        .pcs-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <PCSNavbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-[#D6DCE2] min-h-[500px] lg:min-h-[560px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(35,42,49,0.88) 0%, rgba(58,68,78,0.82) 50%, rgba(35,42,49,0.92) 100%), url("${encodeURI("/pakistani consulancy services.jpeg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#C5A059]/40 bg-[#3A444E]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Pakistani Consultancy <span className="text-[#C5A059]">Services</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E8ECF0]">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#3A444E] shadow-lg transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#3A444E] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-20 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#C5A059] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                About Pakistani Consultancy Services
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#3A444E] mb-5">Strategic Advisory For Growth, Compliance, and Delivery</h2>
              <p className="text-base leading-relaxed text-[#48525D] mb-6">
                Pakistani Consultancy Services supports clients across government, infrastructure, healthcare, energy, and private enterprise with practical, results-oriented advisory grounded in research and execution experience.
              </p>
              <p className="text-base leading-relaxed text-[#48525D]">
                From early-stage feasibility studies to strategic restructuring and implementation support, we help organizations make confident decisions and achieve sustainable outcomes.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#D6DCE2] bg-[#F4F6F8] shadow-sm">
              <Image
                src="/pakistani consulancy services.jpeg"
                alt="Pakistani consultancy services team"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A444E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">PROFESSIONAL ADVISORY</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f3e2bb] mt-1">PAKISTANI CONSULTANCY SERVICES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F6F8] px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Advisory Services"
            title="Comprehensive Consulting Solutions"
            description="From project feasibility and business strategy to procurement governance and financial investment advisory."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Serving Key Sectors Of The Economy" description="Providing strategic guidance to public, private, and international institutions." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D6DCE2] bg-[#F4F6F8] p-5 text-sm font-semibold text-[#3A444E] text-center transition-all duration-300 hover:border-[#3A444E] hover:bg-[#3A444E] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PCS Section */}
      <section className="bg-[#F4F6F8] px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Your Trusted Strategic Advisory Partner"
            description="Proven methodologies, deep industry research, and a commitment to delivering measurable results."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Consulting Process"
            title="Disciplined 6-Step Advisory Methodology"
            description="From initial discovery to strategy execution, quality monitoring, and sustained optimization."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-[#F4F6F8] px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Proven Results & Advisory Track Record"
            description="Selected highlights of feasibility studies, infrastructure advisory, and strategic consultancy."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D6DCE2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#3A444E]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#3A444E] group-hover:text-[#C5A059] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#48525D] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQs */}
      <section id="faq" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <SectionHeader
                eyebrow="Testimonials"
                title="What Our Clients Say"
              />
              <div className="mt-8 rounded-[28px] border border-[#D6DCE2] bg-[#F4F6F8] p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#3A444E]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3A444E] shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M9.5 7a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 9.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5H5.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 6.5 7h3Zm10 0a3.5 3.5 0 0 0-3.5 3.5v1.75A3.5 3.5 0 0 0 19.5 15.75h.5v1.75a2.5 2.5 0 0 1-2.5 2.5h-1.5a2.5 2.5 0 0 1-2.5-2.5V10.5A3.5 3.5 0 0 1 16.5 7h3Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C5A059]">Client Feedback</p>
                      <p className="text-sm font-semibold text-[#48525D]">Trusted by growth-focused organizations</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DCE2] bg-white text-[#3A444E] transition hover:border-[#3A444E] hover:bg-[#E8ECF0]"
                      aria-label="Previous testimonial"
                    >
                      <ArrowRight size={18} className="rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DCE2] bg-white text-[#3A444E] transition hover:border-[#3A444E] hover:bg-[#E8ECF0]"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-base italic leading-relaxed text-[#48525D] mb-6">“{activeTestimonialItem.quote}”</p>
                <p className="font-black text-[#3A444E]">{activeTestimonialItem.name}</p>
                <p className="text-xs text-[#C5A059] font-bold mt-1">{activeTestimonialItem.role}</p>

                <div className="mt-6 flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#3A444E]" : "w-2.5 bg-[#C9D0D7]"}`}
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
                description="Answers to common questions regarding our advisory services, feasibility studies, and project management."
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
      <section id="contact" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Pakistani Consultancy Services"
            description="Discuss your feasibility study, project management, or strategic business advisory needs with our consultants."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#3A444E] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#C5A059]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D6DCE2] mb-8">
                  Our strategic advisory team responds to every inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
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

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D6DCE2]">
                &copy; {new Date().getFullYear()} Pakistani Consultancy Services. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] px-6 py-16 lg:py-20 border-t border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#C5A059] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                Our Location
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#3A444E] mb-4">Visit Our Office</h3>
              <p className="text-base leading-relaxed text-[#48525D] mb-6">
                We welcome project consultations, strategy sessions, and technical advisory meetings at our Lahore office.
              </p>
              <div className="rounded-[24px] border border-[#D6DCE2] bg-white p-6">
                <p className="text-sm font-semibold text-[#3A444E]">{CONTACT_INFO.office}</p>
                <a
                  href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#3A444E] hover:text-[#C5A059]"
                >
                  Open in Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#D6DCE2] shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Lahore%20Pakistan&output=embed"
                title="Pakistani Consultancy Services Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <PCSFooter />
    </main>
  );
}