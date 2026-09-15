"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  ShieldCheck,
  Building2,
  HeartPulse,
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
  "Modular Operation Theatres",
  "ISO Clean Rooms",
  "Medical Gas Pipeline (MGPS)",
  "Hospital HVAC & Isolation",
  "Critical Care ICUs",
];

const SIGNATURE_PROJECTS = [
  {
    id: "cancer-hospital-mot",
    name: "Tertiary Oncology Teaching Hospital Modular OTs",
    category: "Modular Operation Theatres",
    location: "Johar Town, Lahore, Punjab",
    status: "Operational – 6 Modular Surgical Suites",
    desc: "Complete turnkey design and installation of 6 world-class modular operation theatres featuring antimicrobial HPL wall systems, laminar airflow ceiling plenums, and digital surgeon control consoles.",
    specs: ["Scope: 6 Modular Operation Theatres", "Air Quality: ISO Class 5 Cleanliness", "Features: Articulated Dual-Arm Surgical Pendants"],
    images: [
      "/images/pakmedical/project_cancer_hospital.jpg",
      "/images/pakmedical/hero_operating_theatre.jpg",
    ],
  },
  {
    id: "vaccine-gmp-cleanrooms",
    name: "National Institute of Health Vaccine GMP Clean Rooms",
    category: "ISO Clean Rooms",
    location: "Chak Shahzad, Islamabad Capital Territory",
    status: "Validated – ISO Class 5 / GMP Grade A-B",
    desc: "Construction and qualification of specialized vaccine production cleanroom suites with sterile filling rooms, dynamic pass boxes, and automated cascading pressure differential airlocks.",
    specs: ["Area: 12,000 Sq Ft GMP Cleanroom Space", "Standard: WHO GMP & PIC/S Validated", "Airlocks: Interlocking High-Velocity Decon Showers"],
    images: [
      "/images/pakmedical/project_vaccine_cleanroom.jpg",
      "/images/pakmedical/hero_cleanroom.jpg",
    ],
  },
  {
    id: "cardiology-mgps",
    name: "Provincial Institute of Cardiology Central MGPS",
    category: "Medical Gas Pipeline (MGPS)",
    location: "Jail Road, Lahore, Punjab",
    status: "Active 24/7 – 450 Bed Medical Gas Network",
    desc: "Turnkey replacement and expansion of the hospital-wide medical gas pipeline network serving emergency, coronary care units, and 8 cardiac surgical theatres with zero clinical downtime.",
    specs: ["Network: 450 Medical Bed Gas Outlets", "Plant: Duplex 5,000L Cryogenic Oxygen VIE", "Code: Full HTM 02-01 Certification"],
    images: [
      "/images/pakmedical/project_cardiology_mgps.jpg",
      "/images/pakmedical/hero_medgas.jpg",
    ],
  },
  {
    id: "military-hospital-icu",
    name: "Combined Military Hospital Trauma & Critical Care ICU",
    category: "Critical Care ICUs",
    location: "Rawalpindi & Lahore Cantonment",
    status: "Commissioned – 60 Bed Multi-Disciplinary ICU",
    desc: "Engineering high-dependency critical care environments complete with heavy-duty ceiling-suspended medical supply pendants, medical architectural trunking, and positive isolation cubicles.",
    specs: ["Capacity: 60 High-Dependency ICU Beds", "Electrical: Isolated Power Systems (IPS) with LIM", "Integration: Touchless Hermetic Clean Doors"],
    images: [
      "/images/pakmedical/project_cmh_icu.jpg",
      "/images/pakmedical/solution_critical_care.jpg",
    ],
  },
  {
    id: "indus-hvac-isolation",
    name: "Metropolitan Healthcare Complex HVAC & Airborne Isolation Wards",
    category: "Hospital HVAC & Isolation",
    location: "Korangi & Karachi Coastal Healthcare District",
    status: "Operational – 28 Negative Pressure Suites",
    desc: "Precision engineering of negative pressure biocontainment infection isolation wards with dedicated 100% exhaust HEPA filtration and automated airflow balancing.",
    specs: ["Suites: 28 Negative Pressure Airborne Rooms", "Filtration: Safe-Change Bag-In/Bag-Out H14 HEPA", "Air Changes: 14+ Air Changes per Hour (ACH)"],
    images: [
      "/images/pakmedical/project_indus_hvac.jpg",
      "/images/pakmedical/service_hvac.jpg",
    ],
  },
  {
    id: "teaching-hospital-epc",
    name: "500-Bed Tertiary Teaching Hospital Turnkey Medical MEP",
    category: "Modular Operation Theatres",
    location: "Multan, South Punjab",
    status: "Completed – Turnkey EPC Medical Facility",
    desc: "End-to-end medical MEP engineering covering central medical gas generation plants, 12 modular surgical theaters, central CSSD, and clean water loop distribution.",
    specs: ["Capacity: 500 Inpatient Hospital Beds", "Surgical: 12 Modular Operation Theatres", "Turnkey: Concept, Civil MEP, Commissioning"],
    images: [
      "/images/pakmedical/hero_hospital_exterior.jpg",
      "/images/pakmedical/service_hospital_engineering.jpg",
    ],
  },
];

export default function PakMedicalProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = SIGNATURE_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. PROJECTS HERO BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Verified Clinical Case Studies</SectionLabel>
              <SectionHeading>ENGINEERING HEALTHCARE. DELIVERING IMPACT.</SectionHeading>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mt-4">
                Explore our landmark hospital infrastructure, modular surgical suites, ISO clean rooms, and medical gas pipeline projects delivered across Pakistan.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/pakmedical/projects_hero.jpg"
                  alt="Pakistan Medical Supplies Hospital Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    300+ Medical Projects &bull; 150+ Hospital Facilities Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTERS & SEARCH
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
                placeholder="Search projects or cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROJECT CARDS WITH IMAGE HEADERS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="pakmed-card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Header with Mini Slider */}
                <CardImageSlider
                  images={p.images}
                  alt={p.name}
                  height="h-56"
                />

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0D7C85]">
                        {p.category}
                      </span>
                      <span className="text-[9.5px] font-bold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Verified
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0A2540] mb-2 group-hover:text-[#1A4FA0] transition-colors">
                      {p.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                      <MapPin size={13} className="text-[#1A4FA0]" />
                      <span>{p.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {p.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-3 space-y-1.5 mb-6">
                      {p.specs.map((s) => (
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
                    <span>Request Case Study &amp; Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-500">No projects match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-[#1A4FA0] hover:underline"
              >
                Reset Filters
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
            PLANNING A HOSPITAL INFRASTRUCTURE PROJECT?
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Our engineering teams prepare full PC-1, BOQs, CAD drawings, and technical specifications for healthcare facility tenders nationwide.
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
