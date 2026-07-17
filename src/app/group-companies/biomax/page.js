"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight, ChevronDown, ArrowRight,
  FlaskConical, Microscope, HeartPulse, Building2, GraduationCap, Pill, Landmark,
  Dna, TestTube, Wrench, Truck, ShieldCheck, Target, Eye, Sparkles,
  CheckCircle2, Users, Gauge, Package, ClipboardCheck, Recycle, Settings,
  Phone, Mail, MapPin, Star, Facebook, Linkedin, Twitter, Youtube, Plus, Minus,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary:    "#1A4B7A",
  primaryDk:  "#0F3359",
  accent:     "#2E8B78",
  accentAlt:  "#7B1C2A",
  white:      "#ffffff",
  ink:        "#1A4B7A",
  muted:      "#4A6A8A",
  border:     "#dce8f0",
  lightBg:    "#F0F6FA",
  footerBg:   "#0F2847",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#solutions", dropdown: true },
  { label: "Research & Development", href: "#rnd" },
  { label: "Quality Assurance", href: "#quality" },
  { label: "Industries", href: "#industries" },
];

const TRUSTED_BY = [
  { icon: FlaskConical,     label: "Research\nLaboratories" },
  { icon: HeartPulse,       label: "Diagnostic\nCenters" },
  { icon: Building2,        label: "Hospitals &\nClinical Labs" },
  { icon: GraduationCap,    label: "Universities &\nAcademic Institutions" },
  { icon: Pill,             label: "Pharmaceutical\nCompanies" },
  { icon: Landmark,         label: "Government Health\nDepartments" },
];

const CORE_VALUES = [
  { icon: Sparkles,      label: "Innovation" },
  { icon: Target,        label: "Precision" },
  { icon: ShieldCheck,   label: "Integrity" },
  { icon: Star,          label: "Scientific\nExcellence" },
  { icon: CheckCircle2,  label: "Reliability" },
  { icon: Users,         label: "Customer\nFocus" },
  { icon: Recycle,       label: "Sustainability" },
];

const SOLUTIONS = [
  { icon: Microscope,       title: "Laboratory Equipment",              desc: "Advanced instruments and machinery for research, testing, and analysis." },
  { icon: HeartPulse,       title: "Diagnostic Systems",                desc: "Precise diagnostic technologies for accurate clinical and research results." },
  { icon: Dna,              title: "Biotechnology Solutions",           desc: "Innovative biological tools and reagents supporting cutting-edge research." },
  { icon: TestTube,         title: "Molecular & Genetic Testing Equipment", desc: "Specialized systems for PCR, sequencing, and genetic analysis." },
  { icon: FlaskConical,     title: "Laboratory Consumables & Reagents", desc: "High-quality supplies for consistent and reliable lab operations." },
  { icon: Target,           title: "Research Instruments",              desc: "Precision tools designed for academic and scientific research institutions." },
  { icon: Building2,        title: "Clinical Laboratory Solutions",     desc: "Complete systems supporting hospital and diagnostic laboratory workflows." },
  { icon: Settings,         title: "Calibration & Maintenance Services",desc: "Ensuring equipment accuracy and long-term operational reliability." },
];

const WHY_CHOOSE = [
  { title: "International Quality Standards", desc: "Every product meets strict global quality benchmarks." },
  { title: "Research-Driven Innovation",      desc: "Continuous investment in the latest biotechnology advancements." },
  { title: "Expert Technical Team",           desc: "Scientists and engineers with deep industry expertise." },
  { title: "Accurate & Reliable Systems",     desc: "Equipment tested for precision and consistent performance." },
  { title: "Nationwide Supply Network",       desc: "Timely delivery and installation across all regions." },
  { title: "Dedicated Technical Support",     desc: "Ongoing consultation, training, and after-sales service." },
];

