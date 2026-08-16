"use client";

import Image from "next/image";

const SHOWCASE_ITEMS = [
  {
    id: "01",
    badge: "Leadership That Drives Our Vision",
    title: "Board of Directors",
    description: "The Board of Directors of ROYSONS Pvt. Ltd. provides strategic leadership and direction, guiding the organization toward sustainable growth, innovation, diversification, and long-term value creation across its expanding portfolio of businesses",
    image: "/chairman.jpeg",
    imageAlt: "Board of Directors - ROYSONS Pvt. Ltd.",
    bgColor: "bg-white",
    borderColor: "border-neutral-200/80"
  },
  {
    id: "02",
    badge: "Director",
    title: "Hesham Sultan Ijaz",
    description: "Hesham Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic development, corporate initiatives, and business expansion. His role focuses on supporting the growth of the company's diverse portfolio while exploring new opportunities, partnerships, and emerging markets.\n\nAs part of the Board, he contributes to strategic decision-making and the continued development of ROYSONS as a modern, diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Hesham Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    bgColor: "bg-neutral-50",
    borderColor: "border-neutral-200"
  },
  {
    id: "03",
    badge: "Director",
    title: "Yahya Sultan Ijaz",
    description: "Yahya Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic growth and corporate development. He supports initiatives focused on expanding the company's business portfolio, developing new opportunities, and strengthening ROYSONS' presence across multiple sectors.\n\nHis role within the Board contributes to the organization's long-term strategy, innovation, and continued development as a diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Yahya Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    bgColor: "bg-white",
    borderColor: "border-neutral-200/80"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {SHOWCASE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-8 sm:p-12 lg:p-14 border ${item.borderColor} ${item.bgColor} shadow-xs transition-all duration-300`}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  {/* Badge Pill */}
                  <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 px-3.5 py-1.5 rounded-full w-fit mb-6">
                    <span className="bg-neutral-950 text-[#dfb753] font-bold text-[11px] px-2 py-0.5 rounded-full">
                      {item.id}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      {item.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 leading-[1.18] tracking-tight mb-5">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-600 text-base sm:text-[15px] leading-relaxed max-w-xl font-normal whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-100 group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
