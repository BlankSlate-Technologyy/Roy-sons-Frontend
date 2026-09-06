"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import EquipmentCard from "./EquipmentCard";

export default function CategoryShowcase({
  category,
  index = 0,
  equipmentList = [],
  onSelectEquipment,
}) {
  if (!category) return null;

  // Alternate: Even index (0, 2, 4...) -> Text Left, Image Right.
  // Odd index (1, 3, 5...) -> Image Left, Text Right.
  const isImageLeft = index % 2 !== 0;

  return (
    <section
      id={`category-${category.id}`}
      className="py-12 lg:py-16 border-b border-slate-200/80 last:border-b-0"
    >
      {/* Category Header Showcase (Alternating Desktop Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
        {/* Text Block */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center ${
            isImageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Category Number & Count Badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[28px] sm:text-[34px] font-black tracking-tight text-[#0a7a8c]/40 font-mono">
              {category.number}
            </span>
            <div className="h-4 w-px bg-slate-300" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20">
              <Layers className="w-3 h-3" />
              {equipmentList.length} Systems Available
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
            {category.title}
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
            {category.description}
          </p>
        </div>

        {/* Hero Category Image Banner */}
        <div
          className={`lg:col-span-6 ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 group">
            <Image
              src={category.image}
              alt={category.imageAlt || category.title}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-[13px] font-medium tracking-wide drop-shadow-sm">
                ROYSONS Hospital Technologies
              </span>
              <span className="text-[12px] opacity-80 uppercase tracking-widest font-mono">
                Category {category.number}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Cards Grid (3-4 columns desktop, 2 col tablet, 1 col mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {equipmentList.map((item) => (
          <EquipmentCard
            key={item.id}
            equipment={item}
            onSelect={onSelectEquipment}
          />
        ))}
      </div>
    </section>
  );
}
