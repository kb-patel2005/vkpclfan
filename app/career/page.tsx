import CareerLanding from '@/component/career/CareerLanding'
import JobPositions from '@/component/career/JobPositions'
import PerfectFit from '@/component/career/PerfectFit'
import WhyAeroCore from '@/component/career/WhyAeroCore'
import Footer from '@/component/common/Footer'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "Career",
  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/career",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function page() {
  return (
    <main className='bg-[#F8F9FA]'>
      <CareerLanding />
      <WhyAeroCore />
      <JobPositions />
      <PerfectFit />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
