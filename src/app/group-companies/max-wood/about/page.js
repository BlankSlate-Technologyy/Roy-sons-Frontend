"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
  Ruler,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxWoodShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years of Woodcraft\nExcellence", icon: Award },
  { value: "1500+", label: "Interior Projects\nCompleted", icon: Home },
  { value: "500+", label: "Signature Furniture\nDesigns", icon: Sofa },
  { value: "250+", label: "Master Craftsmen &\nInterior Architects", icon: Users2 },
  { value: "30+", label: "Cities Served\nNationwide", icon: Compass },
];

const CORE_VALUES = [
  {
    icon: Hammer,
    title: "Master Joinery & Craftsmanship",
    desc: "Combining centuries-old traditional mortise-and-tenon joinery with 5-axis CNC machining precision for indestructible structural integrity.",
  },
  {
    icon: Palette,
    title: "Timeless Architectural Aesthetics",
    desc: "Collaborating with leading interior architects to formulate bespoke veneer compositions, organic curved silhouettes, and multi-tone lacquer finishes.",
  },
  {
    icon: ShieldCheck,
    title: "FSC Certified Sustainable Timber",
    desc: "Procuring 100% sustainably harvested solid Burma teak, American walnut, European white oak, and indigenous seasoned Sheesham rosewood.",
  },
  {
    icon: Home,
    title: "End-to-End Turnkey Delivery",
    desc: "From architectural space planning and 3D photorealistic rendering to factory fabrication, white-glove site delivery, and expert installation.",
  },
];

export default function MaxWoodAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Max Wood Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
                Crafting Premium Furniture. <span style={{ color: theme.primary }}>Transforming Modern Spaces.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Max Wood Corporation is a premier furniture manufacturing and turnkey interior solutions enterprise. Operating advanced CNC wood fabrication facilities, computerized kiln drying chambers, and artisanal finishing ateliers, we craft bespoke luxury furniture and architectural woodwork for prestigious residences, executive corporate headquarters, and 5-star hospitality resorts.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-wood/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore Furniture Suites</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-wood/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.darkWood }}
                >
                  <span>Schedule Design Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-amber-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxwood_hero_craft.svg"
                  alt="Max Wood Corporation Woodworking Studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.goldHover }}>
                      FSC Certified &amp; CNC Precision
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.darkWood }}>
                      1,500+ Completed Interior Projects
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
                  className="mw-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.darkWood }}>
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
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-amber-50/50" style={{ borderColor: theme.border }}>
              <Image
                src="/maxwood_hero_craft.svg"
                alt="Bespoke Luxury Furniture Workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#F4C28D] block mb-1">
                    Master Woodcraft Leadership
                  </span>
                  <h4 className="text-base font-bold">25+ Years of Bespoke Furniture Artistry</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To design and manufacture exquisite furniture and architectural interior millwork of heirloom quality, seamlessly marrying organic natural timbers with modern ergonomics, precision joinery, and sustainable craftsmanship.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Design Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s most celebrated luxury furniture atelier and architectural woodwork contractor, recognized globally for bespoke custom joinery, eco-certified timber stewardship, and turnkey interior excellence.
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
              The joinery discipline, timber seasoning rigor, and finish perfection that define every creation bearing the Max Wood hallmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="mw-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}10` }}>
                      <Icon size={26} style={{ color: theme.primary }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.darkWood }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.gold }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.primary }}>
                      Heirloom Quality
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                COMMISSIONING A BESPOKE INTERIOR OR RESIDENTIAL SUITE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Schedule An Interior Design &amp; Woodcraft Session
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal interior architects and master wood artisans to review veneer finishes, 3D floor plans, and custom furniture fabrication.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Book Design Session</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
