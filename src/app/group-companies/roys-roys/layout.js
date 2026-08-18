"use client";

import { useEffect } from "react";

export default function RoysRoysLayout({ children }) {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return <>{children}</>;
}
