"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ChevronLeft,
  HeartPulse, BriefcaseMedical, FlaskConical, Microscope, Pill,
  Globe, ShieldCheck, Target, Award, Lightbulb, Leaf, Users, Star,
  Building2, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2,
  Linkedin, Facebook, Youtube, Instagram, Music, Layers, Settings,
  Sparkles, Cpu, Check, Activity, FileCheck,
} from "lucide-react";

import { RoysNavbar, RoysFooter } from "./_shared";
import { OFFERINGS_LIST } from "./offerings-data";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:     "#113658",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  footerBg:    "#020f1f",
  footerBlue:  "#4da8ff",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const HERO_BACKGROUND_IMAGE = "/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg";

const STATS = [
  { value: "15+",   label: "Years of\nExcellence" },
  { value: "250+",  label: "Projects\nDelivered" },
  { value: "30+",   label: "Countries\nServed" },
  { value: "1000+", label: "Products &\nSolutions" },
];

const TRUSTED_LOGOS = [
  { name: "World Health Organization", abbr: "WHO",      img: "/world health.png" },
  { name: "UNICEF",                    abbr: "UNICEF",   img: "/unicef.png" },
  { name: "Pakistan Army",             abbr: "Pak Army", img: "/pak.png" },
  { name: "Siemens Healthineers",      abbr: "Siemens",  img: "/siemens.png" },
  { name: "Philips Healthcare",        abbr: "PHILIPS",  img: "/philips.png" },
  { name: "GE Healthcare",             abbr: "GE Health",img: null },
  { name: "Becton Dickinson",          abbr: "BD",       img: "/bd.png" },
];

const CORE_BUSINESS_AREAS = [
  { icon: HeartPulse,      label: "Healthcare\nTechnologies",    slug: "healthcare-technologies" },
  { icon: BriefcaseMedical,label: "Hospital\nEngineering",        slug: "hospital-engineering" },
  { icon: FlaskConical,    label: "Clean Room\n& HVAC",            slug: "clean-room-hvac" },
  { icon: Microscope,      label: "Laboratory\nSolutions",        slug: "laboratory-solutions" },
  { icon: Pill,            label: "Pharmaceutical\nConsultancy",  slug: "pharmaceutical-consultancy" },
  { icon: Globe,           label: "International\nProcurement",   slug: "international-procurement" },
  { icon: ShieldCheck,     label: "Biomedical\nServices",         slug: "biomedical-services" },
];

const PRODUCTS_TABS = [
  "Diagnostic Imaging",
  "OT Solutions",
  "ICU & Critical Care",
  "Lab Equipment",
  "Hospital Furniture",
  "Clean Room Systems",
];

