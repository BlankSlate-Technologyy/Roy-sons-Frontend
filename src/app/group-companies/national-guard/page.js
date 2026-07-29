"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock, BarChart3, Building, Building2, Camera, CheckCircle2,
  ChevronDown, ClipboardCheck, ClipboardList, Clock, Eye, Facebook,
  Factory, FileText, GraduationCap, HardHat, Headphones, Home as HomeIcon,
  Hotel, Landmark, Linkedin, Lock, Mail, MapPin, MapPinned, Minus,
  Network, Phone, Plus, Radio, ScanEye, Search, Send, Shield, ShieldCheck,
  ShoppingBag, Star, Stethoscope, ThumbsUp, Twitter, User, UserCheck, Users,
  Warehouse, Youtube,
} from "lucide-react";

const theme = {
  navy:      "#1B365D",   // Shield Navy Blue from National Guard logo
  navyDark:  "#0F2540",
  gold:      "#C5A059",   // Wreath Gold from National Guard logo
  goldHover: "#A6823B",
  white:     "#ffffff",
  bgLight:   "#F4F6F9",
  border:    "#E2E7EE",
  textMuted: "#4A5B73",
  textLight: "#6E7F98",
};

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About Us",   href: "#about" },
  { label: "Services",   href: "#services", hasDropdown: true },
  { label: "Industries", href: "#industries" },
  { label: "Careers",    href: "#careers" },
  { label: "Contact",    href: "#contact" },
];

const stats = [
  { icon: ShieldCheck, value: 10,   suffix: "+",  label: "Years of\nExperience" },
  { icon: Users,       value: 500,  suffix: "+",  label: "Security\nProfessionals" },
  { icon: Building2,   value: 1000, suffix: "+",  label: "Protected\nSites" },
  { icon: Clock,       value: 24,   suffix: "/7", label: "Security\nOperations" },
  { icon: ThumbsUp,    value: 99,   suffix: "%",  label: "Client\nSatisfaction" },
];

const services = [
  {
    icon: UserCheck,
    title: "Manned Guarding",
    desc: "Professional uniformed security officers for commercial, residential, industrial, and government facilities.",
    img: "/national-guard-manned-guarding.png",
  },
  {
    icon: Radio,
    title: "Mobile Patrol Services",
    desc: "Scheduled and random patrols to enhance site security and rapid incident response.",
    img: "/national-guard-mobile-patrol.png",
  },
  {
    icon: Camera,
    title: "CCTV Monitoring",
    desc: "Continuous surveillance through advanced monitoring systems and control rooms.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: ClipboardCheck,
    title: "Risk Assessment",
    desc: "Comprehensive security audits, vulnerability assessments, and strategic risk management.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Users,
    title: "Event Security",
    desc: "Professional crowd management and event protection for public and private gatherings.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Building2,
    title: "Facility Protection",
    desc: "Integrated security services designed to secure offices, factories, warehouses, and educational institutions.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
  },
];

const industries = [
  { icon: Landmark,      label: "Government\nOrganizations" },
  { icon: Building,      label: "Corporate\nOffices" },
  { icon: HomeIcon,      label: "Residential\nCommunities" },
  { icon: ShoppingBag,   label: "Shopping\nMalls" },
  { icon: Factory,       label: "Industrial\nFacilities" },
  { icon: Stethoscope,   label: "Healthcare\nCenters" },
  { icon: GraduationCap, label: "Educational\nInstitutions" },
  { icon: Hotel,         label: "Hotels &\nHospitality" },
  { icon: Landmark,      label: "Financial\nInstitutions" },
  { icon: HardHat,       label: "Construction\nSites" },
  { icon: Warehouse,     label: "Logistics &\nWarehouses" },
  { icon: Network,       label: "Critical\nInfrastructure" },
];

const whyChooseReasons = [
  "Highly Trained Security Personnel",
  "Licensed & Professional Guards",
  "24/7 Monitoring & Support",
  "Modern Surveillance Technology",
  "Customized Security Plans",
  "Reliable Operations",
  "Rapid Emergency Response",
  "Proven Industry Experience",
];

