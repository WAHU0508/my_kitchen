'use client'
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alver Power Systems",
  description: "Alver Power systems Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route

  // Conditionally render Header and Footer based on the route
  const showHeaderFooter = pathname !== "/about_us";
  
  return (
    <html lang="en">
      <body>
        {showHeaderFooter && <Header />} {/* Render Header only if not on About Us page */}
        <main className="flex-grow">{children}</main>
        {showHeaderFooter && <Footer />} {/* Render Footer only if not on About Us page */}
      </body>
    </html>
  );
}
