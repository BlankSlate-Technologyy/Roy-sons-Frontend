"use client";

import React from "react";
import { WHY_CHOOSE_ROYSONS } from "@/lib/pharmaceutical-consultancy-data";
import { Award, CheckCircle2 } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <Award className="w-4 h-4" />
            <span>THE ROYSONS ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Why Choose ROYSONS?
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Strategic clarity, technical rigor, and hands-on execution for regulated pharmaceutical excellence.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ROYSONS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-[3px] bg-neutral-50 border border-neutral-300 hover:border-[#0a7a8c] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-[2px] bg-[#0a7a8c] text-white font-black text-sm flex items-center justify-center shadow-sm">
                    0{idx + 1}
                  </span>
                  <Award size={22} className="text-[#0a7a8c]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-950 mb-3 group-hover:text-[#0a7a8c] transition-colors font-serif">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-300 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a7a8c]">
                <CheckCircle2 size={16} />
                <span>Turnkey Institutional Rigor</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
