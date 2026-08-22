"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Sun,
  Cpu,
  Battery,
  Radio,
  Wrench,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Layers,
  Factory,
  Building2,
  Users2,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxPowerShared";

const ABOUT_STATS = [
  { value: "30+", label: "Years of Heavy\nPower EPC Experience", icon: Award },
  { value: "500+", label: "Completed Megawatt\nPower Projects", icon: Zap },
  { value: "2000+", suffix: " MW", label: "Installed Power Capacity\nAcross Pakistan", icon: Sun },
  { value: "300+", label: "Certified Power &\nHigh-Voltage Engineers", icon: Users2 },
  { value: "99.8%", label: "Grid Network Uptime\n& Reliability SLA", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Engineering Precision & Safety",
    desc: "Adhering strictly to IEEE, IEC, and NEPRA grid standards for high-voltage isolation, transformer thermal ratings, and fail-safe switchgear protection.",
  },
  {
    icon: Sun,
    title: "Renewable Energy Transition",
    desc: "Pioneering multi-megawatt solar photovoltaic farms, wind energy parks, and hybrid microgrids that reduce national reliance on imported fossil fuels.",
  },
  {
    icon: Battery,
    title: "Grid Stabilization & Storage",
    desc: "Deploying utility-scale Battery Energy Storage Systems (BESS) and fast-response synchronous condensers to eliminate power blackouts.",
  },
  {
    icon: Wrench,
    title: "Turnkey EPC Accountability",
    desc: "Providing end-to-end responsibility from geotechnical land surveys and grid sanctioning to heavy machinery installation, testing, and 24/7 O&M.",
  },
];

export default function MaxPowerAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Max Power Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Powering Industries &amp; <span style={{ color: theme.navy }}>Energizing The Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Max Power Corporation is a premier energy infrastructure and electrical engineering conglomerate specializing in utility-scale solar and wind generation, high-voltage transmission substations (132kV–500kV), industrial battery storage (BESS), and power plant EPC across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-power/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Power Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-power/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult Power Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/max_power_hero_energy.svg"
                  alt="Max Power Energy Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.amberDark }}>
                      PEC C-A No Limit Turnkey EPC
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      2,000+ MW Installed · 500kV Substation EPC
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
                  className="max-power-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
                src="/max_power_hero_energy.svg"
                alt="Max Power Transmission & Grid Engineering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FBBF24] block mb-1">
                    National Power Grid EPC
                  </span>
                  <h4 className="text-base font-bold">500+ Completed High-Voltage Substations &amp; Solar Parks</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To deliver resilient, high-efficiency power generation, modern renewable energy farms, high-voltage transmission networks, and intelligent battery storage solutions that fuel Pakistan&apos;s industrial growth and advance energy independence.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s most trusted energy infrastructure powerhouse, leading the transition toward a zero-carbon, digitized, and highly reliable power grid.
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
              The foundational engineering discipline and safety ethos that govern our power plant construction and grid commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="max-power-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
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
                    <CheckCircle2 size={15} style={{ color: theme.amber }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                      IEEE / IEC Compliant
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.amberDark }}>
                PLANNING A POWER PLANT, SUBSTATION, OR SOLAR PARK?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Energy Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal electrical and transmission engineers to review single-line diagrams, interconnection feasibility, and turnkey EPC pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Proposal</span>
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
