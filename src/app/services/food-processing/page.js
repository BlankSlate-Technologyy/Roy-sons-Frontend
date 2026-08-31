"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Package,
  Snowflake,
  ShieldCheck,
  Leaf,
  ClipboardCheck,
  Truck,
  Globe,
  Factory,
  Box,
  Droplets,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";

/* ─── Animated Counter ──────────────────────────────────────────── */
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    const rawValue = String(value);
    const match = rawValue.match(/(\d+(?:\.\d+)?)/);
    if (!match) { setDisplayValue(rawValue); return undefined; }
    const numericTarget = parseFloat(match[1].replace(/,/g, ""));
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[1].length);
    const hasDecimal = rawValue.includes(".");
    let frameId, startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericTarget * eased;
      const formatted = hasDecimal
        ? current.toFixed(1).replace(/\.0$/, "")
        : Math.round(current).toLocaleString("en-US");
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) { observer.disconnect(); frameId = window.requestAnimationFrame(animate); }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => { observer.disconnect(); if (frameId) window.cancelAnimationFrame(frameId); };
  }, [value]);

  return (
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950">
      {displayValue}
    </span>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */
const CAPABILITIES = [
  { icon: Factory,     title: "Food Processing",             description: "Advanced processing lines for raw agricultural products into consumer goods." },
  { icon: Package,     title: "Packaging Solutions",         description: "Automated filling, sealing, labeling, and shelf-life extension technologies." },
  { icon: Snowflake,   title: "Cold Storage",                description: "Temperature-controlled warehousing, blast freezers, and cold chain logistics." },
  { icon: ShieldCheck, title: "Food Safety Systems",         description: "Implementation of HACCP, ISO, and rigorous contamination control measures." },
  { icon: Leaf,        title: "Agricultural Processing",     description: "Sorting, grading, cleaning, and primary processing of crops and grains." },
  { icon: ClipboardCheck,title: "Quality Control",           description: "Laboratory testing, traceability protocols, and product consistency." },
  { icon: Truck,       title: "Supply Chain Management",     description: "Optimized logistics, inventory control, and raw material procurement." },
  { icon: Box,         title: "Commodity Sourcing",          description: "Direct sourcing of high-quality agricultural commodities from growers." },
  { icon: Utensils,    title: "Food Manufacturing",          description: "Turnkey plant development for ready-to-eat and processed foods." },
  { icon: Globe,       title: "Export Solutions",            description: "Regulatory compliance, packaging, and logistics for international food trade." },
];

const FOCUS_AREAS = [
  "Processed Foods",
  "Frozen Foods",
  "Agricultural Commodities",
  "Dairy Products",
  "Packaged Foods",
  "Specialty Food Products",
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function FoodProcessingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6A15A] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-4 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={14} /></li>
              <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li className="flex items-center gap-1.5 text-neutral-300"><ChevronRight size={14} /></li>
              <li className="text-neutral-950 font-black">Food Processing</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-24 lg:py-28 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-6 self-start">
                <Utensils size={16} className="text-[#C6A15A]" />
                <span>Sector 13 • Food Processing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
                Food Processing
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#C6A15A] uppercase tracking-wide mb-6">
                From Agricultural Resources to High-Quality Food Products
              </p>
              <div className="h-[3.5px] w-20 bg-[#C6A15A] mb-6" />
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS supports food processing and agricultural value chains through modern processing, packaging, storage, quality control, and supply chain solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-3 bg-[#C6A15A] hover:bg-white font-black px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">Upgrade Your Facility</span>
                  <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#C6A15A] text-white px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all rounded-[2px]"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1.5 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-2xl">
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card2.png"
                    alt="Food Processing Solutions by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-neutral-950/80 backdrop-blur-md border border-[#C6A15A]/40 rounded-[2px]">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#C6A15A] mb-1.5">
                      Processing · Packaging · Cold Chain
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white leading-snug">
                      Value-Added Food Manufacturing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="10+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="100+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Facilities Upgraded</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="50+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Product Lines</p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="100%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">Safety Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 sm:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">TARGET MARKETS</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">Focus Areas</h2>
              <div className="h-[3.5px] w-16 bg-neutral-950 mb-6" />
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                We design and implement solutions that cater to a diverse range of food production segments, ensuring freshness, safety, and scalability.
              </p>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {FOCUS_AREAS.map((area, idx) => (
                  <div key={idx} className="bg-white border border-neutral-200 p-5 rounded-[2px] flex items-center gap-3.5 group hover:border-[#C6A15A] hover:shadow-md transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15A] group-hover:scale-125 transition-transform" />
                    <span className="text-sm sm:text-base font-bold text-neutral-800 uppercase tracking-wide group-hover:text-neutral-950">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">PROCESSING EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">Our Capabilities</h2>
            <div className="mx-auto h-[3.5px] w-16 bg-neutral-950" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col group hover:border-[#C6A15A] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border group-hover:border-[#C6A15A]/60 transition-all duration-300">
                    <Icon size={22} strokeWidth={1.5} className="text-[#C6A15A]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">{cap.title}</h3>
                  <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal flex-grow">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="FOOD PROCESSING"
        title="Creating Value Across the Food Supply Chain"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