const PRODUCTS = [
  // Diagnostic Imaging
  { category: "Diagnostic Imaging", name: "Digital X-Ray Radiography", desc: "High-frequency digital radiography suite for rapid clinical diagnostic imaging.", img: "/biomax_diagnostic_equipment_ai.jpg" },
  { category: "Diagnostic Imaging", name: "4D Color Doppler Ultrasound", desc: "High-performance ultrasound platform for multi-specialty clinical diagnostics.", img: "/roys_ultrasound.png" },
  { category: "Diagnostic Imaging", name: "128-Slice CT Scanner", desc: "Multi-slice computed tomography system for sub-millimeter precision scanning.", img: "/roys_ct_scan.png" },
  { category: "Diagnostic Imaging", name: "1.5T Superconducting MRI", desc: "High-field magnetic resonance imaging system with advanced neurological mapping.", img: "/roys_mri_scanner.png" },
  { category: "Diagnostic Imaging", name: "Digital 3D Mammography", desc: "Low-dose full-field digital mammography for high-resolution breast screening.", img: "/biomax_products_hero_ai.jpg" },
  
  // OT Solutions
  { category: "OT Solutions", name: "Hydraulic Surgical Table", desc: "Electro-hydraulic multi-position surgical table with carbon-fiber radiological top.", img: "/pakmedical-card2.png" },
  { category: "OT Solutions", name: "Shadowless Dual-Dome LED Lights", desc: "High-intensity surgical illumination with laminar flow aerodynamic design.", img: "/biomax_ind_healthcare_ai.jpg" },
  { category: "OT Solutions", name: "Integrated Anesthesia Workstation", desc: "Advanced anesthesia delivery system with electronic gas mixing and spirometry.", img: "/pakmedical-card4.png" },
  { category: "OT Solutions", name: "4K Laparoscopic Endoscopy Tower", desc: "Ultra HD minimally invasive surgical camera system, insufflator, and LED light source.", img: "/biomax_ind_hero_ai.jpg" },
  { category: "OT Solutions", name: "Turnkey Modular OT Suite", desc: "Prefabricated sterile operating theater with integrated hermetic sliding doors.", img: "/roys_hospital_interior.png" },
  
  // ICU & Critical Care
  { category: "ICU & Critical Care", name: "Multi-Parameter ICU Monitor", desc: "15-inch touch screen bedside patient vital signs monitoring with ECG & arrhythmia analysis.", img: "/biomax_consumables_ai.jpg" },
  { category: "ICU & Critical Care", name: "Intelligent ICU Ventilator", desc: "Non-invasive and invasive high-end respiratory ventilator with lung protective modes.", img: "/pakmedical-card1.png" },
  { category: "ICU & Critical Care", name: "Syringe & Infusion Pump Workstation", desc: "Docking station with programmable micro-infusion and volumetric syringe pumps.", img: "/healthcare_infrastructure.jpg" },
  { category: "ICU & Critical Care", name: "Biphasic Defibrillator Monitor", desc: "Emergency external defibrillator with pacing, CPR coaching, and automated AED mode.", img: "/biomax_qa_scientist_ai.jpg" },
  { category: "ICU & Critical Care", name: "Central ICU Telemetry Station", desc: "Centralized wireless networking hub monitoring up to 64 critical care patient beds.", img: "/pakmedical-card5.png" },

  // Lab Equipment
  { category: "Lab Equipment", name: "Automated Chemistry Analyzer", desc: "High-throughput clinical chemistry analyzer delivering 800 tests/hour with ISE module.", img: "/biomax_lab_equipment_ai.jpg" },
  { category: "Lab Equipment", name: "5-Part Hematology Counter", desc: "Laser flow cytometry hematology analyzer with automated 3D cell scattergram profiling.", img: "/biomax_scientific_instruments_ai.jpg" },
  { category: "Lab Equipment", name: "Research Binocular Microscope", desc: "Infinity optical system laboratory microscope with digital fluorescence imaging.", img: "/biomax_research_lab.jpg" },
  { category: "Lab Equipment", name: "Refrigerated Benchtop Centrifuge", desc: "High-speed microprocessor controlled centrifuge with brushless induction drive.", img: "/biomax_quality_lab.jpg" },
  { category: "Lab Equipment", name: "Real-Time PCR Thermal Cycler", desc: "Multi-channel quantitative molecular diagnostics system for pathogen detection.", img: "/biomax_biotech_solutions_ai.jpg" },

  // Hospital Furniture
  { category: "Hospital Furniture", name: "5-Function Electric ICU Bed", desc: "Motorized critical care hospital bed with cardiac chair position and CPR release.", img: "/roys_hospital_interior.png" },
  { category: "Hospital Furniture", name: "Emergency Mobile Crash Cart", desc: "Stainless steel resuscitation emergency trolley with medication locks and oxygen holder.", img: "/pakmedical-card5.png" },
  { category: "Hospital Furniture", name: "Sterile Medical Storage Cabinet", desc: "Heavy-duty antibacterial steel pharmacy storage with tamper-proof locking glass doors.", img: "/pakmedical-card3.png" },
  { category: "Hospital Furniture", name: "Hydraulic Gas-Spring Overbed Table", desc: "Smooth height-adjustable antimicrobial overbed table with spill-containment rim.", img: "/pakmedical-card6.png" },
  { category: "Hospital Furniture", name: "Emergency Transport Stretcher", desc: "Hydraulic emergency patient transport trolley with foldable side rails and IV pole.", img: "/pakmedical-card1.png" },

  // Clean Room Systems
  { category: "Clean Room Systems", name: "Modular Antibacterial OT Panels", desc: "Seamless powder-coated galvanized steel cleanroom wall and ceiling panels.", img: "/biomax_rnd_hero_ai.jpg" },
  { category: "Clean Room Systems", name: "Laminar Air Flow Plenum Hood", desc: "HEPA filtered ceiling supply system providing Class 100 sterile ultra-clean airflow.", img: "/biomax_rnd_objective_ai.jpg" },
  { category: "Clean Room Systems", name: "Dynamic UV Transfer Pass Box", desc: "Electromagnetic interlocked stainless steel pass-through hatch with germicidal UV lamp.", img: "/offerings/roys_supply_chain.jpg" },
  { category: "Clean Room Systems", name: "Digital Bed Head Supply Unit", desc: "Extruded aluminum medical gas pipeline wall unit with electrical and nurse call ports.", img: "/offerings/roys_gov_contracting.jpg" },
  { category: "Clean Room Systems", name: "CSSD Steam Autoclave System", desc: "Heavy-duty hospital sterilizer with double vacuum door for sterile department processing.", img: "/offerings/roys_import_export.jpg" },
];

const LIFECYCLE_STEPS = [
  {
    step: "01",
    icon: Building2,
    title: "Clinical Architecture & Layout",
    desc: "Comprehensive feasibility analysis, architectural space programming, BOQ drafting, and regulatory room layout compliant with HTM and international medical codes.",
    tags: ["AutoCAD / BIM", "Room Layouts", "HTM 02-01 Compliance"],
  },
  {
    step: "02",
    icon: Globe,
    title: "Global Sourcing & Procurement",
    desc: "Direct OEM sourcing from accredited European, US, and Asian manufacturers under Incoterms 2020 (CIF/FOB), with international cold-chain and customs logistics.",
    tags: ["OEM Direct", "Incoterms 2020", "Fast-Track Clearance"],
  },
  {
    step: "03",
    icon: Layers,
    title: "Turnkey Cleanroom & MEP Engineering",
    desc: "Precision installation of modular antibacterial wall panels, laminar air flow plenum ceiling hoods, medical gas pipelines, and specialized surgical lighting.",
    tags: ["Class 100 Cleanroom", "Medical Gas Pipeline", "Modular OT Panels"],
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Biomedical Commissioning & SLA",
    desc: "Rigorous Site Acceptance Testing (SAT), biomedical calibration certification, hospital staff clinical training, and round-the-clock SLA maintenance support.",
    tags: ["SAT & Calibration", "Clinician Training", "24/7 SLA Support"],
  },
];

