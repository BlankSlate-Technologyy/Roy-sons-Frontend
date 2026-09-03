"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Trophy, Lightbulb, ShieldCheck, Leaf, Landmark } from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const COMMITMENTS = [
  { icon: Trophy, label: "Excellence" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Landmark, label: "National\nDevelopment" },
];

export default function ChairmanMessagePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/about" />

      {/* Breadcrumb */}
      <section className="pt-8 pb-4 px-6 border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[10.5px] text-neutral-400 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-neutral-300" />
                <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-neutral-300" />
                <span className="text-neutral-950">Chairman&apos;s Message</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">

          {/* Page Title */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight">
              Chairman&apos;s Message
            </h1>
            <div className="mx-auto mt-4 sm:mt-5 h-[3px] w-14 bg-neutral-950" />
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 items-center lg:items-start">

            {/* Left – Photo + Signature */}
            <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] lg:w-[340px] mx-auto lg:mx-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px] border border-neutral-200 shadow-sm bg-neutral-900">
                <Image
                  src="/chairman.jpeg"
                  alt="Ijaz Naseer – Chairman & CEO, Roys Group"
                  fill
                  sizes="(max-width: 768px) 340px, 340px"
                  className="object-contain object-top"
                  priority
                />
              </div>

              {/* Signature block */}
              <div className="mt-6 text-center lg:text-left">
                <p
                  className="text-3xl text-neutral-700 mb-2 select-none"
                  style={{ fontFamily: "'Dancing Script', cursive, serif", fontStyle: "italic" }}
                >
                  Ijaz Naseer
                </p>
                <p className="text-[13px] font-black text-neutral-950 uppercase tracking-wide">
                  Ijaz Naseer
                </p>
                <p className="text-[12px] text-neutral-500 font-medium mt-0.5">
                  Chairman &amp; Chief Executive Officer
                </p>
                <div className="mt-3 h-[2px] w-10 bg-neutral-950 mx-auto lg:mx-0" />
              </div>
            </div>

            {/* Right – Message Content */}
            <div className="flex-1 text-left">

              {/* Intro paragraphs */}
              <p className="text-[16.5px] sm:text-[17.5px] text-neutral-700 leading-[1.8] mb-5">
                Ijaz Naseer founded Roysons Pvt. Ltd. with a vision to establish a diversified
                organization capable of delivering world-class solutions across multiple industries.
              </p>
              <p className="text-[16.5px] sm:text-[17.5px] text-neutral-700 leading-[1.8] mb-8">
                Today, Roysons Pvt. Ltd. stands as a multi-sector enterprise operating in healthcare,
                engineering, technology, defense, agriculture, mining, energy, infrastructure,
                and international trade.
              </p>

              {/* Commitment heading */}
              <p className="text-[16px] font-black text-neutral-950 mb-6">
                Our commitment remains focused on:
              </p>

              {/* Five commitment icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-[#0a7a8c]/20 bg-[#f0fdfa]/40 rounded-[2px] mb-8 overflow-hidden divide-x divide-y divide-[#0a7a8c]/15">
                {COMMITMENTS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-3 py-5 sm:py-6 px-3 sm:px-4"
                  >
                    <Icon size={28} strokeWidth={1.5} className="text-[#0a7a8c]" />
                    <span className="text-[12.5px] font-bold text-[#042E3A] text-center whitespace-pre-line leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mid paragraph */}
              <p className="text-[16.5px] sm:text-[17.5px] text-neutral-700 leading-[1.8] mb-8">
                We strive to build long-term relationships with our clients and partners while
                contributing positively to Pakistan&apos;s economic growth and technological advancement.
              </p>

              <div className="h-px w-full bg-neutral-200 mb-8" />

              {/* Future strategy paragraph */}
              <p className="text-[16.5px] sm:text-[17.5px] text-neutral-700 leading-[1.8]">
                The Group&apos;s future growth strategy focuses on healthcare technologies, artificial
                intelligence, hospital engineering, renewable energy, electric mobility, agriculture
                modernization, and international business expansion.
              </p>

            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
