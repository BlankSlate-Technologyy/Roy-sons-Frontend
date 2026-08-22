"use client";

import { useEffect } from "react";
import "./desertdev.css";

export default function DesertDevelopmentLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("desert-development-theme", "desert-theme");
    return () => {
      document.body.classList.remove("desert-development-theme", "desert-theme");
    };
  }, []);

  return (
    <div className="desert-development-theme desert-theme min-h-screen bg-white text-[#425C52]">
      {children}
    </div>
  );
}
