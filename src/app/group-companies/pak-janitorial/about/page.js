"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  BriefcaseMedical,
  Users2,
  FileCheck,
  Check,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakMedicalShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Medical\nEngineering Heritage", icon: Award },
  { value: "300+", label: "Completed Medical\n& Cleanroom Projects", icon: HeartPulse },
  { value: "150+", label: "Hospital Facilities\nDelivered Nationwide", icon: Building2 },
  { value: "500+", label: "Biomedical & HVAC\nEngineers on Staff", icon: Users2 },
  { value: "99.9%", label: "ISO 14644 & HTM 02-01\nCompliance Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Patient Safety & Sterility First",
    desc: "Adhering strictly to international HTM 02-01, ISO 14644, and WHO GMP regulations to ensure absolute sterility, zero cross-contamination, and fail-safe medical gas delivery.",
  },
  {
    icon: Wind,
    title: "Precision Environmental Control",
    desc: "Engineering positive-pressure laminar airflow ceilings, multi-stage HEPA filtration, and micro-regulated temperature and humidity cascades for surgical and cleanroom environments.",
  },
  {
    icon: Cpu,
    title: "Biomedical Innovation & Telemetry",
    desc: "Integrating digital surgeon control panels, automated medical gas alarms, real-time pressure differential telemetry, and smart hospital building management systems (BMS).",
  },
  {
    icon: Hammer,
    title: "Turnkey EPC Accountability",
    desc: "Taking single-point responsibility from initial architectural healthcare planning and clinical MEP to cleanroom fabrication, ISO qualification, and 24/7 preventive AMC.",
  },
];

const EXPERTISE_AREAS = [
  {
    title: "Modular Operation Theatres (MOT)",
    desc: "Pre-fabricated hermetic surgical envelopes with antimicrobial cladding, articulated ceiling pendants, and integrated digital consoles.",
  },
  {
    title: "ISO 14644 & cGMP Clean Rooms",
    desc: "Turnkey cleanroom envelopes for pharmaceutical manufacturing, vaccine suites, sterile fill-finish, and clinical microbiology.",
  },
  {
    title: "Medical Gas Pipeline Systems (MGPS)",
    desc: "Complete HTM 02-01 central cryogenic oxygen plants, medical vacuum, compressed air, and zone alarm distribution networks.",
  },
  {
    title: "Hospital HVAC & HEPA Filtration",
    desc: "Hygienic air handling units with run-around coil heat recovery, variable air volume, and terminal H14 HEPA filtration.",
  },
  {
    title: "Hospital Electrical & Isolated Power",
    desc: "Isolated power systems (IPS), medical line isolation monitors (LIM), and fail-safe uninterruptible power for critical care surgical suites.",
  },
  {
    title: "Testing, DOP & Validation",
    desc: "Comprehensive airborne particle counting, DOP/PAO HEPA integrity audits, air volume balancing, and compliance certification.",
  },
];

