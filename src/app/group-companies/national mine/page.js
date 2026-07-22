"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3, Building, Building2, CheckCircle2,
  ChevronDown, ChevronRight, Facebook, Factory,
  HardHat, Landmark, Layers, Linkedin, Mail,
  MapPin, Minus, Mountain, Phone, Plus, Shield,
  ShieldCheck, Star, ThumbsUp, Truck, Twitter,
  Users, Youtube, Zap, Leaf, Pickaxe, Drill,
  FlaskConical, Globe, Award, TrendingUp,
} from "lucide-react";

// ─── Colour Palette ──────────────────────────────────────────────────────────
const COLORS = {
  primary: "#000000",      // pure black
  gold: "#C8961E",      // rich mine-gold
  goldLight: "#E8B84B",      // lighter gold accent
  darkBg: "#000000",      // pure black background
  surface: "#111111",      // card surfaces
  surface2: "#181818",      // slightly lighter card
  border: "#2A2A2A",      // subtle borders
  textMain: "#ffffff",      // main text color white
  textMuted: "#A89880",      // muted warm-grey
  textLight: "#6B5D4E",      // faint text
  white: "#ffffff",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Careers", href: "#careers" },
  { label: "News", href: "#news" },
];

const STATS = [
  { icon: Award, value: "20+", label: "Years of Mining\nExperience" },
  { icon: BarChart3, value: "50+", label: "Mining & Exploration\nProjects" },
  { icon: Truck, value: "5 Million+", label: "Tons of Minerals\nProcessed" },
  { icon: Users, value: "500+", label: "Skilled Engineers &\nProfessionals" },
  { icon: ShieldCheck, value: "99%", label: "Operational Safety\nCompliance" },
];

const SERVICES = [
  {
    icon: Mountain,
    title: "Mineral Exploration",
    desc: "Comprehensive surveys, drilling, mapping & resource evaluation to discover valuable mineral deposits.",
  },
  {
    icon: HardHat,
    title: "Mine Planning & Development",
    desc: "Strategic mine design, infrastructure planning and engineering support for sustainable mining operations.",
  },
  {
    icon: Drill,
    title: "Mining Operations",
    desc: "Modern extraction methods with advanced equipment and international standards of operations.",
  },
  {
    icon: FlaskConical,
    title: "Mineral Processing",
    desc: "Crushing, grinding, separation, beneficiation & refining to maximize mineral recovery and product quality.",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    desc: "Land rehabilitation, water conservation, waste management and biodiversity protection at every stage.",
  },
  {
    icon: BarChart3,
    title: "Mining Consultancy",
    desc: "Technical consulting, feasibility studies, geological assessments and resource management solutions.",
  },
];

const MINERALS = [
  { name: "Gold", img: "/mine gold.png" },
  { name: "Copper", img: "/mine copper.png" },
  { name: "Iron Ore", img: "/mine gold.png" },
  { name: "Coal", img: "/mine copper.png" },
  { name: "Limestone", img: "/mine gold.png" },
  { name: "Gypsum", img: "/mine copper.png" },
  { name: "Chromite", img: "/mine gold.png" },
  { name: "Marble", img: "/mine copper.png" },
  { name: "Granite", img: "/mine gold.png" },
  { name: "Silica Sand", img: "/mine copper.png" },
  { name: "Industrial\nMinerals", img: "/mine gold.png" },
];

const INDUSTRIES = [
  { icon: Building, label: "Construction" },
  { icon: Landmark, label: "Infrastructure\nDevelopment" },
  { icon: Factory, label: "Steel\nManufacturing" },
  { icon: Building2, label: "Cement\nIndustry" },
  { icon: Zap, label: "Energy &\nPower" },
  { icon: Layers, label: "Manufacturing" },
  { icon: Globe, label: "Export\nMarkets" },
  { icon: Landmark, label: "Government\nProjects" },
  { icon: Factory, label: "Industrial\nProcessing" },
  { icon: HardHat, label: "Industrial\nProcessing" },
  { icon: TrendingUp, label: "Engineering &\nHeavy Industries" },
];

