import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Roy Sons Pvt. Ltd. – Building A Better Tomorrow",
  description:
    "Roy Sons is a diversified conglomerate delivering excellence in construction, engineering, real estate, and multiple industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-[#111]">
        {children}
      </body>
    </html>
  );
}
