import Footer from '@/component/common/Footer'
import GalleryImages from '@/component/gallery/GalleryImages'
import GalleryLanding from '@/component/gallery/GalleryLanding'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import React from 'react'

export default function page() {
  return (
    <div>
      <GalleryLanding />
      <GalleryImages />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </div>
  )
}
