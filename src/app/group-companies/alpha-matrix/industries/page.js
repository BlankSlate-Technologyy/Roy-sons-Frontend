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
    <main className="alpha-matrix-theme min-h-screen font-sans bg-[#08182B] text-slate-100 selection:bg-[#0284C7] selection:text-white">
      <AlphaMatrixNavbar />

      {/* Hero Banner - Dark Command Styling */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10 bg-[#08182B]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-[#38BDF8]">INDUSTRIES</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 mb-4 text-[#38BDF8] text-[11px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            CRITICAL SECTOR DEFENSE PORTFOLIO
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                Critical Sectors We Fortify &amp; Safeguard
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl">
                Alpha Matrix protects 12 mission-critical national defense, utility, transit, and sovereign industrial sectors with turnkey physical security, electronic countermeasures, and autonomous surveillance.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Protected Sectors</p>
                <p className="text-xl font-medium text-white mt-0.5">12 Verticals</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Border Fronts</p>
                <p className="text-xl font-medium text-[#38BDF8] mt-0.5">1,200+ km</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Pipelines</p>
                <p className="text-xl font-medium text-white mt-0.5">3,500+ km</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Aviation Hubs</p>
                <p className="text-xl font-medium text-[#38BDF8] mt-0.5">18 Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Light Rhythm Section */}
      <section className="py-20 lg:py-24 px-6 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          {/* Header & Filter Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">Sector Coverage</span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#08182B] tracking-tight mt-1">
                Specialized Sector Architectures
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Select a sector to explore custom-engineered perimeter matrices, surveillance specifications, and compliance standards.
              </p>
            </div>

            <div className="relative w-full md:w-80 shrink-0">
              <input
                type="text"
                placeholder="Filter by sector, facility, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-normal text-slate-800 bg-slate-50 focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
              />
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* 12 Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0284C7]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Photo Showcase with Zoom Effect */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100 alpha-img-wrapper">
                    <Image
                      src={ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/85 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/95 text-[#08182B] shadow-xs backdrop-blur-xs font-semibold">
                        {ind.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#38BDF8]">
                          <Icon size={14} />
                        </div>
                        <span className="text-[11px] font-normal text-slate-200">{ind.eyebrow}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-[#08182B] tracking-tight group-hover:text-[#0284C7] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed mt-2 line-clamp-3">
                        {ind.overview}
                      </p>
                    </div>

                    {/* Applications Checklist */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Tactical Scope</p>
                      <div className="space-y-1.5">
                        {ind.applications.slice(0, 3).map((app, appIdx) => (
                          <div key={appIdx} className="flex items-start gap-2 text-[11px] text-slate-600 font-normal">
                            <CheckCircle2 size={12} className="text-[#0284C7] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Link (No heavy button) */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/group-companies/alpha-matrix/industries/${ind.slug}`}
                        className="alpha-link-arrow text-xs font-medium text-[#0284C7] hover:text-[#08182B] transition-colors"
                      >
                        <span>View Sector Architecture</span>
                        <ArrowRight size={13} />
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
      <section className="py-20 px-6 bg-[#050E1A] border-t border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl border border-white/10 p-8 sm:p-12 bg-gradient-to-r from-[#08182B] to-[#050E1A] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase">
                SECTOR DEFENSE INTEGRATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Fortify Your Sector Infrastructure
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Connect with our mission-critical defense engineers for an on-site survey, vulnerability analysis, and customized physical &amp; cyber security deployment.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="alpha-link-arrow text-xs font-medium text-white px-6 py-3 rounded-lg bg-[#0284C7] hover:bg-[#0284C7]/90 transition-colors"
              >
                <span>Book Sector Consultation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
