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
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            {/* Left: Image with Gold Border */}
            <div className="flex-1 w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#101518] text-white border-t border-neutral-800 relative overflow-hidden" data-aos="fade-up">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A15A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          
          {/* Centered Picture at Top */}
          <div className="mb-8" data-aos="zoom-in" data-aos-delay="100">
            <div className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C6A15A]/30 bg-neutral-900 group">
              <Image
                src="/logos/ijaz.jpeg"
                alt="Zeba Ijaz - Chairman, ROYSONS Trust"
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Centered Badge */}
          <div data-aos="fade-up" data-aos-delay="150" className="inline-flex items-center border border-[#C6A15A]/40 bg-white/5 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.25em] text-[#C6A15A]">
              Chairman
            </span>
          </div>

          {/* Centered Title */}
          <h2 data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Zeba Ijaz
          </h2>

          {/* Centered Bio Description */}
          <p data-aos="fade-up" data-aos-delay="250" className="text-[16px] sm:text-[17px] lg:text-[18px] text-neutral-200 leading-[1.85] font-normal max-w-4xl text-center">
            Zeba Ijaz leads ROYSONS Trust with a vision to establish a purpose-driven institution committed to creating lasting social and economic value for future generations. Under her leadership, the Trust aims to support initiatives across education, healthcare, community development, research, skills development, sustainability, and social welfare. With a strong commitment to responsible stewardship, compassion, and long-term development, ROYSONS Trust seeks to strengthen the foundation behind the ROYSONS enterprise while contributing to meaningful progress in society. Through strategic leadership and a people-centered vision, Zeba Ijaz is committed to building an institution that creates opportunities, supports communities, and leaves a lasting positive legacy.
          </p>

        </div>
      </section>

      {/* 3rd Section: About ROYSONS Pvt. Ltd. (Content Left, Image Right) */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
            <div className="flex-1 flex flex-col justify-center" data-aos="fade-right" data-aos-delay="100">
              <span className="text-[13px] sm:text-[14px] font-black tracking-[0.3em] text-[#C6A15A] uppercase mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-5 leading-[1.08] tracking-tight">
               ROYSONS Pvt. Ltd.
              </h2>
              <p className="text-[15.5px] sm:text-[16.5px] lg:text-[17px] text-neutral-700 leading-[1.8] font-normal mb-5">
                ROYSONS Pvt. Ltd. is a diversified multi-sector enterprise built with a vision to establish a dynamic organization capable of delivering world-class solutions across multiple industries. With a growing portfolio of specialized companies and business divisions, ROYSONS operates across healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, international trade, manufacturing, real estate, food, and consultancy.
              </p>
              <p className="text-[16px] sm:text-[17px] lg:text-[17.5px] text-neutral-950 font-bold leading-[1.8] border-l-4 border-[#C6A15A] pl-5">
                Our strength lies in bringing diverse expertise together under one corporate platform. Through our specialized companies, strategic partnerships, and industry-focused teams, we deliver products, services, and integrated solutions designed to meet the evolving needs of governments, institutions, businesses, and communities.
              </p>
            </div>
            <div className="flex-1 w-full relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]" data-aos="fade-left" data-aos-delay="150">
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
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Landmark className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Federal Ministries
              </h4>
            </Link>

            {/* Provincial Governments */}
            <Link
              href="/government-sector/provincial-governments"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <MapPin className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Provincial Governments
              </h4>
            </Link>

            {/* Armed Forces */}
            <Link
              href="/government-sector/armed-forces"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Shield className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Armed Forces
              </h4>
            </Link>

            {/* Universities */}
            <Link
              href="/government-sector/universities"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <GraduationCap className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Universities
              </h4>
            </Link>

            {/* Research Institutes */}
            <Link
              href="/government-sector/research-institutes"
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Microscope className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Research Institutes
              </h4>
            </Link>

            {/* Public Sector Organizations */}
            <Link
              href="/government-sector/public-sector-organizations"
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Network className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
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
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Hospital className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Hospitals
              </h4>
            </Link>

            {/* Pharmaceutical Industries */}
            <Link
              href="/private-sector/pharmaceutical-industries"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Pill className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Pharmaceutical Industries
              </h4>
            </Link>

            {/* Manufacturing Industries */}
            <Link
              href="/private-sector/manufacturing-industries"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Layers className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Manufacturing Industries
              </h4>
            </Link>

            {/* Construction Companies */}
            <Link
              href="/private-sector/construction-companies"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <HardHat className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Construction Companies
              </h4>
            </Link>

            {/* Agricultural Enterprises */}
            <Link
              href="/private-sector/agricultural-enterprises"
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Sprout className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Agricultural Enterprises
              </h4>
            </Link>

            {/* Technology Companies */}
            <Link
              href="/private-sector/technology-companies"
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-col items-center gap-4 bg-neutral-50 border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Monitor className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
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
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Globe className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Importers
              </h4>
            </Link>

            {/* Exporters */}
            <Link
              href="/international-clients/exporters"
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Users className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Exporters
              </h4>
            </Link>

            {/* Manufacturers */}
            <Link
              href="/international-clients/manufacturers"
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Star className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Manufacturers
              </h4>
            </Link>

            {/* Development Agencies */}
            <Link
              href="/international-clients/development-agencies"
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex flex-col items-center gap-4 bg-white border border-neutral-200 p-6 rounded-sm hover:border-neutral-950 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer no-underline select-none"
            >
              <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center rounded-sm shadow-sm">
                <Lightbulb className="text-[#dfb753]" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-[14px] font-black uppercase tracking-wider text-neutral-950 text-center leading-tight group-hover:text-[#dfb753] transition-colors">
                Development Agencies
              </h4>
            </Link>

          </div>
        </div>
      </section>

      {/* Vision & Mission Elegant Side-by-Side block */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-950" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-neutral-950 text-white p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300" data-aos="fade-right" data-aos-delay="100">
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
            <div className="bg-neutral-950 border border-neutral-800 text-white p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300" data-aos="fade-left" data-aos-delay="150">
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
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-neutral-950 text-white" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-12 lg:gap-16">
            
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
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
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 100 + 100}
                    className="flex items-center gap-3 border-b border-neutral-800 pb-3 flex-row"
                  >
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
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-white border-t border-neutral-100" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white border border-neutral-200 overflow-hidden flex flex-col lg:flex-row rounded-sm" data-aos="zoom-in" data-aos-delay="100">
            <div className="lg:w-1/3 bg-neutral-50 p-10 lg:p-12 border-r border-neutral-200 flex flex-col justify-between" data-aos="fade-right" data-aos-delay="150">
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
