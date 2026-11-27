"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
} from "../components/AlphaMatrixShared";
import { ALPHA_INDUSTRIES } from "../industries-data";

export default function AlphaMatrixIndustriesOverviewPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = ALPHA_INDUSTRIES.filter((ind) => {
    const q = searchQuery.toLowerCase();
    return (
      ind.title.toLowerCase().includes(q) ||
      ind.eyebrow.toLowerCase().includes(q) ||
      ind.overview.toLowerCase().includes(q)
    );
  });

  return (
    <main
      className="min-h-screen font-sans selection:bg-[#0284C7] selection:text-white"
      style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
    >
      <AlphaMatrixNavbar />

      {/* Hero Banner - Dark Command Styling */}
      <section
        className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#38BDF8] font-bold">INDUSTRIES</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 mb-5 text-[#38BDF8] text-xs sm:text-[13px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            CRITICAL SECTOR DEFENSE PORTFOLIO
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-[1.1]">
                Critical Sectors We Fortify &amp; Safeguard
              </h1>
              <p className="text-base sm:text-lg font-medium leading-relaxed max-w-3xl" style={{ color: "#E2E8F0" }}>
                Alpha Matrix protects 12 mission-critical national defense, utility, transit, and sovereign industrial sectors with turnkey physical security, electronic countermeasures, and autonomous surveillance.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Protected Sectors</p>
                <p className="text-2xl font-black text-white mt-1">12 Verticals</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Border Fronts</p>
                <p className="text-2xl font-black text-[#38BDF8] mt-1">1,200+ km</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Pipelines</p>
                <p className="text-2xl font-black text-white mt-1">3,500+ km</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Aviation Hubs</p>
                <p className="text-2xl font-black text-[#38BDF8] mt-1">18 Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Light Rhythm Section */}
      <section
        className="py-20 lg:py-28 px-6 border-b border-slate-200"
        style={{ backgroundColor: "#FFFFFF", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl">
          {/* Header & Filter Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#005691] uppercase block mb-2">
                Sector Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#08182B] tracking-tight uppercase">
                Specialized Sector Architectures
              </h2>
              <p className="text-base text-slate-700 font-medium mt-2 max-w-2xl leading-relaxed">
                Select a sector to explore custom-engineered perimeter matrices, surveillance specifications, and compliance standards.
              </p>
            </div>

            <div className="relative w-full md:w-80 shrink-0">
              <input
                type="text"
                placeholder="Filter by sector, facility, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 bg-slate-50 focus:outline-none focus:border-[#005691] focus:bg-white transition-colors shadow-xs"
              />
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            </div>
          </div>

          {/* 12 Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#005691] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Photo Showcase with Zoom Effect */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100 alpha-img-wrapper">
                    <Image
                      src={ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/85 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/80 text-[#38BDF8] border border-sky-500/30 backdrop-blur-md">
                        {ind.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-[#38BDF8]">
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-bold text-slate-100 uppercase tracking-wide">{ind.eyebrow}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-[#08182B] tracking-tight group-hover:text-[#005691] transition-colors leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed mt-2.5 line-clamp-3">
                        {ind.overview}
                      </p>
                    </div>

                    {/* Applications Checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Tactical Scope</p>
                      <div className="space-y-2">
                        {ind.applications.slice(0, 3).map((app, appIdx) => (
                          <div key={appIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 font-medium">
                            <CheckCircle2 size={15} className="text-[#005691] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/group-companies/alpha-matrix/industries/${ind.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#005691] hover:text-[#0284C7] transition-colors"
                      >
                        <span>View Sector Architecture</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Consultation Banner - Dark Section */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl border border-sky-500/25 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
            style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase block">
                SECTOR DEFENSE INTEGRATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                Fortify Your Sector Infrastructure
              </h2>
              <p className="text-base font-medium leading-relaxed" style={{ color: "#CBD5E1" }}>
                Connect with our mission-critical defense engineers for an on-site survey, vulnerability analysis, and customized physical &amp; cyber security deployment.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white px-7 py-3.5 rounded-xl bg-[#005691] hover:bg-[#0284C7] shadow-xl transition-all"
              >
                <span>Book Sector Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
