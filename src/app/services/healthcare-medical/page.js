"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Scan,
  BedDouble,
  Microscope,
  Scissors,
  Package,
  Armchair,
  Cpu,
  Truck,
  CheckCircle2,
  Headphones,
  ArrowRight,
  ChevronRight,
  Shield,
  Building2,
  GraduationCap,
  FlaskConical,
  Pill,
  Landmark,
  Hospital,
  Sparkles,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronDown,
  Lock,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

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
    <span ref={elementRef} className="block text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
      {displayValue}
    </span>
  );
}

const CAPABILITIES = [
  {
    icon: Stethoscope,
    title: "Medical Device Supplies",
    description:
      "Comprehensive distribution of certified medical devices, instruments, and diagnostic equipment from world-leading manufacturers.",
  },
  {
    icon: Scan,
    title: "Diagnostic Imaging Systems",
    description:
      "Turnkey imaging solutions including high-definition X-Ray, Ultrasound, CT scanners, MRI, and C-Arm systems for precise clinical diagnosis.",
  },
  {
    icon: HeartPulse,
    title: "ICU & Critical Care Equipment",
    description:
      "Advanced life support systems, ventilators, multi-parameter patient monitors, defibrillators, and automated infusion pumps.",
  },
  {
    icon: Scissors,
    title: "Operation Theatre Equipment",
    description:
      "Sterile OT infrastructure, precision surgical lights, ergonomic operating tables, anesthesia workstations, and electrosurgical units.",
  },
  {
    icon: Activity,
    title: "Patient Monitoring Systems",
    description:
      "Continuous vital signs monitoring networks, central telemetry stations, and wireless patient tracking systems for acute care.",
  },
  {
    icon: Microscope,
    title: "Laboratory & Diagnostic Equipment",
    description:
      "State-of-the-art biochemistry analyzers, centrifuges, hematology counters, and molecular testing systems for clinical laboratories.",
  },
  {
    icon: Sparkles,
    title: "Surgical Equipment",
    description:
      "Specialized surgical instrumentation sets, endoscopy towers, minimally invasive surgery tools, and sterile processing systems.",
  },
  {
    icon: Package,
    title: "Medical Consumables",
    description:
      "High-grade disposable supplies, surgical drapes, catheters, sterile syringes, wound care products, and personal protective equipment.",
  },
  {
    icon: Armchair,
    title: "Medical Furniture",
    description:
      "Ergonomic hospital beds, ICU motorized beds, examination tables, patient stretchers, overbed tables, and medical storage cabinets.",
  },
  {
    icon: Cpu,
    title: "Biomedical Engineering",
    description:
      "Specialized biomedical engineering services, medical equipment calibration, preventive maintenance, and regulatory compliance audits.",
  },
  {
    icon: Truck,
    title: "Hospital Equipment Procurement",
    description:
      "End-to-end institutional procurement, international sourcing, tariff management, and secure supply chain logistics for healthcare facilities.",
  },
  {
    icon: CheckCircle2,
    title: "Installation & Commissioning",
    description:
      "Expert on-site installation, facility integration, rigorous safety testing, and staff operational training conducted by certified engineers.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Technical Support",
    description:
      "24/7 responsive technical support, annual maintenance contracts (AMC), OEM spare parts provisioning, and rapid breakdown response.",
  },
];

