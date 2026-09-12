"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Send,
  Check,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  Microscope,
  Stethoscope,
  HeartPulse,
  BriefcaseMedical,
  FlaskConical,
  Pill,
  Globe,
  Lightbulb,
  Leaf,
  Clock,
  Layers,
  Wrench,
  Activity,
  Flame,
  FileCheck,
  Hammer,
  GraduationCap,
  Building,
  Factory,
  Zap,
  ShoppingBag,
  Thermometer,
  Truck,
  UserCheck,
  Settings,
  BarChart3,
  Phone,
  Package,
  Cpu,
  Beaker,
} from "lucide-react";

import { RoysNavbar, RoysFooter } from "./_shared";

// ─── Static Data ─────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "15+",   label: "Countries\nServed",         icon: Globe },
  { value: "250+",  label: "Projects\nDelivered",       icon: Building2 },
  { value: "30+",   label: "Years of\nExperience",      icon: Award },
  { value: "1000+", label: "Healthcare\nExperts",       icon: Users },
];

const TRUSTED_LOGOS = [
  { name: "World Health Organization", abbr: "WHO",     img: "/logos/worldhealth.png" },
  { name: "UNICEF",                    abbr: "UNICEF",  img: "/logos/unicef.png" },
  { name: "Government of Pakistan",    abbr: "Govt of Pakistan", img: "/logos/pak.png" },
  { name: "SIEMENS Healthineers",      abbr: "Siemens", img: "/logos/siemens.png" },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Consult & Assess",
    desc: "Understanding your needs, site analysis & feasibility study.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Design & Plan",
    desc: "Architectural planning, engineering design & regulatory compliance.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Build & Integrate",
    desc: "Precision construction, equipment integration & quality assurance.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Commission & Support",
    desc: "Testing, commissioning & ongoing maintenance for seamless operations.",
  },
];

const SERVICE_OFFERINGS_12 = [
  { title: "Healthcare Infrastructure Development", icon: Building2,      slug: "hospital-engineering-infrastructure" },
  { title: "MEP (Mechanical, Electrical & Plumbing)", icon: Wrench,       slug: "hospital-engineering" },
  { title: "Modular OT & ICU Solutions",             icon: BriefcaseMedical, slug: "medical-devices-equipment" },
  { title: "Medical Gas Pipeline Systems",           icon: Activity,      slug: "hospital-engineering-infrastructure" },
  { title: "Healthcare Equipment Supply & Installation", icon: Stethoscope, slug: "medical-devices-equipment" },
  { title: "Hospital Renovation & Upgrades",         icon: Hammer,        slug: "hospital-engineering-infrastructure" },
  { title: "Facility Management Services",           icon: Building,      slug: "hospital-engineering" },
  { title: "Biomedical Engineering Solutions",       icon: Microscope,    slug: "biomedical-services" },
  { title: "Cleanroom & HVAC Solutions",             icon: Layers,        slug: "clean-room-hvac" },
  { title: "Radiation Protection Solutions",         icon: ShieldCheck,   slug: "hospital-engineering" },
  { title: "Fire Safety & Life Safety Systems",      icon: Flame,         slug: "hospital-engineering" },
  { title: "Lab & Diagnostic Solutions",             icon: FlaskConical,  slug: "laboratory-solutions" },
];

const CORE_BUSINESS_7 = [
  { title: "Hospital\nInfrastructure", icon: Building2, slug: "hospital-infrastructure" },
  { title: "Medical\nEngineering",      icon: Stethoscope, slug: "medical-engineering" },
  { title: "Facility\nManagement",      icon: Building, slug: "facility-management" },
  { title: "Turnkey\nProjects",         icon: Layers, slug: "turnkey-projects" },
  { title: "Consultancy &\nAdvisory",   icon: Lightbulb, slug: "consultancy-advisory" },
  { title: "Equipment\nSolutions",      icon: Activity, slug: "equipment-solutions" },
  { title: "Institutional\nSupport",    icon: ShieldCheck, slug: "institutional-support" },
];

const PRODUCT_TABS = [
  "Diagnostic Imaging",
  "OT Solutions",
  "ICU & Critical Care",
  "Lab Equipment",
  "Hospital Furniture",
];

