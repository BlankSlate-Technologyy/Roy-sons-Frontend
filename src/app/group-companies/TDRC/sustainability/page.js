"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Sprout,
  Droplets,
  Wind,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users2,
  TreePine,
  Sparkles,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/TDRCShared";

const SUSTAINABILITY_STATS = [
  { value: "50,000+", label: "Arid Acres Restored\n& Afforested", icon: TreePine },
  { value: "1.2M+", label: "Indigenous Drought-Hardy\nTrees Planted", icon: Sprout },
  { value: "65%", label: "Agricultural Water Saved\nVia Solar Micro-Drip", icon: Droplets },
  { value: "100,000+", label: "Farmers Receiving Climate\nEarly Warnings", icon: Users2 },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: TreePine,
    title: "Combatting Desertification & Soil Degradation (UN SDG 15)",
    desc: "By establishing dense biological windbreak shelterbelts of indigenous acacia, olive, and moringa trees, we arrest sand dune migration, reclaim saline soils, and restore vital desert ecological habitats.",
    features: [
      "Mitigating topsoil erosion and sandstorm encroachment onto farmlands",
      "Enhancing biological soil carbon sequestration through organic leaf litter",
      "Seed preservation of endangered indigenous desert flora and botanical species",
    ],
  },
  {
    icon: Droplets,
    title: "Groundwater Aquifer Replenishment & Water Security (UN SDG 6)",
    desc: "Deploying high-density telemetric piezometers and constructing managed aquifer recharge (MAR) filtration pits that capture seasonal monsoon floods to replenish deep freshwater aquifers.",
    features: [
      "Continuous telemetric monitoring of Indus-Jhelum Doab water table depths",
      "Eliminating destructive flood irrigation in favor of solar micro-drip networks",
      "Preventing agricultural aquifer over-extraction and deep salinity intrusion",
    ],
  },
  {
    icon: Wind,
    title: "Climate Adaptation & Drought Early Warnings (UN SDG 13)",
    desc: "Combining high-resolution satellite remote sensing with predictive artificial intelligence models to deliver actionable climate vulnerability assessments and early drought alerts to agrarian communities.",
    features: [
      "Seasonal rainfall and temperature anomaly forecasting for farming clusters",
      "Screening climate-resilient crop cultivars tolerant to extreme heat and drought",
      "100% clean solar-powered agricultural pumping reducing fossil diesel emissions",
    ],
  },
  {
    icon: Users2,
    title: "Inclusive Rural Livelihoods & Gender Equality (UN SDG 1 & 5)",
    desc: "Ensuring that scientific innovations deliver tangible economic prosperity to marginalized rural communities through women-led agro-enterprises, fair trade packaging, and vocational capacity building.",
    features: [
      "Establishing community-managed organic moringa and date-palm processing hubs",
      "Equipping over 3,500 rural women with technical post-harvest processing skills",
      "Creating localized value chains that keep economic value within farming villages",
    ],
  },
];

export default function TDRCSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>UN Sustainable Development Goals (SDGs)</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
                Ecological Restoration &amp; <span style={{ color: theme.primaryDark }}>Climate Resilience</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Thal Development &amp; Research Centre (TDRC), sustainability is woven into our scientific mandate. We translate ecological research into concrete actions—planting millions of trees, securing groundwater reserves, and fortifying rural communities against climate change.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/TDRC/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                >
                  <span>Inquire About ESG Partnerships</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/TDRC/programs"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.ink }}
                >
                  <span>Explore Field Programs</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/tdrc_hero_research.svg"
                  alt="TDRC Environmental Restoration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#1F7A3E]">
                      Arid Ecology Restoration
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.ink }}>
                      50,000+ Acres Afforested · Managed Aquifers
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
                  className="tdrc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}15` }}>
                    <Icon size={22} style={{ color: theme.primaryDark }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.ink }}>
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
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Development</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Aligned with United Nations Sustainable Development Goals (SDGs 1, 5, 6, 13, and 15).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="tdrc-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}15` }}>
                      <Icon size={26} style={{ color: theme.primaryDark }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.ink }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(225, 233, 227, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#2E9E54]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#1F7A3E]">
                CLIMATE ACTION &amp; DONOR CO-FINANCING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Co-Design Climate Resilience Programs
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Partner with TDRC to implement verified carbon offset forestry, watershed management, and community sustainable development projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Request ESG Collaboration</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.ink, color: theme.ink }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
