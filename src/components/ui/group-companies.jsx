import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

import Image from "next/image";

function HoldingDivisionItem({ name, href, image }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center border border-neutral-200 bg-white p-3 hover:border-neutral-950 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 group rounded-[3px] h-full"
    >
      {image ? (
        <div className="relative w-full h-48 overflow-hidden rounded-[3px]">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {holdings.map((entity, index) => (
            <HoldingDivisionItem 
              key={index} 
              name={entity.name} 
              href={entity.href} 
              image={entity.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
