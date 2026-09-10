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
  HeartPulse,
  Activity,
  CheckCircle2,
  Stethoscope,
  Microscope,
  ThermometerSnowflake,
  Cpu,
  Layers,
  Dna,
  ShieldCheck,
  Building2,
  Syringe,
  Pill,
  Send,
  AlertCircle,
  Truck,
  Check,
  CloudRain,
  Eye,
  Server,
  FileText,
  BadgeCheck,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import ServiceHeroSlider from "@/components/ui/ServiceHeroSlider";

// ─── Animated Counter Component ──────────────────────────────────────────────
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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
      const duration = 1600;
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
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              animate();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      observer?.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [value, hasAnimated]);

  return (
    <span
      ref={elementRef}
      suppressHydrationWarning
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="block text-3xl sm:text-4xl font-black text-[#042E3A] tracking-tight"
    >
      {displayValue}
    </span>
  );
}

// ─── Hero Slides (Valid Images in public/) ───────────────────────────────────
const HERO_SLIDES = [
  {
    src: "/vetvac_livestock_service.jpg",
    tag: "LIVESTOCK BIOMEDICINE & HEALTH",
    title: "Comprehensive Herd Health Programs, Therapeutics & Disease Surveillance",
  },
  {
    src: "/vetvac_dairy_service.jpg",
    tag: "DAIRY DEVELOPMENT & AUTOMATION",
    title: "Modern Milking Systems, Precision Dairy Rations & Farm Management",
  },
  {
    src: "/vetvac_poultry_service.jpg",
    tag: "AVIAN HEALTHCARE & VACCINES",
    title: "High-Titer Poultry Vaccines, Flock Biosecurity & Serological Audits",
  },
  {
    src: "/vetvac_vaccines_ai.jpg",
    tag: "COLD-CHAIN BIOLOGICALS",
    title: "Pharmaceutical-Grade Vaccine Logistics, 2°C–8°C Storage & Telemetry",
  },
];

