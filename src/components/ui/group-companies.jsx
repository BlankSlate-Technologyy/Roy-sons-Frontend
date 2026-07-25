import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

import Image from "next/image";

function HoldingDivisionItem({ name, subtitle, tagline, href, image }) {
  const hasText = subtitle || tagline;
  return (
    <Link
      href={href}
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
              className="object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ) : (
          <Building2
            size={76}
            strokeWidth={1.2}
            className="text-neutral-400 group-hover:scale-110 transition-all duration-300"
          />
        )}
      </div>

      {hasText && (
        <div className="px-4 pb-4 text-center">
          <h3 className="text-[16px] font-black tracking-[0.05em] uppercase text-black leading-snug mb-1">
            {name}
          </h3>
          {subtitle && (
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-neutral-700 mb-2">
              {subtitle}
            </p>
          )}
          {tagline && (
            <p className="text-[11px] text-neutral-700 leading-relaxed font-normal">
              {tagline}
            </p>
          )}
        </div>
      )}
    </Link>
  );
}

export default function SubsidiariesHoldingsGrid({
  holdings = CORPORATE_HOLDINGS,
}) {
  return (
    <section className="py-16 bg-neutral-50/20 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-14">
          <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-700 mb-4">
            OUR COMPANIES
          </h4>
          <h2 className="text-1xl md:text-3xl lg:text-[34px] font-black tracking-[0.05em] uppercase text-neutral-950 leading-snug md:leading-snug lg:leading-tight">
            ROYSONS holding is a Diverse group <br className="hidden sm:block" />
           of INDUSTRY-LEADING BUSINESSES
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {holdings.map((entity, index) => (
            <HoldingDivisionItem 
              key={index} 
              name={entity.name}
              subtitle={entity.subtitle}
              tagline={entity.tagline}
              href={entity.href} 
              image={entity.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
