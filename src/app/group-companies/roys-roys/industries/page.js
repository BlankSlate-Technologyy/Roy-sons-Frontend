"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Building2,
  Stethoscope,
  FlaskConical,
  Landmark,
  Scissors,
  ClipboardList,
  CheckCircle2,
  Globe,
  Users,
  ShieldCheck,
  HeartPulse,
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

const INDUSTRIES = [
  {
    id: "hospitals",
    icon: Building2,
    number: "01",
    title: "Hospitals",
    subtitle: "Complete Healthcare Facility Support",
    desc: "We provide products and solutions supporting hospital departments, clinical operations, patient care, and facility requirements.",
    points: [
      "Inpatient & outpatient department equipment",
      "ICU & critical care technologies",
      "Operating theatre solutions",
      "Radiology & imaging equipment",
      "Hospital furniture & infrastructure",
      "Medical gas systems",
    ],
  },
  {
    id: "clinics",
    icon: Stethoscope,
    number: "02",
    title: "Clinics & Medical Centers",
    subtitle: "Supporting Everyday Clinical Care",
    desc: "Our healthcare products help clinics and medical centers access reliable equipment and supplies for professional medical services.",
    points: [
      "Clinical examination equipment",
      "Diagnostic instruments",
      "Patient monitoring devices",
      "Medical consumables & supplies",
      "Clinic furniture & fixtures",
      "Point-of-care testing solutions",
    ],
  },
  {
    id: "laboratories",
    icon: FlaskConical,
    number: "03",
    title: "Laboratories",
    subtitle: "Solutions for Modern Diagnostics",
    desc: "We support diagnostic and medical laboratories with laboratory equipment, instruments, and related products.",
    points: [
      "Clinical chemistry & haematology systems",
      "Microscopy & pathology instruments",
      "PCR & molecular diagnostics",
      "Biosafety & containment equipment",
      "Laboratory consumables",
      "Sample handling & processing",
    ],
  },
  {
    id: "government",
    icon: Landmark,
    number: "04",
    title: "Government Healthcare Organizations",
    subtitle: "Supporting Public Healthcare Infrastructure",
    desc: "We work with government and institutional organizations to support healthcare procurement, medical projects, and infrastructure requirements.",
    points: [
      "Large-scale institutional procurement",
      "Government hospital supply",
      "Public health infrastructure support",
      "Medical project equipment supply",
      "Documentation & compliance support",
      "Multi-phase procurement planning",
    ],
  },
  {
    id: "surgical",
    icon: Scissors,
    number: "05",
    title: "Surgical & Specialized Facilities",
    subtitle: "Professional Solutions for Specialized Environments",
    desc: "Our surgical and clinical solutions support specialized healthcare environments requiring dependable equipment and professional supplies.",
    points: [
      "Surgical instruments & sets",
      "Operating room equipment",
      "Sterilization & infection control",
      "Anaesthesia & life support",
      "Electrosurgical units",
      "Specialized clinical accessories",
    ],
  },
  {
    id: "projects",
    icon: ClipboardList,
    number: "06",
    title: "Healthcare Projects",
    subtitle: "From Product Supply to Project Support",
    desc: "For larger healthcare projects, we can support product sourcing, procurement, supply, and technical requirements based on project specifications.",
    points: [
      "Greenfield & expansion hospital projects",
      "Turnkey medical facility setup",
      "Equipment planning & procurement",
      "Multi-department supply programs",
      "Technical specification support",
      "Project-based logistics & delivery",
    ],
  },
];

const CAPABILITIES = [
  { icon: ShieldCheck, title: "Quality-Assured Supply",       desc: "Products sourced from verified international partners with focus on quality and compliance." },
  { icon: Globe,       title: "International Reach",          desc: "Serving healthcare clients across multiple countries with efficient international procurement." },
  { icon: Users,       title: "Institutional Experience",     desc: "Extensive experience working with hospitals, government bodies, and large healthcare organizations." },
  { icon: HeartPulse,  title: "Healthcare-First Approach",    desc: "Every solution is evaluated for its healthcare application, reliability, and clinical suitability." },
];

