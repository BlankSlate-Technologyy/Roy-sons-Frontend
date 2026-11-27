"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  Drill,
  Factory,
  FlaskConical,
  Globe,
  HardHat,
  Landmark,
  Layers,
  Leaf,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  NationalMinesTeamSection,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NationalMinesShared";

const HERO_SLIDES = [
  {
    image: "/ROYSONS Slider Image 3.jpeg",
    tag: "Tethyan Metallogenic Belt · Chagai & Nationwide Concessions",
    title: "Unlocking Pakistan's $6T+ Mineral Wealth With Modern Mining",
    desc: "Extracting, refining, and delivering certified copper-gold, Himalayan rock salt, chromite, iron ore, and industrial minerals fueling Pakistan's infrastructure, energy, and global export corridors.",
  },
  {
    image: "/mine header.png",
    tag: "Heavy Open-Pit Extraction & Automated Haulage Fleets",
    title: "Large-Scale Open-Pit Engineering & Bulk Extraction Fleets",
    desc: "High-capacity 100-ton haul trucks, electric hydraulic excavators, and rotary blast-hole drill rigs operating under strict ISO 45001 zero-harm safety protocols.",
  },
  {
    image: "/services/mining-2.jpg",
    tag: "High-Purity Metallurgy & SIFC-Aligned Value Addition",
    title: "Modern Mineral Processing & Automated Flotation Plants",
    desc: "Closed-loop crushing, SAG ball milling, froth flotation cells, and certified XRF/fire assay laboratories delivering export-grade concentrates and bullion.",
  },
];

const STATS = [
  { icon: Award, value: "20+", label: "Years of Mining\nExcellence" },
  { icon: BarChart3, value: "50+", label: "Exploration &\nMine Leases" },
  { icon: Truck, value: "5M+", label: "Tons of Minerals\nProcessed" },
  { icon: Users, value: "500+", label: "Engineers &\nGeologists" },
  { icon: ShieldCheck, value: "99%", label: "ISO 45001 Safety\nCompliance" },
];

const PAKISTAN_MACRO_HIGHLIGHTS = [
  { value: "600K+ km²", label: "Mapped Prospective Mineral Terrain across Pakistan (GSP)" },
  { value: "$6T – $10T", label: "Estimated Untapped National Natural Resource Potential" },
  { value: "92 Minerals", label: "Identified Nationwide — 52 Actively Mined Commercially" },
  { value: "SIFC Aligned", label: "Fast-Tracked Value-Addition & Export Mineral Corridors" },
];

const CORE_SERVICES = [
  {
    icon: Drill,
    title: "Mining Operations",
    desc: "High-capacity open-pit and underground extraction utilizing 100-ton haul trucks, rotary blast rigs, and 24/7 GPS fleet dispatch.",
    href: "/group-companies/national-mines/services#operations",
    image: "/services/mining-1.jpg",
    tag: "Extraction",
  },
  {
    icon: Mountain,
    title: "Mineral Exploration",
    desc: "Drone LiDAR & hyperspectral satellite mapping, deep diamond core drilling up to 1,500m, and 3D JORC deposit modeling.",
    href: "/group-companies/national-mines/services#exploration",
    image: "/images/tdrc/research_gis.jpg",
    tag: "Exploration",
  },
  {
    icon: HardHat,
    title: "Mine Development",
    desc: "Pit shell optimization, geotechnical slope stability analysis, heavy haul road engineering, and bankable feasibility studies.",
    href: "/group-companies/national-mines/services#development",
    image: "/images/walton/hero_engineering_team.jpg",
    tag: "Engineering",
  },
  {
    icon: FlaskConical,
    title: "Mineral Processing",
    desc: "Multi-stage crushing, SAG milling, closed-loop froth flotation, and induction smelting for peak metallurgical recovery.",
    href: "/group-companies/national-mines/services#processing",
    image: "/maxpak/epc_plant.jpg",
    tag: "Beneficiation",
  },
  {
    icon: Layers,
    title: "Geological Services",
    desc: "Certified laboratory fire assays, XRF spectrometry, diamond core logging, and Competent Person resource estimations.",
    href: "/group-companies/national-mines/services#geological",
    image: "/ROYSONS Slider image 2.jpeg",
    tag: "Assays",
  },
  {
    icon: Building2,
    title: "Mining Infrastructure",
    desc: "Bulk rail freight loadout sidings, dry-stack tailings filtration, heavy fleet maintenance bays, and solar hybrid microgrids.",
    href: "/group-companies/national-mines/services#infrastructure",
    image: "/project-industrial-plant.jpg",
    tag: "Infrastructure",
  },
];

