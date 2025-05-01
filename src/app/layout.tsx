import type { Metadata } from "next";
import Chatbot from '@//components/chatbot'
import ClientLayout from "./ClientLayout"; // Import the client-side component
import "./globals.css";

export const metadata: Metadata = {
  title: "Alver Power Systems | Electrical, Solar & Manufacturing Experts",
  description: `Alver Power System Ltd, a company that offers electrical 
             consulting and services and is focused on offering full EPC services, including engineering, 
             procurement, construction, operation, and maintenance, for electrical equipment in Kenya and 
             Africa at large.`,
  keywords: [
    "Alver Power Systems",
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
  themeColor: "#ffffff",
  openGraph: {
    title: "Alver Power Systems | Powering Innovation, Ensuring Reliability",
    description: "Leading provider of electrical and solar energy solutions including switchboard manufacturing, solar installations, and custom fabrication services.",
    url: "https://alverpower.com",
    siteName: "Alver Power Systems",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentUser = {
    id: 'abc123-user-id', 
  }
  return (
    <html lang="en">
      <head>
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
        {/* Wrap children with ClientLayout to manage client-side rendering */}
        <ClientLayout>{children}</ClientLayout>
        <Chatbot userId={currentUser.id} />
      </body>
    </html>
  );
}
