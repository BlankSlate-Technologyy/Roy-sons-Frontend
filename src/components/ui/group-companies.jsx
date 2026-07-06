import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

import Image from "next/image";

function HoldingDivisionItem({ name, href, image }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center border border-neutral-200 bg-white p-6 hover:border-neutral-950 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 group min-h-[160px] rounded-[3px] h-full"
    >
      {image ? (
        <div className="relative w-full h-28 overflow-hidden rounded-[3px]">
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
          className="text-neutral-400 group-hover:text-black group-hover:scale-110 transition-all duration-300"
        />
      )}
    </Link>
  );
}

export default function SubsidiariesHoldingsGrid({
  holdings = CORPORATE_HOLDINGS,
}) {
  const ADDED_COMPANIES = [
    "MAX POWER CORPORATION",
    "INVERSE UNION TRADING",
    "ROYS & ROYS INTERNATIONAL",
    "DESERT DEVELOPMENT & REHABILITATION CORPORATION",
    "SWISS HOMES",
    "DIGITAL ZONING CORPORATION",
    "PAKISTAN CONSULTANCY SERVICES",
    "PAK JANITORIAL SERVICES",
    "NATIONAL FOOD SERVICES",
    "BIO MAX CORPORATION",
    "NATIONAL AGRICULTURAL CORPORATION",
    "TDRC – THAL DEVELOPMENT & RESEARCH CENTRE",
    "NEOM CITY RECRUITMENT CONSULTANTS",
    "MAX WOOD CORPORATION",
    "GERMAN TECHNOLOGY XPERT (GTX)",
    "NATIONAL MINES CORPORATION (NMC)"
  ];

  return (
    <section className="py-16 border-b border-neutral-100 bg-neutral-50/20 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-14">
          <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-500 mb-4">
            OUR COMPANIES
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black tracking-[0.05em] uppercase text-neutral-950 leading-snug md:leading-snug lg:leading-tight">
            A DIVERSE GROUP OF<br className="hidden sm:block" /> INDUSTRY-LEADING BUSINESSES
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-3">
          {holdings.map((entity, index) => (
            <HoldingDivisionItem 
              key={index} 
              name={entity.name} 
              href={entity.href} 
              image={entity.image}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {ADDED_COMPANIES.map((name, index) => (
            <div 
              key={`text-card-${index}`} 
              className="flex flex-col items-center justify-center p-5 bg-white border border-neutral-200 hover:border-neutral-950 hover:shadow-sm transition-all duration-300 min-h-[90px] text-center group cursor-default rounded-[3px]"
            >
               <span className="text-[10px] font-extrabold text-neutral-600 group-hover:text-black uppercase tracking-widest leading-relaxed">
                 {name}
               </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
