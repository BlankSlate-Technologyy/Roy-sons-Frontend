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
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/95 text-[#0a7a8c] shadow-sm backdrop-blur-sm border border-slate-200/60">
            {equipment.categoryTitle?.split("&")[0]?.trim() || "Clinical"}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5">
        <h4 className="text-[17px] font-semibold text-slate-900 group-hover:text-[#0a7a8c] transition-colors leading-snug">
          {equipment.name}
        </h4>

        <p className="mt-2 text-[13px] text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {equipment.shortDescription}
        </p>

        {/* Key Feature Highlight Pill */}
        {equipment.features && equipment.features[0] && (
          <div className="mt-3 pt-3 border-t border-slate-100/90 flex items-center gap-1.5 text-[12px] text-slate-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#01b576] shrink-0" />
            <span className="line-clamp-1">{equipment.features[0]}</span>
          </div>
        )}
      </div>
    </div>
  );
}
