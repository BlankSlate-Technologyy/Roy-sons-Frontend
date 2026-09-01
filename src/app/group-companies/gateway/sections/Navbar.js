"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, NAV_LINKS } from "../constants";
import { Container } from "./Shared";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/group-companies/gateway" || pathname === "/group-companies/gateway/";

  const getHref = (link) => {
    if (link.label === "Home") {
      return "/group-companies/gateway";
    }
    if (link.label === "About Us") {
      return "/group-companies/gateway/about";
    }
    if (link.label === "Services") {
      return "/group-companies/gateway/services";
    }
    if (link.label === "Industries") {
      return "/group-companies/gateway/industries";
    }
    if (link.label === "Expertise") {
      return "/group-companies/gateway/expertise";
    }
    if (isHomePage) {
      return link.href;
    }
    return `/group-companies/gateway${link.href.startsWith("#") ? link.href : `#${link.href}`}`;
  };

  const handleNavClick = (e, link) => {
    const targetHref = getHref(link);
    if (isHomePage && targetHref.startsWith("#")) {
      e.preventDefault();
      const targetId = targetHref.replace("#", "");
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
  };

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
        scrolled ? "shadow-md py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      }`}
      style={{
        backgroundColor: COLORS.white,
        borderBottom: `1px solid ${scrolled ? "transparent" : COLORS.border}`,
      }}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/group-companies/gateway" className="flex items-center gap-2.5 select-none">
          <div className="relative flex items-center">
            <Image
              src="/logo (2).png"
              alt="Gateway Pharmaceuticals Logo"
              width={260}
              height={80}
              className="h-14 sm:h-16 lg:h-[68px] w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {NAV_LINKS.map((link) => {
            const href = getHref(link);
            const isActive =
              (link.label === "About Us" && pathname?.startsWith("/group-companies/gateway/about")) ||
              (link.label === "Services" && pathname?.startsWith("/group-companies/gateway/services")) ||
              (link.label === "Industries" && pathname?.startsWith("/group-companies/gateway/industries")) ||
              (link.label === "Expertise" && pathname?.startsWith("/group-companies/gateway/expertise")) ||
              (link.label === "Home" && isHomePage);

            return (
              <Link
                key={link.label}
                href={href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-[11.5px] xl:text-xs font-bold tracking-wide uppercase transition-colors relative py-1 px-1 cursor-pointer"
                style={{ color: isActive ? COLORS.secondary : COLORS.textDark }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                  style={{ backgroundColor: COLORS.secondary }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/group-companies/gateway#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: COLORS.primary }}
          >
            <span>Consult Pharma Desk</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg border transition-colors bg-white cursor-pointer"
            style={{ borderColor: COLORS.border, color: COLORS.textDark }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
              {NAV_LINKS.map((link) => {
                const href = getHref(link);
                return (
                  <Link
                    key={link.label}
                    href={href}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wide uppercase border-b last:border-0"
                    style={{
                      color: COLORS.textDark,
                      borderColor: "rgba(229, 231, 235, 0.5)",
                    }}
                  >
                    {link.label}
                    <ChevronRight size={14} style={{ color: COLORS.textGray }} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
