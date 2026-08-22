"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Tractor,
  Droplets,
  Leaf,
  FlaskConical,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users,
  ShieldCheck,
  Sprout,
  Sun,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalAgriculturalShared";

const AGRI_SERVICES = [
  {
    id: "agri-development",
    title: "Agricultural Development & Mechanization",
    subtitle: "Precision Laser Leveling, High-Tech Tractors & Harvesters",
    desc: "Modernizing crop production through mechanized farm equipment, GPS-guided autosteer tractors, pneumatic seed drills, and automated combine harvesters that boost farm efficiency by 40%.",
    image: "/agri_hero_farm.svg",
    tag: "Farm Mechanization",
    icon: Tractor,
    deliverables: [
      "GPS satellite-guided laser land leveling reducing irrigation loss",
      "Modern pneumatic precision seed planting and fertilizing drills",
      "High-capacity grain combine harvesting fleets and threshers",
      "Farm equipment leasing and technical operator training",
    ],
  },
  {
    id: "dairy-development",
    title: "Dairy Development & Cold Chain Hubs",
    subtitle: "Automated Milking Parlors & Rapid Milk Chilling Networks",
    desc: "Turnkey engineering of commercial dairy farms, herringbone milking parlors, rapid bulk milk coolers, and temperature-controlled refrigerated transport fleets.",
    image: "/agri_dairy_livestock.svg",
    tag: "Dairy Infrastructure",
    icon: Building2,
    deliverables: [
      "Automated electronic milking parlors with yield metering",
      "Direct-expansion bulk milk chillers preserving 4°C hygiene",
      "Total Mixed Ration (TMR) feed mixers and corn silage packing",
      "Village-level milk collection centers (MCC) with digital fat testing",
    ],
  },
  {
    id: "irrigation",
    title: "Smart Irrigation & Water Systems",
    subtitle: "Center-Pivot Sprinklers & Solar-Powered Drip Networks",
    desc: "Designing and installing high-efficiency pressurized irrigation networks that cut agricultural water consumption by 50% while delivering targeted fertigation directly to plant roots.",
    image: "/agri_hero_farm.svg",
    tag: "Water Management",
    icon: Droplets,
    deliverables: [
      "Center-pivot automated circular irrigation for large acreages",
      "Subsurface and surface pressure-compensated drip irrigation",
      "Solar-powered submersible tube-wells with automatic pressure valves",
      "Geotextile lined water storage ponds and telemetry soil moisture sensors",
    ],
  },
  {
    id: "livestock",
    title: "Livestock Management & Breeding Genetics",
    subtitle: "High-Yield Genetic Improvement & Veterinary Healthcare",
    desc: "Comprehensive animal husbandry programs featuring elite Holstein-Friesian and pure Sahiwal genetics, artificial insemination, and veterinary health management.",
    image: "/agri_dairy_livestock.svg",
    tag: "Animal Husbandry",
    icon: Leaf,
    deliverables: [
      "Pedigree sexed semen artificial insemination and embryo transfer",
      "Preventative herd vaccination schedules and mastitis control",
      "Balanced nutritional silage formulas and mineral lick supplements",
      "RFID digital ear-tagging and computerized herd health tracking",
    ],
  },
  {
    id: "seed-tech",
    title: "Seed Technology & Crop Nutrition",
    subtitle: "Certified Hybrid Seeds & Organic Bio-Fertilizers",
    desc: "Supplying certified drought-tolerant and pest-resistant hybrid seed varieties for wheat, cotton, maize, rice, and canola, coupled with organic bio-fertilizer formulations.",
    image: "/agri_hero_farm.svg",
    tag: "Crop Nutrition",
    icon: FlaskConical,
    deliverables: [
      "High-germination (>95%) certified hybrid wheat and maize seeds",
      "Organic liquid humic acid and foliar micronutrient blends",
      "Integrated Pest Management (IPM) reducing synthetic chemical spray",
      "Soil laboratory N-P-K nutrient testing and recommendations",
    ],
  },
  {
    id: "consultancy",
    title: "Agribusiness Advisory & Farm Setup",
    subtitle: "Turnkey Corporate Farm Planning & Feasibility Audits",
    desc: "Strategic technical consultancy for corporate investors, institutional landholders, and government agricultural bodies looking to establish profitable farming enterprises.",
    image: "/agri_dairy_livestock.svg",
    tag: "Agri Consultancy",
    icon: Wheat,
    deliverables: [
      "Comprehensive bankable farm business plans and financial modeling",
      "Climate-controlled tunnel greenhouse design and hydroponics",
      "Crop yield benchmarking, harvest logistics, and market linkages",
      "Organic farm certifications and export quality compliance",
    ],
  },
];

const SERVICE_STATS = [
  { value: "1M+", label: "Acres Supported", icon: Wheat },
  { value: "500+", label: "Farm Projects", icon: Tractor },
  { value: "50%", label: "Water Savings", icon: Droplets },
  { value: "10K+", label: "Active Farmers", icon: Users },
];

export default function NationalAgriculturalServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = AGRI_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1A5C2A] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Agribusiness &amp; Dairy Services</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Comprehensive Solutions For <span style={{ color: theme.accent }}>Modern Agriculture</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From precision farm mechanization and solar drip irrigation to high-yield dairy breeding and certified hybrid seed technologies, we empower agricultural enterprises at every stage of the value chain.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore All 6 Services</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>Request Custom Farm Plan</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/agri_hero_farm.svg"
                  alt="Precision Smart Agriculture and Pivot Irrigation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A5C2A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.accent }}>
                      Turnkey Agribusiness Solutions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      Mechanized Farming · Smart Irrigation · Dairy Hubs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
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
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Agribusiness Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Delivering high-performance farm technologies, crop genetics, and livestock infrastructure.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Irrigation, Dairy, Mechanization)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1A5C2A] transition-all bg-white shadow-xs"
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
                  className="nac-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.primary, borderColor: theme.border }}>
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
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.primary }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(212, 232, 208, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.primary }}>
                          Key Technical Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.accent }} />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/national-agricultural/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>Inquire About This Service</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.accent }}>
                COMMERCIAL FARM &amp; IRRIGATION SETUP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Looking To Establish A High-Yield Agricultural Estate?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our agronomy and farm engineering specialists to design tailored crop and dairy setups.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Farm Quotation</span>
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
