import Image from "next/image";
import { CORPORATE_STATS } from "@/lib/constants";

export default function ChairmanAddressBlock({
  executivePhoto = "/chairman.png",
  photoDescription = "Chairman – Roy Sons Pvt. Ltd.",
  addressParagraph = "At Roy Sons, our mission is to deliver quality, value and innovation in everything we do. We are committed to building a stronger, smarter and sustainable future.",
  authorTitle = "Chairman",
  organizationName = "Roy Sons Pvt. Ltd.",
  metrics = CORPORATE_STATS,
}) {
  return (
    <section className="py-16 border-b border-neutral-100 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          <div className="flex-shrink-0 w-full md:w-[230px] mx-auto lg:mx-0">
            <div className="relative w-full h-[255px] bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm rounded-sm">
              <Image
                src={executivePhoto}
                alt={photoDescription}
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 230px"
              />
            </div>
          </div>

          <div className="flex-1 max-w-full lg:max-w-md">
            <h2 className="text-[11.5px] font-bold tracking-[0.25em] uppercase text-neutral-900 mb-4">
              CHAIRMAN&apos;S MESSAGE
            </h2>
            <p className="text-[13.5px] text-neutral-600 leading-relaxed font-normal mb-6">
              {addressParagraph}
            </p>
            
            <div className="mb-3 select-none">
              <span className="font-serif italic text-2xl text-neutral-400 select-none tracking-wide">
                &#x1F58A; Roy Sons
              </span>
            </div>
            
            <h4 className="text-[11.5px] font-bold text-neutral-900 uppercase tracking-[0.1em]">
              {authorTitle}
            </h4>
            <p className="text-[10.5px] text-neutral-500 font-medium">
              {organizationName}
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-row flex-wrap sm:flex-nowrap justify-between lg:justify-end gap-6 sm:gap-10 lg:gap-12 pt-6 lg:pt-0 lg:ml-auto border-t border-neutral-100 lg:border-t-0">
            {metrics.map((item) => {
              const MetricIcon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="flex flex-col items-center text-center min-w-[85px] flex-1 sm:flex-initial"
                >
                  <div className="p-2.5 bg-neutral-50 rounded-full mb-2.5">
                    <MetricIcon size={25} className="text-neutral-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-black text-neutral-900 tracking-tight leading-none">
                    {item.value}
                  </span>
                  <span className="text-[9.5px] text-neutral-500 font-bold uppercase tracking-wider mt-2.5 whitespace-pre-line leading-relaxed">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