// ─── 12 Core Capabilities Data ───────────────────────────────────────────────
const CAPABILITIES = [
  {
    id: "medicines",
    number: "01",
    icon: Pill,
    title: "Veterinary Medicines",
    subtitle: "Supporting Effective Animal Healthcare",
    description:
      "Access to comprehensive veterinary therapeutic solutions intended to support livestock health and professional veterinary care programs.",
    categories: [
      "Broad-spectrum antibiotics & anti-infectives",
      "Antiparasitic & deworming treatments",
      "Supportive therapeutic agents & anti-inflammatories",
      "Herd-health preventive medicines",
      "Veterinary treatment-support formulations",
      "Farm-animal healthcare & metabolic products",
    ],
    note: "All pharmaceutical solutions adhere strictly to veterinary guidance, product labeling, and regulatory requirements.",
  },
  {
    id: "vaccines",
    number: "02",
    icon: Syringe,
    title: "Veterinary Vaccines",
    subtitle: "Disease Prevention Through Effective Immunization",
    description:
      "Targeted immunization and preventive disease control programs formulated for cattle, swine, poultry, sheep, and goats.",
    categories: [
      "Bovine (cattle & buffalo) immunization programs",
      "Porcine health & disease prevention regimens",
      "Avian & poultry flock vaccination schedules",
      "Small ruminant (sheep & goats) vaccine protocols",
      "Vaccine storage coordination & 2°C–8°C cold chain",
      "Serological titer monitoring & vaccination audits",
    ],
    note: "Emphasizes preventive animal healthcare, disease-risk reduction, and professionally managed immunization.",
  },
  {
    id: "biologics",
    number: "03",
    icon: Sparkles,
    title: "Biological Products",
    subtitle: "Supporting Gut Health, Immunity & Animal Performance",
    description:
      "Advanced biological solutions engineered to elevate animal vitality, optimize digestive conversion, and strengthen immune resilience.",
    categories: [
      "High-potency veterinary probiotics & prebiotics",
      "Digestive enzyme blends for maximum nutrient uptake",
      "Metabolic bio-stimulants & organic trace minerals",
      "Intestinal mucosal barrier support products",
      "Natural immune-modulating compounds",
      "Nutritional performance & feed efficiency enhancers",
    ],
    note: "Promotes natural growth, gut-barrier integrity, and enhanced resistance against opportunistic pathogens.",
  },
  {
    id: "diagnostics",
    number: "04",
    icon: Microscope,
    title: "Animal Diagnostics",
    subtitle: "Earlier Detection. Better Veterinary Decisions.",
    description:
      "Three-tier diagnostic infrastructure spanning on-farm rapid testing, advanced laboratory analyzers, and digital epidemiology analytics.",
    categories: [
      "Field Diagnostics: Rapid lateral-flow test kits & on-farm disease screening",
      "Laboratory Diagnostics: Automated hematology, ELISA systems & sample processing",
      "Digital Diagnostics: Animal-health telemetry & diagnostic data interpretation",
      "Pathogen serology profiling & antimicrobial sensitivity testing",
      "Early mastitis & metabolic deficiency detection tools",
      "Epidemiological health-monitoring dashboards",
    ],
    note: "Transforms veterinary practice from reactive intervention into precise, proactive diagnostic-driven healthcare.",
  },
  {
    id: "health-programs",
    number: "05",
    icon: HeartPulse,
    title: "Livestock Health Programs",
    subtitle: "Integrated Herd Health Management",
    description:
      "Structured livestock health architectures designed around systematic preventive care, routine biosecurity auditing, and continuous health tracking.",
    categories: [
      "Integrated herd-health planning & clinical calendars",
      "Customized vaccination and booster timelines",
      "Routine disease surveillance & biometric monitoring",
      "Digital herd health records & epidemiological profiling",
      "Farm hygiene audits & sanitation schedules",
      "Veterinary intervention & quarantine management",
    ],
    note: "Empowers commercial dairy and livestock operators to transition towards data-driven, systematic herd management.",
  },
  {
    id: "dairy",
    number: "06",
    icon: Milk,
    title: "Dairy Farm Solutions",
    subtitle: "Improving Dairy Productivity Through Integrated Farm Technologies",
    description:
      "End-to-end solutions for dairy producers combining automated milking machinery, herd management software, and precision nutrition planning.",
    categories: [
      "Milking Systems: Modern herringbone, rotary & automated milking parlors",
      "Milking-system integration, milk cooling tanks & CIP sanitation",
      "Herd Management: Individual RFID animal records & lactation tracking",
      "Production, somatic cell count (SCC) & reproduction monitoring",
      "Dairy ration formulation & total mixed ration (TMR) strategies",
      "Comfort housing, ventilation & cooling infrastructure for dairy cattle",
    ],
    note: "Delivers measurable gains in daily milk yields, milk hygiene standards, cow longevity, and reproductive efficiency.",
  },
  {
    id: "nutrition",
    number: "07",
    icon: Sprout,
    title: "Animal Nutrition",
    subtitle: "Nutrition for Health, Growth & Productivity",
    description:
      "Nutritional science designed for peak livestock performance, tailored across dairy cattle, beef cattle, poultry, and small ruminants.",
    categories: [
      "Customized feed formulations tailored to production stages",
      "High-yield dairy cattle transition & lactation rations",
      "High-efficiency poultry broiler & layer premixes",
      "Small-ruminant intensive fattening & breeding diets",
      "Precision mineral, vitamin & amino-acid supplements",
      "Feed efficiency optimization & rumen bypass technology",
    ],
    note: "Optimizes feed conversion ratios (FCR) while safeguarding animal metabolic health and reproductive longevity.",
  },
  {
    id: "farm-management",
    number: "08",
    icon: Cpu,
    title: "Farm Management Systems",
    subtitle: "Connecting Livestock Operations Through Smart Technology",
    description:
      "Integration of IoT sensors, environmental telemetry, and real-time operational dashboards for smart agricultural management.",
    categories: [
      "IoT animal sensors: Rumination, estrus detection & temperature boluses",
      "Barn microclimate & ambient weather intelligence integration",
      "Operational dashboards consolidating milk, feed & health data",
      "Automated feed-inventory & resource consumption telemetry",
      "Equipment maintenance alerts & energy consumption monitoring",
      "Mobile analytics enabling data-driven management decisions",
    ],
    note: "Directly connects veterinary science with ROYSONS' enterprise Information Technology & Artificial Intelligence ecosystem.",
  },
  {
    id: "equipment",
    number: "09",
    icon: Stethoscope,
    title: "Veterinary Equipment",
    subtitle: "Professional Equipment for Veterinary Care",
    description:
      "Clinical and surgical hardware portfolio supporting field assessment, diagnostic imaging, sterile surgery, and mobile veterinary outreach.",
    categories: [
      "Diagnostic Imaging: Portable veterinary ultrasound & wireless X-ray",
      "Surgical Instruments: Autoclavable general & orthopedic surgical sets",
      "Mobile Veterinary Clinic Kits: Field backpacks & vehicle equipment",
      "Sterilization hardware, operating tables & examination lights",
      "Anesthesia machines, oxygen concentrators & vital sign monitors",
      "Rural veterinary extension gear for remote veterinary care",
    ],
    note: "Manufactured to rigorous biomedical standards for dependable performance under demanding field conditions.",
  },
  {
    id: "breeding",
    number: "10",
    icon: Dna,
    title: "Breeding & Reproductive Solutions",
    subtitle: "Improving Genetics & Reproductive Performance",
    description:
      "Advanced reproductive technologies supporting genetic improvement, artificial insemination, embryo transfer, and herd fecundity.",
    categories: [
      "Artificial Insemination (AI) hardware, nitrogen tanks & high-merit semen",
      "Embryo-transfer (ET) equipment, media & recipient management",
      "Herd genetic improvement planning & genomic selection",
      "Estrus synchronization regimens & pregnancy detection tools",
      "Reproductive performance auditing & calving interval reduction",
      "Digital breeding records & lineage management software",
    ],
    note: "Accelerates genetic gain across successive generations, yielding more disease-resilient livestock populations.",
  },
  {
    id: "biosecurity",
    number: "11",
    icon: ShieldCheck,
    title: "Biosecurity Solutions",
    subtitle: "Preventing Disease Before It Reaches the Herd",
    description:
      "Comprehensive farm defense systems designed around the proven biosecurity continuum: Prevent → Detect → Contain → Respond → Monitor.",
    categories: [
      "Controlled Entry: Farm vehicle disinfection arches & personnel showers",
      "Quarantine Facilities: Biosecure isolation pens for incoming stock",
      "Cleaning & Disinfection: Automated misting, fogging & chemical dosing",
      "Pathogen Exclusion: Wild-bird netting, rodent control & clean water lines",
      "Continuous disease surveillance & perimeter defense protocols",
      "Emergency containment plans for infectious outbreak prevention",
    ],
    note: "Biosecurity forms the primary line of defense, preventing disease introductions before they reach the herd.",
  },
  {
    id: "cold-chain",
    number: "12",
    icon: ThermometerSnowflake,
    title: "Cold Chain Solutions",
    subtitle: "Protecting Temperature-Sensitive Veterinary Products",
    description:
      "End-to-end temperature-controlled infrastructure preserving the viability and potency of vaccines and biological products.",
    categories: [
      "Refrigerated transport fleet with active multi-zone cooling",
      "Cold-storage distribution centers with 24/7 backup power",
      "Certified WHO/ISO veterinary vaccine refrigerators & freezers",
      "Wireless IoT temperature-logging sensors with real-time alerts",
      "Thermal insulated distribution totes for remote field deliveries",
      "Strict cold-chain validation audits from manufacturer to injection",
    ],
    note: "Guarantees 100% biological potency and vaccine efficacy at the point of animal administration.",
  },
];

