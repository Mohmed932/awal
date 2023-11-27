"use client";
import Navbar from "@/components/Navbar";
import ThemeProvider from "./context";
import "./globals.css";
import { Alexandria } from "next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Script from "next/script";
const inter = Alexandria({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);
  return (
    <html lang="ar">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6129624173795490"
          crossorigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="i2ArtRmQilMpo20id0ITjX35B_r_1CfQ10adVpq-Hbk"
        />
      </head>
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
