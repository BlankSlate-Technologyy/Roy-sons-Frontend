import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_BROADCAST_NEWS } from "@/lib/constants";

function ArticleTile({ image, date, title, href }) {
  return (
    <div className="flex flex-col bg-white border border-neutral-100 p-4 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <div className="relative w-full h-[180px] bg-neutral-100 overflow-hidden mb-4 rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-700 ease-in-out hover:grayscale-0 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-2">
        {date}
      </p>
      <h3 className="text-[13.5px] font-bold text-neutral-950 mb-4 leading-snug min-h-[40px]">
        {title}
      </h3>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase text-neutral-900 border-b-2 border-neutral-950 pb-0.5 hover:opacity-60 transition-opacity w-fit mt-auto"
      >
        READ MORE 
        <ArrowRight size={10} strokeWidth={2.4} />
      </Link>
    </div>
  );
}

export default function CorporateNewsDesk({ news = CORPORATE_BROADCAST_NEWS }) {
  return (
    <section className="py-16 border-b border-neutral-100 bg-neutral-50/10 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-[22px] font-black uppercase tracking-[0.24em] text-neutral-950">
            Latest News & Updates
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-neutral-950" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <ArticleTile 
              key={index} 
              image={item.image}
              date={item.date}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
