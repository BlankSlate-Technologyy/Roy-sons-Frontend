"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  FileCheck,
  Target,
  Eye,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  FileText,
  Lock,
  Globe2,
  Briefcase,
  Check,
} from "lucide-react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { COLORS } from "../constants";
import { Container, Card, Button } from "../sections/Shared";

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
            // Ease out quad
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

// ─── Page Data ───────────────────────────────────────────────────────────────
const ABOUT_STATS = [
  { value: "200+", label: "Successful Registrations", icon: FileCheck },
  { value: "15+", label: "Regulatory Experts", icon: Users },
  { value: "150+", label: "Client Partnerships", icon: Briefcase },
  { value: "500+", label: "Licenses Processed", icon: Award },
  { value: "10+", label: "Years Combined Experience", icon: Globe2 },
  { value: "98%", label: "Approval Success Rate", icon: ShieldCheck },
];

const WHY_CHOOSE_PILLARS = [
  {
    title: "Regulatory Expertise",
    desc: "In-depth understanding of national and international drug regulatory authorities, including DRAP, FDA, and EMA guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Practical Compliance Guidance",
    desc: "Actionable, pragmatic compliance pathways designed to seamlessly integrate with your ongoing pharmaceutical manufacturing and supply operations.",
    icon: CheckCircle2,
  },
  {
    title: "Licensing & Registration Support",
    desc: "Comprehensive assistance for new drug applications, product line extensions, and statutory manufacturing license acquisitions.",
    icon: FileCheck,
  },
  {
    title: "Regulatory Affairs Assistance",
    desc: "Dedicated representation and technical liaison with regulatory bodies to expedite approvals and resolve statutory queries.",
    icon: Briefcase,
  },
  {
    title: "Documentation Support",
    desc: "Precision preparation of technical dossiers, CTD/eCTD formats, site master files, and standard operating procedures.",
    icon: FileText,
  },
  {
    title: "Client-Focused Consultancy",
    desc: "Customized regulatory advisory aligned with your specific business goals, operational scale, and market expansion timelines.",
    icon: Users,
  },
  {
    title: "Professional & Confidential Service",
    desc: "Strict adherence to non-disclosure protocols and professional ethics, ensuring your proprietary formulations and trade secrets are completely secure.",
    icon: Lock,
  },
];

