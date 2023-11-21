import Navbar from "@/components/Navbar";
import ThemeProvider from "./context";
import "./globals.css";
import { Alexandria } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Alexandria({ subsets: ["latin"] });

export const metadata = {
  title: "أول بأول- ناقل اخباري",
  description:
    "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
  icons: {
    icon: [
      { url: "https://www.awalbawl.online/ios/512.png" },
      new URL(
        "https://www.awalbawl.online/ios/512.png",
        "http://localhost:3000"
      ),
    ],
  },
  metadataBase: new URL("https://www.awalbawl.online"),
  title: "أول بأول- ناقل اخباري",
  description:
    "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
  canonical: `https://www.awalbawl.online/`,
  openGraph: {
    title: "أول بأول- ناقل اخباري",
    description:
      "موقع اول باول الاخباري يقدم احدث واهم اخبار مصر على مدار اليوم كما نقدم اهم اخبار الرياضة والفن والاقتصاد والحوادث",
    siteName: "اول بأول",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
