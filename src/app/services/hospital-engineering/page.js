"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseMedical,
  Building2,
  Fan,
  Wind,
  ShieldCheck,
  Activity,
  Layers,
  Gauge,
  ThermometerSnowflake,
  ArrowRight,
  ChevronRight,
  Hospital,
  FlaskConical,
  Pill,
  Factory,
  Cpu,
  Wrench,
  Airplay,
  Award,
  Sparkles,
  Workflow,
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
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950">
      {displayValue}
    </span>
  );
}

const CAPABILITIES = [
  {
    icon: Building2,
    title: "Hospital Planning & Engineering",
    description:
      "Comprehensive architectural healthcare layout design, patient flow optimization, MEP infrastructure, and regulatory structural planning.",
  },
  {
    icon: Layers,
    title: "Clean Room Design",
    description:
      "Engineered modular wall & ceiling panels, anti-microbial surfaces, flush doors, and airtight containment for ISO 14644 compliance.",
  },
  {
    icon: Fan,
    title: "HVAC Systems",
    description:
      "Specialized healthcare HVAC systems, dedicated AHUs, laminar air distribution, and constant fresh air exchange management.",
  },
  {
    icon: Wind,
    title: "HEPA Filtration",
    description:
      "Multi-stage air filtration utilizing certified H14 HEPA and ULPA filters with 99.997% particle capture efficiency at 0.3 microns.",
  },
  {
    icon: Activity,
    title: "Operation Theatre Engineering",
    description:
      "Turnkey modular OT construction with laminar air flow canopies, medical pendant integration, surgical lights, and hermetic sealing.",
  },
  {
    icon: ShieldCheck,
    title: "ICU Infrastructure",
    description:
      "Controlled intensive care environments with dedicated isolation cubicles, continuous air exchange, and medical gas integration.",
  },
  {
    icon: Sparkles,
    title: "CSSD Planning",
    description:
      "Central Sterile Services Department (CSSD) zoning with strict three-zone workflows: decontamination, packing, and sterile storage.",
  },
  {
    icon: Airplay,
    title: "Medical Gas Systems",
    description:
      "Medical Gas Pipeline Systems (MGPS) complying with HTM 02-01 standards for Oxygen, Nitrous Oxide, Medical Air, Vacuum, and AGSS.",
  },
  {
    icon: Gauge,
    title: "Pressure Control Systems",
    description:
      "Precision differential room pressurization maintaining positive pressure in sterile zones and negative pressure in isolation rooms.",
  },
  {
    icon: Award,
    title: "Clean Room Validation",
    description:
      "Rigorous third-party validation covering particle counts, filter integrity DOP tests, air velocity, recovery times, and GMP certification.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Temperature & Humidity Control",
    description:
      "Automated microclimate regulation maintaining precise temperature (18°C-22°C) and relative humidity (45%-55%) 24/7.",
  },
  {
    icon: Workflow,
    title: "Turnkey Project Execution",
    description:
      "Single-source accountability from concept design, procurement, ducting fabrication, installation to final handover and commissioning.",
  },
];

