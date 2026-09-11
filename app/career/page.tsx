import CareerLanding from '@/component/career/CareerLanding'
import JobPositions from '@/component/career/JobPositions'
import PerfectFit from '@/component/career/PerfectFit'
import WhyAeroCore from '@/component/career/WhyAeroCore'
import Footer from '@/component/common/Footer'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import React from 'react'

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
