"use client";

import { useEffect } from "react";
import "./national-agricultural.css";

export default function NationalAgriculturalLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("national-agricultural-theme");
    return () => {
      document.body.classList.remove("national-agricultural-theme");
    };
  }, []);

  return (
    <div className="national-agricultural-theme min-h-screen bg-white text-[#1A5C2A]">
      {children}
    </div>
  );
}
