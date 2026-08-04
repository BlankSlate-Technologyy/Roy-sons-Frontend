"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { useActiveSection } from "@/hooks/useActiveSection";
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
  Sprout,
  Stethoscope,
  Waves,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Target,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────

const COLORS = {
  primary: "#1B4FCC",
  primaryDk: "#0E2E7A",
  ink: "#0E2748",
  muted: "#5B6B85",
  white: "#ffffff",
  border: "#e2e8f0",
  lightBg: "#F3F7FF",
  green: "#1F9D6B",
  footerBg: "#081833",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#solutions" },
  { label: "Solutions", href: "#solutions" },
  { label: "R&D & Quality", href: "#rnd" },
  { label: "Industries", href: "#industries" },
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
    eyebrow: "OUR VISION",
    title: "To Lead & Innovate",
    desc: "To be a global leader in healthcare engineering and medical solutions, transforming public health and medical access through quality, advanced technology, and sustainable engineering values.",
    icon: Target,
  },
  {
    eyebrow: "OUR MISSION",
    title: "To Support Globally",
    desc: "To deliver world-class medical technologies and healthcare equipment, supported by exceptional engineering capabilities and international distribution frameworks to elevate modern clinical delivery.",
    icon: Award,
  },
];

const ABOUT_HIGHLIGHTS = [
  {
    title: "Our Mission",
    desc: "To protect animal health and enhance productivity through innovative and reliable solutions.",
  },
  {
    title: "Our Vision",
    desc: "To be a global leader in veterinary healthcare, recognized for quality, innovation, and trust.",
  },
  {
    title: "Our Core Values",
    desc: "Innovation • Quality • Integrity • Compassion • Customer Focus",
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
  const { num, suffix, hasComma } = parseStatValue(value);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = hasComma ? count.toLocaleString() : count;

  return (
    <div
      ref={ref}
      className="p-4 rounded-lg border text-center"
      style={{ borderColor: COLORS.border, backgroundColor: COLORS.lightBg }}
    >
      <Icon
        size={30}
        className="mx-auto mb-2"
        style={{ color: COLORS.primary }}
      />
      <p
        className="text-[20px] font-black"
        style={{ color: COLORS.primary }}
      >
        {display}
        {suffix}
      </p>
      <p
        className="text-[12.5px] font-bold leading-tight"
        style={{ color: COLORS.muted }}
      >
        {label}
      </p>
    </div>
  );
}

function SectionHeading({ eyebrow, align = "left", className = "" }) {
  return (
    <div className={`mb-3 ${align === "center" ? "text-center" : ""}`}>
      <h2
        className={`text-[18px] font-black uppercase tracking-wide ${className}`}
        style={{ color: COLORS.primary }}
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
      className={`px-6 py-3 rounded-md text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? COLORS.primaryDk : COLORS.primary,
        color: COLORS.white,
        transform: isHovered ? "translateY(-1px)" : "none",
        boxShadow: isHovered ? "0 4px 12px rgba(27, 79, 204, 0.25)" : "none",
      }}
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, children, className = "", onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-6 py-3 rounded-md text-[13px] font-bold border flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: COLORS.primary,
        backgroundColor: isHovered ? COLORS.primary : "transparent",
        color: isHovered ? COLORS.white : COLORS.primary,
        transform: isHovered ? "translateY(-1px)" : "none",
      }}
    >
      {children}
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

const SECTION_IDS = ["home", "about", "solutions", "rnd", "industries", "contact-form"];

function Navbar() {
  const activeSection = useActiveSection(SECTION_IDS, 120);

  return (
    <div
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-all"
      style={{ borderColor: COLORS.border }}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/group-companies"
          className="flex items-center"
        >
          <div className="relative flex items-center py-1">
            <Image
              src="/logo (1).png"
              alt="VET VAC PHARMA Logo"
              width={260}
              height={85}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => {
            const targetId = item.href.replace("#", "");
            const isActive = activeSection === targetId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative text-[16px] font-bold py-1 transition-colors hover:text-[#1B4FCC] cursor-pointer"
                style={{ color: isActive ? COLORS.primary : COLORS.ink }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="vetvacUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: COLORS.primary }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact-form")}
            className="relative text-[16px] font-bold py-1 transition-colors hover:text-[#1B4FCC] cursor-pointer"
            style={{
              color: activeSection === "contact-form" ? COLORS.primary : COLORS.ink,
            }}
          >
            Contact Us
            {activeSection === "contact-form" && (
              <motion.div
                layoutId="vetvacUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: COLORS.primary }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        </nav>

        <PrimaryButton
          href="#contact-form"
          onClick={(e) => scrollToSection(e, "#contact-form")}
          className="hidden md:flex"
        >
          Get in Touch
        </PrimaryButton>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="section-animate relative py-32 lg:py-48 px-6 overflow-hidden flex items-center min-h-[600px]"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/vetvacphrama-header.png"
          alt="Veterinary laboratory and farm background"
          fill
          className="object-cover object-center pointer-events-none"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-[46px] font-black leading-[1.1] mb-5">
            <span style={{ color: COLORS.primary }}>
              Protecting Animal Health.
            </span>
            <br />
            <span style={{ color: COLORS.ink }}>
              Empowering Modern Farming.
            </span>
          </h1>
          <p
            className="text-[15px] font-medium leading-relaxed mb-8 max-w-md"
            style={{ color: COLORS.muted }}
          >
            VET VAC PHARMA is a leading veterinary healthcare company dedicated
            to developing, manufacturing, and distributing high-quality
            vaccines, pharmaceuticals, biologicals, and animal healthcare
            solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton
              href="#solutions"
              onClick={(e) => scrollToSection(e, "#solutions")}
            >
              Explore Products <ArrowRight size={15} />
            </PrimaryButton>
            <OutlineButton
              href="#contact-form"
              onClick={(e) => scrollToSection(e, "#contact-form")}
              className="bg-white/80 hover:bg-white transition-colors"
            >
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
    <section className="section-animate py-10 px-6" style={{ backgroundColor: COLORS.white }}>
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-xl border p-8"
          style={{ borderColor: COLORS.border }}
        >
          <p
            className="text-center text-[11px] font-black tracking-[0.2em] uppercase mb-7"
            style={{ color: COLORS.muted }}
          >
            Trusted By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRUSTED_BY.map(({ icon: Icon, label }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2.5"
              >
                <Icon size={30} style={{ color: COLORS.primary }} />
                <span
                  className="text-[14px] font-bold leading-snug whitespace-pre-line"
                  style={{ color: COLORS.ink }}
                >
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
    <section
      id="about"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl space-y-10">
        {/* About Main Box */}
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="ABOUT US" />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p
                className="text-[15.5px] font-medium leading-relaxed mb-6"
                style={{ color: COLORS.ink }}
              >
                With a commitment to quality, innovation, and animal welfare,
                VET VAC PHARMA provides a comprehensive range of vaccines,
                medicines, and nutritional solutions for livestock, poultry,
                pets, and aquaculture.
              </p>
              <div className="space-y-4">
                {ABOUT_HIGHLIGHTS.map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: COLORS.green }}
                    />
                    <div>
                      <p
                        className="text-[14.5px] font-extrabold"
                        style={{ color: COLORS.primary }}
                      >
                        {title}
                      </p>
                      <p className="text-[13.5px] leading-snug" style={{ color: COLORS.muted }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative w-full h-[310px] rounded-xl overflow-hidden">
                <Image
                  src="/vetvacphrama-about.png"
                  alt="Veterinary researcher in laboratory"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p
                className="text-[14.5px] font-black uppercase tracking-wide mb-4"
                style={{ color: COLORS.primary }}
              >
                COMPANY AT A GLANCE
              </p>
              <div className="grid grid-cols-3 gap-3">
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

        {/* Vision & Mission Cards with Hover Border Effect (Matching Reference Image 1) */}
        <div className="grid md:grid-cols-2 gap-6">
          {MISSION_VISION_CARDS.map(
            ({ eyebrow, title, desc, icon: Icon }) => (
              <div
                key={eyebrow}
                className="group relative bg-white rounded-lg border border-slate-200 p-7 pl-9 overflow-hidden transition-all duration-300 hover:border-[#1B4FCC] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Thick Left Accent Border Line */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0E2E7A] group-hover:bg-[#1B4FCC] transition-colors duration-300" />

                <div className="flex items-start gap-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0E2E7A] group-hover:bg-blue-50 group-hover:text-[#1B4FCC] transition-colors flex-shrink-0">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-[10.5px] font-black uppercase tracking-wider text-slate-500 mb-1">
                      {eyebrow}
                    </p>
                    <h3 className="text-[18px] font-extrabold text-[#0E2748] mb-2 group-hover:text-[#1B4FCC] transition-colors">
                      {title}
                    </h3>
                    <p className="text-[12.5px] text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-xl border p-8 lg:p-10"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="OUR SOLUTIONS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SOLUTIONS.map(({ icon: Icon, title, desc, img }, idx) => {
              const accent = idx % 2 === 0 ? COLORS.primary : COLORS.green;
              return (
                <div
                  key={title}
                  className="rounded-lg border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-lg hover:border-[#1B4FCC] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ borderColor: COLORS.border }}
                >
                  <div>
                    <div
                      className="h-1.5"
                      style={{ backgroundColor: accent }}
                    />
                    <div className="p-5 pb-0 text-center">
                      <span
                        className="text-[14px] font-black uppercase tracking-wider block mb-4"
                        style={{ color: COLORS.ink }}
                      >
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
                    <p
                      className="text-[11.5px] leading-relaxed text-center"
                      style={{ color: COLORS.muted }}
                    >
                      {desc}
                    </p>
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
    <section
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-3 gap-6">
        {/* Why Choose Us */}
        <div
          className="rounded-xl border p-7"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="WHY CHOOSE US" />
          <div className="space-y-2">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <Icon
                  size={20}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: COLORS.primary }}
                />
                <div>
                  <p
                    className="text-[14px] font-bold"
                    style={{ color: COLORS.ink }}
                  >
                    {title}
                  </p>
                  <p className="text-[13px]" style={{ color: COLORS.muted }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Served */}
        <div
          id="industries"
          className="rounded-xl border p-7 relative overflow-hidden"
          style={{ borderColor: COLORS.border }}
        >
          <div className="absolute inset-0 opacity-[0.04]">
            <Image
              src="/vetvacphrama-header.png"
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="relative">
            <SectionHeading eyebrow="INDUSTRIES WE SERVED" />
            <div className="space-y-3">
              {INDUSTRIES.map((label) => (
                <div key={label} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} style={{ color: COLORS.green }} />
                  <span
                    className="text-[14px] font-semibold"
                    style={{ color: COLORS.ink }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div
          className="rounded-xl border p-7"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="OUR PROCESS" />
          <div className="space-y-2">
            {PROCESS_STEPS.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="flex gap-3.5 items-start">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black relative"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: COLORS.white,
                  }}
                >
                  {step}
                </div>
                <div>
                  <p
                    className="text-[14px] font-bold flex items-center gap-1.5"
                    style={{ color: COLORS.ink }}
                  >
                    <Icon size={17} style={{ color: COLORS.primary }} /> {title}
                  </p>
                  <p className="text-[13px]" style={{ color: COLORS.muted }}>
                    {desc}
                  </p>
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
    <section
      id="rnd"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-6">
        <div
          className="rounded-xl border p-8 relative overflow-hidden"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="OUR COMMITMENT" />
          <p
            className="text-[13px] leading-relaxed mb-6"
            style={{ color: COLORS.muted }}
          >
            We are committed to advancing animal health through science,
            innovation, and integrity. By empowering farmers and veterinarians
            with reliable solutions, we contribute to healthier animals, safer
            food, and a better tomorrow.
          </p>
          <div className="relative w-full h-[240px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/vetvac_commitment.jpg"
              alt="Professional scientist conducting laboratory research for animal health"
              fill
              className="object-cover object-center"
              sizes="600px"
            />
          </div>
        </div>

        <div
          className="rounded-xl border p-8"
          style={{ borderColor: COLORS.border }}
        >
          <SectionHeading eyebrow="R&D AND QUALITY ASSURANCE" />
          <p
            className="text-[13px] leading-relaxed mb-6"
            style={{ color: COLORS.muted }}
          >
            Our in-house R&amp;D team works relentlessly to develop innovative
            and effective products. Every product goes through strict quality
            control to meet global standards.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {RND_POINTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.primary}12` }}
                >
                  <Icon size={26} style={{ color: COLORS.primary }} />
                </div>
                <span
                  className="text-[13px] font-bold leading-tight whitespace-pre-line"
                  style={{ color: COLORS.ink }}
                >
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
                    size={15}
                    fill="#F0B429"
                    style={{ color: "#F0B429" }}
                  />
                ))}
              </div>
              <p
                className="text-[14px] leading-relaxed mb-6 font-medium"
                style={{ color: COLORS.ink }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              {t.img && (
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2"
                  style={{ borderColor: COLORS.primary }}
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
                  className="text-[14px] font-black leading-snug"
                  style={{ color: COLORS.primary }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[12px] font-semibold"
                  style={{ color: COLORS.muted }}
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
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-blue-50 transition-colors"
                style={{ borderColor: COLORS.primary }}
              >
                <ChevronDown
                  size={16}
                  style={{
                    color: COLORS.primary,
                    transform: "rotate(90deg)",
                  }}
                />
              </button>
              <button
                onClick={() => {
                  clearInterval(timerRef.current);
                  next();
                }}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ChevronDown
                  size={16}
                  style={{ color: "#fff", transform: "rotate(-90deg)" }}
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
                      className="text-[13px] font-bold"
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
                        color: COLORS.primary,
                      }}
                    >
                      <Plus size={16} />
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <p
                      className="px-4 pb-4 text-[12.5px] leading-relaxed border-t pt-3"
                      style={{
                        color: COLORS.muted,
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
            <h2 className="text-xl lg:text-2xl font-black text-white mb-2">
              Partner with VET VAC PHARMA
            </h2>
            <p
              className="text-[13px] max-w-md"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Let&apos;s work together for healthier animals and a stronger
              agricultural future.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
            <a
              href="#contact-form"
              onClick={(e) => scrollToSection(e, "#contact-form")}
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-md text-[13px] font-bold flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: COLORS.white, color: COLORS.primary }}
            >
              Contact Us Today <ArrowRight size={15} />
            </a>
            <a
              href="tel:+923218431665"
              className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-md text-[13px] font-bold border border-white text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Phone size={15} /> 0092-321-8431665
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "General Inquiry",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "General Inquiry",
      });
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    fontSize: 13,
    border: `1.5px solid ${COLORS.border}`,
    borderRadius: 8,
    outline: "none",
    color: COLORS.ink,
    backgroundColor: "#F8FAFF",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact-form"
      className="section-animate py-16 px-6"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: COLORS.border }}
        >
          <div className="grid lg:grid-cols-5">
            {/* Left info panel */}
            <div
              className="lg:col-span-2 p-10 flex flex-col justify-between"
              style={{ backgroundColor: COLORS.primary }}
            >
              <div>
                <p
                  className="text-[11px] font-black uppercase tracking-[0.2em] mb-3"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  GET IN TOUCH
                </p>
                <h2 className="text-2xl font-black text-white mb-4 leading-snug">
                  Let&apos;s Work
                  <br />
                  Together
                </h2>
                <p
                  className="text-[13px] leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Have questions about our products or services? Our team is
                  ready to help you find the right veterinary solutions.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Our Office",
                      value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
                    },
                    { icon: Phone, label: "Call Us", value: "0092-42-38924737" },
                    { icon: Phone, label: "WhatsApp", value: "0092-304-7527498 | 0092-321-8431665" },
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "info@roysons.org | support@roysons.org",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <Icon size={15} color="white" />
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-wide"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {label}
                        </p>
                        <p className="text-[13px] text-white font-medium leading-snug">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  >
                    <Icon size={15} color="white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right form panel */}
            <div className="lg:col-span-3 p-10 bg-white">
              <p
                className="text-[11px] font-black uppercase tracking-[0.18em] mb-1"
                style={{ color: COLORS.primary }}
              >
                CONTACT US
              </p>
              <h3
                className="text-xl font-black mb-6"
                style={{ color: COLORS.ink }}
              >
                Send Us a Message
              </h3>

              {status === "sent" ? (
                <div
                  className="flex flex-col items-center justify-center gap-4 py-16 rounded-xl"
                  style={{ backgroundColor: COLORS.lightBg }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.green}20` }}
                  >
                    <CheckCircle2 size={28} style={{ color: COLORS.green }} />
                  </div>
                  <p
                    className="text-[15px] font-black"
                    style={{ color: COLORS.ink }}
                  >
                    Message Sent!
                  </p>
                  <p className="text-[13px]" style={{ color: COLORS.muted }}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-2 px-5 py-2 rounded-lg text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[11.5px] font-bold mb-1.5"
                        style={{ color: COLORS.muted }}
                      >
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Ahmed Khan"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[11.5px] font-bold mb-1.5"
                        style={{ color: COLORS.muted }}
                      >
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ahmed@example.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[11.5px] font-bold mb-1.5"
                        style={{ color: COLORS.muted }}
                      >
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 XXX XXXXXXX"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[11.5px] font-bold mb-1.5"
                        style={{ color: COLORS.muted }}
                      >
                        Service *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        style={inputStyle}
                        className="w-full"
                      >
                        {SOLUTIONS.map(({ title }) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[11.5px] font-bold mb-1.5"
                      style={{ color: COLORS.muted }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-lg text-[14px] font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {status === "sending" ? (
                      <>
                        <span
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid rgba(255,255,255,0.4)",
                            borderTopColor: "#fff",
                            borderRadius: "50%",
                            display: "inline-block",
                            animation: "spin 0.7s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, textarea:focus, select:focus {
          border-color: #1B4FCC !important;
          background-color: #fff !important;
          box-shadow: 0 0 0 3px rgba(27,79,204,0.10);
        }
      `}</style>
    </section>
  );
}

