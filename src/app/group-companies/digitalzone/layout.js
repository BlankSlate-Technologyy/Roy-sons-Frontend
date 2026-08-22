"use client";

import { useEffect } from "react";
import "./digitalzone.css";

export default function DigitalZoneLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("digitalzone-theme", "digital-zoning-theme");
    return () => {
      document.body.classList.remove("digitalzone-theme", "digital-zoning-theme");
    };
  }, []);

  return (
    <div className="digitalzone-theme digital-zoning-theme min-h-screen bg-white text-[#3E4F61]">
      {children}
    </div>
  );
}
