"use client";

import { useEffect } from "react";
import "./inverseunion.css";

export default function InverseUnionLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("inverse-union-theme", "inverse-theme");
    return () => {
      document.body.classList.remove("inverse-union-theme", "inverse-theme");
    };
  }, []);

  return (
    <div className="inverse-union-theme inverse-theme min-h-screen bg-white text-[#4A5568]">
      {children}
    </div>
  );
}
