"use client";

import { useEffect } from "react";
import "./swiss-huts.css";

export default function SwissHutsLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("swiss-huts-theme");
    return () => {
      document.body.classList.remove("swiss-huts-theme");
    };
  }, []);

  return (
    <div className="swiss-huts-theme min-h-screen bg-white text-[#2A323D]">
      {children}
    </div>
  );
}
