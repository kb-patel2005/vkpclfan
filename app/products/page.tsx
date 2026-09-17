import Footer from '@/component/common/Footer'
import { Advantage } from '@/component/home/Advantage'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import Workflow from '@/component/home/Workflow'
import Products from '@/component/products/Products'
import ProductsLanding from '@/component/products/ProductsLanding'
import { Metadata } from 'next/types'
import React from 'react'


export const metadata: Metadata = {
    title: "Industrial HVLS & Exhaust Fans Product",
    description: "Explore the complete Floent industrial fan lineup. Shop high-performance HVLS, exhaust, centrifugal, and air circulator fans engineered for massive airflow, heat relief, and heavy-duty ventilation.",
    alternates: {
        canonical: "https://vkpclfan.vercel.app/privacy",
    },
    keywords: [
        "commercial fans",
        "warehouse fans",
        "warehouse ceiling fan",
        "fan manufacturers",
        "exhuast fan",
        "hvls fans",
        "hvls ceiling fan",
        "exhuast fan manufacturer",
        "hvls fan manufacturer",
        "air circulator",//100+
        "ventilation fan",
        "industrial fans",
        "air circulator fan",//100+
        "centrifugal exhaust fan",//100+
        "centrifugal fans",//100+
        "industrial fans",//100+
    ],
    robots: {
        index: true,
        follow: true,
    },
}

export default function page() {
    return (
        <main className='bg-[#F8F9FA]'>
            <ProductsLanding />
            <Products />
            <Workflow />
            <Advantage />
            <Reviews />
            <Faq />
            <Industryworkspace />
            <Footer />
        </main>
    )
}
