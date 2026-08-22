"use client";

import { useEffect } from "react";
import "./national-mines.css";

export default function NationalMinesLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("national-mines-theme");
    return () => {
      document.body.classList.remove("national-mines-theme");
    };
  }, []);

  return (
    <div className="national-mines-theme min-h-screen bg-white text-[#16243E]">
      {children}
    </div>
  );
}
