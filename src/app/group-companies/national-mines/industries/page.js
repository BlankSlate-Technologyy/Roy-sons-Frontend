"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  CheckCircle2,
  ArrowRight,
  Search,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
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
      <section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Downstream Supply Chains</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14] mb-4" style={{ color: theme.navy }}>
              Empowering Essential <span style={{ color: theme.gold }}>Global Industries</span>
            </h1>

            <p className="text-base sm:text-lg font-normal leading-relaxed mb-7" style={{ color: theme.textMuted }}>
              From CPEC infrastructure and commercial construction to Thar thermal power, integrated steel fabrication, and cement manufacturing, our Pakistani mineral reserves form the foundation of modern industrial growth.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Steel, Energy, Cement, Exports)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
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
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="mine-img-wrapper block w-full h-52 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={ind.heroImage}
                        alt={ind.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {ind.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}18` }}>
                          <Icon size={18} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          <Link href={`/group-companies/national-mines/industries/${ind.slug}`} className="hover:text-[#C59B27] transition-colors">
                            {ind.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs sm:text-[13px] font-semibold text-amber-700 mb-2.5">
                        {ind.eyebrow}
                      </p>

                      <p className="text-sm sm:text-[15px] font-normal leading-relaxed mb-4 line-clamp-3" style={{ color: theme.textMuted }}>
                        {ind.overview}
                      </p>

                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {ind.applications.slice(0, 2).map((app, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-emerald-700" />
                            <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-mines/industries/${ind.slug}`}
                      className="mine-link-arrow cursor-pointer"
                    >
                      <span>Explore industry supply specs</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FAFB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0B1B2B] text-white shadow-sm" style={{ borderColor: theme.borderDark }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Industrial Mineral Off-Take &amp; Rail Freight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Need Dedicated Feedstock Deliveries for Your Plant?
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-xl text-slate-200 leading-relaxed">
                We establish guaranteed monthly volume contracts and rail siding dispatch schedules for cement plants, steel mills, and chemical facilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Inquire About Industrial Supply</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
