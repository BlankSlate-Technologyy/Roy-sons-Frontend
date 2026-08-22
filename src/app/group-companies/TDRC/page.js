"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Compass,
  Cpu,
  Database,
  Droplets,
  Eye,
  Factory,
  FileSearch,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  Phone,
  Radar,
  Satellite,
  Scale,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Target,
  TreePine,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Wheat,
  Wind,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/TDRCShared";

const STATS = [
  { icon: Award, value: "20+", label: "Years of Applied\nResearch Excellence" },
  { icon: Briefcase, value: "600+", label: "Completed Research\n& Policy Studies" },
  { icon: Users2, value: "150+", label: "Research Scientists\n& Field Experts" },
  { icon: Handshake, value: "45+", label: "National & International\nInstitutional Partners" },
  { icon: Target, value: "98%", label: "Project Success\n& Approval Rate" },
];

const SERVICES = [
  {
    icon: FileSearch,
    title: "Applied Scientific Research",
    desc: "Conducting empirical research on arid land ecology, soil chemistry, botanical screening, and ecosystem restoration.",
    href: "/group-companies/TDRC/services#applied-research",
    img: "/tdrc_hero_research.svg",
  },
  {
    icon: Leaf,
    title: "Environmental Studies (EIA & IEE)",
    desc: "Comprehensive Environmental Impact Assessments, baseline air/water monitoring, and EPA statutory clearances.",
    href: "/group-companies/TDRC/services#environmental-studies",
    img: "/tdrc_hero_research.svg",
  },
  {
    icon: Sprout,
    title: "Climate Adaptation & Greening",
    desc: "Arid zone agro-forestry shelterbelts, sand dune stabilization, and solar-powered micro-drip irrigation programs.",
    href: "/group-companies/TDRC/services#sustainable-development",
    img: "/tdrc_hero_research.svg",
  },
  {
    icon: Scale,
    title: "Evidence-Based Policy Research",
    desc: "Strategic policy analysis, governance frameworks, and econometric modeling for public ministries and donors.",
    href: "/group-companies/TDRC/services#policy-research",
    img: "/tdrc_hero_research.svg",
  },
  {
    icon: Users2,
    title: "Social Development & Livelihoods",
    desc: "Participatory community development, rural women agro-processing cooperatives, and food security initiatives.",
    href: "/group-companies/TDRC/services#social-programs",
    img: "/tdrc_hero_research.svg",
  },
  {
    icon: GraduationCap,
    title: "GIS & Remote Sensing Surveys",
    desc: "Multispectral satellite spatial analysis, drone topographical modeling, and technical capacity-building masterclasses.",
    href: "/group-companies/TDRC/services#capacity-building",
    img: "/tdrc_hero_research.svg",
  },
];

const PROGRAMS_PREVIEW = [
  {
    name: "Thal Desert Agro-Forestry & Afforestation",
    tag: "Desert Greening",
    desc: "50,000+ restored acres planted with drought-hardy acacia and moringa shelterbelts mitigating sand migration.",
    img: "/tdrc_hero_research.svg",
  },
  {
    name: "Indus Basin Groundwater Aquifer Telemetry",
    tag: "Hydrology & Water",
    desc: "120+ telemetric piezometers monitoring water table recharge, salinity flux, and managed aquifer recharge (MAR).",
    img: "/tdrc_hero_research.svg",
  },
  {
    name: "National Climate Resilience & Drought Warning",
    tag: "AI Climate Modeling",
    desc: "Satellite remote sensing delivering seasonal drought advisories to over 100,000 registered agrarian smallholders.",
    img: "/tdrc_hero_research.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Study Design & Scoping", desc: "Formulating research hypotheses, terms of reference (ToR), methodology, and ethical protocols." },
  { num: "02", title: "Field Telemetry & Sampling", desc: "Deploying piezometers, GIS drone surveys, soil coring, and participatory rural stakeholder surveys." },
  { num: "03", title: "Laboratory & Spatial Analysis", desc: "Executing analytical soil chemistry testing, satellite multi-spectral indexing, and econometric modeling." },
  { num: "04", title: "Solution & Strategy Formulation", desc: "Synthesizing evidence into Environmental Management Plans (EMP), technical monographs, and policy briefs." },
  { num: "05", title: "Implementation & Extension", desc: "Guiding field tree plantation, community solar water plant installation, and farmer masterclasses." },
  { num: "06", title: "Continuous Telemetry & Impact", desc: "Long-term hydrological telemetry, carbon offset verification, and post-project ecological monitoring." },
];

