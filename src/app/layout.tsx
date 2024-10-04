import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Xander Billa",
  description:
    "Explore Xander Billa's portfolio featuring a curated selection of innovative projects across my skills. From Cloud to DevOps, showcasing expertise, creativity, and professional excellence.",
  keywords:
    "xander billa, portfolio, projects, showcases, technology, design, creative solutions, case studies, innovation, demos, project details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Navbar />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}
