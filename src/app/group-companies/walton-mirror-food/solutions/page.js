"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Snowflake,
  Package,
  Boxes,
  Milk,
  Wheat,
  Croissant,
  GlassWater,
  Beaker,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Eye,
  Send,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  ProductDetailModal,
  WholesaleInquiryModal,
} from "../components/WaltonFoodShared";
import { FOOD_LISTINGS } from "../walton-food-data";

const CATEGORIES = [
  "All",
  "IQF Frozen Foods",
  "Ready-to-Eat Retort Meals",
  "Dairy & UHT Line",
  "Beverages & Purees",
  "Grains & Flours",
  "Bakery & Snacks",
  "Sauces & Condiments",
  "Private Label OEM",
];

const PRODUCT_SUITES = [
  {
    name: "Walton Gold Grade-A IQF Crispy French Fries & Frozen Produce",
    category: "IQF Frozen Foods",
    specs: ["Technology: -38°C Cryogenic Individual Quick Freezing (IQF)", "Range: Shoestring & Crinkle Fries, Sweet Peas, Corn & Parathas", "Packaging: 400g / 1kg Retail Barrier Pouches & 10kg Foodservice"],
    desc: "Flash-frozen at peak harvest to preserve cellular crispness, vibrant natural color, and vitamins with zero added chemical preservatives.",
    image: "/waltonfood/hero_gourmet_production.jpg",
    tag: "IQF Frozen Suite",
  },
  {
    name: "Walton Chef Gourmet Ready-to-Eat Retort Meals",
    category: "Ready-to-Eat Retort Meals",
    specs: ["Recipes: Authentic Biryani, Nihari, Chicken Karahi & Daal", "Shelf-Life: 12-Month Ambient Storage (No Refrigeration Required)", "Safety: Thermal Autoclave Retort Sterilization (F0 > 6.0)"],
    desc: "Authentic chef-formulated traditional Pakistani and continental meals packaged in shelf-stable multi-barrier retort pouches.",
    image: "/waltonfood/card_retort_meals.jpg",
    tag: "Retort Ready Meals",
  },
  {
    name: "Walton Dairy UHT Pasteurized Milk & Cultured Dairy Line",
    category: "Dairy & UHT Line",
    specs: ["Processing: 142°C Direct Steam Injection UHT Pasteurization", "Portfolio: Full-Cream Milk, Cultured Butter, Desi Ghee & Mozzarella", "Packaging: 250ml & 1000ml Aseptic Tetra-Brik Cartons"],
    desc: "Pure, wholesome dairy sourced from disease-free modern farms, processed under sterile conditions for long ambient shelf stability.",
    image: "/waltonfood/card_dairy_processing.jpg",
    tag: "UHT Dairy Suite",
  },
  {
    name: "Walton Heritage Artisan Bakery & High-Fiber Confectionery",
    category: "Bakery & Snacks",
    specs: ["Products: Whole-Wheat Digestive Biscuits, Honey Rusk & Wafers", "Standards: Non-Hydrogenated Vegetable Fats & Fortified Flour", "Export: Moisture-Proof OPP Flow Wrap & Protective Tins"],
    desc: "Artisanal biscuits, crunchy rusk, and confectionery produced on automated continuous tunnel oven baking lines.",
    image: "/waltonfood/card_culinary_specialty.jpg",
    tag: "Bakery & Biscuits",
  },
  {
    name: "Walton Orchard 100% Natural Fruit Pulps, Juices & Purees",
    category: "Beverages & Purees",
    specs: ["Varieties: Aseptic Chaunsa Mango Pulp, Kinnow Mandarin & Guava", "Purity: 100% Natural Real Fruit Pulp Sourced From Audited Orchards", "Bottling: 215kg Steel Aseptic Drums & Cold-Aseptic Retail Tetra"],
    desc: "Refreshing, vitamin-rich fruit purees and natural nectars processed with gentle flash pasteurization preserving authentic aromas.",
    image: "/waltonfood/hero_farm_sourcing.jpg",
    tag: "Orchard Juices & Purees",
  },
  {
    name: "Walton Spice Culinary Sauces, Tomato Pastes & Condiments",
    category: "Sauces & Condiments",
    specs: ["Range: Rich Tomato Ketchup, Chili Garlic, Mustard & Pickles", "Quality: 28-30° Brix Cold-Break Paste with Zero Artificial Dyes", "Form: Ergonomic Squeeze PET Bottles & 4kg Foodservice Tubs"],
    desc: "Gourmet condiments, dipping sauces, and seasonings formulated for retail consumers, restaurant chains, and institutional kitchens.",
    image: "/waltonfood/card_ready_meals.jpg",
    tag: "Sauces & Condiments",
  },
];

export default function WaltonFoodSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDetailProduct, setActiveDetailProduct] = useState(null);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  const filtered = PRODUCT_SUITES.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.desc && p.desc.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar onOpenWholesaleModal={() => setIsWholesaleOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Product Portfolio &amp; Consumer Brands</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
              Manufactured Food Products &amp; <span style={{ color: theme.green }}>Consumer Brands</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying export-grade IQF frozen vegetables, shelf-stable ready-to-eat retort meals, UHT dairy products, premium bakery biscuits, natural fruit juices, and culinary sauces across Pakistan and international export markets.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products (e.g. Frozen, Retort Meals, Dairy, Bakery, Juices, Sauces)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-emerald-50/40" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#1E6B43] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1E6B43]"
                  }`}
                  style={{ borderColor: active ? theme.green : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="wm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-900 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1E6B43]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.greenDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.greenDark }}>
                        Product Specifications:
                      </p>
                      {prod.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#D89C46]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    type="button"
                    onClick={() => setIsWholesaleOpen(true)}
                    className="w-full py-3 rounded-xl border text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1E6B43] hover:text-white transition-all cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.greenDark }}
                  >
                    <span>Request Wholesale Catalog &amp; Pricing</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                WHOLESALE &amp; EXPORT DISTRIBUTION INQUIRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Stock Walton &amp; Mirror Food Brands In Your Stores
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide competitive wholesale pricing, refrigerated container shipping, and complete marketing POS support for regional and global distributors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setIsWholesaleOpen(true)}
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request Wholesale Catalog</span>
                <ArrowRight size={15} />
              </button>
              <a
                href="tel:00924235401280"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-35401280</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Modal */}
      <WholesaleInquiryModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      <WaltonFoodFooter />
    </main>
  );
}
