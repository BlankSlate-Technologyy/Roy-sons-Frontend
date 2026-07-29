"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, NAV_LINKS } from "../constants";
import { Container } from "./Shared";

function scrollToSection(e, href) {
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const targetId = href.replace("#", "");
  const el = document.getElementById(targetId);
  if (el) {
    const navOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled ? "shadow-md py-2" : "py-3"
      }`}
      style={{
        backgroundColor: COLORS.white,
        borderBottom: `1px solid ${scrolled ? "transparent" : COLORS.border}`,
      }}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies" className="flex items-center gap-3 select-none">
          <div className="relative flex items-center py-1">
            <Image
              src="/logo (2).png"
              alt="Gateway Pharmaceuticals Logo"
              width={260}
              height={85}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[13px] font-semibold tracking-wide hover:opacity-100 opacity-90 transition-opacity uppercase relative group py-2 cursor-pointer"
              style={{ color: COLORS.textDark }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: COLORS.secondary }}
              />
            </a>
          ))}
        </nav>



        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none"
          style={{ color: COLORS.textDark }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full overflow-hidden border-t"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-semibold tracking-wide uppercase border-b last:border-0"
                  style={{
                    color: COLORS.textDark,
                    borderColor: "rgba(229, 231, 235, 0.5)",
                  }}
                >
                  {link.label}
                  <ChevronRight size={14} style={{ color: COLORS.textGray }} />
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
