"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Droplets,
  HardHat,
  Layers,
  Leaf,
  MapPin,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Users2,
  Wind,
  ArrowRight,
  Globe,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/DesertDevShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Environmental\nEngineering Experience" },
  { icon: Globe, value: "200+", label: "Desert Rehabilitation\nProjects Completed" },
  { icon: Trees, value: "5M+", label: "Native Trees\nPlanted Nationwide" },
  { icon: Users2, value: "300+", label: "Environmental Specialists\n& Hydrologists" },
  { icon: Compass, value: "30+", label: "Arid Regions\nSuccessfully Restored" },
];

const SERVICES = [
  {
    icon: Sprout,
    title: "Scientific Desert Rehabilitation",
    desc: "Restoration of degraded arid ecosystems through engineered sand dune stabilization, bio-crust microbial crumbing, and native flora planting.",
    href: "/group-companies/desert-development/services#desert-rehabilitation",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    icon: Layers,
    title: "Arid Land Reclamation",
    desc: "Transforming barren and hypersaline scrubland into highly productive agricultural, industrial, and urban development acreage.",
    href: "/group-companies/desert-development/services#land-reclamation",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    icon: HardHat,
    title: "Sustainable Arid Infrastructure",
    desc: "Engineering thermal-resistant roadways, wadi flash-flood check dams, heavy earthworks, and eco-friendly modular desert facilities.",
    href: "/group-companies/desert-development/services#sustainable-infrastructure",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    icon: Droplets,
    title: "Deep Aquifer & Solar Water Hydrology",
    desc: "Solar-powered deep tube wells, brackish water reverse osmosis desalination, and zero-evaporation subsurface drip irrigation.",
    href: "/group-companies/desert-development/services#water-management",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    icon: Trees,
    title: "Afforestation & Green Belts",
    desc: "Large-scale bio-diverse green walls, drone seeding, and native acacia shelterbelts to combat desertification and sequester carbon.",
    href: "/group-companies/desert-development/services#afforestation",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    icon: Sun,
    title: "Renewable Solar & Wind Parks",
    desc: "Utility-scale desert solar PV farms, agrivoltaic dual-use crop cultivation, and off-grid hybrid renewable microgrids.",
    href: "/group-companies/desert-development/services#renewable-energy",
    img: "/desertdev_hero_rehab.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Mega-Afforestation Green Wall Suite",
    tag: "Green Wall Corridor",
    desc: "Planting 500,000+ native tree saplings per grid with automated drone seedling dispersion and solar drip networks.",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    name: "Solar Brackish Desalination Hub",
    tag: "Water Generation",
    desc: "Solar PV reverse osmosis plant producing 1,500 m³/day of potable water for agricultural crops and communities.",
    img: "/desertdev_hero_rehab.svg",
  },
  {
    name: "Sand Dune Stabilization Matrix",
    tag: "Dune Fixation",
    desc: "10,000 hectares straw checkerboards and bio-crust microbial inoculants arresting mobile sand drift along highways.",
    img: "/desertdev_hero_rehab.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "GIS & Multispectral Topographical Survey", desc: "Conducting satellite LiDAR terrain mapping, deep core soil chemistry analysis, and groundwater hydrology logging." },
  { num: "02", title: "Ecological & Hydrological Masterplanning", desc: "Formulating customized land rehabilitation strategies, water balance models, and native botanical selection matrices." },
  { num: "03", title: "Solar Well Drilling & Water Engineering", desc: "Executing solar-powered deep aquifer drilling, brackish water reverse osmosis installation, and subsurface drip networks." },
  { num: "04", title: "Mechanical Dune Fixation & Earthworks", desc: "Installing straw grid checkerboards, wadi flood check dams, and organic biochar soil conditioning." },
  { num: "05", title: "Afforestation & Bio-Crust Inoculation", desc: "Automated drone seed ball dispersion and nursery sapling planting with microbial mycorrhizal inoculants." },
  { num: "06", title: "IoT Sensor Monitoring & Carbon Auditing", desc: "Continuous satellite NDVI vegetative growth monitoring, soil moisture telemetry, and carbon credit certification." },
];

const FAQS = [
  {
    q: "How does Desert Development & Rehabilitation stabilize shifting sand dunes?",
    a: "We deploy an integrated approach combining mechanical straw and geo-textile checkerboard grids (which reduce wind surface velocity) with biological microbial crusts and hyper-drought-tolerant native vegetation that permanently anchors sand dunes.",
  },
  {
    q: "What water sources are utilized in remote arid rehabilitation projects?",
    a: "We extract deep brackish aquifers using solar-powered submersible pumps, purify the water using containerized solar reverse osmosis (BWRO) units, and utilize subsurface pressure-compensated drip emitters that eliminate 95% of evaporation losses.",
  },
  {
    q: "Which native tree species are planted during afforestation programs?",
    a: "We prioritize indigenous, hyper-drought-tolerant species including Acacia Nilotica (Kikar), Prosopis Cineraria (Kandi), Ziziphus Mauritiana (Ber), Tamarix Aphylla (Ghaz), and wild olive cultivars adapted to thrive in extreme arid conditions.",
  },
  {
    q: "Are your rehabilitation projects aligned with international carbon offset standards?",
    a: "Yes. Our afforestation and ecological restoration projects are designed in alignment with UNCCD Land Degradation Neutrality protocols, with biomass carbon sequestration certified under international Gold Standard and Verra (VCS) carbon credit frameworks.",
  },
];

export default function DesertDevHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section with Ecological Restoration Console */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Leading Desert Development &amp; Environmental Rehabilitation Company</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
                Desert Development &amp; Rehabilitation. <span style={{ color: theme.primary }}>Transforming Arid Landscapes.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Desert Development &amp; Rehabilitation is a leading environmental engineering and land development company specializing in desert rehabilitation, sustainable infrastructure, land reclamation, ecological restoration, water management, afforestation, renewable energy integration, and climate-resilient development across 30+ regions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/desert-development/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Rehabilitation Suites</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/desert-development/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkGreen }}
                >
                  <span>Contact Our Environmental Experts</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev_hero_rehab.svg"
                  alt="Desert Development & Rehabilitation Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#2D7D62]">
                        5M+ Trees Planted
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.darkGreen }}>
                      200+ Projects · 30+ Restored Regions · UNCCD Aligned
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
                  className="dd-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.darkGreen }}>
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
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev_hero_rehab.svg"
                  alt="Ecological Restoration & Afforestation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C15]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#E2B774] mb-1">
                      Arid Engineering Excellence
                    </p>
                    <h4 className="text-base font-bold">Building Sustainable Futures in Desert Regions</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Desert Development</SectionLabel>
              <SectionHeading className="mb-6">Restoring Degraded Lands &amp; Developing Arid Infrastructure</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Desert Development &amp; Rehabilitation combines environmental science, engineering expertise, and innovative technologies to restore degraded lands and develop sustainable infrastructure across arid and semi-arid regions. Our multidisciplinary team creates resilient landscapes that improve biodiversity, conserve natural resources, and support long-term economic development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-emerald-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2D7D62] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">UNCCD &amp; ISO 14001 Compliant</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-emerald-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2D7D62] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">5M+ Native Trees Planted</span>
                </div>
              </div>

              <Link
                href="/group-companies/desert-development/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1B4D3E]"
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
              <SectionLabel>What We Engineer</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/desert-development/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.darkGreen }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="dd-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primary}10` }}>
                        <Icon size={20} style={{ color: theme.primary }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.darkGreen }}>
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.darkGreen }}
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

      {/* Featured Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Signature Suites</SectionLabel>
              <SectionHeading>Featured Turnkey Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/desert-development/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((s) => (
              <div
                key={s.name}
                className="dd-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#2D7D62]/15 text-[#1B4D3E] inline-block mb-3">
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.darkGreen }}>
                      {s.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/desert-development/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.darkGreen }}
                  >
                    <span>Request Proposal</span>
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
            <SectionLabel center>Scientific Methodology</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Arid Rehabilitation Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From GIS topographical mapping and groundwater hydrology drilling to straw checkerboard dune fixation and carbon credit certification.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.primary }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.darkGreen }}>
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
                  style={{ color: theme.darkGreen }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#2D7D62]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#2D7D62]">
                COMMENCE YOUR ARID RESTORATION PROGRAM TODAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Schedule An Environmental Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal environmental scientists and lead hydrologists to review satellite soil maps, groundwater surveys, and sustainable afforestation blueprints.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Custom Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
