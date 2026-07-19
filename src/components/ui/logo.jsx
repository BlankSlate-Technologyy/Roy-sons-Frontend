import Image from "next/image";

export default function BrandLogo({ isDarkTheme = false, showSubtitle = false, customStyles = "" }) {
  return (
    <div
      className={`inline-flex items-center select-none transition-opacity duration-200 hover:opacity-95 ${customStyles}`}
      aria-label="Roy Sons Corporate Identity"
    >
      <Image
        src="/Roysons Logo.jpeg"
        alt="Roy Sons Logo"
        width={320}
        height={80}
        className="w-auto h-14 md:h-16 lg:h-20 object-contain"
        priority
      />
    </div>
  );
}
