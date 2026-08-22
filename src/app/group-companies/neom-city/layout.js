"use client";

import { useEffect } from "react";
import "./neomcity.css";

export default function NeomCityLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("neom-city-theme", "neom-city-corp-theme");
    return () => {
      document.body.classList.remove("neom-city-theme", "neom-city-corp-theme");
    };
  }, []);

  return (
    <div className="neom-city-theme neom-city-corp-theme min-h-screen bg-white text-[#475569]">
      {children}
    </div>
  );
}
