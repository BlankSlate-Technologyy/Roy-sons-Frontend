"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Sun,
  Droplets,
  Trees,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users2,
  Hotel,
  Sparkles,
} from "lucide-react";
import {
  theme,
  SwissHutsNavbar,
  SwissHutsFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHutsShared";

const SUSTAINABILITY_STATS = [
  { value: "0%", label: "Single-Use Plastics in\nGuest Rooms & Dining", icon: Leaf },
  { value: "100%", label: "Solar-Assisted Water\nHeating & Clean Power", icon: Sun },
  { value: "80%+", label: "Locally Hired Mountain\nResort Personnel", icon: Users2 },
  { value: "40%", label: "Water Savings via\nEco-Flow Fixtures", icon: Droplets },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Leaf,
    title: "Zero Single-Use Plastics Policy",
    desc: "Every Swiss Hut property operates an on-site glass-bottled mineral water filtration plant, replaces plastic toiletries with organic bamboo alternatives, and uses biodegradable packaging throughout all restaurant dining.",
    features: [
      "In-house sterilized glass water bottling systems in all suites",
      "Organic stone ceramic refillable shampoo and lotion dispensers",
      "100% compostable packaging for in-room dining and takeout",
    ],
  },
  {
    icon: Sun,
    title: "Renewable Alpine Energy & Thermal Efficiency",
    desc: "Harnessing rooftop solar photovoltaic panels and solar water collectors to provide zero-emission domestic hot water and electricity, combined with double-glazed triple-cavity thermal insulation in all chalets.",
    features: [
      "Solar thermal collectors providing continuous heated water and spa heating",
      "Double-glazed argon-filled low-E windows preventing heat loss",
      "Automated smart room climate sensors reducing HVAC waste by 35%",
    ],
  },
  {
    icon: Trees,
    title: "Farm-to-Table Organic Mountain Cuisine",
    desc: "Partnering directly with local valleys, organic orchards, and our sister company Swiss Farms to procure fresh, unadulterated dairy, organic honey, and mountain trout with minimal carbon transit footprint.",
    features: [
      "Daily fresh farm-fresh milk and cheese sourced from certified farms",
      "Organic seasonal produce grown by local highland farming cooperatives",
      "Minimizing food miles and supporting regenerative organic agriculture",
    ],
  },
  {
    icon: Users2,
    title: "Local Community Empowerment & Heritage Care",
    desc: "Investing in the cultural prosperity of mountain valleys by prioritizing 80%+ local recruitment, providing professional hospitality certifications, and showcasing local indigenous folk arts and crafts.",
    features: [
      "Vocational hospitality scholarships and culinary apprenticeships for youth",
      "Dedicated artisan gift galleries promoting indigenous weavers and woodworkers",
      "Preservation of traditional architectural stone-and-timber techniques",
    ],
  },
];

export default function SwissHutsSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#2A323D] font-sans antialiased overflow-x-hidden">
      <SwissHutsNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Eco-Hospitality &amp; Sustainable Tourism</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slate }}>
                Eco-Conscious Luxury &amp; <span style={{ color: theme.accentGold }}>Green Hospitality</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Swiss Hut, we believe true luxury coexists in harmony with nature. Through zero single-use plastics, solar-assisted alpine heating, farm-to-table dining, and mountain community empowerment, we lead sustainable tourism development in Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-huts/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Book An Eco-Chalet</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-huts/destinations"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.slateBorder, color: theme.slate }}
                >
                  <span>View Eco-Resorts</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_huts_hero_resort.svg"
                  alt="Swiss Hut Sustainable Mountain Resort"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#C5A059]">
                      Eco-Certified Resort
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.slate }}>
                      Zero Plastic · Solar Heated · Local Community Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-huts-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.slate}10` }}>
                    <Icon size={22} style={{ color: theme.slate }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.slate }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Eco-Hospitality</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven environmental and social responsibility protocols embedded in all our properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="swiss-huts-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.slate}10` }}>
                      <Icon size={26} style={{ color: theme.slate }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.slate }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(203, 213, 224, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#C5A059]" />
                          <span className="text-xs font-medium text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#C5A059]">
                STAY IN AN ECO-CERTIFIED MOUNTAIN CHALET
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slate }}>
                Experience Responsible Travel Without Compromise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Enjoy crisp mountain air, heated infinity jacuzzi pools, and exquisite organic dining while knowing your stay protects pristine alpine ecosystems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-huts/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Reserve An Eco-Chalet</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.slate, color: theme.slate }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHutsFooter />
    </main>
  );
}
