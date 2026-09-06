"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function EquipmentCard({ equipment, onSelect }) {
  const [imageError, setImageError] = useState(false);

  if (!equipment) return null;

  return (
    <div
      onClick={() => onSelect && onSelect(equipment)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect && onSelect(equipment);
        }
      }}
      role="button"
      tabIndex={0}
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 overflow-hidden text-left cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0a7a8c]/50 hover:shadow-[0_14px_32px_rgba(10,122,140,0.14)] focus:outline-none focus:ring-2 focus:ring-[#0a7a8c] focus:ring-offset-2"
    >
      {/* 4:3 Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
        <Image
          src={imageError ? "/roys_hospital_interior.png" : equipment.image}
          alt={equipment.imageAlt || equipment.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setImageError(true)}
        />

        {/* Soft overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-bold tracking-wide uppercase bg-white/95 text-[#0a7a8c] shadow-sm backdrop-blur-sm border border-slate-200/70"
          >
            {equipment.categoryTitle?.split("&")[0]?.trim() || "Clinical"}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <h4
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
          className="text-[21px] sm:text-[22px] font-bold text-slate-900 group-hover:text-[#0a7a8c] transition-colors leading-snug"
        >
          {equipment.name}
        </h4>

        {/* Short Description */}
        <p
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
          className="mt-2.5 text-[16px] sm:text-[17px] text-slate-700 leading-relaxed flex-1 line-clamp-3 font-normal"
        >
          {equipment.shortDescription}
        </p>

        {/* Key Feature Highlight Pill */}
        {equipment.features && equipment.features[0] && (
          <div
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[14px] sm:text-[15px] text-slate-700 font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-[#01b576] shrink-0" />
            <span className="line-clamp-1">{equipment.features[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
}
