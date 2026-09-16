"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  Award,
  ArrowRight,
  Search,
  CheckCircle2,
  X,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";
import { WALTON_PROJECTS } from "../projects-data";

export default function WaltonProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Highways & Bridges",
    "Commercial & Urban",
    "Industrial & Energy",
    "Sustainable & Water",
  ];

  const filtered = WALTON_PROJECTS.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. PROJECTS HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Infrastructure &amp; Civil Portfolio</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                PROJECTS BUILT TO <span style={{ color: theme.navy }}>MAKE AN IMPACT</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                Over 350 completed projects across Pakistan. Our portfolio spans arterial highway interchanges, prestressed river bridges, high-rise commercial towers, turnkey industrial factories, and sustainable utility works.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Submit Project RFP</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/walton-consultants-contracting/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 text-[#0A1E34] hover:bg-slate-50 transition-all"
                >
                  <span>Our Engineering Divisions</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/walton/project_01_interchange.jpg"
                  alt="Walton Civil Infrastructure Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#DFC48B] block mb-1">
                      Over PKR 100B+ Delivered
                    </span>
                    <h4 className="text-base font-bold">
                      National Infrastructure &amp; Commercial Superstructures
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER TABS & SEARCH
      ───────────────────────────────────────────────────────────── */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA] sticky top-14 sm:top-16 z-30 shadow-xs">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0E2A47] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
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
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-[#0A1E34] bg-white focus:outline-hidden focus:border-[#C5A059] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROJECT PORTFOLIO GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="walton-card-lift rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
              >
                <div>
                  {/* Large Project Image */}
                  <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover walton-img-zoom transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/70 via-transparent to-transparent" />
                    
                    {/* Project Category */}
                    <span className="absolute top-3.5 right-3.5 text-[10px] font-black uppercase px-3 py-1 rounded-full bg-[#C5A059] text-white shadow-xs">
                      {p.category}
                    </span>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-4 text-white flex items-center gap-1.5 text-xs font-bold">
                      <MapPin size={13} className="text-[#DFC48B]" />
                      <span>{p.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-base font-black text-[#0A1E34] leading-snug mb-2 group-hover:text-[#0E2A47] transition-colors">
                      {p.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {p.summary}
                    </p>

                    <div className="py-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-semibold">Client:</span>
                      <span className="font-bold text-[#0A1E34] truncate max-w-[200px] text-right">{p.client}</span>
                    </div>
                  </div>
                </div>

                {/* View Project Interaction Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0A1E34] hover:bg-slate-50 hover:border-[#C5A059] transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-[#F4F7FA] rounded-2xl border border-slate-200">
              <p className="text-base font-bold text-slate-700">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold uppercase tracking-wider text-[#0E2A47] underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INTERACTIVE PROJECT DETAILS MODAL
      ───────────────────────────────────────────────────────────── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            {/* Modal Image Header */}
            <div className="relative w-full h-64 sm:h-72 bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/80 via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-[#C5A059] text-white inline-block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Location & Client meta */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#F4F7FA] border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 font-bold block">Location</span>
                  <span className="font-bold text-[#0A1E34]">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block">Client</span>
                  <span className="font-bold text-[#0A1E34]">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block">Contract Value</span>
                  <span className="font-bold text-[#C5A059]">{selectedProject.value}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1E34] mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Technical Scope */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1E34] mb-2.5">
                  Detailed Engineering Scope
                </h4>
                <ul className="space-y-2">
                  {selectedProject.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl border border-slate-200 bg-white text-center">
                    <span className="text-sm font-black text-[#0E2A47] block">{m.value}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white text-center shadow-xs hover:brightness-110 transition-all"
                  style={{ backgroundColor: theme.navy }}
                >
                  Consult on Similar Project
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. FINAL CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-xl text-white relative overflow-hidden"
            style={{ backgroundColor: theme.navyDark }}
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight mb-2 text-white">
                Have an Infrastructure or Construction Tender?
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Our estimation and civil engineering teams prepare competitive, fully compliant EPC proposals backed by PEC C-A No Limit licensing.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: theme.goldHover }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
