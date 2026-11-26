"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "./Shared";
import { GATEWAY_SERVICES } from "../services-data";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-3">
              <Sparkles size={14} className="text-[#2E8B57]" />
              <span>REGULATORY CONSULTANCY PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Comprehensive Drug Regulatory &amp; Compliance Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
              Precision-engineered professional consulting for drug licensing, CTD technical dossiers, cGMP facility readiness, and cross-border commercial clearances.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/group-companies/gateway/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#12316B] active:scale-95 cursor-pointer bg-[#173F8A]"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GATEWAY_SERVICES.map((service) => {
            const Icon = service.icon;
            const topDeliverables = service.deliverables?.slice(0, 2) || [];

            return (
              <Link
                key={service.slug}
                href={`/group-companies/gateway/services/${service.slug}`}
                className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Image Thumbnail with Tag */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image || service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#173F8A] shadow-xs backdrop-blur-xs">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3.5 bg-[#173F8A] text-white shadow-sm">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-base font-black mb-2 group-hover:text-[#173F8A] transition-colors leading-snug text-slate-900">
                      {service.title}
                    </h3>

                    <p className="text-xs font-normal leading-relaxed text-slate-500 line-clamp-2 mb-4">
                      {service.overview}
                    </p>

                    {/* Top 2 Deliverables Bullets */}
                    {topDeliverables.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {topDeliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] font-medium text-slate-700 leading-snug">
                            <CheckCircle2 size={15} className="text-[#2E8B57] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#173F8A] group-hover:text-[#2E8B57] transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
