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
  Sparkles,
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
  { value: "20+", label: "Years of Healthcare\nEngineering Heritage", icon: Award },
  { value: "300+", label: "Completed Medical\n& Cleanroom Projects", icon: HeartPulse },
  { value: "150+", label: "Hospital Facilities\nDelivered Nationwide", icon: Building2 },
  { value: "500+", label: "Biomedical & HVAC\nEngineers on Staff", icon: Users2 },
  { value: "99%", label: "ISO 14644 & GMP\nQuality Compliance", icon: ShieldCheck },
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
    desc: "Engineering positive pressure laminar airflow ceilings, multi-stage HEPA filtration, and precise temperature-humidity regulation for surgical suites and critical clean rooms.",
  },
  {
    icon: Cpu,
    title: "Biomedical Innovation & Telemetry",
    desc: "Integrating digital surgical control panels, automated medical gas alarms, real-time pressure differential monitors, and smart hospital building management systems (BMS).",
  },
  {
    icon: Hammer,
    title: "Turnkey EPC Accountability",
    desc: "Taking single-point responsibility from architectural healthcare planning, HVAC ducting, and cleanroom wall panels to validation, certification, and 24/7 maintenance.",
  },
];

export default function PakMedicalAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Pakistan Medical Supplies</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
                Engineering Healthcare. <span style={{ color: theme.royalBlue }}>Advancing Patient Care.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Pakistan Medical Supplies is a premier healthcare engineering and infrastructure corporation specializing in modular operating theatres, ISO clean room technology, hospital HVAC engineering, medical gas pipeline systems (MGPS), and turnkey healthcare facility development across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pak-janitorial/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.royalBlue }}
                >
                  <span>Explore Healthcare Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pak-janitorial/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.royalBlueDark }}
                >
                  <span>Consult Bio-Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakmed_hero_engineering.svg"
                  alt="Pakistan Medical Supplies Hospital Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.skyBlue }}>
                      ISO 14644 &amp; HTM 02-01 Certified
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.royalBlueDark }}>
                      150+ Hospital Facilities · Clean Room Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakmed-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                    <Icon size={22} style={{ color: theme.royalBlue }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.royalBlueDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/pakmed_hero_engineering.svg"
                alt="Hospital Engineering and Operation Theater Suites"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] block mb-1">
                    Healthcare Infrastructure Leader
                  </span>
                  <h4 className="text-base font-bold">300+ Completed Hospital &amp; Clean Room Installations</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To design, construct, and maintain world-class healthcare environments, modular surgical theatres, and clean room facilities that protect human life, eliminate infection risks, and enable medical excellence across public and private healthcare sectors.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s foremost hospital engineering powerhouse, pioneering next-generation digital surgical suites, sustainable cleanroom technologies, and smart medical gas infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The biomedical engineering standards and infection control discipline that govern every hospital room we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="pakmed-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                      <Icon size={26} style={{ color: theme.royalBlue }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.royalBlueDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.skyBlue }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.royalBlue }}>
                      HTM / ISO Compliant
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.skyBlue }}>
                PLANNING A HOSPITAL, OPERATION THEATRE, OR CLEANROOM?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Schedule A Healthcare Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified biomedical and HVAC engineers to review architectural layouts, cleanroom class ratings, and medical gas distribution schematics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.royalBlue, color: theme.royalBlue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
