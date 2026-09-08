"use client";

import React from "react";
import Image from "next/image";
import { WHO_WE_SERVE, ADDITIONAL_ORGANIZATIONS } from "@/lib/pharmaceutical-consultancy-data";
import { Users, CheckCircle2 } from "lucide-react";

export default function WhoWeServeSection() {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <Users className="w-4 h-4" />
            <span>INSTITUTIONAL CLIENTELE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Who We Serve
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Advising pharmaceutical leaders, biotech visionaries, institutional investors, and healthcare authorities across the complete spectrum of regulated life sciences.
          </p>
        </div>

        {/* 6 Principal Client Groups with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHO_WE_SERVE.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="rounded-[4px] bg-white border border-neutral-300 hover:border-[#009688] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={client.image || "/images/pharma/cleanroom-facility.jpg"}
                    alt={client.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent" />

                  {/* Client Counter Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[2px] bg-neutral-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider">
                      Client Sector 0{idx + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-3 right-3 w-11 h-11 rounded-[4px] bg-neutral-950/85 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white font-serif leading-snug drop-shadow-md">
                      {client.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                    {client.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-bold text-[#0a7a8c] group-hover:text-[#009688] transition-colors">
                    <CheckCircle2 size={14} />
                    <span>Specialized Advisory Protocol</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Organizations Strip */}
        <div className="p-8 sm:p-10 rounded-[3px] bg-white border border-neutral-300 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-6 text-center sm:text-left font-serif">
            Additional Regulated Organizations We Support
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {ADDITIONAL_ORGANIZATIONS.map((org, i) => (
              <div
                key={i}
                className="p-3.5 bg-neutral-50 border border-neutral-300 rounded-[2px] flex items-center gap-2.5 hover:border-[#009688] hover:bg-white transition-all group"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0a7a8c] group-hover:text-[#009688] shrink-0 transition-colors" />
                <span className="text-xs sm:text-[13px] font-bold text-neutral-800 leading-tight group-hover:text-[#009688] transition-colors">
                  {org}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
