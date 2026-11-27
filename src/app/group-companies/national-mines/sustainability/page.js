"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Trees,
  SunMedium,
  Scale,
  Shield,
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
    desc: "Governed by strict international and provincial EPA protocols, our concessions operate with full Environmental Impact Assessments (EIA), low-vibration blast designs, and transparent reporting.",
    features: [
      "Full Environmental Impact Assessments (EIA) approved prior to groundbreaking",
      "Controlled electronic precision blasting reducing seismic vibration and dust",
      "Strict compliance with Pakistan Environmental Protection Act (PEPA) standards",
    ],
  },
  {
    icon: Trees,
    title: "Land Rehabilitation",
    subtitle: "Simultaneous Topsoil Restoration & Native Reforestation",
    desc: "We do not wait for mine closure to restore nature. Every exhausted open-pit terrace is re-contoured, overlaid with preserved topsoil, and replanted with native drought-tolerant flora.",
    features: [
      "Simultaneous reclamation integrated into active excavation lifecycles",
      "Erosion control through natural geo-textiles and hydro-seeding methods",
      "Creation of sustainable post-mining pastures and biodiversity corridors",
    ],
  },
  {
    icon: Droplets,
    title: "Water Management",
    subtitle: "92% Closed-Loop Recycling & Zero Toxic Discharge",
    desc: "Operating high-rate thickeners, pressure filtration presses, and settling basins to recycle over 92% of processing water, protecting scarce aquifers across Balochistan and Thar.",
    features: [
      "Zero-toxic liquid chemical discharge into regional river systems or aquifers",
      "Automated piezometers monitoring regional groundwater table depth and quality",
      "Rainwater harvesting reservoirs powering quarry dust suppression systems",
    ],
  },
  {
    icon: Shield,
    title: "Environmental Protection",
    subtitle: "Air Quality Control, Noise Abatement & Biodiversity",
    desc: "Protecting surrounding microclimates through high-pressure water mist cannons on haul roads, enclosed conveyor gantries, and protected wildlife buffer corridors.",
    features: [
      "Water mist atomizers and bio-chemical dust binders on heavy haul roads",
      "Enclosed conveyor gantries preventing windblown fine mineral dispersion",
      "Strict perimeter buffer zones preserving natural fauna migration routes",
    ],
  },
  {
    icon: SunMedium,
    title: "Energy Efficiency",
    subtitle: "Solar Hybrid Microgrids & Electric Heavy Fleets",
    desc: "Transitioning remote mining concessions from continuous diesel generation to high-efficiency bifacial solar hybrid microgrids and energy-recovering downhill conveyor systems.",
    features: [
      "Multi-megawatt solar photovoltaic arrays powering flotation plants",
      "Regenerative downhill overland conveyors feeding clean power back on-site",
      "Progressive deployment of electric hydraulic shovels cutting diesel burn",
    ],
  },
  {
    icon: Users,
    title: "Community Development",
    subtitle: "Local Technical Livelihoods & Clean Water Infrastructure",
    desc: "Investing concession royalties directly into surrounding rural districts to establish reverse-osmosis clean drinking water plants, basic health clinics, and operator apprenticeships.",
    features: [
      "Priority local hiring and certified heavy equipment operator training",
      "Free community RO clean drinking water plants in concession villages",
      "Scholarships for local youth pursuing mining geology and engineering",
    ],
  },
  {
    icon: Scale,
    title: "Sustainable Resource Management",
    subtitle: "Maximum Ore Recovery & Zero Material Waste",
    desc: "Applying 3D geostatistical deposit models to optimize cut-off grades, minimize waste rock, and beneficiate secondary ore zones responsibly.",
    features: [
      "Precision computerized grade control preventing high-grade ore dilution",
      "Reprocessing historical tailings using modern closed-loop flotation",
      "Converting crushed waste rock into certified highway aggregate sub-base",
    ],
  },
];

export default function NationalMinesSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Environmental, Social &amp; Governance (ESG)</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14] mb-5" style={{ color: theme.navy }}>
                Mining With Responsibility &amp; <span style={{ color: theme.forestGreen }}>Sustainable Stewardship</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed mb-7 max-w-2xl" style={{ color: theme.textMuted }}>
                At National Mines Corporation, sustainable resource development is an operational mandate. Through progressive land reclamation, 92% closed-loop water conservation, solar microgrids, and community investment, we build an enduring legacy of responsible industrial growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#pillars-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.forestGreen }}
                >
                  <span>Explore 7 ESG Pillars</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Inquire About ESG Protocols</span>
                </Link>
              </div>
            </div>

            {/* Right Visual — Unique Renewable Solar & Green Hills Microgrid */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[330px] sm:h-[390px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/renewable-1.jpg"
                  alt="Solar Hybrid Renewable Energy Powering Sustainable Mining Operations"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3826]/88 via-transparent to-transparent flex items-end p-5">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: theme.forestGreen }}>
                      Verified Sustainability Benchmarks
                    </p>
                    <p className="text-sm font-semibold" style={{ color: theme.navy }}>
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
      <section className="py-9 sm:py-11 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {ESG_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.forestGreen}15` }}>
                    <Icon size={22} style={{ color: theme.forestGreen }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold tracking-wide uppercase whitespace-pre-line leading-snug" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 Core Sustainability Pillars */}
      <section id="pillars-section" className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Core Environmental Framework</SectionLabel>
            <SectionHeading center className="mb-3">Our 7 Sustainability Pillars</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Engineered environmental stewardship integrated into every stage of mineral extraction and processing.
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.forestGreen}15` }}>
                        <Icon size={20} style={{ color: theme.forestGreen }} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: theme.gold }}>
                          Pillar 0{idx + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] font-semibold tracking-wide mb-2.5 text-emerald-800">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                      <p className="text-xs font-bold uppercase tracking-wide" style={{ color: theme.navy }}>
                        Key Commitments:
                      </p>
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                          <span className="text-xs sm:text-[13.5px] font-medium text-slate-700 leading-snug">{feat}</span>
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

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0F3826] text-white" style={{ borderColor: theme.forestGreenMid }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Transparent Environmental Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Request Official ESG &amp; Sustainability Audit Reports
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-xl text-emerald-100 leading-relaxed">
                Review our third-party water testing assays, dry-stack tailings stability certifications, and community development records.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Contact ESG Desk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
