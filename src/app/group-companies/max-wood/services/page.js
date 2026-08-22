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
  Ruler,
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
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxWoodShared";

const WOOD_SERVICES = [
  {
    id: "custom-furniture",
    title: "Bespoke Luxury Residential Furniture",
    subtitle: "Solid Walnut, Teak & Sheesham Handcrafted Masterpieces",
    desc: "Custom-designed and precision-crafted residential furniture tailored to distinct architectural spaces, combining kiln-dried natural hardwoods with luxury imported upholstery.",
    image: "/maxwood_hero_craft.svg",
    tag: "Residential Furniture",
    icon: Sofa,
    deliverables: [
      "Solid American walnut and Burma teak dining suites with bookmatched grain tops",
      "Custom upholstered deep-lounge sofas and luxury accent armchairs",
      "Heirloom master bedroom suites with integrated upholstered headboards",
      "Multi-coat Italian polyurethane (PU) and hand-rubbed natural oil finishes",
    ],
  },
  {
    id: "office-furniture",
    title: "Corporate Executive Office Fitouts",
    subtitle: "Boardroom Tables, Ergonomic Workstations & CEO Suites",
    desc: "High-performance commercial office furniture and executive millwork designed to inspire productivity, foster collaboration, and reflect corporate prestige.",
    image: "/maxwood_hero_craft.svg",
    tag: "Corporate Fitouts",
    icon: Briefcase,
    deliverables: [
      "Grand 20+ seater executive boardroom tables with integrated wire management",
      "Ergonomic modular workstation systems with acoustic fabric partitions",
      "Executive CEO and directorial desk suites with leather writing inlays",
      "Custom reception counters with integrated LED accent lighting and signage",
    ],
  },
  {
    id: "interior-design",
    title: "Turnkey Luxury Interior Architecture",
    subtitle: "Photorealistic 3D Concept, Material Curation & Site Execution",
    desc: "Full-service interior architecture and project management covering conceptual design, 3D visualization, material selection, custom fabrication, and white-glove site delivery.",
    image: "/maxwood_hero_craft.svg",
    tag: "Interior Architecture",
    icon: Palette,
    deliverables: [
      "Photorealistic 3D spatial renderings, material boards, and lighting layouts",
      "Complete civil, MEP coordination, ceiling details, and flooring plans",
      "Custom procurement of imported marbles, brass accents, and luxury textiles",
      "Dedicated on-site project managers guaranteeing zero punch-list handovers",
    ],
  },
  {
    id: "hospitality-furniture",
    title: "Hospitality & 5-Star Hotel Furniture",
    subtitle: "Resort Guestrooms, Fine-Dining Seating & Lobby Millwork",
    desc: "High-durability commercial contract furniture engineered for luxury hotels, boutique resorts, fine-dining restaurants, and corporate banquet halls.",
    image: "/maxwood_hero_craft.svg",
    tag: "Hospitality Millwork",
    icon: Home,
    deliverables: [
      "Complete hotel guestroom packages: bed frames, vanity counters, luggage benches",
      "High-traffic commercial dining chairs, barstools, and curved restaurant booths",
      "Lobby statement concierge desks and feature sculptural wood installations",
      "Commercial-grade stain-resistant and fire-retardant upholstery fabrics",
    ],
  },
  {
    id: "architectural-woodwork",
    title: "Architectural Wood Paneling & Ceilings",
    subtitle: "Acoustic Fluted Wall Slats, Concealed Doors & Coffered Ceilings",
    desc: "Custom architectural millwork and wood cladding systems that add warmth, acoustic absorption, and spatial grandeur to interior spaces.",
    image: "/maxwood_hero_craft.svg",
    tag: "Architectural Millwork",
    icon: Hammer,
    deliverables: [
      "Precision-routed fluted acoustic wall paneling with sound-dampening backing",
      "Floor-to-ceiling concealed pivot doors seamlessly integrated into wall cladding",
      "Classic coffered wood ceilings and contemporary linear slatted baffle designs",
      "Custom fire-rated wood door sets with multi-point architectural locksets",
    ],
  },
  {
    id: "modular-kitchens",
    title: "Modular Kitchens & Smart Wardrobes",
    subtitle: "German Soft-Close Hardware, Acrylic Finishes & Walk-In Closets",
    desc: "State-of-the-art modular kitchen systems and bespoke walk-in wardrobes equipped with precision Blum soft-close fittings and customized internal organizers.",
    image: "/maxwood_hero_craft.svg",
    tag: "Kitchens & Wardrobes",
    icon: Utensils,
    deliverables: [
      "Custom island kitchens in anti-scratch high-gloss lacquer and natural wood veneer",
      "German-engineered Blum soft-close lift systems, pull-out larders, and corner units",
      "Luxury walk-in dressing closets with smoked glass doors and integrated LED bars",
      "Moisture-resistant marine-grade plywood and high-density fiberboard (HDF) carcasses",
    ],
  },
];

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "1500+", label: "Interior Projects", icon: Home },
  { value: "500+", label: "Furniture Designs", icon: Sofa },
  { value: "250+", label: "Master Craftsmen", icon: Users2 },
];

export default function MaxWoodServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = WOOD_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Furniture Manufacturing &amp; Interior Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
                Bespoke Woodworking &amp; <span style={{ color: theme.primary }}>Turnkey Interior Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From luxury residential furniture suites and corporate boardroom fitouts to architectural acoustic wood paneling and modular kitchens, Max Wood Corporation brings master craftsmanship and precision engineering to every space.
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
                  href="/group-companies/max-wood/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkWood }}
                >
                  <span>Request Bespoke Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-amber-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxwood_hero_craft.svg"
                  alt="Max Wood Corporation Woodworking Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.goldHover }}>
                      Master Woodworking Divisions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkWood }}>
                      Bespoke Joinery · Corporate Fitouts · Acoustic Paneling
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
                  className="mw-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.darkWood }}>
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
            <SectionHeading center className="mb-4">Specialized Furniture &amp; Interior Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with computerized 5-axis CNC routers, automated finishing spray booths, and artisanal hand carving.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Residential, Office, Hospitality, Paneling, Kitchens, Design)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] transition-all bg-white shadow-xs"
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
                  className="mw-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#5C3A21]" style={{ borderColor: theme.border }}>
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
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.darkWood }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#BA7A3E]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(232, 223, 213, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.darkWood }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#D4A373]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                TURNKEY CONTRACT INTERIOR FITOUTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Transform Your Space With Master Woodcraft
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior interior architects and master wood joinery engineers to initiate concept design, 3D renderings, and bespoke timber manufacturing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Custom Scoping</span>
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
