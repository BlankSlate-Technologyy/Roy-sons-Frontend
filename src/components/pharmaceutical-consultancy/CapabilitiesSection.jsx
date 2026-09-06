"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CAPABILITIES } from "@/lib/pharmaceutical-consultancy-data";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  Wind,
  Settings,
  Sparkles,
} from "lucide-react";

export default function CapabilitiesSection({ onSelectCapability }) {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState(CAPABILITIES[0].id);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCapabilitySelect = (cap) => {
    setSelectedCapabilityId(cap.id);
    if (onSelectCapability) {
      onSelectCapability(cap.title);
    }
  };

  return (
    <section
      id="capabilities"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
            CORE PRACTICE AREAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Our Capabilities
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            From initial greenfield feasibility and GMP architectural zoning to validation, QMS, clean room HVAC, and statutory licensing—explore our 12 integrated pharmaceutical consultancy practice areas.
          </p>
        </div>

        {/* Capabilities 12-Card Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const isSelected = selectedCapabilityId === cap.id;
            const isExpanded = expandedCardId === cap.id;

            return (
              <div
                key={cap.id}
                className={`bg-white border rounded-[4px] flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-sm hover:shadow-xl ${
                  isSelected
                    ? "border-[#0a7a8c] ring-2 ring-[#0a7a8c]/40"
                    : "border-neutral-300 hover:border-[#0a7a8c]"
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={cap.image || "/images/pharma/cleanroom-facility.jpg"}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-black/20" />

                  {/* Counter Badge on Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-[2px] bg-neutral-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider">
                      {cap.number} / 12
                    </span>
                  </div>

                  {/* Capability Icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-[2px] bg-neutral-950/85 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:bg-[#0a7a8c] group-hover:text-white transition-colors duration-300 shadow-md">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Card Title on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 mb-0.5 line-clamp-1">
                      {cap.tagline}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white font-serif leading-snug drop-shadow-md">
                      {cap.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[15px] sm:text-[16px] text-neutral-800 leading-relaxed font-normal mb-4">
                      {cap.lead}
                    </p>

                    {/* Special Highlight for Validation Stages */}
                    {cap.stages && (
                      <div className="grid grid-cols-4 gap-2 mb-4 p-2.5 bg-neutral-100 rounded-[2px] border border-neutral-200">
                        {cap.stages.map((stage) => (
                          <div key={stage.short} className="text-center">
                            <span className="block text-xs sm:text-sm font-black text-neutral-950 bg-white border border-neutral-300 rounded-[2px] py-1 shadow-xs">
                              {stage.short}
                            </span>
                            <span className="text-[11px] font-bold text-neutral-600 truncate block mt-0.5">
                              {stage.short === "DQ"
                                ? "Design"
                                : stage.short === "IQ"
                                ? "Install"
                                : stage.short === "OQ"
                                ? "Operate"
                                : "Perform"}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Special Highlight for HVAC Critical Parameters */}
                    {cap.criticalParameters && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cap.criticalParameters.slice(0, 4).map((param, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold rounded-[2px]"
                          >
                            {param}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bullet list preview / expanded */}
                    <div className="space-y-2 mb-5 pt-3 border-t border-neutral-200">
                      {(isExpanded ? cap.items : cap.items.slice(0, 4)).map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-neutral-800">
                          <CheckCircle2 className="w-4 h-4 text-[#0a7a8c] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                      {cap.items.length > 4 && !isExpanded && (
                        <p className="text-xs sm:text-sm text-neutral-500 font-semibold pl-6">
                          +{cap.items.length - 4} more specialized deliverables...
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setExpandedCardId(isExpanded ? null : cap.id)}
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "Full Scope"}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCapabilitySelect(cap)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a7a8c] hover:text-[#042E3A] cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight: Validation Qualification (DQ/IQ/OQ/PQ) */}
        <div className="p-8 sm:p-12 rounded-[3px] bg-white border border-neutral-300 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-1 block">
              QUALIFICATION PROTOCOLS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 font-serif mb-2">
              Four-Stage Pharmaceutical Qualification Framework
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed">
              ROYSONS structures qualification protocols compliant with WHO-GMP, FDA 21 CFR Part 211, and EU Annex 15 to demonstrate that equipment, utilities, and processes consistently perform as intended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                code: "DQ",
                title: "Design Qualification",
                desc: "Verification that the proposed design of facilities, equipment, and utilities meets user requirement specifications (URS) and cGMP standards.",
                focus: "URS & Functional Specs",
              },
              {
                code: "IQ",
                title: "Installation Qualification",
                desc: "Verification that equipment, piping, electrical, and ductwork have been installed in compliance with approved drawings and manufacturer manuals.",
                focus: "As-Built & Calibrations",
              },
              {
                code: "OQ",
                title: "Operational Qualification",
                desc: "Verification that systems operate correctly throughout all specified operating ranges, challenge tests, alert triggers, and interlocks.",
                focus: "Operating Ranges & Alarms",
              },
              {
                code: "PQ",
                title: "Performance Qualification",
                desc: "Verification that systems consistently perform effectively and reproducibly under actual production conditions with representative materials.",
                focus: "Production Consistency & PPQ",
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[3px] bg-neutral-50 border border-neutral-300 flex flex-col justify-between hover:border-[#0a7a8c] hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-[2px] bg-[#0a7a8c] text-white font-black text-base flex items-center justify-center">
                      {stage.code}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0a7a8c] bg-[#0a7a8c]/10 px-2.5 py-1 rounded-[2px]">
                      {stage.focus}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-neutral-950 mb-2 font-serif">
                    {stage.title}
                  </h4>
                  <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
