import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { COLORS } from "../constants";
import { Container, SectionHeading } from "./Shared";
import { GATEWAY_SERVICES } from "../services-data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white" style={{ backgroundColor: COLORS.white }}>
      <Container>
        <SectionHeading
          eyebrow="COMPLETE REGULATORY CONSULTANCY SOLUTIONS"
          title="Our Services"
          subtitle="Precision-engineered professional consulting for drug registrations, renewals, and compliance dossiers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GATEWAY_SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/group-companies/gateway/services/${service.slug}`}
                className="rounded-2xl border bg-white shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div className="relative w-full h-36 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image || service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 text-[#173F8A] shadow-xs backdrop-blur-xs">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <Icon size={20} style={{ color: COLORS.white }} />
                    </div>
                    <h3
                      className="text-sm font-black mb-1.5 group-hover:text-[#173F8A] transition-colors leading-snug"
                      style={{ color: COLORS.textDark }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs font-normal leading-relaxed line-clamp-2 mb-2"
                      style={{ color: COLORS.textGray }}
                    >
                      {service.overview}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-[#173F8A] group-hover:text-[#2E8B57] transition-colors">
                  <span>View Details</span>
                  <Icons.ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/group-companies/gateway/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#12316B] cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore All 8 Regulatory Services</span>
            <Icons.ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
