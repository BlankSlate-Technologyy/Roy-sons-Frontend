"use client";

import { useEffect } from "react";
import "./pakconsult.css";

export default function PakistanConsultancyLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("pakistan-consultancy-theme", "pak-consultancy-theme");
    return () => {
      document.body.classList.remove("pakistan-consultancy-theme", "pak-consultancy-theme");
    };
  }, []);

  return (
    <div className="pakistan-consultancy-theme pak-consultancy-theme min-h-screen bg-white text-[#48525D]">
      {children}
    </div>
  );
}
