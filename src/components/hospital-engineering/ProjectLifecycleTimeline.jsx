"use client";

import React from "react";
import { PROJECT_LIFECYCLE } from "@/lib/hospital-engineering-data";
import { CheckCircle2, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

export default function ProjectLifecycleTimeline() {
  return (
    <section
      id="engineering-lifecycle"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-slate-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
            END-TO-END PROJECT DELIVERY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Engineering Project Lifecycle
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            From initial architectural planning through mechanical calculations, clean-room erection, and certified DQ/IQ/OQ/PQ validation, our turnkey execution ensures seamless project handover.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_LIFECYCLE.map((phase) => (
            <div
              key={phase.step}
              className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#009588] hover:shadow-[0_16px_36px_rgba(10,122,140,0.18)] hover:-translate-y-1.5 hover:bg-gradient-to-b hover:from-[#f0fdfa]/50 hover:to-white transition-all duration-300 group overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3.5px] before:bg-gradient-to-r before:from-[#0078b4] before:via-[#009588] before:to-[#01b576] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-0"
            >
              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[28px] font-black text-[#0a7a8c] group-hover:text-[#009588] font-mono tracking-tight transition-colors">
                    {phase.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 group-hover:bg-gradient-to-r group-hover:from-[#0078b4] group-hover:via-[#009588] group-hover:to-[#01b576] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-xs">
                    {phase.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[20px] sm:text-[21px] font-bold text-slate-900 group-hover:text-[#009588] transition-colors leading-snug mb-3">
                  {phase.title}
                </h3>

                {/* Summary */}
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal mb-5">
                  {phase.summary}
                </p>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {phase.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-slate-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#01b576] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
