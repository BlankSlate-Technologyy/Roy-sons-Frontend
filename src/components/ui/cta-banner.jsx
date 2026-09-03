import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";

export default function ConsultationBanner({
  title = "Let's build something great together.",
  subtitle = "HAVE A PROJECT IN MIND?",
  buttonLabel = "REQUEST A CONSULTATION",
  href = "/contact",
}) {
  return (
    <section className="bg-gradient-to-r from-[#f0fdfa] via-white to-[#f0fdfa] border-y border-[#0a7a8c]/20 py-14 font-sans shadow-[0_4px_20px_rgba(10,122,140,0.05)]" data-aos="zoom-in" data-aos-delay="100">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center gap-5 w-full md:w-auto" data-aos="fade-right" data-aos-delay="150">
          <div className="w-14 h-14 bg-[#f0fdfa] rounded-full flex items-center justify-center flex-shrink-0 border border-[#0a7a8c]/30 shadow-sm">
            <Headphones size={24} className="text-[#0a7a8c]" strokeWidth={2} />
          </div>
          <div>
            <p className="text-[14px] font-bold tracking-[0.25em] uppercase text-[#0a7a8c] mb-1">
              {subtitle}
            </p>
            <h2 className="text-xl md:text-2xl font-black text-[#042E3A] tracking-tight leading-tight">
              {title}
            </h2>
          </div>
        </div>

        <Link
          href={href}
          id="cta-consultation-btn"
          data-aos="fade-left"
          data-aos-delay="200"
          className="rs-cta-btn flex-shrink-0 inline-flex items-center gap-3.5 border-2 border-[#0a7a8c] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white px-8 py-4 text-[13px] font-black tracking-[0.2em] uppercase rounded-[3px] transition-all duration-300 shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5 group"
        >
          <span className="text-white font-black transition-colors duration-300">{buttonLabel}</span>
          <ArrowRight size={13} strokeWidth={2.4} className="text-white group-hover:translate-x-1 transition-all duration-300" />
        </Link>
        
      </div>
    </section>
  );
}
