"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown, ArrowRight, Phone, Mail, MapPin, Globe, Star, Plus, Minus,
  ShieldCheck, Syringe, FlaskConical, Pill, Wheat, Bird, Dog, Shield,
  Building2, Users, Handshake, LayoutGrid, Microscope, Search, FileText,
  Factory, ClipboardCheck, Truck, Headphones, Award, Lightbulb, CheckCircle2,
  Sprout, Stethoscope, Waves, Facebook, Linkedin, Twitter, Youtube,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:   "#1B4FCC",
  primaryDk: "#0E2E7A",
  ink:       "#0E2748",
  muted:     "#5B6B85",
  white:     "#ffffff",
  border:    "#e2e8f0",
  lightBg:   "#F3F7FF",
  green:     "#1F9D6B",
  footerBg:  "#081833",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#solutions", dropdown: true },
  { label: "Solutions", href: "#solutions", dropdown: true },
  { label: "R&D & Quality", href: "#rnd" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#resources", dropdown: true },
];

const TRUSTED_BY = [
  { icon: Building2,  label: "Veterinary\nHospitals" },
  { icon: Bird,        label: "Poultry\nFarms" },
  { icon: Wheat,        label: "Dairy\nFarms" },
  { icon: Wheat,       label: "Livestock\nProducers" },
  { icon: Handshake,  label: "Distributors &\nPharma Partners" },
  { icon: Stethoscope,label: "Veterinary\nClinics" },
];

const GLANCE_STATS = [
  { icon: Syringe,      value: "100+",    label: "Products" },
  { icon: Users,        value: "25+",     label: "Researchers" },
  { icon: Handshake,    value: "500+",    label: "Partners" },
  { icon: Users,        value: "10,000+", label: "Happy Customers" },
  { icon: Globe,        value: "15+",     label: "Regions" },
  { icon: ShieldCheck,  value: "99%",     label: "Customer Satisfaction" },
];

const MISSION_VISION = [
  { title: "Our Mission",     desc: "To protect animal health and enhance productivity through innovative and reliable solutions." },
  { title: "Our Vision",      desc: "To be a global leader in veterinary healthcare, recognized for quality, innovation, and trust." },
  { title: "Our Core Values", desc: "Innovation • Quality • Integrity • Compassion • Customer Focus" },
];

const SOLUTIONS = [
  { icon: Syringe,      title: "Vaccines",             desc: "Preventive vaccines for livestock, poultry, pets & aquaculture.", img: "/vetvacphrama-vaccine.png" },
  { icon: FlaskConical, title: "Biologicals",          desc: "High-quality biological products for disease control & immunity.", img: "/vetvacphrama-biolagics.png" },
  { icon: Pill,         title: "Medicines",             desc: "Antibiotics, anti-inflammatories, antiparasitics & more.", img: "/vetvacphrama-medicines.png" },
  { icon: Sprout,       title: "Supplements",           desc: "Nutritional supplements to boost growth, immunity & performance.", img: "/vetvacphrama-supplements.png" },
  { icon: Wheat,        title: "Livestock Healthcare",  desc: "Complete healthcare solutions for cattle, buffalo, sheep & goats.", img: "/vetvacphrama-cow.png" },
  { icon: Bird,         title: "Poultry Healthcare",    desc: "Specialized solutions for poultry health & productivity.", img: "/vetvacphrama-chken.png" },
  { icon: Dog,          title: "Pet Healthcare",        desc: "Quality healthcare products for pets & companion animals.", img: "/vetvacphrama-dog cat.png" },
  { icon: Shield,       title: "Biosecurity",           desc: "Biosecurity & hygiene solutions for safer farming.", img: "/vetvacphrama-biosecurity.png" },
];