export default function PakMedicalAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HERO SECTION (Hero Image)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Institutional Healthcare Engineering</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6 text-[#0A2540]">
                Engineering Healthcare. <span className="text-[#1A4FA0]">Advancing Patient Care.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Pakistan Medical Supplies is a premier healthcare engineering and infrastructure corporation specializing in modular operating theatres, ISO clean room technology, hospital HVAC engineering, medical gas pipeline systems (MGPS), and turnkey healthcare facility development across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pak-janitorial/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A4FA0] hover:bg-[#0E3570] shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Healthcare Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pak-janitorial/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border border-slate-300 text-[#0A2540] hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span>Consult Bio-Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[520px] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/pakmedical/about_hero.jpg"
                  alt="Pakistan Medical Supplies Hospital Engineering Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-lg w-full">
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#0D7C85]">
                      ISO 14644 &amp; HTM 02-01 Certified
                    </p>
                    <p className="text-sm font-bold text-[#0A2540]">
                      150+ Hospital Facilities · Clean Room Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ANIMATED NUMBER COUNTERS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakmed-counter-box rounded-2xl border border-slate-200 p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#1A4FA0]/10">
                    <Icon size={22} className="text-[#1A4FA0]" />
                  </div>
                  <div className="mb-2 text-[#0A2540]">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WHO WE ARE (Meeting & Blueprint Discussion Visual)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image: Engineering Drawings & Advisory */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
                <Image
                  src="/images/pakmedical/about_meeting.jpg"
                  alt="Hospital Engineers Reviewing Drawings in Conference Room"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 border border-slate-200 shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0D7C85]">
                      Engineering Consultation &amp; Plan Review
                    </p>
                    <p className="text-xs text-slate-600">
                      Multi-disciplinary biomedical and HVAC coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text: Who We Are */}
            <div className="lg:col-span-6">
              <SectionLabel>Who We Are</SectionLabel>
              <SectionHeading>CRITICAL INFRASTRUCTURE FOR MODERN MEDICINE</SectionHeading>
              <p className="text-base text-slate-600 leading-relaxed mt-5 mb-5">
                Pakistan Medical Supplies operates as the specialized healthcare engineering subsidiary of the Roy &amp; Sons Group. For more than two decades, we have partnered with public sector health departments, teaching hospitals, armed forces medical institutions, and leading private healthcare groups to deliver mission-critical clinical environments.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Our multidisciplinary teams of biomedical engineers, cleanroom HVAC specialists, piping engineers, and certified project managers ensure every cubic meter of clinical space conforms to stringent ISO 14644 and HTM 02-01 specifications.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                  <p className="text-2xl font-black text-[#1A4FA0] mb-1">300+</p>
                  <p className="text-xs font-bold text-slate-600 uppercase">Modular Suites Built</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                  <p className="text-2xl font-black text-[#0D7C85] mb-1">100%</p>
                  <p className="text-xs font-bold text-slate-600 uppercase">Sterility Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. MISSION & VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 bg-white shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#1A4FA0]/10 flex items-center justify-center text-[#1A4FA0] mb-6">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A2540] mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To engineer world-class, sterile, and energy-efficient healthcare environments that empower medical clinicians to save lives with utmost confidence, combining precision biomedical engineering, uncompromising regulatory compliance, and sustained operational reliability.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 bg-white shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#0D7C85]/10 flex items-center justify-center text-[#0D7C85] mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A2540] mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be South Asia&apos;s most respected healthcare engineering and cleanroom turnkey contractor, recognized for establishing benchmark clinical environments that elevate healthcare standards, protect surgical teams, and foster sustainable medical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OUR EXPERTISE & FACILITY VISUAL
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Core Capabilities</SectionLabel>
            <SectionHeading center>SPECIALIZED MEDICAL ENGINEERING PRACTICES</SectionHeading>
            <p className="text-base text-slate-600 font-medium leading-relaxed mt-4">
              Comprehensive turnkey capabilities spanning critical care surgery, sterile pharmaceuticals, and hospital MEP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_AREAS.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2B8DD6] transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1A4FA0]/10 flex items-center justify-center text-[#1A4FA0] mb-5 group-hover:bg-[#1A4FA0] group-hover:text-white transition-colors">
                  <Check size={20} />
                </div>
                <h4 className="text-base font-black uppercase tracking-tight text-[#0A2540] mb-3">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. WHY CHOOSE US & QUALITY ASSURANCE MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Quality &amp; Safety</SectionLabel>
              <SectionHeading>RIGOROUS STANDARDS. ZERO COMPROMISE.</SectionHeading>
              <p className="text-base text-slate-600 leading-relaxed mt-4 mb-6">
                In surgical suites, intensive care units, and vaccine production clean rooms, there is no margin for error. We follow standardized engineering protocols backed by international certifiers.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <FileCheck size={20} className="text-[#1A4FA0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">ISO 14644-1 Cleanroom Qualification</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Airborne particle count verification from ISO Class 4 to Class 8.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <FileCheck size={20} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">HTM 02-01 &amp; NFPA 99 MGPS Standards</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Medical gas copper pipeline degreasing, nitrogen-purged brazing, and zero-leak pressure testing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                  <FileCheck size={20} className="text-[#1A4FA0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">EN 1822 DOP / PAO HEPA Filter Integrity</h4>
                    <p className="text-xs text-slate-600 mt-0.5">100% challenge testing for all terminal ceiling filters prior to clinical handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
                <Image
                  src="/images/pakmedical/about_facility.jpg"
                  alt="Pakistan Medical Supplies Hospital Facility Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 w-full shadow-md">
                    <p className="text-xs font-black uppercase text-[#1A4FA0] mb-0.5">
                      Clinical Grade Infrastructure
                    </p>
                    <p className="text-xs text-slate-600">
                      Seamless antimicrobial envelopes and laminar flow plenums
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CORE VALUES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Ethical Foundation</SectionLabel>
            <SectionHeading center>OUR CORE ENGINEERING VALUES</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2B8DD6] transition-all group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1A4FA0]/10 flex items-center justify-center text-[#1A4FA0] mb-5 group-hover:bg-[#1A4FA0] group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-base font-black uppercase tracking-tight text-[#0A2540] mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. CONSULTATION CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4">
            LET&apos;S BUILD BETTER HEALTHCARE ENVIRONMENTS
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Discuss your hospital expansion, modular OT upgrade, or cleanroom project with our senior healthcare engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/group-companies/pak-janitorial/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A2540] bg-white hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Consult Bio-Engineer</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/group-companies/pak-janitorial/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
            >
              <span>View Past Projects</span>
            </Link>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
