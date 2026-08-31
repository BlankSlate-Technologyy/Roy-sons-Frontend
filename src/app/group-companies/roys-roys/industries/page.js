"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Building2,
} from "lucide-react";
import { RoysNavbar, RoysFooter, RoysButton, SectionHeading } from "../_shared";
import { INDUSTRIES_LIST } from "../industries-data";

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

const CAPABILITIES = [
  { icon: ShieldCheck, title: "Quality-Assured Supply",    desc: "Products sourced from verified international partners with focus on quality and compliance." },
  { icon: Globe,       title: "International Reach",       desc: "Serving healthcare clients across multiple countries with efficient international procurement." },
  { icon: Users,       title: "Institutional Experience",  desc: "Extensive experience working with hospitals, government bodies, and large healthcare organizations." },
  { icon: HeartPulse,  title: "Healthcare-First Approach", desc: "Every solution is evaluated for its healthcare application, reliability, and clinical suitability." },
];

function IndustryCard({ industry, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <div
      id={industry.slug}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        backgroundColor: COLORS.white,
        border: `1.5px solid ${hovered ? COLORS.primary : COLORS.border}`,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 40px rgba(17,54,88,0.12)" : "0 4px 16px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left panel: Info */}
      <div style={{ padding: "44px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `1px solid ${COLORS.border}` }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
            <div style={{ width: "54px", height: "54px", borderRadius: "12px", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={28} color={COLORS.primary} />
            </div>
            <span style={{ color: COLORS.gold, fontSize: "28px", fontWeight: "900", fontFamily: "monospace" }}>0{index + 1}</span>
          </div>

          <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>
            {industry.badge}
          </p>
          <h3 style={{ color: COLORS.primary, fontSize: "clamp(1.3rem, 2vw, 1.65rem)", fontWeight: "900", lineHeight: "1.25", marginBottom: "14px" }}>
            {industry.title}
          </h3>
          <p style={{ color: COLORS.primary, fontSize: "16px", lineHeight: "1.8", opacity: 0.9, marginBottom: "20px" }}>
            {industry.tagline}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "20px", borderTop: `1px solid ${COLORS.border}` }}>
          <Link
            href={`/group-companies/roys-roys/industries/${industry.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: COLORS.primary,
              color: COLORS.white,
              fontSize: "13px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "12px 22px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = COLORS.teal)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            Explore Detail Page <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Right panel: Core Capabilities & Tech */}
      <div style={{ backgroundColor: COLORS.light, padding: "44px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ color: COLORS.primary, fontSize: "11.5px", fontWeight: "800", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "18px" }}>
          FEATURED CAPABILITIES &amp; SYSTEMS
        </p>

        <div style={{ marginBottom: "24px" }}>
          {industry.keyPillars.slice(0, 4).map((pillar) => (
            <div key={pillar.title} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 0", borderBottom: `1px solid ${COLORS.border}` }}>
              <CheckCircle2 size={16} color={COLORS.teal} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <span style={{ color: COLORS.primary, fontSize: "14.5px", fontWeight: "800", display: "block" }}>{pillar.title}</span>
                <span style={{ color: COLORS.muted, fontSize: "13.5px", lineHeight: "1.6" }}>{pillar.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={`/group-companies/roys-roys/industries/${industry.slug}`}
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: COLORS.primary, fontSize: "13px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.teal)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.primary)}
        >
          View Full Equipment Portfolio &amp; FAQs <ArrowRight size={13} />
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
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.35) 100%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <Link href="/group-companies/roys-roys" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Industries</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", alignItems: "center", maxWidth: "800px" }}>
            <div>
              <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
                SECTORS WE SERVE
              </p>
              <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                Industries We Serve
              </h1>
              <p style={{ color: COLORS.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "700", marginBottom: "18px" }}>
                Healthcare Solutions Across 9 Critical Medical &amp; Institutional Sectors
              </p>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: "1.85", maxWidth: "640px", marginBottom: "36px" }}>
                Roys &amp; Roys International delivers tailored medical technologies, sterile cleanrooms, laboratory equipment, and engineering infrastructure to hospitals, defense forces, universities, pharma plants, and international relief bodies.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
                  Inquire For Your Sector
                </RoysButton>
                <RoysButton href="#industries-list" variant="outline-white">
                  Browse All 9 Sectors
                </RoysButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV TABS ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, borderBottom: `1px solid ${COLORS.border}`, padding: "16px 24px", position: "sticky", top: "68px", zIndex: 40, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", paddingBottom: "2px" }}>
          <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.muted, whiteSpace: "nowrap", marginRight: "6px" }}>Jump to:</span>
          {INDUSTRIES_LIST.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              style={{
                padding: "6px 14px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "700",
                color: COLORS.primary,
                backgroundColor: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.style.color = COLORS.white;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                e.currentTarget.style.color = COLORS.primary;
              }}
            >
              {ind.label.replace("\n", " ")}
            </a>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES LIST ──────────────────────────────────────────────── */}
      <section id="industries-list" style={{ padding: "80px 24px", backgroundColor: COLORS.white }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="TARGET SECTORS"
            title="Comprehensive Sector Coverage"
            subtitle="Click on any industry to explore specialized clinical capabilities, equipment portfolios, and turnkey case studies."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {INDUSTRIES_LIST.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US / CAPABILITIES ─────────────────────────────────── */}
      <section style={{ padding: "75px 24px", backgroundColor: COLORS.light, borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="WHY ROYS &amp; ROYS"
            title="Institutional Reliability &amp; Experience"
            subtitle="Partnering with organizations to deliver reliable products and practical healthcare solutions."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: COLORS.white,
                  padding: "32px 28px",
                  borderRadius: "8px",
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Icon size={24} color={COLORS.primary} />
                </div>
                <h4 style={{ color: COLORS.primary, fontSize: "16px", fontWeight: "800", marginBottom: "10px" }}>
                  {title}
                </h4>
                <p style={{ color: COLORS.primary, fontSize: "13.5px", lineHeight: "1.75", opacity: 0.8 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", backgroundColor: COLORS.primary, color: COLORS.white, textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
            GET STARTED
          </p>
          <h2 style={{ color: COLORS.white, fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: "900", lineHeight: "1.25", marginBottom: "18px" }}>
            Ready to Discuss Your Sector&apos;s Requirements?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: "1.8", marginBottom: "36px" }}>
            Whether you represent a hospital, government health agency, research institute, or private medical practice, our specialists are here to assist.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <RoysButton href="/group-companies/roys-roys/contact" variant="gold">
              Submit an Inquiry
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/solutions" variant="outline-white">
              Explore Solutions
            </RoysButton>
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
