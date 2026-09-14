"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building,
  Award,
  Calendar,
  Layers,
  Sparkles,
  Search,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxWoodShared";
import { SIGNATURE_PROJECTS } from "../max-wood-data";

const CATEGORIES = [
  "All",
  "Dining & Hospitality",
  "Executive Office",
  "Architectural Paneling",
  "Bedroom Suites",
];

export default function MaxWoodProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = SIGNATURE_PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden selection:bg-[#BA7A3E] selection:text-white">
      <MaxWoodNavbar />

      {/* ─── BREADCRUMB ─── */}
      <div className="bg-[#FDFBF7] border-b py-3 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/group-companies/max-wood" className="hover:text-[#5C3A21] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#5C3A21]">Signature Projects</span>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section
        className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl text-center max-w-3xl">
          <SectionLabel center>MAX Wood Corporation Portfolio</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase mb-4"
            style={{ color: theme.darkWood }}
          >
            Signature Projects &amp; Turnkey Fitouts
          </h1>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 mb-8">
            Explore our delivered architectural woodwork, corporate executive headquarters, 5-star mountain resorts, and bespoke mega-villa millwork across Pakistan.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "text-white shadow-xs"
                    : "bg-white text-slate-700 border hover:bg-amber-50/50"
                }`}
                style={{
                  backgroundColor: selectedCategory === cat ? theme.primary : undefined,
                  borderColor: theme.border,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS LIST ─── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          {filteredProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={proj.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-10 rounded-3xl border bg-[#FDFBF7] shadow-xs"
                style={{ borderColor: theme.border }}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div
                    className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border group bg-slate-900"
                    style={{ borderColor: theme.border }}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-3 py-1 rounded-full text-[#5C3A21] shadow-xs">
                        {proj.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#BA7A3E]">
                    <MapPin size={14} />
                    <span>{proj.location}</span>
                  </div>

                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight"
                    style={{ color: theme.darkWood }}
                  >
                    {proj.title}
                  </h2>

                  <div className="grid grid-cols-2 gap-3 text-xs p-3.5 rounded-xl bg-white border" style={{ borderColor: theme.border }}>
                    <div>
                      <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Client</span>
                      <span className="font-semibold text-slate-800">{proj.client}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Duration</span>
                      <span className="font-semibold text-slate-800">{proj.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                    {proj.scope}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <strong className="text-xs font-black uppercase tracking-wider text-[#5C3A21] block">
                      Architectural Highlights:
                    </strong>
                    {proj.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 size={13} className="text-[#BA7A3E] shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-[#5C3A21] leading-relaxed">
                    <strong>Project Outcome:</strong> {proj.outcome}
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/group-companies/max-wood/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-xs transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <span>Inquire for Similar Project</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <MaxWoodFooter />
    </main>
  );
}
