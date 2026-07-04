import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";

export default function ConsultationBanner({
  title = "Let's build something great together.",
  subtitle = "HAVE A PROJECT IN MIND?",
  buttonLabel = "REQUEST A CONSULTATION",
  href = "/contact",
}) {
  return (
    <section className="bg-neutral-950 py-14 font-sans">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="w-14 h-14 bg-white/[0.08] rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
            <Headphones size={24} className="text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 mb-1">
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
          className="flex-shrink-0 inline-flex items-center gap-3.5 border-2 border-white px-7 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          {buttonLabel}
          <ArrowRight size={13} strokeWidth={2.4} />
        </Link>
        
      </div>
    </section>
  );
}