function IndustryCard({ industry, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <div
      id={industry.id}
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        backgroundColor: COLORS.white,
        border: `1.5px solid ${hovered ? COLORS.primary : COLORS.border}`,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 40px rgba(17,54,88,0.12)" : "0 4px 16px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left panel: Info */}
      <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <div style={{ width: "54px", height: "54px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={26} color={COLORS.primary} />
          </div>
          <span style={{ color: COLORS.gold, fontSize: "28px", fontWeight: "900" }}>{industry.number}</span>
        </div>

        <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "8px" }}>
          {industry.subtitle}
        </p>
        <h3 style={{ color: COLORS.primary, fontSize: "clamp(1.25rem, 2vw, 1.55rem)", fontWeight: "900", lineHeight: "1.3", marginBottom: "14px" }}>
          {industry.title}
        </h3>
        <p style={{ color: COLORS.primary, fontSize: "14.5px", lineHeight: "1.85", opacity: 0.88 }}>
          {industry.desc}
        </p>
      </div>

      {/* Right panel: Points */}
      <div style={{ backgroundColor: COLORS.light, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: COLORS.primary, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "18px" }}>
          WHAT WE SUPPORT
        </p>

        <div style={{ marginBottom: "24px" }}>
          {industry.points.map((point) => (
            <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <CheckCircle2 size={15} color={COLORS.primary} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: COLORS.primary, fontSize: "13.5px", fontWeight: "700" }}>{point}</span>
            </div>
          ))}
        </div>

        <Link
          href="/group-companies/roys-roys/contact"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: COLORS.primary, fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.teal)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.primary)}
        >
          Discuss Your Requirements <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="Industries" />

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
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Industries</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
                SECTORS WE SERVE
              </p>
              <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                Industries We Serve
              </h1>
              <p style={{ color: COLORS.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "700", marginBottom: "18px" }}>
                Healthcare Solutions Across Critical Medical &amp; Institutional Environments
              </p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15.5px", lineHeight: "1.85", maxWidth: "640px", marginBottom: "36px" }}>
                Roys &amp; Roys International supports organizations across healthcare and related institutional sectors with products, equipment, and specialized solutions.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <RoysButton href="#industries-list" variant="gold">
                  Explore Industries <ArrowRight size={14} />
                </RoysButton>
                <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
                  Contact Our Team <ArrowRight size={14} />
                </RoysButton>
              </div>
            </div>

            {/* Quick stats floating cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", minWidth: "260px" }} className="hidden lg:grid">
              {[
                { val: "6", lbl: "Sectors" },
                { val: "30+", lbl: "Countries" },
                { val: "250+", lbl: "Projects" },
                { val: "15+", lbl: "Years" },
              ].map((s) => (
                <div key={s.lbl} style={{ backgroundColor: COLORS.white, border: `1.5px solid ${COLORS.border}`, borderRadius: "6px", padding: "20px 18px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}>
                  <div style={{ color: COLORS.primary, fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: "900", lineHeight: "1" }}>{s.val}</div>
                  <div style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "5px" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV STRIP ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, borderBottom: `1px solid ${COLORS.border}`, padding: "0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <a
                key={ind.id}
                href={`#${ind.id}`}
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
                <span style={{ color: COLORS.primary, fontSize: "11px", fontWeight: "800", textTransform: "uppercase", textAlign: "center" }}>
                  {ind.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── INDUSTRIES LIST ───────────────────────────────────────────────── */}
      <section id="industries-list" style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="WHO WE SERVE" title="Healthcare Sectors We Support" />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {INDUSTRIES.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CAPABILITIES ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="WHY WORK WITH US" title="Our Cross-Industry Capabilities" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
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
                  <h3 style={{ color: COLORS.primary, fontSize: "17px", fontWeight: "900", marginBottom: "10px" }}>{cap.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "13.5px", lineHeight: "1.75", opacity: 0.85 }}>{cap.desc}</p>
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
              Does Your Organization Need Healthcare Solutions?
            </h2>
            <p style={{ color: COLORS.primary, fontSize: "15px", maxWidth: "620px", opacity: 0.85 }}>
              Whether you represent a hospital, clinic, laboratory, or government body — our team is ready to discuss your specific requirements.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
              Discuss Your Requirements <ArrowRight size={15} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/products" variant="outline">
              Browse Products
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