const KEY_SOLUTIONS = [
  {
    id: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    tagline: "High-Precision Medical Imaging & Radiology Technologies",
    description:
      "X-Ray, ultrasound, CT, MRI, C-Arm, mammography, and other diagnostic imaging technologies engineered to provide clinicians with unparalleled image quality, rapid processing, and accurate diagnostic confidence.",
    image: "/roys_mri_scanner.png",
    features: [
      "Digital Radiography & Fluoroscopy Systems",
      "High-Resolution 3D/4D Ultrasound Scanners",
      "High-Slice Multi-Detector CT Systems",
      "Advanced 1.5T & 3.0T High-Field MRI Suites",
      "Mobile Surgical C-Arm Systems for OT Guidance",
      "High-Precision Full-Field Digital Mammography",
    ],
  },
  {
    id: "critical-care",
    title: "Critical Care",
    tagline: "Advanced Life Support & Intensive Care Solutions",
    description:
      "Ventilators, patient monitors, defibrillators, infusion pumps, ICU beds, and emergency equipment built to meet rigorous critical care requirements and support intensive patient management in high-dependency units.",
    image: "/roys_ultrasound.png",
    features: [
      "Invasive & Non-Invasive ICU Ventilators",
      "Modular Multi-Parameter Patient Monitors",
      "Biphasic Defibrillators with External Pacing",
      "Precision Volumetric Infusion & Syringe Pumps",
      "Multi-Function Motorized ICU & CCU Beds",
      "Emergency Crash Carts & Resuscitation Equipment",
    ],
  },
  {
    id: "surgical-ot",
    title: "Surgical & OT Solutions",
    tagline: "Integrated Operating Room Infrastructure & Systems",
    description:
      "Operating theatre equipment, surgical systems, anesthesia equipment, surgical lights, and operating tables providing an ergonomic, sterile, and technologically advanced surgical environment.",
    image: "/roys_hospital_interior.png",
    features: [
      "Electro-Hydraulic Universal Operating Tables",
      "Shadowless Multi-Head LED Surgical Lights",
      "Integrated Workstation Anesthesia Delivery Systems",
      "Electrosurgical Units & Vessel Sealing Generators",
      "HD & 4K Laparoscopy & Endoscopy Towers",
      "Sterile Laminar Airflow & Modular OT Panels",
    ],
  },
  {
    id: "laboratory-solutions",
    title: "Laboratory Solutions",
    tagline: "Precision Diagnostic & Analytical Technologies",
    description:
      "Scientific instruments, laboratory equipment, diagnostic systems, and research technologies delivering high-throughput processing, reproducible accuracy, and seamless Laboratory Information System (LIS) integration.",
    image: "/roys_ct_scan.png",
    features: [
      "Automated Clinical Chemistry & Immunoassay Analyzers",
      "Hematology Counters & Coagulation Analyzers",
      "Molecular Diagnostics & PCR Amplification Systems",
      "Biological Safety Cabinets & Clean Laminar Hoods",
      "High-Speed Centrifuges & Temperature Incubators",
      "Certified Lab Reagents, Controls & Consumables",
    ],
  },
];

const INDUSTRIES_SERVED = [
  {
    icon: Hospital,
    title: "Hospitals",
    description:
      "Tertiary care hospitals, specialized surgical centers, and private healthcare networks requiring turnkey medical infrastructure and critical equipment.",
  },
  {
    icon: Landmark,
    title: "Government Healthcare",
    description:
      "Public health departments, provincial ministries, military medical institutions, and national healthcare procurement programs.",
  },
  {
    icon: Scan,
    title: "Diagnostic Centers",
    description:
      "Independent radiology suites, pathology laboratories, and screening clinics demanding high-uptime and superior imaging resolution.",
  },
  {
    icon: GraduationCap,
    title: "Medical Universities",
    description:
      "Teaching hospitals, medical colleges, and healthcare simulation centers fostering clinical education and practitioner training.",
  },
  {
    icon: FlaskConical,
    title: "Research Institutions",
    description:
      "Scientific laboratories, clinical trial centers, and biomedical institutes conducting advanced disease and pharmaceutical research.",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Organizations",
    description:
      "Drug manufacturers, clean room operators, and biotech enterprises requiring GMP-compliant validation and testing equipment.",
  },
];

