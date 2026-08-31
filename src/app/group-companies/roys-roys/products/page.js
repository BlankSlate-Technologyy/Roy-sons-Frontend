"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  HeartPulse,
  FlaskConical,
  Scissors,
  Building2,
  Package,
  Wrench,
  ShieldCheck,
  Globe,
  Search,
  MessageSquare,
  Star,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { RoysNavbar, RoysFooter, RoysButton, SectionHeading } from "../_shared";

// ─── Local Page Color Tokens (Independent of Global CSS) ──────────────────────
const COLORS = {
  primary:     "#113658",
  primaryDark: "#0a2238",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  light:       "#f8fafc",
  teal:        "#009088",
  muted:       "#4a5568",
};

const CATEGORIES = [
  {
    id: "medical",
    icon: HeartPulse,
    image: "/biomax_diagnostic_equipment_ai.jpg",
    title: "Medical Equipment",
    subtitle: "Patient Care & Clinical Operations",
    desc: "Equipment supporting patient care, clinical operations, monitoring, and medical procedures in hospitals, clinics, and healthcare centres.",
    items: [
      "Patient monitoring systems",
      "Diagnostic imaging equipment",
      "Infusion and medication systems",
      "Respiratory care equipment",
      "Cardiology equipment",
      "Emergency & critical care devices",
      "Rehabilitation equipment",
      "Clinical examination tools",
    ],
  },
  {
    id: "laboratory",
    icon: FlaskConical,
    image: "/biomax_lab_equipment_ai.jpg",
    title: "Laboratory Equipment",
    subtitle: "Diagnostics, Testing & Research",
    desc: "Professional instruments and equipment for laboratories, diagnostics, testing, and research operations in clinical and institutional settings.",
    items: [
      "Clinical chemistry analysers",
      "Haematology systems",
      "Microscopy instruments",
      "Centrifuges & separation systems",
      "PCR & molecular diagnostics",
      "Biosafety cabinets",
      "Incubators & mixers",
      "Laboratory consumables",
    ],
  },
  {
    id: "surgical",
    icon: Scissors,
    image: "/pakmedical-card2.png",
    title: "Surgical Instruments",
    subtitle: "Operating Rooms & Clinical Environments",
    desc: "Surgical instruments and accessories for operating rooms and clinical environments, supporting precision and safety across all specialties.",
    items: [
      "General surgical instruments",
      "Orthopaedic instruments",
      "Laparoscopic equipment",
      "Electrosurgical units",
      "Operating tables & lights",
      "Anaesthesia systems",
      "Draping & protection supplies",
      "Sterilisation accessories",
    ],
  },
  {
    id: "hospital",
    icon: Building2,
    image: "/roys_hospital_interior.png",
    title: "Hospital Equipment",
    subtitle: "Hospital Operations & Patient Care",
    desc: "Essential equipment and solutions supporting hospital operations and patient-care environments, from furniture to facility-wide systems.",
    items: [
      "Hospital beds & stretchers",
      "Medical furniture & trolleys",
      "Nurse call & communication systems",
      "Patient lifting & transfer aids",
      "Crash carts & emergency trolleys",
      "Medical gas equipment",
      "Ward & ICU furniture",
      "Central supply systems",
    ],
  },
  {
    id: "supplies",
    icon: Package,
    image: "/biomax_consumables_ai.jpg",
    title: "Medical Supplies",
    subtitle: "Clinical & Institutional Consumables",
    desc: "Healthcare supplies and consumables for day-to-day clinical and institutional requirements, ensuring uninterrupted operations.",
    items: [
      "Surgical disposables",
      "Wound care products",
      "IV sets & cannulas",
      "Gloves & protective equipment",
      "Syringes & needles",
      "Infection control products",
      "Diagnostic test kits",
      "Medical tapes & dressings",
    ],
  },
  {
    id: "engineering",
    icon: Wrench,
    image: "/biomax_rnd_hero_ai.jpg",
    title: "Engineering Solutions",
    subtitle: "Healthcare Infrastructure & Facility",
    desc: "Technical products and systems supporting healthcare infrastructure and facility requirements for modern, compliant healthcare environments.",
    items: [
      "Modular operating theatre panels",
      "Clean room & HVAC systems",
      "Laminar air flow units",
      "Medical gas pipeline systems",
      "Pass boxes & transfer hatches",
      "HEPA filtration systems",
      "Scrub stations & hand hygiene",
      "Facility control & monitoring",
    ],
  },
];

const QUALITY_POINTS = [
  { icon: ShieldCheck, title: "Quality-Focused Sourcing",       desc: "We evaluate products against quality, technical specifications, and application requirements before sourcing." },
  { icon: Globe,       title: "International Supplier Network", desc: "We work with reliable international and industry partners across medical, laboratory, and surgical sectors." },
  { icon: Layers,      title: "Application-Matched Selection",  desc: "Products are matched to your specific clinical, operational, and facility requirements." },
  { icon: Star,        title: "Client-Driven Approach",         desc: "We consider client needs, project scope, and budget when identifying and recommending products." },
];

