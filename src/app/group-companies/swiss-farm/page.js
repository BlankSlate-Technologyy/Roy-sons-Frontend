"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, CheckCircle2, Leaf, Package, ShieldCheck,
  Sparkles, Truck, Users, Zap, HeartPulse, MapPin, Phone,
  MessageCircle, Mail, Plus, Minus, Send, Clock, Building2,
  Eye, Target, Menu, X,
} from "lucide-react";

// ── Color System matching Swiss Farms Logo & Modern Clean Palette ──
const COLORS = {
  primary:      "#1C522A", // Deep Forest Green
  primaryDark:  "#123B1D",
  primaryLight: "#2A6B3D",
  accentGold:   "#C5A059", // Warm Gold Accent
  charcoal:     "#2A3439", // Logo Dark Slate/Charcoal for text & headings
  white:        "#FFFFFF",
  bgLight:      "#F4F8F4", // Light mint/green tinted background
  bgCard:       "#FFFFFF",
  border:       "#D6E5D7",
  textMuted:    "#485E4E",
  textLight:    "#6B8271",
};

const HERO_TAGLINE = "Trusted Dairy Production & Livestock Management";

const STATS = [
  { value: 30,  suffix: "+",          label: "Years of Dairy Farming Experience" },
  { value: 25000, suffix: "+",        label: "Healthy Livestock" },
  { value: 120, suffix: " Million+", label: "Liters of Milk Produced Annually" },
  { value: 600, suffix: "+",          label: "Skilled Professionals" },
  { value: 100, suffix: "%",          label: "Commitment to Animal Welfare" },
];

const CORE_SERVICES = [
  {
    icon: Truck,
    title: "Dairy Production",
    desc: "Producing fresh, nutritious, and high-quality milk using automated milking systems and internationally recognized hygiene standards.",
  },
  {
    icon: Users,
    title: "Livestock Management",
    desc: "Professional herd management focused on nutrition, health monitoring, breeding, and overall animal well-being.",
  },
  {
    icon: Leaf,
    title: "Breeding Programs",
    desc: "Advanced genetic improvement programs designed to develop healthier and more productive livestock.",
  },
  {
    icon: ShieldCheck,
    title: "Veterinary Services",
    desc: "Comprehensive veterinary care including vaccinations, disease prevention, diagnostics, and routine health monitoring.",
  },
  {
    icon: Sparkles,
    title: "Animal Nutrition",
    desc: "Scientifically balanced feeding programs that improve livestock health, productivity, and milk quality.",
  },
  {
    icon: Package,
    title: "Sustainable Farm Management",
    desc: "Environmental responsibility practices focused on efficient water use, waste management, and renewable energy.",
  },
];

const PRODUCTS = [
  "Fresh Milk",
  "Pasteurized Milk",
  "Organic Dairy Products",
  "Dairy Ingredients",
  "Livestock Genetics",
  "Breeding Programs",
  "Animal Feed Solutions",
  "Dairy Farm Resources",
];

const INDUSTRIES = [
  "Dairy Industry",
  "Food Processing",
  "Agriculture",
  "Retail Distribution",
  "Hospitality",
  "Restaurants",
  "Educational Institutions",
  "Livestock Farms",
  "Agricultural Cooperatives",
  "Government Programs",
];

const WHY_CHOOSE = [
  {
    title: "Premium Quality",
    desc: "Consistently producing fresh and nutritious dairy products with strict quality control.",
    icon: CheckCircle2,
  },
  {
    title: "Animal Welfare",
    desc: "Providing exceptional care, comfortable housing, balanced nutrition, and veterinary support.",
    icon: HeartPulse,
  },
  {
    title: "Sustainable Farming",
    desc: "Protecting natural resources through environmentally responsible agricultural practices.",
    icon: Leaf,
  },
  {
    title: "Advanced Technology",
    desc: "Utilizing smart farm systems, precision feeding, and modern milking technologies.",
    icon: Zap,
  },
  {
    title: "Experienced Professionals",
    desc: "A team of veterinarians, dairy specialists, nutritionists, and agricultural experts committed to excellence.",
    icon: Users,
  },
  {
    title: "Continuous Innovation",
    desc: "Investing in research, breeding improvements, and modern farming technologies to maximize productivity.",
    icon: Award,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Livestock Selection",
    desc: "Carefully selecting healthy livestock with superior genetics.",
  },
  {
    step: "02",
    title: "Nutrition & Feeding",
    desc: "Providing scientifically formulated nutrition for healthy growth and milk production.",
  },
  {
    step: "03",
    title: "Veterinary Care",
    desc: "Routine health monitoring, preventive healthcare, and professional veterinary services.",
  },
  {
    step: "04",
    title: "Dairy Production",
    desc: "Modern milking systems ensuring hygiene, efficiency, and premium milk quality.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    desc: "Comprehensive laboratory testing and food safety inspections.",
  },
  {
    step: "06",
    title: "Distribution",
    desc: "Efficient cold-chain storage and distribution for fresh dairy products.",
  },
];

