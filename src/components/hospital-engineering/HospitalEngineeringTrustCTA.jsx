"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Building2, Workflow, Gauge, Layers, Cpu, FileCheck } from "lucide-react";
import { WHY_CHOOSE_ROYSONS } from "@/lib/hospital-engineering-data";

export default function HospitalEngineeringTrustCTA() {
  const handleScrollToForm = () => {
    const el = document.getElementById("engineering-consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      data-dark-section="true"
      style={{
        backgroundColor: "#042E3A",
        color: "#ffffff",
        fontFamily: '"Times New Roman", Times, serif',
      }}
      className="roysons-preserve-dark relative overflow-hidden rounded-3xl !bg-[#042E3A] text-white p-8 sm:p-12 lg:p-16 my-16 shadow-2xl border border-teal-800/40"
    >
      {/* Background radial gradients for depth */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#0a7a8c]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#01b576]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider bg-[#0a7a8c]/25 border border-[#01b576]/40 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 text-[#01b576]" />
          <span style={{ color: "#01b576" }}>TURNKEY ENGINEERING UNDER ONE PLATFORM</span>
        </div>

        {/* Primary Heading */}
        <h2
          style={{ color: "#ffffff" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight !text-white leading-tight uppercase"
        >
          Why Choose ROYSONS For Hospital Engineering?
        </h2>

        {/* Reassuring copy */}
        <p
          style={{ color: "#e2e8f0" }}
          className="mt-5 text-[16px] sm:text-[18px] !text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          We unify hospital architecture, precision HVAC design, modular clean-room technology, medical gas pipeline networks, and validation into a single accountable delivery framework.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] hover:brightness-110 !text-white text-[15px] font-bold transition-all duration-300 shadow-lg shadow-[#01b576]/35 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span style={{ color: "#ffffff" }}>Request Engineering Consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <Link
            href="/contact"
            style={{ color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#0078b4]/30 hover:to-[#01b576]/30 hover:border-[#01b576]/60 !text-white text-[15px] font-bold border border-white/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#01b576]" />
            <span style={{ color: "#ffffff" }}>Contact ROYSONS Team</span>
          </Link>
        </div>

        {/* 6 Integrated Engineering Pillars */}
        <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {WHY_CHOOSE_ROYSONS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#01b576]/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-gradient-to-br group-hover:from-[#0078b4] group-hover:via-[#009588] group-hover:to-[#01b576] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#01b576] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 style={{ color: "#ffffff" }} className="text-[16px] font-bold !text-white leading-snug group-hover:text-[#01b576] transition-colors">
                    {pillar.title}
                  </h4>
                  <p style={{ color: "#cbd5e1" }} className="text-[14px] !text-slate-300 mt-1 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
