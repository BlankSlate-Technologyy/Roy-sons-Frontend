"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Star,
  Users,
  HeartPulse,
  Target,
  Eye,
  CheckCircle2,
  Search,
  Package,
  Headphones,
  Building2,
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

const STATS = [
  { value: "15+",   label: "Years of Excellence" },
  { value: "250+",  label: "Projects Delivered" },
  { value: "30+",   label: "Countries Served" },
  { value: "1000+", label: "Products & Solutions" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Uncompromising honesty, transparency, and ethical standards in all international trade and healthcare procurement relationships.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Constantly embracing advanced medical technologies and smart procurement solutions to meet evolving healthcare demands.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Delivering superior quality in every product, service, and turnkey project from initial consultation to after-sales support.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Focus",
    desc: "Dedicated to improving patient outcomes and healthcare infrastructure through reliable, certified medical supply chains.",
  },
  {
    icon: Users,
    title: "Client Commitment",
    desc: "Building enduring partnerships with governments, hospitals, and institutions through responsive, personalized service.",
  },
];

const APPROACH_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    desc: "We first understand the specific requirements, operational needs, and goals of our clients and healthcare organizations.",
  },
  {
    icon: Target,
    step: "02",
    title: "Source",
    desc: "We identify and qualify suitable products and solutions from trusted global manufacturers and suppliers.",
  },
  {
    icon: Package,
    step: "03",
    title: "Supply",
    desc: "We manage procurement, logistics, import documentation, and timely delivery to your facility.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Support",
    desc: "We provide professional after-sales support, technical assistance, and long-term partnership throughout.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="About Us" />

      {/* ── HERO SECTION (WITH BACKGROUND IMAGE + OVERLAY) ──────────────── */}
      <section style={{ position: "relative", padding: "80px 24px 75px", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        {/* Background image + overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.25) 100%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <Link href="/group-companies/roys-roys" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>About Us</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center" }}>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
                ABOUT ROYS &amp; ROYS INTERNATIONAL
              </p>
              <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                Building Trusted Connections Between Global Healthcare Technology and Local Healthcare Needs.
              </h1>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: "1.85", marginBottom: "36px" }}>
                Roys &amp; Roys International is a healthcare solutions and international trading company providing medical, laboratory, surgical, and hospital engineering solutions to healthcare institutions, government organizations, and professional clients.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <RoysButton href="/group-companies/roys-roys/solutions" variant="gold">
                  Explore Our Solutions <ArrowRight size={14} />
                </RoysButton>
                <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
                  Contact Our Team <ArrowRight size={14} />
                </RoysButton>
              </div>
            </div>

            {/* Stats floating cards (Crisp White background with shadow) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: "8px",
                    padding: "26px 20px",
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = COLORS.primary;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
                  }}
                >
                  <div style={{ color: COLORS.primary, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", fontWeight: "900", lineHeight: "1" }}>{s.value}</div>
                  <div style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "8px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          {/* Left: text */}
          <div>
            <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "12px" }}>WHO WE ARE</p>
            <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: "900", lineHeight: "1.2", marginBottom: "20px", letterSpacing: "-0.01em" }}>
              Your Trusted Healthcare Solutions Partner
            </h2>
            <div style={{ width: "48px", height: "4px", backgroundColor: COLORS.primary, borderRadius: "2px", marginBottom: "28px" }} />
            <p style={{ color: COLORS.primary, fontSize: "16.5px", lineHeight: "1.9", marginBottom: "18px", opacity: 0.95 }}>
              Our company focuses on identifying, sourcing, supplying, and supporting healthcare products and technologies that meet the requirements of modern medical facilities.
            </p>
            <p style={{ color: COLORS.primary, fontSize: "16.5px", lineHeight: "1.9", marginBottom: "32px", opacity: 0.95 }}>
              With a solutions-oriented approach, we aim to simplify healthcare procurement while maintaining high standards of quality, reliability, and professional service.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                "Medical devices & equipment",
                "Laboratory & diagnostic systems",
                "Hospital engineering solutions",
                "Government procurement support",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 16px", backgroundColor: COLORS.light, borderRadius: "4px", border: `1px solid ${COLORS.border}` }}>
                  <CheckCircle2 size={18} color={COLORS.primary} style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "14.5px", color: COLORS.primary, fontWeight: "700" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div>
            <div style={{ backgroundColor: COLORS.light, border: `2px solid ${COLORS.primary}`, borderRadius: "8px", padding: "44px 36px", boxShadow: "0 12px 32px rgba(17,54,88,0.08)" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: `${COLORS.primary}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Building2 size={32} color={COLORS.primary} />
              </div>
              <h3 style={{ color: COLORS.primary, fontSize: "22px", fontWeight: "900", marginBottom: "12px" }}>Corporate Overview</h3>
              <p style={{ color: COLORS.primary, fontSize: "15.5px", lineHeight: "1.85", marginBottom: "28px", opacity: 0.95 }}>
                ROYS &amp; ROYS International is an international business enterprise specializing in healthcare technologies, government contracting, and turnkey hospital development.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { val: "15+", lbl: "Years Experience" },
                  { val: "30+", lbl: "Countries Network" },
                  { val: "250+", lbl: "Projects Delivered" },
                  { val: "1000+", lbl: "Healthcare Products" },
                ].map((s) => (
                  <div key={s.lbl} style={{ backgroundColor: COLORS.white, borderRadius: "4px", padding: "14px 16px", textAlign: "center", border: `1px solid ${COLORS.border}` }}>
                    <div style={{ color: COLORS.primary, fontSize: "20px", fontWeight: "900" }}>{s.val}</div>
                    <div style={{ color: COLORS.gold, fontSize: "11.5px", fontWeight: "800", textTransform: "uppercase", marginTop: "4px" }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR PURPOSE" title="Mission & Vision" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            {/* Mission */}
            <div
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{ backgroundColor: COLORS.white, borderRadius: "12px", padding: "48px 40px", border: `1.5px solid ${COLORS.border}`, borderTopWidth: "5px", borderTopColor: COLORS.primary, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
            >
              <div
                className="transition-all duration-300 group-hover:scale-110 group-hover:bg-[#113658] group-hover:text-white"
                style={{ width: "54px", height: "54px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "22px" }}
              >
                <Target size={26} className="text-[#113658] group-hover:text-white transition-colors" />
              </div>
              <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px" }}>OUR MISSION</p>
              <h3 className="group-hover:text-[#113658] transition-colors" style={{ color: COLORS.primary, fontSize: "22px", fontWeight: "900", marginBottom: "14px", lineHeight: "1.3" }}>Improving Access to Reliable Healthcare Solutions</h3>
              <p style={{ color: COLORS.primary, fontSize: "16px", lineHeight: "1.9", opacity: 0.9 }}>
                Our mission is to provide healthcare organizations with dependable products, professional services, and international solutions that contribute to better healthcare infrastructure and operational efficiency.
              </p>
            </div>

            {/* Vision */}
            <div
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              style={{ backgroundColor: COLORS.white, borderRadius: "12px", padding: "48px 40px", border: `1.5px solid ${COLORS.border}`, borderTopWidth: "5px", borderTopColor: COLORS.gold, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
            >
              <div
                className="transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B49438] group-hover:text-white"
                style={{ width: "54px", height: "54px", borderRadius: "50%", backgroundColor: "rgba(180,148,56,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "22px" }}
              >
                <Eye size={26} className="text-[#B49438] group-hover:text-white transition-colors" />
              </div>
              <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "10px" }}>OUR VISION</p>
              <h3 className="group-hover:text-[#B49438] transition-colors" style={{ color: COLORS.primary, fontSize: "22px", fontWeight: "900", marginBottom: "14px", lineHeight: "1.3" }}>A Stronger Healthcare Future</h3>
              <p style={{ color: COLORS.primary, fontSize: "16px", lineHeight: "1.9", opacity: 0.9 }}>
                To become a trusted healthcare solutions and international trading partner recognized for quality, reliability, innovation, and long-term relationships with clients across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="WHAT WE STAND FOR" title="Our Core Values" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: "6px",
                    padding: "32px 24px",
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
                  <h3 style={{ color: COLORS.primary, fontSize: "18px", fontWeight: "900", marginBottom: "10px" }}>{val.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "14.5px", lineHeight: "1.8", opacity: 0.9 }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="HOW WE OPERATE" title="Our Strategic Approach" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {APPROACH_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} style={{ backgroundColor: COLORS.white, borderRadius: "6px", padding: "36px 28px", border: `1px solid ${COLORS.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div style={{ width: "46px", height: "46px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color={COLORS.primary} />
                    </div>
                    <span style={{ color: COLORS.gold, fontSize: "28px", fontWeight: "900" }}>{step.step}</span>
                  </div>
                  <h3 style={{ color: COLORS.primary, fontSize: "18.5px", fontWeight: "900", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "15px", lineHeight: "1.8", opacity: 0.9 }}>{step.desc}</p>
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
            <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "900", marginBottom: "10px" }}>
              Ready to Partner With Roys &amp; Roys International?
            </h2>
            <p style={{ color: COLORS.primary, fontSize: "16px", maxWidth: "620px", opacity: 0.9 }}>
              Get in touch with our team for product inquiries, procurement support, and tailored healthcare solutions.
            </p>
          </div>
          <RoysButton href="/group-companies/roys-roys/contact" variant="primary">
            Contact Our Team <ArrowRight size={16} />
          </RoysButton>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
