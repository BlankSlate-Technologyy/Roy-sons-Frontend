"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  ShieldCheck,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  Sliders,
  Check,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  CardImageSlider,
} from "../components/PakMedicalShared";

const CATEGORIES = [
  "All",
  "Operating Theatre Solutions",
  "Clean Room Systems",
  "Medical Gas Systems",
  "HVAC & Air Handling",
  "Hospital Engineering Systems",
  "Sterile Processing Solutions",
  "Critical Care Infrastructure",
];

const HEALTHCARE_SOLUTIONS = [
  {
    id: "ultramot",
    name: "PakMed UltraMOT Modular Operating Theatre",
    category: "Operating Theatre Solutions",
    specs: [
      "Wall Paneling: Antimicrobial HPL / Seamless SS304",
      "Laminar Airflow: 0.45 m/s velocity ceiling plenum",
      "Door Systems: Hermetically sealed automatic sliding",
      "Surgeon Console: Digital touchscreen telemetry panel",
    ],
    desc: "Complete pre-fabricated surgical suite package engineered with integrated surgeon control panels, shadowless surgical LED lighting, antistatic vinyl, and articulated gas pendants.",
    images: [
      "/images/pakmedical/solution_ot.jpg",
      "/images/pakmedical/hero_operating_theatre.jpg",
      "/images/pakmedical/service_hospital_engineering.jpg",
    ],
    isFeatured: true,
  },
  {
    id: "cleanpro",
    name: "PakMed CleanPro ISO Class 4–8 Clean Room",
    category: "Clean Room Systems",
    specs: [
      "Cleanliness Class: ISO 14644 Class 4–8 / EU cGMP A–D",
      "Envelope: 50mm high-density PUF insulated panels",
      "Filtration: H14 terminal HEPA Fan Filter Units (FFU)",
      "Airlocks: Dynamic interlock high-velocity pass boxes",
    ],
    desc: "Turnkey pharmaceutical and biotechnology cleanroom envelope featuring flush coving, return air risers, differential pressure cascade dampers, and automated UV decontamination.",
    images: [
      "/images/pakmedical/solution_cleanroom.jpg",
      "/images/pakmedical/hero_cleanroom.jpg",
      "/images/pakmedical/service_cleanrooms.jpg",
    ],
    isFeatured: true,
  },
  {
    id: "medigas",
    name: "PakMed MediGas Central MGPS Plant & Pipeline",
    category: "Medical Gas Systems",
    specs: [
      "Standard: HTM 02-01 / NFPA 99 / ISO 7396-1",
      "Central Plant: Duplex vacuum & oil-free medical air",
      "Cryogenic VIE: Automatic manifold cylinder plants",
      "Outlets: BS / DIN / AFNOR gas terminal units",
    ],
    desc: "Engineered medical gas supply network with degreased medical copper piping, digital area alarm valves, and emergency shut-off boxes for operating theatres and ICUs.",
    images: [
      "/images/pakmedical/solution_medgas.jpg",
      "/images/pakmedical/hero_medgas.jpg",
      "/images/pakmedical/service_medgas.jpg",
    ],
    isFeatured: true,
  },
  {
    id: "hvac-ahu",
    name: "PakMed AeroPure Hygienic Hospital AHU",
    category: "HVAC & Air Handling",
    specs: [
      "Casing: Double-skin thermal break antimicrobial",
      "Filtration: 3-stage G4 + F9 + H14 terminal HEPA",
      "Energy Recovery: Run-around loop zero-cross heat recovery",
      "Control: Direct digital control (DDC) BMS integration",
    ],
    desc: "Custom hospital air handling system engineered to supply 100% sterile conditioned air, maintaining positive pressure in surgical theaters and negative pressure in airborne isolation rooms.",
    images: [
      "/images/pakmedical/solution_hvac.jpg",
      "/images/pakmedical/service_hvac.jpg",
    ],
    isFeatured: false,
  },
  {
    id: "hospital-mep",
    name: "PakMed PowerGuard Isolated Electrical Systems (IPS)",
    category: "Hospital Engineering Systems",
    specs: [
      "Isolation Transformer: 3.15kVA to 10kVA medical grade",
      "Monitoring: Microprocessor Line Isolation Monitor (LIM)",
      "Standards: IEC 60364-7-710 / NFPA 99 compliance",
      "Grounding: Equipotential copper earth busbars",
    ],
    desc: "Fault-tolerant electrical distribution protecting patients and surgical staff from electric shock hazards during cardiac catheterization and invasive surgical procedures.",
    images: [
      "/images/pakmedical/solution_engineering.jpg",
      "/images/pakmedical/service_infrastructure.jpg",
    ],
    isFeatured: false,
  },
  {
    id: "sterile-processing",
    name: "PakMed SteriFlow Central Sterile Supply (CSSD)",
    category: "Sterile Processing Solutions",
    specs: [
      "Zoning: Strict 3-zone dirty, clean, and sterile flow",
      "Equipment: Pass-through steam autoclaves and washers",
      "Airflow: Positive pressure cascade toward clean core",
      "Surfaces: Heavy-duty 316L medical stainless steel",
    ],
    desc: "Turnkey department design for hospital surgical instrument reprocessing, ultrasonic decontamination, sterile packaging, and automated autoclave barrier systems.",
    images: [
      "/images/pakmedical/solution_sterile.jpg",
      "/images/pakmedical/hero_hospital_engineering.jpg",
    ],
    isFeatured: false,
  },
  {
    id: "icu-pendants",
    name: "PakMed OmniCare Articulated ICU & Surgical Pendants",
    category: "Critical Care Infrastructure",
    specs: [
      "Arm Configuration: Dual-articulated 330° motorized rotation",
      "Payload Capacity: Up to 350kg medical device payload",
      "Gas Outlets: Up to 8 multi-gas quick connect ports",
      "Data: Integrated RJ45 Cat6A and fiber telemetry",
    ],
    desc: "Ceiling-suspended medical supply units for intensive care beds and operating rooms, elevating gas hoses and monitor cables off the surgical floor for maximum sterility.",
    images: [
      "/images/pakmedical/solution_critical_care.jpg",
      "/images/pakmedical/service_equipment.jpg",
    ],
    isFeatured: false,
  },
];

