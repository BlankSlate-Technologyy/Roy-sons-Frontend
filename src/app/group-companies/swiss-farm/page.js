"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  ChevronDown,
  HeartPulse,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SwissFarmLeadershipSection,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/SwissFarmShared";
import { SWISS_FARM_SERVICES } from "./services-data";
import { SWISS_FARM_PRODUCTS } from "./products-data";

const STATS = [
  { icon: Award, value: "30+", label: "Years of Dairy Farming\nExperience" },
  { icon: Users, value: "25K+", label: "Healthy Pedigree\nLivestock Managed" },
  { icon: Truck, value: "120M+", label: "Liters Annual Milk\nProduced & Supplied" },
  { icon: HeartPulse, value: "600+", label: "Veterinary Doctors &\nDairy Technologists" },
  { icon: ShieldCheck, value: "100%", label: "Pure Untouched By Hand\nQuality Guarantee" },
];

const FEATURED_PRODUCT_IDS = ["bulk-raw-milk", "holstein-heifers", "corn-silage"];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Scientific Herd Nutrition",
    desc: "Formulating Total Mixed Rations (TMR) rich in energy, protein, and minerals tailored to cattle lactation stages.",
  },
  {
    num: "02",
    title: "Automated Rotary Milking",
    desc: "Milking in electronic rotary parlors with automated cup take-off and real-time milk yield sensors.",
  },
  {
    num: "03",
    title: "Instant 4°C Rapid Chilling",
    desc: "Plate-heat exchange cooling reducing milk temperature to 4°C within seconds to prevent bacterial growth.",
  },
  {
    num: "04",
    title: "Laboratory Quality Assays",
    desc: "Comprehensive on-site testing for butterfat, protein, somatic cell count, and zero antibiotic residues.",
  },
  {
    num: "05",
    title: "Insulated Tanker Dispatch",
    desc: "Loading into food-grade stainless steel refrigerated road tankers with continuous GPS temperature logging.",
  },
  {
    num: "06",
    title: "Circular Bio-Recycling",
    desc: "Routing organic waste to anaerobic digesters producing renewable biogas and farm bio-compost.",
  },
];

const FAQS = [
  {
    q: "What is Swiss Farms' annual milk production capacity?",
    a: "Swiss Farms produces and distributes over 120 Million liters of certified Grade-A milk annually, supplying leading commercial dairy processors, cheese manufacturers, and institutions across Pakistan.",
  },
  {
    q: "How does Swiss Farms guarantee zero antibiotic residues in milk?",
    a: "Every cow undergoing medical treatment is isolated in a separate recovery ward with electronic RFID milk diversion. Every dispatched road tanker undergoes multi-panel antibiotic testing before leaving the farm gate.",
  },
  {
    q: "Do you supply live pedigree dairy heifers and breeding genetics?",
    a: "Yes. We offer pregnant and maiden Holstein-Friesian heifers with certified genomic lineage, as well as cryopreserved sexed semen straws from top 1% TPI international sires.",
  },
  {
    q: "How can commercial dairy processors partner with Swiss Farms?",
    a: "You can submit an inquiry through our Commercial Desk or contact our Lahore headquarters to establish daily refrigerated tanker supply agreements with guaranteed fat and SNF specifications.",
  },
];

