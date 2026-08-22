"use client";

import { useEffect } from "react";
import "./maxwood.css";

export default function MaxWoodLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("max-wood-theme", "wood-theme");
    return () => {
      document.body.classList.remove("max-wood-theme", "wood-theme");
    };
  }, []);

  return (
    <div className="max-wood-theme wood-theme min-h-screen bg-white text-[#5C5248]">
      {children}
    </div>
  );
}