const PRODUCTS_BY_TAB = {
  "Diagnostic Imaging": [
    { name: "Digital X-Ray Systems",   desc: "High-resolution imaging for accurate diagnosis.",  img: "/biomax_diagnostic_equipment_ai.jpg" },
    { name: "CT Scan Systems",         desc: "Advanced CT imaging for precise insights.",        img: "/roys_ct_scan.png" },
    { name: "MRI Systems",             desc: "High-performance MRI for detailed imaging.",       img: "/roys_mri_scanner.png" },
    { name: "Ultrasound Systems",      desc: "Versatile ultrasound systems for all needs.",      img: "/roys_ultrasound.png" },
  ],
  "OT Solutions": [
    { name: "Hydraulic Surgical Table",desc: "Electro-hydraulic multi-position surgical table.", img: "/pakmedical-card2.png" },
    { name: "Shadowless LED Lights",   desc: "Aerodynamic laminar flow surgical illumination.",  img: "/biomax_ind_healthcare_ai.jpg" },
    { name: "Anesthesia Workstation",  desc: "Integrated anesthesia delivery & gas spirometry.", img: "/pakmedical-card4.png" },
    { name: "4K Endoscopy Tower",      desc: "Ultra HD minimally invasive camera tower system.", img: "/biomax_ind_hero_ai.jpg" },
  ],
  "ICU & Critical Care": [
    { name: "Multi-Parameter Monitor", desc: "15-inch touch vital signs monitor with ECG.",     img: "/biomax_consumables_ai.jpg" },
    { name: "Intelligent Ventilator",  desc: "Invasive and non-invasive ICU life support.",      img: "/pakmedical-card1.png" },
    { name: "Syringe & Infusion Pump", desc: "Multi-channel precision volumetric pump stack.",   img: "/healthcare_infrastructure.jpg" },
    { name: "Biphasic Defibrillator",  desc: "Clinical pacing with automated AED coaching.",     img: "/biomax_qa_scientist_ai.jpg" },
  ],
  "Lab Equipment": [
    { name: "Clinical Chemistry Analyzer", desc: "Automated high-throughput blood testing system.", img: "/biomax_lab_equipment_ai.jpg" },
    { name: "5-Part Hematology Counter",  desc: "Laser flow cytometry 3D scattergram analyzer.", img: "/biomax_scientific_instruments_ai.jpg" },
    { name: "Binocular Microscope",        desc: "Infinity optical system laboratory microscope.",img: "/biomax_research_lab.jpg" },
    { name: "Refrigerated Centrifuge",    desc: "Microprocessor brushless sample centrifuge.",   img: "/biomax_quality_lab.jpg" },
  ],
  "Hospital Furniture": [
    { name: "Electric ICU Bed",        desc: "5-function motorized critical care patient bed.",  img: "/roys_hospital_interior.png" },
    { name: "Emergency Crash Cart",    desc: "Stainless steel resuscitation trolley with locks.",img: "/pakmedical-card5.png" },
    { name: "Medical Storage Cabinet", desc: "Heavy-duty lockable antibacterial glass cabinet.", img: "/pakmedical-card3.png" },
    { name: "Hydraulic Overbed Table", desc: "Smooth height-adjustable antimicrobial table.",    img: "/pakmedical-card6.png" },
  ],
};

const CONFIGURATOR_ACCORDIONS = [
  {
    id: 1,
    title: "1. Modular Operating Theatre & ICU Suite",
    featuredTitle: "MODULAR OPERATING THEATRE & ICU SUITE",
    featuredDesc: "Engineered for efficiency, safety, and flexibility. Our modular OT & ICU solutions ensure faster deployment and optimal performance.",
    points: [
      "Modular & Scalable Design",
      "International Safety Standards",
      "Fast Installation & Handover",
    ],
    img: "/pakmedical-card2.png",
  },
  {
    id: 2,
    title: "2. MEP & Utility Infrastructure",
    featuredTitle: "CENTRAL MEDICAL GAS & CLEANROOM HVAC",
    featuredDesc: "Complete HTM 02-01 compliant medical gas distribution, HEPA filtration air handling units, and positive pressure airflow containment.",
    points: [
      "HTM 02-01 & NFPA 99 Compliance",
      "Class 100 HEPA Filtration",
      "Continuous Monitoring Panels",
    ],
    img: "/biomax_rnd_hero_ai.jpg",
  },
  {
    id: 3,
    title: "3. Equipment Supply & Integration",
    featuredTitle: "DIAGNOSTIC RADIOLOGY & CLINICAL SYSTEMS",
    featuredDesc: "Turnkey diagnostic imaging suites including 1.5T MRI, 128-slice CT, ceiling digital X-ray, and PACs network integration.",
    points: [
      "Direct OEM Global Sourcing",
      "Lead-Lined Radiation Shielding",
      "Biomedical SAT Calibration",
    ],
    img: "/roys_ct_scan.png",
  },
  {
    id: 4,
    title: "4. Facility Management Services",
    featuredTitle: "BIOMEDICAL PREVENTIVE & SLA SUPPORT",
    featuredDesc: "Comprehensive Annual Maintenance Contracts (AMC/CMC), hospital engineering facility maintenance, and 24/7 technical emergency response.",
    points: [
      "24/7 Rapid Emergency Response",
      "Certified Biomedical Engineers",
      "OEM Genuine Parts Warranty",
    ],
    img: "/biomax_qa_scientist_ai.jpg",
  },
];

