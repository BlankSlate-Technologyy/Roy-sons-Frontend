"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  HardHat,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  Phone,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Wheat,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/SwissFarmShared";

const STATS = [
  { icon: Award, value: "30+", label: "Years of Dairy Farming\nExperience" },
  { icon: Users, value: "25K+", label: "Healthy Pedigree\nLivestock Managed" },
  { icon: Truck, value: "120M+", label: "Liters Annual Milk\nProduced & Supplied" },
  { icon: HeartPulse, value: "600+", label: "Veterinary Doctors &\nDairy Technologists" },
  { icon: ShieldCheck, value: "100%", label: "Pure Untouched By Hand\nQuality Guarantee" },
];

const SERVICES = [
  {
    icon: Truck,
    title: "Commercial Dairy Production",
    desc: "Automated rotary milking parlors producing fresh milk chilled to 4°C within seconds with zero human contact.",
    href: "/group-companies/swiss-farm/services/high-volume-dairy-production",
    img: "/swiss-card1.png",
  },
  {
    icon: Users,
    title: "Livestock Herd Management",
    desc: "Climate-controlled cross-ventilated barns with sand bedding, robotic grooming brushes, and RFID health tracking.",
    href: "/group-companies/swiss-farm/services/livestock-management-housing",
    img: "/swiss-card2.png",
  },
  {
    icon: Leaf,
    title: "Genetic Breeding Programs",
    desc: "Pedigree sexed semen artificial insemination and genomic selection producing high-yielding dairy heifers.",
    href: "/group-companies/swiss-farm/services/genetic-breeding-reproduction",
    img: "/swiss-card3.png",
  },
  {
    icon: HeartPulse,
    title: "Veterinary Healthcare",
    desc: "Comprehensive on-farm veterinary hospital, preventative vaccinations, automated mastitis testing, and hoof care.",
    href: "/group-companies/swiss-farm/services/veterinary-healthcare-disease-prevention",
    img: "/swiss-card1.png",
  },
  {
    icon: Sparkles,
    title: "Animal Nutrition & Silage",
    desc: "Total Mixed Ration (TMR) computerized feed formulas, anaerobic corn silage pits, and custom mineral premixes.",
    href: "/group-companies/swiss-farm/services/animal-nutrition-silage-rations",
    img: "/swiss-card2.png",
  },
  {
    icon: Zap,
    title: "Sustainable Bio-Energy",
    desc: "Anaerobic bio-digesters converting cattle manure into clean electricity and premium organic compost fertilizer.",
    href: "/group-companies/swiss-farm/services/sustainable-bio-energy-farm-infrastructure",
    img: "/swiss-card3.png",
  },
];

