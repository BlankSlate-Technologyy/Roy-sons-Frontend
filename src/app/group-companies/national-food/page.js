"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight, Award, Briefcase, TrendingUp, Handshake, Leaf, Target,
  Settings, CheckCircle2, MapPin, Phone, MessageCircle, Mail, Plus, Minus,
  Send, Wheat, Sprout, Droplet, Flame, Package, Carrot, Factory, Globe2,
  ShieldCheck, Truck, Store, ShoppingCart, Building2, Hotel, UtensilsCrossed,
  Boxes, Search, FlaskConical, Users2,
} from "lucide-react";

// ── Color System matching National Food Services (NFS) Logo ──
const COLORS = {
  maroon:       "#6B0F24", // Official NFS Shield Deep Maroon Burgundy
  maroonDark:   "#4F0918",
  crimson:      "#8C1832", // Official NFS Crimson Accent
  crimsonHover: "#A81E3D",
  charcoal:     "#2D3436", // Charcoal Gray for body text
  white:        "#FFFFFF",
  bgLight:      "#FAF5F6", // Soft cream/maroon-tinted background
  border:       "#EAD6DB",
  textMuted:    "#4E5456",
  textLight:    "#70777A",
};

const HERO = {
  badge: "Premier Institutional Catering & Food Supply Services",
  headline: "National Food Services (NFS)",
  subline:
    "Delivering nutritious, high-quality, and hygienic food solutions for corporate, industrial, healthcare, educational, and government institutions. NFS combines culinary excellence, strict food safety standards, and efficient supply chain management.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Request Catering Quote",
};

const STATS = [
  { value: 25,      suffix: "+",          label: "Years of Culinary & Food Excellence" },
  { value: 500,     suffix: "+",          label: "Institutional Catering Contracts" },
  { value: 1000000, suffix: "+",          label: "Nutritious Meals Served Daily" },
  { value: 350,     suffix: "+",          label: "Corporate & Hospital Clients" },
  { value: 99.9,    suffix: "%",          label: "Food Safety & Quality Compliance" },
];

const SERVICES = [
  { icon: UtensilsCrossed, title: "Institutional & Corporate Catering", desc: "Customized daily meal programs and cafeteria management for corporate offices, factories, and institutions." },
  { icon: Hotel,           title: "Hospital & Healthcare Nutrition",  desc: "Specialized, dietitian-approved meal preparation for hospital patients, staff, and medical facilities." },
  { icon: Building2,       title: "Educational Food Services",         desc: "Hygienic, balanced, and nutritious dining services for schools, colleges, and university campuses." },
  { icon: Truck,           title: "Food Supply Chain & Distribution",   desc: "Reliable logistics, temperature-controlled cold chain, and bulk food distribution for institutions." },
  { icon: ShieldCheck,     title: "Quality Control & Hygiene Audits",   desc: "HACCP-certified food safety protocols, laboratory testing, and routine kitchen hygiene inspections." },
  { icon: Boxes,           title: "Bulk Ingredient Procurement",        desc: "Sourcing premium agricultural commodities, grains, pulses, dairy, and fresh produce at scale." },
];

const PRODUCTS = [
  { icon: Wheat,           title: "Grains & Cereals",         desc: "High-grade wheat, basmati rice, pulses, and grain flours." },
  { icon: Carrot,          title: "Fresh Agricultural Produce",desc: "Farm-fresh organic vegetables, fruits, and greens." },
  { icon: UtensilsCrossed, title: "Prepared Meals & Catering", desc: "Hygienically packaged meals and buffet setups." },
  { icon: Droplet,         title: "Dairy & Edible Oils",       desc: "Pure pasteurized milk, butter, ghee, and cooking oils." },
  { icon: Package,         title: "Processed Ingredients",    desc: "Spices, sauces, condiments, and food processing supplies." },
  { icon: ShieldCheck,     title: "Specialized Diets",        desc: "Low-sodium, diabetic, and clinical nutrition meal plans." },
];

const WHY_CHOOSE = [
  { title: "HACCP Food Safety Standards", desc: "Rigorous hygiene, temperature monitoring, and food safety protocols at every stage." },
  { title: "Culinary & Nutritional Excellence", desc: "Professional chefs and certified nutritionists creating delicious, balanced menus." },
  { title: "Uninterrupted Supply Chain", desc: "Dedicated cold chain fleet and strategic warehouses ensuring 100% on-time delivery." },
  { title: "Scalable Capacity",          desc: "Capability to prepare and serve over 1 million fresh meals daily across regions." },
  { title: "Customized Institutional Plans", desc: "Flexible dining agreements tailored to budgets, shift schedules, and diets." },
  { title: "Sustainable Food Sourcing", desc: "Ethical farm-to-table procurement supporting local agriculture and reducing waste." },
];

