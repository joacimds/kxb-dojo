import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KXB Faggruppens Hjemmeside",
  description: "Hjemmesiden til KXB Faggruppen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto">
        <header>{/* TODO: Create navigational bar */}</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
