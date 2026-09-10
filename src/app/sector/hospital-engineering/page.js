"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseMedical,
  Building2,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Send,
  Phone,
  Mail,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import CapabilitiesSection from "@/components/hospital-engineering/CapabilitiesSection";
import CleanRoomApplicationsSection from "@/components/hospital-engineering/CleanRoomApplicationsSection";
import EquipmentPortfolioShowcase from "@/components/hospital-engineering/EquipmentPortfolioShowcase";
import ProjectLifecycleTimeline from "@/components/hospital-engineering/ProjectLifecycleTimeline";
import StandardsMatrixSection from "@/components/hospital-engineering/StandardsMatrixSection";
import HospitalEngineeringTrustCTA from "@/components/hospital-engineering/HospitalEngineeringTrustCTA";
import IndustriesServedSection from "@/components/hospital-engineering/IndustriesServedSection";

function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
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
      className="block text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight"
    >
      {displayValue}
    </span>
  );
}

const ENGINEERING_HERO_SLIDES = [
  {
    image: "/roys_operation_theatre.png",
    tag: "Turnkey Clean Room Infrastructure",
    title: "Modular Clean Rooms, ISO 14644 Wall Systems & Walkable Ceilings",
  },
  {
    image: "/roys_hospital_interior.png",
    tag: "Modular Operation Theatres",
    title: "Laminar Airflow Ceilings, Hermetic Doors & Ultra-Clean OT Suites",
  },
  {
    image: "/pakmedical-card1.png",
    tag: "Healthcare HVAC & Filtration",
    title: "Dedicated Air Handling Units (AHU) & Certified H14 HEPA Systems",
  },
  {
    image: "/pakmedical-card3.png",
    tag: "Medical Gas & Environmental Control",
    title: "HTM 02-01 MGPS Networks, Differential Pressure & BMS Telemetry",
  },
];