const WHY_CHOOSE = [
  { icon: Award,         title: "Quality Standards",     desc: "Manufactured under strict GMP & ISO standards." },
  { icon: Lightbulb,     title: "Research & Innovation",  desc: "Continuous innovation to deliver effective solutions." },
  { icon: Users,         title: "Experienced Team",       desc: "Skilled professionals with deep industry expertise." },
  { icon: ShieldCheck,   title: "Safety & Efficacy",      desc: "Rigorous testing ensures safe and effective products." },
  { icon: Truck,         title: "Wide Distribution",      desc: "Strong distribution network across multiple regions." },
  { icon: Headphones,    title: "Customer Support",       desc: "Dedicated support for our partners and customers." },
];

const INDUSTRIES = [
  "Poultry Industry",
  "Dairy Industry",
  "Cattle & Buffalo Farms",
  "Sheep & Goat Farming",
  "Swine Industry",
  "Aquaculture & Fisheries",
  "Veterinary Clinics & Hospitals",
  "Pet Care & Breeding Centers",
  "Government & NGO Projects",
];

const PROCESS_STEPS = [
  { step: "1", icon: Search,          title: "Research",         desc: "Identifying need & developing solutions" },
  { step: "2", icon: FlaskConical,    title: "Development",      desc: "Formulation & product design" },
  { step: "3", icon: Factory,         title: "Manufacturing",    desc: "Advanced facilities & strict protocols" },
  { step: "4", icon: ClipboardCheck,  title: "Quality Assurance",desc: "Multi-stage testing & quality checks" },
  { step: "5", icon: Truck,           title: "Distribution",     desc: "Safe & timely delivery to our partners" },
  { step: "6", icon: Headphones,      title: "Customer Support", desc: "Continuous support & technical guidance" },
];

const RND_POINTS = [
  { icon: ShieldCheck,    label: "Safety\nAssured" },
  { icon: Syringe,        label: "Potency\nVerified" },
  { icon: FlaskConical,   label: "Sterility\nGuaranteed" },
  { icon: Star,           label: "Stability\nTested" },
  { icon: CheckCircle2,   label: "Effectiveness\nProven" },
  { icon: Shield,         label: "Compliance\nRegulatory" },
];

const TESTIMONIALS = [
  { name: "Dr. Ahmed Khan",   role: "Veterinary Surgeon",         quote: "VET VAC PHARMA products are reliable and effective. They help us maintain better animal health every day.", img: "/vetvacphrama-client1.png" },
  { name: "Farm Manager",     role: "Poultry Farm",                quote: "Our farm productivity has improved significantly after using their vaccines and supplements.", img: "/vetvacphrama-client2.png" },
  { name: "Veterinary Consultant", role: "Livestock Specialist",  quote: "Excellent quality, timely delivery, and great technical support. Highly recommended!", img: "/vetvacphrama-client3.png" },
];

const FAQS = [
  { q: "What types of products do you offer?", a: "We offer vaccines, biologicals, medicines, supplements, and biosecurity solutions for livestock, poultry, pets, and aquaculture." },
  { q: "Are your products safe for all animals?", a: "Yes, all our products are manufactured under strict GMP & ISO standards and undergo rigorous safety and efficacy testing." },
  { q: "Do you provide export services?", a: "Yes, we export our products to multiple regions through our strong international distribution network." },
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product; please contact our sales team for specific details." },
  { q: "How can I become a distributor or partner?", a: "Reach out through our Contact Us page and our partnerships team will guide you through the onboarding process." },
];

const FOOTER_LINKS = {
  Company:   ["About Us", "Our Mission", "Our Team", "Careers", "News & Updates"],
  Products:  ["Vaccines", "Biologicals", "Medicines", "Supplements", "Biosecurity"],
  Solutions: ["Livestock Healthcare", "Poultry Healthcare", "Pet Healthcare", "Aquaculture Solutions", "Custom Solutions"],
  Resources: ["Product Catalog", "Technical Library", "FAQs", "Downloads", "Blog"],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, align = "left" }) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-[15px] font-black uppercase tracking-wide" style={{ color: COLORS.primary }}>
        {eyebrow}
      </h2>
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-md text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: isHovered ? COLORS.primaryDk : COLORS.primary, 
        color: COLORS.white,
        transform: isHovered ? "translateY(-1px)" : "none",
        boxShadow: isHovered ? "0 4px 12px rgba(27, 79, 204, 0.25)" : "none"
      }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-md text-[13px] font-bold border flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderColor: COLORS.primary, 
        backgroundColor: isHovered ? COLORS.primary : "transparent",
        color: isHovered ? COLORS.white : COLORS.primary,
        transform: isHovered ? "translateY(-1px)" : "none"
      }}
    >
      {children}
    </Link>
  );
}

