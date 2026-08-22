"use client";

import { useEffect } from "react";
import "./neomrecruitment.css";

export default function NeomCityRecruitmentLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("neom-recruitment-theme", "neom-city-recruitment-theme");
    return () => {
      document.body.classList.remove("neom-recruitment-theme", "neom-city-recruitment-theme");
    };
  }, []);

  return (
    <div className="neom-recruitment-theme neom-city-recruitment-theme min-h-screen bg-white text-[#475569]">
      {children}
    </div>
  );
}
