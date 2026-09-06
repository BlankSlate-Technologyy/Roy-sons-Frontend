"use client";

import React, { useState } from "react";
import { FACILITY_AREAS } from "@/lib/pharmaceutical-consultancy-data";
import { Building2, CheckCircle2 } from "lucide-react";

export default function FacilityAreasSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...FACILITY_AREAS.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? FACILITY_AREAS
      : FACILITY_AREAS.filter((c) => c.category === activeCategory);

  const totalZones = FACILITY_AREAS.reduce((acc, cat) => acc + cat.zones.length, 0);

  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <Building2 className="w-4 h-4" />
            <span>ENVIRONMENTAL SPATIAL SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Pharmaceutical Facility Areas We Support
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            From raw-material sampling airlocks and Grade A aseptic filling suites to automated packaging and utility plants, ROYSONS plans and audits every critical square foot of your pharmaceutical operation.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0a7a8c] bg-[#0a7a8c]/10 px-4 py-1 rounded-full">
            <span>Covering {totalZones}+ Regulated Facility Zones</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0a7a8c] text-white shadow-md shadow-[#0a7a8c]/25"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-6 sm:p-8 rounded-[3px] bg-neutral-50 border border-neutral-300 shadow-xs"
            >
              <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-neutral-300">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#0a7a8c]" />
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-950 font-serif">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-bold text-neutral-500 uppercase tracking-wider">
                  {group.zones.length} Zones
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.zones.map((zone, zIdx) => (
                  <div
                    key={zIdx}
                    className="p-4 rounded-[2px] bg-white border border-neutral-300 hover:border-[#0a7a8c] hover:shadow-md transition-all flex items-start gap-3 group"
                  >
                    <div className="w-7 h-7 rounded-[2px] bg-[#0a7a8c]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0a7a8c] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#0a7a8c] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-neutral-800 leading-snug group-hover:text-neutral-950 transition-colors">
                      {zone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