const CLEAN_ROOM_SOLUTIONS = [
  {
    icon: Pill,
    title: "Pharmaceutical Manufacturing",
    badge: "cGMP Grade A - D",
    description:
      "Sterile compounding suites, oral solid dosage (OSD) facilities, aseptic filling clean rooms, and automated packaging lines engineered to FDA and WHO-GMP standards.",
    image: "/pakmedical-card1.png",
  },
  {
    icon: Factory,
    title: "Medical Device Manufacturing",
    badge: "ISO Class 5 - 8",
    description:
      "Ultra-clean production environments for orthopedic implants, disposable syringes, vascular catheters, and diagnostic kit assembly.",
    image: "/pakmedical-card2.png",
  },
  {
    icon: Activity,
    title: "Operating Theatres",
    badge: "Ultra-Clean OT Suite",
    description:
      "Class I surgical suites with laminar flow ceilings delivering sterile air velocity of 0.38 m/s directly over the operating table.",
    image: "/roys_hospital_interior.png",
  },
  {
    icon: Hospital,
    title: "Intensive Care Units",
    badge: "Negative & Positive Pressure",
    description:
      "Infection-controlled critical care wards, airborne infection isolation rooms (AIIR), and protective environment (PE) units.",
    image: "/roys_ultrasound.png",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    badge: "BSL-1 to BSL-3",
    description:
      "Clinical biochemistry, histology, and pathology laboratories equipped with bio-safety cabinets, ductless hoods, and specialized exhaust systems.",
    image: "/pakmedical-card3.png",
  },
  {
    icon: Cpu,
    title: "Research Facilities",
    badge: "High-Containment Clean Suite",
    description:
      "Controlled scientific environments with vibration isolation, electromagnetic shielding, and particulate-free atmosphere for precision testing.",
    image: "/pakmedical-card4.png",
  },
  {
    icon: Sparkles,
    title: "Biotechnology",
    badge: "Bio-Clean Sterile Zone",
    description:
      "Genetic engineering, vaccine processing, cell culture facilities, and fermentation suites with strict biosecurity protocols.",
    image: "/pakmedical-card5.png",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Processing",
    badge: "CSSD Sterile Processing",
    description:
      "Complete sterile barrier systems, steam sterilizer integration, pass-through autoclaves, and continuous bio-burden monitoring.",
    image: "/pakmedical-card6.png",
  },
];

const ENGINEERING_WORKFLOW = [
  {
    step: "01",
    title: "Concept & Architectural Design",
    description:
      "Detailed facility layout planning, 3D BIM modeling, clean room zoning, material flow diagrams, and regulatory compliance mapping.",
  },
  {
    step: "02",
    title: "HVAC & Mechanical Engineering",
    description:
      "Psychrometric thermal load calculations, AHU sizing, airflow distribution ductwork fabrication, and differential pressure design.",
  },
  {
    step: "03",
    title: "Modular Installation & Integration",
    description:
      "On-site installation of sandwich panels, walkable ceilings, hermetic doors, epoxy flooring, HEPA filters, and medical gas lines.",
  },
  {
    step: "04",
    title: "Testing, Validation & Commissioning",
    description:
      "Comprehensive DQ/IQ/OQ/PQ qualification, DOP filter leak testing, particle count verification, and final compliance certification.",
  },
];

