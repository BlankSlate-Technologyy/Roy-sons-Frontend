"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";

export default function CompanyLogosGrid() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="pb-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CORPORATE_HOLDINGS.map((company, index) => {
            const isHiddenOnMobile = !showAllMobile && index >= 3;
            const isExt = company.isExternal || company.href?.startsWith("http");
            return (
              <div key={index} className={isHiddenOnMobile ? "hidden sm:block" : "block"}>
                <Link
                  href={company.href}
                  target={isExt ? "_blank" : undefined}
                  rel={isExt ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center justify-between bg-white border border-neutral-200 rounded-lg p-4 group hover:border-black hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
                >
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                    />
                  </div>
                  <div className="w-full pt-3 mt-2 border-t border-neutral-100 flex items-center justify-center text-center">
                    <h3 className="text-[18.5px] sm:text-[19.5px] font-black uppercase tracking-wide text-[#042E3A] group-hover:text-[#0a7a8c] transition-colors line-clamp-2">
                      {company.name}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {CORPORATE_HOLDINGS.length > 3 && (
          <div className="mt-8 flex justify-center sm:hidden">
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
