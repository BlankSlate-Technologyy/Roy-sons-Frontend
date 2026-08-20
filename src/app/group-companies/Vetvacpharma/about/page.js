"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/VetvacShared";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Microscope,
  Bird,
  Wheat,
  Globe,
  Building2,
  Users,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
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

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: "Animal Health",
    desc: "Supporting effective disease prevention and animal wellbeing across farms and veterinary operations.",
  },
  {
    icon: Award,
    title: "Quality & Reliability",
    desc: "Maintaining controlled quality and consistency across our products and processes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Science",
    desc: "Exploring modern veterinary solutions backed by scientific understanding and research.",
  },
  {
    icon: Handshake,
    title: "Partnership & Support",
    desc: "Working closely with veterinarians, farmers, distributors, and animal-health professionals.",
  },
];

const STATS = [
  { icon: Award, value: "100%", label: "Quality Assurance" },
  { icon: Users, value: "25+", label: "Expert Scientists" },
  { icon: Globe, value: "500+", label: "Farms & Clinics Served" },
  { icon: ShieldCheck, value: "100+", label: "Vaccines & Solutions" },
];

export default function AboutPage() {
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
              <span>02 — About Us</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.green }}>
              About VET VAC PHARMA
            </h1>
            <p className="text-[18px] font-bold mb-3" style={{ color: COLORS.green }}>
              Advancing Veterinary Healthcare
            </p>
            <p className="text-[15.5px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
              VET VAC PHARMA is a veterinary healthcare company focused on supporting healthier animals through innovative vaccines, biological products, and animal-health solutions.
            </p>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
              We aim to serve the evolving needs of poultry and livestock industries by combining product quality, scientific knowledge, and practical industry understanding.
            </p>

            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="/group-companies/Vetvacpharma#solutions">
                <span>Explore Solutions</span>
                <ArrowRight size={15} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/Vetvacpharma/contact">
                <span>Contact Our Specialists</span>
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

      {/* Narrative & AI Image Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: COLORS.white, color: COLORS.green }}
              >
                OUR PERSPECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                Beyond Individual Products
              </h2>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                Our focus extends beyond individual products. We believe effective animal healthcare requires prevention, responsible disease management, technical knowledge, and continuous improvement.
              </p>
              <div className="p-4 rounded-xl border space-y-2.5" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: COLORS.green }} />
                  <span className="text-[13px] font-bold" style={{ color: COLORS.green }}>Proactive disease prevention protocols</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: COLORS.green }} />
                  <span className="text-[13px] font-bold" style={{ color: COLORS.green }}>Evidence-based scientific formulations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: COLORS.green }} />
                  <span className="text-[13px] font-bold" style={{ color: COLORS.green }}>Practical farm-level technical support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[380px] rounded-2xl overflow-hidden border shadow-md"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_about_ai.jpg"
                  alt="Veterinarian with livestock animal health"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <span
                  className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3"
                  style={{ backgroundColor: COLORS.white, color: COLORS.green }}
                >
                  PURPOSE
                </span>
                <h3 className="text-2xl font-black mb-3" style={{ color: COLORS.green }}>
                  Our Mission
                </h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                  To provide reliable veterinary healthcare solutions that help protect animal health, improve farm productivity, and support sustainable livestock and poultry production.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t text-[12px] font-bold" style={{ borderColor: COLORS.border, color: COLORS.green }}>
                Sustainable Livestock &amp; Poultry
              </div>
            </div>

            {/* Vision */}
            <div
              className="p-8 rounded-2xl border bg-white shadow-sm flex flex-col justify-between"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <span
                  className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3"
                  style={{ backgroundColor: COLORS.white, color: COLORS.green }}
                >
                  ASPIRATION
                </span>
                <h3 className="text-2xl font-black mb-3" style={{ color: COLORS.green }}>
                  Our Vision
                </h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                  To become a trusted name in veterinary healthcare by delivering innovative, quality-focused, and scientifically driven solutions for the evolving needs of the animal-health industry.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t text-[12px] font-bold" style={{ borderColor: COLORS.border, color: COLORS.green }}>
                Scientifically Driven Innovation
              </div>
            </div>
          </div>

          {/* 4 Core Commitments */}
          <div>
            <div className="mb-6">
              <span
                className="text-[11.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1 border"
                style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
              >
                OUR FOUNDATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                Our Commitment
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMMITMENTS.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all"
                  style={{
                    borderColor: idx % 2 === 0 ? COLORS.border : COLORS.borderGreen,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: idx % 2 === 0 ? COLORS.lightBg : COLORS.lightGreen,
                      color: idx % 2 === 0 ? COLORS.primary : COLORS.green,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[16px] font-black mb-2" style={{ color: COLORS.green }}>
                    {title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: COLORS.green }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Modern Agriculture Banner */}
          <div
            className="rounded-2xl p-8 sm:p-10 border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
          >
            <div className="max-w-2xl">
              <span
                className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-white inline-block mb-2"
                style={{ color: COLORS.green }}
              >
                FARM PERFORMANCE &amp; ANIMAL WELLBEING
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: COLORS.green }}>
                Supporting Modern Agriculture
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.green }}>
                Healthy animals are fundamental to productive livestock and poultry farming. VET VAC PHARMA works toward solutions that help farmers and animal-health professionals address changing disease challenges while improving animal wellbeing and farm performance.
              </p>
            </div>
            <Link
              href="/group-companies/Vetvacpharma#solutions"
              className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold flex items-center gap-2 flex-shrink-0 shadow-md hover:bg-[#1E855C] transition-all duration-300"
              style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
            >
              <span>Explore Solutions</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </main>
  );
}
