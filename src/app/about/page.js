"use client";

import { useState } from "react";
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
  TrendingUp,
  Briefcase,
  Target,
  FileText,
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
  HardHat
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

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
  { title: "Healthcare & Medical Technologies", icon: HeartPulse },
  { title: "Hospital Engineering & Clean Rooms", icon: BriefcaseMedical },
  { title: "Pharmaceutical Consultancy", icon: Pill },
  { title: "Veterinary & Livestock Solutions", icon: PawPrint },
  { title: "Information Technology & AI", icon: Monitor },
  { title: "Electrical & Power Systems", icon: Zap },
  { title: "Renewable Energy", icon: Sun },
  { title: "Electric Mobility", icon: PlugZap },
  { title: "Defense & Security", icon: Shield },
  { title: "Agriculture & Dairy Development", icon: Sprout },
  { title: "Mining & Minerals", icon: Gem },
  { title: "Construction & Infrastructure", icon: HardHat },
  { title: "Food Processing", icon: Utensils },
  { title: "International Trade & Exports", icon: Globe }
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

function SectorsServedCard({ category, icon: Icon, items }) {
  return (
    <div className="bg-white border border-neutral-200 p-8 rounded-sm hover:border-black transition-colors duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center rounded-sm">
          <Icon className="text-white" size={22} strokeWidth={1.5} />
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    division: "",
    requirements: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        division: "",
        requirements: ""
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/about" />

      {/* Breadcrumb section */}
      <section className="pt-8 pb-4 px-6 border-b border-neutral-100">
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

      {/* Banner / About Roys Group intro */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3">
                WHO WE ARE
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-neutral-950 mb-7 leading-[1.08] tracking-tight">
                About Roys Group
              </h1>
              <p className="text-[14px] text-neutral-600 leading-relaxed font-normal mb-6">
                Roys Group of Companies is one of Pakistan's emerging diversified business groups, 
                providing world-class products, services, consultancy, engineering solutions, 
                infrastructure development, and international trade services.
              </p>
              <p className="text-[14.5px] text-neutral-950 font-bold leading-relaxed border-l-2 border-neutral-950 pl-5">
                We are dedicated to establishing national paradigms of corporate excellence, connecting global 
                partnerships with local industrial capabilities.
              </p>
            </div>
            <div className="flex-1 w-full relative min-h-[300px]">
              <div className="h-full w-full relative overflow-hidden rounded-[2px] border border-neutral-200 shadow-sm">
                <Image 
                  src="/hero-building.png" 
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

      {/* Client and Sectors Served Grid */}
      <section className="py-20 px-6 bg-neutral-50 border-y border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              OUR CUSTOMERS
            </span>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Sectors We Serve
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CLIENTS_SERVED.map((sector, index) => (
              <SectorsServedCard 
                key={index} 
                category={sector.category} 
                icon={sector.icon} 
                items={sector.items} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Elegant Side-by-Side block */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-neutral-950 text-white p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center mb-10">
                  <Target size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-black uppercase tracking-[0.14em] text-white mb-6">
                  Vision Statement
                </h3>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed font-light">
                  To become a globally recognized diversified business group delivering innovative, 
                  sustainable and technology-driven solutions across multiple industries.
                </p>
              </div>
              <div className="mt-12 h-1 w-20 bg-white" />
            </div>

            {/* Mission */}
            <div className="bg-neutral-50 border border-neutral-200 text-neutral-950 p-12 rounded-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center mb-10">
                  <Award size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-black uppercase tracking-[0.14em] text-neutral-950 mb-6">
                  Mission Statement
                </h3>
                <p className="text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                  To provide world-class products and services through innovation, quality, integrity 
                  and strategic partnerships while creating value for customers, employees, 
                  shareholders and society.
                </p>
              </div>
              <div className="mt-12 h-1 w-20 bg-neutral-950" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Statistics Table/Grid */}
      <section className="py-20 px-6 bg-neutral-50 border-t border-neutral-100">
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
                <p className="text-2xl sm:text-3xl font-black text-neutral-950 mb-1.5">
                  {stat.value}
                </p>
                <p className="text-[11px] text-neutral-500 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Business Divisions Cards */}
      <section className="py-20 px-6 bg-white border-t border-neutral-100">
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
                <div key={index} className="flex items-center gap-4 bg-white border border-neutral-200 p-5 rounded-sm hover:border-black transition-colors duration-200">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center bg-neutral-50 rounded-sm">
                    <Icon size={20} className="text-neutral-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[11.5px] font-black uppercase tracking-wider text-neutral-950 leading-tight">
                    {div.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Roys Group list section */}
      <section className="py-20 px-6 bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="lg:w-2/5">
              <span className="text-[10px] font-black tracking-[0.24em] text-neutral-400 uppercase mb-3 block">
                COMPETITIVE ADVANTAGE
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight uppercase tracking-wider">
                Why Roys Group?
              </h2>
              <div className="h-1 w-14 bg-white mb-6" />
              <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light">
                Our operations are founded on trust, domain expertise, and a multi-tiered supply network. 
                We combine government-certified credentials with structured global partnerships to deliver turnkey performance.
              </p>
            </div>

            <div className="flex-1 lg:w-3/5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                {WHY_ROYS_GROUP.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-neutral-800 pb-3 flex-row">
                    <CheckCircle2 size={16} className="text-white flex-shrink-0" strokeWidth={2} />
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
      <section className="py-20 px-6 bg-white border-t border-neutral-100">
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
                      <div className="relative">
                        <select
                          required
                          value={formData.division}
                          onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                          className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-500 outline-none focus:border-neutral-950 transition-colors rounded-[2px] appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a division</option>
                          {STRATEGIC_DIVISIONS.map((division) => (
                            <option key={division.title} value={division.title.toLowerCase().replace(/\s+/g, "-")}>
                              {division.title}
                            </option>
                          ))}
                        </select>
                        <ChevronRight size={13} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#a3a3a3] pointer-events-none" />
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

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-2 text-neutral-450 text-[10.5px]">
                      <Lock size={12} />
                      <span>All requests are handled under strict confidentiality protocols.</span>
                    </div>
                    <button type="submit" className="bg-black hover:bg-neutral-800 text-white px-10 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] flex items-center gap-3 transition-colors rounded-[2px] cursor-pointer">
                      Send Request <ArrowRight size={13} strokeWidth={2.5} />
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