const SUSTAINABILITY_ITEMS = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Sustainable mining for future generations through responsible resource utilization, conservation and rehabilitation programs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    desc: "Strict health, safety and environmental standards ensure safe operations and compliance at every stage.",
  },
  {
    icon: Zap,
    title: "Technology & Innovation",
    desc: "Advanced technologies that improve efficiency, safety and sustainability.",
  },
  {
    icon: Star,
    title: "Featured Projects",
    desc: "Open-Pit Mining Operations, Underground Mining Development & Mineral Processing Facilities.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Geological Survey", desc: "Detailed geological investigations and mineral resource identification." },
  { num: "02", title: "Exploration & Drilling", desc: "Resource verification through drilling programs and technical assessments." },
  { num: "03", title: "Mine Planning", desc: "Engineering design, infrastructure planning and operational strategy." },
  { num: "04", title: "Extraction", desc: "Safe, efficient mineral extraction using advanced technologies." },
  { num: "05", title: "Processing", desc: "Beneficiation techniques that improve mineral recovery and quality." },
  { num: "06", title: "Rehabilitation", desc: "Land restoration and environmental rehabilitation after mining operations." },
];

const TESTIMONIALS = [
  {
    name: "Industrial Partner",
    quote: "National Mines Corporation consistently delivers reliable mineral resources through innovation, operational excellence and exceptional environmental responsibility.",
  },
  {
    name: "Infrastructure Developer",
    quote: "Their commitment to safety, sustainability and operational excellence has made them a trusted partner in large-scale mining projects.",
  },
];

const FAQS = [
  {
    q: "What services does National Mines Corporation provide?",
    a: "We offer mineral exploration, mine planning & development, mining operations, mineral processing, environmental management and mining consultancy services.",
  },
  {
    q: "Which minerals do you work with?",
    a: "We work with gold, copper, iron ore, coal, limestone, gypsum, chromite, marble, granite, silica sand and various industrial minerals.",
  },
  {
    q: "Do you follow international safety standards?",
    a: "Yes. We adhere strictly to international health, safety and environmental standards with 99% operational safety compliance.",
  },
  {
    q: "How do you support sustainable mining?",
    a: "Through responsible resource utilization, land rehabilitation, water conservation, biodiversity protection and continuous environmental impact assessments.",
  },
];

