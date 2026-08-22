"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Leaf,
  Scale,
  Users2,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
} from "../components/TDRCShared";

const CATEGORIES = [
  "All",
  "Peer-Reviewed Papers",
  "Environmental Impact Reports",
  "Policy Briefs",
  "Hydrological Monographs",
  "Arid Agro-Forestry Manuals",
];

const PUBLICATIONS = [
  {
    title: "Arid Zone Sand Dune Stabilization Through Indigenous Botanical Shelterbelts",
    category: "Peer-Reviewed Papers",
    author: "Dr. Tariq Mahmood & TDRC Botanical Research Wing",
    year: "2025",
    journal: "Journal of Arid Land Ecology & Desertification Studies",
    desc: "A 4-year empirical field study evaluating root tensile strength, sand migration mitigation, and micro-climate moderation of acacia, moringa, and ziziphus shelterbelts in the Thal Desert.",
    tag: "Peer-Reviewed Paper",
    image: "/tdrc_hero_research.svg",
  },
  {
    title: "Indus Basin Groundwater Depletion Dynamics & Managed Aquifer Recharge Models",
    category: "Hydrological Monographs",
    author: "Engr. S. A. Rizvi & Hydrogeology Division",
    year: "2024",
    journal: "TDRC Technical Hydrology Monograph No. 42",
    desc: "Comprehensive 120-piezometer telemetric assessment of groundwater drawdown, salinity stratification, and artificial check-dam recharge feasibility across the Indus-Jhelum Doab.",
    tag: "Hydrology Monograph",
    image: "/tdrc_hero_research.svg",
  },
  {
    title: "National Policy Brief: Climate Change Adaptation in Arid Pastoral Zones",
    category: "Policy Briefs",
    author: "TDRC Policy & Governance Directorate",
    year: "2025",
    journal: "Submitted to Federal Ministry of Climate Change & Environmental Coordination",
    desc: "Evidence-based strategic policy recommendations covering drought early warnings, livestock insurance, community water rights, and subsidized solar irrigation schemes.",
    tag: "Executive Policy Brief",
    image: "/tdrc_hero_research.svg",
  },
  {
    title: "Standardized Environmental Impact Assessment (EIA) Guidelines for Solar Mega-Parks",
    category: "Environmental Impact Reports",
    author: "Environmental Compliance & Ecology Directorate",
    year: "2024",
    journal: "EPA Pakistan Certified EIA Practitioner Manual",
    desc: "Practical operational framework outlining baseline ecological surveying, biodiversity corridor preservation, dust suppression protocols, and decommissioning requirements for solar projects.",
    tag: "EIA Practitioner Manual",
    image: "/tdrc_hero_research.svg",
  },
  {
    title: "Community-Managed High-Efficiency Drip Irrigation in Arid Soils: A 5-Year Field Trial",
    category: "Arid Agro-Forestry Manuals",
    author: "Agricultural Sciences Research Unit",
    year: "2025",
    journal: "International Agro-Sciences & Water Management Journal",
    desc: "Detailed comparative trial documenting 65% water savings, root zone moisture dynamics, and 35% crop yield gains across high-density date-palm and olive orchards.",
    tag: "Agro-Sciences Study",
    image: "/tdrc_hero_research.svg",
  },
  {
    title: "Socioeconomic Baseline and Gender Inclusivity in Punjab Desert Value Chains",
    category: "Policy Briefs",
    author: "Social Development & Community Welfare Wing",
    year: "2024",
    journal: "TDRC Rural Development Working Paper Series",
    desc: "In-depth survey of 3,500 rural households examining women participation in organic moringa processing, micro-finance access, and village-level climate resilience.",
    tag: "Social Research Paper",
    image: "/tdrc_hero_research.svg",
  },
];

export default function TDRCPublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PUBLICATIONS.filter((pub) => {
    const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Knowledge Repository &amp; Research Library</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
              Scientific Papers, <span style={{ color: theme.primaryDark }}>Policy Briefs &amp; Reports</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Access our library of peer-reviewed journal papers, Environmental Impact Assessment manuals, hydrological groundwater monographs, and evidence-based policy briefs.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search papers by title, author, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] transition-all bg-white shadow-xs"
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
                      ? "bg-[#1F7A3E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#2E9E54]"
                  }`}
                  style={{ borderColor: active ? theme.primaryDark : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pub) => (
              <div
                key={pub.title}
                className="tdrc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E1F17]" style={{ borderColor: theme.border }}>
                        {pub.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
                      <Calendar size={13} className="text-[#2E9E54]" />
                      <span>Published {pub.year}</span>
                    </div>

                    <h3 className="text-lg font-black mb-2" style={{ color: theme.ink }}>
                      {pub.title}
                    </h3>

                    <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#1F7A3E]">
                      {pub.author}
                    </p>

                    <p className="text-xs text-slate-500 italic mb-3">
                      {pub.journal}
                    </p>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {pub.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/TDRC/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.ink }}
                  >
                    <Download size={14} />
                    <span>Request Full-Text PDF</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#1F7A3E]">
                ACADEMIC &amp; SCIENTIFIC RESEARCH EXCHANGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Request Dataset Access Or Joint Publication
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Universities and research fellows can request access to raw GIS shapefiles, piezometric groundwater telemetry, and botanical screening repositories.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Request Data Access</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.ink, color: theme.ink }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
