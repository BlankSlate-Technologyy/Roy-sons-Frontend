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
      <p className="text-[15.5px] text-neutral-400 font-bold uppercase tracking-wider mb-2">
        {date}
      </p>
      <h3 className="text-[19px] font-bold text-neutral-950 mb-4 leading-snug min-h-[40px]">
        {title}
      </h3>
      <Link
        href={href}
        className="rs-cta-btn inline-flex items-center gap-2 px-4 py-2 text-[14px] font-bold tracking-[0.16em] uppercase border-2 border-[#dfb753] bg-transparent hover:bg-[#dfb753] hover:border-[#dfb753] transition-all duration-300 w-fit mt-auto group"
      >
        <span className="text-[#dfb753] group-hover:text-black transition-colors duration-300">READ MORE</span>
        <ArrowRight size={10} strokeWidth={2.4} className="text-[#dfb753] group-hover:text-black group-hover:translate-x-0.5 transition-all duration-300" />
      </Link>
    </div>
  );
}

export default function CorporateNewsDesk({ news = CORPORATE_BROADCAST_NEWS }) {
  return (
    <section className="py-16 bg-neutral-50/10 font-sans" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-[26px] font-black uppercase tracking-[0.24em] text-neutral-950">
            Latest News & Updates
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-neutral-950" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => {
            const staggerDelay = (index + 1) * 100;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={staggerDelay}
              >
                <ArticleTile 
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  href={item.href}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/news"
            className="rs-cta-btn inline-flex items-center gap-2.5 px-6 py-3 text-[15px] font-black tracking-[0.18em] uppercase border-2 border-black bg-black text-white hover:bg-[#dfb753] hover:border-[#dfb753] hover:text-black transition-all duration-300 rounded-[2px]"
          >
            <span>VIEW ALL NEWS & INSIGHTS</span>
            <ArrowRight size={13} strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