export default function HospitalEngineeringServicePage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % ENGINEERING_HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Hospital Engineering & Clean Rooms",
    subject: "Clean Room Engineering Inquiry",
    message: "",
  });

  const handleSelectSystem = (systemName) => {
    setFormData((prev) => ({
      ...prev,
      subject: `Inquiry: ${systemName}`,
      message: `We are requesting technical specifications, design drawings, and quotation proposals for: ${systemName}.\n\nPlease provide system parameters and lead times.`,
    }));
    const el = document.getElementById("engineering-consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectApplication = (applicationTitle) => {
    setFormData((prev) => ({
      ...prev,
      subject: `Project Inquiry: ${applicationTitle}`,
      message: `We are planning an engineering / clean-room facility for: ${applicationTitle}.\n\nPlease arrange a technical consultation to discuss spatial layout, HVAC requirements, and validation protocols.`,
    }));
    const el = document.getElementById("engineering-consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCapability = (capabilityTitle) => {
    setFormData((prev) => ({
      ...prev,
      subject: `Engineering Scope Inquiry: ${capabilityTitle}`,
      message: `We are requesting technical specifications, engineering deliverables, and spatial planning consultations for: ${capabilityTitle}.\n\nPlease arrange a technical consultation with your engineering team.`,
    }));
    const el = document.getElementById("engineering-consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/service-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "Hospital Engineering & Clean Rooms",
        subject: "Clean Room Engineering Inquiry",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="min-h-screen bg-white font-serif selection:bg-[#0a7a8c] selection:text-white"
    >
      <HeaderNavbar activeRoute="/sector" />

      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
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
                <Link href="/sector" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li className="text-neutral-950 font-bold">
                Hospital Engineering &amp; Clean Rooms
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section
        data-dark-section="true"
        className="relative bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800 overflow-hidden roysons-preserve-dark"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0a7a8c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/80 text-cyan-300 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-4 self-start shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                <BriefcaseMedical size={16} className="text-cyan-300 flex-shrink-0" />
                <span className="text-cyan-300 font-bold uppercase tracking-[0.2em]">Sector 02 • Clean Rooms &amp; Hospital Engineering</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                Hospital Engineering &amp; Clean Rooms
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Engineering Healthcare Environments Built for Precision, Safety &amp; Compliance
              </p>

              <div className="h-[3px] w-16 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-5" />

              <p className="text-sm sm:text-base text-neutral-100 leading-relaxed font-normal max-w-2xl">
                ROYSONS provides specialized hospital engineering, clean room, HVAC, medical infrastructure, and controlled-environment solutions for healthcare, pharmaceutical, biotechnology, laboratory, research, and medical manufacturing facilities.
              </p>
            </div>

            {/* Right Media Card - Pure Auto-Advancing Image Slider */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[3px] p-1 bg-gradient-to-b from-cyan-500/40 via-neutral-800 to-[#0a7a8c]/30 shadow-2xl shadow-cyan-950/50 group select-none">
                <div className="relative h-[340px] sm:h-[400px] lg:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-950">
                  {/* Slides */}
                  {ENGINEERING_HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeHeroSlide === idx
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

                  {/* Top Bar: Status & Counter */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-neutral-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>HEALTHCARE SHOWCASE</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-[2px] bg-neutral-950/80 backdrop-blur-md border border-cyan-400/40 text-white text-[11px] font-bold tracking-widest">
                      <span className="text-cyan-400 font-extrabold">0{activeHeroSlide + 1}</span>
                      <span className="text-neutral-400 mx-1">/</span>
                      <span className="text-neutral-400">0{ENGINEERING_HERO_SLIDES.length}</span>
                    </div>
                  </div>

                  {/* Bottom Caption Card & Indicators */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 bg-neutral-950/90 backdrop-blur-md border border-cyan-400/50 rounded-[2px] z-20">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                        {ENGINEERING_HERO_SLIDES[activeHeroSlide].tag}
                      </p>
                      {/* Dots / Pills */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {ENGINEERING_HERO_SLIDES.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveHeroSlide(dotIdx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              activeHeroSlide === dotIdx
                                ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                : "w-2 bg-white/40 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-[13px] font-semibold text-white line-clamp-1">
                      {ENGINEERING_HERO_SLIDES[activeHeroSlide].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-b border-neutral-200 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-3 border-[#0a7a8c] pl-4 sm:pl-5 py-1">
              <AnimatedStatValue value="20+" />
              <p className="text-[14px] font-bold uppercase tracking-wider text-neutral-600 mt-1.5">
                Years of Engineering
              </p>
            </div>

            <div className="border-l-3 border-[#0a7a8c] pl-4 sm:pl-5 py-1">
              <AnimatedStatValue value="150+" />
              <p className="text-[14px] font-bold uppercase tracking-wider text-neutral-600 mt-1.5">
                Clean Rooms Executed
              </p>
            </div>

            <div className="border-l-3 border-[#0a7a8c] pl-4 sm:pl-5 py-1">
              <AnimatedStatValue value="99.997%" />
              <p className="text-[14px] font-bold uppercase tracking-wider text-neutral-600 mt-1.5">
                HEPA H14 Filtration
              </p>
            </div>

            <div className="border-l-3 border-[#0a7a8c] pl-4 sm:pl-5 py-1">
              <AnimatedStatValue value="100%" />
              <p className="text-[14px] font-bold uppercase tracking-wider text-neutral-600 mt-1.5">
                cGMP &amp; ISO Validation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Core Capabilities Section (All 11 Capabilities) */}
      <CapabilitiesSection onSelectCapability={handleSelectCapability} />

      {/* 2. Clean Room Applications Section (8 Specialized Sectors) */}
      <CleanRoomApplicationsSection onSelectApplication={handleSelectApplication} />

      {/* 3. Dedicated Equipment & Systems Portfolio (Interactive) */}
      <EquipmentPortfolioShowcase onRequestConsultation={handleSelectSystem} />

      {/* 4. Engineering Project Lifecycle (4-Phase Turnkey Delivery) */}
      <ProjectLifecycleTimeline />

      {/* 5. Standards & Compliance Matrix */}
      <StandardsMatrixSection />

      {/* 6. Why ROYSONS? & Trust CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HospitalEngineeringTrustCTA />
      </div>

      {/* 7. Industries & Facilities We Serve */}
      <IndustriesServedSection />

      {/* 8. Interactive Engineering Consultation Form */}
      <section id="engineering-consultation" className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Advisory Column */}
            <div
              data-dark-section="true"
              style={{
                backgroundColor: "#042E3A",
                color: "#ffffff",
                fontFamily: '"Times New Roman", Times, serif',
              }}
              className="roysons-preserve-dark lg:col-span-5 p-8 sm:p-10 lg:p-12 !bg-[#042E3A] text-white flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider bg-[#0a7a8c]/30 text-[#01b576] border border-[#01b576]/30 mb-6">
                  <BriefcaseMedical className="w-3.5 h-3.5" />
                  <span>Technical Engineering Desk</span>
                </div>

                <h3
                  style={{ color: "#ffffff" }}
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight !text-white leading-snug mb-4"
                >
                  Consult With Our Hospital Engineering Specialists
                </h3>

                <p
                  style={{ color: "#cbd5e1" }}
                  className="text-[15px] sm:text-[16px] !text-slate-300 leading-relaxed font-normal mb-8"
                >
                  Discuss your hospital layout planning, modular clean-room specifications, HVAC ductwork design, medical gas installations, or validation protocols directly with ROYSONS biomedical and mechanical engineers.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#01b576] shrink-0" />
                    <span className="text-[15px] font-semibold text-white">+92 300 0000000 / Direct Engineering Line</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#01b576] shrink-0" />
                    <span className="text-[15px] font-semibold text-white">engineering@roysons.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#01b576] shrink-0" />
                    <span className="text-[15px] font-semibold text-white">Mon – Sat: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-white/80 text-[12px] font-medium">
                <Lock size={14} className="text-[#01b576] shrink-0" />
                <span>Confidential &amp; Verified Institutional Consultation</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center p-6">
                  <div className="w-16 h-16 bg-[#042E3A] border-2 border-[#01b576] rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-[#01b576]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-neutral-950 mb-3">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-[16px] text-neutral-600 max-w-md leading-relaxed mb-6 font-normal">
                    Thank you for contacting ROYSONS Hospital Engineering Division. Our engineering leadership will review your facility requirements and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-8 py-3.5 bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] hover:brightness-110 text-white text-[14px] font-bold uppercase tracking-[0.14em] rounded-xl transition-all shadow-md hover:shadow-lg shadow-[#01b576]/30 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#042E3A] mb-2 leading-snug">
                    Request an Engineering Consultation
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-8 font-normal leading-relaxed">
                    Provide project parameters below to receive preliminary technical layouts, budgetary estimations, and compliance review.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="he-fullname"
                          className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="he-fullname"
                          type="text"
                          required
                          placeholder="e.g. Eng. Tariq Mehmood"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-400 font-medium outline-none transition-all rounded-xl shadow-xs"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="he-email"
                          className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="he-email"
                          type="email"
                          required
                          placeholder="name@hospital.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-400 font-medium outline-none transition-all rounded-xl shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="he-phone"
                          className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="he-phone"
                          type="tel"
                          required
                          placeholder="+92 300 0000000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-400 font-medium outline-none transition-all rounded-xl shadow-xs"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="he-company"
                          className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                        >
                          Hospital / Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="he-company"
                          type="text"
                          required
                          placeholder="Hospital or Manufacturing Facility"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-400 font-medium outline-none transition-all rounded-xl shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="he-subject"
                        className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                      >
                        Project Scope / Area of Interest
                      </label>
                      <input
                        id="he-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 font-medium outline-none transition-all rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="he-message"
                        className="text-[12px] font-bold text-[#042E3A] uppercase tracking-[0.12em]"
                      >
                        Message / Technical Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="he-message"
                        rows={4}
                        required
                        placeholder="Please describe facility square footage, clean room class (ISO/GMP), project location, or desired commissioning timeline..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-400 font-medium outline-none transition-all rounded-xl resize-none shadow-xs"
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-[14px] font-medium">
                        ⚠️ {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#0078b4] via-[#009588] to-[#01b576] hover:brightness-110 text-white text-[15px] font-bold uppercase tracking-[0.14em] rounded-xl transition-all shadow-lg shadow-[#01b576]/30 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      <Send size={16} />
                      <span>
                        {isSubmitting ? "Submitting Inquiry..." : "Submit Engineering Inquiry"}
                      </span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
