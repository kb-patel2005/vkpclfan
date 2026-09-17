import AboutCounters from '@/component/about/AboutCounters'
import AboutLanding from '@/component/about/AboutLanding'
import Engineering from '@/component/about/Engineering'
import LetsBuild from '@/component/about/LetsBuild'
import OurStory from '@/component/about/OurStory'
import Trust from '@/component/about/Trust'
import Footer from '@/component/common/Footer'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "About Industrial fans",
  description: "We design and manufacture heavy-duty industrial fans that keep critical operations running. Precision engineering meets unstoppable reliability.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/about",
  },
  keywords: [
    "commercial fans",
    "warehouse ceiling fans",
    "fan manufacturers",
    "exhuast fan",
    "hvls fans",
    "hvls ceiling fan",
    "hvls fan manufacturers",
    "ventilation fan for kitchen",
    "electric fan",
    "coolers",
    "exhuast fan for kitchen",
    "window exhuast fan",
    "centrifugal fans",
    "industrial fans",
    "ventilation fan",
    "fan manufacturers in Ahmedabad",
    "exhaust fan manufacturers in Ahmedabad",
    "hvls fan manufacturers in Ahmedabad",
  ]
}

export default function page() {
  return (
    <main className='bg-[#F8F9FA] '>
      <AboutLanding />
      <AboutCounters />
      <Engineering />
      <OurStory />
      <Trust />
      <LetsBuild />
      <Footer />
    </main>
  )
}