// ─── Page Sections ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        <Link href="#home" className="flex items-center">
          <Image 
            src="/vet vec pharma.jpeg" 
            alt="VET VAC PHARMA Logo" 
            width={160} 
            height={50} 
            className="h-12 w-auto object-contain" 
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12.5px] font-semibold flex items-center gap-1 transition-colors hover:text-[#1B4FCC]"
              style={{ color: COLORS.ink }}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={13} />}
            </Link>
          ))}
          <Link href="#contact" className="text-[12.5px] font-semibold transition-colors hover:text-[#1B4FCC]" style={{ color: COLORS.ink }}>
            Contact Us
          </Link>
        </nav>

        <PrimaryButton href="#contact" className="hidden md:flex">Get in Touch</PrimaryButton>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative py-24 lg:py-36 px-6 overflow-hidden flex items-center min-h-[500px]" style={{ backgroundColor: COLORS.white }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/vetvacphrama-header.png" 
          alt="Veterinary laboratory and farm background" 
          fill 
          className="object-cover object-center pointer-events-none" 
          priority 
        />
        {/* Soft white gradient overlay for maximum text readability and seamless transition */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 100%)" 
          }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-[46px] font-black leading-[1.1] mb-5">
            <span style={{ color: COLORS.primary }}>Protecting Animal Health.</span><br />
            <span style={{ color: COLORS.ink }}>Empowering Modern Farming.</span>
          </h1>
          <p className="text-[15px] font-medium leading-relaxed mb-8 max-w-md" style={{ color: COLORS.muted }}>
            VET VAC PHARMA is a leading veterinary healthcare company dedicated to developing, manufacturing, and
            distributing high-quality vaccines, pharmaceuticals, biologicals, and animal healthcare solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#solutions">Explore Products <ArrowRight size={15} /></PrimaryButton>
            <OutlineButton href="#contact" className="bg-white/80 hover:bg-white transition-colors">
              Contact Us <ArrowRight size={15} />
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="py-10 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="rounded-xl border p-8" style={{ borderColor: COLORS.border }}>
          <p className="text-center text-[11px] font-black tracking-[0.2em] uppercase mb-7" style={{ color: COLORS.muted }}>
            Trusted By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRUSTED_BY.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2.5">
                <Icon size={22} style={{ color: COLORS.primary }} />
                <span className="text-[12px] font-bold leading-snug whitespace-pre-line" style={{ color: COLORS.ink }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="rounded-xl border p-8 lg:p-10" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="ABOUT US" />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-[13px] leading-relaxed mb-6" style={{ color: COLORS.ink }}>
                With a commitment to quality, innovation, and animal welfare, VET VAC PHARMA provides a
                comprehensive range of vaccines, medicines, and nutritional solutions for livestock, poultry,
                pets, and aquaculture.
              </p>
              <div className="space-y-4">
                {MISSION_VISION.map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.green }} />
                    <div>
                      <p className="text-[12.5px] font-extrabold" style={{ color: COLORS.primary }}>{title}</p>
                      <p className="text-[12px]" style={{ color: COLORS.muted }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative w-full h-[280px] rounded-xl overflow-hidden">
                <Image src="/vetvacphrama-about.png" alt="Veterinary researcher in laboratory" fill className="object-cover" sizes="400px" />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="text-[12px] font-black uppercase tracking-wide mb-4" style={{ color: COLORS.primary }}>
                COMPANY AT A GLANCE
              </p>
              <div className="grid grid-cols-3 gap-3">
                {GLANCE_STATS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="p-4 rounded-lg border text-center" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
                    <Icon size={18} className="mx-auto mb-2" style={{ color: COLORS.primary }} />
                    <p className="text-[16px] font-black" style={{ color: COLORS.primary }}>{value}</p>
                    <p className="text-[10px] font-semibold leading-tight" style={{ color: COLORS.muted }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="rounded-xl border p-8 lg:p-10" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="OUR SOLUTIONS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SOLUTIONS.map(({ icon: Icon, title, desc, img }, idx) => {
              const accent = idx % 2 === 0 ? COLORS.primary : COLORS.green;
              return (
                <div key={title} className="rounded-lg border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow duration-305" style={{ borderColor: COLORS.border }}>
                  <div>
                    <div className="h-1.5" style={{ backgroundColor: accent }} />
                    <div className="p-5 pb-0 text-center">
                      <span className="text-[14px] font-black uppercase tracking-wider block mb-4" style={{ color: COLORS.ink }}>
                        {title}
                      </span>
                      {img && (
                        <div className="relative w-full h-32 mb-4 bg-neutral-50 rounded overflow-hidden flex items-center justify-center p-2 border border-neutral-100/50">
                          <Image 
                            src={img} 
                            alt={title} 
                            width={120} 
                            height={120} 
                            className="h-28 w-auto object-contain" 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <p className="text-[11.5px] leading-relaxed text-center" style={{ color: COLORS.muted }}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyIndustriesProcessSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-3 gap-6">
        {/* Why Choose Us */}
        <div className="rounded-xl border p-7" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="WHY CHOOSE US" />
          <div className="space-y-4">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-2.5">
                <Icon size={15} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <div>
                  <p className="text-[12px] font-bold" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[11px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Served */}
        <div id="industries" className="rounded-xl border p-7 relative overflow-hidden" style={{ borderColor: COLORS.border }}>
          <div className="absolute inset-0 opacity-[0.04]">
            <Image src="/vetvacphrama-header.png" alt="" fill className="object-cover" sizes="400px" />
          </div>
          <div className="relative">
            <SectionHeading eyebrow="INDUSTRIES WE SERVED" />
            <div className="space-y-3">
              {INDUSTRIES.map((label) => (
                <div key={label} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} style={{ color: COLORS.green }} />
                  <span className="text-[12px] font-semibold" style={{ color: COLORS.ink }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="rounded-xl border p-7" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="OUR PROCESS" />
          <div className="space-y-4">
            {PROCESS_STEPS.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="flex gap-3.5 items-start">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black relative"
                  style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                >
                  {step}
                </div>
                <div>
                  <p className="text-[12px] font-bold flex items-center gap-1.5" style={{ color: COLORS.ink }}>
                    <Icon size={13} style={{ color: COLORS.primary }} /> {title}
                  </p>
                  <p className="text-[11px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentRndSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border p-8 relative overflow-hidden" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="OUR COMMITMENT" />
          <p className="text-[13px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
            We are committed to advancing animal health through science, innovation, and integrity. By
            empowering farmers and veterinarians with reliable solutions, we contribute to healthier animals,
            safer food, and a better tomorrow.
          </p>
          <div className="relative w-full h-[160px] rounded-lg overflow-hidden">
            <Image src="/biomax committed.png" alt="Hands holding a growing sprout, symbolizing sustainable farming" fill className="object-cover" sizes="500px" />
          </div>
        </div>

        <div id="rnd" className="rounded-xl border p-8" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="R&D AND QUALITY ASSURANCE" />
          <p className="text-[13px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
            Our in-house R&amp;D team works relentlessly to develop innovative and effective products. Every
            product goes through strict quality control to meet global standards.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {RND_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}12` }}>
                  <Icon size={17} style={{ color: COLORS.primary }} />
                </div>
                <span className="text-[10.5px] font-bold leading-tight whitespace-pre-line" style={{ color: COLORS.ink }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsFaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8">
        {/* Testimonials */}
        <div className="lg:col-span-7 rounded-xl border p-8" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="WHAT OUR CLIENTS SAY" />
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, role, quote, img }) => (
              <div key={name} className="p-5 rounded-lg border bg-white flex flex-col justify-between" style={{ borderColor: COLORS.border }}>
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="#F0B429" style={{ color: "#F0B429" }} />
                    ))}
                  </div>
                  <p className="text-[11.5px] leading-relaxed mb-6 font-medium animate-fadeIn" style={{ color: COLORS.ink }}>&ldquo;{quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-3">
                  {img && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-neutral-100">
                      <Image 
                        src={img} 
                        alt={name} 
                        fill 
                        className="object-cover object-center" 
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-[12px] font-black leading-snug" style={{ color: COLORS.primary }}>{name}</p>
                    <p className="text-[10px] font-semibold" style={{ color: COLORS.muted }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-5 rounded-xl border p-8" style={{ borderColor: COLORS.border }}>
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" />
          <div className="space-y-3">
            {FAQS.map(({ q, a }, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={q} className="rounded-lg border overflow-hidden bg-white" style={{ borderColor: COLORS.border }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-neutral-50"
                  >
                    <span className="text-[12px] font-bold" style={{ color: COLORS.ink }}>
                      Q{idx + 1}. {q}
                    </span>
                    {isOpen ? <Minus size={14} style={{ color: COLORS.primary }} /> : <Plus size={14} style={{ color: COLORS.primary }} />}
                  </button>
                  {isOpen && (
                    <p className="px-4 pb-4 text-[11.5px] leading-relaxed border-t pt-3" style={{ color: COLORS.muted, borderColor: COLORS.border }}>{a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div className="rounded-xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between" style={{ backgroundColor: COLORS.primary }}>
          <div>
            <h2 className="text-xl lg:text-2xl font-black text-white mb-2">Partner with VET VAC PHARMA</h2>
            <p className="text-[13px] max-w-md" style={{ color: "rgba(255,255,255,0.8)" }}>
              Let&apos;s work together for healthier animals and a stronger agricultural future.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="#contact"
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-md text-[13px] font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: COLORS.white, color: COLORS.primary }}
            >
              Contact Us Today <ArrowRight size={15} />
            </Link>
            <Link
              href="tel:+92XXXXXXXXXX"
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-md text-[13px] font-bold border border-white text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Phone size={15} /> +92 XXX XXXXXXX
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6 mt-4" style={{ backgroundColor: COLORS.footerBg }}>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-3 max-w-xs">
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
              <Image 
                src="/vet vec pharma.jpeg" 
                alt="VET VAC PHARMA Logo" 
                width={150} 
                height={45} 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </div>
          <p className="text-[11.5px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.62)" }}>
            Delivering trusted veterinary healthcare solutions to improve animal health, productivity, and
            quality of life.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <Icon size={13} style={{ color: "rgba(255,255,255,0.9)" }} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.14em] mb-4 text-white">{heading}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[11.5px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <h5 className="text-[11px] font-black uppercase tracking-[0.14em] mb-4 text-white">Contact Us</h5>
          <div className="space-y-3">
            <p className="text-[11.5px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              Your Office Address, City, Country
            </p>
            <p className="text-[11.5px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              +92 XXX XXXXXXX
            </p>
            <p className="text-[11.5px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              info@vetvacpharma.com
            </p>
            <p className="text-[11.5px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              www.vetvacpharma.com
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-10 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
          &copy; 2025 VET VAC PHARMA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function VetVacPharmaPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => document.body.classList.remove("roys-roys-theme");
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.ink }}>
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <SolutionsSection />
      <WhyIndustriesProcessSection />
      <CommitmentRndSection />
      <TestimonialsFaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}