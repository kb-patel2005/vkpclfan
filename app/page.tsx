import { Advantage } from "@/component/home/Advantage";
import { Faq } from "@/component/home/Faq";
import Features from "@/component/home/Feature";
import Floentfan from "@/component/home/Floentfan";
import Footer from "@/component/home/Footer";
import HorizontalScroller from "@/component/home/HorizontalScroller";
import Industryworkspace from "@/component/home/Industryworkspace";
import Landing from "@/component/home/Landing";
import OurProducts from "@/component/home/OurProducts";
import Reviews from "@/component/home/Reviews";
import Workflow from "@/component/home/Workflow";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landing/>
      <HorizontalScroller/>
      <Features/>
      <OurProducts/>
      <Workflow/>
      <Advantage/>
      <Floentfan/>
      
      <Reviews/>
      <Faq/>
      <Industryworkspace/>
      <Footer/>
    </main>

  );
}
