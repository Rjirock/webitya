import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Navbar from "@/components/Navbar";
import FooterEl from "@/components/FooterEl";
import { WhatsAppOutlined, PhoneOutlined } from "@ant-design/icons";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // Import Next.js Script component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "W E B I T Y A",
  description: "Webitya Web Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6282388187810840"
          crossOrigin="anonymous"
          strategy="afterInteractive" // Ensures it loads after page content
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <FooterEl />
        
        {/* Floating Icons */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          <a
            href="https://wa.me/9693245941"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-2 rounded text-white shadow-lg hover:bg-gray-800 w-10 h-10 flex items-center justify-center"
          >
            <WhatsAppOutlined style={{ fontSize: "20px" }} />
          </a>
          <a
            href="tel:9693245941"
            className="bg-black p-2 rounded text-white shadow-lg hover:bg-gray-800 w-10 h-10 flex items-center justify-center"
          >
            <PhoneOutlined style={{ fontSize: "20px" }} />
          </a>
        </div>
      </body>
    </html>
  );
}
