import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from './Components/Header'; // Import komponen Header

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'], // Pilih ketebalan font yang Anda butuhkan
});

export const metadata: Metadata = {
  title: "Yusnan Yunus",
  description: "Welcome to my profile",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Header /> {/* Tambahkan komponen Header di sini */}
        <main>
          {children} {/* Konten halaman akan dirender di sini */}
        </main>
      </body>
    </html>
  );
}
