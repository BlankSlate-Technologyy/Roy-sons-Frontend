"use client";

import React from "react";
import { PROJECT_LIFECYCLE } from "@/lib/pharmaceutical-consultancy-data";
import { Clock } from "lucide-react";

export default function ProjectLifecycleSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <Clock className="w-4 h-4" />
            <span>STRUCTURED PROJECT TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Project Lifecycle
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#0a7a8c] uppercase tracking-wide mb-4 font-serif">
            From Business Idea to Operational Facility
          </p>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            A methodical seven-phase roadmap ensuring your pharmaceutical facility transitions smoothly from conceptual vision through civil build, validation, and commercial scale-up.
          </p>
        </div>

        {/* 7-Step Timeline / Cards */}
        <div className="relative">
          {/* Vertical Connecting Line on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-neutral-300 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {PROJECT_LIFECYCLE.map((phase, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={phase.step}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-44px)] bg-white border border-neutral-300 p-6 sm:p-8 rounded-[3px] hover:border-[#0a7a8c] hover:shadow-xl transition-all duration-300 group ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isEven ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a7a8c]">
                        Phase {phase.step} of 07
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-1 group-hover:text-[#0a7a8c] transition-colors font-serif">
                      {phase.phase}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">
                      {phase.focus}
                    </p>

                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                      {phase.details}
                    </p>
                  </div>

                  {/* Center Node Badge */}
                  <div className="w-14 h-14 rounded-full bg-neutral-950 border-4 border-white shadow-lg text-white font-black text-base flex items-center justify-center shrink-0 z-10 group-hover:bg-[#0a7a8c] transition-colors">
                    {phase.step}
                  </div>

                  {/* Empty Spacer Column for balance on desktop */}
                  <div className="hidden lg:block w-[calc(50%-44px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
