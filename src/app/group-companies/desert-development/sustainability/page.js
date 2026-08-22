"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trees,
  Globe,
  Droplets,
  Sun,
  Wind,
  Layers,
  Compass,
  HardHat,
  Sprout,
  BarChart3,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  TreePine,
  Recycle,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DesertDevShared";

const SUSTAINABILITY_STATS = [
  { value: "30+", label: "Arid Regions Restored\nWith Zero Degradation", icon: Globe },
  { value: "5M+", label: "Indigenous Drought-Resilient\nTrees Sequestering Carbon", icon: Trees },
  { value: "100%", label: "Solar-Powered Irrigation\nZero Fossil Diesel Pumping", icon: Sun },
  { value: "25+", label: "Years of Ecological\nRestoration Leadership", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Globe,
    title: "UNCCD Land Degradation Neutrality",
    desc: "Our projects directly advance the United Nations Convention to Combat Desertification (UNCCD) target of achieving Land Degradation Neutrality (LDN) by restoring degraded soils.",
    features: [
      "Halting mobile sand dune encroachment across vulnerable agricultural boundaries",
      "Increasing soil organic matter and microbiological biodiversity in hyper-arid soils",
      "Supporting Pakistan's national afforestation and Ten Billion Tree Tsunami targets",
    ],
  },
  {
    icon: Sprout,
    title: "Preserving Endemic Desert Flora & Fauna",
    desc: "Exclusively cultivating indigenous drought-resilient plant species that require minimal water while providing natural habitats for native desert gazelles, bustards, and pollinators.",
    features: [
      "Propagating native hyper-arid species: Acacia Nilotica, Prosopis Cineraria, and Ber",
      "Zero introduction of invasive exotic botanical species that deplete groundwater",
      "Restoring microclimates and regional pollinator corridors across desert expanses",
    ],
  },
  {
    icon: Sun,
    title: "100% Solar-Powered Zero-Emission Hydrology",
    desc: "Eliminating diesel generators from remote arid operations by powering all deep aquifer submersible pumps and reverse osmosis desalination plants with dedicated solar PV arrays.",
    features: [
      "Solar-powered variable frequency drive (VFD) pumps operating seamlessly off-grid",
      "Zero carbon emissions and zero hazardous fuel transport to remote desert sites",
      "Subsurface pressure-compensated drip emitters preventing 95% water evaporation",
    ],
  },
  {
    icon: BarChart3,
    title: "LiDAR Biomass & Carbon Credit Auditing",
    desc: "Utilizing multispectral drone scanning and satellite LiDAR telemetry to mathematically audit forest biomass accumulation and certify international carbon offset credits.",
    features: [
      "Precise vegetative canopy volume and carbon sink quantification over time",
      "Certified alignment with Gold Standard, VCS (Verra), and Article 6 carbon markets",
      "Transparent digital ESG reporting for government and multinational corporate sponsors",
    ],
  },
];

export default function DesertDevSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Global Ecological Stewardship</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
                Sustainable Desert Ecology For A <span style={{ color: theme.primary }}>Greener Planet</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Desert Development &amp; Rehabilitation, reversing environmental degradation is our foundational purpose. Through UNCCD-aligned land restoration, 5M+ native tree afforestation, 100% solarized water hydrology, and digital carbon credit auditing, we build self-sustaining green ecosystems in harsh arid climates.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/desert-development/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Request Carbon &amp; Eco Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/desert-development/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkGreen }}
                >
                  <span>Explore Restored Regions</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev_hero_rehab.svg"
                  alt="Ecological Restoration and Arid Sustainability"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#E2B774]">
                      UNCCD &amp; SDG 15 Aligned
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkGreen }}>
                      5M+ Native Trees · 100% Solar Pumping · Carbon Offsets
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
                  className="dd-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.darkGreen }}>
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
            <SectionLabel center>Ecological Stewardship Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Arid Sustainability</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Combating desertification, preserving native biodiversity, zero-emission water pumping, and verified carbon sink creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="dd-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.darkGreen }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(212, 229, 221, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#2D7D62]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#2D7D62]">
                DEVELOP IMPACTFUL CARBON OFFSET &amp; RESTORATION INITIATIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Partner In Sustainable Desert Afforestation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full satellite GIS terrain mapping, drone vegetative biomass audits, and international carbon credit certification proposals.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Sustainability Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
