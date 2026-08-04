"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award, BarChart3, Building, Building2, CheckCircle2, ChevronDown, ChevronLeft,
  ChevronRight, Drill, Facebook, Factory, FileText, FlaskConical, Globe, HardHat, ImageIcon,
  Landmark, Layers, Leaf, Linkedin, Mail, MapPin, MessageCircle, Minus, Mountain,
  Phone, Plus, Send, Shield, ShieldCheck, Star, Trash2, TrendingUp, Truck,
  Twitter, Upload, Users, Youtube, Zap,
} from "lucide-react";

// ─── Colour Palette (Derived Exactly from Logo & 100% White Background) ──────
const C = {
  logoNavy:     "#16243E", // Exact Deep Dark Navy from NMC Logo text
  logoSlate:    "#4A607A", // Steel Blue / Slate Gray from Logo mountain layers
  gold:         "#C59B27", // Rich Mine Gold from Logo pickaxe & ore accent
  goldHover:    "#A8821D",
  goldLight:    "#DDB338",
  goldPale:     "#FFFDF2",
  goldBorder:   "rgba(197,155,39,0.35)",
  white:        "#FFFFFF", // 100% Pure White Background
  offWhite:     "#F8FAFC", // Soft white tint for alternating sections
  slateTint:    "#F1F5F9",
  border:       "#E2E8F0",
  textDark:     "#16243E", // Logo Navy for main text
  textMuted:    "#334155", // Slate dark for paragraph text
  textLight:    "#64748B",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Services",       href: "#services" },
  { label: "Minerals",       href: "#minerals" },
  { label: "Industries",     href: "#industries" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact",        href: "#contact" },
];

const STATS = [
  { icon: Award,       value: 20,    suffix: "+",         label: "Years of Mining\nExperience" },
  { icon: BarChart3,   value: 50,    suffix: "+",         label: "Mining & Exploration\nProjects" },
  { icon: Truck,       value: 5,     suffix: " Million+", label: "Tons of Minerals\nProcessed" },
  { icon: Users,       value: 500,   suffix: "+",         label: "Skilled Engineers &\nProfessionals" },
  { icon: ShieldCheck, value: 99,    suffix: "%",         label: "Operational Safety\nCompliance" },
];

const SERVICES = [
  { icon: Mountain,     title: "Mineral Exploration",        desc: "Comprehensive geological surveys, core drilling, satellite mapping & resource evaluation to discover valuable mineral deposits." },
  { icon: HardHat,      title: "Mine Planning & Development", desc: "Strategic mine design, feasibility studies, infrastructure planning and engineering support for sustainable mining." },
  { icon: Drill,        title: "Mining Operations",          desc: "Modern open-pit and underground extraction methods using advanced heavy machinery adhering to global safety standards." },
  { icon: FlaskConical, title: "Mineral Processing",         desc: "Advanced crushing, grinding, flotation, magnetic separation & refining to maximize mineral recovery and product purity." },
  { icon: Leaf,         title: "Environmental Management",   desc: "Land rehabilitation, progressive mine closure, water recycling, tailings management and biodiversity protection." },
  { icon: BarChart3,    title: "Mining Consultancy",         desc: "Technical consulting, geological auditing, regulatory compliance advice, and strategic asset management solutions." },
];

const MINERALS = [
  { name: "Gold",               img: "/mine gold.png" },
  { name: "Copper",             img: "/mine copper.png" },
  { name: "Iron Ore",           img: "/mine gold.png" },
  { name: "Coal",               img: "/mine copper.png" },
  { name: "Limestone",          img: "/mine gold.png" },
  { name: "Gypsum",             img: "/mine copper.png" },
  { name: "Chromite",           img: "/mine gold.png" },
  { name: "Marble",            img: "/mine copper.png" },
  { name: "Granite",           img: "/mine gold.png" },
  { name: "Silica Sand",       img: "/mine copper.png" },
  { name: "Industrial Minerals", img: "/mine gold.png" },
];

const INDUSTRIES = [
  { icon: Building,   label: "Construction" },
  { icon: Landmark,   label: "Infrastructure\nDevelopment" },
  { icon: Factory,    label: "Steel\nManufacturing" },
  { icon: Building2,  label: "Cement\nIndustry" },
  { icon: Zap,        label: "Energy &\nPower" },
  { icon: Layers,     label: "Manufacturing" },
  { icon: Globe,      label: "Export\nMarkets" },
  { icon: Landmark,   label: "Government\nProjects" },
  { icon: Factory,    label: "Industrial\nProcessing" },
  { icon: HardHat,    label: "Heavy\nIndustries" },
  { icon: TrendingUp, label: "Engineering &\nTechnology" },
];

const SUSTAINABILITY_ITEMS = [
  { icon: Leaf,        title: "Environmental Stewardship", desc: "Sustainable mining for future generations through responsible resource utilization, land reclamation, and reforestation programs." },
  { icon: ShieldCheck, title: "Safety & Compliance",        desc: "Strict zero-harm health and safety policies ensuring 99% operational compliance across all mining sites." },
  { icon: Zap,         title: "Technology & Innovation",    desc: "Deploying automated machinery, real-time IoT monitoring, and eco-friendly processing technologies." },
  { icon: Star,        title: "Community Growth",           desc: "Investing in local infrastructure, skills training, healthcare, and economic development for mining communities." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Geological Exploration",  desc: "High-resolution geological surveying, satellite mapping, and core sample drilling." },
  { num: "02", title: "Resource Modeling",       desc: "3D geological modeling, grade estimation, and economic feasibility evaluation." },
  { num: "03", title: "Mine Design & Planning",  desc: "Engineering infrastructure development, haul road design, and safety planning." },
  { num: "04", title: "Extraction & Mining",     desc: "Safe, precision blasting and heavy-equipment excavation." },
  { num: "05", title: "Mineral Processing",      desc: "Crushing, sorting, beneficiation, and quality assurance testing." },
  { num: "06", title: "Land Reclamation",        desc: "Progressive environmental rehabilitation, soil restoration, and planting." },
];

const TESTIMONIALS = [
  { name: "Infrastructure Partner", role: "National Highways Project", quote: "National Mines Corporation consistently delivers top-tier mineral resources. Their commitment to environmental compliance and timely supply chain delivery makes them our most trusted mining partner." },
  { name: "Industrial Director",   role: "Steel & Heavy Industries",  quote: "Their technical expertise in mineral processing and high safety standards across mining sites set a benchmark in the resource sector." },
  { name: "Operations Manager",    role: "Cement Manufacturing Group", quote: "From raw material sourcing to delivery logistics, NMC provides exceptional service quality, transparent pricing, and unwavering reliability." },
];

const FAQS = [
  { q: "What services does National Mines Corporation provide?",  a: "We offer mineral exploration, mine planning & development, mining operations, mineral processing, environmental management, and specialized mining consultancy." },
  { q: "Which minerals do you mine and process?",                 a: "We extract and process Gold, Copper, Iron Ore, Coal, Limestone, Gypsum, Chromite, Marble, Granite, Silica Sand, and various industrial minerals." },
  { q: "Do you comply with international safety standards?",      a: "Yes. We strictly adhere to global ISO and environmental safety standards, maintaining a 99% operational safety compliance record." },
  { q: "How do you ensure environmental sustainability?",         a: "Through progressive land reclamation, water recycling, zero-waste tailings management, and continuous environmental impact monitoring." },
  { q: "How can we partner with NMC for mineral sourcing?",       a: "You can submit an inquiry through our contact form or contact our Lahore headquarters directly via phone or WhatsApp to request a custom quote." },
];

const CONTACT_INFO = {
  company: "National Mines Corporation (NMC)",
  subtitle: "Trusted Mining & Mineral Development Company",
  address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp1: "0092-304-7527498",
  whatsapp2: "0092-321-8431665",
  email1: "info@roysons.org",
  email2: "support@roysons.org",
  mapUrl: "https://maps.app.goo.gl/iDreS8eCT1teZeRV7",
  mapEmbed: "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed",
};

// ─── Image Uploader Component for About Section ──────────────────────────────
function AboutImageUploader({ aboutImg, setAboutImg }) {
  const fileRef = useRef(null);
  return (
    <div style={{ position: "absolute", bottom: 16, right: 16, zIndex: 20, display: "flex", gap: 8 }}>
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        style={{
          display: "flex", alignItems: "center", gap: 6, padding: "8px 14px",
          background: C.gold, border: "none", borderRadius: 8,
          color: C.white, fontWeight: 700, fontSize: 12, cursor: "pointer",
          boxShadow: "0 4px 12px rgba(22,36,62,0.15)", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = C.goldHover; }}
        onMouseLeave={e => { e.currentTarget.style.background = C.gold; }}
      >
        <Upload size={14} /> {aboutImg ? "Change Image" : "Upload Image"}
      </button>
      {aboutImg && (
        <button
          type="button"
          onClick={() => setAboutImg(null)}
          style={{
            display: "flex", alignItems: "center", gap: 6, padding: "8px 12px",
            background: "#EF4444", border: "none", borderRadius: 8,
            color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)", transition: "all 0.2s",
          }}
        >
          <Trash2 size={14} /> Remove
        </button>
      )}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) {
            setAboutImg(URL.createObjectURL(file));
          }
          e.target.value = "";
        }}
      />
    </div>
  );
}

