"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Lightbulb,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Globe,
  Clock,
  Briefcase,
  Check,
  Linkedin,
  HeartPulse,
  Stethoscope,
  Microscope,
  Settings,
  ShoppingBag,
  Cpu,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

const STATS = [
  { value: "30+",   label: "Years of\nExcellence",     icon: Award },
  { value: "250+",  label: "Projects\nDelivered",      icon: Building2 },
  { value: "15+",   label: "Countries\nServed",        icon: Globe },
  { value: "1000+", label: "Healthcare\nSpecialists",  icon: Users },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity & Compliance",
    desc: "Uncompromising honesty, regulatory adherence, and transparent partnerships across 30+ nations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    desc: "Deploying high-tech medical engineering, modular suites, and cleanroom air handling technologies.",
  },
  {
    icon: Award,
    title: "Excellence & Precision",
    desc: "Delivering turnkey hospital projects to the highest international quality, HTM 02-01, and ISO standards.",
  },
  {
    icon: Users,
    title: "Global Collaboration",
    desc: "Deep strategic relationships with top global OEMs, defense health directorates, and ministries of health.",
  },
];

const LEADERSHIP = {
  name: "Ijaz Naseer",
  title: "Chairman",
  company: "ROYSONS Group & Roys & Roys International",
  photo: "/logos/chairman.jpeg",
  bio: "Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally. Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.",
  message: "Our focus has always been to supply the right products, at the right prices, at the right time — while building lasting relationships with our clients across healthcare, laboratory and institutional sectors. We remain committed to being a reputable and diversified healthcare organization in Pakistan.",
  expertise: [
    "Healthcare Business Development",
    "Medical Equipment Procurement",
    "Strategic Business Planning",
    "Market Research & Product Development",
    "Client Relationship Management",
    "Institutional Leadership",
  ],
};

