"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight, Award, Briefcase, FileSearch, TrendingUp, Handshake,
  PiggyBank, Target, Settings, Scale, CheckCircle2, MapPin, Phone,
  MessageCircle, Mail, Plus, Minus, Send, Search, ClipboardList, Compass,
  Users2, BarChart3, Landmark, HardHat, HeartPulse, Factory, Zap, Sprout,
  GraduationCap, Building2, Globe2, Network,
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
          <label className="block text-xs font-bold uppercase tracking-wider text-[#48525D] mb-2">Advisory Service Needed</label>
          <input
            type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="Feasibility / Project / Strategy"
            className="w-full rounded-xl border border-[#D6DCE2] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#3A444E] outline-none transition-all focus:border-[#3A444E] focus:bg-white"
          />
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

// ── Main Page Component ──
export default function PakistanConsultancyPage() {
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

      <HeaderNavbar activeRoute="/group-companies" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F6F8] border-b border-[#D6DCE2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,68,78,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#BAC5CF] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#3A444E] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
                {HERO.badge}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#3A444E]">
                Pakistani Consultancy <span className="text-[#C5A059]">Services</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#48525D]">
                {HERO.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3A444E] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#C5A059] hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#3A444E] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#3A444E] transition-all duration-300 hover:bg-[#3A444E] hover:text-white hover:scale-[1.02] active:scale-95"
                >
                  {HERO.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden border-2 border-[#D6DCE2] shadow-xl bg-white p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-24 h-24 rounded-3xl bg-[#E8ECF0] text-[#3A444E] flex items-center justify-center mb-6 shadow-inner">
                <TrendingUp size={48} />
              </div>
              <h3 className="text-2xl font-black text-[#3A444E] tracking-wider uppercase">PAKISTANI CONSULTANCY</h3>
              <p className="text-xs font-bold tracking-[0.3em] text-[#C5A059] mt-1">SERVICES</p>
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

      {/* Testimonials */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#D6DCE2] bg-[#F4F6F8] p-8 shadow-sm transition-all duration-300 hover:border-[#3A444E]">
                <p className="text-base italic leading-relaxed text-[#48525D] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#3A444E]">{item.name}</p>
                <p className="text-xs text-[#C5A059] font-bold mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F4F6F8] px-6 py-16 lg:py-24 border-b border-[#D6DCE2]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions"
            description="Answers to common questions regarding our advisory services, feasibility studies, and project management."
            center
          />
          <div className="mt-12 grid gap-4 max-w-4xl mx-auto">
            {FAQS.map((item, index) => (
              <FaqAccordionItem key={index} question={item.q} answer={item.a} />
            ))}
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

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D6DCE2]">
                &copy; {new Date().getFullYear()} Pakistani Consultancy Services. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}