import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { COLORS } from "../constants";
import { Container, SectionHeading, Card } from "./Shared";
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
          {GATEWAY_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/group-companies/gateway/services/${service.slug}`}
                className="p-6 rounded-2xl border bg-white shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-4"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Icon size={22} style={{ color: COLORS.white }} />
                  </div>
                  <h3
                    className="text-sm font-black mb-2 group-hover:text-[#173F8A] transition-colors leading-snug"
                    style={{ color: COLORS.textDark }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs font-normal leading-relaxed line-clamp-3 mb-4"
                    style={{ color: COLORS.textGray }}
                  >
                    {service.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-[#173F8A] group-hover:text-[#2E8B57] transition-colors">
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
