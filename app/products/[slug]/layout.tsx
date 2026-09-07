import Footer from '@/component/common/Footer';
import { Faq } from '@/component/home/Faq';
import Industryworkspace from '@/component/home/Industryworkspace';
import Reviews from '@/component/home/Reviews';
import Manufacturer from '@/component/products/Manufacturer';
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
            <Reviews />
            <Faq />
            <Industryworkspace />
            <Footer />
        </>
    );
}