const PRODUCTS_PREVIEW = [
  {
    name: "Grade-A Bulk Raw Milk",
    tag: "Commercial Milk Supply",
    desc: "Chilled to 3.5°C immediately at milking, tested for 3.8%+ Butterfat and 8.5%+ SNF for industrial processors.",
    href: "/group-companies/swiss-farm/products/grade-a-bulk-raw-chilled-milk",
    img: "/swiss-card1.png",
  },
  {
    name: "Holstein-Friesian Heifers",
    tag: "Pedigree Breeding Stock",
    desc: "Certified disease-free pregnant and maiden heifers with verified US/European genomic lineages.",
    href: "/group-companies/swiss-farm/products/pedigree-holstein-friesian-heifers",
    img: "/swiss-card2.png",
  },
  {
    name: "High-Energy Corn Silage",
    tag: "Animal Nutrition Bales",
    desc: "Precision-chopped whole maize crop vacuum-baled for maximum protein and energy lactation density.",
    href: "/group-companies/swiss-farm/products/high-energy-whole-crop-corn-silage",
    img: "/swiss-card3.png",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Scientific Herd Nutrition", desc: "Formulating Total Mixed Rations (TMR) rich in energy, protein, and minerals tailored to cattle lactation stages." },
  { num: "02", title: "Automated Rotary Milking", desc: "Milking in electronic rotary parlors with automated cup take-off and real-time milk yield sensors." },
  { num: "03", title: "Instant 4°C Rapid Chilling", desc: "Plate-heat exchange cooling reducing milk temperature to 4°C within seconds to prevent bacterial growth." },
  { num: "04", title: "Laboratory Quality Assays", desc: "Comprehensive on-site testing for butterfat, protein, somatic cell count, and zero antibiotic residues." },
  { num: "05", title: "Insulated Tanker Dispatch", desc: "Loading into food-grade stainless steel refrigerated road tankers with continuous GPS temperature logging." },
  { num: "06", title: "Circular Bio-Recycling", desc: "Routing organic waste to anaerobic digesters producing renewable biogas and farm bio-compost." },
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

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section with Dairy Complex Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Dairy Production &amp; Livestock Management</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.primary }}>
                Pure Quality Dairy. <span style={{ color: theme.accentGold }}>Advanced Livestock Care.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Farms is a premier commercial dairy enterprise operating automated milking rotaries, scientifically formulated animal nutrition, and certified cold-chain logistics producing over 120 million liters of pure milk annually.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-farm/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Dairy Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.primary }}
                >
                  <span>Request Supply Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-hero.png"
                  alt="Swiss Farms Dairy Complex"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#C5A059]">
                        120M+ Liters Annual Production
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.primary }}>
                      Pure Milk · Pedigree Genetics · 4°C Cold Chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.primary }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss-farm-about.png"
                  alt="Swiss Farms Automated Milking and Pastures"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-1">
                      Advanced Metallurgy &amp; Cold Chain
                    </p>
                    <h4 className="text-base font-bold">Untouched By Hand Direct-to-Chiller Pipeline Systems</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Modern Dairy Farming Engineered For Health &amp; Purity</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Swiss Farms brings together seasoned veterinarians, dairy specialists, and animal nutritionists. We maintain pristine dairy housing, computerized herd monitoring, and rapid cold-chain transport to deliver unmatched quality to our partners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 22000 &amp; HACCP Certified Dairy</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Zero-Antibiotic Residue Guarantee</span>
                </div>
              </div>

              <Link
                href="/group-companies/swiss-farm/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#C5A059]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-farm/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <Link
                      href={svc.href}
                      className="relative block w-full h-48 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primary}10` }}>
                        <Icon size={20} style={{ color: theme.primary }} />
                      </div>

                      <Link href={svc.href}>
                        <h3 className="text-lg font-black mb-2.5 hover:text-[#C5A059] transition-colors cursor-pointer" style={{ color: theme.primary }}>
                          {svc.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 flex gap-2">
                    <Link
                      href={svc.href}
                      className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>Explore Details</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/group-companies/swiss-farm/contact"
                      className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Products &amp; Genetics</SectionLabel>
              <SectionHeading>Featured Dairy Offerings</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-farm/products"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.accentGold }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <Link
                    href={p.href}
                    className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059]/10 text-[#C5A059] inline-block mb-3">
                      {p.tag}
                    </span>
                    <Link href={p.href}>
                      <h3 className="text-xl font-black mb-2 hover:text-[#C5A059] transition-colors cursor-pointer" style={{ color: theme.primary }}>
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 flex gap-2">
                  <Link
                    href={p.href}
                    className="flex-1 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.primary }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/group-companies/swiss-farm/contact"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
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

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Dairy Quality Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From precision total mixed ration feeding to rapid chilling and sterile cold-chain transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.primary }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.primary }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.primary }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C5A059]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                SECURE YOUR COMMERCIAL DAIRY SUPPLY CONTRACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.primary }}>
                Request A Confidential Dairy Supply Quote
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect directly with our commercial trading desk to review fat and SNF testing certificates, sample test batches, and tanker logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Dairy Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
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
