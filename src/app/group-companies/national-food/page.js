"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Award, Briefcase, TrendingUp, Handshake, Leaf, Target,
  Settings, CheckCircle2, MapPin, Phone, MessageCircle, Mail, Plus, Minus,
  Send, Wheat, Sprout, Droplet, Flame, Package, Carrot, Factory, Globe2,
  ShieldCheck, Truck, Store, ShoppingCart, Building2, Hotel, UtensilsCrossed,
  Boxes, Search, FlaskConical, Users2, Menu, X, ChevronLeft, ChevronRight,
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

const MAP_SRC = "https://www.google.com/maps?q=1st%20Floor%20Rehman%20Centre-2%20Lahore&z=15&output=embed";

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

// ── Testimonial Slider Component ──
function TestimonialSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="rounded-[28px] border border-[#EAD6DB] bg-[#FAF5F6] p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8C1832]">Testimonials</p>
          <h3 className="mt-2 text-2xl font-black text-[#6B0F24]">What Our Partners Say</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAD6DB] bg-white text-[#6B0F24] transition-all hover:border-[#6B0F24] hover:text-[#8C1832]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAD6DB] bg-white text-[#6B0F24] transition-all hover:border-[#6B0F24] hover:text-[#8C1832]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#EAD6DB] bg-white p-7 shadow-sm">
        <p className="text-base italic leading-relaxed text-[#4E5456]">“{activeItem.quote}”</p>
        <div className="mt-6">
          <p className="font-black text-[#6B0F24]">{activeItem.name}</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C1832] mt-1">{activeItem.role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeIndex ? "bg-[#6B0F24]" : "bg-[#EAD6DB]"}`}
          />
        ))}
      </div>
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
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
          onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
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
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full rounded-xl border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-3.5 text-sm text-[#6B0F24] outline-none transition-all focus:border-[#6B0F24] focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Institutional Catering">Institutional Catering</option>
            <option value="Hospital Nutrition">Hospital Nutrition</option>
            <option value="Educational Food Services">Educational Food Services</option>
            <option value="Food Supply & Distribution">Food Supply & Distribution</option>
            <option value="Quality Control & Hygiene Audits">Quality Control & Hygiene Audits</option>
            <option value="Bulk Ingredient Procurement">Bulk Ingredient Procurement</option>
          </select>
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

// ── NFS Navbar ──
function NFSNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Menu & Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#EAD6DB]">
      <div className="hidden md:block bg-[#6B0F24] text-white py-2 px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Lahore, Pakistan</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> {CONTACT_INFO.phone}</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> {CONTACT_INFO.emails[0]}</span>
          </div>
          <span className="text-xs font-bold text-[#F5C6CF]">National Food Services — Catering Excellence</span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#6B0F24] flex items-center justify-center group-hover:scale-105 transition-transform">
            <UtensilsCrossed size={22} color="#fff" />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-[#6B0F24] leading-none">NATIONAL FOOD</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#4E5456]">Services</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#2D3436]">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="relative py-1 hover:text-[#6B0F24] group transition-colors">
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6B0F24] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#6B0F24] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4F0918] hover:scale-105 transition-all">
            <MessageCircle size={14} /> Order Now
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#FAF5F6] text-[#6B0F24]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#EAD6DB] px-6 py-5 space-y-3">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-sm font-bold text-[#2D3436] hover:text-[#6B0F24] py-1">{l.label}</a>
          ))}
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-[#6B0F24] py-3 text-xs font-bold uppercase tracking-wider text-white mt-4">
            <MessageCircle size={14} /> Order Now
          </a>
        </div>
      )}
    </header>
  );
}

