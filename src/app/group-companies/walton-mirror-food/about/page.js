"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Snowflake,
  Package,
  Boxes,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonFoodShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Manufacturing\nExcellence", icon: Award },
  { value: "400+", label: "Food Products\nManufactured", icon: Package },
  { value: "120000", label: "Tons Annual\nProduction Capacity", icon: Factory },
  { value: "300+", label: "Skilled Food\nTechnologists", icon: Users2 },
  { value: "99.8%", label: "Quality & Safety\nPass Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Food Safety",
    desc: "Every production batch undergoes exhaustive microbiological and chemical screening under strict ISO 22000 and HACCP certified quality protocols.",
  },
  {
    icon: Factory,
    title: "Advanced European Automation",
    desc: "State-of-the-art automated processing, flash-freezing, and MAP (Modified Atmosphere Packaging) lines ensuring zero human contamination.",
  },
  {
    icon: Snowflake,
    title: "Cryogenic IQF Freshness Preservation",
    desc: "Utilizing sub-zero -38°C Individual Quick Freezing (IQF) technology to lock in peak farm freshness, natural vitamins, and vibrant flavor profiles.",
  },
  {
    icon: Boxes,
    title: "Global Private Label Expertise",
    desc: "Turnkey OEM co-packing and private label manufacturing for multinational retail supermarket chains and institutional food distributors across 25+ nations.",
  },
];

export default function WaltonFoodAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Walton &amp; Morris Foods</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Producing Quality Food. <span style={{ color: theme.green }}>Nourishing Every Generation.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Walton &amp; Morris Foods (Pvt) Ltd is a premier food processing and FMCG manufacturing corporation. Operating high-throughput processing lines, cryogenic IQF freezing tunnels, and certified cleanroom packaging facilities, we supply premium consumer packaged foods to leading national supermarkets and global export markets.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-mirror-food/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.green }}
                >
                  <span>Explore Product Portfolio</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/walton-mirror-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.greenDark }}
                >
                  <span>Request Wholesale / OEM Scoping</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood_hero_processing.svg"
                  alt="Walton & Morris Foods Industrial Processing Facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.ochre }}>
                      ISO 22000 &amp; HACCP Certified
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.greenDark }}>
                      120,000 Tons Annual Capacity
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
                  className="wm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}10` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.greenDark }}>
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
                src="/waltonfood_hero_processing.svg"
                alt="Automated Food Manufacturing Plant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F3C677] block mb-1">
                    Premier Food Processing
                  </span>
                  <h4 className="text-base font-bold">20+ Years of Manufacturing Leadership &amp; Global Exports</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To manufacture wholesome, delicious, and innovative food products of uncompromising international quality, bridging sustainable agricultural harvests with modern convenience foods that nourish families and fuel lifestyle vitality.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Industrial Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s leading agro-food processing conglomerate and the private label manufacturer of choice for global supermarket chains, celebrated for cutting-edge cryogenic IQF freezing, sustainable manufacturing, and zero-defect quality.
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
              The food science rigor, automated hygiene controls, and manufacturing ethics that govern our industrial processing plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="wm-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.green}10` }}>
                      <Icon size={26} style={{ color: theme.green }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.greenDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.ochre }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.green }}>
                      ISO 22000 Certified
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.ochreHover }}>
                PLANNING A FOOD MANUFACTURING OR PRIVATE LABEL CONTRACT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Schedule A Production Scoping Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior food technologists and OEM packaging engineers to review recipe formulation, batch sizing, and export logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-mirror-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request OEM / B2B Quote</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
