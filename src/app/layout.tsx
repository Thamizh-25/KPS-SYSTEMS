import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/companyData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: companyData.seo.defaultTitle,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.seo.defaultDescription,
  keywords: [
    "electronic motherboard manufacturer",
    "transformer manufacturer",
    "industrial electronics",
    "power transformer",
    "OEM electronics",
    "custom motherboard",
    "industrial control board",
    "KPS Systems",
  ],
  openGraph: {
    type: "website",
    siteName: companyData.name,
    title: companyData.seo.defaultTitle,
    description: companyData.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#080808] text-[#F5F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}
