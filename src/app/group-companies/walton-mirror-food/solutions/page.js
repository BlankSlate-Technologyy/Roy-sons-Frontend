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
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonFoodShared";

const CATEGORIES = [
  "All",
  "Frozen Foods & IQF",
  "Ready-to-Eat Meals",
  "Dairy Products",
  "Bakery & Confectionery",
  "Beverages & Juices",
  "Sauces & Condiments",
];

const PRODUCT_SUITES = [
  {
    name: "Walton Gold Frozen Foods & IQF Appetizers",
    category: "Frozen Foods & IQF",
    specs: ["Technology: -38°C Cryogenic Individual Quick Freezing (IQF)", "Range: Crispy Fries, Green Peas, Sweet Corn, Parathas & Samosas", "Packaging: 400g / 1kg Retail Barrier Pouches & 10kg Foodservice"],
    desc: "Flash-frozen at the peak of harvest to preserve cellular crispness, nutrients, and natural flavors with zero added preservatives.",
    image: "/waltonfood_hero_processing.svg",
    tag: "IQF Frozen Suite",
  },
  {
    name: "Walton Chef Gourmet Ready-to-Eat Retort Meals",
    category: "Ready-to-Eat Meals",
    specs: ["Recipes: Authentic Biryani, Nihari, Chicken Karahi & Daal", "Shelf-Life: 12-Month Ambient Storage (No Refrigeration Required)", "Safety: Thermal Autoclave Retort Sterilization (F0 > 6.0)"],
    desc: "Authentic chef-formulated traditional Pakistani and continental meals packaged in shelf-stable multi-barrier retort pouches.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Retort Ready Meals",
  },
  {
    name: "Walton Dairy UHT Milk & Dairy Ingredients",
    category: "Dairy Products",
    specs: ["Processing: 138°C Direct Steam Injection UHT Pasteurization", "Portfolio: Full-Cream Milk, Low-Fat Milk, Butter, Cheese & Pure Ghee", "Packaging: 250ml & 1000ml Aseptic Tetra-Brik Cartons"],
    desc: "Pure, wholesome dairy sourced from disease-free modern farms, processed under sterile conditions for long ambient shelf stability.",
    image: "/waltonfood_hero_processing.svg",
    tag: "UHT Dairy Suite",
  },
  {
    name: "Walton Heritage Bakery & Confectionery",
    category: "Bakery & Confectionery",
    specs: ["Products: Butter Cookies, Traditional Rusk, Wafers & Toffees", "Standards: Non-Hydrogenated Vegetable Fats & Premium Flour", "Export: Nitrogen-Flushed Protective Tins & Master Cartons"],
    desc: "Artisanal biscuits, crunchy rusk, and confectionery produced on automated European continuous tunnel oven baking lines.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Bakery & Biscuits",
  },
  {
    name: "Walton Orchard 100% Natural Fruit Juices",
    category: "Beverages & Juices",
    specs: ["Varieties: Chaunsa Mango Nectar, Guava, Apple, Orange & Citrus", "Purity: 100% Natural Real Fruit Pulp Sourced From Local Orchards", "Bottling: Cold-Aseptic PET & Glass Bottle Lines"],
    desc: "Refreshing, vitamin-rich fruit beverages and natural nectars processed with gentle pasteurization preserving authentic fruit aromas.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Orchard Juices",
  },
  {
    name: "Walton Spice Culinary Sauces & Condiments",
    category: "Sauces & Condiments",
    specs: ["Range: Rich Tomato Ketchup, Garlic Chili, Mayo & BBQ Sauce", "Quality: Thick Pureed Consistency with Premium Spice Extracts", "Form: 300g Glass Bottles, Squeeze Pouches & 5kg Foodservice Tubs"],
    desc: "Gourmet condiments, dipping sauces, and seasonings formulated for retail consumers, restaurant chains, and institutional kitchens.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Sauces & Condiments",
  },
];

export default function WaltonFoodSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PRODUCT_SUITES.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Product Portfolio &amp; Consumer Brands</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
              Manufactured Food Products &amp; <span style={{ color: theme.green }}>Consumer Brands</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying IQF frozen vegetables, ready-to-eat retort meals, UHT dairy products, premium bakery biscuits, natural fruit juices, and culinary sauces across Pakistan and international export markets.
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
        <div className="mx-auto max-w-screen-xl">
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
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="wm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(211, 228, 219, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.greenDark }}>
                        Product Specifications &amp; Sizing:
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
                  <Link
                    href="/group-companies/walton-mirror-food/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.greenDark }}
                  >
                    <span>Request Wholesale Catalog &amp; Pricing</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                WHOLESALE &amp; EXPORT DISTRIBUTION INQUIRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Stock Walton &amp; Morris Food Brands In Your Stores
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide competitive wholesale pricing, refrigerated container shipping, and complete marketing POS support for regional distributors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-mirror-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request Wholesale Catalog</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