const SUSTAINABILITY = [
  { label: "Water Conservation", value: "Optimized irrigation and water recycling for farm operations." },
  { label: "Renewable Energy", value: "Solar-powered facilities and energy efficiency across our farms." },
  { label: "Waste Management", value: "Responsible waste reduction and nutrient recycling systems." },
  { label: "Biodiversity", value: "Crop rotation and habitat preservation to support local ecosystems." },
];

const INNOVATION = [
  "Automated Milking Systems",
  "Climate-Controlled Barns",
  "Smart Livestock Tracking",
  "Animal Health Monitoring",
  "Precision Feeding Solutions",
  "Farm Management Software",
  "Genetic Improvement Programs",
  "Agricultural Data Analytics",
];

const FEATURED_PROGRAMS = [
  {
    title: "Premium Dairy Production",
    desc: "Delivering delicious, nutritious dairy products with advanced farming methods.",
    img: "/swiss-card3.png",
  },
  {
    title: "Livestock Genetics Program",
    desc: "Improving herd health and productivity through responsible breeding and genetic selection.",
    img: "/swiss-card1.png",
  },
  {
    title: "Sustainable Farming Initiative",
    desc: "Implementing eco-friendly farm systems that support long-term agricultural development.",
    img: "/swiss-card2.png",
  },
];

const TESTIMONIALS = [
  {
    name: "Dairy Industry Partner",
    role: "Senior Procurement Lead",
    quote: "Swiss Farms consistently delivers exceptional dairy quality through modern, sustainable farming practices.",
  },
  {
    name: "Agricultural Specialist",
    role: "Supply Chain Director",
    quote: "Their animal welfare standards and production systems set a new benchmark for dairy farming.",
  },
];

