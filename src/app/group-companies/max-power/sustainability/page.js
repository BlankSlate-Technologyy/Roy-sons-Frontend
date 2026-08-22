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
  TreePine,
  Factory,
  Sparkles,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxPowerShared";

const SUSTAINABILITY_STATS = [
  { value: "2000+", suffix: " MW", label: "Installed Clean Renewable\n& Co-Gen Capacity", icon: Sun },
  { value: "3.5M+", label: "Metric Tons CO2\nEmissions Mitigated", icon: Leaf },
  { value: "85%", label: "Thermal Efficiency in\nCaptive Co-Gen Systems", icon: Factory },
  { value: "99.8%", label: "Grid Network Uptime\n& System Availability", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Sun,
    title: "Accelerating National Renewable Energy Transition",
    desc: "By designing and constructing multi-megawatt solar photovoltaic parks, wind farms, and hybrid clean microgrids, Max Power directly replaces imported coal and heavy fuel oil with indigenous clean energy.",
    features: [
      "Zero greenhouse gas emissions during renewable electricity generation",
      "Over 2,000 MW of installed clean solar and wind energy capacity nationwide",
      "Eliminating millions of dollars in national fossil fuel import expenditures",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Waste-Heat Recovery & Combined-Cycle Efficiency",
    desc: "We engineer state-of-the-art Heat Recovery Steam Generators (HRSG) that capture high-temperature industrial gas engine exhaust to produce steam and secondary power, achieving over 85% total thermal efficiency.",
    features: [
      "Doubling energy output from the same unit of natural gas or biomass fuel",
      "Substantially reducing thermal heat pollution in industrial economic zones",
      "Providing verified energy efficiency certificates for industrial manufacturing hosts",
    ],
  },
  {
    icon: Battery,
    title: "Grid-Scale BESS & Renewable Intermittency Smoothing",
    desc: "Utility-scale containerized Battery Energy Storage Systems (BESS) absorb excess solar and wind power during peak generation and discharge it during peak grid demand, eliminating reliance on dirty fossil spinning reserves.",
    features: [
      "Instantaneous sub-second grid frequency stabilization and voltage support",
      "Enabling high penetration of intermittent solar and wind into NTDC transmission grids",
      "Long-duration energy storage buffer preventing blackout cascading events",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Strict Environmental & High-Voltage Safety Governance",
    desc: "Our engineering protocols implement non-PCB bio-degradable transformer oils, SF6 gas leak telemetry, and automated oil containment basins preventing soil and groundwater contamination.",
    features: [
      "100% compliant with EPA Pakistan, NEPRA, and World Bank EHS standards",
      "Zero-compromise electrical grounding and worker high-voltage safety gear",
      "Circular recycling of end-of-life electrical copper, steel pylons, and solar silicon",
    ],
  },
];

export default function MaxPowerSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Clean Energy Transition &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Decarbonizing Heavy Industry &amp; <span style={{ color: theme.navy }}>Power Grids</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Max Power Corporation, sustainability is at the core of our engineering mandate. Through utility solar parks, wind transmission substations, industrial waste-heat recovery, and grid-scale battery storage (BESS), we engineer the infrastructure for a zero-carbon energy future.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-power/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Inquire About ESG Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-power/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Clean Solar Hubs</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/max_power_hero_energy.svg"
                  alt="Max Power Clean Energy and Solar Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#F5A623]">
                      Clean Energy Transition
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      2,000+ MW Clean Energy · BESS Storage
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
                  className="max-power-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                    {stat.suffix && <span className="font-black text-xl text-[#0E4B7E]">{stat.suffix}</span>}
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
            <SectionHeading center className="mb-4">Our 4 Pillars of Energy Sustainability</SectionHeading>
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
                  className="max-power-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.navyDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 224, 236, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#F5A623]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#D88E12]">
                ACHIEVE YOUR CORPORATE ESG CARBON TARGETS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Deploy Clean Solar &amp; Co-Gen At Your Industrial Facility
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full lifecycle carbon offset calculations, clean energy certification, and Power Purchase Agreements (PPA).
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request ESG Consultation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxPowerFooter />
    </main>
  );
}
