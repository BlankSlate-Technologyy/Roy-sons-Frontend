"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_SERVICES } from "@/lib/constants";

function ServiceItem({ icon: Icon, title, description, href }) {
  return (
    <div className="flex flex-row items-start gap-4 group">
      {/* Icon Box */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-13 sm:h-13 border border-neutral-800 bg-[#161c20]/60 rounded-[2px] flex items-center justify-center group-hover:border-[#C6A15A]/70 group-hover:bg-[#1a2127] transition-all duration-300">
        <Icon
          size={22}
          strokeWidth={1.4}
          className="text-white group-hover:text-[#C6A15A] transition-colors duration-300"
        />
      </div>

      {/* Text & Action */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-[14.5px] sm:text-[15px] font-extrabold tracking-[0.06em] uppercase text-white mb-2 leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[13px] sm:text-[13.5px] text-neutral-400 leading-relaxed font-normal mb-2.5">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#C6A15A] hover:text-white transition-all duration-300 group/link"
        >
          <span>LEARN MORE</span>
          <ArrowRight
            size={13}
            strokeWidth={2.5}
            className="group-hover/link:translate-x-1 transition-transform duration-300 text-[#C6A15A]"
          />
        </Link>
      </div>
    </div>
  );
}

export default function CorporateCapabilitiesPanel({ services = CORPORATE_SERVICES }) {
  return (
    <section className="py-16 sm:py-20 bg-[#101518] font-sans border-t border-b border-neutral-800/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C6A15A] mb-3">
            OUR CAPABILITIES
          </h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.18em] text-white">
            Core Business Sectors
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-[#C6A15A]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
