"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/VetvacShared";
import {
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Star,
  Plus,
  Minus,
  ShieldCheck,
  Syringe,
  FlaskConical,
  Wheat,
  Bird,
  Building2,
  Users,
  Handshake,
  Microscope,
  Search,
  Factory,
  ClipboardCheck,
  Truck,
  Headphones,
  Award,
  Lightbulb,
  CheckCircle2,
  Sprout,
  Stethoscope,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Sparkles,
  HeartPulse,
  Activity,
  Check,
} from "lucide-react";

// ─── Design Tokens (Strict Color Palette) ────────────────────────────────────
const COLORS = {
  primary: "#094C80",       // Primary Blue: Shield, headings, buttons
  primaryDk: "#0B2745",     // Dark Navy: Logo text, main text
  ink: "#0B2745",           // Dark Navy: Logo text, main text
  green: "#1E855C",         // Green: Paw/health accent
  white: "#FFFFFF",         // White: Background, text on blue
  lightBg: "#EAF3F8",       // Light Blue: Section backgrounds
  lightGreen: "#EAF6F0",    // Light Green: Health/feature backgrounds
  muted: "#4B6178",         // Muted secondary text
  border: "#D0E2EE",        // Soft border matching palette
  borderGreen: "#CBE8D9",   // Soft border for green cards
  footerBg: "#071B30",      // Deep rich navy for footer
};

const STATS = [
  { icon: Syringe, value: "100+", label: "Vaccines & Formulations" },
  { icon: Users, value: "25+", label: "Veterinary Scientists" },
  { icon: Handshake, value: "500+", label: "Farm & Clinic Partners" },
  { icon: ShieldCheck, value: "99.8%", label: "Batch Quality Rate" },
];

