"use client";

import React from "react";
import { INDUSTRIES_SERVED } from "@/lib/hospital-engineering-data";
import { Building2, CheckCircle2 } from "lucide-react";

export default function IndustriesServedSection() {
  return (
    <section
      id="industries-served"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-slate-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
            CLIENT SECTORS &amp; FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Industries &amp; Facilities We Serve
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            Trusted by premier healthcare networks, pharmaceutical manufacturing plants, governmental entities, and academic research institutions.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="relative flex items-center gap-3.5 p-4 sm:p-4.5 rounded-[4px] bg-white border border-slate-200 hover:border-[#009688] hover:shadow-[0_10px_24px_rgba(10,122,140,0.14)] hover:-translate-y-1 hover:bg-gradient-to-b hover:from-[#f0fdfa]/50 hover:to-white transition-all duration-300 group overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[2.5px] before:bg-gradient-to-r before:from-[#0077b6] before:via-[#009688] before:to-[#02b875] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 text-[#0a7a8c] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                <CheckCircle2 size={34} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[16px] sm:text-[17px] font-bold text-slate-800 group-hover:text-[#009688] transition-colors">
                {ind}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
