"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Building2,
  Wind,
  Gauge,
  Leaf,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakMedicalShared";

const SUSTAINABILITY_STATS = [
  { value: "150+", label: "Sustainable Healthcare\nFacilities Delivered", icon: Building2 },
  { value: "40%", label: "HVAC Energy Savings via\nHeat Recovery Chilling", icon: Leaf },
  { value: "99.99%", label: "Sterile Air Particulate\nFiltration via H14 HEPA", icon: Wind },
  { value: "100%", label: "HTM 02-01 Zero Gas Leak\nValidation Standard", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Wind,
    title: "Energy-Efficient Hospital HVAC & Heat Recovery",
    desc: "We integrate specialized hygienic run-around heat recovery coils and variable-speed EC plug fans in hospital AHUs, reducing thermal energy consumption by up to 40% while maintaining 100% sterile fresh air ventilation in surgical suites.",
    features: [
      "No cross-contamination heat recovery run-around loop systems",
      "Demand-controlled airflow and night setback economizer cycles",
      "Substantially reducing operating electricity costs for multi-bed hospitals",
    ],
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Non-VOC Antimicrobial Materials",
    desc: "Our cleanroom wall partitions and hospital cladding utilize zero-VOC, formaldehyde-free polyurethane cores and silver-ion antimicrobial coatings that actively inhibit bacterial growth without toxic chemical off-gassing.",
    features: [
      "Non-porous, seamless coved joints resistant to heavy hospital disinfectants",
      "Silver-ion nanotechnology preventing MRSA and superbug colony formation",
      "100% recyclable aluminum profiles and lead-free radiation shielding glass",
    ],
  },
  {
    icon: Gauge,
    title: "Zero-Leak Medical Gas Distribution & Conservation",
    desc: "Every medical gas pipeline we install undergoes vacuum retention and helium leak detection to guarantee zero oxygen or nitrous oxide escape, protecting staff health and conserving costly clinical gases.",
    features: [
      "Automatic digital line pressure regulators and high-precision transducer telemetry",
      "Cryogenic liquid oxygen boil-off recovery conserving up to 15% bulk gas",
      "Emergency automated zone isolators shutting off gas sections during localized incidents",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Strict Infection Control & Environmental Health",
    desc: "Our facilities implement cascading positive pressure gradients that prevent airborne bacteria from entering sterile surgical zones, ensuring uncompromised patient outcomes and healthcare worker safety.",
    features: [
      "Dedicated negative pressure quarantine wards for airborne pandemic isolation",
      "Continuous real-time differential pressure logging and building BMS alerts",
      "Full compliance with WHO, CDC, and National Infection Control guidelines",
    ],
  },
];

export default function PakMedicalSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Green Healthcare &amp; Infection Control</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
                Sustainable Engineering For <span style={{ color: theme.royalBlue }}>Modern Hospitals</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Pakistan Medical Supplies, sustainable healthcare engineering means designing hospital environments that are sterile, energy-efficient, safe for healthcare workers, and compliant with the highest international environmental protocols.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pak-janitorial/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.royalBlue }}
                >
                  <span>Inquire About Green Hospital Design</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pak-janitorial/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.royalBlueDark }}
                >
                  <span>Explore Hospital Projects</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakmed_hero_engineering.svg"
                  alt="Sustainable Healthcare Facilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.skyBlue }}>
                      Green Healthcare Engineering
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.royalBlueDark }}>
                      40% HVAC Savings · Non-VOC Cleanrooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Healthcare Engineering</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven engineering practices designed to maximize hospital energy efficiency, patient safety, and life cycle longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="pakmed-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                      <Icon size={26} style={{ color: theme.royalBlue }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.royalBlueDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 228, 245, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#2B8DD6]" />
                          <span className="text-xs font-medium text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
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
                DESIGN A SUSTAINABLE HEALTHCARE FACILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Build Energy-Efficient Modular Theatres &amp; Clean Rooms
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full lifecycle energy modeling, HVAC heat recovery sizing, and medical gas pipeline safety audits.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request Green Hospital Consultation</span>
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
