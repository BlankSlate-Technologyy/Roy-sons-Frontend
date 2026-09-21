"use client";

import Link from "next/link";
import Image from "next/image";

export default function RoysonsPortalButton({ className = "" }) {
  return (
    <Link
      href="/portal"
      aria-label="ROYSONS Ecosystem Portal"
      title="ROYSONS Ecosystem Portal (Trust & Holdings)"
      className={`group relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg border border-[#042E3A]/15 bg-white hover:border-[#0a7a8c] hover:bg-[#0a7a8c]/5 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer flex-shrink-0 active:scale-95 ${className}`}
    >
      <div className="relative w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Image
          src="/logos/roysons-r-icon.png"
          alt="ROYSONS Ecosystem Portal"
          width={24}
          height={24}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </Link>
  );
}
