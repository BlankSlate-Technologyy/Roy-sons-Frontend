"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown, ChevronRight, Facebook, Linkedin,
  Mail, MapPin, Minus, Phone, Plus, Twitter,
  Users, Youtube, Award, TrendingUp, Leaf,
  Droplets, Wheat, Tractor, FlaskConical, Building2,
  Globe, Mountain, Sprout, Sun, Shield, Zap, Star,
  CheckCircle, ArrowRight, Search, BarChart3,
} from "lucide-react";

// ─── Colour Palette ───────────────────────────────────────────────────────────
const COLORS = {
  primary:    "#1B4332",   // deep forest green
  primaryMid: "#2D6A4F",   // medium green
  primaryLight:"#40916C",  // lighter green
  accent:     "#F6A623",   // warm amber/gold
  accentLight:"#FBC55A",   // light amber
  bgLight:    "#FFFFFF",   // pure white background
  bgWhite:    "#FFFFFF",   // pure white background
  bgSection:  "#F4F8F5",   // ultra light green section bg
  border:     "#C8DFC0",   // soft green border
  textDark:   "#1B4332",   // forest green text
  textMid:    "#2D6A4F",   // medium green text
  textMuted:  "#40916C",   // muted green text
  textLight:  "#52B788",   // faint green text
  white:      "#FFFFFF",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Services",       href: "#services", hasDropdown: true },
  { label: "Programs",       href: "#programs" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Research",       href: "#research" },
  { label: "News",           href: "#news" },
];

const STATS = [
  { icon: Award,    value: "25+",      label: "Years of Agricultural\nExperience" },
  { icon: BarChart3, value: "500+",   label: "Development\nProjects" },
  { icon: Wheat,    value: "1 Million+", label: "Acres Supported" },
  { icon: Users,    value: "10,000+", label: "Farmers\nBenefited" },
  { icon: Shield,   value: "99%",     label: "Quality\nStandards" },
];

const SERVICES = [
  {
    icon: Wheat,
    title: "Agricultural Development",
    desc: "Supporting sustainable farming through modern cultivation techniques, improved crop management, and agricultural infrastructure.",
  },
  {
    icon: Tractor,
    title: "Dairy Development",
    desc: "Enhancing dairy farming with improved livestock management, milk production systems, and modern dairy technologies.",
  },
  {
    icon: Droplets,
    title: "Irrigation Solutions",
    desc: "Designing and implementing efficient irrigation systems for improved water management and agricultural productivity.",
  },
  {
    icon: Leaf,
    title: "Livestock Management",
    desc: "Providing sustainable livestock development programs focused on animal health, nutrition, breeding, and productivity.",
  },
  {
    icon: FlaskConical,
    title: "Agricultural Research",
    desc: "Conducting scientific research to improve crop quality, farming efficiency, and climate-resilient agricultural practices.",
  },
  {
    icon: Building2,
    title: "Rural Infrastructure",
    desc: "Developing agricultural facilities, storage systems, rural roads, processing centers, and supply chain infrastructure.",
  },
];

const EXPERTISE = [
  "Crop Production",       "Agricultural Research",
  "Dairy Farming",         "Farm Mechanization",
  "Livestock Development", "Food Processing",
  "Irrigation Engineering","Agricultural Infrastructure",
  "Water Resource Management", "Sustainable Farming",
];

const SECTORS = [
  { icon: Wheat,      label: "Agriculture" },
  { icon: Tractor,    label: "Dairy\nIndustry" },
  { icon: Leaf,       label: "Livestock\nFarms" },
  { icon: FlaskConical,label: "Food\nProcessing" },
  { icon: Building2,  label: "Rural\nCommunities" },
  { icon: Droplets,   label: "Irrigation\nNetworks" },
  { icon: Globe,      label: "Government\nProjects" },
  { icon: Users,      label: "Agricultural\nCooperatives" },
  { icon: FlaskConical,label:"Research\nInstitutions" },
  { icon: TrendingUp, label: "Agri-Business" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Research &\nAssessment",      desc: "Understanding agricultural needs through field surveys and scientific research." },
  { num: "02", title: "Strategic\nPlanning",         desc: "Developing customized agricultural and rural development strategies." },
  { num: "03", title: "Infrastructure\nDevelopment", desc: "Building irrigation systems, dairy and agricultural infrastructure." },
  { num: "04", title: "Implementation",              desc: "Executing projects using modern technologies and sustainable practices." },
  { num: "05", title: "Monitoring &\nEvaluation",    desc: "Assessing performance and continuously improving outcomes." },
  { num: "06", title: "Sustainable\nGrowth",         desc: "Ensuring long-term productivity through innovation and responsible resource management." },
];

const WHY_CHOOSE = [
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    desc: "Promoting environmentally responsible farming methods for long-term productivity.",
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    desc: "Building modern irrigation systems, storage facilities, and agricultural support infrastructure.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Utilizing advanced agricultural technologies to improve efficiency and crop yields.",
  },
  {
    icon: FlaskConical,
    title: "Innovation & Research",
    desc: "Driving agricultural progress through continuous research and technological development.",
  },
  {
    icon: Users,
    title: "Expert Professionals",
    desc: "A multidisciplinary team of agricultural scientists, engineers, veterinarians, and industry specialists.",
  },
  {
    icon: Globe,
    title: "Community Support",
    desc: "Supporting farming communities with education, resources, and sustainable economic opportunities.",
  },
];

const FEATURED_PROGRAMS = [
  {
    title: "Smart Agriculture Initiative",
    desc: "Introducing precision farming technologies that improve productivity while conserving natural resources.",
    img: "/national agricature-header.png",
  },
  {
    title: "Dairy Development Program",
    desc: "Supporting modern dairy farming through improved livestock management and advanced dairy practices.",
    img: "/national agricultural.jpeg",
  },
  {
    title: "Sustainable Irrigation Projects",
    desc: "Developing efficient irrigation networks that maximize water conservation and agricultural output.",
    img: "/national agricature-header.png",
  },
];

const SUSTAINABILITY_ITEMS = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We promote efficient water usage, soil conservation, renewable farming practices, biodiversity protection, and climate-smart agriculture to ensure food security for future generations.",
  },
  {
    icon: Zap,
    title: "Innovation & Technology",
    desc: "Modern agriculture requires intelligent technologies that increase efficiency and sustainability.",
    capabilities: [
      "Precision Agriculture",
      "Smart Irrigation Systems",
      "GIS Mapping",
      "Drone-Crop Monitoring",
      "Soil Analysis",
      "Water Management Systems",
      "Agricultural Automation",
      "Livestock Monitoring",
      "Farm Data Analytics",
      "Climate Monitoring",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Agricultural Development Partner",
    quote: "National Agricultural Corporation has transformed farming communities through innovative agricultural programs and sustainable development initiatives.",
  },
  {
    name: "Rural Development Organization",
    quote: "Their expertise in irrigation, dairy development, and agricultural infrastructure has significantly improved regional agricultural productivity.",
  },
];

