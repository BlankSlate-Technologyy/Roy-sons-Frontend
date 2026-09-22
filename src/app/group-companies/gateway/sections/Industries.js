import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { COLORS } from "../constants";
import { Container, SectionHeading } from "./Shared";
import { GATEWAY_INDUSTRIES } from "../industries-data";

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-[#F8FAFC] border-y" style={{ borderColor: COLORS.border }}>
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Sectors &amp; Markets We Support"
          subtitle="Providing direct licensing, strategy, and regulatory consulting for specialized healthcare sectors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GATEWAY_INDUSTRIES.map((ind) => {
            const Icon = ind.icon;

            return (
              <Link
                key={ind.slug}
                href={`/group-companies/gateway/industries/${ind.slug}`}
                className="rounded-2xl bg-white border shadow-xs hover:shadow-xl hover:border-[#009688] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div className="relative w-full h-36 overflow-hidden bg-slate-100">
                    <Image
                      src={ind.image || ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 text-[#009688] shadow-xs backdrop-blur-xs">
                        {ind.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3 bg-emerald-50 text-[#009688]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3
                      className="text-sm font-black leading-snug group-hover:text-[#009688] transition-colors mb-1.5"
                      style={{ color: COLORS.textDark }}
                    >
                      {ind.title}
                    </h3>
                    <p className="text-xs font-normal leading-relaxed text-slate-500 line-clamp-2">
                      {ind.overview}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-[#009688] group-hover:text-[#173F8A] transition-colors">
                  <span>Explore Industry</span>
                  <Icons.ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/group-companies/gateway/industries"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#12316B] cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore All 7 Industry Verticals</span>
            <Icons.ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
