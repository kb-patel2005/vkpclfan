import AboutCounters from '@/component/about/AboutCounters'
import AboutLanding from '@/component/about/AboutLanding'
import Engineering from '@/component/about/Engineering'
import LetsBuild from '@/component/about/LetsBuild'
import OurStory from '@/component/about/OurStory'
import Trust from '@/component/about/Trust'
import Footer from '@/component/common/Footer'
import React from 'react'

export default function page() {
  return (
    <div className='bg-[#F8F9FA]'>
        <AboutLanding/>
        <AboutCounters/>
        <Engineering/>
        <OurStory/>
        <Trust/>
        <LetsBuild/>
        <Footer/>
    </div>
  )
}