const FAQS = [
  {
    q: "What sectors does National Agricultural Corporation support?",
    a: "We support agriculture, dairy farming, livestock, irrigation networks, food processing, rural communities, government projects, agricultural cooperatives, and research institutions.",
  },
  {
    q: "Do you promote sustainable farming?",
    a: "Yes. We promote environmentally responsible farming methods, water conservation, soil management, renewable practices, and biodiversity protection at every stage.",
  },
  {
    q: "What technologies do you use?",
    a: "We use precision agriculture, smart irrigation systems, GIS mapping, drone-crop monitoring, soil analysis, agricultural automation, livestock monitoring, and climate monitoring technologies.",
  },
  {
    q: "How do you contribute to rural development?",
    a: "We develop rural infrastructure including storage facilities, irrigation networks, rural roads, processing centers, and support farming communities through education and economic programs.",
  },
];

// ─── Inline styles ─────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  .na-page { font-family: 'Inter', sans-serif; background-color: ${COLORS.bgWhite}; color: ${COLORS.primary}; }
  .na-page *, .na-page *::before, .na-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* nav */
  .na-nav { background: rgba(255,255,255,0.97); backdrop-filter: blur(12px);
            border-bottom: 1px solid ${COLORS.border}; box-shadow: 0 2px 12px rgba(27,67,50,0.07); }
  .na-nav-link { color: ${COLORS.textDark}; font-size: 12.5px; font-weight: 700;
                 text-transform: uppercase; letter-spacing: 0.07em;
                 transition: color 0.2s; text-decoration: none; }
  .na-nav-link:hover { color: ${COLORS.primaryLight}; }

  .na-btn-primary { background: ${COLORS.primary}; color: #fff; border: none;
                    font-weight: 800; font-size: 12px; text-transform: uppercase;
                    letter-spacing: 0.07em; border-radius: 5px; padding: 11px 22px;
                    cursor: pointer; transition: all 0.2s; text-decoration: none;
                    display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .na-btn-primary:hover { background: ${COLORS.primaryMid}; }
  .na-btn-outline  { background: transparent; color: ${COLORS.primary};
                     border: 1.5px solid ${COLORS.primary}; font-weight: 700; font-size: 12px;
                     text-transform: uppercase; letter-spacing: 0.07em; border-radius: 5px;
                     padding: 11px 22px; cursor: pointer; transition: all 0.2s;
                     text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
  .na-btn-outline:hover { background: ${COLORS.primary}; color: #fff; }

  /* section label */
  .na-label   { color: ${COLORS.primaryLight}; font-size: 11px; font-weight: 800;
                text-transform: uppercase; letter-spacing: 0.25em; margin-bottom: 8px; }
  .na-heading { color: ${COLORS.textDark}; font-size: 22px; font-weight: 900;
                text-transform: uppercase; letter-spacing: -0.01em; line-height: 1.2; }

  /* cards */
  .na-card { background: ${COLORS.bgWhite}; border: 1px solid ${COLORS.border}; border-radius: 10px; transition: all 0.3s; }
  .na-card:hover { border-color: ${COLORS.primaryLight}50; transform: translateY(-3px);
                   box-shadow: 0 10px 30px rgba(27,67,50,0.1); }

  /* stat card */
  .na-stat { background: ${COLORS.bgWhite}; border: 1px solid ${COLORS.border}; border-radius: 10px;
             padding: 18px 20px; display: flex; flex-direction: column; align-items: center;
             text-align: center; gap: 6px; }

  /* sector tile */
  .na-sector { background: ${COLORS.bgWhite}; border: 1px solid ${COLORS.border}; border-radius: 10px;
               padding: 16px 8px; display: flex; flex-direction: column; align-items: center;
               text-align: center; gap: 8px; transition: all 0.3s; }
  .na-sector:hover { border-color: ${COLORS.primaryLight}; background: ${COLORS.bgSection}; }
  .na-sector-icon { width: 48px; height: 48px; border-radius: 10px;
                    background: ${COLORS.bgSection}; border: 1px solid ${COLORS.border};
                    display: flex; align-items: center; justify-content: center; }

  /* process */
  .na-process-arrow { color: ${COLORS.primaryLight}; font-size: 20px; margin: 0 4px; }

  /* why card */
  .na-why-card { background: ${COLORS.bgSection}; border: 1px solid ${COLORS.border};
                 border-radius: 10px; padding: 22px 20px; transition: all 0.3s; }
  .na-why-card:hover { background: ${COLORS.bgWhite}; box-shadow: 0 6px 24px rgba(27,67,50,0.08); }
  .na-why-icon { width: 44px; height: 44px; border-radius: 8px;
                 background: ${COLORS.primaryLight}18; border: 1px solid ${COLORS.primaryLight}35;
                 display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }

  /* faq */
  .na-faq { background: ${COLORS.bgWhite}; border: 1px solid ${COLORS.border};
            border-radius: 8px; overflow: hidden; }
  .na-faq-btn { width: 100%; text-align: left; background: none; border: none;
                color: ${COLORS.textDark}; padding: 16px 20px; font-size: 13px; font-weight: 700;
                cursor: pointer; display: flex; justify-content: space-between;
                align-items: center; gap: 12px; }
  .na-faq-btn:hover { color: ${COLORS.primary}; }
  .na-faq-answer { padding: 0 20px 16px; font-size: 12.5px; line-height: 1.7; color: ${COLORS.textMuted}; }

  /* footer */
  .na-footer { background: ${COLORS.primary}; color: #fff; }

  /* expertise dot */
  .na-dot { width: 8px; height: 8px; border-radius: 50%; background: ${COLORS.primaryLight};
            flex-shrink: 0; margin-top: 5px; }

  @keyframes na-fade-up { from { opacity:0; transform:translateY(20px);} to { opacity:1; transform:translateY(0);} }
  .na-fade-up { animation: na-fade-up 0.6s ease both; }
`;

// ─── Sub-components ────────────────────────────────────────────────────────────
function Label({ children }) {
  return <p className="na-label">{children}</p>;
}
function Heading({ children, style = {} }) {
  return <h2 className="na-heading" style={style}>{children}</h2>;
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function NationalAgriculture() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    const prevColor = document.body.style.color;
    document.body.style.backgroundColor = COLORS.bgWhite;
    document.body.style.color = COLORS.textDark;
    return () => {
      document.body.style.backgroundColor = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  return (
    <div className="na-page" style={{ minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />

      {/* ── NAVBAR ────────────────────────────────────────────────────────────── */}
      <header className="na-nav sticky top-0 z-50">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "13px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sprout size={22} color="#fff" />
            </div>
            <div>
              <p style={{ color: COLORS.primary, fontSize: 14, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.05em" }}>
                NATIONAL
              </p>
              <p style={{ color: COLORS.primaryLight, fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", lineHeight: 1 }}>
                AGRICULTURAL CORPORATION
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: 7, fontWeight: 600, lineHeight: 1, letterSpacing: "0.05em" }}>
                Cultivating Growth. Empowering Sustainable Agriculture.
              </p>
            </div>
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 26 }} className="hidden lg:flex">
            {NAV_LINKS.map(({ label, href, hasDropdown }) => (
              <a key={label} href={href} className="na-nav-link" style={{ display: "flex", alignItems: "center", gap: 3 }}>
                {label}
                {hasDropdown && <ChevronDown size={12} style={{ color: COLORS.primaryLight }} />}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="na-btn-primary">
            <Phone size={13} /> Contact Us
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="home" style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/national agricature-header.png"
            alt="Agricultural fields"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(27,67,50,0.88) 45%, rgba(27,67,50,0.45) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "100px 24px 80px", width: "100%" }}>
          <div style={{ maxWidth: 620 }} className="na-fade-up">
            <p className="na-label" style={{ color: "#90E0B0", marginBottom: 16 }}>
              Advancing Agriculture For A Sustainable Future
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 20 }}>
              ADVANCING AGRICULTURE<br />
              <span style={{ color: COLORS.accentLight }}>FOR A SUSTAINABLE<br />FUTURE</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
              National Agricultural Corporation is dedicated to strengthening agriculture, dairy development, irrigation systems, and livestock management through innovative technologies, sustainable farming practices, and modern agricultural infrastructure.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#programs" className="na-btn-primary" style={{ background: COLORS.accent, color: "#1A2E1A" }}>
                Explore Our Programs <ArrowRight size={14} />
              </a>
              <a href="#about" className="na-btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
                Discover Agriculture <ArrowRight size={14} />
              </a>
              <a href="#about" className="na-btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY STATISTICS BAR ────────────────────────────────────────────── */}
      <section style={{ background: COLORS.bgWhite, borderBottom: `2px solid ${COLORS.border}`, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ color: COLORS.textMuted, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.25em" }}>Company Statistics</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={value} className="na-stat">
                <div style={{ width: 52, height: 52, borderRadius: 10, background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={22} color={COLORS.primary} />
                </div>
                <p style={{ color: COLORS.primary, fontSize: 26, fontWeight: 900, lineHeight: 1 }}>{value}</p>
                <p style={{ color: COLORS.textMuted, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4, whiteSpace: "pre-line", textAlign: "center" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "80px 24px", background: COLORS.primary }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#90E0B0", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 8 }}>Our Core Services</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16 }}>
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "22px 18px", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(246,166,35,0.15)", border: "1px solid rgba(246,166,35,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon size={20} color={COLORS.accentLight} />
                </div>
                <h3 style={{ color: "#fff", fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS OF EXPERTISE + SECTORS WE SUPPORT ────────────────────────── */}
      <section id="about" style={{ padding: "80px 24px", background: COLORS.bgLight }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Areas of expertise */}
            <div>
              <Label>Areas of Expertise</Label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 20 }}>
                {EXPERTISE.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div className="na-dot" />
                    <p style={{ color: COLORS.textMid, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors we support */}
            <div>
              <Label>Sectors We Support</Label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginTop: 20 }}>
                {SECTORS.map(({ icon: Icon, label }) => (
                  <div key={label} className="na-sector">
                    <div className="na-sector-icon">
                      <Icon size={18} color={COLORS.primary} />
                    </div>
                    <p style={{ color: COLORS.textMid, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.4, whiteSpace: "pre-line", textAlign: "center" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US + DEVELOPMENT PROCESS ───────────────────────────── */}
      <section style={{ padding: "80px 24px", background: COLORS.bgWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            {/* Why choose */}
            <div>
              <Label>Why Choose National Agricultural Corporation</Label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 24 }}>
                {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="na-why-card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className="na-why-icon" style={{ flexShrink: 0 }}>
                      <Icon size={18} color={COLORS.primary} />
                    </div>
                    <div>
                      <p style={{ color: COLORS.textDark, fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{title}</p>
                      <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development process */}
            <div>
              <Label>Our Development Process</Label>
              {/* Process flow arrows */}
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, marginTop: 20, marginBottom: 28 }}>
                {PROCESS_STEPS.map(({ num }, i) => (
                  <div key={num} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.primary, color: "#fff", fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {num}
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <ChevronRight size={16} color={COLORS.primaryLight} />
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {PROCESS_STEPS.map(({ num, title, desc }) => (
                  <div key={num} style={{ background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "16px 14px" }}>
                    <p style={{ color: COLORS.primaryLight, fontSize: 11, fontWeight: 900, marginBottom: 4 }}>{num}</p>
                    <p style={{ color: COLORS.textDark, fontSize: 12.5, fontWeight: 800, marginBottom: 6, whiteSpace: "pre-line", lineHeight: 1.35 }}>{title}</p>
                    <p style={{ color: COLORS.textMuted, fontSize: 11.5, lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY + INNOVATION + FEATURED PROGRAMS ────────────────── */}
      <section id="sustainability" style={{ padding: "80px 24px", background: COLORS.bgLight }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
            {/* Sustainability */}
            <div>
              <Label>Sustainability</Label>
              <Heading style={{ marginBottom: 16 }}>Supporting Sustainable Agriculture</Heading>
              <p style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.8 }}>
                We promote efficient water usage, soil conservation, renewable farming practices,
                biodiversity protection, and climate-smart agriculture to ensure food security for future generations.
              </p>
              <div style={{ marginTop: 20, position: "relative", borderRadius: 10, overflow: "hidden", height: 180 }}>
                <Image src="/national agricature-header.png" alt="Sustainable agriculture" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Innovation & Technology */}
            <div>
              <Label>Innovation &amp; Technology</Label>
              <Heading style={{ marginBottom: 14 }}>Our Capabilities</Heading>
              <p style={{ color: COLORS.textMuted, fontSize: 12.5, lineHeight: 1.7, marginBottom: 16 }}>
                Modern agriculture requires intelligent technologies that increase efficiency and sustainability.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {SUSTAINABILITY_ITEMS[1].capabilities.map(cap => (
                  <div key={cap} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={13} color={COLORS.primaryLight} style={{ flexShrink: 0 }} />
                    <p style={{ color: COLORS.textMid, fontSize: 12, fontWeight: 600 }}>{cap}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, position: "relative", borderRadius: 10, overflow: "hidden", height: 120 }}>
                <Image src="/national agricultural.jpeg" alt="Agricultural technology" fill sizes="400px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Featured Programs */}
            <div>
              <Label>Featured Programs</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
                {FEATURED_PROGRAMS.map(({ title, desc, img }) => (
                  <div key={title} style={{ display: "flex", gap: 12, background: COLORS.bgWhite, border: `1px solid ${COLORS.border}`, borderRadius: 10, overflow: "hidden" }}>
                    <div style={{ position: "relative", width: 90, flexShrink: 0 }}>
                      <Image src={img} alt={title} fill sizes="90px" style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "12px 12px 12px 0" }}>
                      <p style={{ color: COLORS.textDark, fontSize: 12, fontWeight: 800, marginBottom: 4, lineHeight: 1.3 }}>{title}</p>
                      <p style={{ color: COLORS.textMuted, fontSize: 11, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION + TESTIMONIALS + FAQ ─────────────────────────── */}
      <section style={{ padding: "80px 24px", background: COLORS.bgWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }}>
            {/* Vision */}
            <div style={{ background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 22 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Sprout size={18} color="#fff" />
              </div>
              <h3 style={{ color: COLORS.primary, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Our Vision</h3>
              <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.7 }}>
                To become a leading force in sustainable agriculture by promoting innovation, food security, environmental stewardship, and resilient agricultural systems that benefit communities and future generations.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 22 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Award size={18} color="#fff" />
              </div>
              <h3 style={{ color: COLORS.primary, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Our Mission</h3>
              <p style={{ color: COLORS.textMuted, fontSize: 12, lineHeight: 1.7 }}>
                To strengthen agriculture, dairy development, irrigation, and livestock management through research, technology, infrastructure, and sustainable development practices that improve productivity and economic growth.
              </p>
            </div>

            {/* Testimonials */}
            <div style={{ background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 22 }}>
              <h3 style={{ color: COLORS.primary, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16 }}>Testimonials</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {TESTIMONIALS.map(({ name, quote }) => (
                  <div key={name} style={{ borderLeft: `3px solid ${COLORS.primaryLight}`, paddingLeft: 12 }}>
                    <p style={{ color: COLORS.textMuted, fontSize: 11.5, lineHeight: 1.65, marginBottom: 6, fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
                    <p style={{ color: COLORS.primary, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div style={{ background: COLORS.bgSection, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: 22 }}>
              <h3 style={{ color: COLORS.primary, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16 }}>Frequently Asked Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {FAQS.map(({ q, a }, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${COLORS.border}` }}
                    >
                      <span style={{ color: COLORS.textDark, fontSize: 12, fontWeight: 600 }}>{q}</span>
                      <Plus size={13} color={COLORS.primary} style={{ flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }} />
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

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.bgSection, borderTop: `2px solid ${COLORS.border}`, padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p style={{ color: COLORS.primary, fontSize: 22, fontWeight: 900, textTransform: "uppercase", marginBottom: 6 }}>
              Ready to Transform Agriculture?
            </p>
            <p style={{ color: COLORS.textMuted, fontSize: 13.5 }}>
              Partner with National Agricultural Corporation for sustainable growth.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#programs" className="na-btn-primary">
              Explore Programs <ArrowRight size={14} />
            </a>
            <a href="#sustainability" className="na-btn-outline">
              Sustainability Initiatives <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="na-footer" style={{ padding: "60px 24px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sprout size={22} color="#fff" />
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: 14, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1 }}>NATIONAL</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 8.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em" }}>AGRICULTURAL CORPORATION</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 7, letterSpacing: "0.05em" }}>Cultivating Growth. Empowering Sustainable Agriculture.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                {[Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={13} color="rgba(255,255,255,0.65)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ color: COLORS.accentLight, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Company</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Home", "About", "Services", "Programs", "Sustainability", "Research", "News"].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: COLORS.accentLight, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Our Services</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Agricultural Development", "Dairy Development", "Irrigation Solutions", "Livestock Management", "Agricultural Research", "Rural Infrastructure"].map(l => (
                  <li key={l}><a href="#services" style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Focus Areas + Contact */}
            <div>
              <h4 style={{ color: COLORS.accentLight, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Focus Areas</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {["Crop Production", "Dairy Farming", "Livestock", "Irrigation", "Food Security", "Sustainable Agriculture"].map(l => (
                  <li key={l}><a href="#" style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <MapPin size={13} color={COLORS.accentLight} style={{ flexShrink: 0, marginTop: 2 }} />
                  Lahore, Pakistan
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={13} color={COLORS.accentLight} style={{ flexShrink: 0 }} />
                  +92 300 000 0000
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <Mail size={13} color={COLORS.accentLight} style={{ flexShrink: 0 }} />
                  info@nationalagriculture.com
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                <a href="#programs" className="na-btn-primary" style={{ fontSize: 11 }}>
                  Explore Programs <ArrowRight size={12} />
                </a>
                <a href="#sustainability" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderRadius: 5, padding: "9px 14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  Sustainability Initiatives <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
              <Sprout size={14} color="rgba(255,255,255,0.4)" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11.5 }}>
              &copy; {new Date().getFullYear()} National Agricultural Corporation. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}