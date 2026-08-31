"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Sparkles,
  Award,
} from "lucide-react";
import { RoysNavbar, RoysFooter, RoysButton, SectionHeading } from "../_shared";
import { OFFERINGS_LIST } from "../offerings-data";

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

const PROCESS = [
  { num: "01", icon: Search,     title: "Understand", desc: "We identify your requirements, specifications, and project objectives through detailed consultation." },
  { num: "02", icon: Globe,      title: "Source",     desc: "We explore suitable products and international supply options from our verified network." },
  { num: "03", icon: Scale,      title: "Evaluate",   desc: "We assess available solutions based on your requirements, quality standards, and suitability." },
  { num: "04", icon: Truck,      title: "Supply",     desc: "We coordinate procurement, logistics, and delivery according to the agreed requirements." },
  { num: "05", icon: Headphones, title: "Support",    desc: "We remain available for professional assistance, follow-up, and ongoing healthcare requirements." },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Quality-Focused",         desc: "Every product and solution is evaluated for quality, reliability, and clinical suitability before recommendation." },
  { icon: Globe,       title: "Global Sourcing Network", desc: "We source from verified international manufacturers across medical, laboratory, and surgical sectors." },
  { icon: Users,       title: "Institutional Expertise", desc: "Extensive experience serving hospitals, government bodies, and large healthcare institutions." },
  { icon: HeartPulse,  title: "Healthcare-Dedicated",    desc: "100% focused on healthcare — every service we offer is built around healthcare organizations and their needs." },
  { icon: Layers,      title: "Complete Service Range",  desc: "From single-product supply to full project support — we offer the complete spectrum of procurement services." },
  { icon: MessageSquare, title: "Responsive Team",       desc: "A dedicated professional team available for consultations, follow-ups, and technical queries." },
];

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
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.35) 100%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <Link href="/group-companies/roys-roys" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Our Service Offerings</span>
          </nav>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
            <Sparkles size={13} />
            <span>15 COMPREHENSIVE SERVICE DIVISIONS</span>
          </div>

          <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "12px", letterSpacing: "-0.01em" }}>
            Our Service Offerings
          </h1>
          <p style={{ color: COLORS.white, fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: "700", marginBottom: "18px" }}>
            Delivering World-Class Trade, Healthcare, Manufacturing &amp; Infrastructure Solutions.
          </p>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: "1.85", maxWidth: "680px", marginBottom: "28px" }}>
            Explore our full suite of 15 specialized capabilities across government contracting, cross-border trade, medical devices, pharmaceuticals, hospital engineering, and turnkey project commissioning.
          </p>

          {/* Quick jump to offerings */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px", maxWidth: "900px" }}>
            {OFFERINGS_LIST.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                style={{
                  color: COLORS.white,
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  textDecoration: "none",
                  padding: "6px 12px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "3px",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.gold; e.currentTarget.style.color = COLORS.primary; e.currentTarget.style.borderColor = COLORS.gold; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = COLORS.white; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <RoysButton href="#offerings-grid" variant="gold">
              Explore All 15 Services <ArrowRight size={14} />
            </RoysButton>
            <RoysButton href="/group-companies/roys-roys/contact" variant="outline-white">
              Discuss Your Project <ArrowRight size={14} />
            </RoysButton>
          </div>
        </div>
      </section>

      {/* ── 15 SERVICE OFFERINGS GRID ────────────────────────────────────── */}
      <section id="offerings-grid" style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="WHAT WE DO" title="Our 15 Service Offerings" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "30px" }}>
            {OFFERINGS_LIST.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.slug}
                  id={offering.slug}
                  style={{
                    backgroundColor: COLORS.white,
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease",
                  }}
                  className="group hover:border-[#113658] hover:shadow-2xl hover:-translate-y-1.5"
                >
                  {/* Image banner */}
                  <div style={{ position: "relative", height: "180px", width: "100%", overflow: "hidden", backgroundColor: COLORS.primaryDark }}>
                    <Image
                      src={offering.image || "/roys_hospital_interior.png"}
                      alt={offering.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,15,31,0.85) 0%, rgba(2,15,31,0.2) 60%, transparent 100%)" }} />
                    <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(17,54,88,0.85)", padding: "4px 10px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }}>
                      <Icon size={13} color={COLORS.gold} />
                      <span style={{ color: COLORS.white, fontSize: "10.5px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em" }}>{offering.badge}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: "12px", right: "16px", color: COLORS.gold, fontSize: "24px", fontWeight: "900", fontFamily: "monospace" }}>
                      {offering.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: "26px 24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ color: COLORS.gold, fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {offering.eyebrow}
                    </p>
                    <h3 style={{ color: COLORS.primary, fontSize: "19px", fontWeight: "900", lineHeight: "1.3", marginBottom: "8px" }}>
                      {offering.title}
                    </h3>
                    <p style={{ color: COLORS.muted, fontSize: "14.5px", lineHeight: "1.7", marginBottom: "16px" }}>
                      {offering.tagline}
                    </p>

                    {/* Key points preview */}
                    <div style={{ marginTop: "auto", borderTop: `1px solid ${COLORS.border}`, paddingTop: "14px", display: "flex", flexDirection: "column", gap: "7px" }}>
                      {offering.keyPillars.slice(0, 2).map((pillar, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <CheckCircle2 size={15} color={COLORS.teal} style={{ flexShrink: 0 }} />
                          <span style={{ color: COLORS.primary, fontSize: "13.5px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {pillar.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div style={{ padding: "16px 24px", backgroundColor: COLORS.light, borderTop: `1px solid ${COLORS.border}` }}>
                    <Link
                      href={`/group-companies/roys-roys/what-we-do/${offering.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                        fontSize: "11.5px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      className="group-hover:bg-[#B49438]"
                    >
                      <span>Explore Detail Page</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
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
                      <h3 style={{ color: COLORS.primary, fontSize: "18.5px", fontWeight: "900", marginBottom: "4px" }}>{step.title}</h3>
                      <p style={{ color: COLORS.primary, fontSize: "15px", lineHeight: "1.8", opacity: 0.9 }}>{step.desc}</p>
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
                  <h3 style={{ color: COLORS.primary, fontSize: "18px", fontWeight: "900", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: COLORS.primary, fontSize: "14.5px", lineHeight: "1.8", opacity: 0.9 }}>{item.desc}</p>
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
            <p style={{ color: COLORS.primary, fontSize: "16px", maxWidth: "560px", opacity: 0.9 }}>
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
