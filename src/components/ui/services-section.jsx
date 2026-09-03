"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_SERVICES } from "@/lib/constants";

function ServiceItem({ icon: Icon, title, description, href }) {
  return (
    <div className="flex flex-row items-start gap-4 group">
      {/* Icon Box */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 border border-[#0a7a8c]/25 bg-[#f0fdfa] rounded-sm flex items-center justify-center group-hover:border-[#0d9488] group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:shadow-[0_6px_20px_rgba(10,122,140,0.3)] transition-all duration-300">
        <Icon
          size={24}
          strokeWidth={1.6}
          className="text-[#0a7a8c] group-hover:text-white group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Text & Action */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-lg sm:text-xl font-black tracking-[0.05em] uppercase text-[#042E3A] mb-2 leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">
          {title}
        </h3>
        {/* Navy to Teal Separation Line */}
        <div className="w-10 h-[2px] bg-gradient-to-r from-[#042E3A] to-[#0d9488] my-2.5 rounded-full group-hover:w-16 transition-all duration-300" />
        <p className="text-[15px] sm:text-[16px] text-[#042E3A]/80 leading-relaxed font-normal mb-3.5">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-black tracking-[0.16em] uppercase text-[#0a7a8c] hover:text-[#0d9488] transition-all duration-300 group/link"
        >
          <span>LEARN MORE</span>
          <ArrowRight
            size={12}
            strokeWidth={2.4}
            className="group-hover/link:translate-x-1 transition-transform duration-300 text-[#0a7a8c]"
          />
        </Link>
      </div>
    </div>
  );
}

export default function CorporateCapabilitiesPanel({ services = CORPORATE_SERVICES }) {
  return (
    <section className="py-16 sm:py-24 bg-white font-sans border-t border-b border-[#0a7a8c]/15" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20" data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-xs sm:text-sm font-black tracking-[0.28em] uppercase text-[#0a7a8c] mb-3.5">
            OUR CAPABILITIES
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.16em] text-[#042E3A]">
            Core Business Sectors
          </h2>
          <div className="mx-auto mt-5 h-[3.5px] w-16 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
          {services.map((service, index) => {
            const staggerDelay = ((index % 4) + 1) * 100;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={staggerDelay}
              >
                <ServiceItem
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
