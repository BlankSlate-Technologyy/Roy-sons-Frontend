"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  BriefcaseMedical,
  Check,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
} from "../components/PakMedicalShared";

const CATEGORIES = [
  "All",
  "Hospital Engineering",
  "Clean Rooms",
  "Medical Gas Systems",
  "HVAC & Ventilation",
  "Hospital Infrastructure",
  "Healthcare Equipment",
];

const MEDICAL_SERVICES = [
  {
    id: "hospital-engineering",
    title: "Hospital Engineering & Modular OTs",
    category: "Hospital Engineering",
    subtitle: "Turnkey Modular Surgical Suites & Critical Care Units",
    desc: "Designing and constructing pre-fabricated modular operation theatres (MOT), ICU suites, and emergency trauma centers with hermetically sealed doors and antimicrobial wall cladding.",
    image: "/images/pakmedical/service_hospital_engineering.jpg",
    deliverables: [
      "Modular stainless steel 304 / antimicrobial HPL wall paneling with antistatic vinyl flooring",
      "Ceiling-mounted articulated surgical pendants with medical gas and high-voltage electrical sockets",
      "Microprocessor-based surgeon control panels with digital timing, pressure, and temperature telemetry",
      "Hermetically sealed automatic sliding doors with touchless infrared sensor operation",
    ],
  },
  {
    id: "clean-room-systems",
    title: "Clean Room Solutions & Environments",
    category: "Clean Rooms",
    subtitle: "ISO 14644 & cGMP Compliant Sterile Suites",
    desc: "Turnkey engineering of pharmaceutical clean rooms, sterile vaccine filling suites, biotechnology research laboratories, and hospital sterile processing departments (CSSD).",
    image: "/images/pakmedical/service_cleanrooms.jpg",
    deliverables: [
      "50mm high-density PUF-insulated sandwich wall and ceiling panels with flush covings",
      "Laminar flow HEPA terminal fan filter units (FFU) with 99.99% efficiency at 0.3 microns",
      "Dynamic and static interlocking cleanroom pass boxes with UV sterilization lamps",
      "Cascading differential pressure airlocks preventing cross-contamination between hygiene zones",
    ],
  },
  {
    id: "medical-gas-pipeline",
    title: "Medical Gas Pipeline Systems (MGPS)",
    category: "Medical Gas Systems",
    subtitle: "HTM 02-01 & NFPA 99 Certified Central Distribution",
    desc: "Centralized medical gas supply networks for clinical oxygen, nitrous oxide, medical vacuum, surgical compressed air (7 bar), and anaesthetic gas scavenging systems (AGSS).",
    image: "/images/pakmedical/service_medgas.jpg",
    deliverables: [
      "Medical-grade degreased seamless copper piping brazed with high-purity nitrogen purge",
      "Duplex automatic manifolds with cryogenic liquid oxygen (VIE) cylinder changeover plants",
      "Microprocessor digital alarm panels continuously reporting pipeline pressure across ICU wards",
      "BS / DIN / AFNOR quick-connect terminal gas outlets with color-coded safety gas indexing",
    ],
  },
  {
    id: "hvac-engineering",
    title: "HVAC & Cleanroom Air Handling",
    category: "HVAC & Ventilation",
    subtitle: "Hygienic Hospital Air Systems & Positive Pressure Cascades",
    desc: "Custom hospital air handling units (AHU) engineered with multi-stage HEPA filtration, precision humidity control, and energy-saving variable air volume (VAV) mechanisms.",
    image: "/images/pakmedical/service_hvac.jpg",
    deliverables: [
      "Double-skin antimicrobial AHUs with thermal break profiles and smooth washable interiors",
      "Three-stage air filtration: G4 pre-filters, F9 intermediate bag filters, and H14 terminal HEPAs",
      "Precision room temperature (18°C–22°C) and relative humidity (45%–55%) automated regulation",
      "100% sterile fresh-air systems with zero-cross-contamination run-around heat recovery loops",
    ],
  },
  {
    id: "turnkey-projects",
    title: "Hospital Infrastructure & MEP Engineering",
    category: "Hospital Infrastructure",
    subtitle: "Turnkey Architectural Planning, Civil & Biomedical MEP",
    desc: "Executing complete turn-key development of multi-specialty hospitals, medical universities, diagnostic centers, and specialized cancer institutes from concept to COD inauguration.",
    image: "/images/pakmedical/service_infrastructure.jpg",
    deliverables: [
      "Detailed architectural healthcare zoning separating sterile, semi-sterile, and non-sterile flows",
      "Isolated Power Systems (IPS) and Line Isolation Monitors (LIM) for surgical theater electrical safety",
      "Lead-lined radiation protection walls, doors, and viewing windows for X-Ray, CT, and MRI suites",
      "Specialized plumbing with thermal sterilization loops to prevent legionella bacterial colonization",
    ],
  },
  {
    id: "equipment-installation",
    title: "Healthcare Equipment & Critical Care",
    category: "Healthcare Equipment",
    subtitle: "Articulated Pendants, Operating Lights & Bedhead Systems",
    desc: "Supply, mechanical mounting, testing, and clinical commissioning of specialized hospital hardware, operating theatre lights, anesthesia pendants, and ICU infrastructure.",
    image: "/images/pakmedical/service_equipment.jpg",
    deliverables: [
      "Dual-arm heavy-duty articulated surgical pendants with pneumatic braking and monitor mounts",
      "Multi-reflector shadowless LED surgical lamps with integrated HD endoscopic video cameras",
      "Architectural bedhead units (BHU) integrating patient reading lights, nurse call, and gas outlets",
      "Biomedical grounding systems compliant with IEC 60601 clinical electrical safety codes",
    ],
  },
];

export default function PakMedicalServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = MEDICAL_SERVICES.filter((srv) => {
    const matchesCategory = selectedCategory === "All" || srv.category === selectedCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SERVICES HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <SectionLabel>Integrated Medical Engineering</SectionLabel>
            <SectionHeading>ENGINEERED FOR CRITICAL HEALTHCARE</SectionHeading>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mt-4">
              From hospital infrastructure to sterile environments and medical gas systems, we deliver integrated engineering solutions built around safety, reliability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SEARCH & FILTER CONTROLS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
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

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. LARGE SERVICE CARDS WITH STRONG IMAGE HEADERS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className="pakmed-card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Header with Zoom on Hover */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[#0A2540] border border-slate-200 shadow-xs">
                    {srv.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/65 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10.5px] font-bold text-[#0D7C85] uppercase tracking-wider block mb-1">
                      {srv.subtitle}
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0A2540] mb-3 group-hover:text-[#1A4FA0] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4 space-y-2 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Deliverables:
                      </p>
                      {srv.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check size={14} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/group-companies/pak-janitorial/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1A4FA0] hover:text-[#0E3570] group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Engineering Proposal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-500">No medical engineering services match your search.</p>
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
          4. CONSULTATION CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white text-center">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
            LET&apos;S BUILD BETTER HEALTHCARE ENVIRONMENTS
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Consult our principal hospital engineers to scope your clinical MEP, cleanroom, or medical gas pipeline requirements.
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
