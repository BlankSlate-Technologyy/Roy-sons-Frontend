import React, { useEffect, useState, useRef } from "react";
import { COLORS, STATS_ITEMS } from "../constants";
import { Container, Card } from "./Shared";

function Counter({ targetValue, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract pure number from formatted string (e.g. "200+" -> 200)
  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ""), 10) || 0;
  // Get suffix (e.g. "+" or "%")
  const suffix = targetValue.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * numericTarget));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // eslint-disable-line react-hooks/exhaustive-deps
      }
    };
  }, [numericTarget, duration]);

  return (
    <span ref={elementRef} className="font-extrabold text-3xl sm:text-4xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 bg-slate-50 border-t border-b" style={{ backgroundColor: COLORS.background, borderColor: COLORS.border }}>
      <Container>
        <span
          className="text-center text-xs font-bold tracking-widest uppercase block mb-10"
          style={{ color: COLORS.textGray }}
        >
          Company Statistics
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS_ITEMS.map((item, index) => (
            <Card
              key={item.label}
              className="text-center p-6 border shadow-sm flex flex-col justify-center items-center hover:scale-105"
              delay={index * 0.06}
            >
              <span className="mb-2 block" style={{ color: COLORS.primary }}>
                <Counter targetValue={item.value} />
              </span>
              <p
                className="text-[10px] font-bold uppercase tracking-wider leading-snug"
                style={{ color: COLORS.textDark }}
              >
                {item.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
