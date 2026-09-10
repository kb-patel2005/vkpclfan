import Footer from '@/component/common/Footer'
import ContactDetails from '@/component/contact/ContactDetails'
import ContactLanding from '@/component/contact/ContactLanding'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import React from 'react'

export default function page() {
  return (
    <main className='bg-[#F8F9FA]'>
      <ContactLanding />
      <ContactDetails />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
