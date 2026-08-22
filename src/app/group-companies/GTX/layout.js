"use client";

import { useEffect } from "react";
import "./gtx.css";

export default function GTXLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("gtx-theme");
    return () => {
      document.body.classList.remove("gtx-theme");
    };
  }, []);

  return (
    <div className="gtx-theme min-h-screen bg-white text-[#202A36]">
      {children}
    </div>
  );
}
