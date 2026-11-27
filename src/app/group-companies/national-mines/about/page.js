"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Award,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Leaf,
  ShieldCheck,
  FlaskConical,
  Truck,
  Eye,
  Layers,
  MapPin,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  NationalMinesTeamSection,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Mining\nExcellence", icon: Award },
  { value: "50+", label: "Exploration &\nMine Leases", icon: Mountain },
  { value: "5M+", label: "Tons of Minerals\nProcessed", icon: Truck },
  { value: "500+", label: "Geologists &\nEngineers", icon: Users },
  { value: "99%", label: "Safety & ESG\nCompliance", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Operational Safety First",
    desc: "Uncompromising adherence to ISO 45001 zero-harm mining protocols, worker PPE standards, and automated geotechnical slope radar monitoring.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "Progressive bench reclamation, dry-stack tailings filtration, and 92% closed-loop process water recycling across arid concessions.",
  },
  {
    icon: FlaskConical,
    title: "High-Purity Beneficiation",
    desc: "Advanced metallurgical testing, diamond core fire assays, and automated froth flotation delivering SGS-certified export mineral grades.",
  },
  {
    icon: Target,
    title: "Transparent Sourcing",
    desc: "100% licensed provincial mining concessions with ethical chain-of-custody documentation from pithead to Gwadar & Karachi ports.",
  },
];

const OPERATIONAL_EXPERTISE = [
  {
    title: "Heavy Open-Pit & Underground Fleet",
    desc: "Operating 100-ton rigid haul trucks, electric hydraulic excavators, rotary blast drills, and subterranean room-and-pillar mining headers.",
    icon: Truck,
  },
  {
    title: "Geotechnical & GSP-Aligned Mapping",
    desc: "Real-time radar slope stability monitoring, 3D JORC block deposit modeling, and hyperspectral geological surveys across Pakistan.",
    icon: Mountain,
  },
  {
    title: "Modern Beneficiation & Flotation Plants",
    desc: "Multi-stage crushing, SAG ball milling circuits, froth flotation cells, and induction smelting furnaces yielding export concentrates.",
    icon: FlaskConical,
  },
  {
    title: "Certified Geochemical Laboratories",
    desc: "On-site and central accredited assay facilities equipped with XRF spectrometers, ICP-MS analyzers, and precious metal fire assay furnaces.",
    icon: Layers,
  },
];

const PAKISTAN_FOOTPRINT = [
  {
    province: "Balochistan",
    belts: "Chagai Copper-Gold Arc (Reko Diq & Saindak corridor), Muslim Bagh Chromite, Khuzdar Lead-Zinc, Chagai & Ziarat Onyx",
  },
  {
    province: "Punjab",
    belts: "Khewra & Salt Range Himalayan Pink Rock Salt (1B+ tonnes), Chiniot & Kalabagh Iron Ore, Margalla Limestone, Mianwali Silica",
  },
  {
    province: "Sindh",
    belts: "Thar Lignite Coalfield (175B+ tonnes energy basin), Lakhra Coal, Nagar Parkar Royal Pink Granite & Port Qasim Export Hub",
  },
  {
    province: "Khyber Pakhtunkhwa & North",
    belts: "Kohat Crystalline Gypsum, Malakand Chromite, Mohmand Marble, Mansehra Granite & Swat Emerald Gemstone Corridors",
  },
];

