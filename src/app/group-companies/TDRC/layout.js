"use client";

import { useEffect } from "react";
import "./tdrc.css";

export default function TDRCLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("tdrc-theme");
    return () => {
      document.body.classList.remove("tdrc-theme");
    };
  }, []);

  return (
    <div className="tdrc-theme min-h-screen bg-white text-[#0E1F17]">
      {children}
    </div>
  );
}
