import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionEnhancer } from "./components/MotionEnhancer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATW Montage | Complete woningrenovatie",
  description:
    "ATW Montage verzorgt complete woningrenovaties door heel Nederland. VCA-gecertificeerd vakwerk, duidelijke afspraken en één vast aanspreekpunt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}><MotionEnhancer />{children}</body>
    </html>
  );
}