const processSteps = [
  { step: "01", icon: Users,       title: "Security\nConsultation" },
  { step: "02", icon: Search,      title: "Site\nInspection" },
  { step: "03", icon: ShieldCheck, title: "Risk\nAssessment" },
  { step: "04", icon: FileText,    title: "Customized\nSecurity Planning" },
  { step: "05", icon: UserCheck,   title: "Deployment &\nMonitoring" },
  { step: "06", icon: Headphones,  title: "Continuous\nSupport & Reporting" },
];

const techCapabilities = [
  { icon: Eye,           label: "CCTV\nSurveillance" },
  { icon: Lock,          label: "Access Control\nSystems" },
  { icon: ScanEye,       label: "Visitor\nManagement" },
  { icon: AlarmClock,    label: "Alarm\nMonitoring" },
  { icon: MapPinned,     label: "GPS Patrol\nTracking" },
  { icon: ClipboardList, label: "Incident\nReporting" },
  { icon: Radio,         label: "Emergency Response\nCoordination" },
  { icon: BarChart3,     label: "Security\nAnalytics" },
];

const testimonials = [
  {
    name: "Corporate Client",
    role: "Office Complex",
    quote: "National Guard has consistently delivered dependable security services with exceptional professionalism and responsiveness.",
  },
  {
    name: "Industrial Client",
    role: "Manufacturing Facility",
    quote: "Their security officers and monitoring systems have significantly improved the safety of our facilities.",
  },
];

const faqs = [
  {
    question: "What types of security services do you provide?",
    answer: "We provide manned guarding, mobile patrols, CCTV monitoring, risk assessment, event security, and full facility protection tailored to your site.",
  },
  {
    question: "Are your security personnel professionally trained?",
    answer: "Yes, every officer completes rigorous licensing, background checks, and ongoing professional training before deployment.",
  },
  {
    question: "Do you provide 24/7 security coverage?",
    answer: "Yes, our operations center and patrol teams run around the clock, 365 days a year.",
  },
  {
    question: "Can you customize security solutions?",
    answer: "Absolutely. We design a security plan around your site's specific risks, layout, and operational needs.",
  },
];

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Services", "Industries", "Careers", "Contact"],
  Services: ["Manned Guarding", "Mobile Patrol", "CCTV Monitoring", "Event Security", "Risk Assessment", "Facility Protection"],
};

const socialIcons = [Facebook, Linkedin, Twitter, Youtube];

// Small reusable pieces
function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-black uppercase tracking-[0.25em] mb-3 text-navy-override">
      {children}
    </p>
  );
}

