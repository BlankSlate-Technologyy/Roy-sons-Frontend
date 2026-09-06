"use client";

import React from "react";
import Image from "next/image";
import { CORE_CAPABILITIES } from "@/lib/hospital-engineering-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CapabilitiesSection({ onSelectCapability }) {
  return (
    <section
      id="core-capabilities"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-slate-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
            SPECIALIZED ENGINEERING EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Our Core Capabilities
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            Multidisciplinary engineering capabilities spanning architectural clinical layouts, advanced clean-room construction, specialized healthcare HVAC, medical gas pipelines, and continuous environmental control.
          </p>
        </div>

        {/* 11 Uniform Capabilities Grid with Images & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;

            return (
              <div
                key={cap.id}
                className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-[#009588] hover:shadow-[0_16px_36px_rgba(10,122,140,0.18)] hover:-translate-y-1.5 hover:bg-gradient-to-b hover:from-[#f0fdfa]/50 hover:to-white transition-all duration-300 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3.5px] before:bg-gradient-to-r before:from-[#0078b4] before:via-[#009588] before:to-[#01b576] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-0"
              >
                <div>
                  {/* 16:10 Realistic Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                    <Image
                      src={cap.image || "/roys_hospital_interior.png"}
                      alt={cap.imageAlt || cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    {/* Step / Number Badge on top left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-lg text-[13px] font-black font-mono tracking-tight bg-black/80 text-[#01b576] border border-[#01b576]/50 backdrop-blur-sm shadow-md">
                        {cap.number}
                      </span>
                    </div>

                    {/* Icon badge on top right with gradient hover */}
                    <div className="absolute top-3 right-3 z-10 w-11 h-11 rounded-xl bg-black/75 border border-white/25 text-white flex items-center justify-center backdrop-blur-md group-hover:bg-gradient-to-br group-hover:from-[#0078b4] group-hover:via-[#009588] group-hover:to-[#01b576] group-hover:border-transparent group-hover:shadow-[0_4px_18px_rgba(1,181,118,0.45)] group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Title */}
                    <h3 className="text-[21px] sm:text-[22px] font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#009588] transition-colors">
                      {cap.title}
                    </h3>

                    {/* Overview Text */}
                    <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-normal mb-5">
                      {cap.shortDescription}
                    </p>

                    {/* Engineering Deliverables List (Displayed on all cards uniformly) */}
                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#0a7a8c]">
                        Scope &amp; Engineering Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {cap.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[14px] sm:text-[15px] text-slate-700 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#01b576] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button with ROYSONS signature gradient */}
                <div className="p-6 sm:p-7 pt-2">
                  <button
                    onClick={() => onSelectCapability && onSelectCapability(cap.title)}
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] hover:brightness-110 text-white text-[14px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#01b576]/30 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Inquire Technical Scope</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
