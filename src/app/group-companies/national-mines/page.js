"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3, Building, Building2, ChevronDown, ChevronRight,
  Facebook, Factory, HardHat, Landmark, Layers, Linkedin,
  Mail, MapPin, Mountain, Phone, Plus, Minus, Shield,
  ShieldCheck, Star, Truck, Twitter, Users, Youtube,
  Zap, Leaf, Drill, FlaskConical, Globe, Award, TrendingUp,
} from "lucide-react";

// ─── Colour Palette (Derived from Logo & White Theme) ────────────────────────
const C = {
  navy:        "#1E3A53",   // primary mountain color from logo
  navyDark:    "#122538",   // dark contrast navy
  gold:        "#D1A153",   // accent rock gold from logo
  goldLight:   "#E5C17C",
  goldPale:    "rgba(209,161,83,0.1)",
  goldBorder:  "rgba(209,161,83,0.3)",
  textDark:    "#334155",   // tailwind slate-700 for high-contrast reading
  textLight:   "#64748B",   // tailwind slate-500 for secondary text
  bgWhite:     "#FFFFFF",   // clean white container
  bgTint:      "#F8FAFC",   // tailwind slate-50 for subtle sections
  border:      "#E2E8F0",   // tailwind slate-200
  borderDark:  "#CBD5E1",
};

const NAV_LINKS = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Services",       href: "#services" },
  { label: "Projects",       href: "#projects" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Careers",        href: "#careers" },
  { label: "News",           href: "#news" },
];

const STATS = [
  { icon: Award,      value: "20+",       label: "Years of Mining\nExperience" },
  { icon: BarChart3,  value: "50+",       label: "Mining & Exploration\nProjects" },
  { icon: Truck,      value: "5 Million+",label: "Tons of Minerals\nProcessed" },
  { icon: Users,      value: "500+",      label: "Skilled Engineers &\nProfessionals" },
  { icon: ShieldCheck,value: "99%",       label: "Operational Safety\nCompliance" },
];

const SERVICES = [
  { icon: Mountain,     title: "Mineral Exploration",        desc: "Comprehensive surveys, drilling, mapping & resource evaluation to discover valuable mineral deposits." },
  { icon: HardHat,      title: "Mine Planning & Development", desc: "Strategic mine design, infrastructure planning and engineering support for sustainable mining operations." },
  { icon: Drill,        title: "Mining Operations",          desc: "Modern extraction methods with advanced equipment and international standards of operations." },
  { icon: FlaskConical, title: "Mineral Processing",         desc: "Crushing, grinding, separation, beneficiation & refining to maximize mineral recovery and product quality." },
  { icon: Leaf,         title: "Environmental Management",   desc: "Land rehabilitation, water conservation, waste management and biodiversity protection at every stage." },
  { icon: BarChart3,    title: "Mining Consultancy",         desc: "Technical consulting, feasibility studies, geological assessments and resource management solutions." },
];

