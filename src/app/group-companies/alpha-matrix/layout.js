"use client";

import { useEffect } from "react";
import "./alpha-matrix.css";

export default function AlphaMatrixLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("alpha-matrix-theme");
    return () => {
      document.body.classList.remove("alpha-matrix-theme");
    };
  }, []);

  return <div className="alpha-matrix-theme min-h-screen bg-[#050E1A] text-slate-100">{children}</div>;
}