// ─── Inline styles ────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  /* ensure the entire app root and document background are pure black */
  html, body, #__next { background-color: ${COLORS.darkBg} !important; color: ${COLORS.textMain} !important; }

  .nm-page { font-family: 'Inter', sans-serif; background-color: ${COLORS.darkBg}; color: ${COLORS.textMain}; }
  .nm-page *, .nm-page *::before, .nm-page *::after { box-sizing: border-box; }

  /* nav */
  .nm-nav { background: rgba(13,13,13,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid ${COLORS.border}; }
  .nm-nav-link { color: ${COLORS.textMain}; font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; transition: color 0.2s; text-decoration: none; }
  .nm-nav-link:hover { color: ${COLORS.gold}; }
  .nm-btn-primary { background: ${COLORS.gold}; color: #000; border: none; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; padding: 11px 20px; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .nm-btn-primary:hover { background: ${COLORS.goldLight}; }
  .nm-btn-outline { background: transparent; color: ${COLORS.textMain}; border: 1.5px solid ${COLORS.textMain}; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; padding: 11px 20px; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
  .nm-btn-outline:hover { border-color: ${COLORS.gold}; color: ${COLORS.gold}; background: rgba(200,150,30,0.12); }
  svg { background: transparent !important; background-color: transparent !important; }

  /* section label */
  .nm-label { color: ${COLORS.gold}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.25em; margin-bottom: 8px; }
  .nm-heading { color: ${COLORS.textMain}; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.2; }

  /* cards */
  .nm-card { background: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 8px; transition: all 0.3s; }
  .nm-card:hover { border-color: ${COLORS.gold}40; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,150,30,0.08); }

  /* stat card */
  .nm-stat { background: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 8px; padding: 18px 20px; display: flex; align-items: center; gap: 14px; }
  .nm-stat-icon { width: 48px; height: 48px; border-radius: 8px; background: rgba(200,150,30,0.1); border: 1px solid rgba(200,150,30,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  /* mineral tile */
  .nm-mineral { border-radius: 8px; overflow: hidden; position: relative; aspect-ratio: 1; cursor: default; }
  .nm-mineral:hover .nm-mineral-img { transform: scale(1.08); }
  .nm-mineral-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
  .nm-mineral-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent 70%); display: flex; align-items: flex-end; justify-content: center; padding: 8px; }

  /* industry card */
  .nm-industry { background: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 8px; padding: 14px 8px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; transition: all 0.3s; }
  .nm-industry:hover { border-color: ${COLORS.gold}50; background: ${COLORS.surface2}; }

  /* process step */
  .nm-process-step { display: flex; gap: 14px; }
  .nm-process-num { width: 36px; height: 36px; border-radius: 50%; background: ${COLORS.gold}; color: #000; font-size: 11px; font-weight: 900; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  /* sustainability card */
  .nm-sus-card { background: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 8px; padding: 22px; }
  .nm-sus-icon { width: 44px; height: 44px; border-radius: 8px; background: rgba(200,150,30,0.1); border: 1px solid rgba(200,150,30,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }

  /* faq */
  .nm-faq { background: ${COLORS.surface}; border: 1px solid ${COLORS.border}; border-radius: 8px; overflow: hidden; }
  .nm-faq-btn { width: 100%; text-align: left; background: none; border: none; color: ${COLORS.textMain}; padding: 16px 20px; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
  .nm-faq-btn:hover { color: ${COLORS.gold}; }
  .nm-faq-answer { padding: 0 20px 16px; font-size: 12.5px; line-height: 1.7; color: ${COLORS.textMuted}; }

  /* footer */
  .nm-footer { background: ${COLORS.textMain}; border-top: 1px solid ${COLORS.border}; }

  @keyframes nm-fade-up { from { opacity:0; transform:translateY(20px);} to { opacity:1; transform:translateY(0);} }
  .nm-fade-up { animation: nm-fade-up 0.6s ease both; }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────
function Label({ children }) {
  return <p className="nm-label">{children}</p>;
}
function Heading({ children, className = "" }) {
  return <h2 className={`nm-heading ${className}`}>{children}</h2>;
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="nm-faq">
      <button className="nm-faq-btn" onClick={onToggle}>
        <span>{q}</span>
        <span style={{ color: COLORS.gold, flexShrink: 0 }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && <p className="nm-faq-answer">{a}</p>}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function NationalMinePage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const prev = { bg: document.body.style.backgroundColor, color: document.body.style.color };
    document.body.style.backgroundColor = COLORS.darkBg;
    document.body.style.color = COLORS.textMain;
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
    };
  }, []);

  return (
    <div className="nm-page" style={{ minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="nm-nav sticky top-0 z-50">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: 6, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mountain size={22} color="#000" />
            </div>
            <div>
              <p style={{ color: COLORS.textMain, fontSize: 15, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.05em" }}>
                NATIONAL
              </p>
              <p style={{ color: COLORS.gold, fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", lineHeight: 1 }}>
                MINES CORPORATION
              </p>
            </div>
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden lg:flex">
            {NAV_LINKS.map(({ label, href, hasDropdown }) => (
              <a key={label} href={href} className="nm-nav-link" style={{ display: "flex", alignItems: "center", gap: 3 }}>
                {label}
                {hasDropdown && <ChevronDown size={12} style={{ color: COLORS.gold }} />}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="nm-btn-primary" style={{ display: "flex" }}>
            <Phone size={13} />
            Contact Us
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="home" style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Hero image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/mine header.png"
            alt="Mining operations aerial view"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000000 55%, rgba(0,0,0,0.7) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "100px 24px 80px", width: "100%" }}>
          <div style={{ maxWidth: 620 }} className="nm-fade-up">
            <p className="nm-label" style={{ marginBottom: 16 }}>Trusted Mining & Mineral Development Company</p>
            <h1 style={{ color: COLORS.textMain, fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 10 }}>
              Sustainable Mining.
            </h1>
            <h1 style={{ color: COLORS.gold, fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 22 }}>
              Responsible Resource<br />Development.
            </h1>
            <p style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
              National Mines Corporation is committed to advancing the mining industry through responsible exploration,
              efficient mineral extraction, and sustainable resource development.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" className="nm-btn-primary">
                Explore Projects <ChevronRight size={14} />
              </a>
              <a href="#about" className="nm-btn-outline">
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT + STATS ──────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "80px 24px", backgroundColor: COLORS.darkBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
            {/* Text */}
            <div>
              <Label>About Us</Label>
              <h2 style={{ color: COLORS.textMain, fontSize: 28, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, lineHeight: 1.2 }}>
                Building the Future Through<br />
                <span style={{ color: COLORS.gold }}>Responsible Mining</span>
              </h2>
              <p style={{ color: COLORS.textMuted, fontSize: 13.5, lineHeight: 1.8, marginBottom: 14 }}>
                National Mines Corporation is a leading mining and mineral development organization specializing in exploration, mine planning, extraction, mineral processing, and sustainable resource management.
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: 13.5, lineHeight: 1.8, marginBottom: 14 }}>
                Our operations are guided by innovation, safety, operational excellence, and environmental responsibility. From geological surveys to mine rehabilitation, every stage of our mining process is designed to maximize efficiency while preserving natural resources for future generations.
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: 13.5, lineHeight: 1.8 }}>
                We work closely with government agencies, industrial partners, and infrastructure developers to provide reliable mineral resources that contribute to economic growth and national development.
              </p>
            </div>

            {/* Company statistics */}
            <div>
              <Label>Company Statistics</Label>
              <Heading className="" style={{ marginBottom: 24 }}>Our Key Milestones</Heading>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={value} className="nm-stat">
                    <div className="nm-stat-icon">
                      <Icon size={20} color={COLORS.gold} />
                    </div>
                    <div>
                      <p style={{ color: COLORS.textMain, fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{value}</p>
                      <p style={{ color: COLORS.textMuted, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4, whiteSpace: "pre-line", marginTop: 4 }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "80px 24px", backgroundColor: COLORS.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Label>Our Core Services</Label>
            <Heading>What We Offer</Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="nm-card" style={{ padding: "24px 18px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(200,150,30,0.1)", border: `1px solid rgba(200,150,30,0.25)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon size={20} color={COLORS.gold} />
                </div>
                <h3 style={{ color: COLORS.textMain, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{title}</h3>
                <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINERALS WE PRODUCE ────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", backgroundColor: COLORS.darkBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Label>Minerals We Produce</Label>
            <Heading>Our Mineral Portfolio</Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 10 }}>
            {MINERALS.map(({ name, img }) => (
              <div key={name} className="nm-mineral">
                <img src={img} alt={name} className="nm-mineral-img" style={{ display: "block" }} />
                <div className="nm-mineral-overlay">
                  <span style={{ color: COLORS.white, fontSize: 11, fontWeight: 800, textTransform: "uppercase", textAlign: "center", letterSpacing: "0.05em", whiteSpace: "pre-line" }}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES + PROCESS ───────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", backgroundColor: COLORS.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Industries */}
            <div>
              <Label>Industries We Support</Label>
              <Heading style={{ marginBottom: 28 }}>Key Sectors</Heading>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 20 }}>
                {INDUSTRIES.map(({ icon: Icon, label }) => (
                  <div key={label} className="nm-industry">
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(200,150,30,0.1)", border: `1px solid rgba(200,150,30,0.2)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} color={COLORS.gold} />
                    </div>
                    <p style={{ color: COLORS.textMuted, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.4, whiteSpace: "pre-line", textAlign: "center" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mining Process */}
            <div>
              <Label>Mining Process</Label>
              <Heading style={{ marginBottom: 28 }}>How We Operate</Heading>
              <div style={{ position: "relative", marginTop: 24 }}>
                {/* Process image */}
                <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", marginBottom: 24, height: 180 }}>
                  <Image src="/mine process.png" alt="Mining process" fill style={{ objectFit: "cover" }} sizes="500px" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.5), transparent)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {PROCESS_STEPS.map(({ num, title, desc }) => (
                    <div key={num} className="nm-process-step">
                      <div className="nm-process-num">{num}</div>
                      <div>
                        <p style={{ color: COLORS.textMain, fontSize: 13, fontWeight: 800, marginBottom: 3 }}>{title}</p>
                        <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY / FEATURES ──────────────────────────────────────── */}
      <section id="sustainability" style={{ padding: "80px 24px", backgroundColor: COLORS.darkBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 60 }}>
            {SUSTAINABILITY_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="nm-sus-card">
                <div className="nm-sus-icon">
                  <Icon size={20} color={COLORS.gold} />
                </div>
                <h3 style={{ color: COLORS.textMain, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: COLORS.textMuted, fontSize: 12.5, lineHeight: 1.7, marginBottom: 12 }}>{desc}</p>
                <a href="#" style={{ color: COLORS.gold, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Learn More <ChevronRight size={12} />
                </a>
              </div>
            ))}
          </div>

          {/* Vision + Mission + Testimonials + FAQ + CTA */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24 }}>
            {/* Vision */}
            <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 24 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Mountain size={16} color="#000" />
                </div>
                <h3 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>Our Vision</h3>
              </div>
              <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.7 }}>
                To become a globally recognized leader in sustainable mining by delivering innovative resource development solutions that create long-term economic value while protecting the environment and supporting future generations.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 24 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Award size={16} color="#000" />
                </div>
                <h3 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>Our Mission</h3>
              </div>
              <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.7 }}>
                To responsibly explore, develop and manage mineral resources through innovation, operational efficiency, environmental stewardship and a strong commitment to safety, quality and sustainable development.
              </p>
            </div>

            {/* Testimonials */}
            <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 24 }}>
              <h3 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16 }}>Client Testimonials</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {TESTIMONIALS.map(({ name, quote }) => (
                  <div key={name} style={{ borderLeft: `3px solid ${COLORS.gold}`, paddingLeft: 12 }}>
                    <p style={{ color: COLORS.textMuted, fontSize: 11.5, lineHeight: 1.65, marginBottom: 6, fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
                    <p style={{ color: COLORS.goldLight, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 24 }}>
              <h3 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16 }}>FAQ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {FAQS.map(({ q, a }, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${COLORS.border}` }}
                    >
                      <span style={{ color: COLORS.textMain, fontSize: 12, fontWeight: 600 }}>{q}</span>
                      <ChevronDown size={13} color={COLORS.gold} style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }} />
                    </button>
                    {openFaq === i && (
                      <p style={{ color: COLORS.textMuted, fontSize: 11.5, lineHeight: 1.6, padding: "8px 0 4px" }}>{a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY + INNOVATION CTA ────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 24px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/mine technology.png" alt="Mining technology" fill style={{ objectFit: "cover" }} sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000000 55%, rgba(0,0,0,0.70) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <Label>Advancing Mining</Label>
            <h2 style={{ color: COLORS.textMain, fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 18 }}>
              Through Innovation<br />
              <span style={{ color: COLORS.gold }}>&amp; Sustainability</span>
            </h2>
            <p style={{ color: COLORS.textMuted, fontSize: 13.5, lineHeight: 1.8, marginBottom: 28, maxWidth: 460 }}>
              National Mines Corporation continues to support industrial development through responsible mining, advanced technologies, operational excellence, and sustainable resource management.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" className="nm-btn-primary">
                Explore Projects <ChevronRight size={14} />
              </a>
              <a href="#sustainability" className="nm-btn-outline">
                Sustainability Initiatives <ChevronRight size={14} />
              </a>
            </div>
          </div>
          {/* Stats repeat – compact */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={value} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(200,150,30,0.2)`, borderRadius: 10, padding: "20px 16px", textAlign: "center" }}>
                <Icon size={24} color={COLORS.gold} style={{ marginBottom: 8 }} />
                <p style={{ color: COLORS.textMain, fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{value}</p>
                <p style={{ color: COLORS.textMuted, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.4, whiteSpace: "pre-line", marginTop: 4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="nm-footer" style={{ padding: "60px 24px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Footer columns stacked vertically */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 48 }}>

            {/* Brand row — logo + description + socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 6, background: COLORS.gold, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mountain size={22} color="#000" />
                </div>
                <div>
                  <p style={{ color: COLORS.textMain, fontSize: 16, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1 }}>NATIONAL</p>
                  <p style={{ color: COLORS.gold, fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MINES CORPORATION</p>
                </div>
              </div>
              <p style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.7, maxWidth: 460 }}>
                Trusted Mining &amp; Mineral Development Company — responsibly exploring and developing Pakistan's natural mineral resources.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s" }}>
                    <Icon size={14} color={COLORS.textMuted} />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: COLORS.border }} />

            {/* Three link columns side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32 }}>
              {/* Quick Links */}
              <div>
                <h4 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Company</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Home", "About", "Services", "Projects", "Sustainability", "Careers", "News"].map(l => (
                    <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: COLORS.textMuted, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}>{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Our Services</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Mineral Exploration", "Mine Development", "Mining Operations", "Mineral Processing", "Environmental Management", "Mining Consultancy"].map(l => (
                    <li key={l}><a href="#services" style={{ color: COLORS.textMuted, fontSize: 13, textDecoration: "none" }}>{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Industries</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Construction", "Infrastructure", "Energy", "Manufacturing", "Government", "Industrial Development"].map(l => (
                    <li key={l}><a href="#" style={{ color: COLORS.textMuted, fontSize: 13, textDecoration: "none" }}>{l}</a></li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ color: COLORS.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Contact</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <p style={{ color: COLORS.textMuted, fontSize: 13, display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <MapPin size={14} color={COLORS.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                    Lahore, Pakistan
                  </p>
                  <p style={{ color: COLORS.textMuted, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                    <Phone size={14} color={COLORS.gold} style={{ flexShrink: 0 }} />
                    +92 300 000 0000
                  </p>
                  <p style={{ color: COLORS.textMuted, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                    <Mail size={14} color={COLORS.gold} style={{ flexShrink: 0 }} />
                    info@nationalmines.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: 20, textAlign: "center" }}>
            <p style={{ color: COLORS.textLight, fontSize: 11.5 }}>
              &copy; {new Date().getFullYear()} National Mines Corporation. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}