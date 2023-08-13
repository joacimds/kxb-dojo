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
        <header className="h-12 lg:h-24 bg-digital-black text-digital-white">
          <Link href="/" className="text-4xl lg:text-7xl">
            KXB Dojo
          </Link>
          <Link href="/events" className="text-xl lg:text-4xl">
            Arrangementer
          </Link>
        </header>
        <main className="h-screen bg-sand pt-4 lg:pt-8">{children}</main>
      </body>
    </html>
  );
}
