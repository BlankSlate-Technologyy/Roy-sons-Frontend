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
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Target,
  Eye,
  Check,
  Send,
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

// ─── Services Data from User Specification ──────────────────────────────────
const REGULATORY_SERVICES = [
  {
    id: "licensing",
    title: "Pharmaceutical Licensing",
    description:
      "Guidance and consultancy for pharmaceutical licensing requirements, applications, documentation, and regulatory procedures.",
    icon: FileCheck,
    tag: "Licensing & Approvals",
    deliverables: [
      "Manufacturing & formulation facility license applications",
      "Wholesale, distribution, and storage licensing compliance",
      "Import / Export pharmaceutical quota & permissions",
      "Statutory license renewals and site modification filings",
    ],
    image: "/gatway about.png",
  },
  {
    id: "registration",
    title: "Product Registration",
    description:
      "Support for pharmaceutical product registration processes, regulatory documentation, submission preparation, and related requirements.",
    icon: Package,
    tag: "Product Submissions",
    deliverables: [
      "Finished pharmaceutical formulation registrations (Generics & NCEs)",
      "Biotechnology, biosimilar, and vaccine registration pathways",
      "Medical devices & diagnostic reagents classification & approvals",
      "Herbal, nutraceutical, and alternative medicine filings",
    ],
    image: "/gatway commited.png",
  },
  {
    id: "affairs",
    title: "Regulatory Affairs",
    description:
      "Professional regulatory affairs support to help organizations manage regulatory requirements and maintain effective communication throughout regulatory processes.",
    icon: ClipboardList,
    tag: "Affairs Management",
    deliverables: [
      "Liaison and representation before regulatory authorities (DRAP/MOH)",
      "Post-marketing variation submissions (Major & Minor variations)",
      "Labeling, package insert, and artwork regulatory compliance",
      "Continuous statutory regulatory intelligence and monitoring",
    ],
    image: "/gatwayareaofexperince.png",
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description:
      "Helping pharmaceutical organizations understand applicable requirements and establish processes that support ongoing regulatory compliance.",
    icon: ShieldCheck,
    tag: "cGMP & Standards",
    deliverables: [
      "WHO-cGMP, PIC/S, and national regulatory gap analysis audits",
      "Quality Management Systems (QMS) alignment and review",
      "Pre-inspection audits and official regulatory audit readiness",
      "Data integrity, HVAC, and cleanroom qualification oversight",
    ],
    image: "/gatwaychosse us.png",
  },
  {
    id: "documentation",
    title: "Documentation & Dossier Support",
    description:
      "Assistance with organizing, reviewing, and preparing regulatory documentation and product dossiers according to applicable requirements.",
    icon: FileText,
    tag: "CTD & Dossiers",
    deliverables: [
      "CTD / eCTD Dossier compilation (Modules 1 through 5)",
      "Quality Overall Summary (QOS) & Non-Clinical / Clinical Summaries",
      "Site Master Files (SMF) and Validation Master Plans (VMP)",
      "Certificate of Pharmaceutical Product (CoPP) and Free Sale Certificates",
    ],
    image: "/gatway header.png",
  },
  {
    id: "consultancy",
    title: "Regulatory Consultancy",
    description:
      "Strategic and practical advice for organizations facing regulatory challenges, new product requirements, compliance questions, or changes in regulatory processes.",
    icon: Award,
    tag: "Strategic Advisory",
    deliverables: [
      "High-level regulatory risk assessments and mitigation strategies",
      "Interpretation of complex statutory guidelines and policy changes",
      "Advisory on technical drug master file (DMF) queries and rectifications",
      "Dispute resolution and formal authority appeal assistance",
    ],
    image: "/gatway about.png",
  },
  {
    id: "support",
    title: "Compliance Support",
    description:
      "Supporting organizations in identifying regulatory requirements, addressing compliance gaps, and improving their regulatory processes.",
    icon: RefreshCw,
    tag: "Gap Remediation",
    deliverables: [
      "Corrective and Preventive Action (CAPA) formulation & monitoring",
      "Standard Operating Procedure (SOP) drafting and harmonization",
      "Pharmacovigilance (PV) and adverse drug reaction reporting frameworks",
      "Regulatory staff training and continuous compliance workshops",
    ],
    image: "/gatway commited.png",
  },
  {
    id: "strategy",
    title: "Regulatory Strategy",
    description:
      "Developing practical regulatory approaches that help organizations plan product submissions, licensing activities, and compliance requirements more effectively.",
    icon: TrendingUp,
    tag: "Market Planning",
    deliverables: [
      "Multi-market regulatory roadmaps and fast-track approval planning",
      "Product lifecycle management and patent expiration strategy",
      "Cost, timeline, and risk optimization for new product launches",
      "Global regulatory harmonization for export target destinations",
    ],
    image: "/gatwayareaofexperince.png",
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

const COMPLIANCE_STEPS = [
  {
    step: "01",
    title: "Regulatory Assessment & Gap Analysis",
    desc: "Comprehensive evaluation of product data, facility capabilities, and compliance requirements against applicable authority frameworks.",
  },
  {
    step: "02",
    title: "Dossier Preparation & Documentation",
    desc: "Precision authoring and compilation of technical dossiers (CTD/eCTD), validation protocols, and statutory application forms.",
  },
  {
    step: "03",
    title: "Authority Submission & Active Liaison",
    desc: "Direct submission handling, regulatory tracking, and proactive resolution of official queries from drug regulatory authorities.",
  },
  {
    step: "04",
    title: "Approval, Licensing & Lifecycle Compliance",
    desc: "Receipt of official licenses, registration certificates, and ongoing post-approval lifecycle and renewal management.",
  },
];

export default function GatewayServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

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

  const categories = ["ALL", "Licensing & Approvals", "Product Submissions", "Affairs Management", "cGMP & Standards", "CTD & Dossiers", "Strategic Advisory", "Gap Remediation", "Market Planning"];

  const filteredServices = REGULATORY_SERVICES.filter((svc) => {
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === "ALL" || svc.tag === activeCategory;
    return matchesSearch && matchesCat;
  });

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
            {/* Left Column Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-5 border w-fit shadow-sm bg-white"
                style={{
                  color: COLORS.secondary,
                  borderColor: COLORS.border,
                }}
              >
                <Sparkles size={14} style={{ color: COLORS.secondary }} />
                <span>Regulatory Consultancy Services</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6"
                style={{ color: COLORS.primary }}
              >
                Our Regulatory Consultancy Services
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8"
                style={{ color: COLORS.textGray }}
              >
                We provide a range of regulatory services designed to support
                pharmaceutical organizations across different stages of their
                regulatory and compliance activities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#services-grid"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Explore 8 Core Services</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/group-companies/gateway#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.primary,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <span>Request Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Column Showcase Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/gatway header.png"
                  alt="Gateway Pharmaceutical Regulatory Services"
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
                    End-to-End Regulatory Support
                  </p>
                  <p className="text-sm font-bold" style={{ color: COLORS.primary }}>
                    From Licensing &amp; Dossiers to Authority Compliance
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
              MEASURABLE EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: COLORS.primary }}>
              Proven Regulatory Metrics
            </h2>
            <p className="text-sm font-medium mt-2" style={{ color: COLORS.textGray }}>
              Our track record across licensing, product registrations, and compliance audits speaks for itself.
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

      {/* ─── Main Regulatory Services Section ──────────────────────────────── */}
      <section
        id="services-grid"
        className="section-animate py-20 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className="text-xs font-extrabold uppercase tracking-widest block mb-2"
              style={{ color: COLORS.secondary }}
            >
              COMPREHENSIVE PORTFOLIO
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              All 8 Regulatory Services
            </h2>
            <p className="text-base font-medium" style={{ color: COLORS.textGray }}>
              Expert support structured to ensure complete statutory compliance, rapid market approvals, and uninterrupted operations.
            </p>

            {/* Search & Filter Bar */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <div className="relative w-full max-w-md">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: COLORS.textGray }}
                />
                <input
                  type="text"
                  placeholder="Search regulatory services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#173F8A] transition-all bg-white"
                  style={{ borderColor: COLORS.border }}
                />
              </div>
            </div>
          </div>

          {/* 8 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredServices.map((svc, idx) => {
              const Icon = svc.icon;

              return (
                <div
                  key={svc.id}
                  className="rounded-3xl border p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group hover:-translate-y-1"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div>
                    {/* Top Header */}
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
                        {svc.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="text-xl sm:text-2xl font-extrabold mb-3 transition-colors group-hover:text-[#173F8A]"
                      style={{ color: COLORS.textDark }}
                    >
                      {svc.title}
                    </h3>

                    <p
                      className="text-sm font-medium leading-relaxed mb-6"
                      style={{ color: COLORS.textGray }}
                    >
                      {svc.description}
                    </p>

                    {/* Key Deliverables Checklist */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t" style={{ borderColor: "rgba(229,231,235,0.6)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.primary }}>
                        Key Capabilities &amp; Scope:
                      </p>
                      {svc.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.secondary }} />
                          <span className="text-xs font-medium text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: COLORS.border }}>
                    <a
                      href="/group-companies/gateway#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:underline cursor-pointer"
                      style={{ color: COLORS.primary }}
                    >
                      <span>Inquire About This Service</span>
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

      {/* ─── Step-by-Step Compliance Pathway ───────────────────────────────── */}
      <section
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
              STRUCTURED METHODOLOGY
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Our 4-Stage Regulatory Pathway
            </h2>
            <p className="text-base font-medium" style={{ color: COLORS.textGray }}>
              A disciplined, transparent workflow ensuring regulatory accuracy from initial assessment to final approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLIANCE_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl border shadow-sm flex flex-col justify-between bg-white relative group hover:shadow-lg transition-all duration-300"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg mb-6 text-white shadow-md"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: COLORS.textDark }}>
                    {step.title}
                  </h4>
                  <p className="text-xs font-medium leading-relaxed" style={{ color: COLORS.textGray }}>
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: COLORS.border }}>
                  <Check size={14} style={{ color: COLORS.secondary }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: COLORS.secondary }}>
                    Phase Verified
                  </span>
                </div>
              </div>
            ))}
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
                EXPERIENCED REGULATORY COUNSEL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: COLORS.primary }}>
                Ensure Complete Compliance for Your Products
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: COLORS.textGray }}>
                Partner with Gateway Pharmaceuticals Consultants to streamline licensing, approvals, and regulatory affairs with complete confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="/group-companies/gateway#contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span>Book Consultation</span>
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
