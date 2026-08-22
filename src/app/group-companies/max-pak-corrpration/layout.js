"use client";

import { useEffect } from "react";
import "./maxpak.css";

export default function MaxPakLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("max-pak-theme");
    return () => {
      document.body.classList.remove("max-pak-theme");
    };
  }, []);

  return (
    <div className="max-pak-theme min-h-screen bg-white text-[#475569]">
      {children}
    </div>
  );
}