function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-2xl font-black uppercase tracking-tight text-navy-override ${className}`}>
      {children}
    </h2>
  );
}

// Animated counter: counts up from 0 to `value` once it scrolls into view
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out for a nice deceleration near the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return count;
}

function StatCard({ icon: Icon, value, suffix, label, startCounting }) {
  const count = useCountUp(value, 1800, startCounting);
  return (
    <div className="flex items-center gap-4 p-5 rounded-lg border transition-all duration-300 hover:border-[#C5A059]/40 hover:-translate-y-1 hover:shadow-lg panel-bg-override">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 stats-icon-wrapper">
        <Icon size={22} style={{ color: theme.navy }} />
      </div>
      <div className="leading-tight">
        <p className="text-xl md:text-2xl font-black text-navy-override tabular-nums">
          {count}
          {suffix}
        </p>
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5 whitespace-pre-line text-navy-override">
          {label}
        </p>
      </div>
    </div>
  );
}

// Wrapper that detects when the stats section scrolls into view and
// triggers the count-up animation for every StatCard inside it.
function StatsCounterSection({ items }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-5 gap-5">
      {items.map((stat) => (
        <StatCard key={stat.label} {...stat} startCounting={inView} />
      ))}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, img }) {
  return (
    <div className="group service-card-hover rounded-lg border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl panel-bg-override">
      <div className="relative w-full h-40 bg-slate-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-85" />
        <div className="absolute bottom-3 left-4 p-2 rounded-md border shadow-sm panel-bg-override">
          <Icon size={16} style={{ color: theme.navy }} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="service-card-title text-[13px] font-black uppercase tracking-wide mb-2.5 transition-colors text-navy-override">
          {title}
        </h3>
        <p className="service-card-desc text-[11.5px] leading-relaxed text-navy-override">{desc}</p>
      </div>
    </div>
  );
}

function IndustryCard({ icon: Icon, label }) {
  return (
    <div className="group industry-card-hover flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:scale-105 panel-bg-override">
      <div className="industry-card-iconwrap w-12 h-12 rounded-full flex items-center justify-center mb-3 border transition-all duration-300 border-override bg-light-override">
        <Icon size={18} style={{ color: theme.navy }} className="industry-card-icon" />
      </div>
      <p className="industry-card-label text-[9.5px] font-bold leading-snug uppercase tracking-wide whitespace-pre-line text-navy-override">
        {label}
      </p>
    </div>
  );
}

function ProcessStep({ step, icon: Icon, title, isLast }) {
  return (
    <div className="flex flex-col items-center text-center relative flex-1 min-w-[90px] group">
      {!isLast && (
        <div
          className="hidden lg:block absolute top-7 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] border-t-2 border-dashed z-0 transition-colors group-hover:border-[#C5A059]"
          style={{ borderColor: `${theme.navy}44` }}
        />
      )}
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-[#C5A059] group-hover:scale-105 z-10 border-override bg-white-override">
        <Icon size={18} style={{ color: theme.navy }} />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center border shadow-sm border-override bg-navy-override text-white">
          {step}
        </div>
      </div>
      <p className="text-[10px] font-bold leading-tight uppercase tracking-wider mt-4 whitespace-pre-line text-navy-override">
        {title}
      </p>
    </div>
  );
}

function TechCard({ icon: Icon, label }) {
  return (
    <div className="group flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:border-[#C5A059]/50 border-override bg-light-override">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 group-hover:bg-[#1B365D]/10 transition-all border-override bg-white-override">
        <Icon size={16} style={{ color: theme.navy }} />
      </div>
      <span className="text-[9.5px] font-bold leading-tight uppercase tracking-wider whitespace-pre-line text-navy-override">
        {label}
      </span>
    </div>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="p-5 rounded-lg border shadow-sm border-override bg-white-override animate-fade-in-up">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} fill={theme.gold} style={{ color: theme.gold }} />
        ))}
      </div>
      <p className="text-[12px] leading-relaxed italic mb-4 text-navy-override font-medium">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-[11.5px] font-black uppercase tracking-wider text-navy-override">{name}</p>
      <p className="text-[9.5px] font-bold uppercase tracking-widest mt-0.5 text-navy-override">{role}</p>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="rounded-lg border overflow-hidden transition-all duration-300 border-override bg-white-override"
      style={{ backgroundColor: isOpen ? "rgba(27,54,93,0.02)" : "#ffffff" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group transition-all duration-200"
      >
        <span className="text-[12.5px] font-bold group-hover:text-[#C5A059] tracking-wide transition-colors text-navy-override">
          {question}
        </span>
        <div className="w-6 h-6 rounded-full flex items-center justify-center border transition-all border-override bg-white-override">
          {isOpen ? (
            <Minus size={12} style={{ color: theme.navy }} />
          ) : (
            <Plus size={12} style={{ color: theme.navy }} />
          )}
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 border-t" : "max-h-0"} border-override`}>
        <p className="p-5 text-[12px] leading-relaxed text-navy-override faq-panel-open">{answer}</p>
      </div>
    </div>
  );
}

// ── Contact Us form ───────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      // Replace this with your real API endpoint / email service call.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: theme.navy }} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="contact-input w-full pl-11 pr-4 py-3.5 rounded-md border text-[12.5px] font-medium outline-none transition-all duration-300"
            required
          />
        </div>
        <div className="relative">
          <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: theme.navy }} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="contact-input w-full pl-11 pr-4 py-3.5 rounded-md border text-[12.5px] font-medium outline-none transition-all duration-300"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: theme.navy }} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="contact-input w-full pl-11 pr-4 py-3.5 rounded-md border text-[12.5px] font-medium outline-none transition-all duration-300"
          />
        </div>
        <div className="relative">
          <ShieldCheck size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: theme.navy }} />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="contact-input w-full pl-11 pr-4 py-3.5 rounded-md border text-[12.5px] font-medium outline-none transition-all duration-300 appearance-none"
          >
            <option value="">Select a Service</option>
            <option value="Manned Guarding">Manned Guarding</option>
            <option value="Mobile Patrol">Mobile Patrol Services</option>
            <option value="CCTV Monitoring">CCTV Monitoring</option>
            <option value="Risk Assessment">Risk Assessment</option>
            <option value="Event Security">Event Security</option>
            <option value="Facility Protection">Facility Protection</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <FileText size={15} className="absolute left-4 top-4" style={{ color: theme.navy }} />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your security needs..."
          rows={4}
          className="contact-input w-full pl-11 pr-4 py-3.5 rounded-md border text-[12.5px] font-medium outline-none transition-all duration-300 resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary-override w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-[12px] font-bold text-emerald-600">
          <CheckCircle2 size={15} /> Thank you! Your message has been sent. We will contact you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-[12px] font-bold text-red-600">
          Please fill in your name, email, and message before sending.
        </p>
      )}
    </form>
  );
}