const FEATURED_MINERALS = [
  {
    name: "Copper (Cu)",
    grade: "28–32% Concentrate",
    origin: "Chagai (Reko Diq & Saindak Belt)",
    desc: "High-grade porphyry copper concentrate and cathodes from Balochistan's Tethyan arc for global smelters and electrification.",
    slug: "copper-cu",
    image: "/mine copper.png",
    tag: "Base Metals",
  },
  {
    name: "Gold (Au)",
    grade: "99.4% Purity",
    origin: "Chagai & Northern Concessions",
    desc: "Certified gold doré bullion bars and placer concentrates from epithermal quartz veins with full chain-of-custody assays.",
    slug: "gold-au",
    image: "/mine gold.png",
    tag: "Precious Metals",
  },
  {
    name: "Himalayan Pink Salt",
    grade: "98%+ NaCl Purity",
    origin: "Khewra & Salt Range, Punjab",
    desc: "Authentic Khewra-belt crystalline pink rock salt from the world's 2nd largest salt reserves for culinary, wellness, and industrial export.",
    slug: "himalayan-pink-salt-nacl",
    image: "/national-mines/mineral-pink-salt.png",
    tag: "Evaporite Minerals",
  },
  {
    name: "Iron Ore (Fe)",
    grade: "62–65% Fe Content",
    origin: "Chiniot & Kalabagh Reserves",
    desc: "Magnetically beneficiated magnetite and hematite lumps powering Pakistan's integrated steel mills and DRI plants.",
    slug: "iron-ore-fe",
    image: "/national-mines/mineral-iron-ore.png",
    tag: "Ferrous Minerals",
  },
  {
    name: "Coal (Lignite & Thermal)",
    grade: "6,200+ kcal/kg",
    origin: "Thar Coalfield & Salt Range",
    desc: "High-calorific industrial steam coal and Thar-belt energy supplies supporting power generation, cement kilns, and chemical plants.",
    slug: "coal-anthracite-bituminous",
    image: "/national-mines/mineral-coal.png",
    tag: "Energy Resources",
  },
  {
    name: "Chromite (Cr2O3)",
    grade: "46–48% Cr2O3 (3:1)",
    origin: "Muslim Bagh, Balochistan",
    desc: "World-renowned ophiolite metallurgical lumpy chromite with superior 3:1 Cr:Fe ratio for ferrochrome and stainless steel alloys.",
    slug: "chromite-cr2o3",
    image: "/national-mines/mineral-chromite.png",
    tag: "Strategic Minerals",
  },
];

const INDUSTRIES = [
  { icon: Building, label: "Construction & Aggregates", desc: "ASTM C33 limestone aggregates, granite sub-base, and NHA highway chips.", href: "/group-companies/national-mines/industries/construction-aggregates" },
  { icon: Landmark, label: "Infrastructure Development", desc: "Breakwater armor rock, AREMA railway ballast, and CPEC motorway materials.", href: "/group-companies/national-mines/industries/infrastructure-development" },
  { icon: Factory, label: "Steel & Alloys Manufacturing", desc: "Chiniot/Kalabagh iron ore lumps, Muslim Bagh chromite, and limestone flux.", href: "/group-companies/national-mines/industries/steel-alloys-manufacturing" },
  { icon: Building2, label: "Cement & Building Materials", desc: "94.5%+ high-calcium Margalla limestone, Daudkhel gypsum, and silica shale.", href: "/group-companies/national-mines/industries/cement-building-materials" },
  { icon: Zap, label: "Energy & Captive Power", desc: "Indigenous Thar & Salt Range thermal coal supplies for industrial boilers.", href: "/group-companies/national-mines/industries/energy-power-generation" },
  { icon: Globe, label: "Global Bulk Exports", desc: "SGS-certified FOB Gwadar & Karachi mineral shipments to Asia, MENA & Europe.", href: "/group-companies/national-mines/industries/international-bulk-exports" },
];

