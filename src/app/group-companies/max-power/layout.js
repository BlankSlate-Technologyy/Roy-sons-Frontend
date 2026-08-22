"use client";

import { useEffect } from "react";
import "./max-power.css";

export default function MaxPowerLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("max-power-theme");
    return () => {
      document.body.classList.remove("max-power-theme");
    };
  }, []);

  return (
    <div className="max-power-theme min-h-screen bg-white text-[#2D3748]">
      {children}
    </div>
  );
}
