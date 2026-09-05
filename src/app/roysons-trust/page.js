"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Microscope,
  Sprout,
  Users,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe2,
  Landmark,
  Compass,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const IMPACT_PILLARS = [
  {
    id: "education",
    title: "Education & Academic Scholarships",
    subtitle: "Empowering Next-Generation Thinkers & Leaders",
    icon: GraduationCap,
    image: "/trust/trust_education.jpg",
    description:
      "Education is the cornerstone of generational mobility and social progress. ROYSONS Trust invests in merit-based and need-based scholarships, school infrastructure upgrades, modern computer labs, and educational mentorship for students across underrepresented regions.",
    points: [
      "Merit and need-based higher education scholarships",
      "Modern STEM & digital literacy laboratories",
      "Partnerships with leading universities and academies",
      "Academic mentorship and career transition guidance",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical Welfare",
    subtitle: "Dignified Healthcare Access for All",
    icon: HeartPulse,
    image: "/trust/trust_healthcare.jpg",
    description:
      "Bridging the healthcare disparity by bringing specialized medical care, mobile diagnostic clinics, essential pharmaceuticals, and subsidized treatment to remote and low-income communities.",
    points: [
      "Mobile medical camps and free diagnostic screenings",
      "Subsidized access to life-saving medicines & vaccines",
      "Mother & child welfare and primary care clinics",
      "Emergency medical response and trauma aid",
    ],
  },
  {
    id: "research",
    title: "Scientific Research & Innovation",
    subtitle: "Fostering Indigenous Discovery & Knowledge",
    icon: Microscope,
    image: "/trust/trust_research.jpg",
    description:
      "Supporting advanced research grants in health sciences, biotechnology, public health, and engineering. We believe national self-reliance stems from indigenous scientific capacity and applied problem-solving.",
    points: [
      "Targeted research grants for university investigators",
      "Applied science, biotech and pharmaceutical research",
      "Collaborative fellowships with national scientific bodies",
      "Incubation of innovative technology solutions",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability & Clean Water",
    subtitle: "Ecological Resilience & Environmental Care",
    icon: Sprout,
    image: "/trust/trust_sustainability.jpg",
    description:
      "Investing in clean drinking water filtration systems, solar-powered community utilities, reforestation campaigns, and eco-friendly resource conservation to protect ecosystems for future generations.",
    points: [
      "Solar-powered clean drinking water filtration plants",
      "Large-scale urban and rural tree plantation initiatives",
      "Community renewable energy & conservation projects",
      "Promotion of climate-resilient farming techniques",
    ],
  },
  {
    id: "skills",
    title: "Skills Training & Youth Empowerment",
    subtitle: "Unlocking Economic Self-Reliance",
    icon: Lightbulb,
    image: "/trust/roysons_trust_hero.jpg",
    description:
      "Technical, vocational, and entrepreneurship training programs designed to equip youth with modern industrial and digital skillsets, bridging the gap between education and productive economic participation.",
    points: [
      "Certified vocational courses in technical trades",
      "Software development and digital craftsmanship training",
      "Micro-enterprise mentorship and seed grants",
      "Apprenticeship pathways with ROYSONS partner companies",
    ],
  },
  {
    id: "community",
    title: "Community Development & Social Safety",
    subtitle: "Strengthening Community Fabric & Resilience",
    icon: Users,
    image: "/logos/roysons logo mockup building.png",
    description:
      "Direct civic uplift through community centers, female economic inclusion programs, food security assistance during hardship, and rapid disaster relief during national emergencies.",
    points: [
      "Immediate disaster relief and rehabilitation operations",
      "Women vocational centers and home-enterprise support",
      "Community center infrastructure and basic sanitation",
      "Social welfare support for vulnerable families",
    ],
  },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Responsible Stewardship",
    desc: "Exercising ethical oversight and long-term institutional custody of assets to ensure public benefit and sustainable progress.",
  },
  {
    icon: Landmark,
    title: "Generational Longevity",
    desc: "Building enduring institutional mechanisms designed to outlive individual business cycles and create lasting societal value.",
  },
  {
    icon: Compass,
    title: "Compassion & Purpose",
    desc: "Centering our agenda around human dignity, social equity, and uplifting vulnerable populations through measurable action.",
  },
  {
    icon: Globe2,
    title: "Collaborative Partnerships",
    desc: "Synergizing with universities, governmental departments, civil society, and international organizations for maximum outreach.",
  },
];

export default function RoysonsTrustPage() {
  return (
    <main
      className="min-h-screen bg-white text-[#042E3A] roysons-trust-root"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Global CSS injection to enforce Times New Roman font and styling across the entire page */}
      <style jsx global>{`
        .roysons-trust-root,
        .roysons-trust-root * {
          font-family: "Times New Roman", Times, serif !important;
        }
      `}</style>

      <HeaderNavbar activeRoute="/roysons-trust" />

      {/* Breadcrumb Navigation */}
      <section className="pt-6 pb-3 px-4 sm:px-6 border-b border-neutral-100 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[13px] sm:text-[14px] text-neutral-600 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#0a7a8c] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-neutral-400" />
                <span className="text-[#042E3A] font-black">Roysons Trust</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Banner Section (Clean Light Theme with High Contrast, Visible Typography & Large Fonts) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa]/80 via-white to-white py-16 sm:py-24 lg:py-28 border-b border-[#0a7a8c]/15">
        {/* Subtle Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content - 100% VISIBLE & HIGH CONTRAST */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a7a8c]/10 border border-[#0a7a8c]/30 text-[#042E3A] text-[13px] sm:text-[14.5px] font-black tracking-[0.2em] uppercase mb-6 w-fit shadow-xs">
                <Sparkles size={16} className="text-[#0a7a8c]" />
                <span className="text-[#042E3A] font-black">Institutional Stewardship & Philanthropy</span>
              </div>

              {/* Main Heading - BOLD & HIGHLY VISIBLE */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#042E3A] leading-[1.06] tracking-tight mb-5 drop-shadow-xs">
                ROYSONS TRUST
              </h1>

              {/* Subheading - VIBRANT TEAL & CLEAR */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a7a8c] leading-snug mb-6">
                A Purpose-Led Institution Behind a Diversified Enterprise
              </p>

              {/* Paragraph - LARGE, DEEP CONTRAST & FULLY VISIBLE */}
              <p className="text-[19px] sm:text-[21px] lg:text-[23px] text-[#042E3A]/90 leading-[1.85] font-normal mb-8 max-w-2xl">
                ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is built upon the conviction that economic prosperity should generate enduring public benefit, nurturing human potential, community resilience, and future generations.
              </p>

              {/* Action Buttons - FULLY VISIBLE BOTH PRIMARY & SECONDARY */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#impact-pillars"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[4px] bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#10b981] hover:from-[#0369a1] hover:to-[#059669] text-white text-[15px] sm:text-[16px] font-black uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] active:scale-95"
                >
                  <span className="text-white font-black">Explore Impact Pillars</span>
                  <ArrowRight size={18} className="text-white" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[4px] bg-white hover:bg-[#f0fdfa] text-[#042E3A] border-2 border-[#042E3A] hover:border-[#0a7a8c] hover:text-[#0a7a8c] text-[15px] sm:text-[16px] font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span className="font-bold">Connect With The Trust</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card (AI Generated Headquarters Visual) */}
            <div className="lg:col-span-5 w-full">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-[#0a7a8c]/40 group"
                style={{
                  boxShadow: "0 20px 45px -12px rgba(4, 46, 58, 0.25), 0 0 25px rgba(10, 122, 140, 0.15)",
                }}
              >
                <Image
                  src="/trust/roysons_trust_hero.jpg"
                  alt="ROYSONS Trust Philanthropic Institution"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#0a7a8c]/25 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[12px] uppercase font-black tracking-widest text-[#0a7a8c]">
                        Institutional Foundation
                      </p>
                      <p className="text-[15px] sm:text-[16px] font-black text-[#042E3A]">
                        ROYSONS Trust Campus & Research Center
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[12px] font-black text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
                      Purpose-Led
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Philosophy Section (Matching About Page Reference) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
            
            {/* Left: Building Mockup */}
            <div className="flex-1 w-full relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[460px] order-2 lg:order-1">
              <div 
                className="h-full w-full relative overflow-hidden rounded-xl bg-[#042E3A]"
                style={{
                  border: "2px solid #0a7a8c",
                  boxShadow: "0 0 24px rgba(10,122,140,0.3), 4px 4px 0px #042E3A",
                }}
              >
                <Image 
                  src="/logos/roysons logo mockup building.png" 
                  alt="ROYSONS TRUST Building" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  className="object-cover object-left lg:object-center"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center order-1 lg:order-2">
              <span className="text-[14px] sm:text-[16px] font-black tracking-[0.3em] uppercase mb-3 block text-[#0a7a8c]">
                BUILDING INSTITUTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-5 leading-[1.12] tracking-tight">
                ROYSONS TRUST
              </h2>
              <p className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#042E3A] font-bold leading-relaxed mb-5">
                A Purpose-Led Institution Behind a Diversified Enterprise
              </p>
              <p className="text-[18px] sm:text-[19.5px] lg:text-[21px] text-[#042E3A]/85 leading-[1.9] font-normal mb-6">
                ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is designed around a simple philosophy: business growth should create lasting value for people, communities, and future generations. Through its relationship with ROYSONS Pvt. Ltd., the Trust aims to support responsible enterprise development, strengthen long-term institutional ownership, and channel resources toward initiatives in education, healthcare, community development, skills, research, sustainability, and other areas of public benefit.
              </p>
              <div className="border-l-4 border-[#0a7a8c] pl-5 py-2 bg-[#f0fdfa] rounded-r-md">
                <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#042E3A] font-bold italic leading-relaxed">
                  &ldquo;Our ambition is to build an institution that can outlive individual businesses and generations—creating a sustainable foundation for economic development and social progress.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Spotlight: Chairperson Zeba Ijaz (Matches Reference) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-[#f0fdfa]/50 to-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
        {/* Ambient Teal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0a7a8c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          
          {/* Centered Picture at Top */}
          <div className="mb-8">
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/40 bg-neutral-900 group">
              <Image
                src="/logos/ijaz.jpeg"
                alt="Zeba Ijaz - Chairperson, ROYSONS Trust"
                fill
                sizes="(max-width: 768px) 340px, 380px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Centered Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-3 tracking-tight">
            Zeba Ijaz
          </h2>

          {/* Centered Badge */}
          <div className="inline-flex items-center border border-[#0a7a8c]/35 bg-[#f0fdfa] px-6 py-2 rounded-full mb-7 shadow-xs">
            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-[#0a7a8c]">
              Chairperson, ROYSONS Trust
            </span>
          </div>

          {/* Centered Bio Description - VERY LARGE, CRISP & READABLE */}
          <p className="text-[19px] sm:text-[22px] lg:text-[24px] text-[#042E3A]/95 leading-[1.9] font-normal max-w-4xl text-center mb-10">
            Zeba Ijaz leads ROYSONS Trust with a vision to establish a purpose-driven institution committed to creating lasting social and economic value for future generations. Under her leadership, the Trust aims to support initiatives across education, healthcare, community development, research, skills development, sustainability, and social welfare. With a strong commitment to responsible stewardship, compassion, and long-term development, ROYSONS Trust seeks to strengthen the foundation behind the ROYSONS enterprise while contributing to meaningful progress in society. Through strategic leadership and a people-centered vision, Zeba Ijaz is committed to building an institution that creates opportunities, supports communities, and leaves a lasting positive legacy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl mt-4">
            <div className="p-5 rounded-xl bg-white border border-[#0a7a8c]/20 shadow-sm text-center">
              <p className="text-[12px] font-black uppercase tracking-wider text-[#0a7a8c] mb-1.5">Guiding Creed</p>
              <p className="text-[16px] sm:text-[18px] font-bold text-[#042E3A]">Responsible Stewardship</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#0a7a8c]/20 shadow-sm text-center">
              <p className="text-[12px] font-black uppercase tracking-wider text-[#0a7a8c] mb-1.5">Human Focus</p>
              <p className="text-[16px] sm:text-[18px] font-bold text-[#042E3A]">People-Centered Vision</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#0a7a8c]/20 shadow-sm text-center">
              <p className="text-[12px] font-black uppercase tracking-wider text-[#0a7a8c] mb-1.5">Future Outlook</p>
              <p className="text-[16px] sm:text-[18px] font-bold text-[#042E3A]">Lasting Positive Legacy</p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[14px] sm:text-[15px] font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#042E3A] tracking-tight">
              Values That Anchor ROYSONS Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-xl border border-[#042E3A]/15 bg-[#fafcfb] hover:bg-white hover:border-[#0a7a8c]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center text-[#0a7a8c] group-hover:scale-110 group-hover:bg-[#0a7a8c] group-hover:text-white transition-all duration-300 mb-5">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#042E3A] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17.5px] text-[#042E3A]/80 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Six Impact Pillars with AI-Generated Imagery & Deep Content */}
      <section id="impact-pillars" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f8fafc] border-b border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[14px] sm:text-[15px] font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              Areas of Action
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] tracking-tight mb-4">
              Strategic Impact Pillars
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[#042E3A]/80 leading-relaxed font-normal">
              Channelling resources and institutional stewardship toward high-impact domains of human welfare, technological advancement, and environmental sustainability.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {IMPACT_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl border border-[#042E3A]/15 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    
                    {/* Visual Side */}
                    <div className={`lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[320px] sm:min-h-[360px] overflow-hidden group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/70 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#0a7a8c] shadow-md">
                        <Icon size={24} strokeWidth={2.4} />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:col-span-7 p-7 sm:p-10 lg:p-12 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <span className="text-[13px] sm:text-[14.5px] font-black uppercase tracking-[0.2em] text-[#0a7a8c] mb-2 block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-4xl lg:text-[38px] font-black text-[#042E3A] mb-4 tracking-tight leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[17px] sm:text-[18.5px] text-[#042E3A]/85 leading-[1.85] font-normal mb-7">
                        {pillar.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 border-t border-neutral-100">
                        {pillar.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                            <span className="text-[15px] sm:text-[16.5px] font-semibold text-[#042E3A] leading-snug">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-[#042E3A] via-[#064253] to-[#042E3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0a7a8c]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#5eead4] text-[13px] sm:text-[14px] font-black uppercase tracking-widest mb-6">
            <Sparkles size={16} />
            <span>Join Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Partner With ROYSONS Trust
          </h2>
          <p className="text-[18px] sm:text-[21px] text-neutral-100 leading-relaxed font-normal mb-9 max-w-2xl mx-auto">
            Whether you represent an academic institution, healthcare facility, non-profit organization, or community development agency, ROYSONS Trust welcomes purposeful collaborations that generate lasting public value.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[4px] bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#10b981] hover:from-[#0369a1] hover:to-[#059669] text-white text-[15px] sm:text-[16px] font-black uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] active:scale-95"
            >
              <span className="text-white font-black">Contact Roysons Trust</span>
              <ArrowRight size={18} className="text-white" />
            </Link>
            <Link
              href="/group-companies"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[4px] bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[15px] sm:text-[16px] font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>Explore Group Companies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <CorporateFooter />
    </main>
  );
}