// ─── Integrated Solution Packages ────────────────────────────────────────────
const INTEGRATED_SOLUTIONS = [
  {
    title: "Animal Health Solution",
    badge: "Clinical Care",
    desc: "Veterinary Medicines + Vaccines + Diagnostics + Healthcare Equipment + Continuous Monitoring.",
    points: [
      "End-to-end disease prevention, diagnostics, and therapeutic care",
      "Early pathogen identification with field lateral-flow test kits",
      "Professional clinical protocol guidelines and specialist support",
    ],
  },
  {
    title: "Dairy Development Solution",
    badge: "Dairy Farming",
    desc: "Milking Equipment + Herd Health + Nutrition + Breeding + Software + Farm Management.",
    points: [
      "Automated milking systems and milk-cooling infrastructure",
      "Precision lactation rations and TMR nutrition planning",
      "Individual cow health, estrus, and daily yield telemetry",
    ],
  },
  {
    title: "Disease Prevention Solution",
    badge: "Flock & Herd Defense",
    desc: "Vaccines + Diagnostics + Biosecurity + Quarantine + Surveillance + Cold Chain.",
    points: [
      "Holistic pathogen exclusion with vehicle and personnel disinfection",
      "Guaranteed cold-chain vaccine potency from lab to pen",
      "Systematic serological auditing and early outbreak alerts",
    ],
  },
  {
    title: "Smart Livestock Solution",
    badge: "AgTech & IoT",
    desc: "IoT Sensors + Herd Software + Weather Integration + Analytics + Operational Dashboards.",
    points: [
      "Wearable boluses tracking rumination, movement, and heat",
      "Environmental telemetry correlated with production trends",
      "Cloud dashboards for farm managers and supervisors",
    ],
  },
  {
    title: "Reproductive Management Solution",
    badge: "Genetics & Fertility",
    desc: "Artificial Insemination + Embryo Transfer + Genetics + Reproductive Monitoring.",
    points: [
      "High-genetic merit semen straws and cryogenic storage tanks",
      "Comprehensive synchronization and embryo-transfer protocols",
      "Shorter calving intervals and higher conception rates",
    ],
  },
  {
    title: "Veterinary Infrastructure Solution",
    badge: "Turnkey Facilities",
    desc: "Equipment + Diagnostics + Mobile Clinics + Regional Laboratories + Cold Storage.",
    points: [
      "Turnkey veterinary diagnostic lab design and instrumentation",
      "All-terrain mobile veterinary clinics for rural outreach",
      "Regional cold-storage hubs and logistical supply chain",
    ],
  },
];

// ─── Lifecycle Steps (01–08) ──────────────────────────────────────────────────
const LIFECYCLE_STEPS = [
  {
    step: "01",
    title: "Farm Assessment",
    desc: "Evaluating herd size, species distribution, baseline health status, production goals, existing infrastructure, and biosecurity risks.",
  },
  {
    step: "02",
    title: "Health & Disease Strategy",
    desc: "Establishing tailored herd-health protocols, disease surveillance calendars, diagnostic regimes, and customized vaccination plans.",
  },
  {
    step: "03",
    title: "Nutrition & Productivity",
    desc: "Formulating balanced rations, stage-specific supplements, precision feeding routines, and dairy yield enhancement programs.",
  },
  {
    step: "04",
    title: "Breeding & Genetics",
    desc: "Implementing artificial insemination, embryo transfer, genetic selection criteria, and digital reproductive monitoring.",
  },
  {
    step: "05",
    title: "Technology Integration",
    desc: "Deploying IoT animal sensors, environmental telemetry, herd software, and centralized operational dashboards.",
  },
  {
    step: "06",
    title: "Biosecurity",
    desc: "Constructing vehicle disinfection arches, quarantine pens, sanitation routines, and strict perimeter pathogen exclusion.",
  },
  {
    step: "07",
    title: "Cold Chain & Distribution",
    desc: "Operating temperature-monitored refrigerated transport, certified storage freezers, and telemetry alerts for biologicals.",
  },
  {
    step: "08",
    title: "Monitoring & Improvement",
    desc: "Continuous auditing of animal morbidity, feed conversion efficiency, reproductive indices, milk yields, and farm profitability.",
  },
];

