"use client";

import { useEffect } from "react";
import "./swiss-farm.css";

export default function SwissFarmLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("swiss-farm-theme");
    return () => {
      document.body.classList.remove("swiss-farm-theme");
    };
  }, []);

  return (
    <div className="swiss-farm-theme min-h-screen bg-white text-[#1C522A]">
      {children}
    </div>
  );
}
