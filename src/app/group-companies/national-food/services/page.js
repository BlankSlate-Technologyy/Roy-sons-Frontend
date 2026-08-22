"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Hotel,
  Building2,
  Truck,
  Package,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NFSShared";

const FOOD_SERVICES = [
  {
    id: "corporate-catering",
    title: "Institutional & Corporate Cafeteria Operations",
    subtitle: "Turnkey Corporate Dining, Executive Buffets & Live Kitchens",
    desc: "Managing full-scale employee dining halls, executive board room luncheons, and modern grab-and-go food kiosks with cashless POS ordering.",
    image: "/nfs_hero_catering.svg",
    tag: "Corporate Dining",
    icon: UtensilsCrossed,
    deliverables: [
      "Multi-cuisine daily rotating menus with balanced proteins, grains, and fresh salad bars",
      "Executive boardroom fine dining catering and corporate banquet services",
      "Cashless mobile POS integration and employee meal voucher management",
      "Dedicated on-site chefs, service staff, and daily kitchen deep-sanitization",
    ],
  },
  {
    id: "healthcare-nutrition",
    title: "Hospital & Healthcare Clinical Nutrition",
    subtitle: "Dietitian-Approved Therapeutic Meals & Sterile Isolation Prep",
    desc: "Preparing customized, disease-specific meals for hospital in-patients, ICU patient nutrition, and 24/7 hospital staff and visitor cafeterias.",
    image: "/nfs_hero_catering.svg",
    tag: "Healthcare Nutrition",
    icon: Hotel,
    deliverables: [
      "Diabetic, renal, low-sodium, cardiovascular, and soft therapeutic meal preparation",
      "Strict cross-contamination prevention in sterile clinical preparation kitchens",
      "Thermal insulated tray distribution maintaining hot serving temperatures to patient beds",
      "Supervision by qualified on-site Clinical Dietitians and Nutritionists",
    ],
  },
  {
    id: "educational-dining",
    title: "Educational Campus & Student Dining",
    subtitle: "Nutritious, Affordable & High-Volume University Food Courts",
    desc: "Managing dining halls and food courts across schools, colleges, and university campuses serving up to 25,000 students daily.",
    image: "/nfs_hero_catering.svg",
    tag: "Campus Dining",
    icon: Building2,
    deliverables: [
      "Nutrient-dense menus formulated to support student cognitive energy and athletic vitality",
      "Rapid-throughput queue management serving thousands of students per lunch hour",
      "Strict allergen segregation (peanut, gluten, lactose) and clear nutritional labeling",
      "Clean student dining halls with round-the-clock hygiene and table sanitization",
    ],
  },
  {
    id: "cold-chain-logistics",
    title: "Refrigerated Cold Chain & Distribution",
    subtitle: "Temperature-Controlled Fleet & Rapid Bulk Logistics",
    desc: "Operating a dedicated fleet of 48+ multi-temperature refrigerated trucks with real-time GPS thermal monitoring (+2°C to +4°C).",
    image: "/nfs_hero_catering.svg",
    tag: "Cold Chain Logistics",
    icon: Truck,
    deliverables: [
      "Continuous GPS telematics logging temperature and humidity inside truck cargo bays",
      "Same-day dawn dispatch of fresh produce, poultry, and dairy from central hubs",
      "HACCP-compliant sanitized delivery containers preventing air and dust exposure",
      "Zero-break cold chain protocols preserving raw ingredient freshness and safety",
    ],
  },
  {
    id: "bulk-sourcing",
    title: "Bulk Institutional Commodity Sourcing",
    subtitle: "Farm-to-Fork Direct Procurement & Raw Ingredient Supply",
    desc: "Direct farm procurement and wholesale distribution of export-grade basmati rice, wheat flour, pulses, cooking oils, fresh poultry, and vegetables.",
    image: "/nfs_hero_catering.svg",
    tag: "Bulk Commodity Sourcing",
    icon: Package,
    deliverables: [
      "Direct farm-gate partnerships eliminating middlemen and reducing wholesale food costs",
      "100% certified Halal meat and poultry sourced from accredited slaughterhouses",
      "Laboratory testing of grain moisture, pesticide residue, and nutritional grading",
      "Automated climate-controlled central silos and bulk storage warehouses",
    ],
  },
  {
    id: "quality-audits",
    title: "HACCP & ISO 22000 Food Safety Audits",
    subtitle: "Microbiological Testing, ATP Swabs & Punjab Food Authority Compliance",
    desc: "Operating certified food testing laboratories conducting daily ATP hygiene swabs, water testing, and routine chef health screenings.",
    image: "/nfs_hero_catering.svg",
    tag: "Food Safety Auditing",
    icon: ShieldCheck,
    deliverables: [
      "Daily ATP bioluminescence swab testing of cutting boards, knives, and prep stations",
      "In-house microbiological culturing for Salmonella, E. Coli, and Listeria prevention",
      "Routine 6-month medical and communicable disease screening for all culinary staff",
      "Strict compliance with Punjab Food Authority (PFA) and international ISO-22000 standards",
    ],
  },
];

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "1000000+", label: "Meals Daily", icon: UtensilsCrossed },
  { value: "350+", label: "Corporate Clients", icon: Users2 },
  { value: "99.9%", label: "HACCP Compliance", icon: ShieldCheck },
];

export default function NFSServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FOOD_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Institutional Catering &amp; Food Supply</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
                Comprehensive Culinary &amp; Food Solutions For <span style={{ color: theme.maroon }}>Institutions Nationwide</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From turnkey corporate cafeterias and specialized hospital patient clinical nutrition to high-volume university dining, refrigerated cold-chain logistics, and HACCP hygiene auditing, National Food Services delivers uncompromised nourishment.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.maroon }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.maroonDark }}
                >
                  <span>Request Catering Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-rose-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/nfs_hero_catering.svg"
                  alt="National Food Services Catering Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.crimson }}>
                      Institutional Catering Fleet
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.maroonDark }}>
                      Corporate · Healthcare · Universities · Supply Chain
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
                  className="nfs-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.maroon}10` }}>
                    <Icon size={22} style={{ color: theme.maroon }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.maroonDark }}>
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
            <SectionHeading center className="mb-4">Specialized Food Services &amp; Catering Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in accordance with HACCP international food hygiene standards, certified Halal sourcing, and clinical nutrition frameworks.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search catering divisions (e.g. Corporate, Hospital, Campus, Cold Chain, Bulk, HACCP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] transition-all bg-white shadow-xs"
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
                  className="nfs-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#6B0F24]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.maroon}10` }}>
                          <Icon size={20} style={{ color: theme.maroon }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.maroonDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#A81E3D]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(234, 214, 219, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.maroonDark }}>
                          Key Service Specifications:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#8C1832]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/national-food/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-rose-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.maroonDark }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A81E3D]">
                INSTITUTIONAL FOOD SERVICE PROPOSALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Setting Up An Institutional Dining Or Supply Contract?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our master executive chefs and dietitian directors to customize daily meal schedules, cafeteria designs, and bulk logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Catering Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                style={{ borderColor: theme.maroon, color: theme.maroon }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}
