"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  Twitter,
  Users,
  Youtube,
  Award,
  TrendingUp,
  Leaf,
  Droplets,
  Wheat,
  Tractor,
  FlaskConical,
  Building2,
  Globe,
  Mountain,
  Sprout,
  Sun,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  BarChart3,
  Send,
} from "lucide-react";

// ─── Colour Palette ───────────────────────────────────────────────────────────
const COLORS = {
  primary: "#1A5C2A", // Dark Green from logo
  primaryMid: "#2E7D32", // Medium Green
  primaryLight: "#3D9140", // Light Leaf Green
  accent: "#E8A800", // Logo Gold / Amber
  accentLight: "#F5C842", // Light Gold
  bgLight: "#FFFFFF",
  bgWhite: "#FFFFFF",
  bgSection: "#FFFFFF", // Pure white background across all sections
  border: "#D4E8D0",
  textDark: "#111827", // Heading / Dark text
  textMid: "#1A5C2A",
  textMuted: "#4B5563", // Body text
  textLight: "#6B7280",
  white: "#FFFFFF",
};

// ─── Data Arrays ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Programs", href: "#programs" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
];

const STATS = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Agricultural\nExperience",
  },
  {
    icon: Tractor,
    value: "500+",
    label: "Development\nProjects",
  },
  {
    icon: Wheat,
    value: "1 Million+",
    label: "Acres Supported",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Farmers\nBenefited",
  },
  {
    icon: Shield,
    value: "99%",
    label: "Quality\nStandards",
  },
];

const SERVICES = [
  {
    icon: Wheat,
    title: "AGRICULTURAL DEVELOPMENT",
    desc: "Supporting sustainable farming through modern cultivation techniques, improved crop management, and agricultural infrastructure.",
  },
  {
    icon: Tractor,
    title: "DAIRY DEVELOPMENT",
    desc: "Enhancing dairy farming with improved livestock management, milk production systems, and modern dairy technologies.",
  },
  {
    icon: Droplets,
    title: "IRRIGATION SOLUTIONS",
    desc: "Designing and implementing efficient irrigation systems for improved water management and agricultural productivity.",
  },
  {
    icon: Leaf,
    title: "LIVESTOCK MANAGEMENT",
    desc: "Providing sustainable livestock development programs focused on animal health, nutrition, breeding, and productivity.",
  },
  {
    icon: FlaskConical,
    title: "AGRICULTURAL RESEARCH",
    desc: "Conducting scientific research to improve crop quality, farming efficiency, and climate-resilient agricultural practices.",
  },
  {
    icon: Building2,
    title: "RURAL INFRASTRUCTURE",
    desc: "Developing agricultural facilities, storage systems, rural roads, processing centers, and supply chain infrastructure.",
  },
];

const EXPERTISE_LEFT = [
  "Crop Production",
  "Dairy Farming",
  "Livestock Development",
  "Irrigation Engineering",
  "Water Resource Management",
];

const EXPERTISE_RIGHT = [
  "Agricultural Research",
  "Farm Mechanization",
  "Food Processing",
  "Agricultural Infrastructure",
  "Sustainable Farming",
];

const SECTORS = [
  { icon: Wheat, label: "Agriculture" },
  { icon: Tractor, label: "Dairy\nIndustry" },
  { icon: Leaf, label: "Livestock\nFarms" },
  { icon: FlaskConical, label: "Food\nProcessing" },
  { icon: Building2, label: "Rural\nCommunities" },
  { icon: Droplets, label: "Irrigation\nNetworks" },
  { icon: Globe, label: "Government\nProjects" },
  { icon: Users, label: "Agricultural\nCooperatives" },
  { icon: FlaskConical, label: "Research\nInstitutions" },
  { icon: TrendingUp, label: "Agri-Business" },
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
    title: "Rural Development",
    desc: "Supporting farming communities with education, resources, and sustainable economic opportunities.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Research &\nAssessment",
    desc: "Understanding agricultural needs through field surveys and scientific research.",
  },
  {
    num: "02",
    title: "Strategic\nPlanning",
    desc: "Developing customized agricultural and rural development strategies.",
  },
  {
    num: "03",
    title: "Infrastructure\nDevelopment",
    desc: "Building irrigation systems, dairy facilities, and agricultural infrastructure.",
  },
  {
    num: "04",
    title: "Implementation",
    desc: "Executing projects using modern technologies and sustainable practices.",
  },
  {
    num: "05",
    title: "Monitoring &\nEvaluation",
    desc: "Assessing performance and continuously improving outcomes.",
  },
  {
    num: "06",
    title: "Sustainable\nGrowth",
    desc: "Ensuring long-term productivity through innovation and responsible resource management.",
  },
];

