import Footer from '@/component/common/Footer';
import { Faq } from '@/component/home/Faq';
import Industryworkspace from '@/component/home/Industryworkspace';
import Reviews from '@/component/home/Reviews';
import ApplicationsOfFan from '@/component/products/ApplicationsOfFan';
import BenefitFan from '@/component/products/BenefitFan';
import DetailLanding from '@/component/products/DetailLanding'
import Manufacturer from '@/component/products/Manufacturer';
import { Specifications } from '@/component/products/Specifications';
import WhyChooseHVLS from '@/component/products/WhyChooseHVLS';
import WhyFloent from '@/component/products/WhyFloent';
import React from 'react'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <DetailLanding slug={slug} />
      <WhyFloent />
      <Manufacturer title={slug}/>
      <BenefitFan title={slug}/>
      <WhyChooseHVLS title={slug} />
      <Specifications />
      <ApplicationsOfFan title={slug} />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </>
  )
}
