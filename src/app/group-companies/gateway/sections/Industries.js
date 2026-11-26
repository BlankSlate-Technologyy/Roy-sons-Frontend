"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { Container } from "./Shared";
import { GATEWAY_INDUSTRIES } from "../industries-data";

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E8B57]/10 border border-[#2E8B57]/20 text-[#2E8B57] text-xs font-black uppercase tracking-widest mb-3">
              <Layers size={14} className="text-[#2E8B57]" />
              <span>SPECIALIZED SECTOR PRACTICE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Sectors &amp; Health Industries We Support
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
              Tailored licensing protocols, regulatory roadmaps, and statutory filings designed for specialized manufacturing and commercial health verticals.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/group-companies/gateway/industries"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#236841] active:scale-95 cursor-pointer bg-[#2E8B57]"
            >
              <span>Explore All 7 Sectors</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Symmetrical 12-Column Grid (Row 1: 4 cards, Row 2: 3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {GATEWAY_INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            // First 4 cards take 3 cols (12/4 = 3), next 3 cards take 4 cols (12/3 = 4)
            const colSpan = index < 4 ? "lg:col-span-3" : "lg:col-span-4";
            const topApps = ind.applications?.slice(0, 2) || [];

            return (
              <Link
                key={ind.slug}
                href={`/group-companies/gateway/industries/${ind.slug}`}
                className={`${colSpan} group rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#2E8B57] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}
              >
                <div>
                  {/* Photo Container with Top Badge */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={ind.image || ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#2E8B57] shadow-xs backdrop-blur-xs">
                        {ind.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-bold text-slate-200 block truncate">
                        {ind.eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3.5 bg-emerald-50 text-[#2E8B57] border border-emerald-100 shadow-2xs">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-base font-black text-slate-900 group-hover:text-[#2E8B57] transition-colors leading-snug mb-2">
                      {ind.title}
                    </h3>

                    <p className="text-xs font-normal leading-relaxed text-slate-500 line-clamp-2 mb-4">
                      {ind.overview}
                    </p>

                    {/* Applications / Deliverables */}
                    {topApps.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {topApps.map((app, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] font-medium text-slate-700 leading-snug">
                            <CheckCircle2 size={15} className="text-[#173F8A] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{app}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#2E8B57] group-hover:text-[#173F8A] transition-colors">
                  <span>Explore Sector Practice</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
