"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight, Award, CheckCircle2, Droplets, Leaf, MapPin, Phone,
  MessageCircle, Mail, Plus, Minus, Send, ShieldCheck, Sparkles,
  Users, Wrench, Building2, Recycle, Clock, Sparkle,
} from "lucide-react";

// ── Color System matching Pak Janitorial Services Logo ──
const COLORS = {
  skyBlue:     "#009BE3", // Fresh Sky Blue from Pak Janitorial logo
  skyBlueDark: "#007BBF",
  ecoGreen:    "#61B329", // Eco Leaf Green from Pak Janitorial logo
  ecoGreenDark:"#4D961E",
  charcoal:    "#2A323D", // Logo Dark Charcoal for text & headings
  white:       "#FFFFFF",
  bgLight:     "#F4F9FC", // Light sky-tinted background
  border:      "#D4E8F5",
  textMuted:   "#405060",
  textLight:   "#6A7B8C",
};

const HERO = {
  badge: "Professional Janitorial & Environmental Facility Services",
  headline: "Clean Environments. Healthier Spaces. Sustainable Solutions.",
  subline:
    "Pak Janitorial Services is a premier provider of commercial cleaning, industrial janitorial, facility maintenance, deep sanitization, and green environmental solutions. We deliver spotless, hygienic, and eco-friendly spaces for corporate offices, healthcare facilities, industrial sites, and commercial complexes.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Get Free Quote",
};

const STATS = [
  { value: 20,  suffix: "+",   label: "Years of Industry Experience" },
  { value: 250, suffix: "+",   label: "Commercial & Healthcare Projects" },
  { value: 100, suffix: "+",   label: "Corporate & Industrial Clients" },
  { value: 500, suffix: "+",   label: "Trained Janitorial Professionals" },
  { value: 99,  suffix: "%",   label: "Client Satisfaction & Compliance" },
];

const SERVICES = [
  {
    icon: Sparkles,
    title: "Commercial Janitorial Services",
    desc: "Daily and scheduled cleaning services tailored for corporate offices, retail spaces, educational institutions, and commercial buildings.",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare & Hospital Sanitization",
    desc: "Medical-grade disinfection, infection control, clean room sanitization, and biohazard cleaning compliant with health standards.",
  },
  {
    icon: Building2,
    title: "Industrial & Factory Cleaning",
    desc: "Heavy-duty cleaning for industrial complexes, manufacturing plants, processing facilities, and warehouses.",
  },
  {
    icon: Recycle,
    title: "Green Cleaning & Waste Management",
    desc: "Eco-friendly cleaning using non-toxic biodegradable products, recycling initiatives, and sustainable waste management.",
  },
  {
    icon: Droplets,
    title: "Deep Carpet & Floor Care",
    desc: "Professional floor scrubbing, buffing, waxing, marble polishing, and deep steam extraction for carpets and upholstery.",
  },
  {
    icon: Sparkle,
    title: "Window & High-Rise Glass Cleaning",
    desc: "Exterior and interior glass cleaning using advanced safety equipment and streak-free solutions for multi-story buildings.",
  },
  {
    icon: Wrench,
    title: "Post-Construction Cleanup",
    desc: "Comprehensive debris removal, fine dust vacuuming, and detailed final cleaning prior to facility handover.",
  },
  {
    icon: Users,
    title: "Facility Staffing & Support",
    desc: "Trained, vetted, and supervised janitorial staff, housekeepers, and facility maintenance technicians.",
  },
];

const INDUSTRIES = [
  "Corporate Offices",
  "Hospitals & Clinics",
  "Pharmaceutical Plants",
  "Educational Institutions",
  "Shopping Malls & Retail",
  "Industrial Facilities",
  "Banks & Financial Hubs",
  "Hotels & Hospitality",
  "Government Buildings",
  "Residential Complexes",
];

const WHY_CHOOSE = [
  { title: "Eco-Friendly Green Products", desc: "Using non-toxic, eco-certified cleaning agents that protect health and the environment." },
  { title: "Professionally Vetted Staff", desc: "Background-checked, well-trained, and uniformed janitorial professionals." },
  { title: "Medical-Grade Disinfection", desc: "Advanced sanitization protocols following international hygiene guidelines." },
  { title: "24/7 Service Availability", desc: "Flexible cleaning schedules (daytime, after-hours, weekends) to minimize disruption." },
  { title: "Quality Control Audits", desc: "Routine inspections and dedicated site supervisors to ensure consistent excellence." },
  { title: "Customized Maintenance Plans", desc: "Tailored janitorial agreements designed around your facility size and budget." },
];

