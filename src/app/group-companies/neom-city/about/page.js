"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HardHat,
  Building2,
  Factory,
  Trees,
  Zap,
  Leaf,
  Cpu,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NeomCityShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years Urban Development\nExperience", icon: Award },
  { value: "150+", label: "Smart Infrastructure\nProjects Delivered", icon: Building2 },
  { value: "50+", label: "Commercial Financial\nDistricts", icon: Factory },
  { value: "300+", label: "Civil Engineers &\nUrban Planners", icon: Users2 },
  { value: "20+", label: "Metropolitan Cities\nDeveloped", icon: Compass },
];

const CORE_VALUES = [
  {
    icon: Compass,
    title: "Data-Driven Urban Intelligence",
    desc: "Every master plan is engineered using high-resolution GIS spatial telemetry, BIM digital twins, and AI traffic simulation models for optimal density and livability.",
  },
  {
    icon: Leaf,
    title: "LEED Platinum Sustainability",
    desc: "Pioneering sponge city flood resilience, net-zero carbon district cooling, solar glass architecture, and 100% renewable clean energy microgrids.",
  },
  {
    icon: Zap,
    title: "Autonomous Smart Mobility",
    desc: "Designing grade-separated transit corridors, automated EV hyperloop feeders, synchronized smart signals, and pedestrian-first micro-mobility pathways.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Lifecycle Governance",
    desc: "Providing end-to-end stewardship from regulatory zoning and FIDIC contract execution to automated municipal IoT utility operations and asset maintenance.",
  },
];

export default function NeomCityAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Neom City Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Building Intelligent Cities. <span style={{ color: theme.teal }}>Shaping Future Urban Living.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Neom City Corporation is a premier smart city development and urban infrastructure corporation. We design, finance, construct, and manage transformative metropolitan developments, commercial financial centers, industrial Special Economic Zones (SEZs), and digital city ecosystems engineered for generational sustainability.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/neom-city/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Urban Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/neom-city/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Master Plan RFP</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomcity_hero_urban.svg"
                  alt="Neom City Corporation Urban Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.teal }}>
                      Smart City Digital Twin &amp; GIS
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      150+ Infrastructure Mega Projects Delivered
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
                  className="neom-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
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
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/neomcity_hero_urban.svg"
                alt="Smart City Master Plan and Transit Grid"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] block mb-1">
                    Smart Urban Leadership
                  </span>
                  <h4 className="text-base font-bold">25+ Years of Future-Ready City Engineering</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To design, construct, and govern high-performance, carbon-neutral smart cities and infrastructure assets that elevate human potential, unlock commercial prosperity, and provide resilient urban living for generations to come.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Global Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To stand as the undisputed international benchmark in intelligent urban development, transforming megacities across Asia and the Middle East through AI-driven GIS digital twins, clean energy microgrids, and humane urban design.
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
              The architectural rigor, technical ethics, and environmental stewardship that guide every smart master plan we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="neom-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navyDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.teal }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                      Global Benchmark
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#008080]">
                PLANNING A SMART CITY OR MEGA INFRASTRUCTURE CONCESSION?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Urban Planning Scoping Session
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal urban architects, GIS spatial analysts, and PPP infrastructure transaction advisors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/neom-city/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Planning Scoping</span>
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

      <NeomCityFooter />
    </main>
  );
}
