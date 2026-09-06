"use client";

import React, { useState } from "react";
import { EQUIPMENT_PORTFOLIO } from "@/lib/hospital-engineering-data";
import {
  Layers,
  Fan,
  Wind,
  Activity,
  Sparkles,
  Airplay,
  Gauge,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const CATEGORY_ICONS = {
  "clean-room-systems": Layers,
  "hvac-systems": Fan,
  "air-filtration": Wind,
  "operation-theatre-systems": Activity,
  "cssd-systems": Sparkles,
  "medical-gas-systems": Airplay,
  "environmental-monitoring": Gauge,
  "laboratory-systems": FlaskConical,
};

export default function EquipmentPortfolioShowcase({ onRequestConsultation }) {
  const [activeCategoryId, setActiveCategoryId] = useState(EQUIPMENT_PORTFOLIO[0].id);

  const activeCategory =
    EQUIPMENT_PORTFOLIO.find((cat) => cat.id === activeCategoryId) ||
    EQUIPMENT_PORTFOLIO[0];

  const ActiveIcon = CATEGORY_ICONS[activeCategory.id] || Layers;

  return (
    <section
      id="equipment-portfolio"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-20 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>COMMERCIAL SYSTEMS &amp; EQUIPMENT PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-4">
            Complete Equipment &amp; Systems Portfolio
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#0a7a8c] mb-5" />
          <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
            Turnkey hospital infrastructure, modular clean-room architecture, specialized HVAC distribution, and precision environmental control equipment engineered for compliance and operational reliability.
          </p>
        </div>

        {/* Category Selector Tabs (Desktop Grid & Mobile Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {EQUIPMENT_PORTFOLIO.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            const IconComponent = CATEGORY_ICONS[cat.id] || Layers;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-3.5 border shrink-0 sm:shrink cursor-pointer group ${
                  isSelected
                    ? "bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] text-white border-transparent shadow-lg shadow-[#01b576]/30 scale-[1.02]"
                    : "bg-white hover:bg-gradient-to-b hover:from-[#f0fdfa]/70 hover:to-white text-slate-800 border-slate-200 hover:border-[#009588] hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isSelected
                      ? "bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                      : "bg-[#f0fdfa] border border-[#0a7a8c]/25 text-[#0a7a8c] group-hover:bg-gradient-to-br group-hover:from-[#0078b4] group-hover:via-[#009588] group-hover:to-[#01b576] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_14px_rgba(1,181,118,0.35)]"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[16px] sm:text-[17px] font-bold leading-tight group-hover:text-[#009588] transition-colors">
                    <span className={isSelected ? "text-white" : "text-slate-900 group-hover:text-[#009588]"}>
                      {cat.categoryTitle}
                    </span>
                  </div>
                  <div
                    className={`text-[13px] mt-0.5 ${
                      isSelected ? "text-slate-100" : "text-slate-500"
                    }`}
                  >
                    {cat.items.length} Engineered Systems
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Container */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078b4] via-[#009588] to-[#01b576] text-white flex items-center justify-center shadow-md shadow-[#01b576]/30">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#042E3A]">
                  {activeCategory.categoryTitle}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-slate-600 mt-1 max-w-2xl leading-relaxed font-normal">
                  {activeCategory.summary}
                </p>
              </div>
            </div>

            <button
              onClick={() => onRequestConsultation && onRequestConsultation(activeCategory.categoryTitle)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] hover:brightness-110 text-white text-[15px] font-bold shadow-lg shadow-[#01b576]/30 self-start md:self-auto transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Inquire This System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Equipment Items Grid (Larger readable typography & glowing gradient top strip) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#009588] hover:shadow-[0_12px_28px_rgba(10,122,140,0.16)] hover:-translate-y-1 hover:bg-gradient-to-b hover:from-[#f0fdfa]/50 hover:to-white transition-all duration-300 flex flex-col justify-between group overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#0078b4] before:via-[#009588] before:to-[#01b576] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <div>
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
                    <h4 className="text-[19px] sm:text-[20px] font-bold text-slate-900 group-hover:text-[#009588] transition-colors leading-snug">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal pl-7">
                    {item.detail}
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
