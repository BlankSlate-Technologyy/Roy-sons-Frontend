"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Building,
  Home as HomeIcon,
  ShoppingBag,
  Factory,
  Stethoscope,
  GraduationCap,
  Hotel,
  HardHat,
  Warehouse,
  Network,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Search,
  Users,
  Award,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalGuardShared";

const INDUSTRIES_DATA = [
  {
    id: "government",
    title: "Government Organizations & Embassies",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    desc: "Armed ex-military static guards, strict vehicle undercarriage scans, walk-through metal detectors, and high-security access control for diplomatic and state premises.",
    highlights: ["Armed static post guarding", "Visitor vetting & ID badge logs", "Emergency quick response coverage", "Police liaison integration"],
  },
  {
    id: "corporate",
    title: "Corporate Offices & Commercial Towers",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    desc: "Polite, well-groomed security receptionists and access officers managing lobby turnstiles, executive floors, parking areas, and after-hours building lockups.",
    highlights: ["Concierge & reception security", "Turnstile & elevator access control", "Fire safety & evacuation wardens", "Basement parking security"],
  },
  {
    id: "residential",
    title: "Residential Communities & Housing Societies",
    icon: HomeIcon,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    desc: "Entry barrier gate operations, visitor computerized verification, resident RFID sticker validation, and night mobile motorcycle patrols across housing sectors.",
    highlights: ["Main gate barrier control", "Night mobile patrol squads", "CCTV street monitoring", "Resident emergency assistance"],
  },
  {
    id: "retail",
    title: "Shopping Malls & Retail Megastores",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=600&q=80",
    desc: "Active loss prevention, shoplifting deterrence, crowd management during sales events, and female security guards for courteous family and bag screening.",
    highlights: ["Uniformed entrance screening", "Loss prevention & asset security", "Female searchers for family safety", "Lost child & crowd management"],
  },
  {
    id: "industrial",
    title: "Industrial Plants & Manufacturing Units",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    desc: "Gatehouse truck weight check verification, raw material gate passes, perimeter fence protection, and night watch guarding against equipment theft.",
    highlights: ["Inward/outward gate pass control", "Truck driver & cargo verification", "Factory perimeter watch towers", "Hazard & fire alert monitoring"],
  },
  {
    id: "healthcare",
    title: "Healthcare Centers & Hospitals",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    desc: "De-escalation trained officers managing emergency ward crowd flows, patient visitor passes, pharmacy security, and ambulance bay traffic clearance.",
    highlights: ["Emergency room de-escalation", "Doctor & staff protection", "Restricted ward access control", "Ambulance bay traffic flow"],
  },
  {
    id: "education",
    title: "Educational Campuses & Universities",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    desc: "Student ID checking, strict anti-trespassing measures, school bus drop-off security, and campus perimeter patrols ensuring safe learning environments.",
    highlights: ["Morning & evening drop-off safety", "Student ID verification", "Hostel night guarding", "Zero-tolerance anti-narcotics watch"],
  },
  {
    id: "hospitality",
    title: "Hotels, Resorts & Banquet Halls",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    desc: "High-standard hospitality security blending courteous guest welcoming with unobtrusive baggage X-ray checks and round-the-clock facility surveillance.",
    highlights: ["Vehicle luggage inspection", "Guest privacy & VIP protection", "Banquet event crowd security", "Lobby surveillance"],
  },
  {
    id: "financial",
    title: "Banks & Financial Institutions",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80",
    desc: "Specially trained armed guards with licensed automatic shotguns, cash counter monitoring, ATM booth security, and direct police panic alarms.",
    highlights: ["Armed bank branch guards", "Cash transit escort coverage", "ATM kiosk surveillance", "Silent panic alarm integration"],
  },
  {
    id: "construction",
    title: "Construction & Infrastructure Projects",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    desc: "Preventing costly machinery theft, metal scavenging, and unauthorized site entry through mobile patrol checks and strict worker badge enforcement.",
    highlights: ["Heavy machinery night watch", "PPE compliance enforcement", "Material dispatch register audits", "Temporary perimeter guarding"],
  },
  {
    id: "logistics",
    title: "Logistics Hubs & Warehouses",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    desc: "Dock bay sealing, inventory dispatch logging, container yard patrols, and overnight security ensuring high-value supply chains remain unbroken.",
    highlights: ["Container seal verification", "Driver ID registration", "Distribution center patrols", "Overnight yard security"],
  },
  {
    id: "critical-infra",
    title: "Critical Infrastructure & Energy Sites",
    icon: Network,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
    desc: "High-alert protection for power sub-stations, telecom towers, oil pipeline valves, and water pumping installations in remote and urban sectors.",
    highlights: ["Remote outpost static guards", "Solar backup communication", "Strict restricted area access", "24/7 telemetry monitoring"],
  },
];

const INDUSTRY_STATS = [
  { value: "1000+", label: "Total Sites Protected", icon: Building },
  { value: "12+", label: "Key Sectors Served", icon: Landmark },
  { value: "500+", label: "Trained Guard Force", icon: Users },
  { value: "99.8%", label: "Zero-Breach Record", icon: ShieldCheck },
];

export default function NationalGuardIndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = INDUSTRIES_DATA.filter(
    (ind) =>
      ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sector Expertise</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
              Industries We <span style={{ color: theme.gold }}>Protect Across Pakistan</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              From corporate headquarters and residential communities to factories and critical infrastructure, our security protocols are custom-configured for the distinct operational challenges of each industry.
            </p>

            {/* Live Search Input */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Banks, Factories, Hospitals)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="ng-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navy }}>
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

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="ng-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Sector Image */}
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border shadow-sm flex items-center justify-center" style={{ borderColor: theme.border }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-lg font-black leading-snug mb-3" style={{ color: theme.navy }}>
                        {ind.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {ind.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 231, 238, 0.7)" }}>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                          Protection Matrix:
                        </p>
                        {ind.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: theme.gold }} />
                            <span className="text-xs font-medium text-slate-700">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/national-guard/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Inquire For This Sector</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                HAVE A SPECIFIC FACILITY TYPE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Get An Industry-Tailored Security Plan
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We conduct on-site vulnerability analysis customized specifically for your facility type and provide exact guard deployment recommendations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Consult Our Officers</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
