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
  Globe,
  Truck,
  Leaf,
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
  { value: "25+", label: "Years of Food\nLeadership", icon: Award },
  { value: "400+", label: "Food Products\nManufactured", icon: Package },
  { value: "120000", label: "Tons Annual\nProduction Capacity", icon: Factory },
  { value: "35+", label: "Global Export\nDestinations", icon: Globe },
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
    desc: "Turnkey OEM co-packing and private label manufacturing for multinational retail supermarket chains and institutional food distributors across 35+ nations.",
  },
];

export default function WaltonFoodAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Walton &amp; Mirror Food</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Producing Pure Quality Food. <span style={{ color: theme.green }}>Nourishing Every Generation.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Walton &amp; Mirror Food (Pvt) Ltd is a flagship food processing and FMCG manufacturing corporation of ROYSONS Group. Operating high-throughput processing lines, cryogenic IQF freezing tunnels, retort canning suites, and certified cleanroom packaging facilities, we supply premium consumer packaged foods to leading national supermarkets and global export markets.
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
              <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-xl group bg-slate-900" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood/hero_food_processing.jpg"
                  alt="Industrial Food Processing Line"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#F3C677] mb-1">
                      Industrial Processing Leadership
                    </p>
                    <h4 className="text-lg font-bold">25+ Years of Food Engineering</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs hover:border-[#1E6B43] transition-colors"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}12` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.greenDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 150} />
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

      {/* Corporate Heritage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAF8]" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-900" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood/card_quality_lab.jpg"
                  alt="Quality Assurance Laboratory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#1E6B43] text-white inline-block mb-2">
                      Certified Laboratories
                    </span>
                    <h4 className="text-base font-bold">In-House Microbiology &amp; Spectrometry Testing</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Our Commitment</SectionLabel>
              <SectionHeading className="mb-6">Pure Sourcing to Global Export</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Established with a vision to deliver world-standard packaged foods, Walton &amp; Mirror Food bridges direct contract farming with cutting-edge European processing technology. Our facilities transform raw agricultural crops, prime livestock, and farmstead dairy into shelf-stable delicacies and flash-frozen convenience foods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <div className="flex items-center gap-2 font-bold text-xs text-[#134A2D] mb-1">
                    <CheckCircle2 size={16} className="text-[#1E6B43]" />
                    <span>Halal Certified Supply Chain</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">100% verified Islamic compliance across every processing bay.</p>
                </div>
                <div className="p-4 rounded-2xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <div className="flex items-center gap-2 font-bold text-xs text-[#134A2D] mb-1">
                    <CheckCircle2 size={16} className="text-[#1E6B43]" />
                    <span>Cold Chain Integrity</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Continuous -20°C holding across transport and warehouse logistics.</p>
                </div>
              </div>

              <Link
                href="/group-companies/walton-mirror-food/services"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1E6B43]"
              >
                <span>Discover Our Processing Capabilities</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Core Principles</SectionLabel>
            <SectionHeading center className="mb-4">Guiding Values of Food Manufacturing</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Every process at Walton &amp; Mirror Food is guided by our dedication to consumer health, technological precision, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-3xl border p-8 bg-white shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.green}12` }}>
                      <Icon size={24} style={{ color: theme.green }} />
                    </div>
                    <h3 className="text-base font-black mb-3" style={{ color: theme.greenDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
