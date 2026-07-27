"use client";

import { useState, useEffect, useRef } from "react";
// Image handling removed — using placeholders so you can add images later
import {
  Activity, BarChart3, Building, Building2, Camera, CheckCircle2,
  ChevronDown, ClipboardList, Cloud, Cpu,
  Facebook, FileSearch, Flame, Fingerprint, Globe2, Handshake, Landmark,
  Layers, Linkedin, Mail, MapPin, MessageCircle, Network, Phone, Plane, Plus, Minus,
  Radar, Radio, Satellite, ScanFace, Send, Server, Shield, ShieldCheck, Ship,
  Star, Twitter, UserCog, Wifi, Wrench, Youtube, Zap,
} from "lucide-react";

const theme = {
  bg:           "#FFFFFF",
  panel:        "#F6F8FB",
  panelAlt:     "#EEF2F8",
  navyDark:     "#081B33",
  navy:         "#0B2545",
  navySoft:     "#1E3A5F",
  gold:         "#A9812F",
  goldSoft:     "#C9A24B",
  white:        "#FFFFFF",
  textMuted:    "#45566E",
  textFaint:    "#7A8AA0",
  border:       "rgba(11,37,69,0.14)",
  borderSoft:   "rgba(11,37,69,0.08)",
  borderStrong: "rgba(11,37,69,0.25)",
};

// Every translucent overlay in this file is generated from the hex values in
// `theme` above via this helper, instead of being a separate hard-coded rgba()
// string. Change a hex value in `theme` and every tint/shade of it updates too.
function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Solutions",  href: "#solutions", hasDropdown: true },
  { label: "Industries", href: "#industries" },
  { label: "Projects",   href: "#projects" },
  { label: "Careers",    href: "#careers" },
  { label: "Contact",    href: "#contact" },
];

const stats = [
  { icon: Star,        value: "15+",   label: "Years\nExperience" },
  { icon: Layers,      value: "250+",  label: "Projects\nCompleted" },
  { icon: Handshake,   value: "50+",   label: "Technology\nPartners" },
  { icon: Globe2,      value: "20+",   label: "Countries\nServed" },
  { icon: ShieldCheck, value: "99.9%", label: "System\nReliability" },
];

const solutions = [
  { icon: Camera,       title: "Surveillance Systems",       desc: "AI-powered CCTV, thermal imaging, long-range cameras, and intelligent video analytics." },
  { icon: Landmark,     title: "Border Security",            desc: "Integrated border surveillance, intrusion detection, radar systems, and monitoring platforms." },
  { icon: Server,       title: "Command & Control Centers",  desc: "Real-time monitoring, data visualization, emergency response, and operational intelligence." },
  { icon: Fingerprint,  title: "Access Control",              desc: "Biometric authentication, smart identity management, vehicle access systems, and visitor management." },
  { icon: Shield,       title: "Perimeter Protection",        desc: "Fence detection, fiber optic sensors, microwave barriers, smart alarms, and intrusion prevention." },
  { icon: Network,      title: "Cyber Defense",               desc: "Network security, threat intelligence, incident response, digital infrastructure protection, and cyber resilience." },
];

const industries = [
  { icon: ShieldCheck, label: "Military &\nArmed Forces" },
  { icon: Landmark,    label: "Government\nOrganizations" },
  { icon: MapPin,      label: "Border\nSecurity" },
  { icon: Plane,       label: "Airports" },
  { icon: Ship,        label: "Seaports" },
  { icon: Flame,       label: "Oil & Gas" },
  { icon: Zap,         label: "Power\nPlants" },
  { icon: Building2,   label: "Smart\nCities" },
  { icon: Server,      label: "Data\nCenters" },
  { icon: Network,     label: "Critical\nInfrastructure" },
  { icon: Building,    label: "Transportation" },
  { icon: Wrench,      label: "Defense\nManufacturing" },
];

const whyChooseReasons = [
  "Advanced AI Security Technologies",
  "Global Technology Partners",
  "End-to-End Defense Solutions",
  "Secure System Integration",
  "Certified Engineering Team",
  "International Quality Standards",
  "24/7 Technical Support",
  "Customized Defense Solutions",
];

