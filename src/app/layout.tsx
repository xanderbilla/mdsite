import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/Layout/Footer";
import Navbar from "@/app/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Xander Billa",
  description:
    "A platform for my online presence, portfolio, blogs, projects, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans min-h-screen${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
