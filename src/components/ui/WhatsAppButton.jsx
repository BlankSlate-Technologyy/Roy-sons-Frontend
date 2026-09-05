"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/923047527498?text=Hello%20Roy%20Sons%20Pvt.%20Ltd.,%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-10 pointer-events-none scale-90"
      }`}
      aria-label="Contact via WhatsApp"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Roy Sons Pvt. Ltd."
        className="whatsapp-float-btn group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(10,122,140,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)",
        }}
      >
        {/* Soft pulse glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.996.879 2.806.879 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.768-5.767-5.768zm0 10.455c-.752 0-1.637-.253-2.361-.692l-.169-.101-1.573.413.42-1.534-.112-.178c-.512-.816-.782-1.603-.782-2.6 0-2.586 2.104-4.69 4.69-4.69 2.586 0 4.69 2.104 4.69 4.69 0 2.587-2.104 4.69-4.69 4.69zm2.845-3.52c-.156-.078-.923-.456-1.066-.508-.143-.052-.247-.078-.351.078-.104.156-.403.508-.494.612-.091.104-.182.117-.338.039-.156-.078-.658-.242-1.253-.772-.463-.413-.775-.923-.866-1.079-.091-.156-.01-.24.068-.318.07-.07.156-.182.234-.273.078-.091.104-.156.156-.26.052-.104.026-.195-.013-.273-.039-.078-.351-.845-.481-1.157-.127-.302-.256-.26-.351-.265l-.3-.005c-.104 0-.273.039-.416.195-.143.156-.546.533-.546 1.3 0 .767.559 1.508.637 1.612.078.104 1.1 1.68 2.665 2.355.372.161.663.257.889.329.374.119.714.102.983.062.3-.045.923-.377 1.053-.741.13-.364.13-.676.091-.741-.039-.065-.143-.104-.299-.182z" />
        </svg>

        {/* Hover Tooltip Badge */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 bg-[#042E3A] text-white text-[12px] font-bold rounded-md whitespace-nowrap shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-white/10 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
