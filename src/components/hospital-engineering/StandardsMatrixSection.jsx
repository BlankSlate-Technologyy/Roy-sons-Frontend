"use client";

import React from "react";
import { STANDARDS_MATRIX } from "@/lib/hospital-engineering-data";
import { ShieldCheck, FileCheck, Info } from "lucide-react";

export default function StandardsMatrixSection() {
  return (
    <section
      id="standards-compliance"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <FileCheck className="w-4 h-4" />
            <span>REGULATORY FRAMEWORKS &amp; VALIDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Standards &amp; Compliance
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#0a7a8c] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            Every clean room, operating theatre, and medical infrastructure system engineered by ROYSONS is developed to align with globally recognized healthcare and contamination control standards.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#009588] hover:shadow-[0_16px_36px_rgba(10,122,140,0.18)] hover:-translate-y-1.5 hover:bg-gradient-to-b hover:from-[#f0fdfa]/50 hover:to-white transition-all duration-300 flex flex-col justify-between group overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3.5px] before:bg-gradient-to-r before:from-[#0078b4] before:via-[#009588] before:to-[#01b576] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-0"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-md text-[12px] font-bold uppercase tracking-wider bg-[#042E3A] group-hover:bg-gradient-to-r group-hover:from-[#0078b4] group-hover:via-[#009588] group-hover:to-[#01b576] text-white mb-3 transition-all duration-300 shadow-xs">
                  {item.standard}
                </span>
                <h3 className="text-[19px] sm:text-[20px] font-bold text-slate-900 group-hover:text-[#009588] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal mb-4">
                  {item.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[13px] sm:text-[14px] text-[#0a7a8c] font-medium">
                <span className="font-bold text-slate-700">Application: </span>
                <span>{item.application}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Legal Disclaimer Note */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-100/80 border border-slate-200 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-[#0a7a8c] shrink-0 mt-0.5" />
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-normal">
            <strong className="text-slate-900">Institutional Compliance Note:</strong> ROYSONS solutions are designed in accordance with and engineered capable of supporting the standards identified above. Formal certification of any completed facility is subject to project-specific environmental conditions, client operational protocols, and independent qualification by authorized regulatory bodies.
          </p>
        </div>
      </div>
    </section>
  );
}
