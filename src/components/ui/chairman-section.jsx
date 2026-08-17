"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CORPORATE_STATS } from "@/lib/constants";

function StatCounter({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const rawValue = String(value || "");
    const match = rawValue.match(/(\d+[\d,.]*)/);
    if (!match) {
      setDisplayValue(rawValue);
      return;
    }

    const numericTarget = parseFloat(match[1].replace(/,/g, ""));
    const prefix = rawValue.slice(0, match.index);
    const suffix = rawValue.slice(match.index + match[1].length);
    const hasDecimal = rawValue.includes(".");

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericTarget * easedProgress;
      const formattedValue = hasDecimal
        ? currentValue.toFixed(1).replace(/\.0$/, "")
        : Math.round(currentValue).toLocaleString("en-US");

      setDisplayValue(`${prefix}${formattedValue}${suffix}`);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          frameId = window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}

export default function ChairmanAddressBlock({
  executivePhoto = "/chairman.jpeg",
  photoDescription = "Ijaz Naseer - Chairman",
  addressParagraph = "Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally. Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.",
  authorTitle = "IJAZ NASEER",
  organizationName = "Chairman & Chief Executive Officer",
  metrics = CORPORATE_STATS,
}) {
  return (
    <section className="py-10 lg:py-12 font-sans bg-[#101518]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">

          {/* Column 1: Image — LEFT with golden border */}
          <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] lg:w-[320px] mx-auto lg:mx-0">
            <div
              className="relative w-full h-[400px] sm:h-[440px] lg:h-[480px] overflow-hidden bg-[#1a1f24]"
              style={{
                border: "2px solid #C6A15A",
                boxShadow: "0 0 18px rgba(198,161,90,0.25), 4px 4px 0px #C6A15A",
                borderRadius: "2px",
              }}
            >
              <Image
                src={executivePhoto}
                alt={photoDescription}
                fill
                className="object-cover object-top rounded-sm"
                sizes="(max-width: 768px) 340px, 320px"
                priority
              />
            </div>
          </div>

          {/* Column 2: Text Content — MIDDLE */}
          <div className="flex-1 flex flex-col justify-between text-center lg:text-left">
            <div>
              <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase mb-4 mt-1 text-[#C6A15A]">
                CHAIRMAN&apos;S MESSAGE
              </h2>
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed font-normal text-neutral-300">
                {addressParagraph}
              </p>
            </div>

            <div className="mb-1 mt-6">
              <h4 className="text-[13px] font-bold uppercase tracking-widest text-white">
                {authorTitle}
              </h4>
              <p className="text-[13px] font-medium mt-1 text-[#C6A15A]">
                {organizationName}
              </p>
            </div>
          </div>

          {/* Column 3: Metrics & Button */}
          <div className="w-full lg:w-auto flex flex-col justify-between pt-6 lg:pt-0 border-t border-neutral-800 lg:border-t-0">
            <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center lg:justify-start gap-6 sm:gap-8">
              {metrics.map((item) => {
                const MetricIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center w-[90px]"
                  >
                    <div className="p-3 rounded-full mb-3 flex items-center justify-center bg-[#C6A15A]/75">
                      <MetricIcon size={22} className="text-[#101518]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[28px] sm:text-[30px] font-black tracking-tight leading-none mb-2 text-white">
                      <StatCounter value={item.value} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider whitespace-pre-line leading-relaxed text-neutral-300">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Link
                href="/about/chairmans-message"
                className="rs-cta-btn w-full sm:w-[260px] flex items-center justify-center gap-3 px-6 py-[15px] border-2 border-[#C6A15A] bg-transparent text-[11px] font-extrabold uppercase tracking-[0.15em] hover:bg-[#C6A15A] hover:border-[#C6A15A] transition-all duration-300 group"
              >
                <span className="text-[#C6A15A] group-hover:text-[#2D3136] transition-colors duration-300">READ FULL MESSAGE</span>
                <ArrowRight size={18} strokeWidth={2.5} className="text-[#C6A15A] group-hover:text-[#2D3136] group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
