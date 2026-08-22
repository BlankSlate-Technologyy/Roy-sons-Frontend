"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Leaf,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";

const SUSTAINABILITY_STATS = [
  { value: "350+", label: "Sustainable Civil Projects\nDelivered Nationwide", icon: Building2 },
  { value: "35%", label: "Embodied Carbon Cut via\nEco-Concrete Blends", icon: Leaf },
  { value: "100%", label: "Compliance with EPA &\nBuilding Code Standards", icon: ShieldCheck },
  { value: "25+", label: "Years of Responsible\nEngineering Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Building2,
    title: "LEED Green Building & Energy-Efficient Envelopes",
    desc: "We design and build commercial high-rises and institutional campuses complying with USGBC LEED Gold and Platinum standards, incorporating high-performance double-glazed low-E facades that reduce indoor HVAC cooling loads by over 30%.",
    features: [
      "High thermal mass insulated wall assemblies and cool-roof reflective coatings",
      "Optimized building orientation maximizing natural daylight while minimizing solar heat gain",
      "Substantial long-term operating electricity savings for building owners and tenants",
    ],
  },
  {
    icon: Leaf,
    title: "Low-Carbon Concrete & Eco-Friendly Aggregates",
    desc: "Our structural engineering specifications incorporate supplementary cementitious materials (SCMs)—including pulverized fuel ash (PFA) and ground granulated blast-furnace slag (GGBS)—reducing embodied carbon by up to 35% without compromising compressive strength.",
    features: [
      "High-durability concrete resistant to sulfate attack and chloride penetration",
      "Utilizing responsibly sourced river gravel and recycled crushed concrete aggregates",
      "On-site batching plants minimizing transit emissions and fuel burn",
    ],
  },
  {
    icon: Layers,
    title: "Sustainable Stormwater Harvesting & Urban Drainage",
    desc: "Our master infrastructure developments integrate underground rainwater detention chambers, permeable interlocking pavement, and managed aquifer recharge wells preventing urban flash flooding in commercial developments.",
    features: [
      "Gravity-fed precast stormwater box culverts with integrated sediment traps",
      "Bioswales and rain gardens filtering surface runoff before regional discharge",
      "Protecting local groundwater tables and preventing urban soil erosion",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Construction Waste Circularity & Environmental Safety",
    desc: "We enforce rigorous on-site construction waste segregation, re-crushing concrete and masonry for road base sub-grades, while deploying automated high-pressure mist cannons for site dust suppression.",
    features: [
      "Over 75% construction waste diverted from local municipal landfills",
      "Comprehensive site air quality and acoustic noise barrier monitoring",
      "Zero-compromise worker health, safety, and PPE compliance on every active site",
    ],
  },
];

export default function WaltonSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Infrastructure &amp; Green Building</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Sustainable Civil Engineering For <span style={{ color: theme.navy }}>A Resilient Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Walton Consultants &amp; Contracting, sustainability is an engineering imperative. Through LEED-compliant green building design, low-carbon concrete mixes, sustainable stormwater networks, and strict site waste recycling, we build durable infrastructure with minimal environmental impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Inquire About Green Construction</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/walton-consultants-contracting/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Civil Projects</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/walton_hero_construction.svg"
                  alt="Sustainable Civil Engineering and Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#DFC48B]">
                      Green Building Excellence
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      LEED Standards · Low-Carbon Concrete Blends
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
                  className="walton-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
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
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Civil Construction</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven engineering practices designed to maximize building longevity, thermal performance, and carbon efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="walton-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
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

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(216, 226, 236, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#C5A059]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                PLAN A LEED-COMPLIANT INFRASTRUCTURE PROJECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Build Energy-Efficient Commercial Superstructures &amp; Plants
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full lifecycle thermal modeling, low-carbon concrete mix optimization, and environmental clearance support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Green Building Review</span>
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

      <WaltonFooter />
    </main>
  );
}
