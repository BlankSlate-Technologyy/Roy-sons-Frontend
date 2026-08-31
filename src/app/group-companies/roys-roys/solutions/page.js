"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  HeartPulse,
  FlaskConical,
  Building2,
  Settings,
  Activity,
  Microscope,
  Package,
  Wrench,
  Layers,
  MessageSquare,
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

const SOLUTIONS = [
  {
    id: "medical",
    icon: HeartPulse,
    eyebrow: "MEDICAL SOLUTIONS",
    title: "Advanced Medical Equipment & Technologies",
    desc: "We provide medical equipment and healthcare technologies designed to support hospitals, clinics, medical centers, and healthcare professionals.",
    areas: [
      "Patient care equipment",
      "Diagnostic equipment",
      "Monitoring solutions",
      "Clinical equipment",
      "Medical supplies",
    ],
  },
  {
    id: "laboratory",
    icon: FlaskConical,
    eyebrow: "LABORATORY SOLUTIONS",
    title: "Supporting Accurate Laboratory Operations",
    desc: "Our laboratory solutions support clinical diagnostics, research, testing, and laboratory operations with dependable equipment and supplies.",
    areas: [
      "Laboratory equipment",
      "Diagnostic systems",
      "Laboratory instruments",
      "Consumables",
      "Testing solutions",
    ],
  },
  {
    id: "surgical",
    icon: Activity,
    eyebrow: "SURGICAL SOLUTIONS",
    title: "Precision for Modern Surgical Environments",
    desc: "We provide surgical equipment, instruments, and supplies designed to support healthcare professionals and modern surgical facilities.",
    areas: [
      "Surgical instruments",
      "Operating room equipment",
      "Surgical supplies",
      "Sterilization-related solutions",
      "Clinical accessories",
    ],
  },
  {
    id: "engineering",
    icon: Building2,
    eyebrow: "HOSPITAL ENGINEERING",
    title: "Healthcare Infrastructure & Engineering Solutions",
    desc: "Modern healthcare facilities require more than medical equipment. Our hospital engineering solutions support the infrastructure and technical requirements of healthcare environments.",
    areas: [
      "Hospital infrastructure solutions",
      "Technical equipment",
      "Facility support systems",
      "Healthcare engineering",
      "Project-based solutions",
    ],
  },
  {
    id: "customized",
    icon: Settings,
    eyebrow: "CUSTOMIZED SOLUTIONS",
    title: "Solutions Built Around Your Requirements",
    desc: "Every healthcare facility has different operational and technical requirements. We work with clients to identify suitable products and develop practical solutions based on project scope, facility needs, and procurement requirements.",
    areas: [
      "Facility-specific assessments",
      "Tailored product sourcing",
      "Scope-based procurement",
      "Multi-phase project planning",
      "Dedicated account support",
    ],
  },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, num: "01", title: "Consultation",       desc: "We begin with a thorough consultation to understand your facility's specific requirements and goals." },
  { icon: Microscope,    num: "02", title: "Assessment",         desc: "Our team assesses the technical and operational scope, identifying the most suitable products and suppliers." },
  { icon: Package,       num: "03", title: "Procurement",        desc: "We manage international sourcing, documentation, logistics, and import processes end to end." },
  { icon: Wrench,        num: "04", title: "Delivery & Support", desc: "We ensure timely, verified delivery and provide professional after-sales support throughout the lifecycle." },
];

const WHY_CHOOSE = [
  { icon: CheckCircle2, title: "Healthcare-Focused Expertise",         desc: "Deep knowledge of medical, laboratory, and surgical supply chains." },
  { icon: Layers,       title: "End-to-End Solutions",                 desc: "From procurement to after-sales support, we manage the complete process." },
  { icon: Activity,     title: "Quality-Assured Products",             desc: "We source from reputable international manufacturers and verified suppliers." },
  { icon: Building2,    title: "Government & Institutional Experience", desc: "Extensive experience serving public-sector healthcare clients." },
  { icon: Settings,     title: "Customized Procurement Plans",         desc: "Solutions tailored to your facility size, budget, and clinical requirements." },
  { icon: MessageSquare,title: "Professional Support Team",            desc: "A dedicated team available for consultation, technical queries, and follow-up." },
];

