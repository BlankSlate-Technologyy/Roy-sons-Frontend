"use client";

import { useState, useEffect } from "react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import BillboardSlider from "@/components/ui/hero-slider";
import SubsidiariesHoldingsGrid from "@/components/ui/group-companies";
import CorporateCapabilitiesPanel from "@/components/ui/services-section";
import FeaturedHoldingsShowcase from "@/components/ui/featured-projects";
import ConsultationBanner from "@/components/ui/cta-banner";
import CorporateNewsDesk from "@/components/ui/news-section";
import CorporateFooter from "@/components/ui/footer";
import IntroGatewayScreen from "@/components/ui/IntroGatewayScreen";

export default function RootHomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If explicitly requested via query parameter ?intro=true, show intro
    const params = new URLSearchParams(window.location.search);
    if (params.get("intro") === "true") {
      setShowIntro(true);
      return;
    }
    // If already entered the site in this session, show the original home page
    const entered = sessionStorage.getItem("roysons_intro_entered");
    if (entered === "true" && params.get("skipIntro") !== "false") {
      setShowIntro(false);
    }
  }, []);

  const handleEnterHome = () => {
    sessionStorage.setItem("roysons_intro_entered", "true");
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1. BEFORE HOME PAGE: Show introductory gateway screen (NO NAVBAR, NO FOOTER)
  if (showIntro) {
    return <IntroGatewayScreen onEnterHome={handleEnterHome} />;
  }

  // 2. ORIGINAL HOME PAGE: Rendered exactly as it was originally (WITH NAVBAR & FOOTER)
  return (
    <main className="min-h-screen bg-white">
      <HeaderNavbar activeRoute="/" />
      <BillboardSlider />
      <SubsidiariesHoldingsGrid />
      <CorporateCapabilitiesPanel />
      <FeaturedHoldingsShowcase />
      <ConsultationBanner />
      <CorporateNewsDesk />
      <CorporateFooter />
    </main>
  );
}
