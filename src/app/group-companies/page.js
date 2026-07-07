"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CORPORATE_HOLDINGS } from "@/lib/constants";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

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
                <span className="text-neutral-950">Group Companies</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              OUR SUBSIDIARIES
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-neutral-950 mb-6 leading-tight tracking-tight uppercase">
              Group Companies
            </h1>
            <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
              Roys Group comprises 26 specialized corporate entities and divisions working in tandem.
              Together, we cover all strategic business sectors to deliver turnkey capabilities for critical government,
              private, and international operations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Logos Grid */}
      <section className="pb-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {CORPORATE_HOLDINGS.map((company, index) => (
              <Link
                key={index}
                href={company.href}
                className="flex items-center justify-center bg-neutral-50 border border-neutral-200 rounded-sm p-4 group hover:border-black hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="relative w-full h-36">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 px-6 bg-neutral-950 text-white border-t border-neutral-850">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-[10px] font-black tracking-[0.24em] text-neutral-450 uppercase mb-3 block">
                NATIONWIDE NETWORK
              </span>
              <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-wider mb-6">
                Regional Presence
              </h2>
              <div className="h-1 w-12 bg-white mb-6" />
              <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light">
                Our companies coordinate operations through specialized regional offices that manage government pipelines,
                port imports, trade customs, and local client consultancies.
              </p>
            </div>

            <div className="flex-1 lg:w-3/5 w-full flex flex-col gap-6 justify-center">
              <div className="grid gap-4">
                {REGIONAL_OFFICES.map((office, index) => (
                  <div key={index} className="bg-neutral-900 border border-neutral-800 p-6 rounded-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center flex-shrink-0 text-white font-black text-[12px] mt-0.5">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black uppercase tracking-wider text-white mb-1">
                        {office.city} Office
                      </h4>
                      <p className="text-[12px] text-neutral-400 font-light">
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
