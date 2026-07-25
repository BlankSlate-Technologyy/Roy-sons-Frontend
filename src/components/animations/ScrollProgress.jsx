"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress({ color = "#1B4FCC" }) {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left pointer-events-none"
      style={{
        backgroundColor: color,
        scaleX: progress / 100,
      }}
      transition={{ ease: "linear", duration: 0.1 }}
    />
  );
}
