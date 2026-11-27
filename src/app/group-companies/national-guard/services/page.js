"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  Radio,
  Camera,
  ClipboardCheck,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Search,
  Clock,
  Award,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalGuardShared";

const SERVICES_LIST = [
  {
    id: "manned-guarding",
    title: "Manned Guarding Services",
    subtitle: "Armed & Unarmed Uniformed Security Guards",
    desc: "Rigidly trained security personnel deployed for commercial towers, industrial units, diplomatic residences, and gated communities. Every guard is equipped with smart communication gear and strictly enforces gate logging SOPs.",
    image: "/national-guard-manned-guarding.png",
    tag: "Physical Security",
    icon: UserCheck,
    features: [
      "Ex-military and civilian trained armed / unarmed guards",
      "Visitor registration, vehicle inspection & baggage screening",
      "Perimeter access control and turnstile management",
      "NADRA verified background with police clearance certificates",
    ],
  },
  {
    id: "mobile-patrol",
    title: "Mobile Patrol Services",
    subtitle: "Rapid Response Units & Marked Security Cruisers",
    desc: "Scheduled and unscheduled vehicular patrols equipped with GPS tracking, searchlights, and direct wireless links to our 24/7 central command center for proactive deterrence and rapid emergency backup.",
    image: "/national-guard-mobile-patrol.png",
    tag: "Patrol & Quick Response",
    icon: Radio,
    features: [
      "Marked patrol vehicles and armed quick response teams (QRT)",
      "Automated GPS checkpoint tag-ins ensuring complete route coverage",
      "Lockup, alarm verification, and premises integrity checks",
      "Emergency backup dispatch within minutes of alarm triggers",
    ],
  },
  {
    id: "cctv-monitoring",
    title: "CCTV & Central Monitoring",
    subtitle: "24/7 Remote Video Surveillance & Alarm Verification",
    desc: "Centralized control room operations monitoring high-definition video feeds, perimeter motion tripwires, and panic alarms in real time for proactive threat identification and immediate dispatch.",
    image: "/national-guard-hero-bg.png",
    tag: "Digital Surveillance",
    icon: Camera,
    features: [
      "Round-the-clock video feed supervision by certified controllers",
      "AI-driven motion analytics & unauthorized intrusion alerts",
      "Remote panic button monitoring with instant field alerts",
      "Incident video backup, footage auditing & evidence logging",
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment & Security Audits",
    subtitle: "Comprehensive Threat Identification & Mitigation",
    desc: "Professional site surveys evaluating physical vulnerabilities, blind spots, access bottlenecks, and emergency preparedness to deliver actionable blueprints that harden your premises.",
    image: "/images/walton/about_conference_plans.jpg",
    tag: "Security Consulting",
    icon: ClipboardCheck,
    features: [
      "Complete on-site perimeter, access point, and lighting audit",
      "Emergency evacuation and disaster response protocol design",
      "Standard Operating Procedure (SOP) formulation & review",
      "Regulatory compliance verification with provincial security laws",
    ],
  },
  {
    id: "event-security",
    title: "Event Security & Crowd Control",
    subtitle: "VIP Protection & High-Density Event Management",
    desc: "Specialized protection for corporate summits, exhibitions, public festivals, and VIP dignitaries. Our officers manage high-volume queues, operate metal screening gates, and maintain seamless order.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    tag: "VIP & Events",
    icon: Users,
    features: [
      "Walk-through metal detectors and under-vehicle search mirrors",
      "Close protection officers (CPO) and executive escorts",
      "Controlled entry badging and anti-tailgating enforcement",
      "Medical first responder coordination and emergency exit clearance",
    ],
  },
  {
    id: "facility-protection",
    title: "Facility & Corporate Protection",
    subtitle: "Multi-Tiered Security for Enterprise Campuses",
    desc: "Integrated security architecture combining executive concierge guards, visitor management systems, loading dock oversight, and night lockup patrols for corporate towers and large commercial estates.",
    image: "/bright-corporate-skyscraper.jpg",
    tag: "Corporate Security",
    icon: Building2,
    features: [
      "Loading dock inventory and commercial truck seal inspection",
      "Employee ID card verification and contractor access badges",
      "Warehouse night surveillance and fire hazard monitoring",
      "Dedicated on-site Chief Security Officer (CSO) management",
    ],
  },
];

const SERVICE_STATS = [
  { value: "500+", label: "Active Guards On Duty", icon: UserCheck },
  { value: "25+", label: "Patrol & QRT Vehicles", icon: Radio },
  { value: "99.9%", label: "System Uptime", icon: ShieldCheck },
  { value: "2-Hour", label: "Emergency Mobilization", icon: Clock },
  { value: "100%", label: "Licensed Firearms", icon: Award },
];

const DEPLOYMENT_STEPS = [
  {
    step: "01",
    title: "Vulnerability Survey",
    desc: "Our senior security consultants inspect your premises to identify entry vulnerabilities, lighting gaps, and high-risk zones.",
  },
  {
    step: "02",
    title: "Custom Security Blueprint",
    desc: "We design a detailed guarding schedule, post orders, emergency communication trees, and weapon allocation matrix.",
  },
  {
    step: "03",
    title: "Guard Selection & Briefing",
    desc: "Officers matching your facility type are selected, NADRA-verified, and thoroughly briefed on your site's specific SOPs.",
  },
  {
    step: "04",
    title: "Active Patrol & Supervision",
    desc: "Continuous field operations backed by surprise mobile inspections and 24/7 central control room surveillance.",
  },
];

export default function NationalGuardServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = SERVICES_LIST.filter(
    (svc) =>
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* 01 — Hero Section (Unique Image: /national-guard/services-overview.jpg) */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Comprehensive Protective Services</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-4"
                style={{ color: theme.navy }}
              >
                Tailored Security Solutions For Every{" "}
                <span style={{ color: theme.gold }}>Operational Environment</span>
              </h1>

              <p
                className="text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                From uniformed armed static guards to advanced digital CCTV surveillance and rapid
                mobile patrols, National Guard delivers 360-degree protection engineered around your
                facility&apos;s exact risk profile.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Browse All 6 Services</span>
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide border-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer bg-white"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <span>Request Custom Quotation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-100"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-guard/services-overview.jpg"
                  alt="National Guard Security Supervisor Monitoring Corporate Optical Turnstiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[12.5px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.gold }}
                    >
                      Complete Service Portfolio
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.navy }}>
                      Armed &amp; Unarmed Guarding · CCTV · Patrols · Risk Audits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — High-Contrast Navy Metrics Strip */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.navyDark, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="ng-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: theme.navyCard,
                    borderColor: "rgba(223, 184, 104, 0.25)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5"
                    style={{ backgroundColor: "rgba(223, 184, 104, 0.16)" }}
                  >
                    <Icon size={21} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p
                    className="text-[13px] font-bold uppercase tracking-wider leading-snug"
                    style={{ color: "#E2E8F0" }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Services Grid Section */}
      <section
        id="services-catalog"
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-3">
              Specialized Security Offerings
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              Fully licensed, equipped, and insured security guard forces ready for rapid deployment
              across Pakistan.
            </p>

            {/* Live Search */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search security services (e.g. Armed Guards, CCTV, Patrol)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="ng-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <Link
                      href={`/group-companies/national-guard/services/${svc.id}`}
                      className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span
                          className="text-[12px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                          style={{ color: theme.navy, borderColor: theme.border }}
                        >
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.navy}12` }}
                        >
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <Link href={`/group-companies/national-guard/services/${svc.id}`}>
                          <h3
                            className="text-[19px] sm:text-[20px] font-black leading-tight hover:text-[#B38A3F] transition-colors cursor-pointer"
                            style={{ color: theme.navy }}
                          >
                            {svc.title}
                          </h3>
                        </Link>
                      </div>

                      <p
                        className="text-[13px] font-extrabold uppercase tracking-wider mb-2.5"
                        style={{ color: theme.gold }}
                      >
                        {svc.subtitle}
                      </p>

                      <p
                        className="text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed mb-5"
                        style={{ color: theme.textMuted }}
                      >
                        {svc.desc}
                      </p>

                      <div
                        className="space-y-2 pt-4 border-t"
                        style={{ borderColor: "rgba(220, 227, 236, 0.85)" }}
                      >
                        <p
                          className="text-[13px] font-black uppercase tracking-wider"
                          style={{ color: theme.navy }}
                        >
                          Key Service Deliverables:
                        </p>
                        {svc.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: theme.gold }}
                            />
                            <span className="text-[14px] font-medium text-slate-700 leading-snug">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex gap-2.5">
                    <Link
                      href={`/group-companies/national-guard/services/${svc.id}`}
                      className="flex-1 py-3 rounded-xl border-2 text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/group-companies/national-guard/contact"
                      className="px-5 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.navy }}
                      title="Request Quotation"
                    >
                      <span>Quote</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — 4-Step Deployment Workflow */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Disciplined Process</SectionLabel>
            <SectionHeading center className="mb-3">
              Our 4-Stage Security Pathway
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              From the initial threat analysis to day-to-day supervisory visits, we ensure seamless
              security execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEPLOYMENT_STEPS.map((step) => (
              <div
                key={step.step}
                className="ng-card-hover p-6 rounded-3xl border shadow-xs flex flex-col justify-between bg-[#F4F6F9]"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg mb-4 text-white shadow-sm"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {step.step}
                  </div>
                  <h4
                    className="text-[18px] font-black mb-2.5 leading-snug"
                    style={{ color: theme.navy }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {step.desc}
                  </p>
                </div>
                <div
                  className="mt-5 pt-3.5 border-t flex items-center gap-2"
                  style={{ borderColor: theme.border }}
                >
                  <ShieldCheck size={16} style={{ color: theme.gold }} />
                  <span
                    className="text-[12.5px] font-extrabold uppercase tracking-wider"
                    style={{ color: theme.gold }}
                  >
                    Phase Enforced
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Command Navy CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.navyDark,
              borderColor: "rgba(223, 184, 104, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                NEED GUARDS DEPLOYED THIS WEEK?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Get Immediate Security Officer Quotations
              </h2>
              <p className="text-[15px] sm:text-[16px] font-medium max-w-xl text-slate-200 leading-relaxed">
                Send us your required number of guards, site location, and shift timings. Our
                operations manager will provide transparent deployment rates.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-black uppercase tracking-wide flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.navyDark }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-extrabold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer text-white"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                <Phone size={16} style={{ color: theme.goldBright }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
