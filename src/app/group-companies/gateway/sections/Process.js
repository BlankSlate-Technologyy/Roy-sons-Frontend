import React from "react";
import { COLORS, PROCESS_STEPS } from "../constants";
import { Container, SectionHeading, Card } from "./Shared";

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50" style={{ backgroundColor: COLORS.background }}>
      <Container>
        <SectionHeading
          eyebrow="OUR PROCESS — HOW WE DELIVER RESULTS"
          title="Our Approach"
          subtitle="A systematic, highly rigorous framework designed to accelerate DRAP and international registrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => {
            return (
              <Card
                key={step.step}
                delay={index * 0.1}
                className="flex gap-5 p-6 border shadow-sm relative overflow-hidden"
              >
                {/* Number Badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {step.step}
                </div>

                <div className="flex flex-col mt-1">
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: COLORS.textDark }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs font-medium leading-relaxed"
                    style={{ color: COLORS.textGray }}
                  >
                    {step.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
