"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe,
  Award,
  ShieldCheck,
  Plane,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import { INTERNATIONAL_CLIENTS_LIST } from "@/lib/international-clients-data";

export default function InternationalClientsHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      <HeaderNavbar />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-neutral-100 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-neutral-950 transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/about" className="hover:text-neutral-950 transition-colors">
            About Us
          </Link>
          <ChevronRight size={13} />
          <span className="font-bold text-neutral-950">International Clients</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 text-white py-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#dfb753]/15 border border-[#dfb753]/30 text-[#dfb753] text-xs font-black uppercase tracking-widest mb-4">
            <Globe size={14} />
            <span>GLOBAL COMMERCE &amp; TRADE EXCELLENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 max-w-4xl mx-auto">
            International Client Partnerships
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            ROYSONS Group facilitates cross-border commerce, global export-import operations, international OEM partnerships, and multilateral humanitarian relief initiatives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-sm bg-[#dfb753] hover:bg-white text-neutral-950 font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <span>Submit International Trade Inquiry</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4 International Categories Grid ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              GLOBAL DIVISIONS
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-black uppercase tracking-[0.18em] text-neutral-950">
              International Categories We Support
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[14px] text-neutral-500 mt-5 max-w-2xl mx-auto leading-relaxed">
              Click on any category to explore specialized trade capabilities, logistics infrastructure, and compliance certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNATIONAL_CLIENTS_LIST.map((client, idx) => {
              const ClientIcon = client.icon;
              return (
                <div
                  key={client.slug}
                  className="rounded-sm border border-neutral-200 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-neutral-950 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-sm bg-neutral-950 text-[#dfb753] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                        <ClientIcon size={28} />
                      </div>
                      <span className="text-xs font-mono font-black text-neutral-300 text-lg">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[11px] font-black text-[#dfb753] uppercase tracking-wider block mb-1">
                        {client.badge}
                      </span>
                      <h3 className="text-xl font-black uppercase tracking-wider text-neutral-950 group-hover:text-[#dfb753] transition-colors">
                        {client.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {client.tagline}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                      {client.keyPillars.slice(0, 3).map((pillar, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                          <CheckCircle2 size={13} className="text-[#dfb753] shrink-0" />
                          <span className="truncate">{pillar.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                    <Link
                      href={`/international-clients/${client.slug}`}
                      className="w-full py-3.5 px-4 rounded-sm bg-neutral-950 group-hover:bg-[#dfb753] group-hover:text-neutral-950 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Explore Detail Page</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Global Trade Credentials Section ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#dfb753] text-xs font-black uppercase tracking-[0.25em] mb-2">
            GLOBAL ACCREDITATIONS &amp; TRADE COMPLIANCE
          </p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-4">
            Reliable Cross-Border Trade &amp; Multilateral Cooperation
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Backed by international trade finance capabilities, pre-shipment inspections (SGS/BV), WHO-GMP certification, and direct OEM representations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Incoterms 2020", "WHO-GMP Certified", "ISO 9001 / 13485", "SGS / BV Inspected", "UN & Donor Compliant"].map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-sm bg-neutral-900 border border-neutral-800 text-xs font-black uppercase tracking-wider text-[#dfb753]"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CorporateFooter />
    </div>
  );
}