const PAKISTAN_MINING_CORRIDORS = [
  {
    title: "Chagai Copper-Gold Corridor (Reko Diq & Saindak Belt)",
    region: "Chagai District, Balochistan",
    desc: "Positioned along the Tethyan Metallogenic Belt—home to Reko Diq's 5.9-billion-tonne porphyry copper-gold reserve and Saindak's 412M+ tonne producing complex—delivering high-grade sulfide concentrates and precious metal credits.",
    image: "/desertdev/sand_dune_fixation.jpg",
    metric: "5.9B+ Tonne Belt Scale",
    status: "Copper · Gold · Silver",
  },
  {
    title: "Khewra & Salt Range Mineral Belt",
    region: "Jhelum & Mianwali, Punjab",
    desc: "Anchored by the world's second-largest rock salt reserve (1B+ tonnes of 98% pure Himalayan Pink Salt) alongside massive high-calcium limestone, crystalline gypsum, and 99.2% low-iron Mianwali silica sand formations.",
    image: "/national-mines/project-khewra-salt.png",
    metric: "1B+ Tonnes Salt Reserves",
    status: "Pink Salt · Limestone · Silica",
  },
  {
    title: "Thar Lignite Energy & Industrial Basin",
    region: "Tharparkar, Sindh",
    desc: "Spanning over 175 billion tonnes of indigenous lignite reserves, transforming Pakistan's domestic power generation, industrial boiler fuel supply, and emerging coal-to-urea and gasification feedstocks.",
    image: "/maxpower/hero_power_generation.jpg",
    metric: "175B+ Tonnes Coal Basin",
    status: "Thermal Power · Coal",
  },
  {
    title: "Muslim Bagh Chromite, Duddar & Chiniot Ferrous Belt",
    region: "Balochistan & Central Punjab",
    desc: "Encompassing Muslim Bagh's high-ratio ophiolite chromite (46–48% Cr2O3), Khuzdar's Duddar lead-zinc-barite deposits, and Punjab's strategic Chiniot iron ore reserves supporting national steel self-reliance.",
    image: "/national-mines/project-muslim-bagh.png",
    metric: "48% Cr2O3 & 65% Fe",
    status: "Chromite · Iron · Lead-Zinc",
  },
];

const FAQS = [
  {
    q: "Which major Pakistani mineral belts does National Mines Corporation operate across?",
    a: "We source, explore, and develop concessions across Pakistan's premier mineral corridors including the Chagai Copper-Gold Belt (Balochistan), the Khewra & Salt Range belt (Punjab), Muslim Bagh Chromite ophiolites, Chiniot/Kalabagh iron formations, Thar & Lakhra coal basins (Sindh), and Mianwali silica reserves.",
  },
  {
    q: "How do you guarantee mineral grade accuracy and international export compliance?",
    a: "Every domestic and export shipment undergoes certified XRF spectrometry and fire assay testing in accredited laboratories, backed by independent third-party SGS, Bureau Veritas, or Intertek inspection certificates at Karachi, Port Qasim, or Gwadar ports.",
  },
  {
    q: "Are your operations aligned with SIFC, GSP, and Provincial Mining Concession Rules?",
    a: "Yes. All exploration licenses, mining leases, and processing plants operate in full compliance with Provincial Mines & Minerals Acts, Geological Survey of Pakistan (GSP) mapping frameworks, JORC reporting codes, and SIFC value-addition guidelines.",
  },
  {
    q: "What environmental and mine safety standards do you enforce?",
    a: "We uphold ISO 45001 zero-harm workplace safety (99% compliance), recycle over 92% of process water in closed-loop circuits, use engineered dry-stack tailings to eliminate dam risk, and conduct progressive bench reforestation.",
  },
];

