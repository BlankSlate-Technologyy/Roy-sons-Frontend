"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight, Award, Briefcase, TrendingUp, Handshake, Leaf, Target,
  Settings, ShieldCheck, CheckCircle2, MapPin, Phone, MessageCircle, Mail,
  Plus, Minus, Send, Factory, Snowflake, Package, Boxes, FlaskConical,
  Milk, Wheat, Croissant, GlassWater, Beaker, Refrigerator, Sprout, ScanLine,
  Store, ShoppingCart, Building2, UtensilsCrossed, Globe2, Landmark,
  GraduationCap, HeartPulse, PlaneTakeoff, Truck, Search, Compass, Users2,
} from "lucide-react";

// ── Color System matching Walton & Morris Foods Logo ──
const COLORS = {
  green:        "#1E6B43", // Official Logo Forest Green (Wheat & "W" emblem)
  greenDark:    "#134A2D",
  ochre:        "#D89C46", // Official Logo Golden Harvest Ochre (Gear & Leaf)
  ochreHover:   "#BC8330",
  navy:         "#0B1B36", // Official Logo Deep Navy Blue (Typography)
  navyDark:     "#061022",
  white:        "#FFFFFF",
  bgLight:      "#F4F8F5", // Light green-tinted background
  border:       "#D3E4DB",
  textMuted:    "#3D4E44",
  textLight:    "#6B7D72",
};

const HERO = {
  badge: "Leading Food Manufacturing & Processing Enterprise",
  headline: "Walton & Morris Foods",
  subline:
    "Producing quality food, nourishing every generation. Walton & Morris Foods specializes in modern food processing, frozen foods, packaged consumer goods, dairy, ready-to-eat meals, and private label manufacturing engineered to global quality standards.",
  ctaPrimary: "Explore Products",
  ctaSecondary: "Talk To Our Team",
};

const STATS = [
  { value: 20,     suffix: "+",          label: "Years of Manufacturing Excellence" },
  { value: 400,    suffix: "+",          label: "Food Products Manufactured" },
  { value: 120000, suffix: " Tons",      label: "Annual Production Capacity" },
  { value: 300,    suffix: "+",          label: "Skilled Food Technologists" },
  { value: 99.8,   suffix: "%",          label: "Quality & Safety Pass Rate" },
];

const SERVICES = [
  { icon: Factory,       title: "Modern Food Processing",      desc: "High-volume processing of agricultural produce, grains, pulses, and dairy with automated processing lines." },
  { icon: Snowflake,     title: "Frozen Food Production",      desc: "Flash-frozen vegetables, ready-to-cook snacks, meats, and convenience items using IQF technology." },
  { icon: Package,       title: "Packaged Consumer Goods",     desc: "Retail-ready packaged foods produced under strict hygiene protocols and export-grade packaging." },
  { icon: Boxes,         title: "Private Label Manufacturing",  desc: "Turnkey private label production for supermarkets, retail brands, and international distributors." },
  { icon: FlaskConical,  title: "Food R&D & Product Innovation",desc: "Culinary R&D laboratory creating custom recipes, flavor profiles, and shelf-life extension." },
  { icon: ShieldCheck,   title: "Quality Control & Assurance", desc: "HACCP and ISO-22000 certified food safety testing, traceability, and batch inspections." },
];

const PRODUCTS = [
  { icon: Snowflake,      title: "Frozen Foods & Snacks",      desc: "Flash-frozen vegetables, fries, and ready-to-cook appetizers." },
  { icon: UtensilsCrossed,title: "Ready-to-Eat Meals",        desc: "Chef-curated ready meals in retort and fresh packaging." },
  { icon: Milk,           title: "Dairy Products",            desc: "UHT milk, cheese, butter, cream, and dairy ingredients." },
  { icon: Croissant,      title: "Bakery & Confectionery",    desc: "Biscuits, baked goods, breads, and confectionery lines." },
  { icon: GlassWater,     title: "Beverages & Juices",        desc: "Natural fruit juices, flavored drinks, and liquid refreshments." },
  { icon: Beaker,         title: "Sauces & Condiments",       desc: "Ketchups, dressings, spices, and culinary seasonings." },
];

