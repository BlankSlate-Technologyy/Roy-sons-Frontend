"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Landmark,
  Factory,
  Building2,
  Zap,
  Layers,
  Globe,
  HardHat,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Search,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalMinesShared";
import { NATIONAL_MINES_INDUSTRIES } from "../industries-data";

export default function NationalMinesIndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_MINES_INDUSTRIES.filter(
    (ind) =>
      ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>Downstream Supply Chains</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-4" style={{ color: theme.navy }}>
              Empowering Essential <span style={{ color: theme.gold }}>Global Industries</span>
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              From heavy infrastructure and commercial construction to thermal power, steel fabrication, and cement manufacturing, our mineral resources form the foundation of industrial progress.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Construction, Energy, Cement)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#C59B27] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ind) => {
              const Icon = ind.icon || Factory;
              return (
                <div
                  key={ind.slug}
                  id={ind.id}
                  className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    {/* Visual with hover zoom */}
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="mine-img-wrapper block w-full h-48 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={ind.heroImage}
                        alt={ind.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {ind.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}15` }}>
                          <Icon size={16} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: theme.navy }}>
                          <Link href={`/group-companies/national-mines/industries/${ind.slug}`} className="hover:text-[#C59B27] transition-colors">
                            {ind.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-[11px] font-medium text-amber-700 mb-2">
                        {ind.eyebrow}
                      </p>

                      <p className="text-xs font-normal leading-relaxed text-slate-500 mb-3 line-clamp-2">
                        {ind.overview}
                      </p>

                      {/* Applications preview */}
                      <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {ind.applications.slice(0, 2).map((app, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-emerald-600" />
                            <span className="text-xs font-normal text-slate-700 leading-snug">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Link — NO BIG BUTTONS */}
                  <div className="px-5 pb-4 pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.gold }}
                    >
                      <span>Explore industry supply specs</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-white shadow-xs" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Industrial Mineral Off-Take &amp; Rail Freight
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Need Dedicated Feedstock Deliveries for Your Manufacturing Plant?
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                We establish guaranteed monthly volume contracts and rail siding dispatch schedules for cement plants, steel mills, and chemical factories.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Inquire About Industrial Supply</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
