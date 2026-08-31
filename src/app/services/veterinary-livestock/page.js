"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PawPrint,
  Milk,
  Shield,
  Sprout,
  ArrowRight,
  ChevronRight,
  BriefcaseMedical,
  Sparkles,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";

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
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950">
      {displayValue}
    </span>
  );
}

const CAPABILITIES = [
  {
    icon: PawPrint,
    title: "Veterinary Medicines",
    description: "Broad spectrum antibiotics, antiparasitics, and therapeutic agents for livestock health.",
  },
  {
    icon: Sprout,
    title: "Veterinary Vaccines",
    description: "Effective immunization programs for bovine, porcine, avian and small ruminants.",
  },
  {
    icon: Shield,
    title: "Biological Products",
    description: "Probiotics, enzymes and bio-stimulants to improve gut health and immunity.",
  },
  {
    icon: PawPrint,
    title: "Animal Diagnostics",
    description: "Rapid field test kits, lab equipment, and data analytics for disease detection.",
  },
  {
    icon: Sprout,
    title: "Livestock Health Programs",
    description: "Integrated herd health planning, vaccination schedules, and monitoring services.",
  },
  {
    icon: Milk,
    title: "Dairy Farm Solutions",
    description: "Milking equipment, herd management software, and nutrition plans for dairy producers.",
  },
  {
    icon: PawPrint,
    title: "Animal Nutrition",
    description: "Custom feed formulations, supplements, and precision feeding technologies.",
  },
  {
    icon: Sprout,
    title: "Farm Management Systems",
    description: "IoT enabled monitoring, weather integration, and operational dashboards.",
  },
  {
    icon: Shield,
    title: "Veterinary Equipment",
    description: "Diagnostic imaging, surgical tools, and mobile clinic kits.",
  },
  {
    icon: PawPrint,
    title: "Breeding & Reproductive Solutions",
    description: "AI, embryo transfer, and genetic improvement programs.",
  },
  {
    icon: Shield,
    title: "Biosecurity Solutions",
    description: "Quarantine facilities, disinfection systems, and disease surveillance.",
  },
  {
    icon: Milk,
    title: "Cold Chain Solutions",
    description: "Refrigerated transport, storage, and temperature monitoring for vaccines and feed.",
  },
];

export default function VeterinaryLivestockServicePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6A15A] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-4 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li className="text-neutral-950 font-black">
                Veterinary &amp; Livestock Solutions
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-24 lg:py-28 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A15A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-6 self-start">
                <BriefcaseMedical size={16} className="text-[#C6A15A]" />
                <span>Sector 03 • Agriculture &amp; Livestock</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
                Veterinary &amp; Livestock Solutions
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#C6A15A] uppercase tracking-wide mb-6">
                Advancing Animal Health, Livestock Productivity &amp; Veterinary Care
              </p>
              <div className="h-[3.5px] w-20 bg-[#C6A15A] mb-6" />
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS provides comprehensive veterinary and livestock solutions supporting animal health, dairy development, livestock management, veterinary diagnostics, and agricultural productivity.
              </p>
              <Link
                href="/contact"
                className="group self-start inline-flex items-center gap-3 bg-[#C6A15A] hover:bg-white text-white hover:text-black font-black px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
              >
                <span className="text-white group-hover:text-black transition-colors duration-300">
                  Build Healthier Livestock
                </span>
                <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1.5 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-2xl">
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/vet-hero.png"
                    alt="Veterinary & Livestock Solutions by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
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
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Years of Expertise
              </p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="500+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Livestock Projects
              </p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="95%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Success Rate
              </p>
            </div>
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="100%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 sm:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              COMPREHENSIVE VETERINARY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3.5px] w-16 bg-neutral-950 mb-5" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              From medicines and vaccines to farm management and bio‑security, we cover the full spectrum of animal health and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#C6A15A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#C6A15A]/60 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} className="text-[#C6A15A] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Highlights */}
      <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-7 sm:p-8 rounded-[2px] border border-neutral-200 hover:border-[#C6A15A] transition-all">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-950 mb-3">Animal Healthcare</h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">Supporting veterinarians and livestock owners with reliable healthcare products and technologies.</p>
            </div>
            <div className="bg-neutral-50 p-7 sm:p-8 rounded-[2px] border border-neutral-200 hover:border-[#C6A15A] transition-all">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-950 mb-3">Dairy Development</h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">Solutions designed to improve herd health, productivity, nutrition, and farm management.</p>
            </div>
            <div className="bg-neutral-50 p-7 sm:p-8 rounded-[2px] border border-neutral-200 hover:border-[#C6A15A] font-normal transition-all">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-neutral-950 mb-3">Biosecurity</h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">Supporting disease prevention through controlled farm environments, vaccination programs, and hygiene systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="VETERINARY &amp; LIVESTOCK SOLUTIONS"
        title="Building Healthier Livestock &amp; Stronger Agriculture"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
