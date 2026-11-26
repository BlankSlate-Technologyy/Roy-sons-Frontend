"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "./Shared";
import { Award, ShieldCheck, FileCheck2, Users, Building, Percent } from "lucide-react";

function Counter({ targetValue, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = targetValue.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * numericTarget));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-[#173F8A] group-hover:text-[#2E8B57] transition-colors duration-300">
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  { value: "200+", label: "Successful Registrations", icon: FileCheck2 },
  { value: "15+", label: "Regulatory Experts", icon: Users },
  { value: "150+", label: "Client Partnerships", icon: Building },
  { value: "500+", label: "Licenses Processed", icon: Award },
  { value: "10+", label: "Years Industry Leadership", icon: ShieldCheck },
  { value: "98%", label: "First-Time Clearance", icon: Percent },
];

export default function Statistics() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-b border-slate-200">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-3">
            <ShieldCheck size={14} className="text-[#2E8B57]" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Measurable Excellence in Regulatory Governance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Accelerating pharmaceutical compliance, licensing, and dossier approvals with proven precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {STATS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#173F8A] to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#173F8A] group-hover:bg-[#173F8A] group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                  <Icon size={20} />
                </div>

                <div className="mb-2">
                  <Counter targetValue={item.value} />
                </div>

                <div>
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wide text-slate-900 leading-tight">
                    {item.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