const FEATURED_PROGRAMS = [
  {
    title: "SMART AGRICULTURE INITIATIVE",
    desc: "Introducing precision farming technologies that improve productivity while conserving natural resources.",
    img: "/national agricature-header.png",
  },
  {
    title: "DAIRY DEVELOPMENT PROGRAM",
    desc: "Supporting modern dairy farming through improved livestock management and advanced dairy practices.",
    img: "/national agricultural.jpeg",
  },
  {
    title: "SUSTAINABLE IRRIGATION PROJECTS",
    desc: "Developing efficient irrigation networks that maximize water conservation and agricultural output.",
    img: "/national agricature-header.png",
  },
];

const CAPABILITIES = [
  "Precision Agriculture",
  "Water Management Systems",
  "Smart Irrigation Systems",
  "Agricultural Automation",
  "GIS Mapping",
  "Livestock Monitoring",
  "Drone Crop Monitoring",
  "Farm Data Analytics",
  "Soil Analysis",
  "Climate Monitoring",
];

const TESTIMONIALS = [
  {
    role: "Agricultural Development Partner",
    quote:
      "National Agricultural Corporation has transformed farming communities through innovative agricultural programs and sustainable development initiatives.",
  },
  {
    role: "Rural Development Organization",
    quote:
      "Their expertise in irrigation, dairy development, and agricultural infrastructure has significantly improved regional agricultural productivity.",
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

// ─── Counter Helpers ──────────────────────────────────────────────────────────
function parseNA(val) {
  const raw = val.replace(/,/g, "");
  const suffix = raw.match(/[+%]$/)?.[0] ?? "";
  const num = parseFloat(raw);
  const hasComma = val.includes(",");
  return { num, suffix, hasComma };
}

function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);
  return count;
}

