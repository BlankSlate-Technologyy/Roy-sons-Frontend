"use client";

import React from "react";
import { QUALITY_COMPLIANCE_PILLARS } from "@/lib/pharmaceutical-consultancy-data";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";

export default function QualityComplianceSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>EMBEDDED COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Quality &amp; Compliance
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Compliance Embedded Into Every Stage. ROYSONS helps organizations establish systems aligned with applicable quality, regulatory, and operational requirements rather than treating compliance as a final-stage activity.
          </p>
        </div>

        {/* 7 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {QUALITY_COMPLIANCE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-[3px] border transition-all duration-300 flex flex-col justify-between group ${
                idx === 0
                  ? "bg-neutral-950 text-white border-neutral-800 lg:col-span-2 shadow-xl"
                  : "bg-neutral-50 hover:bg-white text-neutral-950 border-neutral-300 hover:border-[#0a7a8c] hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-[2px] text-xs font-bold uppercase tracking-wider ${
                      idx === 0
                        ? "bg-[#0a7a8c] text-white"
                        : "bg-neutral-200 text-neutral-800 group-hover:bg-[#0a7a8c] group-hover:text-white transition-colors"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                  <Award
                    size={20}
                    className={idx === 0 ? "text-cyan-400" : "text-[#0a7a8c]"}
                  />
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 font-serif ${
                    idx === 0
                      ? "text-white"
                      : "text-neutral-950 group-hover:text-[#0a7a8c] transition-colors"
                  }`}
                >
                  {pillar.title}
                </h3>

                <p
                  className={`text-sm sm:text-base leading-relaxed font-normal ${
                    idx === 0 ? "text-neutral-200" : "text-neutral-700"
                  }`}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                className={`pt-4 mt-6 border-t flex items-center gap-2 text-xs sm:text-sm font-bold ${
                  idx === 0 ? "border-neutral-800 text-cyan-300" : "border-neutral-200 text-[#0a7a8c]"
                }`}
              >
                <CheckCircle2 size={16} />
                <span>Standardized Audit &amp; Documentation Alignment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
