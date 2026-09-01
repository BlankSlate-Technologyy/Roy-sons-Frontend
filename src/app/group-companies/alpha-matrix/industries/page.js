"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  MapPin,
  Plane,
  Ship,
  Flame,
  Zap,
  Building2,
  Server,
  Network,
  Building,
  Wrench,
  ArrowRight,
  ChevronRight,
  Search,
  Award,
  CheckCircle2,
} from "lucide-react";
import {
  theme,
  hexToRgba,
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
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      {/* ─── Global Alpha Matrix Header ───────────────────────────────────── */}
      <AlphaMatrixNavbar />

      {/* ─── Breadcrumb Navigation Bar ────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Link href="/group-companies/alpha-matrix" className="hover:text-[#005691] transition-colors">
              Alpha Matrix
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span style={{ color: theme.gold }} className="font-extrabold">Sectors Protected</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-14 lg:py-24 border-b overflow-hidden" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-[#005691]">
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>CROSS-SECTOR SOVEREIGN PROTECTION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase" style={{ color: theme.navy }}>
                Industries We <br />
                <span style={{ color: theme.gold }}>Fortify &amp; Defend</span>
              </h1>

              <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                Alpha Matrix safeguards 12 critical national and commercial sectors. Select a sector vertical below to view its dedicated tactical requirements, security architecture, and operational profile.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Sectors</p>
                  <p className="text-2xl font-black mt-0.5" style={{ color: theme.gold }}>12 Verticals</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Borders</p>
                  <p className="text-2xl font-black text-[#005691] mt-0.5">1,200+ km</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Pipelines</p>
                  <p className="text-2xl font-black mt-0.5" style={{ color: theme.gold }}>3,500+ km</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">Airports</p>
                  <p className="text-2xl font-black text-[#005691] mt-0.5">18 Hubs</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative group rounded-3xl overflow-hidden border shadow-xl bg-white" style={{ borderColor: theme.border }}>
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-slate-50">
                  <Image
                    src="/alpha_airport_defense.svg"
                    alt="Sectors Protected by Alpha Matrix"
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50" style={{ color: theme.gold }}>
                          <Award size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">High-Threat Sectors</p>
                          <p className="text-xs font-black uppercase" style={{ color: theme.navy }}>Critical National Infrastructure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Search & 12 Dedicated Industry Cards Grid ──────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12" data-aos="fade-up">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] block mb-1" style={{ color: theme.gold }}>
                SECTOR PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase" style={{ color: theme.navy }}>
                Select a Sector to Open Its Dedicated Page
              </h2>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#005691] bg-slate-50 shadow-xs"
                style={{ borderColor: theme.border }}
              />
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Grid of 12 Dedicated Sector Cards with Direct Detail Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="rounded-2xl border bg-white shadow-xs hover:shadow-xl hover:border-[#005691] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
                  style={{ borderColor: theme.border }}
                >
                  {/* Top Image Showcase with Hover Zoom Out Effect */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-50">
                    <Image
                      src={ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out scale-115 group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/70 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 text-[#005691] shadow-xs backdrop-blur-xs">
                        {ind.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-bold text-slate-200">{ind.eyebrow}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black uppercase group-hover:text-[#005691] transition-colors leading-snug" style={{ color: theme.navy }}>
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-2">
                        {ind.overview}
                      </p>
                    </div>

                    {/* Key Applications */}
                    <div className="pt-2">
                      <p className="text-[11px] font-black uppercase tracking-wider mb-2" style={{ color: theme.gold }}>Key Defense Scope</p>
                      <div className="space-y-1.5">
                        {ind.applications.slice(0, 3).map((app, appIdx) => (
                          <div key={appIdx} className="flex items-start gap-2 text-[11.5px] text-slate-700 font-medium">
                            <CheckCircle2 size={13} className="text-[#005691] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Detail Link Button to Dedicated Separate Page */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={`/group-companies/alpha-matrix/industries/${ind.slug}`}
                        className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs hover:bg-[#004070]"
                        style={{ backgroundColor: theme.gold }}
                      >
                        <span>Open {ind.title} Page</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Consultation Desk ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border p-8 sm:p-12 bg-gradient-to-r from-[#002244] to-[#005691] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8" data-aos="zoom-in">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] bg-white/10 px-3 py-1 rounded-full text-white">
                SECTOR DEFENSE INTEGRATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase">
                Fortify Your Sector Infrastructure
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Connect with our mission-critical defense engineers for an on-site survey and customized physical and cyber security roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#002244] bg-white hover:bg-slate-100 text-center transition-all shadow-md cursor-pointer"
              >
                Book Sector Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Global Alpha Matrix Footer ───────────────────────────────────── */}
      <AlphaMatrixFooter />
    </div>
  );
}
