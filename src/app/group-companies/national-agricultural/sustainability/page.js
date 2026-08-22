"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Droplets,
  Sun,
  Sprout,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Wheat,
  Tractor,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalAgriculturalShared";

const SUSTAINABILITY_STATS = [
  { value: "50%", label: "Irrigation Water\nSaved via Drip", icon: Droplets },
  { value: "100%", label: "Solar-Powered\nFarm Tube-Wells", icon: Sun },
  { value: "50K+", label: "Tons Organic\nCompost Produced", icon: Sprout },
  { value: "0%", label: "Toxic Chemical\nRunoff", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Droplets,
    title: "Precision Water Management",
    desc: "Pakistan faces severe water scarcity. We implement computerized drip systems, micro-sprinklers, and laser land leveling that reduce field water evaporation by up to 50% while boosting crop yield.",
    features: [
      "Subsurface drip irrigation lines with zero surface evaporation",
      "Soil moisture capacitive sensors providing real-time irrigation data",
      "Rainwater catchment reservoirs lined with impermeable geomembranes",
    ],
  },
  {
    icon: Sprout,
    title: "Regenerative Soil Stewardship",
    desc: "Restoring depleted soil organic carbon through balanced organic compost, crop residue mulching, legume cover cropping, and biological nitrogen fixation.",
    features: [
      "Zero-tillage and minimum-tillage conservation techniques",
      "Conversion of livestock manure into rich bio-organic humus",
      "Natural biological pest control reducing synthetic insecticide use",
    ],
  },
  {
    icon: Sun,
    title: "Clean Solar Farm Energy & Biogas",
    desc: "Replacing diesel generators with high-efficiency bifacial solar pumping systems and converting cattle dairy waste into renewable biogas for farm energy independence.",
    features: [
      "Off-grid and grid-tied solar tube-wells operating with zero fuel costs",
      "Anaerobic dairy manure biogas digesters generating clean electricity",
      "Solar-powered cold storage units keeping fruit and vegetables fresh",
    ],
  },
  {
    icon: Leaf,
    title: "Agroforestry & Biodiversity",
    desc: "Integrating native tree shelterbelts along farm perimeters to prevent wind erosion, create microclimates, and protect natural pollinator species essential for crop fertilization.",
    features: [
      "Native tree planting acting as natural windbreaks and bird sanctuaries",
      "Pollinator-friendly flowering borders promoting honeybee colonies",
      "Erosion control along riverbanks and irrigation canal bunds",
    ],
  },
];

export default function NationalAgriculturalSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A5C2A] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Environmental Responsibility</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Climate-Resilient &amp; <span style={{ color: theme.accent }}>Sustainable Agriculture</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Securing Pakistan&apos;s agricultural future requires harmonious coexistence with nature. Through water conservation, regenerative soil management, solar irrigation, and agroforestry, we ensure productive farmlands for generations to come.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Inquire About Green Agritech</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-agricultural/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>About Our Vision</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/agri_hero_farm.svg"
                  alt="Sustainable Agriculture and Water Conservation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#E8A800]">
                      Climate-Smart Farming
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      50% Water Savings · 100% Solar-Powered Irrigation
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
                  className="nac-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.primary }}>
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
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Agriculture</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Practical technologies designed to protect natural resources while boosting farm output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="nac-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.primary }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(212, 232, 208, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#E8A800]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#E8A800]">
                CLEAN ENERGY ON FARMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Upgrade Your Farm To Solar Drip Irrigation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Cut electricity and diesel costs to zero while doubling crop uniformity with automated solar drip irrigation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Solar Drip Quote</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
