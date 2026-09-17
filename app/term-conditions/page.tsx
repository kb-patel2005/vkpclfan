import Footer from '@/component/common/Footer'
import Conditions from '@/component/terms-conditions/Conditions'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
  title: "terms-and-conditions",
  description: "Send one request and receive multiple quotes from verified drivers across India. Compare cab prices and book your preferred outstation ride today.",
  alternates: {
    canonical: "https://vkpclfan.vercel.app/term-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function page() {
  return (
    <main>
      <Conditions />
      <Footer />
    </main>
  )
}
