"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trees,
  Globe,
  Droplets,
  Sun,
  Wind,
  Layers,
  Compass,
  HardHat,
  Sprout,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DesertDevShared";

const DESERT_SERVICES = [
  {
    id: "desert-rehabilitation",
    title: "Scientific Desert Rehabilitation & Dune Stabilization",
    subtitle: "Mechanical Checkerboards, Biological Crusts & Windbreaks",
    desc: "Arresting desert expansion through engineered sand dune fixation, mechanical clay checkerboards, and fast-growing native botanical stabilization.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Dune Stabilization",
    icon: Sprout,
    deliverables: [
      "Straw and geo-textile checkerboard grids preventing mobile dune sand drift",
      "Application of natural bio-crust microbial inoculants to solidify topsoil",
      "Establishment of multi-tier peripheral desert shelterbelts against dust storms",
      "Continuous satellite LiDAR monitoring of dune migration velocity and morphology",
    ],
  },
  {
    id: "land-reclamation",
    title: "Arid Land Reclamation & Soil Regeneration",
    subtitle: "Biochar Inoculation, Salinity Leaching & Organic Enrichment",
    desc: "Transforming hypersaline, barren arid soils into productive agricultural and commercial development acreage through scientific soil remediation.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Soil Reclamation",
    icon: Layers,
    deliverables: [
      "Deep gypsum subsoiling and gypsum injection to displace toxic sodium ions",
      "Biochar and mycorrhizal fungal blending boosting soil organic carbon (SOC)",
      "High-efficiency subsoil drainage systems preventing waterlogging and salt accumulation",
      "Precision soil fertility mapping utilizing drone multispectral NDVI imagery",
    ],
  },
  {
    id: "sustainable-infrastructure",
    title: "Sustainable Arid Infrastructure & Earthworks",
    subtitle: "Thermal-Resilient Roadways, Flood Diversion & Eco-Bettlements",
    desc: "Engineering heavy civil works, access roads, eco-friendly modular structures, and flash-flood wadi diversion channels optimized for harsh desert climates.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Arid Infrastructure",
    icon: HardHat,
    deliverables: [
      "Polymer-modified thermal asphalt paving resisting extreme 55°C surface temperatures",
      "Wadi stone-gabion check dams and diversion canals capturing intermittent flash floods",
      "Off-grid desert research stations and eco-lodges with passive solar cooling",
      "Heavy earthmoving and terrain leveling for industrial and solar energy parks",
    ],
  },
  {
    id: "water-management",
    title: "Deep Aquifer & Solar Drip Water Management",
    subtitle: "Subsurface Drip, Solar Deep Wells & Aquifer Recharge",
    desc: "Comprehensive arid water hydrology covering solar-powered deep tube wells, brackish water desalination, and zero-evaporation subsurface drip systems.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Water Hydrology",
    icon: Droplets,
    deliverables: [
      "Subsurface pressure-compensated drip irrigation delivering water directly to rootzones",
      "Solar PV-powered deep submersible pumps extracting from 800+ ft deep aquifers",
      "Containerized solar brackish water reverse osmosis (BWRO) desalination units",
      "Managed Aquifer Recharge (MAR) injection wells replenishing declining water tables",
    ],
  },
  {
    id: "afforestation",
    title: "Large-Scale Afforestation & Green Belts",
    subtitle: "Native Acacia, Prosopis, Tamarisk & Olive Plantation",
    desc: "Designing and planting mega-scale green wall corridors and bio-diverse forest belts to sequester carbon, restore wildlife habitats, and cool microclimates.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Afforestation",
    icon: Trees,
    deliverables: [
      "Automated drone seed ball dispersion and nursery sapling transplanting protocols",
      "Selection of hyper-drought-tolerant native tree species (Kikar, Kandi, Ber, Olive)",
      "Smart IoT moisture sensor networks dynamically adjusting automated watering",
      "Verified carbon offset credits registration under international Gold Standard / VCS",
    ],
  },
  {
    id: "renewable-energy",
    title: "Desert Renewable Solar & Wind Development",
    subtitle: "Utility-Scale PV, Agrivoltaics & Off-Grid Wind Microgrids",
    desc: "Capitalizing on high desert solar irradiation to develop utility-scale photovoltaic farms, agrivoltaic dual-use land systems, and wind energy arrays.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Clean Energy",
    icon: Sun,
    deliverables: [
      "Turnkey civil and electrical EPC for 50MW+ utility-scale desert solar PV farms",
      "Agrivoltaic raised-panel structures allowing shade-tolerant crop farming underneath",
      "Dust-resistant automated waterless robotic solar panel cleaning systems",
      "Hybrid solar-wind-battery microgrids powering remote desert community centers",
    ],
  },
];

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Rehabilitation Projects", icon: Globe },
  { value: "5M+", label: "Trees Planted", icon: Trees },
  { value: "300+", label: "Specialists & Engineers", icon: Users2 },
];

export default function DesertDevServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = DESERT_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Environmental Engineering &amp; Arid Land Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
                Ecological Restoration &amp; <span style={{ color: theme.primary }}>Arid Engineering Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From scientific sand dune stabilization and soil reclamation to solar subsurface drip irrigation, 5M+ tree mega-afforestation, and desert renewable energy parks, Desert Development &amp; Rehabilitation transforms barren lands into sustainable ecosystems.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/desert-development/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkGreen }}
                >
                  <span>Request Project Scoping</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev_hero_rehab.svg"
                  alt="Desert Development Environmental Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.emerald }}>
                      Environmental Engineering Divisions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkGreen }}>
                      Dune Fixation · Solar Drip · Afforestation Green Belts
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
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="dd-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.darkGreen }}>
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

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Desert Engineering Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in full compliance with UNEP guidelines, UNCCD anti-desertification protocols, and ISO 14001 environmental management.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Rehabilitation, Reclamation, Infrastructure, Water, Afforestation, Solar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="dd-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B4D3E]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primary}10` }}>
                          <Icon size={20} style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.darkGreen }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#2D7D62]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(212, 229, 221, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.darkGreen }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#2D7D62]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/desert-development/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.darkGreen }}
                    >
                      <span>Inquire About This Division</span>
                      <ArrowRight size={14} />
                    </Link>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#2D7D62]">
                TURNKEY ARID LAND RESTORATION &amp; REHABILITATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Transform Degraded Deserts Into Productive Green Assets
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior environmental scientists and irrigation engineers to initiate topographical surveys, hydrology assessments, and sustainable afforestation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Project Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
