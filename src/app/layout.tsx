import type { Metadata } from "next";
import { DM_Serif_Display, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif-alt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adverzeo - The Agency Behind Millions of Views",
  description: "Our impeccable strategy helps brands go viral, achieving millions of views and global recognition. 500M+ Views, 150+ Brands, 95% Retention.",
  keywords: ["marketing agency", "viral marketing", "brand strategy", "digital marketing", "social media marketing"],
  authors: [{ name: "Adverzeo" }],
  creator: "Adverzeo",
  publisher: "Adverzeo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adverzeo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adverzeo - The Agency Behind Millions of Views",
    description: "Our impeccable strategy helps brands go viral, achieving millions of views and global recognition.",
    url: "https://adverzeo.com",
    siteName: "Adverzeo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adverzeo - The Agency Behind Millions of Views",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverzeo - The Agency Behind Millions of Views",
    description: "Our impeccable strategy helps brands go viral, achieving millions of views and global recognition.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${cormorantGaramond.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#e33c25" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
