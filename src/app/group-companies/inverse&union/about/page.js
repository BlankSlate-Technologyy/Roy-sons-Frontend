"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
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
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/InverseUnionShared";

const ABOUT_STATS = [
  { value: "40+", label: "Countries Sourced\n& Connected", icon: Globe },
  { value: "5000+", label: "Successful Trade\nDeals Executed", icon: PackageCheck },
  { value: "800+", label: "Verified Global\nCorporate Partners", icon: ClipboardList },
  { value: "15+", label: "Years International\nTrade Experience", icon: Award },
  { value: "99%", label: "Customs Compliance\n& Clearance Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Globe,
    title: "Global Sourcing Network",
    desc: "Direct relationships with Tier-1 verified manufacturers and ISO-certified suppliers across China, Europe, North America, and the Middle East.",
  },
  {
    icon: ShieldCheck,
    title: "Incoterms 2020 Compliance",
    desc: "Rigorous adherence to international trade law, HS code classification, tariff optimization, and documentary letters of credit (LC).",
  },
  {
    icon: Ship,
    title: "Multi-Modal Freight Efficiency",
    desc: "Strategic ocean container booking, chartered air freight, and bonded road transport ensuring on-time delivery with zero port demurrage.",
  },
  {
    icon: PackageCheck,
    title: "End-to-End Trade Stewardship",
    desc: "From factory audit and pre-shipment quality inspection to customs clearance and final warehouse door-to-door delivery.",
  },
];

export default function InverseUnionAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Inverse &amp; Union Trading</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Connecting Global Markets. <span style={{ color: theme.blue }}>Facilitating International Trade.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Inverse &amp; Union Trading is a premier global sourcing, international procurement, and supply chain management company. We connect verified manufacturers, suppliers, and industrial buyers across 40+ countries with compliant, cost-efficient, and seamless cross-border trade solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/inverse&union/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore Trade Sectors</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/inverse&union/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Global Procurement Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/inverseunion_hero_trade.svg"
                  alt="Inverse & Union Trading Global Logistics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.blue }}>
                      Incoterms 2020 &amp; HS Compliance
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      5,000+ Successful Trade Contracts
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
                  className="iu-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
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
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-sky-50/50" style={{ borderColor: theme.border }}>
              <Image
                src="/inverseunion_hero_trade.svg"
                alt="Global Trade Route Management"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#00D2C8] block mb-1">
                    Global Trade Leadership
                  </span>
                  <h4 className="text-base font-bold">15+ Years of International Procurement Integrity</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To empower global businesses by providing seamless cross-border procurement, bulletproof trade compliance, and multi-modal logistics solutions that reduce supply chain risk and accelerate economic prosperity.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Global Trade Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be the most trusted international trade bridge connecting emerging and established global industrial markets through digital supply chain telemetry, ethical sourcing, and zero-defect logistics execution.
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
              The international compliance rigor, transparency, and logistical excellence that govern every cross-border shipment we facilitate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="iu-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.blue}10` }}>
                      <Icon size={26} style={{ color: theme.blue }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navyDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.cyan }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.blue }}>
                      Incoterms 2020 Certified
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                PLANNING AN IMPORT, EXPORT OR GLOBAL PROCUREMENT CONTRACT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An International Trade Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior trade compliance directors and freight forwarding specialists to review supplier verification, duty optimization, and shipping routes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Trade Quote</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