const ESTIMATOR_OPTIONS = {
  sectors: [
    { id: "tertiary", name: "Tertiary & Specialized Hospitals", icon: Building2 },
    { id: "defense", name: "Military & Defense Healthcare", icon: ShieldCheck },
    { id: "diagnostic", name: "Commercial Diagnostic & Pathology Labs", icon: Microscope },
    { id: "ministry", name: "Federal & Provincial Health Ministries", icon: Award },
    { id: "pharma", name: "Pharmaceutical & Industrial Facilities", icon: Pill },
  ],
  solutions: [
    {
      id: "ot_icu",
      name: "Modular Operating Theatre & ICU Suite",
      scope: "Prefabricated modular antibacterial OT walls, laminar air flow plenum ceiling, multi-parameter ICU patient monitors, surgical tables & ceiling pendant units.",
      standards: "ISO 13485 • HTM 02-01 • CE Mark • Class 100 Sterile",
      timeline: "6 – 12 Weeks Fast-Track Delivery",
    },
    {
      id: "radiology",
      name: "Complete Diagnostic Radiology Center",
      scope: "1.5T Superconducting MRI, 128-Slice CT Scanner, Digital Ceiling X-Ray Radiography, 4D Color Doppler Ultrasound, and PACS workstation integration.",
      standards: "AERB / FDA Cleared • CE Certified • Radiation Shielding Lead-Lined",
      timeline: "8 – 16 Weeks Global Turnkey Setup",
    },
    {
      id: "cleanroom_hvac",
      name: "Cleanroom HVAC & Central Medical Gas",
      scope: "HEPA filtration air handling units (AHU), differential pressure controls, dynamic pass boxes, and complete HTM 02-01 medical gas pipeline network.",
      standards: "ISO 14644 Class 5–8 • NFPA 99 • EU-GMP Cleanroom Grade B",
      timeline: "4 – 10 Weeks Site Handover",
    },
    {
      id: "global_procure",
      name: "Institutional Bulk Procurement & Trade",
      scope: "Large-scale surgical disposable supplies, hospital medical furniture, diagnostic reagents, and high-frequency tender fulfillment.",
      standards: "WHO-GMP Verified • ISO 9001:2015 • Strict Cold-Chain Monitoring",
      timeline: "Immediate Sourcing & CIF Delivery",
    },
  ],
};

const INDUSTRIES = [
  { icon: Building2,  label: "Hospitals",                 slug: "hospitals" },
  { icon: ShieldCheck,label: "Government",                slug: "government" },
  { icon: Star,       label: "Military\nHealthcare",      slug: "military-healthcare" },
  { icon: Award,      label: "Universities",              slug: "universities" },
  { icon: Microscope, label: "Research\nCenters",         slug: "research-centers" },
  { icon: Users,      label: "Private\nClinics",          slug: "private-clinics" },
  { icon: HeartPulse, label: "NGOs",                     slug: "ngos" },
  { icon: FlaskConical,label: "Diagnostic\nLabs",         slug: "diagnostic-labs" },
  { icon: Pill,       label: "Pharmaceutical\nIndustry",  slug: "pharmaceutical-industry" },
];

const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "Trusted Government & Institutional Partner", desc: "Trusted partner for government contracts and institutional procurement." },
  { icon: Globe, title: "International Procurement & Global Sourcing Network", desc: "Access to a worldwide procurement and sourcing network." },
  { icon: Award, title: "Comprehensive Healthcare & Industrial Solutions", desc: "End-to-end healthcare and industrial systems delivered globally." },
  { icon: CheckCircle2, title: "Commitment to International Quality Standards", desc: "Ensuring compliance with global quality and regulatory standards." },
  { icon: Users, title: "Experienced Multidisciplinary Team", desc: "A team of professionals across engineering, healthcare, and logistics." },
  { icon: HeartPulse, title: "Reliable After-Sales Support & Technical Services", desc: "Dedicated support and technical service after delivery." },
  { icon: Lightbulb, title: "Customer-Centric Approach", desc: "Focused on tailored solutions and client satisfaction." },
  { icon: Star, title: "Innovation, Integrity & Excellence", desc: "Built on innovation, integrity, and operational excellence." },
];

const WHAT_WE_DO = [
  "Government Contracting & Procurement",
  "International Import & Export",
  "Global Trading & Supply Chain Management",
  "Manufacturing Solutions",
  "Strategic Consultancy Services",
  "Medical Devices & Healthcare Equipment",
  "Veterinary Healthcare Solutions",
  "Human & Veterinary Vaccines",
  "Surgical Disposable Products",
  "Medical Consumables",
  "Hospital & Medical Furniture",
  "Laboratory Equipment & Scientific Instruments",
  "Pharmaceutical Products",
  "Hospital Engineering & Infrastructure",
  "Turnkey Healthcare Projects",
];

const VALUES = [
  { icon: Lightbulb, label: "Integrity",           desc: "We adhere strictly to honesty and moral standards." },
  { icon: Star,      label: "Innovation",           desc: "Constantly upgrading medical technologies." },
  { icon: Award,     label: "Excellence",           desc: "Aiming for perfection in every delivery." },
  { icon: Leaf,      label: "Sustainability",       desc: "Designing long-lasting and eco-conscious engineering." },
  { icon: Users,     label: "Customer Commitment",  desc: "Full post-sales support and partnership." },
];

