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
  ShieldCheck,
  Shield,
  Zap,
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
    icon: Sprout,
    title: "Sustainable Agriculture",
    subtitle: "Precision Agronomy & Natural Crop Rotation",
    desc: "Implementing precision crop rotation schedules, cover cropping, and biological pest management that optimize crop productivity while safeguarding long-term agro-ecosystem vitality.",
    features: [
      "Precision seed singulation and calibrated seed placement",
      "Biological crop protection reducing reliance on synthetic pesticides",
      "Integrated crop-livestock farming cycles maximizing nutrient efficiency",
    ],
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    subtitle: "High-Efficiency Solar Drip & Laser Grading",
    desc: "Addressing water scarcity across Pakistan's agricultural belts through precision laser leveling, subsurface drip lines, and geomembrane-lined rainwater collection ponds.",
    features: [
      "Subsurface and pressure-compensated drip lines cutting water demand by 50%",
      "Precision GPS laser grading eliminating irrigation water pooling and run-off",
      "IoT capacitive soil moisture monitoring for scheduled automated watering",
    ],
  },
  {
    icon: Leaf,
    title: "Soil Health",
    subtitle: "Regenerative Soil Care & Bio-Nutrition",
    desc: "Restoring depleted soil organic carbon and microflora through humic bio-fertilizers, organic cattle compost, subsoil decompaction, and regular on-site soil assays.",
    features: [
      "Application of organic compost revitalizing beneficial mycorrhizal fungi",
      "Subsoil chisel plowing shattering dense subsurface hardpans",
      "Scientific 8-parameter mobile soil testing preventing chemical over-application",
    ],
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    subtitle: "Zero-Emission Solar Pumping & Dairy Biogas",
    desc: "Replacing diesel generators with high-efficiency bifacial solar pumping systems and converting livestock manure into clean renewable biogas for rural energy security.",
    features: [
      "Off-grid MPPT variable frequency solar tubewells with zero diesel fuel costs",
      "Commercial anaerobic dairy manure biogas digesters generating clean power",
      "Solar-assisted milk chillers preserving cold chain integrity during grid outages",
    ],
  },
  {
    icon: Shield,
    title: "Environmental Protection",
    subtitle: "Biodiversity Reserves & Agroforestry Shelterbelts",
    desc: "Safeguarding natural biodiversity through indigenous tree shelterbelts along farm perimeters, riverbank erosion stabilization, and protection of beneficial pollinator colonies.",
    features: [
      "Native tree windbreaks preventing wind erosion and protecting microclimates",
      "Flowering hedgerows and buffer zones preserving pollinator honeybee habitats",
      "Strict organic stewardship preventing agricultural chemical runoff into water tables",
    ],
  },
];

export default function NationalAgriculturalSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Environmental Responsibility</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Climate-Resilient &amp; <span style={{ color: theme.primaryMid }}>Sustainable Agriculture</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                Securing Pakistan&apos;s agricultural future requires harmonious coexistence with nature. Through water conservation, regenerative soil management, clean solar energy, and biodiversity protection, we ensure productive farmlands for generations to come.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#pillars-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryMid }}
                >
                  <span>Explore 5 Core Pillars</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Inquire About Green Agritech</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border agri-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev/arid_agriculture.jpg"
                  alt="Sustainable Agriculture and Water Conservation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.accent }}>
                      100% Sustainable Operations
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Solar Pumping · Soil Stewardship · Water Recycling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SUSTAINABILITY_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="agri-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.primaryMid}10` }}>
                    <Icon size={20} style={{ color: theme.primaryMid }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 Core Pillars Section */}
      <section id="pillars-section" className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Core Environmental Framework</SectionLabel>
            <SectionHeading center className="mb-3">Our 5 Sustainability Pillars</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Engineered strategies to build climate resilience, protect natural water systems, and restore agrarian vitality across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUSTAINABILITY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="agri-card rounded-2xl p-6 flex flex-col justify-between bg-white"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                        <Icon size={18} style={{ color: theme.primaryMid }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider block" style={{ color: theme.accent }}>
                          Pillar 0{idx + 1}
                        </span>
                        <h3 className="text-[17px] font-semibold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[11px] font-medium tracking-wide mb-2.5" style={{ color: theme.primaryMid }}>
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13px] font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: theme.navy }}>
                        Key Commitments:
                      </p>
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                          <span className="text-xs font-normal text-slate-700 leading-snug">{feat}</span>
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

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Clean Agricultural Transition
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Transition Your Farm to Climate-Smart Practices
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our environmental engineers to calculate water savings, solar ROI, and organic certification pathways.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                <span>Consult Agronomists</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
