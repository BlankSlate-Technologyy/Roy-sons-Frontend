import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { COLORS, SERVICES } from "../constants";
import { Container, SectionHeading, Card } from "./Shared";

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: COLORS.white }}>
      <Container>
        <SectionHeading
          eyebrow="COMPLETE REGULATORY CONSULTANCY SOLUTIONS"
          title="Our Services"
          subtitle="Precision-engineered professional consulting for drug registrations, renewals, and compliance dossiers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = Icons[service.iconName] || Icons.HelpCircle;

            return (
              <Card
                key={service.title}
                delay={index * 0.08}
                className="flex gap-4 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Icon size={20} style={{ color: COLORS.white }} />
                </div>
                <div className="flex flex-col">
                  <h3
                    className="text-sm font-bold mb-2 group-hover:text-primary transition-colors"
                    style={{ color: COLORS.textDark }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs font-medium leading-relaxed"
                    style={{ color: COLORS.textGray }}
                  >
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/group-companies/gateway/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Explore All 8 Regulatory Services</span>
            <Icons.ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
