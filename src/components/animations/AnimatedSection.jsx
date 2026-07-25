"use client";

import { motion } from "framer-motion";
import {
  heroVariant,
  aboutVariant,
  staggerContainer,
  rotatePopVariant,
  zoomStaggerVariant,
  fadeSlideUpVariant,
  ctaVariant,
  fadeInVariant,
} from "./animationVariants";

const PRESET_VARIANTS = {
  hero: heroVariant,
  about: aboutVariant,
  services: staggerContainer,
  features: rotatePopVariant,
  portfolio: zoomStaggerVariant,
  testimonials: fadeSlideUpVariant,
  faq: fadeSlideUpVariant,
  cta: ctaVariant,
  footer: fadeInVariant,
};

export default function AnimatedSection({
  id,
  className = "",
  style = {},
  preset = "testimonials",
  customVariant,
  once = true,
  amount = 0.15,
  children,
}) {
  const variantToUse = customVariant || PRESET_VARIANTS[preset] || fadeSlideUpVariant;

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variantToUse}
    >
      {children}
    </motion.section>
  );
}