export default function PakMedicalSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSolutions = HEALTHCARE_SOLUTIONS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SOLUTIONS HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Engineered Healthcare Equipment &amp; Packages</SectionLabel>
              <SectionHeading>COMPLETE HEALTHCARE ENGINEERING SOLUTIONS</SectionHeading>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mt-4">
                Engineered for critical hospital environments, ISO clean rooms, and surgical theatres. Every system is built to international standards with verified clinical uptime.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/pakmedical/solutions_hero.jpg"
                  alt="Pakistan Medical Supplies Healthcare Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    ISO 14644 &bull; HTM 02-01 &bull; IEC 60601 Certified Packages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CATEGORY PILLS & SEARCH FILTER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#1A4FA0] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SOLUTIONS PRODUCT CARDS (Mini Sliders for Featured)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((item) => (
              <div
                key={item.id}
                className="pakmed-card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Header / Mini Carousel */}
                <CardImageSlider
                  images={item.images}
                  alt={item.name}
                  height="h-56"
                />

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0D7C85]">
                        {item.category}
                      </span>
                      {item.isFeatured && (
                        <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#1A4FA0]/10 text-[#1A4FA0]">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0A2540] mb-3 group-hover:text-[#1A4FA0] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4 space-y-2 mb-6">
                      {item.specs.map((s) => (
                        <div key={s} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                          <Check size={13} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/group-companies/pak-janitorial/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1A4FA0] hover:text-[#0E3570] group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Technical Datasheet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-500">No medical engineering solutions match your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-[#1A4FA0] hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CONSULTATION CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white text-center">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
            CUSTOM HEALTHCARE INFRASTRUCTURE PACKAGES
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Need customized dimensions, CAD drafting, or technical equipment integration for your hospital project?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/group-companies/pak-janitorial/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0A2540] bg-white hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Consult Bio-Engineer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
