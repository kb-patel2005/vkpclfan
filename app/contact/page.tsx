import Footer from '@/component/common/Footer'
import ContactDetails from '@/component/contact/ContactDetails'
import ContactLanding from '@/component/contact/ContactLanding'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact",
  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
}

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