const INDUSTRIES = [
  "Corporate Headquarters",
  "Hospitals & Healthcare",
  "Manufacturing Plants",
  "Universities & Colleges",
  "Government Institutions",
  "Industrial Complexes",
  "Hotels & Hospitality",
  "Event & Convention Hubs",
  "Aviation & Defense Catering",
  "Commercial Off-Sites",
];

const PROCESS = [
  { step: "01", title: "Needs Assessment",         desc: "Evaluating headcount, dietary requirements, shift schedules, and budget." },
  { step: "02", title: "Menu Design & Nutrition",  desc: "Crafting balanced, diverse menus planned by certified nutritionists." },
  { step: "03", title: "Fresh Sourcing",           desc: "Procuring daily fresh produce and quality-tested ingredients." },
  { step: "04", title: "Hygienic Cooking",          desc: "Preparing meals in HACCP-certified, state-of-the-art kitchens." },
  { step: "05", title: "Hot & Cold Delivery",       desc: "Transporting meals in insulated, temperature-monitored vehicles." },
  { step: "06", title: "On-Site Dining Service",   desc: "Professional cafeteria management, serving, and clean-up." },
];

const FEATURED_PROJECTS = [
  { title: "Corporate Campus Cafeteria",       desc: "Serving 15,000 fresh daily meals for a multinational corporate campus.", image: "/project-commercial.png" },
  { title: "Hospital Patient Nutrition Network",desc: "Managing specialized dietary meal delivery across a 600-bed hospital network.", image: "/project-infrastructure.png" },
  { title: "Industrial Plant Dining Facility", desc: "24/7 multi-shift catering for an industrial manufacturing workforce.", image: "/project-industrial.png" },
  { title: "University Dining Hall Operations",desc: "Modern campus food court and dining hall management for 10,000 students.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  { name: "Corporate HR & Admin Lead", role: "Multinational Enterprise", quote: "National Food Services has transformed our employee dining experience with exceptional food quality, variety, and flawless hygiene." },
  { name: "Hospital Operations Director", role: "Medical Center Network", quote: "Their specialized clinical diet preparation and strict food safety compliance make NFS an invaluable partner." },
  { name: "Industrial Plant Head", role: "Manufacturing Facility", quote: "Reliable 24/7 meal delivery for our shift workers. Great taste, hygienic packaging, and zero downtime." },
];

const FAQS = [
  { q: "What services does National Food Services (NFS) provide?", a: "We provide institutional catering, corporate dining management, hospital patient nutrition, educational food services, bulk ingredient supply, and cold chain food distribution." },
  { q: "What food safety certifications do you hold?", a: "Our kitchens operate under strict HACCP and ISO food safety management protocols with routine lab testing and health inspections." },
  { q: "Can you cater to multi-shift industrial facilities?", a: "Yes. We operate 24/7 to provide fresh breakfast, lunch, dinner, and late-night shift meals tailored to factory schedules." },
  { q: "Do you offer customized menu planning?", a: "Absolutely. Our nutritionists and executive chefs design customized menus around your institution's preferences, health guidelines, and budget." },
];

// Exact contact information requested by user
const CONTACT_INFO = {
  office: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
  phone: "0092-42-38924737",
  whatsapp: ["0092-304-7527498", "0092-321-8431665"],
  emails: ["info@roysons.org", "support@roysons.org"],
};

// ── Animated Counter Component ──
function StatCounterCard({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let rafId;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div
      ref={cardRef}
      className="rounded-[24px] border border-[#EAD6DB] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6B0F24]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#6B0F24] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#4E5456]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#8C1832] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8C1832]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#6B0F24] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#4E5456]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#EAD6DB] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6B0F24] hover:bg-[#FAF5F6]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F5E6E9] text-[#6B0F24] mb-6 transition-all duration-300 group-hover:bg-[#6B0F24] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#6B0F24] mb-3 transition-colors duration-300 group-hover:text-[#8C1832]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#4E5456]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#EAD6DB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#8C1832]">
      <div className="text-[#8C1832] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#6B0F24] mb-3 transition-colors duration-300 group-hover:text-[#8C1832]">{title}</h3>
      <p className="text-sm text-[#4E5456] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#EAD6DB] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6B0F24]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6B0F24] text-white font-black group-hover:bg-[#8C1832] transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#6B0F24]">{title}</h4>
      </div>
      <p className="text-sm text-[#4E5456] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#EAD6DB] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#6B0F24] transition-colors group-hover:text-[#8C1832]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#F5E6E9] flex items-center justify-center text-[#6B0F24] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#6B0F24] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#F5E6E9]">
          <p className="mt-3 text-sm leading-relaxed text-[#4E5456]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Contact Form Component ──
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#EAD6DB] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#F5E6E9] text-[#6B0F24] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#6B0F24] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#4E5456] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your catering inquiry has been received. Our food services team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#6B0F24] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#8C1832]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#EAD6DB] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#6B0F24] mb-6">Request A Catering / Supply Quote</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4E5456] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all focus:border-[#6B0F24] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4E5456] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all focus:border-[#6B0F24] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4E5456] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all focus:border-[#6B0F24] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#4E5456] mb-2">Service Required</label>
          <input
            type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="Corporate Catering / Hospital Meals / Commodity"
            className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all focus:border-[#6B0F24] focus:bg-white"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#4E5456] mb-2">Requirement Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your headcount, location, shift schedule, or supply needs..."
          className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all resize-none focus:border-[#6B0F24] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#6B0F24] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#8C1832] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Request <Send size={15} />
      </button>
    </form>
  );
}

// ── Main Page Component ──
export default function NationalFoodPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "nfs-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.maroon;
    return () => {
      document.body.classList.remove("roys-roys-theme", "nfs-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme nfs-theme font-sans bg-white text-[#6B0F24] selection:bg-[#6B0F24] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #6B0F24 !important;
          color-scheme: light !important;
        }
        .nfs-theme h1,
        .nfs-theme h2,
        .nfs-theme h3,
        .nfs-theme h4,
        .nfs-theme h5,
        .nfs-theme h6,
        .nfs-theme p,
        .nfs-theme span,
        .nfs-theme li,
        .nfs-theme a,
        .nfs-theme label,
        .nfs-theme button,
        .nfs-theme input,
        .nfs-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <HeaderNavbar activeRoute="/group-companies" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FAF5F6] border-b border-[#EAD6DB]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,15,36,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#DDB6C0] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#6B0F24] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8C1832]" />
                {HERO.badge}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#6B0F24]">
                National Food Services <span className="text-[#8C1832]">(NFS)</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4E5456]">
                {HERO.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6B0F24] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#8C1832] hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#6B0F24] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#6B0F24] transition-all duration-300 hover:bg-[#6B0F24] hover:text-white hover:scale-[1.02] active:scale-95"
                >
                  {HERO.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden border-2 border-[#EAD6DB] shadow-xl bg-white p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-24 h-24 rounded-3xl bg-[#F5E6E9] text-[#6B0F24] flex items-center justify-center mb-6 shadow-inner">
                <UtensilsCrossed size={48} className="text-[#6B0F24]" />
              </div>
              <h3 className="text-2xl font-black text-[#6B0F24] tracking-wider uppercase">NATIONAL FOOD SERVICES</h3>
              <p className="text-xs font-bold tracking-[0.3em] text-[#8C1832] mt-1">— NFS —</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#FAF5F6] px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Comprehensive Institutional Food & Catering Solutions"
            description="From corporate cafeterias and hospital patient dining to bulk food distribution and HACCP quality audits."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Products & Commodity Sourcing Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Products & Ingredients"
            title="Farm-Fresh Ingredients & Bulk Food Supplies"
            description="Procuring premium grains, fresh vegetables, dairy, edible oils, and food products for institutional dining."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#FAF5F6] px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Sectors We Support With Hygienic Dining" description="Serving corporate campuses, hospitals, universities, manufacturing plants, and government bodies." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#EAD6DB] bg-white p-5 text-sm font-semibold text-[#6B0F24] text-center transition-all duration-300 hover:border-[#6B0F24] hover:bg-[#6B0F24] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NFS Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Your Trusted Partner In Institutional Dining"
            description="Combining HACCP food safety compliance, certified nutritionists, and robust cold chain logistics."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#FAF5F6] px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Culinary & Service Workflow"
            description="From dietary assessment and menu design through hygienic preparation, insulated delivery, and serving."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Delivering Food Excellence At Scale"
            description="Selected highlights of corporate cafeterias, hospital nutrition, and multi-shift industrial catering."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#EAD6DB] bg-[#FAF5F6] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#6B0F24]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#6B0F24] group-hover:text-[#8C1832] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#4E5456] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FAF5F6] px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Dining Partners Say"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#EAD6DB] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#6B0F24]">
                <p className="text-base italic leading-relaxed text-[#4E5456] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#6B0F24]">{item.name}</p>
                <p className="text-xs text-[#8C1832] font-bold mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions"
            description="Answers to common questions regarding our institutional catering, food safety, and dining contracts."
            center
          />
          <div className="mt-12 grid gap-4 max-w-4xl mx-auto">
            {FAQS.map((item, index) => (
              <FaqAccordionItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section with User Information */}
      <section id="contact" className="bg-[#FAF5F6] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact National Food Services (NFS)"
            description="Discuss your corporate catering, hospital food management, or bulk supply requirements with our team."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#6B0F24] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#FAF5F6]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#EAD6DB] mb-8">
                  Our institutional food services team responds to every catering inquiry within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/80 mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#EAD6DB]">
                &copy; {new Date().getFullYear()} National Food Services (NFS). All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}