"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/ui/logo";
import { HEADER_ROUTES } from "@/lib/constants";
import SearchModal from "@/components/ui/SearchModal";

const SERVICES_DROPDOWN_ITEMS = [
  {
    title: "Healthcare & Medical Technologies",
    path: "/services/healthcare-medical",
  },
  {
    title: "Hospital Engineering & Clean Rooms",
    path: "/services/hospital-engineering",
  },
  {
    title: "Veterinary & Livestock Solutions",
    path: "/services/veterinary-livestock",
  },
  {
    title: "Pharmaceutical Consultancy",
    path: "/services/pharmaceutical-consultancy",
  },
  {
    title: "Other",
    path: "/services",
    isOther: true,
  },
];

export default function HeaderNavbar({ activeRoute = "/" }) {
  const pathname = usePathname();
  const currentPath = pathname || activeRoute;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 220);
  };

  const closeServicesDropdown = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesDropdownOpen(false);
  };

  // Dynamic header elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K hotkey and Escape to close dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#0a7a8c]/15 bg-white/95 backdrop-blur-md shadow-none"
            : "border-b border-[#042E3A]/10 bg-white shadow-none"
        }`}
        style={{ boxShadow: "none" }}
      >
        <div
          className={`mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 sm:px-5 lg:px-6 xl:px-8 transition-all duration-300 ${
            isScrolled ? "h-14 sm:h-16 md:h-20 lg:h-[84px]" : "h-16 sm:h-18 md:h-22 lg:h-[104px]"
          }`}
        >
          
          <Link href="/" className="inline-block flex-shrink-0 pr-1 xl:pr-4">
            <BrandLogo />
          </Link>

          <nav aria-label="Desktop Navigation" className="hidden lg:flex h-full items-center justify-center flex-1 px-1 xl:px-3">
            <ul className="flex h-full items-center gap-0 xl:gap-1">
              {HEADER_ROUTES.map((route) => {
                const isServicesRoute = route.path === "/services";
                const isActive =
                  activeRoute === route.path ||
                  (isServicesRoute && (activeRoute.startsWith("/services") || isServicesDropdownOpen));

                return (
                  <li
                    key={route.path}
                    className="relative flex h-full items-center"
                    onMouseEnter={isServicesRoute ? handleServicesMouseEnter : undefined}
                    onMouseLeave={isServicesRoute ? handleServicesMouseLeave : undefined}
                  >
                    <Link
                      href={route.path}
                      onClick={() => {
                        if (isServicesRoute) {
                          closeServicesDropdown();
                        }
                      }}
                      className={`nav-text-link px-2 xl:px-3 py-1.5 text-[12px] xl:text-[13.5px] 2xl:text-[14.5px] font-bold tracking-[0.02em] xl:tracking-[0.06em] uppercase transition-all duration-300 relative whitespace-nowrap !bg-transparent hover:!bg-transparent !border-none !shadow-none flex items-center gap-1.5
                        ${isActive
                          ? "!text-[#042E3A] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-6 xl:after:w-7 after:h-[3px] after:bg-[#0a7a8c] after:rounded-full"
                          : "!text-[#042E3A]/80 hover:!text-[#0a7a8c] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-[#0a7a8c] hover:after:w-6 xl:hover:after:w-7 after:rounded-full after:transition-all after:duration-300"
                        }`}
                      style={{
                        background: "none",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <span>{route.title}</span>
                      {isServicesRoute && (
                        <ChevronDown
                          size={13}
                          strokeWidth={2.6}
                          className={`transition-transform duration-300 ${
                            isServicesDropdownOpen ? "rotate-180 text-[#0a7a8c]" : "text-[#042E3A]/60"
                          }`}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2 xl:gap-3 flex-shrink-0">
            <button
              id="navbar-search-btn"
              aria-label="Toggle search bar"
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-[#042E3A] hover:text-[#0891b2] bg-transparent hover:bg-[#042E3A]/5 rounded-lg transition-all cursor-pointer flex-shrink-0"
              title="Search website (Ctrl + K)"
            >
              <Search size={18} strokeWidth={2.2} />
            </button>

            <button
              id="navbar-mobile-btn"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#042E3A] bg-transparent cursor-pointer rounded-lg hover:bg-[#042E3A]/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={21} strokeWidth={2.2} /> : <Menu size={21} strokeWidth={2.2} />}
            </button>
          </div>
        </div>

        {/* Mega-Menu Dropdown for Services (Matches Reference Design) */}
        <div
          data-services-menu="true"
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          className={`hidden lg:block absolute top-full left-0 w-full transition-all duration-300 ease-out origin-top ${
            isServicesDropdownOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
            borderTop: "1px solid rgba(10, 122, 140, 0.18)",
            borderBottom: "2px solid rgba(10, 122, 140, 0.22)",
            boxShadow: "0 25px 45px -12px rgba(4, 46, 58, 0.18), 0 0 25px rgba(10, 122, 140, 0.08)",
          }}
        >
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-7 lg:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              
              {/* Left Column: Image Banner + Intro Box (Light theme with mint/cyan accent) */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row rounded-md overflow-hidden border border-[#0a7a8c]/20 shadow-lg bg-white">
                {/* Photo on left of banner */}
                <div className="relative sm:w-[46%] min-h-[190px] sm:min-h-[220px] overflow-hidden group/img">
                  <Image
                    src="/ROYSONS Slide Image 10.jpeg"
                    alt="ROYSONS Construction & Infrastructure Services"
                    fill
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/40 via-transparent to-transparent" />
                </div>

                {/* Light Soft Mint/Teal Box with Intro Text */}
                <div className="sm:w-[54%] p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#f0fdfa] to-[#e6fffa] border-t sm:border-t-0 sm:border-l border-[#0a7a8c]/15">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={13} className="text-[#0a7a8c]" />
                      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0a7a8c]">
                        Roysons Portfolio
                      </span>
                    </div>
                    <p className="text-[12.5px] xl:text-[13px] text-[#042E3A]/85 leading-relaxed font-medium">
                      ROYSONS Pvt. Ltd. offers a comprehensive list of professional engineering, healthcare, technology, and infrastructure services for projects across public and private sectors. We serve our clients from early planning stages through project closeout.
                    </p>
                  </div>

                  <Link
                    href="/services"
                    onClick={closeServicesDropdown}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] xl:text-[12px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] hover:from-[#0a7a8c] hover:to-[#042E3A] px-4 py-2 rounded-[3px] transition-all self-start shadow-md hover:shadow-cyan-900/20 active:scale-95"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight size={13} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Vertical List of Services with Horizontal Dividers */}
              <div className="lg:col-span-5 flex flex-col justify-center py-1">
                <ul className="flex flex-col w-full space-y-1">
                  {SERVICES_DROPDOWN_ITEMS.map((item, index) => {
                    const isItemActive =
                      currentPath === item.path ||
                      (item.path !== "/services" && currentPath.startsWith(item.path));

                    return (
                      <li key={item.path + index} className="w-full">
                        <Link
                          href={item.path}
                          onClick={closeServicesDropdown}
                          className={`services-dropdown-link group/item flex items-center justify-between py-2.5 transition-all text-[#042E3A] hover:text-[#0a7a8c] ${
                            isItemActive ? "is-active" : ""
                          }`}
                          style={{
                            color: isItemActive ? "#0a7a8c" : "#042E3A",
                            WebkitTextFillColor: isItemActive ? "#0a7a8c" : "#042E3A",
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`services-item-title text-[14.5px] xl:text-[16px] font-bold tracking-[0.02em] transition-colors duration-300 ${
                                isItemActive
                                  ? "text-[#0a7a8c]"
                                  : "text-[#042E3A] group-hover/item:text-[#0a7a8c]"
                              }`}
                              style={{
                                color: isItemActive ? "#0a7a8c" : "#042E3A",
                                WebkitTextFillColor: isItemActive ? "#0a7a8c" : "#042E3A",
                              }}
                            >
                              {item.title}
                            </span>
                            {item.isOther && (
                              <span
                                className="services-item-badge text-[10.5px] uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/30 group-hover/item:bg-[#0a7a8c] group-hover/item:text-white transition-colors"
                                style={{
                                  color: "#0a7a8c",
                                  WebkitTextFillColor: "#0a7a8c",
                                }}
                              >
                                View All
                              </span>
                            )}
                          </div>

                          <ArrowRight
                            size={16}
                            strokeWidth={2.4}
                            className={`services-item-arrow transition-all duration-300 ${
                              isItemActive
                                ? "text-[#0a7a8c] translate-x-1.5"
                                : "text-[#042E3A]/60 group-hover/item:text-[#0a7a8c] group-hover/item:translate-x-1.5"
                            }`}
                            style={{
                              color: isItemActive ? "#0a7a8c" : "rgba(4, 46, 58, 0.65)",
                              stroke: isItemActive ? "#0a7a8c" : "rgba(4, 46, 58, 0.65)",
                            }}
                          />
                        </Link>

                        {/* Crisp horizontal divider line below each item */}
                        <div className="w-full h-[1px] bg-[#042E3A]/10 group-hover/item:bg-gradient-to-r group-hover/item:from-[#0a7a8c] group-hover/item:to-transparent transition-all duration-300" />
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden border-t bg-white max-h-[calc(100vh-64px)] overflow-y-auto shadow-xl"
            style={{ backgroundColor: "#ffffff", borderColor: "rgba(4,46,58,0.15)" }}
          >
            <ul className="flex flex-col py-1">
              {HEADER_ROUTES.map((route) => {
                if (route.path === "/services") {
                  return (
                    <li key={route.path} className="border-b border-[#042E3A]/10">
                      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
                        <Link
                          href="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="nav-text-link text-[13px] font-bold tracking-[0.16em] uppercase !text-[#042E3A] hover:!text-[#0a7a8c]"
                        >
                          {route.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                          className="p-1 text-[#042E3A] hover:text-[#0a7a8c] transition-colors"
                          aria-label="Toggle Services sub-menu"
                        >
                          <ChevronDown
                            size={18}
                            strokeWidth={2.4}
                            className={`transition-transform duration-300 ${
                              isMobileServicesOpen ? "rotate-180 text-[#0a7a8c]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable Mobile Services Sub-list */}
                      {isMobileServicesOpen && (
                        <div className="bg-[#042E3A]/5 px-4 sm:px-6 py-1 border-t border-[#042E3A]/5">
                          <ul className="flex flex-col space-y-0.5">
                            {SERVICES_DROPDOWN_ITEMS.map((item, idx) => (
                              <li key={idx} className="border-b border-[#042E3A]/10 last:border-b-0">
                                <Link
                                  href={item.path}
                                  onClick={() => {
                                    setIsMobileServicesOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="flex items-center justify-between py-2 text-[12px] font-semibold text-[#042E3A]/85 hover:text-[#0a7a8c] transition-colors"
                                >
                                  <span className={item.isOther ? "text-[#0a7a8c] font-black" : ""}>
                                    {item.title}
                                  </span>
                                  <ArrowRight size={13} className="text-[#0a7a8c]" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="nav-text-link block px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] font-bold tracking-[0.16em] uppercase !text-[#042E3A] hover:!text-[#0a7a8c] !bg-transparent hover:!bg-[#042E3A]/5 border-b border-[#042E3A]/10 transition-colors"
                      style={{
                        background: "none",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        border: "none",
                        borderBottom: "1px solid rgba(4,46,58,0.1)",
                        boxShadow: "none",
                      }}
                    >
                      {route.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>

      {/* Global Search Modal with Live Filtering */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
