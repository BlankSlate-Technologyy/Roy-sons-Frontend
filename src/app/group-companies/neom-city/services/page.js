"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HardHat,
  Building2,
  Factory,
  Trees,
  Zap,
  Leaf,
  Cpu,
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
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NeomCityShared";

const URBAN_SERVICES = [
  {
    id: "smart-city-planning",
    title: "Smart City Master Planning & GIS",
    subtitle: "Digital Twins, Parametric Land Zoning & 3D Spatial Modeling",
    desc: "Comprehensive master planning and spatial zoning for greenfield and brownfield smart cities using GIS analytics, drone photogrammetry, and demographic algorithms.",
    image: "/neomcity_hero_urban.svg",
    tag: "Master Planning",
    icon: Compass,
    deliverables: [
      "High-precision GIS spatial mapping and parametric zoning ordinances",
      "Dynamic population growth, traffic density, and microclimate simulations",
      "Integrated 3D BIM digital twin master models for real-time asset tracking",
      "Regulatory approvals, EIA clearances, and public-private concession structuring",
    ],
  },
  {
    id: "urban-infrastructure",
    title: "Urban Infrastructure & Civil Works",
    subtitle: "Subterranean Utility Tunnels, Arterial Highways & Sponge Drainage",
    desc: "Turnkey civil engineering and construction of heavy urban infrastructure, deep utility corridors, climate-resilient stormwater networks, and multi-tier interchanges.",
    image: "/neomcity_hero_urban.svg",
    tag: "Civil Infrastructure",
    icon: HardHat,
    deliverables: [
      "Multi-utility common service duct tunnels housing power, fiber, gas, and water",
      "Sponge city stormwater management reservoirs and flood attenuation basins",
      "Post-tensioned concrete flyovers, grade-separated bridges, and underpasses",
      "High-durability pavement engineering for heavy commercial transit corridors",
    ],
  },
  {
    id: "commercial-development",
    title: "Commercial & Financial Districts",
    subtitle: "High-Rise Business Towers, Tech Hubs & Mixed-Use Promenades",
    desc: "Developing high-density commercial centers, international banking headquarters, luxury corporate suites, and smart retail ecosystems with integrated public plazas.",
    image: "/neomcity_hero_urban.svg",
    tag: "Commercial Districts",
    icon: Building2,
    deliverables: [
      "LEED Gold and Platinum certified commercial skyscraper architectural design",
      "Centralized district cooling plants saving 40% energy across high-rise clusters",
      "Smart multi-level automated car parking silos with EV fast charging bays",
      "Pedestrian-first shaded pedestrian skywalks and civic cultural plazas",
    ],
  },
  {
    id: "industrial-zones",
    title: "Special Economic Zones & Industrial Parks",
    subtitle: "Customs-Bonded Logistics Hubs & Heavy Manufacturing SEZs",
    desc: "Planning and building Special Economic Zones (SEZs), automated logistics hubs, dry ports, and heavy manufacturing clusters tailored for multi-national industries.",
    image: "/neomcity_hero_urban.svg",
    tag: "SEZ & Industrial",
    icon: Factory,
    deliverables: [
      "Heavy load-bearing industrial roads engineered for 40ft container convoys",
      "Dedicated 132kV grid substations and dual-fuel backup power generation",
      "Automated bonded warehousing, container freight stations, and cold storage",
      "Integrated industrial effluent treatment plants (ETP) meeting EPA limits",
    ],
  },
  {
    id: "smart-transportation",
    title: "Smart Transportation & Transit",
    subtitle: "Grade-Separated BRT, Autonomous EV Corridors & AI Traffic Signals",
    desc: "Engineering next-generation urban mobility networks, automated mass transit systems, electric bus charging depots, and synchronized adaptive traffic systems.",
    image: "/neomcity_hero_urban.svg",
    tag: "Smart Mobility",
    icon: Zap,
    deliverables: [
      "Dedicated grade-separated Bus Rapid Transit (BRT) and light rail corridors",
      "AI-synchronized adaptive traffic signals reducing commuter gridlock by 35%",
      "Universal electric vehicle (EV) ultra-fast charging highway charging plazas",
      "Automated automated number plate recognition (ANPR) and traffic surveillance",
    ],
  },
  {
    id: "digital-city-solutions",
    title: "Digital City Solutions & Microgrids",
    subtitle: "IoT Municipal Telemetry, Clean Solar Microgrids & Urban OS",
    desc: "Deploying high-speed city fiber networks, municipal IoT sensor arrays, centralized urban command centers, and net-zero solar microgrid integrations.",
    image: "/neomcity_hero_urban.svg",
    tag: "Urban Digital Twin",
    icon: Cpu,
    deliverables: [
      "Centralized Municipal Integrated Command and Control Centers (ICCC)",
      "City-wide gigabit fiber-to-the-premise (FTTP) and 5G small cell mesh network",
      "Smart water meters, automated leak detection, and streetlighting dimmers",
      "Rooftop solar PV and battery energy storage system (BESS) microgrid controls",
    ],
  },
];

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "150+", label: "Mega Developments", icon: Building2 },
  { value: "300+", label: "Urban Engineers", icon: Users2 },
  { value: "20+", label: "Cities Developed", icon: Compass },
];

export default function NeomCityServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = URBAN_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Urban Infrastructure &amp; Smart City Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Smart City Engineering &amp; <span style={{ color: theme.teal }}>Infrastructure Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From master planning and GIS spatial zoning to civil road networks, financial skyscraper districts, industrial SEZs, and AI digital twin governance, Neom City Corporation delivers future-proof urban excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/neom-city/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult Urban Engineers</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomcity_hero_urban.svg"
                  alt="Neom City Corporation Smart Urban Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.teal }}>
                      Smart Infrastructure Divisions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      GIS Planning · Civil Works · SEZs · Digital Twins
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
                  className="neom-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
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

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Urban Development Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered to international FIDIC, LEED Platinum, and ISO smart city quality benchmarks.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Master Planning, Civil Works, Commercial, SEZs, Mobility, IoT)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A2540] transition-all bg-white shadow-xs"
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
                  className="neom-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A2540]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.navy}10` }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navyDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#008080]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Division Deliverables &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#008080]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/neom-city/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#008080]">
                PUBLIC-PRIVATE PARTNERSHIPS &amp; CONCESSIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Transform Your Urban Development Project
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our master urban planners and civil engineering directors to structure your feasibility, master planning, and capital construction program.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/neom-city/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Planning Scoping</span>
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

      <NeomCityFooter />
    </main>
  );
}
