import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "../constants";

// Reusable Container component matching design width restrictions
export const Container = ({ children, className = "", id }) => {
  return (
    <div
      id={id}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

// Reusable custom Button component (Senior Frontend Engineer standard)
export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  href,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "text-white hover:opacity-95 shadow-md",
    secondary: "border shadow-sm hover:bg-slate-50",
    gradient: "text-white shadow-lg hover:brightness-105",
  };

  const inlineStyles = {
    primary: {
      backgroundColor: COLORS.primary,
      color: COLORS.white,
      "--tw-ring-color": COLORS.primary,
    },
    secondary: {
      borderColor: COLORS.border,
      color: COLORS.primary,
      backgroundColor: COLORS.white,
      "--tw-ring-color": COLORS.primary,
    },
    gradient: {
      background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
      color: COLORS.white,
      "--tw-ring-color": COLORS.primary,
    },
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={inlineStyles[variant]}
    >
      {children}
    </Component>
  );
};

// Reusable Section Heading component
export const SectionHeading = ({ eyebrow, title, subtitle, align = "center", light = false }) => {
  const alignment = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignment[align]}`}>
      {eyebrow && (
        <span
          className="text-xs font-bold tracking-widest uppercase block mb-3"
          style={{ color: COLORS.secondary }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
        style={{ color: light ? COLORS.white : COLORS.textDark }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[15px] leading-relaxed font-medium"
          style={{ color: light ? "rgba(255,255,255,0.8)" : COLORS.textGray }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-14 rounded-full ${align === "center" ? "mx-auto" : ""}`}
        style={{ backgroundColor: COLORS.secondary }}
      />
    </div>
  );
};

// Reusable premium hover-animated Card component
export const Card = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl border p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg ${className}`}
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.border,
      }}
    >
      {children}
    </motion.div>
  );
};
