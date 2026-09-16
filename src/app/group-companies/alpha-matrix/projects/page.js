"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building,
  Server,
  Plane,
  Flame,
  Layers,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
} from "../components/AlphaMatrixShared";

const defenseProjects = [
  {
    title: "National Frontier Radar & Multi-Sensor Grid",
    client: "Sovereign Border Defense Command",
    location: "National Frontier Borderline",
    category: "Border & Coastal Defense",
    image: "/national-guard-mobile-patrol.png",
    stats: "380 km Coverage • 18 Radar Nodes • 99.99% Uptime",
    desc: "Turnkey deployment of an integrated border surveillance grid uniting 18 Ku-band ground radars, buried fiber-optic acoustic fence arrays, and autonomous thermal PTZ turrets slaved to a centralized C4ISR coordination center.",
    deliverables: [
      "Continuous radar coverage eliminating blind spots across 380km of rugged terrain",
      "Automated target acquisition and micro-Doppler pedestrian/vehicle tracking",
      "Hardened long-distance encrypted microwave links and fiber redundancy",
      "Automated counter-UAS drone patrol and intercept sortie integration",
    ],
  },
  {
    title: "Strategic Defense C4ISR Operations Center",
    client: "Ministry of Defense & National Security",
    location: "Capital Command Complex",
    category: "Command & Control",
    image: "/services/defense-2.jpg",
    stats: "24 Ultra-HD Displays • 3D Tactical GIS • Zero Downtime",
    desc: "Engineering and commissioning of a central C4ISR theater with 24 ultra-HD video walls, ergonomic ISO 11064 operator consoles, live multi-sensor geospatial correlation, and encrypted inter-agency tactical radio consoles.",
    deliverables: [
      "Zero-latency multi-stream video matrix switching and real-time sensor fusion",
      "Synchronized 3D geospatial mapping across ground, maritime, and airborne assets",
      "Multi-factor biometric mantrap airlocks for classified tactical briefing rooms",
      "Tier-IV redundant server architecture with EMP physical shielding and air-gapped nodes",
    ],
  },
  {
    title: "International Airport Airside & Airspace Shield",
    client: "Civil Aviation & Border Security Authority",
    location: "International Gateway Airport",
    category: "Aviation & Airspace Security",
    image: "/project-infrastructure.png",
    stats: "28 km Perimeter • Counter-UAS Jamming • FOD Radar",
    desc: "Comprehensive airside perimeter protection and counter-drone defense upgrade for a major international aviation hub, integrating taut-wire sensors, runway foreign object debris (FOD) radars, and long-range thermal cameras.",
    deliverables: [
      "Anti-intrusion taut-wire sensors with sub-meter intrusion localization",
      "Multi-band counter-UAS RF detection and directional drone jamming",
      "Thermal runway crossing detection operating reliably in dense zero-visibility fog",
      "Direct integration with central Airport Security Operations Center (ASOC)",
    ],
  },
  {
    title: "Critical Petrochemical Complex Security Modernization",
    client: "National Energy & Petroleum Infrastructure Corp",
    location: "Coastal Refining & Storage Terminal",
    category: "Critical Industrial Assets",
    image: "/project-industrial-plant.jpg",
    stats: "1,200 Hectares • 450 ATEX Cameras • M50 Anti-Ram Barriers",
    desc: "Design and deployment of ATEX-certified explosion-proof thermal surveillance, automated vehicle undercarriage inspection (UVIS), and PAS 68 crash-rated hydraulic bollards protecting a vital petrochemical refining hub.",
    deliverables: [
      "ATEX Zone 1 / Zone 21 explosion-proof pan-tilt thermal camera network",
      "Optical gas leak imaging and automatic hydrocarbon flare monitoring",
      "Crash-rated hydraulic barriers certified to stop 7.5-ton vehicles at 80 km/h",
      "Dual-auth biometric turnstiles managing 12,000 personnel per operational shift",
    ],
  },
  {
    title: "Metropolitan Safe City Neural Vision Grid",
    client: "Metropolitan Police & Municipal Safety Authority",
    location: "Capital Smart City District",
    category: "Smart City & Public Safety",
    image: "/services/it-ai-1.jpg",
    stats: "2,500 AI Cameras • ANPR Vehicle Tracking • GIS Dispatch",
    desc: "Metropolitan-wide AI vision network providing automated license plate reading, facial recognition matching at major transit hubs, and crowd anomaly alerting for proactive municipal crisis management.",
    deliverables: [
      "Real-time ANPR vehicle tracking cross-referenced with national law enforcement databases",
      "Crowd density estimation and rapid stampede/unrest early warning alerts",
      "Adaptive traffic signal optimization across 120 high-density intersections",
      "Computer-Aided Dispatch (CAD) coordinating emergency medical and police units",
    ],
  },
  {
    title: "Federal Government District Biometric Governance",
    client: "Federal Department of Sovereign Affairs",
    location: "Federal Government District",
    category: "Access Control & Sovereign Security",
    image: "/federal_ministries_hero.jpg",
    stats: "85 Biometric Portals • Mantrap Interlocks • Zero-Trust PKI",
    desc: "High-security physical identity governance for federal ministries utilizing contactless 3D facial recognition, iris-scanning mantrap airlocks, and under-vehicle automated threat scanners.",
    deliverables: [
      "Contactless 3D facial and dual-iris scanning with active 3D liveness detection",
      "Anti-tailgating laser mantrap airlocks securing classified data center suites",
      "Automated Under-Vehicle Inspection Systems with real-time AI anomaly detection",
      "Centralized PKI encrypted credential database with instant single-click revocation",
    ],
  },
];

