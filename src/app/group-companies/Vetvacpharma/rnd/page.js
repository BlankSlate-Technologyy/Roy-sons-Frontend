"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/VetvacShared";
import {
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Award,
  ClipboardCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Building2,
  Syringe,
  Activity,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
const COLORS = {
  primary: "#094C80",       // Primary Blue: Shield, headings, buttons
  primaryDk: "#0B2745",     // Dark Navy: Logo text, main text
  ink: "#0B2745",           // Dark Navy: Logo text, main text
  green: "#1E855C",         // Green: Paw/health accent
  white: "#FFFFFF",         // White: Background, text on blue
  lightBg: "#EAF3F8",       // Light Blue: Section backgrounds
  lightGreen: "#EAF6F0",    // Light Green: Health/feature backgrounds
  muted: "#4B6178",         // Muted secondary text
  border: "#D0E2EE",        // Soft border matching palette
  borderGreen: "#CBE8D9",   // Soft border for green cards
  footerBg: "#071B30",      // Deep rich navy for footer
};

const RND_FOCUS = [
  {
    title: "Disease Prevention",
    desc: "Studying changing disease challenges and prevention requirements across poultry and livestock.",
    icon: ShieldCheck,
    badge: "Proactive Defense",
  },
  {
    title: "Product Development",
    desc: "Exploring innovative approaches to veterinary vaccines and biological products.",
    icon: FlaskConical,
    badge: "Formulation R&D",
  },
  {
    title: "Performance Evaluation",
    desc: "Supporting systematic evaluation of product quality, consistency, and performance.",
    icon: ClipboardCheck,
    badge: "Clinical Validation",
  },
  {
    title: "Continuous Improvement",
    desc: "Using research and industry feedback to improve existing solutions and develop future products.",
    icon: Award,
    badge: "Ongoing Quality",
  },
];

const QUALITY_PRINCIPLES = [
  "Consistent product quality",
  "Controlled processes",
  "Product integrity",
  "Proper storage and handling",
  "Safety-focused practices",
  "Continuous quality improvement",
];

const STATS = [
  { icon: Microscope, value: "35+", label: "R&D Scientists & Pathologists" },
  { icon: Award, value: "100%", label: "ISO & GMP Compliance" },
  { icon: Activity, value: "24/7", label: "Automated Cold-Chain Logging" },
  { icon: ShieldCheck, value: "99.8%", label: "Batch Viability & Purity" },
];

export default function RndQualityPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.green }}>
      <ScrollProgress color={COLORS.primary} />

      <VetvacNavbar />

      {/* Hero Header */}
      <section
        className="py-20 px-6 border-b"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white shadow-sm"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Microscope size={13} />
              <span>04 — R&amp;D &amp; Quality</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.green }}>
              Research &amp; Development
            </h1>
            <p className="text-[18px] font-bold mb-3" style={{ color: COLORS.green }}>
              Driven by Science. Focused on Animal Health.
            </p>
            <p className="text-[15.5px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
              Research and development is essential to advancing modern veterinary healthcare.
            </p>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
              At VET VAC PHARMA, our R&amp;D approach focuses on understanding emerging animal-health challenges and identifying opportunities for improved veterinary solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="/group-companies/Vetvacpharma#solutions">
                <span>Explore Our Products</span>
                <ArrowRight size={15} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/Vetvacpharma">
                <span>Return to Overview</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Stats */}
      <section className="py-10 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-center"
              style={{
                backgroundColor: idx % 2 === 0 ? COLORS.lightBg : COLORS.lightGreen,
                borderColor: idx % 2 === 0 ? COLORS.border : COLORS.borderGreen,
              }}
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }} />
              <div className="text-2xl font-black mb-1" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* R&D Focus Cards & AI Image */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span
                  className="text-[11.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2"
                  style={{ backgroundColor: COLORS.white, color: COLORS.green }}
                >
                  INNOVATION BLUEPRINT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                  Our R&amp;D Focus
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {RND_FOCUS.map(({ title, desc, icon: Icon, badge }) => (
                  <div
                    key={title}
                    className="group relative p-5 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1E855C]/15 hover:border-[#1E855C] cursor-pointer overflow-hidden flex flex-col justify-between"
                    style={{ borderColor: COLORS.border }}
                  >
                    {/* Animated top gradient highlight beam on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E855C] via-[#094C80] to-[#1E855C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />

                    {/* Soft emerald ambient light in corner */}
                    <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-[#1E855C]/0 group-hover:bg-[#1E855C]/10 blur-xl transition-all duration-500 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#1E855C] group-hover:text-white"
                          style={{
                            backgroundColor: COLORS.lightGreen,
                            color: COLORS.green,
                          }}
                        >
                          <Icon size={22} className="transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <span
                          className="text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white group-hover:border-[#1E855C]"
                          style={{
                            backgroundColor: COLORS.white,
                            color: "#0F442E",
                            borderColor: COLORS.border,
                          }}
                        >
                          {badge}
                        </span>
                      </div>

                      <h4
                        className="text-[16px] font-black mb-2 transition-colors duration-300 group-hover:text-[#1E855C]"
                        style={{ color: "#0F442E" }}
                      >
                        {title}
                      </h4>

                      <p
                        className="text-[13.5px] leading-relaxed transition-colors duration-300"
                        style={{ color: "#2D5A46" }}
                      >
                        {desc}
                      </p>
                    </div>

                    <div
                      className="mt-4 pt-3 border-t flex items-center justify-between text-[12px] font-bold transition-all duration-300"
                      style={{ borderColor: COLORS.border }}
                    >
                      <span className="text-[#0F442E] group-hover:text-[#1E855C] transition-colors duration-300">
                        Scientific Standard
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[#0F442E] group-hover:text-[#1E855C] transform translate-x-0 group-hover:translate-x-1.5 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="group relative w-full h-[400px] rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl hover:shadow-[#094C80]/20 transition-all duration-500 cursor-pointer"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_rd_lab_ai.jpg"
                  alt="VET VAC PHARMA R&D Scientist"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/75 via-[#071B30]/15 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                {/* Interactive Floating Badge at Bottom */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border shadow-lg flex items-center justify-between transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-[#1E855C]/40"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center w-3 h-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E855C] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E855C]" />
                    </div>
                    <span
                      className="text-[13.5px] sm:text-[14px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                      style={{ color: "#0F442E" }}
                    >
                      State-of-the-Art Laboratory Facilities
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white"
                    style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                  >
                    R&amp;D Team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance & 6 Principles with AI Image */}
          <div
            className="rounded-2xl border p-8 lg:p-12"
            style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span
                    className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white inline-block mb-2"
                    style={{ color: COLORS.green }}
                  >
                    QUALITY AT EVERY STAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: COLORS.green }}>
                    Quality Assurance
                  </h3>
                  <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: COLORS.green }}>
                    Quality is fundamental to veterinary healthcare. Our quality-focused approach emphasizes consistency, product integrity, controlled processes, and responsible handling.
                  </p>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                    We aim to maintain high standards across product development, manufacturing partnerships, storage, distribution, and delivery.
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-black uppercase tracking-wider mb-3" style={{ color: COLORS.green }}>
                    Our Quality Principles:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {QUALITY_PRINCIPLES.map((principle) => (
                      <div
                        key={principle}
                        className="group relative p-3.5 sm:p-4 rounded-xl bg-white border flex items-center gap-3 transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg hover:shadow-[#1E855C]/15 hover:-translate-y-1 hover:border-[#1E855C]"
                        style={{ borderColor: COLORS.border }}
                      >
                        {/* Left indicator bar on hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E855C] to-[#094C80] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1E855C] group-hover:text-white"
                          style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                        >
                          <CheckCircle2 size={18} className="transition-transform duration-300" />
                        </div>

                        <span
                          className="text-[13.5px] sm:text-[14px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                          style={{ color: "#0F442E" }}
                        >
                          {principle}
                        </span>

                        <ArrowRight
                          size={14}
                          className="ml-auto text-[#1E855C] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div
                  className="group relative w-full h-[400px] rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl hover:shadow-[#094C80]/20 transition-all duration-500 cursor-pointer"
                  style={{ borderColor: COLORS.border }}
                >
                  <Image
                    src="/vetvac_rd_quality_ai.jpg"
                    alt="Automated Cold-Chain and Quality Testing"
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient vignette on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/75 via-[#071B30]/15 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Interactive Floating Badge at Bottom */}
                  <div
                    className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border shadow-lg flex items-center justify-between transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-[#1E855C]/40"
                    style={{ borderColor: COLORS.border }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative flex items-center justify-center w-3 h-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E855C] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E855C]" />
                      </div>
                      <span
                        className="text-[13.5px] sm:text-[14px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                        style={{ color: "#0F442E" }}
                      >
                        Automated Cold-Chain &amp; Quality Inspection
                      </span>
                    </div>
                    <span
                      className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white"
                      style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                    >
                      GMP Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific & Technical Excellence */}
          <div
            className="rounded-2xl border p-8 lg:p-10 bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <div className="max-w-3xl">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2"
                style={{ backgroundColor: COLORS.white, color: COLORS.green }}
              >
                RIGOROUS BENCHMARKS
              </span>
              <h3 className="text-2xl font-black mb-3" style={{ color: COLORS.green }}>
                Scientific &amp; Technical Excellence
              </h3>
              <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: COLORS.green }}>
                Veterinary vaccine development and biological products require controlled quality systems and evaluation of safety, potency, and efficacy.
              </p>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                Our commitment is to combine scientific thinking with practical veterinary requirements to provide dependable solutions for animal-health professionals.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div
            className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EAF3F8] block mb-1">
                EFFICACY GUARANTEED
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Quality You Can Trust
              </h3>
              <p className="text-[13.5px] text-white/90 max-w-xl">
                Explore our approach to research, quality, and veterinary healthcare innovation.
              </p>
            </div>
            <Link
              href="/group-companies/Vetvacpharma/solutions"
              className="vetvac-white-btn group px-7 py-3.5 rounded-xl text-[14px] font-extrabold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2.5 shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </main>
  );
}
