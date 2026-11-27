"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
} from "../components/SwissFarmShared";
import { SWISS_FARM_PRODUCTS } from "../products-data";

const CATEGORIES = [
  "All",
  "Bulk Raw Milk",
  "Pasteurized Dairy",
  "Breeding Genetics",
  "Cattle Feed & Silage",
  "Organic Fertilizers",
];

export default function SwissFarmProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const q = searchQuery.trim().toLowerCase();
  const filtered = SWISS_FARM_PRODUCTS.filter((p) => {
    const productCategory = p.category || "";
    const matchesCategory = selectedCategory === "All" || productCategory === selectedCategory;
    const matchesSearch =
      !q ||
      (p.name || "").toLowerCase().includes(q) ||
      (p.overview || "").toLowerCase().includes(q) ||
      productCategory.toLowerCase().includes(q) ||
      (p.tag || "").toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Dairy &amp; Livestock Catalog</SectionLabel>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
              style={{ color: theme.primary }}
            >
              Certified Dairy Products &amp;{" "}
              <span style={{ color: theme.accentGold }}>Breeding Genetics</span>
            </h1>

            <p
              className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7"
              style={{ color: theme.textMuted }}
            >
              Supplying pure, tested raw milk in temperature-controlled bulk tankers, high-yield breeding cattle, sexed semen genetics, and premium whole-crop corn silage across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products (e.g. Milk, Heifers, Silage, Semen)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] transition-all bg-white shadow-xs text-[#1C522A]"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section
        className="py-5 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              const count =
                cat === "All"
                  ? SWISS_FARM_PRODUCTS.length
                  : SWISS_FARM_PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    active
                      ? "bg-[#1C522A] text-white shadow-md"
                      : "bg-[#F4F8F4] border text-[#1C522A] hover:border-[#A88134]"
                  }`}
                  style={{ borderColor: active ? theme.primary : theme.border }}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[12px] px-2 py-0.5 rounded-full ${
                      active ? "bg-white/20 text-white" : "bg-white text-[#1C522A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          {filtered.length === 0 ? (
            <div
              className="max-w-lg mx-auto text-center p-8 rounded-3xl border bg-white"
              style={{ borderColor: theme.border }}
            >
              <p className="text-[17px] font-extrabold mb-2" style={{ color: theme.primary }}>
                No matching dairy products found
              </p>
              <p className="text-[15px] mb-4" style={{ color: theme.textMuted }}>
                Try another keyword or reset category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl text-[14px] font-extrabold text-white cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                Show All 6 Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prod) => (
                <div
                  key={prod.slug}
                  id={prod.id}
                  className="swiss-farm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <Link
                      href={`/group-companies/swiss-farm/products/${prod.slug}`}
                      className="relative block w-full h-56 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={prod.heroImage}
                        alt={prod.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span
                          className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                          style={{ borderColor: theme.border, color: theme.primary }}
                        >
                          {prod.category}
                        </span>
                      </div>
                    </Link>

                    {/* Body Content */}
                    <div className="p-6">
                      <Link href={`/group-companies/swiss-farm/products/${prod.slug}`}>
                        <h3
                          className="text-[20px] font-black mb-1.5 hover:text-[#A88134] transition-colors cursor-pointer leading-snug"
                          style={{ color: theme.primary }}
                        >
                          {prod.name}
                        </h3>
                      </Link>

                      <p
                        className="text-[13px] font-extrabold uppercase tracking-wider mb-3"
                        style={{ color: theme.accentGold }}
                      >
                        {prod.subtitle}
                      </p>

                      <p
                        className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed mb-5"
                        style={{ color: theme.textMuted }}
                      >
                        {prod.overview}
                      </p>

                      {/* Technical Specs List */}
                      <div
                        className="space-y-2.5 pt-4 border-t"
                        style={{ borderColor: theme.border }}
                      >
                        <p
                          className="text-[13px] font-extrabold uppercase tracking-wider"
                          style={{ color: theme.primary }}
                        >
                          Key Technical Benchmarks:
                        </p>
                        {prod.technicalSpecs.slice(0, 3).map((s, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: theme.accentGold }}
                            />
                            <span className="text-[14px] font-medium text-slate-700 leading-snug">
                              <strong className="text-[#1C522A]">{s.key}:</strong> {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2.5">
                    <Link
                      href={`/group-companies/swiss-farm/products/${prod.slug}`}
                      className="flex-1 py-3 rounded-xl border text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F4F8F4] transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.primary }}
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/group-companies/swiss-farm/contact"
                      className="px-4 py-3 rounded-xl text-[13.5px] font-extrabold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.primary }}
                      title="Request Proposal"
                    >
                      <span>Quote</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Executive CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-7 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                COMMERCIAL CONTRACT SUPPLY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Require Annual Milk Supply Or Livestock Export?
              </h2>
              <p className="text-[15.5px] font-medium max-w-xl text-[#D8E8DC]">
                We execute tailored B2B supply agreements with dairy processors, cheese manufacturers, and corporate farms.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                <span>Request B2B Contract</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 border-white/80 text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <Phone size={16} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
