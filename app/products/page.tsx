import Footer from '@/component/common/Footer'
import { Advantage } from '@/component/home/Advantage'
import { Faq } from '@/component/home/Faq'
import Industryworkspace from '@/component/home/Industryworkspace'
import Reviews from '@/component/home/Reviews'
import Workflow from '@/component/home/Workflow'
import Products from '@/component/products/Products'
import ProductsLanding from '@/component/products/ProductsLanding'
import React from 'react'

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
