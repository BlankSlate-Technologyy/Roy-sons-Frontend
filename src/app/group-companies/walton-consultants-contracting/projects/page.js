"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  HardHat,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonShared";
import { WALTON_PROJECTS } from "../projects-data";

const CATEGORIES = [
  "All",
  "Commercial High-Rises",
  "Industrial Complexes",
  "Highways & Bridges",
  "Logistics & PEB",
];

export default function WaltonProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = WALTON_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Civil Infrastructure Portfolio</SectionLabel>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight leading-[1.2] uppercase mb-5" style={{ color: theme.navyDark }}>
              Signature Executed <span style={{ color: theme.navy }}>Engineering Projects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark mega-infrastructure developments, 45-storey commercial high-rises, multi-span highway flyovers, and turnkey industrial complexes across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects (e.g. Ring Road, Textile Plant, Twin Towers)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] transition-all bg-white shadow-xs"
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
                      ? "bg-[#0E2A47] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0E2A47]"
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.slug}
                id={proj.id}
                className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <Link
                    href={`/group-companies/walton-consultants-contracting/projects/${proj.slug}`}
                    className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={proj.heroImage}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E2A47]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500">
                      <MapPin size={13} className="text-[#C5A059] flex-shrink-0" />
                      <span className="line-clamp-1">{proj.location}</span>
                    </div>

                    <Link href={`/group-companies/walton-consultants-contracting/projects/${proj.slug}`}>
                      <h3 className="text-xl font-black mb-2 hover:text-[#0E2A47] transition-colors cursor-pointer" style={{ color: theme.navyDark }}>
                        {proj.name}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.overview}
                    </p>

                    {/* Technical Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(216, 226, 236, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Key Technical Deliverables:
                      </p>
                      {proj.technicalSpecs.slice(0, 3).map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                          <span className="text-xs font-medium text-slate-700 leading-snug">
                            <strong>{s.key}:</strong> {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 flex gap-2">
                  <Link
                    href={`/group-companies/walton-consultants-contracting/projects/${proj.slug}`}
                    className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/group-companies/walton-consultants-contracting/contact"
                    className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                    title="Request Proposal"
                  >
                    <span>Quote</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                PROVEN TRACK RECORD &amp; EPC EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Looking To Execute A Major Civil Infrastructure Project?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect directly with our Chief Engineer to review structural drawings, BOQ rate analyses, and milestone execution schedules.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Proposal</span>
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

      <WaltonFooter />
    </main>
  );
}
