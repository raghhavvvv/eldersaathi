// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Import Montserrat from next/font/google
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 2. Configure the Montserrat font
// We're including multiple weights for regular and bold text
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '700'], // 400 is normal, 700 is bold
});

export const metadata: Metadata = {
  title: "ElderSaathi - Your Partner in Senior Wellness",
  description: "Compassionate elder care meets innovative support for families living away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font's className to the body tag */}
      <body className={montserrat.className}>
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}