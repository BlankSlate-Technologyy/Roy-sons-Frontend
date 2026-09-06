"use client";

import React from "react";
import { DELIVERABLES_CATALOG } from "@/lib/pharmaceutical-consultancy-data";
import { FileCheck, CheckCircle2 } from "lucide-react";

export default function DeliverablesSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <FileCheck className="w-4 h-4" />
            <span>CONTRACTUAL OUTPUTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Consultancy Deliverables
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Formal, tangible engineering drawings, validation protocols, regulatory dossiers, and quality frameworks delivered throughout our advisory engagements.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0a7a8c] bg-[#0a7a8c]/10 px-4 py-1 rounded-full">
            <span>Catalog of {DELIVERABLES_CATALOG.length} Standard Client Deliverables</span>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DELIVERABLES_CATALOG.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-neutral-300 rounded-[3px] hover:border-[#0a7a8c] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a7a8c] block mb-2">
                  {item.category}
                </span>
                <p className="text-sm sm:text-[15px] font-bold text-neutral-900 leading-snug group-hover:text-[#0a7a8c] transition-colors">
                  {item.item}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <CheckCircle2 size={14} className="text-[#0a7a8c]" />
                <span>Formal Client Deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
