import React from "react";
import * as Icons from "lucide-react";
import { COLORS } from "../constants";
import { Container, Card } from "./Shared";

export default function CoreValues() {
  const valuesList = [
    { label: "Integrity", iconName: "ThumbsUp", desc: "Honesty and moral principles in every decision." },
    { label: "Compliance\nExcellence", iconName: "Award", desc: "Setting the gold standard in regulatory compliance." },
    { label: "Confidentiality", iconName: "Lock", desc: "Securing proprietary data and client details." },
    { label: "Professionalism", iconName: "Star", desc: "Skilled governance from certified professionals." },
    { label: "Client\nCommitment", iconName: "Users", desc: "Placing client challenges at the center of focus." },
    { label: "Accuracy", iconName: "BadgeCheck", desc: "Minimizing errors with peer-reviewed verification." },
    { label: "Transparency", iconName: "Eye", desc: "Clear visibility into all audits and milestones." }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-b" style={{ backgroundColor: COLORS.background, borderColor: COLORS.border }}>
      <Container>
        <span
          className="text-center text-xs font-bold tracking-widest uppercase block mb-10"
          style={{ color: COLORS.textGray }}
        >
          Our Core Values
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {valuesList.map((val, index) => {
            const Icon = Icons[val.iconName] || Icons.HelpCircle;

            return (
              <Card
                key={val.label}
                className="flex flex-col items-center justify-center text-center p-4 border shadow-sm hover:scale-105"
                delay={index * 0.08}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
                  style={{ backgroundColor: `${COLORS.primary}10` }}
                >
                  <Icon size={18} style={{ color: COLORS.primary }} />
                </div>
                <span
                  className="text-[10px] font-bold leading-tight whitespace-pre-line text-center uppercase"
                  style={{ color: COLORS.textDark }}
                >
                  {val.label}
                </span>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
