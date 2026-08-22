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
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Sparkles,
  Leaf,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DesertDevShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years Environmental\nEngineering Experience", icon: Award },
  { value: "200+", label: "Desert Rehabilitation\nProjects Completed", icon: Globe },
  { value: "5M+", label: "Native Trees\nPlanted Nationwide", icon: Trees },
  { value: "300+", label: "Environmental &\nAgronomy Specialists", icon: Users2 },
  { value: "30+", label: "Arid & Semi-Arid\nRegions Restored", icon: Compass },
];

const CORE_VALUES = [
  {
    icon: Sprout,
    title: "Scientific Ecological Restoration",
    desc: "Deploying biological soil crumbing, indigenous mycorrhizal inoculants, and native drought-resilient flora to establish self-sustaining ecosystems.",
  },
  {
    icon: Droplets,
    title: "Precision Water Conservation",
    desc: "Pioneering subsurface drip irrigation, atmospheric moisture harvesting, and solar-powered brackish groundwater desalination.",
  },
  {
    icon: Layers,
    title: "GIS & Drone Topography",
    desc: "Utilizing multispectral satellite imagery, automated seeding drones, and IoT soil moisture sensors for hyper-targeted environmental interventions.",
  },
  {
    icon: ShieldCheck,
    title: "UNCCD & Global ESG Compliance",
    desc: "Aligning land degradation neutrality goals with UN Sustainable Development Goals (SDGs 13, 15) and ISO 14001 environmental frameworks.",
  },
];

export default function DesertDevAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Desert Development &amp; Rehabilitation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
                Transforming Arid Landscapes. <span style={{ color: theme.primary }}>Creating Sustainable Futures.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Desert Development &amp; Rehabilitation is a leading environmental engineering and land reclamation enterprise. Combining environmental science, advanced hydrology, precision afforestation, and renewable energy, we transform degraded barren deserts into thriving ecological and economic assets across 30+ regions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/desert-development/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Rehabilitation Suites</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/desert-development/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkGreen }}
                >
                  <span>Schedule Environmental Audit</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev_hero_rehab.svg"
                  alt="Desert Development & Rehabilitation Ecological Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.emerald }}>
                      UNCCD Compliant &amp; ISO 14001
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkGreen }}>
                      5M+ Trees Planted · 200+ Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-emerald-50/50" style={{ borderColor: theme.border }}>
              <Image
                src="/desertdev_hero_rehab.svg"
                alt="Afforestation and Desert Land Reclamation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E2B774] block mb-1">
                    Arid Land Engineering Leadership
                  </span>
                  <h4 className="text-base font-bold">25+ Years of Ecosystem Regeneration Excellence</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To reverse desertification and restore degraded arid landscapes through innovative environmental engineering, sustainable water hydrology, large-scale native afforestation, and climate-resilient community infrastructure.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Ecological Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s foremost authority in arid land reclamation, recognized globally for pioneering carbon-sequestering green belts, solarized agricultural hubs, and zero-degradation desert masterplans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The ecological rigor, engineering discipline, and community stewardship that guide every desert development project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="dd-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.darkGreen }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.emerald }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
                      UNCCD Aligned
                    </span>
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
                COMMISSIONING AN ARID LAND REHABILITATION OR AFFORESTATION PROGRAM?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Schedule An Environmental Scoping Session
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal environmental engineers and hydrologists to review soil assays, GIS topographical data, and customized reclamation blueprints.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Book Scoping Session</span>
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
