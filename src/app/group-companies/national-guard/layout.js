"use client";

import { useEffect } from "react";
import "./national-guard.css";

export default function NationalGuardLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("national-guard-theme");
    return () => {
      document.body.classList.remove("national-guard-theme");
    };
  }, []);

  return (
    <div className="national-guard-theme min-h-screen bg-white text-[#1B365D]">
      {children}
    </div>
  );
}
