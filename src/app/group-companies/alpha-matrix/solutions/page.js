"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Landmark,
  Server,
  Fingerprint,
  Shield,
  Network,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Radar,
  Radio,
  Eye,
  Lock,
  Zap,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  SectionLabel,
  SectionHeading,
} from "../components/AlphaMatrixShared";

const defenseSolutions = [
  {
    id: "surveillance",
    title: "AI-Powered Surveillance & Video Analytics",
    tagline: "Ultra Long-Range Optical, Thermal & Computer Vision Systems",
    icon: Camera,
    image: "/alpha_surveillance.svg",
    desc: "Our intelligent surveillance platform unifies high-definition optical cameras, thermal imaging, and edge AI video analytics to automatically detect, classify, and track threats in real time across vast operational zones.",
    capabilities: [
      "Real-time facial recognition and automated vehicle license plate recognition (ANPR)",
      "Thermal infrared night vision and bad-weather target acquisition",
      "Behavioral anomaly detection, line-crossing alarms, and loitering tracking",
      "Autonomous PTZ tracking with multi-sensor geo-coordinate locking",
      "Edge-processed neural networks minimizing bandwidth requirements",
    ],
  },
  {
    id: "border-security",
    title: "Integrated Border & Coastal Security Systems",
    tagline: "Multi-Layer Perimeter Defense and Intrusion Detection",
    icon: Landmark,
    image: "/alpha_border_security.svg",
    desc: "Defending sovereign frontiers and maritime perimeters through integrated radar grids, long-range thermal sensors, buried fiber-optic seismic detection, and rapid tactical dispatch platforms.",
    capabilities: [
      "Ground surveillance radar grids covering up to 40km per node",
      "Fiber-optic acoustic vibration sensors detecting foot/vehicle tunneling or crossing",
      "Maritime coastal radar with automatic vessel identification (AIS) integration",
      "Autonomous drone patrol coordination with rapid-response dispatch telemetry",
      "Solar and hybrid-powered standalone remote border sensor outposts",
    ],
  },
  {
    id: "command-control",
    title: "C4ISR Tactical Command & Control Centers",
    tagline: "Centralized Situational Awareness and Emergency Response",
    icon: Server,
    image: "/alpha_command_center.svg",
    desc: "Unifying disparate sensors, real-time video feeds, GIS spatial mapping, and tactical communications into a single resilient command dashboard for immediate decision-making and mission execution.",
    capabilities: [
      "Ultra HD multi-display video wall management and interactive telemetry overlays",
      "Unified GIS mapping displaying live troop, sensor, and vehicle locations",
      "Automated incident workflows, escalation matrix, and multi-agency dispatch",
      "Interoperable radio, VoIP, satellite, and encrypted data communication bridges",
      "Full mission recording, post-incident analytics, and audit compliance logging",
    ],
  },
  {
    id: "access-control",
    title: "High-Security Biometric & Identity Access",
    tagline: "Zero-Trust Physical & Digital Credential Verification",
    icon: Fingerprint,
    image: "/alpha_access_control.svg",
    desc: "Controlling physical access to high-security defense compounds, government ministries, data centers, and clean rooms using contactless biometric verification, smart turnstiles, and anti-tailgating barriers.",
    capabilities: [
      "Multi-modal biometric scanners: 3D facial recognition, iris scan, and fingerprint",
      "Anti-passback and automated tailgate detection with laser light barriers",
      "Automated vehicle undercarriage inspection systems (UVIS) with AI scanning",
      "Smart card PKI integration, encrypted RFID, and temporary guest digital passes",
      "Centralized global credential revocation across multi-site defense facilities",
    ],
  },
  {
    id: "perimeter-protection",
    title: "Critical Infrastructure & Perimeter Defense",
    tagline: "Multi-Barrier Physical Security & Anti-Intrusion Systems",
    icon: Shield,
    image: "/alpha_critical_infrastructure.svg",
    desc: "Engineering physical and electronic barrier systems that prevent unauthorized breach into airports, oil refineries, nuclear facilities, power grids, and defense manufacturing facilities.",
    capabilities: [
      "Smart high-tension taut-wire and microphonic fence intrusion detection",
      "Microwave and active infrared beam barriers creating invisible perimeter shields",
      "Anti-ram hydraulic road blockers, crash-rated bollards (ASTM/PAS 68 standard)",
      "Integrated drone detection and counter-UAS radio frequency jamming",
      "Automated perimeter floodlight activation and audio deterrent sirens",
    ],
  },
  {
    id: "cyber-defense",
    title: "Defense Cybersecurity & Threat Intelligence",
    tagline: "Zero-Trust Data Protection and Network Hardening",
    icon: Network,
    image: "/alpha_cyber_defense.svg",
    desc: "Safeguarding critical surveillance streams, telemetry pipelines, and command systems against nation-state cyber attacks, eavesdropping, and electronic warfare interference.",
    capabilities: [
      "Hardware-enforced data diodes for unidirectional secure network isolation",
      "End-to-end 256-bit AES cryptographic encryption for all IP video and sensor data",
      "Real-time SOC threat hunting, behavioral anomaly detection, and AI SIEM integration",
      "Air-gapped tactical defense server topologies and redundant failover clusters",
      "Penetration testing, vulnerability management, and defense compliance audits",
    ],
  },
];

