import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

function HoldingDivisionItem({ name, href }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-3.5 border border-neutral-200 bg-white p-5 hover:border-neutral-950 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 group min-h-[110px] rounded-[3px]"
    >
      <Building2
        size={28}
        strokeWidth={1.3}
        className="text-neutral-400 group-hover:text-black group-hover:scale-105 transition-all duration-300"
      />
      <span className="text-[9.5px] font-extrabold tracking-[0.15em] uppercase text-center text-neutral-600 group-hover:text-black transition-colors duration-300">
        {name}
      </span>
    </Link>
  );
}

export default function SubsidiariesHoldingsGrid({
  holdings = CORPORATE_HOLDINGS,
  allCompaniesPath = "/group-companies",
}) {
  return (
    <section className="py-16 border-b border-neutral-100 bg-neutral-50/20 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[22px] font-black uppercase tracking-[0.24em] text-neutral-950">
            Group of Companies
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-neutral-950" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-9">
          {holdings.map((entity, index) => (
            <HoldingDivisionItem 
              key={index} 
              name={entity.name} 
              href={entity.href} 
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href={allCompaniesPath}
            id="view-all-companies-btn"
            className="inline-flex items-center gap-3.5 border-2 border-neutral-950 bg-transparent px-8 py-3.5 text-[10.5px] font-bold tracking-[0.2em] uppercase text-neutral-950 hover:bg-neutral-950 hover:text-white transition-all duration-300"
          >
            VIEW ALL COMPANIES
            <ArrowRight size={13} strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
