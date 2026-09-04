"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import CompanyLogosGrid from "@/components/ui/CompanyLogosGrid";

const REGIONAL_OFFICES = [
  { city: "Lahore", detail: "Corporate Headquarters - 123 Business Avenue" },
  { city: "Karachi", detail: "Southern Port Operations & Customs Desk" },
  { city: "Islamabad", detail: "Government Liaison & Diplomatic Desk" },
];

export default function GroupCompaniesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/group-companies" />

      {/* Breadcrumb */}
      <section className="pt-8 pb-4 px-6 border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[10.5px] text-neutral-400 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-neutral-300" />
                <span className="text-neutral-950">  Group Companies</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-5xl">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              OUR SUBSIDIARIES
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-neutral-950 mb-6 leading-tight tracking-tight uppercase">
              ROYSONS holding is a Diverse group<br />
              of INDUSTRY-LEADING BUSINESSES
            </h1>
            <p className="text-[14px] text-neutral-500 leading-relaxed font-normal max-w-2xl">
              ROYSONS Pvt.Ltd comprises 26 specialized corporate entities and divisions working in tandem.
              Together, we cover all strategic business sectors to deliver turnkey capabilities for critical government,
              private, and international operations.
            </p>
          </div>
        </div>
      </section>

      <CompanyLogosGrid />

      {/* Regional Offices */}
      <section className="py-16 sm:py-20 px-6 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-[12px] font-black tracking-[0.24em] text-[#0a7a8c] uppercase mb-3 block">
                NATIONWIDE NETWORK
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#042E3A] leading-tight uppercase tracking-wider mb-4">
                Regional Presence
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-[#0077b6] to-[#02b875] mb-6 rounded-full" />
              <p className="text-[15px] text-neutral-700 leading-relaxed font-normal">
                Our companies coordinate operations through specialized regional offices that manage government pipelines,
                port imports, trade customs, and local client consultancies.
              </p>
            </div>

            <div className="flex-1 lg:w-3/5 w-full flex flex-col gap-6 justify-center">
              <div className="grid gap-4">
                {REGIONAL_OFFICES.map((office, index) => (
                  <div key={index} className="bg-[#f0fdfa] border border-[#0a7a8c]/20 hover:border-[#0a7a8c] p-6 rounded-lg flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#0a7a8c] text-white flex items-center justify-center flex-shrink-0 font-black text-[13px] shadow-sm">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-black uppercase tracking-wider text-[#042E3A] mb-1">
                        {office.city} Office
                      </h4>
                      <p className="text-[14px] text-neutral-700 font-normal">
                        {office.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
