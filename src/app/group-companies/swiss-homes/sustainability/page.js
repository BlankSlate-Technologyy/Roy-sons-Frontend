"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Sun,
  Droplets,
  Trees,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Home as HomeIcon,
  Sparkles,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHomesShared";

const SUSTAINABILITY_STATS = [
  { value: "40%", label: "Dedicated Green &\nParkland Coverage", icon: Trees },
  { value: "35%", label: "Energy Consumption\nReduction via Smart Design", icon: Sun },
  { value: "100%", label: "Solar-Powered LED\nBoulevard Streetlights", icon: Sparkles },
  { value: "50K+", label: "Indigenous Trees\nPlanted in Enclaves", icon: Leaf },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Sun,
    title: "Solar Integration & Smart Energy Grids",
    desc: "Every Swiss Homes villa and commercial tower is pre-wired for solar net-metering systems, smart inverter battery storage, and central solar microgrids that power streetlights and water pumps with zero carbon footprint.",
    features: [
      "Rooftop solar photovoltaic pre-installation on all residential units",
      "Net-metering integration supplying surplus power back to national grids",
      "Automated solar LED streetlighting on all arterial boulevards",
    ],
  },
  {
    icon: Droplets,
    title: "Water Conservation & Rainwater Harvesting",
    desc: "Integrating retention lakes, permeable interlocking road pavers, and greywater filtration systems to recharge subterranean water tables and irrigate community botanical gardens.",
    features: [
      "Central eco-lake water storage absorbing monsoon runoff",
      "Greywater filtration plants recycling water for community landscapes",
      "Smart low-flow sanitary fixtures installed across all developments",
    ],
  },
  {
    icon: Leaf,
    title: "Thermal Insulation & Passive Climate Design",
    desc: "Utilizing double-glazed low-E argon-filled windows, cavity wall insulation, and optimized natural cross-ventilation corridors that lower indoor summer temperatures by 4–6°C and cut air conditioning expenses.",
    features: [
      "European standard double-glazed sound and heat insulated glass",
      "Autoclaved Aerated Concrete (AAC) blocks with high thermal resistance",
      "Reflective rooftop solar coatings preventing solar heat absorption",
    ],
  },
  {
    icon: Trees,
    title: "Urban Forestation & Biodiversity Corridors",
    desc: "Reserving 40% of total community land for native pine, olive, and jacaranda tree belts, botanical fragrance parks, organic community vegetable plots, and butterfly conservation gardens.",
    features: [
      "Extensive tree shelterbelts reducing urban dust and wind speeds",
      "Dedicated organic fruit and olive orchards for residents",
      "Pedestrian-only green walkways promoting walking and cycling",
    ],
  },
];

export default function SwissHomesSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Living &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Eco-Smart Living &amp; <span style={{ color: theme.red }}>Green Community Design</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Swiss Homes, sustainable construction is not an afterthought—it is the foundation of our master plans. Through solar energy integration, water recycling, passive thermal insulation, and extensive urban forestation, we create healthier living spaces.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-homes/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.red }}
                >
                  <span>Inquire About Eco-Smart Villas</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-homes/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>View Green Master Plans</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_master_planning.svg"
                  alt="Swiss Homes Eco-Smart Master Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#B01B2E]">
                      Green Living Architecture
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      40% Dedicated Green Parks · 100% Solar Streetlights
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
                  className="swiss-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.red}10` }}>
                    <Icon size={22} style={{ color: theme.red }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.charcoal }}>
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
            <SectionHeading center className="mb-4">Our 4 Pillars of Green Community Living</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven construction and urban planning standards designed for environmental health and reduced utility bills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="swiss-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.red}10` }}>
                      <Icon size={26} style={{ color: theme.red }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.charcoal }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(232, 232, 232, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#B01B2E]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#B01B2E]">
                LIVE IN A CERTIFIED ECO-FRIENDLY COMMUNITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Choose A Healthier Future For Your Family
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Discover our solar-equipped villas and residential plots with expansive botanical parks and clean air.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-homes/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.red }}
              >
                <span>Inquire About Green Plots</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.charcoal, color: theme.charcoal }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHomesFooter />
    </main>
  );
}
