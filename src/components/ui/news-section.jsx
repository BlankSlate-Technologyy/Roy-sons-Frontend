import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_BROADCAST_NEWS } from "@/lib/constants";

function ArticleTile({ image, date, title, href }) {
  return (
    <div className="flex flex-col bg-white border border-[#042E3A]/15 p-4 rounded-sm shadow-[0_2px_8px_rgba(4,46,58,0.03)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(4,46,58,0.08)] hover:border-[#042E3A]/30">
      <div className="relative w-full h-[180px] bg-[#f8fafc] overflow-hidden mb-4 rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-700 ease-in-out hover:grayscale-0 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="text-[15.5px] text-[#042E3A]/60 font-bold uppercase tracking-wider mb-2">
        {date}
      </p>
      <h3 className="text-[19px] font-bold text-[#042E3A] mb-4 leading-snug min-h-[40px]">
        {title}
      </h3>
      <Link
        href={href}
        className="rs-cta-btn inline-flex items-center gap-2 px-4 py-2 text-[13px] font-black tracking-[0.16em] uppercase border-2 border-[#0a7a8c] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white transition-all duration-300 w-fit mt-auto group rounded-[3px] shadow-[0_2px_10px_rgba(10,122,140,0.3)] hover:shadow-[0_4px_18px_rgba(13,148,136,0.5)] hover:-translate-y-0.5"
      >
        <span className="text-white font-black transition-colors duration-300">READ MORE</span>
        <ArrowRight size={10} strokeWidth={2.4} className="text-white group-hover:translate-x-0.5 transition-all duration-300" />
      </Link>
    </div>
  );
}

export default function CorporateNewsDesk({ news = CORPORATE_BROADCAST_NEWS }) {
  return (
    <section className="py-16 bg-white font-sans" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-[26px] font-black uppercase tracking-[0.24em] text-[#042E3A]">
            Latest News & Updates
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488]" />
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
            className="rs-cta-btn inline-flex items-center gap-2.5 px-8 py-3.5 text-[14px] font-black tracking-[0.18em] uppercase border-2 border-[#0a7a8c] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white transition-all duration-300 rounded-[3px] shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5"
          >
            <span className="text-white font-black">VIEW ALL NEWS &amp; INSIGHTS</span>
            <ArrowRight size={13} strokeWidth={2.4} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
