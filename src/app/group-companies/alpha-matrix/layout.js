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

  return <div className="alpha-matrix-theme min-h-screen bg-white text-[#0B1B36]">{children}</div>;
}
