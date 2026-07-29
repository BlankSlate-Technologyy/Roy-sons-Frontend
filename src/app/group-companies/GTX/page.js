"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight, Award, Zap, Battery, Truck, TrafficCone, Sun, Gauge, Users2,
  ShieldCheck, Cloud, Wifi, LineChart, MapPinned, MapPin, Phone, MessageCircle,
  Mail, Plus, Minus, Send, PlugZap, BatteryCharging, CheckCircle2, Search,
  ScanSearch, ClipboardList, Wrench, Hammer, Building2, Landmark, School,
  ShoppingBag, Factory, Fuel, Home as HomeIcon,
} from "lucide-react";

// ── Color System matching GTX German Technology Xpert Logo ──
const COLORS = {
  blue:         "#0F52BA", // Official GTX Racing/Tech Blue
  blueDark:     "#0B3D8A",
  blueSoft:     "#E6EEFA",
  red:          "#E52E2E", // Official GTX Racing Red Accent
  redHover:     "#C41E1E",
  charcoal:     "#202A36", // Official GTX Hexagon Charcoal Slate for text & dark panels
  charcoalDark: "#151C24",
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
  { title: "Smart City EV Network",       desc: "Deployment of intelligent EV charging infrastructure across urban areas.", image: "/project-infrastructure.png" },
  { title: "Commercial Charging Hub",     desc: "High-capacity charging solutions for commercial vehicle fleets.", image: "/project-industrial.png" },
  { title: "Solar Charging Station",      desc: "Renewable energy-powered EV charging infrastructure.", image: "/project-commercial.png" },
  { title: "Corporate Fleet Electrification", desc: "Complete electric mobility transition for enterprise fleets.", image: "/project-infrastructure.png" },
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
      className="rounded-[24px] border border-[#D6E2F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0F52BA]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#0F52BA] mb-2 tabular-nums">
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
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#E52E2E] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E52E2E]" />
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
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0F52BA] hover:bg-[#F4F7FA]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6EEFA] text-[#0F52BA] mb-6 transition-all duration-300 group-hover:bg-[#0F52BA] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#202A36] mb-3 transition-colors duration-300 group-hover:text-[#0F52BA]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3E4C5E]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E52E2E]">
      <div className="text-[#E52E2E] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#202A36] mb-3 transition-colors duration-300 group-hover:text-[#E52E2E]">{title}</h3>
      <p className="text-sm text-[#3E4C5E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D6E2F0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0F52BA]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F52BA] text-white font-black group-hover:bg-[#E52E2E] transition-all">{step}</div>
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
        <h4 className="text-base font-bold text-[#202A36] transition-colors group-hover:text-[#0F52BA]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6EEFA] flex items-center justify-center text-[#0F52BA] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#0F52BA] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E6EEFA]">
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
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E6EEFA] text-[#0F52BA] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#202A36] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3E4C5E] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our engineering team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0F52BA] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#E52E2E]"
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
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#0F52BA] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#0F52BA] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#0F52BA] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Solution Of Interest</label>
          <input
            type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="EV Infrastructure / Fleet / Solar"
            className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all focus:border-[#0F52BA] focus:bg-white"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3E4C5E] mb-2">Project Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your technical requirements..."
          className="w-full rounded-xl border border-[#D6E2F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#202A36] outline-none transition-all resize-none focus:border-[#0F52BA] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0F52BA] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#E52E2E] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Inquiry <Send size={15} />
      </button>
    </form>
  );
}

// ── Main Page Component ──
export default function GTXPage() {
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

  return (
    <main className="roys-roys-theme gtx-theme font-sans bg-white text-[#202A36] selection:bg-[#0F52BA] selection:text-white">
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

      <HeaderNavbar activeRoute="/group-companies" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F7FA] border-b border-[#D6E2F0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,82,186,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#B8D0F5] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#0F52BA] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E52E2E]" />
                {HERO.badge}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#202A36]">
                German Technology Xpert <span className="text-[#0F52BA]">(GTX)</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3E4C5E]">
                {HERO.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F52BA] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#E52E2E] hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F52BA] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0F52BA] transition-all duration-300 hover:bg-[#0F52BA] hover:text-white hover:scale-[1.02] active:scale-95"
                >
                  {HERO.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden border-2 border-[#D6E2F0] shadow-xl bg-white p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-24 h-24 rounded-3xl bg-[#E6EEFA] text-[#0F52BA] flex items-center justify-center mb-6 shadow-inner">
                <Zap size={48} />
              </div>
              <h3 className="text-2xl font-black text-[#0F52BA] tracking-wider uppercase">GERMAN TECHNOLOGY XPERT</h3>
              <p className="text-sm font-bold tracking-[0.3em] text-[#E52E2E] mt-1">— GTX —</p>
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
                className="group rounded-2xl border border-[#D6E2F0] bg-white p-5 text-sm font-semibold text-[#202A36] text-center transition-all duration-300 hover:border-[#0F52BA] hover:bg-[#0F52BA] hover:text-white hover:shadow-md"
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
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D6E2F0] bg-[#F4F7FA] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#0F52BA]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#202A36] group-hover:text-[#0F52BA] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3E4C5E] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4F7FA] px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Partners Say"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#0F52BA]">
                <p className="text-base italic leading-relaxed text-[#3E4C5E] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#202A36]">{item.name}</p>
                <p className="text-xs text-[#0F52BA] font-bold mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D6E2F0]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions"
            description="Answers to common questions regarding our EV charging infrastructure and technologies."
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

            <div className="lg:col-span-5 rounded-[28px] bg-[#0F52BA] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#E52E2E]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D6E2F0] mb-8">
                  Our EV engineering team responds to every technical inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#E52E2E]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#E52E2E] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#E52E2E]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#E52E2E] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#E52E2E]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#E52E2E] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#E52E2E]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#E52E2E] mb-1">Email Us</p>
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

      <CorporateFooter />
    </main>
  );
}