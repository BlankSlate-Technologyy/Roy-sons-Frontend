"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users2,
  LineChart,
  Sparkles,
} from "lucide-react";
import {
  theme,
  GTXNavbar,
  GTXFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/GTXShared";

const SUSTAINABILITY_STATS = [
  { value: "500K+", label: "Liters Fossil Fuel\nDisplaced Annually", icon: Zap },
  { value: "1,200+", label: "Metric Tons CO2\nEmissions Mitigated", icon: Leaf },
  { value: "100%", label: "Solar-Coupled Clean\nCharging Integration", icon: Sun },
  { value: "6,000+", label: "Battery Lifecycles via\nAdvanced Thermal BESS", icon: Battery },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Leaf,
    title: "Decarbonizing Urban & Intercity Transportation",
    desc: "Every megawatt-hour of clean electric power delivered through our high-speed charging network replaces combustion-engine fossil fuels, directly eliminating toxic particulate matter (PM2.5) and smog in Pakistan's urban centers.",
    features: [
      "Zero tailpipe greenhouse gas emissions from electrified vehicles",
      "Substantial noise pollution reduction in densely populated metropolitan areas",
      "Annual carbon offset verification certificates provided for corporate clients",
    ],
  },
  {
    icon: Sun,
    title: "100% Solar-Coupled Microgrid Infrastructure",
    desc: "By combining bifacial solar photovoltaic carports with industrial containerized BESS battery storage, GTX stations can operate as autonomous green microgrids, charging vehicles with pure solar energy during daylight and peak hours.",
    features: [
      "Direct DC-to-DC solar charging minimizing electrical conversion losses",
      "Zero reliance on fossil-fuel backup diesel generators at motorway hubs",
      "Net-metering surplus clean solar energy back to regional utility grids",
    ],
  },
  {
    icon: Battery,
    title: "Circular Battery Lifecycle & Second-Life Storage",
    desc: "We engineer sustainable end-of-life battery management protocols, testing and repurposing retired automotive lithium batteries into stationary BESS systems for renewable energy storage before eco-certified recycling.",
    features: [
      "Extended battery utility lifecycle of 10+ additional years in stationary storage",
      "Ethical, closed-loop lithium, cobalt, and nickel recovery partnerships",
      "Zero hazardous electronic battery waste in municipal landfills",
    ],
  },
  {
    icon: LineChart,
    title: "Intelligent Peak-Shaving & Grid Stabilization",
    desc: "Our AI-driven Dynamic Load Management (DLM) and BESS storage discharge power during peak grid stress hours, protecting local electrical substations and lowering electricity costs for commercial station hosts.",
    features: [
      "Mitigating sudden grid surges during simultaneous multi-vehicle fast charging",
      "Dynamic real-time frequency regulation and power factor correction",
      "Off-peak night-time energy buffering lowering overall utility costs",
    ],
  },
];

export default function GTXSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Zero-Emission Clean Tech &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Zero-Emission Mobility &amp; <span style={{ color: theme.primary }}>Smart Clean Energy</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At German Technology Xpert (GTX), sustainability is the core of our engineering mission. Through solar-powered fast charging corridors, industrial battery storage, circular battery stewardship, and smart grid optimization, we build the clean infrastructure for a greener future.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/GTX/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Inquire About ESG Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/GTX/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>View Green Solar Hubs</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/GTX-card4.png"
                  alt="GTX Sustainable EV Mobility and Solar Canopies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#16A34A]">
                      Clean Mobility Ecosystem
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      100% Solar-Coupled EV Fast Charging · BESS
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
                  className="gtx-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
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
            <SectionHeading center className="mb-4">Our 4 Pillars of Clean Energy Mobility</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven electrical engineering and renewable storage protocols designed for permanent carbon reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="gtx-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.charcoal }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 226, 240, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#16A34A]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                ACHIEVE YOUR CORPORATE ESG CARBON TARGETS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Deploy Green Solar EV Stations At Your Enterprise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full lifecycle carbon offset estimates, clean energy certification, and power purchase agreements (PPA).
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request ESG Consultation</span>
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

      <GTXFooter />
    </main>
  );
}
