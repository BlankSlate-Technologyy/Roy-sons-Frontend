"use client";

import React from "react";
import { REGULATORY_FRAMEWORKS } from "@/lib/pharmaceutical-consultancy-data";
import { ShieldCheck, Info, FileCheck } from "lucide-react";

export default function RegulatoryFrameworksStrip() {
  return (
    <section
      id="regulatory-frameworks"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <FileCheck className="w-4 h-4" />
            <span>GLOBAL STANDARDS ALIGNMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Regulatory &amp; Quality Frameworks
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Our consultancy services are engineered around recognized international and statutory regulatory benchmarks, establishing robust foundations for inspection success and global market entry.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGULATORY_FRAMEWORKS.map((framework, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-[3px] bg-white border border-neutral-300 hover:border-[#0a7a8c] hover:shadow-[0_12px_32px_rgba(10,122,140,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-cyan-500 via-[#0a7a8c] to-[#042E3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3.5 py-1 rounded-[2px] text-xs sm:text-[13px] font-black uppercase tracking-wider bg-neutral-950 text-white group-hover:bg-[#0a7a8c] transition-colors duration-300">
                    {framework.code}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {framework.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-[#0a7a8c] transition-colors leading-snug mb-2 font-serif">
                  {framework.name}
                </h3>
                <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal mb-4">
                  {framework.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 text-xs sm:text-sm text-[#0a7a8c]">
                <strong className="text-neutral-900 font-bold block mb-1">Application:</strong>
                <span className="text-neutral-700 leading-normal">{framework.application}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Regulatory Accuracy Notice */}
        <div className="mt-12 p-6 rounded-[2px] bg-white border border-neutral-300 shadow-sm flex items-start gap-4 max-w-4xl mx-auto">
          <Info className="w-6 h-6 text-[#0a7a8c] shrink-0 mt-0.5" />
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            <strong className="text-neutral-950 font-bold">Institutional Compliance Note:</strong> ROYSONS provides professional consultancy, technical engineering design, and quality management advisory structured to align facilities and documentation with applicable international and national requirements. Formal regulatory certifications, licenses, and marketing authorizations are statutory prerogatives issued by designated sovereign regulatory bodies (e.g., DRAP, US FDA, EMA, WHO) based on independent official inspection.
          </p>
        </div>
      </div>
    </section>
  );
}
