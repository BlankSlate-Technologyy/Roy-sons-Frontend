import React from "react";
import * as Icons from "lucide-react";
import { COLORS, INDUSTRIES } from "../constants";
import { Container, SectionHeading, Card } from "./Shared";

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white" style={{ backgroundColor: COLORS.white }}>
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Our Markets"
          subtitle="Providing direct licensing, strategy, and regulatory consulting for specialized healthcare sectors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, index) => {
            const Icon = Icons[ind.iconName] || Icons.HelpCircle;

            return (
              <Card
                key={ind.label}
                delay={index * 0.08}
                className="flex items-center gap-4 p-6 shadow-sm hover:shadow-md transition-shadow group duration-300"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: `${COLORS.primary}10` }}
                >
                  <Icon size={18} style={{ color: COLORS.primary }} />
                </div>
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{ color: COLORS.textDark }}
                >
                  {ind.label}
                </h3>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
