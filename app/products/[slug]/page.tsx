import React from 'react'
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
import { title_description } from '@/Mockdata/Mockdata';
import { Metadata } from 'next/types';

interface Props {
  params: Promise<{ slug: string }>;
}

// app/products/[slug]/page.tsx

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return {
    title: title_description.get(slug)?.[0],
    description: title_description.get(slug)?.[1],
    alternates: {
      canonical: `https://vkpclfan.vercel.app/products/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page({ params }: Props) {
  
  const { slug } = await params;

  return (
    <main>
      <DetailLanding slug={slug} />
      <WhyFloent />
      <Manufacturer />
      <BenefitFan  />
      <WhyChooseHVLS  />
      <Specifications />
      <ApplicationsOfFan />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
