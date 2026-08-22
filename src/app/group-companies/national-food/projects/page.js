"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Hotel,
  Building2,
  Truck,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NFSShared";

const CATEGORIES = [
  "All",
  "Corporate Dining",
  "Hospital Nutrition",
  "University Campus",
  "Industrial Shift",
  "Remote Site Camp",
];

const SIGNATURE_PROJECTS = [
  {
    name: "Multi-Campus University Dining Network (25,000 Students)",
    category: "University Campus",
    location: "Major Public & Private Universities, Lahore & Islamabad",
    status: "Active Contract – 25,000 Meals Daily",
    desc: "Managing central campus dining halls and multi-cuisine student food courts across 4 major campuses with smart cashless student ID cards.",
    specs: ["Scale: 25,000+ Fresh Student Meals Prepared Daily", "Variety: 6 Live Food Stations & Hygienic Salad Bars", "Technology: Integrated RFID Student Meal Card System"],
    image: "/nfs_hero_catering.svg",
    tag: "Campus Dining Network",
  },
  {
    name: "National Healthcare Network In-Patient Clinical Nutrition",
    category: "Hospital Nutrition",
    location: "12 Major Tertiary Hospital Facilities, Punjab & Sindh",
    status: "Active Contract – 3,500 Hospital Beds Daily",
    desc: "Full-scale hospital patient dining preparing customized renal, diabetic, soft, and cardiac diets in sterile clinical kitchens with thermal bedside tray delivery.",
    specs: ["Capacity: 3,500 In-Patient Thermal Trays Served Daily", "Supervision: 24 Full-Time Certified Clinical Dietitians", "Hygiene: 100% Zero-Defect HACCP Sterile Kitchen Protocols"],
    image: "/nfs_hero_catering.svg",
    tag: "Clinical Healthcare Dining",
  },
  {
    name: "Mega-Textile Manufacturing Complex 24/7 Worker Dining",
    category: "Industrial Shift",
    location: "Faisalabad Industrial Estate & Sundar Industrial Estate",
    status: "Active Contract – 8,000 Meals Per Shift",
    desc: "Round-the-clock 3-shift catering for industrial manufacturing personnel featuring high-protein, calorie-dense balanced meals and automated roti baking.",
    specs: ["Throughput: 24,000 Meals Daily Across 3 Shifts", "Equipment: Automated 4,000 Roti/Hour Industrial Baking Lines", "Efficiency: 1,500 Workers Served Every 20 Minutes"],
    image: "/nfs_hero_catering.svg",
    tag: "Industrial Shift Dining",
  },
  {
    name: "Commercial Banking Group Executive Headquarters Cafeteria",
    category: "Corporate Dining",
    location: "Corporate Banking Head Office, I.I. Chundrigar Road, Karachi",
    status: "Active Contract – 1,800 Corporate Staff",
    desc: "Turnkey executive cafeteria management, artisanal barista coffee kiosks, daily multi-cuisine gourmet lunch buffets, and boardroom VIP dining.",
    specs: ["Scale: 1,800 Corporate Bankers & Executives Daily", "Offerings: Live Gourmet Pasta & Charcoal Grill Station", "Service: VIP Executive Boardroom Silver Service"],
    image: "/nfs_hero_catering.svg",
    tag: "Executive Corporate Dining",
  },
  {
    name: "Hydroelectric Dam Remote Construction Camp Catering",
    category: "Remote Site Camp",
    location: "Northern Mountain Infrastructure Project Site, KPK",
    status: "Active Contract – 3,200 Workforce Full-Board",
    desc: "Full-board remote mountain camp catering with self-contained containerized commercial kitchens, backup water purification, and refrigerated cold stores.",
    specs: ["Logistics: Continuous Cold-Chain Supply Convoys to Remote Site", "Facilities: Industrial Bakery, Butchery & 200-Ton Cold Stores", "Coverage: Breakfast, Lunch, Dinner & Midnight Shift Snacks"],
    image: "/nfs_hero_catering.svg",
    tag: "Remote Camp Operations",
  },
  {
    name: "Federal Disaster Relief Emergency Nutritious Food Supply",
    category: "Corporate Dining",
    location: "Emergency Response Depots Nationwide",
    status: "Executed – 500,000 Ready Ration Packs",
    desc: "Rapid procurement, hygienic preparation, and hermetic vacuum packaging of 500,000 emergency high-calorie nutrition ration kits for disaster relief.",
    specs: ["Volume: 500,000 Hermetically Sealed Relief Meal Kits", "Shelf-Life: 12-Month Ambient Temperature Storage Stability", "Nutrition: WHO-Compliant Essential Macro & Micronutrient Profile"],
    image: "/nfs_hero_catering.svg",
    tag: "Emergency Relief Logistics",
  },
];

export default function NFSProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Institutional Catering Engagements</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
              Signature Catering &amp; <span style={{ color: theme.maroon }}>Dining Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark institutional catering deployments across multi-campus universities, hospital clinical nutrition networks, 24/7 industrial factory dining halls, and remote construction camps.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by institution, sector, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-rose-50/40" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#6B0F24] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#6B0F24]"
                  }`}
                  style={{ borderColor: active ? theme.maroon : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="nfs-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#6B0F24]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.maroonDark }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#6B0F24]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#6B0F24]/10 text-[#6B0F24]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(234, 214, 219, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.maroonDark }}>
                        Operational Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#8C1832]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
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
                    <span>Request Full Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A81E3D]">
                PLANNING AN INSTITUTIONAL FOOD CONTRACT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Partner With Pakistan&apos;s Leading Food Services Provider
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From kitchen facility design and dietitian menu formulation to daily catering execution and food safety auditing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Catering Audit</span>
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
