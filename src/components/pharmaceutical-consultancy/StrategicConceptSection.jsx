"use client";

import React, { useState, useEffect, useRef } from "react";
import { STRATEGIC_OBJECTIVES, SECONDARY_METRICS } from "@/lib/pharmaceutical-consultancy-data";
import { Compass, CheckCircle2, ArrowRight } from "lucide-react";

function AnimatedStat({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    const rawValue = String(value);
    const match = rawValue.match(/(\d+(?:\.\d+)?)/);

    if (!match) {
      setDisplayValue(rawValue);
      return undefined;
    }

    const numericTarget = parseFloat(match[1].replace(/,/g, ""));
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[1].length);

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(numericTarget * easedProgress);

      setDisplayValue(`${prefix}${currentValue}${suffix}`);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          frameId = window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return (
    <span
      ref={elementRef}
      className="text-3xl sm:text-4xl font-black text-[#0a7a8c] tracking-tight block"
    >
      {displayValue}
    </span>
  );
}

export default function StrategicConceptSection({ onConsultationClick }) {
  return (
    <section
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-3">
            <Compass className="w-4 h-4" />
            <span>INTEGRATED STRATEGIC PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
            End-to-End Pharmaceutical &amp; Regulatory Consultancy
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#0a7a8c] uppercase tracking-wide mb-4 font-serif">
            From Concept to Compliance
          </p>
          <div className="h-[3.5px] w-20 bg-[#0a7a8c] mb-6" />
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-4">
            The pharmaceutical industry requires close coordination between facility design, manufacturing processes, quality systems, documentation, engineering controls, regulatory requirements, and operational procedures.
          </p>
          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            ROYSONS provides integrated advisory services that help clients address these multifaceted disciplines through a single, accountable strategic consultancy platform.
          </p>
        </div>

        {/* Counter Highlight Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-[3px] bg-neutral-50 border border-neutral-300 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {SECONDARY_METRICS.map((item, idx) => (
              <div key={idx} className="p-2">
                <AnimatedStat value={item.value} />
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Strategic Objectives Grid */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-800 mb-6">
            Our Objective Is To Help Organizations Develop Facilities &amp; Systems That Are:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_OBJECTIVES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-[3px] bg-neutral-50 border border-neutral-300 hover:border-[#0a7a8c] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-4 group-hover:bg-[#0a7a8c] transition-colors">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-[#0a7a8c] transition-colors mb-2 font-serif">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Banner Card */}
        <div className="p-7 sm:p-10 rounded-[3px] bg-gradient-to-r from-[#0e1418] via-[#141d24] to-[#0a7a8c]/80 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 block mb-1">
              Multidisciplinary Integration
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-serif">
              Single-Source Coordination for Complex Life Sciences Projects
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              Eliminate friction between separate architectural planners, HVAC contractors, quality consultants, and regulatory agents. ROYSONS aligns all technical streams under one cohesive roadmap.
            </p>
          </div>
          <button
            type="button"
            onClick={onConsultationClick}
            className="inline-flex items-center gap-2.5 bg-[#0a7a8c] hover:bg-white text-white hover:text-black font-bold px-7 py-3.5 text-sm uppercase tracking-[0.16em] transition-all rounded-[2px] shrink-0 cursor-pointer shadow-lg"
          >
            <span>Consult With Us</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