function SolutionCard({ solution, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = solution.icon;

  return (
    <div
      id={solution.id}
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "0",
        backgroundColor: COLORS.white,
        border: `1.5px solid ${hovered ? COLORS.primary : COLORS.border}`,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 40px rgba(17,54,88,0.12)" : "0 4px 20px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left panel: Info */}
      <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${COLORS.border}` }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
          <Icon size={26} color={COLORS.primary} />
        </div>
        <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}>
          {solution.eyebrow}
        </p>
        <h3 style={{ color: COLORS.primary, fontSize: "clamp(1.25rem, 2vw, 1.6rem)", fontWeight: "900", lineHeight: "1.3", marginBottom: "16px" }}>
          {solution.title}
        </h3>
        <p style={{ color: COLORS.primary, fontSize: "16px", lineHeight: "1.85", opacity: 0.95 }}>
          {solution.desc}
        </p>
      </div>

      {/* Right panel: Solution Areas */}
      <div style={{ backgroundColor: COLORS.light, padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: COLORS.primary, fontSize: "11.5px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "18px" }}>
          SOLUTION AREAS
        </p>
        <div style={{ marginBottom: "28px" }}>
          {solution.areas.map((area) => (
            <div key={area} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <CheckCircle2 size={16} color={COLORS.primary} style={{ flexShrink: 0 }} />
              <span style={{ color: COLORS.primary, fontSize: "15px", fontWeight: "700" }}>{area}</span>
            </div>
          ))}
        </div>
        <Link
          href="/group-companies/roys-roys/contact"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: COLORS.primary, fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.teal)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.primary)}
        >
          Discuss This Solution <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="Solutions" />

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
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Solutions</span>
          </nav>

          <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
            OUR HEALTHCARE SOLUTIONS
          </p>
          <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", maxWidth: "820px", marginBottom: "20px", letterSpacing: "-0.01em" }}>
            Healthcare Solutions Designed Around Your Needs
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: "1.85", maxWidth: "680px", marginBottom: "36px" }}>
            From medical equipment and laboratory technologies to surgical products and hospital engineering, we provide solutions that support the complete healthcare environment.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <RoysButton href="#solutions" variant="gold">
              Explore Solutions <ArrowRight size={14} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
              Discuss Your Requirements <ArrowRight size={14} />
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV TABS (WHITE/LIGHT BACKGROUND) ──────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, borderBottom: `1px solid ${COLORS.border}`, padding: "0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  flex: "1",
                  minWidth: "150px",
                  padding: "18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  borderRight: `1px solid ${COLORS.border}`,
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = `${COLORS.primary}10`)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <Icon size={20} color={COLORS.primary} />
                <span style={{ color: COLORS.primary, fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>
                  {s.eyebrow.replace(/ SOLUTIONS| ENGINEERING/, "")}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── SOLUTIONS CARDS LIST ─────────────────────────────────────────── */}
      <section id="solutions" style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="WHAT WE OFFER" title="Our Healthcare Solution Areas" />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {SOLUTIONS.map((solution, index) => (
              <SolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK (PROCESS) ────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR PROCESS" title="How We Work With You" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} style={{ backgroundColor: COLORS.white, borderRadius: "6px", padding: "36px 28px", border: `1px solid ${COLORS.border}`, boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color={COLORS.primary} />
                    </div>
                    <span style={{ color: COLORS.gold, fontSize: "28px", fontWeight: "900" }}>{step.num}</span>
                  </div>
                  <h3 style={{ color: COLORS.primary, fontSize: "18.5px", fontWeight: "900", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "15px", lineHeight: "1.8", opacity: 0.9 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR STRENGTHS" title="Why Work With Us" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: "6px",
                    padding: "32px 28px",
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "12px" }}>
            READY TO GET STARTED?
          </p>
          <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: "900", lineHeight: "1.2", marginBottom: "14px" }}>
            Discuss Your Healthcare Requirements
          </h2>
          <p style={{ color: COLORS.primary, fontSize: "16px", lineHeight: "1.85", maxWidth: "600px", margin: "0 auto 32px", opacity: 0.9 }}>
            Every healthcare facility has unique needs. Contact our team to discuss your project scope, product requirements, and procurement goals.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
              Discuss Your Requirements <ArrowRight size={16} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/products" variant="outline">
              Browse Products <ArrowRight size={16} />
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
