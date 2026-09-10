'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

const links = [
    "ALL INSIGHTS",
    "HVLS TECHNOLOGY",
    "FLUID DYNAMICS",
    "MAINTENANCE PROTOCOLS",
    "CASE STUDIES"
]

interface item {
    tag: string
    title: string
    description: string
    linkname: string
    image: string
}

const items: item[] = [
    {
        tag: "MATERIALS",
        title: "Mitigating Corrosive Fumes in Heavy Manufacturing",
        description:
            "An analysis of blade material fatigue and structural integrity when exposed to highly acidic ambient environments over a 10,000-hour operational cycle.",
        linkname: "VIEW SCHEMATIC",
        image: '/blog1.jpg'
    },
    {
        tag: "SYSTEMS",
        title: "Calculating ROI on VFD Integration",
        description:
            "Variable Frequency Drives represent a significant initial capital expenditure. We break down the mathematical models to prove the long-term thermodynamic efficiencies.",
        linkname: "ACCESS DATA",
        image: '/blog2.jpg'
    },
    {
        tag: "MAINTENANCE",
        title: "Predictive Maintenance via Vibration Telemetry",
        description:
            "Utilizing continuous spectral analysis to detect bearing failure vectors before critical operational shutdown occurs.",
        linkname: "READ LOG",
        image: '/blog3.jpg'
    },
]


export default function Articles() {

    const [active, setActive] = useState("ALL INSIGHTS");

    return (
        <section className='mb-20'>
            <div className="w-full bg-white ">
                <div
                    className="max-w-7xl mx-auto flex items-center gap-8 my-10 py-4 px-5 lg:px-0 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {
                        links.map((e: string) =>
                        (
                            <Link
                                href="/blog"
                                onClick={() => setActive(e)}
                                className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === e ? "border-b-2 border-[#09273A] pb-2" : ""
                                    } `}
                            >
                                {e}
                            </Link>
                        )
                        )
                    }

                </div>
            </div>
            <div className='relative flex h-[420px] justify-items-start items-center mt-6 w-full max-w-7xl mx-auto'>
                <div className='mx-auto bg-[#F1F5F9]  absolute max-w-[600px] flex flex-col gap-6 p-8 ml-30'>
                    <p className='flex gap-4 text-[13px] leading-4 font-medium'>
                        <span className='text-[#0066FF]'>01 / FEATURED STORY</span>
                        <span>|</span>
                        <span className='text-[#475569]'>HVLS TECHNOLOGY</span>
                    </p>
                    <h3 className='font-monrope font-bold text-5xl tracking-[-0.96px] leading-[52px] text-[#00132C]'>The Fluid Dynamics of
                        Modern HVLS Systems
                        in Logistics Hubs
                    </h3>
                    <p className='text-[13px] leading-4 font-bold text-[#0066FF]'>READ PROTOCOL →</p>
                </div>
                <Image
                    src="/blogImage.jpg"
                    alt="blog image"
                    height={400}
                    width={400}
                    className='mx-auto w-full max-w-6xl h-[100%]' />
            </div>
            <div className='flex flex-col gap-32'>
            {items.map((e: item, idx: number) => (
                <div className={`flex flex-wrap items-center ${ idx %2 == 0 ? "flex-row":"flex-row-reverse"} w-full max-w-7xl mx-auto mt-10`} key={idx}>

                    <div className='flex flex-col gap-6 w-1/2'>
                        <div className='flex gap-4 items-center'>
                            <span className='text-[#5D5D5D] text-[13px] leading-4 font-medium'>0{idx+2}</span>
                            <span
                                className="w-fit font-bold text-[12px] leading-[16px] tracking-[1.2px] align-middle text-[#09273A] bg-[#09273A0D] py-1 px-2"
                            >
                                {e.tag}
                            </span>
                        </div>
                        <h3
                            className="font-manrope font-semibold text-[24px] leading-[32px] tracking-[0px] align-middle text-[#00132C]"
                        >
                            {e.title}
                        </h3>

                        <p
                            className="font-inter font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#5D5D5D]"
                        >
                            {e.description}
                        </p>
                        <span
                            className="font-inter font-medium text-[13px] leading-[16px] tracking-[0px] align-middle uppercase underline text-[#09273A]"
                        >
                            {e.linkname}
                        </span>
                    </div>
                    <div className='w-[50%] '>
                        <div className='w-fit p-2 border border-[#CBD5E1] mx-auto '>
                            <Image width={450} height={450} alt='blog images' src={e.image} className='border border-[#0066FF33]' />
                        </div>
                    </div>
                </div>
            ))}
            </div>

        </section>
    )
}
