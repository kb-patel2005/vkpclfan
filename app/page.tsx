import { Advantage } from "@/component/home/Advantage";
import { Faq } from "@/component/home/Faq";
import Features from "@/component/home/Feature";
import Floentfan from "@/component/home/Floentfan";
import Footer from "@/component/common/Footer";
import HorizontalScroller from "@/component/home/HorizontalScroller";
import Industryworkspace from "@/component/home/Industryworkspace";
import Landing from "@/component/home/Landing";
import OurProducts from "@/component/home/OurProducts";
import Reviews from "@/component/home/Reviews";
import Workflow from "@/component/home/Workflow";
import Image from "next/image";
import { Metadata } from "next/types";
import "@fortawesome/fontawesome-free/css/all.min.css";


export const metadata: Metadata = {
  title: "Industrial HVLS & Exhaust Fan",
  description: " Welcome to Floent, your trusted partner for industrial ventilation. We engineer high-performance HVLS fans and exhaust fans designed to maximize airflow, improve air quality, and lower energy costs in large facilities.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/",
  },
  keywords: [
    "Floent Technologies",
    "hvls fan",//1000
    "industrial fans",//1000
    "commercial fans",//>100
    "fan manufacturers",
    "centrifugal fans",
    "industrial fan manufacturers",//easy <100
    "ceiling fan manufacturers",//easy <100
    "warehouse fan",//100
    "big fan",
    "industrial fan",
    "exhuast fan",
    "electric fan",
    "window exhuast fan",
    "ventilation fan",
    "hvls ceiling fan",
    "fan manufacturers in Ahmedabad",
    "exhaust fan manufacturers in Ahmedabad",
    "hvls fan manufacturers in Ahmedabad",
  ]
}

export default function Home() {
  return (
    <main>
      <Landing />
      <HorizontalScroller />
      <Features />
      <OurProducts />
      <Workflow />
      <Advantage />
      <Floentfan />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>

  );
}