// ─── Google Map Section ──────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      {/* Floating Address Header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-screen-xl pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-3.5 rounded-2xl border bg-white/95 backdrop-blur-md px-6 py-4 shadow-xl max-w-3xl mx-auto"
          style={{ borderColor: COLORS.border }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${COLORS.primary}15` }}
          >
            <MapPin size={20} color={COLORS.primary} />
          </div>
          <div>
            <p
              className="text-[11px] font-black uppercase tracking-widest mb-0.5"
              style={{ color: COLORS.primary }}
            >
              Find Us
            </p>
            <p
              className="text-xs sm:text-sm font-semibold leading-snug"
              style={{ color: COLORS.ink }}
            >
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore
            </p>
          </div>
        </div>
      </div>

      {/* Map Embed - Full Width */}
      <div className="w-full h-[500px] md:h-[550px] lg:h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de60e29e3b%3A0x9a9d95ad0e1c7d50!2sRehman%20Centre-2%2C%20Ring%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VET VAC PHARMA Office Location"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-14 px-6 mt-4"
      style={{ backgroundColor: COLORS.footerBg }}
    >
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10">
        <div className="lg:col-span-2 max-w-xs">
          <div className="flex items-center mb-4">
            <div className="bg-white px-4 py-2 rounded-xl flex items-center justify-center shadow-sm">
              <Image
                src="/logo (1).png"
                alt="VET VAC PHARMA Logo"
                width={240}
                height={75}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
          </div>
          <p
            className="text-[11.5px] leading-relaxed mb-5"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            Delivering trusted veterinary healthcare solutions to improve animal
            health, productivity, and quality of life.
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
            <h5 className="text-[11px] font-black uppercase tracking-[0.14em] mb-4 text-white">
              {heading}
            </h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[11.5px] hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h5 className="text-[11px] font-black uppercase tracking-[0.14em] mb-4 text-white">
            Contact Us
          </h5>
          <div className="space-y-3">
            <p
              className="text-[11.5px] flex items-start gap-2.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <MapPin
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6FA8F0" }}
              />
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
            </p>
            <p
              className="text-[11.5px] flex items-start gap-2.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Phone
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6FA8F0" }}
              />
              0092-42-38924737
            </p>
            <p
              className="text-[11.5px] flex items-start gap-2.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Phone
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6FA8F0" }}
              />
              WhatsApp: 0092-304-7527498 | 0092-321-8431665
            </p>
            <p
              className="text-[11.5px] flex items-start gap-2.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Mail
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6FA8F0" }}
              />
              info@roysons.org
            </p>
            <p
              className="text-[11.5px] flex items-start gap-2.5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <Mail
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#6FA8F0" }}
              />
              support@roysons.org
            </p>
          </div>
        </div>
      </div>

      <div
        className="mx-auto max-w-screen-xl mt-10 pt-6 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p
          className="text-[11px]"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
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
      document.body.classList.remove("roys-roys-theme");
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: COLORS.white, color: COLORS.ink }}
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
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <SolutionsSection />
      <WhyIndustriesProcessSection />
      <CommitmentRndSection />
      <TestimonialsFaqSection />
      <CtaSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}