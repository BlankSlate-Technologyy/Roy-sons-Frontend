"use client";

import { useEffect } from "react";
import "./nfs.css";

export default function NationalFoodLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("national-food-theme", "nfs-food-theme", "nfs-theme");
    return () => {
      document.body.classList.remove("national-food-theme", "nfs-food-theme", "nfs-theme");
    };
  }, []);

  return (
    <div className="national-food-theme nfs-food-theme nfs-theme min-h-screen bg-white text-[#4E5456]">
      {children}
    </div>
  );
}