// ── Theme styles: WHITE background / NAVY BLUE text throughout ───────────
const pageStyles = `
  .ng-theme h1,
  .ng-theme h2,
  .ng-theme h3,
  .ng-theme h4,
  .ng-theme h5,
  .ng-theme h6,
  .ng-theme p,
  .ng-theme span,
  .ng-theme li,
  .ng-theme a,
  .ng-theme label,
  .ng-theme button,
  .ng-theme input,
  .ng-theme textarea {
    -webkit-text-fill-color: initial !important;
    background-image: none !important;
  }

  body.ng-theme,
  body.ng-theme html,
  body.ng-theme main,
  body.ng-theme section,
  body.ng-theme .bg-white,
  body.ng-theme .bg-white-override {
    background-color: #ffffff !important;
  }

  /* Sticky header */
  body.ng-theme header.bg-white-override {
    background-color: rgba(255, 255, 255, 0.92) !important;
  }

  body.ng-theme section.bg-light-override,
  body.ng-theme div.bg-light-override,
  body.ng-theme .panel-bg-light-override {
    background-color: ${theme.bgLight} !important;
  }

  body.ng-theme .panel-bg-override {
    background-color: #ffffff !important;
  }

  body.ng-theme footer.footer-override,
  body.ng-theme footer.footer-override div,
  body.ng-theme footer.footer-override section {
    background-color: ${theme.navy} !important;
  }

  body.ng-theme hr,
  body.ng-theme .border,
  body.ng-theme .border-t,
  body.ng-theme .border-b,
  body.ng-theme .border-l,
  body.ng-theme .border-r,
  body.ng-theme .border-override {
    border-color: ${theme.border} !important;
  }

  body.ng-theme h1,
  body.ng-theme h2,
  body.ng-theme h3,
  body.ng-theme h4,
  body.ng-theme h5,
  body.ng-theme h6,
  body.ng-theme .text-navy-override {
    color: ${theme.navy} !important;
  }

  body.ng-theme p,
  body.ng-theme span,
  body.ng-theme li,
  body.ng-theme a,
  body.ng-theme label,
  body.ng-theme time {
    color: ${theme.navy} !important;
  }

  /* Gold accent text & badges */
  body.ng-theme .text-gold-override {
    color: ${theme.gold} !important;
  }

  body.ng-theme .text-muted-override,
  body.ng-theme .text-light-override {
    color: ${theme.textMuted} !important;
  }

  body.ng-theme .bg-gold-override {
    background-color: ${theme.gold} !important;
  }

  body.ng-theme .bg-navy-override {
    background-color: ${theme.navy} !important;
  }

  /* Footer keeps white text against its navy background */
  body.ng-theme .text-white-override,
  body.ng-theme footer.footer-override *,
  body.ng-theme footer.footer-override p,
  body.ng-theme footer.footer-override span,
  body.ng-theme footer.footer-override a,
  body.ng-theme footer.footer-override h4 {
    color: #ffffff !important;
  }

  /* Header nav links */
  body.ng-theme header a { color: ${theme.navy} !important; position: relative; }
  body.ng-theme header a:hover { color: ${theme.gold} !important; }
  body.ng-theme header nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background-color: ${theme.gold};
    transition: width 0.3s ease;
  }
  body.ng-theme header nav a:hover::after {
    width: 100%;
  }

  /* Buttons with vibrant hover effects */
  body.ng-theme .btn-primary-override {
    background-color: ${theme.navy} !important;
    color: #ffffff !important;
    border: 1.5px solid ${theme.navy} !important;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.3, 1) !important;
  }
  body.ng-theme .btn-primary-override:hover {
    background-color: ${theme.gold} !important;
    border-color: ${theme.gold} !important;
    color: #ffffff !important;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 24px -6px rgba(197, 160, 89, 0.45);
  }

  body.ng-theme .btn-outline-override {
    background-color: transparent !important;
    color: ${theme.navy} !important;
    border: 1.5px solid ${theme.navy} !important;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.3, 1) !important;
  }
  body.ng-theme .btn-outline-override:hover {
    background-color: ${theme.navy} !important;
    color: #ffffff !important;
    border-color: ${theme.navy} !important;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 24px -6px rgba(27, 54, 93, 0.35);
  }

  body.ng-theme .faq-panel-open {
    background-color: ${theme.bgLight} !important;
  }

  body.ng-theme .stats-icon-wrapper {
    background-color: rgba(27, 54, 93, 0.08) !important;
    border: 1px solid rgba(197, 160, 89, 0.3) !important;
  }

  /* Service cards hover effects */
  body.ng-theme .service-card-hover {
    transition: all 0.35s cubic-bezier(0.2, 0.8, 0.3, 1) !important;
  }
  body.ng-theme .service-card-hover:hover {
    background-color: ${theme.navy} !important;
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(27, 54, 93, 0.16);
    border-color: ${theme.gold} !important;
  }
  body.ng-theme .service-card-hover:hover .service-card-title,
  body.ng-theme .service-card-hover:hover .service-card-desc {
    color: #ffffff !important;
  }

  /* Industry cards hover effects */
  body.ng-theme .industry-card-hover {
    transition: all 0.3s ease !important;
  }
  body.ng-theme .industry-card-hover:hover {
    background-color: ${theme.navy} !important;
    border-color: ${theme.gold} !important;
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 12px 24px rgba(27, 54, 93, 0.14);
  }
  body.ng-theme .industry-card-hover:hover .industry-card-label {
    color: #ffffff !important;
  }
  body.ng-theme .industry-card-hover:hover .industry-card-iconwrap {
    background-color: rgba(197, 160, 89, 0.2) !important;
    border-color: ${theme.gold} !important;
  }

  /* Contact form inputs */
  body.ng-theme .contact-input {
    background-color: #F5F7FA !important;
    border-color: ${theme.border} !important;
    color: ${theme.navy} !important;
  }
  body.ng-theme .contact-input::placeholder {
    color: ${theme.textLight};
  }
  body.ng-theme .contact-input:focus {
    border-color: ${theme.gold} !important;
    background-color: #ffffff !important;
    box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.2);
  }
`;

