"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  ShieldCheck,
  FileText,
  Settings,
  ClipboardCheck,
  Microscope,
  TrendingUp,
  BookOpen,
  Wind,
  Layers,
  BarChart2,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  Building2,
  Stethoscope,
  Globe,
  Users,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ConsultationBanner from "@/components/ui/cta-banner";

function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    let frameId;
    let observer;

    const animate = () => {
      const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) {
        setDisplayValue(value);
        return;
      }

      const target = parseFloat(match[1]);
      const suffix = match[2] || "";
      const isDecimal = match[1].includes(".");
      const duration = 1500;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = target * easeOut;

        if (isDecimal) {
          setDisplayValue(`${current.toFixed(1)}${suffix}`);
        } else {
          setDisplayValue(`${Math.floor(current)}${suffix}`);
        }

        if (progress < 1) {
          frameId = window.requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(value);
        }
      };

      frameId = window.requestAnimationFrame(updateCounter);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
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
      className="block text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight"
    >
      {displayValue}
    </span>
  );
}

const CAPABILITIES = [
  {
    icon: Building2,
    title: "Pharmaceutical Facility Planning",
    description:
      "End-to-end facility layout design, zone classification, GMP-compliant architectural planning, and utility system integration.",
  },
  {
    icon: Globe,
    title: "Regulatory Consultancy",
    description:
      "Guidance on WHO-GMP, DRAP, FDA, EMA, and ICH requirements to support product registration and market authorization.",
  },
  {
    icon: ShieldCheck,
    title: "GMP Consultancy",
    description:
      "Gap analysis, mock inspections, remediation planning, and cGMP implementation support for manufacturing facilities.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Management Systems",
    description:
      "Design and implementation of QMS frameworks including CAPA, change control, risk management, and product quality reviews.",
  },
  {
    icon: FileText,
    title: "Documentation & SOP Development",
    description:
      "Creation of SOPs, batch records, validation protocols, master formulae, and full documentation lifecycle management.",
  },
  {
    icon: Settings,
    title: "Validation & Qualification",
    description:
      "DQ, IQ, OQ, PQ for equipment, utilities, processes, and computer systems in line with international guidelines.",
  },
  {
    icon: TrendingUp,
    title: "Process Improvement",
    description:
      "Lean manufacturing, Six Sigma, and continuous improvement programs tailored for pharmaceutical operations.",
  },
  {
    icon: BookOpen,
    title: "Regulatory Licensing Support",
    description:
      "Preparation and submission of dossiers, site master files, and support for regulatory inspections and audits.",
  },
  {
    icon: Wind,
    title: "Pharmaceutical HVAC Consultancy",
    description:
      "HVAC design review, air change calculations, differential pressure mapping, and qualification support.",
  },
  {
    icon: Layers,
    title: "Clean Room Consultancy",
    description:
      "ISO 14644 classification advisory, contamination control strategies, and environmental monitoring programs.",
  },
  {
    icon: BarChart2,
    title: "Project Feasibility Studies",
    description:
      "Technical and commercial feasibility assessments for greenfield and brownfield pharmaceutical projects.",
  },
  {
    icon: Lightbulb,
    title: "Technical Advisory",
    description:
      "Expert guidance on technology transfer, formulation development, and manufacturing scale-up activities.",
  },
];

const WHO_WE_SERVE = [
  { icon: FlaskConical, label: "Pharmaceutical Manufacturers" },
  { icon: Microscope, label: "Medical Device Companies" },
  { icon: ShieldCheck, label: "Biotechnology Organizations" },
  { icon: ClipboardCheck, label: "Laboratories" },
  { icon: Stethoscope, label: "Healthcare Institutions" },
  { icon: Users, label: "Investors" },
];

export default function PharmaceuticalConsultancyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0a7a8c] selection:text-white">
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li className="text-neutral-950 font-bold">
                Pharmaceutical Consultancy
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a7a8c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#0a7a8c]/15 border border-[#0a7a8c]/40 text-[#0a7a8c] text-xs font-bold uppercase tracking-[0.2em] mb-5 self-start">
                <FlaskConical size={15} className="text-[#0a7a8c]" />
                <span>Sector 03 • Pharmaceutical &amp; Compliance</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                Pharmaceutical Consultancy
              </h1>

              <p className="text-base sm:text-lg font-bold text-[#0a7a8c] uppercase tracking-wide mb-4">
                Strategic, Regulatory &amp; Quality Solutions for Pharmaceutical Excellence
              </p>

              <div className="h-[3px] w-16 bg-[#0a7a8c] mb-5" />

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 max-w-2xl">
                ROYSONS provides professional consultancy services to pharmaceutical, biotechnology, medical device, and healthcare organizations. We support clients throughout facility planning, regulatory compliance, quality management, documentation, and operational development.
              </p>

              <div className="flex flex-wrap gap-3.5 items-center">
                <Link
                  href="/contact"
                  className="group self-start inline-flex items-center gap-2.5 bg-[#0a7a8c] hover:bg-white text-white hover:text-black font-bold px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#0a7a8c]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">
                    Get Consultancy
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
                <Link
                  href="#capabilities"
                  className="self-start inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#0a7a8c] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-[2px]"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1 bg-gradient-to-b from-[#0a7a8c]/40 via-neutral-800 to-[#0a7a8c]/20 shadow-xl">
                <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-card1.png"
                    alt="Pharmaceutical Consultancy by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md border border-[#0a7a8c]/40 rounded-[2px]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0a7a8c] mb-1">
                      WHO-GMP · DRAP · FDA · EMA Compliant
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug">
                      End-to-End Regulatory &amp; Quality Consultancy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="15+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                Years of Expertise
              </p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="200+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                Projects Completed
              </p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="50+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                Regulatory Approvals
              </p>
            </div>
            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                GMP Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Grid */}
      <section id="capabilities" className="py-14 sm:py-18 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              EXPERT PHARMA ADVISORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              From facility design and GMP implementation to regulatory licensing and quality systems — comprehensive consultancy across every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#0a7a8c]/60 transition-all duration-300">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#0a7a8c] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">
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

      {/* Quality & Compliance + Who We Serve */}
      <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quality & Compliance */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
                Quality &amp; Compliance
              </h2>
              <div className="h-[3px] w-14 bg-neutral-950 mb-4" />
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                Our consultancy approach focuses on helping organizations establish systems aligned with applicable international quality and regulatory requirements.
              </p>
              <div className="space-y-3">
                {[
                  "WHO-GMP & cGMP Implementation",
                  "DRAP, FDA & EMA Regulatory Support",
                  "ICH Q10 Pharmaceutical Quality Systems",
                  "Risk-Based Quality Management",
                  "Contamination Control Strategy (CCS)",
                  "Audit Readiness & Inspection Preparation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0a7a8c] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                CLIENTELE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
                Who We Serve
              </h2>
              <div className="h-[3px] w-14 bg-neutral-950 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {WHO_WE_SERVE.map((client, i) => {
                  const Icon = client.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 sm:p-4 bg-neutral-50 border border-neutral-200 rounded-[2px] group hover:border-[#0a7a8c] hover:bg-white transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-[2px] bg-neutral-950 flex items-center justify-center flex-shrink-0 group-hover:border group-hover:border-[#0a7a8c]/60 transition-all">
                        <Icon size={18} strokeWidth={1.5} className="text-[#0a7a8c]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-neutral-800 uppercase tracking-wide group-hover:text-neutral-950 transition-colors">
                        {client.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="PHARMACEUTICAL CONSULTANCY"
        title="Build a Compliant & Future-Ready Pharmaceutical Operation"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
