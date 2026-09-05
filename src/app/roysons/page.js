"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  Briefcase,
  ShieldCheck,
  Globe2,
  Award,
  Landmark,
  Layers,
  HeartPulse,
  BriefcaseMedical,
  PawPrint,
  Pill,
  Monitor,
  Zap,
  Sun,
  PlugZap,
  Shield,
  Sprout,
  Gem,
  HardHat,
  Utensils,
  Globe,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const CORPORATE_STATS = [
  { label: "Group Companies", value: "26", desc: "Diversified commercial enterprises" },
  { label: "Business Divisions", value: "15+", desc: "Strategic specialized sectors" },
  { label: "Product Portfolio", value: "1,000+", desc: "Products & enterprise services" },
  { label: "Government Clients", value: "100+", desc: "Public sector & federal ministries" },
  { label: "Annual Volume", value: "PKR 2.2+ B", desc: "Strong audited balance sheet" },
  { label: "Pipeline FY 26-27", value: "PKR 5.0+ B", desc: "Strategic upcoming tenders" },
];

const STRATEGIC_DIVISIONS = [
  {
    title: "Healthcare & Medical Technologies",
    icon: HeartPulse,
    href: "/services/healthcare-medical",
    desc: "Diagnostic equipment, surgical units, critical care, and medical imaging infrastructure.",
  },
  {
    title: "Hospital Engineering & Clean Rooms",
    icon: BriefcaseMedical,
    href: "/services/hospital-engineering",
    desc: "Turnkey HVAC, ISO cleanrooms, modular operating theaters, and medical gas pipeline systems.",
  },
  {
    title: "Veterinary & Livestock Solutions",
    icon: PawPrint,
    href: "/services/veterinary-livestock",
    desc: "Animal health biologics, poultry vaccines, herd management, and diagnostic testing.",
  },
  {
    title: "Pharmaceutical Consultancy",
    icon: Pill,
    href: "/services/pharmaceutical-consultancy",
    desc: "cGMP regulatory compliance, facility design, pharmacovigilance, and quality audit solutions.",
  },
  {
    title: "Information Technology & AI",
    icon: Monitor,
    href: "/services/it-ai",
    desc: "Enterprise ERP architecture, artificial intelligence workflows, and cyber resilience systems.",
  },
  {
    title: "Electrical & Power Systems",
    icon: Zap,
    href: "/services/electrical-power-systems",
    desc: "High-voltage substations, industrial switchgear, grid synchronization, and transmission.",
  },
  {
    title: "Renewable Energy",
    icon: Sun,
    href: "/services/renewable-energy",
    desc: "Commercial & utility-scale solar PV, wind generation, and industrial battery energy storage.",
  },
  {
    title: "Electric Mobility",
    icon: PlugZap,
    href: "/services/electric-mobility",
    desc: "EV charging infrastructure, fleet electrification, and next-generation battery ecosystems.",
  },
  {
    title: "Defense & Security",
    icon: Shield,
    href: "/services/defense-security",
    desc: "Command & control systems, border surveillance, tactical communications, and perimeter defense.",
  },
  {
    title: "Agriculture & Dairy Development",
    icon: Sprout,
    href: "/services/agriculture-dairy-development",
    desc: "Precision drip irrigation, high-yield greenhouse farming, and computerized dairy processing.",
  },
  {
    title: "Mining & Minerals",
    icon: Gem,
    href: "/services/mining-minerals",
    desc: "Geological mapping, mineral extraction, copper & lithium processing, and ethical mining.",
  },
  {
    title: "Construction & Infrastructure",
    icon: HardHat,
    href: "/services/construction-infrastructure",
    desc: "Highways, industrial complexes, commercial towers, bridge engineering, and civil contracting.",
  },
  {
    title: "Food Processing",
    icon: Utensils,
    href: "/services/food-processing",
    desc: "Automated FMCG processing lines, cold chain refrigeration, and HACCP-certified packaging.",
  },
  {
    title: "International Trade & Exports",
    icon: Globe,
    href: "/services/international-trade-exports",
    desc: "Global commodity trade, maritime shipping logistics, customs brokerage, and foreign exports.",
  },
  {
    title: "Real Estate & Development",
    icon: Building2,
    href: "/services/real-estate-development",
    desc: "Master-planned residential communities, corporate towers, and commercial developments.",
  },
];

