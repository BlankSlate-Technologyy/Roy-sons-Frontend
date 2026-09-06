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
    <section className="relative overflow-hidden rounded-3xl bg-[#042E3A] text-white p-8 sm:p-12 lg:p-16 my-12 shadow-xl border border-white/10">
      {/* Background radial gradients for depth */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#0a7a8c]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#01b576]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold tracking-wider uppercase bg-white/10 text-[#01b576] border border-white/15 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Procurement & Technical Advisory</span>
        </div>

        {/* Primary Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Looking for the Right Healthcare Technology?
        </h2>

        {/* Reassuring copy */}
        <p className="mt-5 text-[15px] sm:text-[17px] text-slate-300 max-w-2xl mx-auto leading-relaxed">
          ROYSONS assists healthcare institutions, diagnostic centers, and hospital leadership with equipment selection, technical specification compliance, facility planning, and dependable turnkey delivery.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0a7a8c] text-white text-[15px] font-semibold hover:bg-[#005f6e] transition-all duration-200 shadow-lg shadow-[#0a7a8c]/25 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[15px] font-semibold border border-white/20 transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#01b576]" />
            <span>Contact ROYSONS</span>
          </Link>
        </div>

        {/* 3 Institutional Trust Pillars */}
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Building className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[14px] font-semibold text-white">Facility Turnkey Supply</h4>
              <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                Complete department fit-outs for radiology, ICUs, OT suites, and laboratories.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[14px] font-semibold text-white">Clinical Compliance</h4>
              <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                Hospital-grade equipment verified according to rigorous procurement frameworks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#01b576] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[14px] font-semibold text-white">Logistics & Installation</h4>
              <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                Secure global freight handling, on-site commissioning, and engineering support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
