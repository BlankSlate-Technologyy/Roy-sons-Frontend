import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_STATS } from "@/lib/constants";

export default function ChairmanAddressBlock({
  executivePhoto = "/chairman.jpeg",
  photoDescription = "Ijaz Naseer - Chairman",
  addressParagraph = "Ijaz Naseer founded Roysons Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, Roys Group stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade.",
  authorTitle = "IJAZ NASEER",
  organizationName = "Chairman & Chief Executive Officer",
  metrics = CORPORATE_STATS,
}) {
  return (
    <section className="py-12 lg:py-16 bg-white font-sans border-b border-neutral-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch justify-between">

          {/* Column 1: Image */}
          <div className="flex-shrink-0 w-full md:w-[260px] mx-auto lg:mx-0">
            <div className="relative w-full h-[280px]">
              <Image
                src={executivePhoto}
                alt={photoDescription}
                fill
                className="object-cover object-top shadow-sm rounded-sm"
                sizes="(max-width: 768px) 100vw, 260px"
              />
            </div>
          </div>

          {/* Column 2: Text Area */}
          <div className="flex-1 max-w-lg lg:max-w-[450px] flex flex-col justify-between">
            <div>
              <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-4 mt-[5px]">
                CHAIRMAN&apos;S MESSAGE
              </h2>
              <p className="text-[14px] text-neutral-600 leading-relaxed font-normal">
                {addressParagraph}
              </p>
            </div>

            <div className="mb-[2px]">
              <h4 className="text-[13px] font-bold text-neutral-900 uppercase tracking-widest">
                {authorTitle}
              </h4>
              <p className="text-[13px] text-neutral-500 font-medium mt-1">
                {organizationName}
              </p>
            </div>
          </div>

          {/* Column 3: Metrics & Button */}
          <div className="w-full lg:w-auto flex flex-col justify-between pt-6 lg:pt-0 border-t border-neutral-100 lg:border-t-0">

            <div className="flex flex-row flex-wrap sm:flex-nowrap gap-6 sm:gap-10">
              {metrics.map((item) => {
                const MetricIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center w-[100px]"
                  >
                    <div className="p-3 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: "#dfb753" }}>
                      <MetricIcon size={22} style={{ color: "#000000" }} strokeWidth={1.5} />
                    </div>
                    <span className="text-[32px] font-black text-neutral-900 tracking-tight leading-none mb-2">
                      {item.value}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider whitespace-pre-line leading-relaxed">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 lg:mt-0 flex justify-end">
              <Link
                href="/about/chairmans-message"
                className="w-full sm:w-[280px] flex items-center justify-center gap-3 px-6 py-[15px] border-2 border-[#dfb753] bg-[#dfb753] !text-black text-[11px] font-extrabold uppercase tracking-[0.15em] hover:bg-black hover:!text-[#dfb753] transition-all duration-300 group"
              >
                <span className="!text-black group-hover:!text-[#dfb753] transition-colors">READ FULL MESSAGE</span>
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform !text-black group-hover:!text-[#dfb753] transition-colors" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
