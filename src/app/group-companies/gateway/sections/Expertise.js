import React from "react";
import Image from "next/image";
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

          <Button variant="primary" href="#contact">
            Schedule a Consultation
          </Button>
        </div>

        {/* Right Side: Image */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div
            className="relative w-full max-w-[420px] h-[360px] rounded-2xl overflow-hidden shadow-xl border"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatwayareaofexperince.png"
              alt="Medical regulatory scales and books"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
