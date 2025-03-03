import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katrina Finney - Portfolio",
  description: "Full-Stack Software Engineer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}
      <Analytics />
      </body>
    </html>
  );
}