const FAQS = [
  { q: "What products does Swiss Farms produce?", a: "Fresh milk, pasteurized milk, organic dairy products, dairy ingredients, and livestock genetics solutions." },
  { q: "How do you ensure animal welfare?", a: "Through expert veterinary care, balanced nutrition, clean housing, and humane herd management." },
  { q: "Do you use modern farming technologies?", a: "Yes, we apply automated milking systems, precision feeding, climate-controlled barns, and farm data analytics." },
  { q: "Are your farming practices sustainable?", a: "Yes, we emphasize water conservation, renewable energy, waste management, and biodiversity protection." },
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
      className="rounded-[28px] border border-[#D6E5D7] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1C522A]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#1C522A] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#485E4E]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionTitle({ label, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#1C522A] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1C522A]" />
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#2A3439] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#485E4E]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[28px] border border-[#D6E5D7] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1C522A] hover:bg-[#F4F8F4]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E8F3E9] text-[#1C522A] mb-6 transition-all duration-300 group-hover:bg-[#1C522A] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#2A3439] mb-3 transition-colors duration-300 group-hover:text-[#1C522A]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#485E4E]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="group rounded-[28px] border border-[#D6E5D7] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1C522A]">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E8F3E9] text-[#1C522A] mb-5 transition-all duration-300 group-hover:bg-[#1C522A] group-hover:text-white group-hover:scale-110">
        <Icon size={20} />
      </div>
      <h3 className="text-base font-black text-[#2A3439] uppercase tracking-[0.05em] mb-3 transition-colors duration-300 group-hover:text-[#1C522A]">{title}</h3>
      <p className="text-sm text-[#485E4E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Step ──
function ProcessStep({ step, title, desc }) {
  return (
    <div className="group rounded-[28px] border border-[#D6E5D7] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1C522A]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black px-3 py-1 rounded-full bg-[#E8F3E9] text-[#1C522A] group-hover:bg-[#1C522A] group-hover:text-white transition-all">Step {step}</span>
        <span className="text-base font-bold text-[#2A3439]">{title}</span>
      </div>
      <p className="text-sm text-[#485E4E] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D6E5D7] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#2A3439] transition-colors group-hover:text-[#1C522A]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E8F3E9] flex items-center justify-center text-[#1C522A] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#1C522A] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#EAF2EC]">
          <p className="mt-3 text-sm leading-relaxed text-[#485E4E]">{answer}</p>
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
      <div className="rounded-[28px] border border-[#D6E5D7] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E8F3E9] text-[#1C522A] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#2A3439] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#485E4E] max-w-md mx-auto mb-6">
          Thank you, {form.name}. {form.service ? `Your inquiry about "${form.service}" has been received.` : "Your inquiry has been received."} Our team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#1C522A] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#123B1D]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D6E5D7] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#2A3439] mb-6">Send Us A Message</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#485E4E] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-sm text-[#2A3439] outline-none transition-all focus:border-[#1C522A] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#485E4E] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-sm text-[#2A3439] outline-none transition-all focus:border-[#1C522A] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#485E4E] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-sm text-[#2A3439] outline-none transition-all focus:border-[#1C522A] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#485E4E] mb-2">Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-sm text-[#2A3439] outline-none transition-all focus:border-[#1C522A] focus:bg-white"
          >
            <option value="">Select a service...</option>
            {CORE_SERVICES.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#485E4E] mb-2">Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your requirements..."
          className="w-full rounded-xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-sm text-[#2A3439] outline-none transition-all resize-none focus:border-[#1C522A] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1C522A] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#123B1D] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Send Message <Send size={15} />
      </button>
    </form>
  );
}

// ── Swiss Farms Navbar ──
function SwissFarmsNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D6E5D7]">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1C522A] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#C5A059]">Swiss Farms — Dairy & Livestock Excellence</span>
        </div>
      </div>
      {/* Main Bar */}
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#1C522A] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Leaf size={22} color="#fff" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#1C522A] leading-none">SWISS FARMS</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#485E4E]">Dairy & Livestock</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#2A3439]">
          {navLinks.map(l => (
            <Link key={l.label} href={l.href} className="relative py-1 hover:text-[#1C522A] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1C522A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g,"")}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1C522A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#123B1D] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Get Quote
          </a>
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-[#C5A059] bg-[#C5A059]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#F4F8F4] text-[#1C522A]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D6E5D7] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#2A3439] hover:text-[#1C522A] py-1">{l.label}</Link>
          ))}
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[^0-9]/g,"")}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#1C522A] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Get Quote
          </a>
        </div>
      )}
    </header>
  );
}

