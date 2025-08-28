import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KitchenTik | Kitchen Appliances Reviews, Recipes & Tips",
  description: `KitchenTik is your go-to source for kitchen inspiration. 
                Discover unbiased reviews of kitchen appliances, practical cooking tips, 
                and delicious recipes to make your cooking easier and more enjoyable.`,
  keywords: [
    "KitchenTik",
    "kitchen blog",
    "kitchen appliances reviews",
    "best kitchen appliances",
    "cooking tips",
    "recipes",
    "kitchen gadgets",
    "cookware",
    "kitchen hacks",
    "healthy recipes",
    "kitchen inspiration",
    "home cooking"
  ],
  authors: [{ name: "KitchenTik" }],
  creator: "KitchenTik Team",
  openGraph: {
    title: "KitchenTik | Your Kitchen, Simplified",
    description: "KitchenTik helps you find the best kitchen appliances, discover new recipes, and explore helpful kitchen hacks to upgrade your cooking experience.",
    url: "https://kitchentik.com",
    siteName: "KitchenTik",
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
        <link rel="canonical" href="https://kitchentik.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KitchenTik",
              "url": "https://kitchentik.com",
              "logo": "https://kitchentik.com/logo.jpg"
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
