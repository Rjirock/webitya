import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEOConfig from "../components/SEO"; // ✅ Import the Client Component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WEBITYA",
  description: "Webitya Web Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SEOConfig /> {/* ✅ Now `next-seo` works inside a Client Component */}
        {children}
      </body>
    </html>
  );
}
