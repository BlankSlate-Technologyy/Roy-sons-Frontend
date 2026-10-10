"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VetvacPharmaLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");

    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, [pathname]);

  return <div className="vetvac-pharma-root">{children}</div>;
}
