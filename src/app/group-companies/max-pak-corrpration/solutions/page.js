"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Package,
  ClipboardList,
  Wrench,
  Truck,
  HardHat,
  Building2,
  Factory,
  Zap,
  Bolt,
  Layers,
  Beaker,
  Thermometer,
  Waves,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxPakShared";

const CATEGORIES = [
  "All",
  "Industrial Machinery",
  "Construction & Steel",
  "Electrical & Power",
  "Mechanical & Piping",
  "Heavy Fleet",
  "Chemicals & Polymers",
  "HVAC & Ventilation",
  "Pumps & Compressors",
  "Safety PPE & Tools",
];

const PRODUCT_SUITES = [
  {
    name: "Precision CNC & Industrial Metal Fabrication Suite",
    category: "Industrial Machinery",
    specs: ["Machinery: 5-Axis CNC Vertical Centers, Heavy CNC Lathes & Fiber Laser Cutters", "Tolerance: ±0.005mm High-Precision Aerospace & Automotive Machining", "Brands: DMG MORI, Mazak, Haas & Bystronic Certified OEM Partnerships"],
    desc: "Complete precision machining and heavy metal fabrication lines engineered for high-throughput manufacturing plants.",
    image: "/maxpak_hero_industrial.svg",
    tag: "CNC Machinery",
  },
  {
    name: "Certified ASTM Structural Steel & Rebar Package",
    category: "Construction & Steel",
    specs: ["Rebar: ASTM A615 / A706 Grade 60 High-Yield Deformed Steel Rebar", "Structural: Wide-Flange H-Beams, Universal Columns, Channels & Heavy Plates", "Documentation: 100% Heat Number Traceability & Mill Test Certificates (MTC)"],
    desc: "Premium structural steel rebar, girders, and heavy plates supplied for bridges, skyscrapers, dams, and industrial factory buildings.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Structural Steel",
  },
  {
    name: "Substation Switchgear & High-Voltage Power Package",
    category: "Electrical & Power",
    specs: ["Voltage: 11kV to 132kV Medium & High Voltage Gas-Insulated Switchgear (GIS)", "Transformers: 500 kVA to 50 MVA Oil-Immersed & Dry-Type Step-Down Transformers", "Cabling: XLPE Armored High-Conductivity Copper Power & Control Cables"],
    desc: "Turnkey electrical transmission and distribution packages supplying industrial substations, power utilities, and factories.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Power Switchgear",
  },
  {
    name: "API Carbon Steel Linepipe, Flanges & Valve Suite",
    category: "Mechanical & Piping",
    specs: ["Linepipe: API 5L Grade B, X52 & X65 Seamless & ERW Heavy-Wall Carbon Steel", "Valves: ANSI Class 150 to 2500 Motor-Actuated Gate, Globe, Ball & Check Valves", "Flanges: ASTM A105 Forged High-Pressure Weld Neck & Blind Flanges"],
    desc: "Heavy-duty industrial piping and flow control packages designed for oil refineries, petrochemical processing, and thermal plants.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Industrial Piping",
  },
  {
    name: "Heavy Crawler Excavator & Hydraulic Crane Fleet",
    category: "Heavy Fleet",
    specs: ["Excavators: 20-to-85-Ton Hydraulic Crawler Excavators with Rock Breakers", "Lifting: 50-to-500-Ton All-Terrain & Telescopic Hydraulic Mobile Cranes", "Earthmoving: High-Capacity Wheel Loaders, Motor Graders & Soil Compactors"],
    desc: "Heavy earthmoving and high-tonnage lifting equipment packages supporting mega-infrastructure and mining operations.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Heavy Equipment",
  },
  {
    name: "Specialty Industrial Chemicals & Water Treatment",
    category: "Chemicals & Polymers",
    specs: ["Water: Anti-Scalants, Biocides, Coagulants & Reverse Osmosis Membrane Cleaners", "Lubricants: Heavy-Duty Synthetic Gear Oils, Turbine Lubricants & Greases", "Polymers: High-Grade Industrial Epoxy Floor Resins & Anti-Corrosive Coatings"],
    desc: "High-purity chemical and polymer solutions for boiler feed water, industrial cooling towers, and protective facility coatings.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Industrial Chemicals",
  },
  {
    name: "Commercial Industrial HVAC & Ventilation Package",
    category: "HVAC & Ventilation",
    specs: ["Chillers: 100 to 1,500 TR Water-Cooled & Air-Cooled Rotary Screw Chillers", "AHUs: Modular Air Handling Units with HEPA Filtration & Variable Speed Fans", "Ventilation: Explosion-Proof Heavy Axial Flow Industrial Exhaust Blowers"],
    desc: "Heavy-duty climate control and industrial ventilation packages for cleanrooms, pharmaceutical units, and large manufacturing complexes.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Industrial HVAC",
  },
  {
    name: "High-Pressure Industrial Pumps & Compressors",
    category: "Pumps & Compressors",
    specs: ["Compressors: 15 kW to 350 kW VFD Oil-Free & Rotary Screw Air Compressors", "Pumps: High-Pressure Multistage Boiler Feed & Split-Case Centrifugal Pumps", "Delivery: Dry Compressed Air at 7 to 13 Bar with Refrigerant Air Dryers"],
    desc: "Continuous-duty compressed air and fluid pumping systems ensuring uninterrupted pneumatic power and cooling.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Pumps & Air",
  },
  {
    name: "Certified Personal Protective Equipment (PPE) & Site Safety",
    category: "Safety PPE & Tools",
    specs: ["Head & Eye: EN 397 Industrial Safety Helmets & ANSI Z87 Impact Polycarbonate Goggles", "Apparel: High-Visibility Flame-Retardant EN ISO 11612 Nomex Site Coveralls", "Fall Arrest: Full-Body Heavy Fall Protection Harnesses & Auto-Retracting Lifelines"],
    desc: "Comprehensive OSHA/EN certified personal protective equipment safeguarding workforces across heavy construction and industrial sites.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Safety PPE",
  },
  {
    name: "Heavy-Duty Power Tools & Precision Core Drills",
    category: "Safety PPE & Tools",
    specs: ["Drills: SDS-Max Brushless Heavy Rotary Hammers & Magnetic Core Drills", "Grinders: 230mm Heavy-Duty Metal Grinders with Kickback Auto-Stop Brake", "Pneumatics: High-Torque 1-Inch Pneumatic Air Impact Wrenches for Heavy Bolting"],
    desc: "Industrial-grade electrical and pneumatic power tools engineered for heavy steel erection, concrete drilling, and plant maintenance.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Power Tools",
  },
];

