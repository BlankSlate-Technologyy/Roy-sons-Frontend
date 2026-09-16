"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Sun,
  Droplets,
  ShieldAlert,
  Recycle,
  Cpu,
  Users2,
  CheckCircle2,
  ArrowRight,
  Award,
  Building2,
  TreePine,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";

const SUSTAINABILITY_PILLARS = [
  {
    icon: Leaf,
    title: "Green Construction",
    subtitle: "LEED & Eco-Resilient Building Envelopes",
    desc: "Implementing USGBC LEED and EDGE compliant building methods, bioclimatic orientation, high-performance thermal insulation, and passive solar daylighting to lower operational energy demands.",
    metrics: "Up to 32% Energy Reduction",
  },
  {
    icon: Sun,
    title: "Energy Efficiency",
    subtitle: "Rooftop Solar & Microgrid Integration",
    desc: "Integrating commercial rooftop photovoltaic arrays, solar canopy parking, and high-efficiency variable refrigerant flow (VRF) HVAC systems into civil and industrial developments.",
    metrics: "85 MW Solar Capacity Deployed",
  },
  {
    icon: Droplets,
    title: "Water Management",
    subtitle: "Rainwater Retention & Greywater Recycling",
    desc: "Engineering permeable pavements, bioswales, retention reservoirs, and closed-loop biological effluent treatment plants (ETP) to recharge groundwater aquifers and eliminate industrial runoff.",
    metrics: "1.8M Gallons Recycled / Day",
  },
  {
    icon: ShieldAlert,
    title: "Climate Resilience",
    subtitle: "Flood Mitigation & Thermal Stress Protection",
    desc: "Designing infrastructure for 100-year flood return cycles with hydrodynamic bridge piers, reinforced river embankments, high-capacity stormwater culverts, and high-temperature asphalt mixes.",
    metrics: "100-Year Design Flood Tolerance",
  },
  {
    icon: Recycle,
    title: "Sustainable Materials",
    subtitle: "Low-Carbon Cements & Recycled Aggregates",
    desc: "Utilizing pulverized fuel ash (PFA), ground granulated blast-furnace slag (GGBS), and recycled crushed concrete aggregates to minimize embodied carbon in heavy structural concrete mixes.",
    metrics: "35% Lower Embodied Carbon",
  },
  {
    icon: Cpu,
    title: "Smart Infrastructure",
    subtitle: "IoT Sensors & Building Management Systems",
    desc: "Deploying intelligent structural health monitoring sensors, automated smart LED streetlighting networks, and real-time energy telemetry across highway networks and commercial complexes.",
    metrics: "24/7 Automated Structural Telemetry",
  },
  {
    icon: Users2,
    title: "Community Development",
    subtitle: "Inclusive Urban Spaces & Local Employment",
    desc: "Creating accessible pedestrian green belts, public civic plazas, and safe transit routes, while prioritizing local workforce training and health and safety governance on every project.",
    metrics: "100% Local Skill Transfer & HSE",
  },
];

const IMPACT_STATS = [
  { value: "35%", label: "Average Carbon\nReduction", icon: Leaf },
  { value: "85 MW", label: "Clean Solar Energy\nInstalled", icon: Sun },
  { value: "1.8M", label: "Gallons Water\nRecycled Daily", icon: Droplets },
  { value: "100%", label: "LEED & BCP Code\nCompliance", icon: ShieldCheck },
];

export default function WaltonSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SUSTAINABILITY HERO: ULTRA-REALISTIC SUSTAINABLE URBAN INFRASTRUCTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <SectionLabel>Environment &amp; Resilience</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                INFRASTRUCTURE FOR A <span style={{ color: theme.navy }}>MORE SUSTAINABLE FUTURE</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                At Walton Consultants &amp; Contracting, sustainable engineering is not an afterthought — it is the cornerstone of our civil design philosophy. We build eco-resilient infrastructure combining renewable energy, water conservation, climate adaptation, and green building envelopes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Consult Sustainability Team</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/walton-consultants-contracting/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 text-[#0A1E34] hover:bg-slate-50 transition-all"
                >
                  <span>Sustainable Projects</span>
                </Link>
              </div>
            </div>

            {/* Right: SUSTAINABILITY HERO IMAGE */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/walton/sustainability_hero.jpg"
                  alt="Sustainable Urban Infrastructure Project in Pakistan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-md w-full">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#C5A059]">
                        Net-Zero Engineering
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0A1E34]">
                      Solar Integration &middot; Green Public Spaces &middot; Water Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. IMPACT STATS COUNTER BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1300 + i * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 7 CORE SUSTAINABILITY PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Our Ecological Framework</SectionLabel>
            <SectionHeading center className="mb-3">
              7 Pillars of Sustainable Infrastructure
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Engineered systems designed to protect ecosystems, conserve finite resources, and withstand environmental volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="walton-card-lift p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white" style={{ backgroundColor: theme.navy }}>
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-black text-[#0A1E34] uppercase tracking-tight mb-1">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-3">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0E2A47]">{pillar.metrics}</span>
                    <CheckCircle2 size={15} className="text-[#C5A059]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FINAL CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-xl text-white relative overflow-hidden"
            style={{ backgroundColor: theme.navyDark }}
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight mb-2 text-white">
                Partner With Us on Green Infrastructure
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Whether seeking LEED Gold building certification or designing climate-resilient water conveyance, our environmental engineers are ready to assist.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: theme.goldHover }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
