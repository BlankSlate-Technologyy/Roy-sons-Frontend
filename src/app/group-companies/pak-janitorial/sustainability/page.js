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
  Droplets,
  Zap,
  Activity,
  Recycle,
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

const SUSTAINABILITY_STATS = [
  { value: "150+", label: "Sustainable Healthcare\nFacilities Delivered", icon: Building2 },
  { value: "40%", label: "HVAC Energy Savings via\nHeat Recovery Chilling", icon: Leaf },
  { value: "99.99%", label: "Sterile Air Particulate\nFiltration via H14 HEPA", icon: Wind },
  { value: "100%", label: "HTM 02-01 Zero Gas Leak\nValidation Standard", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Wind,
    title: "Energy Efficiency & Smart HVAC",
    desc: "We integrate specialized hygienic run-around heat recovery coils and variable-speed EC plug fans in hospital AHUs, reducing thermal energy consumption by up to 40% while maintaining 100% sterile fresh air ventilation in surgical suites.",
    features: [
      "Zero cross-contamination run-around heat recovery loop systems",
      "Demand-controlled airflow and automated night setback cycles",
      "Substantially reducing operating electricity consumption for multi-bed hospitals",
    ],
    image: "/images/pakmedical/sustainability_hvac_efficiency.jpg",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Non-VOC Cleanroom Materials",
    desc: "Our cleanroom wall partitions and hospital cladding utilize zero-VOC, formaldehyde-free polyurethane cores and silver-ion antimicrobial coatings that actively inhibit bacterial growth without toxic chemical off-gassing.",
    features: [
      "Non-porous, seamless coved joints resistant to harsh hospital disinfectants",
      "Silver-ion nanotechnology preventing MRSA and microbial colonization",
      "100% recyclable aluminum mounting systems and lead-free radiation shielding glass",
    ],
    image: "/images/pakmedical/sustainability_materials.jpg",
  },
  {
    icon: Gauge,
    title: "Zero-Leak Medical Gas Conservation",
    desc: "Every medical gas pipeline we install undergoes vacuum retention and helium leak detection to guarantee zero oxygen or nitrous oxide escape, protecting clinical staff and conserving costly medical gases.",
    features: [
      "Microprocessor telemetry monitoring line pressure loss down to 0.01 bar",
      "Duplex automatic manifolds preventing residual gas wastage during cylinder swaps",
      "Annual preventative maintenance reducing hospital gas operational expenditures",
    ],
    image: "/images/pakmedical/service_medgas.jpg",
  },
  {
    icon: Droplets,
    title: "Water Efficiency & Clinical Waste Reduction",
    desc: "We engineer low-flow sensor scrub sinks, continuous thermal water sterilization loops preventing legionella, and specialized segregation channels for cytotoxic and infectious wastewater.",
    features: [
      "Automatic infrared surgical scrub sinks with 60% water conservation",
      "Point-of-use ultraviolet sterilization for sterile processing CSSD water loops",
      "Dedicated neutralization sumps prior to municipal wastewater discharge",
    ],
    image: "/images/pakmedical/service_infrastructure.jpg",
  },
];

export default function PakMedicalSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SUSTAINABILITY HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Healthcare Engineering</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6 text-[#0A2540]">
                BUILDING HEALTHCARE INFRASTRUCTURE <span className="text-[#0D7C85]">FOR TOMORROW</span>
              </h1>

              <p className="text-lg font-bold text-[#1A4FA0] mb-4">
                &ldquo;Smarter Healthcare Infrastructure. Better Efficiency.&rdquo;
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8">
                At Pakistan Medical Supplies, sustainable healthcare engineering means designing hospital environments that are sterile, energy-efficient, safe for healthcare workers, and compliant with the highest international environmental and clinical protocols.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pak-janitorial/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A4FA0] hover:bg-[#0E3570] shadow-md transition-all cursor-pointer"
                >
                  <span>Request Energy &amp; ESG Audit</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/group-companies/pak-janitorial/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border border-slate-300 text-[#0A2540] hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span>View Green HVAC Solutions</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[520px] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/pakmedical/sustainability_hero.jpg"
                  alt="Sustainable Hospital Facility Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-lg w-full">
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#0D7C85]">
                      Green Healthcare Architecture
                    </p>
                    <p className="text-sm font-bold text-[#0A2540]">
                      Energy-Efficient HVAC &bull; Zero-VOC Materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SUSTAINABILITY METRICS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SUSTAINABILITY_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakmed-counter-box rounded-2xl border border-slate-200 p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#0D7C85]/10">
                    <Icon size={22} className="text-[#0D7C85]" />
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
          3. BUILDING MANAGEMENT CONTROL ROOM SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
                <Image
                  src="/images/pakmedical/sustainability_control.jpg"
                  alt="Engineers Monitoring Hospital Energy Performance in Building Management Control Room"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 border border-slate-200 shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0D7C85]">
                      Smart Building Management (BMS)
                    </p>
                    <p className="text-xs text-slate-600">
                      Real-time telemetry of hospital energy and air cascades
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SectionLabel>Intelligent Operations</SectionLabel>
              <SectionHeading>CONTINUOUS ENERGY &amp; PERFORMANCE MONITORING</SectionHeading>
              <p className="text-base text-slate-600 leading-relaxed mt-5 mb-5">
                Modern hospital facilities operate 24 hours a day, 365 days a year. Our integrated building management systems (BMS) continuously audit surgical air pressures, chiller plant loads, and medical gas pipeline pressures.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                By pairing high-efficiency equipment with smart automation, we assist hospitals in cutting lifecycle operational costs while guaranteeing uninterrupted patient safety and pristine indoor air quality.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                  <p className="text-2xl font-black text-[#1A4FA0] mb-1">24/7</p>
                  <p className="text-xs font-bold text-slate-600 uppercase">Automated BMS Telemetry</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC]">
                  <p className="text-2xl font-black text-[#0D7C85] mb-1">40%</p>
                  <p className="text-xs font-bold text-slate-600 uppercase">Lower Carbon Footprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SUSTAINABILITY PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Core Environmental Pillars</SectionLabel>
            <SectionHeading center>SUSTAINABLE ENGINEERING IN ACTION</SectionHeading>
            <p className="text-base text-slate-600 font-medium leading-relaxed mt-4">
              Explore how our engineering specifications conserve resources without ever compromising clinical sterility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0D7C85]/10 flex items-center justify-center text-[#0D7C85]">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight text-[#0A2540]">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {pillar.features.map((f) => (
                          <div key={f} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check size={14} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SUSTAINABILITY CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white text-center">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
            LET&apos;S BUILD BETTER HEALTHCARE ENVIRONMENTS
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Request an engineering audit to optimize HVAC energy efficiency, reduce medical gas loss, and enhance indoor air quality in your hospital.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/group-companies/pak-janitorial/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A2540] bg-white hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Request Energy &amp; ESG Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