// ── Swiss Farms Footer ──
function SwissFarmsFooter() {
  return (
    <footer style={{ background: "#1C522A" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Leaf size={20} color="#C5A059" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">SWISS FARMS</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Dairy & Livestock Excellence</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">Trusted dairy production and livestock management across Pakistan, committed to quality, sustainability, and animal welfare.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C5A059]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#C5A059]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#C5A059]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["About Us","Services","Products","Why Us","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact */}
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
        © {new Date().getFullYear()} Swiss Farms. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
  );
}

// ── Main Page Component ──
export default function SwissFarmsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "swiss-farm-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.charcoal;
    return () => {
      document.body.classList.remove("roys-roys-theme", "swiss-farm-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme swiss-farm-theme font-sans bg-white text-[#2A3439] selection:bg-[#1C522A] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #2A3439 !important;
          color-scheme: light !important;
        }
        .swiss-farm-theme h1,
        .swiss-farm-theme h2,
        .swiss-farm-theme h3,
        .swiss-farm-theme h4,
        .swiss-farm-theme h5,
        .swiss-farm-theme h6,
        .swiss-farm-theme p,
        .swiss-farm-theme span,
        .swiss-farm-theme li,
        .swiss-farm-theme a,
        .swiss-farm-theme label,
        .swiss-farm-theme button,
        .swiss-farm-theme input,
        .swiss-farm-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <SwissFarmsNavbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-[#E2ECE3] min-h-[480px] lg:min-h-[540px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(18, 59, 29, 0.8) 0%, rgba(28, 82, 42, 0.82) 50%, rgba(18, 59, 29, 0) 100%), url("${encodeURI("/swiss-farm-about.png")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#1C522A] shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
              {HERO_TAGLINE}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Nourishing Communities Through <span className="text-[#C5A059]">Modern Dairy Farming</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#E8F3E9]">
              Swiss Farms is a leading dairy and livestock management company dedicated to producing premium-quality dairy products through advanced breeding programs, sustainable farming practices, and modern livestock care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#farms"
                className="inline-flex items-center gap-2 rounded-full bg-[#1C522A] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#123B1D] hover:scale-[1.02] active:scale-95"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#1C522A] hover:scale-[1.02] active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-12 lg:py-20 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-[28px] border border-[#D6E5D7] bg-[#F8FAF8] p-6 md:p-8 lg:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-[#E6EFE6]">
                  <Image src="/swiss-farm-hero.png" alt="Swiss Farms aerial" fill className="object-cover" />
                </div>
              </div>

              <div className="lg:col-span-6">
                <SectionTitle
                  label="About Us"
                  title="Excellence in Dairy Farming"
                  description="Swiss Farms is committed to transforming dairy farming through innovation, responsible livestock management, and sustainable agricultural practices. Our farms are designed to maintain the highest standards of hygiene, animal welfare, productivity, and environmental responsibility."
                />

                <p className="mt-6 text-sm leading-relaxed text-[#485E4E]">
                  From breeding and nutrition to milk production and quality assurance, every stage of our operation is managed with precision to ensure consistent excellence across our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="farms" className="bg-[#F4F8F4] px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Our Core Services"
            title="Expert Dairy & Livestock Services"
            description="Swiss Farms delivers end-to-end dairy operations, from breeding and nutrition to veterinary care and sustainable farm management."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Products & Industries Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-12 xl:grid-cols-2 items-start">
            <div>
              <SectionTitle
                label="Our Products"
                title="Quality Dairy and Livestock Solutions"
                description="Delivering a broad range of dairy products and livestock support services tailored for modern agricultural supply chains."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PRODUCTS.map((product, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#D6E5D7] bg-[#F8FAF8] p-5 text-center transition-all duration-300 hover:border-[#1C522A] hover:bg-[#1C522A] hover:shadow-md"
                  >
                    <p className="text-xs font-black uppercase tracking-widest text-[#1C522A] transition-colors duration-300 group-hover:text-white">
                      {product}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                label="Industries We Support"
                title="Serving Every Link In The Dairy Value Chain"
                description="Our solutions support dairy processing, retail, food service, agriculture, research, and government programs that rely on dependable dairy supply."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {INDUSTRIES.map((industry, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#D6E5D7] bg-[#F8FAF8] px-5 py-4 text-xs font-bold text-[#2A3439] transition-all duration-300 hover:border-[#1C522A] hover:bg-[#1C522A] hover:text-white"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#F4F8F4] px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Why Choose Swiss Farms"
            title="Built For Sustainable Dairy Excellence"
            description="Our farming model combines animal welfare, green technologies, and expert management to deliver consistent quality and reliable production."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Our Farming Process"
            title="Complete Dairy Operations From Field To Shelf"
            description="Swiss Farms follows a disciplined process to ensure every step of dairy production is safe, efficient, and quality-focused."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep key={step.step} step={step.step} title={step.title} desc={step.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Innovation */}
      <section className="bg-[#F4F8F4] px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl grid gap-10 xl:grid-cols-2 items-stretch">
          <div className="rounded-[28px] border border-[#D6E5D7] bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-black text-[#1C522A]">Sustainability</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-black text-[#2A3439]">Responsible Farming for Future Generations</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#485E4E]">
                Swiss Farms believes sustainable agriculture is the foundation of long-term success. Our operations reduce waste, conserve water, improve soil health, and preserve biodiversity.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SUSTAINABILITY.map((item, index) => (
                <div key={index} className="rounded-2xl border border-[#D6E5D7] bg-[#F8FAF8] p-5">
                  <p className="text-xs font-black uppercase text-[#1C522A] mb-2">{item.label}</p>
                  <p className="text-xs leading-relaxed text-[#485E4E]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#D6E5D7] bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-black text-[#1C522A]">Innovation & Technology</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-black text-[#2A3439]">Smart Farming Solutions</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#485E4E]">
                Modern technologies enable us to improve efficiency, animal health, and dairy production through better data, automation, and precision agriculture.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {INNOVATION.map((item, index) => (
                <div key={index} className="rounded-2xl border border-[#D6E5D7] bg-[#F8FAF8] px-4 py-3.5 text-xs font-bold text-[#2A3439]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Featured Programs"
            title="Programs That Empower Dairy Growth"
            description="Highlights of the programs that help Swiss Farms deliver better livestock outcomes and stronger agricultural communities."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {FEATURED_PROGRAMS.map((program, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D6E5D7] bg-[#F8FAF8] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1C522A]">
                <div className="relative h-60">
                  <Image src={program.img} alt={program.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-black text-[#2A3439] mb-3 transition-colors duration-300 group-hover:text-[#1C522A]">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-[#485E4E]">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Vision & Mission Section */}
          <section className="bg-[#F4F8F4] px-6 py-8 lg:py-14 border-b border-[#E2ECE3]">
            <div className="mx-auto max-w-screen-xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className="rounded-[28px] border border-[#D6E5D7] p-6 flex items-center justify-between gap-6 shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255, 255, 255, 0.85)), url("${encodeURI(
                      "/swiss-card1.png"
                    )}")`,
                  }}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#E8F3E9] text-[#1C522A] flex items-center justify-center">
                        <Eye size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-[#2A3439]">Our Vision</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#2A3439]">To become a global leader in sustainable dairy farming by producing premium-quality dairy products through innovation, responsible livestock management, and environmentally sustainable agricultural practices.</p>
                      </div>
                    </div>
                  </div>
                  {/* image is used as card background for visual impact */}
                </div>

                <div
                  className="rounded-[28px] border border-[#D6E5D7] p-6 flex items-center justify-between gap-6 shadow-sm bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url("${encodeURI(
                      "/swiss-card2.png"
                    )}")`,
                  }}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#E8F3E9] text-[#1C522A] flex items-center justify-center">
                        <Target size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-[#2A3439]">Our Mission</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#2A3439]">To deliver safe, nutritious dairy products while promoting animal welfare, sustainable farming, technological innovation, and operational excellence that benefit consumers and farming communities.</p>
                      </div>
                    </div>
                  </div>
                  {/* image is used as card background for visual impact */}
                </div>
              </div>
            </div>
          </section>

      {/* Testimonials & FAQs (combined two-column section) */}
      <section id="insights" className="bg-white px-6 py-16 lg:py-24 border-b border-[#E2ECE3]">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Insights"
            title="Testimonials & FAQs"
            description="What partners say and the common questions we answer about Swiss Farms."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
            {/* Left: Testimonials */}
            <div>
              <h3 className="text-xl font-black text-[#2A3439] mb-6">What Our Partners Say</h3>
              <div className="grid gap-6">
                {TESTIMONIALS.map((item, index) => (
                  <div key={index} className="rounded-[28px] border border-[#D6E5D7] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#1C522A]">
                    <p className="text-base italic leading-relaxed text-[#485E4E] mb-4">“{item.quote}”</p>
                    <p className="font-black text-[#2A3439]">{item.name}</p>
                    <p className="text-xs font-bold text-[#1C522A] mt-0.5">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: FAQs */}
            <div>
              <h3 className="text-xl font-black text-[#2A3439] mb-6">Frequently Asked Questions</h3>
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
      <section id="contact" className="bg-[#F4F8F4] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Get In Touch"
            title="Contact Swiss Farms"
            description="Have questions about our dairy products, livestock services, or partnership opportunities? Reach out to our team today."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#1C522A] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#C5A059]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D6E5D7] mb-8">
                  Our agricultural experts and customer support team are available to assist you with inquiries and orders.
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

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D6E5D7]">
                &copy; {new Date().getFullYear()} Swiss Farms. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmsFooter />
    </main>
  );
}