export default function AlphaMatrixSolutionsPage() {
  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Header (Clean White Background) */}
      <section className="relative py-20 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Alpha Matrix Solutions"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
            <Shield size={14} style={{ color: theme.gold }} />
            <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>Mission-Critical Defense Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navy }}>
            Advanced Defense &amp; <span style={{ color: theme.gold }}>Security Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[13.5px] md:text-[15px] leading-relaxed" style={{ color: theme.textMuted }}>
            Engineered to safeguard borders, critical infrastructure, and government assets through cutting-edge sensor fusion, artificial intelligence, and resilient command architectures.
          </p>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          {defenseSolutions.map((sol, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                id={sol.id}
                key={sol.id}
                className={`grid lg:grid-cols-12 gap-10 items-center p-8 lg:p-12 rounded-3xl border shadow-sm bg-white ${isEven ? "" : "lg:flex-row-reverse"}`}
                style={{ borderColor: theme.border }}
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-5 relative min-h-[340px] rounded-2xl overflow-hidden border shadow-sm bg-slate-50 ${isEven ? "" : "lg:order-last"}`} style={{ borderColor: theme.border }}>
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-5">
                    <div className="flex items-center gap-2">
                      <sol.icon size={18} style={{ color: theme.gold }} />
                      <span className="text-[12px] font-black uppercase tracking-wider" style={{ color: theme.navy }}>{sol.title}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10.5px] font-black uppercase tracking-wider" style={{ backgroundColor: hexToRgba(theme.gold, 0.08), color: theme.gold }}>
                    <sol.icon size={14} />
                    <span>Domain 0{index + 1}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight" style={{ color: theme.navy }}>
                    {sol.title}
                  </h2>
                  <p className="text-[12px] font-bold uppercase tracking-wider" style={{ color: theme.gold }}>
                    {sol.tagline}
                  </p>
                  <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textMuted }}>
                    {sol.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-[11.5px] font-black uppercase tracking-wider mb-3" style={{ color: theme.navy }}>
                      Key Operational Capabilities:
                    </h4>
                    <ul className="space-y-2.5">
                      {sol.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[12.5px]" style={{ color: theme.textMuted }}>
                          <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/group-companies/alpha-matrix/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[11.5px] font-black uppercase tracking-wider transition-all shadow-sm text-white"
                      style={{ backgroundColor: theme.gold, color: theme.white }}
                    >
                      <span>Inquire About {sol.title.split(" ")[0]}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionHeading center className="mb-4">Need Custom Defense Engineering?</SectionHeading>
          <p className="text-[13px] max-w-xl mx-auto mb-8" style={{ color: theme.textMuted }}>
            Our systems engineering team can architect custom C4ISR solutions, sensor integration, and radar grids tailored to your operational environment.
          </p>
          <Link
            href="/group-companies/alpha-matrix/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-[12px] font-black uppercase tracking-wider transition-all shadow-md text-white"
            style={{ backgroundColor: theme.gold, color: theme.white }}
          >
            <span>Request Technical Defense Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <AlphaMatrixFooter />
    </div>
  );
}
