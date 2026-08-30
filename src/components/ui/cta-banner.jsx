import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";

export default function ConsultationBanner({
  title = "Let's build something great together.",
  subtitle = "HAVE A PROJECT IN MIND?",
  buttonLabel = "REQUEST A CONSULTATION",
  href = "/contact",
}) {
  return (
    <section className="bg-neutral-950 py-14 font-sans" data-aos="zoom-in" data-aos-delay="100">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center gap-5 w-full md:w-auto" data-aos="fade-right" data-aos-delay="150">
          <div className="w-14 h-14 bg-white/[0.08] rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
            <Headphones size={24} className="text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[14px] font-bold tracking-[0.25em] uppercase text-white/50 mb-1">
              {subtitle}
            </p>
            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
              {title}
            </h2>
          </div>
        </div>

        <Link
          href={href}
          id="cta-consultation-btn"
          data-aos="fade-left"
          data-aos-delay="200"
          className="rs-cta-btn flex-shrink-0 inline-flex items-center gap-3.5 border-2 border-[#C6A15A] bg-transparent px-7 py-3.5 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-[#C6A15A] hover:border-[#C6A15A] transition-all duration-300 group"
        >
          <span className="text-[#C6A15A] group-hover:text-black transition-colors duration-300">{buttonLabel}</span>
          <ArrowRight size={13} strokeWidth={2.4} className="text-[#C6A15A] group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
        </Link>
        
      </div>
    </section>
  );
}
