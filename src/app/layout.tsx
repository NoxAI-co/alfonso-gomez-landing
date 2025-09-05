import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Pote",
  description: "Édgar 'El pote' Gómez - Senado",
  icons: {
    icon: [
      { url: '/img/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/img/logo.png',
    apple: '/img/logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-white min-h-screen w-full">
      <head>
        <link rel="icon" href="/img/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/img/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#343598" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className={inter.className + " bg-white text-red-700 min-h-screen w-full"}>
        <Navbar />
        <main className="w-full max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
          {children}
        </main>
        <Footer />
        <PopupWidget />
      </body>
    </html>
  );
}
