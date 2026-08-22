"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Server,
  Plane,
  Flame,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  SectionLabel,
  SectionHeading,
} from "../components/AlphaMatrixShared";

const defenseProjects = [
  {
    title: "National Border Radar & Surveillance Grid",
    client: "Sovereign Border Defense Command",
    location: "National Frontier Borderline",
    category: "Border & Coastal Defense",
    image: "/alpha_border_security.svg",
    stats: "380 km Coverage • 18 Radar Nodes • 99.99% Uptime",
    desc: "Deployment of a unified border surveillance grid integrating 18 long-range ground radars, buried fiber-optic acoustic fence sensors, and autonomous optical/thermal PTZ cameras connected to a central C4ISR operations center.",
    deliverables: [
      "Multi-radar coverage eliminating terrain blind spots across 380km",
      "Automated target acquisition and vehicle/foot intruder tracking",
      "Encrypted long-distance microwave and fiber communication links",
      "Automated drone response patrol integration",
    ],
  },
  {
    title: "Central Defense C4ISR Operations Center",
    client: "Ministry of Defense & Strategic Security",
    location: "Capital Command Complex",
    category: "Command & Control",
    image: "/alpha_command_center.svg",
    stats: "24 Video Wall Displays • Real-Time GIS • Multi-Agency Dispatch",
    desc: "Turnkey engineering of a central high-security C4ISR command and control theater featuring 24 ultra-HD video walls, redundant command consoles, multi-threat GIS telemetry overlays, and encrypted tactical radio bridges.",
    deliverables: [
      "Zero-latency multi-stream video switching and sensor fusion",
      "Unified spatial geospatial mapping for all airborne and ground assets",
      "Multi-level security clearance access control and biometric mantraps",
      "Tier-IV redundant server architecture with EMP physical shielding",
    ],
  },
  {
    title: "Strategic International Airport Perimeter Defense",
    client: "Civil Aviation & Border Security Authority",
    location: "International Gateway Airport",
    category: "Aviation & Perimeter Protection",
    image: "/alpha_airport_defense.svg",
    stats: "28 km Perimeter • Counter-UAS Jamming • FOD Detection",
    desc: "Comprehensive perimeter protection and anti-drone defense upgrade for a major international airport, featuring high-tension taut wire sensors, runway foreign object detection (FOD), and thermal runway cameras.",
    deliverables: [
      "Anti-intrusion taut-wire sensors with sub-meter breach location accuracy",
      "Radio frequency Counter-UAS detection and directional drone jamming",
      "Thermal runway crossing detection operating in zero-visibility fog",
      "Central Airport Security Operations Center (ASOC) integration",
    ],
  },
  {
    title: "Oil Refinery & Petrochemical Complex Security",
    client: "National Energy & Petroleum Infrastructure Corp",
    location: "Coastal Industrial Refining Complex",
    category: "Critical Infrastructure",
    image: "/alpha_refinery_security.svg",
    stats: "1,200 Hectare Facility • 450 ATEX Cameras • Automated Road Blockers",
    desc: "Installation of ATEX-certified explosion-proof thermal surveillance, automated vehicle undercarriage scanning (UVIS), and PAS 68 crash-rated hydraulic bollards to protect a vital petrochemical production complex.",
    deliverables: [
      "ATEX Zone 1/Zone 2 explosion-proof pan-tilt thermal camera network",
      "Optical flare monitoring and automated hydrocarbon vapor detection",
      "Crash-rated hydraulic barriers stopping 7.5-ton vehicles at 80 km/h",
      "Facial recognition turnstiles managing 12,000 workers per shift",
    ],
  },
  {
    title: "Smart City Integrated Video Analytics Network",
    client: "Metropolitan Police & Municipal Safety Authority",
    location: "Metropolitan Smart City District",
    category: "Smart City & Urban Safety",
    image: "/alpha_surveillance.svg",
    stats: "2,500 AI Cameras • ANPR Vehicle Tracking • Facial Matching",
    desc: "City-wide AI surveillance deployment providing automated license plate reading, facial recognition matching at major transportation transit points, and crowd anomaly alerting for public safety.",
    deliverables: [
      "Real-time ANPR vehicle tracking matching against law enforcement databases",
      "Crowd density estimation and rapid stampede/unrest early warning",
      "Automated smart traffic flow optimization at 120 key intersections",
      "Rapid dispatch coordination with emergency paramedic and police fleets",
    ],
  },
  {
    title: "Government Ministry Compound Access & Biometrics",
    client: "Federal Department of Sovereign Affairs",
    location: "Federal Government District",
    category: "Access Control & Cyber Defense",
    image: "/alpha_access_control.svg",
    stats: "85 Biometric Portals • Mantrap Interlocks • Zero-Trust PKI",
    desc: "High-security physical access control modernization for federal ministry headquarters utilizing 3D facial recognition, iris biometric mantraps, and automated vehicle inspection barriers.",
    deliverables: [
      "Contactless 3D facial and iris scanning with anti-spoofing liveness detection",
      "Anti-tailgating laser mantrap airlocks for classified server rooms",
      "Under-vehicle surveillance systems with automatic bomb/contraband AI scan",
      "Centralized PKI encrypted digital ID credential management",
    ],
  },
];

