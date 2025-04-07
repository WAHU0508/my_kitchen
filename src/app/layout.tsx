import type { Metadata } from "next";
import { ClientLayout } from "./ClientLayout"; // Import the client-side component
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
  return (
    <html lang="en">
      
        <ClientLayout>
          <body>{children}</body>
        </ClientLayout>
      
    </html>
  );
}
