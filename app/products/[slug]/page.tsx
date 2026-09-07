import DetailLanding from '@/component/products/DetailLanding'
import React from 'react'

export default async function page({ params }:{params: Promise<{ slug: string }>;}) {
    const {slug} = await params;
  return (
    <div className='bg-[#F8F9FA]'>
        <DetailLanding slug={slug}/>
    </div>
  )
}
