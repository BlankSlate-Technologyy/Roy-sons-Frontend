"use client";

import { useEffect } from "react";
import "./pak-medical.css";

export default function PakMedicalLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("pak-medical-theme", "pak-janitorial-theme");
    return () => {
      document.body.classList.remove("pak-medical-theme", "pak-janitorial-theme");
    };
  }, []);

  return (
    <div className="pak-medical-theme pak-janitorial-theme min-h-screen bg-white text-[#1E2A3A]">
      {children}
    </div>
  );
}
