"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Zap,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Trees,
  SunMedium,
  Mountain,
  Scale,
  Shield,
  Factory,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";

const ESG_STATS = [
  { value: "92%", label: "Process Water\nRecycled", icon: Droplets },
  { value: "100K+", label: "Trees Planted on\nReclaimed Benches", icon: Trees },
  { value: "99%", label: "Environmental\nCompliance Rating", icon: Leaf },
  { value: "0", label: "Lost-Time Safety\nIncidents Record", icon: ShieldCheck },
  { value: "500+", label: "Local Families\nSupported", icon: Users },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Responsible Mining",
    subtitle: "ISO 14001 Environmental Compliance & Governance",
    desc: "Governed by strict international protocols, our mining concessions operate with full statutory environmental clearances, low-impact blast designs, and transparent regulatory reporting.",
    features: [
      "Rigorous environmental impact assessments (EIA) conducted prior to groundbreaking",
      "Controlled electronic precision blasting reducing seismic vibration and dust clouds",
      "Full compliance with Pakistan Environmental Protection Act (PEPA) standards",
    ],
  },
  {
    icon: Trees,
    title: "Land Rehabilitation",
    subtitle: "Simultaneous Topsoil Restoration & Native Reforestation",
    desc: "We do not wait for mine closure to restore nature. Every exhausted open-pit terrace is systematically re-contoured, covered with preserved topsoil, and replanted with native drought-tolerant trees.",
    features: [
      "Simultaneous reclamation during active pit excavation lifecycles",
      "Erosion control through natural geo-textiles and hydro-seeding methods",
      "Creation of sustainable post-mining pastures and native biodiversity corridors",
    ],
  },
  {
    icon: Droplets,
    title: "Water Management",
    subtitle: "92% Closed-Loop Recycling & Zero Toxic Discharge",
    desc: "Operating high-rate thickeners, pressure filtration presses, and settling reservoirs to recycle over 92% of water in processing circuits, protecting groundwater reserves in arid zones.",
    features: [
      "Zero-toxic liquid chemical discharge into regional river systems or aquifers",
      "Automated piezometers monitoring regional groundwater table depth and quality",
      "Rainwater harvesting collection reservoirs powering quarry dust suppression",
    ],
  },
  {
    icon: Shield,
    title: "Environmental Protection",
    subtitle: "Air Quality Control, Noise Abatement & Biodiversity",
    desc: "Protecting surrounding microclimates through high-pressure water atomizing mist cannons on haul roads, enclosed conveyor covers, and dedicated wildlife buffer zones.",
    features: [
      "Water mist atomizers and bio-chemical dust binders on heavy haul roads",
      "Enclosed conveyor gantries preventing windblown fine mineral dust dispersion",
      "Strict perimeter buffer zones preserving natural fauna migration routes",
    ],
  },
  {
    icon: SunMedium,
    title: "Energy Efficiency",
    subtitle: "Solar Hybrid Microgrids & Electric Heavy Fleets",
    desc: "Transitioning remote mining concessions from continuous diesel generation to high-efficiency bifacial solar hybrid microgrids and energy-recovering downhill conveyor systems.",
    features: [
      "Multi-megawatt solar photovoltaic arrays powering processing flotation plants",
      "Regenerative downhill overland conveyors feeding electricity back into the site grid",
      "Progressive deployment of electric hydraulic shovels cutting diesel consumption",
    ],
  },
  {
    icon: Users,
    title: "Community Development",
    subtitle: "Local Technical Livelihoods & Clean Water Infrastructure",
    desc: "Investing concession revenues directly into surrounding rural districts to build reverse-osmosis clean drinking water filtration plants, basic health units, and technical apprenticeship academies.",
    features: [
      "Priority local hiring and certified heavy equipment operator apprenticeships",
      "Free community reverse-osmosis clean drinking water plants in concession villages",
      "Scholarships for regional youth pursuing mining geology and engineering degrees",
    ],
  },
  {
    icon: Scale,
    title: "Sustainable Resource Management",
    subtitle: "Maximum Ore Recovery & Zero Material Waste",
    desc: "Using advanced 3D geostatistical deposit models to optimize cut-off grades, minimize mineral waste, and beneficiate lower-grade ores that were previously discarded.",
    features: [
      "Precision computerized grade control preventing high-grade ore dilution",
      "Reprocessing historical tailings using modern froth flotation technology",
      "Converting crushed waste rock into certified construction aggregate sub-base",
    ],
  },
];

export default function NationalMinesSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Environmental, Social &amp; Governance (ESG)</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Mining With Responsibility &amp; <span style={{ color: theme.forestGreen }}>Sustainable Stewardship</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                At National Mines Corporation, sustainable resource development is an operational mandate. Through progressive land reclamation, 92% closed-loop water conservation, zero-harm worker safety, and community investment, we build an enduring legacy of responsible industrial prosperity.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#pillars-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.forestGreen }}
                >
                  <span>Explore 7 ESG Pillars</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Inquire About ESG Protocols</span>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev/mining_rehabilitation.jpg"
                  alt="Mine Environmental Rehabilitation and Vegetation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3826]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.forestGreen }}>
                      Verified Sustainability Benchmarks
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      92% Water Recycled · 100K+ Trees Planted · ISO 14001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Impact Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ESG_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.forestGreen}15` }}>
                    <Icon size={20} style={{ color: theme.forestGreen }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 Core Sustainability Pillars */}
      <section id="pillars-section" className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Core Environmental Framework</SectionLabel>
            <SectionHeading center className="mb-3">Our 7 Sustainability Pillars</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Engineered environmental stewardship integrated into every stage of the mineral extraction and processing cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUSTAINABILITY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="mine-card rounded-2xl p-6 flex flex-col justify-between bg-white"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.forestGreen}15` }}>
                        <Icon size={18} style={{ color: theme.forestGreen }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider block" style={{ color: theme.gold }}>
                          Pillar 0{idx + 1}
                        </span>
                        <h3 className="text-[16px] font-semibold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[11px] font-medium tracking-wide mb-2.5 text-emerald-800">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13px] font-normal leading-relaxed text-slate-500 mb-4">
                      {pillar.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: theme.navy }}>
                        Key Commitments:
                      </p>
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                          <span className="text-xs font-normal text-slate-700 leading-snug">{feat}</span>
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

      {/* Bottom CTA / Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Transparent Environmental Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Request Official ESG &amp; Sustainability Audit Reports
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Review our third-party water testing assays, tailings stability reports, and community investment documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.forestGreen }}
              >
                <span>Contact ESG Desk</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
