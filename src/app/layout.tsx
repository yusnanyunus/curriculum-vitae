import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from './Components/Header'; // Import komponen Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusnan Yunus",
  description: "Welcome to my profile",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Header /> {/* Tambahkan komponen Header di sini */}
        <main>
          {children} {/* Konten halaman akan dirender di sini */}
        </main>
      </body>
    </html>
  );
}