const PROCESS = [
  { step: "01", title: "Site Inspection & Assessment", desc: "Evaluating facility size, surface types, traffic flow, and cleaning needs." },
  { step: "02", title: "Customized Cleaning Plan", desc: "Designing a tailored schedule, staffing plan, and chemical selection." },
  { step: "03", title: "Staff Deployment", desc: "Assigning trained janitorial staff and site supervisors." },
  { step: "04", title: "Execution & Sanitization", desc: "Performing thorough cleaning, disinfection, and maintenance protocols." },
  { step: "05", title: "Quality Inspection", desc: "Supervisory audits and checklist validations to maintain standards." },
  { step: "06", title: "Client Reporting & Review", desc: "Regular feedback sessions and service optimization." },
];

const FEATURED_PROJECTS = [
  { title: "Multi-Specialty Hospital Disinfection", subtitle: "Medical-grade sanitization across operating rooms, ICUs, and wards.", image: "/project-infrastructure.png" },
  { title: "Corporate Headquarters Janitorial", subtitle: "Daily cleaning and floor care for a 20-story corporate tower.", image: "/project-commercial.png" },
  { title: "Industrial Plant Post-Construction Clean", subtitle: "Comprehensive dust and debris removal for a new manufacturing facility.", image: "/project-industrial.png" },
  { title: "Pharmaceutical Clean Room Care", subtitle: "ISO-compliant clean room maintenance for pharmaceutical production.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  {
    quote: "Pak Janitorial Services has maintained our corporate offices at peak cleanliness and hygiene for over 5 years. Exceptional team!",
    name: "Corporate Operations Manager",
  },
  {
    quote: "Their healthcare sanitization team understands hospital standards inside out. Highly reliable and thorough.",
    name: "Hospital Facility Director",
  },
];

