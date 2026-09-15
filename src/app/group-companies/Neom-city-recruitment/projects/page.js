"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Users2,
  User,
  Building2,
  Globe2,
  UserSearch,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  HeartPulse,
  Monitor,
  Factory,
  Fuel,
  UtensilsCrossed,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Briefcase,
  DollarSign,
  Filter,
  Eye,
  Check,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  JobDetailAndApplyModal,
  EmployerInquiryModal,
} from "../components/NeomRecruitmentShared";
import {
  JOB_CATEGORIES,
  JOB_VACANCIES,
} from "../neom-recruitment-data";

const SIGNATURE_DEPLOYMENTS = [
  {
    name: "NEOM Smart City Mega-Infrastructure Engineering Contingent",
    category: "Mega-Infrastructure & Civil",
    location: "Tabuk Province, NEOM & The Line, Saudi Arabia",
    status: "Completed – 2,500 Technical Personnel Mobilized",
    desc: "Full-cycle overseas recruitment and rapid mobilization of 2,500 chartered civil engineers, BIM managers, tunneling specialists, high-voltage technicians, and heavy earthmoving plant operators for NEOM giga-projects.",
    specs: [
      "Headcount: 2,500 Chartered Engineers & Technical Specialists",
      "Trade Testing: 100% Practical Field Trade Tested in Vocational Bay",
      "Mobilization: Zero Visa Rejections Under Saudi Fast-Track Protocols",
    ],
    image: "/neomrecruitment/hero_mega_infra.jpg",
    tag: "NEOM Infrastructure",
  },
  {
    name: "Gulf National Health Authority Specialist Hospital Staffing",
    category: "Healthcare & Medical",
    location: "Riyadh & Jeddah Tertiary Medical Cities, Saudi Arabia",
    status: "Completed – 450 Medical Doctors & ICU Nurses",
    desc: "Targeted international executive search and overseas deployment of 450 board-certified consultant physicians, pediatric surgeons, intensive care nurses, and biomedical clinical engineers.",
    specs: [
      "Talent: 120 Consultant Doctors & 330 Specialized ICU/OT Nurses",
      "Verification: DataFlow Primary Source Verification (PSV) Passed",
      "Retention: 99.1% First-Year Candidate Retention Benchmark",
    ],
    image: "/neomrecruitment/hero_healthcare.jpg",
    tag: "Hospital Staffing",
  },
  {
    name: "Red Sea Luxury Island Resort Pre-Opening Staffing",
    category: "Hospitality & Tourism",
    location: "Red Sea Coast Luxury Resort Cluster, Saudi Arabia",
    status: "Completed – 1,200 Luxury Hospitality Staff",
    desc: "Turnkey pre-opening recruitment for ultra-luxury 5-star island resorts, sourcing executive chefs, front office management, private villa butlers, and guest experience curators.",
    specs: [
      "Scope: 1,200 Hospitality Professionals Sourced & Mobilized",
      "Training: Pre-Departure 5-Star International Hospitality Academy",
      "Languages: Multi-Lingual Proficiency (English, Arabic & French)",
    ],
    image: "/neomrecruitment/card_hospitality.jpg",
    tag: "Luxury Hospitality",
  },
  {
    name: "Yanbu Petrochemical Complex Turnaround Squad",
    category: "Oil, Gas & Petrochemical",
    location: "Yanbu Industrial City, Saudi Arabia",
    status: "Completed – 600 Certified Turnaround Specialists",
    desc: "Mobilization of certified 6G TIG pipe welders, instrumentation engineers, chemical process operators, and NEBOSH safety supervisors for scheduled refinery shutdown.",
    specs: [
      "Team: 600 Radiography-Passed 6G Welders & Millwright Mechanics",
      "Turnaround: Rapid Deployment Within 14 Days Under Emergency Visa",
      "Safety: Zero Lost Time Incidents (LTI) Recorded Over 180,000 Hours",
    ],
    image: "/neomrecruitment/card_oilfield.jpg",
    tag: "Petrochemical Turnaround",
  },
  {
    name: "Enterprise Digital Innovation & Cloud Architecture Team",
    category: "IT, Cloud & AI",
    location: "Dubai Internet City & Riyadh Digital City",
    status: "Completed – 180 Senior Software & Cloud Engineers",
    desc: "Executive search and placement of 180 cloud architects, cyber defense threat hunters, full-stack engineers, and machine learning leads for Gulf enterprise banking clients.",
    specs: [
      "Engineers: 180 Senior Full-Stack & Cyber Security Engineers",
      "Vetting: Automated Coding Algorithms & System Architecture Reviews",
      "Model: Permanent Regional Placements with Full Relocation Support",
    ],
    image: "/neomrecruitment/card_tech.jpg",
    tag: "Tech Enterprise",
  },
  {
    name: "Regional Airport Ground Handling & Air Cargo Crew",
    category: "Aviation & Logistics",
    location: "Hamad International Airport & Dubai World Central",
    status: "Completed – 850 Aviation Logistics Personnel",
    desc: "Recruiting licensed aircraft pushback operators, dangerous goods air cargo specialists, customs logistics coordinators, and apron marshals for regional air hubs.",
    specs: [
      "Personnel: 850 IATA Certified Ground & Cargo Specialists",
      "Security: Full International Civil Aviation Security Clearances",
      "Onboarding: 100% On-Schedule Deployment Over 6 Waves",
    ],
    image: "/neomrecruitment/card_mobilize.jpg",
    tag: "Aviation Operations",
  },
];

