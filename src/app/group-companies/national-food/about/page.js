"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Hotel,
  Building2,
  Truck,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Package,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NFSShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years of Culinary &\nCatering Excellence", icon: Award },
  { value: "500+", label: "Institutional &\nCorporate Contracts", icon: Building2 },
  { value: "1000000+", label: "Nutritious Meals\nPrepared Daily", icon: UtensilsCrossed },
  { value: "350+", label: "Hospitals, Colleges &\nCorporate Clients", icon: Users2 },
  { value: "99.9%", label: "HACCP Food Safety &\nHygiene Compliance", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Gold-Standard Food Hygiene",
    desc: "Strict adherence to HACCP, ISO 22000, and Punjab Food Authority (PFA) standards across every kitchen station, ingredient batch, and transport vehicle.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritionist-Engineered Menus",
    desc: "Every institutional meal program is scientifically balanced by certified clinical dietitians to ensure optimal caloric balance, vitamins, and vitality.",
  },
  {
    icon: Truck,
    title: "Unbroken Cold-Chain Reliability",
    desc: "Operating our own refrigerated fleet maintaining +2°C to +4°C continuous temperature logging to ensure absolute ingredient freshness from farm to fork.",
  },
  {
    icon: Building2,
    title: "Scalable Institutional Capacity",
    desc: "Capable of preparing and seamlessly distributing from 500 to over 50,000 fresh, hot, and hygienic meals daily across dispersed industrial campuses.",
  },
];

export default function NFSAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About National Food Services (NFS)</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
                Culinary Excellence. <span style={{ color: theme.maroon }}>Nourishing Pakistan&apos;s Institutions.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Food Services (Pvt) Ltd is Pakistan&apos;s leading institutional food services provider. Serving over 1,000,000 meals daily to hospitals, corporate headquarters, manufacturing plants, universities, and government facilities, we combine gastronomic mastery with strict HACCP food safety standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-food/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.maroon }}
                >
                  <span>Explore Catering Menus</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.maroonDark }}
                >
                  <span>Request Catering Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-rose-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/nfs_hero_catering.svg"
                  alt="National Food Services Institutional Culinary Kitchen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.crimson }}>
                      HACCP &amp; ISO 22000 Certified
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.maroonDark }}>
                      1,000,000+ Nutritious Meals Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nfs-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.maroon}10` }}>
                    <Icon size={22} style={{ color: theme.maroon }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.maroonDark }}>
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-rose-50/50" style={{ borderColor: theme.border }}>
              <Image
                src="/nfs_hero_catering.svg"
                alt="Institutional Catering Excellence and Quality Kitchens"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380611]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#DFC48B] block mb-1">
                    Premier Catering Network
                  </span>
                  <h4 className="text-base font-bold">25+ Years of Trust Across Healthcare, Education &amp; Industry</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To deliver exceptional, hygienic, and scientifically balanced dining solutions that fuel workforce productivity, accelerate hospital recovery, and elevate campus life across Pakistan through continuous innovation in food safety and culinary mastery.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Culinary Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be Pakistan&apos;s undisputed benchmark in institutional gastronomy and food supply chain governance, recognized globally for zero-defect food safety, dietitian excellence, and sustainable farm-to-table sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The unwavering quality protocols and hygiene benchmarks that govern our central production facilities and client dining halls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="nfs-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.maroon}10` }}>
                      <Icon size={26} style={{ color: theme.maroon }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.maroonDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.crimson }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.maroon }}>
                      HACCP Certified Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.crimson }}>
                UPGRADE YOUR INSTITUTIONAL FOOD SERVICES TODAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.maroonDark }}>
                Schedule A Culinary Consultation &amp; Kitchen Audit
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified executive chefs and food safety directors to customize daily meal plans for your hospital, university, or corporate headquarters.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.maroon }}
              >
                <span>Request Catering Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-rose-50/50 cursor-pointer"
                style={{ borderColor: theme.maroon, color: theme.maroon }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}
