import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI4Science Explorer — Open Problems Landscape",
  description:
    "Interactive map of ~65 open problems in AI for Science across biology, chemistry, physics, and mathematics. Explore by domain, methodology, scale, or our recommended hybrid view.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-[#faf9f7]`}
      >
        {children}
      </body>
    </html>
  );
}
