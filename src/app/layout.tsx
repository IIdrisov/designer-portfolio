import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { YandexMetrika } from "@/components/YandexMetrika";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivan Idrisov | Product Designer",
  description:
    "Senior Product Designer with experience in fintech, crypto and payments. Ex-Yandex, Alpha One, XPlace.",
  icons: {
    icon: "/images/fav.png",
    apple: "/images/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
