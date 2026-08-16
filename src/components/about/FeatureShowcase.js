"use client";

import Image from "next/image";

const SHOWCASE_ITEMS = [
  {
    id: "01",
    badge: "Web Development",
    title: "We Build Fast, Modern & Responsive Websites",
    description: "We create high-performance websites using the latest technologies like Next.js, React, and Tailwind CSS to help your business stand out online.",
    image: "/web_dev_showcase.jpg",
    imageAlt: "Modern Web Development Workspace",
    bgColor: "bg-white",
    borderColor: "border-neutral-200/80"
  },
  {
    id: "02",
    badge: "Custom Development",
    title: "Powerful Solutions Tailored to Your Needs",
    description: "From custom web applications to complex platforms, we build scalable and secure solutions that grow your business.",
    image: "/custom_dev_code.jpg",
    imageAlt: "Custom Development Code Environment",
    bgColor: "bg-neutral-50",
    borderColor: "border-neutral-200"
  },
  {
    id: "03",
    badge: "Digital Growth",
    title: "Grow Your Business With Digital Marketing",
    description: "We help you reach the right audience, increase brand awareness, and generate more leads with smart digital marketing strategies.",
    image: "/digital_growth_ui.jpg",
    imageAlt: "Digital Growth & Marketing Strategy",
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
                  <p className="text-neutral-600 text-base sm:text-[15px] leading-relaxed max-w-xl font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-100 group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
