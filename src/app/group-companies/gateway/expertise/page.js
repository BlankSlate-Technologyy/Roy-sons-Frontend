"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Award,
  Globe2,
  Package,
  TrendingUp,
  RefreshCw,
  Search,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Building2,
  FileText,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  Target,
  Eye,
  Check,
  Send,
  Compass,
  BookOpen,
  Scale,
  ShieldAlert,
  Zap,
} from "lucide-react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { COLORS } from "../constants";
import { Container } from "../sections/Shared";

// ─── Smooth Animated Number Counter Component ────────────────────────────────
function AnimatedCounter({ targetValue, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = targetValue.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeProgress * numericTarget));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-extrabold text-3xl sm:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

// ─── Areas of Expertise Data from User Request ───────────────────────────────
const EXPERTISE_AREAS = [
  {
    id: "licensing-registration",
    title: "Licensing & Registration",
    description:
      "Guidance related to pharmaceutical licensing, product registration, and regulatory submissions.",
    icon: FileCheck,
    tag: "Statutory Approvals",
    capabilities: [
      "New Drug Applications (NDAs) & Generic Product Dossiers",
      "Pharmaceutical Manufacturing & Facility Licensing",
      "Wholesale Distribution Authorizations (WDA)",
      "Import / Export Permits & Trade Clearances",
    ],
  },
  {
    id: "regulatory-affairs",
    title: "Regulatory Affairs",
    description:
      "Supporting organizations with regulatory processes, communication, documentation, and ongoing regulatory activities.",
    icon: ClipboardList,
    tag: "Authority Communications",
    capabilities: [
      "Direct technical liaison with DRAP, MOH, and international bodies",
      "Post-marketing variation filings (Type IA, IB, and Type II)",
      "Pharmacovigilance (PV) and safety monitoring submissions",
      "Product labeling, artwork, and packaging compliance reviews",
    ],
  },
  {
    id: "compliance-management",
    title: "Compliance Management",
    description:
      "Helping organizations understand regulatory obligations and develop appropriate compliance-focused approaches.",
    icon: ShieldCheck,
    tag: "cGMP & Standards",
    capabilities: [
      "WHO-cGMP, PIC/S, and national standard gap audits",
      "Quality Management Systems (QMS) structuring & audits",
      "Pre-inspection mock audits and readiness programs",
      "Data integrity, validation protocols, and cleanroom compliance",
    ],
  },
  {
    id: "regulatory-documentation",
    title: "Regulatory Documentation",
    description:
      "Reviewing and supporting the preparation of regulatory documents, applications, and submission materials.",
    icon: FileText,
    tag: "CTD / eCTD Dossiers",
    capabilities: [
      "Common Technical Document (CTD) authoring (Modules 1 to 5)",
      "Site Master Files (SMF) & Validation Master Plans (VMP)",
      "Quality Overall Summaries (QOS) & Safety Overviews",
      "Certificate of Pharmaceutical Product (CoPP) dossiers",
    ],
  },
  {
    id: "product-strategy",
    title: "Product Regulatory Strategy",
    description:
      "Providing guidance on regulatory pathways and requirements associated with pharmaceutical products.",
    icon: Compass,
    tag: "Strategic Pathways",
    capabilities: [
      "Multi-country regulatory roadmapping & fast-track pathways",
      "Formulation classification & regulatory feasibility studies",
      "Lifecycle extension and patent transition strategies",
      "Risk assessment and timeline acceleration frameworks",
    ],
  },
  {
    id: "regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Helping clients understand relevant regulatory developments and their potential impact on business and product activities.",
    icon: RefreshCw,
    tag: "Regulatory Intelligence",
    capabilities: [
      "Continuous tracking of DRAP, FDA, and EMA policy changes",
      "Impact assessments for newly enacted statutory guidelines",
      "Timely alert briefings for emerging compliance requirements",
      "Advisory on pharmacopeial monograph revisions (USP, BP, Ph. Eur.)",
    ],
  },
];