export default function NationalMinesAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Corporate Profile</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14] mb-5" style={{ color: theme.navy }}>
                Unlocking Pakistan&apos;s Rich <span style={{ color: theme.gold }}>Mineral Wealth</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed mb-7 max-w-2xl" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd (NMC) is a premier natural resource exploration, extraction, and metallurgical processing enterprise under Roy &amp; Sons Group. Backed by GSP-aligned geological science, heavy mining fleets, and strict ESG governance, we connect Pakistan&apos;s vast mineral corridors to domestic industry and global export markets.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/group-companies/national-mines/minerals"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-sm transition-all duration-300 hover:brightness-110 cursor-pointer"
                  style={{ backgroundColor: theme.gold }}
                >
                  <span>Explore Minerals Portfolio</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            {/* Right Visual — Unique Engineering Hero Photo */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[330px] sm:h-[390px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/construction-1.jpg"
                  alt="National Mines Senior Engineering & Project Planning Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/85 via-transparent to-transparent flex items-end p-5">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: theme.gold }}>
                      Roy &amp; Sons Group Company
                    </p>
                    <p className="text-sm font-semibold" style={{ color: theme.navy }}>
                      Established 20+ Years · Lahore Headquarters &amp; Nationwide Leases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Statistics Counter */}
      <section className="py-9 sm:py-11 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {ABOUT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.gold}18` }}>
                    <Icon size={22} style={{ color: theme.gold }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold tracking-wide uppercase whitespace-pre-line leading-snug" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two-Column Corporate Layout: Company Introduction */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Visual — Unique Heavy Fabrication / Maintenance Facility */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxpak/hero_heavy_industry.jpg"
                  alt="National Mines Heavy Industrial Equipment & Maintenance Engineering Hub"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/88 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: theme.goldLight }}>
                      Heavy Industrial Backbone
                    </p>
                    <p className="text-base sm:text-lg font-bold">Over 5 Million Tons of Certified Ore Processed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Company Overview</SectionLabel>
              <SectionHeading className="mb-4">
                Built on Engineering Excellence &amp; Geological Science
              </SectionHeading>

              <p className="text-base sm:text-[17px] font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd serves as the strategic minerals and natural resources wing under Roy &amp; Sons. Operating across Pakistan&apos;s 600,000+ sq km prospective mineral landscape, we align with the Special Investment Facilitation Council (SIFC) vision to transition Pakistan from raw-ore extraction to localized refining and high-value mineral exports.
              </p>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Our end-to-end capabilities span satellite GIS exploration, wireline diamond core drilling up to 1,500m, high-tonnage open-pit excavation, automated froth flotation concentration, and accredited SGS/XRF purity verification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">ISO 45001 Certified Safety</span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">92% Process Water Recycled</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-mines/services"
                className="mine-link-arrow cursor-pointer w-fit"
              >
                <span>View our core mining capabilities</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership & Technical Mining Team Section (with expanded discipline stats) */}
      <NationalMinesTeamSection
        title="Executive Leadership & Technical Mining Team"
        subtitle="Led by Roy & Sons Group's Board of Directors alongside seasoned mining engineers, economic geologists, and metallurgical specialists driving responsible extraction across Pakistan."
        bgClass="bg-white"
        showDisciplines={true}
      />

      {/* Pakistan Provincial Mineral Footprint */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Nationwide Geological Presence</SectionLabel>
            <SectionHeading center className="mb-3">
              Operating Across Pakistan&apos;s Premier Mineral Provinces
            </SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Aligned with the Geological Survey of Pakistan (GSP) and Provincial Mines &amp; Minerals Concession Rules across all four provinces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PAKISTAN_FOOTPRINT.map((item) => (
              <div
                key={item.province}
                className="mine-card rounded-2xl p-6 bg-white flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${theme.gold}18` }}
                >
                  <MapPin size={22} style={{ color: theme.gold }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1.5" style={{ color: theme.navy }}>
                    {item.province}
                  </h3>
                  <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                    {item.belts}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Strategic Purpose</SectionLabel>
            <SectionHeading center className="mb-3">Mission &amp; Corporate Vision</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal" style={{ color: theme.textMuted }}>
              Guiding our operations toward responsible extraction, localized value addition, and international metallurgical benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="mine-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.gold}18` }}>
                  <Target size={24} style={{ color: theme.gold }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To discover, extract, and beneficiate Pakistan&apos;s natural mineral wealth with industrial efficiency, modern geological science, and strict ESG compliance—supplying the certified raw materials that power national infrastructure, steel, cement, and export resilience.
                </p>
              </div>
            </div>

            <div className="mine-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}12` }}>
                  <Eye size={24} style={{ color: theme.navy }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To stand as South Asia&apos;s leading benchmark in sustainable mining and metallurgy, recognized globally for ethical mineral sourcing, SIFC-aligned refining technology, zero-harm workplace safety, and enduring rural community uplift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Our Principles</SectionLabel>
            <SectionHeading center className="mb-3">Core Operational Values</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal" style={{ color: theme.textMuted }}>
              Foundational standards that govern our concessions, engineering teams, and global buyer commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.gold}18` }}>
                      <Icon size={21} style={{ color: theme.gold }} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 leading-snug" style={{ color: theme.navy }}>
                      {val.title}
                    </h4>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Expertise */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Technical Infrastructure</SectionLabel>
            <SectionHeading center className="mb-3">Operational Expertise &amp; Machinery</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal" style={{ color: theme.textMuted }}>
              Heavy industrial equipment, automated beneficiation circuits, and accredited laboratory assay infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPERATIONAL_EXPERTISE.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={21} style={{ color: theme.navy }} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 leading-snug" style={{ color: theme.navy }}>
                      {exp.title}
                    </h4>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0B1B2B] text-white" style={{ borderColor: theme.borderDark }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Commercial Commodity Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Work With National Mines Corporation
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-xl text-slate-200 leading-relaxed">
                Whether you require bulk industrial mineral allocations, SGS assay certificates, or joint venture exploration agreements, connect with our commercial desk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Contact Commercial Desk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
