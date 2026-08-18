"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Globe,
  Package,
  Stethoscope,
  ClipboardList,
  Wrench,
  Landmark,
  CheckCircle2,
  Search,
  Scale,
  Truck,
  Headphones,
  ShieldCheck,
  Users,
  HeartPulse,
  Layers,
  MessageSquare,
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

const SERVICES = [
  {
    id: "sourcing",
    icon: Globe,
    number: "01",
    eyebrow: "INTERNATIONAL SOURCING",
    title: "International Sourcing",
    tagline: "Connecting You With Global Healthcare Solutions",
    desc: "We identify suitable international products and healthcare technologies based on client requirements, specifications, quality expectations, and project needs.",
    points: [
      "Global manufacturer identification",
      "Product specification matching",
      "Quality evaluation & verification",
      "International supplier partnerships",
      "Sourcing for diverse healthcare categories",
      "Country-specific import compliance",
    ],
  },
  {
    id: "procurement",
    icon: Package,
    number: "02",
    eyebrow: "PRODUCT PROCUREMENT",
    title: "Product Procurement",
    tagline: "Simplifying Healthcare Procurement",
    desc: "Our procurement approach helps organizations source the products they need through a professional and structured process.",
    points: [
      "End-to-end procurement management",
      "Vendor selection & negotiation",
      "Purchase order & documentation",
      "Import & logistics coordination",
      "Budget-aligned procurement planning",
      "Institutional procurement support",
    ],
  },
  {
    id: "supply",
    icon: Stethoscope,
    number: "03",
    eyebrow: "MEDICAL & LABORATORY SUPPLY",
    title: "Medical & Laboratory Supply",
    tagline: "Reliable Supply for Healthcare Operations",
    desc: "We supply medical, laboratory, surgical, and hospital products for institutional and professional requirements.",
    points: [
      "Medical equipment supply",
      "Laboratory instruments & systems",
      "Surgical instruments & disposables",
      "Hospital furniture & accessories",
      "Clinical consumables",
      "Ongoing replenishment support",
    ],
  },
  {
    id: "projects",
    icon: ClipboardList,
    number: "04",
    eyebrow: "PROJECT-BASED SOLUTIONS",
    title: "Project-Based Solutions",
    tagline: "Supporting Healthcare Development Projects",
    desc: "For healthcare infrastructure and facility projects, we provide product sourcing and solution support based on project requirements and specifications.",
    points: [
      "New hospital & clinic setup support",
      "Department-level project planning",
      "Equipment list development",
      "Multi-phase supply coordination",
      "Technical specification support",
      "Project-based logistics management",
    ],
  },
  {
    id: "engineering",
    icon: Wrench,
    number: "05",
    eyebrow: "HOSPITAL ENGINEERING",
    title: "Hospital Engineering",
    tagline: "Technical Solutions for Healthcare Facilities",
    desc: "We support healthcare organizations with engineering-related products and technical solutions designed around modern hospital environments.",
    points: [
      "Modular operating theatre systems",
      "Clean room & HVAC solutions",
      "Medical gas pipeline equipment",
      "Laminar air flow & HEPA systems",
      "Pass boxes & sterile transfers",
      "Facility monitoring & control",
    ],
  },
  {
    id: "government",
    icon: Landmark,
    number: "06",
    eyebrow: "INSTITUTIONAL & GOVERNMENT SUPPLY",
    title: "Institutional & Government Supply",
    tagline: "Professional Support for Large-Scale Requirements",
    desc: "We understand the importance of accuracy, documentation, specifications, procurement processes, and dependable supply when working with institutional and government organizations.",
    points: [
      "Government tender & bid support",
      "Compliance documentation",
      "Large-volume supply management",
      "Public sector procurement expertise",
      "Multi-site delivery coordination",
      "Long-term institutional partnerships",
    ],
  },
];

