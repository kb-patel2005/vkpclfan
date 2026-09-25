
import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Navbar from "@/component/home/Navbar";

import { Manrope } from "next/font/google";

import { Inter, Sora } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import MobileBottomDiv from "@/component/common/MobileBottomDiv";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Space_Grotesk } from "next/font/google";
import { SearchProvider } from "@/context/SearchContext";
import { GalleryProvider } from "@/context/GalleryContext";



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
      "Floent | Airflow Industries",
    template: "%s | Floent",
  },

  authors: [
    {
      name: "Floent"
    },
  ],

  creator: "Floent",

  publisher: "floent",

  icons: {
    icon: [
      { url: "/floent.png", type: "image/png" },
    ],

    apple: "/floent.png",
  },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  if (typeof window !== 'undefined') {
    return null
  }
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sora.variable} ${hankenGrotesk.variable} ${manrope.variable} ${plusJakarta.variable} ${jetBrainsMono.variable} ${space.variable} h-full antialiased`}
      suppressHydrationWarning
    >

      <body className={`${inter.className} min-h-full flex flex-col`} suppressHydrationWarning>
        <GalleryProvider>
          <SearchProvider>
            <Navbar />
            {children}
            <MobileBottomDiv />
          </SearchProvider>
        </GalleryProvider>
      </body>
    </html>
  );
}