// ─── 5-Stage Approach Framework Data ─────────────────────────────────────────
const APPROACH_STAGES = [
  {
    step: "01",
    name: "Understand",
    title: "Understand Client Requirements",
    desc: "We begin with a thorough consultation to understand your unique organizational goals, product portfolio, target jurisdictions, and specific regulatory obligations.",
    icon: BookOpen,
  },
  {
    step: "02",
    name: "Assess",
    title: "Assess Applicable Situation",
    desc: "Our regulatory officers conduct a rigorous gap analysis across your existing documentation, facility compliance, and technical data against statutory benchmarks.",
    icon: Scale,
  },
  {
    step: "03",
    name: "Plan",
    title: "Develop Practical Regulatory Approach",
    desc: "We formulate a structured, actionable compliance roadmap with transparent milestones, optimized submission timelines, and clear resource allocation.",
    icon: Compass,
  },
  {
    step: "04",
    name: "Support",
    title: "Provide Ongoing Process Support",
    desc: "Our team actively manages dossier preparation, authority correspondence, statutory query resolutions, and technical filings at every touchpoint.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    name: "Comply",
    title: "Achieve & Maintain Full Compliance",
    desc: "Securing official approvals, licenses, and product registrations while implementing long-term systems to ensure continuous statutory compliance.",
    icon: Award,
  },
];

const STATS_ITEMS = [
  { value: "200+", label: "Successful Registrations", icon: FileCheck },
  { value: "15+", label: "Regulatory Experts", icon: ShieldCheck },
  { value: "150+", label: "Client Partnerships", icon: Building2 },
  { value: "500+", label: "Licenses Processed", icon: Award },
  { value: "10+", label: "Years Combined Experience", icon: Globe2 },
  { value: "98%", label: "Approval Success Rate", icon: CheckCircle2 },
];

