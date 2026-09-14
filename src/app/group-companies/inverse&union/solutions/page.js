"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  X,
  ExternalLink,
  Layers,
  MapPin,
  Clock,
  ShieldAlert,
  ChevronRight,
  Eye,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
} from "../components/InverseUnionShared";
import {
  FULL_CATALOG_LISTINGS,
  TRADE_CATEGORIES,
  INCOTERMS_GUIDE,
} from "../inverse-union-data";

export default function InverseUnionSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  const filtered = useMemo(() => {
    return FULL_CATALOG_LISTINGS.filter((item) => {
      const matchCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;

      const specsText = item.specs
        ? Object.entries(item.specs)
            .map(([k, v]) => `${k} ${v}`)
            .join(" ")
            .toLowerCase()
        : "";

      const featuresText = Array.isArray(item.features)
        ? item.features.join(" ").toLowerCase()
        : "";

      const matchSearch =
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.sku && item.sku.toLowerCase().includes(q)) ||
        (item.incoterm && item.incoterm.toLowerCase().includes(q)) ||
        (item.origin && item.origin.toLowerCase().includes(q)) ||
        (item.compliance && item.compliance.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        featuresText.includes(q) ||
        specsText.includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-sky-50/50 to-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>
              Comprehensive Trade Catalog &amp; Sourcing Desk
            </SectionLabel>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6"
              style={{ color: theme.navyDark }}
            >
              Procurement Packages &amp;{" "}
              <span style={{ color: theme.blue }}>Global Supply Listings</span>
            </h1>

            <p
              className="text-base sm:text-lg font-medium leading-relaxed mb-8"
              style={{ color: theme.textMuted }}
            >
              Access our complete international portfolio: heavy capital machinery,
              bulk commodities, chartered multimodal freight, FDA cold-chain reefers,
              strategic government procurement, and structured trade finance.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search listings by title, SKU, Incoterm, origin, or spec..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section
        className="py-5 px-4 sm:px-6 lg:px-8 border-b bg-sky-50/40 sticky top-16 z-20 backdrop-blur-md"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {TRADE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0080FF] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0080FF] hover:bg-sky-50/50"
                  }`}
                  style={{ borderColor: active ? theme.blue : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
            <div>
              <h2
                className="text-2xl font-black uppercase tracking-tight"
                style={{ color: theme.navyDark }}
              >
                {selectedCategory === "All"
                  ? "All Sourcing Packages"
                  : selectedCategory}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Showing {filtered.length} verified trade items with certified origin
                &amp; Incoterms conformity.
              </p>
            </div>
            <div className="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              Total Catalog: {FULL_CATALOG_LISTINGS.length} Items
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <PackageCheck size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                No Trade Listings Found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                We could not find any items matching &ldquo;{searchQuery}&rdquo; in
                the selected category. Try a broader search term or clear the filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0080FF] text-white shadow-xs cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#0B2545] shadow-xs border border-white/50 backdrop-blur-xs">
                          {item.compliance || "ISO Certified"}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md bg-[#0080FF] text-white shadow-xs">
                          {item.sku}
                        </span>
                      </div>

                      {/* Bottom Image Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                        <span className="flex items-center gap-1 drop-shadow-sm">
                          <MapPin size={12} className="text-[#00D2C8]" />
                          {item.origin}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] font-bold tracking-wider backdrop-blur-xs">
                          {item.incoterm}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#0080FF] mb-1.5">
                        {item.category}
                      </div>

                      <h3
                        className="text-lg font-black leading-snug mb-3 line-clamp-2"
                        style={{ color: theme.navyDark }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-xs font-medium leading-relaxed mb-5 line-clamp-2"
                        style={{ color: theme.textMuted }}
                      >
                        {item.description}
                      </p>

                      {/* Key Features Highlights */}
                      <div className="space-y-1.5 pt-4 border-t border-slate-100">
                        {(item.features || []).slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className="flex-shrink-0 text-[#00D2C8] mt-0.5"
                            />
                            <span className="text-[11px] font-medium text-slate-600 line-clamp-1">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 pt-0 flex gap-2">
                    <button
                      onClick={() => setActiveItem(item)}
                      className="flex-1 py-2.5 rounded-xl border text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-sky-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <Eye size={13} />
                      <span>Specifications</span>
                    </button>
                    <Link
                      href={`/group-companies/inverse&union/contact?sku=${encodeURIComponent(
                        item.sku
                      )}&item=${encodeURIComponent(item.title)}`}
                      className="px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-1 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.blue }}
                    >
                      <span>Quote</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Incoterms 2020 Guide Section */}
      <section
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/60"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Commercial Trade Standard</SectionLabel>
            <SectionHeading
              title="International Incoterms 2020 Compliance"
              subtitle="Every cargo dispatch from Inverse and Union Trading complies strictly with ICC Incoterms rules, ensuring full legal transparency on freight risk, marine insurance, and customs liability."
              center
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCOTERMS_GUIDE.map((t) => (
              <div
                key={t.code}
                className="p-6 rounded-2xl bg-white border shadow-xs hover:border-[#0080FF] transition-all"
                style={{ borderColor: theme.border }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#0080FF]">
                    {t.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-slate-700 border border-sky-100">
                    ICC Rules
                  </span>
                </div>
                <h4
                  className="text-sm font-black mb-2"
                  style={{ color: theme.navyDark }}
                >
                  {t.name}
                </h4>
                <p className="text-xs font-medium text-slate-600 leading-relaxed mb-4">
                  {t.sellerResponsibility}
                </p>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Risk Point: {t.riskTransfer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Specification Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full h-64 bg-slate-900">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#0080FF] text-white inline-block mb-2">
                  {activeItem.sku} &bull; {activeItem.compliance}
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080FF] block mb-1">
                  Category: {activeItem.category}
                </span>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Parameter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">
                    Origin Hub
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {activeItem.origin}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">
                    Incoterms
                  </span>
                  <span className="text-xs font-bold text-[#0080FF]">
                    {activeItem.incoterm}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">
                    Lead Time
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {activeItem.leadTime}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">
                    Warranty / QA
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {activeItem.warranty}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              {activeItem.features && activeItem.features.length > 0 && (
                <div>
                  <h4
                    className="text-xs font-black uppercase tracking-wider mb-3"
                    style={{ color: theme.navyDark }}
                  >
                    Key Procurement Deliverables
                  </h4>
                  <div className="space-y-2">
                    {activeItem.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#00D2C8] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-xs font-medium text-slate-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Commercial & Technical Specs */}
              {activeItem.specs && typeof activeItem.specs === "object" && (
                <div>
                  <h4
                    className="text-xs font-black uppercase tracking-wider mb-3"
                    style={{ color: theme.navyDark }}
                  >
                    Technical Specifications &amp; Quality Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    {Object.entries(activeItem.specs).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-slate-400 block text-[10px] font-bold uppercase">
                          {k}
                        </span>
                        <span className="font-bold text-slate-800">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/group-companies/inverse&union/contact?sku=${encodeURIComponent(
                    activeItem.sku
                  )}&item=${encodeURIComponent(activeItem.title)}`}
                  className="flex-1 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all shadow-md hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Request Landed-Cost Quotation</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider border text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  style={{ borderColor: theme.border }}
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Turnkey Sourcing CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white"
            style={{ borderColor: theme.border }}
          >
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                CORPORATE IMPORTERS &amp; STRATEGIC BUYERS
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold mb-2"
                style={{ color: theme.navyDark }}
              >
                Direct Factory Sourcing With Full Documentary LC Support
              </h2>
              <p
                className="text-sm font-medium max-w-xl"
                style={{ color: theme.textMuted }}
              >
                We execute verified supplier negotiations, pre-shipment inspections,
                customs clearance, and bonded door-to-door delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Trade Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
