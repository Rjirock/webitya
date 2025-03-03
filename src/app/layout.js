import { Geist, Geist_Mono } from "next/font/google";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config"; // Importing SEO Config
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔹 Viewport & PWA Config */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />

        {/* 🔹 Default SEO Configuration */}
        <DefaultSeo {...SEO} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
