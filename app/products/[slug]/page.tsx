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
import React from 'react'


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: title_description.get(slug)[0],
    description: title_description.get(slug)[1],
    keywords: [
      title_description.get(slug)[0],
      "exhuast fan",
      "exhuast fan manufacturer",
      "air circulator fan",//100+
      "air circulator",//100+
      "centrifugal exhaust fan",//100+
      "centrifugal fans",//100+
      "industrial fans",//100+
      "hvls fan",
      "hvls fan manufacturer",
      "warehouse ceiling fan",
      "warehouse fan",
    ],

    authors: [
      {
        
      },
    ],

    creator: "Floent",

    publisher: "Floent",

    alternates: {
      canonical: `https://vkpclfan.vercel.app/products/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

     openGraph: {

      url: `https://www.aavoride.in/blog/${slug}`,

      siteName: "AAVORide",

      locale: "en_IN",

      type: "article",

      images: [
        {
          url: "https://www.aavoride.in/blog1.jpg",
          width: 1200,
          height: 630,
          alt: title_description.get(slug)[0],
        },
      ],
    },

  };
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main>
      <DetailLanding slug={slug} />
      <WhyFloent />
      <Manufacturer title={slug} />
      <BenefitFan title={slug} />
      <WhyChooseHVLS title={slug} />
      <Specifications />
      <ApplicationsOfFan title={slug} />
      <Reviews />
      <Faq />
      <Industryworkspace />
      <Footer />
    </main>
  )
}
