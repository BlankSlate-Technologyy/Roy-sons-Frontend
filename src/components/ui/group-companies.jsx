"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, ChevronDown, ChevronUp } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

import Image from "next/image";

function HoldingDivisionItem({ name, subtitle, tagline, href, image, isExternal }) {
  const hasText = subtitle || tagline;
  const isExternalLink = isExternal || href?.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className={`flex flex-col border border-neutral-200 bg-white hover:border-neutral-950 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 group rounded-[3px] h-full overflow-hidden ${hasText ? "" : "items-center justify-center p-3"}`}
    >
      <div className={hasText ? "p-3" : ""}>
        {image ? (
          <div className="relative w-full h-48 overflow-hidden rounded-[2px]">
            <Image 
              src={image} 
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transform group-hover:scale-90 transition-transform duration-300"
            />
          </div>
        ) : (
          <Building2
            size={76}
            strokeWidth={1.2}
            className="text-neutral-400 group-hover:scale-90 transition-all duration-300"
          />
        )}
      </div>

      {hasText && (
        <div className="px-4 pb-5 pt-1 text-center flex flex-col items-center">
          <h3 className="text-[20px] font-black tracking-[0.04em] uppercase text-[#042E3A] leading-snug">
            {name}
          </h3>
          {subtitle && (
            <>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#042E3A] to-[#0d9488] my-2.5 rounded-full flex-shrink-0" />
              <p className="text-[15px] font-bold tracking-[0.12em] uppercase text-[#042E3A]/80">
                {subtitle}
              </p>
            </>
          )}
          {tagline && (
            <>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#042E3A] to-[#0d9488] my-2.5 rounded-full flex-shrink-0" />
              <p className="text-[15px] text-[#042E3A]/80 leading-relaxed font-normal">
                {tagline}
              </p>
            </>
          )}
        </div>
      )}
    </Link>
  );
}

export default function SubsidiariesHoldingsGrid({
  holdings = CORPORATE_HOLDINGS,
}) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-16 bg-white font-sans" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14" data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-[15px] font-bold tracking-[0.25em] uppercase text-[#0a7a8c] mb-4">
            OUR COMPANIES
          </h4>
          <h2 className="text-xl md:text-3xl lg:text-[38px] font-black tracking-[0.05em] uppercase text-[#042E3A] leading-snug md:leading-snug lg:leading-tight">
            ROYSONS holding is a Diverse group <br className="hidden sm:block" />
           of INDUSTRY-LEADING BUSINESSES
          </h2>
        </div>

        {/* Grid: 1 card per row on mobile (grid-cols-1), 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3">
          {holdings.map((entity, index) => {
            const isHiddenOnMobile = !showAllMobile && index >= 3;
            const staggerDelay = ((index % 4) + 1) * 100;
            return (
              <div
                key={index}
                className={isHiddenOnMobile ? "hidden sm:block" : "block"}
                data-aos="fade-up"
                data-aos-delay={staggerDelay}
              >
                <HoldingDivisionItem 
                  name={entity.name}
                  subtitle={entity.subtitle}
                  tagline={entity.tagline}
                  href={entity.href} 
                  image={entity.image}
                  isExternal={entity.isExternal}
                />
              </div>
            );
          })}
        </div>

        {/* View All button for Mobile */}
        {holdings.length > 3 && (
          <div className="mt-8 flex justify-center sm:hidden" data-aos="fade-up" data-aos-delay="200">
            <button
              type="button"
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#0a7a8c] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white text-[15px] font-black uppercase tracking-widest rounded-[3px] active:scale-95 transition-all shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
            >
              <span className="text-white font-black">{showAllMobile ? "SHOW LESS" : "VIEW ALL"}</span>
              {showAllMobile ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
