"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function Counter({
  value,
  duration = 2,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const raw = String(value).replace(/,/g, "");
    const numericValue = parseFloat(raw);

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const hasComma = String(value).includes(",");
    const suffixMatch = String(value).match(/[+%a-zA-Z]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";

    const controls = animate(0, numericValue, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        const rounded = Math.floor(val);
        const formatted = hasComma ? rounded.toLocaleString("en-US") : String(rounded);
        setDisplayValue(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className} style={style} suppressHydrationWarning>
      {displayValue}
    </span>
  );
}
