import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetroGear | Global Petroleum Equipment",
  description: "Buy and sell professional petroleum extraction equipment globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 pt-20">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