// ─── Stat Card Component ──────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(value / 40);
        const t = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(t); }
          else setCount(start);
        }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      style={{
        background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 16,
        padding: "24px 20px", textAlign: "center", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "0 4px 14px rgba(22,36,62,0.04)", position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = C.gold;
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(197,155,39,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(22,36,62,0.04)";
      }}
    >
      <div style={{ width: 48, height: 48, background: C.goldPale, borderRadius: 12, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
        <Icon size={22} style={{ color: C.gold }} />
      </div>
      <div style={{ fontSize: 30, fontWeight: 900, color: C.logoNavy, lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 700, color: C.textMuted, marginTop: 8, lineHeight: 1.45, textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "pre-line" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Testimonials Slider ─────────────────────────────────────────────────────
function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const goPrev = () => setActiveIndex(prev => (prev - 1 + items.length) % items.length);
  const goNext = () => setActiveIndex(prev => (prev + 1) % items.length);

  return (
    <div style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 20, padding: 32, boxShadow: "0 6px 20px rgba(22,36,62,0.05)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 4 }}>Client Reviews</span>
          <h3 style={{ fontWeight: 800, fontSize: 20, color: C.logoNavy }}>What Our Partners Say</h3>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            style={{ width: 38, height: 38, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.white, color: C.logoNavy, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.logoNavy; }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            style={{ width: 38, height: 38, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.white, color: C.logoNavy, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.logoNavy; }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <p style={{ color: C.textDark, fontSize: 14.5, lineHeight: 1.8, fontStyle: "italic" }}>
          &ldquo;{activeItem.quote}&rdquo;
        </p>
        <div style={{ marginTop: 20, borderTop: `1px solid ${C.border}`, paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 800, color: C.logoNavy, fontSize: 15 }}>{activeItem.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{activeItem.role}</div>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} style={{ fill: C.gold, color: C.gold }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            style={{ width: index === activeIndex ? 24 : 8, height: 8, borderRadius: 10, border: "none", background: index === activeIndex ? C.gold : C.border, cursor: "pointer", transition: "all 0.3s" }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── FAQ Accordion Item ──────────────────────────────────────────────────────
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ border: `1.5px solid ${isOpen ? C.gold : C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 12, transition: "all 0.3s" }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 20px", background: isOpen ? C.goldPale : C.white, border: "none",
          cursor: "pointer", fontWeight: 700, fontSize: 14.5, color: C.logoNavy, textAlign: "left",
          transition: "background 0.2s",
        }}
      >
        <span>{q}</span>
        {isOpen ? <Minus size={18} style={{ color: C.gold, flexShrink: 0 }} /> : <Plus size={18} style={{ color: C.gold, flexShrink: 0 }} />}
      </button>
      {isOpen && (
        <div style={{ padding: "0 20px 18px", color: C.textMuted, fontSize: 13.5, lineHeight: 1.75, background: C.goldPale }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Contact Form with Service Dropdown ──────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Full Name *</label>
        <input
          name="name" type="text" value={form.name} onChange={handle} required
          placeholder="John Doe"
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Email Address *</label>
        <input
          name="email" type="email" value={form.email} onChange={handle} required
          placeholder="john@company.com"
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Phone Number</label>
        <input
          name="phone" type="text" value={form.phone} onChange={handle}
          placeholder="+92 300 0000000"
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Company Name</label>
        <input
          name="company" type="text" value={form.company} onChange={handle}
          placeholder="Your Corporation"
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>

      <div style={{ gridColumn: "span 2" }}>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Service Required *</label>
        <select
          name="service" value={form.service} onChange={handle} required
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", background: C.white, boxSizing: "border-box" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        >
          <option value="">Select a Mining Service…</option>
          {SERVICES.map(s => (
            <option key={s.title} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div style={{ gridColumn: "span 2" }}>
        <label style={{ display: "block", fontWeight: 700, fontSize: 13, color: C.logoNavy, marginBottom: 6 }}>Message *</label>
        <textarea
          name="message" value={form.message} onChange={handle} required rows={4}
          placeholder="Tell us about your project requirements or mineral sourcing needs..."
          style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: 14, color: C.logoNavy, outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border 0.2s" }}
          onFocus={e => { e.target.style.borderColor = C.gold; }}
          onBlur={e => { e.target.style.borderColor = C.border; }}
        />
      </div>

      <div style={{ gridColumn: "span 2" }}>
        {sent ? (
          <div style={{ padding: "14px 24px", background: "#DCFCE7", border: "1px solid #16A34A", borderRadius: 8, color: "#16A34A", fontWeight: 700, textAlign: "center" }}>
            ✅ Thank you! Your inquiry has been sent to National Mines Corporation.
          </div>
        ) : (
          <button
            type="submit"
            style={{
              width: "100%", padding: "14px 0", background: C.gold, color: C.white,
              border: "none", borderRadius: 8, fontWeight: 800, fontSize: 15, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 6px 20px rgba(197,155,39,0.25)", transition: "all 0.2s",
              textTransform: "uppercase", letterSpacing: "0.05em",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.goldHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <Send size={17} /> Submit Inquiry
          </button>
        )}
      </div>
    </form>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function NationalMinesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [aboutImg, setAboutImg] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.add("national-mines-theme");
    return () => document.body.classList.remove("national-mines-theme");
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: C.white, color: C.logoNavy, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ══ TOPBAR ═══════════════════════════════════════════════════════════ */}
      <div style={{ background: C.offWhite, borderBottom: `1px solid ${C.border}`, color: C.logoNavy, fontSize: 12, padding: "8px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
          <MapPin size={13} style={{ color: C.gold }} /> {CONTACT_INFO.address}
        </span>
        <div style={{ display: "flex", gap: 20, fontWeight: 500 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Phone size={12} style={{ color: C.gold }} /> {CONTACT_INFO.phone}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Mail size={12} style={{ color: C.gold }} /> {CONTACT_INFO.email1}</span>
        </div>
      </div>

      {/* ══ NAVBAR ═══════════════════════════════════════════════════════════ */}
      <header style={{
        position: "sticky", top: 0, zIndex: 1000, background: scrolled ? "rgba(255,255,255,0.98)" : C.white,
        borderBottom: `2px solid ${C.border}`, boxShadow: scrolled ? "0 4px 20px rgba(22,36,62,0.08)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 74, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 46, height: 46, borderRadius: 10, background: C.white, border: `2px solid ${C.logoNavy}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(22,36,62,0.08)" }}>
              <Mountain size={24} style={{ color: C.logoNavy }} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16, color: C.logoNavy, lineHeight: 1.1, letterSpacing: "-0.2px", textTransform: "uppercase" }}>
                NATIONAL MINES
              </div>
              <div style={{ fontSize: 10.5, color: C.gold, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                CORPORATION – NMC
              </div>
            </div>
          </Link>

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} style={{
                color: C.logoNavy, textDecoration: "none", fontWeight: 700, fontSize: 13.5,
                textTransform: "uppercase", letterSpacing: "0.04em", transition: "color 0.2s",
              }}
                onMouseEnter={e => { e.target.style.color = C.gold; }}
                onMouseLeave={e => { e.target.style.color = C.logoNavy; }}
              >{l.label}</a>
            ))}
          </div>

          {/* Contact Button */}
          <a href="#contact" style={{
            padding: "10px 22px", background: C.gold, color: C.white, borderRadius: 8,
            fontWeight: 800, fontSize: 13, textDecoration: "none", textTransform: "uppercase",
            letterSpacing: "0.05em", boxShadow: "0 4px 14px rgba(197,155,39,0.3)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.goldHover; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get Trade Quote
          </a>
        </div>
      </header>

      {/* ══ HERO SECTION ═════════════════════════════════════════════════════ */}
      <section id="home" style={{
        position: "relative", minHeight: "85vh", display: "flex", alignItems: "center",
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.90) 50%, rgba(241,245,249,0.85) 100%), url('/mine header.png')`,
        backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", position: "relative", zIndex: 10, width: "100%" }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px",
              background: C.goldPale, border: `1.5px solid ${C.gold}`, borderRadius: 30,
              fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24,
            }}>
              <Mountain size={14} /> {CONTACT_INFO.subtitle}
            </span>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(38px, 5.5vw, 62px)", color: C.logoNavy, lineHeight: 1.08, marginBottom: 8, textTransform: "uppercase" }}>
              SUSTAINABLE MINING.
            </h1>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(38px, 5.5vw, 62px)", lineHeight: 1.08, marginBottom: 28, textTransform: "uppercase", color: C.gold }}>
              RESPONSIBLE RESOURCE DEVELOPMENT.
            </h1>
            <p style={{ color: C.textMuted, fontSize: 16, lineHeight: 1.85, marginBottom: 36, maxWidth: 640, fontWeight: 500 }}>
              National Mines Corporation is committed to advancing the mining industry through responsible exploration, efficient mineral extraction, modern processing, and sustainable environmental stewardship.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#services" style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px",
                background: C.gold, color: C.white, borderRadius: 10, fontWeight: 800, fontSize: 14,
                textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em",
                boxShadow: "0 8px 24px rgba(197,155,39,0.35)", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.goldHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.gold; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Explore Services <ChevronRight size={17} />
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px",
                background: C.white, color: C.logoNavy, borderRadius: 10, fontWeight: 800, fontSize: 14,
                textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em",
                border: `2px solid ${C.logoNavy}`, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.slateTint; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.white; }}
              >
                Contact Us <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══════════════════════════════════════════════════════ */}
      <section style={{ background: C.offWhite, padding: "60px 40px", borderTop: `2px solid ${C.border}`, borderBottom: `2px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* ══ ABOUT US SECTION (With Image Option) ══════════════════════════════ */}
      <section id="about" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left: Content */}
          <div>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.goldBorder}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18 }}>
              About Us
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 38px)", color: C.logoNavy, marginBottom: 20, lineHeight: 1.2, textTransform: "uppercase" }}>
              BUILDING THE FUTURE THROUGH <span style={{ color: C.gold }}>RESPONSIBLE MINING</span>
            </h2>
            <p style={{ color: C.textMuted, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
              National Mines Corporation is a premier mining and mineral development organization specializing in geological exploration, mine planning, extraction, mineral processing, and sustainable resource management across regional and global markets.
            </p>
            <p style={{ color: C.textMuted, fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>
              Our operations are guided by innovation, health and safety compliance, operational excellence, and environmental stewardship. From initial survey to mine rehabilitation, we deliver high-grade raw materials to infrastructure, energy, steel, and manufacturing sectors.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              {[
                { label: "Verified Mineral Resources", icon: Mountain },
                { label: "100% Safety Compliance",    icon: ShieldCheck },
                { label: "Global Export Network",      icon: Globe },
              ].map(({ label, icon: Icon }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, background: C.offWhite, border: `1px solid ${C.border}`, padding: "10px 16px", borderRadius: 10, fontSize: 13, fontWeight: 700, color: C.logoNavy }}>
                  <Icon size={16} style={{ color: C.gold }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Image Container with Upload Button */}
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: 420, boxShadow: "0 16px 40px rgba(22,36,62,0.08)", border: `2px solid ${C.border}`, background: C.offWhite }}>
            {aboutImg ? (
              <img src={aboutImg} alt="About National Mines" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 420 }} />
            ) : (
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 420, background: C.offWhite, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40, color: C.logoNavy, border: `1px solid ${C.border}` }}>
                <Mountain size={64} style={{ color: C.gold, marginBottom: 20 }} />
                <h3 style={{ fontSize: 24, fontWeight: 900, textTransform: "uppercase", marginBottom: 12, color: C.logoNavy }}>
                  National Mines Operations
                </h3>
                <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  State-of-the-art mineral exploration, processing facilities, and sustainable resource management solutions.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.white, padding: "12px 18px", borderRadius: 12, border: `1px solid ${C.border}` }}>
                  <Award size={20} style={{ color: C.gold }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.logoNavy }}>20+ Years Industry Excellence</span>
                </div>
              </div>
            )}
            <AboutImageUploader aboutImg={aboutImg} setAboutImg={setAboutImg} />
          </div>
        </div>
      </section>

      {/* ══ CORE SERVICES SECTION ════════════════════════════════════════════ */}
      <section id="services" style={{ padding: "90px 40px", background: C.offWhite, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.goldBorder}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              What We Offer
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 38px)", color: C.logoNavy, textTransform: "uppercase" }}>
              OUR CORE SERVICES
            </h2>
            <p style={{ color: C.textMuted, maxWidth: 640, margin: "12px auto 0", fontSize: 15, lineHeight: 1.8 }}>
              End-to-end mining solutions from preliminary geological survey and exploration to mineral extraction, processing, and environmental restoration.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                style={{
                  background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 16,
                  padding: 28, transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", position: "relative", overflow: "hidden",
                  boxShadow: "0 4px 14px rgba(22,36,62,0.03)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = C.gold;
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(197,155,39,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(22,36,62,0.03)";
                }}
              >
                <div style={{ width: 50, height: 50, background: C.goldPale, borderRadius: 12, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={24} style={{ color: C.gold }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: C.logoNavy, marginBottom: 10, textTransform: "uppercase" }}>{title}</h3>
                <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MINERAL PORTFOLIO ═════════════════════════════════════════════════ */}
      <section id="minerals" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.goldBorder}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              Resource Portfolio
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 38px)", color: C.logoNavy, textTransform: "uppercase" }}>
              MINERALS WE PRODUCE
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 14 }}>
            {MINERALS.map(({ name, img }, i) => (
              <div
                key={i}
                style={{
                  position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "1",
                  border: `1.5px solid ${C.border}`, cursor: "pointer", transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.gold;
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 24px rgba(197,155,39,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,36,62,0.85) 0%, transparent 70%)",
                  display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "10px 6px",
                }}>
                  <span style={{ color: "#fff", fontSize: 11, fontWeight: 800, textTransform: "uppercase", textAlign: "center", letterSpacing: "0.04em" }}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES & PROCESS ═════════════════════════════════════════════ */}
      <section id="industries" style={{ padding: "90px 40px", background: C.offWhite, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "start" }}>
          {/* Key Sectors */}
          <div>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.gold}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Key Sectors
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px, 4vw, 36px)", color: C.logoNavy, marginBottom: 24, textTransform: "uppercase" }}>
              INDUSTRIES WE SUPPORT
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {INDUSTRIES.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  style={{
                    background: C.white, border: `1.5px solid ${C.border}`,
                    borderRadius: 12, padding: "18px 12px", textAlign: "center", transition: "all 0.3s",
                    boxShadow: "0 2px 8px rgba(22,36,62,0.03)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.gold;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(197,155,39,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(22,36,62,0.03)";
                  }}
                >
                  <Icon size={24} style={{ color: C.gold, marginBottom: 8 }} />
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.logoNavy, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mining Process */}
          <div>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.gold}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Mining Workflow
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(26px, 4vw, 36px)", color: C.logoNavy, marginBottom: 24, textTransform: "uppercase" }}>
              HOW WE OPERATE
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PROCESS_STEPS.map(({ num, title, desc }) => (
                <div key={num} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 12, padding: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.gold, color: C.white, fontWeight: 900, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {num}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: C.logoNavy, marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 12.5, color: C.textMuted, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SUSTAINABILITY INITIATIVES ═══════════════════════════════════════ */}
      <section id="sustainability" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.goldBorder}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              Responsibility
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 38px)", color: C.logoNavy, textTransform: "uppercase" }}>
              SUSTAINABILITY & SAFETY
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {SUSTAINABILITY_ITEMS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                style={{
                  background: C.offWhite, border: `1.5px solid ${C.border}`, borderRadius: 16,
                  padding: 24, transition: "all 0.3s", boxShadow: "0 4px 12px rgba(22,36,62,0.03)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.gold;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 46, height: 46, background: C.goldPale, borderRadius: 12, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon size={22} style={{ color: C.gold }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 15, color: C.logoNavy, marginBottom: 8, textTransform: "uppercase" }}>{title}</h3>
                <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMBINED FAQS & TESTIMONIALS SECTION (Side-by-Side) ══════════════ */}
      <section style={{ padding: "90px 40px", background: C.offWhite, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
          {/* Left Column: Testimonial Slider */}
          <div>
            <TestimonialSlider items={TESTIMONIALS} />
          </div>

          {/* Right Column: FAQ Accordion */}
          <div style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 20, padding: 32, boxShadow: "0 6px 20px rgba(22,36,62,0.05)" }}>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 4 }}>Common Questions</span>
            <h3 style={{ fontWeight: 800, fontSize: 20, color: C.logoNavy, marginBottom: 20 }}>Frequently Asked Questions</h3>
            <div>
              {FAQS.map((f, i) => (
                <FaqItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT US SECTION (With Service Dropdown) ══════════════════════ */}
      <section id="contact" style={{ padding: "90px 40px", background: C.white }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <span style={{ display: "inline-block", padding: "6px 16px", background: C.goldPale, border: `1px solid ${C.goldBorder}`, borderRadius: 30, fontSize: 12, fontWeight: 800, color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
              Get In Touch
            </span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(28px, 4vw, 38px)", color: C.logoNavy, textTransform: "uppercase" }}>
              CONTACT NATIONAL MINES CORPORATION
            </h2>
            <p style={{ color: C.textMuted, maxWidth: 600, margin: "10px auto 0", fontSize: 15, lineHeight: 1.8 }}>
              Partner with NMC for reliable mineral supply, mining consultancy, and strategic resource development solutions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40, alignItems: "start" }}>
            {/* Contact Info Card */}
            <div style={{ background: C.offWhite, border: `2px solid ${C.border}`, borderRadius: 20, padding: 36, color: C.logoNavy, boxShadow: "0 12px 32px rgba(22,36,62,0.06)" }}>
              <h3 style={{ fontWeight: 900, fontSize: 22, marginBottom: 28, textTransform: "uppercase", color: C.logoNavy }}>Headquarters Contact</h3>
              {[
                { icon: Phone, label: "Phone", val: CONTACT_INFO.phone },
                { icon: MessageCircle, label: "WhatsApp", val: CONTACT_INFO.whatsapp1 },
                { icon: MessageCircle, label: "WhatsApp", val: CONTACT_INFO.whatsapp2 },
                { icon: Mail, label: "Email", val: CONTACT_INFO.email1 },
                { icon: Mail, label: "Support Email", val: CONTACT_INFO.email2 },
              ].map(({ icon: Icon, label, val }, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, background: C.goldPale, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${C.gold}` }}>
                    <Icon size={18} style={{ color: C.gold }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: C.textLight, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                    <div style={{ fontSize: 14, color: C.logoNavy, fontWeight: 700 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 20, padding: 36, boxShadow: "0 6px 20px rgba(22,36,62,0.04)" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEDICATED LOCATION SECTION (Separate Section Below Contact) ════════ */}
      <section style={{ padding: "90px 40px", background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 36, alignItems: "center" }}>
          {/* Location Info Box */}
          <div style={{ background: C.white, border: `2px solid ${C.border}`, borderRadius: 20, padding: 36, color: C.logoNavy, boxShadow: "0 12px 32px rgba(22,36,62,0.06)" }}>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: 8 }}>Our Location</span>
            <h3 style={{ fontWeight: 900, fontSize: 24, marginBottom: 16, textTransform: "uppercase", color: C.logoNavy }}>VISIT OUR HEAD OFFICE</h3>
            <p style={{ color: C.textMuted, fontSize: 14.5, lineHeight: 1.8, marginBottom: 24 }}>
              We welcome partners, developers, and clients for project discussions, trade planning, and mineral consultations at our Lahore headquarters.
            </p>
            <div style={{ background: C.offWhite, borderRadius: 14, padding: 20, border: `1px solid ${C.border}`, marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <MapPin size={20} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <div style={{ color: C.logoNavy, fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>{CONTACT_INFO.address}</div>
              </div>
            </div>
            <a
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px",
                background: C.gold, color: C.white, borderRadius: 10, fontWeight: 800, fontSize: 13,
                textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em",
                boxShadow: "0 4px 14px rgba(197,155,39,0.3)", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.goldHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.gold; }}
            >
              Open in Google Maps <ChevronRight size={16} />
            </a>
          </div>

          {/* Map Embed */}
          <div style={{ overflow: "hidden", borderRadius: 20, border: `2px solid ${C.border}`, boxShadow: "0 8px 24px rgba(22,36,62,0.08)" }}>
            <iframe
              title="National Mines Corporation Office Location"
              src={CONTACT_INFO.mapEmbed}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{ background: C.white, borderTop: `2px solid ${C.border}`, color: C.logoNavy, paddingTop: 64, paddingBottom: 28 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.3fr", gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: C.white, border: `2px solid ${C.logoNavy}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mountain size={22} style={{ color: C.logoNavy }} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16, color: C.logoNavy, lineHeight: 1.1, textTransform: "uppercase" }}>NATIONAL MINES</div>
                  <div style={{ fontSize: 10.5, color: C.gold, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>CORPORATION – NMC</div>
                </div>
              </div>
              <p style={{ color: C.textMuted, fontSize: 13.5, lineHeight: 1.8, marginBottom: 20 }}>
                Specializing in mineral exploration, mine development, extraction operations, and sustainable resource management worldwide.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: 8, background: C.offWhite, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Icon size={16} style={{ color: C.logoNavy }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: 14, color: C.gold, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {NAV_LINKS.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{ color: C.textMuted, textDecoration: "none", fontSize: 13, transition: "color 0.2s", fontWeight: 600 }}
                      onMouseEnter={e => { e.target.style.color = C.gold; }}
                      onMouseLeave={e => { e.target.style.color = C.textMuted; }}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: 14, color: C.gold, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Services</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {SERVICES.map(s => (
                  <li key={s.title}>
                    <a href="#services" style={{ color: C.textMuted, textDecoration: "none", fontSize: 13, transition: "color 0.2s", fontWeight: 600 }}
                      onMouseEnter={e => { e.target.style.color = C.gold; }}
                      onMouseLeave={e => { e.target.style.color = C.textMuted; }}
                    >{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: 14, color: C.gold, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 10, color: C.textMuted, fontSize: 12.5, lineHeight: 1.6, fontWeight: 500 }}>
                  <MapPin size={16} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div style={{ display: "flex", gap: 10, color: C.textMuted, fontSize: 12.5, fontWeight: 600 }}>
                  <Phone size={15} style={{ color: C.gold, flexShrink: 0 }} />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div style={{ display: "flex", gap: 10, color: C.textMuted, fontSize: 12.5, fontWeight: 600 }}>
                  <Mail size={15} style={{ color: C.gold, flexShrink: 0 }} />
                  <span>{CONTACT_INFO.email1}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, textAlign: "center", color: C.textLight, fontSize: 12, fontWeight: 500 }}>
            © {new Date().getFullYear()} National Mines Corporation (NMC) — All Rights Reserved. | A Roy Sons Group Company
          </div>
        </div>
      </footer>
    </div>
  );
}