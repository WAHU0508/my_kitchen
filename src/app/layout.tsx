import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alver Power Systems | Electrical, Solar & Manufacturing Experts",
  description: `Alver Power System Ltd, a company that offers electrical 
             consulting and services and is focused on offering full EPC services, including engineering, 
             procurement, construction, operation, and maintenance, for electrical equipment in Kenya and 
             Africa at large.`,
  keywords: [
    "Alver Power Systems",
    "Alver Power",
    "Alver",
    "switchboard manufacturing",
    "CNC machining",
    "laser cutting",
    "solar energy solutions",
    "electrical installations",
    "Kenya",
    "East Africa",
    "renewable energy",
    "solar PV systems",
    "EPC services"
  ],
  authors: [{ name: "Alver Power Systems Ltd" }],
  creator: "Alver Power Systems",
  openGraph: {
    title: "Alver Power Systems | Powering Innovation, Ensuring Reliability",
    description: "Leading provider of electrical and solar energy solutions including switchboard manufacturing, solar installations, and custom fabrication services.",
    url: "https://alverpower.com",
    siteName: "Alver Power Systems",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://alverpower.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alver Power Systems",
              "url": "https://alverpower.com",
              "logo": "https://alverpower.com/logo.jpg"
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
