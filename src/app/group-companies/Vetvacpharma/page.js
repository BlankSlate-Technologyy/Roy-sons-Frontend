"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { useActiveSection } from "@/hooks/useActiveSection";
import { VetvacNavbar, VetvacFooter } from "./components/VetvacShared";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Pill,
  Wheat,
  Bird,
  Dog,
  Shield,
  Building2,
  Users,
  Handshake,
  LayoutGrid,
  Microscope,
  Search,
  FileText,
  Factory,
  ClipboardCheck,
  Truck,
  Headphones,
  Award,
  Lightbulb,
  CheckCircle2,
  Check,
  Sprout,
  Stethoscope,
  Waves,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Target,
  HeartPulse,
  Sparkles,
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

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/group-companies/Vetvacpharma" },
  { label: "About Us", href: "/group-companies/Vetvacpharma/about" },
  { label: "Products & Solutions", href: "/group-companies/Vetvacpharma/solutions" },
  { label: "R&D & Quality", href: "/group-companies/Vetvacpharma/rnd" },
  { label: "Industries", href: "/group-companies/Vetvacpharma/industries" },
  { label: "Contact Us", href: "/group-companies/Vetvacpharma/contact" },
];

const TRUSTED_BY = [
  { icon: Building2, label: "Veterinary\nHospitals" },
  { icon: Bird, label: "Poultry\nFarms" },
  { icon: Wheat, label: "Dairy\nFarms" },
  { icon: Wheat, label: "Livestock\nProducers" },
  { icon: Handshake, label: "Distributors &\nPharma Partners" },
  { icon: Stethoscope, label: "Veterinary\nClinics" },
];

const GLANCE_STATS = [
  { icon: Syringe, value: "100+", label: "Products" },
  { icon: Users, value: "25+", label: "Researchers" },
  { icon: Handshake, value: "500+", label: "Partners" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Globe, value: "15+", label: "Regions" },
  { icon: ShieldCheck, value: "99%", label: "Customer Satisfaction" },
];

const MISSION_VISION_CARDS = [
  {
    eyebrow: "OUR MISSION",
    title: "Protect Animal Health & Productivity",
    desc: "To provide reliable veterinary healthcare solutions that help protect animal health, improve farm productivity, and support sustainable livestock and poultry production.",
    icon: Target,
  },
  {
    eyebrow: "OUR VISION",
    title: "Trusted Name in Veterinary Healthcare",
    desc: "To become a trusted name in veterinary healthcare by delivering innovative, quality-focused, and scientifically driven solutions for the evolving needs of the animal-health industry.",
    icon: Award,
  },
];

const COMMITMENTS = [
  {
    title: "Animal Health",
    desc: "Supporting effective disease prevention and healthcare programs.",
    icon: HeartPulse,
  },
  {
    title: "Quality",
    desc: "Maintaining a strong focus on product consistency, safety, and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    desc: "Exploring new technologies and approaches in veterinary healthcare.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    desc: "Working closely with veterinarians, farmers, distributors, and industry professionals.",
    icon: Handshake,
  },
];

const ABOUT_HIGHLIGHTS = [
  {
    title: "Our Mission",
    desc: "To provide reliable veterinary healthcare solutions that help protect animal health, improve farm productivity, and support sustainable production.",
  },
  {
    title: "Our Vision",
    desc: "To become a trusted name in veterinary healthcare by delivering innovative, quality-focused, and scientifically driven solutions.",
  },
  {
    title: "Our Commitment",
    desc: "Animal Health • Quality • Innovation • Partnership",
  },
];

const SOLUTIONS = [
  {
    icon: Syringe,
    title: "Vaccines",
    desc: "Preventive vaccines for livestock, poultry, pets & aquaculture.",
    img: "/vetvacphrama-vaccine.png",
  },
  {
    icon: FlaskConical,
    title: "Biologicals",
    desc: "High-quality biological products for disease control & immunity.",
    img: "/vetvacphrama-biolagics.png",
  },
  {
    icon: Pill,
    title: "Medicines",
    desc: "Antibiotics, anti-inflammatories, antiparasitics & more.",
    img: "/vetvacphrama-medicines.png",
  },
  {
    icon: Sprout,
    title: "Supplements",
    desc: "Nutritional supplements to boost growth, immunity & performance.",
    img: "/vetvacphrama-supplements.png",
  },
  {
    icon: Wheat,
    title: "Livestock Healthcare",
    desc: "Complete healthcare solutions for cattle, buffalo, sheep & goats.",
    img: "/vetvacphrama-cow.png",
  },
  {
    icon: Bird,
    title: "Poultry Healthcare",
    desc: "Specialized solutions for poultry health & productivity.",
    img: "/vetvacphrama-chken.png",
  },
  {
    icon: Dog,
    title: "Pet Healthcare",
    desc: "Quality healthcare products for pets & companion animals.",
    img: "/vetvacphrama-dog cat.png",
  },
  {
    icon: Shield,
    title: "Biosecurity",
    desc: "Biosecurity & hygiene solutions for safer farming.",
    img: "/vetvacphrama-biosecurity.png",
  },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Quality Standards",
    desc: "Manufactured under strict GMP & ISO standards.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    desc: "Continuous innovation to deliver effective solutions.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled professionals with deep industry expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Efficacy",
    desc: "Rigorous testing ensures safe and effective products.",
  },
  {
    icon: Truck,
    title: "Wide Distribution",
    desc: "Strong distribution network across multiple regions.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated support for our partners and customers.",
  },
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
  {
    step: "1",
    icon: Search,
    title: "Research",
    desc: "Identifying need & developing solutions",
  },
  {
    step: "2",
    icon: FlaskConical,
    title: "Development",
    desc: "Formulation & product design",
  },
  {
    step: "3",
    icon: Factory,
    title: "Manufacturing",
    desc: "Advanced facilities & strict protocols",
  },
  {
    step: "4",
    icon: ClipboardCheck,
    title: "Quality Assurance",
    desc: "Multi-stage testing & quality checks",
  },
  {
    step: "5",
    icon: Truck,
    title: "Distribution",
    desc: "Safe & timely delivery to our partners",
  },
  {
    step: "6",
    icon: Headphones,
    title: "Customer Support",
    desc: "Continuous support & technical guidance",
  },
];

const RND_POINTS = [
  { icon: ShieldCheck, label: "Safety\nAssured" },
  { icon: Syringe, label: "Potency\nVerified" },
  { icon: FlaskConical, label: "Sterility\nGuaranteed" },
  { icon: Star, label: "Stability\nTested" },
  { icon: CheckCircle2, label: "Effectiveness\nProven" },
  { icon: Shield, label: "Compliance\nRegulatory" },
];

const TESTIMONIALS = [
  {
    name: "Dr. Ahmed Khan",
    role: "Veterinary Surgeon",
    quote:
      "VET VAC PHARMA products are reliable and effective. They help us maintain better animal health every day.",
    img: "/vetvacphrama-client1.png",
  },
  {
    name: "Farm Manager",
    role: "Poultry Farm",
    quote:
      "Our farm productivity has improved significantly after using their vaccines and supplements.",
    img: "/vetvacphrama-client2.png",
  },
  {
    name: "Veterinary Consultant",
    role: "Livestock Specialist",
    quote:
      "Excellent quality, timely delivery, and great technical support. Highly recommended!",
    img: "/vetvacphrama-client3.png",
  },
];

