import React from "react";
import * as Icons from "lucide-react";
import { COLORS, TRUSTED_CLIENTS } from "../constants";
import { Container, Card } from "./Shared";

export default function TrustedBy() {
  return (
    <section className="py-16 border-b" style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}>
      <Container>
        <span
          className="text-center text-xs font-bold tracking-widest uppercase block mb-10"
          style={{ color: COLORS.textGray }}
        >
          — Trusted By Industry Leaders —
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUSTED_CLIENTS.map((client, index) => {
            const IconComponent = Icons[client.iconName] || Icons.HelpCircle;

            return (
              <Card
                key={client.title}
                delay={index * 0.1}
                className="flex flex-col items-center gap-4 text-center p-6 border shadow-sm rounded-2xl hover:scale-105"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: `${COLORS.primary}10` }}
                >
                  <IconComponent size={22} style={{ color: COLORS.primary }} />
                </div>
                <h3
                  className="text-xs font-bold tracking-wide leading-snug"
                  style={{ color: COLORS.textDark }}
                >
                  {client.title}
                </h3>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