export default function GatewayAboutPage() {
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-5 border w-fit shadow-sm bg-white"
                style={{
                  color: COLORS.secondary,
                  borderColor: COLORS.border,
                }}
              >
                <Sparkles size={14} style={{ color: COLORS.secondary }} />
                <span>Pharmaceutical Regulatory Consultancy</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6"
                style={{ color: COLORS.primary }}
              >
                Your Partner in Pharmaceutical Regulatory Compliance
              </h1>

              <p
                className="text-base sm:text-lg font-medium leading-relaxed mb-8"
                style={{ color: COLORS.textGray }}
              >
                Gateway Pharmaceuticals Consultants is a specialized pharmaceutical
                regulatory consultancy focused on helping pharmaceutical organizations
                understand and navigate complex regulatory requirements.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="/group-companies/gateway#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Consult Our Experts</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#why-choose"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.primary,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <span>Why Choose Gateway</span>
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
                  src="/gatway header.png"
                  alt="Gateway Pharmaceuticals Regulatory Compliance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(23, 63, 138, 0.4) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg"
                  style={{ borderColor: COLORS.border }}
                >
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: COLORS.secondary }}>
                    Specialized Consultancy
                  </p>
                  <p className="text-sm font-bold" style={{ color: COLORS.primary }}>
                    Empowering Healthcare &amp; Pharma Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Company Overview Section ───────────────────────────────────────── */}
      <section
        className="section-animate py-20 px-4 sm:px-6 lg:px-8 bg-white border-b"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div
                className="col-span-2 relative h-[260px] rounded-2xl overflow-hidden shadow-md border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/gatway about.png"
                  alt="Pharmaceutical compliance audit and teamwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden shadow-sm border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/gatway commited.png"
                  alt="Regulatory dossiers analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden shadow-sm border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/gatwayareaofexperince.png"
                  alt="Laboratory and licensing compliance testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span
                className="text-xs font-extrabold uppercase tracking-widest block mb-3"
                style={{ color: COLORS.secondary }}
              >
                ABOUT GATEWAY PHARMACEUTICALS
              </span>

              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6"
                style={{ color: COLORS.primary }}
              >
                Strategic Support Across Every Regulatory Dimension
              </h2>

              <div className="space-y-4 text-base font-medium leading-relaxed" style={{ color: COLORS.textGray }}>
                <p>
                  Gateway Pharmaceuticals Consultants is a specialized pharmaceutical
                  regulatory consultancy focused on helping pharmaceutical organizations
                  understand and navigate complex regulatory requirements.
                </p>
                <p>
                  Our services are designed to support pharmaceutical companies,
                  manufacturers, healthcare organizations, and other stakeholders in
                  meeting regulatory obligations and maintaining compliance throughout
                  their operations.
                </p>
                <p>
                  We combine regulatory knowledge, industry understanding, and a practical
                  approach to help clients make informed decisions and manage regulatory
                  requirements efficiently.
                </p>
              </div>

              {/* Three Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t" style={{ borderColor: COLORS.border }}>
                {[
                  { title: "Regulatory Depth", subtitle: "National & Global Standards" },
                  { title: "Industry Insight", subtitle: "Practical Real-World Focus" },
                  { title: "Client Success", subtitle: "Dependable Outcomes" },
                ].map((item) => (
                  <div key={item.title} className="p-3 rounded-xl bg-slate-50 border" style={{ borderColor: COLORS.border }}>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.primary }}>
                      {item.title}
                    </p>
                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Animated Statistics & Counters Section ────────────────────────── */}
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
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: COLORS.primary }}>
              Numbers That Define Our Excellence
            </h2>
            <p className="text-sm font-medium mt-2" style={{ color: COLORS.textGray }}>
              Measurable results achieved through rigorous compliance standards and dedicated consultancy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
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
                    <AnimatedCounter targetValue={stat.value} duration={1500 + idx * 100} />
                  </div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-wider leading-snug"
                    style={{ color: COLORS.textDark }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Mission & Vision Section ───────────────────────────────────────── */}
      <section
        className="section-animate py-20 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="text-xs font-extrabold uppercase tracking-widest block mb-2"
              style={{ color: COLORS.secondary }}
            >
              PURPOSE &amp; DIRECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: COLORS.primary }}>
              Our Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              className="rounded-3xl border p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden bg-white"
              style={{
                borderColor: COLORS.border,
                borderTop: `5px solid ${COLORS.secondary}`,
                backgroundColor: COLORS.white,
              }}
            >
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${COLORS.secondary}15` }}
                >
                  <Target size={28} style={{ color: COLORS.secondary }} />
                </div>
                <span
                  className="text-xs font-extrabold tracking-widest uppercase mb-2 block"
                  style={{ color: COLORS.secondary }}
                >
                  OUR MISSION
                </span>
                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-4"
                  style={{ color: COLORS.primary }}
                >
                  Deliver Practical &amp; Reliable Guidance
                </h3>
                <p
                  className="text-base font-medium leading-relaxed"
                  style={{ color: COLORS.textGray }}
                >
                  To provide reliable, professional, and practical regulatory consultancy
                  services that help pharmaceutical organizations achieve compliance and
                  operate confidently within applicable regulatory frameworks.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t flex items-center gap-2" style={{ borderColor: COLORS.border }}>
                <CheckCircle2 size={16} style={{ color: COLORS.secondary }} />
                <span className="text-xs font-bold text-slate-700">
                  Confidence · Practicality · Framework Compliance
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="rounded-3xl border p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden bg-white"
              style={{
                borderColor: COLORS.border,
                borderTop: `5px solid ${COLORS.primary}`,
                backgroundColor: COLORS.white,
              }}
            >
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <Eye size={28} style={{ color: COLORS.primary }} />
                </div>
                <span
                  className="text-xs font-extrabold tracking-widest uppercase mb-2 block"
                  style={{ color: COLORS.primary }}
                >
                  OUR VISION
                </span>
                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-4"
                  style={{ color: COLORS.primary }}
                >
                  The Trusted Regulatory Consultancy Partner
                </h3>
                <p
                  className="text-base font-medium leading-relaxed"
                  style={{ color: COLORS.textGray }}
                >
                  To become a trusted regulatory consultancy partner for pharmaceutical
                  organizations by delivering professional expertise, dependable guidance,
                  and compliance-focused solutions.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t flex items-center gap-2" style={{ borderColor: COLORS.border }}>
                <CheckCircle2 size={16} style={{ color: COLORS.primary }} />
                <span className="text-xs font-bold text-slate-700">
                  Trust · Professional Expertise · Dependable Solutions
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Why Choose Gateway Section ────────────────────────────────────── */}
      <section
        id="why-choose"
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
              THE GATEWAY ADVANTAGE
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Why Choose Gateway?
            </h2>
            <p className="text-base font-medium" style={{ color: COLORS.textGray }}>
              Dedicated capabilities and high-trust methodologies designed to protect and
              accelerate your pharmaceutical endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col justify-between bg-white group"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${COLORS.secondary}15` }}
                      >
                        <Icon size={22} style={{ color: COLORS.secondary }} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-300">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold mb-2.5 transition-colors group-hover:text-[#173F8A]"
                      style={{ color: COLORS.textDark }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: COLORS.textGray }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: "rgba(229,231,235,0.6)" }}>
                    <Check size={14} style={{ color: COLORS.secondary }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: COLORS.secondary }}>
                      Verified Standard
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Final Highlight Card */}
            <div
              className="p-8 rounded-2xl border shadow-sm flex flex-col justify-between cursor-pointer group"
              style={{
                backgroundColor: COLORS.primary,
                borderColor: COLORS.primary,
                color: COLORS.white,
              }}
            >
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 block mb-2">
                  SEAMLESS COMPLIANCE
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Need Comprehensive Regulatory Guidance?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  Speak directly with our senior regulatory officers for a customized
                  evaluation of your product portfolio or licensing requirements.
                </p>
              </div>

              <a
                href="/group-companies/gateway#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:bg-emerald-600 bg-emerald-500 text-white w-full"
              >
                <span>Get in Touch Today</span>
                <ArrowRight size={16} />
              </a>
            </div>
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
                CONFIDENTIAL ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: COLORS.primary }}>
                Ready to Navigate Regulatory Compliance?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: COLORS.textGray }}>
                Let our dedicated team handle the complexity of licensing, registration,
                and dossier management with accuracy and confidentiality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <a
                href="/group-companies/gateway#contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span>Contact Us Today</span>
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