const FAQS = [
  {
    q: "What types of products do you offer?",
    a: "We offer vaccines, biologicals, medicines, supplements, and biosecurity solutions for livestock, poultry, pets, and aquaculture.",
  },
  {
    q: "Are your products safe for all animals?",
    a: "Yes, all our products are manufactured under strict GMP & ISO standards and undergo rigorous safety and efficacy testing.",
  },
  {
    q: "Do you provide export services?",
    a: "Yes, we export our products to multiple regions through our strong international distribution network.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order quantities vary by product; please contact our sales team for specific details.",
  },
  {
    q: "How can I become a distributor or partner?",
    a: "Reach out through our Contact Us page and our partnerships team will guide you through the onboarding process.",
  },
];

const FOOTER_LINKS = {
  Company: ["About Us", "Our Mission", "Our Team", "Careers", "News & Updates"],
  Products: [
    "Vaccines",
    "Biologicals",
    "Medicines",
    "Supplements",
    "Biosecurity",
  ],
  Solutions: [
    "Livestock Healthcare",
    "Poultry Healthcare",
    "Pet Healthcare",
    "Aquaculture Solutions",
    "Custom Solutions",
  ],
  Resources: [
    "Product Catalog",
    "Technical Library",
    "FAQs",
    "Downloads",
    "Blog",
  ],
};

const SOCIAL_ICONS = [Facebook, Linkedin, Twitter, Youtube];

// ─── Reusable UI Components ──────────────────────────────────────────────────

function parseStatValue(val) {
  const raw = val.replace(/,/g, "");
  const suffix = raw.match(/[+%]$/)?.[0] ?? "";
  const num = parseFloat(raw);
  const hasComma = val.includes(",");
  return { num, suffix, hasComma };
}

function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);
  return count;
}

