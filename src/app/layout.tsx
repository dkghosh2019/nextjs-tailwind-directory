// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Next.js Core Dashboard Hub",
  description: "A professional portfolio showcasing modern React patterns and server layouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen bg-gray-50 flex flex-col font-sans`}>
        
        {/* Persistent Global Header Navigation */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-black text-xl text-gray-900 tracking-tight hover:opacity-80 transition-opacity">
              ⚡ DevRegistry
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                Projects
              </Link>
            </nav>
          </div>
        </header>

        {/* Dynamic Inner Page Slots */}
        <div className="flex-1">
          {children}
        </div>

      </body>
    </html>
  );
}