// ── NFS Footer ──
function NFSFooter() {
  return (
    <footer style={{ background: "#6B0F24" }} className="text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <UtensilsCrossed size={20} color="#F5C6CF" />
            </div>
            <div>
              <p className="font-black text-lg leading-none">NATIONAL FOOD</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">Services (NFS)</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">Premier institutional catering and food supply services for corporate, healthcare, educational, and government institutions across Pakistan.</p>
          <div className="space-y-2 text-xs text-white/75">
            <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#F5C6CF]" />{CONTACT_INFO.office}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#F5C6CF]" />{CONTACT_INFO.phone}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#F5C6CF]" />{CONTACT_INFO.emails[0]}</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#F5C6CF]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["About Us","Services","Products","Why Us","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider mb-5 text-[#F5C6CF]">Contact Us</h4>
          <div className="space-y-3 text-xs text-white/75">
            <p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#F5C6CF]" /> WhatsApp: {CONTACT_INFO.whatsapp.join(" / ")}</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[#F5C6CF]" />{CONTACT_INFO.emails[0]}</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[#F5C6CF]" />{CONTACT_INFO.phone}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link href="/group-companies" className="text-xs text-white/60 hover:text-white transition-colors">← Back to Roysons Group</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} National Food Services. Part of <Link href="/" className="hover:text-white transition-colors">Roysons Group</Link>. All rights reserved.
      </div>
    </footer>
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

      <NFSNavbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-[#EAD6DB] min-h-[500px] lg:min-h-[560px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(65,9,22,0.90) 0%, rgba(107,15,36,0.84) 50%, rgba(65,9,22,0.92) 100%), url("${encodeURI("/national food service.jpeg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#8C1832]/40 bg-[#6B0F24]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#EAD6DB] shadow-md backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8C1832]" />
              {HERO.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              National Food Services <span className="text-[#EAD6DB]">(NFS)</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#F5E6E9]">
              {HERO.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#8C1832] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#6B0F24] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#6B0F24] hover:scale-[1.02] active:scale-95"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#EAD6DB] bg-[#FAF5F6] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8C1832]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8C1832]" />
                About National Food Services
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-[#6B0F24]">
                Trusted meal solutions for institutions that demand quality, hygiene, and scale.
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-[#4E5456]">
                National Food Services delivers nourishing, hygienic, and efficiently managed food programs for corporate campuses, hospitals, schools, and industrial sites. Our robust kitchen operations and cold-chain logistics ensure reliable service every day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#6B0F24] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#8C1832]">
                  Request A Quote <ArrowRight size={15} />
                </Link>
                <Link href="#projects" className="inline-flex items-center gap-2 rounded-full border border-[#EAD6DB] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6B0F24] transition-all hover:border-[#6B0F24] hover:text-[#8C1832]">
                  View Projects
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#EAD6DB] bg-[#FAF5F6] p-3 shadow-sm">
              <div className="relative h-[380px] overflow-hidden rounded-[24px]">
                <Image src="/national food service.jpeg" alt="National Food Services catering operations" fill className="object-cover" />
              </div>
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

      {/* Testimonials + FAQs */}
      <section className="bg-white px-6 py-16 lg:py-24 border-b border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Testimonials & FAQs"
            title="Trusted by Dining Partners. Clear Answers for Every Requirement."
            description="See how our clients describe their experience and explore common questions about our catering and supply services."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <TestimonialSlider items={TESTIMONIALS} />
            <div className="grid gap-4">
              {FAQS.map((item, index) => (
                <FaqAccordionItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
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

      {/* Separate Location Section */}
      <section className="bg-[#FAF5F6] px-6 py-16 lg:py-24 border-t border-[#EAD6DB]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[28px] border border-[#EAD6DB] bg-white p-8 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#8C1832]">Our Location</p>
              <h3 className="mt-3 text-2xl font-black text-[#6B0F24]">Visit Our Office</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4E5456]">
                We welcome catering consultations, food supply discussions, and partnership meetings at our Lahore office.
              </p>
              <div className="mt-6 rounded-[20px] border border-[#EAD6DB] bg-[#FAF5F6] p-4">
                <p className="text-sm font-semibold text-[#6B0F24] leading-relaxed">{CONTACT_INFO.office}</p>
                <a href="https://maps.app.goo.gl/iDreS8eCT1teZeRV7" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#6B0F24] transition-colors hover:text-[#8C1832]">
                  Open in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#EAD6DB] bg-white shadow-sm">
              <iframe
                title="National Food Services Office Location"
                src={MAP_SRC}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}