export default function AlphaMatrixProjectsPage() {
  return (
    <main className="alpha-matrix-theme min-h-screen font-sans bg-[#08182B] text-slate-100 selection:bg-[#0284C7] selection:text-white">
      <AlphaMatrixNavbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10 bg-[#08182B]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-[#38BDF8]">PROJECTS</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 mb-4 text-[#38BDF8] text-[11px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            PROVEN DEFENSE DEPLOYMENTS
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                Mission-Critical Projects &amp; Field Deployments
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl">
                A verified track record of designing, deploying, and sustaining large-scale defense surveillance grids, command &amp; control centers, and hardened perimeter shields for sovereign governments and strategic operators.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Deployments</p>
                <p className="text-xl font-medium text-white mt-0.5">250+ Sites</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Frontier Grid</p>
                <p className="text-xl font-medium text-[#38BDF8] mt-0.5">1,200+ km</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">C4ISR Uptime</p>
                <p className="text-xl font-medium text-white mt-0.5">99.98%</p>
              </div>
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Security Tier</p>
                <p className="text-xl font-medium text-[#38BDF8] mt-0.5">STANAG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Light Section for Visual Balance */}
      <section className="py-20 lg:py-24 px-6 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl space-y-12">
          {defenseProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              {/* Photo Showcase */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 alpha-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/85 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-[#38BDF8] uppercase">
                      {project.category}
                    </span>
                    <p className="text-xs font-medium text-white mt-0.5 font-mono">
                      {project.stats}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-100 text-[#08182B] border border-slate-200 font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-normal flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#0284C7]" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#08182B] tracking-tight group-hover:text-[#0284C7] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {project.desc}
                </p>

                {/* Deliverables List */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Technical Deliverables
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                        <CheckCircle2 size={13} className="text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Arrow Link */}
                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/group-companies/alpha-matrix/contact"
                    className="alpha-link-arrow text-xs font-medium text-[#0284C7] hover:text-[#08182B] transition-colors"
                  >
                    <span>Inquire About Similar Architecture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project RFQ Callout - Dark Section */}
      <section className="py-20 px-6 bg-[#050E1A] border-t border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl border border-white/10 p-8 sm:p-12 bg-gradient-to-r from-[#08182B] to-[#050E1A] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase">
                DEFENSE TENDER &amp; TACTICAL PROCUREMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Planning a Defense or Infrastructure Project?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Our defense engineering teams are available for feasibility studies, classified site risk assessments, and technical specification drafting for upcoming government tenders.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="alpha-link-arrow text-xs font-medium text-white px-6 py-3 rounded-lg bg-[#0284C7] hover:bg-[#0284C7]/90 transition-colors"
              >
                <span>Submit Defense RFQ / Tender</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
