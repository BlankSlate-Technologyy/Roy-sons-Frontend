"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Package,
  ClipboardList,
  Wrench,
  Truck,
  HardHat,
  Building2,
  Factory,
  Zap,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  Recycle,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxPakShared";

const SUSTAINABILITY_STATS = [
  { value: "10000+", label: "Certified Eco-Efficient\nIndustrial Products", icon: Package },
  { value: "100%", label: "Recyclable High-Yield\nStructural Steel Alloys", icon: Layers },
  { value: "30+", label: "Years of Responsible\nIndustrial Trading", icon: Award },
  { value: "99%", label: "On-Time Sustainable\nSupply Chain Reliability", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Zap,
    title: "Energy-Efficient IE4 Industrial Machinery",
    desc: "We actively prioritize the supply of Super Premium Efficiency IE4 electrical motors, variable speed frequency drives (VFDs), and low-emission heavy machinery that lower plant energy consumption by up to 35%.",
    features: [
      "Supplying high-efficiency electric motors and variable-speed screw compressors",
      "Reducing factory carbon footprints and recurring industrial electricity overheads",
      "Compliance with international eco-design directives and ISO 50001 energy standards",
    ],
  },
  {
    icon: ShieldCheck,
    title: "ISO 14001 Responsible Supply Chain",
    desc: "Rigorous environmental screening of all global manufacturing partners, ensuring all raw materials are extracted ethically with minimal ecological disturbance.",
    features: [
      "Mandatory environmental compliance audits for primary steel and chemical mills",
      "Zero procurement from suppliers with hazardous chemical runoff or deforestation",
      "Full supply chain transparency and mill test traceability from ingot to site",
    ],
  },
  {
    icon: Recycle,
    title: "Circular Industrial Materials & Recycling",
    desc: "Promoting circular economy principles through 100% recyclable structural steel, reconditioned heavy machinery buy-back programs, and metal scrap recovery.",
    features: [
      "Supplying electric arc furnace (EAF) steel manufactured with 85%+ recycled scrap",
      "Refurbishment and life-extension programs for heavy industrial earthmoving plants",
      "Facilitating closed-loop industrial metal and polymer recycling for client factories",
    ],
  },
  {
    icon: Package,
    title: "Sustainable Industrial Packaging Logistics",
    desc: "Eliminating single-use plastics and non-biodegradable packing materials in bulk freight transit, replacing them with returnable steel crates and reusable timber dunnage.",
    features: [
      "FSC-certified timber pallets and returnable steel transport containers",
      "Bio-based protective anti-corrosion barrier papers and recyclable plastic wrapping",
      "Optimized freight routing reducing total diesel fuel emissions per delivered ton",
    ],
  },
];

export default function MaxPakSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <MaxPakNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Industrial Procurement &amp; ESG</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Green Industrial Sourcing For A <span style={{ color: theme.green }}>Sustainable Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Max Pak Corporation, industrial excellence and environmental stewardship go hand-in-hand. Through energy-efficient IE4 machinery, ISO 14001 supply chain vetting, circular steel recycling, and sustainable packaging logistics, we help clients build cleaner, greener industrial enterprises.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-pak-corrpration/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Green Sourcing Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-pak-corrpration/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Executed Projects</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxpak_hero_industrial.svg"
                  alt="Sustainable Industrial Sourcing and Environmental Supply Chain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091424]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#16A34A]">
                      ISO 14001 &amp; Eco-Design Aligned
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      IE4 Energy Efficiency · Recycled Steel · Sustainable Freight
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
                  className="mp-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
            <SectionLabel center>Responsible Procurement Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Industrial Trading</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Energy-efficient machinery, environmentally audited steel mills, circular metal recycling, and eco-friendly freight packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="mp-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
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

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#16A34A]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                ADVANCE YOUR INDUSTRIAL FACILITY TOWARDS ISO 14001 &amp; 50001
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner In Green Industrial Procurement
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full lifecycle energy audits, low-emission machinery alternatives, and certified recycled steel options.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Green Scoping</span>
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

      <MaxPakFooter />
    </main>
  );
}