const CORPORATE_INFO = [
  { label: "Company Name",        val: "ROYS & ROYS International" },
  { label: "Industry Sector",     val: "Healthcare Engineering & Medical Technologies" },
  { label: "Corporate Link",      val: "ROYSONS Pvt.Ltd., Pakistan" },
  { label: "Registered Address",  val: "123 Business Avenue,Lahore, Pakistan" },
];

const NAV_LINKS = [
  { label: "Home",        href: "/group-companies/roys-roys" },
  { label: "About Us",   href: "/group-companies/roys-roys/about" },
  { label: "Solutions",  href: "/group-companies/roys-roys/solutions" },
  { label: "Products",   href: "/group-companies/roys-roys/products" },
  { label: "Industries", href: "/group-companies/roys-roys/industries" },
  { label: "What We Do", href: "/group-companies/roys-roys/what-we-do" },
  { label: "Contact",    href: "/group-companies/roys-roys/contact" },
];

const FOOTER_LINKS = {
  Company:    ["About Us", "Our Values", "Careers", "News & Media"],
  Solutions:  ["Healthcare Technologies", "Hospital Engineering", "Laboratory Solutions", "Clean Room Systems"],
  Industries: ["Hospitals", "Government", "Pharmaceutical", "Research Centers"],
};

// Footer social links: set `href` to the desired URL and `newTab: true` to open in a new tab
const SOCIAL_LINKS = [
  { label: "Facebook", Icon: Facebook, href: "#", newTab: false },
  { label: "Instagram", Icon: Instagram, href: "#", newTab: false },
  { label: "LinkedIn", Icon: Linkedin, href: "#", newTab: false },
  { label: "YouTube", Icon: Youtube, href: "#", newTab: false },
  { label: "TikTok", Icon: Music, href: "#", newTab: false },
];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-8">
      <span
        className="text-[11px] font-extrabold tracking-widest uppercase block mb-3"
        style={{ color: COLORS.primary }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-3xl font-extrabold tracking-tight uppercase"
        style={{ color: COLORS.black }}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4 h-1 w-14 rounded-full"
        style={{ backgroundColor: COLORS.primary }}
      />
    </div>
  );
}

function IconCard({ icon: Icon, label, href, iconSize = 20, containerSize = "w-12 h-12" }) {
  const cardContent = (
    <div
      className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer h-full select-none"
      style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.primary;
        const span = e.currentTarget.querySelector('span');
        if (span) span.style.color = '#ffffff';
        const svg = e.currentTarget.querySelector('svg');
        if (svg) svg.style.color = '#ffffff';
        if (e.currentTarget.children[0]) {
          e.currentTarget.children[0].style.backgroundColor = 'rgba(255,255,255,0.2)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = COLORS.white;
        const span = e.currentTarget.querySelector('span');
        if (span) span.style.color = COLORS.black;
        const svg = e.currentTarget.querySelector('svg');
        if (svg) svg.style.color = COLORS.primary;
        if (e.currentTarget.children[0]) {
          e.currentTarget.children[0].style.backgroundColor = `${COLORS.primary}10`;
        }
      }}
    >
      <div
        className={`${containerSize} rounded-full flex items-center justify-center mb-3 transition-colors duration-300`}
        style={{ backgroundColor: `${COLORS.primary}10` }}
      >
        <Icon size={iconSize * 1.5} style={{ color: COLORS.primary }} className="transition-colors duration-300" />
      </div>
      <span
        className="text-[14px] font-black leading-snug whitespace-pre-line transition-colors duration-300"
        style={{ color: COLORS.black }}
      >
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

function PrimaryButton({ href, children, className = "" }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ease-out ${className}`}
      style={{
        backgroundColor: hov ? "#009088" : COLORS.primary,
        color: COLORS.white,
        boxShadow: hov ? "0 4px 14px rgba(0, 144, 136, 0.35)" : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href, children, className = "" }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider border flex items-center gap-2 transition-all duration-300 ease-out ${className}`}
      style={{
        borderColor: hov ? COLORS.primary : COLORS.white,
        backgroundColor: hov ? COLORS.primary : "transparent",
        color: COLORS.white,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Link>
  );
}

function TiktokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16.5 3.5v6.5a4 4 0 1 1-4-4" />
      <path d="M12.5 13.5V21a3 3 0 1 1-3-3" />
      <path d="M16.5 10.5h1.5a2 2 0 1 1-2 2V8.5" />
    </svg>
  );
}

