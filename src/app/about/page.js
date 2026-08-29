"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  Star, 
  Lightbulb, 
  User, 
  Layers, 
  Clock, 
  ChevronRight,
  Lock,
  ArrowRight,
  Building2,
  Globe,
  CheckCircle2,
  Briefcase,
  Target,
  DollarSign,
  HeartPulse,
  BriefcaseMedical,
  Pill,
  PawPrint,
  Monitor,
  Zap,
  Sun,
  PlugZap,
  Shield,
  Sprout,
  Gem,
  Utensils,
  Award,
  MessageSquare,
  HardHat,
  Landmark,
  GraduationCap,
  Hospital,
  Microscope,
  MapPin,
  Network,
  Linkedin
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import FeatureShowcase from "@/components/about/FeatureShowcase";

const CLIENTS_SERVED = [
  {
    category: "Government Sector",
    icon: Building2,
    items: [
      "Federal Ministries",
      "Provincial Governments",
      "Armed Forces",
      "Universities",
      "Research Institutes",
      "Public Sector Organizations"
    ]
  },
  {
    category: "Private Sector",
    icon: Briefcase,
    items: [
      "Hospitals",
      "Pharmaceutical Industries",
      "Manufacturing Industries",
      "Construction Companies",
      "Agricultural Enterprises",
      "Technology Companies"
    ]
  },
  {
    category: "International Clients",
    icon: Globe,
    items: [
      "Importers",
      "Exporters",
      "Manufacturers",
      "Development Agencies"
    ]
  }
];

const CORPORATE_STATS = [
  { label: "Group Companies", value: "26", desc: "Diversified enterprises" },
  { label: "Business Divisions", value: "14+", desc: "Strategic operational areas" },
  { label: "Product Portfolio", value: "1,000+", desc: "Products & Services offered" },
  { label: "Government Clients", value: "100+", desc: "Trusted public partnerships" },
  { label: "International Partners", value: "50+", desc: "Worldwide relations" },
  { label: "Business Sectors", value: "14+", desc: "Robust domain coverage" },
  { label: "Countries Served", value: "Multiple", desc: "Global outreach operations" },
  { label: "Annual Business Volume", value: "PKR 2.2+ B", desc: "Strong financial footing" },
  { label: "Government Pipeline FY 26-27", value: "PKR 5+ B", desc: "Future projects roadmap" }
];

const STRATEGIC_DIVISIONS = [
  { title: "Healthcare & Medical Technologies", icon: HeartPulse, href: "/services/healthcare-medical" },
  { title: "Hospital Engineering & Clean Rooms", icon: BriefcaseMedical, href: "/services/hospital-engineering" },
  { title: "Pharmaceutical Consultancy", icon: Pill, href: "/services/pharmaceutical-consultancy" },
  { title: "Veterinary & Livestock Solutions", icon: PawPrint, href: "/services" },
  { title: "Information Technology & AI", icon: Monitor, href: "/services/it-ai" },
  { title: "Electrical & Power Systems", icon: Zap, href: "/services/electrical-power-systems" },
  { title: "Renewable Energy", icon: Sun, href: "/services/renewable-energy" },
  { title: "Electric Mobility", icon: PlugZap, href: "/services/electric-mobility" },
  { title: "Defense & Security", icon: Shield, href: "/services/defense-security" },
  { title: "Agriculture & Dairy Development", icon: Sprout, href: "/services/agriculture-dairy-development" },
  { title: "Mining & Minerals", icon: Gem, href: "/services/mining-minerals" },
  { title: "Construction & Infrastructure", icon: HardHat, href: "/services/construction-infrastructure" },
  { title: "Food Processing", icon: Utensils, href: "/services/food-processing" },
  { title: "International Trade & Exports", icon: Globe, href: "/services/international-trade-exports" },
  { title: "Real Estate & Development", icon: Building2, href: "/services/real-estate-development" }
];

const WHY_ROYS_GROUP = [
  "Multi-Domain Expertise",
  "Government Procurement Experience",
  "International Supply Chain",
  "Technical Consultancy Capability",
  "Turnkey Project Execution",
  "Engineering Excellence",
  "Regulatory Compliance",
  "Strong Industry Relationships",
  "Innovative Solutions",
  "Long-Term Sustainability"
];

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
      const progress = Math.min((timestamp - startTime) / 1400, 1);
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
      { threshold: 0.35 }
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
    <span ref={elementRef} className="text-2xl sm:text-3xl font-black text-neutral-950 mb-1.5 block">
      {displayValue}
    </span>
  );
}

