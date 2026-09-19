import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villa Serenity | Airbnb Clone",
  description: "Pixel-fidelity clone of an Airbnb listing page — take-home assignment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#222222]">{children}</body>
    </html>
  );
}
