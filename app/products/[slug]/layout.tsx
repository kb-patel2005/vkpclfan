import Footer from '@/component/common/Footer';
import { Faq } from '@/component/home/Faq';
import Industryworkspace from '@/component/home/Industryworkspace';
import Reviews from '@/component/home/Reviews';
import ApplicationsOfFan from '@/component/products/ApplicationsOfFan';
import BenefitFan from '@/component/products/BenefitFan';
import Manufacturer from '@/component/products/Manufacturer';
import { Specifications } from '@/component/products/Specifications';
import WhyChooseHVLS from '@/component/products/WhyChooseHVLS';
import React from 'react'

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className="flex-grow">{children}</main>
            <Manufacturer/>
            <BenefitFan/>
            <WhyChooseHVLS/>
            <Specifications/>
            <ApplicationsOfFan/>
            <Reviews />
            <Faq />
            <Industryworkspace />
            <Footer />
        </>
    );
}
