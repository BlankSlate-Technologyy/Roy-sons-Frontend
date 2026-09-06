"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/lib/pharmaceutical-consultancy-data";
import { ArrowRight } from "lucide-react";

export default function IndustriesCategoriesSection({ onSelectCategory }) {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
            MANUFACTURING SECTORS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            Industries &amp; Product Categories
          </h2>
          <div className="mx-auto h-[3.5px] w-20 bg-[#0a7a8c] mb-5" />
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Specialized pharmaceutical advisory calibrated to the unique contamination control, containment, and regulatory criteria of each therapeutic segment.
          </p>
        </div>

        {/* Categories Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-[4px] bg-white border border-neutral-300 hover:border-[#0a7a8c] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={cat.image || "/images/pharma/cleanroom-facility.jpg"}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-black/20" />

                  {/* Counter Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[2px] bg-neutral-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider">
                      0{idx + 1} / 06
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-[2px] bg-neutral-950/85 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:bg-[#0a7a8c] group-hover:text-white transition-colors duration-300 shadow-md">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white font-serif leading-snug drop-shadow-md">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#0a7a8c] uppercase tracking-wider mb-2.5">
                      {cat.scope}
                    </p>

                    <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                      {cat.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Regulated Facility Scope
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCategory && onSelectCategory(cat.title)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0a7a8c] hover:text-[#042E3A] cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
