'use client'

import Footer from '@/component/common/Footer'
import GalleryImages from '@/component/gallery/GalleryImages'
import GalleryLanding from '@/component/gallery/GalleryLanding'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import React, { useState } from 'react'

export default function page() {

    const [active, setActive] = useState("ALL");
    const [isAll, setIsAll] = useState(true);
    

  return (
    <main>
      <GalleryLanding setActives={setActive} setIsAll={setIsAll}/>
      <GalleryImages active={active} isAll={isAll}/>
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
