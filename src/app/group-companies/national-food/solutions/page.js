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
  Sparkles,
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
  "Executive Banquets",
];

const CATERING_PACKAGES = [
  {
    name: "NFS Corporate Executive & Employee Dining Suite",
    category: "Corporate Dining",
    specs: ["Capacity: 200 to 5,000+ Daily Corporate Meals", "Menu: Multi-Cuisine Rotating Daily Hot Buffet & Salad Bar", "Features: Cashless POS & Executive Boardroom Service"],
    desc: "Turnkey cafeteria management, fresh gourmet daily lunch buffets, and executive dining room service tailored for corporate headquarters.",
    image: "/nfs_hero_catering.svg",
    tag: "Corporate Dining Suite",
  },
  {
    name: "NFS Hospital Clinical & Therapeutic Nutrition Suite",
    category: "Hospital Nutrition",
    specs: ["Patients: 100 to 2,000+ Hospital Bed Capacities", "Diets: Diabetic, Renal, Cardiac, Soft & Pureed Formulations", "Hygiene: Sterile Isolation Prep & Thermal Tray Bed Delivery"],
    desc: "Specialized hospital food services managed by certified clinical dietitians to ensure strict therapeutic precision and patient recovery.",
    image: "/nfs_hero_catering.svg",
    tag: "Clinical Nutrition Suite",
  },
  {
    name: "NFS University Food Court & Campus Dining Plan",
    category: "University Campus",
    specs: ["Scale: 1,000 to 25,000+ Students Daily", "Nutrition: High-Protein & Balanced Student Fuel Menus", "Operations: Smart Student RFID Card & Mobile App Ordering"],
    desc: "Fast-throughput campus food courts, boarding school mess management, and nutritious snacks supporting student cognitive vitality.",
    image: "/nfs_hero_catering.svg",
    tag: "Campus Dining Suite",
  },
  {
    name: "NFS Industrial Factory 24/7 Shift Worker Meal Package",
    category: "Industrial Shift",
    specs: ["Shifts: 3 Continuous 8-Hour Shift Coverage (24/7)", "Nutrition: Calorie-Dense (3,500+ kcal) Heavy Labor Fuel", "Logistics: Insulated Food Transporters to Factory Floor"],
    desc: "Robust catering solutions for textile mills, chemical manufacturing, and heavy industrial plants ensuring on-time workforce feeding.",
    image: "/nfs_hero_catering.svg",
    tag: "Industrial Shift Catering",
  },
  {
    name: "NFS Remote Site & Construction Camp Catering",
    category: "Remote Site Camp",
    specs: ["Environment: Desert, Dam, Mining & Remote Pipeline Camps", "Facilities: Self-Contained Containerized Kitchens & Cold Stores", "Coverage: 3 Daily Meals + Midnight Snack Packs for Labor"],
    desc: "End-to-end camp management, bulk water filtration, and continuous food supply chain for large infrastructure and energy project sites.",
    image: "/nfs_hero_catering.svg",
    tag: "Remote Camp Suite",
  },
  {
    name: "NFS Corporate Banqueting & Milestone Event Catering",
    category: "Executive Banquets",
    specs: ["Occasions: Annual Galas, AGMs, Product Launches & VIP Summits", "Capacity: 100 to 3,000+ Seated Guests", "Service: Silver Platter, Multi-Course Gourmet & Live Grills"],
    desc: "High-end banquet catering, VIP protocol dining, live barbecue carving stations, and customized dessert displays for corporate gatherings.",
    image: "/nfs_hero_catering.svg",
    tag: "Banqueting Suite",
  },
];

export default function NFSSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = CATERING_PACKAGES.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Catering Packages &amp; Menu Solutions</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
              Institutional Catering Packages &amp; <span style={{ color: theme.maroon }}>Dining Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying turnkey dining halls, clinical patient nutrition, university food courts, 24/7 industrial shift meals, and remote site camp catering across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search catering packages (e.g. Corporate, Hospital, Campus, Shift, Remote, Banquet)..."
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

      {/* Category Pills */}
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

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="nfs-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#6B0F24]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.maroonDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(234, 214, 219, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.maroonDark }}>
                        Package Scope &amp; Specifications:
                      </p>
                      {prod.specs.map((s) => (
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
                    <span>Request Sample Menu &amp; Quote</span>
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
                CUSTOM INSTITUTIONAL CATERING PACKAGES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Need A Customized Meal Program For Your Facility?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete on-site kitchen operations, food tasting sessions, and flexible meal pricing per head.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Catering Scoping</span>
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