export default function SolutionsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.green }}>
      <ScrollProgress color={COLORS.primary} />

      <VetvacNavbar />

      {/* Hero Header */}
      <section
        className="py-20 px-6 border-b"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white shadow-sm"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Sparkles size={13} />
              <span>03 — Products &amp; Solutions</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: COLORS.green }}>
              Comprehensive Veterinary Healthcare Solutions
            </h1>
            <p className="text-[16px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
              VET VAC PHARMA provides a focused portfolio of veterinary healthcare products designed to support disease prevention, animal wellbeing, and productive farming operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="/group-companies/Vetvacpharma/contact">
                <span>Inquire for Products</span>
                <ArrowRight size={15} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/Vetvacpharma">
                <span>Back to Company Overview</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Live Animated Stats */}
      <section className="py-10 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-center"
              style={{
                backgroundColor: idx % 2 === 0 ? COLORS.lightBg : COLORS.lightGreen,
                borderColor: idx % 2 === 0 ? COLORS.border : COLORS.borderGreen,
              }}
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }} />
              <div className="text-2xl font-black mb-1" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Core Solutions: Vaccines & Biologicals with AI Images */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          {/* Section 1: Veterinary Vaccines */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: COLORS.white, color: COLORS.green }}
              >
                IMMUNIZATION &amp; PREVENTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                Veterinary Vaccines
              </h2>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                Our vaccine solutions are designed to support preventive healthcare programs for poultry and livestock. We formulate high-potency live and inactivated vaccines that provide proven antibody response and long-lasting protection.
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-[13px] font-black uppercase tracking-wider" style={{ color: COLORS.green }}>
                  Key Areas Include:
                </p>
                {[
                  "Poultry vaccination (viral & bacterial defense)",
                  "Livestock vaccination (cattle, dairy, small ruminants)",
                  "Disease prevention & outbreak management",
                  "Immunization programs customized for farm cycles",
                  "Farm-level health management and diagnostic guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: COLORS.green }} className="flex-shrink-0" />
                    <span className="text-[13.5px] font-bold" style={{ color: COLORS.green }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/group-companies/Vetvacpharma/solutions/veterinary-vaccines"
                  className="px-6 py-3 rounded-lg text-[13px] font-bold text-white bg-[#1E855C] hover:bg-[#156344] transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Explore Veterinary Vaccines Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-md border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_vaccines_ai.jpg"
                  alt="VET VAC PHARMA Veterinary Vaccines Sterile Bottling"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#094C80] font-black text-xs uppercase tracking-wider">
                    Preventive Immunity &amp; Controlled Quality
                  </span>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/veterinary-vaccines"
                    className="p-2 rounded-full bg-[#1E855C] text-white hover:scale-110 transition-transform"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Biological Products */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-md border group"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_biologics_ai.jpg"
                  alt="VET VAC PHARMA Biological Products Laboratory"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#094C80] font-black text-xs uppercase tracking-wider">
                    Safe, Effective &amp; Responsible Farming
                  </span>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/biological-products"
                    className="p-2 rounded-full bg-[#1E855C] text-white hover:scale-110 transition-transform"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: COLORS.white, color: COLORS.green }}
              >
                BIOTECHNOLOGY MODIFIERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                Biological Products
              </h2>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                Our biological product portfolio supports modern approaches to animal disease prevention and healthcare management.
              </p>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                We focus on solutions that contribute to improved animal health while supporting responsible and effective farming practices.
              </p>

              <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                <h4 className="text-[14px] font-black" style={{ color: COLORS.green }}>
                  Biosecurity &amp; Non-Antibiotic Balance
                </h4>
                <p className="text-[12.5px] leading-relaxed" style={{ color: COLORS.green }}>
                  Formulated to enhance cellular immunity, optimize gut microbiome stability, and protect flocks and herds without inducing antimicrobial resistance.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/group-companies/Vetvacpharma/solutions/biological-products"
                  className="px-6 py-3 rounded-lg text-[13px] font-bold text-white bg-[#094C80] hover:bg-[#1E855C] transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Explore Biologicals Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3: Poultry & Livestock Health Solutions */}
          <div className="grid md:grid-cols-2 gap-8 pt-6">
            {/* Poultry */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-[#1E855C] transition-all duration-300 group"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#EAF6F0]"
                    >
                      <Bird size={26} style={{ color: COLORS.green }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black" style={{ color: COLORS.green }}>
                        Poultry Health Solutions
                      </h3>
                      <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                        Healthier Flocks • Stronger Production
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/poultry-health-solutions"
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#1E855C] hover:text-[#094C80]"
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                  Modern poultry farming requires effective prevention and health-management strategies. Our poultry-focused solutions are designed to help address common health challenges and support healthier flocks and more efficient production.
                </p>
                <div
                  className="relative w-full h-48 rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: COLORS.border }}
                >
                  <Image
                    src="/vetvac_poultry_service.jpg"
                    alt="Commercial Poultry Flock Health"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-2 text-[12px] font-bold" style={{ color: COLORS.green }}>
                  <div className="p-2.5 rounded border text-center" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                    ✓ Viral &amp; Bacterial Vaccines
                  </div>
                  <div className="p-2.5 rounded border text-center" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                    ✓ Flock Immunity Support
                  </div>
                </div>
                <Link
                  href="/group-companies/Vetvacpharma/solutions/poultry-health-solutions"
                  className="w-full py-3 rounded-lg text-[12.5px] font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>View Poultry Health Detail Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Livestock */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-[#1E855C] transition-all duration-300 group"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#EAF6F0]"
                    >
                      <Wheat size={26} style={{ color: COLORS.green }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black" style={{ color: COLORS.green }}>
                        Livestock Health Solutions
                      </h3>
                      <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                        Cattle • Dairy • Herd Wellbeing
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/livestock-health-solutions"
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#1E855C] hover:text-[#094C80]"
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                  We support livestock producers with healthcare solutions focused on maintaining animal wellbeing and reducing the impact of preventable diseases.
                </p>

                <p className="text-[12.5px] font-black uppercase tracking-wider mb-2" style={{ color: COLORS.green }}>
                  Our solutions can support:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Cattle health management",
                    "Dairy operations & mastitis defense",
                    "Commercial livestock & feedlot growth",
                    "Farm disease prevention protocols",
                    "Animal wellness & parasite eradication",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: COLORS.green }}>
                      <CheckCircle2 size={16} style={{ color: COLORS.green }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <Link
                  href="/group-companies/Vetvacpharma/solutions/livestock-health-solutions"
                  className="w-full py-3 rounded-lg text-[12.5px] font-extrabold uppercase tracking-wider text-white bg-[#094C80] hover:bg-[#1E855C] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>View Livestock Health Detail Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Integrated Animal Health Approach Banner */}
          <div
            className="p-8 rounded-2xl border text-white"
            style={{ backgroundColor: COLORS.primary, borderColor: COLORS.border }}
          >
            <span
              className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", color: "#CBE8D9" }}
            >
              HOLISTIC PERSPECTIVE
            </span>
            <h3 className="text-2xl font-black mb-3 text-white">
              Integrated Animal Health Approach
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-200 max-w-3xl">
              Effective animal healthcare involves more than a single product. We promote a comprehensive approach combining vaccination, preventive healthcare, farm management, veterinary guidance, and ongoing monitoring.
            </p>
          </div>

          {/* CTA Banner */}
          <div
            className="p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Find the Right Solution for Your Animal Health Program
              </h3>
              <p className="text-[13.5px] text-white/90 max-w-xl">
                Connect with our team to explore veterinary healthcare solutions for your operation.
              </p>
            </div>
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </main>
  );
}