const TEAM_ROLES = [
  { role: "Healthcare Specialists",      icon: HeartPulse,   image: "/team/healthcare_specialist.jpg",   desc: "Subject-matter experts in clinical and hospital healthcare solutions." },
  { role: "Medical Equipment Experts",   icon: Stethoscope,  image: "/team/medical_equipment.jpg",       desc: "Professionals specializing in medical device supply and integration." },
  { role: "Laboratory Professionals",    icon: Microscope,   image: "/team/laboratory_professional.jpg", desc: "Experts in laboratory systems, research equipment and analytical instruments." },
  { role: "Project Engineers",           icon: Settings,     image: "/team/project_engineer.jpg",        desc: "Engineers managing hospital infrastructure and turnkey project delivery." },
  { role: "Procurement Specialists",     icon: ShoppingBag,  image: "/team/procurement_specialist.jpg",  desc: "Procurement professionals ensuring quality supply at competitive pricing." },
  { role: "Technical Support Team",      icon: Cpu,          image: "/team/technical_support.jpg",       desc: "Field technicians providing installation, calibration and AMC support." },
  { role: "Project Management",          icon: BarChart3,    image: "/team/project_management.jpg",      desc: "Project managers overseeing concept-to-commissioning delivery." },
  { role: "Client Services",             icon: UserCheck,    image: "/team/client_services.jpg",         desc: "Dedicated client service professionals ensuring satisfaction at every stage." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="About Us" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
              >
                ABOUT ROYS &amp; ROYS INTERNATIONAL
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4"
              >
                Building World-Class
                <span className="block text-[#38bdf8] font-black text-2xl sm:text-3xl lg:text-4xl my-1">
                  Healthcare &amp; Institutional
                </span>
                Infrastructure Worldwide
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-7 font-normal"
              >
                Roys &amp; Roys™ International is a diversified enterprise specializing in turnkey hospital engineering, integrated healthcare infrastructure, medical equipment procurement, and institutional contracting.
              </p>
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-3">
                <Link
                  href="/group-companies/roys-roys/services"
                  className="px-5 py-2.5 rounded bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow flex items-center gap-1.5"
                >
                  <span>Our Capabilities</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-5 py-2.5 rounded border border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
                >
                  <span>Contact Directors</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
              <div className="relative h-[360px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/roys_hospital_interior.png"
                  alt="Modern Hospital Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b]/80 via-transparent to-transparent" />
                <div
                  data-aos="zoom-in"
                  data-aos-delay="350"
                  className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0f2b48]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-extrabold uppercase text-[#B49438]">Established Heritage</p>
                    <p className="text-sm font-bold text-white">30+ Years Global Presence</p>
                  </div>
                  <span className="text-xl font-black text-[#38bdf8]">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-10 border-t border-white/15">
            {STATS.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.label}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded bg-blue-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-black text-white leading-none mb-0.5">
                      {st.value}
                    </p>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider whitespace-pre-line leading-tight">
                      {st.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Leadership (CEO / Chairman Section) ──────────────────────────── */}
      <section className="py-14 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3" data-aos="fade-down">
              EXECUTIVE LEADERSHIP
            </span>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0f2b48]"
            >
              LEADERSHIP &amp; GOVERNANCE
            </h2>
            <div className="h-1 w-16 bg-[#2563eb] mx-auto mt-3 rounded-full" />
          </div>

          {/* Chairman Showcase Card: Exact Match to Showcase Style */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="w-full rounded-2xl p-6 sm:p-10 lg:p-12 border border-neutral-200 bg-white shadow-sm hover:border-[#0a7a8c]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
              {/* Image Side (Left) */}
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/30 bg-neutral-900 group">
                  <Image
                    src={LEADERSHIP.photo}
                    alt={`${LEADERSHIP.name} - ${LEADERSHIP.title}`}
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Content Side (Right) */}
              <div className="flex-1 w-full flex flex-col justify-center text-center lg:text-left">
                {/* Badge Pill */}
                <div className="inline-flex items-center bg-[#f0fdfa] border border-[#0a7a8c]/30 px-4 py-1 rounded-full w-fit mb-4 mx-auto lg:mx-0">
                  <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#0a7a8c]">
                    {LEADERSHIP.title}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] leading-snug tracking-tight mb-4">
                  {LEADERSHIP.name}
                </h3>

                {/* Description Paragraph 1 */}
                <p className="text-[15.5px] sm:text-[17px] lg:text-[18px] text-[#042E3A]/85 leading-[1.85] font-normal mb-4 text-justify lg:text-left">
                  Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally.
                </p>

                {/* Description Paragraph 2 */}
                <p className="text-[15.5px] sm:text-[17px] lg:text-[18px] text-[#042E3A]/85 leading-[1.85] font-normal mb-6 text-justify lg:text-left">
                  Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.
                </p>

                {/* Action Buttons: View Profile & LinkedIn */}
                <div className="flex flex-wrap items-center gap-3.5 justify-center lg:justify-start">
                  <Link
                    href="/about/chairmans-message"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-[#0a7a8c] bg-[#042E3A] hover:bg-[#0a7a8c] text-white text-xs font-black uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 group/btn shadow-xs cursor-pointer"
                  >
                    <span className="text-white">VIEW PROFILE</span>
                    <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <a
                    href="https://www.linkedin.com/company/roysonspvtltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${LEADERSHIP.name} LinkedIn Profile`}
                    className="inline-flex items-center justify-center w-11 h-11 border border-[#0a7a8c]/40 bg-[#f0fdfa] hover:bg-[#0a7a8c] text-[#0a7a8c] hover:text-white rounded-[2px] transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <Linkedin size={18} strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Team Section ──────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className="inline-block px-3 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-3" data-aos="fade-up">
            PROFESSIONAL TEAM
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-3"
          >
            OUR TEAM &amp; ORGANIZATIONAL CAPABILITIES
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="text-sm text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            A specialized multidisciplinary team of healthcare specialists, biomedical engineers, procurement strategists, and turnkey project managers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {TEAM_ROLES.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.role}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 70}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 flex flex-col items-start group"
                >
                  {member.image ? (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50 shadow-xs">
                      <Image
                        src={member.image}
                        alt={member.role}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-200 flex items-center justify-center mb-4 shadow-xs">
                      <Icon size={26} />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-1.5 leading-snug">
                    {member.role}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ──────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-6">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="p-7 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Target size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To extend services beyond client expectations to ensure we supply the right products, at the right prices, at the right time.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="p-7 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Eye size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be a reputable and diversified healthcare company in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ───────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-10"
          >
            OUR CORE VALUES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
