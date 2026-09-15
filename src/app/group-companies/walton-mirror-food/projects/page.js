"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Snowflake,
  Package,
  Boxes,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Send,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  WholesaleInquiryModal,
} from "../components/WaltonFoodShared";

const CATEGORIES = [
  "All",
  "Frozen Foods & IQF",
  "Ready-to-Eat Meals",
  "Dairy Products",
  "Bakery & Confectionery",
  "Beverages & Juices",
];

const SIGNATURE_PROJECTS = [
  {
    name: "Automated IQF Frozen Vegetable & French Fry Complex",
    category: "Frozen Foods & IQF",
    location: "M-3 Industrial City, Sahianwala, Punjab",
    status: "Operational – 45,000 Tons Annual Capacity",
    desc: "Turnkey automated industrial freezing plant featuring European fluid-bed IQF cryogenic tunnels, optical color sorting, and automated form-fill-seal packaging for export.",
    specs: ["Capacity: 45,000 Tons/Year Cryogenic Flash-Frozen Capacity", "Technology: -38°C Individual Quick Freezing (IQF) Tunnel Line", "Certifications: ISO 22000, HACCP, BRCGS & Halal Certified"],
    image: "/waltonfood/hero_gourmet_production.jpg",
    tag: "IQF Mega-Plant",
  },
  {
    name: "High-Speed Aseptic UHT Dairy & Juice Bottling Facility",
    category: "Dairy Products",
    location: "Sundar Industrial Estate, Lahore",
    status: "Operational – 30,000 Liters Per Hour",
    desc: "Advanced dairy and natural fruit beverage processing plant equipped with direct steam injection UHT pasteurization and high-speed aseptic carton packaging lines.",
    specs: ["Throughput: 30,000 Liters/Hour Automated Processing Speed", "Packaging: 250ml / 1-Liter Aseptic Tetra-Brik & PET Bottle Lines", "Hygiene: Automated Clean-in-Place (CIP) Sterile Sanitation"],
    image: "/waltonfood/card_dairy_processing.jpg",
    tag: "Aseptic Dairy Facility",
  },
  {
    name: "Export-Grade Ready-to-Eat Retort Pouch Complex",
    category: "Ready-to-Eat Meals",
    location: "Port Qasim Industrial Corridor, Karachi",
    status: "Operational – 15 Million Pouches Annual Output",
    desc: "Manufacturing ambient shelf-stable traditional and continental ready meals utilizing computer-controlled industrial autoclave retort sterilizers.",
    specs: ["Volume: 15,000,000 Shelf-Stable Retort Meal Pouches Annually", "Shelf-Life: 12-Month Ambient Temperature Storage Stability", "Export Reach: Shipped to Retail Supermarkets in UK, UAE & US"],
    image: "/waltonfood/card_retort_meals.jpg",
    tag: "Retort Meal Plant",
  },
  {
    name: "Private Label FMCG Snack Manufacturing Facility",
    category: "Bakery & Confectionery",
    location: "Hattar Industrial Estate, KPK",
    status: "Operational – 25 Million Retail Packs Annually",
    desc: "Turnkey contract manufacturing and private label co-packing of savory snacks, biscuits, and extruded snacks for national supermarket chains.",
    specs: ["Capabilities: Nitrogen-Flushed Multi-Layer Barrier Pillow Packs", "Customization: Tailored Flavor Seasonings & Packaging Designs", "Logistics: Weekly 40ft Export Container Consolidated Stuffing"],
    image: "/waltonfood/hero_mega_plant.jpg",
    tag: "Private Label Hub",
  },
  {
    name: "Industrial Tomato Paste & Condiment Aseptic Packing Complex",
    category: "Beverages & Juices",
    location: "Multan Agro-Industrial Zone, Punjab",
    status: "Operational – 20,000 Tons Annual Capacity",
    desc: "High-volume tomato processing and sauce formulation plant with vacuum concentration evaporators and sterile 220-liter bag-in-drum packaging for foodservice.",
    specs: ["Evaporation: Triple-Effect Falling Film Vacuum Concentrator", "Packaging: Aseptic 220-Liter Industrial Drums & Retail Pouches", "Sourcing: Contract Farming with 500+ Local Tomato Growers"],
    image: "/waltonfood/card_ready_meals.jpg",
    tag: "Aseptic Condiment Plant",
  },
  {
    name: "Halal Frozen Meat & Poultry Processing Facility",
    category: "Frozen Foods & IQF",
    location: "Sheikhupura Agro-Meat Corridor, Punjab",
    status: "Operational – 18,000 Tons Annual Capacity",
    desc: "Sanitary meat processing, deboning, portion-controlled burger patty forming, and cryogenic spiral freezing under 100% strict Halal slaughter accreditation.",
    specs: ["Processing: Automated Patty Forming, Breading & Frying Lines", "Freezing: Cryogenic Spiral Freezing Locking in Fresh Texture", "Compliance: 100% Hand-Slaughtered Halal Certified Batch Audit"],
    image: "/waltonfood/hero_food_processing.jpg",
    tag: "Halal Meat Processing",
  },
];

export default function WaltonFoodProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  const filtered = SIGNATURE_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.desc && p.desc.toLowerCase().includes(query)) ||
      (p.location && p.location.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar onOpenWholesaleModal={() => setIsWholesaleOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Industrial Processing Facilities</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
              Signature Processing Plants &amp; <span style={{ color: theme.green }}>Manufacturing Deployments</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark food processing facilities across IQF cryogenic freezing mega-plants, aseptic UHT bottling complexes, retort canning facilities, and private label FMCG production lines across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search plants by name, product category, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-emerald-50/40" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#1E6B43] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1E6B43]"
                  }`}
                  style={{ borderColor: active ? theme.green : theme.border }}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1E6B43]" style={{ borderColor: theme.border }}>
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-xs font-bold text-[#F3C677]">{proj.status}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.greenDark }}>
                      {proj.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4">
                      <MapPin size={14} className="flex-shrink-0 text-[#1E6B43]" />
                      <span>{proj.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.greenDark }}>
                        Technical Highlights:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#1E6B43]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    type="button"
                    onClick={() => setIsWholesaleOpen(true)}
                    className="w-full py-3 rounded-xl border text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1E6B43] hover:text-white transition-all cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.greenDark }}
                  >
                    <span>Inquire Capacity &amp; Co-Packing</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                MANUFACTURING PARTNERSHIPS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Deploy Your FMCG Brand With Walton &amp; Mirror Food
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From contract manufacturing and pilot batch formulation to container-load export logistics, connect with our industrial food team today.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setIsWholesaleOpen(true)}
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request Facility Tour / Proposal</span>
                <ArrowRight size={15} />
              </button>
              <a
                href="tel:00924235401280"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-35401280</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Modal */}
      <WholesaleInquiryModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      <WaltonFoodFooter />
    </main>
  );
}