const WHY_CHOOSE = [
  { title: "Premium Quality Standards", desc: "Using farm-fresh raw materials processed under strict HACCP and ISO certifications." },
  { title: "Automated Production Lines",desc: "State-of-the-art European processing equipment ensuring consistency and high output." },
  { title: "Cold Chain Logistics",      desc: "Temperature-controlled warehousing and refrigerated transport for zero spoilage." },
  { title: "Flexible Private Labeling", desc: "Tailored recipe formulation, packaging design, and private label manufacturing." },
  { title: "R&D Culinary Expertise",   desc: "Dedicated food scientists and master chefs developing market-trending products." },
  { title: "Global Export Reach",       desc: "Exporting food products to over 25 countries across Europe, Middle East, and Asia." },
];

const INDUSTRIES = [
  "Retail Supermarkets",
  "FMCG Brands",
  "Hospitality & Hotels",
  "Restaurants & Fast Food",
  "Food Service Distributors",
  "Export Importers",
  "Wholesale Buyers",
  "Government Food Reserves",
  "Educational Catering",
  "Healthcare Dining",
];

const PROCESS = [
  { step: "01", title: "Ingredient Sourcing",    desc: "Selecting farm-fresh agricultural produce and quality-tested ingredients." },
  { step: "02", title: "Lab Inspection",         desc: "Rigorous testing for purity, moisture, micro-biology, and safety." },
  { step: "03", title: "Automated Processing",   desc: "Washing, sorting, cooking, processing, and flash freezing." },
  { step: "04", title: "Hygienic Packaging",     desc: "Sealing in food-grade, MAP (Modified Atmosphere), or vacuum packaging." },
  { step: "05", title: "Cold Storage",           desc: "Holding finished goods in climate-controlled, automated warehouses." },
  { step: "06", title: "Distribution",           desc: "Refrigerated transport and export dispatch with full batch tracking." },
];

const FEATURED_PROJECTS = [
  { title: "IQF Frozen Food Processing Plant",  desc: "High-capacity flash freezing facility for fruits and vegetables.", image: "/project-industrial.png" },
  { title: "Automated Dairy & Beverage Line",   desc: "High-speed UHT milk bottling and juice packaging facility.", image: "/project-infrastructure.png" },
  { title: "Private Label Snack Manufacturing", desc: "Turnkey snack production for international supermarket chains.", image: "/project-commercial.png" },
  { title: "Centralized Cold Storage Hub",     desc: "10,000-ton capacity refrigerated distribution warehouse.", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  { name: "Supermarket Procurement Director", role: "Retail Supermarket Chain", quote: "Walton & Morris Foods has been our primary private label manufacturer for 8 years. Their product consistency and packaging quality are unmatched." },
  { name: "Food Import Distributor", role: "Global Trade Group", quote: "Flawless cold chain logistics, full regulatory compliance, and delicious frozen products that sell out fast." },
  { name: "FMCG Brand Manager", role: "Consumer Goods Company", quote: "Their R&D team helped us formulate and launch a new ready-to-eat meal line in record time." },
];

const FAQS = [
  { q: "What product categories does Walton & Morris Foods manufacture?", a: "We manufacture frozen foods, ready-to-eat meals, dairy products, bakery items, beverages, sauces, condiments, and packaged consumer goods." },
  { q: "Do you offer private label manufacturing services?", a: "Yes. We offer complete contract manufacturing and private labeling including custom recipe formulation, packaging design, and batch production." },
  { q: "What food safety certifications do your facilities hold?", a: "Our production plants are certified under ISO 22000, HACCP, Halal, and international food safety management systems." },
  { q: "Do you export products internationally?", a: "Yes. We export packaged and frozen food products to distributors, retail chains, and food service partners worldwide." },
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
      className="rounded-[24px] border border-[#D3E4DB] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1E6B43]"
    >
      <p className="text-3xl lg:text-4xl font-black text-[#1E6B43] mb-2 tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs lg:text-sm font-semibold leading-relaxed text-[#3D4E44]">{label}</p>
    </div>
  );
}

// ── Section Title ──
function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-black text-[#D89C46] mb-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D89C46]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1E6B43] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base leading-relaxed text-[#3D4E44]">{description}</p>
      )}
    </div>
  );
}

// ── Service Card with hover ──
function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D3E4DB] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1E6B43] hover:bg-[#F4F8F5]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F2EC] text-[#1E6B43] mb-6 transition-all duration-300 group-hover:bg-[#1E6B43] group-hover:text-white group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-[#1E6B43] mb-3 transition-colors duration-300 group-hover:text-[#D89C46]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#3D4E44]">{desc}</p>
    </div>
  );
}