function AnimatedStatNA({ icon: Icon, value, label }) {
  const { num, suffix, hasComma } = parseNA(value);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const display = hasComma ? count.toLocaleString() : count;
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "16px 12px",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: `1.5px solid ${COLORS.primary}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
          color: COLORS.primary,
        }}
      >
        <Icon size={24} color={COLORS.primary} />
      </div>
      <p
        style={{
          color: COLORS.primary,
          fontSize: "28px",
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {display}
        {suffix}
      </p>
      <p
        style={{
          color: COLORS.textMuted,
          fontSize: "11px",
          fontWeight: 700,
          lineHeight: 1.35,
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function NaContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    fontSize: 13,
    color: COLORS.textDark,
    background: "#fff",
    outline: "none",
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  if (status === "sent") {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: `1px solid ${COLORS.border}`,
          padding: "50px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `${COLORS.primaryLight}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <CheckCircle size={28} color={COLORS.primary} />
        </div>
        <h3
          style={{
            color: COLORS.textDark,
            fontSize: 20,
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          Message Sent Successfully!
        </h3>
        <p
          style={{
            color: COLORS.textMuted,
            fontSize: 13.5,
            marginBottom: 20,
          }}
        >
          Our agricultural expert team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            setStatus("idle");
          }}
          style={{
            padding: "10px 24px",
            borderRadius: 6,
            background: COLORS.primary,
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${COLORS.border}`,
        boxShadow: "0 4px 20px rgba(26,92,42,0.06)",
        padding: "32px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: COLORS.textMuted,
                marginBottom: 6,
              }}
            >
              Full Name *
            </label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Dr. Ahmed Ali"
              style={inputStyle}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: COLORS.textMuted,
                marginBottom: 6,
              }}
            >
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="ahmed@farm.com"
              style={inputStyle}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: COLORS.textMuted,
                marginBottom: 6,
              }}
            >
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+92 3XX XXXXXXX"
              style={inputStyle}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: COLORS.textMuted,
                marginBottom: 6,
              }}
            >
              Service *
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              style={{ ...inputStyle, appearance: "auto" }}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICES.map(({ title }) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: COLORS.textMuted,
              marginBottom: 6,
            }}
          >
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your project or agricultural inquiry..."
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: 8,
            background:
              status === "sending" ? `${COLORS.primary}AA` : COLORS.primary,
            color: "#fff",
            fontWeight: 800,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            border: "none",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {status === "sending" ? (
            "Sending…"
          ) : (
            <>
              Send Message <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function NationalAgriculture() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    const prevBg = document.body.style.backgroundColor;
    const prevColor = document.body.style.color;
    document.body.style.backgroundColor = COLORS.bgWhite;
    document.body.style.color = COLORS.textDark;
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.style.backgroundColor = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  return (
    <div
      className="roys-roys-theme"
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.bgWhite,
        color: COLORS.textDark,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── 1. NAVBAR ───────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#FFFFFF",
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/group-companies"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                position: "relative",
                borderRadius: "50%",
                background: COLORS.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sprout size={24} color="#FFF" />
            </div>
            <div>
              <p
                style={{
                  color: COLORS.primary,
                  fontSize: 16,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                NATIONAL
              </p>
              <p
                style={{
                  color: COLORS.primary,
                  fontSize: 9,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  lineHeight: 1.1,
                }}
              >
                AGRICULTURAL CORPORATION
              </p>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: 7.5,
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Cultivating Growth. Empowering Sustainable Agriculture.
              </p>
            </div>
          </Link>

          {/* Nav Items */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {NAV_LINKS.map(({ label, href, hasDropdown }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: COLORS.textDark,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                {label}
                {hasDropdown && (
                  <ChevronDown size={14} color={COLORS.textMuted} />
                )}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href="#contact"
            style={{
              backgroundColor: COLORS.primary,
              color: "#FFF",
              padding: "10px 20px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 800,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Phone size={14} /> Contact Us
          </a>
        </div>
      </header>

      {/* ── 2. HERO SECTION ─────────────────────────────────────────────────── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/national agricature-header.png"
            alt="Agriculture field with tractor"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1240,
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.1,
                textTransform: "uppercase",
                marginBottom: 18,
                letterSpacing: "-0.01em",
              }}
            >
              ADVANCING AGRICULTURE
              <br />
              <span style={{ color: "#FFFFFF" }}>FOR A SUSTAINABLE</span>
              <br />
              <span style={{ color: COLORS.accentLight }}>FUTURE</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              National Agricultural Corporation is dedicated to strengthening
              agriculture, dairy development, irrigation systems, and livestock
              management through innovative technologies, sustainable farming
              practices, and modern agricultural infrastructure.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#programs"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "#FFF",
                  padding: "12px 22px",
                  borderRadius: 5,
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                EXPLORE OUR PROGRAMS <ArrowRight size={14} />
              </a>
              <a
                href="#about"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: COLORS.textDark,
                  padding: "12px 22px",
                  borderRadius: 5,
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                DISCOVER AGRICULTURE <ArrowRight size={14} />
              </a>
              <a
                href="#about"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: COLORS.textDark,
                  padding: "12px 22px",
                  borderRadius: 5,
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COMPANY STATISTICS ────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "36px 24px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <p
              style={{
                color: COLORS.primary,
                fontSize: 12,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              — COMPANY STATISTICS —
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 16,
            }}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <AnimatedStatNA
                key={value}
                icon={Icon}
                value={value}
                label={label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR CORE SERVICES ────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "60px 24px", background: "#FFF" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Header Banner */}
          <div
            style={{
              backgroundColor: COLORS.primary,
              color: "#FFF",
              padding: "10px 20px",
              borderRadius: 6,
              display: "inline-block",
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontSize: 15,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              OUR CORE SERVICES
            </h2>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 16,
            }}
          >
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 10,
                  padding: "20px 16px",
                  backgroundColor: "#FFF",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginBottom: 14 }}>
                  <Icon size={24} color={COLORS.primary} />
                </div>
                <h3
                  style={{
                    color: COLORS.primary,
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    lineHeight: 1.3,
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: 11.5,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AREAS OF EXPERTISE & SECTORS WE SUPPORT ───────────────────────── */}
      <section
        id="about"
        style={{
          padding: "60px 24px",
          backgroundColor: "#FFFFFF",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* Left: Areas of Expertise */}
            <div>
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                  borderBottom: `2px solid ${COLORS.primary}`,
                  paddingBottom: 6,
                  display: "inline-block",
                }}
              >
                AREAS OF EXPERTISE
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 16px",
                }}
              >
                {EXPERTISE_LEFT.map((item, idx) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: `1px solid ${COLORS.primary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Sprout size={12} color={COLORS.primary} />
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: COLORS.textDark,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
                {EXPERTISE_RIGHT.map((item, idx) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: `1px solid ${COLORS.primary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Sprout size={12} color={COLORS.primary} />
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: COLORS.textDark,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sectors We Support + Farmer Image */}
            <div style={{ position: "relative" }}>
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                  borderBottom: `2px solid ${COLORS.primary}`,
                  paddingBottom: 6,
                  display: "inline-block",
                }}
              >
                SECTORS WE SUPPORT
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                {SECTORS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 8,
                      padding: "12px 6px",
                      textAlign: "center",
                      backgroundColor: "#FFF",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Icon size={20} color={COLORS.primary} />
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: COLORS.textDark,
                        lineHeight: 1.3,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE & DEVELOPMENT PROCESS ───────────────────────────── */}
      <section
        style={{
          padding: "60px 24px",
          backgroundColor: "#FFFFFF",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 40,
            }}
          >
            {/* Left: Why Choose Box */}
            <div
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 12,
                padding: "28px",
                color: "#FFF",
              }}
            >
              <h3
                style={{
                  color: "#FFF",
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 20,
                }}
              >
                WHY CHOOSE NATIONAL AGRICULTURAL CORPORATION
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#FFF" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          marginBottom: 4,
                        }}
                      >
                        {title}
                      </h4>
                      <p
                        style={{
                          fontSize: 10.5,
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Development Process */}
            <div>
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 24,
                }}
              >
                OUR DEVELOPMENT PROCESS
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gap: 8,
                }}
              >
                {PROCESS_STEPS.map(({ num, title, desc }) => (
                  <div
                    key={num}
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: `1.5px solid ${COLORS.primary}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                        backgroundColor: "#FFF",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 900,
                          color: COLORS.primary,
                        }}
                      >
                        {num}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: COLORS.textDark,
                        lineHeight: 1.2,
                        marginBottom: 6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontSize: 9.5,
                        color: COLORS.textMuted,
                        lineHeight: 1.4,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SUSTAINABILITY & FEATURED PROGRAMS ──────────────────────────── */}
      <section
        id="sustainability"
        style={{
          padding: "60px 24px",
          backgroundColor: "#FFFFFF",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 28,
            }}
          >
            {/* Col 1: Sustainability */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "24px",
                backgroundColor: "#FFF",
              }}
            >
              <p
                style={{
                  color: COLORS.primary,
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                SUSTAINABILITY
              </p>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: COLORS.textDark,
                  marginBottom: 12,
                }}
              >
                Supporting Sustainable Agriculture
              </h3>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: 12,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                We promote efficient water usage, soil conservation, renewable
                farming practices, biodiversity protection, and climate-smart
                agriculture to ensure food security for future generations.
              </p>
              <div
                style={{
                  position: "relative",
                  height: 160,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/national agricature-header.png"
                  alt="Soil sprout"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Col 2: Innovation & Technology */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "24px",
                backgroundColor: "#FFF",
              }}
            >
              <p
                style={{
                  color: COLORS.primary,
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}
              >
                INNOVATION & TECHNOLOGY
              </p>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: 11.5,
                  lineHeight: 1.5,
                  marginBottom: 12,
                }}
              >
                Modern agriculture requires intelligent technologies that
                increase efficiency and sustainability.
              </p>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  color: COLORS.primary,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                OUR CAPABILITIES
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px 12px",
                  marginBottom: 16,
                }}
              >
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      color: COLORS.textDark,
                    }}
                  >
                    <span style={{ color: COLORS.primary }}>◆</span> {cap}
                  </div>
                ))}
              </div>
              <div
                style={{
                  position: "relative",
                  height: 110,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/national agricultural.jpeg"
                  alt="Agriculture drone"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Col 3: Featured Programs */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "24px",
                backgroundColor: "#FFF",
              }}
            >
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 13,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                FEATURED PROGRAMS
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {FEATURED_PROGRAMS.map(({ title, desc, img }) => (
                  <div
                    key={title}
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: 70,
                        height: 54,
                        borderRadius: 6,
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={img}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 11,
                          fontWeight: 900,
                          color: COLORS.primary,
                          lineHeight: 1.2,
                          marginBottom: 3,
                        }}
                      >
                        {title}
                      </h4>
                      <p
                        style={{
                          fontSize: 10,
                          color: COLORS.textMuted,
                          lineHeight: 1.4,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. VISION, MISSION, TESTIMONIALS & FAQ ─────────────────────────── */}
      <section
        style={{
          padding: "60px 24px",
          backgroundColor: "#FFFFFF",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1.2fr",
              gap: 20,
            }}
          >
            {/* Vision */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}
              >
                <EyeIcon size={18} color={COLORS.primary} />
                <h3
                  style={{
                    color: COLORS.primary,
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                  }}
                >
                  OUR VISION
                </h3>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                }}
              >
                To become a leading force in sustainable agriculture by
                promoting innovation, food security, environmental stewardship,
                and resilient agricultural systems that benefit communities and
                future generations.
              </p>
            </div>

            {/* Mission */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}
              >
                <TargetIcon size={18} color={COLORS.primary} />
                <h3
                  style={{
                    color: COLORS.primary,
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                  }}
                >
                  OUR MISSION
                </h3>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                }}
              >
                To strengthen agriculture, dairy development, irrigation, and
                livestock management through research, technology, infrastructure,
                and sustainable development practices that improve productivity and
                economic growth.
              </p>
            </div>

            {/* Testimonials */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "20px",
              }}
            >
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                TESTIMONIALS
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {TESTIMONIALS.map(({ role, quote }) => (
                  <div key={role}>
                    <p
                      style={{
                        fontSize: 10.5,
                        color: COLORS.textMuted,
                        lineHeight: 1.5,
                        fontStyle: "italic",
                        marginBottom: 4,
                      }}
                    >
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: COLORS.primary,
                      }}
                    >
                      {role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "20px",
              }}
            >
              <h3
                style={{
                  color: COLORS.primary,
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {FAQS.map(({ q, a }, i) => (
                  <div
                    key={i}
                    style={{ borderBottom: `1px solid ${COLORS.border}` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "8px 0",
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 11,
                        fontWeight: 700,
                        color: COLORS.textDark,
                      }}
                    >
                      <span>{q}</span>
                      <Plus
                        size={14}
                        color={COLORS.primary}
                        style={{
                          transform: openFaq === i ? "rotate(45deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      />
                    </button>
                    {openFaq === i && (
                      <p
                        style={{
                          fontSize: 10.5,
                          color: COLORS.textMuted,
                          lineHeight: 1.5,
                          paddingBottom: 8,
                        }}
                      >
                        {a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT SECTION ──────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "60px 24px",
          backgroundColor: "#FFFFFF",
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p
              style={{
                color: COLORS.primary,
                fontSize: 11,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 6,
              }}
            >
              Get In Touch
            </p>
            <h2
              style={{
                color: COLORS.textDark,
                fontSize: 26,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Contact{" "}
              <span style={{ color: COLORS.primary }}>
                National Agricultural Corporation
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 32,
              alignItems: "start",
            }}
          >
            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "info@nationalagriculture.com",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+92 300 0000000",
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Lahore, Pakistan",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px",
                    borderRadius: 10,
                    backgroundColor: "#FFF",
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      backgroundColor: `${COLORS.primary}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={COLORS.primary} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: COLORS.primary,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: COLORS.textDark,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <NaContactForm />
          </div>
        </div>
      </section>

      {/* ── 10. FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: COLORS.primary,
          color: "#FFFFFF",
          padding: "50px 24px 24px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
              gap: 36,
              marginBottom: 40,
            }}
          >
            {/* Col 1: Brand Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sprout size={20} color={COLORS.primary} />
                </div>
                <div>
                  <p
                    style={{
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    NATIONAL
                  </p>
                  <p
                    style={{
                      color: COLORS.accentLight,
                      fontSize: 8,
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                    }}
                  >
                    AGRICULTURAL CORPORATION
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                  maxWidth: 320,
                }}
              >
                Cultivating Growth. Empowering Sustainable Agriculture.
              </p>
            </div>

            {/* Col 2: Company Links */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  color: COLORS.accentLight,
                }}
              >
                COMPANY
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 12,
                }}
              >
                {[
                  "Home",
                  "About",
                  "Services",
                  "Programs",
                  "Sustainability",
                  "Research",
                  "News",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  color: COLORS.accentLight,
                }}
              >
                OUR SERVICES
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 12,
                }}
              >
                {[
                  "Agricultural Development",
                  "Dairy Development",
                  "Irrigation Solutions",
                  "Livestock Management",
                  "Agricultural Research",
                  "Rural Infrastructure",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Focus Areas + Action Buttons */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  color: COLORS.accentLight,
                }}
              >
                FOCUS AREAS
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  fontSize: 11.5,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: 18,
                }}
              >
                <li>Crop Production</li>
                <li>Dairy Farming</li>
                <li>Livestock</li>
                <li>Irrigation</li>
                <li>Food Security</li>
                <li>Sustainable Agriculture</li>
              </ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a
                  href="#programs"
                  style={{
                    backgroundColor: COLORS.accent,
                    color: "#000",
                    padding: "8px 14px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  EXPLORE PROGRAMS →
                </a>
                <a
                  href="#sustainability"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "#FFF",
                    padding: "8px 14px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  SUSTAINABILITY →
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: 18,
              textAlign: "center",
              fontSize: 11,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © {new Date().getFullYear()} National Agricultural Corporation. All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function EyeIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TargetIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
