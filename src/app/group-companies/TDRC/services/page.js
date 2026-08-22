"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  FileSearch,
  Sprout,
  Scale,
  Users2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  BookOpen,
  Sparkles,
  TreePine,
  Wind,
  Droplets,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/TDRCShared";

const RESEARCH_SERVICES = [
  {
    id: "applied-research",
    title: "Applied Scientific & Ecological Research",
    subtitle: "Arid Land Ecology, Soil Chemistry & Flora Studies",
    desc: "Conducting empirical field research on arid ecosystem resilience, sand dune stabilization, soil salinity reclamation, and indigenous drought-resistant botanicals.",
    image: "/tdrc_hero_research.svg",
    tag: "Applied Science",
    icon: FileSearch,
    deliverables: [
      "Soil physical-chemical profiling and micro-nutrient fertility analysis",
      "Desert sand-dune movement tracking and biological crust stabilization trials",
      "Indigenous arid medicinal plant screening and seed banking repositories",
      "Peer-reviewed scientific reports and international journal publications",
    ],
  },
  {
    id: "environmental-studies",
    title: "Environmental Impact Assessments (EIA & IEE)",
    subtitle: "Statutory Environmental Permitting & Compliance",
    desc: "Delivering complete Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), and Environmental Management Plans (EMP) for mega infrastructure and energy projects.",
    image: "/tdrc_hero_research.svg",
    tag: "EIA & Compliance",
    icon: Leaf,
    deliverables: [
      "Baseline ambient air quality, surface/groundwater, and acoustic noise monitoring",
      "Flora, fauna, and endangered habitat ecological risk mitigation mapping",
      "Regulatory public hearing facilitation and EPA statutory clearance approvals",
      "Quarterly post-construction environmental compliance auditing reports",
    ],
  },
  {
    id: "sustainable-development",
    title: "Climate Adaptation & Desert Greening",
    subtitle: "Agro-Forestry Shelterbelts & Water Conservation",
    desc: "Designing large-scale climate adaptation programs that integrate drought-hardy tree shelterbelts, solar-powered high-efficiency drip irrigation, and groundwater aquifer replenishment.",
    image: "/tdrc_hero_research.svg",
    tag: "Climate & Forestry",
    icon: Sprout,
    deliverables: [
      "Afforestation shelterbelt master planning protecting agricultural fields from desert encroachment",
      "Solar-powered pressurized micro-drip and subsurface irrigation system design",
      "Deep aquifer hydrological modeling and managed artificial aquifer recharge pits",
      "Carbon sequestration metrics and verified voluntary carbon credit accounting",
    ],
  },
  {
    id: "policy-research",
    title: "Evidence-Based Policy Research & Governance",
    subtitle: "Strategic Policy Briefs & Institutional Roadmaps",
    desc: "Providing government ministries, international donors, and development agencies with actionable policy analysis, economic cost-benefit evaluations, and governance frameworks.",
    image: "/tdrc_hero_research.svg",
    tag: "Policy & Strategy",
    icon: Scale,
    deliverables: [
      "Sectoral policy review, legislative gap analysis, and regulatory drafting",
      "Socio-economic cost-benefit modeling and econometric impact forecasting",
      "Institutional governance restructuring and regulatory reform roadmaps",
      "Executive policy briefs and stakeholder consensus workshop moderation",
    ],
  },
  {
    id: "social-programs",
    title: "Social Development & Rural Livelihoods",
    subtitle: "Community Empowerment, Food Security & Skills",
    desc: "Executing participatory community development programs focusing on climate-resilient agriculture, rural women entrepreneurship, clean water access, and food security.",
    image: "/tdrc_hero_research.svg",
    tag: "Social Development",
    icon: Users2,
    deliverables: [
      "Participatory rural appraisals (PRA) and household socio-economic baselines",
      "Smallholder farmer climate-smart agricultural training and seed distribution",
      "Community-managed solar water purification plants and hygiene campaigns",
      "Vocational skill training programs for youth and rural women cooperatives",
    ],
  },
  {
    id: "capacity-building",
    title: "GIS, Satellite Remote Sensing & Training",
    subtitle: "Spatial Mapping, Drone Surveys & Professional Academies",
    desc: "Utilizing advanced GIS mapping, satellite multi-spectral remote sensing, and drone aerial surveys alongside technical capacity-building workshops for public and private organizations.",
    image: "/tdrc_hero_research.svg",
    tag: "GIS & Capacity Building",
    icon: GraduationCap,
    deliverables: [
      "High-resolution multispectral satellite imagery analysis for land use and crop health",
      "RTK-equipped drone topographical mapping and 3D digital elevation models (DEM)",
      "Professional GIS and environmental compliance certification masterclasses",
      "Institutional research data infrastructure and digital portal development",
    ],
  },
];

const SERVICE_STATS = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "600+", label: "Projects Completed", icon: FileSearch },
  { value: "150+", label: "Research Scientists", icon: Users2 },
  { value: "98%", label: "Approval Success", icon: ShieldCheck },
];

export default function TDRCServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = RESEARCH_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Scientific Research &amp; Advisory Capabilities</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
                Applied Research For <span style={{ color: theme.primaryDark }}>Sustainable Development</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From statutory Environmental Impact Assessments (EIA) and satellite GIS remote sensing to desert agro-forestry afforestation and evidence-based policy formulation, TDRC delivers multidisciplinary solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/TDRC/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.ink }}
                >
                  <span>Request Scientific Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/tdrc_hero_research.svg"
                  alt="TDRC Research Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#1F7A3E]">
                      Specialized Research Divisions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.ink }}>
                      EIA Assessments · GIS Mapping · Climate Studies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="tdrc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}15` }}>
                    <Icon size={22} style={{ color: theme.primaryDark }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.ink }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Research &amp; Advisory Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Conducted in accordance with international ISO, EPA, and peer-reviewed scientific methodologies.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search research divisions (e.g. EIA, GIS, Climate, Policy, Livelihoods)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="tdrc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E1F17]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primary}15` }}>
                          <Icon size={20} style={{ color: theme.primaryDark }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.ink }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#1F7A3E]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(225, 233, 227, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.ink }}>
                          Key Research Highlights:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#2E9E54]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/TDRC/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.ink }}
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#1F7A3E]">
                NEED INSTITUTIONAL ENVIRONMENTAL COMPLIANCE OR EIA?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Commission An Environmental Impact Study
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified environmental practitioners to structure baseline surveys, public hearing documentation, and EPA clearances.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Request EIA Study Terms</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.ink, color: theme.ink }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
