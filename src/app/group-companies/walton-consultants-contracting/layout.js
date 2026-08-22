"use client";

import { useEffect } from "react";
import "./walton.css";

export default function WaltonLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("walton-theme", "walton-consultants-theme");
    return () => {
      document.body.classList.remove("walton-theme", "walton-consultants-theme");
    };
  }, []);

  return (
    <div className="walton-theme walton-consultants-theme min-h-screen bg-white text-[#3A4E63]">
      {children}
    </div>
  );
}
