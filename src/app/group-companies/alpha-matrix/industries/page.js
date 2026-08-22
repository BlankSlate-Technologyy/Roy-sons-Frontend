"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  MapPin,
  Plane,
  Ship,
  Flame,
  Zap,
  Building2,
  Server,
  Network,
  Building,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  SectionLabel,
  SectionHeading,
} from "../components/AlphaMatrixShared";

const industrySectors = [
  {
    id: "military",
    title: "Military & Armed Forces",
    icon: ShieldCheck,
    desc: "Tactical surveillance, forward operating base perimeter defense, electronic counter-measures, and secure military communications.",
    features: ["C4ISR Command Stations", "Thermal Night Reconnaissance", "Tactical Mobile Border Sensor Rigs", "Encrypted Data Links"],
  },
  {
    id: "government",
    title: "Government & National Ministries",
    icon: Landmark,
    desc: "Comprehensive physical access control, high-definition perimeter surveillance, and executive protection architectures for government complexes.",
    features: ["Multi-Modal Biometric Portals", "Anti-Tailgating Interlocks", "Centralized Sovereign Security SOC", "Under-Vehicle Scanning"],
  },
  {
    id: "border",
    title: "Border Security & Emigration",
    icon: MapPin,
    desc: "Long-range radar grids, buried fiber intrusion sensors, and autonomous drone surveillance along vast land and coastal borders.",
    features: ["40km Radar Tracking Grids", "Acoustic Seismic Fence Detection", "Automated Drone Interception", "Remote Solar Outposts"],
  },
  {
    id: "airports",
    title: "Airports & Civil Aviation",
    icon: Plane,
    desc: "Aviation perimeter monitoring, runway foreign object detection (FOD), anti-drone airspace protection, and terminal passenger flow analytics.",
    features: ["Runway Perimeter Thermal Cameras", "Counter-UAS Radio Frequency Jamming", "Baggage Area Access Control", "AI Passenger Screening"],
  },
  {
    id: "seaports",
    title: "Seaports & Maritime Facilities",
    icon: Ship,
    desc: "Coastal radar coverage, container yard surveillance, underwater sonar sensors, and automated gate systems for international sea shipping.",
    features: ["Coastal Vessel Tracking (AIS)", "Container Optical Character Recognition", "Quayside Thermal Intrusion Alert", "Harbor Waterway Protection"],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Refineries & Pipelines",
    icon: Flame,
    desc: "Explosion-proof (ATEX-certified) surveillance, thousands of kilometers of pipeline acoustic monitoring, and refinery perimeter barriers.",
    features: ["ATEX Explosion-Proof Cameras", "Pipeline Leak & Intrusion Fiber Sensors", "Automated Flame & Gas Video Detect", "Crash-Rated Vehicle Blockers"],
  },
  {
    id: "power-plants",
    title: "Power Plants & Electrical Grids",
    icon: Zap,
    desc: "Critical substation defense, nuclear power perimeter shields, thermal monitoring of transformer infrastructure, and drone surveillance.",
    features: ["Substation Perimeter Microwave Beams", "Thermal Electrical Overheat Detection", "Restricted Zone Biometric Entry", "Drone Airspace Defense"],
  },
  {
    id: "smart-cities",
    title: "Smart Cities & Urban Safety",
    icon: Building2,
    desc: "City-wide AI video surveillance, automated traffic flow optimization, emergency response coordination, and central municipal command centers.",
    features: ["City-Wide ANPR Vehicle Tracking", "Crowd Density & Stampede Alerts", "Integrated Emergency Call Boxes", "Unified Municipal SOC"],
  },
  {
    id: "data-centers",
    title: "Data Centers & Mission Critical IT",
    icon: Server,
    desc: "Multi-layered biometric mantrap airlocks, server rack access auditing, physical security AI, and zero-trust facility monitoring.",
    features: ["Retina & Biometric Rack Locks", "Anti-Passback Mantrap Portals", "Physical & Digital SOC Co-Location", "24/7 Redundant Telemetry"],
  },
  {
    id: "critical-infra",
    title: "Critical National Infrastructure",
    icon: Network,
    desc: "Comprehensive defense architecture safeguarding national water reservoirs, telecommunications towers, and financial reserves.",
    features: ["Water Dam Perimeter Radar", "Telecom Tower Remote Solar Alarms", "Central Bank Vault Protection", "Zero-Trust Physical Shielding"],
  },
  {
    id: "transportation",
    title: "Railways & Transportation Hubs",
    icon: Building,
    desc: "Track intrusion detection, railway station facial recognition, pantograph thermal cameras, and freight depot access controls.",
    features: ["Railway Track Obstruction Sensors", "Depot Yard AI Surveillance", "High-Throughput Turnstiles", "Transit Command Systems"],
  },
  {
    id: "manufacturing",
    title: "Defense & Heavy Manufacturing",
    icon: Wrench,
    desc: "Confidential R&D facility protection, intellectual property defense, factory floor worker safety analytics, and perimeter enforcement.",
    features: ["R&D Cleanroom Biometric Gates", "Factory Heavy Machine Safety AI", "Perimeter Infrared Barriers", "Supply Chain Audit Security"],
  },
];

export default function AlphaMatrixIndustriesPage() {
  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Header (Clean White Background) */}
      <section className="relative py-20 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Industries Protected by Alpha Matrix"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
            <ShieldCheck size={14} style={{ color: theme.gold }} />
            <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>Sectors Protected</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navy }}>
            Industries We <span style={{ color: theme.gold }}>Fortify &amp; Defend</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[13.5px] md:text-[15px] leading-relaxed" style={{ color: theme.textMuted }}>
            From sovereign defense forces and international borders to oil refineries, airports, and smart cities, we engineer mission-critical protection across every vital sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySectors.map((sector) => (
              <div
                id={sector.id}
                key={sector.id}
                className="p-8 rounded-2xl border shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#005691]/60 bg-white"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                    <sector.icon size={22} style={{ color: theme.gold }} />
                  </div>
                  <h3 className="text-[16px] font-black uppercase tracking-tight mb-3" style={{ color: theme.navy }}>
                    {sector.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                    {sector.desc}
                  </p>

                  <div className="border-t pt-4" style={{ borderColor: theme.border }}>
                    <p className="text-[10.5px] font-black uppercase tracking-wider mb-2.5" style={{ color: theme.gold }}>
                      Key Defense Deployments:
                    </p>
                    <ul className="space-y-2">
                      {sector.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[12px]" style={{ color: theme.navy }}>
                          <CheckCircle2 size={14} style={{ color: theme.gold }} className="flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/group-companies/alpha-matrix/contact"
                    className="inline-flex items-center gap-2 text-[11.5px] font-black uppercase tracking-wider transition-all"
                    style={{ color: theme.gold }}
                  >
                    <span>Request Sector Briefing</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 px-6 border-t bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionHeading center className="mb-4">Do You Manage High-Security Infrastructure?</SectionHeading>
          <p className="text-[13px] max-w-xl mx-auto mb-8" style={{ color: theme.textMuted }}>
            Connect with our certified defense consultants to schedule an on-site security assessment and tailored proposal.
          </p>
          <Link
            href="/group-companies/alpha-matrix/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all shadow-md text-white"
            style={{ backgroundColor: theme.gold, color: theme.white }}
          >
            <span>Contact Defense Integration Desk</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <AlphaMatrixFooter />
    </div>
  );
}
