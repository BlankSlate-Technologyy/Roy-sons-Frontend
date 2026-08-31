"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  FlaskConical,
  Scissors,
  Building2,
  Package,
  Wrench,
  ShieldCheck,
  Check,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

const PRODUCT_CATEGORIES = [
  {
    id: "imaging",
    title: "Diagnostic Imaging Systems",
    desc: "Superconducting 1.5T MRI, 128-Slice CT Scanners, Ceiling Digital X-Ray, and 4D Color Doppler Ultrasounds.",
    items: ["1.5T Superconducting MRI", "128-Slice Precision CT", "Floor/Ceiling Digital Radiography (X-Ray)", "4D Color Doppler Ultrasound"],
    image: "/roys_ct_scan.png",
  },
  {
    id: "ot",
    title: "Operating Theatre & Surgical Consoles",
    desc: "Electro-hydraulic surgical tables, shadowless aerodynamic LED lighting, 4K endoscopy towers, and anesthesia workstations.",
    items: ["Electro-Hydraulic Surgical Operating Table", "Shadowless Laminar LED Lamps", "Integrated Anesthesia Workstation", "4K Ultra-HD Endoscopy Tower"],
    image: "/pakmedical-card2.png",
  },
  {
    id: "icu",
    title: "ICU, Critical Care & Life Support",
    desc: "Smart ICU ventilators, 15-inch multi-parameter vital signs monitors, infusion pump stations, and defibrillators.",
    items: ["Intelligent Invasive/Non-Invasive Ventilators", "Multi-Parameter Touch ECG Monitors", "Stacked Syringe Infusion Pumps", "Biphasic Defibrillator with AED Pacing"],
    image: "/biomax_consumables_ai.jpg",
  },
  {
    id: "lab",
    title: "Laboratory & Clinical Diagnostics",
    desc: "Automated high-throughput biochemistry analyzers, 5-part hematology counters, and research microscopes.",
    items: ["Automated Clinical Chemistry Analyzer", "5-Part Laser Hematology Counter", "Infinity Optical Laboratory Microscopes", "High-Speed Refrigerated Centrifuges"],
    image: "/biomax_lab_equipment_ai.jpg",
  },
  {
    id: "furniture",
    title: "Hospital & Patient Room Furniture",
    desc: "Motorized 5-function ICU beds, emergency crash carts, medical stainless steel cabinets, and overbed tables.",
    items: ["5-Function Electric Motorized ICU Beds", "Emergency Resuscitation Crash Carts", "Antibacterial Stainless Steel Cabinets", "Hydraulic Mobile Overbed Tables"],
    image: "/roys_hospital_interior.png",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white">
      <RoysNavbar active="Solutions" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            MEDICAL &amp; CLINICAL CATALOGUE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto">
            Healthcare Products &amp; Medical Devices
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal">
            Certified medical devices, diagnostic radiology systems, operating theatre equipment, and specialized laboratory technologies.
          </p>
        </div>
      </section>

      {/* ─── Products Categories ───────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="p-7 rounded-3xl border border-slate-200 bg-white shadow-xs grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4">
                <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow border border-slate-200">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-xl font-bold text-[#0f2b48]">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2 pt-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check size={13} className="text-[#2563eb] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/group-companies/roys-roys/contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
                  >
                    <span>Request Product Quote</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
