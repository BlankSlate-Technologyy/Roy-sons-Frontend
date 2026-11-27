"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
} from "../components/AlphaMatrixShared";

const defenseProjects = [
  {
    title: "National Frontier Ground Radar Matrix",
    client: "Border Security Forces & Defense Command",
    location: "Western Sovereign Border Region",
    category: "Border & Frontier Security",
    image: "/highway.png",
    stats: "380 km Coverage • 18 Radar Nodes • Sub-Second Alerting",
    desc: "A contiguous 380 km multi-sensor frontier monitoring perimeter integrating high-resolution ground radar nodes, underground distributed acoustic sensing (DAS) fiber lines, and automatic slew-to-cue electro-optical camera towers.",
    deliverables: [
      "18 Solid-State S-Band Ground Surveillance Radar Nodes with 360° situational tracking",
      "Buried distributed acoustic fiber-optic intrusion detection system spanning frontier line",
      "Long-range thermal MWIR and visible-light EO turrets slaved to radar threat vectors",
      "Fully encrypted microwave backbone connecting outposts to Regional Tactical Operations Command",
    ],
  },
  {
    title: "Strategic C4ISR Theater & Emergency Command Complex",
    client: "Joint Defense Operations Command",
    location: "National Defense Headquarters Sector",
    category: "C4ISR & Unified Command",
    image: "/project-roysons-infrastructure.jpg",
    stats: "24 Ultra-HD Displays • Geospatial GIS • 99.999% SLA",
    desc: "A turnkey Tier-IV hardened tactical operations complex featuring a 24-panel ultra-HD visualization array, real-time GIS situational awareness, integrated tactical radio bridges, and EMP physical shielding.",
    deliverables: [
      "Centralized 24-display LED video wall visualizing real-time air, land, and maritime sensor telemetry",
      "Geospatial GIS intelligence mapping layer integrating GPS assets and automated incident tracking",
      "Air-gapped military encrypted communications suite with redundant fallback links",
      "TEMPEST and EMP hardened architectural housing ensuring continuous mission uptime",
    ],
  },
  {
    title: "International Airport Perimeter Matrix & Counter-UAS",
    client: "Civil & Military Aviation Defense Authority",
    location: "International Gateway Airport",
    category: "Airports & Aviation Defense",
    image: "/neomcity/hero_transit_infrastructure.jpg",
    stats: "28 km Perimeter • RF Jamming Grid • Zero False-Alarm Logic",
    desc: "A comprehensive multi-layered perimeter and airspace security architecture protecting a major international aviation hub, featuring automated runway thermal intrusion detection and counter-drone defense.",
    deliverables: [
      "28 km intelligent taut-wire and microwave sensor barrier with real-time zone pinpointing",
      "Automated runway and taxiway FOD (Foreign Object Debris) radar scanning grid",
      "Counter-UAS RF drone detection sensors paired with directional GPS/RF mitigation jammers",
      "Direct integration with Airport Emergency Operations Center and military airbase defense",
    ],
  },
  {
    title: "Petrochemical Refinery Critical Infrastructure Shield",
    client: "State Petroleum & Refining Corporation",
    location: "Industrial Refining Complex",
    category: "Critical Infrastructure",
    image: "/services/electrical-1.jpg",
    stats: "1,200 Hectares • 450 ATEX Cameras • Automated Mantrap Entry",
    desc: "Full-perimeter ATEX explosion-proof surveillance, automated vehicle undercarriage scanning, and PAS 68 crash-rated hydraulic bollard barriers protecting sovereign energy refinery assets.",
    deliverables: [
      "450 ATEX-certified flameproof thermal and visible cameras for explosive gas atmospheres",
      "PAS 68 certified hydraulic bollard matrix capable of arresting heavy hostile vehicle attacks",
      "Automatic vehicle license plate and undercarriage inspection system with anomaly flagging",
      "Unified cybersecurity segmentation protecting operational SCADA networks from intrusion",
    ],
  },
  {
    title: "Deepwater Seaport Maritime Terminal Security Grid",
    client: "National Port & Maritime Authority",
    location: "Deepwater Commercial & Naval Harbor",
    category: "Seaports & Maritime Defense",
    image: "/services/trade-2.jpg",
    stats: "12 Berths • Thermal Radar • Underwater Sonar Mesh",
    desc: "A unified waterside and landside security ecosystem safeguarding deepwater berths, container terminal storage, and naval harbor zones compliant with ISPS international maritime security standards.",
    deliverables: [
      "Coastal vessel traffic monitoring radar with automated AIS transponder correlation",
      "High-definition cooled thermal cameras monitoring waterside harbor approaches 24/7",
      "Underwater active diver detection sonar mesh securing critical naval berthing areas",
      "Automated biometric gate access for 8,000+ daily port workers and logistical transport vehicles",
    ],
  },
  {
    title: "Federal Ministries Government Complex Biometric Grid",
    client: "Federal Department of Sovereign Affairs",
    location: "Federal Government District",
    category: "Access Control & Sovereign Security",
    image: "/logos/Construction & Infrastructure.jpg.jpeg",
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
    <main
      className="min-h-screen font-sans selection:bg-[#0284C7] selection:text-white"
      style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
    >
      <AlphaMatrixNavbar />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#38BDF8] font-bold">PROJECTS</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 mb-5 text-[#38BDF8] text-xs sm:text-[13px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            PROVEN DEFENSE DEPLOYMENTS
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-[1.1]">
                Mission-Critical Projects &amp; Field Deployments
              </h1>
              <p className="text-base sm:text-lg font-medium leading-relaxed max-w-3xl" style={{ color: "#E2E8F0" }}>
                A verified track record of designing, deploying, and sustaining large-scale defense surveillance grids, command &amp; control centers, and hardened perimeter shields for sovereign governments and strategic operators.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Deployments</p>
                <p className="text-2xl font-black text-white mt-1">250+ Sites</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Frontier Grid</p>
                <p className="text-2xl font-black text-[#38BDF8] mt-1">1,200+ km</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">C4ISR Uptime</p>
                <p className="text-2xl font-black text-white mt-1">99.98%</p>
              </div>
              <div className="p-4 rounded-xl border border-sky-500/20 shadow-md" style={{ backgroundColor: "#0E243D", color: "#FFFFFF" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Security Tier</p>
                <p className="text-2xl font-black text-[#38BDF8] mt-1">STANAG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Light Section for Visual Balance */}
      <section
        className="py-20 lg:py-28 px-6 border-b border-slate-200"
        style={{ backgroundColor: "#FFFFFF", color: "#08182B" }}
      >
        <div className="mx-auto max-w-screen-xl space-y-14">
          {defenseProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-9 lg:p-11 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Photo Showcase */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 alpha-img-wrapper shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/90 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-[#38BDF8] uppercase block mb-1">
                      {project.category}
                    </span>
                    <p className="text-sm font-bold text-white font-mono">
                      {project.stats}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold font-mono uppercase tracking-wider bg-slate-100 text-[#08182B] border border-slate-200">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
                    <MapPin size={16} className="text-[#005691]" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#08182B] tracking-tight group-hover:text-[#005691] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed">
                  {project.desc}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Technical Deliverables
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 font-medium leading-snug">
                        <CheckCircle2 size={16} className="text-[#005691] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Link */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/group-companies/alpha-matrix/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#005691] hover:text-[#0284C7] transition-colors"
                  >
                    <span>Inquire About Similar Architecture</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project RFQ Callout - Dark Section */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl border border-sky-500/25 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
            style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
          >
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase block">
                DEFENSE TENDER &amp; TACTICAL PROCUREMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                Planning a Defense or Infrastructure Project?
              </h2>
              <p className="text-base font-medium leading-relaxed" style={{ color: "#CBD5E1" }}>
                Our defense engineering teams are available for feasibility studies, classified site risk assessments, and technical specification drafting for upcoming government tenders.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white px-7 py-3.5 rounded-xl bg-[#005691] hover:bg-[#0284C7] shadow-xl transition-all"
              >
                <span>Submit Defense RFQ / Tender</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