export default function NationalMinesHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* ─── 1. CINEMATIC MINING HERO SECTION WITH SMOOTH SLIDER ─────────── */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center justify-center border-b overflow-hidden bg-[#07111C]" style={{ borderColor: theme.border }}>
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
              currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07111C]/92 via-[#0B1B2B]/80 to-[#07111C]/55" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 lg:py-18 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-xs sm:text-[13px] font-semibold uppercase tracking-wider mb-5">
              <Mountain size={15} style={{ color: theme.goldLight }} />
              <span className="text-white">{HERO_SLIDES[currentSlide].tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
              {HERO_SLIDES[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] font-normal leading-relaxed text-slate-100 mb-8 max-w-2xl">
              {HERO_SLIDES[currentSlide].desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/group-companies/national-mines/minerals"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-[15px] font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Explore Mineral Reserves</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/group-companies/national-mines/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-[15px] font-semibold border border-white/40 text-white bg-white/5 backdrop-blur-xs transition-all duration-300 hover:bg-white/15 cursor-pointer"
              >
                <span>Request Procurement Proposal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-3">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#C59B27]" : "w-2.5 bg-white/45 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 ml-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-2 rounded-lg border border-white/25 bg-black/35 hover:bg-black/60 text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-2 rounded-lg border border-white/25 bg-black/35 hover:bg-black/60 text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. OPERATIONS & IMPACT STATISTICS ───────────────────────────── */}
      <section className="py-9 sm:py-11 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.gold}18` }}>
                    <Icon size={22} style={{ color: theme.gold }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold tracking-wide uppercase whitespace-pre-line leading-snug" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT NATIONAL MINES CORPORATION ─────────────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[340px] sm:h-[410px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/logos/mining and mineral.jpg.jpeg"
                  alt="National Mines Corporation Open-Pit Mining and Processing Operations"
                  fill
                  className="object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/85 via-transparent to-transparent flex items-end p-5 sm:p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Roy &amp; Sons Group Company · Pakistan Mining Leader
                    </p>
                    <p className="text-sm sm:text-[15px] font-semibold" style={{ color: theme.navy }}>
                      Chagai Porphyry Belt · Salt Range · Thar Basin · Muslim Bagh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Corporate Background</SectionLabel>
              <SectionHeading className="mb-4">
                Industrial Strength Backed by Geological Science
              </SectionHeading>

              <p className="text-base sm:text-[17px] font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd (NMC) is an established Pakistani natural resources exploration, mining, and metallurgical processing enterprise. Operating across premier metallogenic belts in Balochistan, Punjab, Sindh, and Khyber Pakhtunkhwa, we transform subsurface mineral wealth into certified raw ores and refined concentrates.
              </p>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-5" style={{ color: theme.textMuted }}>
                Aligned with the Special Investment Facilitation Council (SIFC) and Geological Survey of Pakistan (GSP) mineral development frameworks, NMC emphasizes local beneficiation, SGS-verified purity, and export-ready bulk logistics through Gwadar and Karachi ports.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">ISO 45001 Zero-Harm Mandate</span>
                </div>
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Certified XRF &amp; SGS Assays</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-mines/about"
                className="mine-link-arrow cursor-pointer w-fit"
              >
                <span>Read complete corporate overview</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PAKISTAN'S MINERAL WEALTH & STRATEGIC CORRIDORS ──────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Pakistan Mining Landscape</SectionLabel>
            <SectionHeading center className="mb-3">
              Flagship Pakistani Mineral Corridors &amp; Concessions
            </SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Pakistan spans over 600,000 sq km of mineral-rich geology—from the world-class Tethyan copper-gold arc in Chagai to the iconic Khewra Salt Range and 175B-tonne Thar lignite basin.
            </p>
          </div>

          {/* Macro Pakistan Mining Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
            {PAKISTAN_MACRO_HIGHLIGHTS.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl p-5 border bg-[#0B1B2B] text-white flex flex-col justify-between shadow-sm"
                style={{ borderColor: theme.borderDark }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1.5" style={{ color: theme.goldLight }}>
                  {item.value}
                </p>
                <p className="text-sm font-normal leading-snug text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Flagship Corridors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAKISTAN_MINING_CORRIDORS.map((proj) => (
              <div
                key={proj.title}
                className="mine-card group rounded-2xl overflow-hidden bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="mine-img-wrapper relative w-full h-56 bg-slate-900">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border shadow-xs text-xs font-bold uppercase tracking-wide" style={{ color: theme.navy, borderColor: theme.border }}>
                      <MapPin size={13} style={{ color: theme.gold }} />
                      <span>{proj.region}</span>
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-black/80 text-amber-300 border border-amber-400/30">
                        {proj.metric}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-900/90 text-emerald-200 border border-emerald-400/30">
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-[#C59B27] transition-colors" style={{ color: theme.navy }}>
                      {proj.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t flex items-center justify-between" style={{ borderColor: theme.borderLight }}>
                  <Link
                    href="/group-companies/national-mines/minerals"
                    className="mine-link-arrow cursor-pointer"
                  >
                    <span>Explore corridor commodities</span>
                    <ArrowRight size={15} />
                  </Link>
                  <span className="text-xs uppercase font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Active Belt
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. STRATEGIC MINERAL RESERVES (6 UNIQUE SPECIMENS) ──────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <SectionLabel>Mineral Portfolio</SectionLabel>
              <SectionHeading>Strategic Pakistani Mineral Reserves</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/minerals"
              className="mine-link-arrow cursor-pointer"
            >
              <span>Explore all 11 minerals</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_MINERALS.map((min) => (
              <div
                key={min.slug}
                className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
              >
                <div>
                  <Link
                    href={`/group-companies/national-mines/minerals/${min.slug}`}
                    className="mine-img-wrapper block w-full h-52 bg-slate-950 relative cursor-pointer"
                  >
                    <Image
                      src={min.image}
                      alt={min.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                        {min.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-black/85 text-amber-300 border border-amber-500/40">
                        {min.grade}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-bold tracking-tight mb-1" style={{ color: theme.navy }}>
                      <Link href={`/group-companies/national-mines/minerals/${min.slug}`} className="hover:text-[#C59B27] transition-colors">
                        {min.name}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-[13px] font-semibold text-amber-700 mb-2 flex items-center gap-1.5">
                      <Compass size={13} />
                      <span>{min.origin}</span>
                    </p>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {min.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                  <Link
                    href={`/group-companies/national-mines/minerals/${min.slug}`}
                    className="mine-link-arrow cursor-pointer"
                  >
                    <span>View commodity specifications</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CORE SERVICES (6 UNIQUE TECHNICAL IMAGES) ────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <SectionLabel>Technical Operations</SectionLabel>
              <SectionHeading>Core Mining &amp; Exploration Services</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/services"
              className="mine-link-arrow cursor-pointer"
            >
              <span>View all 8 services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    <Link
                      href={svc.href}
                      className="mine-img-wrapper block w-full h-48 bg-slate-100 relative cursor-pointer"
                    >
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}18` }}>
                          <Icon size={18} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: theme.navy }}>
                          <Link href={svc.href} className="hover:text-[#C59B27] transition-colors">
                            {svc.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={svc.href}
                      className="mine-link-arrow cursor-pointer"
                    >
                      <span>Explore specifications</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. EXECUTIVE LEADERSHIP & MINING COUNCIL (TEAM SECTION) ─────── */}
      <NationalMinesTeamSection bgClass="bg-[#F8FAFC]" />

      {/* ─── 8. MINING & MINERAL DEVELOPMENT LIFECYCLE ───────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-3">6-Stage Mining &amp; Mineral Development</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              From GSP-aligned satellite reconnaissance to heavy excavation, closed-loop refining, and progressive land rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Geological Survey & Mapping", desc: "Hyperspectral satellite imaging, geochemical stream sampling, and high-resolution magnetic surveys across prospective belts.", icon: Mountain },
              { num: "02", title: "Exploration Core Drilling", desc: "Wireline diamond core rigs recovering continuous core samples up to 1,500m to verify depth, strike, and ore grade.", icon: Drill },
              { num: "03", title: "Mine Planning & JORC Modeling", desc: "3D block modeling, geotechnical slope stability engineering, and bankable economic feasibility studies.", icon: HardHat },
              { num: "04", title: "Precision Heavy Extraction", desc: "Controlled electronic blasting, hydraulic excavators, and 100-ton rigid haul truck GPS dispatch telemetry.", icon: Truck },
              { num: "05", title: "Beneficiation & Flotation", desc: "Multi-stage crushing, SAG ball milling, froth flotation cells, and induction smelting for export-grade purity.", icon: FlaskConical },
              { num: "06", title: "Progressive Rehabilitation", desc: "Simultaneous bench grading, topsoil restoration, native reforestation, and 92% closed-loop water recycling.", icon: Leaf },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${theme.gold}18` }}>
                        <Icon size={20} style={{ color: theme.gold }} />
                      </div>
                      <span className="text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        STAGE {step.num}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 leading-snug" style={{ color: theme.navy }}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. INDUSTRIES WE SERVE ──────────────────────────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Downstream Integration</SectionLabel>
            <SectionHeading center className="mb-3">Industries We Empower</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Supplying verified raw materials and refined mineral concentrates to the foundations of modern industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="mine-card group rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5" style={{ backgroundColor: `${theme.gold}18` }}>
                      <Icon size={20} style={{ color: theme.gold }} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 leading-snug group-hover:text-[#C59B27] transition-colors" style={{ color: theme.navy }}>
                      {ind.label}
                    </h3>
                    <p className="text-sm sm:text-[15px] font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                      {ind.desc}
                    </p>
                  </div>

                  <Link
                    href={ind.href}
                    className="mine-link-arrow cursor-pointer w-fit"
                  >
                    <span>Explore industry specs</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. SUSTAINABILITY & RESPONSIBLE STEWARDSHIP ────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Environmental Stewardship</SectionLabel>
              <SectionHeading className="mb-4">
                Responsible Mining for a Sustainable Future
              </SectionHeading>

              <p className="text-base sm:text-[17px] font-normal leading-relaxed mb-5" style={{ color: theme.textMuted }}>
                Sustainable resource extraction is central to our operational mandate. From closed-loop process water recycling that conserves over 92% of water in arid Balochistan and Sindh regions, to progressive bench reforestation and zero-toxic liquid discharge, we protect local ecosystems.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "92% Process water recycled through thickeners and pressure filtration",
                  "Simultaneous bench grading, topsoil restoration, and native reforestation",
                  "Zero-toxic chemical effluent discharged into regional aquifers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreen }} />
                    <span className="text-sm sm:text-[15px] font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/group-companies/national-mines/sustainability"
                className="mine-link-arrow cursor-pointer w-fit"
              >
                <span>Read our full sustainability framework</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[330px] sm:h-[390px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/desertdev/mining_rehabilitation.jpg"
                  alt="Mine Environmental Rehabilitation and Mountain Reforestation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. FAQS SECTION ────────────────────────────────────────────── */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFC]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Common Questions</SectionLabel>
            <SectionHeading center className="mb-3">Mining &amp; Procurement FAQs</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="mine-card rounded-xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-[17px] cursor-pointer"
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C59B27]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm sm:text-[15px] font-normal leading-relaxed border-t pt-3.5 text-slate-600" style={{ borderColor: theme.borderLight }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. BOTTOM CTA / INQUIRY BANNER ─────────────────────────────── */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0B1B2B] text-white shadow-md" style={{ borderColor: theme.borderDark }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Bulk Mineral Supply &amp; Concession Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Request Mineral Allocations &amp; Technical Assays
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-2xl text-slate-200 leading-relaxed">
                Connect directly with our commercial trading desk in Lahore or our Quetta and Port Qasim hubs for SGS assay sheets, volume off-take contracts, and FOB export terms.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Submit Procurement Inquiry</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+923218431665"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold border border-white/30 text-white flex items-center gap-2 transition-all hover:bg-white/10 cursor-pointer"
              >
                <Phone size={15} style={{ color: theme.goldLight }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
