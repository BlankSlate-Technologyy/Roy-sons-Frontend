"use client";

import React from "react";
import { DOCUMENTATION_PORTFOLIO } from "@/lib/pharmaceutical-consultancy-data";
import { FileText, CheckCircle2, BookOpenCheck } from "lucide-react";

export default function DocumentationPortfolioSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <BookOpenCheck className="w-4 h-4" />
            <span>CRITICAL COMMERCIAL DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Pharmaceutical Documentation Portfolio
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            In pharmaceutical operations, if it is not documented, it did not happen. ROYSONS creates comprehensive, audit-tested documentation libraries covering regulatory, manufacturing, engineering, and laboratory spheres.
          </p>
        </div>

        {/* Documentation Deliverables Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { count: "6", label: "Documentation Domains" },
            { count: "100+", label: "Standard Operating Procedures (SOPs)" },
            { count: "25+", label: "Validation Protocols (DQ/IQ/OQ/PQ)" },
            { count: "100%", label: "Traceable Document Governance" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-neutral-300 rounded-[3px] text-center shadow-xs"
            >
              <span className="block text-3xl sm:text-4xl font-black text-[#0a7a8c] mb-1 font-serif">
                {item.count}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* 6 Documentation Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCUMENTATION_PORTFOLIO.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-300 p-6 sm:p-8 rounded-[3px] hover:border-[#0a7a8c] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-[2px] bg-neutral-950 flex items-center justify-center group-hover:bg-[#0a7a8c] transition-colors">
                    <FileText className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-black text-neutral-400 group-hover:text-[#0a7a8c] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-2.5 group-hover:text-[#0a7a8c] transition-colors font-serif">
                  {doc.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal mb-5">
                  {doc.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-200">
                  {doc.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#0a7a8c] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-neutral-900 transition-colors">
                Audit-Ready Deliverables
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
