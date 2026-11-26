import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { COLORS } from "../constants";
import { Container, Button } from "./Shared";

export default function Expertise() {
  const highlights = [
    { title: "DRAP Liaison & Clearances", desc: "Proven track record with the Drug Regulatory Authority of Pakistan." },
    { title: "CTD/eCTD Dossier Execution", desc: "Expert structuring of Technical Dossier Modules for global clearances." },
    { title: "WHO & GMP Facility Alignment", desc: "Pre-audit checks, quality risk management, and facility planning." },
  ];

  return (
    <section id="expertise" className="py-20 bg-white" style={{ backgroundColor: COLORS.white }}>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: COLORS.secondary }}
          >
            AREAS OF EXPERTISE
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: COLORS.textDark }}
          >
            Regulatory Knowledge
            <br />
            You Can Rely On
          </h2>
          <p
            className="text-base font-medium leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            Our consultancy team stays continuously updated on evolving pharmaceutical regulations,
            ensuring our clients remain compliant with the latest national and international requirements
            while minimizing compliance risk. We navigate drug registrations, licensing, and amendments
            with strict precision.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <CheckCircle2 size={16} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: COLORS.textDark }}>
                    {h.title}
                  </h4>
                  <p className="text-xs font-medium mt-0.5" style={{ color: COLORS.textGray }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/group-companies/gateway/expertise"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span>Explore All 6 Expertise Areas</span>
            </Link>
            <Button variant="secondary" href="#contact">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[520px] h-[460px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group"
          >
            <Image
              src="/gatwayareaofexperince.png"
              alt="Medical regulatory scales and books"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glassmorphic Pill */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#173F8A] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 size={20} className="text-[#34D399]" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#173F8A]">
                    Accredited Technical Advisory
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    CTD Modules 1–5 &amp; Formulations Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