// ── Feature Card ──
function FeatureCard({ title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D3E4DB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#D89C46]">
      <div className="text-[#D89C46] text-3xl font-black mb-3 group-hover:scale-110 transition-transform">•</div>
      <h3 className="text-lg font-black text-[#1E6B43] mb-3 transition-colors duration-300 group-hover:text-[#D89C46]">{title}</h3>
      <p className="text-sm text-[#3D4E44] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Process Card ──
function ProcessStepCard({ step, title, desc }) {
  return (
    <div className="group rounded-[24px] border border-[#D3E4DB] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1E6B43]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1E6B43] text-white font-black group-hover:bg-[#D89C46] transition-all">{step}</div>
        <h4 className="text-base font-bold text-[#1E6B43]">{title}</h4>
      </div>
      <p className="text-sm text-[#3D4E44] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Collapsible FAQ Item Component ──
function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] border border-[#D3E4DB] bg-white transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h4 className="text-base font-bold text-[#1E6B43] transition-colors group-hover:text-[#D89C46]">{question}</h4>
        <div className="w-8 h-8 rounded-full bg-[#E6F2EC] flex items-center justify-center text-[#1E6B43] flex-shrink-0 transition-transform duration-300 group-hover:bg-[#1E6B43] group-hover:text-white">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 border-t border-[#E6F2EC]">
          <p className="mt-3 text-sm leading-relaxed text-[#3D4E44]">{answer}</p>
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
      <div className="rounded-[28px] border border-[#D3E4DB] bg-white p-8 md:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#E6F2EC] text-[#1E6B43] mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-[#1E6B43] mb-3">Thank You!</h3>
        <p className="text-sm leading-relaxed text-[#3D4E44] max-w-md mx-auto mb-6">
          Thank you, {form.name}. Your inquiry has been received. Our food manufacturing team will contact you shortly.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full bg-[#1E6B43] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#D89C46]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-[#D3E4DB] bg-white p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-black text-[#1E6B43] mb-6">Request A Manufacturing / Supply Quote</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4E44] mb-2">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#D3E4DB] bg-[#F8FAF9] px-4 py-3.5 text-sm text-[#1E6B43] outline-none transition-all focus:border-[#1E6B43] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4E44] mb-2">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#D3E4DB] bg-[#F8FAF9] px-4 py-3.5 text-sm text-[#1E6B43] outline-none transition-all focus:border-[#1E6B43] focus:bg-white"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4E44] mb-2">Phone Number</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full rounded-xl border border-[#D3E4DB] bg-[#F8FAF9] px-4 py-3.5 text-sm text-[#1E6B43] outline-none transition-all focus:border-[#1E6B43] focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4E44] mb-2">Service Of Interest</label>
          <input
            type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="Private Label / Frozen Foods / Bulk Supply"
            className="w-full rounded-xl border border-[#D3E4DB] bg-[#F8FAF9] px-4 py-3.5 text-sm text-[#1E6B43] outline-none transition-all focus:border-[#1E6B43] focus:bg-white"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#3D4E44] mb-2">Product & Volume Details *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={4}
          placeholder="Tell us about your product requirements, volume, or private label needs..."
          className="w-full rounded-xl border border-[#D3E4DB] bg-[#F8FAF9] px-4 py-3.5 text-sm text-[#1E6B43] outline-none transition-all resize-none focus:border-[#1E6B43] focus:bg-white"
        />
      </div>

      {error && <p className="text-xs font-bold text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1E6B43] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#D89C46] hover:scale-[1.02] hover:shadow-lg active:scale-95"
      >
        Submit Request <Send size={15} />
      </button>
    </form>
  );
}

// ── Main Page Component ──
export default function WaltonMirrorFoodPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme", "waltonfood-theme");
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = COLORS.green;
    return () => {
      document.body.classList.remove("roys-roys-theme", "waltonfood-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <main className="roys-roys-theme waltonfood-theme font-sans bg-white text-[#1E6B43] selection:bg-[#1E6B43] selection:text-white">
      {/* Styles to bypass global dark override from globals.css */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #1E6B43 !important;
          color-scheme: light !important;
        }
        .waltonfood-theme h1,
        .waltonfood-theme h2,
        .waltonfood-theme h3,
        .waltonfood-theme h4,
        .waltonfood-theme h5,
        .waltonfood-theme h6,
        .waltonfood-theme p,
        .waltonfood-theme span,
        .waltonfood-theme li,
        .waltonfood-theme a,
        .waltonfood-theme label,
        .waltonfood-theme button,
        .waltonfood-theme input,
        .waltonfood-theme textarea {
          -webkit-text-fill-color: initial !important;
          background-image: none !important;
        }
      `}</style>

      <HeaderNavbar activeRoute="/group-companies" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F4F8F5] border-b border-[#D3E4DB]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,107,67,0.12),_transparent_55%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-12 lg:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#B3D6C4] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#1E6B43] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D89C46]" />
                {HERO.badge}
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#1E6B43]">
                Walton &amp; Morris <span className="text-[#D89C46]">Foods</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3D4E44]">
                {HERO.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E6B43] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-[#D89C46] hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E6B43] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#1E6B43] transition-all duration-300 hover:bg-[#1E6B43] hover:text-white hover:scale-[1.02] active:scale-95"
                >
                  {HERO.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden border-2 border-[#D3E4DB] shadow-xl bg-white p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-24 h-24 rounded-3xl bg-[#E6F2EC] text-[#1E6B43] flex items-center justify-center mb-6 shadow-inner">
                <Wheat size={48} className="text-[#1E6B43]" />
              </div>
              <h3 className="text-2xl font-black text-[#0B1B36] tracking-wider uppercase">WALTON &amp; MORRIS</h3>
              <p className="text-xs font-bold tracking-[0.3em] text-[#D89C46] mt-1">FOODS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white px-6 py-14 lg:py-20 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <StatCounterCard key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="bg-[#F4F8F5] px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Capabilities"
            title="Comprehensive Food Processing & Manufacturing"
            description="From high-speed processing and frozen foods to private label manufacturing and food safety testing."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Product Portfolio"
            title="Diverse Quality Food Products"
            description="Manufactured under strict HACCP and ISO-22000 quality standards for retail and food service."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((item, index) => (
              <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F8F5] px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Serving Global Retail & Food Networks" description="Supplying supermarkets, hotels, restaurants, FMCG companies, and international distributors." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#D3E4DB] bg-white p-5 text-sm font-semibold text-[#1E6B43] text-center transition-all duration-300 hover:border-[#1E6B43] hover:bg-[#1E6B43] hover:text-white hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Walton & Morris Foods Section */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Your Trusted Food Manufacturing Partner"
            description="Combining automated production technology, culinary R&D, and certified food safety."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F4F8F5] px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Process"
            title="Disciplined Farm-to-Fork Manufacturing Workflow"
            description="From raw ingredient inspection and automated processing through flash freezing, packaging, and cold chain dispatch."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessStepCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="World-Class Processing Infrastructure"
            description="Selected highlights of automated food processing plants and cold chain distribution hubs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-[#D3E4DB] bg-[#F4F8F5] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#1E6B43]">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#1E6B43] group-hover:text-[#D89C46] transition-colors mb-2">{project.title}</h3>
                  <p className="text-xs text-[#3D4E44] leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4F8F5] px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Retail & Trade Partners Say"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#D3E4DB] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#1E6B43]">
                <p className="text-base italic leading-relaxed text-[#3D4E44] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#1E6B43]">{item.name}</p>
                <p className="text-xs text-[#D89C46] font-bold mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#D3E4DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Common Questions"
            description="Answers to common questions regarding our food processing, private label manufacturing, and export services."
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
      <section id="contact" className="bg-[#F4F8F5] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Contact Walton & Morris Foods"
            description="Discuss your food manufacturing, private label, frozen food supply, or export requirements with our team."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 rounded-[28px] bg-[#1E6B43] p-8 md:p-10 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-black text-[#D89C46]">Contact Details</span>
                <h3 className="mt-3 text-2xl font-black text-white mb-6">Talk To Our Team</h3>
                <p className="text-sm leading-relaxed text-[#D3E4DB] mb-8">
                  Our food manufacturing sales team responds to every inquiry and quote request within one business day.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D89C46]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D89C46] mb-1">Our Office</p>
                      <p className="text-white leading-relaxed">{CONTACT_INFO.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D89C46]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D89C46] mb-1">Call Us</p>
                      <p className="text-white font-bold">Phone: {CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D89C46]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D89C46] mb-1">WhatsApp</p>
                      {CONTACT_INFO.whatsapp.map((num) => (
                        <p key={num} className="text-white font-semibold">{num}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D89C46]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-[#D89C46] mb-1">Email Us</p>
                      {CONTACT_INFO.emails.map((mail) => (
                        <p key={mail} className="text-white font-medium">{mail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 text-xs text-[#D3E4DB]">
                &copy; {new Date().getFullYear()} Walton &amp; Morris Foods. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}