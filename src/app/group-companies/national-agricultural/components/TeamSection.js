"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { theme, SectionLabel, SectionHeading } from "./NationalAgriculturalShared";

export const AGRICULTURAL_TEAM = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    badge: "Founder · ROYSONS Group",
    location: "Lahore Headquarters",
    image: "/national-agricultural/team-ijaz-naseer.jpg",
    bio: "Founder of ROYSONS Pvt. Ltd., leading commercial agribusiness development, corporate estate strategy, and sovereign food security partnerships across Pakistan for over 25 years.",
    specialties: ["Agribusiness Strategy", "National Food Security", "Corporate Estates"],
  },
  {
    name: "Zeba Ijaz",
    role: "Chairperson, ROYSONS Trust & Rural Outreach",
    badge: "Rural Development Patron",
    location: "Punjab & Nationwide",
    image: "/national-agricultural/team-zeba-ijaz.jpg",
    bio: "Spearheading community uplift, women-in-agriculture empowerment, sustainable rural livelihoods, and farmer welfare initiatives across farming communities nationwide.",
    specialties: ["Rural Empowerment", "Women in Agriculture", "Sustainability"],
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director, Operations & Growth",
    badge: "Board of Directors",
    location: "Punjab & Indus Basin",
    image: "/national-agricultural/team-hesham-sultan.jpg",
    bio: "Directing strategic agricultural expansion, precision mechanization fleets, smart solar irrigation rollouts, and international export market linkages across the GCC and beyond.",
    specialties: ["Agritech Expansion", "Export Linkages", "Modern Operations"],
  },
  {
    name: "Dr. Ahsan Sardar",
    role: "Executive Director, Partnerships & Trade",
    badge: "Board Director · LCCI Member",
    location: "Lahore & Regional Hubs",
    image: "/national-agricultural/team-ahsan-sardar.jpg",
    bio: "Executive Member of LCCI and senior industry leader driving institutional agribusiness partnerships, dairy cold-chain compliance, and science-backed farm innovation.",
    specialties: ["Institutional Trade", "Quality Standards", "Agri Partnerships"],
  },
];

export function LeadershipTeamSection({ variant = "home", bgClass = "bg-[#F8FAFB]" }) {
  return (
    <section
      id="leadership-team"
      className={`py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b ${bgClass}`}
      style={{ borderColor: theme.border }}
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <SectionLabel>Leadership &amp; Governance</SectionLabel>
            <SectionHeading className="mb-2.5">
              Our Agricultural Leadership Team
            </SectionHeading>
            <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: theme.textMuted }}>
              Led by ROYSONS Group executives and agribusiness visionaries committed to modernizing Pakistan&apos;s crop cultivation, dairy infrastructure, and rural farmer prosperity.
            </p>
          </div>

          {variant === "home" && (
            <Link
              href="/group-companies/national-agricultural/about#leadership-team"
              className="agri-link-arrow text-[15px] font-bold flex items-center gap-1.5 shrink-0 cursor-pointer"
              style={{ color: theme.primaryMid }}
            >
              <span>Explore full leadership profile</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {AGRICULTURAL_TEAM.map((member) => (
            <div
              key={member.name}
              className="agri-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
            >
              <div>
                {/* Portrait */}
                <div className="agri-img-wrapper relative w-full h-72 bg-slate-100">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide px-3 py-1 rounded-full bg-white/95 border shadow-xs"
                      style={{ color: theme.primary, borderColor: theme.border }}
                    >
                      <Award size={12} style={{ color: theme.accent }} />
                      {member.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <MapPin size={13} style={{ color: theme.accentLight }} className="shrink-0" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3
                    className="text-lg sm:text-[19px] font-bold tracking-tight leading-snug mb-1 group-hover:text-[#236B38] transition-colors"
                    style={{ color: theme.navy }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-semibold leading-snug mb-3"
                    style={{ color: theme.primaryMid }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[14.5px] sm:text-[15px] leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Expertise Tags */}
              <div
                className="px-5 pb-5 pt-3 border-t flex flex-wrap gap-1.5"
                style={{ borderColor: theme.borderLight }}
              >
                {member.specialties.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F8FAFB] border"
                    style={{ borderColor: theme.border, color: theme.navy }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