export default function NeomRecruitmentProjectsPage() {
  const [activeTab, setActiveTab] = useState("jobs"); // 'jobs' or 'deployments'
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  // Modals state
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);

  // Filtered jobs
  const filteredJobs = JOB_VACANCIES.filter((job) => {
    const matchesCat = selectedCategory === "All" || job.category === selectedCategory;
    const matchesCountry = selectedCountry === "All" || job.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesCountry && matchesSearch;
  });

  // Filtered deployments
  const filteredDeployments = SIGNATURE_DEPLOYMENTS.filter((dep) => {
    return selectedCategory === "All" || dep.category === selectedCategory;
  });

  const handleOpenJob = (job) => {
    setSelectedJobForModal(job);
    setIsJobModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#0072CE] selection:text-white">
      <NeomRecruitmentNavbar onOpenEmployerModal={() => setIsEmployerModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-sky-50/50 to-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel center>International Career Board &amp; Placements</SectionLabel>
          <SectionHeading center>
            Live Job Openings &amp; Global Workforce Deployments
          </SectionHeading>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Browse verified vacancies across Saudi Arabia, UAE, Qatar, and the GCC, or explore our proven track record of mobilizing thousands of technical and executive personnel for world-leading projects.
          </p>

          {/* Dual Portal Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab("jobs")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "jobs"
                  ? "bg-[#0072CE] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Active Job Vacancies ({JOB_VACANCIES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("deployments")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "deployments"
                  ? "bg-[#0072CE] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Signature Deployments ({SIGNATURE_DEPLOYMENTS.length})
            </button>
          </div>
        </div>
      </section>

      {/* ─── TAB 1: ACTIVE JOB VACANCIES ─── */}
      {activeTab === "jobs" && (
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl">
            {/* Filter Controls Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border shadow-xs mb-8 space-y-4" style={{ borderColor: theme.border }}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8 relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by job title, skill, or discipline..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  />
                </div>
                <div className="sm:col-span-4">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#0072CE]"
                    style={{ borderColor: theme.border }}
                  >
                    <option value="All">All Deployment Countries</option>
                    <option value="Saudi Arabia">Saudi Arabia (NEOM / Riyadh)</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
                {JOB_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#0F2B5B] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border shadow-xs hover:shadow-lg hover:border-[#0072CE] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  style={{ borderColor: theme.border }}
                >
                  <div className="p-5 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-[#0F2B5B]">
                        {job.category}
                      </span>
                      {job.urgentBadge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-red-100 text-red-700 animate-pulse">
                          Urgent Vacancy
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-black uppercase text-[#07152B] leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin size={13} className="text-[#0072CE]" />
                      <span>{job.country} ({job.city})</span>
                    </p>
                  </div>

                  <div className="p-5 space-y-3 flex-1">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-emerald-800">Monthly Compensation</span>
                      <span className="text-xs sm:text-[13px] font-black text-emerald-950">{job.salary}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Experience</span>
                        <span className="font-semibold text-slate-800">{job.experience}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Positions</span>
                        <span className="font-semibold text-[#0072CE]">{job.vacancies} Open</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t" style={{ borderColor: theme.border }}>
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Perks Provided</p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        {job.benefits?.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check size={12} className="text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 border-t bg-slate-50" style={{ borderColor: theme.border }}>
                    <button
                      type="button"
                      onClick={() => handleOpenJob(job)}
                      className="w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#0072CE] hover:bg-[#005BB5] shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── TAB 2: SIGNATURE DEPLOYMENTS ─── */}
      {activeTab === "deployments" && (
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDeployments.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={dep.image}
                        alt={dep.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/20">
                        {dep.tag}
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-xs font-black text-emerald-400 block uppercase">
                          {dep.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-black uppercase text-[#07152B] leading-snug">
                        {dep.name}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin size={13} className="text-[#0072CE] flex-shrink-0" />
                        <span>{dep.location}</span>
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {dep.desc}
                      </p>
                      <ul className="space-y-1 pt-2 border-t text-xs text-slate-700" style={{ borderColor: theme.border }}>
                        {dep.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 size={13} className="text-[#0072CE] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={() => setIsEmployerModalOpen(true)}
                      className="w-full py-2.5 rounded-lg text-xs font-bold uppercase text-white bg-[#0F2B5B] hover:bg-[#0072CE] transition-colors"
                    >
                      Request Similar Deployment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      <JobDetailAndApplyModal
        job={selectedJobForModal}
        isOpen={isJobModalOpen}
        onClose={() => {
          setIsJobModalOpen(false);
          setSelectedJobForModal(null);
        }}
      />

      <EmployerInquiryModal
        isOpen={isEmployerModalOpen}
        onClose={() => setIsEmployerModalOpen(false)}
      />

      <NeomRecruitmentFooter />
    </main>
  );
}