const techExpertise = [
  { icon: Cpu,        label: "Artificial\nIntelligence" },
  { icon: ScanFace,   label: "Computer\nVision" },
  { icon: Satellite,  label: "Thermal\nImaging" },
  { icon: Radar,      label: "Radar\nIntegration" },
  { icon: Radio,      label: "Drone\nSurveillance" },
  { icon: Wifi,       label: "IoT\nSecurity" },
  { icon: Cloud,      label: "Edge\nComputing" },
  { icon: Activity,   label: "Cloud\nMonitoring" },
  { icon: MapPin,     label: "GIS\nMapping" },
  { icon: BarChart3,  label: "Data\nAnalytics" },
];

const featuredSolutions = [
  { title: "Intelligent Surveillance Platform",   desc: "Real-time AI video analytics with facial recognition, object detection, and behavioral monitoring." },
  { title: "Integrated Command Center",           desc: "Centralized monitoring platform for defense operations and emergency response." },
  { title: "Smart Border Monitoring",             desc: "Long-range surveillance with automated threat detection and rapid incident management." },
  { title: "Critical Infrastructure Protection",  desc: "Complete security architecture for power plants, airports, ports, and government facilities." },
];

const processSteps = [
  { step: "01", icon: FileSearch,    title: "Security\nAssessment" },
  { step: "02", icon: ClipboardList, title: "Solution\nDesign" },
  { step: "03", icon: Cpu,           title: "System\nEngineering" },
  { step: "04", icon: Server,        title: "Deployment &\nIntegration" },
  { step: "05", icon: UserCog,       title: "Training &\nMaintenance" },
];

const partners = ["HIKVISION", "AXIS", "HUAWEI", "THALES", "LOCKHEED MARTIN", "leidos", "Palantir"];

const testimonials = [
  {
    name: "Government Security Authority",
    quote: "Alpha Matrix Defence Systems delivered an exceptional integrated surveillance solution that significantly enhanced our operational security.",
  },
  {
    name: "Infrastructure Operations Director",
    quote: "Professional engineering, reliable technology, and outstanding technical support throughout the project lifecycle.",
  },
];

const faqs = [
  { question: "What industries do you serve?", answer: "We serve government, military, border security, airports, seaports, energy, smart cities, and critical infrastructure operators worldwide." },
  { question: "Do you provide customized security solutions?", answer: "Yes, every deployment is engineered around your site's operational requirements, threat profile, and existing infrastructure." },
  { question: "Do you offer installation and maintenance?", answer: "We provide full lifecycle support, from installation and system engineering to 24/7 monitoring and ongoing maintenance." },
  { question: "Can your systems integrate with existing infrastructure?", answer: "Absolutely. Our platforms are built for interoperability with existing command, surveillance, and access control systems." },
];

const footerLinks = {
  "Quick Links": ["Home", "About", "Solutions", "Industries", "Projects", "Careers", "Contact"],
  Solutions: ["Surveillance Systems", "Border Security", "Cyber Defense", "Command & Control", "Perimeter Protection", "Access Control"],
};

const socialIcons = [Linkedin, Facebook, Twitter, Youtube];