export default function SwissFarmHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  const featuredProducts = FEATURED_PRODUCT_IDS.map((id) =>
    SWISS_FARM_PRODUCTS.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section with Dairy Complex Visual */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Dairy Production &amp; Livestock Management</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                Pure Quality Dairy.{" "}
                <span style={{ color: theme.accentGold }}>Advanced Livestock Care.</span>
              </h1>

              <p
                className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                Swiss Farms is a premier commercial dairy enterprise operating automated milking rotaries, scientifically formulated animal nutrition, and certified cold-chain logistics producing over 120 million liters of pure milk annually.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/group-companies/swiss-farm/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Dairy Products</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 transition-all duration-300 hover:bg-[#F4F8F4] cursor-pointer"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <span>Request Supply Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/swiss-farm-hero.png"
                  alt="Swiss Farms Commercial Dairy Complex"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[13px] font-black uppercase tracking-wider"
                        style={{ color: theme.accentGold }}
                      >
                        120M+ Liters Annual Production
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.primary }}>
                      Pure Milk · Pedigree Genetics · 4°C Cold Chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Forest Green Stats Counter Strip */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: theme.primaryDark,
          borderColor: "rgba(255,255,255,0.1)",
          color: "#FFFFFF",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: theme.primaryCard,
                    borderColor: "rgba(224, 188, 111, 0.28)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(224, 188, 111, 0.16)" }}
                  >
                    <Icon size={22} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[13.5px] font-bold uppercase tracking-wide whitespace-pre-line text-[#DFECE2] leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[340px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-white"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/swiss-farm-about.png"
                  alt="Swiss Farms Sunlit Pastures and Grazing Holstein Herd"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p
                      className="text-[13px] font-black uppercase tracking-widest mb-1"
                      style={{ color: theme.goldBright }}
                    >
                      Automated Milking &amp; Cold Chain
                    </p>
                    <h4 className="text-[17px] font-extrabold text-white">
                      Untouched By Hand Direct-to-Chiller Pipeline Systems
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-4">
                Modern Dairy Farming Engineered For Health &amp; Purity
              </SectionHeading>

              <p
                className="text-[15.5px] sm:text-[16.5px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                Swiss Farms brings together seasoned veterinarians, dairy specialists, and animal nutritionists. We maintain pristine dairy housing, computerized herd monitoring, and rapid cold-chain transport to deliver unmatched quality to our partners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div
                  className="flex items-center gap-3 p-4 rounded-2xl border bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={20} style={{ color: theme.accentGold }} className="flex-shrink-0" />
                  <span className="text-[14.5px] font-bold" style={{ color: theme.primary }}>
                    ISO 22000 &amp; HACCP Certified Dairy
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 p-4 rounded-2xl border bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={20} style={{ color: theme.accentGold }} className="flex-shrink-0" />
                  <span className="text-[14.5px] font-bold" style={{ color: theme.primary }}>
                    100% Zero-Antibiotic Residue Guarantee
                  </span>
                </div>
              </div>

              <Link
                href="/group-companies/swiss-farm/about"
                className="inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wider transition-all hover:gap-3"
                style={{ color: theme.accentGold }}
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-9">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-farm/services"
              className="inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All 6 Capabilities</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SWISS_FARM_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <Link
                      href={`/group-companies/swiss-farm/services/${svc.slug}`}
                      className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={svc.heroImage}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span
                          className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                          style={{ borderColor: theme.border, color: theme.primary }}
                        >
                          {svc.tag}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5"
                        style={{ backgroundColor: `${theme.primary}12` }}
                      >
                        <Icon size={22} style={{ color: theme.primary }} />
                      </div>

                      <Link href={`/group-companies/swiss-farm/services/${svc.slug}`}>
                        <h3
                          className="text-[19px] font-black mb-2 hover:text-[#A88134] transition-colors cursor-pointer leading-snug"
                          style={{ color: theme.primary }}
                        >
                          {svc.title}
                        </h3>
                      </Link>

                      <p
                        className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed line-clamp-3"
                        style={{ color: theme.textMuted }}
                      >
                        {svc.overview}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2.5">
                    <Link
                      href={`/group-companies/swiss-farm/services/${svc.slug}`}
                      className="flex-1 py-3 rounded-xl border text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F4F8F4] transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/group-companies/swiss-farm/contact"
                      className="px-4 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.primary }}
                      title="Request Proposal"
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

      {/* Featured Products Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-9">
            <div>
              <SectionLabel>Products &amp; Genetics</SectionLabel>
              <SectionHeading>Featured Dairy Offerings</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-farm/products"
              className="inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wider"
              style={{ color: theme.accentGold }}
            >
              <span>View All 6 Products</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <div
                key={p.slug}
                className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <Link
                    href={`/group-companies/swiss-farm/products/${p.slug}`}
                    className="relative block w-full h-56 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={p.heroImage}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="p-6">
                    <span
                      className="text-[12.5px] font-extrabold uppercase px-3 py-1 rounded-lg inline-block mb-3"
                      style={{
                        backgroundColor: "rgba(168, 129, 52, 0.12)",
                        color: theme.accentGold,
                      }}
                    >
                      {p.category}
                    </span>
                    <Link href={`/group-companies/swiss-farm/products/${p.slug}`}>
                      <h3
                        className="text-[20px] font-black mb-2 hover:text-[#A88134] transition-colors cursor-pointer leading-snug"
                        style={{ color: theme.primary }}
                      >
                        {p.name}
                      </h3>
                    </Link>
                    <p
                      className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed line-clamp-3"
                      style={{ color: theme.textMuted }}
                    >
                      {p.overview}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2.5">
                  <Link
                    href={`/group-companies/swiss-farm/products/${p.slug}`}
                    className="flex-1 py-3 rounded-xl border text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F4F8F4] transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.primary }}
                  >
                    <span>Specifications</span>
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/group-companies/swiss-farm/contact"
                    className="px-4 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                    style={{ backgroundColor: theme.primary }}
                    title="Request Proposal"
                  >
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership & Team Section */}
      <SwissFarmLeadershipSection showProfileLink />

      {/* Process Pathway Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-3">
              6-Stage Dairy Quality Lifecycle
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              From precision total mixed ration feeding to rapid chilling and sterile cold-chain transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-3xl border bg-[#F4F8F4]/70 shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[16px] text-white mb-4 shadow-sm"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-[18px] font-black mb-2" style={{ color: theme.primary }}>
                    {step.title}
                  </h4>
                  <p
                    className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-2">
              Everything You Need To Know
            </SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: openFaq === idx ? theme.accentGold : theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-[15.5px] sm:text-[16.5px] cursor-pointer"
                  style={{ color: theme.primary }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#A88134]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5 text-[15px] font-medium leading-relaxed border-t pt-4"
                    style={{ borderColor: theme.border, color: theme.textMuted }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-7 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                SECURE YOUR COMMERCIAL DAIRY SUPPLY CONTRACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Request A Confidential Dairy Supply Quote
              </h2>
              <p className="text-[15.5px] font-medium max-w-xl text-[#D8E8DC]">
                Connect directly with our commercial trading desk to review fat and SNF testing certificates, sample test batches, and tanker logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                <span>Request Dairy Quotation</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 border-white/80 text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <Phone size={16} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
