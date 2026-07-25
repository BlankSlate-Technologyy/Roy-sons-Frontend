"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { COLORS } from "../constants";
import { Container } from "./Shared";

export default function MapSection() {
  return (
    <section
      style={{
        backgroundColor: "#F8FAFC",
        padding: "60px 24px 0",
      }}
    >
      <Container>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.white,
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              borderBottom: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.white,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: `${COLORS.primary}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin size={20} color={COLORS.primary} />
            </div>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: COLORS.primary,
                  marginBottom: "2px",
                }}
              >
                Find Us
              </p>
              <p
                style={{
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: COLORS.textDark,
                }}
              >
                1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div style={{ width: "100%", height: "380px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de60e29e3b%3A0x9a9d95ad0e1c7d50!2sRehman%20Centre-2%2C%20Ring%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gateway Pharmaceuticals Consultants Location"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
