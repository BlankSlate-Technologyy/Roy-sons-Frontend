"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  HeartPulse,
  BriefcaseMedical,
  FlaskConical,
  Microscope,
  Pill,
  Globe,
  ShieldCheck,
  Target,
  Award,
  Lightbulb,
  Leaf,
  Users,
  Star,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";

// Define the exact color scheme constants as requested by the user
const COLOR_SCHEME = {
  navyDark: "#031a33",       // Navbar and Hero main background
  navyLight: "#0f253e",      // Lighter navy shades
  tealPrimary: "#00a299",    // Primary teal/turquoise (buttons, highlights, active states)
  tealHover: "#009088",      // Hover state for teal
  skyAccent: "#38bdf8",      // Bright blue/sky accent for subtitles
  bgLight: "#ffffff",        // General white background sections
  bgMuted: "#f4f7fa",        // Very light grey sections
  textDark: "#1a2744",       // Normal charcoal text for light backgrounds
  textMuted: "#475569",      // Secondary grey text
  textLight: "#ffffff",      // White text
  borderLight: "#e2e8f0",    // Soft borders
};

const HERO_BACKGROUND_IMAGES = [
  "/roys_hospital_interior.png",
  "/roys_mri_scanner.png",
  "/roys_ct_scan.png",
  "/roys_ultrasound.png",
  "/slide-1.jpeg"
];

const STATS = [
  { value: "15+", label: "Years of\nExcellence" },
  { value: "250+", label: "Projects\nDelivered" },
  { value: "30+", label: "Countries\nServed" },
  { value: "1000+", label: "Products &\nSolutions" },
];

const TRUSTED_LOGOS = [
  { name: "World Health Organization", abbr: "WHO" },
  { name: "UNICEF", abbr: "UNICEF" },
  { name: "Pakistan Army", abbr: "Pak Army" },
  { name: "Siemens Healthineers", abbr: "Siemens" },
  { name: "Philips Healthcare", abbr: "PHILIPS" },
  { name: "GE Healthcare", abbr: "GE Health" },
  { name: "Becton Dickinson", abbr: "BD" },
];

const CORE_BUSINESS_AREAS = [
  { icon: HeartPulse, label: "Healthcare\nTechnologies" },
  { icon: BriefcaseMedical, label: "Hospital\nEngineering" },
  { icon: FlaskConical, label: "Clean Room\n& HVAC" },
  { icon: Microscope, label: "Laboratory\nSolutions" },
  { icon: Pill, label: "Pharmaceutical\nConsultancy" },
  { icon: Globe, label: "International\nProcurement" },
  { icon: ShieldCheck, label: "Biomedical\nServices" },
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
  { name: "X-Ray Systems", desc: "Advanced digital radiography systems for accurate imaging.", img: "/roys_hospital_interior.png" },
  { name: "Ultrasound Machines", desc: "High-performance advanced ultrasound for all applications.", img: "/roys_ultrasound.png" },
  { name: "CT Scan Machines", desc: "Advanced CT systems for precise diagnostics.", img: "/roys_ct_scan.png" },
  { name: "MRI Systems", desc: "High-field MRI for detailed medical imaging.", img: "/roys_mri_scanner.png" },
  { name: "Mammography Systems", desc: "Digital mammography for early detection.", img: "/roys_hospital_interior.png" },
];

const INDUSTRIES = [
  { icon: Building2, label: "Hospitals" },
  { icon: ShieldCheck, label: "Government" },
  { icon: Star, label: "Military\nHealthcare" },
  { icon: Award, label: "Universities" },
  { icon: Microscope, label: "Research\nCenters" },
  { icon: Users, label: "Private\nClinics" },
  { icon: HeartPulse, label: "NGOs" },
  { icon: FlaskConical, label: "Diagnostic\nLabs" },
  { icon: Pill, label: "Pharmaceutical\nIndustry" },
];