export default function NationalGuardPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Set this to an image path/URL to give the header its own background image.
  // Leave as "" to keep the plain white header.
  const headerBgImage = ""; // e.g. "/national-guard-header-bg.png"

  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "ng-theme");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = theme.navy;
    return () => {
      document.body.classList.remove("roys-roys-theme", "ng-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? -1 : index);

  return (
    <div className="roys-roys-theme ng-theme min-h-screen font-sans selection:bg-[#1B365D] selection:text-white" style={{ backgroundColor: "#ffffff" }}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md shadow-sm bg-white-override border-override ${headerBgImage ? "header-with-bg" : ""}`}
        style={{
          borderColor: theme.border,
          ...(headerBgImage ? { "--header-bg-image": `url(${headerBgImage})` } : {}),
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-105 border-override"
              style={{ borderColor: theme.navy, backgroundColor: theme.bgLight }}
            >
              <Shield size={20} style={{ color: theme.navy }} fill={theme.navy} />
            </div>
            <div className="leading-tight">
              <p className="text-[14px] md:text-[15px] font-black tracking-wide uppercase text-navy-override">
                NATIONAL GUARD
              </p>
              <p className="text-[7.5px] md:text-[8.5px] font-bold tracking-[0.25em] text-navy-override">
                SECURITY SERVICES
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href, hasDropdown }) => (
              <a
                key={label}
                href={href}
                className="text-[12px] font-black uppercase tracking-wider transition-colors"
              >
                <span className="flex items-center gap-1">
                  {label}
                  {hasDropdown && <ChevronDown size={13} style={{ color: theme.navy }} />}
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-3 rounded-md text-[11.5px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] btn-primary-override"
          >
            Request Security Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative py-24 lg:py-36 px-6 overflow-hidden flex items-center min-h-[85vh] bg-white-override">
        <div className="absolute inset-0 z-0">
          <Image
            src="/national-guard-hero-bg.png"
            alt="Security Command Center"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-160"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.55) 100%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-5 uppercase tracking-tight text-navy-override">
              <span className="block mb-1">Trusted Security &amp;</span>
              <span className="block text-navy-override">Protection Services</span>
            </h1>
            <p className="text-[15px] md:text-[17px] font-bold mb-6 text-navy-override">
              Professional Security Solutions for Every Environment
            </p>
            <p className="text-[13px] md:text-[14.5px] leading-relaxed mb-9 text-navy-override max-w-xl">
              National Guard delivers reliable security management, manned guarding, surveillance, risk assessment,
              and integrated facility protection services. Our highly trained security professionals safeguard
              businesses, residential communities, government facilities, industrial sites, and critical
              infrastructure with unwavering commitment and operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 btn-primary-override">
                Request Security Consultation
              </a>
              <a href="#services" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 btn-outline-override">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-24 px-6 border-b bg-white-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-auto rounded-xl overflow-hidden shadow-lg border border-override animate-fade-in-up">
              <Image
                src="/national-guard-about.png"
                alt="Corporate Security Guard"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-12 rounded-xl border shadow-sm bg-light-override border-override">
              <SectionLabel>About Us</SectionLabel>
              <SectionHeading className="sm:text-3xl mb-6">Your Trusted Security Partner</SectionHeading>
              <p className="text-[13px] md:text-[14px] leading-relaxed mb-6 text-navy-override">
                National Guard is a professional security services provider committed to protecting people, property,
                and assets through highly trained personnel, advanced surveillance technologies, and proactive risk
                management strategies.
              </p>
              <p className="text-[13px] md:text-[14px] leading-relaxed text-navy-override">
                With years of industry experience, we provide customized security solutions designed to meet the unique
                operational requirements of corporate organizations, government institutions, commercial facilities,
                healthcare centers, educational campuses, residential communities, and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-6 border-b bg-light-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <StatsCounterSection items={stats} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-24 px-6 border-b bg-white-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Security Services</SectionLabel>
            <SectionHeading className="sm:text-3xl">Comprehensive Protection, Built Around You</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 px-6 border-b bg-light-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel>Industries We Protect</SectionLabel>
            <SectionHeading className="tracking-wider">Reliable Coverage Across Industries</SectionHeading>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.label} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose + Process */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-8 rounded-xl border h-full shadow-sm bg-light-override border-override">
              <SectionLabel>Why Choose Us</SectionLabel>
              <SectionHeading className="mb-6">Why Choose National Guard</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mt-2">
                {whyChooseReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: theme.navy }} />
                    <span className="text-[11.5px] font-bold leading-tight text-navy-override">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-xl border h-full shadow-sm bg-light-override border-override">
              <SectionLabel>Our Security Process</SectionLabel>
              <SectionHeading className="mb-8">A Step-by-Step Security Blueprint</SectionHeading>
              <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-6 mt-4 relative z-10 w-full">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={step.step}
                    {...step}
                    isLast={index === processSteps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech + Commitment */}
      <section className="py-20 lg:py-24 px-6 border-b bg-light-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 p-8 lg:p-10 rounded-xl border flex flex-col justify-between shadow-sm panel-bg-override bg-white-override">
              <div>
                <SectionLabel>Technology &amp; Capabilities</SectionLabel>
                <SectionHeading className="mb-4">Smarter Security Systems</SectionHeading>
                <p className="text-[13px] leading-relaxed mb-8 max-w-md text-navy-override">
                  We combine experienced security personnel with modern technologies to deliver smarter, faster, and
                  more reliable protection services.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techCapabilities.map((tech) => (
                  <TechCard key={tech.label} {...tech} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 lg:p-10 rounded-xl border flex flex-col justify-between shadow-sm panel-bg-override bg-white-override">
              <div>
                <SectionLabel>Our Commitment</SectionLabel>
                <SectionHeading className="mb-4">Safeguarding What Matters Most</SectionHeading>
                <p className="text-[13px] leading-relaxed mb-6 text-navy-override font-medium">
                  We are dedicated to maintaining the highest standards of professionalism, integrity, and operational
                  excellence. Every security solution is designed to minimize risks, protect valuable assets, and
                  provide complete peace of mind for our clients.
                </p>
              </div>
              <div className="relative w-full h-[190px] rounded-lg overflow-hidden border shadow-sm border-override">
                <Image
                  src="/national-guard-team.png"
                  alt="Security Guard Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials + FAQ */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white-override border-override">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-8 rounded-xl border shadow-sm bg-light-override border-override">
              <SectionLabel>Reviews</SectionLabel>
              <SectionHeading className="mb-6">Client Testimonials</SectionHeading>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-xl border shadow-sm bg-light-override border-override">
              <SectionLabel>Answers</SectionLabel>
              <SectionHeading className="mb-6">Frequently Asked Questions</SectionHeading>
              <div className="space-y-3 mt-4">
                {faqs.map(({ question, answer }, index) => (
                  <FaqItem
                    key={question}
                    question={question}
                    answer={answer}
                    isOpen={openFaqIndex === index}
                    onToggle={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20 lg:py-24 px-6 overflow-hidden bg-white-override">
        <div className="absolute inset-0 z-0">
          <Image
            src="/national-guard-cta-bg.png"
            alt="Security Officer on Patrol"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #ffffff 45%, rgba(255,255,255,0.9) 100%)" }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5 max-w-xl">
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4 tracking-tight leading-snug text-navy-override">
                Secure Your Business With Confidence
              </h2>
              <p className="text-[13px] md:text-[14px] leading-relaxed text-navy-override mb-8">
                Protect your people, property, and operations with professional security services tailored to your
                needs. Partner with National Guard for dependable protection, rapid response, and complete peace of
                mind.
              </p>
              <div className="space-y-4">
                <p className="text-[12.5px] font-bold flex items-start gap-2.5 text-navy-override">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: theme.navy }} />
                  123 Security Avenue, Safe City, 12345
                </p>
                <p className="text-[12.5px] font-bold flex items-center gap-2.5 text-navy-override">
                  <Phone size={15} className="flex-shrink-0" style={{ color: theme.navy }} />
                  +1 (123) 456-7890
                </p>
                <p className="text-[12.5px] font-bold flex items-center gap-2.5 text-navy-override">
                  <Mail size={15} className="flex-shrink-0" style={{ color: theme.navy }} />
                  info@nationalguard.com
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-7 sm:p-9 rounded-xl border shadow-sm bg-light-override border-override">
              <SectionLabel>Contact Us</SectionLabel>
              <SectionHeading className="mb-6">Request a Free Security Assessment</SectionHeading>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6 footer-override">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-4 justify-self-start">
            <Link href="#home" className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border"
                style={{ borderColor: "#ffffff", backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <Shield size={20} style={{ color: "#ffffff" }} fill="#ffffff" />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-black text-white tracking-wide uppercase">NATIONAL GUARD</p>
                <p className="text-[7.5px] font-bold tracking-[0.25em]" style={{ color: "#ffffff" }}>
                  SECURITY SERVICES
                </p>
              </div>
            </Link>
            <p className="text-[12px] leading-relaxed mb-6">
              Delivering trusted security and protection services to safeguard people, property, and operations around
              the clock.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/5 transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon size={13} style={{ color: "#ffffff" }} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#ffffff" }}>
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-[12px] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: "#ffffff" }}>
              Contact
            </h4>
            <div className="space-y-4">
              <p className="text-[12px] flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#ffffff" }} />
                <span>123 Security Avenue, Safe City, 12345</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0" style={{ color: "#ffffff" }} />
                <span>+1 (123) 456-7890</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5 font-medium">
                <Mail size={14} className="flex-shrink-0" style={{ color: "#ffffff" }} />
                <span>info@nationalguard.com</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:justify-end items-start">
            <div
              className="flex flex-col items-center gap-2 p-5 rounded-lg border bg-white/5 w-full text-center"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <ShieldCheck size={28} style={{ color: "#ffffff" }} />
              <p className="text-xl font-black leading-none">24/7</p>
              <p className="text-[9px] font-bold uppercase tracking-wider">Security Operations</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl mt-12 pt-6 text-center border-t border-white/10">
          <p className="text-[11px]">&copy; {new Date().getFullYear()} National Guard. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
