"use client"; // Ensure this is a client-side component

import { usePathname } from "next/navigation"; // Import usePathname
import Header from "./components/header";
import Footer from "./components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Conditionally render Header and Footer based on the route
  const showHeaderFooter = pathname.includes('about_us');

  return (
    <>
      {showHeaderFooter && <Header />} {/* Render Header only if not on About Us page */}
      <main className="flex-grow">{children}</main>
      {showHeaderFooter && <Footer />} {/* Render Footer only if not on About Us page */}
    </>
  );
}
