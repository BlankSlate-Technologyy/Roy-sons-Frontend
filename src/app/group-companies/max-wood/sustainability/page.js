"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  TreePine,
  Recycle,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxWoodShared";

const SUSTAINABILITY_STATS = [
  { value: "1500+", label: "Eco-Friendly Interior\nProjects Delivered", icon: Home },
  { value: "100%", label: "FSC Certified Legal\nTimber Chain-of-Custody", icon: TreePine },
  { value: "0%", label: "Formaldehyde Emissions\nIndoor Air Quality Standard", icon: ShieldCheck },
  { value: "25+", label: "Years of Sustainable\nForestry Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: TreePine,
    title: "100% FSC-Certified Chain-of-Custody Timber",
    desc: "We exclusively procure solid hardwoods and natural veneers from responsibly managed forests certified by the Forest Stewardship Council (FSC), preventing illegal deforestation.",
    features: [
      "Full digital chain-of-custody verification tracking logs from plantation to final furniture",
      "Prioritizing fast-replenishing certified timber species including Sheesham and Oak",
      "Zero procurement of endangered tropical hardwoods from unmanaged rainforests",
    ],
  },
  {
    icon: Leaf,
    title: "Low-VOC & Non-Toxic Italian Finishes",
    desc: "Protecting indoor residential and corporate air quality by utilizing non-toxic water-borne polyurethane lacquers and natural organic beeswax and linseed oil coatings.",
    features: [
      "Zero-formaldehyde (E0 grade) adhesives used in all panel and veneer lamination",
      "Low-VOC and heavy-metal-free Italian polyurethane stains and clear coats",
      "Safe, hypoallergenic living environments for residential bedrooms and children's nurseries",
    ],
  },
  {
    icon: Recycle,
    title: "Zero-Waste CNC Nesting & Timber Upcycling",
    desc: "Our automated 5-axis CNC routing systems utilize algorithmic nesting software that maximizes board yield and reduces raw timber cutting waste by up to 28%.",
    features: [
      "Algorithmic digital part nesting minimizing solid hardwood board scrap",
      "Precision recovery of wood trimmings upcycled into artisanal parquet flooring and inlays",
      "Wood shavings and sawdust collected via centralized dust extraction cyclones",
    ],
  },
  {
    icon: Hammer,
    title: "Biomass Kiln Power & Clean Workshop Heating",
    desc: "Collected clean sawdust and hardwood shavings are briquetted to fuel our automated timber seasoning kilns, eliminating fossil gas consumption in manufacturing.",
    features: [
      "Closed-loop biomass briquetting fueling lumber drying dehumidification chambers",
      "Solar rooftop PV panels powering CNC workshop machines and dust extraction units",
      "Heirloom furniture design philosophy ensuring 50+ year product lifecycle durability",
    ],
  },
];

export default function MaxWoodSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Timber &amp; Eco-Woodcraft</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
                Sustainable Woodcraft For A <span style={{ color: theme.primary }}>Greener Interior Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Max Wood Corporation, respect for nature is woven into every joint. Through 100% FSC-certified timber procurement, non-toxic low-VOC Italian finishes, algorithmic CNC zero-waste nesting, and biomass kiln energy, we craft timeless interiors that protect both living spaces and global forests.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-wood/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Request Eco-Timber Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-wood/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkWood }}
                >
                  <span>Explore Landmark Fitouts</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-amber-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxwood_hero_craft.svg"
                  alt="Sustainable Timber Forestry and Master Joinery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#F4C28D]">
                      FSC Certified Stewardship
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkWood }}>
                      Zero-Formaldehyde E0 · Non-Toxic Finishes · Solar Powered
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
                  className="mw-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.darkWood }}>
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
            <SectionLabel center>Sustainable Craftsmanship Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Woodcraft</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Responsible timber harvesting, healthy non-toxic indoor air standards, and closed-loop workshop material reuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="mw-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.darkWood }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(232, 223, 213, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#D4A373]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                CREATE HEALTHY &amp; SUSTAINABLE INTERIOR ENVIRONMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Switch To Certified Eco-Hardwood Furniture
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full FSC timber certification documentation, zero-formaldehyde indoor air testing data, and plant-based finish options.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Eco Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
