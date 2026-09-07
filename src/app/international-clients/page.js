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
    <div className="min-h-screen flex flex-col bg-white text-[#042E3A]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <HeaderNavbar />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f0fdfa] border-b border-[#0a7a8c]/15 py-3.5 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
          <Link href="/" className="hover:text-[#0a7a8c] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-[#0a7a8c]/60" />
          <Link href="/about" className="hover:text-[#0a7a8c] transition-colors">
            About Us
          </Link>
          <ChevronRight size={13} className="text-[#0a7a8c]/60" />
          <span className="font-bold text-[#042E3A]">International Clients</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-white text-[#042E3A] py-16 sm:py-20 px-6 overflow-hidden border-b border-neutral-100">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/30 text-[#0a7a8c] text-xs font-black uppercase tracking-widest mb-4 shadow-xs">
            <Globe size={14} />
            <span>GLOBAL COMMERCE &amp; TRADE EXCELLENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#042E3A] mb-5 max-w-4xl mx-auto">
            International Client Partnerships
          </h1>

          <div className="h-[3px] w-16 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mx-auto mb-6 rounded-full" />

          <p className="text-neutral-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            ROYSONS Group facilitates cross-border commerce, global export-import operations, international OEM partnerships, and multilateral humanitarian relief initiatives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rs-cta-btn px-8 py-4 rounded-lg text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <span>Submit International Trade Inquiry</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4 International Categories Grid ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-neutral-50/60">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              GLOBAL DIVISIONS
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-black uppercase tracking-[0.18em] text-[#042E3A]">
              International Categories We Support
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] rounded-full" />
            <p className="text-base sm:text-lg text-neutral-700 mt-4 max-w-2xl mx-auto leading-relaxed">
              Click on any category to explore specialized trade capabilities, logistics infrastructure, and compliance certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNATIONAL_CLIENTS_LIST.map((client, idx) => {
              const ClientIcon = client.icon;
              return (
                <div
                  key={client.slug}
                  className="rounded-xl border border-[#0a7a8c]/20 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#0a7a8c]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#f0fdfa] border border-[#0a7a8c]/30 text-[#0a7a8c] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0a7a8c] group-hover:text-white transition-all duration-300 shadow-sm">
                        <ClientIcon size={28} />
                      </div>
                      <span className="text-lg font-mono font-black text-[#0a7a8c]/40">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-xs font-black text-[#0a7a8c] uppercase tracking-wider block mb-1">
                        {client.badge}
                      </span>
                      <h3 className="text-xl font-black uppercase tracking-wider text-[#042E3A] group-hover:text-[#0a7a8c] transition-colors">
                        {client.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                      {client.tagline}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#0a7a8c]/15">
                      {client.keyPillars.slice(0, 3).map((pillar, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#042E3A]">
                          <CheckCircle2 size={14} className="text-[#0a7a8c] shrink-0" />
                          <span className="truncate">{pillar.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[#f0fdfa]/60 border-t border-[#0a7a8c]/15">
                    <Link
                      href={`/international-clients/${client.slug}`}
                      className="rs-cta-btn w-full py-3.5 px-4 rounded-lg text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
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
      <section className="py-16 px-6 bg-white border-t border-neutral-200 text-[#042E3A]">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#0a7a8c] text-xs font-black uppercase tracking-[0.25em] mb-2">
            GLOBAL ACCREDITATIONS &amp; TRADE COMPLIANCE
          </p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#042E3A] mb-4">
            Reliable Cross-Border Trade &amp; Multilateral Cooperation
          </h2>
          <div className="mx-auto h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mb-6 rounded-full" />
          <p className="text-neutral-700 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Backed by international trade finance capabilities, pre-shipment inspections (SGS/BV), WHO-GMP certification, and direct OEM representations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Incoterms 2020", "WHO-GMP Certified", "ISO 9001 / 13485", "SGS / BV Inspected", "UN & Donor Compliant"].map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-[#f0fdfa] border border-[#0a7a8c]/30 text-xs font-black uppercase tracking-wider text-[#042E3A]"
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
