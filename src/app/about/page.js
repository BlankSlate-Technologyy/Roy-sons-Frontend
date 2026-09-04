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
      const timer = setTimeout(() => {
        setDisplayValue(rawValue);
      }, 0);
      return () => clearTimeout(timer);
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
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            {/* Left: Image with Gold Border */}
            <div className="flex-1 w-full relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[440px] order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">
              <div 
                className="h-full w-full relative overflow-hidden rounded-[4px] bg-[#1a1f24]"
                style={{
                  border: "2px solid #C6A15A",
                  boxShadow: "0 0 20px rgba(198,161,90,0.25), 4px 4px 0px #C6A15A",
                }}
              >
                <Image 
                  src="/logos/roysons logo mockup building.png" 
                  alt="ROYSONS TRUST" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  className="object-cover object-left lg:object-center"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center order-1 lg:order-2" data-aos="fade-left" data-aos-delay="150">
              <span className="text-[13px] sm:text-[14px] font-black tracking-[0.3em] text-[#C6A15A] uppercase mb-3 block">
                Building Institutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-5 leading-[1.12] tracking-tight">
                 ROYSONS TRUST 
              </h2>
              <p className="text-[17px] sm:text-[18.5px] lg:text-[19px] text-neutral-950 font-bold leading-relaxed mb-4">
                A Purpose-Led Institution Behind a Diversified Enterprise
              </p>
              <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-neutral-700 leading-[1.8] font-normal">
                ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is designed around a simple philosophy: business growth should create lasting value for people, communities, and future generations. Through its relationship with ROYSONS Pvt. Ltd., the Trust aims to support responsible enterprise development, strengthen long-term institutional ownership, and channel resources toward initiatives in education, healthcare, community development, skills, research, sustainability, and other areas of public benefit. Our ambition is to build an institution that can outlive individual businesses and generations—creating a sustainable foundation for economic development and social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Chairman, ROYSONS Trust (Zeba Ijaz) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200 relative overflow-hidden" data-aos="fade-up">
        {/* Subtle Ambient Teal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          
          {/* Centered Picture at Top */}
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="100">
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/30 bg-neutral-900 group">
              <Image
                src="/logos/ijaz.jpeg"
                alt="Zeba Ijaz - Chairperson, ROYSONS Trust"
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Centered Title (Name on top) */}
          <h2 data-aos="fade-up" data-aos-delay="150" className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#042E3A] mb-3 tracking-tight">
            Zeba Ijaz
          </h2>

          {/* Centered Badge (Label below name, clear readable size) */}
          <div data-aos="fade-up" data-aos-delay="200" className="inline-flex items-center border border-[#0a7a8c]/30 bg-[#f0fdfa] px-5 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="text-xs sm:text-[14px] font-bold uppercase tracking-wider text-[#0a7a8c]">
              Chairperson
            </span>
          </div>

          {/* Centered Bio Description - Big & Readable */}
          <p data-aos="fade-up" data-aos-delay="250" className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#042E3A]/85 leading-[1.85] font-normal max-w-4xl text-center">
            Zeba Ijaz leads ROYSONS Trust with a vision to establish a purpose-driven institution committed to creating lasting social and economic value for future generations. Under her leadership, the Trust aims to support initiatives across education, healthcare, community development, research, skills development, sustainability, and social welfare. With a strong commitment to responsible stewardship, compassion, and long-term development, ROYSONS Trust seeks to strengthen the foundation behind the ROYSONS enterprise while contributing to meaningful progress in society. Through strategic leadership and a people-centered vision, Zeba Ijaz is committed to building an institution that creates opportunities, supports communities, and leaves a lasting positive legacy.
          </p>

        </div>
      </section>

      {/* 3rd Section: About ROYSONS Pvt. Ltd. (Content Left, Image Right) */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            <div className="flex-1 flex flex-col justify-center" data-aos="fade-right" data-aos-delay="100">
              <span className="text-[13px] sm:text-[14px] font-black tracking-[0.3em] text-[#0a7a8c] uppercase mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-5 leading-[1.08] tracking-tight">
               ROYSONS Pvt. Ltd.
              </h2>
              <p className="text-[16.5px] sm:text-[18px] lg:text-[19px] text-neutral-700 leading-[1.8] font-normal mb-5">
                ROYSONS Pvt. Ltd. is a diversified multi-sector enterprise built with a vision to establish a dynamic organization capable of delivering world-class solutions across multiple industries. With a growing portfolio of specialized companies and business divisions, ROYSONS operates across healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, international trade, manufacturing, real estate, food, and consultancy.
              </p>
              <p className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] text-neutral-950 font-bold leading-[1.8] border-l-4 border-[#0a7a8c] pl-5">
                Our strength lies in bringing diverse expertise together under one corporate platform. Through our specialized companies, strategic partnerships, and industry-focused teams, we deliver products, services, and integrated solutions designed to meet the evolving needs of governments, institutions, businesses, and communities.
              </p>
            </div>
            <div className="flex-1 w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]" data-aos="fade-left" data-aos-delay="150">
              <div 
                className="h-full w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden rounded-[2px] bg-[#1a1f24]"
                style={{
                  border: "2px solid #0a7a8c",
                  boxShadow: "0 0 20px rgba(10,122,140,0.25), 4px 4px 0px #0a7a8c",
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

      <section className="pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 bg-white text-neutral-900 border-t border-neutral-200 relative overflow-hidden" data-aos="fade-up">
        {/* Subtle Ambient Teal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          
          {/* Centered Picture at Top */}
          <div className="mb-6 sm:mb-8" data-aos="zoom-in" data-aos-delay="100">
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/30 bg-neutral-900 group">
              <Image
                src="/logos/chairman.jpeg"
                alt="Ijaz Naseer - President, ROYSONS Pvt. Ltd."
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Centered Title (Name on top) */}
          <h2 data-aos="fade-up" data-aos-delay="150" className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#042E3A] mb-3 tracking-tight">
            Ijaz Naseer
          </h2>

          {/* Centered Badge (Label below name, clear readable size) */}
          <div data-aos="fade-up" data-aos-delay="200" className="inline-flex items-center border border-[#0a7a8c]/30 bg-[#f0fdfa] px-5 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="text-xs sm:text-[14px] font-bold uppercase tracking-wider text-[#0a7a8c]">
            Chairman
            </span>
          </div>

          {/* Centered Bio Description - Big & Readable */}
          <p data-aos="fade-up" data-aos-delay="250" className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#042E3A]/85 leading-[1.85] font-normal max-w-4xl text-center">
            Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally. Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.
          </p>

          {/* Premium Corporate Section Separator */}
          <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 mb-2 flex items-center justify-center gap-3 sm:gap-4 select-none" data-aos="fade-up" data-aos-delay="300">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#0a7a8c]/30 to-[#0a7a8c]/80" />
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/30 shadow-[0_2px_12px_rgba(10,122,140,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a7a8c]/50" />
              <div className="w-2 h-2 rotate-45 bg-[#0a7a8c]/70" />
              <div className="w-3.5 h-3.5 rotate-45 border border-[#0a7a8c] bg-white flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 bg-[#042E3A]" />
              </div>
              <div className="w-2 h-2 rotate-45 bg-[#0a7a8c]/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a7a8c]/50" />
            </div>
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#0a7a8c]/30 to-[#0a7a8c]/80" />
          </div>

        </div>
      </section>
      {/* 4th Section: Board of Directors Feature Showcase */}
      <FeatureShowcase />

      {/* Government Sector Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-b border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
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
            <Link
              href="/government-sector/federal-ministries"
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Landmark className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Federal Ministries
              </h4>
            </Link>

            {/* Provincial Governments */}
            <Link
              href="/government-sector/provincial-governments"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <MapPin className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Provincial Governments
              </h4>
            </Link>

            {/* Armed Forces */}
            <Link
              href="/government-sector/armed-forces"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Shield className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Armed Forces
              </h4>
            </Link>

            {/* Universities */}
            <Link
              href="/government-sector/universities"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <GraduationCap className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Universities
              </h4>
            </Link>

            {/* Research Institutes */}
            <Link
              href="/government-sector/research-institutes"
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Microscope className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Research Institutes
              </h4>
            </Link>

            {/* Public Sector Organizations */}
            <Link
              href="/government-sector/public-sector-organizations"
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Network className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Public Sector Organizations
              </h4>
            </Link>

          </div>
        </div>
      </section>

      {/* Private Sector Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-b border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
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

            {/* Hospitals */}
            <Link
              href="/private-sector/hospitals"
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Hospital className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Hospitals
              </h4>
            </Link>

            {/* Pharmaceutical Industries */}
            <Link
              href="/private-sector/pharmaceutical-industries"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Pill className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Pharmaceutical Industries
              </h4>
            </Link>

            {/* Manufacturing Industries */}
            <Link
              href="/private-sector/manufacturing-industries"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Layers className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Manufacturing Industries
              </h4>
            </Link>

            {/* Construction Companies */}
            <Link
              href="/private-sector/construction-companies"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <HardHat className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Construction Companies
              </h4>
            </Link>

            {/* Agricultural Enterprises */}
            <Link
              href="/private-sector/agricultural-enterprises"
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Sprout className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Agricultural Enterprises
              </h4>
            </Link>

            {/* Technology Companies */}
            <Link
              href="/private-sector/technology-companies"
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Monitor className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Technology Companies
              </h4>
            </Link>

          </div>
        </div>
      </section>

      {/* International Clients Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-50 border-b border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
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

            {/* Importers */}
            <Link
              href="/international-clients/importers"
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Globe className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Importers
              </h4>
            </Link>

            {/* Exporters */}
            <Link
              href="/international-clients/exporters"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Users className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Exporters
              </h4>
            </Link>

            {/* Manufacturers */}
            <Link
              href="/international-clients/manufacturers"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Star className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Manufacturers
              </h4>
            </Link>

            {/* Development Agencies */}
            <Link
              href="/international-clients/development-agencies"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-[#0a7a8c] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm shadow-sm transition-colors group-hover:bg-[#0a7a8c]">
                <Lightbulb className="text-[#0a7a8c] group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#0a7a8c] transition-colors">
                Development Agencies
              </h4>
            </Link>

          </div>
        </div>
      </section>

      {/* Vision & Mission Elegant Side-by-Side block */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white border border-neutral-200 hover:border-[#0a7a8c] shadow-sm hover:shadow-lg p-8 sm:p-12 rounded-lg flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300" data-aos="fade-right" data-aos-delay="100">
              <div>
                <div className="w-12 h-12 border border-[#0a7a8c]/40 bg-[#f0fdfa] flex items-center justify-center mb-5 rounded-md shadow-xs">
                  <Target size={24} className="text-[#0a7a8c]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-4">
                  Vision Statement
                </h3>
                <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
                  To become a globally recognized diversified business group delivering innovative, 
                  sustainable and technology-driven solutions across multiple industries.
                </p>
              </div>
              <div className="mt-8 sm:mt-12 h-1 w-20 bg-gradient-to-r from-[#0077b6] to-[#02b875] rounded-full" />
            </div>

            {/* Mission */}
            <div className="bg-white border border-neutral-200 hover:border-[#0a7a8c] shadow-sm hover:shadow-lg p-8 sm:p-12 rounded-lg flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300" data-aos="fade-left" data-aos-delay="150">
              <div>
                <div className="w-12 h-12 border border-[#0a7a8c]/40 bg-[#f0fdfa] flex items-center justify-center mb-5 rounded-md shadow-xs">
                  <Award size={24} className="text-[#0a7a8c]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-4">
                  Mission Statement
                </h3>
                <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
                  To provide world-class products and services through innovation, quality, integrity 
                  and strategic partnerships while creating value for customers, employees, 
                  shareholders and society.
                </p>
              </div>
              <div className="mt-8 sm:mt-12 h-1 w-20 bg-gradient-to-r from-[#0077b6] to-[#02b875] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Statistics Table/Grid */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-50 border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              ROYS AT A GLANCE
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Corporate Statistics
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CORPORATE_STATS.map((stat, index) => {
              const staggerDelay = ((index % 3) + 1) * 100;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-6 sm:p-8 rounded-sm"
                  data-aos="zoom-in"
                  data-aos-delay={staggerDelay}
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-neutral-400 mb-2">
                    {stat.label}
                  </p>
                  <AnimatedStatValue value={stat.value} />
                  <p className="text-[11px] text-neutral-500 font-medium">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Business Divisions Cards */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
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
              const staggerDelay = ((index % 4) + 1) * 75;
              return (
                <Link
                  key={index}
                  href={div.href || "/services"}
                  data-aos="fade-up"
                  data-aos-delay={staggerDelay}
                  className="flex items-center gap-4 bg-white border border-neutral-200 p-5 rounded-sm hover:border-[#0a7a8c] hover:shadow-sm transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:border-[#0a7a8c] group-hover:bg-[#0a7a8c]">
                    <Icon size={22} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[15px] font-black uppercase tracking-wider text-neutral-950 group-hover:text-[#0a7a8c] transition-colors duration-300 leading-tight">
                    {div.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Roys Group list section - Prominent Corporate Showcase */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/50 to-white border-t border-b border-[#0a7a8c]/15 relative overflow-hidden" data-aos="fade-up">
        {/* Subtle background glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#0a7a8c]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Header Block */}
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a7a8c]/10 border border-[#0a7a8c]/25 text-[#0a7a8c] text-[11.5px] font-black uppercase tracking-[0.24em] mb-4 shadow-sm">
                <ShieldCheck size={15} strokeWidth={2.4} />
                <span>COMPETITIVE ADVANTAGE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-[#042E3A] mb-4 leading-tight uppercase tracking-wider">
                Why ROYSONS Pvt.Ltd.?
              </h2>
              <div className="h-[4px] w-20 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mb-6 mx-auto rounded-full shadow-sm" />
              <p className="text-[16px] sm:text-[17.5px] text-[#042E3A]/85 leading-relaxed font-medium">
                Our operations are founded on <strong className="text-[#042E3A] font-black">trust</strong>, <strong className="text-[#042E3A] font-black">domain expertise</strong>, and a <strong className="text-[#042E3A] font-black">multi-tiered supply network</strong>. 
                We combine government-certified credentials with structured global partnerships to deliver turnkey performance.
              </p>
            </div>

            {/* Prominent Cards Grid */}
            <div className="w-full bg-white rounded-2xl border-2 border-[#0a7a8c]/20 p-6 sm:p-9 lg:p-12 shadow-[0_15px_45px_rgba(4,46,58,0.08)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {WHY_ROYS_GROUP.map((point, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 100 + 100}
                    className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-50/80 to-white hover:from-[#f0fdfa] hover:to-white border-2 border-slate-200/90 hover:border-[#0a7a8c] shadow-sm hover:shadow-[0_8px_24px_rgba(10,122,140,0.18)] transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Stylized Icon Badge */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#042E3A] via-[#075d6d] to-[#0a7a8c] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(10,122,140,0.4)] transition-all duration-300 flex-shrink-0">
                        <CheckCircle2 size={22} className="text-[#38bdf8]" strokeWidth={2.6} />
                      </div>

                      {/* Text */}
                      <span className="text-[15px] sm:text-[16.5px] lg:text-[17px] font-black text-[#042E3A] group-hover:text-[#0a7a8c] transition-colors duration-300 tracking-tight">
                        {point}
                      </span>
                    </div>

                    {/* Numeric Indicator */}
                    <span className="text-[12px] font-black tracking-widest text-[#0a7a8c]/50 group-hover:text-[#0a7a8c] transition-colors duration-300 flex-shrink-0 ml-3 bg-[#0a7a8c]/5 px-2.5 py-1 rounded-md border border-[#0a7a8c]/15">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Executive Trust Banner Strip at bottom of card */}
              <div className="mt-8 pt-8 border-t border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-black text-[#042E3A]">25+ Years</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a7a8c] mt-0.5">Industry Experience</span>
                </div>
                <div className="flex flex-col items-center p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-black text-[#042E3A]">100%</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a7a8c] mt-0.5">Turnkey Execution</span>
                </div>
                <div className="flex flex-col items-center p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-black text-[#042E3A]">Tier-1</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a7a8c] mt-0.5">Global Partnerships</span>
                </div>
                <div className="flex flex-col items-center p-3.5 rounded-lg bg-slate-50/70 border border-slate-200/70">
                  <span className="text-xl sm:text-2xl font-black text-[#042E3A]">Certified</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a7a8c] mt-0.5">Government Contractor</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white border border-neutral-200 overflow-hidden flex flex-col lg:flex-row rounded-sm" data-aos="zoom-in" data-aos-delay="100">
            <div className="lg:w-1/3 bg-neutral-50 p-10 lg:p-12 border-r border-neutral-200 flex flex-col justify-between" data-aos="fade-right" data-aos-delay="150">
              <div>
                <div className="w-10 h-10 bg-gradient-to-br from-[#042E3A] to-[#0a7a8c] rounded-sm flex items-center justify-center mb-6 shadow-sm">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h3 className="text-[20px] font-black text-neutral-950 tracking-tight mb-4 uppercase">
                  Request Consultation
                </h3>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-6" />
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
                  <div className="w-14 h-14 bg-[#0a7a8c] rounded-full flex items-center justify-center mb-4">
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
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px]"
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
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px]"
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
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Business Division of Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="relative" tabIndex={0} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsDropdownOpen(false); }}>
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full bg-[#f0fdfa] border ${isDropdownOpen ? 'border-[#0a7a8c] ring-2 ring-[#0a7a8c]/20' : 'border-[#0a7a8c]/30'} px-4 py-3 text-[12px] text-[#042E3A] font-medium outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
                        >
                          <span>{formData.division ? STRATEGIC_DIVISIONS.find(d => d.title.toLowerCase().replace(/\s+/g, "-") === formData.division)?.title : "Select a division"}</span>
                          <ChevronRight size={13} className={`text-[#0a7a8c] transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                        </div>
                        
                        {isDropdownOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-white border border-[#0a7a8c]/30 rounded-[2px] max-h-60 overflow-y-auto shadow-xl">
                            <div 
                              onClick={() => { setFormData({ ...formData, division: "" }); setIsDropdownOpen(false); }}
                              className="px-4 py-3 text-[12px] text-[#042E3A]/50 hover:bg-[#0a7a8c] hover:text-white cursor-pointer transition-colors"
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
                                className="px-4 py-3 text-[12px] text-[#042E3A] hover:bg-[#0a7a8c] hover:text-white cursor-pointer transition-colors"
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
                      Your Requirements / Description <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Outline your project scope or equipment requirements..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors resize-none rounded-[2px]"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-[11.5px] font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-2 text-neutral-400 text-[10.5px]">
                      <Lock size={12} />
                      <span>All requests are handled under strict confidentiality protocols.</span>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:opacity-50 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.18em] flex items-center gap-3 transition-all duration-300 rounded-[3px] shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <span className="text-white font-black">{isSubmitting ? "Requesting..." : "Send Request"}</span>
                      <ArrowRight size={13} strokeWidth={2.5} className="text-white" />
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