const WHY_CHOOSE_ROYSONS = [
  {
    icon: ShieldCheck,
    title: "International Standards & Certification",
    description:
      "All medical equipment conforms to stringent FDA, CE, and ISO quality and safety certifications.",
  },
  {
    icon: Truck,
    title: "Global Procurement & Sourcing Network",
    description:
      "Direct partnerships with top-tier international manufacturers guarantee genuine equipment and competitive pricing.",
  },
  {
    icon: Cpu,
    title: "Certified Biomedical Engineers",
    description:
      "Our factory-trained biomedical engineering team delivers flawless installation, calibration, and commissioning.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support & AMC",
    description:
      "Round-the-clock emergency response, preventive maintenance contracts, and readily available original spare parts.",
  },
];

export default function HealthcareMedicalServicePage() {
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Healthcare & Medical Technologies",
    subject: "Healthcare Solution Inquiry",
    message: "",
  });

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
        service: "Healthcare & Medical Technologies",
        subject: "Healthcare Solution Inquiry",
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
                Healthcare &amp; Medical Technologies
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-[#0a7a8c]/25 border border-cyan-400/50 text-cyan-300 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 self-start shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <HeartPulse size={15} className="text-cyan-400" />
                <span>Sector 01 • Medical Solutions</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                Healthcare &amp; Medical Technologies
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-extrabold text-cyan-400 uppercase tracking-wide mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Advancing Healthcare Through Innovative Medical Solutions
              </p>

              <div className="h-[3px] w-16 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-5" />

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6 max-w-2xl">
                ROYSONS delivers advanced healthcare and medical technology solutions designed to support hospitals, clinics, laboratories, government institutions, and healthcare organizations. We combine international sourcing, technical expertise, and project support to provide reliable medical technologies that improve patient care and operational efficiency.
              </p>

              <div className="flex flex-wrap gap-3.5 items-center">
                <Link
                  href="#cta-consultation"
                  className="group inline-flex items-center gap-2.5 bg-[#0a7a8c] hover:bg-white text-white hover:text-black font-bold px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] shadow-lg shadow-[#0a7a8c]/20"
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300">
                    Build Better Healthcare
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>

                <Link
                  href="#key-solutions"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-neutral-700 hover:border-[#0a7a8c] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-[2px]"
                >
                  Explore Key Solutions
                </Link>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2px] p-1 bg-gradient-to-b from-[#0a7a8c]/40 via-neutral-800 to-[#0a7a8c]/20 shadow-xl">
                <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[2px] bg-neutral-900">
                  <Image
                    src="/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg"
                    alt="Advanced Healthcare and Medical Technologies by ROYSONS"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/85 backdrop-blur-md border border-[#0a7a8c]/40 rounded-[2px]">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 mb-1">
                      International Quality Standards
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug">
                      Turnkey Medical Equipment, Diagnostics &amp; Biomedical Support
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
                Years of Excellence
              </p>
            </div>

            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="1,000+" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                Medical Systems Delivered
              </p>
            </div>

            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="100%" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                ISO &amp; CE Compliance
              </p>
            </div>

            <div className="border-l-2 border-[#0a7a8c] pl-4 py-0.5">
              <AnimatedStatValue value="24/7" />
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1.5">
                Biomedical Support
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
              COMPREHENSIVE EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Our Capabilities
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              From global procurement and medical hardware supply to biomedical engineering, installation, and lifecycle maintenance, ROYSONS provides full-spectrum healthcare technologies.
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

      {/* Key Solutions Interactive Tabs & Showcase */}
      <section
        id="key-solutions"
        data-dark-section="true"
        className="py-14 sm:py-18 bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white border-b border-neutral-800"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
              SPECIALIZED OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
              Key Solutions
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-4" />
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              High-performance technologies tailored to radiology departments, critical care units, operating rooms, and analytical laboratories.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
            {KEY_SOLUTIONS.map((sol, idx) => {
              const isActive = activeSolutionTab === idx;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionTab(idx)}
                  className={`px-4 py-2 rounded-[2px] text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] border border-cyan-400/50 text-white shadow-lg shadow-[#0a7a8c]/30"
                      : "bg-[#161c20] text-neutral-300 border border-neutral-700 hover:text-white hover:border-[#0a7a8c]"
                  }`}
                >
                  {sol.title}
                </button>
              );
            })}
          </div>

          {/* Active Solution Content Display */}
          {(() => {
            const currentSol = KEY_SOLUTIONS[activeSolutionTab];
            return (
              <div className="bg-[#161c20] border border-neutral-800 rounded-[2px] p-6 sm:p-8 lg:p-10 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                      {currentSol.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3">
                      {currentSol.title}
                    </h3>
                    <div className="h-[2.5px] w-12 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-4" />
                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6">
                      {currentSol.description}
                    </p>

                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white mb-3">
                      Featured Systems &amp; Equipment:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {currentSol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-400 flex-shrink-0 mt-0.5"
                            strokeWidth={2.2}
                          />
                          <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link
                        href="#cta-consultation"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-cyan-400 hover:text-white transition-all group"
                      >
                        <span className="border-b border-cyan-400/50 group-hover:border-white transition-colors">
                          Inquire About {currentSol.title}
                        </span>
                        <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-[250px] sm:h-[320px] w-full rounded-[2px] overflow-hidden border border-neutral-700 bg-neutral-900 shadow-lg">
                      <Image
                        src={currentSol.image}
                        alt={currentSol.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-[2px]">
                          ROYSONS Medical Solution Suite
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-14 sm:py-18 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
              CLIENT SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 mb-3">
              Industries We Serve
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-neutral-950 mb-4" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Trusted by leading healthcare systems, academic centers, and governmental entities across Pakistan and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES_SERVED.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-[2px] border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-[#0a7a8c] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-[2px] bg-[#f0fdfa] border border-[#0a7a8c]/35 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] transition-all duration-300 shadow-xs">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.05em] text-[#042E3A] mb-2 group-hover:text-[#0a7a8c] transition-colors duration-300">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose ROYSONS Section */}
      <section
        data-dark-section="true"
        className="py-14 sm:py-18 bg-gradient-to-b from-[#101518] via-[#141b20] to-[#101518] text-white border-b border-neutral-800"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                COMPETITIVE ADVANTAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                Why Partner With ROYSONS For Healthcare?
              </h2>
              <div className="h-[3px] w-14 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mb-5" />
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6">
                We combine deep technical engineering capabilities with robust global procurement networks, ensuring every medical installation operates at peak clinical precision with complete regulatory assurance.
              </p>
              <div className="p-5 sm:p-6 bg-white/5 border border-neutral-700/60 rounded-[2px]">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
                  Institutional Reliability
                </p>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                  Serving provincial health departments, armed forces hospitals, teaching institutions, and premier private healthcare chains nationwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_ROYSONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-[#161c20] border border-neutral-700/70 rounded-[2px] hover:border-cyan-400 transition-colors duration-300"
                  >
                    <div className="w-11 h-11 rounded-[2px] bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center mb-3.5">
                      <Icon size={22} className="text-cyan-400" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Consultation Inquiry Form Section */}
      <section id="cta-consultation" className="py-14 sm:py-18 bg-neutral-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-neutral-300 shadow-md rounded-[2px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: CTA Pitch */}
              <div
                data-dark-section="true"
                className="lg:col-span-5 bg-gradient-to-br from-[#042E3A] via-[#053846] to-[#0a7a8c] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-5">
                    <Sparkles size={14} className="text-cyan-300" />
                    <span>Get In Touch</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                    Build Better Healthcare With ROYSONS
                  </h2>

                  <div className="h-[3px] w-14 bg-cyan-400 mb-4" />

                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-6">
                    Discuss your medical facility requirements, equipment procurement plans, or turnkey hospital engineering projects with our biomedical consultants.
                  </p>

                  <div className="space-y-4 pt-6 border-t border-white/15">
                    <div className="flex items-center gap-3.5 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-cyan-300" />
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-wide">+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-3.5 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-cyan-300" />
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-wide">info@roysons.org</span>
                    </div>
                    <div className="flex items-center gap-3.5 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-cyan-300" />
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-wide">Mon - Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/15 flex items-center gap-2.5 text-white/80 text-sm sm:text-base font-medium">
                  <Lock size={16} className="text-cyan-300 flex-shrink-0" />
                  <span>Confidential &amp; Verified Institutional Consultation</span>
                </div>
              </div>


              {/* Right Column: Inquiry Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 bg-white">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center p-6">
                    <div className="w-16 h-16 bg-neutral-950 border-2 border-[#0a7a8c] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-[#0a7a8c]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-neutral-950 mb-2">
                      Inquiry Submitted Successfully
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 max-w-md leading-relaxed mb-8">
                      Thank you for contacting ROYSONS Healthcare Division. Our biomedical specialists will review your requirements and respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-8 py-4 bg-neutral-950 hover:bg-neutral-800 text-white text-sm sm:text-base font-black uppercase tracking-[0.14em] rounded-[2px] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wide text-neutral-950 mb-3">
                      Request a Healthcare Consultation
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 mb-8 font-normal">
                      Please fill out the form below to receive detailed technical specifications and procurement proposals.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="hc-fullname"
                            className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="hc-fullname"
                            type="text"
                            required
                            placeholder="e.g. Dr. Salman Tariq"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 placeholder-neutral-500 font-medium outline-none transition-all rounded-[2px] shadow-xs"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="hc-email"
                            className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="hc-email"
                            type="email"
                            required
                            placeholder="name@hospital.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 placeholder-neutral-500 font-medium outline-none transition-all rounded-[2px] shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="hc-phone"
                            className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="hc-phone"
                            type="tel"
                            required
                            placeholder="+92 300 0000000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 placeholder-neutral-500 font-medium outline-none transition-all rounded-[2px] shadow-xs"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="hc-company"
                            className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                          >
                            Hospital / Organization <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="hc-company"
                            type="text"
                            required
                            placeholder="Hospital or Institute Name"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 placeholder-neutral-500 font-medium outline-none transition-all rounded-[2px] shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="hc-subject"
                          className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                        >
                          Solution Area of Interest
                        </label>
                        <select
                          id="hc-subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 font-medium outline-none transition-all rounded-[2px] shadow-xs"
                        >
                          <option value="Healthcare Solution Inquiry">
                            All Healthcare &amp; Medical Technologies
                          </option>
                          <option value="Diagnostic Imaging Inquiry">
                            Diagnostic Imaging (X-Ray, Ultrasound, CT, MRI)
                          </option>
                          <option value="Critical Care Inquiry">
                            Critical Care (Ventilators, Monitors, Defibrillators, ICU Beds)
                          </option>
                          <option value="Surgical & OT Inquiry">
                            Surgical &amp; OT Solutions (OT Tables, Lights, Anesthesia)
                          </option>
                          <option value="Laboratory Solutions Inquiry">
                            Laboratory &amp; Diagnostic Analyzers
                          </option>
                          <option value="Biomedical Maintenance Inquiry">
                            Biomedical Engineering &amp; AMC Maintenance
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="hc-message"
                          className="text-xs sm:text-sm font-black text-[#042E3A] uppercase tracking-[0.14em]"
                        >
                          Message / Technical Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="hc-message"
                          rows={4}
                          required
                          placeholder="Please provide details about your facility requirements, required quantities, or project timeline..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full bg-white border border-neutral-300 focus:border-[#0a7a8c] focus:ring-2 focus:ring-[#0a7a8c]/20 px-4 py-3.5 text-base sm:text-lg text-neutral-900 placeholder-neutral-500 font-medium outline-none transition-all rounded-[2px] resize-none shadow-xs"
                        />
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-sm sm:text-base font-medium">
                          ⚠️ {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:opacity-50 text-white py-4.5 text-sm sm:text-base font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed mt-3"
                      >
                        <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Healthcare Inquiry"}</span>
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