// ─── Equipment & Tech Portfolio Categories ───────────────────────────────────
const TECH_PORTFOLIO = [
  {
    category: "Veterinary Diagnostic Systems",
    items: [
      "Rapid Field Test Kits (Antigen / Antibody)",
      "Veterinary Laboratory Equipment (Hematology / Biochemistry)",
      "Diagnostic Imaging Systems (Ultrasound / Digital X-Ray)",
      "Disease-Detection Pathogen PCR Systems",
      "Health-Data Analytics & Telemetry",
    ],
  },
  {
    category: "Veterinary Clinical Equipment",
    items: [
      "Veterinary Surgical Tools & Autoclavable Sets",
      "Field Examination Equipment & Treatment Crates",
      "Mobile Veterinary Clinic Vehicle Kits",
      "Sterilization Autoclaves & Operating Lights",
      "Anesthesia Workstations & Vital Signs Monitors",
    ],
  },
  {
    category: "Dairy Farm Equipment",
    items: [
      "Modern Milking Equipment (Parlors, Units, Clusters)",
      "Dairy Herd Management Software (RFID Enabled)",
      "Milk Cooling Tanks & Automated CIP Washers",
      "Total Mixed Ration (TMR) Feed Mixers",
      "Ventilation Fans & Misting Cooling Infrastructure",
    ],
  },
  {
    category: "Smart Farm Technologies",
    items: [
      "IoT Animal Monitoring Systems (Rumen Boluses, Collars)",
      "Barn Environmental Telemetry Sensors",
      "Weather Station Integration & Forecast Intelligence",
      "Farm Operational Cloud Dashboards",
      "Automated Feed & Water Telemetry Systems",
    ],
  },
  {
    category: "Reproduction Technologies",
    items: [
      "Artificial Insemination (AI) Systems & Liquid Nitrogen Tanks",
      "Embryo-Transfer Hardware & Recovery Media",
      "Genetic Improvement & Lineage Management Programs",
      "Ultrasound Pregnancy Scanners",
      "Estrus Detection Telemetry & Alerts",
    ],
  },
  {
    category: "Biosecurity & Cold Chain",
    items: [
      "Vehicle Disinfection Arches & Entry Sanitizers",
      "Quarantine Facility Hardware & Isolation Barriers",
      "Automated Misting & Disinfection Sprayers",
      "Active Refrigerated Transport Vehicles (2°C–8°C)",
      "IoT Temperature Loggers & Real-Time Cloud Alerts",
    ],
  },
];

// ─── Species Segments ────────────────────────────────────────────────────────
const SPECIES_SEGMENTS = [
  {
    name: "Cattle & Dairy",
    focus: "Dairy productivity, herd health, breeding, TMR nutrition, mastitis control, and automated milking.",
  },
  {
    name: "Sheep & Goats",
    focus: "Small-ruminant healthcare, targeted vaccination, pasture nutrition, deworming, and genetic improvement.",
  },
  {
    name: "Commercial Poultry",
    focus: "Flock immunization, live/inactivated vaccines, biologicals, hatchery hygiene, and FCR optimization.",
  },
  {
    name: "Porcine Operations",
    focus: "Specialized vaccination, biosafety protocols, and herd management where regulated and applicable.",
  },
  {
    name: "Commercial Agricultural Enterprises",
    focus: "Large-scale integrated farming, cold-chain transport, smart farm dashboards, and veterinary supplies.",
  },
];

// ─── Who We Serve List ───────────────────────────────────────────────────────
const CLIENT_SEGMENTS = [
  "Commercial dairy farms & milk producer cooperatives",
  "Livestock breeding & fattening ranches",
  "Commercial broiler, layer, and breeder poultry operations",
  "Private veterinary clinics & referral hospitals",
  "Veterinary diagnostic & pathological laboratories",
  "Animal health product distributors & pharmacies",
  "Commercial feed manufacturers & animal nutrition firms",
  "Agricultural investment groups & corporate farming projects",
  "Veterinary universities & agricultural research institutes",
  "Government livestock departments & public-sector programs",
  "Rural animal-health development initiatives",
  "International development & disease-eradication agencies",
];

// ─── Why Choose ROYSONS Pillars ──────────────────────────────────────────────
const WHY_CHOOSE_PILLARS = [
  {
    title: "Comprehensive Platform Capability",
    desc: "Combines animal healthcare, diagnostics, vaccines, dairy technology, nutrition, breeding, biosecurity, and cold-chain under one partner.",
  },
  {
    title: "Preventive-First Approach",
    desc: "Proactive animal healthcare centered on vaccination schedules, diagnostic screening, herd-health planning, and biosecurity exclusion.",
  },
  {
    title: "Technology Integration",
    desc: "Deep integration with IoT sensors, farm-management software, and operational dashboards from ROYSONS' IT & AI division.",
  },
  {
    title: "Farm-to-Health Perspective",
    desc: "Holistic understanding of the interplay between animal health, feed formulation, genetic traits, housing, and operational margins.",
  },
  {
    title: "Turnkey Dairy Development",
    desc: "Milking equipment, milk storage tanks, herd management software, and precision nutrition packaged as complete turnkey farm programs.",
  },
  {
    title: "Certified Cold-Chain Rigor",
    desc: "Strict 2°C–8°C refrigerated storage and logistics with continuous IoT telemetry ensuring peak vaccine and biological potency.",
  },
];

export default function VeterinaryLivestockServicePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Veterinary & Livestock Solutions",
    subject: "Veterinary Project Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/service-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "Veterinary & Livestock Solutions",
        subject: "Veterinary Project Inquiry",
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
    <main className="min-h-screen bg-white font-sans selection:bg-[#009688] selection:text-white">
      <HeaderNavbar activeRoute="/sector" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-neutral-500">
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
              <li className="text-[#042E3A] font-bold">
                Veterinary &amp; Livestock Solutions
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section 
        className="relative py-8 sm:py-10 lg:py-12 bg-white border-b border-neutral-200 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#009688_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[3px] bg-[#009688]/10 border border-[#009688]/30 text-[#009688] text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] mb-2.5 self-start">
                <PawPrint size={15} className="text-[#009688]" />
                <span style={{ color: "#009688", WebkitTextFillColor: "#009688" }}>Sector 03 • Agriculture &amp; Livestock</span>
              </div>

              <h1 
                style={{ color: "#042E3A", WebkitTextFillColor: "#042E3A" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#042E3A] leading-tight mb-2"
              >
                Veterinary &amp; Livestock Solutions
              </h1>

              <p 
                style={{ color: "#009688", WebkitTextFillColor: "#009688" }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-[#009688] uppercase tracking-wide mb-2"
              >
                Advancing Animal Health, Livestock Productivity &amp; Veterinary Care
              </p>

              <div className="h-[3px] w-20 bg-[#009688] mb-3" />

              <p 
                style={{ color: "#042E3A", WebkitTextFillColor: "#042E3A" }}
                className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal max-w-2xl mb-0"
              >
                ROYSONS provides comprehensive veterinary and livestock solutions supporting animal health, dairy development, livestock management, veterinary diagnostics, agricultural productivity, farm biosecurity, breeding, nutrition, and modern livestock technologies.
              </p>
            </div>

            {/* Right Column: Hero Slider */}
            <div className="lg:col-span-5">
              <ServiceHeroSlider
                slides={HERO_SLIDES}
                defaultTag="VETERINARY &amp; LIVESTOCK"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Animated Number Counter Metrics ────────────────────────────────────── */}
      <section className="bg-white border-b border-neutral-200 py-8 sm:py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="border-l-3 border-[#009688] pl-5 py-1 bg-[#f0fdfa] p-4 rounded-r-sm">
              <AnimatedStatValue value="15+" />
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]/85 mt-1">
                Years of Experience
              </p>
            </div>
            <div className="border-l-3 border-[#009688] pl-5 py-1 bg-[#f0fdfa] p-4 rounded-r-sm">
              <AnimatedStatValue value="500+" />
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]/85 mt-1">
                Livestock Projects
              </p>
            </div>
            <div className="border-l-3 border-[#009688] pl-5 py-1 bg-[#f0fdfa] p-4 rounded-r-sm">
              <AnimatedStatValue value="12+" />
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]/85 mt-1">
                Core Capabilities
              </p>
            </div>
            <div className="border-l-3 border-[#009688] pl-5 py-1 bg-[#f0fdfa] p-4 rounded-r-sm">
              <AnimatedStatValue value="40+" />
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]/85 mt-1">
                Global Healthcare Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section Anchor Menu ────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-2.5 px-4 hidden md:block">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between text-sm font-bold uppercase tracking-wider text-[#042E3A] overflow-x-auto gap-4 scrollbar-none">
          <a href="#overview" className="hover:text-[#009688] whitespace-nowrap transition-colors">Overview</a>
          <span>•</span>
          <a href="#capabilities" className="hover:text-[#009688] whitespace-nowrap transition-colors">12 Capabilities</a>
          <span>•</span>
          <a href="#integrated-solutions" className="hover:text-[#009688] whitespace-nowrap transition-colors">Integrated Solutions</a>
          <span>•</span>
          <a href="#equipment-tech" className="hover:text-[#009688] whitespace-nowrap transition-colors">Equipment &amp; Tech</a>
          <span>•</span>
          <a href="#species" className="hover:text-[#009688] whitespace-nowrap transition-colors">Species Segments</a>
          <span>•</span>
          <a href="#lifecycle" className="hover:text-[#009688] whitespace-nowrap transition-colors">Lifecycle (01–08)</a>
          <span>•</span>
          <a href="#smart-farming" className="hover:text-[#009688] whitespace-nowrap transition-colors">Smart Farming</a>
          <span>•</span>
          <a href="#who-we-serve" className="hover:text-[#009688] whitespace-nowrap transition-colors">Who We Serve</a>
          <span>•</span>
          <a href="#contact" className="hover:text-[#009688] whitespace-nowrap transition-colors">Contact</a>
        </div>
      </section>

      {/* ─── Comprehensive Overview & Objectives ─────────────────────────────────── */}
      <section id="overview" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-3.5">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] block">
                COMPREHENSIVE VETERINARY &amp; LIVESTOCK PLATFORM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] leading-tight">
                From Animal Health to Farm Productivity
              </h2>
              <div className="h-[3px] w-14 bg-[#009688]" />
              <p className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal">
                Modern livestock development requires more than individual veterinary products. Effective animal production depends on coordinating disease prevention, diagnostics, vaccination, nutrition, breeding, farm management, hygiene, biosecurity, technology, and cold-chain systems.
              </p>
              <p className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal">
                ROYSONS positions its Veterinary &amp; Livestock division as an integrated platform covering the full spectrum of animal health and productivity—from veterinary medicines and vaccines to technology-enabled farm management and biosecurity.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-5 sm:p-7 rounded-lg border border-neutral-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#042E3A] mb-4 flex items-center gap-2">
                <BadgeCheck size={22} className="text-[#009688]" />
                <span>Our Strategic Operational Objectives</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base text-[#042E3A] font-bold">
                {[
                  "Improved animal health",
                  "Better disease prevention",
                  "Higher livestock productivity",
                  "Improved herd management",
                  "Stronger dairy performance",
                  "Better nutrition management",
                  "Earlier disease detection",
                  "Improved reproductive performance",
                  "Better farm biosecurity",
                  "Reliable biological handling",
                  "Technology-enabled decisions",
                  "Sustainable farm operations",
                ].map((obj, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#f0fdfa] px-3 py-2 rounded-sm border border-[#009688]/20">
                    <Check size={15} className="text-[#009688] shrink-0 font-bold" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12 Principal Capabilities Detailed Grid ────────────────────────────── */}
      <section id="capabilities" className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              OUR 12 PRINCIPAL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] mb-2.5">
              Full Spectrum Animal Health &amp; Farm Infrastructure
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-3" />
            <p className="text-base sm:text-lg text-[#042E3A]/85 leading-relaxed font-normal">
              Supported by broader animal-health, dairy-development, precision nutrition, and biosecurity solutions across every phase of livestock production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#f8fafc] border border-neutral-200 rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-[#009688] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-white border border-[#009688]/30 flex items-center justify-center text-[#009688] group-hover:bg-[#009688] group-hover:text-white transition-all shadow-xs">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <span className="text-2xl font-black text-[#009688]">
                        {cap.number}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#042E3A] leading-snug group-hover:text-[#009688] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#009688] uppercase tracking-wider">
                      {cap.subtitle}
                    </p>
                    <p className="text-base sm:text-[17px] text-[#042E3A]/90 leading-relaxed font-normal">
                      {cap.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-200">
                      {cap.categories.map((cat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm sm:text-[15px] text-[#042E3A] font-semibold">
                          <CheckCircle2 size={14} className="text-[#009688] shrink-0 mt-0.5" />
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-neutral-200/80">
                    <p className="text-sm sm:text-base text-[#042E3A]/80 italic leading-snug">
                      {cap.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Integrated Solution Packages ───────────────────────────────────────── */}
      <section id="integrated-solutions" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              ONE INTEGRATED PLATFORM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] mb-2.5">
              Packaged Solutions for Animal Health &amp; Livestock Development
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-[#009688] mb-3" />
            <p className="text-base sm:text-lg text-[#042E3A]/85 leading-relaxed">
              Instead of treating each capability in isolation, ROYSONS presents integrated, project-ready solution packages designed for commercial and institutional scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATED_SOLUTIONS.map((sol, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-[#009688] hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-2.5">
                  <div className="inline-block px-2.5 py-1 rounded-sm bg-[#009688]/15 text-[#009688] text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {sol.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#042E3A]">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#009688] leading-relaxed">
                    {sol.desc}
                  </p>
                  <ul className="space-y-1.5 pt-1 text-sm sm:text-[15.5px] text-[#042E3A]/90 font-medium">
                    {sol.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-[#009688] shrink-0 mt-0.5 font-bold" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-200">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#009688] hover:text-[#042E3A] transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Complete Equipment & Technology Portfolio ───────────────────────────── */}
      <section id="equipment-tech" className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              SPECIALIZED HARDWARE &amp; INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] mb-2.5">
              Veterinary Equipment &amp; Technology Portfolio
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-[#042E3A] mb-3" />
            <p className="text-base sm:text-lg text-[#042E3A]/85 leading-relaxed font-normal">
              Organized across core clinical, surgical, dairy, digital, and cold-chain categories verified by ROYSONS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_PORTFOLIO.map((grp, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-neutral-200 rounded-lg p-5 sm:p-6 hover:border-[#009688] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-neutral-200">
                  <Layers size={18} className="text-[#009688]" />
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#042E3A]">
                    {grp.category}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm sm:text-[15.5px] text-[#042E3A]/90 font-medium">
                  {grp.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009688] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Species & Livestock Segments ────────────────────────────────────────── */}
      <section id="species" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              TARGET SECTORS &amp; BREEDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#042E3A] mb-2">
              Species &amp; Livestock Segments
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-[#009688]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SPECIES_SEGMENTS.map((sp, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between hover:border-[#009688] hover:shadow-sm transition-all duration-200"
              >
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#042E3A]">
                    {sp.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#042E3A]/85 leading-relaxed font-normal">
                    {sp.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Livestock Development Lifecycle (01–08) ────────────────────────────── */}
      <section id="lifecycle" className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              SYSTEMATIC METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] mb-2.5">
              The 8-Stage Livestock Development Lifecycle
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-3" />
            <p className="text-base sm:text-lg text-[#042E3A]/85 leading-relaxed">
              From baseline diagnostic audit to perpetual operational telemetry, our phased methodology ensures predictable, long-term farm viability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFECYCLE_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#f8fafc] border border-neutral-200 rounded-lg p-5 hover:border-[#009688] hover:shadow-md transition-all duration-300 space-y-1.5"
              >
                <span className="text-2xl sm:text-3xl font-black text-[#009688] block">
                  {step.step}
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#042E3A]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#042E3A]/85 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Digital Livestock & Smart Farming ───────────────────────────────────── */}
      <section id="smart-farming" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#009688]/15 text-[#009688] text-sm sm:text-base font-bold uppercase tracking-wider">
                <Cpu size={14} />
                <span>Technology-Enabled Animal Management</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] leading-tight">
                Digital Livestock &amp; Smart Farming
              </h2>
              <div className="h-[3px] w-14 bg-[#009688]" />
              <p className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal">
                Linking veterinary science with ROYSONS&apos; enterprise Information Technology &amp; Artificial Intelligence capabilities. We integrate IoT rumination sensors, ambient barn telemetry, weather forecast APIs, and cloud dashboards to provide actionable intelligence.
              </p>
              
              <div className="space-y-2.5 pt-1">
                {[
                  {
                    title: "Smart Herd Management",
                    desc: "Digitized animal RFID records organizing health history, vaccinations, milk yields, and pedigree.",
                  },
                  {
                    title: "Precision Livestock Management",
                    desc: "Automated telemetry tracking rumination, estrus, water intake, and somatic cell indicators in real time.",
                  },
                  {
                    title: "Environmental Intelligence",
                    desc: "Weather integration warning operators against heat stress, ventilation dropouts, or sudden barometric shifts.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-3 border-[#009688] pl-3.5 py-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#042E3A] uppercase">{item.title}</h3>
                    <p className="text-sm sm:text-[15px] text-[#042E3A]/85 font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry Card: High contrast dark styling with pure white text */}
            <div 
              data-dark-section="true"
              data-dark-card="true"
              style={{ backgroundColor: "#042630", color: "#ffffff" }}
              className="roysons-preserve-dark lg:col-span-6 p-6 sm:p-8 rounded-xl shadow-xl border border-teal-500/30 space-y-4"
            >
              <h3 
                style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
                className="text-lg sm:text-xl font-black uppercase tracking-wide text-white flex items-center gap-2.5"
              >
                <Server size={22} className="text-teal-300 shrink-0" />
                <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>Monitored Farm Telemetry Parameters</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                {[
                  "Animal health & biometric indicators",
                  "Ambient barn temperature & humidity",
                  "Daily milk yields & flow rate curves",
                  "Automated feeding & TMR operations",
                  "Herd fertility & estrus notifications",
                  "Milking parlor equipment performance",
                  "Vaccine cold-chain temperatures",
                  "Water quality & consumption metrics",
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ backgroundColor: "rgba(255,255,255,0.14)", borderColor: "rgba(45,212,191,0.35)" }}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-sm border"
                  >
                    <Check size={16} className="text-teal-300 shrink-0 font-bold" />
                    <span 
                      style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }} 
                      className="font-bold text-white text-sm sm:text-base"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3.5 border-t border-teal-500/30 flex items-center justify-between">
                <span 
                  style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }} 
                  className="text-sm sm:text-base font-bold text-white"
                >
                  Powered by ROYSONS IT &amp; AI
                </span>
                <Link
                  href="/sector/it-ai"
                  style={{ color: "#2dd4bf", WebkitTextFillColor: "#2dd4bf" }}
                  className="text-sm sm:text-base font-black uppercase tracking-wider flex items-center gap-1.5 hover:text-white hover:underline transition-all"
                >
                  <span style={{ color: "#2dd4bf", WebkitTextFillColor: "#2dd4bf" }}>Explore IT Solutions</span>
                  <ArrowRight size={14} className="text-teal-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Biosecurity & Disease Prevention Continuum ─────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              PREVENTION AS THE FIRST LINE OF DEFENSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#042E3A] mb-2">
              The 5-Stage Biosecurity Framework
            </h2>
            <div className="mx-auto h-[3px] w-14 bg-[#042E3A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                stage: "01. PREVENT",
                desc: "Vehicle disinfection arches, perimeter fencing, personnel sanitation showers, and visitor exclusion protocols.",
              },
              {
                stage: "02. DETECT",
                desc: "Routine rapid on-farm diagnostics, ELISA serology, disease surveillance, and symptom alert logging.",
              },
              {
                stage: "03. CONTAIN",
                desc: "Isolated quarantine pens for new or sick animals, segregated boot baths, and negative-pressure wards.",
              },
              {
                stage: "04. RESPOND",
                desc: "Immediate therapeutic intervention, targeted ring vaccination, emergency disinfectant dosing, and veterinary alerts.",
              },
              {
                stage: "05. MONITOR",
                desc: "Longitudinal antibody tracking, ambient hygiene culture tests, and continuous biosecurity compliance auditing.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-neutral-200 rounded-lg p-4 sm:p-5 shadow-xs hover:border-[#009688] transition-all space-y-1.5"
              >
                <span className="text-sm font-black uppercase tracking-widest text-[#009688] block">
                  {st.stage}
                </span>
                <p className="text-sm sm:text-[15px] text-[#042E3A]/85 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Serve ───────────────────────────────────────────────────────── */}
      <section id="who-we-serve" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 space-y-3.5">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] block">
                GLOBAL CLIENT SPECTRUM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] leading-tight">
                Who We Serve
              </h2>
              <div className="h-[3px] w-14 bg-[#009688]" />
              <p className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal">
                ROYSONS delivers veterinary and livestock solutions to an extensive portfolio of commercial agribusinesses, clinical practices, and public-sector institutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/group-companies/Vetvacpharma"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-black text-white text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-[#0077b6] via-[#009688] to-[#00ab66] hover:from-[#0088cc] hover:via-[#00a896] hover:to-[#02c074] shadow-md transition-all group"
                >
                  <span style={{ color: "#ffffff" }}>EXPLORE WEBSITE</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CLIENT_SEGMENTS.map((seg, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-white border border-neutral-200 text-sm sm:text-base font-bold text-[#042E3A] hover:border-[#009688] hover:shadow-xs transition-all"
                >
                  <Building2 size={18} className="text-[#009688] shrink-0" />
                  <span>{seg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose ROYSONS? ─────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] mb-1.5 block">
              PROVEN STRATEGIC VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] mb-2">
              Why Choose ROYSONS?
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-[#042E3A] mb-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-neutral-200 rounded-lg p-5 sm:p-6 hover:border-[#009688] hover:shadow-md transition-all duration-300 space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#009688]/15 border border-[#009688]/30 flex items-center justify-center text-[#009688] font-black text-xs mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-black uppercase text-[#042E3A] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-base sm:text-[17px] text-[#042E3A]/90 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact / Project Inquiry Form ─────────────────────────────────────── */}
      <section id="contact" className="py-12 sm:py-16 bg-[#f0fdfa] border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-3.5">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#009688] block">
                COMMENCE YOUR LIVESTOCK MODERNIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] leading-tight">
                Discuss Your Veterinary &amp; Livestock Project
              </h2>
              <div className="h-[3px] w-14 bg-[#009688]" />
              <p className="text-base sm:text-lg text-[#042E3A]/90 leading-relaxed font-normal">
                Whether planning a commercial dairy development, disease prevention protocol, veterinary diagnostic laboratory, or institutional livestock program, our specialists are available for consultation.
              </p>

              <div className="bg-white p-5 rounded-lg border border-neutral-200 space-y-2.5 mt-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#042E3A]">
                  Direct Division Inquiries
                </h3>
                <p className="text-sm sm:text-base text-[#042E3A]">
                  <strong>Division:</strong> ROYSONS Veterinary &amp; Livestock (Vetvac Pharma)
                </p>
                <p className="text-sm sm:text-base text-[#042E3A]">
                  <strong>Direct Email:</strong> info@roysons.org / vetvac@roysons.org
                </p>
                <p className="text-sm sm:text-base text-[#042E3A]">
                  <strong>Corporate Phone:</strong> +92 42 111 786 786
                </p>
              </div>

              {/* Reference Image Button */}
              <div className="pt-2">
                <Link
                  href="/group-companies/Vetvacpharma"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3 rounded-lg font-black text-white uppercase tracking-[0.14em] text-sm sm:text-base bg-gradient-to-r from-[#0077b6] via-[#009688] to-[#00ab66] hover:from-[#0088cc] hover:via-[#00a896] hover:to-[#02c074] shadow-[0_4px_18px_rgba(0,150,136,0.35)] hover:shadow-[0_6px_24px_rgba(0,150,136,0.55)] transition-all group"
                >
                  <span style={{ color: "#ffffff" }} className="tracking-widest">EXPLORE WEBSITE</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 p-5 sm:p-7 rounded-lg shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-wide text-[#042E3A] mb-1">
                Project Consultation Form
              </h3>
              <p className="text-sm text-[#042E3A]/75 mb-5">
                Please provide your operation details and technical requirements for a formal response.
              </p>

              {formSubmitted ? (
                <div className="bg-teal-50 border border-teal-300 p-6 rounded-md text-center space-y-2">
                  <BadgeCheck size={36} className="text-[#009688] mx-auto" />
                  <h4 className="text-base font-bold text-[#042E3A]">Inquiry Received</h4>
                  <p className="text-sm sm:text-base text-neutral-600">
                    Thank you. Our Veterinary &amp; Livestock specialist team will review your requirements and reach out promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. / Mr. Name"
                        className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                        Organization / Farm Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Dairy Farm / Clinic / Enterprise"
                        className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                      Primary Capability of Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                    >
                      <option value="Veterinary Medicines & Therapeutics">Veterinary Medicines &amp; Therapeutics</option>
                      <option value="Veterinary Vaccines & Immunization">Veterinary Vaccines &amp; Immunization</option>
                      <option value="Dairy Farm Solutions & Milking Systems">Dairy Farm Solutions &amp; Milking Systems</option>
                      <option value="Animal Diagnostics (Field & Lab)">Animal Diagnostics (Field &amp; Lab)</option>
                      <option value="Smart Farm Management Systems (IoT)">Smart Farm Management Systems (IoT)</option>
                      <option value="Animal Nutrition & Feed Supplements">Animal Nutrition &amp; Feed Supplements</option>
                      <option value="Biosecurity & Quarantine Infrastructure">Biosecurity &amp; Quarantine Infrastructure</option>
                      <option value="Cold Chain & Refrigerated Storage">Cold Chain &amp; Refrigerated Storage</option>
                      <option value="Breeding & Artificial Insemination">Breeding &amp; Artificial Insemination</option>
                      <option value="Turnkey Veterinary Facility Outfitting">Turnkey Veterinary Facility Outfitting</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#042E3A]">
                      Project Details &amp; Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state herd size, species, location, timeline, and specific technical requirements..."
                      className="w-full bg-[#f8fafc] border border-neutral-300 px-3.5 py-2.5 rounded-sm text-sm sm:text-base text-[#042E3A] focus:border-[#009688] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-md font-bold text-white text-sm sm:text-base uppercase tracking-wider bg-[#005f77] hover:bg-[#004759] transition-all disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA Banner ───────────────────────────────────────── */}
      <section 
        className="relative py-7 sm:py-9 px-4 sm:px-6 text-center bg-white border-t border-neutral-200 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <span 
            style={{ color: "#009688", WebkitTextFillColor: "#009688" }}
            className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#009688] block"
          >
            ROYSONS VETERINARY &amp; LIVESTOCK SOLUTIONS
          </span>

          <h2 
            style={{ color: "#042E3A", WebkitTextFillColor: "#042E3A" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A] leading-tight"
          >
            Building Healthier Livestock &amp; Stronger Agriculture
          </h2>

          <div className="mx-auto h-[3px] w-16 bg-[#009688] my-1.5" />

          <p 
            style={{ color: "#042E3A", WebkitTextFillColor: "#042E3A" }}
            className="text-base sm:text-lg lg:text-xl font-bold text-[#042E3A] max-w-3xl mx-auto leading-relaxed my-1"
          >
            Animal Health <span className="text-[#009688] font-black mx-1">•</span> Vaccines <span className="text-[#009688] font-black mx-1">•</span> Veterinary Medicines <span className="text-[#009688] font-black mx-1">•</span> Diagnostics <span className="text-[#009688] font-black mx-1">•</span> Dairy Development <span className="text-[#009688] font-black mx-1">•</span> Nutrition <span className="text-[#009688] font-black mx-1">•</span> Breeding <span className="text-[#009688] font-black mx-1">•</span> Farm Technology <span className="text-[#009688] font-black mx-1">•</span> Biosecurity <span className="text-[#009688] font-black mx-1">•</span> Cold Chain
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-white text-sm sm:text-base uppercase tracking-wider bg-[#005f77] hover:bg-[#004759] shadow-md hover:shadow-lg transition-all"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={15} />
            </a>

            {/* Reference Image Button in Footer CTA */}
            <Link
              href="/group-companies/Vetvacpharma"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-lg font-black text-white uppercase tracking-[0.14em] text-sm sm:text-base bg-gradient-to-r from-[#0077b6] via-[#009688] to-[#00ab66] hover:from-[#0088cc] hover:via-[#00a896] hover:to-[#02c074] shadow-[0_4px_18px_rgba(0,150,136,0.35)] hover:shadow-[0_6px_24px_rgba(0,150,136,0.55)] transition-all group"
            >
              <span style={{ color: "#ffffff" }} className="tracking-widest">EXPLORE WEBSITE</span>
              <ArrowRight size={16} strokeWidth={2.6} className="text-white group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
