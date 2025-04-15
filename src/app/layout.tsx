import type { Metadata } from "next";
import Chatbot from './components/chatbot'
import ClientLayout from "./ClientLayout"; // Import the client-side component
import "./globals.css";

export const metadata: Metadata = {
  title: "Alver Power Systems",
  description: "Alver Power systems Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentUser = {
    id: 'abc123-user-id', 
  }
  return (
    <html lang="en">
      <body>
        {/* Wrap children with ClientLayout to manage client-side rendering */}
        <ClientLayout>{children}</ClientLayout>
        <Chatbot userId={currentUser.id} />
      </body>
    </html>
  );
}
