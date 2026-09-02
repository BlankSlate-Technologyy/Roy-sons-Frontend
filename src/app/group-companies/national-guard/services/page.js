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
  Shield,
  Zap,
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
    desc: "Rigidly trained security personnel deployed for commercial towers, industrial units, diplomatic residences, and gated communities. Every guard is equipped with smart communication equipment and follows strictly enforced gate logging protocols.",
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
    desc: "Scheduled and unscheduled vehicular patrols equipped with GPS tracking, searchlights, and direct wireless links to our 24/7 central command center. Provides effective deterrence and immediate reinforcement during emergencies.",
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
    desc: "Centralized control room operations monitoring high-definition video feeds, perimeter motion tripwires, and panic alarms in real time. Enables proactive incident identification and instant communication with field officers.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    tag: "Digital Surveillance",
    icon: Camera,
    features: [
      "Round-the-clock video feed supervision by certified controllers",
      "AI-driven motion analytics, unauthorized intrusion alerts",
      "Remote panic button monitoring with instant field alerts",
      "Incident video backup, footage auditing & evidence logging",
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment & Security Audits",
    subtitle: "Comprehensive Threat Identification & Mitigation",
    desc: "Professional site surveys evaluating physical vulnerabilities, blind spots, access control bottlenecks, and emergency preparedness. We deliver actionable blueprints to harden premises against potential security risks.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
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
    desc: "Specialized protection for corporate summits, exhibitions, public festivals, and VIP dignitaries. Our security officers manage high-volume queues, operate walk-through metal gates, and maintain complete crowd order.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
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
    desc: "Integrated security architecture combining manned guarding, visitor management systems, loading dock oversight, and perimeter patrols to create a fortress of protection for large commercial estates and factories.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
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

  const filteredServices = SERVICES_LIST.filter((svc) =>
    svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Comprehensive Protective Services</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Tailored Security Solutions For Every <span style={{ color: theme.gold }}>Operational Environment</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From uniformed armed static guards to advanced digital CCTV surveillance and rapid mobile patrols, National Guard delivers 360-degree protection designed around your facility&apos;s unique risk profile.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Browse All 6 Services</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Custom Quotation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-manned-guarding.png"
                  alt="National Guard Manned Security Guarding"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Complete Service Portfolio
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      Armed &amp; Unarmed Guarding · CCTV · Patrols · Risk Audits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="ng-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navy }}>
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
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Security Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Fully licensed, equipped, and insured security guard forces ready for rapid deployment across Pakistan.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search security services (e.g. Armed Guards, CCTV, Patrol)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {/* Card Top Image */}
                    <Link
                      href={`/group-companies/national-guard/services/${svc.id}`}
                      className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.navy}10` }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <Link href={`/group-companies/national-guard/services/${svc.id}`}>
                            <h3 className="text-lg font-black leading-tight hover:text-[#C5A059] transition-colors cursor-pointer" style={{ color: theme.navy }}>
                              {svc.title}
                            </h3>
                          </Link>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.gold }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 231, 238, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navy }}>
                          Key Service Deliverables:
                        </p>
                        {svc.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="p-7 pt-0 flex gap-2">
                    <Link
                      href={`/group-companies/national-guard/services/${svc.id}`}
                      className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/group-companies/national-guard/contact"
                      className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 text-white transition-opacity hover:opacity-95 cursor-pointer"
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

      {/* 4-Step Deployment Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Process</SectionLabel>
            <SectionHeading center className="mb-4">Our 4-Stage Security Pathway</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From the initial threat analysis to day-to-day supervisory visits, we ensure seamless security execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPLOYMENT_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl border shadow-xs flex flex-col justify-between bg-white group hover:shadow-md transition-all duration-300"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg mb-6 text-white shadow-sm" style={{ backgroundColor: theme.navy }}>
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navy }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                  <ShieldCheck size={14} style={{ color: theme.gold }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.gold }}>
                    Phase Enforced
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                NEED GUARDS DEPLOYED THIS WEEK?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Get Immediate Security Officer Quotations
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Send us your required number of guards, site location, and shift timings. Our operations manager will provide complete transparent rates.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
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