// ─── Page Sections ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-none transition-all duration-300">
      <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
        <Link href="/group-companies" className="flex items-center gap-3">
          <Image
            src="/roys logo.png"
            alt="Roys & Roys Logo"
            width={240}
            height={70}
            className="object-contain rounded-sm"
            style={{ filter: "none", mixBlendMode: "normal" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[16px] font-bold uppercase tracking-wider hover:text-[#009088] transition-colors"
              style={{ color: COLORS.black }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#protfolio"
          className="px-5 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:bg-[#009088]"
          style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
        >
          Our Projects
        </Link>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative py-16 lg:py-24 px-6 overflow-hidden bg-[#020f1f]">
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
            opacity: 0.28,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020f1f] via-[#020f1f]/90 to-[#0b2138]/70" />
        {/* Subtle glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#009088]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#B49438]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="mx-auto max-w-screen-xl relative z-10">
        <div className="max-w-3xl">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#B49438] text-xs font-black uppercase tracking-[0.25em] mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#009088] animate-pulse" />
            <span>GLOBAL HEALTHCARE ENGINEERING &amp; INSTITUTIONAL CONTRACTING</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-6 text-white">
            Delivering Excellence Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B49438] via-[#e6ca65] to-[#ffffff]">
              Global Trade, Innovation
            </span>{" "}
            &amp; Turnkey Healthcare Solutions
          </h1>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl text-slate-200 font-normal">
            ROYS &amp; ROYS International is a diversified enterprise specializing in turnkey hospital engineering, diagnostic radiology, modular cleanroom systems, government contracting, and global medical supply chains across 30+ nations.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/group-companies/roys-roys/what-we-do"
              className="px-7 py-4 rounded-xl bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore 15 Capabilities</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-7 py-4 rounded-xl border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#020f1f] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-xs flex items-center gap-2"
            >
              <span>Inquire Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 4 Hero KPI Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-white/15">
            {STATS.map((st) => (
              <div
                key={st.label}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-black text-[#B49438] mb-1">{st.value}</p>
                <p className="text-[11.5px] font-bold uppercase tracking-wider text-slate-300 whitespace-pre-line leading-tight">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBanner() {
  const [activeLogo, setActiveLogo] = useState(0);
  const visibleCount = 4;
  const maxIndex = Math.max(TRUSTED_LOGOS.length - visibleCount, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo((current) => (current === maxIndex ? 0 : current + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-6 md:py-8 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-[0.22em] text-[#113658] uppercase mb-5">
          TRUSTED BY LEADING ORGANIZATIONS
        </p>

        <div className="relative overflow-hidden rounded-[32px] border-0 shadow-none bg-transparent">
          <div
            className="flex gap-2 transition-transform duration-500 ease-in-out px-4 py-3"
            style={{ transform: `translateX(-${activeLogo * (100 / visibleCount)}%)` }}
          >
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex-shrink-0 rounded-[28px] bg-transparent border-0 p-3 flex items-center justify-center shadow-none"
                style={{ minWidth: `${100 / visibleCount}%` }}
              >
                {logo.img ? (
                  <div className="relative w-full h-24 sm:h-28 md:h-32">
                    <Image
                      src={logo.img}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="350px"
                    />
                  </div>
                ) : (
                  <span className="text-xl md:text-2xl font-black tracking-wider text-neutral-800">{logo.abbr}</span>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveLogo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeLogo === index ? "bg-[#113658] scale-125" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    { label: "Global Standards",     desc: "Ensuring compliance with FDA, CE, and GMP requirements." },
    { label: "Turnkey Solutions",    desc: "From design and planning to engineering and installation." },
    { label: "Technical Excellence", desc: "Delivered by seasoned engineers and medical technology experts." },
  ];

  return (
    <section id="about-us" className="py-14 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <span className="text-[14px] font-extrabold uppercase tracking-[0.25em] block mb-3" style={{ color: COLORS.primary }}>
            ABOUT US
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-5 leading-tight" style={{ color: COLORS.black }}>
            Delivering Excellence Through Global Trade, Innovation &amp; Strategic Partnerships
          </h2>
          <p className="text-[16px] leading-relaxed mb-4" style={{ color: COLORS.black }}>
            ROYS &amp; ROYS International is a diversified international business company and the flagship enterprise of ROYS Group of Companies, delivering world-class solutions across government contracting, international trade, healthcare, manufacturing, consultancy, and engineering.
          </p>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: COLORS.black }}>
            Backed by a global sourcing network and strategic partnerships, we provide end-to-end medical equipment, hospital infrastructure, veterinary healthcare, and turnkey project management compliant with international FDA, CE, and ISO standards.
          </p>

          <div className="space-y-3.5 mb-8">
            {highlights.map(({ label, desc }) => (
              <div key={label} className="flex gap-3.5">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <CheckCircle2 size={16} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h4 className="text-[14.5px] font-extrabold" style={{ color: COLORS.black }}>{label}</h4>
                  <p className="text-[13.5px]" style={{ color: COLORS.black }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/group-companies/roys-roys/about" className="w-fit">
              Read More About Us <ArrowRight size={15} />
            </PrimaryButton>
            <OutlineButton href="/group-companies/roys-roys/contact" className="w-fit" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
              Contact Us <ArrowRight size={15} />
            </OutlineButton>
          </div>
        </div>

        {/* Right: Image showcase */}
        <div className="flex-1 w-full">
          <div className="relative h-[420px] lg:h-[480px] rounded-[28px] overflow-hidden shadow-2xl border" style={{ borderColor: COLORS.border }}>
            <Image
              src="/roys_hospital_interior.png"
              alt="Hospital interior operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#113658]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-xl">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#B49438]">Institutional Excellence</p>
                <p className="text-base font-black text-white">Turnkey Healthcare &amp; Global Trade</p>
              </div>
              <div className="text-right pl-4 border-l border-white/20">
                <span className="text-2xl font-black text-[#B49438]">15+</span>
                <p className="text-[10px] text-white/80 uppercase font-bold tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  const cards = [
    {
      accentColor: COLORS.primary,
      icon: Target,
      eyebrow: "OUR VISION",
      title: "To Lead & Innovate",
      body: "To be a global leader in healthcare engineering and medical solutions, transforming public health and medical access through quality, advanced technology, and sustainable engineering values.",
    },
    {
      accentColor: COLORS.primary,
      icon: Award,
      eyebrow: "OUR MISSION",
      title: "To Support Globally",
      body: "To deliver world-class medical technologies and healthcare equipment, supported by exceptional engineering capabilities and international distribution frameworks to elevate modern clinical delivery.",
    },
  ];

  return (
    <section className="py-8 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-6">
        {cards.map(({ accentColor, icon: Icon, eyebrow, title, body }) => (
          <div
            key={eyebrow}
            className="p-8 lg:p-10 rounded-2xl border shadow-sm flex gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#113658] group cursor-pointer"
            style={{ backgroundColor: COLORS.white, borderColor: COLORS.border, borderLeft: `6px solid ${accentColor}` }}
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#113658] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            >
              <Icon size={28} className="transition-colors duration-300" />
            </div>
            <div>
              <span className="text-[11px] font-black tracking-widest uppercase mb-2 block text-[#B49438] group-hover:text-[#009088] transition-colors">
                {eyebrow}
              </span>
              <h3 className="text-[18px] font-extrabold mb-3 text-black group-hover:text-[#113658] transition-colors">
                {title}
              </h3>
              <p className="text-[15.5px] leading-relaxed text-slate-700">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TurnkeyLifecycleSection() {
  return (
    <section className="py-16 px-6 bg-[#f8fafc] border-t border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading
          eyebrow="TURNKEY ENGINEERING LIFECYCLE"
          title="How We Deliver Healthcare Infrastructure"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {LIFECYCLE_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#113658] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#113658]/20 group-hover:text-[#B49438] transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#113658]/10 text-[#113658] group-hover:bg-[#113658] group-hover:text-white transition-all duration-300 flex items-center justify-center group-hover:scale-110 shadow-xs">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h4 className="text-[17px] font-black text-[#113658] group-hover:text-[#009088] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-slate-600 mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10.5px] font-extrabold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-12 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="WHAT WE DO" title="Our Service Offerings" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {OFFERINGS_LIST.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/group-companies/roys-roys/what-we-do/${item.slug}`}
                className="rounded-lg border bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex items-center justify-between no-underline"
                style={{ borderColor: COLORS.border }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#113658] group-hover:text-white shrink-0"
                    style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B49438] block mb-0.5">
                      Service #{item.number}
                    </span>
                    <p className="text-[14px] font-bold leading-snug group-hover:text-[#113658] transition-colors" style={{ color: COLORS.black }}>
                      {item.title}
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-neutral-400 group-hover:text-[#B49438] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <PrimaryButton href="/group-companies/roys-roys/what-we-do">
            View All 15 Services &amp; Capabilities <ArrowRight size={15} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function CoreBusinessSection() {
  return (
    <section id="solutions" className="py-12 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="CORE ACTIVITIES" title="Core Business Areas" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {CORE_BUSINESS_AREAS.map(({ icon, label, slug }) => (
            <IconCard
              key={label}
              icon={icon}
              label={label}
              href={`/group-companies/roys-roys/services/${slug}`}
              iconSize={20}
              containerSize="w-12 h-12"
            />
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton href="/group-companies/roys-roys/services">
            Explore All Healthcare Solutions <ArrowRight size={15} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ activeTab, setActiveTab, productIndex, onSlideLeft, onSlideRight }) {
  const activeCategory = PRODUCTS_TABS[activeTab];
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-12 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="PORTFOLIO &amp; CAPABILITIES" title="Products &amp; Solutions" />

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2.5 mb-8 justify-center border-b pb-4" style={{ borderColor: COLORS.border }}>
          {PRODUCTS_TABS.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-xs"
                style={{
                  backgroundColor: isActive ? COLORS.primary : "#f8fafc",
                  color: isActive ? COLORS.white : "#334155",
                  border: isActive ? `1.5px solid ${COLORS.primary}` : `1.5px solid ${COLORS.border}`,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Carousel with Navigation Arrows */}
        <div className="relative mb-10">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between absolute -top-12 right-2 gap-2 z-10 hidden sm:flex">
            <button
              onClick={onSlideLeft}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 bg-white hover:bg-[#113658] hover:text-white cursor-pointer shadow-xs"
              style={{ borderColor: COLORS.border, color: COLORS.primary }}
              aria-label="Previous Products"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onSlideRight}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 bg-white hover:bg-[#113658] hover:text-white cursor-pointer shadow-xs"
              style={{ borderColor: COLORS.border, color: COLORS.primary }}
              aria-label="Next Products"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="w-full overflow-hidden px-2 py-2">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${productIndex * 300}px)`, width: "max-content" }}
            >
              {filteredProducts.map((product, pIdx) => (
                <div
                  key={product.name}
                  className="w-[270px] sm:w-[290px] rounded-2xl overflow-hidden border bg-white flex-shrink-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group flex flex-col justify-between"
                  style={{ borderColor: COLORS.border, boxShadow: "0 4px 18px rgba(0,0,0,0.05)" }}
                >
                  <div>
                    <div className="relative h-[180px] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                        sizes="290px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#113658]/90 text-[#B49438] text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                        Item 0{pIdx + 1}
                      </span>
                    </div>
                    <div className="p-5" style={{ borderTop: `3px solid ${COLORS.primary}` }}>
                      <h4 className="text-[15.5px] font-black mb-2 text-[#113658] group-hover:text-[#009088] transition-colors leading-snug">
                        {product.name}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-slate-600">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <Link
                      href="/group-companies/roys-roys/contact"
                      className="w-full py-2.5 rounded-lg bg-[#f1f5f9] group-hover:bg-[#113658] group-hover:text-white text-[#113658] text-[11.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      <span>Inquire Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryButton href="/group-companies/roys-roys/products">
            Browse Full Product Portfolio <ArrowRight size={15} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="MARKET SECTORS" title="Industries We Serve" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 mb-8">
          {INDUSTRIES.map(({ icon: Icon, label, slug }) => (
            <Link
              key={label}
              href={`/group-companies/roys-roys/industries/${slug}`}
              className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer no-underline select-none h-full"
              style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.color = '#ffffff';
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.color = '#ffffff';
                if (e.currentTarget.children[0]) {
                  e.currentTarget.children[0].style.backgroundColor = 'rgba(255,255,255,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                const span = e.currentTarget.querySelector('span');
                if (span) span.style.color = COLORS.black;
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.color = COLORS.primary;
                if (e.currentTarget.children[0]) {
                  e.currentTarget.children[0].style.backgroundColor = `${COLORS.primary}10`;
                }
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
                style={{ backgroundColor: `${COLORS.primary}10` }}
              >
                <Icon size={39} style={{ color: COLORS.primary }} className="transition-colors duration-300" />
              </div>
              <span className="text-[15px] font-black whitespace-pre-line leading-normal transition-colors duration-300" style={{ color: COLORS.black }}>
                {label}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton href="/group-companies/roys-roys/industries">
            Explore All Industry Sectors <ArrowRight size={15} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-8 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="COMPETITIVE VALUE" title="Why Choose Roys & Roys International?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 border border-[#e2e8f0] rounded-lg flex gap-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#113658]"
              style={{ backgroundColor: COLORS.white }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.primary }}>
                <Icon size={22} style={{ color: COLORS.white }} />
              </div>
              <div>
                <h4 className="text-[15.5px] font-extrabold mb-1.5" style={{ color: COLORS.black }}>{title}</h4>
                <p className="text-[14px] leading-relaxed" style={{ color: COLORS.black }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickEstimatorSection() {
  const [selectedSector, setSelectedSector] = useState(ESTIMATOR_OPTIONS.sectors[0].id);
  const [selectedSolution, setSelectedSolution] = useState(ESTIMATOR_OPTIONS.solutions[0].id);

  const currentSector = ESTIMATOR_OPTIONS.sectors.find(s => s.id === selectedSector);
  const currentSolution = ESTIMATOR_OPTIONS.solutions.find(s => s.id === selectedSolution);

  return (
    <section className="py-16 px-6 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009088]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B49438]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-screen-xl relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-[12px] font-black uppercase tracking-[0.25em] text-[#B49438] block mb-3">
            INTERACTIVE PROJECT ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Configure Your Healthcare &amp; Institutional Solution
          </h2>
          <p className="text-slate-300 text-[15.5px] leading-relaxed">
            Select your organization sector and target technical requirements to get an instant scope breakdown and international compliance specifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Step 1 & 2 Selectors */}
          <div className="lg:col-span-6 space-y-6">
            {/* Sector Selector */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#B49438] block mb-3">
                Step 1: Select Your Organization Sector
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {ESTIMATOR_OPTIONS.sectors.map((sec) => {
                  const Icon = sec.icon;
                  const active = sec.id === selectedSector;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSelectedSector(sec.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-[#113658] border-[#B49438] text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon size={18} className={active ? "text-[#B49438]" : "text-slate-400"} />
                      <span className="text-[13px] font-bold leading-tight">{sec.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Solution Selector */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#B49438] block mb-3">
                Step 2: Select Technical Scope &amp; Solution Area
              </label>
              <div className="space-y-2">
                {ESTIMATOR_OPTIONS.solutions.map((sol) => {
                  const active = sol.id === selectedSolution;
                  return (
                    <button
                      key={sol.id}
                      type="button"
                      onClick={() => setSelectedSolution(sol.id)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-[#113658] border-[#009088] text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="text-[14px] font-bold">{sol.name}</span>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${active ? "bg-[#009088] text-white" : "bg-white/10 text-slate-400"}`}>
                        {active ? "Active" : "Select"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#113658] to-[#0b2138] border border-white/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B49438] block mb-1">
                    PROJECT BLUEPRINT • {currentSector?.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {currentSolution?.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#B49438]/20 flex items-center justify-center text-[#B49438]">
                  <Activity size={24} />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-300 mb-2">
                  Recommended Equipment &amp; Technical Scope:
                </p>
                <p className="text-[15px] text-white/90 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/10">
                  {currentSolution?.scope}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#B49438] mb-1">
                    Applicable Compliance Standards:
                  </p>
                  <p className="text-[12.5px] font-bold text-slate-200">
                    {currentSolution?.standards}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#009088] mb-1">
                    Estimated Delivery &amp; Handover:
                  </p>
                  <p className="text-[12.5px] font-bold text-slate-200">
                    {currentSolution?.timeline}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="w-full py-4 rounded-xl bg-[#B49438] hover:bg-[#009088] text-white text-[13px] font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <span>Request Official Commercial Quotation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesAndCorporateSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedValue = VALUES[selectedIndex];

  return (
    <section className="py-12 px-6 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-start">

        {/* LEFT: Selected Value box + Value Cards below */}
        <div className="lg:col-span-5">
          {/* Selected Value box - top left */}
          <div className="border rounded-lg p-5 shadow-sm mb-6" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
            <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-neutral-500">Selected Value</span>
            <h4 className="text-xl font-extrabold mb-2" style={{ color: COLORS.black }}>{selectedValue.label}</h4>
            <p className="text-[15px] leading-relaxed" style={{ color: COLORS.black }}>{selectedValue.desc}</p>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            WHAT WE STAND FOR
          </span>
          <h3 className="text-2xl font-extrabold mb-6 uppercase" style={{ color: COLORS.black }}>Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {VALUES.map(({ icon: Icon, label }, idx) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm transition-all duration-300 bg-white"
                style={{ borderColor: selectedIndex === idx ? COLORS.primary : COLORS.border }}
              >
                <Icon size={20} className="mb-3" style={{ color: COLORS.primary }} />
                <span className="text-[11.5px] font-extrabold leading-tight text-neutral-800 whitespace-pre-line">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Corporate Info only */}
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLORS.primary }}>
            OFFICIAL DETAILS
          </span>
          <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLORS.black }}>Corporate Info</h3>

          <div className="border rounded-lg p-6 shadow-sm" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
            {CORPORATE_INFO.map(({ label, val }, idx) => (
              <div
                key={label}
                className={`pb-3.5 mb-3.5 ${idx < CORPORATE_INFO.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: COLORS.border }}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider block mb-1 text-neutral-500">{label}</span>
                <span className="text-[14.5px] font-extrabold" style={{ color: COLORS.black }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill in your name, email, and message."); return; }
    setError("");
    try {
      const res = await fetch("/group-companies/roys-roys/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Error sending message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 px-6"
      style={{ backgroundColor: COLORS.white, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}
    >
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[45%]">
        <div className="relative h-full">
          <Image
            src="/roysandroys contact.png"
            alt="Roys & Roys contact image"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/75 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="max-w-2xl">
            <span className="text-[13px] font-black uppercase tracking-[0.25em] block mb-3" style={{ color: COLORS.primary }}>
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 leading-tight" style={{ color: COLORS.black }}>
              Let&apos;s Build Stronger Partnerships Together
            </h2>
            <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-relaxed max-w-3xl font-normal" style={{ color: COLORS.black }}>
              Whether you&apos;re looking for a trusted partner in government contracting, international trade, healthcare solutions, manufacturing, or consultancy, ROYS &amp; ROYS International is ready to support your business with reliable, innovative, and high-quality solutions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mt-10">
              {[
                { title: "Trusted Partner", description: "Reliable collaboration you can count on." },
                { title: "Quality Solutions", description: "High-quality services built for your success." },
                { title: "Global Reach", description: "International expertise with local understanding." },
                { title: "Dedicated Support", description: "Our team is here to assist you always." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-[16px] font-black mb-2" style={{ color: COLORS.primary }}>{item.title}</h4>
                  <p className="text-[15px] leading-relaxed text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: COLORS.black }}>
                  Send Us a Message
                </h3>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-slate-700">
                  Share your requirements and our team will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#E6F4F1] text-[#113658] mx-auto flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: COLORS.black }}>Thank You!</h3>
                  <p className="text-base leading-relaxed" style={{ color: COLORS.black }}>
                    Your message has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                    />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  />
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  >
                    <option value="">Select Service</option>
                    {OFFERINGS_LIST.map((item) => (
                      <option key={item.slug} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] sm:text-[16px] outline-none transition focus:border-[#113658] focus:ring-2 focus:ring-[#113658]/20"
                  />
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#113658] px-6 py-4 text-[15px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#0d2c4f] shadow-lg cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// ─── Page Component ───────────────────────────────────────────────────────────

export default function RoysRoysPage() {
  const [activeTab, setActiveTab]       = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  // Page-scoped body class for theme isolation
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => sec.classList.add("section-animate"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section-fade");
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.body.classList.remove("roys-roys-theme");
      observer.disconnect();
    };
  }, []);

  const activeCategory = PRODUCTS_TABS[activeTab];
  const filteredProductsCount = PRODUCTS.filter(p => p.category === activeCategory).length;

  const handleSlideLeft  = () => setProductIndex((prev) => (prev === 0 ? Math.max(0, filteredProductsCount - 1) : prev - 1));
  const handleSlideRight = () => setProductIndex((prev) => (prev === Math.max(0, filteredProductsCount - 1) ? 0 : prev + 1));

  const handleTabChange = (idx) => {
    setActiveTab(idx);
    setProductIndex(0);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.black }}>
      <style>{`
        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(55px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-animate {
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-section-fade {
          animation: sectionFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <RoysNavbar active="Home" />
      <HeroSection />
      <TrustedBanner />
      <AboutSection />
      <VisionMissionSection />
      <TurnkeyLifecycleSection />
      <WhatWeDoSection />
      <CoreBusinessSection />
      <ProductsSection
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        productIndex={productIndex}
        onSlideLeft={handleSlideLeft}
        onSlideRight={handleSlideRight}
      />
      <QuickEstimatorSection />
      <IndustriesSection />
      <WhyChooseSection />
      <ValuesAndCorporateSection />
      <CtaSection />
      <RoysFooter />
    </main>
  );
}