export default function HospitalEngineeringServicePage() {


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
                Hospital Engineering &amp; Clean Rooms
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
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#C6A15A]/15 border border-[#C6A15A]/40 text-[#C6A15A] text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-6 self-start">
                <BriefcaseMedical size={16} className="text-[#C6A15A]" />
                <span>Sector 02 • Healthcare Infrastructure</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
                Hospital Engineering &amp; Clean Rooms
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#C6A15A] uppercase tracking-wide mb-6">
                Engineering Healthcare Environments Built for Precision, Safety &amp; Compliance
              </p>

              <div className="h-[3.5px] w-20 bg-[#C6A15A] mb-6" />

              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                ROYSONS provides specialized hospital engineering and clean room solutions for healthcare, pharmaceutical, biotechnology, and research facilities. Our solutions integrate architectural planning, HVAC engineering, clean room technology, medical infrastructure, and environmental control.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="#cta-consultation"
                  className="group inline-flex items-center gap-3 bg-[#C6A15A] hover:bg-white text-white hover:text-black font-black px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#C6A15A]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">
                    Engineer Your Facility
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>

                <Link
                  href="#clean-room-solutions"
                  className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#C6A15A] text-white px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all rounded-[2px]"
                >
                  Clean Room Solutions
                </Link>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1.5 bg-gradient-to-b from-[#C6A15A]/40 via-neutral-800 to-[#C6A15A]/20 shadow-2xl">
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/pakmedical-hero.png"
                    alt="Hospital Engineering and Clean Room Solutions by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 p-4 bg-neutral-950/80 backdrop-blur-md border border-[#C6A15A]/40 rounded-[2px]">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#C6A15A] mb-1.5">
                      ISO 14644 &amp; cGMP Compliant
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white leading-snug">
                      Turnkey HVAC, Modular Panels &amp; Environmental Control Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner with Animated Counter */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="20+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Years of Engineering
              </p>
            </div>

            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="150+" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                Clean Rooms Executed
              </p>
            </div>

            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="99.997%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                HEPA H14 Filtration
              </p>
            </div>

            <div className="border-l-2 border-[#C6A15A] pl-5 py-1">
              <AnimatedStatValue value="100%" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 mt-2">
                cGMP &amp; ISO Validation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Grid */}
      <section id="capabilities" className="py-20 sm:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              FULL-SPECTRUM EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.12em] text-neutral-950 mb-4">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3.5px] w-16 bg-neutral-950 mb-5" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Specialized engineering services combining clinical planning, high-efficiency mechanical systems, and precision containment technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-[2px] flex flex-col justify-between group hover:border-[#C6A15A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[2px] bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:bg-[#101518] group-hover:border-[#C6A15A]/60 transition-all duration-300">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#C6A15A] group-hover:scale-110 transition-transform duration-300"
                      />
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

      {/* Clean Room Solutions Section */}
      <section id="clean-room-solutions" className="py-20 sm:py-24 bg-[#101518] text-white border-b border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              CONTROLLED ENVIRONMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.14em] text-white mb-4">
              Clean Room Solutions
            </h2>
            <div className="mx-auto h-[3.5px] w-16 bg-[#C6A15A] mb-5" />
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal">
              Custom-engineered controlled atmospheres ensuring optimal particulate count, microclimate balance, and zero cross-contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLEAN_ROOM_SOLUTIONS.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <div
                  key={index}
                  className="bg-[#161c20] border border-neutral-800 rounded-[2px] overflow-hidden group hover:border-[#C6A15A] transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full bg-neutral-900 overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161c20] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm border border-[#C6A15A]/40 text-[#C6A15A] text-xs font-black uppercase tracking-widest rounded-[2px]">
                        {sol.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-10 h-10 rounded-[2px] bg-white/5 border border-[#C6A15A]/30 flex items-center justify-center">
                          <Icon size={20} className="text-[#C6A15A]" />
                        </div>
                        <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white group-hover:text-[#C6A15A] transition-colors duration-300">
                          {sol.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-[15px] text-neutral-400 leading-relaxed font-normal">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-neutral-800/80">
                      <Link
                        href="#cta-consultation"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#C6A15A] hover:text-white transition-colors"
                      >
                        <span>Inquire Solution</span>
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Services Workflow */}
      <section id="engineering-services" className="py-20 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-[#C6A15A] mb-3 block">
              END-TO-END PROJECT LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.14em] text-neutral-950 mb-4">
              Engineering Services
            </h2>
            <div className="mx-auto h-[3.5px] w-16 bg-neutral-950 mb-5" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              From concept and design to installation, testing, validation, and commissioning, our multidisciplinary approach ensures complete project support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_WORKFLOW.map((wf, idx) => (
              <div
                key={idx}
                className="relative p-7 sm:p-8 rounded-[2px] border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-950 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-[#C6A15A] tracking-wider">
                    {wf.step}
                  </span>
                  <div className="w-10 h-10 rounded-[2px] bg-neutral-950 flex items-center justify-center group-hover:border group-hover:border-[#C6A15A]/70 transition-colors">
                    <Wrench size={18} className="text-white group-hover:text-[#C6A15A] transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.05em] text-neutral-950 mb-3 leading-snug group-hover:text-[#C6A15A] transition-colors">
                  {wf.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <ConsultationBanner
        subtitle="HOSPITAL ENGINEERING & CLEAN ROOMS"
        title="Engineer Your Healthcare Facility With Confidence"
        buttonLabel="Request Consultation"
        href="/contact"
      />

      <CorporateFooter />
    </main>
  );
}
