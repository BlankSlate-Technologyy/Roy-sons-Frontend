import Image from "next/image";

export default function BrandLogo({ isDarkTheme = false, showSubtitle = false, customStyles = "" }) {
  return (
    <div
      className={`inline-flex items-center select-none transition-opacity duration-200 hover:opacity-95 ${customStyles}`}
      aria-label="Roy Sons Corporate Identity"
    >
      <Image
        src="/logos/royson-hoding.png"
        alt="Roy Sons Logo"
        width={180}
        height={80}
        className="w-auto h-12 md:h-14 lg:h-14 object-contain"
        priority
      />
    </div>
  );
}
