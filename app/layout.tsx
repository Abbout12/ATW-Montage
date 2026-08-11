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
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}><MotionEnhancer />{children}</body>
    </html>
  );
}
