export default function BrandLogo({ isDarkTheme = false, showSubtitle = false, customStyles = "" }) {
  const primaryColor = isDarkTheme ? "text-white" : "text-neutral-900";
  const secondaryColor = isDarkTheme ? "text-neutral-400" : "text-neutral-500";
  const badgeColor = isDarkTheme ? "#FFFFFF" : "#000000";
  const letterColor = isDarkTheme ? "#000000" : "#FFFFFF";

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none transition-opacity duration-200 hover:opacity-95 ${customStyles}`}
      aria-label="Roy Sons Corporate Identity"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.03]"
      >
        <circle cx="50" cy="50" r="46" fill={badgeColor} />
        <text
          x="35"
          y="63"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="bold"
          fontSize="44"
          fill={letterColor}
          textAnchor="middle"
        >
          R
        </text>
        <text
          x="62"
          y="67"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="bold"
          fontSize="44"
          fill={letterColor}
          textAnchor="middle"
        >
          S
        </text>
      </svg>

      <div className="flex flex-col tracking-wider">
        <span className={`text-[19px] font-bold tracking-[0.16em] uppercase font-serif leading-none ${primaryColor}`}>
          ROY SONS
        </span>
        {showSubtitle && (
          <span className={`text-[7px] tracking-[0.26em] uppercase font-bold mt-1 ${secondaryColor}`}>
            Building A Better Tomorrow
          </span>
        )}
      </div>
    </div>
  );
}