const FAQS = [
  {
    q: "What types of environmental studies does TDRC conduct?",
    a: "TDRC conducts full-scope Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), Environmental Management Plans (EMP), baseline ecological surveys, and social impact assessments certified under provincial EPA guidelines.",
  },
  {
    q: "Can TDRC provide GIS mapping and drone aerial surveys?",
    a: "Yes. Our geospatial laboratory utilizes high-resolution multi-spectral satellite imagery, RTK-equipped aerial surveying drones, and GIS digital elevation models (DEM) for flood mapping, crop health indices, and urban planning.",
  },
  {
    q: "How does TDRC support government policymaking and international donors?",
    a: "We deliver empirical policy analysis, econometric impact modeling, and legislative review briefs for ministries, multilateral development banks (World Bank, ADB), and international donor agencies.",
  },
  {
    q: "How can academic researchers access TDRC data and publications?",
    a: "Researchers can browse our online publication repository or submit a formal data access request to our scientific secretariat for raw GIS shapefiles, botanical data, and hydrological telemetry.",
  },
];

export default function TDRCHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section with Research Complex Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Scientific Research &amp; Development Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
                Thal Development &amp; Research. <span style={{ color: theme.primaryDark }}>Evidence-Based Science.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Conducting applied research, environmental studies, and sustainable development initiatives. TDRC brings together leading scientists, PhDs, and field experts to protect natural ecosystems and empower rural communities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/TDRC/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                >
                  <span>Explore Research Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/TDRC/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.ink }}
                >
                  <span>Contact Secretariat</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/tdrc_hero_research.svg"
                  alt="TDRC Applied Environmental Research Centre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#1F7A3E]">
                        600+ Completed Studies
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.ink }}>
                      EIA Studies · Climate Adaptation · GIS Telemetry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.ink }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/tdrc_hero_research.svg"
                  alt="TDRC Applied Environmental Research"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#7BE0A0] mb-1">
                      Scientific Rigor
                    </p>
                    <h4 className="text-base font-bold">Multidisciplinary Labs &amp; GIS Remote Sensing</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Centre</SectionLabel>
              <SectionHeading className="mb-6">Bridging Scientific Innovation &amp; Sustainable Growth</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Thal Development &amp; Research Centre (TDRC) generates high-impact scientific research, ecological restoration frameworks, and evidence-based policy solutions. Combining advanced laboratory analytics, GIS mapping, and participatory community action, we protect natural resources while uplifting regional livelihoods.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2E9E54] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Certified Statutory EIA Authority</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2E9E54] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">45+ Global Institutional Partners</span>
                </div>
              </div>

              <Link
                href="/group-companies/TDRC/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1F7A3E]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/TDRC/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.ink }}
            >
              <span>View All 6 Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="tdrc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primary}15` }}>
                        <Icon size={20} style={{ color: theme.primaryDark }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.ink }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.ink }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Field Deployments</SectionLabel>
              <SectionHeading>Flagship Research Programs</SectionHeading>
            </div>

            <Link
              href="/group-companies/TDRC/programs"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primaryDark }}
            >
              <span>View All Programs</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="tdrc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#2E9E54]/10 text-[#1F7A3E] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.ink }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/TDRC/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.ink }}
                  >
                    <span>Request Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Scientific Research Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From research scoping and GIS field sampling to laboratory testing and policy formulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.primaryDark }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.ink }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.ink }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#2E9E54]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#1F7A3E]">
                NEED SCIENTIFIC CONSULTATION OR ENVIRONMENTAL SURVEY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Consult Our Senior Research Directorate
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified scientists to review project scopes, field survey protocols, and statutory EPA clearance timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Request Consultation</span>
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