function SectorsServedCard({ category, icon: Icon, items }) {
  return (
    <div className="bg-white border border-neutral-200 p-8 rounded-sm group hover:border-black transition-colors duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 flex items-center justify-center rounded-sm transition-colors duration-300 group-hover:border-[#C6A15A]/70">
          <Icon className="text-white group-hover:text-[#C6A15A] transition-colors duration-300" size={22} strokeWidth={1.5} />
        </div>
        <h3 className="text-[14px] font-black uppercase tracking-wider text-neutral-950">
          {category}
        </h3>
      </div>
      <ul className="space-y-3.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-[12.5px] text-neutral-600 font-medium">
            <span className="w-1.5 h-1.5 bg-neutral-950 rounded-full mt-1.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    division: "",
    requirements: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit consultation request.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        division: "",
        requirements: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "An error occurred while submitting your consultation request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/about" />

      {/* Breadcrumb section */}
      <section className="pt-6 pb-3 px-4 sm:px-6 border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[10.5px] text-neutral-400 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-neutral-300" />
                <span className="text-neutral-950">About Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* 1st Section: ROYSONS TRUST (Image Left, Content Right) */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            {/* Left: Image with Gold Border */}
            <div className="flex-1 w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] order-2 lg:order-1">
              <div 
                className="h-full w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden rounded-[2px] bg-[#1a1f24]"
                style={{
                  border: "2px solid #C6A15A",
                  boxShadow: "0 0 20px rgba(198,161,90,0.25), 4px 4px 0px #C6A15A",
                  borderRadius: "2px",
                }}
              >
                <Image 
                  src="/roysons-trust-building.png" 
                  alt="ROYSONS TRUST" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center order-1 lg:order-2">
              <span className="text-[14px] font-black tracking-[0.3em] text-[#C6A15A] uppercase mb-3 block">
                Building Institutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-neutral-950 mb-5 leading-[1.12] tracking-tight">
                 ROYSONS TRUST 
              </h2>
              <p className="text-[15px] sm:text-[16px] text-neutral-950 font-bold leading-relaxed mb-3">
                A Purpose-Led Institution Behind a Diversified Enterprise
              </p>
              <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-relaxed font-normal">
                ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is designed around a simple philosophy: business growth should create lasting value for people, communities, and future generations. Through its relationship with ROYSONS Pvt. Ltd., the Trust aims to support responsible enterprise development, strengthen long-term institutional ownership, and channel resources toward initiatives in education, healthcare, community development, skills, research, sustainability, and other areas of public benefit. Our ambition is to build an institution that can outlive individual businesses and generations—creating a sustainable foundation for economic development and social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Chairman, ROYSONS Trust (Zeba Ijaz) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#101518] text-white border-t border-neutral-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left: Content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center border border-[#C6A15A]/40 bg-white/5 px-3.5 py-1 rounded-full w-fit mb-4">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#C6A15A]">
                  Chairman ROYSONS Trust
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Zeba Ijaz
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[14.5px] text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
                Zeba Ijaz leads ROYSONS Trust with a vision to establish a purpose-driven institution committed to creating lasting social and economic value for future generations. Under her leadership, the Trust aims to support initiatives across education, healthcare, community development, research, skills development, sustainability, and social welfare. With a strong commitment to responsible stewardship, compassion, and long-term development, ROYSONS Trust seeks to strengthen the foundation behind the ROYSONS enterprise while contributing to meaningful progress in society. Through strategic leadership and a people-centered vision, Zeba Ijaz is committed to building an institution that creates opportunities, supports communities, and leaves a lasting positive legacy.
              </p>
              </div>
              

            {/* Right: Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 group">
                <Image
                  src="/logos/ijaz.jpeg"
                  alt="Zeba Ijaz - Chairman, ROYSONS Trust"
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3rd Section: About ROYSONS Pvt. Ltd. (Content Left, Image Right) */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[15px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-4xl lg:text-4xl font-black text-neutral-950 mb-5 leading-[1.08] tracking-tight">
               ROYSONS Pvt. Ltd.
              </h2>
              <p className="text-[14px] text-neutral-600 leading-relaxed font-normal mb-5">
                ROYSONS Pvt. Ltd. is a diversified multi-sector enterprise built with a vision to establish a dynamic organization capable of delivering world-class solutions across multiple industries. With a growing portfolio of specialized companies and business divisions, ROYSONS operates across healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, international trade, manufacturing, real estate, food, and consultancy.
              </p>
              <p className="text-[14.5px] text-neutral-950 font-bold leading-relaxed border-l-2 border-neutral-950 pl-4">
                Our strength lies in bringing diverse expertise together under one corporate platform. Through our specialized companies, strategic partnerships, and industry-focused teams, we deliver products, services, and integrated solutions designed to meet the evolving needs of governments, institutions, businesses, and communities.
              </p>
            </div>
            <div className="flex-1 w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
              <div 
                className="h-full w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden rounded-[2px] bg-[#1a1f24]"
                style={{
                  border: "2px solid #C6A15A",
                  boxShadow: "0 0 20px rgba(198,161,90,0.25), 4px 4px 0px #C6A15A",
                  borderRadius: "2px",
                }}
              >
                <Image 
                  src="/About-us-hero.jpeg" 
                  alt="Roys Group Headquarters" 
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

      {/* 4th Section: Board of Directors Feature Showcase */}
      <FeatureShowcase />

      {/* Government Sector Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
             ROYSONS holding is a Diverse group of
INDUSTRY-LEADING BUSINESSES
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Government Sector
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[13px] text-neutral-500 mt-5 max-w-xl mx-auto leading-relaxed">
              ROYSON.Pvt.Ltd proudly serves a wide range of government institutions, delivering trusted solutions across Pakistan&apos;s public sector landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {/* Federal Ministries */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Landmark className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Federal Ministries
              </h4>
            </div>

            {/* Provincial Governments */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Provincial Governments
              </h4>
            </div>

            {/* Armed Forces */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Armed Forces
              </h4>
            </div>

            {/* Universities */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Universities
              </h4>
            </div>

            {/* Research Institutes */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Microscope className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Research Institutes
              </h4>
            </div>

            {/* Public Sector Organizations */}
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Network className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Public Sector Organizations
              </h4>
            </div>


          </div>
        </div>
      </section>

      {/* Private Sector Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              PRIVATE SECTOR
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Private Sector Clients
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[13px] text-neutral-500 mt-5 max-w-xl mx-auto leading-relaxed">
              We partner with leading private enterprises across healthcare, manufacturing, construction, agriculture, and technology.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Hospital className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Hospitals
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Pill className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Pharmaceutical Industries
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Layers className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Manufacturing Industries
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <HardHat className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Construction Companies
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Sprout className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Agricultural Enterprises
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Monitor className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Technology Companies
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* International Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-50 border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              INTERNATIONAL CLIENTS
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              International Client Partnerships
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[13px] text-neutral-500 mt-5 max-w-xl mx-auto leading-relaxed">
              We support international clients across imports, exports, manufacturing, and development initiatives.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Importers
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Users className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Exporters
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Star className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Manufacturers
              </h4>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight">
                Development Agencies
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Elegant Side-by-Side block */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-950">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-neutral-950 text-white p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center mb-5">
                  <Target size={24} className="text-[#dfb753]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-black uppercase tracking-[0.14em] text-white mb-6">
                  Vision Statement
                </h3>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light">
                  To become a globally recognized diversified business group delivering innovative, 
                  sustainable and technology-driven solutions across multiple industries.
                </p>
              </div>
              <div className="mt-12 h-1 w-20 bg-[#dfb753]" />
            </div>

            {/* Mission */}
            <div className="bg-neutral-950 border border-neutral-800 text-white p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 flex items-center mb-5">
                  <Award size={24} className="text-[#dfb753]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-black uppercase tracking-[0.14em] text-white mb-6">
                  Mission Statement
                </h3>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light">
                  To provide world-class products and services through innovation, quality, integrity 
                  and strategic partnerships while creating value for customers, employees, 
                  shareholders and society.
                </p>
              </div>
              <div className="mt-12 h-1 w-20 bg-[#dfb753]" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Statistics Table/Grid */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              ROYS AT A GLANCE
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Corporate Statistics
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CORPORATE_STATS.map((stat, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-6 sm:p-8 rounded-sm">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                  {stat.label}
                </p>
                <AnimatedStatValue value={stat.value} />
                <p className="text-[11px] text-neutral-500 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Business Divisions Cards */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              OUR OPERATIONS
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Strategic Business Divisions
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {STRATEGIC_DIVISIONS.map((div, index) => {
              const Icon = div.icon;
              return (
                <Link
                  key={index}
                  href={div.href || "/services"}
                  className="flex items-center gap-4 bg-white border border-neutral-200 p-5 rounded-sm hover:border-[#C6A15A] hover:shadow-sm transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:border-[#C6A15A]/70 group-hover:bg-[#1a2127]">
                    <Icon size={22} className="text-white group-hover:text-[#C6A15A] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[15px] font-black uppercase tracking-wider text-neutral-950 group-hover:text-[#C6A15A] transition-colors duration-300 leading-tight">
                    {div.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Roys Group list section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-12 lg:gap-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[10px] font-black tracking-[0.24em] text-neutral-400 uppercase mb-3 block">
                COMPETITIVE ADVANTAGE
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight uppercase tracking-wider">
              Why ROYSONS Pvt.Ltd.?
              </h2>
              <div className="h-1 w-14 bg-[#dfb753] mb-6 mx-auto" />
              <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light">
                Our operations are founded on trust, domain expertise, and a multi-tiered supply network. 
                We combine government-certified credentials with structured global partnerships to deliver turnkey performance.
              </p>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                {WHY_ROYS_GROUP.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-neutral-800 pb-3 flex-row">
                    <CheckCircle2 size={16} className="text-[#dfb753] flex-shrink-0" strokeWidth={2} />
                    <span className="text-[12px] font-bold uppercase tracking-wider text-white">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white border border-neutral-200 overflow-hidden flex flex-col lg:flex-row rounded-sm">
            <div className="lg:w-1/3 bg-neutral-50 p-10 lg:p-12 border-r border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center mb-6">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h3 className="text-[20px] font-black text-neutral-950 tracking-tight mb-4 uppercase">
                  Request Consultation
                </h3>
                <div className="h-[2px] w-8 bg-neutral-950 mb-6" />
                <p className="text-[12.5px] text-neutral-500 leading-relaxed font-normal mb-8">
                  Get in touch with our experts to discuss your requirements. We offer bespoke services and turnkey operations tailored to your business sector.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Users className="text-neutral-600" size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-[12px] uppercase tracking-wider mb-0.5">Expert Guidance</h4>
                    <p className="text-neutral-500 text-[11px]">Talk directly to our domain leads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Layers className="text-neutral-600" size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-[12px] uppercase tracking-wider mb-0.5">Turnkey Solutions</h4>
                    <p className="text-neutral-500 text-[11px]">Comprehensive execution workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-10 lg:p-12">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <h4 className="text-[14px] font-black uppercase tracking-wider text-black">
                    Consultation Requested
                  </h4>
                  <p className="text-[11.5px] text-neutral-500 mt-2 max-w-sm">
                    Thank you. We have received your details and our team representative will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        placeholder="John Doe" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        placeholder="john@example.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Company / Organization
                      </label>
                      <input 
                        type="text"
                        placeholder="Company name" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Business Division of Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsDropdownOpen(false); }}>
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full bg-neutral-950 border ${isDropdownOpen ? 'border-[#dfb753]' : 'border-neutral-800'} px-4 py-3 text-[12px] text-[#dfb753] outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
                        >
                          <span>{formData.division ? STRATEGIC_DIVISIONS.find(d => d.title.toLowerCase().replace(/\s+/g, "-") === formData.division)?.title : "Select a division"}</span>
                          <ChevronRight size={13} className={`text-[#a3a3a3] transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                        </div>
                        
                        {isDropdownOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-[2px] max-h-60 overflow-y-auto shadow-xl">
                            <div 
                              onClick={() => { setFormData({ ...formData, division: "" }); setIsDropdownOpen(false); }}
                              className="px-4 py-3 text-[12px] text-[#dfb753] opacity-50 hover:bg-[#dfb753] hover:text-black hover:opacity-100 cursor-pointer transition-colors"
                            >
                              Select a division
                            </div>
                            {STRATEGIC_DIVISIONS.map((division) => (
                              <div
                                key={division.title}
                                onClick={() => {
                                  setFormData({ ...formData, division: division.title.toLowerCase().replace(/\s+/g, "-") });
                                  setIsDropdownOpen(false);
                                }}
                                className="px-4 py-3 text-[12px] text-[#dfb753] hover:bg-[#dfb753] hover:text-black cursor-pointer transition-colors"
                              >
                                {division.title}
                              </div>
                            ))}
                          </div>
                        )}
                        <select required value={formData.division} onChange={() => {}} className="hidden">
                           <option value="" disabled>Select a division</option>
                           {STRATEGIC_DIVISIONS.map((division) => (
                             <option key={division.title} value={division.title.toLowerCase().replace(/\s+/g, "-")}>{division.title}</option>
                           ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                      Your Requirements / Description <span className="text-red-555">*</span>
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Outline your project scope or equipment requirements..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors resize-none rounded-[2px]"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-[11.5px] font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-2 text-neutral-450 text-[10.5px]">
                      <Lock size={12} />
                      <span>All requests are handled under strict confidentiality protocols.</span>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-black hover:bg-neutral-800 disabled:bg-neutral-400 text-white px-10 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] flex items-center gap-3 transition-colors rounded-[2px] cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Requesting..." : "Send Request"} <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                  </div>
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
