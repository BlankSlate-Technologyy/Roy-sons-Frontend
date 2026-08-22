"use client";

import { useEffect } from "react";
import "./swiss-homes.css";

export default function SwissHomesLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("swiss-homes-theme");
    return () => {
      document.body.classList.remove("swiss-homes-theme");
    };
  }, []);

  return (
    <div className="swiss-homes-theme min-h-screen bg-white text-[#2B2B2B]">
      {children}
    </div>
  );
}