const CORE_ADVANTAGES = [
  {
    title: "Multi-Domain Industrial Expertise",
    desc: "Unified engineering, procurement, and deployment capabilities across 15+ vital national sectors.",
  },
  {
    title: "Government & Public Procurement Experience",
    desc: "Proven track record delivering mission-critical tenders for federal ministries and armed forces.",
  },
  {
    title: "Global Supply Chain & Partnerships",
    desc: "Direct partnerships with ISO & CE certified manufacturers across North America, Europe, and Asia.",
  },
  {
    title: "Turnkey EPC & Project Execution",
    desc: "End-to-end management from early engineering concept to procurement, commissioning, and support.",
  },
  {
    title: "Stringent Regulatory Compliance",
    desc: "Uncompromising commitment to cGMP, ISO 9001, ISO 13485, and national industrial quality standards.",
  },
  {
    title: "Institutional Financial Stability",
    desc: "A multi-billion rupee balance sheet backing large-scale sovereign contracts and joint ventures.",
  },
];

export default function RoysonsPage({ isRootHome = false }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    division: "",
    requirements: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit corporate consultation request.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        division: "",
        requirements: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-white text-[#042E3A] roysons-root"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Enforce Times New Roman font and styling across the entire page */}
      <style jsx global>{`
        .roysons-root,
        .roysons-root * {
          font-family: "Times New Roman", Times, serif !important;
        }
      `}</style>

      <HeaderNavbar activeRoute={isRootHome ? "/" : "/roysons"} />

      {/* Breadcrumb Navigation */}
      <section className="pt-6 pb-3 px-4 sm:px-6 border-b border-neutral-100 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[13px] sm:text-[14px] text-neutral-600 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#0a7a8c] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-neutral-400" />
                <span className="text-[#042E3A] font-black">ROYSONS Pvt. Ltd.</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa]/80 via-white to-white py-16 sm:py-24 lg:py-28 border-b border-[#0a7a8c]/15">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a7a8c]/10 border border-[#0a7a8c]/30 text-[#042E3A] text-[13px] sm:text-[14.5px] font-black tracking-[0.2em] uppercase mb-6 w-fit shadow-xs">
                <Sparkles size={16} className="text-[#0a7a8c]" />
                <span className="text-[#042E3A] font-black">Corporate Enterprise &amp; Operations</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#042E3A] leading-[1.06] tracking-tight mb-5 drop-shadow-xs">
                ROYSONS Pvt. Ltd.
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a7a8c] leading-snug mb-6">
                A Diversified Multi-Sector Enterprise Delivering World-Class Solutions
              </p>

              <p className="text-[19px] sm:text-[21px] lg:text-[23px] text-[#042E3A]/90 leading-[1.85] font-normal mb-8 max-w-2xl">
                Operating across 15+ specialized business sectors with over 26 group companies, ROYSONS Pvt. Ltd. provides integrated engineering, procurement, healthcare, energy, infrastructure, and technology services to governments and multinational clients.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#who-we-are"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[4px] bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#10b981] hover:from-[#0369a1] hover:to-[#059669] text-white text-[15px] sm:text-[16px] font-black uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] active:scale-95"
                >
                  <span className="text-white font-black">Explore Enterprise</span>
                  <ArrowRight size={18} className="text-white" />
                </Link>

                <Link
                  href="#corporate-inquiry"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[4px] bg-white hover:bg-[#f0fdfa] text-[#042E3A] border-2 border-[#042E3A] hover:border-[#0a7a8c] hover:text-[#0a7a8c] text-[15px] sm:text-[16px] font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span className="font-bold">Consultation &amp; Inquiries</span>
                </Link>
              </div>
            </div>

            {/* Right Image: Roysons Headquarters Building */}
            <div className="lg:col-span-5 w-full">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-[#0a7a8c]/40 group"
                style={{
                  boxShadow: "0 20px 45px -12px rgba(4, 46, 58, 0.25), 0 0 25px rgba(10, 122, 140, 0.15)",
                }}
              >
                <Image
                  src="/About-us-hero.jpeg"
                  alt="ROYSONS Pvt. Ltd. Headquarters"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#0a7a8c]/25 shadow-lg">
                  <p className="text-[12px] uppercase font-black tracking-widest text-[#0a7a8c]">
                    Corporate Headquarters
                  </p>
                  <p className="text-[17px] font-black text-[#042E3A]">
                    ROYSONS Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE (Exact match to User's Uploaded Screenshot) */}
      <section id="who-we-are" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[13px] sm:text-[15px] font-black tracking-[0.3em] text-[#0a7a8c] uppercase mb-3 block">
                WHO WE ARE
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-6 leading-[1.08] tracking-tight">
                ROYSONS Pvt. Ltd.
              </h2>

              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#042E3A]/85 leading-[1.85] font-normal mb-6">
                ROYSONS Pvt. Ltd. is a diversified multi-sector enterprise built with a vision to establish a dynamic organization capable of delivering world-class solutions across multiple industries. With a growing portfolio of specialized companies and business divisions, ROYSONS operates across healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, international trade, manufacturing, real estate, food, and consultancy.
              </p>

              {/* Callout with Teal Bar */}
              <div className="border-l-4 border-[#0a7a8c] pl-6 py-2 bg-[#f0fdfa]/60 rounded-r-md">
                <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#042E3A] font-bold leading-[1.8]">
                  Our strength lies in bringing diverse expertise together under one corporate platform. Through our specialized companies, strategic partnerships, and industry-focused teams, we deliver products, services, and integrated solutions designed to meet the evolving needs of governments, institutions, businesses, and communities.
                </p>
              </div>
            </div>

            {/* Right Image: Modern Building Facade with 3D Signage */}
            <div className="flex-1 w-full relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">
              <div 
                className="h-full w-full relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden rounded-[4px] bg-[#1a1f24]"
                style={{
                  border: "2px solid #0a7a8c",
                  boxShadow: "0 0 24px rgba(10,122,140,0.25), 6px 6px 0px #042E3A",
                }}
              >
                <Image 
                  src="/About-us-hero.jpeg" 
                  alt="ROYSONS Pvt. Ltd. Building Facade" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: FOUNDER & CHAIRMAN LEADERSHIP (Ijaz Naseer) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f8fafc] to-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          
          <div className="mb-6 sm:mb-8">
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/40 bg-neutral-900 group">
              <Image
                src="/logos/chairman.jpeg"
                alt="Ijaz Naseer - Chairman, ROYSONS Pvt. Ltd."
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#042E3A] mb-3 tracking-tight">
            Ijaz Naseer
          </h2>

          <div className="inline-flex items-center border border-[#0a7a8c]/40 bg-[#f0fdfa] px-6 py-2 rounded-full mb-6 shadow-xs">
            <span className="text-xs sm:text-[15px] font-black uppercase tracking-wider text-[#0a7a8c]">
              Chairman &amp; Founder, ROYSONS Pvt. Ltd.
            </span>
          </div>

          <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#042E3A]/85 leading-[1.85] font-normal max-w-4xl text-center mb-8">
            Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally. Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.
          </p>

          <div className="w-full max-w-3xl mx-auto flex items-center justify-center gap-3 sm:gap-4 select-none">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#0a7a8c]/30 to-[#0a7a8c]/80" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/30 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a7a8c]" />
              <div className="w-2 h-2 rotate-45 bg-[#0a7a8c]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a7a8c]" />
            </div>
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#0a7a8c]/30 to-[#0a7a8c]/80" />
          </div>

        </div>
      </section>

      {/* SECTION 3: CORPORATE SCALE & AUDITED BENCHMARKS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#042E3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(10,122,140,0.25),transparent_70%)] pointer-events-none" />
        
        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[13px] sm:text-[14px] font-black tracking-[0.25em] text-cyan-300 uppercase mb-3 block">
              ENTERPRISE METRICS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Scale, Stability &amp; Global Reach
            </h2>
            <p className="text-neutral-200 text-[17px] sm:text-[19px] mt-4 font-normal">
              Continuous capital reinvestment and institutional partnerships drive our national and international growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {CORPORATE_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[3px] bg-white/5 border border-cyan-400/20 text-center hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-xs"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] sm:text-[14px] font-black uppercase tracking-wider text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-[12px] text-neutral-300 font-sans leading-tight">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 15 STRATEGIC OPERATIONAL DIVISIONS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[13px] sm:text-[15px] font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              SECTOR PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#042E3A] tracking-tight">
              15 Strategic Business Divisions
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#042E3A]/85 mt-4 font-normal">
              Specialized companies engineered to deliver turnkey execution, high-grade compliance, and sovereign-grade infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STRATEGIC_DIVISIONS.map((division, idx) => {
              const IconComp = division.icon;
              return (
                <Link
                  key={idx}
                  href={division.href}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-[3px] border border-neutral-200 hover:border-[#0a7a8c] bg-white hover:bg-gradient-to-br hover:from-[#f0fdfa] hover:to-white transition-all duration-300 shadow-xs hover:shadow-[0_10px_30px_rgba(10,122,140,0.15)] hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-[3px] bg-[#f0fdfa] border border-[#0a7a8c]/30 text-[#0a7a8c] group-hover:bg-[#042E3A] group-hover:text-cyan-300 group-hover:border-[#042E3A] flex items-center justify-center mb-5 transition-colors duration-300">
                      <IconComp size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-[19px] sm:text-[21px] font-black text-[#042E3A] group-hover:text-[#0a7a8c] mb-3 leading-snug transition-colors">
                      {division.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#042E3A]/80 leading-relaxed font-normal mb-6">
                      {division.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[13px] sm:text-[14px] font-black uppercase tracking-wider text-[#0a7a8c] group-hover:text-[#042E3A] transition-colors border-t border-neutral-100 pt-4">
                    <span>Explore Division</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: INSTITUTIONAL SYNERGY - ROYSONS TRUST & ROYSONS HOLDINGS (Matching Image 1) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f8fafc] border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image: Office Building Wall Mockup */}
            <div className="lg:col-span-5 w-full">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl border-2 border-[#0a7a8c]/40 group"
                style={{
                  boxShadow: "0 18px 40px -10px rgba(4, 46, 58, 0.2), 0 0 20px rgba(10, 122, 140, 0.12)",
                }}
              >
                <Image
                  src="/logos/roysons logo mockup building.png"
                  alt="ROYSONS TRUST Institutional Headquarters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Content: Exact Text from User's First Uploaded Screenshot */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[13px] sm:text-[15px] font-black tracking-[0.3em] uppercase mb-3 block text-[#0a7a8c]">
                BUILDING INSTITUTIONS
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-4 leading-[1.08] tracking-tight">
                ROYSONS TRUST
              </h2>

              <p className="text-[19px] sm:text-[22px] lg:text-[24px] font-bold text-[#0a7a8c] leading-snug mb-5">
                A Purpose-Led Institution Behind a Diversified Enterprise
              </p>

              <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#042E3A]/85 leading-[1.85] font-normal mb-8">
                ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is designed around a simple philosophy: business growth should create lasting value for people, communities, and future generations. Through its relationship with ROYSONS Pvt. Ltd., the Trust aims to support responsible enterprise development, strengthen long-term institutional ownership, and channel resources toward initiatives in education, healthcare, community development, skills, research, sustainability, and other areas of public benefit. Our ambition is to build an institution that can outlive individual businesses and generations—creating a sustainable foundation for economic development and social progress.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/roysons-trust"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[4px] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#042E3A] text-white text-[15px] sm:text-[16px] font-black uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                >
                  <span>Visit ROYSONS Trust Page</span>
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/roysons-holding"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[4px] bg-white hover:bg-[#f0fdfa] text-[#042E3A] border-2 border-[#042E3A] hover:border-[#0a7a8c] text-[15px] sm:text-[16px] font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Explore Holding Website</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: WHY PARTNER WITH ROYSONS (Core Capabilities) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[13px] sm:text-[15px] font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              CORPORATE EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#042E3A] tracking-tight">
              Why Partner With ROYSONS Pvt. Ltd.
            </h2>
            <p className="text-[17px] sm:text-[19px] text-[#042E3A]/85 mt-4 font-normal">
              Decades of combined technical capability, financial governance, and reliable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_ADVANTAGES.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[3px] border border-neutral-200 bg-[#f8fafc]/60 hover:bg-white hover:border-[#0a7a8c] transition-all duration-300 shadow-xs hover:shadow-[0_8px_25px_rgba(10,122,140,0.12)]"
              >
                <div className="w-10 h-10 rounded-full bg-[#0a7a8c]/15 text-[#0a7a8c] flex items-center justify-center font-black text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-[19px] sm:text-[21px] font-black text-[#042E3A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16.5px] text-[#042E3A]/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: CORPORATE CONSULTATION & INQUIRY FORM */}
      <section id="corporate-inquiry" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f0fdfa]/60 via-white to-white border-b border-[#0a7a8c]/20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-[4px] bg-gradient-to-br from-[#042E3A] via-[#053846] to-[#0a7a8c] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[12px] sm:text-[13px] font-black tracking-[0.25em] text-cyan-300 uppercase mb-3 block">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-snug mb-5">
                  Engage With ROYSONS Enterprise
                </h3>
                <p className="text-[16px] sm:text-[17.5px] text-neutral-100 leading-relaxed mb-8">
                  Whether you are seeking joint venture partnerships, government tender collaboration, or multi-sector turnkey project execution, our senior leadership is ready to assist.
                </p>

                <div className="space-y-4 text-[15px] sm:text-[16px] border-t border-cyan-400/30 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-cyan-300 font-bold">Direct Corporate Line</p>
                      <p className="font-bold text-white">+92 (0) 51 111-769-766</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-cyan-300 font-bold">Corporate Inquiries</p>
                      <p className="font-bold text-white">info@roysons.com.pk</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-cyan-300 font-bold">Head Office</p>
                      <p className="font-bold text-white">ROYSONS Corporate Complex, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cyan-400/20 text-xs text-neutral-300">
                ROYSONS Pvt. Ltd. · All Rights Reserved
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[4px] border border-[#0a7a8c]/25 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-black text-[#042E3A] mb-2">
                Submit Consultation Request
              </h3>
              <p className="text-[15px] sm:text-[16.5px] text-[#042E3A]/80 mb-6">
                Please provide your project parameters or commercial requirements. Our corporate relations team will respond within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 bg-[#f0fdfa] border-2 border-[#0a7a8c] rounded-[3px] text-center">
                  <div className="w-14 h-14 bg-[#0a7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-[#042E3A] mb-2">
                    Request Received Successfully
                  </h4>
                  <p className="text-[16px] text-[#042E3A]/85 max-w-md mx-auto">
                    Thank you for reaching out to ROYSONS Pvt. Ltd. Our senior commercial department will review your specifications and get in touch promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-[2px]">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. / Engr. Muhammad Ali"
                        className="w-full px-4 py-3 border border-[#042E3A]/30 focus:border-[#0a7a8c] focus:outline-none rounded-[2px] text-[15px] text-[#042E3A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.ali@organization.com"
                        className="w-full px-4 py-3 border border-[#042E3A]/30 focus:border-[#0a7a8c] focus:outline-none rounded-[2px] text-[15px] text-[#042E3A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-1.5">
                        Organization / Ministry *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ministry / Enterprise Name"
                        className="w-full px-4 py-3 border border-[#042E3A]/30 focus:border-[#0a7a8c] focus:outline-none rounded-[2px] text-[15px] text-[#042E3A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-1.5">
                        Division of Interest *
                      </label>
                      <select
                        required
                        value={formData.division}
                        onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                        className="w-full px-4 py-3 border border-[#042E3A]/30 focus:border-[#0a7a8c] focus:outline-none rounded-[2px] text-[15px] text-[#042E3A] bg-white"
                      >
                        <option value="">Select Business Sector</option>
                        {STRATEGIC_DIVISIONS.map((d, i) => (
                          <option key={i} value={d.title}>
                            {d.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#042E3A] mb-1.5">
                      Project Requirements &amp; Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Outline your technical requirements, specifications, tender scope, or joint venture objectives..."
                      className="w-full px-4 py-3 border border-[#042E3A]/30 focus:border-[#0a7a8c] focus:outline-none rounded-[2px] text-[15px] text-[#042E3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#042E3A] text-white text-[15px] sm:text-[16px] font-black uppercase tracking-wider rounded-[2px] shadow-md transition-all duration-300 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
