import Image from "next/image";

export default function BrandLogo({ isDarkTheme = false, showSubtitle = false, customStyles = "" }) {
  return (
    <div 
      className={`inline-flex items-center select-none transition-opacity duration-200 hover:opacity-95 ${customStyles}`}
      aria-label="Roy Sons Corporate Identity"
    >
      <Image
        src="/Roysons Logo-02.png"
        alt="Roy Sons Logo"
        width={240}
        height={60}
        className="w-auto h-10 md:h-12 lg:h-14 object-contain"
        priority
      />
    </div>
  );
}
