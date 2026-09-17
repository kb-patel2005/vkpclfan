import Footer from '@/component/common/Footer'
import GalleryImages from '@/component/gallery/GalleryImages'
import GalleryLanding from '@/component/gallery/GalleryLanding'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import { useGallery } from '@/context/GalleryContext'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "Gallery",
  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/gallery",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function page() {

  return (  
    <main>
      <GalleryLanding />
      <GalleryImages />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
