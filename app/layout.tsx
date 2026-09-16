import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/home/Navbar";

import { Manrope } from "next/font/google";

import { Inter, Sora } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import MobileBottomDiv from "@/component/common/MobileBottomDiv";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Space_Grotesk } from "next/font/google";
import { SearchProvider } from "@/context/SearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});


const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aavoride.in"),

  title: {
    default:
      "Floent | Industries solutions",
    template: "%s | Floent",
  },

  authors: [
    {
      name: "Floent"
    },
  ],

  creator: "AAVORide",

  publisher: "AAVORide",

  category: "Transportation",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
  },

  openGraph: {

    locale: "en_IN",

    type: "website",


  },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  if (typeof window !== 'undefined'){
    return null
  }
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sora.variable} ${hankenGrotesk.variable} ${manrope.variable} ${plusJakarta.variable} ${jetBrainsMono.variable} ${space.variable} h-full antialiased`}
    >

      <body className={`${inter.className} min-h-full flex flex-col`}>
        <SearchProvider>
          <Navbar />
          {children}
          <MobileBottomDiv />
        </SearchProvider>
      </body>
    </html>
  );
}