export default function MaxPakSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PRODUCT_SUITES.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <MaxPakNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Certified Industrial Products &amp; Sourcing Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Industrial Product Suites &amp; <span style={{ color: theme.green }}>Procurement Packages</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our comprehensive industrial catalog: precision CNC machinery, certified ASTM structural steel rebar, high-voltage switchgear, API linepipes, heavy earthmoving fleets, HVAC chillers, and certified PPE supplies.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products (e.g. CNC, Steel, Rebar, Switchgear, Piping, Cranes, Pumps, PPE)..."
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

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/70" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#1B365D] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1B365D]"
                  }`}
                  style={{ borderColor: active ? theme.navy : theme.border }}
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
            {filtered.map((sol) => (
              <div
                key={sol.name}
                className="mp-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={sol.image}
                      alt={sol.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B365D]" style={{ borderColor: theme.border }}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.navyDark }}>
                      {sol.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {sol.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Technical Specifications &amp; Standards:
                      </p>
                      {sol.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#16A34A]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-pak-corrpration/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Product RFQ &amp; Mill Specs</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                INFRASTRUCTURE CONTRACTORS &amp; PLANT PROCUREMENT DIRECTORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Custom Bill of Quantities (BOQ) Sourcing &amp; Batch Delivery
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete technical specification reviews, manufacturer mill test certificates, and scheduled on-site material drops.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Custom Sourcing</span>
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

      <MaxPakFooter />
    </main>
  );
}