export default function AlphaMatrixProjectsPage() {
  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Header (Clean White Background) */}
      <section className="relative py-20 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Alpha Matrix Projects"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
            <Layers size={14} style={{ color: theme.gold }} />
            <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>Proven Defense Deployments</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navy }}>
            Mission-Critical <span style={{ color: theme.gold }}>Projects &amp; Deployments</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[13.5px] md:text-[15px] leading-relaxed" style={{ color: theme.textMuted }}>
            A track record of engineering and deploying large-scale surveillance grids, C4ISR command centers, and perimeter defense systems for sovereign governments and strategic enterprises.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-12">
          {defenseProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 items-center p-8 lg:p-10 rounded-3xl border shadow-xs bg-white"
              style={{ borderColor: theme.border }}
            >
              {/* Image */}
              <div className="lg:col-span-5 relative min-h-[300px] rounded-2xl overflow-hidden border shadow-xs bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>{project.category}</span>
                    <p className="text-[13px] font-black uppercase mt-0.5" style={{ color: theme.navy }}>{project.stats}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white" style={{ backgroundColor: theme.gold }}>
                    {project.category}
                  </span>
                  <span className="text-[11.5px] font-bold flex items-center gap-1.5" style={{ color: theme.textFaint }}>
                    <MapPin size={13} style={{ color: theme.gold }} />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight" style={{ color: theme.navy }}>
                  {project.title}
                </h3>

                <p className="text-[12.5px] leading-relaxed" style={{ color: theme.textMuted }}>
                  {project.desc}
                </p>

                <div className="pt-2">
                  <h5 className="text-[11px] font-black uppercase tracking-wider mb-2.5" style={{ color: theme.navy }}>
                    Project Deliverables &amp; Achievements:
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11.5px]" style={{ color: theme.textMuted }}>
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <Link
                    href="/group-companies/alpha-matrix/contact"
                    className="inline-flex items-center gap-2 text-[11.5px] font-black uppercase tracking-wider"
                    style={{ color: theme.gold }}
                  >
                    <span>Inquire About Similar Defense Architectures</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionHeading center className="mb-4">Have A Defense Or Infrastructure Project?</SectionHeading>
          <p className="text-[13px] max-w-xl mx-auto mb-8" style={{ color: theme.textMuted }}>
            Our engineering teams are available for feasibility studies, site security surveys, and technical defense bids.
          </p>
          <Link
            href="/group-companies/alpha-matrix/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all shadow-md text-white"
            style={{ backgroundColor: theme.gold, color: theme.white }}
          >
            <span>Submit Project RFQ / Defense Tender</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <AlphaMatrixFooter />
    </div>
  );
}
