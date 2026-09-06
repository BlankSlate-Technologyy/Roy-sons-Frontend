"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CLEAN_ROOM_APPLICATIONS } from "@/lib/hospital-engineering-data";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CleanRoomApplicationsSection({ onSelectApplication }) {
  return (
    <section
      id="clean-room-solutions"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider bg-[#01b576]/10 text-[#01b576] border border-[#01b576]/20 mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>SECTOR-SPECIFIC CONTROLLED ATMOSPHERES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Clean Room Applications
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#0a7a8c] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            Custom-engineered controlled atmospheres ensuring precise particulate containment, microclimate stability, microbial defense, and zero cross-contamination across critical industries.
          </p>
        </div>

        {/* 8 Sector Cards Grid (2x4 desktop, 2x2 tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLEAN_ROOM_APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#009588] hover:shadow-[0_16px_36px_rgba(10,122,140,0.18)] hover:-translate-y-1.5 hover:bg-gradient-to-b hover:from-[#f0fdfa]/40 hover:to-white transition-all duration-300 flex flex-col justify-between group before:absolute before:top-0 before:left-0 before:right-0 before:h-[3.5px] before:bg-gradient-to-r before:from-[#0078b4] before:via-[#009588] before:to-[#01b576] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-0"
            >
              <div>
                {/* 16:10 Realistic Image Container */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={app.image}
                    alt={app.imageAlt || app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Standard Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/85 text-[#01b576] border border-[#01b576]/40 backdrop-blur-sm shadow-sm">
                      {app.badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-[#0a7a8c] block mb-1">
                    {app.category}
                  </span>
                  <h3 className="text-[20px] sm:text-[21px] font-bold text-slate-900 group-hover:text-[#009588] transition-colors leading-snug mb-2.5">
                    {app.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal mb-4">
                    {app.description}
                  </p>

                  {/* Technical Specs List */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {app.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-slate-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#01b576] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Link with ROYSONS button gradient hover */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectApplication && onSelectApplication(app.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-[#0078b4] hover:via-[#009588] hover:to-[#01b576] text-[#0a7a8c] hover:text-white text-[14px] font-bold transition-all duration-300 border border-slate-200 hover:border-transparent hover:shadow-md hover:shadow-[#01b576]/30 cursor-pointer"
                >
                  <span>Inquire Facility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