const FAQS = [
  { q: "What cleaning products do you use?", a: "We prioritize eco-friendly, non-toxic, biodegradable green cleaning products along with hospital-grade disinfectants where required." },
  { q: "Are your janitorial staff background checked?", a: "Yes, 100% of our staff undergo thorough background verifications, police clearances, and regular health checkups." },
  { q: "Can you accommodate after-hours cleaning?", a: "Absolutely. We offer 24/7 flexible scheduling including evening, overnight, and weekend cleaning shifts." },
  { q: "Do you provide one-time deep cleaning services?", a: "Yes, we offer both recurring janitorial contracts and one-off deep cleaning, post-construction cleanup, or carpet extraction." },
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
      className="rounded-[24px] border border-[#D4E8F5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#009BE3]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#009BE3] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#405060]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#61B329] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#61B329]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#2A323D] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#405060]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D4E8F5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#009BE3] hover:bg-[#F4F9FC]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F4FC] text-[#009BE3] mb-6 transition-all duration-300 group-hover:bg-[#009BE3] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#2A323D] mb-3 transition-colors duration-300 group-hover:text-[#009BE3]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#405060]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D4E8F5] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#61B329]">
      <div className="text-[#61B329] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#2A323D] mb-3 transition-colors duration-300 group-hover:text-[#61B329]">{title}</h3>
      <p className="text-sm text-[#405060] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Step Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D4E8F5] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#009BE3]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#009BE3] text-white font-black group-hover:bg-[#61B329] transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#2A323D]">{title}</h4>
      </div>
      <p className="text-sm text-[#405060] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D4E8F5] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#2A323D] transition-colors group-hover:text-[#009BE3]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6F4FC] flex items-center justify-center text-[#009BE3] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#009BE3] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E8F2FA]">
          <p className="mt-3 text-sm leading-relaxed text-[#405060]">{answer}</p>
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
      <div className="rounded-[28px] border border-[#D4E8F5] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E6F4FC] text-[#009BE3] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#2A323D] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#405060] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#009BE3] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#61B329]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D4E8F5] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#2A323D] mb-6">Request A Janitorial Quote</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#405060] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D4E8F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#009BE3] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#405060] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D4E8F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#009BE3] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#405060] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D4E8F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#009BE3] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#405060] mb-2">Facility Type / Service</label>
          <input
            type="text" name="service" value={form.service} onChange={handleChange}
            placeholder="Corporate Office / Hospital / Commercial"
            className="w-full rounded-xl border border-[#D4E8F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all focus:border-[#009BE3] focus:bg-white"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#405060] mb-2">Facility Details & Requirements *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your facility size, frequency, and requirements..."
          className="w-full rounded-xl border border-[#D4E8F5] bg-[#F8FAFD] px-4 py-3.5 text-sm text-[#2A323D] outline-none transition-all resize-none focus:border-[#009BE3] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#009BE3] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#61B329] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Request <Send size={15} />
      </button>
    </form>
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
    <main className="roys-roys-theme pak-janitorial-theme font-sans bg-white text-[#2A323D] selection:bg-[#009BE3] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #2A323D !important;
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

      <HeaderNavbar activeRoute="/group-companies" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F9FC] border-b border-[#D4E8F5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,155,227,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#BCE1F5] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#009BE3] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#61B329]" />
                {HERO.badge}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#2A323D]">
                Clean Environments. <span className="text-[#009BE3]">Healthier Spaces.</span> <span className="text-[#61B329]">Sustainable Solutions.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#405060]">
                {HERO.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009BE3] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#61B329] hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#009BE3] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#009BE3] transition-all duration-300 hover:bg-[#009BE3] hover:text-white hover:scale-[1.02] active:scale-95"
                >
                  {HERO.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden border-2 border-[#D4E8F5] shadow-xl">
              <Image
                src="/pak janitorial.jpeg"
                alt="Pak Janitorial Services"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#009BE3]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16 lg:py-20 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#61B329] mb-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#61B329]" />
                About Our Company
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#2A323D] mb-5">Your Trusted Partner in Facility Hygiene & Environmental Care</h2>
              <p className="text-base leading-relaxed text-[#405060] mb-6">
                Pak Janitorial Services is a premier janitorial and facility maintenance company serving commercial, healthcare, industrial, and institutional clients across the nation. With decades of combined experience, we combine advanced cleaning technologies, eco-friendly green chemicals, and rigorous quality control to deliver pristine, safe environments.
              </p>
              <p className="text-base leading-relaxed text-[#405060]">
                Whether managing daily office janitorial operations, specialized hospital sanitization, industrial floor polishing, or high-rise window cleaning, our dedicated team ensures absolute compliance with international health and safety standards.
              </p>
            </div>
            <div className="relative rounded-[28px] overflow-hidden border border-[#D4E8F5] bg-[#F4F9FC] p-8 shadow-sm text-center">
              <div className="w-20 h-20 rounded-full bg-[#E6F4FC] text-[#009BE3] mx-auto flex items-center justify-center mb-4">
                <Droplets size={40} />
              </div>
              <h3 className="text-xl font-black text-[#009BE3] uppercase tracking-wide">PAK JANITORIAL</h3>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#61B329] mt-1">SERVICES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#F4F9FC] px-6 py-14 lg:py-20 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Comprehensive Cleaning & Facility Solutions"
            description="From commercial offices and hospital sanitization to industrial deep cleaning and green environmental management."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F9FC] px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Supporting Every Sector" description="Delivering tailored janitorial and sanitization solutions across industries." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D4E8F5] bg-white p-5 text-sm font-semibold text-[#2A323D] text-center transition-all duration-300 hover:border-[#009BE3] hover:bg-[#009BE3] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="expertise" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Pak Janitorial"
            title="Your Trusted Environmental & Janitorial Partner"
            description="High standards, green cleaning technologies, and reliable service make Pak Janitorial Services the preferred choice."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F4F9FC] px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Execution For Spotless Results"
            description="A systematic 6-step workflow that ensures every facility is cleaned, disinfected, and maintained to perfection."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Excellence In Facility Care"
            description="Selected highlights of commercial, healthcare, and industrial janitorial operations successfully executed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D4E8F5] bg-[#F4F9FC] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#009BE3]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#2A323D] group-hover:text-[#009BE3] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#405060] leading-relaxed">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4F9FC] px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#D4E8F5] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#009BE3]">
                <p className="text-base italic leading-relaxed text-[#405060] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#2A323D]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D4E8F5]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions"
            description="Answers to common questions regarding our janitorial, sanitization, and staffing services."
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
      <section id="contact" className="bg-[#F4F9FC] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Pak Janitorial Services"
            description="Request a free facility audit, cleaning quote, or discuss customized janitorial services today."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#009BE3] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-white/90">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-white/90 mb-8">
                  Our facility care team responds to every inquiry and quote request within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/20 text-xs text-white/80">
                &copy; {new Date().getFullYear()} Pak Janitorial Services. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
