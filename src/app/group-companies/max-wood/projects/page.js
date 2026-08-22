"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
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
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxWoodShared";

const CATEGORIES = [
  "All",
  "Living & Lounge",
  "Executive Office",
  "Dining & Hospitality",
  "Bedroom Suites",
  "Architectural Paneling",
  "Modular Kitchens",
];

const SIGNATURE_PROJECTS = [
  {
    name: "5-Star Luxury Mountain Resort & Spa Hotel Fitout",
    category: "Dining & Hospitality",
    location: "Bhurban Pine Hills, Murree, Punjab",
    status: "Completed – 120 Luxury Suites & Chalets",
    desc: "Complete turnkey interior fitout and custom furniture manufacturing for 120 luxury guestrooms, presidential chalets, fine-dining restaurants, and a panoramic forest view lobby lounge.",
    specs: ["Scope: 120 Guestroom Furniture Packages & Lobby Millwork", "Materials: Kiln-Dried Solid Walnut, Burma Teak & Belgian Linens", "Finish: High-Durability Commercial-Grade Matte Polyurethane"],
    image: "/maxwood_hero_craft.svg",
    tag: "Hospitality Resort",
  },
  {
    name: "National Commercial Bank Executive HQ & Boardroom",
    category: "Executive Office",
    location: "I.I. Chundrigar Road Financial Center, Karachi",
    status: "Completed – 6 Floors Corporate Executive Fitout",
    desc: "Architectural wood paneling, 28-seater conference boardroom table with integrated motorized pop-up monitors, 12 executive directorial suites, and acoustic fluted ceiling baffles.",
    specs: ["Boardroom: 28-Seater Custom Fluted Solid American Walnut Table", "Acoustics: 2,400 Sq Meters of NRC 0.85 Fluted Wall Cladding", "Fittings: Concealed Wire Management & Integrated LED Sconces"],
    image: "/maxwood_hero_craft.svg",
    tag: "Corporate Headquarters",
  },
  {
    name: "Royal Palm Golf Estate Mega-Villa Millwork",
    category: "Architectural Paneling",
    location: "Royal Palm Golf & Country Club Corridor, Lahore",
    status: "Completed – 18,000 Sq Ft Luxury Residence",
    desc: "Bespoke architectural millwork encompassing floor-to-ceiling concealed pivot doors, grand double-height coffered wood ceilings, walk-in dressing suites, and a bespoke walnut dining suite.",
    specs: ["Scale: 18,000 Sq Ft Full Interior Architectural Wood Millwork", "Features: 12 Floor-to-Ceiling 3.5m High Concealed Pivot Doors", "Wardrobes: 3 Smoked-Glass Walk-In Closets with Integrated LEDs"],
    image: "/maxwood_hero_craft.svg",
    tag: "Luxury Mega-Villa",
  },
  {
    name: "Fintech Unicorn Collaborative Office Campus",
    category: "Executive Office",
    location: "Gulberg Corporate Boulevard, Lahore",
    status: "Completed – 450 Agile Workstations & Pods",
    desc: "Modern open-plan office fitout featuring motorized height-adjustable ergonomic workstations, acoustic fabric dividers, custom cafeteria booth seating, and solid oak meeting pods.",
    specs: ["Capacity: 450 Height-Adjustable Ergonomic Workstations", "Breakout: 18 Solid Oak Agile Meeting Booths & Acoustic Pods", "Joinery: 5-Axis CNC Precision Fabricated Oak Slats"],
    image: "/maxwood_hero_craft.svg",
    tag: "Tech Office Campus",
  },
  {
    name: "Boutique Rooftop Fine-Dining Restaurant & Lounge",
    category: "Living & Lounge",
    location: "Blue Area Commercial Promenade, Islamabad",
    status: "Completed – 150-Cover Gourmet Restaurant",
    desc: "Custom curved velvet dining booths, backlit exotic onyx and American walnut cocktail bar counter, temperature-controlled wine display cabinetry, and acoustic ceiling baffles.",
    specs: ["Seating: 150 High-Traffic Commercial Velvet Dining Chairs & Booths", "Bar: 12-Meter Backlit Onyx & Walnut Master Cocktail Counter", "Lighting: Architectural Concealed Indirect Warm LED Illumination"],
    image: "/maxwood_hero_craft.svg",
    tag: "Fine-Dining Lounge",
  },
  {
    name: "Diplomatic Enclave Presidential Suite Residence",
    category: "Bedroom Suites",
    location: "Diplomatic Enclave Sector G-5, Islamabad",
    status: "Completed – Presidential Protocol Residence",
    desc: "Heirloom handcrafted furniture suites in seasoned Sheesham rosewood and Burma teak with mother-of-pearl inlay detailing, master bedroom suites, and formal state banquet credenzas.",
    specs: ["Craftsmanship: Traditional Hand-Carved Joinery with MOP Inlays", "Bedrooms: 6 Master Suites with Integrated Tufted Leather Beds", "Certifications: 100% FSC-Certified Seasoned Hardwoods"],
    image: "/maxwood_hero_craft.svg",
    tag: "Presidential Residence",
  },
];

export default function MaxWoodProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Signature Interior Fitouts</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
              Signature Interior Fitouts &amp; <span style={{ color: theme.primary }}>Landmark Projects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark furniture fitouts across 5-star mountain resorts, commercial banking headquarters, luxury golf estate villas, fintech office campuses, and diplomatic protocol suites across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search fitouts by name, category, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-amber-50/40" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#5C3A21] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#5C3A21]"
                  }`}
                  style={{ borderColor: active ? theme.primary : theme.border }}
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
                className="mw-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#5C3A21]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.darkWood }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#5C3A21]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#5C3A21]/10 text-[#5C3A21]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(232, 223, 213, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.darkWood }}>
                        Craftsmanship &amp; Technical Scope:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#D4A373]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-wood/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.darkWood }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                NEED TURNKEY INTERIOR FITOUT OR CUSTOM FURNITURE CONTRACT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Partner With Pakistan&apos;s Premier Woodcraft Atelier
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From 3D photorealistic renderings and shop drawings to 5-axis CNC joinery fabrication, polyurethane finishing, and white-glove site installation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
