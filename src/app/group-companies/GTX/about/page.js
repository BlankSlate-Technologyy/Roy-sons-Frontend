"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Battery,
  Truck,
  Sun,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Layers,
  PlugZap,
  LineChart,
  Users2,
} from "lucide-react";
import {
  theme,
  GTXNavbar,
  GTXFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/GTXShared";

const ABOUT_STATS = [
  { value: "15+", label: "Years of German\nEngineering Precision", icon: Award },
  { value: "500+", label: "DC Fast Charging\nStations Installed", icon: PlugZap },
  { value: "200+", label: "Commercial & Fleet\nEV Projects Delivered", icon: Truck },
  { value: "100+", label: "Certified EV &\nPower Engineers", icon: Users2 },
  { value: "99.8%", label: "Grid Network\nUptime Reliability", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "German Engineering Precision",
    desc: "Adhering to strict European DIN, IEC, and ISO standards for electrical safety, galvanic insulation, and liquid-cooled ultra-fast charging efficiency.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Charging Speeds",
    desc: "Pioneering high-power 360kW DC chargers capable of delivering 200–300 km of electric vehicle driving range in under 12 minutes.",
  },
  {
    icon: Sun,
    title: "Renewable Clean Energy Integration",
    desc: "Direct coupling with solar photovoltaic canopies and industrial Battery Energy Storage Systems (BESS) to eliminate carbon emissions.",
  },
  {
    icon: LineChart,
    title: "Cloud Telemetry & Smart EMS",
    desc: "Real-time automated dynamic load balancing, OCPP 2.0.1 compliance, contactless payment gateways, and predictive AI maintenance.",
  },
];

export default function GTXAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About German Technology Xpert</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Engineering Future <span style={{ color: theme.primary }}>Electric Mobility &amp; Smart Grids</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                German Technology Xpert (GTX) is a pioneering engineering enterprise delivering turn-key electric vehicle (EV) charging infrastructure, high-power DC fast chargers (60kW–360kW), Battery Energy Storage Systems (BESS), and intelligent energy management software across Pakistan. We bring German technological rigor to decarbonize transport and power networks.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/GTX/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore EV Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/GTX/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Contact Engineering Desk</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/GTX_hero.png"
                  alt="GTX German EV Fast Charging Technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.primary }}>
                      German Engineering Standard
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      350kW DC Fast Charging · Smart Grid &amp; BESS
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
                  className="gtx-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.charcoal }}>
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
                src="/GTX-about.png"
                alt="GTX Smart Grid & EV Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#22C55E] block mb-1">
                    National EV Infrastructure
                  </span>
                  <h4 className="text-base font-bold">500+ Fast Chargers Deployed Nationwide</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To accelerate Pakistan&apos;s transition to zero-emission electric transportation and resilient green energy by engineering ultra-reliable, high-power DC fast charging networks and smart grid storage solutions backed by German technological precision.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s leading clean technology and EV infrastructure powerhouse, setting global benchmarks in charging speed, grid resilience, and smart mobility intelligence.
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
              The foundational pillars that guide our electrical engineers, software developers, and field technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="gtx-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.charcoal }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.primary }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
                      DIN/IEC Compliant
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.primary }}>
                PLANNING AN EV CHARGING NETWORK OR FLEET DEPOT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Schedule An EV Infrastructure Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Contact our senior power engineers to conduct site power capacity audits, transformer sizing, and charger deployment timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Site Audit</span>
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