const contactInfo = {
  address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

// ---------- Reusable pieces ----------

function SectionLabel({ children, center }) {
  return (
    <p className={`text-[11px] font-black uppercase tracking-[0.3em] mb-3 ${center ? "text-center" : ""}`} style={{ color: theme.gold }}>
      {children}
    </p>
  );
}

function SectionHeading({ children, className = "", center }) {
  return (
    <h2 className={`text-2xl font-black uppercase tracking-tight ${center ? "text-center" : ""} ${className}`} style={{ color: theme.navy }}>
      {children}
    </h2>
  );
}

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedCounter({ value, duration = 1800 }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const match = value.match(/^([\d]+(?:\.[\d]+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const prefix = match ? value.slice(0, value.indexOf(match[1])) : "";
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((target * eased).toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ icon: Icon, value, label }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col items-center text-center gap-2 p-5 rounded-lg border transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/60 hover:shadow-lg`}
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: hexToRgba(theme.gold, 0.1), border: `1px solid ${theme.border}` }}>
        <Icon size={18} style={{ color: theme.gold }} />
      </div>
      <p className="text-lg md:text-xl font-black tabular-nums" style={{ color: theme.navy }}>
        <AnimatedCounter value={value} />
      </p>
      <p className="text-[9px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textFaint }}>{label}</p>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/60`}
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div className="w-11 h-11 rounded-md flex items-center justify-center mb-5 border transition-all duration-300 group-hover:bg-[#A9812F]/15 group-hover:scale-110 group-hover:border-amber-500/50" style={{ borderColor: theme.border }}>
        <Icon size={18} style={{ color: theme.gold }} />
      </div>
      <h3 className="text-[13px] font-black uppercase tracking-wide mb-2.5 transition-colors duration-300 group-hover:text-amber-600" style={{ color: theme.navy }}>{title}</h3>
      <p className="text-[11.5px] leading-relaxed" style={{ color: theme.textMuted }}>{desc}</p>
    </div>
  );
}

function IndustryCard({ icon: Icon, label }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1 hover:scale-105 hover:shadow-md`}
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3 border transition-all duration-300 group-hover:bg-[#A9812F]/15 group-hover:scale-110" style={{ borderColor: theme.border }}>
        <Icon size={17} style={{ color: theme.gold }} />
      </div>
      <p className="text-[9.5px] font-bold leading-snug uppercase tracking-wide whitespace-pre-line" style={{ color: theme.navy }}>{label}</p>
    </div>
  );
}

function TechCard({ icon: Icon, label }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group flex flex-col items-center justify-center p-4 rounded-lg border text-center transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-md`}
      style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 transition-all duration-300 group-hover:bg-[#A9812F]/20 group-hover:scale-110" style={{ borderColor: theme.border, backgroundColor: theme.panel }}>
        <Icon size={15} style={{ color: theme.gold }} />
      </div>
      <span className="text-[9.5px] font-bold leading-tight uppercase tracking-wider whitespace-pre-line" style={{ color: theme.navy }}>{label}</span>
    </div>
  );
}

function FeaturedCard({ title, desc }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group rounded-lg border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/50`}
      style={{ backgroundColor: theme.panel, borderColor: theme.border }}
    >
      <div className="relative w-full h-36 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${hexToRgba(theme.navy, 0.06)}, ${hexToRgba(theme.navy, 0.12)})` }}>
        <span className="text-[13px] font-black transition-transform duration-500 group-hover:scale-110" style={{ color: theme.textFaint }}>Image Placeholder</span>
      </div>
      <div className="p-5">
        <h3 className="text-[12.5px] font-black uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-amber-600" style={{ color: theme.navy }}>{title}</h3>
        <p className="text-[11px] leading-relaxed" style={{ color: theme.textMuted }}>{desc}</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, icon: Icon, title, isLast }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} flex flex-col items-center text-center relative flex-1 min-w-[100px] group`}>
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] border-t-2 border-dashed z-0 transition-colors group-hover:border-amber-500/60" style={{ borderColor: theme.border }} />
      )}
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-amber-500 group-hover:scale-110 group-hover:shadow-md z-10" style={{ borderColor: theme.border, backgroundColor: theme.bg }}>
        <Icon size={18} style={{ color: theme.gold }} />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center border shadow-sm" style={{ borderColor: theme.border, backgroundColor: theme.gold, color: theme.white }}>
          {step}
        </div>
      </div>
      <p className="text-[10px] font-bold leading-tight uppercase tracking-wider mt-4 whitespace-pre-line" style={{ color: theme.navy }}>{title}</p>
    </div>
  );
}

function TestimonialCard({ name, quote }) {
  return (
    <div className="p-5 rounded-lg border" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={11} fill={theme.gold} style={{ color: theme.gold }} />)}
      </div>
      <p className="text-[12px] leading-relaxed italic mb-4 font-medium" style={{ color: theme.textMuted }}>&ldquo;{quote}&rdquo;</p>
      <p className="text-[11.5px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>{name}</p>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-lg border overflow-hidden transition-all duration-300" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group transition-all duration-200">
        <span className="text-[12.5px] font-bold tracking-wide transition-colors group-hover:text-amber-600" style={{ color: theme.navy }}>{question}</span>
        <div className="w-6 h-6 rounded-full flex items-center justify-center border transition-all flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: theme.panel }}>
          {isOpen ? <Minus size={12} style={{ color: theme.gold }} /> : <Plus size={12} style={{ color: theme.gold }} />}
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 border-t" : "max-h-0"}`} style={{ borderColor: theme.border }}>
        <p className="p-5 text-[12px] leading-relaxed" style={{ color: theme.textMuted }}>{answer}</p>
      </div>
    </div>
  );
}

