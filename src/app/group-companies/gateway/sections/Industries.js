import React from "react";
import Link from "next/link";
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
          {GATEWAY_INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;

            return (
              <Link
                key={ind.slug}
                href={`/group-companies/gateway/industries/${ind.slug}`}
                className="flex items-center justify-between p-5 rounded-2xl bg-white border shadow-xs hover:shadow-lg hover:border-[#009688] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                style={{ borderColor: COLORS.border }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 bg-blue-50 text-[#0077b6] group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] shadow-xs"
                  >
                    <Icon size={34} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      className="text-xs sm:text-sm font-black leading-snug group-hover:text-[#009688] transition-colors"
                      style={{ color: COLORS.textDark }}
                    >
                      {ind.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-bold mt-0.5">{ind.tag}</p>
                  </div>
                </div>
                <Icons.ChevronRight size={16} className="text-slate-300 group-hover:text-[#173F8A] group-hover:translate-x-1 transition-all" />
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
