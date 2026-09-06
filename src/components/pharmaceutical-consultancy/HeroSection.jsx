"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { METRICS, HERO_SLIDES } from "@/lib/pharmaceutical-consultancy-data";

function AnimatedStatValue({ value }) {
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
    const hasDecimal = rawValue.includes(".");

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericTarget * easedProgress;
      const formattedValue = hasDecimal
        ? currentValue.toFixed(1).replace(/\.0$/, "")
        : Math.round(currentValue).toLocaleString("en-US");

      setDisplayValue(`${prefix}${formattedValue}${suffix}`);

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
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="block text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight"
    >
      {displayValue}
    </span>
  );
}

export default function HeroSection({ onGetConsultancyClick }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Hero Dark Container */}
      <section
        data-dark-section="true"
        className="relative bg-gradient-to-b from-[#0e1418] via-[#121a20] to-[#0e1418] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden"
      >
        {/* Background Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a7a8c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/80 text-cyan-300 text-xs sm:text-[14px] font-bold uppercase tracking-[0.2em] mb-4 self-start shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                <FlaskConical size={18} className="text-cyan-300 flex-shrink-0" />
                <span>Sector 03 • Pharmaceutical &amp; Compliance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4 font-serif">
                Pharmaceutical Consultancy
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-serif">
                Strategic, Regulatory &amp; Quality Solutions for Pharmaceutical Excellence
              </p>

              <div className="h-[3.5px] w-24 bg-gradient-to-r from-cyan-400 via-[#0a7a8c] to-[#042E3A] mb-6" />

              <p className="text-base sm:text-lg text-neutral-100 leading-relaxed font-normal mb-4 max-w-2xl">
                ROYSONS provides professional pharmaceutical consultancy services to pharmaceutical manufacturers, biotechnology organizations, medical device companies, laboratories, healthcare institutions, investors, and organizations developing regulated healthcare facilities.
              </p>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-5 max-w-2xl hidden sm:block">
                Our consultancy services support clients throughout the complete project and operational lifecycle—from concept development, feasibility studies, facility planning, regulatory strategy, GMP implementation, quality-management systems, documentation, validation and qualification, licensing, inspection readiness, technology transfer, process improvement, and operational development.
              </p>

              <p className="text-sm sm:text-base text-cyan-200 leading-relaxed font-medium max-w-2xl border-l-3 border-cyan-400 pl-4 py-1 bg-cyan-950/20">
                Through a multidisciplinary approach, ROYSONS helps organizations establish technically sound, operationally efficient, and compliance-focused pharmaceutical operations aligned with applicable national and international regulatory and quality requirements.
              </p>
            </div>

            {/* Right Column Media Carousel */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[3px] p-1.5 bg-gradient-to-b from-cyan-500/40 via-neutral-800 to-[#0a7a8c]/30 shadow-2xl shadow-cyan-950/50 group select-none">
                <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-[2px] bg-neutral-950">
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeSlide === idx
                          ? "opacity-100 scale-100 pointer-events-auto z-10"
                          : "opacity-0 scale-105 pointer-events-none z-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/30" />
                    </div>
                  ))}

                  {/* Top Bar Indicators */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] bg-neutral-950/90 backdrop-blur-md border border-cyan-400/50 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>PHARMA SHOWCASE</span>
                    </div>

                    <div className="px-3 py-1 rounded-[2px] bg-neutral-950/90 backdrop-blur-md border border-cyan-400/50 text-white text-xs font-bold tracking-widest">
                      <span className="text-cyan-400 font-extrabold">0{activeSlide + 1}</span>
                      <span className="text-neutral-400 mx-1">/</span>
                      <span className="text-neutral-400">0{HERO_SLIDES.length}</span>
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-4 bg-neutral-950/95 backdrop-blur-md border border-cyan-400/60 rounded-[2px] z-20">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300">
                        {HERO_SLIDES[activeSlide].tag}
                      </p>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {HERO_SLIDES.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={() => setActiveSlide(dotIdx)}
                            aria-label={`Slide ${dotIdx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              activeSlide === dotIdx
                                ? "w-7 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                : "w-2.5 bg-white/40 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug">
                      {HERO_SLIDES[activeSlide].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {METRICS.map((stat, i) => (
              <div key={i} className="border-l-4 border-[#0a7a8c] pl-4 sm:pl-6 py-1">
                <AnimatedStatValue value={stat.value} />
                <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-700 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