const WHY_CHOOSE = [
  { icon: Globe, title: "Global Network", desc: "Access to premium global partners and suppliers." },
  { icon: Award, title: "Engineering Excellence", desc: "Expert engineers and consultants on every project." },
  { icon: ShieldCheck, title: "Regulatory Expertise", desc: "Compliance with international standards." },
  { icon: Target, title: "Turnkey Solutions", desc: "End-to-end project implementation." },
  { icon: HeartPulse, title: "Technical Support", desc: "24/7 after sales support." },
  { icon: CheckCircle2, title: "Quality Assurance", desc: "Certified quality management." },
];

const VALUES = [
  { icon: Lightbulb, label: "Integrity", desc: "We adhere strictly to honesty and moral standards." },
  { icon: Star, label: "Innovation", desc: "Constantly upgrading medical technologies." },
  { icon: Award, label: "Excellence", desc: "Aiming for perfection in every delivery." },
  { icon: Leaf, label: "Sustainability", desc: "Designing long-lasting and eco-conscious engineering." },
  { icon: Users, label: "Customer Commitment", desc: "Full post-sales support and partnership." },
];

export default function RoysRoysPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % HERO_BACKGROUND_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Toggle roys-roys-theme on document.body during page mounting
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  const slideLeft = () => {
    setProductIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setProductIndex((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLOR_SCHEME.bgLight, color: COLOR_SCHEME.textDark }}>
      
      {/* ── Navbar ── */}
      <div className="sticky top-0 z-50 bg-white border-b border-neutral-150 shadow-sm transition-all duration-300">
        <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
          <Link href="/group-companies" className="flex items-center gap-3">
            <Image 
              src="/roysand roys.jpeg" 
              alt="Roys & Roys Logo" 
              width={180} 
              height={50} 
              className="object-contain rounded-sm" 
              style={{ filter: "none", mixBlendMode: "normal" }}
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "About Us", "Solutions", "Products", "Industries", "Projects", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={item === "Contact" ? "/contact" : `#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-[12.5px] font-bold uppercase tracking-wider transition-colors hover:text-[#00a299]"
                style={{ color: COLOR_SCHEME.textDark }}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link 
            href="/contact" 
            className="px-5 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-wider transition-all hover:bg-[#009088]"
            style={{ backgroundColor: COLOR_SCHEME.tealPrimary, color: COLOR_SCHEME.textLight }}
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section id="home" className="relative py-20 lg:py-28 px-6 overflow-hidden bg-transparent">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {HERO_BACKGROUND_IMAGES.map((img, idx) => (
            <div
              key={img}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: idx === bgImageIndex ? 0.35 : 0,
              }}
            />
          ))}
          {/* Subtle gradient overlay to blend into a premium deep dark look and maximize readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020d1c]/95 via-[#031429]/90 to-[#072445]/85" />
        </div>
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <div className="flex-1">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] mb-4" style={{ color: COLOR_SCHEME.skyAccent }}>
              ROYS & ROYS INTERNATIONAL
            </p>
            <h1 className="text-3xl lg:text-5.5xl font-black leading-[1.08] tracking-tight mb-6" style={{ color: COLOR_SCHEME.textLight }}>
              Engineering Excellence.<br />
              Healthcare Innovation.<br />
              <span style={{ color: COLOR_SCHEME.skyAccent }}>Global Trade.</span>
            </h1>
            <p className="text-[14px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              ROYS & ROYS International is the flagship company of ROYS Group of Companies, delivering integrated healthcare technologies, hospital engineering, laboratory solutions, medical equipment, pharmaceutical consultancy, and international procurement services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#solutions" className="px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: COLOR_SCHEME.tealPrimary, color: COLOR_SCHEME.textLight }}>
                Explore Solutions <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider border flex items-center gap-2 hover:bg-white/5 transition-colors" style={{ borderColor: COLOR_SCHEME.textLight, color: COLOR_SCHEME.textLight }}>
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="relative w-full lg:w-[480px] h-[280px] lg:h-[340px] rounded-xl overflow-hidden mb-6 shadow-2xl" style={{ border: "1.5px solid rgba(255, 255, 255, 0.1)" }}>
              <Image src="/roys_hospital_interior.png" alt="Roys Hospital Systems" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-[480px]">
              {STATS.map((s) => (
                <div key={s.value} className="p-3.5 text-center rounded-lg border" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-xl lg:text-2xl font-black" style={{ color: COLOR_SCHEME.skyAccent }}>{s.value}</p>
                  <p className="text-[10px] font-bold mt-1 whitespace-pre-line leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted Brands Banner ── */}
      <section className="py-10 px-6 border-b" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight }}>
        <div className="mx-auto max-w-screen-xl">
          <p className="text-center text-[10px] font-black tracking-[0.24em] text-neutral-450 uppercase mb-8">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-14">
            {TRUSTED_LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center px-4 py-2 border rounded-sm min-w-[95px] max-w-[150px]" style={{ borderColor: COLOR_SCHEME.borderLight, backgroundColor: COLOR_SCHEME.bgMuted }}>
                <span className="text-[12.5px] font-black tracking-wider text-neutral-800">{logo.abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about-us" className="py-20 px-6" style={{ backgroundColor: COLOR_SCHEME.bgLight }}>
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1 max-w-lg">
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              ABOUT US
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight" style={{ color: COLOR_SCHEME.textDark }}>
              Building the Future of Healthcare
            </h2>
            <p className="text-[14px] leading-relaxed mb-6 font-normal" style={{ color: COLOR_SCHEME.textMuted }}>
              We provide end-to-end solutions in healthcare infrastructure, medical equipment, laboratory technologies, and pharmaceutical consultancy. Our commitment is to innovation, quality, and global regulatory compliance.
            </p>
            <div className="space-y-4.5 mb-8">
              {[
                { label: "Global Standards", desc: "Ensuring compliance with FDA, CE, and GMP requirements." },
                { label: "Turnkey Solutions", desc: "From design and planning to engineering and installation." },
                { label: "Technical Excellence", desc: "Delivered by seasoned engineers and medical technology experts." }
              ].map((item) => (
                <div key={item.label} className="flex gap-3.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: `${COLOR_SCHEME.tealPrimary}15` }}>
                    <CheckCircle2 size={15} style={{ color: COLOR_SCHEME.tealPrimary }} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-extrabold" style={{ color: COLOR_SCHEME.textDark }}>{item.label}</h4>
                    <p className="text-[12px]" style={{ color: COLOR_SCHEME.textMuted }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider flex items-center gap-2 hover:opacity-95 transition-opacity" style={{ backgroundColor: COLOR_SCHEME.tealPrimary, color: COLOR_SCHEME.textLight, width: "fit-content" }}>
              Learn More About Us <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <div className="relative col-span-2 h-[240px] rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: COLOR_SCHEME.borderLight }}>
              <Image src="/roys_hospital_interior.png" alt="Hospital interior operations" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: COLOR_SCHEME.borderLight }}>
              <Image src="/roys_mri_scanner.png" alt="MRI Scanning room setup" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: COLOR_SCHEME.borderLight }}>
              <Image src="/roys_ct_scan.png" alt="CT Scanner system installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-16 px-6" style={{ backgroundColor: COLOR_SCHEME.bgMuted }}>
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-8">
          <div className="p-8 lg:p-10 rounded-lg border shadow-sm flex gap-5" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight, borderLeft: `5px solid ${COLOR_SCHEME.tealPrimary}` }}>
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLOR_SCHEME.tealPrimary}15` }}>
              <Target size={22} style={{ color: COLOR_SCHEME.tealPrimary }} />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: COLOR_SCHEME.tealPrimary }}>OUR VISION</span>
              <h3 className="text-[16px] font-extrabold mb-3" style={{ color: COLOR_SCHEME.textDark }}>To Lead & Innovate</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: COLOR_SCHEME.textMuted }}>
                To be a global leader in healthcare engineering and medical solutions, transforming public health and medical access through quality, advanced technology, and sustainable engineering values.
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-10 rounded-lg border shadow-sm flex gap-5" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight, borderLeft: `5px solid ${COLOR_SCHEME.navyDark}` }}>
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLOR_SCHEME.navyDark}15` }}>
              <Award size={22} style={{ color: COLOR_SCHEME.navyDark }} />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase mb-2 block" style={{ color: COLOR_SCHEME.navyDark }}>OUR MISSION</span>
              <h3 className="text-[16px] font-extrabold mb-3" style={{ color: COLOR_SCHEME.textDark }}>To Support Globally</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: COLOR_SCHEME.textMuted }}>
                To deliver world-class medical technologies and healthcare equipment, supported by exceptional engineering capabilities and international distribution frameworks to elevate modern clinical delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Business Areas ── */}
      <section id="solutions" className="py-20 px-6" style={{ backgroundColor: COLOR_SCHEME.bgLight }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              CORE ACTIVITIES
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase" style={{ color: COLOR_SCHEME.textDark }}>
              Core Business Areas
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full" style={{ backgroundColor: COLOR_SCHEME.tealPrimary }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {CORE_BUSINESS_AREAS.map(({ icon: Icon, label }) => (
              <div key={label} className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-sm hover:translate-y-[-2px] transition-transform" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${COLOR_SCHEME.tealPrimary}10` }}>
                  <Icon size={20} style={{ color: COLOR_SCHEME.tealPrimary }} />
                </div>
                <span className="text-[12px] font-extrabold leading-snug whitespace-pre-line" style={{ color: COLOR_SCHEME.textDark }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products & Solutions Carousel ── */}
      <section id="products" className="py-20 px-6" style={{ backgroundColor: COLOR_SCHEME.navyDark }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-3" style={{ color: COLOR_SCHEME.skyAccent }}>
              PORTFOLIO
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-white">
              Products & Solutions
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full" style={{ backgroundColor: COLOR_SCHEME.tealPrimary }} />
          </div>

          {/* Tabs bar */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center border-b pb-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {PRODUCTS_TABS.map((tab, idx) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(idx)}
                className="px-5 py-2.5 text-[11.5px] font-extrabold uppercase tracking-wider rounded-sm transition-all"
                style={{ 
                  backgroundColor: idx === activeTab ? COLOR_SCHEME.tealPrimary : "rgba(255,255,255,0.03)", 
                  color: COLOR_SCHEME.textLight,
                  border: idx === activeTab ? "none" : "1px solid rgba(255,255,255,0.05)"
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Slider Layout */}
          <div className="relative flex items-center justify-center">
            <button onClick={slideLeft} className="absolute left-0 lg:left-[-20px] z-10 w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition-opacity" style={{ backgroundColor: COLOR_SCHEME.navyDark, borderColor: "rgba(255,255,255,0.15)" }}>
              <ChevronLeft size={20} style={{ color: COLOR_SCHEME.textLight }} />
            </button>

            <div className="w-full overflow-hidden px-10">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${productIndex * 240}px)`, width: `${PRODUCTS.length * 280}px` }}
              >
                {PRODUCTS.map((prod, index) => (
                  <div 
                    key={prod.name} 
                    className="w-[240px] rounded-lg overflow-hidden border shadow-lg flex-shrink-0"
                    style={{ backgroundColor: COLOR_SCHEME.navyLight, borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="relative h-[160px] w-full">
                      <Image src={prod.img} alt={prod.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[13.5px] font-extrabold mb-1" style={{ color: COLOR_SCHEME.textLight }}>{prod.name}</h4>
                      <p className="text-[11.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{prod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={slideRight} className="absolute right-0 lg:right-[-20px] z-10 w-10 h-10 rounded-full flex items-center justify-center border hover:opacity-80 transition-opacity" style={{ backgroundColor: COLOR_SCHEME.navyDark, borderColor: "rgba(255,255,255,0.15)" }}>
              <ChevronRight size={20} style={{ color: COLOR_SCHEME.textLight }} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section id="industries" className="py-20 px-6" style={{ backgroundColor: COLOR_SCHEME.bgLight }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              MARKET SECTORS
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase" style={{ color: COLOR_SCHEME.textDark }}>
              Industries We Serve
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full" style={{ backgroundColor: COLOR_SCHEME.tealPrimary }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <div key={label} className="p-4 border rounded-lg text-center flex flex-col items-center shadow-sm hover:translate-y-[-2px] transition-transform" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${COLOR_SCHEME.tealPrimary}10` }}>
                  <Icon size={18} style={{ color: COLOR_SCHEME.tealPrimary }} />
                </div>
                <span className="text-[11px] font-extrabold whitespace-pre-line leading-normal" style={{ color: COLOR_SCHEME.textDark }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── why Choose ── */}
      <section className="py-20 px-6" style={{ backgroundColor: COLOR_SCHEME.bgMuted }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              COMPETITIVE VALUE
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase" style={{ color: COLOR_SCHEME.textDark }}>
              Why Choose Roys & Roys International?
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full" style={{ backgroundColor: COLOR_SCHEME.tealPrimary }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 border rounded-lg flex gap-5 shadow-sm" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLOR_SCHEME.tealPrimary }}>
                  <Icon size={22} style={{ color: COLOR_SCHEME.textLight }} />
                </div>
                <div>
                  <h4 className="text-[14px] font-extrabold mb-1.5" style={{ color: COLOR_SCHEME.textDark }}>{title}</h4>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: COLOR_SCHEME.textMuted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values & Corporate Info ── */}
      <section className="py-20 px-6 border-b" style={{ backgroundColor: COLOR_SCHEME.bgLight, borderColor: COLOR_SCHEME.borderLight }}>
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Values (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              WHAT WE STAND FOR
            </span>
            <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLOR_SCHEME.textDark }}>
              Our Values
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {VALUES.map(({ icon: Icon, label }) => (
                <div key={label} className="p-5 border rounded-lg text-center flex flex-col items-center justify-center shadow-xs" style={{ backgroundColor: COLOR_SCHEME.bgMuted, borderColor: COLOR_SCHEME.borderLight }}>
                  <Icon size={20} className="mb-3" style={{ color: COLOR_SCHEME.tealPrimary }} />
                  <span className="text-[11px] font-extrabold leading-tight text-neutral-800">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Info Table (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-3" style={{ color: COLOR_SCHEME.tealPrimary }}>
              OFFICIAL DETAILS
            </span>
            <h3 className="text-2xl font-extrabold mb-8 uppercase" style={{ color: COLOR_SCHEME.textDark }}>
              Corporate Info
            </h3>
            <div className="border rounded-lg p-6 shadow-sm" style={{ backgroundColor: COLOR_SCHEME.bgMuted, borderColor: COLOR_SCHEME.borderLight }}>
              {[
                { label: "Company Name", val: "ROYS & ROYS International (Pvt.) Ltd." },
                { label: "Industry Sector", val: "Healthcare Engineering & Medical Technologies" },
                { label: "Corporate Link", val: "ROYS Group of Companies, Pakistan" },
                { label: "Registered Address", val: "Office # 41-A, 4th Floor, Executive Tower, DHA Phase 2, Islamabad, Pakistan" }
              ].map((item, idx) => (
                <div key={item.label} className={`pb-3.5 mb-3.5 ${idx !== 3 ? "border-b" : ""}`} style={{ borderColor: COLOR_SCHEME.borderLight }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider block mb-1 text-neutral-450">{item.label}</span>
                  <span className="text-[13px] font-extrabold" style={{ color: COLOR_SCHEME.textDark }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Call To Action Banner ── */}
      <section className="relative py-20 px-6 overflow-hidden bg-transparent">
        {/* Background Image structure */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/slide-1.jpeg')", opacity: 0.22 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020d1c] via-[#031429]/95 to-[#072445]/90" />
        </div>
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-10 items-center justify-between relative z-10">
          <div>
            <h2 className="text-2xl lg:text-3.5xl font-black mb-4 leading-tight" style={{ color: COLOR_SCHEME.textLight }}>
              Let&apos;s Build a Healthier, Smarter,<br />and More Sustainable Future Together.
            </h2>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: COLOR_SCHEME.skyAccent }} />
                <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>+92 51 2740177</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: COLOR_SCHEME.skyAccent }} />
                <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>info@roysinternational.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: COLOR_SCHEME.skyAccent }} />
                <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>DHA Phase II, Islamabad</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
            <Link href="/contact" className="px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider text-center transition-opacity hover:opacity-90 flex-1 lg:flex-none" style={{ backgroundColor: COLOR_SCHEME.tealPrimary, color: COLOR_SCHEME.textLight }}>
              Request Consultation
            </Link>
            <Link href="/contact" className="px-6 py-3.5 rounded-sm text-[12.5px] font-extrabold uppercase tracking-wider text-center transition-all hover:bg-white/5 border flex-1 lg:flex-none" style={{ borderColor: COLOR_SCHEME.textLight, color: COLOR_SCHEME.textLight }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer Branding Details ── */}
      <footer className="relative py-14 px-6 overflow-hidden bg-[#020f1f]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {/* Background Image structure */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/roys_hospital_interior.png')", opacity: 0.06 }}
          />
          <div className="absolute inset-0 bg-[#020f1f]/92" />
        </div>
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start relative z-10">
          
          <div className="lg:col-span-4 max-w-sm">
            <Image 
              src="/roysand roys.jpeg" 
              alt="Roys & Roys Logo" 
              width={180} 
              height={50} 
              className="object-contain mb-5 rounded-sm" 
              style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)", mixBlendMode: "screen" }}
            />
            <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              Delivering specialized contracting excellence across healthcare systems, international procurement networks, technology infrastructure, and heavy engineering sectors.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <Icon size={14} style={{ color: "rgba(255,255,255,0.6)" }} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-wider mb-5" style={{ color: COLOR_SCHEME.textLight }}>Company</h5>
            <ul className="space-y-2.5">
              {["About Us", "Our Values", "Careers", "News & Media"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[12.5px] hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2.5">
            <h5 className="text-[11px] font-black uppercase tracking-wider mb-5" style={{ color: COLOR_SCHEME.textLight }}>Solutions</h5>
            <ul className="space-y-2.5">
              {["Healthcare Technologies", "Hospital Engineering", "Laboratory Solutions", "Clean Room Systems"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[12.5px] hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1.5">
            <h5 className="text-[11px] font-black uppercase tracking-wider mb-5" style={{ color: COLOR_SCHEME.textLight }}>Industries</h5>
            <ul className="space-y-2.5">
              {["Hospitals", "Government", "Pharmaceutical", "Research Centers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[12.5px] hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-wider mb-5" style={{ color: COLOR_SCHEME.textLight }}>Contact Us</h5>
            <div className="space-y-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              <p className="text-[12px] leading-relaxed flex items-start gap-2.5">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: COLOR_SCHEME.skyAccent }} />
                <span>Office # 41-A, 4th Floor, Executive Tower, DHA Phase 2, Islamabad.</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0" style={{ color: COLOR_SCHEME.skyAccent }} />
                <span>+92 51 2740177</span>
              </p>
              <p className="text-[12px] flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0" style={{ color: COLOR_SCHEME.skyAccent }} />
                <span>info@roysinternational.com</span>
              </p>
            </div>
          </div>

        </div>

        <div className="mx-auto max-w-screen-xl mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[11.5px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            &copy; 2026 ROYS & ROYS International. All Rights Reserved. Member of ROYS Group.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11.5px] hover:underline" style={{ color: "rgba(255,255,255,0.3)" }}>Privacy Policy</a>
            <a href="#" className="text-[11.5px] hover:underline" style={{ color: "rgba(255,255,255,0.3)" }}>Terms of Service</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