export default function GatewayExpertisePage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");

    const sections = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section-fade");
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.body.classList.remove("roys-roys-theme");
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="min-h-screen text-[15px] font-sans antialiased overflow-x-hidden bg-white"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.textDark,
      }}
    >
      <style>{`
        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-animate {
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-section-fade {
          animation: sectionFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Navbar */}
      <Navbar />

      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section
        className="section-animate relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-5 border w-fit shadow-sm bg-white"
                style={{
                  color: COLORS.secondary,
                  borderColor: COLORS.border,
                }}
              >
                <Sparkles size={14} style={{ color: COLORS.secondary }} />
                <span>Pharmaceutical Regulatory Expertise</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
                style={{ color: COLORS.primary }}
              >
                Supporting Organizations Through Complex Regulatory Requirements
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8"
                style={{ color: COLORS.textGray }}
              >
                The pharmaceutical industry operates within a highly regulated
                environment. Gateway Pharmaceuticals Consultants helps
                organizations navigate regulatory requirements with clarity,
                structure, and professional guidance.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#expertise-areas"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Explore 6 Areas of Expertise</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#our-approach"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.primary,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <span>Our 5-Stage Approach</span>
                </a>
              </div>
            </div>

            {/* Right Showcase Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/gatwayareaofexperince.png"
                  alt="Gateway Pharmaceuticals Regulatory Expertise"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(23, 63, 138, 0.45) 0%, transparent 65%)",
                  }}
                />
                <div
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border shadow-lg"
                  style={{ borderColor: COLORS.border }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: COLORS.secondary }}
                  >
                    Clarity · Structure · Guidance
                  </p>
                  <p className="text-sm font-bold" style={{ color: COLORS.primary }}>
                    Expert Regulatory Solutions for Pharma &amp; Healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Animated Number Counters Section ──────────────────────────────── */}
      <section
        className="section-animate py-16 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className="text-xs font-extrabold uppercase tracking-widest block mb-2"
              style={{ color: COLORS.secondary }}
            >
              EXPERT BENCHMARKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: COLORS.primary }}>
              Proven Track Record in Regulatory Affairs
            </h2>
            <p className="text-sm font-medium mt-2" style={{ color: COLORS.textGray }}>
              Combining deep regulatory intelligence with operational precision across every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${COLORS.primary}12` }}
                  >
                    <Icon size={22} style={{ color: COLORS.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: COLORS.primary }}>
                    <AnimatedCounter targetValue={item.value} duration={1500 + index * 100} />
                  </div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-wider leading-snug"
                    style={{ color: COLORS.textDark }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Our Areas of Expertise Section ─────────────────────────────────── */}
      <section
        id="expertise-areas"
        className="section-animate py-20 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-xs font-extrabold uppercase tracking-widest block mb-2"
              style={{ color: COLORS.secondary }}
            >
              CORE COMPETENCIES
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Our Areas of Expertise
            </h2>
            <p className="text-base font-medium" style={{ color: COLORS.textGray }}>
              Specialized domain depth covering every facet of pharmaceutical licensing, quality standards, and regulatory documentation.
            </p>
          </div>

          {/* 6 Expertise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_AREAS.map((area, idx) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.id}
                  className="rounded-3xl border p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${COLORS.primary}12` }}
                      >
                        <Icon size={26} style={{ color: COLORS.primary }} />
                      </div>
                      <span
                        className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border bg-slate-50"
                        style={{ color: COLORS.secondary, borderColor: COLORS.border }}
                      >
                        {area.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-extrabold mb-3 transition-colors group-hover:text-[#173F8A]"
                      style={{ color: COLORS.textDark }}
                    >
                      {area.title}
                    </h3>

                    {/* Description from user prompt */}
                    <p
                      className="text-sm font-medium leading-relaxed mb-6"
                      style={{ color: COLORS.textGray }}
                    >
                      {area.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t" style={{ borderColor: "rgba(229,231,235,0.6)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.primary }}>
                        Key Technical Deliverables:
                      </p>
                      {area.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.secondary }} />
                          <span className="text-xs font-medium text-slate-700 leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: COLORS.border }}>
                    <a
                      href="/group-companies/gateway#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:underline cursor-pointer"
                      style={{ color: COLORS.primary }}
                    >
                      <span>Inquire About This Area</span>
                      <ArrowRight size={14} />
                    </a>
                    <span className="text-xs font-extrabold text-slate-300">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Our Approach Section (5-Stage Framework) ───────────────────────── */}
      <section
        id="our-approach"
        className="section-animate py-20 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-xs font-extrabold uppercase tracking-widest block mb-2"
              style={{ color: COLORS.secondary }}
            >
              5-STAGE METHODOLOGY
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Our Approach
            </h2>

            {/* Approach Flow Banner */}
            <div
              className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-2xl border text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm bg-slate-50"
              style={{ borderColor: COLORS.border, color: COLORS.primary }}
            >
              <span>Understand</span>
              <span style={{ color: COLORS.secondary }}>→</span>
              <span>Assess</span>
              <span style={{ color: COLORS.secondary }}>→</span>
              <span>Plan</span>
              <span style={{ color: COLORS.secondary }}>→</span>
              <span>Support</span>
              <span style={{ color: COLORS.secondary }}>→</span>
              <span style={{ color: COLORS.secondary }}>Comply</span>
            </div>

            <p className="text-base font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.textGray }}>
              We first understand the client&apos;s regulatory requirements, assess the applicable situation, develop a practical regulatory approach, and provide ongoing support throughout the process.
            </p>
          </div>

          {/* 5-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {APPROACH_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="rounded-3xl border p-7 flex flex-col justify-between bg-white shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div>
                    {/* Step Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shadow-sm"
                        style={{ backgroundColor: idx === 4 ? COLORS.secondary : COLORS.primary }}
                      >
                        {stage.step}
                      </span>
                      <Icon size={20} style={{ color: idx === 4 ? COLORS.secondary : COLORS.primary }} />
                    </div>

                    <span
                      className="text-xs font-extrabold uppercase tracking-widest block mb-1"
                      style={{ color: idx === 4 ? COLORS.secondary : COLORS.primary }}
                    >
                      STAGE {stage.step}
                    </span>

                    <h4
                      className="text-base font-bold mb-3"
                      style={{ color: COLORS.textDark }}
                    >
                      {stage.name}
                    </h4>

                    <p
                      className="text-xs font-medium leading-relaxed"
                      style={{ color: COLORS.textGray }}
                    >
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t flex items-center gap-1.5" style={{ borderColor: COLORS.border }}>
                    <Check size={13} style={{ color: COLORS.secondary }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: COLORS.secondary }}>
                      {stage.name} Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Call To Action Banner ─────────────────────────────────────────── */}
      <section
        className="section-animate py-14 px-4 sm:px-6 lg:px-8 bg-white"
        style={{ backgroundColor: COLORS.white }}
      >
        <Container>
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.secondary }}>
                ACTIONABLE REGULATORY GUIDANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: COLORS.primary }}>
                Ready to Structure Your Regulatory Approach?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: COLORS.textGray }}>
                Connect with Gateway Pharmaceuticals Consultants to ensure your regulatory pathways, product filings, and compliance strategies are optimized from day one.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="/group-companies/gateway#contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span>Consult Our Specialists</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{
                  borderColor: COLORS.primary,
                  color: COLORS.primary,
                  backgroundColor: COLORS.white,
                }}
              >
                <Phone size={15} />
                <span>0092-321-8431665</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