const MINERALS = [
  { name: "Gold",              img: "/mine gold.png" },
  { name: "Copper",            img: "/mine copper.png" },
  { name: "Iron Ore",          img: "/mine gold.png" },
  { name: "Coal",              img: "/mine copper.png" },
  { name: "Limestone",         img: "/mine gold.png" },
  { name: "Gypsum",            img: "/mine copper.png" },
  { name: "Chromite",          img: "/mine gold.png" },
  { name: "Marble",            img: "/mine copper.png" },
  { name: "Granite",           img: "/mine gold.png" },
  { name: "Silica Sand",       img: "/mine copper.png" },
  { name: "Industrial Minerals",img: "/mine gold.png" },
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
  { icon: Leaf,       title: "Sustainability",        desc: "Sustainable mining for future generations through responsible resource utilization, conservation and rehabilitation programs." },
  { icon: ShieldCheck,title: "Safety & Compliance",  desc: "Strict health, safety and environmental standards ensure safe operations and compliance at every stage." },
  { icon: Zap,        title: "Technology & Innovation",desc: "Advanced technologies that improve efficiency, safety and sustainability." },
  { icon: Star,       title: "Featured Projects",    desc: "Open-Pit Mining Operations, Underground Mining Development & Mineral Processing Facilities." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Geological Survey",     desc: "Detailed geological investigations and mineral resource identification." },
  { num: "02", title: "Exploration & Drilling",desc: "Resource verification through drilling programs and technical assessments." },
  { num: "03", title: "Mine Planning",         desc: "Engineering design, infrastructure planning and operational strategy." },
  { num: "04", title: "Extraction",            desc: "Safe, efficient mineral extraction using advanced technologies." },
  { num: "05", title: "Processing",            desc: "Beneficiation techniques that improve mineral recovery and quality." },
  { num: "06", title: "Rehabilitation",        desc: "Land restoration and environmental rehabilitation after mining operations." },
];

const TESTIMONIALS = [
  { name: "Industrial Partner",      quote: "National Mines Corporation consistently delivers reliable mineral resources through innovation, operational excellence and exceptional environmental responsibility." },
  { name: "Infrastructure Developer",quote: "Their commitment to safety, sustainability and operational excellence has made them a trusted partner in large-scale mining projects." },
];

const FAQS = [
  { q: "What services does National Mines Corporation provide?",  a: "We offer mineral exploration, mine planning & development, mining operations, mineral processing, environmental management and mining consultancy services." },
  { q: "Which minerals do you work with?",                        a: "We work with gold, copper, iron ore, coal, limestone, gypsum, chromite, marble, granite, silica sand and various industrial minerals." },
  { q: "Do you follow international safety standards?",           a: "Yes. We adhere strictly to international health, safety and environmental standards with 99% operational safety compliance." },
  { q: "How do you support sustainable mining?",                  a: "Through responsible resource utilization, land rehabilitation, water conservation, biodiversity protection and continuous environmental impact assessments." },
];

// ─── Styles ───────────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  .nm-page { font-family:'Inter',sans-serif; background:${C.bgWhite}; color:${C.textDark}; }
  .nm-page *, .nm-page *::before, .nm-page *::after { box-sizing:border-box; margin:0; padding:0; }

  /* ══ SPECIFICITY OVERRIDES TO DEFEAT GLOBAL DARK ENGINE ══ */
  body:not(.roys-roys-theme),
  body:not(.roys-roys-theme) html,
  body:not(.roys-roys-theme) main,
  body:not(.roys-roys-theme) section,
  body:not(.roys-roys-theme) header,
  body:not(.roys-roys-theme) footer,
  body:not(.roys-roys-theme) .nm-page {
    background-color: #ffffff !important;
    color: ${C.textDark} !important;
  }

  body:not(.roys-roys-theme) div.nm-bg-tint,
  body:not(.roys-roys-theme) section.nm-bg-tint {
    background-color: ${C.bgTint} !important;
  }

  /* Headings Color Force */
  body:not(.roys-roys-theme) h1,
  body:not(.roys-roys-theme) h2,
  body:not(.roys-roys-theme) h3,
  body:not(.roys-roys-theme) h4,
  body:not(.roys-roys-theme) h5,
  body:not(.roys-roys-theme) h6 {
    color: ${C.navy} !important;
  }

  body:not(.roys-roys-theme) p,
  body:not(.roys-roys-theme) span,
  body:not(.roys-roys-theme) li,
  body:not(.roys-roys-theme) .nm-text-muted {
    color: ${C.textDark} !important;
  }

  /* ── dark sections overrides (scoped styling) ── */
  body:not(.roys-roys-theme) .nm-dark-section {
    background-color: transparent !important;
  }

  body:not(.roys-roys-theme) .nm-dark-section h1,
  body:not(.roys-roys-theme) .nm-dark-section h2,
  body:not(.roys-roys-theme) .nm-dark-section h3,
  body:not(.roys-roys-theme) .nm-dark-section h4 {
    color: #ffffff !important;
  }

  body:not(.roys-roys-theme) .nm-dark-section p,
  body:not(.roys-roys-theme) .nm-dark-section span,
  body:not(.roys-roys-theme) .nm-dark-section li {
    color: rgba(255, 255, 255, 0.85) !important;
  }

  body:not(.roys-roys-theme) .nm-dark-section .nm-label {
    color: ${C.goldLight} !important;
  }

  body:not(.roys-roys-theme) .nm-text-gold,
  body:not(.roys-roys-theme) .nm-dark-section .nm-text-gold {
    color: ${C.goldLight} !important;
  }

  body:not(.roys-roys-theme) .nm-dark-section p.nm-stat-val {
    color: #ffffff !important;
  }

  body:not(.roys-roys-theme) .nm-dark-section p.nm-stat-lbl {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  /* ── navbar ── */
  body:not(.roys-roys-theme) .nm-nav { 
    background: rgba(255,255,255,0.96) !important; 
    backdrop-filter: blur(14px);
    border-bottom: 1px solid ${C.border} !important; 
    position: sticky; 
    top: 0; 
    z-index: 50; 
  }
  .nm-nav-inner { max-width:1280px; margin:0 auto; padding:0 28px;
                  height:68px; display:flex; align-items:center; justify-content:space-between; }
  
  body:not(.roys-roys-theme) .nm-nav-link { 
    color: ${C.navy} !important; 
    font-size: 12.5px; 
    font-weight: 700;
    text-transform: uppercase; 
    letter-spacing: 0.09em;
    text-decoration: none; 
    transition: color 0.2s; 
    white-space: nowrap; 
  }
  body:not(.roys-roys-theme) .nm-nav-link:hover { color: ${C.gold} !important; }
  .nm-nav-links { display:flex; align-items:center; gap:32px; }

  /* ── buttons (Force Black Text on Gold Button / White on Dark button) ── */
  body:not(.roys-roys-theme) .nm-btn-black,
  body:not(.roys-roys-theme) .nm-btn-black * {
    background-color: ${C.navy} !important;
    color: #ffffff !important;
  }
  body:not(.roys-roys-theme) .nm-btn-black:hover,
  body:not(.roys-roys-theme) .nm-btn-black:hover * {
    background-color: ${C.navyDark} !important;
    color: ${C.gold} !important;
  }

  body:not(.roys-roys-theme) .nm-contact-btn,
  body:not(.roys-roys-theme) .nm-contact-btn * {
    background-color: ${C.navy} !important;
    color: #ffffff !important;
  }
  body:not(.roys-roys-theme) .nm-contact-btn:hover,
  body:not(.roys-roys-theme) .nm-contact-btn:hover * {
    background-color: ${C.navyDark} !important;
    color: ${C.gold} !important;
  }

  body:not(.roys-roys-theme) .nm-btn-outline-gold,
  body:not(.roys-roys-theme) .nm-btn-outline-gold * {
    background-color: transparent !important;
    color: ${C.navy} !important;
    border: 1.5px solid ${C.navy} !important;
  }
  body:not(.roys-roys-theme) .nm-btn-outline-gold:hover,
  body:not(.roys-roys-theme) .nm-btn-outline-gold:hover * {
    background-color: ${C.navy} !important;
    color: #ffffff !important;
  }

  body:not(.roys-roys-theme) .nm-btn-outline-white,
  body:not(.roys-roys-theme) .nm-btn-outline-white * {
    background-color: transparent !important;
    color: #ffffff !important;
    border: 1.5px solid rgba(255,255,255,0.7) !important;
  }
  body:not(.roys-roys-theme) .nm-btn-outline-white:hover,
  body:not(.roys-roys-theme) .nm-btn-outline-white:hover * {
    background-color: #ffffff !important;
    color: ${C.navy} !important;
  }

  .nm-btn-black, .nm-contact-btn, .nm-btn-outline-gold, .nm-btn-outline-white {
    font-weight: 800; font-size: 12px; text-transform: uppercase;
    letter-spacing: 0.08em; border-radius: 5px; padding: 12px 22px;
    cursor: pointer; transition: all 0.25s; text-decoration: none;
    display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
  }

  /* ── section helpers ── */
  body:not(.roys-roys-theme) .nm-label { 
    color: ${C.gold} !important; 
    font-size: 11px; 
    font-weight: 800;
    text-transform: uppercase; 
    letter-spacing: 0.28em; 
  }
  .nm-wrap { max-width:1280px; margin:0 auto; padding:0 28px; }

  /* ── about section ── */
  .nm-about-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; }
  @media(max-width:768px){ .nm-about-grid{grid-template-columns:1fr;} }

  /* ── stat cards ── */
  body:not(.roys-roys-theme) .nm-stat-card { 
    background: #ffffff !important; 
    border: 1px solid ${C.border} !important; 
    border-radius: 10px;
    padding: 20px 16px; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    gap: 8px; 
    transition: all 0.3s; 
  }
  body:not(.roys-roys-theme) .nm-stat-card:hover { 
    border-color: ${C.gold} !important; 
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  body:not(.roys-roys-theme) .nm-stat-icon { 
    width: 52px; 
    height: 52px; 
    border-radius: 10px;
    background: ${C.goldPale} !important; 
    border: 1px solid ${C.goldBorder} !important;
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }

  /* ── service cards ── */
  body:not(.roys-roys-theme) .nm-svc-card { 
    background: #ffffff !important; 
    border: 1px solid ${C.border} !important; 
    border-radius: 10px;
    padding: 24px 20px; 
    transition: all 0.3s; 
  }
  body:not(.roys-roys-theme) .nm-svc-card:hover { 
    border-color: ${C.gold} !important; 
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0,0,0,0.06); 
  }
  body:not(.roys-roys-theme) .nm-svc-icon { 
    width: 46px; 
    height: 46px; 
    border-radius: 9px;
    background: ${C.goldPale} !important; 
    border: 1px solid ${C.goldBorder} !important;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 14px; 
  }

  /* ── mineral strip ── */
  .nm-mineral { position:relative; border-radius:8px; overflow:hidden;
                cursor:default; flex-shrink:0; }
  .nm-mineral img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; display:block; }
  .nm-mineral:hover img { transform:scale(1.08); }
  .nm-mineral-label { position:absolute; bottom:0; left:0; right:0;
                      background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 100%);
                      padding:10px 6px 7px; text-align:center; }

  /* ── industry tile ── */
  body:not(.roys-roys-theme) .nm-industry { 
    background: #ffffff !important; 
    border: 1px solid ${C.border} !important; 
    border-radius: 9px;
    padding: 16px 10px; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    gap: 8px; 
    transition: all 0.3s; 
  }
  body:not(.roys-roys-theme) .nm-industry:hover { 
    border-color: ${C.gold} !important; 
    background: ${C.bgTint} !important; 
  }

  /* ── process step ── */
  .nm-step { display:flex; gap:14px; align-items:flex-start; }
  body:not(.roys-roys-theme) .nm-step-num { 
    width: 36px; 
    height: 36px; 
    border-radius: 50%; 
    background: ${C.navy} !important;
    color: #ffffff !important; 
    font-size: 11px; 
    font-weight: 900;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-shrink: 0; 
  }

  /* ── sustainability card ── */
  body:not(.roys-roys-theme) .nm-sus-card { 
    background: #ffffff !important; 
    border: 1px solid ${C.border} !important;
    border-radius: 10px; 
    padding: 24px; 
    transition: all 0.3s; 
  }
  body:not(.roys-roys-theme) .nm-sus-card:hover { 
    border-color: ${C.gold} !important; 
  }
  body:not(.roys-roys-theme) .nm-sus-icon { 
    width: 46px; 
    height: 46px; 
    border-radius: 9px;
    background: ${C.goldPale} !important; 
    border: 1px solid ${C.goldBorder} !important;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 14px; 
  }

  /* ── bottom 4-col section ── */
  .nm-bottom4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  @media(max-width:900px){ .nm-bottom4{grid-template-columns:1fr 1fr;} }
  @media(max-width:560px){ .nm-bottom4{grid-template-columns:1fr;} }
  
  body:not(.roys-roys-theme) .nm-card-dark { 
    background: ${C.bgTint} !important; 
    border: 1px solid ${C.border} !important; 
    border-radius: 10px; 
    padding: 22px; 
  }

  /* ── footer ── */
  body:not(.roys-roys-theme) .nm-footer { 
    background: ${C.navyDark} !important; 
    border-top: 1px solid ${C.navy} !important; 
  }
  body:not(.roys-roys-theme) .nm-footer *,
  body:not(.roys-roys-theme) .nm-footer p,
  body:not(.roys-roys-theme) .nm-footer h4,
  body:not(.roys-roys-theme) .nm-footer span {
    color: rgba(255,255,255,0.7) !important;
  }
  body:not(.roys-roys-theme) .nm-footer-link { 
    color: rgba(255,255,255,0.7) !important; 
    font-size: 13px; 
    text-decoration: none; 
    transition: color 0.2s; 
  }
  body:not(.roys-roys-theme) .nm-footer-link:hover { color: ${C.gold} !important; }

  /* ── fade-up animation ── */
  @keyframes nm-fade-up { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .nm-fade-up { animation:nm-fade-up 0.65s ease both; }

  /* ── divider ── */
  body:not(.roys-roys-theme) .nm-divider { 
    height: 1px; 
    background: ${C.border} !important; 
  }

  /* ── process image container ── */
  .nm-process-img { position:relative; border-radius:10px; overflow:hidden; height:200px; margin-bottom:24px; }

  /* ── 2-col grid ── */
  .nm-two-col { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
  @media(max-width:768px){ .nm-two-col{grid-template-columns:1fr;} }
  
  /* FAQ Button Overrides */
  body:not(.roys-roys-theme) .nm-faq-btn {
    border-bottom: 1px solid ${C.border} !important;
  }
`;

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function NationalMinePage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const prev = { bg: document.body.style.backgroundColor, color: document.body.style.color };
    document.body.style.backgroundColor = C.bgWhite;
    document.body.style.color = C.textDark;
    return () => { document.body.style.backgroundColor = prev.bg; document.body.style.color = prev.color; };
  }, []);

  return (
    <div className="nm-page" style={{ minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />

      {/* ══ NAVBAR ═══════════════════════════════════════════════════════════ */}
      <header className="nm-nav">
        <div className="nm-nav-inner">
          {/* Logo */}
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: C.navy, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Mountain size={23} color="#ffffff" style={{ stroke: "#ffffff" }} />
            </div>
            <div>
              <p style={{ color: C.navy, fontSize: 15, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em" }}>NATIONAL</p>
              <p style={{ color: C.gold, fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", lineHeight: 1.2 }}>MINES CORPORATION</p>
              <p style={{ color: C.textLight, fontSize: 7, letterSpacing: "0.04em", lineHeight: 1.2 }}>Trusted Mining &amp; Mineral Development Company</p>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="nm-nav-links hidden lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nm-nav-link">{label}</a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="nm-contact-btn">
            <Phone size={13} stroke="#ffffff" /> Contact Us
          </a>
        </div>
      </header>

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section id="home" className="nm-dark-section" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/mine header.png" alt="Mining operations" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, rgba(30,58,83,0.94) 40%, rgba(30,58,83,0.60) 100%)` }} />
        </div>

        <div className="nm-wrap" style={{ position: "relative", zIndex: 10, padding: "110px 28px 90px", width: "100%" }}>
          <div style={{ maxWidth: 640 }} className="nm-fade-up">
            <p className="nm-label" style={{ color: C.goldLight, marginBottom: 18 }}>Trusted Mining &amp; Mineral Development Company</p>
            <h1 style={{ color: "#ffffff", fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 900, lineHeight: 1.02, textTransform: "uppercase", marginBottom: 8 }}>
              Sustainable Mining.
            </h1>
            <h1 className="nm-text-gold" style={{ color: C.goldLight, fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 900, lineHeight: 1.02, textTransform: "uppercase", marginBottom: 26 }}>
              Responsible Resource<br />Development.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5, lineHeight: 1.85, marginBottom: 36, maxWidth: 540 }}>
              National Mines Corporation is committed to advancing the mining industry through responsible exploration,
              efficient mineral extraction, and sustainable resource development.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" className="nm-btn-black">
                Explore Projects <ChevronRight size={15} />
              </a>
              <a href="#about" className="nm-btn-outline-white">
                Learn More <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT + STATS ════════════════════════════════════════════════════ */}
      <section id="about" style={{ padding: "88px 0" }}>
        <div className="nm-wrap">
          <div className="nm-about-grid">
            {/* About text */}
            <div>
              <p className="nm-label" style={{ marginBottom: 10 }}>About Us</p>
              <h2 style={{ color: C.navy, fontSize: 28, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2, marginBottom: 22 }}>
                Building the Future Through<br />
                <span style={{ color: C.gold }}>Responsible Mining</span>
              </h2>
              <p style={{ color: C.textDark, fontSize: 13.5, lineHeight: 1.85, marginBottom: 14 }}>
                National Mines Corporation is a leading mining and mineral development organization specializing in exploration, mine planning, extraction, mineral processing, and sustainable resource management.
              </p>
              <p style={{ color: C.textDark, fontSize: 13.5, lineHeight: 1.85, marginBottom: 14 }}>
                Our operations are guided by innovation, safety, operational excellence, and environmental responsibility. From geological surveys to mine rehabilitation, every stage of our mining process is designed to maximize efficiency while preserving natural resources for future generations.
              </p>
              <p style={{ color: C.textDark, fontSize: 13.5, lineHeight: 1.85 }}>
                We work closely with government agencies, industrial partners, and infrastructure developers to provide reliable mineral resources that contribute to economic growth and national development.
              </p>
            </div>

            {/* Stats */}
            <div>
              <p className="nm-label" style={{ marginBottom: 10 }}>Company Statistics</p>
              <h2 style={{ color: C.navy, fontSize: 22, fontWeight: 900, textTransform: "uppercase", marginBottom: 22 }}>Our Key Milestones</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={value} className="nm-stat-card">
                    <div className="nm-stat-icon"><Icon size={22} color={C.gold} /></div>
                    <p style={{ color: C.navy, fontSize: 24, fontWeight: 900, lineHeight: 1 }}>{value}</p>
                    <p style={{ color: C.textLight, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.45, whiteSpace: "pre-line", textAlign: "center" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="nm-divider" />

      {/* ══ CORE SERVICES ════════════════════════════════════════════════════ */}
      <section id="services" className="nm-bg-tint" style={{ padding: "88px 0" }}>
        <div className="nm-wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p className="nm-label" style={{ marginBottom: 10 }}>Our Core Services</p>
            <h2 style={{ color: C.navy, fontSize: 28, fontWeight: 900, textTransform: "uppercase" }}>What We Offer</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="nm-svc-card">
                <div className="nm-svc-icon"><Icon size={21} color={C.gold} /></div>
                <h3 style={{ color: C.navy, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 9 }}>{title}</h3>
                <p style={{ color: C.textLight, fontSize: 12.5, lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="nm-divider" />

      {/* ══ MINERALS WE PRODUCE ══════════════════════════════════════════════ */}
      <section id="projects" style={{ padding: "88px 0" }}>
        <div className="nm-wrap">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p className="nm-label" style={{ marginBottom: 10 }}>Minerals We Produce</p>
            <h2 style={{ color: C.navy, fontSize: 28, fontWeight: 900, textTransform: "uppercase" }}>Our Mineral Portfolio</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: 10 }}>
            {MINERALS.map(({ name, img }, i) => (
              <div key={i} className="nm-mineral" style={{ aspectRatio: "1" }}>
                <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }} />
                <div className="nm-mineral-label">
                  <span style={{ color: "#fff", fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em" }}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="nm-divider" />

      {/* ══ INDUSTRIES + PROCESS ═════════════════════════════════════════════ */}
      <section className="nm-bg-tint" style={{ padding: "88px 0" }}>
        <div className="nm-wrap">
          <div className="nm-two-col">
            {/* Industries */}
            <div>
              <p className="nm-label" style={{ marginBottom: 10 }}>Industries We Support</p>
              <h2 style={{ color: C.navy, fontSize: 22, fontWeight: 900, textTransform: "uppercase", marginBottom: 24 }}>Key Sectors</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 9 }}>
                {INDUSTRIES.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="nm-industry">
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.goldPale, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={17} color={C.gold} />
                    </div>
                    <p style={{ color: C.textLight, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.45, whiteSpace: "pre-line", textAlign: "center" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mining Process */}
            <div>
              <p className="nm-label" style={{ marginBottom: 10 }}>Mining Process</p>
              <h2 style={{ color: C.navy, fontSize: 22, fontWeight: 900, textTransform: "uppercase", marginBottom: 24 }}>How We Operate</h2>
              <div className="nm-process-img">
                <Image src="/mine process.png" alt="Mining process" fill style={{ objectFit: "cover" }} sizes="600px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(255,255,255,0.45), transparent)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {PROCESS_STEPS.map(({ num, title, desc }) => (
                  <div key={num} className="nm-step">
                    <div className="nm-step-num">{num}</div>
                    <div>
                      <p style={{ color: C.navy, fontSize: 13, fontWeight: 800, marginBottom: 3 }}>{title}</p>
                      <p style={{ color: C.textLight, fontSize: 12, lineHeight: 1.65 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="nm-divider" />

      {/* ══ SUSTAINABILITY 4-CARDS ════════════════════════════════════════════ */}
      <section id="sustainability" style={{ padding: "88px 0" }}>
        <div className="nm-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginBottom: 60 }}>
            {SUSTAINABILITY_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="nm-sus-card">
                <div className="nm-sus-icon"><Icon size={21} color={C.gold} /></div>
                <h3 style={{ color: C.navy, fontSize: 13.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: C.textLight, fontSize: 12.5, lineHeight: 1.75, marginBottom: 14 }}>{desc}</p>
                <a href="#" style={{ color: C.gold, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Learn More <ChevronRight size={12} />
                </a>
              </div>
            ))}
          </div>

          {/* Vision / Mission / Testimonials / FAQ */}
          <div className="nm-bottom4">
            {/* Vision */}
            <div className="nm-card-dark">
              <div style={{ width: 34, height: 34, borderRadius: 7, background: C.navy, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Mountain size={17} color="#ffffff" style={{ stroke: "#ffffff" }} />
              </div>
              <h3 style={{ color: C.navy, fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 10 }}>Our Vision</h3>
              <p style={{ color: C.textLight, fontSize: 12, lineHeight: 1.75 }}>
                To become a globally recognized leader in sustainable mining by delivering innovative resource development solutions that create long-term economic value while protecting the environment and supporting future generations.
              </p>
            </div>

            {/* Mission */}
            <div className="nm-card-dark">
              <div style={{ width: 34, height: 34, borderRadius: 7, background: C.navy, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Award size={17} color="#ffffff" style={{ stroke: "#ffffff" }} />
              </div>
              <h3 style={{ color: C.navy, fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 10 }}>Our Mission</h3>
              <p style={{ color: C.textLight, fontSize: 12, lineHeight: 1.75 }}>
                To responsibly explore, develop and manage mineral resources through innovation, operational efficiency, environmental stewardship and a strong commitment to safety, quality and sustainable development.
              </p>
            </div>

            {/* Testimonials */}
            <div className="nm-card-dark">
              <h3 style={{ color: C.navy, fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 16 }}>Client Testimonials</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TESTIMONIALS.map(({ name, quote }) => (
                  <div key={name} style={{ borderLeft: `3px solid ${C.gold}`, paddingLeft: 12 }}>
                    <p style={{ color: C.textLight, fontSize: 11.5, lineHeight: 1.7, marginBottom: 6, fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
                    <p style={{ color: C.gold, fontSize: 10, fontWeight: 805, textTransform: "uppercase", letterSpacing: "0.1em" }}>{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="nm-card-dark">
              <h3 style={{ color: C.navy, fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 14 }}>FAQ</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {FAQS.map(({ q, a }, i) => (
                  <div key={i} className="nm-faq-btn" style={{ borderBottom: `1px solid ${C.border}` }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", gap: 10 }}
                    >
                      <span style={{ color: C.navy, fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>{q}</span>
                      {openFaq === i
                        ? <Minus size={13} color={C.navy} style={{ flexShrink: 0 }} />
                        : <Plus  size={13} color={C.navy} style={{ flexShrink: 0 }} />}
                    </button>
                    {openFaq === i && (
                      <p style={{ color: C.textLight, fontSize: 11.5, lineHeight: 1.65, padding: "4px 0 10px" }}>{a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="nm-divider" />

      {/* ══ CTA BANNER ═══════════════════════════════════════════════════════ */}
      <section className="nm-dark-section" style={{ position: "relative", overflow: "hidden", padding: "90px 0" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/mine technology.png" alt="Mining technology" fill style={{ objectFit: "cover" }} sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, rgba(30,58,83,0.95) 50%, rgba(30,58,83,0.7) 100%)` }} />
        </div>
        <div className="nm-wrap" style={{ position: "relative", zIndex: 10 }}>
          <div className="nm-two-col">
            <div>
              <p className="nm-label" style={{ color: C.goldLight, marginBottom: 14 }}>Advancing Mining</p>
              <h2 style={{ color: "#ffffff", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 20 }}>
                Through Innovation<br />
                <span className="nm-text-gold" style={{ color: C.goldLight }}>&amp; Sustainability</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13.5, lineHeight: 1.85, marginBottom: 30, maxWidth: 480 }}>
                National Mines Corporation continues to support industrial development through responsible mining,
                advanced technologies, operational excellence, and sustainable resource management.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#projects" className="nm-btn-black">Explore Projects <ChevronRight size={14} /></a>
                <a href="#sustainability" className="nm-btn-outline-white">Sustainability Initiatives <ChevronRight size={14} /></a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={value} style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${C.goldBorder}`, borderRadius: 10, padding: "20px 14px", textAlign: "center" }}>
                  <Icon size={26} color={C.goldLight} style={{ marginBottom: 8 }} />
                  <p className="nm-stat-val" style={{ color: "#ffffff", fontSize: 24, fontWeight: 900, lineHeight: 1 }}>{value}</p>
                  <p className="nm-stat-lbl" style={{ color: "rgba(255,255,255,0.75)", fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.45, whiteSpace: "pre-line", marginTop: 5 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer className="nm-footer" style={{ padding: "64px 0 28px" }}>
        <div className="nm-wrap">
          <div className="nm-footer-grid" style={{ marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 42, height: 42, borderRadius: 7, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mountain size={22} color={C.navy} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontSize: 15, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1 }}>NATIONAL</p>
                  <p style={{ color: C.gold, fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em" }}>MINES CORPORATION</p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>
                Trusted Mining &amp; Mineral Development Company
              </p>
              <div style={{ display: "flex", gap: 9 }}>
                {[Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" style={{ width: 33, height: 33, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s" }}>
                    <Icon size={13} color="rgba(255,255,255,0.65)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ color: C.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 18 }}>Company</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {["Home", "About", "Services", "Projects", "Sustainability", "Careers", "News"].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="nm-footer-link">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: C.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 18 }}>Our Services</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {["Mineral Exploration", "Mine Development", "Mining Operations", "Mineral Processing", "Environmental Management", "Mining Consultancy"].map(l => (
                  <li key={l}><a href="#services" className="nm-footer-link">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Industries + Contact */}
            <div>
              <h4 style={{ color: C.gold, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 18 }}>Industries</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, marginBottom: 24 }}>
                {["Construction", "Infrastructure", "Energy", "Manufacturing", "Government", "Industrial Development"].map(l => (
                  <li key={l}><a href="#" className="nm-footer-link">{l}</a></li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <MapPin size={13} color={C.gold} style={{ flexShrink: 0, marginTop: 2 }} />Lahore, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={13} color={C.gold} style={{ flexShrink: 0 }} />+92 300 000 0000
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, display: "flex", alignItems: "center", gap: 8 }}>
                  <Mail size={13} color={C.gold} style={{ flexShrink: 0 }} />info@nationalmines.com
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
          <div style={{ paddingTop: 20, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
              &copy; {new Date().getFullYear()} National Mines Corporation. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}