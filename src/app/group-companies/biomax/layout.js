"use client";

import { useEffect } from "react";
import "./biomax.css";

export default function BiomaxLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("biomax-theme");
    return () => {
      document.body.classList.remove("biomax-theme");
    };
  }, []);

  return <>{children}</>;
}