function AnimatedStat({ icon: Icon, value, label }) {
  return (
    <div
      className="group relative p-3 sm:p-3.5 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default overflow-hidden bg-white"
      style={{ borderColor: "#D4E6DC" }}
    >
      {/* Rich Green Gradient Background that smoothly blooms on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E855C] to-[#146645] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Elevated icon badge with hover inversion & micro-rotation */}
        <div className="w-11 h-11 rounded-xl bg-[#EAF6F0] text-[#1E855C] group-hover:bg-white group-hover:text-[#1E855C] border border-[#CBE8D9]/80 group-hover:border-white shadow-2xs group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center mb-2">
          <Icon size={24} className="transition-transform duration-300" />
        </div>

        {/* Dynamic Counter with dark green default and white on hover */}
        <p className="text-[21px] sm:text-[23px] font-black leading-tight mb-1 text-[#0F442E] group-hover:text-white transition-colors duration-300">
          <Counter value={value} duration={2} />
        </p>

        {/* Label */}
        <p className="text-[12px] sm:text-[12.5px] font-extrabold leading-tight text-[#2C5E48] group-hover:text-white/95 transition-colors duration-300">
          {label}
        </p>
      </div>

      {/* Subtle bottom shine accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </div>
  );
}

function SectionHeading({ eyebrow, align = "left", className = "" }) {
  return (
    <div className={`mb-3 ${align === "center" ? "text-center" : ""}`}>
      <h2
        className={`text-[21px] sm:text-[23px] font-black uppercase tracking-wide ${className}`}
        style={{ color: COLORS.green }}
      >
        {eyebrow}
      </h2>
    </div>
  );
}

function PrimaryButton({ href, children, className = "", onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={`vetvac-primary-btn px-6 py-3.5 rounded-md text-[15.5px] font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-white hover:text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? COLORS.green : COLORS.primary,
        color: "#FFFFFF",
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 6px 18px rgba(9, 76, 128, 0.3)" : "0 2px 6px rgba(9, 76, 128, 0.15)",
      }}
    >
      <span className="text-white flex items-center justify-center gap-2" style={{ color: "#FFFFFF" }}>{children}</span>
    </a>
  );
}

function OutlineButton({ href, children, className = "", onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-6 py-3.5 rounded-md text-[15.5px] font-bold border-2 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? COLORS.primary : COLORS.primary,
        backgroundColor: isHovered ? COLORS.primary : "rgba(255,255,255,0.9)",
        color: isHovered ? "#FFFFFF" : COLORS.primary,
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered ? "0 6px 18px rgba(9, 76, 128, 0.2)" : "none",
      }}
    >
      <span style={{ color: isHovered ? "#FFFFFF" : COLORS.primary }} className="flex items-center justify-center gap-2">{children}</span>
    </a>
  );
}

// ─── Smooth Nav Scroll + Section Fade Up Trigger Helper ──────────────────────
function scrollToSection(e, href) {
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const targetId = href.replace("#", "");
  const el = document.getElementById(targetId);
  if (el) {
    const navOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    el.classList.remove("animate-section-fade");
    void el.offsetWidth; // force reflow
    setTimeout(() => {
      el.classList.add("animate-section-fade");
    }, 150);
  }
}

// ─── Page Sections ───────────────────────────────────────────────────────────

const SECTION_IDS = ["home", "about", "solutions", "rnd", "industries"];



const HERO_SLIDES = [
  {
    id: 1,
    image: "/vetvac_slider_1.jpg",
    badge: "Advancing Veterinary Healthcare",
    badgeIcon: ShieldCheck,
    title1: "Protecting Animal Health.",
    title2: "Empowering Modern Farming.",
    desc: "VET VAC PHARMA is a veterinary healthcare company focused on supporting healthier animals through innovative vaccines, biological products, and precision animal-health solutions.",
    tag: "100+ Formulations • GMP Certified",
    primaryLabel: "Explore Products",
    primaryHref: "#solutions",
    isPrimaryAnchor: true,
    secondaryLabel: "Contact Us",
    secondaryHref: "/group-companies/Vetvacpharma/contact",
  },
  {
    id: 2,
    image: "/vetvac_slider_2.jpg",
    badge: "Precision Livestock & Dairy Health",
    badgeIcon: HeartPulse,
    title1: "Healthier Cattle Herds.",
    title2: "Sustainable Farm Yields.",
    desc: "Delivering scientifically validated therapeutics, immunity boosters, and clinical-grade veterinary pharmaceuticals for dairy cattle, buffalo, sheep, and goats.",
    tag: "Clinical Efficacy • Field Tested",
    primaryLabel: "Our Solutions",
    primaryHref: "/group-companies/Vetvacpharma/solutions",
    isPrimaryAnchor: false,
    secondaryLabel: "Technical Library",
    secondaryHref: "/group-companies/Vetvacpharma/rnd",
  },
  {
    id: 3,
    image: "/vetvac_slider_3.jpg",
    badge: "Next-Gen Veterinary Biotechnology",
    badgeIcon: Sparkles,
    title1: "Pioneering Avian Biotech.",
    title2: "Total Biosecurity Assurance.",
    desc: "State-of-the-art laboratory research producing next-generation poultry vaccines, biological disease barriers, and sustainable farm biosecurity protocols.",
    tag: "Advanced R&D • ISO Compliant",
    primaryLabel: "Explore R&D Lab",
    primaryHref: "/group-companies/Vetvacpharma/rnd",
    isPrimaryAnchor: false,
    secondaryLabel: "Pharma Inquiries",
    secondaryHref: "/group-companies/Vetvacpharma/contact",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[current];
  const BadgeIcon = slide.badgeIcon;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="home"
      className="section-animate relative pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center"
      style={{ backgroundColor: COLORS.white }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background AI Image Carousel with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title1}
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
          {/* Directional readable overlay: ensures crisp text while showcasing the animals & lab */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.91) 45%, rgba(255,255,255,0.42) 75%, rgba(255,255,255,0.18) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-screen-xl w-full">
        <div className="max-w-2xl">
          {/* Animated Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-wider border shadow-2xs"
                  style={{
                    backgroundColor: COLORS.white,
                    color: COLORS.green,
                    borderColor: COLORS.borderGreen,
                  }}
                >
                  <BadgeIcon size={15} />
                  <span>{slide.badge}</span>
                </div>
                <span
                  className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#094C80]/10"
                  style={{ color: COLORS.primary }}
                >
                  {slide.tag}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black leading-[1.12] mb-4">
                <span style={{ color: COLORS.green }}>{slide.title1}</span>
                <br />
                <span style={{ color: COLORS.green }}>{slide.title2}</span>
              </h1>

              {/* Description */}
              <p
                className="text-[16px] sm:text-[17px] font-medium leading-relaxed mb-6 sm:mb-8 max-w-xl"
                style={{ color: COLORS.green }}
              >
                {slide.desc}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-10">
                <PrimaryButton
                  href={slide.primaryHref}
                  onClick={
                    slide.isPrimaryAnchor
                      ? (e) => scrollToSection(e, slide.primaryHref)
                      : undefined
                  }
                >
                  {slide.primaryLabel} <ArrowRight size={17} />
                </PrimaryButton>
                <OutlineButton
                  href={slide.secondaryHref}
                  className="bg-white/90 hover:bg-white transition-colors"
                >
                  {slide.secondaryLabel} <ArrowRight size={17} />
                </OutlineButton>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Interactive Controls */}
          <div className="flex items-center gap-4 pt-1">
            {/* Slide Indicator Pills */}
            <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  className="transition-all duration-300 rounded-full h-2.5 cursor-pointer"
                  style={{
                    width: current === idx ? "28px" : "10px",
                    backgroundColor: current === idx ? COLORS.green : "#CBD5E1",
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] font-bold text-slate-500 ml-1 select-none">
                0{current + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-2xs cursor-pointer text-[#0B2745] hover:text-[#1E855C]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-2xs cursor-pointer text-[#0B2745] hover:text-[#1E855C]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  return (
    <section className="section-animate py-8 sm:py-10 px-4 sm:px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-2xl border p-6 sm:p-8 lg:p-10 transition-all"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#D4E6DC",
            boxShadow: "0 4px 20px -2px rgba(14, 61, 41, 0.06)",
          }}
        >
          {/* Header with decorative accent lines */}
          <div className="flex items-center justify-center gap-4 mb-7 sm:mb-8">
            <div className="hidden sm:block h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#1E855C]/35" />
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-black tracking-[0.22em] uppercase border shadow-2xs"
              style={{
                backgroundColor: "#EAF6F0",
                color: "#0F442E",
                borderColor: "#CBE8D9",
              }}
            >
              <Sparkles size={13} style={{ color: "#1E855C" }} />
              <span>Trusted By Industry Leaders</span>
            </div>
            <div className="hidden sm:block h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#1E855C]/35" />
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
            {TRUSTED_BY.map(({ icon: Icon, label }, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default overflow-hidden"
                style={{
                  backgroundColor: "#F9FCFA",
                  borderColor: "#E2EFE7",
                }}
              >
                {/* Elevated Icon Box with hover lift */}
                <div
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 border shadow-2xs group-hover:scale-105 group-hover:bg-[#1E855C] group-hover:text-white"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#CBE8D9",
                    color: "#1E855C",
                  }}
                >
                  <Icon size={26} className="transition-transform duration-300 group-hover:rotate-3" />
                </div>

                {/* Dark Green Typography for maximum contrast and elegance */}
                <span
                  className="text-[13.5px] sm:text-[14.5px] font-extrabold leading-snug whitespace-pre-line transition-colors duration-200"
                  style={{ color: "#0F442E" }}
                >
                  {label}
                </span>

                {/* Bottom accent glow indicator on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "#1E855C" }}
                />
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
    <section
      id="about"
      className="section-animate pt-10 pb-5 sm:pt-14 sm:pb-6 px-4 sm:px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl space-y-10">
        {/* About Main Box */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border }}
        >
          <div className="mb-4">
            <span
              className="text-[13px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-2 border"
              style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
            >
              <Sparkles size={14} />
              <span>Advancing Veterinary Healthcare</span>
            </span>
            <SectionHeading eyebrow="ABOUT VET VAC PHARMA" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p
                className="text-[17px] font-semibold leading-relaxed"
                style={{ color: COLORS.green }}
              >
                VET VAC PHARMA is a veterinary healthcare company focused on
                supporting healthier animals through innovative vaccines, biological
                products, and animal-health solutions.
              </p>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: COLORS.green }}
              >
                We aim to serve the evolving needs of poultry and livestock industries by combining product quality, scientific knowledge, and practical industry understanding.
              </p>
              <p
                className="text-[15.5px] leading-relaxed"
                style={{ color: COLORS.green }}
              >
                Our focus extends beyond individual products. We believe effective animal healthcare requires prevention, responsible disease management, technical knowledge, and continuous improvement.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div
                className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-sm border"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_about_ai.jpg"
                  alt="Veterinary scientist and livestock health in modern facility"
                  fill
                  className="object-cover object-center"
                  sizes="400px"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p
                className="text-[13.5px] font-black uppercase tracking-[0.18em] mb-3.5 flex items-center gap-2"
                style={{ color: "#0F442E" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#1E855C]" />
                COMPANY AT A GLANCE
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {GLANCE_STATS.map(({ icon: Icon, value, label }) => (
                  <AnimatedStat
                    key={label}
                    icon={Icon}
                    value={value}
                    label={label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards with Hover Border Effect */}
        <div className="grid md:grid-cols-2 gap-6">
          {MISSION_VISION_CARDS.map(
            ({ eyebrow, title, desc, icon: Icon }) => (
              <div
                key={eyebrow}
                className="group relative bg-white rounded-lg border border-slate-200 p-7 pl-9 overflow-hidden transition-all duration-300 hover:border-[#094C80] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Thick Left Accent Border Line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-2.5 transition-colors duration-300"
                  style={{ backgroundColor: COLORS.white }}
                />

                <div className="flex items-start gap-4">
                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: COLORS.white, color: COLORS.green }}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <p
                      className="text-[12.5px] font-black uppercase tracking-wider mb-1"
                      style={{ color: COLORS.green }}
                    >
                      {eyebrow}
                    </p>
                    <h3
                      className="text-[21px] font-extrabold mb-2 transition-colors"
                      style={{ color: COLORS.green }}
                    >
                      {title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Our Commitment: 4 Core Pillars */}
        <div
          className="rounded-xl border p-8"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
        >
          <div className="mb-6">
            <span
              className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1 border"
              style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
            >
              CORE PRINCIPLES
            </span>
            <h3 className="text-2xl font-black" style={{ color: COLORS.green }}>
              Our Commitment
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMITMENTS.map(({ title, desc, icon: Icon }, idx) => {
              const isGreen = idx % 2 === 0;
              return (
                <div
                  key={title}
                  className="p-5 rounded-xl border transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isGreen ? COLORS.lightGreen : COLORS.lightBg,
                    borderColor: isGreen ? COLORS.borderGreen : COLORS.border,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-white shadow-sm"
                  >
                    <Icon size={20} style={{ color: isGreen ? COLORS.green : COLORS.primary }} />
                  </div>
                  <h4 className="text-[17px] font-black mb-1.5" style={{ color: COLORS.green }}>
                    {title}
                  </h4>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.green }}>
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Modern Agriculture Banner */}
        <div
          className="relative rounded-2xl overflow-hidden border shadow-lg p-7 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 min-h-[300px]"
          style={{ borderColor: "#CBE8D9" }}
        >
          {/* Background AI Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/vetvac_agriculture_banner.jpg"
              alt="Supporting Modern Agriculture"
              fill
              className="object-cover object-center pointer-events-none"
              priority
            />
            {/* Multi-layered gradient overlay ensuring high contrast readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(7, 27, 48, 0.94) 0%, rgba(9, 76, 128, 0.88) 45%, rgba(14, 61, 41, 0.6) 80%, rgba(14, 61, 41, 0.25) 100%)",
              }}
            />
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11.5px] font-black uppercase tracking-[0.2em] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3.5 backdrop-blur-xs">
              <Sprout size={14} className="text-emerald-300" />
              <span>Farm Performance &amp; Animal Wellbeing</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black mb-3 leading-tight text-white drop-shadow-xs">
              Supporting Modern Agriculture
            </h3>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-100/95 max-w-xl mb-5 drop-shadow-xs">
              Healthy animals are fundamental to productive livestock and poultry farming. VET VAC PHARMA works toward solutions that help farmers and animal-health professionals address changing disease challenges while improving animal wellbeing and farm performance.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-bold text-white/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                <ShieldCheck size={14} className="text-emerald-300" />
                Preventive Health
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                <HeartPulse size={14} className="text-emerald-300" />
                Enhanced Herd Immunity
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15">
                <Wheat size={14} className="text-emerald-300" />
                Sustainable Productivity
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#solutions"
              onClick={(e) => scrollToSection(e, "#solutions")}
              className="px-7 py-4 rounded-xl text-[15px] font-extrabold text-white flex items-center gap-2.5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer group"
              style={{ backgroundColor: COLORS.green }}
            >
              <span>Explore Solutions</span>
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="section-animate pt-5 pb-12 sm:pt-6 sm:pb-14 px-4 sm:px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl space-y-10">
        {/* Header Box */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
        >
          <div className="max-w-3xl">
            <span
              className="text-[13px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-2 border"
              style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
            >
              03 — Products &amp; Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2" style={{ color: COLORS.green }}>
              Comprehensive Veterinary Healthcare Solutions
            </h2>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              VET VAC PHARMA provides a focused portfolio of veterinary healthcare products designed to support disease prevention, animal wellbeing, and productive farming operations.
            </p>
          </div>
        </div>

        {/* 2 Core Feature Cards: Vaccines & Biologicals with AI Images */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Veterinary Vaccines Card */}
          <div
            className="rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-lg hover:border-[#1E855C] transition-all flex flex-col justify-between group"
            style={{ borderColor: COLORS.border }}
          >
            <div>
              <div className="relative w-full h-56">
                <Image
                  src="/vetvac_vaccines_ai.jpg"
                  alt="VET VAC PHARMA Veterinary Vaccines Production Line"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full text-[13px] font-extrabold uppercase text-white shadow-sm bg-[#094C80]"
                >
                  Vaccines
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black" style={{ color: COLORS.green }}>
                    Veterinary Vaccines
                  </h3>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/veterinary-vaccines"
                    className="text-[13.5px] font-bold text-[#1E855C] hover:text-[#094C80] flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <p className="text-[16px] leading-relaxed mb-5" style={{ color: COLORS.green }}>
                  Our vaccine solutions are designed to support preventive healthcare programs for poultry and livestock.
                </p>

                <p className="text-[14px] font-extrabold uppercase tracking-wider mb-3" style={{ color: COLORS.green }}>
                  Key Areas Include:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Poultry vaccination",
                    "Livestock vaccination",
                    "Disease prevention",
                    "Immunization programs",
                    "Farm-level health management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[15.5px] font-semibold" style={{ color: COLORS.green }}>
                      <CheckCircle2 size={18} style={{ color: COLORS.green }} className="flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div
                className="p-3 rounded-lg border text-[14px] font-bold text-center"
                style={{ backgroundColor: COLORS.white, borderColor: COLORS.border, color: COLORS.green }}
              >
                Preventive Immunity &amp; Controlled Quality
              </div>
              <Link
                href="/group-companies/Vetvacpharma/solutions/veterinary-vaccines"
                className="w-full py-3 rounded-lg text-[15px] font-bold text-white bg-[#1E855C] hover:bg-[#156344] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>View Vaccines Detail Page</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Biological Products Card */}
          <div
            className="rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-lg hover:border-[#1E855C] transition-all flex flex-col justify-between group"
            style={{ borderColor: COLORS.border }}
          >
            <div>
              <div className="relative w-full h-56">
                <Image
                  src="/vetvac_biologics_ai.jpg"
                  alt="VET VAC PHARMA Biological Products Laboratory"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full text-[13px] font-extrabold uppercase text-white shadow-sm bg-[#094C80]"
                >
                  Biologicals
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black" style={{ color: COLORS.green }}>
                    Biological Products
                  </h3>
                  <Link
                    href="/group-companies/Vetvacpharma/solutions/biological-products"
                    className="text-[13.5px] font-bold text-[#1E855C] hover:text-[#094C80] flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <p className="text-[16px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                  Our biological product portfolio supports modern approaches to animal disease prevention and healthcare management.
                </p>
                <p className="text-[16px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                  We focus on solutions that contribute to improved animal health while supporting responsible and effective farming practices.
                </p>

                <p className="text-[14px] font-extrabold uppercase tracking-wider mb-3" style={{ color: COLORS.green }}>
                  Key Formulations:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Immune response modulators",
                    "Biological disease control & biosecurity",
                    "Targeted therapeutic biologicals",
                    "Sustainable, non-antibiotic farm formulations",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[15.5px] font-semibold" style={{ color: COLORS.green }}>
                      <CheckCircle2 size={18} style={{ color: COLORS.green }} className="flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div
                className="p-3 rounded-lg border text-[14px] font-bold text-center"
                style={{ backgroundColor: COLORS.white, borderColor: COLORS.border, color: COLORS.green }}
              >
                Safe, Effective &amp; Responsible Farming
              </div>
              <Link
                href="/group-companies/Vetvacpharma/solutions/biological-products"
                className="w-full py-3 rounded-lg text-[15px] font-bold text-white bg-[#094C80] hover:bg-[#1E855C] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>View Biologicals Detail Page</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Specialized Solutions: Poultry & Livestock */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Poultry Health Solutions */}
          <div
            className="rounded-xl border p-7 bg-white shadow-sm hover:shadow-lg hover:border-[#1E855C] transition-all group flex flex-col justify-between"
            style={{ borderColor: COLORS.border }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#EAF6F0]"
                  >
                    <Bird size={24} style={{ color: COLORS.green }} />
                  </div>
                  <div>
                    <h3 className="text-[21px] font-black" style={{ color: COLORS.green }}>
                      Poultry Health Solutions
                    </h3>
                    <span className="text-[14px] font-bold" style={{ color: COLORS.green }}>
                      Healthier Flocks • Efficient Production
                    </span>
                  </div>
                </div>
                <Link
                  href="/group-companies/Vetvacpharma/solutions/poultry-health-solutions"
                  className="text-[13.5px] font-bold text-[#1E855C] hover:text-[#094C80] flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                Modern poultry farming requires effective prevention and health-management strategies. Our poultry-focused solutions are designed to help address common health challenges and support healthier flocks and more efficient production.
              </p>
              <div
                className="relative w-full h-48 rounded-lg overflow-hidden border mb-4"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_poultry_service.jpg"
                  alt="Modern commercial poultry farm health management"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-[14px] font-bold mb-4" style={{ color: COLORS.green }}>
                <div className="p-2.5 rounded border text-center" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                  ✓ Viral &amp; Bacterial Vaccines
                </div>
                <div className="p-2.5 rounded border text-center" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
                  ✓ Flock Immunity Support
                </div>
              </div>
            </div>
            <Link
              href="/group-companies/Vetvacpharma/solutions/poultry-health-solutions"
              className="w-full py-3 rounded-lg text-[15px] font-bold text-white bg-[#1E855C] hover:bg-[#156344] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Explore Poultry Solutions</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Livestock Health Solutions */}
          <div
            className="rounded-xl border p-7 bg-white shadow-sm hover:shadow-lg hover:border-[#1E855C] transition-all group flex flex-col justify-between"
            style={{ borderColor: COLORS.border }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#EAF6F0]"
                  >
                    <Wheat size={24} style={{ color: COLORS.green }} />
                  </div>
                  <div>
                    <h3 className="text-[21px] font-black" style={{ color: COLORS.green }}>
                      Livestock Health Solutions
                    </h3>
                    <span className="text-[14px] font-bold" style={{ color: COLORS.green }}>
                      Preventive Care • Herd Wellbeing
                    </span>
                  </div>
                </div>
                <Link
                  href="/group-companies/Vetvacpharma/solutions/livestock-health-solutions"
                  className="text-[13.5px] font-bold text-[#1E855C] hover:text-[#094C80] flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: COLORS.green }}>
                We support livestock producers with healthcare solutions focused on maintaining animal wellbeing and reducing the impact of preventable diseases.
              </p>
              <p className="text-[14px] font-extrabold uppercase tracking-wider mb-2.5" style={{ color: COLORS.green }}>
                Our solutions can support:
              </p>
              <div className="space-y-2 mb-4">
                {[
                  "Cattle health",
                  "Dairy operations",
                  "Commercial livestock",
                  "Farm disease prevention",
                  "Animal wellness programs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[15px] font-semibold" style={{ color: COLORS.green }}>
                    <CheckCircle2 size={16} style={{ color: COLORS.green }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div
                className="p-3 rounded-lg border text-[14px] font-bold flex items-center justify-between"
                style={{ backgroundColor: COLORS.white, borderColor: COLORS.border, color: COLORS.green }}
              >
                <span>Targeted Herd Immunity Protocols</span>
                <ShieldCheck size={20} />
              </div>
              <Link
                href="/group-companies/Vetvacpharma/solutions/livestock-health-solutions"
                className="w-full py-3 rounded-lg text-[15px] font-bold text-white bg-[#094C80] hover:bg-[#1E855C] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Explore Livestock Solutions</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Integrated Animal Health Approach Banner */}
        <div
          className="rounded-xl p-8 border"
          style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
        >
          <div className="max-w-3xl">
            <span
              className="text-[12.5px] font-black uppercase tracking-wider px-3 py-1 rounded bg-white inline-block mb-2"
              style={{ color: COLORS.green }}
            >
              HOLISTIC PERSPECTIVE
            </span>
            <h3 className="text-2xl font-black mb-2" style={{ color: COLORS.green }}>
              Integrated Animal Health Approach
            </h3>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              Effective animal healthcare involves more than a single product. We promote a comprehensive approach combining vaccination, preventive healthcare, farm management, veterinary guidance, and ongoing monitoring.
            </p>
          </div>
        </div>

        {/* Products CTA Banner */}
        <div
          className="rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          style={{ backgroundColor: COLORS.primary }}
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Find the Right Solution for Your Animal Health Program
            </h3>
            <p className="text-[16px] text-white/90 max-w-xl">
              Connect with our team to explore veterinary healthcare solutions for your operation.
            </p>
          </div>
          <Link
            href="/group-companies/Vetvacpharma/contact"
            className="vetvac-white-btn px-7 py-3.5 rounded-lg text-[15.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = COLORS.green;
              e.currentTarget.style.color = "#FFFFFF";
              const s = e.currentTarget.querySelector("span");
              if (s) s.style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = COLORS.white;
              e.currentTarget.style.color = COLORS.primary;
              const s = e.currentTarget.querySelector("span");
              if (s) s.style.color = COLORS.primary;
            }}
          >
            <span>Contact Us</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyIndustriesProcessSection() {
  const [activeTab, setActiveTab] = useState(0);

  const industriesList = [
    {
      id: "poultry",
      slug: "poultry",
      title: "Poultry",
      tagline: "Healthier Flocks. Stronger Production.",
      desc: "We support commercial poultry operations with veterinary healthcare solutions focused on disease prevention, flock health, and productive farming.",
      items: [
        "Poultry vaccines (live & inactivated)",
        "Preventive healthcare programs",
        "Disease-management support",
        "Farm health & biosecurity",
      ],
      img: "/vetvac_poultry_service.jpg",
      icon: Bird,
    },
    {
      id: "livestock",
      slug: "livestock",
      title: "Livestock",
      tagline: "Supporting Healthy & Productive Livestock",
      desc: "Our livestock-focused solutions are designed to support cattle, dairy, and other commercial livestock operations. We focus on helping producers maintain animal health while supporting efficient and sustainable production.",
      items: [
        "Cattle & herd healthcare",
        "Preventive immunization schedules",
        "Productive farming support",
        "Sustainable health programs",
      ],
      img: "/vetvac_livestock_service.jpg",
      icon: Wheat,
    },
    {
      id: "dairy-farming",
      slug: "dairy-farming",
      title: "Dairy Farming",
      tagline: "Protecting Animal Health Across Dairy Operations",
      desc: "Healthy dairy animals are essential for sustainable farm performance. Our veterinary healthcare approach supports disease prevention and overall animal wellbeing within dairy operations.",
      items: [
        "Mastitis & udder health protection",
        "Lactation nutritional support",
        "Reproductive wellness programs",
        "Calf rearing immunization",
      ],
      img: "/vetvac_dairy_service.jpg",
      icon: Sprout,
    },
    {
      id: "veterinary-professionals",
      slug: "veterinary-professionals",
      title: "Veterinary Professionals",
      tagline: "Supporting Veterinary Expertise",
      desc: "We work to provide veterinarians and animal-health professionals with reliable products and technical information that can support informed healthcare decisions.",
      items: [
        "Diagnostic & technical literature",
        "Targeted pharmaceuticals & biologics",
        "Clinical guidance & dosing handbooks",
        "Direct specialist support desk",
      ],
      img: "/vetvac_rd_lab_ai.jpg",
      icon: Stethoscope,
    },
    {
      id: "commercial-farming",
      slug: "commercial-farming",
      title: "Commercial Farming",
      tagline: "Solutions for Modern Animal Production",
      desc: "As farming systems become more intensive and technologically advanced, effective preventive healthcare becomes increasingly important. Our solutions are designed with the practical requirements of modern commercial farms in mind.",
      items: [
        "High-density biosecurity perimeters",
        "Automated delivery compatibility",
        "Epidemic prevention protocols",
        "Farm yield performance analytics",
      ],
      img: "/vetvac_vaccines_ai.jpg",
      icon: Factory,
    },
  ];

  const partners = [
    "Veterinary professionals",
    "Poultry farmers",
    "Livestock producers",
    "Dairy farms",
    "Distributors",
    "Animal-health organizations",
    "Agricultural businesses",
  ];

  const current = industriesList[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      id="industries"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl space-y-12">
        {/* Header */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
        >
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Globe size={13} />
              <span>05 — Industries &amp; Services</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: COLORS.green }}>
              Industries &amp; Core Services
            </h2>
            <p className="text-[16px] font-bold mb-3" style={{ color: COLORS.green }}>
              Supporting Every Stage of Animal Health
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              VET VAC PHARMA develops its focus around the diverse requirements of the animal-health industry, helping healthcare professionals and producers manage animal health through preventive and supportive solutions.
            </p>
          </div>
        </div>

        {/* 5 Industries Interactive Tabs & Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {industriesList.map((ind, idx) => {
              const isActive = activeTab === idx;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.title}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                    isActive ? "shadow-md -translate-y-0.5" : "hover:bg-white/80"
                  }`}
                  style={{
                    backgroundColor: isActive ? COLORS.white : COLORS.lightBg,
                    borderColor: isActive ? COLORS.primary : COLORS.border,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: isActive ? COLORS.primary : COLORS.lightGreen,
                        color: isActive ? COLORS.white : COLORS.green,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-[16px] font-black" style={{ color: COLORS.green }}>
                        {ind.title}
                      </p>
                      <p className="text-[13px] line-clamp-1" style={{ color: COLORS.green }}>
                        {ind.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      isActive ? "-rotate-90 text-[#094C80]" : "rotate-0 text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail Card */}
          <div className="lg:col-span-8">
            <div
              className="rounded-xl border p-8 lg:p-10 bg-white shadow-sm flex flex-col justify-between"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: COLORS.white }}
                    >
                      <CurrentIcon size={26} style={{ color: COLORS.green }} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                        {current.title}
                      </h3>
                      <p className="text-[15px] font-bold" style={{ color: COLORS.green }}>
                        {current.tagline}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/group-companies/Vetvacpharma/services/${current.slug}`}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-extrabold uppercase bg-[#EAF6F0] text-[#1E855C] hover:bg-[#1E855C] hover:text-white transition-colors"
                  >
                    <span>View Detail Page</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <p className="text-[16px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
                  {current.desc}
                </p>

                <div
                  className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border mb-6"
                  style={{ borderColor: COLORS.border }}
                >
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <p className="text-[14px] font-black uppercase tracking-wider mb-3" style={{ color: COLORS.green }}>
                  Key Capabilities Include:
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                  {current.items.map((item) => (
                    <div
                      key={item}
                      className="p-3.5 rounded-lg border flex items-center gap-2.5"
                      style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
                    >
                      <CheckCircle2 size={18} style={{ color: COLORS.green }} className="flex-shrink-0" />
                      <span className="text-[15px] font-bold" style={{ color: COLORS.green }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: COLORS.border }}>
                <span className="text-[14px] font-semibold" style={{ color: COLORS.green }}>
                  Targeted field protocols &amp; disease prevention
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Link
                    href={`/group-companies/Vetvacpharma/services/${current.slug}`}
                    className="px-6 py-3 rounded-lg text-[15px] font-bold text-white flex items-center gap-2 transition-all duration-300 hover:bg-[#156344] hover:text-white cursor-pointer shadow-sm bg-[#1E855C]"
                  >
                    <span style={{ color: "#FFFFFF" }}>Explore {current.title} Page</span>
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/group-companies/Vetvacpharma/contact"
                    className="px-5 py-3 rounded-lg text-[14px] font-bold border border-slate-300 text-[#094C80] hover:bg-slate-50 transition-colors"
                  >
                    <span>Inquire Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animal Health Partners Ecosystem */}
        <div
          className="rounded-xl border p-8 bg-white"
          style={{ borderColor: COLORS.border }}
        >
          <div className="max-w-2xl mb-6">
            <span
              className="text-[12.5px] font-black uppercase tracking-wider block mb-1"
              style={{ color: COLORS.green }}
            >
              LONG-TERM COLLABORATION
            </span>
            <h3 className="text-2xl font-black mb-2" style={{ color: COLORS.green }}>
              Animal Health Partners
            </h3>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              We aim to build long-term relationships across the entire veterinary and agricultural network:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {partners.map((partner) => (
              <div
                key={partner}
                className="p-3.5 rounded-xl border flex items-center gap-2.5"
                style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                >
                  <Check size={12} />
                </div>
                <span className="text-[14.5px] font-bold" style={{ color: COLORS.green }}>
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* Partner CTA Box */}
          <div
            className="rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div>
              <span className="text-[12.5px] font-extrabold uppercase tracking-widest text-[#EAF3F8] block mb-1">
                COLLABORATE WITH US
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Partner With VET VAC PHARMA
              </h3>
              <p className="text-[16px] text-white/90 max-w-xl">
                Together, we can contribute to healthier animals, stronger farming operations, and a more sustainable future for the animal-health industry.
              </p>
            </div>
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="vetvac-white-btn px-7 py-3.5 rounded-lg text-[15.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = COLORS.green;
                e.currentTarget.style.color = "#FFFFFF";
                const s = e.currentTarget.querySelector("span");
                if (s) s.style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                e.currentTarget.style.color = COLORS.primary;
                const s = e.currentTarget.querySelector("span");
                if (s) s.style.color = COLORS.primary;
              }}
            >
              <span>Become a Partner</span>
              <Handshake size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentRndSection() {
  return (
    <section
      id="rnd"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl space-y-12">
        {/* Main R&D Overview Card */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
        >
          <div className="max-w-3xl">
            <span
              className="text-[13px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Microscope size={14} />
              <span>04 — R&amp;D &amp; Quality</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2" style={{ color: COLORS.green }}>
              Research &amp; Development
            </h2>
            <p className="text-[18px] font-bold mb-3" style={{ color: COLORS.green }}>
              Driven by Science. Focused on Animal Health.
            </p>
            <p className="text-[16px] leading-relaxed mb-3" style={{ color: COLORS.green }}>
              Research and development is essential to advancing modern veterinary healthcare.
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              At VET VAC PHARMA, our R&amp;D approach focuses on understanding emerging animal-health challenges and identifying opportunities for improved veterinary solutions.
            </p>
          </div>
        </div>

        {/* 4 R&D Focus Cards + AI Image */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <span
                className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1 border"
                style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
              >
                SCIENTIFIC PRIORITIES
              </span>
              <h3 className="text-2xl font-black" style={{ color: COLORS.green }}>
                Our R&amp;D Focus
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Disease Prevention",
                  desc: "Studying changing disease challenges and prevention requirements across poultry and livestock.",
                  icon: ShieldCheck,
                  badge: "Proactive Defense",
                },
                {
                  title: "Product Development",
                  desc: "Exploring innovative approaches to veterinary vaccines and biological products.",
                  icon: FlaskConical,
                  badge: "Formulation R&D",
                },
                {
                  title: "Performance Evaluation",
                  desc: "Supporting systematic evaluation of product quality, consistency, and performance.",
                  icon: ClipboardCheck,
                  badge: "Clinical Validation",
                },
                {
                  title: "Continuous Improvement",
                  desc: "Using research and industry feedback to improve existing solutions and develop future products.",
                  icon: Award,
                  badge: "Ongoing Quality",
                },
              ].map(({ title, desc, icon: Icon, badge }) => (
                <div
                  key={title}
                  className="group relative p-5 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1E855C]/15 hover:border-[#1E855C] cursor-pointer overflow-hidden flex flex-col justify-between"
                  style={{ borderColor: COLORS.border }}
                >
                  {/* Animated top gradient highlight beam on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E855C] via-[#094C80] to-[#1E855C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />

                  {/* Soft emerald ambient light in corner */}
                  <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-[#1E855C]/0 group-hover:bg-[#1E855C]/10 blur-xl transition-all duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#1E855C] group-hover:text-white"
                        style={{
                          backgroundColor: COLORS.lightGreen,
                          color: COLORS.green,
                        }}
                      >
                        <Icon size={22} className="transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <span
                        className="text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white group-hover:border-[#1E855C]"
                        style={{
                          backgroundColor: COLORS.white,
                          color: "#0F442E",
                          borderColor: COLORS.border,
                        }}
                      >
                        {badge}
                      </span>
                    </div>

                    <h4
                      className="text-[16.5px] font-black mb-2 transition-colors duration-300 group-hover:text-[#1E855C]"
                      style={{ color: "#0F442E" }}
                    >
                      {title}
                    </h4>

                    <p
                      className="text-[14px] leading-relaxed transition-colors duration-300"
                      style={{ color: "#2D5A46" }}
                    >
                      {desc}
                    </p>
                  </div>

                  <div
                    className="mt-4 pt-3 border-t flex items-center justify-between text-[12px] font-bold transition-all duration-300"
                    style={{ borderColor: COLORS.border }}
                  >
                    <span className="text-[#0F442E] group-hover:text-[#1E855C] transition-colors duration-300">
                      Scientific Standard
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[#0F442E] group-hover:text-[#1E855C] transform translate-x-0 group-hover:translate-x-1.5 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl hover:shadow-[#094C80]/20 transition-all duration-500 cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <Image
                src="/vetvac_rd_lab_ai.jpg"
                alt="VET VAC PHARMA research scientist in pharmaceutical laboratory"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient vignette on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/75 via-[#071B30]/15 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

              {/* Interactive Floating Badge at Bottom */}
              <div
                className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border shadow-lg flex items-center justify-between transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-[#1E855C]/40"
                style={{ borderColor: COLORS.border }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E855C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E855C]" />
                  </div>
                  <span
                    className="text-[13.5px] sm:text-[14px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                    style={{ color: "#0F442E" }}
                  >
                    State-of-the-Art Laboratory Facilities
                  </span>
                </div>
                <span
                  className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white"
                  style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                >
                  R&amp;D Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance Section with 6 Principles and AI Image */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span
                  className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2 bg-white"
                  style={{ color: COLORS.green }}
                >
                  ZERO DEFECTS STANDARD
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-1" style={{ color: COLORS.green }}>
                  Quality Assurance
                </h3>
                <p className="text-[17px] font-bold mb-3" style={{ color: COLORS.green }}>
                  Quality at Every Stage
                </p>
                <p className="text-[16px] leading-relaxed mb-3" style={{ color: COLORS.green }}>
                  Quality is fundamental to veterinary healthcare. Our quality-focused approach emphasizes consistency, product integrity, controlled processes, and responsible handling.
                </p>
                <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
                  We aim to maintain high standards across product development, manufacturing partnerships, storage, distribution, and delivery.
                </p>
              </div>

              {/* 6 Quality Principles */}
              <div>
                <p className="text-[13.5px] font-black uppercase tracking-wider mb-3" style={{ color: "#0F442E" }}>
                  Our Quality Principles:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Consistent product quality",
                    "Controlled processes",
                    "Product integrity",
                    "Proper storage and handling",
                    "Safety-focused practices",
                    "Continuous quality improvement",
                  ].map((principle) => (
                    <div
                      key={principle}
                      className="group relative p-3.5 sm:p-4 rounded-xl bg-white border flex items-center gap-3 transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg hover:shadow-[#1E855C]/15 hover:-translate-y-1 hover:border-[#1E855C]"
                      style={{ borderColor: COLORS.border }}
                    >
                      {/* Left indicator bar on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E855C] to-[#094C80] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1E855C] group-hover:text-white"
                        style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                      >
                        <CheckCircle2 size={18} className="transition-transform duration-300" />
                      </div>

                      <span
                        className="text-[14px] sm:text-[14.5px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                        style={{ color: "#0F442E" }}
                      >
                        {principle}
                      </span>

                      <ArrowRight
                        size={14}
                        className="ml-auto text-[#1E855C] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl hover:shadow-[#094C80]/20 transition-all duration-500 cursor-pointer"
                style={{ borderColor: COLORS.border }}
              >
                <Image
                  src="/vetvac_rd_quality_ai.jpg"
                  alt="VET VAC PHARMA Automated Cold-Chain Quality Testing and Microscope Inspection"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/75 via-[#071B30]/15 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                {/* Interactive Floating Badge at Bottom */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border shadow-lg flex items-center justify-between transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-[#1E855C]/40"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center w-3 h-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E855C] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E855C]" />
                    </div>
                    <span
                      className="text-[13.5px] sm:text-[14px] font-black transition-colors duration-300 group-hover:text-[#1E855C]"
                      style={{ color: "#0F442E" }}
                    >
                      Automated Cold-Chain &amp; Quality Inspection
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md transition-all duration-300 group-hover:bg-[#1E855C] group-hover:text-white"
                    style={{ backgroundColor: COLORS.lightGreen, color: COLORS.green }}
                  >
                    GMP Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific & Technical Excellence Block */}
        <div
          className="rounded-xl border p-8 bg-white"
          style={{ borderColor: COLORS.border }}
        >
          <div className="max-w-3xl">
            <span
              className="text-[12.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2"
              style={{ backgroundColor: COLORS.white, color: COLORS.green }}
            >
              TECHNICAL MASTERY
            </span>
            <h3 className="text-2xl font-black mb-3" style={{ color: COLORS.green }}>
              Scientific &amp; Technical Excellence
            </h3>
            <p className="text-[16px] leading-relaxed mb-3" style={{ color: COLORS.green }}>
              Veterinary vaccine development and biological products require controlled quality systems and evaluation of safety, potency, and efficacy.
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: COLORS.green }}>
              Our commitment is to combine scientific thinking with practical veterinary requirements to provide dependable solutions for animal-health professionals.
            </p>
          </div>
        </div>

        {/* R&D CTA Banner */}
        <div
          className="rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          style={{ backgroundColor: COLORS.primary }}
        >
          <div>
            <span className="text-[12.5px] font-extrabold uppercase tracking-widest text-[#EAF3F8] block mb-1">
              PROVEN STANDARDS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Quality You Can Trust
            </h3>
            <p className="text-[16px] text-white/90 max-w-xl">
              Explore our approach to research, quality, and veterinary healthcare innovation.
            </p>
          </div>
          <a
            href="#solutions"
            onClick={(e) => scrollToSection(e, "#solutions")}
            className="vetvac-white-btn px-7 py-3.5 rounded-lg text-[15.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = COLORS.green;
              e.currentTarget.style.color = "#FFFFFF";
              const s = e.currentTarget.querySelector("span");
              if (s) s.style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = COLORS.white;
              e.currentTarget.style.color = COLORS.primary;
              const s = e.currentTarget.querySelector("span");
              if (s) s.style.color = COLORS.primary;
            }}
          >
            <span>Explore Our Products</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsFaqSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = useCallback(
    (idx) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveSlide(idx);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goToSlide((activeSlide + 1) % TESTIMONIALS.length);
  }, [activeSlide, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((activeSlide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const t = TESTIMONIALS[activeSlide];

  return (
    <section className="section-animate py-16 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-8">
        {/* Testimonials Slider */}
        <div
          className="lg:col-span-7 rounded-xl border p-8 flex flex-col"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="WHAT OUR CLIENTS SAY" />

          <div
            key={activeSlide}
            className="flex-1 p-6 rounded-xl border bg-white flex flex-col justify-between"
            style={{
              borderColor: COLORS.border,
              animation: "slideIn 0.4s ease",
            }}
          >
            <div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={17}
                    fill="#F0B429"
                    style={{ color: "#F0B429" }}
                  />
                ))}
              </div>
              <p
                className="text-[16.5px] leading-relaxed mb-6 font-medium"
                style={{ color: COLORS.green }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              {t.img && (
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2"
                  style={{ borderColor: COLORS.border }}
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              )}
              <div>
                <p
                  className="text-[16px] font-black leading-snug"
                  style={{ color: COLORS.green }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[14px] font-semibold"
                  style={{ color: COLORS.green }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    clearInterval(timerRef.current);
                    goToSlide(idx);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeSlide === idx ? 24 : 8,
                    height: 8,
                    backgroundColor:
                      activeSlide === idx
                        ? COLORS.primary
                        : `${COLORS.primary}30`,
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  clearInterval(timerRef.current);
                  prev();
                }}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-50 transition-colors"
                style={{ borderColor: COLORS.border }}
              >
                <ChevronDown
                  size={18}
                  style={{
                    color: COLORS.green,
                    transform: "rotate(90deg)",
                  }}
                />
              </button>
              <button
                onClick={() => {
                  clearInterval(timerRef.current);
                  next();
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1E855C] transition-all cursor-pointer shadow-sm"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronDown
                  size={18}
                  style={{ color: "#FFFFFF", transform: "rotate(-90deg)" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ with animation */}
        <div
          className="lg:col-span-5 rounded-xl border p-8"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" />
          <div className="space-y-3">
            {FAQS.map(({ q, a }, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={q}
                  className="rounded-lg border overflow-hidden bg-white"
                  style={{
                    borderColor: isOpen ? COLORS.primary : COLORS.border,
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
                    style={{
                      backgroundColor: isOpen
                        ? `${COLORS.primary}08`
                        : "transparent",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <span
                      className="text-[15.5px] font-bold"
                      style={{ color: isOpen ? COLORS.primary : COLORS.ink }}
                    >
                      Q{idx + 1}. {q}
                    </span>
                    <span
                      className="flex-shrink-0"
                      style={{
                        display: "inline-flex",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        color: COLORS.green,
                      }}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? 250 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <p
                      className="px-4 pb-4 text-[15px] leading-relaxed border-t pt-3"
                      style={{
                        color: COLORS.green,
                        borderColor: COLORS.border,
                      }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
      `}</style>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-animate py-6 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between"
          style={{ backgroundColor: COLORS.primary }}
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">
              Partner with VET VAC PHARMA
            </h2>
            <p
              className="text-[16px] max-w-md leading-relaxed"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Let&apos;s work together for healthier animals and a stronger
              agricultural future.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="flex-1 lg:flex-none justify-center px-7 py-3.5 rounded-md text-[15.5px] font-bold flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-md"
              style={{ backgroundColor: COLORS.white, color: COLORS.primary }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = COLORS.green;
                e.currentTarget.style.color = "#FFFFFF";
                const span = e.currentTarget.querySelector("span");
                if (span) span.style.color = "#FFFFFF";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = COLORS.white;
                e.currentTarget.style.color = COLORS.primary;
                const span = e.currentTarget.querySelector("span");
                if (span) span.style.color = COLORS.primary;
              }}
            >
              <span>Contact Us Today</span> <ArrowRight size={17} />
            </Link>
            <a
              href="tel:+923218431665"
              className="flex-1 lg:flex-none justify-center px-7 py-3.5 rounded-md text-[15.5px] font-bold border-2 flex items-center gap-2 transition-all duration-200"
              style={{ borderColor: COLORS.white, color: COLORS.white, backgroundColor: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.white; e.currentTarget.style.color = COLORS.primary; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = COLORS.white; }}
            >
              <Phone size={17} /> 0092-321-8431665
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function VetVacPharmaPage() {
  useEffect(() => {
    document.body.classList.add("vetvac-pharma-theme");

    // IntersectionObserver to add section-fade-up animation dynamically when scrolling
    const sections = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section-fade");
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.body.classList.remove("vetvac-pharma-theme");
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: COLORS.white, color: COLORS.green }}
    >
      {/* Dynamic Keyframes for Section Fade Up Animation */}
      <style>{`
        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(55px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-animate {
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-section-fade {
          animation: sectionFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <ScrollProgress color={COLORS.primary} />
      <VetvacNavbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <SolutionsSection />
      <WhyIndustriesProcessSection />
      <CommitmentRndSection />
      <TestimonialsFaqSection />
      <CtaSection />
      <VetvacFooter />
    </main>
  );
}
