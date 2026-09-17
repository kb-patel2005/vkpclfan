import Articles from '@/component/blog/Articles'
import BlogLanding from '@/component/blog/BlogLanding'
import CaseStudy from '@/component/blog/CaseStudy'
import Footer from '@/component/common/Footer'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "blogs on industrial fans",
  description: "Engineering insights, industrial intelligence and real-world knowledge shaping the future of ventilation.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/blog",
  },
  keywords: [
    "Floent Technologies",
    "hvls fan fetures",//1000
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
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function page() {
  return (
    <main className='bg-[#F8F9FA]'>
      <BlogLanding />
      <Articles />
      <CaseStudy />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
