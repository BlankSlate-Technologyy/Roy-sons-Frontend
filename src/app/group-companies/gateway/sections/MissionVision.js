import React from "react";
import { Eye, Target } from "lucide-react";
import { COLORS } from "../constants";
import { Container, Card } from "./Shared";

export default function MissionVision() {
  const cards = [
    {
      icon: Eye,
      eyebrow: "OUR VISION",
      title: "Trusted Regulatory Partner",
      body: "To become the most trusted regulatory consultancy partner, recognised for expertise, integrity, and client success across the pharmaceutical industry.",
      iconBg: `${COLORS.primary}10`,
      iconColor: COLORS.primary,
      accentBorder: `4px solid ${COLORS.primary}`,
    },
    {
      icon: Target,
      eyebrow: "OUR MISSION",
      title: "Simplify Regulatory Complexity",
      body: "To simplify regulatory complexity by providing accurate, timely, and compliant consultancy solutions for pharmaceutical organisations globally.",
      iconBg: `${COLORS.secondary}10`,
      iconColor: COLORS.secondary,
      accentBorder: `4px solid ${COLORS.secondary}`,
    },
  ];

  return (
    <section className="py-20 bg-slate-50" style={{ backgroundColor: COLORS.background }}>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.eyebrow}
              className="flex gap-6 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              style={{ borderLeft: card.accentBorder }}
              delay={index * 0.15}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: card.iconBg }}
              >
                <Icon size={24} style={{ color: card.iconColor }} />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[10px] font-extrabold tracking-widest uppercase mb-2 block"
                  style={{ color: card.iconColor }}
                >
                  {card.eyebrow}
                </span>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: COLORS.textDark }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: COLORS.textGray }}
                >
                  {card.body}
                </p>
              </div>
            </Card>
          );
        })}
      </Container>
    </section>
  );
}
