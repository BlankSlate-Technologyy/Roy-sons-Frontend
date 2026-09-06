"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Building, Truck, Award } from "lucide-react";

export default function HealthcareTrustCTA() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("cta-consultation");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      data-dark-section="true"
      style={{ backgroundColor: "#042E3A", color: "#ffffff" }}
      className="roysons-preserve-dark relative overflow-hidden rounded-3xl !bg-[#042E3A] text-white p-8 sm:p-12 lg:p-16 my-12 shadow-2xl border border-teal-800/40"
    >
      {/* Background radial gradients for depth */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#0a7a8c]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#01b576]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wider uppercase bg-[#0a7a8c]/25 border border-[#01b576]/40 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 text-[#01b576]" />
          <span style={{ color: "#01b576" }}>Procurement & Technical Advisory</span>
        </div>

        {/* Primary Heading */}
        <h2
          style={{ color: "#ffffff" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-tight"
        >
          Looking for the Right Healthcare Technology?
        </h2>

        {/* Reassuring copy */}
        <p
          style={{ color: "#e2e8f0" }}
          className="mt-5 text-[15px] sm:text-[17px] !text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          ROYSONS assists healthcare institutions, diagnostic centers, and hospital leadership with equipment selection, technical specification compliance, facility planning, and dependable turnkey delivery.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0a7a8c] hover:bg-[#005f6e] !text-white text-[15px] font-semibold transition-all duration-200 shadow-lg shadow-[#0a7a8c]/25 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span style={{ color: "#ffffff" }}>Request a Consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <Link
            href="/contact"
            style={{ color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 !text-white text-[15px] font-semibold border border-white/30 transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#01b576]" />
            <span style={{ color: "#ffffff" }}>Contact ROYSONS</span>
          </Link>
        </div>

        {/* 3 Institutional Trust Pillars */}
        <div className="mt-12 pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Building className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 style={{ color: "#ffffff" }} className="text-[14px] font-semibold !text-white">Facility Turnkey Supply</h4>
              <p style={{ color: "#cbd5e1" }} className="text-[12px] !text-slate-300 mt-0.5 leading-relaxed">
                Complete department fit-outs for radiology, ICUs, OT suites, and laboratories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 style={{ color: "#ffffff" }} className="text-[14px] font-semibold !text-white">Clinical Compliance</h4>
              <p style={{ color: "#cbd5e1" }} className="text-[12px] !text-slate-300 mt-0.5 leading-relaxed">
                Hospital-grade equipment verified according to rigorous procurement frameworks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 style={{ color: "#ffffff" }} className="text-[14px] font-semibold !text-white">Logistics & Installation</h4>
              <p style={{ color: "#cbd5e1" }} className="text-[12px] !text-slate-300 mt-0.5 leading-relaxed">
                Secure global freight handling, on-site commissioning, and engineering support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
