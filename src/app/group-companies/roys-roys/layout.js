"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RoysRoysLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("roys-roys-theme");

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 40,
    });

    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && AOS) {
        AOS.refreshHard ? AOS.refreshHard() : AOS.refresh();
      }
    }, 120);

    return () => {
      document.body.classList.remove("roys-roys-theme");
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && AOS) {
        AOS.refreshHard ? AOS.refreshHard() : AOS.refresh();
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
