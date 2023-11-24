"use client";
import Navbar from "@/components/Navbar";
import ThemeProvider from "./context";
import "./globals.css";
import { Alexandria } from "next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
const inter = Alexandria({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);
  return (
    <html lang="ar">
      <body
        className={
          isDarkMode ? `${inter.className} dark-mode` : inter.className
        }
      >
        <ThemeProvider>
          <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
