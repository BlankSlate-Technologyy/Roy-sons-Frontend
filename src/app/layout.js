import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://roysons.org"),
  title: {
    default: "Roy Sons Pvt. Ltd. – Building A Better Tomorrow",
    template: "%s | Roy Sons Pvt. Ltd.",
  },
  description:
    "Roy Sons is a premier diversified conglomerate delivering excellence across civil infrastructure, healthcare engineering, agro-allied industries, hospitality, energy, and corporate consultancy.",
  keywords: [
    "Roy Sons",
    "Roy Sons Pvt Ltd",
    "Construction Conglomerate",
    "Hospital Engineering",
    "Healthcare Procurement",
    "Infrastructure Development",
    "Pakistan Diversified Group",
    "Industrial Manufacturing",
  ],
  authors: [{ name: "Roy Sons Group" }],
  creator: "Roy Sons Group",
  publisher: "Roy Sons Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roysons.org",
    title: "Roy Sons Pvt. Ltd. – Building A Better Tomorrow",
    description:
      "A diversified multi-sector powerhouse delivering excellence across civil contracting, healthcare engineering, agro-allied ventures, and specialized manufacturing.",
    siteName: "Roy Sons Group",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Roy Sons Pvt. Ltd. Corporate Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Sons Pvt. Ltd. – Building A Better Tomorrow",
    description:
      "Diversified conglomerate delivering excellence across civil infrastructure, healthcare, energy, and engineering.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-[#111]">
        {children}
      </body>
    </html>
  );
}
