"use client";

import { useEffect } from "react";
import "./waltonfood.css";

export default function WaltonMirrorFoodLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("walton-mirror-food-theme", "walton-food-theme", "walton-morris-theme");
    return () => {
      document.body.classList.remove("walton-mirror-food-theme", "walton-food-theme", "walton-morris-theme");
    };
  }, []);

  return (
    <div className="walton-mirror-food-theme walton-food-theme walton-morris-theme min-h-screen bg-white text-[#3D4E44]">
      {children}
    </div>
  );
}
