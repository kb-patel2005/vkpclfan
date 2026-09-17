import Footer from '@/component/common/Footer'
import Policy from '@/component/privacy-policy/Policy'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title:  "Privacy-policy",
  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",  
  alternates: {
    canonical: "https://vkpclfan.vercel.app/privacy",
  },
   robots: {
    index: true,
    follow: true,
  },
}

export default function page() {
  return (
    <main className='bg-[#F8F9FA]'>
        <Policy/>
        <Footer/>
    </main>
  )
}