const INDUSTRIES = [
  { icon: FlaskConical,  label: "Research Laboratories" },
  { icon: HeartPulse,    label: "Diagnostic Centers" },
  { icon: Building2,     label: "Hospitals & Clinics" },
  { icon: GraduationCap, label: "Universities & Academic Institutes" },
  { icon: Pill,          label: "Pharmaceutical Companies" },
  { icon: Dna,           label: "Biotechnology Firms" },
  { icon: Landmark,      label: "Government Health Institutions" },
  { icon: TestTube,      label: "Forensic Laboratories" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation",        desc: "Understanding client requirements and lab needs." },
  { step: "02", title: "Product Sourcing",    desc: "Selecting the right equipment and solutions." },
  { step: "03", title: "Quality Verification",desc: "Ensuring international compliance standards." },
  { step: "04", title: "Installation & Setup",desc: "Professional on-site setup and calibration." },
  { step: "05", title: "Training & Support",  desc: "Staff training for optimal equipment use." },
  { step: "06", title: "After-Sales Service", desc: "Ongoing maintenance and technical assistance." },
];

const STATS = [
  { value: "150+",  label: "Laboratory\nProducts" },
  { value: "20+",   label: "Technical\nExperts" },
  { value: "300+",  label: "Institutional\nPartners" },
  { value: "5,000+",label: "Successful\nInstallations" },
  { value: "10+",   label: "Regions\nServed" },
  { value: "98%",   label: "Client\nSatisfaction" },
];

const QUALITY_POINTS = [
  { icon: Target,          label: "Accuracy" },
  { icon: ShieldCheck,     label: "Reliability" },
  { icon: Package,         label: "Durability" },
  { icon: ClipboardCheck,  label: "Regulatory\nCompliance" },
  { icon: Gauge,           label: "Performance\nConsistency" },
];

const TESTIMONIALS = [
  { name: "Dr. Sara Malik",  role: "Research Director",        quote: "BIO MAX CORPORATION's equipment has significantly improved the efficiency of our research processes." },
  { name: "Ahmed Raza",      role: "Lab Manager, Diagnostic Center", quote: "Professional support and dependable equipment — exactly what our lab needed." },
  { name: "Prof. Bilal Khan",role: "University Research Head",  quote: "Their technical team is knowledgeable and always available for guidance." },
];

const FAQS = [
  { q: "What products do you offer?", a: "We supply laboratory equipment, diagnostic systems, biotechnology solutions, molecular testing equipment, consumables, and calibration services." },
  { q: "Which industries do you serve?", a: "We serve research laboratories, hospitals, universities, pharmaceutical companies, government health institutions, and forensic labs." },
  { q: "Do you provide installation support?", a: "Yes, our technical team provides full on-site installation, calibration, and staff training." },
  { q: "Are your products internationally certified?", a: "All products meet international quality and regulatory compliance standards." },
  { q: "Do you offer maintenance services?", a: "Yes, we provide ongoing calibration, maintenance, and after-sales technical support." },
];

const FOOTER_LINKS = {
  "Quick Links": ["Home", "About", "Products", "Research", "Quality Assurance", "Our Services"],
  "Products": ["Laboratory Equipment", "Diagnostic Systems", "Biotechnology Solutions", "Research Instruments", "Consumables", "Clinical Solutions"],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <span className="text-[11px] font-extrabold tracking-widest uppercase block mb-2" style={{ color: COLORS.primary }}>
        {eyebrow}
      </span>
      <h2 className="text-2xl lg:text-3xl font-extrabold uppercase" style={{ color: COLORS.accent }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[13px] mt-2" style={{ color: COLORS.muted }}>{subtitle}</p>
      )}
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-6 py-3 rounded-sm text-[12.5px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300 ${className}`}
      style={{ 
        backgroundColor: isHovered ? COLORS.accent : COLORS.primary, 
        color: COLORS.white 
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-6 py-3 rounded-sm text-[12.5px] font-bold uppercase tracking-wide border flex items-center gap-2 transition-all duration-300 ${className}`}
      style={{ 
        borderColor: COLORS.primary, 
        backgroundColor: isHovered ? COLORS.primary : "transparent",
        color: isHovered ? COLORS.white : COLORS.primary 
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
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center">
          <Image 
            src="/bio max.jpeg" 
            alt="BIO MAX CORPORATION Logo" 
            width={140} 
            height={44} 
            className="h-11 w-auto object-contain" 
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12.5px] font-semibold flex items-center gap-1 transition-colors hover:text-[#2C6FC9]"
              style={{ color: COLORS.ink }}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={13} />}
            </Link>
          ))}
        </nav>

        <PrimaryButton href="#solutions" className="hidden md:flex">Our Services</PrimaryButton>
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
          src="/biomax header.png" 
          alt="Biotechnology laboratory background" 
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
          <h1 className="text-3xl lg:text-[46px] font-black leading-[1.1] mb-5" style={{ color: COLORS.accent }}>
            BIOTECHNOLOGY &amp;<br />LABORATORY SOLUTIONS
          </h1>
          <p className="text-[15px] font-medium leading-relaxed mb-8 max-w-md" style={{ color: COLORS.primary }}>
            Supplying scientific equipment, laboratory systems, and biotechnology solutions for research and
            diagnostic institutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="#solutions">Explore Products <ArrowRight size={15} /></PrimaryButton>
            <OutlineButton href="#solutions" className="bg-white/80 hover:bg-white transition-colors">
              Our Services <ArrowRight size={15} />
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="py-12 px-6 border-y" style={{ backgroundColor: COLORS.lightBg, borderColor: COLORS.border }}>
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-[13px] font-black tracking-[0.2em] uppercase mb-8" style={{ color: COLORS.muted }}>
          Trusted By
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUSTED_BY.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${COLORS.primary}12` }}>
                <Icon size={24} style={{ color: COLORS.primary }} />
              </div>
              <span className="text-[11.5px] font-bold leading-snug whitespace-pre-line" style={{ color: COLORS.ink }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            ABOUT US
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6" style={{ color: COLORS.accent }}>
            Advancing Science Through Reliable Solutions
          </h2>
          <div className="space-y-4 mb-2 text-[13.5px] leading-relaxed" style={{ color: COLORS.ink }}>
            <p>
              BIO MAX CORPORATION is a trusted name in biotechnology and laboratory solutions, dedicated to
              supplying high-quality scientific equipment, diagnostic systems, and research technologies to
              institutions across the country.
            </p>
            <p>
              Our team of scientists, engineers, and technical specialists works closely with laboratories,
              hospitals, and research centers to ensure accurate, efficient, and reliable outcomes for every
              project.
            </p>
            <p>
              From academic research to clinical diagnostics, we are committed to supporting scientific
              advancement through innovation and precision.
            </p>
          </div>

          <div className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg mt-8">
            <Image src="/biomaxabout.png" alt="Lab scientists at work" fill className="object-cover" sizes="700px" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 rounded-lg border" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
            <div className="flex items-center gap-2.5 mb-2">
              <Target size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Mission</h4>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
              To empower research and diagnostic institutions with cutting-edge laboratory equipment and
              biotechnology solutions that drive scientific progress.
            </p>
          </div>

          <div className="p-6 rounded-lg border" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
            <div className="flex items-center gap-2.5 mb-2">
              <Eye size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Vision</h4>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: COLORS.muted }}>
              To be a globally recognized leader in biotechnology solutions, known for innovation, precision, and
              unwavering commitment to scientific excellence.
            </p>
          </div>

          <div className="p-6 rounded-lg border" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
            <div className="flex items-center gap-2.5 mb-4">
              <Sparkles size={17} style={{ color: COLORS.primary }} />
              <h4 className="text-[13px] font-extrabold uppercase tracking-wide" style={{ color: COLORS.primary }}>Our Core Values</h4>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {CORE_VALUES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <Icon size={18} style={{ color: COLORS.primary }} />
                  <span className="text-[10px] font-bold leading-tight whitespace-pre-line" style={{ color: COLORS.ink }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl">
        <SectionHeading eyebrow="OUR SOLUTIONS" title="Complete Biotechnology & Laboratory Portfolio" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-lg border bg-white shadow-sm hover:-translate-y-1 transition-transform"
              style={{ borderColor: COLORS.border }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${COLORS.primary}12` }}>
                <Icon size={20} style={{ color: COLORS.primary }} />
              </div>
              <h4 className="text-[13px] font-extrabold mb-1.5" style={{ color: COLORS.primary }}>{title}</h4>
              <p className="text-[11.5px] leading-relaxed" style={{ color: COLORS.muted }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyIndustriesProcessSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-3 gap-8">
        {/* Why Choose Us */}
        <div className="p-7 rounded-lg border shadow-sm" style={{ borderColor: COLORS.border }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>WHY CHOOSE US</span>
          <h3 className="text-[17px] font-extrabold mb-5" style={{ color: COLORS.accent }}>Your Trusted Partner in Science</h3>
          <div className="space-y-4">
            {WHY_CHOOSE.map(({ title, desc }) => (
              <div key={title} className="flex gap-2.5">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.accent }} />
                <div>
                  <p className="text-[12.5px] font-bold" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[11.5px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="p-7 rounded-lg border shadow-sm" style={{ borderColor: COLORS.border }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>INDUSTRIES WE SERVE</span>
          <h3 id="industries" className="text-[17px] font-extrabold mb-5" style={{ color: COLORS.accent }}>Sectors We Support</h3>
          <div className="space-y-3.5">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={16} style={{ color: COLORS.primary }} />
                <span className="text-[12.5px] font-semibold" style={{ color: COLORS.ink }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="p-7 rounded-lg border shadow-sm" style={{ borderColor: COLORS.border }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-1" style={{ color: COLORS.primary }}>OUR PROCESS</span>
          <h3 className="text-[17px] font-extrabold mb-5" style={{ color: COLORS.accent }}>How We Deliver Excellence</h3>
          <div className="space-y-4">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3.5">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold"
                  style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                >
                  {step}
                </div>
                <div>
                  <p className="text-[12.5px] font-bold" style={{ color: COLORS.ink }}>{title}</p>
                  <p className="text-[11.5px]" style={{ color: COLORS.muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentStatsSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            OUR COMMITMENT
          </span>
          <h3 className="text-2xl font-extrabold mb-4" style={{ color: COLORS.accent }}>Driving Scientific Progress</h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.muted }}>
            We believe reliable laboratory infrastructure is the foundation of scientific discovery. Our
            commitment goes beyond supplying equipment — we partner with institutions to strengthen research
            capabilities, improve diagnostic accuracy, and support the advancement of science and healthcare.
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-[11px] font-extrabold uppercase tracking-widest mb-5 text-center lg:text-left" style={{ color: COLORS.primary }}>
            COMPANY STATISTICS
          </p>
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.value} className="p-5 rounded-lg border bg-white text-center shadow-sm" style={{ borderColor: COLORS.border }}>
                <p className="text-xl lg:text-2xl font-black" style={{ color: COLORS.accent }}>{stat.value}</p>
                <p className="text-[10.5px] font-bold mt-1 whitespace-pre-line leading-tight" style={{ color: COLORS.muted }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RndQualitySection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-8">
        <div id="rnd" className="p-8 rounded-lg text-white" style={{ backgroundColor: COLORS.primary }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: "#9FC0EE" }}>
            RESEARCH & DEVELOPMENT
          </span>
          <h3 className="text-xl font-extrabold mb-4">Innovation at the Core</h3>
          <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            Our R&amp;D team continuously explores emerging biotechnology trends and laboratory advancements to
            bring next-generation solutions that improve accuracy, efficiency, and reliability for research and
            diagnostic institutions.
          </p>
        </div>

        <div id="quality" className="p-8 rounded-lg border" style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}>
          <span className="text-[11px] font-extrabold uppercase tracking-widest block mb-2" style={{ color: COLORS.primary }}>
            QUALITY ASSURANCE
          </span>
          <h3 className="text-xl font-extrabold mb-4" style={{ color: COLORS.accent }}>Precision Without Compromise</h3>
          <p className="text-[13.5px] leading-relaxed mb-6" style={{ color: COLORS.muted }}>
            Every product undergoes rigorous testing to ensure:
          </p>
          <div className="grid grid-cols-5 gap-3">
            {QUALITY_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon size={18} style={{ color: COLORS.accent }} />
                <span className="text-[10px] font-bold leading-tight whitespace-pre-line" style={{ color: COLORS.ink }}>{label}</span>
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
    <section className="py-20 px-6" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-10">
        {/* Testimonials */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="TESTIMONIALS" title="What Our Partners Say" />
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, role, quote }) => (
              <div key={name} className="p-5 rounded-lg border bg-white shadow-sm" style={{ borderColor: COLORS.border }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill={COLORS.accent} style={{ color: COLORS.accent }} />
                  ))}
                </div>
                <p className="text-[12px] leading-relaxed mb-4" style={{ color: COLORS.ink }}>&ldquo;{quote}&rdquo;</p>
                <p className="text-[12px] font-extrabold" style={{ color: COLORS.primary }}>{name}</p>
                <p className="text-[10.5px]" style={{ color: COLORS.muted }}>{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {FAQS.map(({ q, a }, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={q} className="rounded-lg border bg-white overflow-hidden" style={{ borderColor: COLORS.border }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="text-[12.5px] font-bold" style={{ color: COLORS.ink }}>
                      Q{idx + 1}. {q}
                    </span>
                    {isOpen ? <Minus size={15} style={{ color: COLORS.primary }} /> : <Plus size={15} style={{ color: COLORS.primary }} />}
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 text-[12px] leading-relaxed" style={{ color: COLORS.muted }}>{a}</p>
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
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);

  return (
    <section id="contact" className="py-14 px-6" style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
        <div>
          <h2 className="text-xl lg:text-2xl font-black text-white mb-2">Let&apos;s Advance Science Together</h2>
          <p className="text-[13px] max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Partner with BIO MAX CORPORATION for reliable laboratory equipment, biotechnology solutions, and
            dependable technical support.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0 w-full lg:w-auto">
          <Link
            href="#contact"
            onMouseEnter={() => setHoverBtn1(true)}
            onMouseLeave={() => setHoverBtn1(false)}
            className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-sm text-[12.5px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: hoverBtn1 ? COLORS.accent : COLORS.white, 
              color: hoverBtn1 ? COLORS.white : COLORS.primary 
            }}
          >
            Contact Sales <ArrowRight size={15} />
          </Link>
          <Link
            href="#contact"
            onMouseEnter={() => setHoverBtn2(true)}
            onMouseLeave={() => setHoverBtn2(false)}
            className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-sm text-[12.5px] font-bold uppercase tracking-wide border flex items-center gap-2 transition-all duration-300"
            style={{ 
              borderColor: COLORS.white,
              backgroundColor: hoverBtn2 ? COLORS.white : "transparent",
              color: hoverBtn2 ? COLORS.primary : COLORS.white 
            }}
          >
            Become a Partner <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6" style={{ backgroundColor: COLORS.footerBg }}>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 max-w-sm">
          <div className="flex items-center mb-4">
            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
              <Image 
                src="/bio max.jpeg" 
                alt="BIO MAX CORPORATION Logo" 
                width={130} 
                height={40} 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </div>
          <p className="text-[12px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
            Your trusted partner for biotechnology and laboratory solutions.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social media link"
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <Icon size={14} style={{ color: "rgba(255,255,255,0.9)" }} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.16em] mb-4 text-white">{heading}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[12px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-4">
          <h5 className="text-[11px] font-black uppercase tracking-[0.16em] mb-4 text-white">Contact Us</h5>
          <div className="space-y-3">
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              info@biomaxcorporation.com
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              +92 XXX XXXXXXX
            </p>
            <p className="text-[12px] flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#6FA8F0" }} />
              Your Office Address
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
          &copy; 2026 BIO MAX CORPORATION. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service"].map((label) => (
            <a key={label} href="#" className="text-[11px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function BioMaxCorporationPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("biomax-theme");
    document.body.style.backgroundColor = COLORS.white;
    document.body.style.color = COLORS.primary;
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("biomax-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <SolutionsSection />
      <WhyIndustriesProcessSection />
      <CommitmentStatsSection />
      <RndQualitySection />
      <TestimonialsFaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}