const INDUSTRIES_8 = [
  { title: "Hospitals",                 icon: Building2,      slug: "hospitals" },
  { title: "Government",                icon: Building,       slug: "government" },
  { title: "Military & Defence",        icon: ShieldCheck,    slug: "military-healthcare" },
  { title: "Research Institutions",     icon: Microscope,     slug: "research-centers" },
  { title: "Educational Institutions",  icon: GraduationCap,  slug: "universities" },
  { title: "Pharma Companies",          icon: Pill,           slug: "pharmaceutical-industry" },
  { title: "Hotels & Labs",             icon: FlaskConical,   slug: "diagnostic-labs" },
  { title: "Industrial & Corporate",    icon: Factory,        slug: "pharmaceutical-industry" },
];

const WHY_CHOOSE_8 = [
  { title: "Global Experience",    desc: "Serving clients in 30+ countries.",          icon: Globe },
  { title: "End-to-End Solutions", desc: "From concept to commissioning.",             icon: FileCheck },
  { title: "Quality & Compliance", desc: "International standards assured.",           icon: ShieldCheck },
  { title: "Innovation-Driven",    desc: "Cutting-edge technology for better outcomes.", icon: Lightbulb },
  { title: "Experienced Team",     desc: "1000+ professionals & experts.",             icon: Users },
  { title: "Timely Delivery",      desc: "On time, every time.",                       icon: Clock },
  { title: "Customer-Centric",     desc: "Tailored solutions for every client.",       icon: HeartPulse },
  { title: "Sustainable Approach", desc: "Eco-friendly & future-ready solutions.",     icon: Leaf },
];

const VALUES_5 = [
  { label: "Integrity",   icon: ShieldCheck },
  { label: "Excellence",  icon: Award },
  { label: "Innovation",  icon: Lightbulb },
  { label: "Teamwork",    icon: Users },
  { label: "Commitment",  icon: Target },
];

const BUSINESS_VERTICALS = [
  { title: "Medical Equipment",             icon: Stethoscope,     desc: "Comprehensive medical equipment supply for hospitals and clinical settings." },
  { title: "Surgical Equipment",            icon: BriefcaseMedical,desc: "Precision surgical tools and instruments for modern operating theatres." },
  { title: "Medical Devices",               icon: Activity,        desc: "Advanced medical devices including diagnostic and monitoring systems." },
  { title: "Laboratory & Research",         icon: FlaskConical,    desc: "Analytical, research, and quality control laboratory equipment and glassware." },
  { title: "Pharmaceutical & Vaccines",     icon: Pill,            desc: "Vaccine production solutions, oil adjuvants, and pharmaceutical support systems." },
  { title: "Healthcare Infrastructure",     icon: Building2,       desc: "End-to-end healthcare facility planning, design, and development." },
  { title: "Hospital Engineering",          icon: Wrench,          desc: "MEP, utilities, biomedical and hospital engineering solutions." },
  { title: "Clean Room & HVAC",             icon: Layers,          desc: "ISO-classified clean rooms, HEPA filtration and HVAC systems for healthcare." },
  { title: "Institutional Supply",          icon: Package,         desc: "Disposables, consumables, and general healthcare institutional procurement." },
  { title: "Electrical Equipment",          icon: Zap,             desc: "Industrial and general electrical equipment supply." },
  { title: "Security Equipment",            icon: ShieldCheck,     desc: "Professional security systems and equipment for institutions." },
  { title: "Fresh Fruit & Vegetable Export",icon: Truck,           desc: "Export of quality fresh produce for international markets." },
];

