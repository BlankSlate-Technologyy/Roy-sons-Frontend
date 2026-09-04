import Link from "next/link";

export default function ConsultationBanner({
  title = "Ready to Build the Future?",
  subtitle = "Partner with ROYSONS.",
  buttonLabel = "Request Consultation",
  href = "/contact",
}) {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-white font-sans overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
      <div className="max-w-screen-xl mx-auto">
        <div 
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-12 sm:py-16 lg:py-20 px-6 sm:px-12 text-center flex flex-col items-center justify-center border border-white/20 shadow-xl"
          style={{
            background: "linear-gradient(90deg, #0077b6 0%, #009688 50%, #02b875 100%)",
          }}
        >
          {/* Subtle Ambient Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Heading Content */}
          <div className="relative z-10 max-w-3xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.25] tracking-tight">
              {title && <span className="block">{title}</span>}
              {subtitle && <span className="block mt-1 sm:mt-2">{subtitle}</span>}
            </h2>
          </div>

          {/* White Pill Action Button */}
          <div className="relative z-10">
            <Link
              href={href}
              id="cta-consultation-pill-btn"
              className="btn-white-pill inline-flex items-center justify-center bg-white text-[#042630] font-bold text-[14px] sm:text-[15px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>{buttonLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