function CategoryCard({ cat }) {
  const [hovered, setHovered] = useState(false);
  const Icon = cat.icon;

  return (
    <div
      id={cat.id}
      style={{
        backgroundColor: COLORS.white,
        borderRadius: "12px",
        border: `1.5px solid ${hovered ? COLORS.primary : COLORS.border}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: hovered ? "0 16px 36px rgba(17,54,88,0.12)" : "0 4px 16px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category Image Banner */}
      <div style={{ position: "relative", height: "180px", width: "100%", overflow: "hidden", backgroundColor: COLORS.primaryDark }}>
        <Image
          src={cat.image || "/roys_hospital_interior.png"}
          alt={cat.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,15,31,0.85) 0%, rgba(2,15,31,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(17,54,88,0.9)", padding: "5px 12px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Icon size={14} color={COLORS.gold} />
          <span style={{ color: COLORS.white, fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em" }}>{cat.subtitle}</span>
        </div>
      </div>

      <div style={{ padding: "32px 28px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: COLORS.primary, fontSize: "21px", fontWeight: "900", marginBottom: "10px" }}>{cat.title}</h3>
        <p style={{ color: COLORS.primary, fontSize: "15.5px", lineHeight: "1.8", marginBottom: "22px", opacity: 0.9 }}>{cat.desc}</p>

        <p style={{ color: COLORS.gold, fontSize: "11.5px", fontWeight: "800", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
          INCLUDED CAPABILITIES &amp; PRODUCTS
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
          {cat.items.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={15} color={COLORS.teal} style={{ flexShrink: 0 }} />
              <span style={{ color: COLORS.primary, fontSize: "14px", fontWeight: "600" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "18px 28px", borderTop: `1px solid ${COLORS.border}`, backgroundColor: COLORS.light }}>
        <Link
          href="/group-companies/roys-roys/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: COLORS.primary,
            fontSize: "13px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.teal)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.primary)}
        >
          Enquire Specifications <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="Products" />

      {/* ── HERO (IMAGE BACKGROUND + DARK OVERLAY) ───────────────────────── */}
      <section style={{ position: "relative", padding: "80px 24px 75px", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        {/* Background image + overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.25) 100%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <Link href="/group-companies/roys-roys" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Products</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
                OUR HEALTHCARE PRODUCTS
              </p>
              <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                Our Healthcare Products
              </h1>
              <p style={{ color: COLORS.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "700", marginBottom: "18px" }}>
                Professional Medical, Laboratory, Surgical &amp; Hospital Products
              </p>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: "1.85", maxWidth: "640px", marginBottom: "36px" }}>
                Explore our portfolio of healthcare products designed to support hospitals, laboratories, clinics, government institutions, and professional healthcare organizations.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <RoysButton href="#categories" variant="gold">
                  Browse Categories <ArrowRight size={14} />
                </RoysButton>
                <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
                  Request a Product <ArrowRight size={14} />
                </RoysButton>
              </div>
            </div>

            {/* Quick stats floating cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", minWidth: "260px" }} className="hidden lg:grid">
              {[
                { val: "6", lbl: "Categories" },
                { val: "1000+", lbl: "Products" },
                { val: "30+", lbl: "Countries" },
                { val: "15+", lbl: "Years" },
              ].map((s) => (
                <div key={s.lbl} style={{ backgroundColor: COLORS.white, border: `1.5px solid ${COLORS.border}`, borderRadius: "6px", padding: "20px 18px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}>
                  <div style={{ color: COLORS.primary, fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: "900", lineHeight: "1" }}>{s.val}</div>
                  <div style={{ color: COLORS.gold, fontSize: "11.5px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "5px" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV STRIP ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, borderBottom: `1px solid ${COLORS.border}`, padding: "0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  flex: "1",
                  minWidth: "150px",
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  borderRight: `1px solid ${COLORS.border}`,
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = `${COLORS.primary}10`)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <Icon size={18} color={COLORS.primary} />
                <span style={{ color: COLORS.primary, fontSize: "12px", fontWeight: "800", textTransform: "uppercase", textAlign: "center" }}>
                  {cat.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── PRODUCTS CATEGORIES GRID ──────────────────────────────────────── */}
      <section id="categories" style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="PORTFOLIO" title="Product Categories" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY & SOURCING ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR STANDARDS" title="Quality & Sourcing Excellence" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {QUALITY_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: "6px",
                    padding: "32px 26px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = COLORS.primary;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(17,54,88,0.1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <Icon size={22} color={COLORS.primary} />
                  </div>
                  <h3 style={{ color: COLORS.primary, fontSize: "18px", fontWeight: "900", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "14.5px", lineHeight: "1.8", opacity: 0.9 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, borderTop: `2px solid ${COLORS.primary}`, padding: "64px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px" }}>
          <div>
            <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: "900", marginBottom: "10px" }}>
              Looking for a Product We Haven't Listed?
            </h2>
            <p style={{ color: COLORS.primary, fontSize: "16px", maxWidth: "620px", opacity: 0.9 }}>
              Our team can source a wide range of medical, laboratory, surgical, and hospital products. Contact us with your requirements.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
              Request a Product <ArrowRight size={15} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/solutions" variant="outline">
              View Solutions
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