export default function RoysRoysPage() {
  const [productTab, setProductTab] = useState("Diagnostic Imaging");
  const [activeAccordion, setActiveAccordion] = useState(1);

  const selectedAccordionData =
    CONFIGURATOR_ACCORDIONS.find((a) => a.id === activeAccordion) ||
    CONFIGURATOR_ACCORDIONS[0];

  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      {/* ─── 1. TOP NAVBAR ─────────────────────────────────────────────────── */}
      <RoysNavbar active="Home" />

      {/* ─── 2. HERO SECTION (DARK NAVY GRADIENT + ARCHITECTURAL BUILDING) ─── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563eb]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              {/* Gold pill badge */}
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5"
              >
                GLOBAL HEALTHCARE ENGINEERING &amp; INSTITUTIONAL CONTRACTING
              </div>

              {/* H1 Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-5"
              >
                Delivering Excellence Through
                <span className="block text-[#38bdf8] font-black text-2xl sm:text-3xl lg:text-4xl my-1">
                  &amp;
                </span>
                Turnkey Healthcare Solutions
              </h1>

              {/* Subtitle */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-7 font-normal"
              >
                Roys &amp; Roys™ International is a diversified enterprise specializing in turnkey hospital engineering, integrated healthcare infrastructure, and institutional contracting solutions across 30+ nations.
              </p>

              {/* Hero Action Buttons (Compact, Sleek, Pixel-Perfect) */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-3 mb-10">
                <Link
                  href="/group-companies/roys-roys/what-we-do"
                  className="px-5 py-2.5 rounded bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow flex items-center gap-1.5"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-5 py-2.5 rounded border border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
                >
                  <span>Download Brochure</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* 4 Stat Cards in Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-white/15">
                {HERO_STATS.map((st, idx) => {
                  const Icon = st.icon;
                  return (
                    <div
                      key={st.label}
                      data-aos="fade-up"
                      data-aos-delay={350 + idx * 80}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded bg-blue-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl font-black text-white leading-none mb-0.5">
                          {st.value}
                        </p>
                        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider whitespace-pre-line leading-tight">
                          {st.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Hospital Building Graphic with Glowing Network Nodes */}
            <div className="lg:col-span-5 hidden lg:block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
              <div className="relative h-[430px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-b from-blue-950 to-slate-950">
                <Image
                  src="/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg"
                  alt="Modern Healthcare Infrastructure Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUSTED BY LEADING ORGANIZATIONS ───────────────────────────── */}
      <section className="py-10 sm:py-12 px-6 bg-white border-b border-[#e2e8f0]" data-aos="fade-up" data-aos-duration="600">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#0f2b48] mb-8">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center max-w-5xl mx-auto">
            {TRUSTED_LOGOS.map((logo, idx) => (
              <div
                key={logo.name}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="h-20 sm:h-24 px-4 py-2 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                {logo.img ? (
                  <div className="relative w-full h-16 sm:h-20">
                    <Image
                      src={logo.img}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 180px, 260px"
                    />
                  </div>
                ) : (
                  <span className="text-sm sm:text-base font-black text-slate-700 tracking-wider">
                    {logo.abbr}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ABOUT US SECTION ───────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="700">
            <span className="inline-block px-3 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-3">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0f2b48] leading-[1.22] tracking-tight mb-4">
              Integrated Healthcare Solutions, Medical Equipment & Infrastructure
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              Roys &amp; Roys™ International is a diversified healthcare company operating across medical equipment supply, laboratory solutions, pharmaceutical products, healthcare infrastructure, hospital engineering and institutional procurement. We combine strategic supplier relationships with end-to-end project execution to deliver complete solutions for hospitals, laboratories, and healthcare institutions.
            </p>

            <div className="space-y-3 mb-7">
              {[
                { title: "Medical & Surgical Equipment", desc: "Supply of medical devices, surgical instruments, diagnostic and hospital equipment." },
                { title: "Laboratory Solutions", desc: "Analytical, research and quality control laboratory equipment and glassware." },
                { title: "Healthcare Infrastructure", desc: "Turnkey hospital planning, engineering, clean rooms and HVAC systems." },
                { title: "Institutional Procurement", desc: "Disposables, consumables and general institutional healthcare supply." },
              ].map((point, idx) => (
                <div
                  key={point.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="text-[#0f2b48] font-bold">{point.title}:</strong> {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/group-companies/roys-roys/about"
              data-aos="fade-up"
              data-aos-delay="300"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
            >
              <span>More About Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Hospital Image Showcase with Floating Badge */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="800">
            <div className="relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/roys_hospital_interior.png"
                alt="Hospital corridor interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-transparent to-transparent" />

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0f2b48]/95 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-xl"
              >
                <div>
                  <p className="text-sm font-bold text-white">
                    Turnkey Healthcare &amp; Global Trade
                  </p>
                </div>
                <div className="text-right pl-4 border-l border-white/20">
                  <span className="text-xl font-black text-[#B49438]">15+</span>
                  <p className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">
                    Countries Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. OUR MISSION & OUR VISION ───────────────────────────────────── */}
      <section className="py-4 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-5">
          {/* Mission Card */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Target size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To extend services beyond client expectations to ensure we supply the right products, at the right prices, at the right time.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Eye size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be a reputable and diversified healthcare company in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. HOW WE DELIVER HEALTHCARE INFRASTRUCTURE ────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-10"
          >
            HOW WE DELIVER HEALTHCARE INFRASTRUCTURE
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-300 font-mono">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0f2b48] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. OUR SERVICE OFFERINGS (12 CARDS GRID) ──────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-9"
          >
            OUR SERVICE OFFERINGS
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left mb-9">
            {SERVICE_OFFERINGS_12.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  href={"/group-companies/roys-roys/what-we-do/" + srv.slug}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 60 + Math.floor(idx / 4) * 50}
                  className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-sm transition-all duration-200 flex items-center justify-between group no-underline"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <p className="text-xs font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors leading-snug">
                      {srv.title}
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-[#2563eb] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </Link>
              );
            })}
          </div>

          <Link
            href="/group-companies/roys-roys/what-we-do"
            data-aos="fade-up"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── 8. CORE BUSINESS AREAS (7 PILL CARDS) ─────────────────────────── */}
      <section className="py-14 sm:py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-2 sm:mb-3"
          >
            CORE BUSINESS AREAS
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8 sm:mb-10"
          >
            Delivering specialized healthcare engineering, turnkey project execution, and institutional contracting.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {CORE_BUSINESS_7.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.title}
                  href={`/group-companies/roys-roys/core-business/${area.slug}`}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 60}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center group cursor-pointer no-underline min-h-[160px] sm:min-h-[180px]"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center mb-3 shadow-xs">
                    <Icon size={26} />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors whitespace-pre-line leading-snug">
                    {area.title}
                  </p>
                  <span className="mt-2 text-[10px] font-bold text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-0.5">
                    Explore <ChevronRight size={11} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="mt-8 sm:mt-10">
            <Link
              href="/group-companies/roys-roys/core-business"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
            >
              <span>Explore All 7 Divisions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. PRODUCTS & SOLUTIONS (TABS + 4 CARDS) ───────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-6"
          >
            PRODUCTS &amp; SOLUTIONS
          </h2>

          {/* Product Category Tabs */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-2 mb-9">
            {PRODUCT_TABS.map((tab) => {
              const active = tab === productTab;
              return (
                <button
                  key={tab}
                  onClick={() => setProductTab(tab)}
                  className={
                    "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer " +
                    (active
                      ? "bg-[#0f2b48] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100")
                  }
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 4 Products Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-9">
            {(PRODUCTS_BY_TAB[productTab] || PRODUCTS_BY_TAB["Diagnostic Imaging"]).map((prod, idx) => (
              <div
                key={prod.name}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-900">
                    <Image
                      src={prod.img}
                      alt={prod.name}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#0f2b48] mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-0">
                  <Link
                    href="/group-companies/roys-roys/products"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2563eb] hover:text-[#0f2b48] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/group-companies/roys-roys/products"
            data-aos="fade-up"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
          >
            <span>Explore All Products &amp; Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── 10. INTERACTIVE CONFIGURATOR BOX ───────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="rounded-2xl bg-[#091d34] text-white p-7 lg:p-10 shadow-2xl grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Accordion Selection */}
            <div className="lg:col-span-6 space-y-5" data-aos="fade-right" data-aos-delay="100">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B49438] block">
                CUSTOMIZED. SCALABLE. RELIABLE.
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Configure Your Healthcare &amp; Institutional Solution
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                We offer tailor-made solutions to meet the unique demands of your healthcare facility. From design to deployment, we&apos;ve got you covered.
              </p>

              {/* Accordions */}
              <div className="space-y-2.5 pt-1">
                {CONFIGURATOR_ACCORDIONS.map((acc) => {
                  const active = acc.id === activeAccordion;
                  return (
                    <div
                      key={acc.id}
                      onClick={() => setActiveAccordion(acc.id)}
                      className={
                        "p-3 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between " +
                        (active
                          ? "bg-[#2563eb] border-[#38bdf8] text-white shadow-sm"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white")
                      }
                    >
                      <span className="text-xs sm:text-sm font-semibold">{acc.title}</span>
                      <ChevronDown
                        size={15}
                        className={
                          "transition-transform duration-200 " +
                          (active ? "rotate-180 text-white" : "text-slate-400")
                        }
                      />
                    </div>
                  );
                })}
              </div>

              <div className="pt-1">
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded bg-[#B49438] hover:bg-[#9a7d2d] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Tailor-Made Proposal</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right: Featured Preview Card */}
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="200">
              <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md space-y-4 shadow-xl">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {selectedAccordionData.featuredTitle}
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedAccordionData.featuredDesc}
                  </p>
                </div>

                <div className="space-y-1.5">
                  {selectedAccordionData.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/group-companies/roys-roys/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#B49438] hover:bg-[#9a7d2d] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <span>Request a Feature Solution</span>
                  <ArrowUpRight size={13} />
                </Link>

                <div className="relative h-44 sm:h-48 w-full rounded-lg overflow-hidden border border-white/20 mt-3">
                  <Image
                    src={selectedAccordionData.img}
                    alt={selectedAccordionData.featuredTitle}
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. INDUSTRIES WE SERVE (8 GRID CARDS) ────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-8 sm:mb-10"
          >
            INDUSTRIES WE SERVE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {INDUSTRIES_8.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.title}
                  href={"/group-companies/roys-roys/industries/" + ind.slug}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#009688] hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center text-center group no-underline"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-blue-50 text-[#0077b6] group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-200 flex items-center justify-center mb-3 shadow-xs">
                    <Icon size={34} strokeWidth={1.8} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f2b48] group-hover:text-[#009688] transition-colors leading-snug">
                    {ind.title}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/group-companies/roys-roys/industries"
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#0f2b48] hover:bg-[#2563eb] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-200 shadow-sm"
          >
            <span>Explore All Industries</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── 12. WHY CHOOSE ROYS & ROYS INTERNATIONAL? (8 CARDS) ───────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-8 sm:mb-10"
          >
            WHY CHOOSE ROYS &amp; ROYS INTERNATIONAL?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
            {WHY_CHOOSE_8.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 80 + Math.floor(idx / 4) * 60}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 13. 3-PANEL CORPORATE BAR (VALUES, INFO, CERTIFICATIONS) ───────── */}
      <section className="py-10 px-6 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Panel 1: Our Values */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563eb] block mb-3.5">
                OUR VALUES
              </span>
              <div className="flex flex-wrap gap-2.5">
                {VALUES_5.map((v) => {
                  const Icon = v.icon;
                  return (
                    <span
                      key={v.label}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#2563eb] text-xs sm:text-sm font-bold transition-colors shadow-xs"
                    >
                      <Icon size={18} className="text-[#2563eb]" />
                      <span>{v.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Panel 2: Corporate Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563eb] block mb-3.5">
                CORPORATE INFO
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">About Us</Link>
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">Overview</Link>
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">Leadership</Link>
                <Link href="/group-companies/roys-roys/contact" className="hover:text-[#2563eb] transition-colors">Clients</Link>
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">Careers</Link>
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">Partners</Link>
                <Link href="/group-companies/roys-roys/about" className="hover:text-[#2563eb] transition-colors">News &amp; Media</Link>
              </div>
            </div>
          </div>

          {/* Panel 3: Certifications */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563eb] block mb-3.5">
                CERTIFICATIONS &amp; MEMBERSHIPS
              </span>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  <span>ISO 9001:2015 Certified Organization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  <span>Registered with Pakistan Engineering Council (PEC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  <span>Member: FPCCI, PHA &amp; Other Associations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. BUSINESS VERTICALS ─────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className="inline-block px-3 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-3" data-aos="fade-up">
            WHAT WE DO
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-3"
          >
            OUR BUSINESS VERTICALS
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="text-sm text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            ROYS &amp; ROYS International operates across a broad spectrum of healthcare, laboratory, pharmaceutical, and institutional business verticals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
            {BUSINESS_VERTICALS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 60}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-md transition-all duration-200 flex flex-col gap-3 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-200 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 15. FOOTER ─────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
