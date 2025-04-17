"use client";

import { usePathname } from "next/navigation";
import Header from "@//components/header";
import Footer from "@//components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Conditionally render Header and Footer based on the route
  const showHeaderFooter = pathname !== '/' 
                            && !pathname.includes('about_us')
                            && !pathname.includes('contact_us')
                            && !pathname.includes('products_and_services')
  return (
    <>
      {showHeaderFooter && <Header />}
      <main className="flex-grow">{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
}