// ---------- Contact form ----------

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (title) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    // NOTE: no backend is wired up yet. Hook this up to your API route,
    // email service (e.g. Resend, Formspree) or CRM to actually send the lead.
    console.log("Contact form submission:", { ...form, services: selectedServices });
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setSelectedServices([]);
    setSubmitted(false);
  };

  const inputStyle = {
    backgroundColor: theme.white,
    borderColor: theme.border,
    color: theme.navy,
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl border flex flex-col items-center text-center gap-4" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: hexToRgba(theme.gold, 0.12) }}>
          <CheckCircle2 size={26} style={{ color: theme.gold }} />
        </div>
        <h3 className="text-[15px] font-black uppercase tracking-wide" style={{ color: theme.navy }}>Request Received</h3>
        <p className="text-[12.5px] leading-relaxed max-w-sm" style={{ color: theme.textMuted }}>
          Thank you, {form.name.split(" ")[0] || "there"}. Our team will review your requirements and get back to you shortly.
        </p>
        <button onClick={resetForm} className="mt-2 px-5 py-3 rounded-md text-[11px] font-black uppercase tracking-wider border transition-all" style={{ borderColor: theme.gold, color: theme.gold }}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
      <SectionLabel>Get In Touch</SectionLabel>
      <SectionHeading className="mb-6">Request A Consultation</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-amber-500"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-amber-500"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+1 (800) 123-4567"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-amber-500"
            style={inputStyle}
          />
        </div>
        <div>
          <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Organization</label>
          <input
            type="text" name="company" value={form.company} onChange={handleChange}
            placeholder="Organization / Agency"
            className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all focus:border-amber-500"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="text-[10.5px] font-black uppercase tracking-wider mb-2.5 block" style={{ color: theme.textFaint }}>
          Services You're Interested In
        </label>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {solutions.map((s) => {
            const active = selectedServices.includes(s.title);
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => toggleService(s.title)}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-md border text-left transition-all duration-200"
                style={{
                  borderColor: active ? theme.gold : theme.border,
                  backgroundColor: active ? hexToRgba(theme.gold, 0.08) : theme.white,
                }}
              >
                <div
                  className="w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: active ? theme.gold : theme.border, backgroundColor: active ? theme.gold : "transparent" }}
                >
                  {active && <CheckCircle2 size={12} style={{ color: theme.white }} />}
                </div>
                <span className="text-[11px] font-bold leading-tight" style={{ color: theme.navy }}>{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5">
        <label className="text-[10.5px] font-black uppercase tracking-wider mb-2 block" style={{ color: theme.textFaint }}>Project Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your site, threat profile, and operational requirements..."
          className="w-full px-4 py-3 rounded-md border text-[12.5px] outline-none transition-all resize-none focus:border-amber-500"
          style={inputStyle}
        />
      </div>

      {error && <p className="text-[11.5px] font-bold mb-4" style={{ color: "#B3261E" }}>{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
        style={{ backgroundColor: theme.gold, color: theme.white }}
      >
        Submit Request <Send size={14} />
      </button>
    </form>
  );
}

// ---------- Page ----------

export default function AlphaMatrixPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.navy;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? -1 : index);

  return (
    <div className="min-h-screen font-sans selection:bg-amber-600 selection:text-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      {/* Forces every page background/text back to the theme object above,
          so an external globals.css (or a browser/OS "dark mode" that
          auto-inverts light sites) can never repaint this page black. */}
      <style>{`
        html, body {
          background-color: ${theme.bg} !important;
          color: ${theme.navy} !important;
          color-scheme: light !important;
        }
      `}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-md shadow-sm" style={{ backgroundColor: hexToRgba(theme.white, 0.92), borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md flex items-center justify-center border transition-all duration-300 group-hover:scale-105" style={{ borderColor: theme.gold, backgroundColor: theme.panel }}>
              <Shield size={20} style={{ color: theme.gold }} fill="none" strokeWidth={1.75} />
            </div>
            <div className="leading-tight">
              <p className="text-[14px] md:text-[15px] font-black tracking-wide uppercase" style={{ color: theme.navy }}>ALPHA MATRIX</p>
              <p className="text-[7.5px] md:text-[8.5px] font-bold tracking-[0.28em]" style={{ color: theme.gold }}>DEFENCE SYSTEMS</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href, hasDropdown }) => (
              <a key={label} href={href} className="text-[12px] font-black uppercase tracking-wider transition-colors hover:text-amber-600" style={{ color: theme.textMuted }}>
                <span className="flex items-center gap-1">
                  {label}
                  {hasDropdown && <ChevronDown size={13} style={{ color: theme.gold }} />}
                </span>
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex px-5 py-3 rounded-md text-[11px] font-black uppercase tracking-wider transition-all duration-300 active:scale-[0.98] border" style={{ borderColor: theme.gold, color: theme.gold, backgroundColor: "transparent" }}>
            Request Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative py-24 lg:py-32 px-6 overflow-hidden flex items-center min-h-[85vh]" style={{ backgroundColor: theme.bg, color: theme.navy }}>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ background: `linear-gradient(180deg, ${hexToRgba(theme.white, 0.98)}, ${hexToRgba(theme.panelAlt, 0.9)})` }}>
            <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(to right, ${hexToRgba(theme.white, 0.97)} 30%, ${hexToRgba(theme.panelAlt, 0.75)} 100%)` }} />
          </div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${hexToRgba(theme.panelAlt, 0.6)}, transparent 40%)` }} />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl w-full">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: theme.gold }}>Defense &amp; Security Technology</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-5 uppercase tracking-tight" style={{ color: theme.navy }}>
              <span className="block mb-1">Advanced Defense &amp;</span>
              <span className="block mb-1">Security Solutions For</span>
              <span className="block" style={{ color: theme.gold }}>Mission-Critical Infrastructure</span>
            </h1>
            <p className="text-[13px] md:text-[14.5px] leading-relaxed mb-9 max-w-xl" style={{ color: theme.textMuted }}>
              Delivering innovative surveillance, perimeter protection, command &amp; control, and integrated
              defense technologies that safeguard governments, military organizations, critical infrastructure,
              and commercial facilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300" style={{ backgroundColor: theme.gold, color: theme.white }}>
                Explore Solutions
              </a>
              <a href="#contact" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all duration-300 border" style={{ borderColor: theme.borderStrong, color: theme.navy }}>
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-auto rounded-xl overflow-hidden border" style={{ borderColor: theme.border }}>
              <div className="w-full h-full absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${hexToRgba(theme.navy, 0.06)}, ${hexToRgba(theme.navy, 0.14)})`, color: theme.textFaint }}>
                Company Image Placeholder
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-12 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>About Company</SectionLabel>
              <SectionHeading className="sm:text-3xl mb-6">Engineering Security.<br />Protecting Nations.</SectionHeading>
              <p className="text-[13px] md:text-[14px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Alpha Matrix Defence Systems is a leading defense and security technology company specializing in
                advanced surveillance systems, integrated security infrastructure, border protection, command &amp;
                control platforms, cybersecurity solutions, and intelligent defense technologies.
              </p>
              <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textFaint }}>
                We work closely with government agencies, military organizations, law enforcement, airports, ports,
                energy sectors, smart cities, and critical infrastructure operators to provide secure, scalable, and
                future-ready defense solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {stats.map((stat) => <StatCard key={stat.value} {...stat} />)}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section id="solutions" className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel center>Our Core Solutions</SectionLabel>
            <SectionHeading center>Comprehensive Defense &amp; Security Technology</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {solutions.map((s) => <SolutionCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Industries We Serve</SectionLabel>
            <SectionHeading center className="tracking-wider">Trusted Across Critical Sectors</SectionHeading>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {industries.map((industry) => <IndustryCard key={industry.label} {...industry} />)}
          </div>
        </div>
      </section>

      {/* Why Choose + Technology Expertise */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-8 rounded-xl border h-full" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Why Choose Us</SectionLabel>
              <SectionHeading className="mb-6">Why Choose Alpha Matrix Defence Systems</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mt-2">
                {whyChooseReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                    <span className="text-[11.5px] font-bold leading-tight" style={{ color: theme.textMuted }}>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-xl border h-full" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Technology Expertise</SectionLabel>
              <SectionHeading className="mb-3">Next-Generation Security Ecosystems</SectionHeading>
              <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                We leverage next-generation technologies to build intelligent security ecosystems.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {techExpertise.map((tech) => <TechCard key={tech.label} {...tech} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section id="projects" className="py-20 lg:py-24 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel center>Featured Solutions</SectionLabel>
            <SectionHeading center>Deployed Systems, Real-World Results</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredSolutions.map((f) => <FeaturedCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <SectionLabel center>Our Process</SectionLabel>
            <SectionHeading center>From Assessment to Long-Term Support</SectionHeading>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-6 relative z-10 w-full">
            {processSteps.map((step, index) => <ProcessStep key={step.step} {...step} isLast={index === processSteps.length - 1} />)}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 px-6 border-b" style={{ backgroundColor: theme.panelAlt, borderColor: theme.border, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionLabel center>Our Partners</SectionLabel>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-6">
            {partners.map((p) => (
              <span key={p} className="text-[15px] md:text-[17px] font-black uppercase tracking-wider" style={{ color: theme.textFaint }}>{p}</span>
            ))}
          </div>
          <p className="text-[11.5px] mt-8" style={{ color: theme.textFaint }}>
            Trusted by governments, defense organizations, security agencies, infrastructure operators, and global technology partners.
          </p>
        </div>
      </section>

      {/* Testimonials + FAQ */}
      <section className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-8 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>Reviews</SectionLabel>
              <SectionHeading className="mb-6">Client Testimonials</SectionHeading>
              <div className="space-y-4">
                {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-xl border" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
              <SectionLabel>FAQ</SectionLabel>
              <SectionHeading className="mb-6">Frequently Asked Questions</SectionHeading>
              <div className="space-y-3 mt-4">
                {faqs.map(({ question, answer }, index) => (
                  <FaqItem key={question} question={question} answer={answer} isOpen={openFaqIndex === index} onToggle={() => toggleFaq(index)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact intro banner */}
      <section className="relative py-16 px-6 overflow-hidden border-b" style={{ borderColor: theme.border, backgroundColor: theme.panelAlt, color: theme.navy }}>
        <div className="relative z-10 mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-8 items-center justify-between w-full">
          <div className="max-w-xl">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: theme.gold }}>
              Ready to Strengthen Your Security Infrastructure?
            </p>
            <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textMuted }}>
              Partner with Alpha Matrix Defence Systems for intelligent surveillance, integrated defense
              technologies, and mission-critical security solutions tailored to your operational needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full sm:w-auto">
            <a href="#contact" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider text-center flex-1 sm:flex-initial transition-all duration-300" style={{ backgroundColor: theme.gold, color: theme.white }}>
              Contact Us
            </a>
            <a href="#contact" className="px-6 py-4 rounded-md text-[12px] font-black uppercase tracking-wider text-center flex-1 sm:flex-initial transition-all duration-300 border" style={{ borderColor: theme.borderStrong, color: theme.navy }}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contact" className="py-20 lg:py-24 px-6 border-b" style={{ borderColor: theme.border, backgroundColor: theme.bg, color: theme.navy }}>
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 p-8 rounded-xl border h-full flex flex-col gap-6" style={{ backgroundColor: theme.navy, borderColor: theme.border }}>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-3" style={{ color: theme.goldSoft }}>Contact Information</p>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">Talk To Our Team</h3>
              <p className="text-[12.5px] leading-relaxed" style={{ color: hexToRgba(theme.white, 0.7) }}>
                Our engineering team responds to every consultation request within one business day.
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: theme.goldSoft }}>Our Office</p>
                <p className="text-[12.5px] flex items-start gap-3 text-white">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: theme.goldSoft }} />
                  <span>{contactInfo.address}</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: theme.goldSoft }}>Call Us</p>
                <p className="text-[12.5px] flex items-center gap-3 text-white mb-1.5">
                  <Phone size={16} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                  <span>Phone: {contactInfo.phone}</span>
                </p>
                {contactInfo.whatsapp.map((num) => (
                  <p key={num} className="text-[12.5px] flex items-center gap-3 text-white mb-1.5">
                    <MessageCircle size={16} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                    <span>WhatsApp: {num}</span>
                  </p>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: theme.goldSoft }}>Email Us</p>
                {contactInfo.emails.map((mail) => (
                  <p key={mail} className="text-[12.5px] flex items-center gap-3 text-white mb-1.5">
                    <Mail size={16} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                    <span>{mail}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4 border-t" style={{ borderColor: hexToRgba(theme.white, 0.12) }}>
              <div className="flex gap-3">
                {socialIcons.map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social media link" className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/10 transition-all duration-200" style={{ borderColor: hexToRgba(theme.white, 0.2) }}>
                    <Icon size={14} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6" style={{ backgroundColor: theme.navyDark }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-4 justify-self-start">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md flex items-center justify-center border" style={{ borderColor: theme.gold, backgroundColor: hexToRgba(theme.white, 0.03) }}>
                <Shield size={20} style={{ color: theme.goldSoft }} strokeWidth={1.75} />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-black text-white tracking-wide uppercase">ALPHA MATRIX</p>
                <p className="text-[7.5px] font-bold tracking-[0.28em]" style={{ color: theme.goldSoft }}>DEFENCE SYSTEMS</p>
              </div>
            </a>
            <p className="text-[12px] leading-relaxed mb-6" style={{ color: hexToRgba(theme.white, 0.55) }}>
              Engineering security, protecting nations. Advanced defense and surveillance technology for
              mission-critical infrastructure worldwide.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" aria-label="Social media link" className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/5 transition-all duration-200" style={{ borderColor: hexToRgba(theme.white, 0.15) }}>
                  <Icon size={13} style={{ color: "#ffffff" }} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme.goldSoft }}>{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`} className="text-[12px] transition-colors duration-200 hover:text-amber-400" style={{ color: hexToRgba(theme.white, 0.55) }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-5" style={{ color: theme.goldSoft }}>Contact</h4>
            <div className="space-y-3.5">
              <p className="text-[12px] flex items-start gap-2.5" style={{ color: hexToRgba(theme.white, 0.55) }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: theme.goldSoft }} />
                <span>{contactInfo.address}</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5" style={{ color: hexToRgba(theme.white, 0.55) }}>
                <Phone size={14} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                <span>{contactInfo.phone}</span>
              </p>
              {contactInfo.whatsapp.map((num) => (
                <p key={num} className="text-[12px] flex items-center gap-2.5" style={{ color: hexToRgba(theme.white, 0.55) }}>
                  <MessageCircle size={14} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                  <span>{num}</span>
                </p>
              ))}
              {contactInfo.emails.map((mail) => (
                <p key={mail} className="text-[12px] flex items-center gap-2.5 font-medium" style={{ color: hexToRgba(theme.white, 0.55) }}>
                  <Mail size={14} className="flex-shrink-0" style={{ color: theme.goldSoft }} />
                  <span>{mail}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:justify-end items-start">
            <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg border w-full h-full min-h-[150px] text-center" style={{ borderColor: hexToRgba(theme.white, 0.1), backgroundColor: hexToRgba(theme.white, 0.02) }}>
              <Globe2 size={26} style={{ color: theme.goldSoft }} />
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: hexToRgba(theme.white, 0.55) }}>Global Coverage</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl mt-12 pt-6 text-center border-t" style={{ borderColor: hexToRgba(theme.white, 0.08) }}>
          <p className="text-[11px]" style={{ color: hexToRgba(theme.white, 0.45) }}>
            &copy; {new Date().getFullYear()} Alpha Matrix Defence Systems. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}