const PROCESS = [
  { num: "01", icon: Search,       title: "Understand", desc: "We identify your requirements, specifications, and project objectives through detailed consultation." },
  { num: "02", icon: Globe,        title: "Source",     desc: "We explore suitable products and international supply options from our verified network." },
  { num: "03", icon: Scale,        title: "Evaluate",   desc: "We assess available solutions based on your requirements, quality standards, and suitability." },
  { num: "04", icon: Truck,        title: "Supply",     desc: "We coordinate procurement, logistics, and delivery according to the agreed requirements." },
  { num: "05", icon: Headphones,   title: "Support",    desc: "We remain available for professional assistance, follow-up, and ongoing healthcare requirements." },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Quality-Focused",          desc: "Every product and solution is evaluated for quality, reliability, and clinical suitability before recommendation." },
  { icon: Globe,       title: "Global Sourcing Network",  desc: "We source from verified international manufacturers across medical, laboratory, and surgical sectors." },
  { icon: Users,       title: "Institutional Expertise",  desc: "Extensive experience serving hospitals, government bodies, and large healthcare institutions." },
  { icon: HeartPulse,  title: "Healthcare-Dedicated",     desc: "100% focused on healthcare — every service we offer is built around healthcare organizations and their needs." },
  { icon: Layers,      title: "Complete Service Range",   desc: "From single-product supply to full project support — we offer the complete spectrum of procurement services." },
  { icon: MessageSquare, title: "Responsive Team",        desc: "A dedicated professional team available for consultations, follow-ups, and technical queries." },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      id={service.id}
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
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
      {/* Left Panel */}
      <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <div style={{ width: "54px", height: "54px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={26} color={COLORS.primary} />
          </div>
          <span style={{ color: COLORS.gold, fontSize: "28px", fontWeight: "900" }}>{service.number}</span>
        </div>

        <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "8px" }}>
          {service.eyebrow}
        </p>
        <h3 style={{ color: COLORS.primary, fontSize: "clamp(1.25rem, 2vw, 1.55rem)", fontWeight: "900", lineHeight: "1.25", marginBottom: "6px" }}>
          {service.title}
        </h3>
        <p style={{ color: COLORS.primary, fontSize: "13px", fontWeight: "700", marginBottom: "14px", fontStyle: "italic" }}>
          {service.tagline}
        </p>
        <p style={{ color: COLORS.primary, fontSize: "14px", lineHeight: "1.8", opacity: 0.88 }}>
          {service.desc}
        </p>
      </div>

      {/* Right Panel */}
      <div style={{ backgroundColor: COLORS.light, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: COLORS.primary, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "18px" }}>
          WHAT THIS INCLUDES
        </p>

        <div style={{ marginBottom: "24px" }}>
          {service.points.map((point) => (
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
          Enquire About This <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function WhatWeDoPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="What We Do" />

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
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>What We Do</span>
          </nav>

          <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
            OUR SERVICES &amp; CAPABILITIES
          </p>
          <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "12px", letterSpacing: "-0.01em" }}>
            What We Do
          </h1>
          <p style={{ color: COLORS.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "700", marginBottom: "18px" }}>
            From Global Sourcing to Healthcare Supply — We Deliver Complete Solutions.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15.5px", lineHeight: "1.85", maxWidth: "660px", marginBottom: "28px" }}>
            Roys &amp; Roys International provides an integrated approach to healthcare product sourcing, trading, supply, and project support for healthcare institutions worldwide.
          </p>

          {/* Service quick links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  color: COLORS.white,
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "8px 16px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  borderRadius: "3px",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.gold; e.currentTarget.style.color = COLORS.primary; e.currentTarget.style.borderColor = COLORS.gold; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = COLORS.white; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
              >
                {s.title}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <RoysButton href="#services" variant="gold">
              Explore What We Do <ArrowRight size={14} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
              Discuss Your Needs <ArrowRight size={14} />
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section id="services" style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR SERVICE AREAS" title="Everything We Offer" />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="HOW WE WORK" title="Our Process Flow" />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90px 1fr",
                    backgroundColor: COLORS.white,
                    borderRadius: "6px",
                    border: `1px solid ${COLORS.border}`,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Step Number */}
                  <div style={{ backgroundColor: `${COLORS.primary}10`, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>
                    <span style={{ color: COLORS.primary, fontSize: "24px", fontWeight: "900" }}>{step.num}</span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 32px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color={COLORS.primary} />
                    </div>
                    <div>
                      <h3 style={{ color: COLORS.primary, fontSize: "18px", fontWeight: "900", marginBottom: "4px" }}>{step.title}</h3>
                      <p style={{ color: COLORS.primary, fontSize: "14px", lineHeight: "1.7", opacity: 0.85 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR ADVANTAGES" title="Why Work With Us" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {WHY_US.map((item) => {
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
                  <h3 style={{ color: COLORS.primary, fontSize: "17px", fontWeight: "900", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "13.5px", lineHeight: "1.75", opacity: 0.85 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, borderTop: `2px solid ${COLORS.primary}`, padding: "64px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px" }}>
          <div>
            <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: "900", marginBottom: "10px" }}>
              Ready to Get Started?
            </h2>
            <p style={{ color: COLORS.primary, fontSize: "15px", maxWidth: "560px", opacity: 0.85 }}>
              Tell us about your requirements and we'll help identify the right products, solutions, and procurement approach for your organization.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
              Contact Our Team <ArrowRight size={15} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/solutions" variant="outline">
              View Our Solutions
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
